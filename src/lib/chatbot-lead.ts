import { Resend } from "resend";

export interface ChatbotLead {
  name: string;
  contact: string;
  service_interest: string;
  message_summary: string;
}

const OWNER_EMAIL = process.env.BOOKING_OWNER_EMAIL || "contact@fluxmediacreations.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Flux Media Creations <noreply@fluxmediacreations.com>";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function validateChatbotLead(value: unknown): ChatbotLead | null {
  if (!value || typeof value !== "object") return null;
  const input = value as Record<string, unknown>;
  const lead = {
    name: String(input.name ?? "").trim().slice(0, 120),
    contact: String(input.contact ?? "").trim().slice(0, 200),
    service_interest: String(input.service_interest ?? "").trim().slice(0, 200),
    message_summary: String(input.message_summary ?? "").trim().slice(0, 2000),
  };

  if (!lead.name || !lead.contact || !lead.service_interest || !lead.message_summary) return null;
  return lead;
}

export async function sendChatbotLead(lead: ChatbotLead) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const safe = {
    name: escapeHtml(lead.name),
    contact: escapeHtml(lead.contact),
    service: escapeHtml(lead.service_interest),
    summary: escapeHtml(lead.message_summary).replaceAll("\n", "<br/>"),
    timestamp: escapeHtml(new Date().toISOString()),
  };

  const result = await resend.emails.send({
    from: FROM_EMAIL,
    to: [OWNER_EMAIL],
    replyTo: lead.contact.includes("@") ? lead.contact : undefined,
    subject: `New chatbot lead: ${lead.name} — ${lead.service_interest}`,
    html: `
      <div style="font-family:Arial,sans-serif;background:#f4f2ee;padding:32px;color:#06070a">
        <div style="max-width:620px;margin:auto;background:#fff;border:1px solid #ddd8d0;border-radius:18px;overflow:hidden">
          <div style="background:#06070a;color:#fff;padding:22px 28px;font-size:20px;font-weight:700">Flux. — New chatbot lead</div>
          <div style="padding:28px">
            <p><strong>Name:</strong> ${safe.name}</p>
            <p><strong>Email or phone:</strong> ${safe.contact}</p>
            <p><strong>Service interest:</strong> ${safe.service}</p>
            <p><strong>Conversation summary:</strong><br/>${safe.summary}</p>
            <p style="margin-top:24px;color:#777;font-size:12px">Captured ${safe.timestamp}</p>
          </div>
        </div>
      </div>`,
  });

  if (result.error) throw new Error(result.error.message);
  return result.data;
}
