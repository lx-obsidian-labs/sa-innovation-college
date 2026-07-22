import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";

const partners = [
  { name: "MICT SETA", file: "5.png" },
  { name: "ETDP SETA", file: "7.png" },
  { name: "Service SETA", file: "3.png" },
  { name: "SASSETA", file: "9.png" },
  { name: "QCTO", file: "4.png" },
  { name: "DHET", file: "8.png" },
  { name: "Cyberdomain Solutions", file: "6.png" },
  { name: "PSIRA", file: "1.png" },
  { name: "CATHSSETA", file: "10.png" },
  { name: "AgriSETA", file: "2.png" },
  { name: "TETA", file: "13.png" },
  { name: "FP&M SETA", file: "14.png" },
];

export default function Partners() {
  return (
    <section id="partners" className="bg-[var(--color-surface)] py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Our Partners"
          title="Trusted by Industry Leaders"
          description="We collaborate with leading SETAs, government bodies, and industry partners to ensure our curriculum stays relevant and our graduates are sought after."
          className="mb-12"
        />

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex aspect-[3/2] items-center justify-center rounded-xl border border-[var(--color-gray-200)] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)]"
            >
              <img
                src={`/images/${partner.file}`}
                alt={`${partner.name} logo`}
                className="max-h-12 w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
