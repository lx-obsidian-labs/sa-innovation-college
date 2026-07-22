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
    const body = await req.json();
    const {
      title, fullName, gender, nationality, postalCode, idNumber, dob,
      phone, email, address, startDate, category, course, education,
      previousSchool, employStatus, fundingSource, emergencyName, emergencyPhone, hearAbout, agree,
    } = body;

    if (!fullName || !phone || !email || !course || !agree) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const refNumber = generateRef();

    await sendApplicationEmail({
      refNumber,
      title: title || "",
      fullName,
      gender: gender || "",
      nationality: nationality || "",
      postalCode: postalCode || "",
      idNumber: idNumber || "",
      dob: dob || "",
      phone,
      email,
      address: address || "",
      startDate: startDate || "",
      category: category || "",
      course,
      education: education || "",
      previousSchool: previousSchool || "",
      employStatus: employStatus || "",
      fundingSource: fundingSource || "",
      emergencyName: emergencyName || "",
      emergencyPhone: emergencyPhone || "",
      hearAbout: hearAbout || "",
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
