"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "computer", label: "Computer & Digital Skills", courses: ["Basic Computer Literacy NQF 3", "Advanced Computer Literacy NQF 3", "MS Word (Intro–Advanced)", "MS Excel (Intro–Advanced)", "MS PowerPoint (Intro–Advanced)", "MS Access", "MS Outlook", "MS Project", "5-Day Website Design"] },
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
  fullName: string; idNumber: string; dob: string; phone: string; email: string; address: string;
  category: string; course: string; education: string; employStatus: string; hearAbout: string; agree: boolean;
}

const initialForm: FormValues = {
  fullName: "", idNumber: "", dob: "", phone: "", email: "", address: "",
  category: "", course: "", education: "", employStatus: "", hearAbout: "", agree: false,
};

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
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
    if (s === 3) {
      if (!form.agree) errs.agree = "You must agree to proceed";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function nextStep() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, 3));
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 1));
    setErrors({});
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setShowConfirm(false);
    if (!validateStep(3)) return;
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
        setMessage(data.message);
      } else {
        setState("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setMessage("Could not connect to the server. Your email client will open as a backup.");
      const subject = `Application: ${form.fullName} - ${form.course}`;
      const body = `Online Application\n\nFull Name: ${form.fullName}\nID Number: ${form.idNumber || "N/A"}\nDOB: ${form.dob || "N/A"}\nPhone: ${form.phone}\nEmail: ${form.email}\nAddress: ${form.address || "N/A"}\nCourse: ${form.course}\nEducation: ${form.education || "N/A"}\nEmployment: ${form.employStatus || "N/A"}\nHeard via: ${form.hearAbout || "N/A"}`;
      setTimeout(() => { window.location.href = `mailto:info@sainnovationcollege.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; }, 1500);
    }
  }

  const inp = (field: string) => cn(
    "w-full px-4 py-3 rounded-lg border bg-[var(--color-white)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition",
    errors[field]
      ? "border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-500/10"
      : "border-[var(--color-border)] focus:border-[var(--color-border-focus)] focus:ring-3 focus:ring-[var(--color-primary)]/10"
  );

  const steps = [
    { num: 1, label: "Personal Info" },
    { num: 2, label: "Course Selection" },
    { num: 3, label: "Review & Submit" },
  ];

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-green-200 bg-green-50 p-12 text-center animate-scaleIn">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-green-800">Application Submitted!</h3>
        <p className="max-w-md text-green-700">{message}</p>
        <button onClick={() => { setState("idle"); setForm(initialForm); setStep(1); }} className="mt-6 text-sm font-semibold text-[var(--color-primary)] hover:underline">
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
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">Submit Application?</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-6">Please confirm your details are correct before submitting. Our admissions team will contact you within 2-3 business days.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowConfirm(false)} className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] transition-all">Review Again</button>
              <button onClick={handleSubmit} className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg bg-[var(--color-accent)] text-[var(--color-gray-900)] hover:bg-[var(--color-accent-dark)] transition-all">Confirm & Submit</button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={(e) => { e.preventDefault(); setShowConfirm(true); }} noValidate>
        {/* Steps indicator */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300",
                    step > s.num ? "bg-green-500 text-white" : step === s.num ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30" : "bg-[var(--color-gray-200)] text-[var(--color-text-muted)]"
                  )}>
                    {step > s.num ? (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : s.num}
                  </div>
                  <span className={cn("mt-2 text-xs font-medium", step === s.num ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]")}>{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={cn("flex-1 h-0.5 mx-4", step > s.num ? "bg-green-500" : "bg-[var(--color-gray-200)]")} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Personal Information</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="af-name" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Full Name <span className="text-red-500">*</span></label>
                <input ref={nameRef} autoFocus type="text" id="af-name" maxLength={100} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="e.g. Thando Mokoena" className={inp("fullName")} />
                {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
              </div>
              <div>
                <label htmlFor="af-id" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">ID / Passport Number</label>
                <input type="text" id="af-id" maxLength={20} value={form.idNumber} onChange={(e) => setForm({ ...form, idNumber: e.target.value })} placeholder="e.g. 000101 0000 000" className={inp("idNumber")} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="af-dob" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Date of Birth</label>
                <input type="date" id="af-dob" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} className={inp("dob")} />
              </div>
              <div>
                <label htmlFor="af-phone" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" id="af-phone" maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="e.g. 071 234 5678" className={inp("phone")} />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="af-email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Email Address <span className="text-red-500">*</span></label>
              <input type="email" id="af-email" maxLength={200} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className={inp("email")} />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="af-address" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Physical Address</label>
              <textarea id="af-address" rows={2} maxLength={500} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Your residential address" className={cn(inp("address"), "resize-y")} />
            </div>
            <div className="flex gap-3 pt-4">
              <button type="button" onClick={nextStep} className="flex-1 px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-all hover:scale-[1.02] active:scale-[0.98]">
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Course Selection */}
        {step === 2 && (
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Course Selection</h3>
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
            <div>
              <label htmlFor="af-education" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Highest Education Level</label>
              <select id="af-education" value={form.education} onChange={(e) => setForm({ ...form, education: e.target.value })} className={inp("education")}>
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
              <button type="button" onClick={prevStep} className="px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] transition-all">
                Back
              </button>
              <button type="button" onClick={nextStep} className="flex-1 px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-all hover:scale-[1.02] active:scale-[0.98]">
                Review Application
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Submit */}
        {step === 3 && (
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Review & Submit</h3>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div><span className="font-medium text-[var(--color-text-muted)]">Name:</span> <span className="text-[var(--color-text-primary)]">{form.fullName}</span></div>
                <div><span className="font-medium text-[var(--color-text-muted)]">Phone:</span> <span className="text-[var(--color-text-primary)]">{form.phone}</span></div>
                <div className="sm:col-span-2"><span className="font-medium text-[var(--color-text-muted)]">Email:</span> <span className="text-[var(--color-text-primary)]">{form.email}</span></div>
                <div className="sm:col-span-2"><span className="font-medium text-[var(--color-text-muted)]">Course:</span> <span className="text-[var(--color-text-primary)] font-semibold">{form.course || "Not selected"}</span></div>
                {form.education && <div><span className="font-medium text-[var(--color-text-muted)]">Education:</span> <span className="text-[var(--color-text-primary)]">{form.education}</span></div>}
                {form.employStatus && <div><span className="font-medium text-[var(--color-text-muted)]">Employment:</span> <span className="text-[var(--color-text-primary)]">{form.employStatus}</span></div>}
              </div>
              <button type="button" onClick={() => setStep(1)} className="text-xs font-semibold text-[var(--color-primary)] hover:underline">Edit details</button>
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="af-agree" checked={form.agree} onChange={(e) => setForm({ ...form, agree: e.target.checked })} className="mt-1 h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]" />
              <label htmlFor="af-agree" className="text-sm text-[var(--color-text-secondary)]">
                I confirm that the information provided is accurate and I agree to the <a href="/terms" className="text-[var(--color-primary)] hover:underline">terms and conditions</a>. <span className="text-red-500">*</span>
              </label>
            </div>
            {errors.agree && <p className="text-xs text-red-500">{errors.agree}</p>}

            {state === "error" && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{message}</div>
            )}

            <div className="flex gap-3 pt-4">
              <button type="button" onClick={prevStep} className="px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] transition-all">
                Back
              </button>
              <button type="submit" disabled={state === "loading"} className={cn(
                "flex-1 px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-lg transition-all",
                state === "loading"
                  ? "bg-[var(--color-primary)]/60 text-white cursor-not-allowed"
                  : "bg-[var(--color-accent)] text-[var(--color-gray-900)] hover:bg-[var(--color-accent-dark)] hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              )}>
                {state === "loading" ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </span>
                ) : "Submit Application"}
              </button>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
