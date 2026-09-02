import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";
import Image from "next/image";

const accreditations = [
  { name: "QCTO", file: "4.png", highlight: true },
  { name: "DHET", file: "8.png", highlight: true },
  { name: "ICDL South Africa", file: "6.png", highlight: true },
  { name: "MICT SETA", file: "5.png", highlight: false },
  { name: "ETDP SETA", file: "7.png", highlight: false },
  { name: "Service SETA", file: "3.png", highlight: false },
  { name: "SASSETA", file: "9.png", highlight: false },
  { name: "PSIRA", file: "1.png", highlight: false },
  { name: "CATHSSETA", file: "10.png", highlight: false },
  { name: "AgriSETA", file: "2.png", highlight: false },
  { name: "TETA", file: "13.png", highlight: false },
  { name: "FP&M SETA", file: "14.png", highlight: false },
];

export default function AccreditationLogos() {
  return (
    <section id="accreditations" className="relative bg-[var(--color-gray-50)] py-20 md:py-28 overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="Accreditations & Regulatory Bodies"
          title="Trusted by Industry Leaders"
          description="We collaborate with leading SETAs, government bodies, and industry partners to ensure our curriculum stays relevant and our graduates are sought after."
          className="mb-12"
        />

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-4">
          {accreditations.map((a) => (
            <div
              key={a.name}
              className={`group premium-card flex aspect-[3/2] items-center justify-center rounded-xl border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                a.highlight
                  ? "border-[var(--color-primary)]/30 shadow-sm ring-1 ring-[var(--color-primary)]/10"
                  : "border-[var(--color-border)] hover:border-[var(--color-primary)]/30"
              }`}
            >
              <Image
                src={`/images/${a.file}`}
                alt={`${a.name} logo`}
                width={120}
                height={56}
                className={`max-h-14 w-auto max-w-full object-contain transition-all duration-300 group-hover:scale-105 ${
                  a.highlight ? "opacity-85 group-hover:opacity-100" : "opacity-50 group-hover:opacity-80"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/[0.03] p-5 text-center">
          <p className="text-sm font-semibold text-[var(--color-gray-900)]">
            QCTO Accredited TVET & Skills Training Centre · Official ICDL South Africa Centre
          </p>
          <p className="mt-1 text-sm text-[var(--color-gray-500)]">
            Registered with the Department of Higher Education and Training.
          </p>
        </div>
      </Container>
    </section>
  );
}
