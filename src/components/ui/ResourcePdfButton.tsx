"use client";

import { useCallback } from "react";
import Icon from "@/components/ui/Icon";
import { jsPDF } from "jspdf";

interface Props { name: string; filename: string; version: string; description: string; }

export default function ResourcePdfButton({ name, filename, version, description }: Props) {
  const download = useCallback(() => {
    const doc = new jsPDF();
    doc.setFillColor(27, 77, 142);
    doc.rect(0, 0, 210, 34, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("SA INNOVATION COLLEGE", 18, 15);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Official student resource", 18, 24);
    doc.setTextColor(27, 27, 27);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(name, 18, 60);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(doc.splitTextToSize(description, 174), 18, 76);
    doc.setDrawColor(220, 225, 232);
    doc.line(18, 105, 192, 105);
    doc.setFontSize(10);
    doc.text(`Document version: ${version}`, 18, 120);
    doc.text(`Published: 01 January 2026`, 18, 130);
    doc.text("Please confirm the latest version with Admissions before relying on this document.", 18, 150);
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("SA Innovation College • 147 Burger Avenue, Lyttelton Manor, Centurion, 0157 • 0800 014 568", 18, 280);
    doc.save(filename);
  }, [name, filename, version, description]);

  return <button type="button" onClick={download} className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] transition-all duration-200 hover:gap-2.5" aria-label={`Download ${name}`}><Icon name="arrow-down-tray" size={4} />Download PDF</button>;
}