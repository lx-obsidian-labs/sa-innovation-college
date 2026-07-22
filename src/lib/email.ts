import nodemailer from "nodemailer";

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("Email not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in .env");
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

function layout(body: string): string {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    body{font-family:Arial,Helvetica,sans-serif;color:#333;margin:0;padding:0;background:#f4f4f4}
    .container{max-width:600px;margin:24px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.1)}
    .header{background:#1B4D8E;color:#fff;padding:24px 32px}
    .header h1{margin:0;font-size:20px}
    .header p{margin:4px 0 0;opacity:.9;font-size:14px}
    .body{padding:24px 32px}
    .field{display:flex;padding:8px 0;border-bottom:1px solid #eee}
    .field:last-child{border-bottom:none}
    .label{width:160px;font-weight:700;font-size:13px;color:#666;flex-shrink:0}
    .value{flex:1;font-size:14px;word-break:break-word}
    .ref{background:#FEF3C7;border:1px solid #F59E0B;border-radius:6px;padding:12px 16px;text-align:center;font-size:18px;font-weight:700;color:#92400E;margin-bottom:16px}
    .footer{background:#f9fafb;padding:16px 32px;font-size:12px;color:#999;text-align:center;border-top:1px solid #eee}
  </style></head><body><div class="container"><div class="header"><h1>SA Innovation College</h1><p>Notification</p></div><div class="body">${body}</div><div class="footer">SA Innovation College &bull; 147 Burger Avenue, Lyttelton Manor, Centurion, 0157</div></div></body></html>`;
}

function field(label: string, value: string): string {
  return `<div class="field"><span class="label">${label}</span><span class="value">${value || "—"}</span></div>`;
}

export async function sendContactEmail(data: {
  name: string; surname: string; company?: string; preferredContact: string;
  phone: string; email: string; course?: string; message: string;
}): Promise<void> {
  const to = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || "";
  const transporter = getTransporter();
  await transporter.sendMail({
    from: `"SA Innovation Website" <${process.env.SMTP_USER}>`,
    to,
    subject: `Enquiry from ${data.name} ${data.surname}`,
    html: layout(`
      <h2 style="margin-top:0">New Enquiry</h2>
      ${field("Name", `${data.name} ${data.surname}`)}
      ${field("Company", data.company || "")}
      ${field("Preferred Contact", data.preferredContact)}
      ${field("Phone", data.phone)}
      ${field("Email", data.email)}
      ${field("Course", data.course || "")}
      <div class="field" style="flex-direction:column;gap:4px"><span class="label">Message</span><span class="value" style="white-space:pre-wrap">${data.message}</span></div>
    `),
  });
}

export async function sendApplicationEmail(data: {
  refNumber: string;
  title: string; fullName: string; gender: string; nationality: string; postalCode: string;
  idNumber: string; dob: string; phone: string; email: string; address: string;
  startDate: string; category: string; course: string; education: string;
  previousSchool: string; employStatus: string; fundingSource: string;
  emergencyName: string; emergencyPhone: string; hearAbout: string;
}): Promise<void> {
  const to = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || "";
  const transporter = getTransporter();
  await transporter.sendMail({
    from: `"SA Innovation Website" <${process.env.SMTP_USER}>`,
    to,
    subject: `Application ${data.refNumber} — ${data.fullName}`,
    html: layout(`
      <div class="ref">${data.refNumber}</div>
      <h2 style="margin-top:0">Application Received</h2>
      <h3 style="margin:16px 0 8px;font-size:14px;color:#1B4D8E;border-bottom:2px solid #1B4D8E;padding-bottom:4px">Personal Information</h3>
      ${field("Full Name", `${data.title} ${data.fullName}`)}
      ${field("Gender", data.gender)}
      ${field("Nationality", data.nationality)}
      ${field("Postal Code", data.postalCode)}
      ${field("ID / Passport", data.idNumber)}
      ${field("Date of Birth", data.dob)}
      ${field("Phone", data.phone)}
      ${field("Email", data.email)}
      ${field("Address", data.address)}
      ${field("Start Date", data.startDate)}
      <h3 style="margin:16px 0 8px;font-size:14px;color:#1B4D8E;border-bottom:2px solid #1B4D8E;padding-bottom:4px">Course Selection</h3>
      ${field("Category", data.category)}
      ${field("Course", data.course)}
      <h3 style="margin:16px 0 8px;font-size:14px;color:#1B4D8E;border-bottom:2px solid #1B4D8E;padding-bottom:4px">Education & Employment</h3>
      ${field("Education", data.education)}
      ${field("Previous School", data.previousSchool)}
      ${field("Employment Status", data.employStatus)}
      ${field("Funding Source", data.fundingSource)}
      ${field("How Heard", data.hearAbout)}
      <h3 style="margin:16px 0 8px;font-size:14px;color:#1B4D8E;border-bottom:2px solid #1B4D8E;padding-bottom:4px">Emergency Contact</h3>
      ${field("Name", data.emergencyName)}
      ${field("Phone", data.emergencyPhone)}
    `),
  });
}
