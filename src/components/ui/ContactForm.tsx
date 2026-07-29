"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import Icon, { type IconName } from "@/components/ui/Icon";
import DownloadPdfButton from "@/components/ui/DownloadPdfButton";

const COURSE_OPTIONS = [
  { category: "Computer & Digital Skills", courses: ["Basic Computer Literacy NQF 3", "Advanced Computer Literacy NQF 3", "MS Word (Intro\u2013Advanced)", "MS Excel (Intro\u2013Advanced)", "MS PowerPoint (Intro\u2013Advanced)", "MS Access", "MS Outlook", "MS Project", "5-Day Website Design"] },
  { category: "Business & Administration", courses: ["Office Administration NQF 3", "General Administration NQF 4", "Basic Bookkeeping", "Business Communication Skills", "Receptionist Course"] },
  { category: "Customer Service & Hospitality", courses: ["Customer Service Skills", "Table Service Course", "Call Centre Operator"] },
  { category: "Marketing & Sales", courses: ["Basic Marketing and Selling NQF 2", "Marketing Management N4-N6"] },
  { category: "Management & Entrepreneurship", courses: ["Entrepreneurship & Small Business", "New Venture Creation NQF 2", "Project Management", "Conflict Management NQF 5", "Business Management N4-N6", "Management Assistant N4-N6"] },
  { category: "Finance & Accounting", courses: ["Basic Financial Management", "Bookkeeper", "Financial Management N4-N6"] },
  { category: "Human Resources", courses: ["Human Resources Management N4-N6", "Skills Development Facilitation Practitioner NQF 5"] },
  { category: "Education & Training", courses: ["Facilitator Course NQF 5", "Assessor Course", "Training & Development Practitioner NQF 5", "Learning & Development Practitioner NQF 6", "Work Based Learning Practitioner NQF 5", "Early Childhood Development NQF 4", "Early Childhood Caregiver NQF 1"] },
  { category: "Early Childhood Development", courses: ["Early Childhood Development NQF 4", "Early Childhood Caregiver NQF 1"] },
  { category: "Health & Safety", courses: ["Basic Health and Safety", "Health and Safety Assistant NQF 4", "First Aid (Basic/Intermediate/Advanced)", "Occupational Health and Safety Practitioner"] },
  { category: "Security & Legal Studies", courses: ["Traffic Officer Course", "National Diploma: Policing NQF 6", "Paralegal Practice NQF 5", "Family Law Practitioner NQF 5"] },
  { category: "Engineering", courses: ["Mechanical Engineering N1-N6", "Electrical Engineering N1-N6", "Civil Engineering N1-N6"] },
  { category: "Information Technology", courses: ["CompTIA IT Fundamentals", "CompTIA A+ (PC Engineering)", "CompTIA Network+", "CompTIA Security+", "Software Developer NQF 5"] },
  { category: "Health & Social Services", courses: ["Health Promotion Officer NQF 5"] },
];

const PREFERRED_CONTACT_OPTIONS = ["Phone", "Email", "WhatsApp"];

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", surname: "", company: "", preferredContact: "", phone: "", email: "", course: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showConfirm, setShowConfirm] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const hasData = Object.values(formData).some((v) => v.trim().length > 0);

  useEffect(() => {
    if (hasData) {
      const handler = (e: BeforeUnloadEvent) => { e.preventDefault(); e.returnValue = ""; };
      window.addEventListener("beforeunload", handler);
      return () => window.removeEventListener("beforeunload", handler);
    }
  }, [hasData]);

  function validate() {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.surname.trim()) errs.surname = "Surname is required";
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[\d\s+\-()]{7,15}$/.test(formData.phone)) errs.phone = "Enter a valid phone number";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Enter a valid email address";
    if (!formData.message.trim()) errs.message = "Message is required";
    else if (formData.message.trim().length < 10) errs.message = "Message must be at least 10 characters";
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setShowConfirm(false);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      document.querySelector<HTMLElement>('[class*="border-red"]')?.focus();
      return;
    }
    setState("loading");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setState("success");
        setMessage(data.message);
        setFormData({ name: "", surname: "", company: "", preferredContact: "", phone: "", email: "", course: "", message: "" });
      } else {
        setState("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setMessage("Could not connect to the server. Your email client will open as a backup.");
      const mailto = `mailto:info@sainnovationcollege.co.za?subject=Contact%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name} ${formData.surname}%0ACompany: ${formData.company || "N/A"}%0APreferred Contact: ${formData.preferredContact || "N/A"}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ACourse: ${formData.course}%0A%0A${formData.message}`)}`;
      setTimeout(() => { window.location.href = mailto; }, 1500);
    }
  }

  const inputWrap = "relative";
  const inputIcon = (field: string) => cn(
    "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200",
    errors[field] ? "text-red-400" : "text-[var(--color-gray-400)] group-focus-within:text-[var(--color-primary)]"
  );
  const inputClass = (field: string) => cn(
    "w-full rounded-xl border bg-[var(--color-white)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-all duration-200 text-sm pl-10 pr-4 py-3",
    errors[field]
      ? "border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-500/10"
      : "border-[var(--color-border)] focus:border-[var(--color-border-focus)] focus:ring-3 focus:ring-[var(--color-primary)]/10 hover:border-[var(--color-gray-300)]"
  );

  const labelClass = "block text-sm font-medium text-[var(--color-text-primary)] mb-1.5";

  const ICONS: Record<string, IconName> = {
    name: "user",
    surname: "user",
    company: "briefcase",
    preferredContact: "chat-bubble-left-right",
    phone: "phone",
    email: "envelope",
    course: "academic-cap",
    message: "chat-bubble-left-right",
  };

  function Field({ field, label, required, children, type = "text" }: { field: string; label: string; required?: boolean; children?: React.ReactNode; type?: string }) {
    const id = `cf-${field}`;
    const val = formData[field as keyof typeof formData] as string;
    return (
      <div className={inputWrap}>
        {label && <label htmlFor={id} className={labelClass}>{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>}
        <div className="relative group">
          <Icon name={ICONS[field]} size={4} className={inputIcon(field)} />
          {type === "textarea" ? (
            <textarea id={id} rows={5} maxLength={2000} required={required} value={val}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              placeholder={`Enter your ${label.toLowerCase()}`}
              className={cn(inputClass(field), "resize-y min-h-[120px]")}
            />
          ) : type === "select" ? (
            <select id={id} value={val} onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              className={cn(inputClass(field), "appearance-none cursor-pointer")}
            >
              <option value="">Select a programme (optional)</option>
              {COURSE_OPTIONS.map((group) => (
                <optgroup key={group.category} label={group.category}>
                  {group.courses.map((c) => <option key={c} value={c}>{c}</option>)}
                </optgroup>
              ))}
            </select>
          ) : (
            <input ref={field === "name" ? nameRef : undefined} autoFocus={field === "name"} type={type} id={id} maxLength={field === "email" ? 200 : field === "phone" ? 20 : 100}
              required={required} value={val}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              placeholder={`Enter your ${label.toLowerCase()}`}
              className={inputClass(field)}
            />
          )}
        </div>
        {errors[field] && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
            <Icon name="exclamation-circle" size={3} />
            {errors[field]}
          </p>
        )}
        {children}
      </div>
    );
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-12 text-center animate-scaleIn">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg shadow-green-200">
          <Icon name="check" size={10} />
        </div>
        <h3 className="mb-2 text-xl font-extrabold text-green-800">Message Sent!</h3>
        <p role="status" aria-live="polite" className="mb-6 max-w-sm text-green-700">{message}</p>
        <button onClick={() => setState("idle")}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white hover:shadow-lg btn-shine transition-all">
          <Icon name="envelope" size={4} />
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-end mb-4 no-print">
        <DownloadPdfButton type="contact" data={formData} label="Download PDF" />
      </div>

      {showConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={() => setShowConfirm(false)}>
          <div className="max-w-md w-full rounded-2xl bg-white p-6 shadow-2xl animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
              <Icon name="envelope" size={7} />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 text-center">Send Message?</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-6 text-center">Are you sure you want to submit this message? Our team will respond within 2-3 business days.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowConfirm(false)}
                className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] transition-all">Cancel</button>
              <button onClick={handleSubmit}
                className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white hover:shadow-lg btn-shine transition-all">Send</button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={(e) => { e.preventDefault(); setShowConfirm(true); }} className="space-y-5" noValidate>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field field="name" label="First Name" required />
          <Field field="surname" label="Surname" required />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field field="company" label="Company / Organisation" />
          <Field field="phone" label="Phone Number" required type="tel" />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field field="email" label="Email Address" required type="email" />
          <div className={inputWrap}>
            <label htmlFor="cf-preferredContact" className={labelClass}>Preferred Contact Method</label>
            <div className="relative group">
              <Icon name={ICONS["preferredContact"]} size={4} className={inputIcon("preferredContact")} />
              <select id="cf-preferredContact" value={formData.preferredContact}
                onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                className={cn(inputClass("preferredContact"), "appearance-none cursor-pointer")}
              >
                <option value="">Select preferred method</option>
                {PREFERRED_CONTACT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          </div>
        </div>

        <Field field="course" label="Course Interested In" type="select" />

        <Field field="message" label="Your Message" required type="textarea" />

        {state === "error" && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 flex items-center gap-2">
            <Icon name="exclamation-circle" size={4} className="shrink-0" />
            {message}
          </div>
        )}

        <button type="submit" disabled={state === "loading"} className={cn(
          "inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide rounded-xl transition-all duration-200",
          state === "loading"
            ? "bg-[var(--color-primary)]/60 text-white cursor-not-allowed"
            : "bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] bg-[length:200%_200%] animate-border-flow text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] shadow-sm btn-shine"
        )}>
          {state === "loading" ? (
            <>
              <Icon name="spinner" size={4} animated="spin" />
              Sending...
            </>
          ) : (
            <>
              <Icon name="paper-airplane" size={4} />
              Send Message
            </>
          )}
        </button>
      </form>
    </>
  );
}
