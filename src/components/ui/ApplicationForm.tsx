"use client";

import { useState, useEffect, useRef, useCallback, type FormEvent } from "react";
import { cn } from "@/lib/utils";

const TITLES = ["Mr", "Mrs", "Miss", "Ms", "Dr", "Prof"];

const CATEGORIES = [
  { id: "computer", label: "Computer & Digital Skills", courses: ["Basic Computer Literacy NQF 3", "Advanced Computer Literacy NQF 3", "MS Word (Intro\u2013Advanced)", "MS Excel (Intro\u2013Advanced)", "MS PowerPoint (Intro\u2013Advanced)", "MS Access", "MS Outlook", "MS Project", "5-Day Website Design"] },
  { id: "business", label: "Business & Administration", courses: ["Office Administration NQF 3", "General Administration NQF 4", "Basic Bookkeeping", "Business Communication Skills", "Receptionist Course"] },
  { id: "hospitality", label: "Customer Service & Hospitality", courses: ["Customer Service Skills", "Table Service Course", "Call Centre Operator"] },
  { id: "marketing", label: "Marketing & Sales", courses: ["Basic Marketing and Selling NQF 2", "Marketing Management N4-N6"] },
  { id: "management", label: "Management & Entrepreneurship", courses: ["Entrepreneurship & Small Business", "New Venture Creation NQF 2", "Project Management", "Conflict Management NQF 5", "Business Management N4-N6", "Management Assistant N4-N6"] },
  { id: "finance", label: "Finance & Accounting", courses: ["Basic Financial Management", "Bookkeeper", "Financial Management N4-N6"] },
  { id: "hr", label: "Human Resources", courses: ["Human Resources Management N4-N6", "Skills Development Facilitation Practitioner NQF 5"] },
  { id: "education", label: "Education & Training", courses: ["Facilitator Course NQF 5", "Assessor Course", "Training & Development Practitioner NQF 5", "Learning & Development Practitioner NQF 6", "Work Based Learning Practitioner NQF 5", "Educare / Junior Teacher N4-N6", "Adult Literacy Teacher"] },
  { id: "ecd", label: "Early Childhood Development", courses: ["Early Childhood Development NQF 4", "Early Childhood Caregiver NQF 1"] },
  { id: "safety", label: "Health & Safety", courses: ["Basic Health and Safety", "Health and Safety Assistant NQF 4", "First Aid (Basic/Intermediate/Advanced)", "Occupational Health and Safety Practitioner"] },
  { id: "security", label: "Security & Legal Studies", courses: ["Traffic Officer Course", "National Diploma: Policing NQF 6", "Paralegal Practice NQF 5", "Family Law Practitioner NQF 5"] },
  { id: "engineering", label: "Engineering", courses: ["Mechanical Engineering N1-N6", "Electrical Engineering N1-N6", "Civil Engineering N1-N6"] },
  { id: "it", label: "Information Technology", courses: ["CompTIA IT Fundamentals", "CompTIA A+ (PC Engineering)", "CompTIA Network+", "CompTIA Security+", "Software Developer NQF 5"] },
  { id: "health", label: "Health & Social Services", courses: ["Health Promotion Officer NQF 5"] },
];

const EMPLOY_OPTIONS = ["Employed Full-time", "Employed Part-time", "Self-employed", "Unemployed", "Student", "Other"];
const HEAR_OPTIONS = ["Google / Search", "Facebook", "Instagram", "WhatsApp", "Friend / Family", "Walk-in", "Radio / TV", "Other"];

interface FormValues {
  title: string; fullName: string; idNumber: string; dob: string; phone: string; email: string; address: string; startDate: string;
  category: string; course: string; education: string; employStatus: string; hearAbout: string; agree: boolean;
}

const initialForm: FormValues = {
  title: "", fullName: "", idNumber: "", dob: "", phone: "", email: "", address: "", startDate: "",
  category: "", course: "", education: "", employStatus: "", hearAbout: "", agree: false,
};

const STEP_LABELS = ["Personal Info", "Course Selection", "Education & Employment", "Review & Submit"];

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [refNumber, setRefNumber] = useState("");
  const [form, setForm] = useState<FormValues>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showConfirm, setShowConfirm] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const hasData = Object.values(form).some((v) => typeof v === "string" && v.trim().length > 0);

  useEffect(() => {
    if (hasData) {
      const handler = (e: BeforeUnloadEvent) => { e.preventDefault(); e.returnValue = ""; };
      window.addEventListener("beforeunload", handler);
      return () => window.removeEventListener("beforeunload", handler);
    }
  }, [hasData]);

  useEffect(() => {
    if (step === 1) nameRef.current?.focus();
  }, [step]);

  function selectedCourses() {
    return CATEGORIES.find((c) => c.id === form.category)?.courses || [];
  }

  function validateStep(s: number): boolean {
    const errs: Record<string, string> = {};
    if (s === 1) {
      if (!form.fullName.trim()) errs.fullName = "Full name is required";
      if (!form.phone.trim()) errs.phone = "Phone is required";
      else if (!/^[\d\s+\-()]{7,15}$/.test(form.phone)) errs.phone = "Enter a valid phone number";
      if (!form.email.trim()) errs.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address";
    }
    if (s === 2) {
      if (!form.category) errs.category = "Select a category";
      if (!form.course) errs.course = "Select a course";
    }
    if (s === 4) {
      if (!form.agree) errs.agree = "You must agree to the terms to proceed";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  const nextStep = useCallback(() => {
    if (validateStep(step)) {
      setDirection("forward");
      setStep((s) => Math.min(s + 1, 4));
    }
  }, [step]);

  const prevStep = useCallback(() => {
    setDirection("back");
    setStep((s) => Math.max(s - 1, 1));
    setErrors({});
  }, []);

  function goToStep(s: number) {
    if (s < step) {
      setDirection("back");
      setStep(s);
      setErrors({});
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setShowConfirm(false);
    if (!validateStep(4)) return;
    setState("loading");
    setMessage("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setState("success");
        setMessage(data.message || "Application submitted successfully!");
        setRefNumber(data.refNumber || `SAIC-${Date.now().toString(36).toUpperCase()}`);
      } else {
        setState("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setMessage("Could not connect to the server. Your email client will open as a backup.");
      const subject = `Application: ${form.fullName} - ${form.course}`;
      const body = `Online Application\n\nTitle: ${form.title}\nFull Name: ${form.fullName}\nID Number: ${form.idNumber || "N/A"}\nDOB: ${form.dob || "N/A"}\nPhone: ${form.phone}\nEmail: ${form.email}\nAddress: ${form.address || "N/A"}\nPreferred Start: ${form.startDate || "N/A"}\nCourse: ${form.course}\nEducation: ${form.education || "N/A"}\nEmployment: ${form.employStatus || "N/A"}\nHeard via: ${form.hearAbout || "N/A"}`;
      setRefNumber(`SAIC-${Date.now().toString(36).toUpperCase()}`);
      setTimeout(() => { window.location.href = `mailto:info@sainnovationcollege.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; }, 1500);
    }
  }

  const inp = (field: string) => cn(
    "w-full px-4 py-3 rounded-lg border bg-[var(--color-white)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition",
    errors[field]
      ? "border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-500/10"
      : "border-[var(--color-border)] focus:border-[var(--color-border-focus)] focus:ring-3 focus:ring-[var(--color-primary)]/10"
  );

  const stepContentClass = cn(
    "transition-all duration-500 ease-in-out",
    direction === "forward" ? "animate-slideInRight" : "animate-slideInLeft"
  );

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-12 text-center animate-scaleIn">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg shadow-green-200">
          <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-extrabold text-green-800">Application Submitted!</h3>
        <p className="mb-6 max-w-md text-green-700">{message}</p>
        <div className="mb-8 rounded-xl border border-green-200 bg-white px-8 py-5 shadow-sm">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">Reference Number</p>
          <p className="text-2xl font-bold tracking-wider text-[var(--color-primary)]">{refNumber}</p>
        </div>
        <p className="mb-6 text-sm text-[var(--color-text-secondary)]">
          Please save your reference number. Our admissions team will contact you within 2-3 business days.
        </p>
        <button onClick={() => { setState("idle"); setForm(initialForm); setStep(1); setRefNumber(""); }}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-all">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
          </svg>
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <>
      {showConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={() => setShowConfirm(false)}>
          <div className="max-w-md w-full rounded-2xl bg-white p-6 shadow-2xl animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 text-center">Ready to Submit?</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-2 text-center">Please confirm your details are correct. Our admissions team will be in touch within 2-3 business days.</p>
            <div className="mb-6 rounded-lg bg-[var(--color-gray-50)] p-4 text-sm space-y-1">
              <p><span className="font-medium text-[var(--color-text-muted)]">Name:</span> {form.title ? `${form.title} ` : ""}{form.fullName}</p>
              <p><span className="font-medium text-[var(--color-text-muted)]">Course:</span> {form.course}</p>
              <p><span className="font-medium text-[var(--color-text-muted)]">Phone:</span> {form.phone}</p>
              <p><span className="font-medium text-[var(--color-text-muted)]">Email:</span> {form.email}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowConfirm(false)} className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] transition-all">Review Again</button>
              <button onClick={handleSubmit} className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white hover:shadow-lg transition-all">Confirm & Submit</button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={(e) => { e.preventDefault(); setShowConfirm(true); }} noValidate>
        {/* Steps indicator */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {STEP_LABELS.map((label, i) => {
              const s = i + 1;
              return (
                <div key={s} className="flex items-center flex-1">
                  <button type="button"
                    onClick={() => goToStep(s)}
                    className={cn(
                      "flex flex-col items-center transition-all duration-300",
                      s <= step ? "cursor-pointer" : "cursor-default"
                    )}
                  >
                    <div className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-500",
                      step > s ? "bg-green-500 text-white shadow-md" : step === s ? "bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-lg shadow-[var(--color-primary)]/30 scale-110" : "bg-[var(--color-gray-200)] text-[var(--color-text-muted)]"
                    )}>
                      {step > s ? (
                        <svg className="h-5 w-5 animate-scaleIn" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : s}
                    </div>
                    <span className={cn(
                      "mt-2 text-[11px] font-medium leading-tight text-center max-w-[80px] hidden sm:block",
                      step === s ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"
                    )}>{label}</span>
                  </button>
                  {i < STEP_LABELS.length - 1 && (
                    <div className={cn(
                      "flex-1 h-0.5 mx-2 sm:mx-4 transition-all duration-500",
                      step > s ? "bg-green-500" : step === s ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-gray-200)]" : "bg-[var(--color-gray-200)]"
                    )} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className={stepContentClass}>
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Personal Information</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">Tell us about yourself</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-4 gap-5">
                <div>
                  <label htmlFor="af-title" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Title</label>
                  <select id="af-title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className={inp("title")}>
                    <option value="">Select</option>
                    {TITLES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="af-name" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input ref={nameRef} autoFocus type="text" id="af-name" maxLength={100} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="e.g. Thando Mokoena" className={inp("fullName")} />
                  {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="af-id" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">ID / Passport Number</label>
                  <input type="text" id="af-id" maxLength={20} value={form.idNumber} onChange={(e) => setForm({ ...form, idNumber: e.target.value })} placeholder="e.g. 000101 0000 000" className={inp("idNumber")} />
                </div>
                <div>
                  <label htmlFor="af-dob" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Date of Birth</label>
                  <input type="date" id="af-dob" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} className={inp("dob")} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="af-phone" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" id="af-phone" maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="e.g. 071 234 5678" className={inp("phone")} />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="af-email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" id="af-email" maxLength={200} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className={inp("email")} />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="af-address" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Physical Address</label>
                <textarea id="af-address" rows={2} maxLength={500} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Your residential address" className={cn(inp("address"), "resize-y")} />
              </div>

              <div>
                <label htmlFor="af-start" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Preferred Start Date</label>
                <input type="date" id="af-start" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} className={inp("startDate")} />
              </div>

              <div className="flex justify-end pt-4">
                <button type="button" onClick={nextStep} className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Next Step
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Course Selection */}
        {step === 2 && (
          <div className={stepContentClass}>
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Course Selection</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">Choose your programme of study</p>
                </div>
              </div>

              <div>
                <label htmlFor="af-category" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Category <span className="text-red-500">*</span></label>
                <select id="af-category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value, course: "" })} className={inp("category")} autoFocus>
                  <option value="">Select a category</option>
                  {CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
                </select>
                {errors.category && <p className="mt-1 text-xs text-red-500">{errors.category}</p>}
              </div>

              <div>
                <label htmlFor="af-course" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Course <span className="text-red-500">*</span></label>
                <select id="af-course" value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} className={inp("course")} disabled={!form.category}>
                  <option value="">{form.category ? "Select a course" : "First select a category"}</option>
                  {selectedCourses().map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.course && <p className="mt-1 text-xs text-red-500">{errors.course}</p>}
              </div>

              {form.course && (
                <div className="rounded-xl border border-[var(--color-primary)]/20 bg-gradient-to-br from-[var(--color-primary)]/[0.04] to-transparent p-5 animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">Selected Programme</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">{form.course}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button type="button" onClick={prevStep} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] transition-all">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Back
                </button>
                <button type="button" onClick={nextStep} className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Next Step
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Education & Employment */}
        {step === 3 && (
          <div className={stepContentClass}>
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Education & Employment</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">Tell us about your background</p>
                </div>
              </div>

              <div>
                <label htmlFor="af-education" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Highest Education Level</label>
                <select id="af-education" value={form.education} onChange={(e) => setForm({ ...form, education: e.target.value })} className={inp("education")} autoFocus>
                  <option value="">Select (optional)</option>
                  <option value="grade-9">Grade 9</option>
                  <option value="grade-10">Grade 10</option>
                  <option value="grade-11">Grade 11</option>
                  <option value="grade-12">Grade 12 / Matric</option>
                  <option value="certificate">Certificate</option>
                  <option value="diploma">Diploma</option>
                  <option value="degree">Degree</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="af-employ" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Employment Status</label>
                <select id="af-employ" value={form.employStatus} onChange={(e) => setForm({ ...form, employStatus: e.target.value })} className={inp("employStatus")}>
                  <option value="">Select (optional)</option>
                  {EMPLOY_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="af-hear" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">How did you hear about us?</label>
                <select id="af-hear" value={form.hearAbout} onChange={(e) => setForm({ ...form, hearAbout: e.target.value })} className={inp("hearAbout")}>
                  <option value="">Select (optional)</option>
                  {HEAR_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button type="button" onClick={prevStep} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] transition-all">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Back
                </button>
                <button type="button" onClick={nextStep} className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Review Application
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Review, Declaration & Submit */}
        {step === 4 && (
          <div className={stepContentClass}>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Review & Submit</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">Please review your application before submitting</p>
                </div>
              </div>

              {/* Summary card */}
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
                <div className="grid divide-y divide-[var(--color-border)]">
                  {/* Personal section */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Personal Information</h4>
                      <button type="button" onClick={() => goToStep(1)} className="text-xs font-semibold text-[var(--color-primary)] hover:underline">Edit</button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                      <div><span className="text-[var(--color-text-muted)]">Name:</span> <span className="font-medium text-[var(--color-text-primary)]">{form.title ? `${form.title} ` : ""}{form.fullName}</span></div>
                      <div><span className="text-[var(--color-text-muted)]">ID Number:</span> <span className="font-medium text-[var(--color-text-primary)]">{form.idNumber || "Not provided"}</span></div>
                      <div><span className="text-[var(--color-text-muted)]">DOB:</span> <span className="font-medium text-[var(--color-text-primary)]">{form.dob || "Not provided"}</span></div>
                      <div><span className="text-[var(--color-text-muted)]">Phone:</span> <span className="font-medium text-[var(--color-text-primary)]">{form.phone}</span></div>
                      <div className="sm:col-span-2"><span className="text-[var(--color-text-muted)]">Email:</span> <span className="font-medium text-[var(--color-text-primary)]">{form.email}</span></div>
                      {form.address && <div className="sm:col-span-2"><span className="text-[var(--color-text-muted)]">Address:</span> <span className="font-medium text-[var(--color-text-primary)]">{form.address}</span></div>}
                      {form.startDate && <div><span className="text-[var(--color-text-muted)]">Preferred Start:</span> <span className="font-medium text-[var(--color-text-primary)]">{form.startDate}</span></div>}
                    </div>
                  </div>

                  {/* Course section */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Course Selection</h4>
                      <button type="button" onClick={() => goToStep(2)} className="text-xs font-semibold text-[var(--color-primary)] hover:underline">Edit</button>
                    </div>
                    <div className="text-sm">
                      <div><span className="text-[var(--color-text-muted)]">Category:</span> <span className="font-medium text-[var(--color-text-primary)]">{CATEGORIES.find(c => c.id === form.category)?.label || form.category}</span></div>
                      <div><span className="text-[var(--color-text-muted)]">Course:</span> <span className="font-semibold text-[var(--color-primary)]">{form.course}</span></div>
                    </div>
                  </div>

                  {/* Education section */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Background</h4>
                      <button type="button" onClick={() => goToStep(3)} className="text-xs font-semibold text-[var(--color-primary)] hover:underline">Edit</button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                      <div><span className="text-[var(--color-text-muted)]">Education:</span> <span className="font-medium text-[var(--color-text-primary)]">{form.education || "Not provided"}</span></div>
                      <div><span className="text-[var(--color-text-muted)]">Employment:</span> <span className="font-medium text-[var(--color-text-primary)]">{form.employStatus || "Not provided"}</span></div>
                      <div><span className="text-[var(--color-text-muted)]">Heard via:</span> <span className="font-medium text-[var(--color-text-primary)]">{form.hearAbout || "Not specified"}</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Declaration */}
              <div className="rounded-xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-primary)]/[0.03] to-transparent p-6">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)]">Declaration</h4>
                <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  By submitting this application, you confirm that you have read, understood, and agree to SA Innovation College&apos;s Terms & Conditions and Refund Policy. You also confirm that all information provided is accurate and complete.
                </p>
                <div className="flex items-start gap-3">
                  <div className="relative flex h-5 w-5 shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      id="af-agree"
                      checked={form.agree}
                      onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                      className="h-5 w-5 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)] cursor-pointer"
                    />
                  </div>
                  <label htmlFor="af-agree" className="text-sm font-medium text-[var(--color-text-primary)] cursor-pointer select-none">
                    I Agree to the Terms & Conditions and Refund Policy <span className="text-red-500">*</span>
                  </label>
                </div>
                {errors.agree && <p className="mt-2 text-xs text-red-500">{errors.agree}</p>}
              </div>

              {state === "error" && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{message}</div>
              )}

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={prevStep} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] transition-all">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Back
                </button>
                <button type="submit" disabled={state === "loading"} className={cn(
                  "flex-1 inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg transition-all",
                  state === "loading"
                    ? "bg-[var(--color-primary)]/60 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] text-[var(--color-gray-900)] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                )}>
                  {state === "loading" ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Submit Application
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
