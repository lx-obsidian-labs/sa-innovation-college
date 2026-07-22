import { NextResponse } from "next/server";

function generateRef(): string {
  const prefix = "SAIC";
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${ts}-${rand}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, fullName, idNumber, dob, phone, email, address, startDate, course, category, education, employStatus, hearAbout, agree } = body;

    if (!fullName || !phone || !email || !course || !agree) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const refNumber = generateRef();

    const payload = {
      type: "application",
      refNumber,
      title: title || "Not specified",
      fullName,
      idNumber: idNumber || "Not provided",
      dob: dob || "Not provided",
      phone,
      email,
      address: address || "Not provided",
      startDate: startDate || "Not specified",
      course,
      category: category || "Not specified",
      education: education || "Not provided",
      employStatus: employStatus || "Not provided",
      hearAbout: hearAbout || "Not specified",
      timestamp: new Date().toISOString(),
    };

    console.log("[Application Submission]", JSON.stringify(payload, null, 2));

    return NextResponse.json({
      success: true,
      refNumber,
      message: "Application submitted successfully! Our admissions team will contact you within 2-3 business days.",
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
