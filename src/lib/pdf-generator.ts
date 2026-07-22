import { jsPDF } from "jspdf";

const PRIMARY = "#1B4D8E";
const GRAY = "#555";
const LIGHT_GRAY = "#CCC";

function header(doc: jsPDF, title: string) {
  doc.setFillColor(27, 77, 142);
  doc.rect(0, 0, doc.internal.pageSize.width, 28, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("SA INNOVATION COLLEGE", 14, 18);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Empowering South African Youth Through Education", 14, 25);
  doc.setTextColor(27, 77, 142);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(title, doc.internal.pageSize.width / 2, 48, { align: "center" });
  doc.setDrawColor(27, 77, 142);
  doc.setLineWidth(0.5);
  doc.line(14, 54, doc.internal.pageSize.width - 14, 54);
}

function footer(doc: jsPDF, page: number, total: number) {
  doc.setDrawColor(LIGHT_GRAY);
  doc.setLineWidth(0.3);
  doc.line(14, doc.internal.pageSize.height - 20, doc.internal.pageSize.width - 14, doc.internal.pageSize.height - 20);
  doc.setTextColor(150, 150, 150);
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  doc.text("147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157", 14, doc.internal.pageSize.height - 12);
  doc.text("Tel: 0800 014 568 | Email: info@sainnovationcollege.co.za | www.sainnovationcollege.co.za", 14, doc.internal.pageSize.height - 7);
  doc.text(`Page ${page} of ${total}`, doc.internal.pageSize.width - 14, doc.internal.pageSize.height - 7, { align: "right" });
}

function section(doc: jsPDF, y: number, label: string): number {
  doc.setFillColor(240, 245, 250);
  doc.rect(14, y, doc.internal.pageSize.width - 28, 8, "F");
  doc.setTextColor(27, 77, 142);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text(label, 18, y + 5.5);
  return y + 14;
}

function field(doc: jsPDF, y: number, label: string, value: string, width?: number): number {
  const colW = width || (doc.internal.pageSize.width - 48);
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(7);
  doc.setFont("helvetica", "bold");
  doc.text(label.toUpperCase(), 14, y);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const display = value || "________________________";
  doc.text(display, 14, y + 6);
  doc.setDrawColor(LIGHT_GRAY);
  doc.setLineWidth(0.3);
  doc.line(14, y + 9, 14 + colW, y + 9);
  return y + 14;
}

function fieldPair(doc: jsPDF, y: number, left: [string, string], right: [string, string]): number {
  const mid = doc.internal.pageSize.width / 2;
  const colW = mid - 24;
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(7);
  doc.setFont("helvetica", "bold");
  doc.text(left[0].toUpperCase(), 14, y);
  doc.text(right[0].toUpperCase(), mid + 10, y);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(left[1] || "________________________", 14, y + 6);
  doc.text(right[1] || "________________________", mid + 10, y + 6);
  doc.setDrawColor(LIGHT_GRAY);
  doc.setLineWidth(0.3);
  doc.line(14, y + 9, 14 + colW, y + 9);
  doc.line(mid + 10, y + 9, mid + 10 + colW, y + 9);
  return y + 14;
}

export function generateContactPdf(data: { name: string; phone: string; email: string; course: string; message: string }): jsPDF {
  const doc = new jsPDF();
  const totalPages = 1;
  header(doc, "Enquiry / Contact Form");
  footer(doc, 1, totalPages);

  let y = 66;
  y = field(doc, y, "Full Name", data.name);
  y = field(doc, y, "Phone Number", data.phone);
  y = field(doc, y, "Email Address", data.email);
  y = field(doc, y, "Course Interested In", data.course);
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(7);
  doc.setFont("helvetica", "bold");
  doc.text("MESSAGE".toUpperCase(), 14, y);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const lines = doc.splitTextToSize(data.message || "________________________", doc.internal.pageSize.width - 28);
  doc.text(lines, 14, y + 6);
  y += 8 + lines.length * 5;

  y = Math.max(y + 10, doc.internal.pageSize.height - 40);
  doc.setDrawColor(PRIMARY);
  doc.setLineWidth(0.5);
  doc.line(14, y, doc.internal.pageSize.width - 14, y);
  y += 6;
  doc.setTextColor(PRIMARY);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("Office Use Only", 14, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(GRAY);
  doc.setFontSize(8);
  doc.text("Received: ________________", 14, y + 6);
  doc.text("Action: __________________", doc.internal.pageSize.width / 2 + 10, y + 6);

  return doc;
}

export function generateApplicationPdf(data: {
  title: string; fullName: string; idNumber: string; dob: string;
  phone: string; email: string; address: string; startDate: string;
  category: string; course: string; education: string;
  employStatus: string; hearAbout: string;
}): jsPDF {
  const doc = new jsPDF();
  let page = 1;
  const pageH = doc.internal.pageSize.height;
  let y = 66;

  function checkPage() {
    if (y > pageH - 50) {
      footer(doc, page, 0);
      doc.addPage();
      page++;
      header(doc, "Application Form (continued)");
      y = 66;
    }
  }

  header(doc, "Online Application Form");

  y = section(doc, y, "1. Personal Information");
  checkPage();
  y = field(doc, y, "Title", data.title);
  checkPage();
  y = field(doc, y, "Full Name", data.fullName);
  checkPage();
  y = fieldPair(doc, y,
    ["ID / Passport Number", data.idNumber],
    ["Date of Birth", data.dob]
  );
  checkPage();
  y = fieldPair(doc, y,
    ["Phone Number", data.phone],
    ["Email Address", data.email]
  );
  checkPage();
  y = field(doc, y, "Physical Address", data.address);
  checkPage();
  y = field(doc, y, "Preferred Start Date", data.startDate);
  checkPage();

  y = section(doc, y + 4, "2. Course Selection");
  checkPage();
  y = fieldPair(doc, y,
    ["Category", data.category],
    ["Course", data.course]
  );
  checkPage();

  y = section(doc, y + 4, "3. Education & Employment");
  checkPage();
  y = field(doc, y, "Highest Education Level", data.education);
  checkPage();
  y = field(doc, y, "Employment Status", data.employStatus);
  checkPage();
  y = field(doc, y, "How Did You Hear About Us?", data.hearAbout);
  checkPage();

  y = section(doc, y + 4, "4. Declaration");
  checkPage();
  doc.setFontSize(8);
  doc.setTextColor(0, 0, 0);
  const declLines = doc.splitTextToSize(
    "By submitting this application, I confirm that I have read, understood, and agree to SA Innovation College's Terms & Conditions and Refund Policy. I confirm that all information provided is accurate and complete.",
    doc.internal.pageSize.width - 28
  );
  doc.text(declLines, 14, y);
  y += declLines.length * 5 + 6;

  checkPage();
  doc.setDrawColor(0);
  doc.setLineWidth(0.5);
  doc.rect(14, y, 6, 6);
  doc.setTextColor(0);
  doc.setFontSize(9);
  doc.text("I agree to the Terms & Conditions and Refund Policy", 24, y + 5);

  y += 16;
  checkPage();
  doc.setTextColor(PRIMARY);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("Applicant Signature: ________________________", 14, y);
  doc.text("Date: ________________", doc.internal.pageSize.width / 2 + 20, y);

  y += 10;
  checkPage();
  doc.setDrawColor(PRIMARY);
  doc.setLineWidth(0.5);
  doc.line(14, y, doc.internal.pageSize.width - 14, y);
  y += 6;
  doc.setTextColor(PRIMARY);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("Office Use Only", 14, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(GRAY);
  doc.setFontSize(8);
  doc.text("Received: ________________  Verified: ________________  Approved: ____", 14, y + 6);

  footer(doc, page, page);
  return doc;
}
