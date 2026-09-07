"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

const PROGRAMME_FEES = [
  { name: "Basic Computer Literacy NQF 3", duration: "12 weeks", mode: "Full-time", installmentRange: "R3,500 – R5,000", totalRange: "R8,000 – R12,000" },
  { name: "Advanced Computer Literacy NQF 3", duration: "12 weeks", mode: "Full-time", installmentRange: "R4,000 – R5,500", totalRange: "R9,000 – R13,000" },
  { name: "Office Administration NQF 3", duration: "12 months", mode: "Full-time", installmentRange: "R2,500 – R4,000", totalRange: "R25,000 – R38,000" },
  { name: "Entrepreneurship & Small Business", duration: "12 weeks", mode: "Full-time", installmentRange: "R3,500 – R5,000", totalRange: "R8,000 – R12,000" },
  { name: "Traffic Officer Course", duration: "18 months", mode: "Full-time", installmentRange: "R3,500 – R5,500", totalRange: "R45,000 – R65,000" },
  { name: "Facilitator Course NQF 5", duration: "30 days", mode: "Full-time", installmentRange: "R5,000 – R7,000", totalRange: "R12,000 – R18,000" },
  { name: "Business Management N4-N6", duration: "18 months", mode: "Full-time", installmentRange: "R3,000 – R4,500", totalRange: "R35,000 – R50,000" },
  { name: "Marketing Management N4-N6", duration: "18 months", mode: "Full-time", installmentRange: "R3,000 – R4,500", totalRange: "R35,000 – R50,000" },
  { name: "Financial Management N4-N6", duration: "18 months", mode: "Full-time", installmentRange: "R3,000 – R4,500", totalRange: "R35,000 – R50,000" },
  { name: "HR Management N4-N6", duration: "18 months", mode: "Full-time", installmentRange: "R3,000 – R4,500", totalRange: "R35,000 – R50,000" },
  { name: "CompTIA IT Fundamentals", duration: "8 weeks", mode: "Online", installmentRange: "R4,000 – R6,000", totalRange: "R10,000 – R15,000" },
  { name: "CompTIA A+", duration: "16 weeks", mode: "Online", installmentRange: "R4,500 – R6,500", totalRange: "R15,000 – R22,000" },
];

export default function FeeCalculator() {
  const [selectedProgramme, setSelectedProgramme] = useState("");
  const [monthlyBudget, setMonthlyBudget] = useState("");
  const [result, setResult] = useState<{ months: number; total: string } | null>(null);

  const calculate = () => {
    const programme = PROGRAMME_FEES.find((p) => p.name === selectedProgramme);
    const budget = parseFloat(monthlyBudget);
    if (!programme || !budget || budget <= 0) return;

    const totalStr = programme.totalRange.split("–")[1]?.trim() || programme.totalRange.split("–")[0].trim();
    const total = parseFloat(totalStr.replace(/[R,\s]/g, ""));
    const months = Math.ceil(total / budget);

    setResult({ months, total: programme.totalRange });
  };

  return (
    <div className="premium-card rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] md:p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10">
          <Icon name="calculator" size={5} className="text-[var(--color-primary)]" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Fee Calculator</h2>
          <p className="text-xs text-[var(--color-text-muted)]">Estimate your monthly payments</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-1.5">Select Programme</label>
          <select
            value={selectedProgramme}
            onChange={(e) => setSelectedProgramme(e.target.value)}
            className="w-full rounded-xl border border-[var(--color-gray-200)] bg-white px-4 py-3 text-sm text-[var(--color-text-primary)] transition-all duration-200 focus:border-[var(--color-primary)] focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]/10"
          >
            <option value="">Choose a programme...</option>
            {PROGRAMME_FEES.map((p) => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-1.5">Monthly Budget (ZAR)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[var(--color-gray-400)]">R</span>
            <input
              type="number"
              placeholder="e.g. 3500"
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(e.target.value)}
              className="w-full rounded-xl border border-[var(--color-gray-200)] bg-white py-3 pl-8 pr-4 text-sm text-[var(--color-text-primary)] transition-all duration-200 focus:border-[var(--color-primary)] focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]/10"
            />
          </div>
        </div>

        <button
          onClick={calculate}
          disabled={!selectedProgramme || !monthlyBudget}
          className="w-full rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none btn-shine"
        >
          Calculate Payments
        </button>

        {result && (
          <div className="rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/[0.05] p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="check-circle" size={5} className="text-[var(--color-primary)]" />
              <span className="text-sm font-bold text-[var(--color-text-primary)]">Payment Estimate</span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Estimated total: <strong className="text-[var(--color-primary)]">{result.total}</strong>
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              At your budget, approximately <strong className="text-[var(--color-primary)]">{result.months} months</strong> to pay off.
            </p>
          </div>
        )}
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-[var(--color-text-muted)]">
        Fees are indicative and may vary. Contact Admissions for a current quotation and available payment plan options.
      </p>
    </div>
  );
}
