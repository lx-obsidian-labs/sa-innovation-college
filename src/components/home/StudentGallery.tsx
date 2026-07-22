import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/layout/Container";

const images = [
  { src: "/images/001.jpg", alt: "Students at SA Innovation College campus" },
  { src: "/images/002.jpg", alt: "SA Innovation College classroom session" },
  { src: "/images/SA-INNOVATION-COLLEGE3-scaled.jpg", alt: "SA Innovation College building" },
  { src: "/images/sa-innovation-graduation.webp", alt: "SA Innovation College graduation ceremony" },
  { src: "/images/SA-INNOVATION-COLLEGE2-scaled.jpg", alt: "Campus life at SA Innovation" },
  { src: "/images/Intro-Home-page-new.png", alt: "Student engagement at SA Innovation College" },
];

export default function StudentGallery() {
  return (
    <section id="gallery" className="relative py-16 md:py-24 overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="Our Community"
          title="Learner Success & Campus Life"
          description="See the SA Innovation College experience through the eyes of our students and graduates."
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, idx) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-xl bg-[var(--color-gray-100)] ${
                idx === 0 ? "row-span-2 col-span-2 md:col-span-1" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
