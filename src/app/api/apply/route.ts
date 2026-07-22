import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, idNumber, dob, phone, email, address, course, category, education, employStatus, hearAbout, agree } = body;

    if (!fullName || !phone || !email || !course || !agree) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const payload = {
      type: "application",
      fullName,
      idNumber: idNumber || "Not provided",
      dob: dob || "Not provided",
      phone,
      email,
      address: address || "Not provided",
      course,
      category: category || "Not specified",
      education: education || "Not provided",
      employStatus: employStatus || "Not provided",
      hearAbout: hearAbout || "Not specified",
      timestamp: new Date().toISOString(),
    };

    console.log("[Application Submission]", JSON.stringify(payload, null, 2));

    return NextResponse.json({ success: true, message: "Application submitted successfully! Our admissions team will contact you within 2-3 business days." });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
