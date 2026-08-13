import { NextRequest } from "next/server";
import { sendChatbotLead, validateChatbotLead } from "@/lib/chatbot-lead";

export const runtime = "nodejs";

type ChatRole = "user" | "assistant";
interface ChatMessage {
  role: ChatRole;
  content: string;
}

interface ToolAccumulator {
  id: string;
  name: string;
  arguments: string;
}

const CALENDLY_URL = process.env.CALENDLY_URL?.trim() || "";
const RATE_LIMIT = 15;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const limits = new Map<string, number[]>();
const submittedLeadSessions = new Set<string>();

const SYSTEM_PROMPT = `You are Flux, the concise website assistant for Flux Media Creations.

Business facts:
- Flux provides Operating Intelligence for US service businesses by connecting website, search visibility, lead capture, CRM, customer follow-up, booking, automation, and business data.
- The five primary offers are Website Growth System, Lead Conversion System, Search Growth System, Business Automation System, and Complete Growth System.
- Healthcare is a specialization, not the only market. Flux also serves home services, legal and professional services, wellness, and other appointment-driven businesses.
- Pricing and timelines are scoped to confirmed requirements. Do not quote legacy starting prices or assume every client needs every capability.
- Founder: Gagan Deep.
- Email: contact@fluxmediacreations.com.
- WhatsApp: +91 6284957892.
- Booking link configured: ${CALENDLY_URL ? "yes" : "no"}.

Rules:
- Reply in 2–4 short sentences. This is a chat widget, not an essay.
- Never invent prices, timelines, project examples, guarantees, partnerships, or facts.
- If you do not know, say so and offer to pass the question to Gagan by gathering the visitor's name, email or phone, service interest, and a short summary.
- When a visitor shows real buying interest, naturally offer either booking a call or leaving contact details.
- Use offer_booking only after the visitor explicitly asks to book, schedule, arrange a demo, or speak on a call, and only when a booking link is configured. Otherwise gather contact details for a reply.
- Use submit_lead only after the visitor has explicitly supplied a real name, an email or phone, a service interest, and enough context for a useful summary.
- Never fabricate or infer a name, email, or phone. Ask for missing information instead.
- Never call submit_lead more than once in a conversation.
- Do not claim that a lead was sent unless the tool succeeds.`;

const tools = [
  {
    type: "function",
    function: {
      name: "submit_lead",
      description: "Email a qualified visitor's explicitly provided contact details to Gagan.",
      parameters: {
        type: "object",
        additionalProperties: false,
        required: ["name", "contact", "service_interest", "message_summary"],
        properties: {
          name: { type: "string", description: "The visitor's explicitly provided name." },
          contact: { type: "string", description: "The visitor's explicitly provided email address or phone number." },
          service_interest: { type: "string", description: "The Flux service the visitor is interested in." },
          message_summary: { type: "string", description: "A concise summary of the visitor's need." },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "offer_booking",
      description: "Show Flux's booking card only when the visitor explicitly asks to schedule a call, meeting, or demo.",
      parameters: {
        type: "object",
        additionalProperties: false,
        properties: {},
      },
    },
  },
];

function textEvent(content: string) {
  return JSON.stringify({ type: "text", content }) + "\n";
}

function isRateLimited(sessionId: string) {
  const now = Date.now();
  const recent = (limits.get(sessionId) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  limits.set(sessionId, recent);
  return false;
}

function cleanMessages(value: unknown): ChatMessage[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === "object")
    .map((item) => ({
      role: item.role === "assistant" ? "assistant" as const : "user" as const,
      content: String(item.content ?? "").trim().slice(0, 4000),
    }))
    .filter((item) => item.content)
    .slice(-16);
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(textEvent("Please send a valid chat message."), {
      status: 400,
      headers: { "Content-Type": "application/x-ndjson" },
    });
  }

  const sessionId = String(body.sessionId ?? "").trim().slice(0, 100);
  const messages = cleanMessages(body.messages);
  if (!sessionId || !messages.length) {
    return new Response(textEvent("Please send a message and try again."), {
      status: 400,
      headers: { "Content-Type": "application/x-ndjson" },
    });
  }

  if (isRateLimited(sessionId)) {
    return new Response(
      textEvent("You’ve reached the hourly chat limit. Please email contact@fluxmediacreations.com or WhatsApp +91 6284957892 and we’ll help directly."),
      { status: 429, headers: { "Content-Type": "application/x-ndjson" } }
    );
  }

  if (!process.env.GROQ_API_KEY) {
    return new Response(
      textEvent("I’m temporarily unavailable. Please email contact@fluxmediacreations.com or WhatsApp +91 6284957892 and the team will help directly."),
      { headers: { "Content-Type": "application/x-ndjson" } }
    );
  }

  let groqResponse: Response;
  try {
    groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        tools,
        tool_choice: "auto",
        stream: true,
        temperature: 0.35,
        max_tokens: 350,
      }),
    });
  } catch (error) {
    console.error("Groq connection error:", error);
    return new Response(
      textEvent("I couldn’t connect just now. Please email contact@fluxmediacreations.com or WhatsApp +91 6284957892."),
      { headers: { "Content-Type": "application/x-ndjson" } }
    );
  }

  if (!groqResponse.ok || !groqResponse.body) {
    const isBusy = groqResponse.status === 429;
    console.error("Groq chat error:", groqResponse.status, await groqResponse.text());
    return new Response(
      textEvent(
        isBusy
          ? "I’m getting a lot of questions right now. Please email contact@fluxmediacreations.com or WhatsApp +91 6284957892 and we’ll help directly."
          : "I couldn’t answer that just now. Please email contact@fluxmediacreations.com or WhatsApp +91 6284957892."
      ),
      { headers: { "Content-Type": "application/x-ndjson" } }
    );
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const toolCalls = new Map<number, ToolAccumulator>();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = groqResponse.body!.getReader();
      let buffer = "";

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            const payload = line.trim();
            if (!payload.startsWith("data: ") || payload === "data: [DONE]") continue;

            const data = JSON.parse(payload.slice(6)) as {
              choices?: Array<{
                delta?: {
                  content?: string;
                  tool_calls?: Array<{
                    index: number;
                    id?: string;
                    function?: { name?: string; arguments?: string };
                  }>;
                };
              }>;
            };
            const delta = data.choices?.[0]?.delta;
            if (delta?.content) controller.enqueue(encoder.encode(textEvent(delta.content)));

            for (const call of delta?.tool_calls ?? []) {
              const current = toolCalls.get(call.index) ?? { id: "", name: "", arguments: "" };
              current.id += call.id ?? "";
              current.name += call.function?.name ?? "";
              current.arguments += call.function?.arguments ?? "";
              toolCalls.set(call.index, current);
            }
          }
        }

        for (const call of toolCalls.values()) {
          if (call.name === "offer_booking" && CALENDLY_URL) {
            controller.enqueue(encoder.encode(JSON.stringify({ type: "booking", url: CALENDLY_URL }) + "\n"));
          } else if (call.name === "offer_booking") {
            controller.enqueue(encoder.encode(textEvent("A booking link is not currently configured. Share your name, email or phone, and a short summary, and Gagan can reply with the right next step.")));
          }

          if (call.name === "submit_lead") {
            if (submittedLeadSessions.has(sessionId)) {
              controller.enqueue(encoder.encode(textEvent("I’ve already passed your details to Gagan in this chat. He’ll follow up shortly.")));
              continue;
            }

            try {
              const lead = validateChatbotLead(JSON.parse(call.arguments));
              if (!lead) {
                controller.enqueue(encoder.encode(textEvent("I still need your name, email or phone, service interest, and a little context before I can pass this on.")));
                continue;
              }
              await sendChatbotLead(lead);
              submittedLeadSessions.add(sessionId);
              controller.enqueue(encoder.encode(JSON.stringify({ type: "lead_submitted" }) + "\n"));
              controller.enqueue(encoder.encode(textEvent(`Thanks ${lead.name}, I’ve passed this to Gagan and you’ll hear back within a few hours. Anything else I can help with?`)));
            } catch (error) {
              console.error("chat tool lead error:", error);
              controller.enqueue(encoder.encode(textEvent("I couldn’t send that just now. Please email contact@fluxmediacreations.com or WhatsApp +91 6284957892 directly.")));
            }
          }
        }
      } catch (error) {
        console.error("chat stream error:", error);
        controller.enqueue(encoder.encode(textEvent("The connection paused. Please try again, or email contact@fluxmediacreations.com.")));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
