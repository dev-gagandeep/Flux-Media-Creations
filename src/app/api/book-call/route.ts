import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const OWNER_EMAIL = "contact@fluxmediacreations.com";
const FROM_EMAIL = "Flux Media Creations <noreply@fluxmediacreations.com>";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function asStringArray(value: unknown) {
  return Array.isArray(value) ? value.map((item) => String(item)).filter(Boolean) : [];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const body = await req.json();
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const website = String(body.website ?? "").trim();
  const organisation = String(body.organisation ?? "").trim();
  const services = asStringArray(body.services);
  const budget = String(body.budget ?? "").trim();
  const message = String(body.message ?? "").trim();
  const date = String(body.date ?? "").trim();
  const time = String(body.time ?? "").trim();

  if (!name || !email || !date || !time || services.length === 0) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const timestamp = Date.parse(date);

  if (!Number.isFinite(timestamp)) {
    return NextResponse.json({ error: "Invalid date" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const formattedDate = formatDate(date);
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    website: escapeHtml(website),
    organisation: escapeHtml(organisation),
    services: escapeHtml(services.join(", ")),
    budget: escapeHtml(budget),
    message: escapeHtml(message),
    date: escapeHtml(formattedDate),
    time: escapeHtml(time),
  };

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: "You're booked - Free discovery call with Flux Media Creations",
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,sans-serif;color:#f0ede6;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding:40px 20px;">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#111;border-radius:12px;border:1px solid rgba(240,237,230,0.1);overflow:hidden;">
        <tr><td style="padding:30px 38px 22px;border-bottom:1px solid rgba(240,237,230,0.08);">
          <span style="font-size:22px;font-weight:700;">Flux.</span>
        </td></tr>
        <tr><td style="padding:30px 38px;">
          <h1 style="font-size:24px;font-weight:700;margin:0 0 8px;">You're booked, ${safe.name}.</h1>
          <p style="color:#9a958d;font-size:15px;line-height:1.6;margin:0 0 26px;">
            Your free 30-minute discovery call is confirmed. Gagan will send you a Google Meet or Zoom link shortly.
          </p>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(240,237,230,0.04);border:1px solid rgba(240,237,230,0.1);border-radius:8px;margin-bottom:26px;">
            <tr><td style="padding:20px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="color:#6f6a63;font-size:13px;padding:6px 0;width:120px;">Date</td><td style="color:#f0ede6;font-size:14px;font-weight:600;padding:6px 0;">${safe.date}</td></tr>
                <tr><td style="color:#6f6a63;font-size:13px;padding:6px 0;">Time</td><td style="color:#f0ede6;font-size:14px;font-weight:600;padding:6px 0;">${safe.time}</td></tr>
                <tr><td style="color:#6f6a63;font-size:13px;padding:6px 0;">Duration</td><td style="color:#c8c4bc;font-size:14px;padding:6px 0;">30 minutes</td></tr>
                <tr><td style="color:#6f6a63;font-size:13px;padding:6px 0;">Services</td><td style="color:#c8c4bc;font-size:14px;padding:6px 0;">${safe.services}</td></tr>
              </table>
            </td></tr>
          </table>
          <p style="color:#9a958d;font-size:14px;line-height:1.7;margin:0 0 22px;">
            Need to add context before the call? <a href="https://wa.me/17789836113" style="color:#f0ede6;">WhatsApp us directly</a>.
          </p>
          <p style="color:#6f6a63;font-size:13px;line-height:1.6;margin:0;">
            Gagan Deep<br/>Flux Media Creations
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [OWNER_EMAIL],
      replyTo: email,
      subject: `New call booked - ${name} (${formattedDate} at ${time})`,
      html: `
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:24px;">
  <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;border:1px solid #e5e5e5;overflow:hidden;margin:0 auto;">
    <tr><td style="background:#0a0a0a;padding:16px 24px;"><span style="font-size:18px;font-weight:700;color:#f0ede6;">Flux. - New Call Booking</span></td></tr>
    <tr><td style="padding:24px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
        <tr><td style="color:#666;padding:5px 0;width:130px;">Name</td><td><strong>${safe.name}</strong></td></tr>
        <tr><td style="color:#666;padding:5px 0;">Email</td><td><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
        <tr><td style="color:#666;padding:5px 0;">Phone</td><td>${safe.phone || "-"}</td></tr>
        <tr><td style="color:#666;padding:5px 0;">Organisation</td><td>${safe.organisation || "-"}</td></tr>
        <tr><td style="color:#666;padding:5px 0;">Website</td><td>${safe.website || "-"}</td></tr>
        <tr><td style="color:#666;padding:5px 0;">Services</td><td>${safe.services}</td></tr>
        <tr><td style="color:#666;padding:5px 0;">Budget</td><td>${safe.budget || "-"}</td></tr>
        <tr><td colspan="2" style="padding-top:16px;border-top:1px solid #eee;"></td></tr>
        <tr><td style="color:#666;padding:5px 0;">Date</td><td><strong>${safe.date}</strong></td></tr>
        <tr><td style="color:#666;padding:5px 0;">Time</td><td><strong>${safe.time}</strong></td></tr>
        ${safe.message ? `<tr><td colspan="2" style="padding-top:16px;color:#666;">Message</td></tr><tr><td colspan="2" style="line-height:1.6;">${safe.message}</td></tr>` : ""}
      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });

    if (process.env.AUTOMATION_WEBHOOK_URL) {
      await fetch(process.env.AUTOMATION_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, website, organisation, services, budget, message, date, time }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("book-call API error:", error);
    return NextResponse.json({ error: "Failed to send booking emails" }, { status: 500 });
  }
}
