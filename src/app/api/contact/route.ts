import { NextRequest, NextResponse } from "next/server";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdqqvjy";
const MAKE_WEBHOOK_ENDPOINT =
  process.env.CONTACT_WEBHOOK_URL || "https://hook.eu1.make.com/tpcc3poufwdk3myrf1daoddoixxw5muc";

function asString(value: unknown) {
  return String(value ?? "").trim();
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const name = asString(body.name);
  const business = asString(body.business);
  const website = asString(body.website);
  const email = asString(body.email);
  const phone = asString(body.phone);
  const industry = asString(body.industry);
  const service = asString(body.service);
  const budget = asString(body.budget);
  const message = asString(body.message);
  const consent = Boolean(body.consent);

  if (!name || !business || !email || !industry || !service || !message || !consent) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const payload = {
    source: "contact-form",
    submittedAt: new Date().toISOString(),
    name,
    business,
    website,
    email,
    phone,
    industry,
    service,
    budget,
    message,
    consent,
    _subject: `New project enquiry from ${name} - ${business}`,
  };

  try {
    const [formspreeResponse, makeWebhookResponse] = await Promise.all([
      fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      }),
      fetch(MAKE_WEBHOOK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }),
    ]);

    if (!makeWebhookResponse.ok) {
      console.error("contact form delivery failed:", {
        formspreeStatus: formspreeResponse.status,
        makeWebhookStatus: makeWebhookResponse.status,
      });
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }

    if (!formspreeResponse.ok) {
      console.error("contact form Formspree backup delivery failed:", {
        formspreeStatus: formspreeResponse.status,
        makeWebhookStatus: makeWebhookResponse.status,
      });
    }

    return NextResponse.json({ success: true, makeWebhookSent: true, formspreeSent: formspreeResponse.ok });
  } catch (error) {
    console.error("contact form API error:", error);
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }
}
