import { NextResponse } from "next/server";
import { sendContactEmail, sendContactConfirmation } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, surname, company, preferredContact, phone, email, course, message, website } = body;

    // Honeypot check — silently reject bots
    if (website) {
      return NextResponse.json({ success: true, message: "Thank you for reaching out." });
    }

    if (!name || !surname || !phone || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendContactEmail({
      name, surname, company: company || "", preferredContact: preferredContact || "Phone",
      phone, email, course: course || "", message,
    });

    // Send confirmation to the visitor
    await sendContactConfirmation({ name, email }).catch(() => {
      console.warn("[Contact] Failed to send confirmation email");
    });

    return NextResponse.json({ success: true, message: "Thank you for reaching out. We will get back to you soon." });
  } catch (err) {
    console.error("[Contact Error]", err);
    return NextResponse.json({ error: "Failed to send enquiry. Please try again later." }, { status: 500 });
  }
}
