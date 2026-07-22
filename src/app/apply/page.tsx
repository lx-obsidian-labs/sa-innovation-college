import type { Metadata } from "next";
import ApplicationForm from "@/components/ui/ApplicationForm";
import { getWhatsAppUrl, getTelUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Apply Now | SA Innovation College",
  description: "Apply online to study at SA Innovation College. Choose from 50+ accredited courses across engineering, business, IT, and more.",
};

export default function ApplyPage() {
  return (
    <>
      {/* ===== page wrapper ===== */}
      <div style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        maxWidth: 980,
        margin: "0 auto",
        padding: "40px 20px 60px"
      }}>
        {/* ===== app card ===== */}
        <div style={{
          background: "#ffffff",
          border: "1px solid #e8edf5",
          borderRadius: 22,
          padding: "32px 32px 40px",
          boxShadow: "0 20px 60px rgba(17, 24, 39, 0.08)"
        }}>
          {/* ===== header ===== */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{
              display: "inline-block",
              background: "rgba(27, 77, 142, 0.08)",
              color: "#1B4D8E",
              fontWeight: 600,
              fontSize: 12,
              padding: "4px 14px",
              borderRadius: 999,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 12
            }}>
              Begin Your Journey
            </div>
            <h2 style={{ margin: "0 0 8px", fontSize: 32, lineHeight: 1.2, fontWeight: 800, color: "#0f172a" }}>
              Online Application Form
            </h2>
            <p style={{ margin: 0, color: "#64748b", fontSize: 15, lineHeight: 1.6 }}>
              Complete your application in a few easy steps.
            </p>
          </div>

          {/* ===== form ===== */}
          <ApplicationForm />
        </div>

        {/* ===== need help section ===== */}
        <div style={{
          marginTop: 32,
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          <a
            href={getTelUrl("0800 014 568")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 28px",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: 16,
              textDecoration: "none",
              color: "#0f172a",
              fontSize: 14,
              fontWeight: 600,
              transition: "all 0.2s",
              flex: "1 1 240px",
              justifyContent: "center"
            }}
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1B4D8E" style={{ width: 22, height: 22, flexShrink: 0 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <span>
              <span style={{ display: "block", color: "#64748b", fontWeight: 400, fontSize: 12 }}>Call Us</span>
              <span style={{ color: "#0f172a" }}>0800 014 568</span>
            </span>
          </a>

          <a
            href={getWhatsAppUrl("+27727733960")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 28px",
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: 16,
              textDecoration: "none",
              color: "#0f172a",
              fontSize: 14,
              fontWeight: 600,
              transition: "all 0.2s",
              flex: "1 1 240px",
              justifyContent: "center"
            }}
          >
            <svg viewBox="0 0 24 24" fill="#16a34a" style={{ width: 22, height: 22, flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span>
              <span style={{ display: "block", color: "#64748b", fontWeight: 400, fontSize: 12 }}>WhatsApp</span>
              <span style={{ color: "#0f172a" }}>+27 72 773 3960</span>
            </span>
          </a>

          <a
            href="mailto:info@sainnovationcollege.co.za"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 28px",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: 16,
              textDecoration: "none",
              color: "#0f172a",
              fontSize: 14,
              fontWeight: 600,
              transition: "all 0.2s",
              flex: "1 1 240px",
              justifyContent: "center"
            }}
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1B4D8E" style={{ width: 22, height: 22, flexShrink: 0 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span>
              <span style={{ display: "block", color: "#64748b", fontWeight: 400, fontSize: 12 }}>Email Us</span>
              <span style={{ color: "#0f172a" }}>info@sainnovationcollege.co.za</span>
            </span>
          </a>
        </div>

        {/* ===== process steps ===== */}
        <div style={{
          marginTop: 40,
          padding: "32px 28px",
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: 20
        }}>
          <h3 style={{
            margin: "0 0 24px",
            fontSize: 20,
            fontWeight: 700,
            color: "#0f172a",
            textAlign: "center"
          }}>
            What Happens After You Apply
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20
          }}>
            {[
              { step: "01", title: "Application Review", desc: "We review your application within 2-3 business days" },
              { step: "02", title: "Admissions Contact", desc: "Our team contacts you to confirm your programme" },
              { step: "03", title: "Document Submission", desc: "Submit required documents & complete registration" },
              { step: "04", title: "Welcome Aboard", desc: "Start your journey at SA Innovation College!" },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: "center", padding: "20px 12px" }}>
                <div style={{
                  width: 48,
                  height: 48,
                  margin: "0 auto 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1B4D8E, #2563EB)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16
                }}>
                  {item.step}
                </div>
                <h4 style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{item.title}</h4>
                <p style={{ margin: 0, fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== office hours ===== */}
        <div style={{
          marginTop: 20,
          textAlign: "center",
          fontSize: 13,
          color: "#94a3b8"
        }}>
          Applications processed Mon–Fri, 08:00–17:00. We respond within 2–3 business days.
        </div>
      </div>
    </>
  );
}
