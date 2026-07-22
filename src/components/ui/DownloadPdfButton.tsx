"use client";

import { useCallback } from "react";
import Icon from "@/components/ui/Icon";
import { generateContactPdf, generateApplicationPdf } from "@/lib/pdf-generator";

type FormType = "contact" | "application";

interface ContactData {
  name: string; surname: string; company: string; preferredContact: string;
  phone: string; email: string; course: string; message: string;
}

interface ApplicationData {
  title: string; fullName: string; gender: string; nationality: string; postalCode: string;
  idNumber: string; dob: string; phone: string; email: string; address: string; startDate: string;
  category: string; course: string; education: string; employStatus: string; hearAbout: string;
  emergencyName: string; emergencyPhone: string; fundingSource: string; previousSchool: string;
}

interface ContactPdfProps {
  type: "contact";
  data: ContactData;
}

interface ApplicationPdfProps {
  type: "application";
  data: ApplicationData;
}

type DownloadPdfButtonProps = {
  label?: string;
  className?: string;
  fileName?: string;
} & (ContactPdfProps | ApplicationPdfProps);

export default function DownloadPdfButton(props: DownloadPdfButtonProps) {
  const { label = "Download PDF", className = "", fileName } = props;

  const handleDownload = useCallback(() => {
    let doc: import("jspdf").jsPDF;
    let name: string;

    if (props.type === "contact") {
      doc = generateContactPdf(props.data);
      name = fileName || `Enquiry-${props.data.name.replace(/\s+/g, "_") || "Form"}`;
    } else {
      doc = generateApplicationPdf(props.data);
      name = fileName || `Application-${props.data.fullName.replace(/\s+/g, "_") || "Form"}`;
    }

    doc.save(`${name}.pdf`);
  }, [props, fileName]);

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={`no-print inline-flex items-center gap-2 rounded-xl border-2 border-[var(--color-primary)]/20 px-5 py-2.5 text-sm font-bold text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      <Icon name="arrow-down-tray" size={4} />
      {label}
    </button>
  );
}
