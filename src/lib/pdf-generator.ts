import { jsPDF } from "jspdf";

function setColor(doc: jsPDF, hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  doc.setTextColor(r, g, b);
}

const BLUE = "#1B4D8E";
const GOLD = "#F59E0B";
const GRAY_DARK = "#505050";
const GRAY_MED = "#8C8C8C";
const GRAY_LIGHT = "#DCDCDC";
const WHITE = "#FFFFFF";
const BLACK = "#000000";

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 12;
const COL_WIDTH = PAGE_W - MARGIN * 2;
const LABEL_W = 46;
const VALUE_W = COL_WIDTH - LABEL_W - 4;

function fmtDate() {
  const d = new Date();
  return d.toLocaleDateString("en-ZA", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function refNumber() {
  const n = Date.now().toString(36).toUpperCase().slice(-6);
  return `SAIC-${n}`;
}

function pageBorder(doc: jsPDF) {
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.5);
  doc.rect(5, 5, PAGE_W - 10, PAGE_H - 10);
}

function brandHeader(doc: jsPDF, pageNum: number) {
  const top = 10;
  const h = 22;
  doc.setFillColor(27, 77, 142);
  doc.rect(MARGIN, top, COL_WIDTH, h, "F");
  doc.setFillColor(245, 158, 11);
  doc.rect(MARGIN, top + h - 1.5, COL_WIDTH, 1.5, "F");
  setColor(doc, WHITE);
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("SA INNOVATION COLLEGE", MARGIN + 6, top + 8);
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  doc.text("Empowering South African Youth Through Quality Education", MARGIN + 6, top + 14.5);
  doc.text(`Page ${pageNum}`, MARGIN + COL_WIDTH - 6, top + 14.5, { align: "right" });
}

function formTitle(doc: jsPDF, y: number, title: string, ref?: string) {
  setColor(doc, BLUE);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(title, PAGE_W / 2, y, { align: "center" });
  y += 8;
  if (ref) {
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    setColor(doc, GRAY_DARK);
    doc.text(`Reference: ${ref}`, PAGE_W / 2, y, { align: "center" });
    y += 5;
  }
  doc.setFontSize(7);
  setColor(doc, GRAY_MED);
  doc.text(`Generated: ${fmtDate()}`, PAGE_W / 2, y, { align: "center" });
  y += 3;
  doc.setDrawColor(245, 158, 11);
  doc.setLineWidth(0.4);
  doc.line(MARGIN + 30, y, MARGIN + COL_WIDTH - 30, y);
  return y + 10;
}

function foot(doc: jsPDF, page: number, total: number) {
  const y = PAGE_H - 14;
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, y - 3, MARGIN + COL_WIDTH, y - 3);
  setColor(doc, GRAY_MED);
  doc.setFontSize(6.5);
  doc.setFont("helvetica", "normal");
  doc.text("147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157", MARGIN, y);
  doc.text("Tel: 0800 014 568 | Email: info@sainnovationcollege.co.za | www.sainnovationcollege.co.za", MARGIN, y + 4);
  doc.text(`Page ${page} of ${total}`, MARGIN + COL_WIDTH, y + 4, { align: "right" });
}

function sectionHdr(doc: jsPDF, y: number, label: string): number {
  doc.setFillColor(27, 77, 142);
  doc.rect(MARGIN, y, COL_WIDTH, 9, "F");
  setColor(doc, WHITE);
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text(label, MARGIN + 5, y + 6);
  return y + 13;
}

function fieldRow(doc: jsPDF, y: number, label: string, value: string, valueWidth?: number): number {
  const vw = valueWidth || VALUE_W;
  const bg = y % 28 < 14 ? "#FFFFFF" : "#F8F9FB";
  doc.setFillColor(parseInt(bg.slice(1, 3), 16), parseInt(bg.slice(3, 5), 16), parseInt(bg.slice(5, 7), 16));
  doc.rect(MARGIN, y - 3.5, COL_WIDTH, 15, "F");
  setColor(doc, GRAY_DARK);
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "bold");
  doc.text(label.toUpperCase(), MARGIN + 4, y + 1.5);
  const val = value || "";
  setColor(doc, BLACK);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  if (!val) {
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.3);
    doc.line(MARGIN + LABEL_W, y + 4, MARGIN + LABEL_W + vw, y + 4);
  } else {
    const maxW = vw - 4;
    const display = doc.splitTextToSize(val, maxW);
    display.forEach((line: string, i: number) => {
      if (y + 1.5 + i * 5 < PAGE_H - 45) doc.text(line, MARGIN + LABEL_W + 2, y + 1.5 + i * 5);
    });
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.3);
    const lastY = Math.min(y + 4 + Math.max(0, display.length - 1) * 5, PAGE_H - 50);
    doc.line(MARGIN + LABEL_W, lastY, MARGIN + LABEL_W + vw, lastY);
  }
  return y + 15;
}

function fieldPair(doc: jsPDF, y: number, left: [string, string], right: [string, string]): number {
  const halfW = (COL_WIDTH - 6) / 2;
  const bg = y % 28 < 14 ? "#FFFFFF" : "#F8F9FB";
  doc.setFillColor(parseInt(bg.slice(1, 3), 16), parseInt(bg.slice(3, 5), 16), parseInt(bg.slice(5, 7), 16));
  doc.rect(MARGIN, y - 3.5, COL_WIDTH, 15, "F");
  [left, right].forEach(([lbl, val], idx) => {
    const ox = MARGIN + (idx === 0 ? 4 : halfW + 7);
    const valX = ox + LABEL_W;
    const valW = halfW - LABEL_W - 4;
    setColor(doc, GRAY_DARK);
    doc.setFontSize(7.5);
    doc.setFont("helvetica", "bold");
    doc.text(lbl.toUpperCase(), ox, y + 1.5);
    setColor(doc, BLACK);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    if (!val) {
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.3);
      doc.line(valX, y + 4, valX + valW, y + 4);
    } else {
      doc.text(val, valX + 2, y + 1.5);
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.3);
      doc.line(valX, y + 4, valX + valW, y + 4);
    }
  });
  return y + 15;
}

function checkbox(doc: jsPDF, y: number, x: number, label: string) {
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.5);
  doc.rect(x, y - 3.5, 6, 6);
  setColor(doc, BLACK);
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.text(label, x + 9, y + 1);
}

function boxedSection(doc: jsPDF, y: number, title: string, content: () => number): number {
  const boxY = y - 2;
  const startY = y;
  const endY = content();
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.4);
  doc.rect(MARGIN, boxY, COL_WIDTH, endY - boxY + 4);
  doc.setFillColor(255, 255, 255);
  doc.rect(MARGIN + 8, boxY - 3, doc.getTextWidth(title) + 12, 7, "F");
  setColor(doc, BLUE);
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "bold");
  doc.text(title, MARGIN + 14, boxY + 2);
  return endY + 2;
}

export function generateContactPdf(data: {
  name: string; surname: string; company: string; preferredContact: string;
  phone: string; email: string; course: string; message: string;
}): jsPDF {
  const doc = new jsPDF();
  pageBorder(doc);
  brandHeader(doc, 1);
  let y = 38;
  y = formTitle(doc, y, "Enquiry / Contact Form");
  y = sectionHdr(doc, y, "Personal Details");
  y = fieldPair(doc, y, ["First Name", data.name], ["Surname", data.surname]);
  y = fieldPair(doc, y, ["Company / Organisation", data.company], ["Preferred Contact", data.preferredContact]);
  y = sectionHdr(doc, y + 2, "Contact Details");
  y = fieldPair(doc, y, ["Phone Number", data.phone], ["Email Address", data.email]);
  y = fieldRow(doc, y, "Course Interested In", data.course);
  y = sectionHdr(doc, y + 2, "Message");
  y = fieldRow(doc, y, "Message", data.message, COL_WIDTH - LABEL_W - 10);

  y = Math.max(y + 6, PAGE_H - 52);
  boxedSection(doc, y, "Office Use Only", () => {
    let yy = y + 4;
    doc.setFontSize(7.5);
    setColor(doc, GRAY_DARK);
    doc.setFont("helvetica", "normal");
    doc.text(`Received: _________________________`, MARGIN + 6, yy);
    doc.text(`Action Taken: ____________________`, MARGIN + COL_WIDTH / 2 + 4, yy);
    yy += 8;
    doc.text(`Staff Initials: ___________________`, MARGIN + 6, yy);
    doc.text(`Date Processed: __________________`, MARGIN + COL_WIDTH / 2 + 4, yy);
    return yy + 4;
  });

  foot(doc, 1, 1);
  return doc;
}

export function generateApplicationPdf(data: {
  title: string; fullName: string; gender: string; nationality: string; postalCode: string;
  idNumber: string; dob: string; phone: string; email: string; address: string; startDate: string;
  category: string; course: string; education: string; employStatus: string; hearAbout: string;
  emergencyName: string; emergencyPhone: string; fundingSource: string; previousSchool: string;
}): jsPDF {
  const doc = new jsPDF();
  const ref = refNumber();
  let page = 1;
  let y = 38;

  function checkPage() {
    if (y > PAGE_H - 55) {
      foot(doc, page, 0);
      doc.addPage();
      page++;
      pageBorder(doc);
      brandHeader(doc, page);
      y = 38;
      y = formTitle(doc, y, "Application Form (continued)", ref);
    }
  }

  pageBorder(doc);
  brandHeader(doc, page);
  y = formTitle(doc, y, "Online Application Form", ref);

  y = sectionHdr(doc, y, "1. Personal Information");
  checkPage();
  y = fieldPair(doc, y, ["Title", data.title], ["Full Name", data.fullName]);
  checkPage();
  y = fieldPair(doc, y, ["Gender", data.gender], ["Nationality", data.nationality]);
  checkPage();
  y = fieldPair(doc, y, ["ID / Passport Number", data.idNumber], ["Date of Birth", data.dob]);
  checkPage();
  y = fieldPair(doc, y, ["Phone Number", data.phone], ["Email Address", data.email]);
  checkPage();
  y = fieldRow(doc, y, "Physical Address", data.address);
  checkPage();
  y = fieldPair(doc, y, ["Postal Code", data.postalCode], ["Preferred Start Date", data.startDate]);
  checkPage();

  y = sectionHdr(doc, y + 2, "2. Course Selection");
  checkPage();
  y = fieldPair(doc, y, ["Category", data.category], ["Course", data.course]);
  checkPage();

  y = sectionHdr(doc, y + 2, "3. Education & Employment");
  checkPage();
  y = fieldRow(doc, y, "Highest Education", data.education);
  checkPage();
  y = fieldPair(doc, y, ["Previous School", data.previousSchool], ["Employment Status", data.employStatus]);
  checkPage();
  y = fieldRow(doc, y, "Funding / Sponsorship", data.fundingSource);
  checkPage();
  y = fieldRow(doc, y, "How Did You Hear About Us?", data.hearAbout);
  checkPage();

  y = sectionHdr(doc, y + 2, "4. Emergency Contact");
  checkPage();
  y = fieldPair(doc, y, ["Emergency Contact", data.emergencyName], ["Emergency Phone", data.emergencyPhone]);
  checkPage();

  y = sectionHdr(doc, y + 2, "5. Declaration");
  checkPage();
  doc.setFillColor(235, 241, 250);
  doc.rect(MARGIN, y, COL_WIDTH, 18, "F");
  doc.setDrawColor(27, 77, 142);
  doc.setLineWidth(0.3);
  doc.rect(MARGIN, y, COL_WIDTH, 18);
  setColor(doc, BLACK);
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "normal");
  const declText = "I confirm that I have read, understood, and agree to SA Innovation College's Terms & Conditions and Refund Policy. I confirm that all information provided in this application is accurate and complete to the best of my knowledge.";
  const declLines = doc.splitTextToSize(declText, COL_WIDTH - 16);
  doc.text(declLines, MARGIN + 8, y + 5);
  y += 22;
  checkPage();
  checkbox(doc, y, MARGIN + 4, "I agree to the Terms & Conditions and Refund Policy");
  y += 12;
  checkPage();
  doc.setFillColor(248, 249, 251);
  doc.rect(MARGIN, y, COL_WIDTH, 18, "F");
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.4);
  doc.rect(MARGIN, y, COL_WIDTH, 18);
  doc.setFontSize(8.5);
  setColor(doc, BLUE);
  doc.setFont("helvetica", "bold");
  doc.text("Applicant Signature", MARGIN + 6, y + 5);
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.5);
  doc.line(MARGIN + 6, y + 12, MARGIN + COL_WIDTH / 2 - 6, y + 12);
  setColor(doc, GRAY_DARK);
  doc.setFont("helvetica", "normal");
  doc.text("Date: ________________", MARGIN + COL_WIDTH / 2 + 6, y + 12);
  y += 22;

  checkPage();
  boxedSection(doc, y, "Office Use Only", () => {
    let yy = y + 4;
    doc.setFontSize(7.5);
    setColor(doc, GRAY_DARK);
    doc.setFont("helvetica", "normal");
    doc.text(`Received: _________________________`, MARGIN + 6, yy);
    doc.text(`Verified: _________________________`, MARGIN + COL_WIDTH / 2 + 4, yy);
    yy += 8;
    doc.text(`Documents Checked: _______________`, MARGIN + 6, yy);
    doc.text(`Approved: ____  Declined: ____`, MARGIN + COL_WIDTH / 2 + 4, yy);
    yy += 8;
    doc.text(`Staff Initials: ___________________`, MARGIN + 6, yy);
    doc.text(`Date Processed: __________________`, MARGIN + COL_WIDTH / 2 + 4, yy);
    return yy + 2;
  });

  foot(doc, page, page);
  return doc;
}
