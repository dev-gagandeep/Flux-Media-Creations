import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const SYSTEM_PROMPT = `You are Flux, the AI assistant for Flux Media Creations, a web and automation studio founded by Gagan Deep.

Your role: help website visitors understand our services, get answers instantly, and book a discovery call.

ABOUT FLUX MEDIA CREATIONS:
- We build WordPress websites and GoHighLevel (GHL) automation systems for service businesses worldwide
- Founded by Gagan Deep, a full-stack developer and GHL specialist based in India serving global clients
- We work with healthcare clinics, home service businesses, dental practices, real estate agents, beauty and wellness brands, legal and financial firms, restaurants, and more

OUR SERVICES AND PRICING:
1. WordPress Website Development - from $500 (7-10 days)
2. GoHighLevel CRM and Automation - from $300 (5-7 days)
3. Full Growth System (Website + GHL) - from $800 (14 days) [most popular]
4. Paid Ads Management (Google/Meta) - from $400/month
5. AI and Digital Growth Strategy (SEO/AEO/GEO) - from $350/month
6. Airtable Business Hub - from $200
7. Make and Zapier Automation - from $150
8. Website Performance Audit - from $99
9. Monthly Care Plan - from $150/month

KEY SELLING POINTS:
- One team handles everything: design, development, automation, and ads
- Every project starts with a Figma design you approve before we code
- We build systems that can respond to leads in 30 seconds automatically
- 30 days of direct post-launch support
- PageSpeed 90+ on every WordPress build
- Real examples include mvmhealth.com, vascurapainandvein.com, ecboneandjoint.com, and medwaynj.com

CONTACT:
- Email: contact@fluxmediacreations.com
- WhatsApp: +91 6284957892
- Book a call: /contact
- Portfolio: /work

PERSONALITY:
- Warm, direct, and knowledgeable
- Never robotic or salesy
- Give specific, useful answers
- If someone asks about pricing, give real numbers
- If they are ready to start, direct them to /contact or WhatsApp
- Keep responses concise, usually 2-4 short paragraphs max
- Use plain language, not jargon
- Use line breaks for readability when helpful
- Avoid repetitive fluff

When someone asks what you can help with, mention services and pricing, how we work, our portfolio, getting a quote, and booking a call.`;

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing ANTHROPIC_API_KEY" }, { status: 500 });
    }

    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-beta": "messages-2023-06-16",
      },
      body: JSON.stringify({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: messages.slice(-20).map((message: { role: string; content: string }) => ({
          role: message.role,
          content: message.content,
        })),
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Anthropic API error:", errorText);
      return NextResponse.json({ error: "AI service error" }, { status: 500 });
    }

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        const decoder = new TextDecoder();
        const encoder = new TextEncoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            controller.close();
            break;
          }

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n").filter((line) => line.trim());

          for (const line of lines) {
            if (!line.startsWith("data: ")) {
              continue;
            }

            const data = line.slice(6);
            if (data === "[DONE]") {
              continue;
            }

            try {
              const parsed = JSON.parse(data);
              if (parsed.type === "content_block_delta" && parsed.delta?.type === "text_delta") {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: parsed.delta.text })}\n\n`));
              }
            } catch {
              // Ignore malformed SSE fragments and continue streaming.
            }
          }
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
