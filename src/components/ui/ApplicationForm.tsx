"use client";

import { useState, useEffect, useRef, useCallback, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import Icon, { type IconName } from "@/components/ui/Icon";
import DownloadPdfButton from "@/components/ui/DownloadPdfButton";

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

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

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
  const isMobile = useMediaQuery("(max-width: 639px)");

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

  const inpIcon = (field: string) => cn(
    "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200",
    errors[field] ? "text-red-400" : "text-[var(--color-gray-400)] group-focus-within:text-[var(--color-primary)]"
  );
  const inp = (field: string) => cn(
    "w-full rounded-xl border bg-[var(--color-white)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-all duration-200 text-sm pl-10 pr-4 py-3",
    errors[field]
      ? "border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-500/10"
      : "border-[var(--color-border)] focus:border-[var(--color-border-focus)] focus:ring-3 focus:ring-[var(--color-primary)]/10 hover:border-[var(--color-gray-300)]"
  );

  const stepContentClass = cn(
    "transition-all duration-500 ease-in-out",
    direction === "forward" ? "animate-slideInRight" : "animate-slideInLeft"
  );

  const ICONS: Record<string, IconName> = {
    fullName: "user",
    idNumber: "identification",
    dob: "calendar",
    phone: "phone",
    email: "envelope",
    address: "map-pin",
    startDate: "calendar",
    category: "academic-cap",
    course: "book-open",
    education: "academic-cap",
    employStatus: "briefcase",
    hearAbout: "megaphone",
  };

  function InputField({ field, label, required, type = "text", placeholder, autoFocus }: { field: string; label: string; required?: boolean; type?: string; placeholder?: string; autoFocus?: boolean }) {
    const id = `af-${field}`;
    const val = form[field as keyof typeof form] as string;
    const iconName = ICONS[field];
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
        <div className="relative group">
          {iconName && <Icon name={iconName} size={4} className={inpIcon(field)} />}
          {type === "textarea" ? (
            <textarea id={id} rows={2} maxLength={500} value={val}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              placeholder={placeholder || `Enter ${label.toLowerCase()}`}
              className={cn(inp(field), "resize-y min-h-[80px]")}
            />
          ) : type === "select" ? (
            <select id={id} value={val} onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className={cn(inp(field), "appearance-none cursor-pointer")}
            >
              {placeholder && <option value="">{placeholder}</option>}
            </select>
          ) : (
            <input ref={autoFocus ? nameRef : undefined} autoFocus={autoFocus} type={type} id={id}
              maxLength={field === "email" ? 200 : field === "phone" ? 20 : field === "idNumber" ? 20 : 100}
              required={required} value={val}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              placeholder={placeholder || `Enter ${label.toLowerCase()}`}
              className={inp(field)}
            />
          )}
        </div>
        {errors[field] && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
            <Icon name="exclamation-circle" size={3} />
            {errors[field]}
          </p>
        )}
      </div>
    );
  }

  function SelectField({ field, label, required, placeholder, children, autoFocus }: { field: string; label: string; required?: boolean; placeholder: string; children: React.ReactNode; autoFocus?: boolean }) {
    const id = `af-${field}`;
    const val = form[field as keyof typeof form] as string;
    const iconName = ICONS[field];
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
        <div className="relative group">
          {iconName && <Icon name={iconName} size={4} className={inpIcon(field)} />}
          <select id={id} autoFocus={autoFocus} value={val}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className={cn(inp(field), "appearance-none cursor-pointer")}
          >
            <option value="">{placeholder}</option>
            {children}
          </select>
        </div>
        {errors[field] && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
            <Icon name="exclamation-circle" size={3} />
            {errors[field]}
          </p>
        )}
      </div>
    );
  }

  function NavButtons({ nextLabel = "Next Step", showBack = true }: { nextLabel?: string; showBack?: boolean }) {
    return (
      <div className="flex gap-3 pt-4">
        {showBack && (
          <button type="button" onClick={prevStep}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] hover:border-[var(--color-gray-300)] transition-all">
            <Icon name="arrow-left" size={4} />
            Back
          </button>
        )}
        <button type="button" onClick={nextStep}
          className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wide rounded-xl bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] bg-[length:200%_200%] animate-border-flow text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all btn-shine">
          {nextLabel}
          <Icon name="arrow-right" size={4} />
        </button>
      </div>
    );
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-12 text-center animate-scaleIn">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg shadow-green-200">
          <Icon name="check" size={12} />
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
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white hover:shadow-lg btn-shine transition-all">
          <Icon name="arrow-uturn-left" size={4} />
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
              <Icon name="check-badge" size={7} />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 text-center">Ready to Submit?</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-2 text-center">Please confirm your details are correct. Our admissions team will be in touch within 2-3 business days.</p>
            <div className="mb-6 rounded-xl bg-[var(--color-gray-50)] p-4 text-sm space-y-1 border border-[var(--color-border)]">
              <p><span className="font-medium text-[var(--color-text-muted)]">Name:</span> {form.title ? `${form.title} ` : ""}{form.fullName}</p>
              <p><span className="font-medium text-[var(--color-text-muted)]">Course:</span> {form.course}</p>
              <p><span className="font-medium text-[var(--color-text-muted)]">Phone:</span> {form.phone}</p>
              <p><span className="font-medium text-[var(--color-text-muted)]">Email:</span> {form.email}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowConfirm(false)}
                className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] transition-all">Review Again</button>
              <button onClick={handleSubmit}
                className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white hover:shadow-lg btn-shine transition-all">Confirm & Submit</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-end mb-4 no-print">
        <DownloadPdfButton type="application" data={form} label="Download PDF" />
      </div>

      <form onSubmit={(e) => { e.preventDefault(); setShowConfirm(true); }} noValidate>
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
                        <Icon name="check" size={5} className="animate-scaleIn" />
                      ) : s}
                    </div>
                    {!isMobile && (
                      <span className={cn(
                        "mt-2 text-[11px] font-medium leading-tight text-center max-w-[80px]",
                        step === s ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"
                      )}>{label}</span>
                    )}
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

        {step === 1 && (
          <div className={stepContentClass}>
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Icon name="user" size={5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Personal Information</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">Tell us about yourself</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-4 gap-5">
                <div>
                  <label htmlFor="af-title" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Title</label>
                  <select id="af-title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-text-primary)] outline-none transition-all duration-200 text-sm px-4 py-3 focus:border-[var(--color-border-focus)] focus:ring-3 focus:ring-[var(--color-primary)]/10 hover:border-[var(--color-gray-300)] appearance-none cursor-pointer">
                    <option value="">Select</option>
                    {TITLES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-3">
                  <InputField field="fullName" label="Full Name" required autoFocus />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <InputField field="idNumber" label="ID / Passport Number" placeholder="e.g. 000101 0000 000" />
                <InputField field="dob" label="Date of Birth" type="date" />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <InputField field="phone" label="Phone Number" required type="tel" />
                <InputField field="email" label="Email Address" required type="email" />
              </div>

              <InputField field="address" label="Physical Address" type="textarea" />

              <InputField field="startDate" label="Preferred Start Date" type="date" />

              <NavButtons />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={stepContentClass}>
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <Icon name="academic-cap" size={5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Course Selection</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">Choose your programme of study</p>
                </div>
              </div>

              <SelectField field="category" label="Category" required placeholder="Select a category" autoFocus>
                {CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
              </SelectField>

              <div>
                <label htmlFor="af-course" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">Course <span className="text-red-500 ml-0.5">*</span></label>
                <div className="relative group">
                  <Icon name="book-open" size={4} className={inpIcon("course")} />
                  <select id="af-course" value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className={cn(inp("course"), "appearance-none cursor-pointer")}
                    disabled={!form.category}>
                    <option value="">{form.category ? "Select a course" : "First select a category"}</option>
                    {selectedCourses().map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                {errors.course && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                    <Icon name="exclamation-circle" size={3} />
                    {errors.course}
                  </p>
                )}
              </div>

              {form.course && (
                <div className="rounded-xl border border-[var(--color-primary)]/20 bg-gradient-to-br from-[var(--color-primary)]/[0.04] to-transparent p-5 animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      <Icon name="check" size={4} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">Selected Programme</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">{form.course}</p>
                    </div>
                  </div>
                </div>
              )}

              <NavButtons />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={stepContentClass}>
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Icon name="briefcase" size={5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Education & Employment</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">Tell us about your background</p>
                </div>
              </div>

              <SelectField field="education" label="Highest Education Level" placeholder="Select (optional)">
                <option value="grade-9">Grade 9</option>
                <option value="grade-10">Grade 10</option>
                <option value="grade-11">Grade 11</option>
                <option value="grade-12">Grade 12 / Matric</option>
                <option value="certificate">Certificate</option>
                <option value="diploma">Diploma</option>
                <option value="degree">Degree</option>
                <option value="other">Other</option>
              </SelectField>

              <SelectField field="employStatus" label="Employment Status" placeholder="Select (optional)">
                {EMPLOY_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </SelectField>

              <SelectField field="hearAbout" label="How did you hear about us?" placeholder="Select (optional)">
                {HEAR_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </SelectField>

              <NavButtons nextLabel="Review Application" />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className={stepContentClass}>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <Icon name="shield-check" size={5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Review & Submit</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">Please review your application before submitting</p>
                </div>
              </div>

              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
                <div className="grid divide-y divide-[var(--color-border)]">
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Personal Information</h4>
                      <button type="button" onClick={() => goToStep(1)} className="text-xs font-semibold text-[var(--color-primary)] hover:underline flex items-center gap-1">
                        <Icon name="pencil" size={3} />
                        Edit
                      </button>
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

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Course Selection</h4>
                      <button type="button" onClick={() => goToStep(2)} className="text-xs font-semibold text-[var(--color-primary)] hover:underline flex items-center gap-1">
                        <Icon name="pencil" size={3} />
                        Edit
                      </button>
                    </div>
                    <div className="text-sm">
                      <div><span className="text-[var(--color-text-muted)]">Category:</span> <span className="font-medium text-[var(--color-text-primary)]">{CATEGORIES.find(c => c.id === form.category)?.label || form.category}</span></div>
                      <div><span className="text-[var(--color-text-muted)]">Course:</span> <span className="font-semibold text-[var(--color-primary)]">{form.course}</span></div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Background</h4>
                      <button type="button" onClick={() => goToStep(3)} className="text-xs font-semibold text-[var(--color-primary)] hover:underline flex items-center gap-1">
                        <Icon name="pencil" size={3} />
                        Edit
                      </button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                      <div><span className="text-[var(--color-text-muted)]">Education:</span> <span className="font-medium text-[var(--color-text-primary)]">{form.education || "Not provided"}</span></div>
                      <div><span className="text-[var(--color-text-muted)]">Employment:</span> <span className="font-medium text-[var(--color-text-primary)]">{form.employStatus || "Not provided"}</span></div>
                      <div><span className="text-[var(--color-text-muted)]">Heard via:</span> <span className="font-medium text-[var(--color-text-primary)]">{form.hearAbout || "Not specified"}</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-primary)]/[0.03] to-transparent p-6">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)]">Declaration</h4>
                <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  By submitting this application, you confirm that you have read, understood, and agree to SA Innovation College&apos;s Terms & Conditions and Refund Policy. You also confirm that all information provided is accurate and complete.
                </p>
                <label className="flex items-start gap-3 cursor-pointer select-none group">
                  <div className="relative flex h-5 w-5 shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      id="af-agree"
                      checked={form.agree}
                      onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                      className="h-5 w-5 rounded-md border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)] cursor-pointer transition-all"
                    />
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                    I Agree to the Terms & Conditions and Refund Policy <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.agree && (
                  <p className="mt-2 flex items-center gap-1 text-xs text-red-500">
                    <Icon name="exclamation-circle" size={3} />
                    {errors.agree}
                  </p>
                )}
              </div>

              {state === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 flex items-center gap-2">
                  <Icon name="exclamation-circle" size={4} className="shrink-0" />
                  {message}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={prevStep}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] hover:border-[var(--color-gray-300)] transition-all">
                  <Icon name="arrow-left" size={4} />
                  Back
                </button>
                <button type="submit" disabled={state === "loading"} className={cn(
                  "flex-1 inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wide rounded-xl transition-all btn-shine",
                  state === "loading"
                    ? "bg-[var(--color-primary)]/60 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] text-[var(--color-gray-900)] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                )}>
                  {state === "loading" ? (
                    <>
                      <Icon name="spinner" size={4} animated="spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Icon name="check-badge" size={4} />
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
