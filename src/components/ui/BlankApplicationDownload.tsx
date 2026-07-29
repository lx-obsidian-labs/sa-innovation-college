"use client";

import { jsPDF } from "jspdf";
import Icon from "@/components/ui/Icon";

export default function BlankApplicationDownload() {
  function download() {
    const doc = new jsPDF();
    const fields = ["Title", "Full legal names", "ID / Passport number", "Date of birth", "Nationality", "Gender", "Phone number", "Email address", "Residential address", "Postal address", "First-choice programme", "Second-choice programme", "Campus / study mode", "Preferred intake", "Funding method", "Highest qualification", "School / institution", "Year completed", "Employment status", "Next-of-kin full name", "Relationship", "Next-of-kin phone", "Documents checklist", "Applicant signature and date"];
    doc.setFillColor(27, 77, 142); doc.rect(0, 0, 210, 30, "F");
    doc.setTextColor(255, 255, 255); doc.setFont("helvetica", "bold"); doc.setFontSize(17); doc.text("SA INNOVATION COLLEGE", 16, 14); doc.setFontSize(9); doc.text("BLANK APPLICATION FORM • SAIC-FRM-ADM-001 Rev 1", 16, 23);
    doc.setTextColor(25, 25, 25); doc.setFontSize(16); doc.text("Application Form", 16, 48); doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.text("Complete in black or blue ink. Attach certified supporting documents where required.", 16, 56);
    let y = 70;
    fields.forEach((field, index) => {
      if (y > 265) { doc.setFontSize(8); doc.setTextColor(100, 100, 100); doc.text("SA Innovation College • Confidential application document", 16, 286); doc.addPage(); y = 22; }
      doc.setTextColor(27, 77, 142); doc.setFont("helvetica", "bold"); doc.setFontSize(9); doc.text(`${index + 1}. ${field}`, 16, y); doc.setDrawColor(170, 175, 185); doc.line(16, y + 8, 194, y + 8); y += field.includes("address") || field.includes("checklist") ? 25 : 17;
    });
    doc.setFontSize(8); doc.setTextColor(100, 100, 100); doc.text("Submit completed forms to Admissions. Online application: https://sa-innovation-college.vercel.app/apply", 16, 286);
    doc.save("SAIC-FRM-ADM-001-Rev-1-Application-Form.pdf");
  }
  return <button type="button" onClick={download} className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-md"><Icon name="arrow-down-tray" size={4} />Download blank form</button>;
}