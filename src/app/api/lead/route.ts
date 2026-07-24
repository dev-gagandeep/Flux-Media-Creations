import { NextRequest, NextResponse } from "next/server";
import { sendChatbotLead, validateChatbotLead } from "@/lib/chatbot-lead";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const lead = validateChatbotLead(await request.json());
    if (!lead) {
      return NextResponse.json({ error: "Name, contact, service interest, and summary are required." }, { status: 400 });
    }

    await sendChatbotLead(lead);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("chatbot lead error:", error);
    return NextResponse.json({ error: "Unable to submit the lead right now." }, { status: 500 });
  }
}
