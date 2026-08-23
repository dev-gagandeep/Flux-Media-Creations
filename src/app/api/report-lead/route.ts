import { NextRequest, NextResponse } from "next/server";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdqqvjy";
const MAKE_WEBHOOK_ENDPOINT = process.env.CONTACT_WEBHOOK_URL || "https://hook.eu1.make.com/tpcc3poufwdk3myrf1daoddoixxw5muc";
const DOWNLOAD_URL = "/reports/2026-service-business-website-growth-report.pdf";

function text(value: unknown) {
  return String(value ?? "").trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = text(body.name);
    const businessName = text(body.businessName);
    const businessType = text(body.businessType);
    const websiteUrl = text(body.websiteUrl);
    const email = text(body.email);
    const consent = Boolean(body.consent);

    if (!name || !businessName || !businessType || !email || !consent) {
      return NextResponse.json({ error: "Please complete all required fields and consent to follow-up." }, { status: 400 });
    }

    const payload = {
      source: "2026-service-business-website-growth-report",
      submittedAt: new Date().toISOString(),
      name,
      business: businessName,
      industry: businessType,
      website: websiteUrl,
      email,
      consent,
      service: "Website Growth Report",
      message: "Requested the 2026 Service Business Website Growth Report.",
      _subject: `New report download: ${name} - ${businessName}`,
    };

    const [formspree, webhook] = await Promise.all([
      fetch(FORMSPREE_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) }),
      fetch(MAKE_WEBHOOK_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }),
    ]);

    if (!webhook.ok) return NextResponse.json({ error: "We could not process the request right now." }, { status: 502 });
    if (!formspree.ok) console.error("Report lead Formspree backup failed", formspree.status);

    return NextResponse.json({ success: true, downloadUrl: DOWNLOAD_URL });
  } catch (error) {
    console.error("Report lead submission failed", error);
    return NextResponse.json({ error: "We could not process the request right now." }, { status: 500 });
  }
}
