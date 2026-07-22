import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, course, message } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const payload = {
      type: "contact",
      name,
      phone,
      email,
      course: course || "Not specified",
      message,
      timestamp: new Date().toISOString(),
    };

    console.log("[Contact Submission]", JSON.stringify(payload, null, 2));

    return NextResponse.json({ success: true, message: "Thank you for reaching out. We will get back to you soon." });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
