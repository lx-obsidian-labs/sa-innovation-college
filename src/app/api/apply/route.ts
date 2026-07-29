import { NextResponse } from "next/server";
import { sendApplicationEmail } from "@/lib/email";

function generateRef(): string {
  const prefix = "SAIC";
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${ts}-${rand}`;
}

export async function POST(req: Request) {
  try {
    const raw = await req.text();
    if (raw.length > 100_000) return NextResponse.json({ error: "Application payload is too large" }, { status: 413 });
    const body = JSON.parse(raw) as Record<string, string | boolean | undefined>;
    const {
      title, fullName, gender, nationality, postalCode, idNumber, dob,
      phone, email, address, startDate, category, course, education,
      previousSchool, employStatus, fundingSource, emergencyName, emergencyPhone, hearAbout, agree,
    } = body;

    if (typeof fullName !== "string" || typeof phone !== "string" || typeof email !== "string" || typeof course !== "string" || agree !== true) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (fullName.length > 120 || phone.length > 40 || email.length > 254 || course.length > 160) {
      return NextResponse.json({ error: "One or more fields are too long" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
    const text = (value: string | boolean | undefined) => typeof value === "string" ? value : "";

    const refNumber = generateRef();

    await sendApplicationEmail({
      refNumber,
      title: text(title),
      fullName,
      gender: text(gender),
      nationality: text(nationality),
      postalCode: text(postalCode),
      idNumber: text(idNumber),
      dob: text(dob),
      phone,
      email,
      address: text(address),
      startDate: text(startDate),
      category: text(category),
      course,
      education: text(education),
      previousSchool: text(previousSchool),
      employStatus: text(employStatus),
      fundingSource: text(fundingSource),
      emergencyName: text(emergencyName),
      emergencyPhone: text(emergencyPhone),
      hearAbout: text(hearAbout),
    });

    return NextResponse.json({
      success: true,
      refNumber,
      message: "Application submitted successfully! Our admissions team will contact you within 2-3 business days.",
    });
  } catch (err) {
    console.error("[Application Error]", err);
    return NextResponse.json({ error: "Failed to submit application. Please try again later." }, { status: 500 });
  }
}
