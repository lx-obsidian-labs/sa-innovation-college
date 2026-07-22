import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden>
        <img
          src="/images/SA-INNOVATION-COLLEGE-2-scaled.webp"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/95 via-[var(--color-primary-dark)]/95 to-[#0B1F3F]/95" />
      </div>

      <div className="absolute left-10 top-20 h-72 w-72 animate-float rounded-full bg-[var(--color-accent)]/15 blur-3xl" aria-hidden />
      <div className="absolute bottom-20 right-10 h-96 w-96 animate-float rounded-full bg-[var(--color-primary-light)]/15 blur-3xl" style={{ animationDelay: "2s" }} aria-hidden />
      <div className="absolute right-1/4 top-1/2 h-48 w-48 animate-float rounded-full bg-[var(--color-accent)]/10 blur-2xl" style={{ animationDelay: "1s" }} aria-hidden />

      <Container className="relative z-10 w-full">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex animate-fadeInUp items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            Applications Open for 2026
          </div>

          <h1 className="mb-4 animate-fadeInUp text-[var(--fs-4xl)] font-extrabold leading-[1.05] tracking-tight text-white" style={{ animationDelay: "0.1s" }}>
            Your Future in Education
            <br />
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>

          <p className="mb-4 animate-fadeInUp text-lg font-medium text-[var(--color-accent)]/90 md:text-xl" style={{ animationDelay: "0.2s" }}>
            Through Knowledge, We Grow Towards Excellence
          </p>

          <p className="mx-auto mb-10 max-w-2xl animate-fadeInUp text-base leading-relaxed text-white/80 md:text-lg" style={{ animationDelay: "0.3s" }}>
            At SA Innovation College, we empower learners with knowledge, skills, and innovation to unlock opportunities.
            From world-class courses to practical training, we&apos;re here to help you build a brighter tomorrow.
          </p>

          <div className="flex animate-fadeInUp flex-wrap justify-center gap-4" style={{ animationDelay: "0.4s" }}>
            <Button variant="accent" size="lg" href="/courses" className="shadow-lg shadow-[var(--color-accent)]/25">
              Explore Courses
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={getWhatsAppUrl("+27727733960")}
              className="!border-white/40 !text-white hover:!bg-white/10"
            >
              Talk to Us
            </Button>
          </div>

          <div className="mt-14 grid animate-fadeInUp grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" style={{ animationDelay: "0.6s" }}>
            {[
              { value: "30+", label: "Programmes", icon: "M12 6v6l4 2" },
              { value: "5,000+", label: "Students", icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" },
              { value: "95%", label: "Success Rate", icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
              { value: "10+", label: "Years", icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group rounded-xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mx-auto mb-2 h-6 w-6 text-[var(--color-accent)]/80"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                </svg>
                <div className="text-xl font-bold text-white md:text-2xl">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-gray-50)] to-transparent" aria-hidden />
    </section>
  );
}
