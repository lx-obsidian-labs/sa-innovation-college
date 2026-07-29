"use client";

import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import Icon from "@/components/ui/Icon";
import ApplicationFormPDF from "@/lib/ApplicationFormPDF";

export default function BlankApplicationDownload() {
  const [loading, setLoading] = useState(false);

  async function download() {
    setLoading(true);
    try {
      const blob = await pdf(<ApplicationFormPDF mode="blank" />).toBlob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "SAIC-Application-Form-2026-Blank.pdf";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  }

  return <button type="button" onClick={download} disabled={loading} className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-md disabled:cursor-wait disabled:opacity-60"><Icon name="arrow-down-tray" size={4} />{loading ? "Preparing PDF…" : "Download blank form"}</button>;
}