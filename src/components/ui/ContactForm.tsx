"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

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

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", course: "", message: "" });
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
        setFormData({ name: "", phone: "", email: "", course: "", message: "" });
      } else {
        setState("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setMessage("Could not connect to the server. Your email client will open as a backup.");
      const mailto = `mailto:info@sainnovationcollege.co.za?subject=Contact%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ACourse: ${formData.course}%0A%0A${formData.message}`)}`;
      setTimeout(() => { window.location.href = mailto; }, 1500);
    }
  }

  const inputClass = (field: string) => cn(
    "w-full px-4 py-3 rounded-xl border bg-[var(--color-white)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition duration-200 text-sm",
    errors[field]
      ? "border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-500/10"
      : "border-[var(--color-border)] focus:border-[var(--color-border-focus)] focus:ring-3 focus:ring-[var(--color-primary)]/10 hover:border-[var(--color-gray-300)]"
  );

  const labelClass = "block text-sm font-medium text-[var(--color-text-primary)] mb-1.5";

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-green-200 bg-green-50 p-10 text-center animate-scaleIn">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Icon name="check" size={8} className="text-green-600" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-green-800">Message Sent!</h3>
        <p className="text-green-700">{message}</p>
        <button onClick={() => setState("idle")} className="mt-6 text-sm font-semibold text-[var(--color-primary)] hover:underline">Send Another Message</button>
      </div>
    );
  }

  return (
    <>
      {showConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={() => setShowConfirm(false)}>
          <div className="max-w-md w-full rounded-2xl bg-white p-6 shadow-2xl animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">Send Message?</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-6">Are you sure you want to submit this message? Our team will respond within 2-3 business days.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowConfirm(false)} className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-gray-50)] transition-all">Cancel</button>
              <button onClick={handleSubmit} className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white hover:shadow-lg transition-all">Send</button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={(e) => { e.preventDefault(); setShowConfirm(true); }} className="space-y-5" noValidate>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cf-name" className={labelClass}>Full Name <span className="text-red-500">*</span></label>
            <input ref={nameRef} autoFocus type="text" id="cf-name" maxLength={100} required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" className={inputClass("name")} />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="cf-phone" className={labelClass}>Phone Number <span className="text-red-500">*</span></label>
            <input type="tel" id="cf-phone" maxLength={20} required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Your phone number" className={inputClass("phone")} />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="cf-email" className={labelClass}>Email Address <span className="text-red-500">*</span></label>
          <input type="email" id="cf-email" maxLength={200} required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" className={inputClass("email")} />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="cf-course" className={labelClass}>Course Interested In</label>
          <select id="cf-course" value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })} className={inputClass("course")}>
            <option value="">Select a programme (optional)</option>
            {COURSE_OPTIONS.map((group) => (
              <optgroup key={group.category} label={group.category}>
                {group.courses.map((c) => <option key={c} value={c}>{c}</option>)}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cf-message" className={labelClass}>Your Message <span className="text-red-500">*</span></label>
          <textarea id="cf-message" rows={5} maxLength={2000} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us more about what you&apos;re looking for..." className={cn(inputClass("message"), "resize-y min-h-[120px]")} />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
        </div>

        {state === "error" && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{message}</div>
        )}

        <button type="submit" disabled={state === "loading"} className={cn(
          "inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded-xl transition-all duration-200",
          state === "loading"
            ? "bg-[var(--color-primary)]/60 text-white cursor-not-allowed"
            : "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] shadow-sm"
        )}>
          {state === "loading" ? (
            <>
              <Icon name="spinner" size={4} animated="spin" />
              Sending...
            </>
          ) : (
            <>
              <Icon name="envelope" size={4} />
              Send Message
            </>
          )}
        </button>
      </form>
    </>
  );
}
