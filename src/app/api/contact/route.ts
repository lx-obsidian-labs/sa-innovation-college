import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, surname, company, preferredContact, phone, email, course, message } = body;

    if (!name || !surname || !phone || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendContactEmail({
      name, surname, company: company || "", preferredContact: preferredContact || "Phone",
      phone, email, course: course || "", message,
    });

    return NextResponse.json({ success: true, message: "Thank you for reaching out. We will get back to you soon." });
  } catch (err) {
    console.error("[Contact Error]", err);
    return NextResponse.json({ error: "Failed to send enquiry. Please try again later." }, { status: 500 });
  }
}
