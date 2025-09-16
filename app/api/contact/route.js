import nodemailer from 'nodemailer';

// Next.js App Router API route: POST /api/contact
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body || {};

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      EMAIL_FROM,
      EMAIL_TO
    } = process.env;
    const { EMAIL_BRAND_NAME = 'New Contact', EMAIL_LOGO_URL = '' } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_FROM || !EMAIL_TO) {
      return new Response(
        JSON.stringify({ success: false, error: 'Server email is not configured.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `New contact form message from ${name}`;
    const html = `
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f3f4f6; padding:24px 0; margin:0;">
        <tr>
          <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px; background:#ffffff; border-radius:16px; border:1px solid #e5e7eb; overflow:hidden; font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#111827;">
              <tr>
                <td style="padding:24px; background:linear-gradient(135deg,#0ea5e9,#6366f1);">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td align="left" style="vertical-align:middle;">
                        ${EMAIL_LOGO_URL
                          ? `<img src="${EMAIL_LOGO_URL}" alt="${escapeHtml(EMAIL_BRAND_NAME)}" style="height:32px; display:block; border:0;" />`
                          : `<span style="display:inline-block; padding:6px 10px; background:#ffffff; color:#111827; font-weight:700; border-radius:999px; font-size:14px;">${escapeHtml(EMAIL_BRAND_NAME)}</span>`}
                      </td>
                      <td align="right" style="color:#e5e7eb; font-size:12px;">Contact Form Notification</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:24px;">
                  <h2 style="margin:0 0 12px 0; font-size:20px; line-height:1.3;">New Contact Form Submission</h2>
                  <p style="margin:0 0 20px 0; color:#4b5563;">You received a new message from your website contact form.</p>

                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate; border-spacing:0 8px;">
                    <tr>
                      <td style="width:120px; color:#6b7280; font-size:12px; text-transform:uppercase; letter-spacing:.06em;">Name</td>
                      <td style="background:#f9fafb; border:1px solid #e5e7eb; padding:10px 12px; border-radius:8px;">${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                      <td style="width:120px; color:#6b7280; font-size:12px; text-transform:uppercase; letter-spacing:.06em;">Email</td>
                      <td style="background:#f9fafb; border:1px solid #e5e7eb; padding:10px 12px; border-radius:8px;">${escapeHtml(email)}</td>
                    </tr>
                    ${phone ? `
                    <tr>
                      <td style="width:120px; color:#6b7280; font-size:12px; text-transform:uppercase; letter-spacing:.06em;">Phone</td>
                      <td style="background:#f9fafb; border:1px solid #e5e7eb; padding:10px 12px; border-radius:8px;">${escapeHtml(phone)}</td>
                    </tr>` : ''}
                  </table>

                  <div style="height:16px"></div>

                  <div>
                    <div style="color:#6b7280; font-size:12px; text-transform:uppercase; letter-spacing:.06em; margin-bottom:8px;">Message</div>
                    <div style="white-space:pre-wrap; background:#f9fafb; border:1px solid #e5e7eb; padding:16px; border-radius:12px; line-height:1.6;">${escapeHtml(message)}</div>
                  </div>

                  <div style="height:24px"></div>

                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:12px;">
                    <tr>
                      <td style="padding:12px 16px; color:#6b7280; font-size:12px;">This message was sent from your website contact form.</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 24px; background:#f9fafb; color:#6b7280; font-size:12px; text-align:center;">
                  © ${new Date().getFullYear()} ${escapeHtml(EMAIL_BRAND_NAME)}. All rights reserved.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;

    await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ''}\n\n${message}`,
      html,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Contact API error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send email.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Simple HTML escape for safe email content rendering
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
