import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";

const accreditations = [
  { name: "MICT SETA", file: "5.png" },
  { name: "ETDP SETA", file: "7.png" },
  { name: "Service SETA", file: "3.png" },
  { name: "SASSETA", file: "9.png" },
  { name: "QCTO", file: "4.png" },
  { name: "DHET", file: "8.png" },
  { name: "PSIRA", file: "1.png" },
  { name: "CATHSSETA", file: "10.png" },
  { name: "AgriSETA", file: "2.png" },
  { name: "TETA", file: "13.png" },
  { name: "FP&M SETA", file: "14.png" },
];

export default function AccreditationLogos() {
  return (
    <section id="accreditations" className="relative bg-[var(--color-surface)] py-20 md:py-28 overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl" aria-hidden />
      <Container>
        <SectionHeader
          eyebrow="Accreditations & Regulatory Bodies"
          title="Trusted by Industry Leaders"
          description="We collaborate with leading SETAs, government bodies, and industry partners to ensure our curriculum stays relevant and our graduates are sought after."
          className="mb-12"
        />

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {accreditations.map((a) => (
            <div
              key={a.name}
              className="group premium-card flex aspect-[3/2] items-center justify-center rounded-xl border border-[var(--color-gray-200)] bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)] hover:shadow-lg"
            >
              <img
                src={`/images/${a.file}`}
                alt={`${a.name} logo`}
                className="max-h-14 w-auto max-w-full object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
          SA Innovation College is accredited by the relevant SETAs and registered with the Department of Higher Education and Training.
        </p>
      </Container>
    </section>
  );
}
