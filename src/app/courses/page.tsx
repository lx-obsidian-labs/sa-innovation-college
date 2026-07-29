import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import CourseFilterGrid from "@/components/courses/CourseFilterGrid";
import { categoryImages } from "@/lib/course-images";

export const metadata: Metadata = {
  title: "Our Courses | SA Innovation College",
  description:
    "Find your path to success with 50+ accredited programmes at SA Innovation College.",
};

interface CourseItem {
  title: string;
  slug: string;
  category: string;
  duration: string;
  nqf?: string;
  mode: string;
  description: string;
}

interface CategoryGroup {
  category: string;
  shortLabel: string;
  courses: CourseItem[];
}

const categoryGroups: CategoryGroup[] = [
  {
    category: "Computer & Digital Skills",
    shortLabel: "Computer & Digital",
    courses: [
      {
        title: "Basic Computer Literacy NQF 3",
        slug: "basic-computer-literacy-nqf-3",
        category: "Computer & Digital Skills",
        duration: "12 weeks",
        nqf: "NQF 3",
        mode: "Full-time / Part-time",
        description: "Build a solid foundation in essential computer skills for the modern workplace. Covers hardware, software, file management, and internet fundamentals.",
      },
      {
        title: "Advanced Computer Literacy NQF 3",
        slug: "advanced-computer-literacy-nqf-3",
        category: "Computer & Digital Skills",
        duration: "12 weeks",
        nqf: "NQF 3",
        mode: "Full-time / Part-time",
        description: "Master advanced features of productivity software, cloud computing, digital collaboration tools, and workplace efficiency applications.",
      },
      {
        title: "MS Word (Intro to Advanced)",
        slug: "ms-word-intro-advanced",
        category: "Computer & Digital Skills",
        duration: "4 weeks per level",
        mode: "Full-time / Online",
        description: "Master document creation, formatting, mail merge, styles, templates, and professional document design from beginner to advanced.",
      },
      {
        title: "MS Excel (Intro to Advanced)",
        slug: "ms-excel-intro-advanced",
        category: "Computer & Digital Skills",
        duration: "4 weeks per level",
        mode: "Full-time / Online",
        description: "From basic spreadsheets to advanced data analysis with pivot tables, VLOOKUP, macros, and complex formulas for business reporting.",
      },
      {
        title: "MS PowerPoint (Intro to Advanced)",
        slug: "ms-powerpoint-intro-advanced",
        category: "Computer & Digital Skills",
        duration: "4 weeks per level",
        mode: "Full-time / Online",
        description: "Create compelling presentations with animations, transitions, multimedia integration, and professional slide design techniques.",
      },
      {
        title: "MS Access",
        slug: "ms-access",
        category: "Computer & Digital Skills",
        duration: "6 weeks",
        mode: "Full-time / Online",
        description: "Learn database design, table relationships, queries, forms, and reports using Microsoft Access for effective data management.",
      },
      {
        title: "MS Outlook",
        slug: "ms-outlook",
        category: "Computer & Digital Skills",
        duration: "2 weeks",
        mode: "Full-time / Online",
        description: "Master email management, calendar scheduling, task organisation, and collaboration features in Microsoft Outlook.",
      },
      {
        title: "MS Project",
        slug: "ms-project",
        category: "Computer & Digital Skills",
        duration: "6 weeks",
        mode: "Full-time / Online",
        description: "Learn project scheduling, resource allocation, Gantt charts, critical path analysis, and reporting with Microsoft Project.",
      },
      {
        title: "5-Day Website Design",
        slug: "website-design-5-day",
        category: "Computer & Digital Skills",
        duration: "5 days",
        mode: "Full-time",
        description: "Build a complete, responsive website in just 5 days. Learn HTML, CSS, and modern web design principles hands-on.",
      },
    ],
  },
  {
    category: "Business & Administration",
    shortLabel: "Business & Admin",
    courses: [
      {
        title: "Office Administration NQF 3",
        slug: "office-administration-nqf-3",
        category: "Business & Administration",
        duration: "12 months",
        nqf: "NQF 3",
        mode: "Full-time / Part-time",
        description: "Comprehensive programme covering office management, reception duties, financial administration, and business communication. Opens doors across every industry.",
      },
      {
        title: "General Administration NQF 4",
        slug: "general-administration-nqf-4",
        category: "Business & Administration",
        duration: "12 months",
        nqf: "NQF 4",
        mode: "Full-time / Part-time",
        description: "Advanced administrative skills for the modern workplace. Develop expertise in project coordination, office systems, and team leadership.",
      },
      {
        title: "Basic Bookkeeping",
        slug: "basic-bookkeeping",
        category: "Business & Administration",
        duration: "12 weeks",
        mode: "Full-time / Part-time",
        description: "Learn double-entry bookkeeping, bank reconciliations, VAT returns, trial balances, and financial record keeping for small to medium businesses.",
      },
      {
        title: "Business Communication Skills",
        slug: "business-communication-skills",
        category: "Business & Administration",
        duration: "6 weeks",
        mode: "Full-time / Online",
        description: "Master professional writing, presentation skills, negotiation techniques, and interpersonal communication for the corporate environment.",
      },
      {
        title: "Receptionist Course",
        slug: "receptionist-course",
        category: "Business & Administration",
        duration: "8 weeks",
        mode: "Full-time / Part-time",
        description: "Professional reception skills including switchboard management, visitor coordination, appointment scheduling, and first-point-of-contact excellence.",
      },
    ],
  },
  {
    category: "Customer Service & Hospitality",
    shortLabel: "Customer Service",
    courses: [
      {
        title: "Customer Service Skills",
        slug: "customer-service-skills",
        category: "Customer Service & Hospitality",
        duration: "6 weeks",
        mode: "Full-time / Online",
        description: "Master complaint handling, client relationship management, service excellence standards, and effective communication with diverse customers.",
      },
      {
        title: "Table Service Course",
        slug: "table-service-course",
        category: "Customer Service & Hospitality",
        duration: "8 weeks",
        mode: "Full-time",
        description: "Professional serving skills, customer care techniques, dining etiquette, wine service, and restaurant operations for hospitality careers.",
      },
      {
        title: "Call Centre Operator",
        slug: "call-centre-operator",
        category: "Customer Service & Hospitality",
        duration: "8 weeks",
        mode: "Online / Part-time",
        description: "Learn call handling techniques, CRM systems, conflict resolution, sales skills, and performance metrics for call centre environments.",
      },
    ],
  },
  {
    category: "Marketing & Sales",
    shortLabel: "Marketing & Sales",
    courses: [
      {
        title: "Basic Marketing and Selling NQF 2",
        slug: "basic-marketing-and-selling-nqf-2",
        category: "Marketing & Sales",
        duration: "12 weeks",
        nqf: "NQF 2",
        mode: "Full-time / Part-time",
        description: "Foundation in marketing principles, sales techniques, customer behaviour, and promotional strategies for entry-level marketing roles.",
      },
      {
        title: "Marketing Management N4-N6",
        slug: "marketing-management-n4-n6",
        category: "Marketing & Sales",
        duration: "18 months",
        nqf: "N4-N6",
        mode: "Full-time / Part-time",
        description: "Comprehensive marketing qualification covering market research, brand management, digital marketing, and strategic marketing planning.",
      },
    ],
  },
  {
    category: "Management & Entrepreneurship",
    shortLabel: "Management",
    courses: [
      {
        title: "Entrepreneurship & Small Business (ESB)",
        slug: "entrepreneurship-small-business",
        category: "Management & Entrepreneurship",
        duration: "12 weeks",
        mode: "Full-time / Part-time",
        description: "Turn your business ideas into reality. Learn business planning, financial management, marketing, and operations for small business success.",
      },
      {
        title: "New Venture Creation NQF 2",
        slug: "new-venture-creation-nqf-2",
        category: "Management & Entrepreneurship",
        duration: "12 weeks",
        nqf: "NQF 2",
        mode: "Full-time / Part-time",
        description: "Start, manage, grow, and sustain a small business in South Africa. Covers feasibility studies, business registration, and funding options.",
      },
      {
        title: "Project Management",
        slug: "project-management",
        category: "Management & Entrepreneurship",
        duration: "12 weeks",
        mode: "Full-time / Part-time",
        description: "Learn industry-standard project management methodologies from initiation to closure. Covers scope, time, cost, quality, and risk management.",
      },
      {
        title: "Conflict Management NQF 5",
        slug: "conflict-management-nqf-5",
        category: "Management & Entrepreneurship",
        duration: "12 weeks",
        nqf: "NQF 5",
        mode: "Part-time / Online",
        description: "Develop strategies for resolving workplace disputes, mediating conflicts, negotiation skills, and building harmonious team dynamics.",
      },
      {
        title: "Business Management N4-N6",
        slug: "business-management-n4-n6",
        category: "Management & Entrepreneurship",
        duration: "18 months",
        nqf: "N4-N6",
        mode: "Full-time / Part-time",
        description: "Comprehensive business management programme covering financial management, human resources, marketing, and strategic business planning.",
      },
      {
        title: "Management Assistant N4-N6",
        slug: "management-assistant-n4-n6",
        category: "Management & Entrepreneurship",
        duration: "18 months",
        nqf: "N4-N6",
        mode: "Full-time / Part-time",
        description: "Develop executive support skills including office management, event coordination, business communication, and administrative leadership.",
      },
    ],
  },
  {
    category: "Finance & Accounting",
    shortLabel: "Finance",
    courses: [
      {
        title: "Basic Financial Management",
        slug: "basic-financial-management",
        category: "Finance & Accounting",
        duration: "12 weeks",
        mode: "Full-time / Part-time",
        description: "Learn budgeting, cash flow management, financial statements, and basic investment principles for personal and business financial success.",
      },
      {
        title: "Bookkeeper",
        slug: "bookkeeper",
        category: "Finance & Accounting",
        duration: "12 weeks",
        mode: "Full-time / Part-time",
        description: "Practical bookkeeping training covering ledgers, trial balances, financial statements, payroll, and accounting software applications.",
      },
      {
        title: "Financial Management N4-N6",
        slug: "financial-management-n4-n6",
        category: "Finance & Accounting",
        duration: "18 months",
        nqf: "N4-N6",
        mode: "Full-time / Part-time",
        description: "Advanced financial qualification covering cost accounting, financial reporting, taxation, auditing principles, and corporate financial strategy.",
      },
    ],
  },
  {
    category: "Human Resources",
    shortLabel: "HR",
    courses: [
      {
        title: "Human Resources Management N4-N6",
        slug: "human-resources-management-n4-n6",
        category: "Human Resources",
        duration: "18 months",
        nqf: "N4-N6",
        mode: "Full-time / Part-time",
        description: "Comprehensive HR qualification covering recruitment, training, performance management, labour relations, and HR policy development.",
      },
      {
        title: "Skills Development Facilitation Practitioner NQF 5",
        slug: "skills-development-facilitation-practitioner-nqf-5",
        category: "Human Resources",
        duration: "12 months",
        nqf: "NQF 5",
        mode: "Part-time",
        description: "Coordinate skills development initiatives, manage WSPs and ATRs, ensure SETA compliance, and facilitate workplace learning programmes.",
      },
    ],
  },
  {
    category: "Education & Training",
    shortLabel: "Education & Training",
    courses: [
      {
        title: "Facilitator Course NQF 5",
        slug: "facilitator-course-nqf-5",
        category: "Education & Training",
        duration: "30 days",
        nqf: "NQF 5",
        mode: "Full-time / Part-time",
        description: "Learn to plan, prepare, facilitate, and evaluate learning programmes in any context. Essential for trainers and educators.",
      },
      {
        title: "Assessor Course",
        slug: "assessor-course",
        category: "Education & Training",
        duration: "30 days",
        mode: "Full-time / Part-time",
        description: "Become a qualified skills assessor. Plan assessments, gather evidence, provide feedback, and make assessment judgements.",
      },
      {
        title: "Training & Development Practitioner NQF 5",
        slug: "training-development-practitioner-nqf-5",
        category: "Education & Training",
        duration: "18-24 months",
        nqf: "NQF 5",
        mode: "Full-time / Part-time",
        description: "Comprehensive qualification covering facilitation, assessment, learning programme design, and training management for L&D professionals.",
      },
      {
        title: "Learning & Development Practitioner NQF 6",
        slug: "learning-development-practitioner-nqf-6",
        category: "Education & Training",
        duration: "18-24 months",
        nqf: "NQF 6",
        mode: "Part-time",
        description: "Advanced L&D qualification focusing on strategic training needs analysis, curriculum development, and organisational learning interventions.",
      },
      {
        title: "Work Based Learning Practitioner NQF 5",
        slug: "work-based-learning-practitioner-nqf-5",
        category: "Education & Training",
        duration: "12-18 months",
        nqf: "NQF 5",
        mode: "Learnership",
        description: "Design, implement, and manage work-based learning programmes including apprenticeships, learnerships, and workplace coaching initiatives.",
      },
      {
        title: "Educare / Junior Teacher N4-N6",
        slug: "educare-junior-teacher-n4-n6",
        category: "Education & Training",
        duration: "18 months",
        nqf: "N4-N6",
        mode: "Full-time / Part-time",
        description: "Prepare for a rewarding career in early childhood education. Covers child development, curriculum planning, and classroom management.",
      },
      {
        title: "Adult Literacy Teacher",
        slug: "adult-literacy-teacher",
        category: "Education & Training",
        duration: "12 weeks",
        mode: "Part-time",
        description: "Train to teach adult literacy and numeracy. Learn andragogy, lesson planning, assessment strategies, and learner support techniques.",
      },
    ],
  },
  {
    category: "Early Childhood Development",
    shortLabel: "ECD",
    courses: [
      {
        title: "Early Childhood Development NQF 4",
        slug: "early-childhood-development-nqf-4",
        category: "Early Childhood Development",
        duration: "12 months",
        nqf: "NQF 4",
        mode: "Full-time",
        description: "Support the holistic development of young children through play-based learning, ECD principles, and developmentally appropriate practices.",
      },
      {
        title: "Early Childhood Caregiver NQF 1",
        slug: "early-childhood-caregiver-nqf-1",
        category: "Early Childhood Development",
        duration: "12 weeks",
        nqf: "NQF 1",
        mode: "Full-time / Part-time",
        description: "Entry-level qualification for childcare providers. Covers basic child care, safety, nutrition, and stimulating activities for young children.",
      },
    ],
  },
  {
    category: "Health & Safety",
    shortLabel: "Health & Safety",
    courses: [
      {
        title: "Basic Health and Safety",
        slug: "basic-health-and-safety",
        category: "Health & Safety",
        duration: "8 weeks",
        mode: "Full-time / Part-time",
        description: "Understand workplace health and safety legislation, risk assessment, emergency procedures, and incident reporting requirements.",
      },
      {
        title: "Health and Safety Assistant NQF 4",
        slug: "health-and-safety-assistant-nqf-4",
        category: "Health & Safety",
        duration: "12 weeks",
        nqf: "NQF 4",
        mode: "Full-time / Part-time",
        description: "Comprehensive health and safety qualification covering risk management, legal compliance, safety inspections, and workplace hazard identification.",
      },
      {
        title: "First Aid (Basic / Intermediate / Advanced)",
        slug: "first-aid-basic-intermediate-advanced",
        category: "Health & Safety",
        duration: "2-6 weeks",
        mode: "Full-time",
        description: "Life-saving skills from basic first aid to advanced emergency response. Includes CPR, wound management, and medical emergency protocols.",
      },
      {
        title: "Occupational Health and Safety Practitioner",
        slug: "occupational-health-and-safety-practitioner",
        category: "Health & Safety",
        duration: "12 months",
        mode: "Full-time / Online",
        description: "Professional OHS qualification covering occupational hygiene, safety management systems, environmental management, and health risk assessments.",
      },
    ],
  },
  {
    category: "Security & Legal Studies",
    shortLabel: "Security & Legal",
    courses: [
      {
        title: "Traffic Officer Course",
        slug: "traffic-officer-course",
        category: "Security & Legal Studies",
        duration: "18 months",
        mode: "Full-time",
        description: "National Certificate in Tactical Road Traffic Operations. Traffic control, law enforcement, road safety, and accident management.",
      },
      {
        title: "National Diploma: Policing NQF 6",
        slug: "national-diploma-policing-nqf-6",
        category: "Security & Legal Studies",
        duration: "24 months",
        nqf: "NQF 6",
        mode: "Full-time / Part-time",
        description: "Comprehensive policing qualification covering criminal law, forensics, community policing, crime prevention, and investigative procedures.",
      },
      {
        title: "National Certificate: Paralegal Practice NQF 5",
        slug: "national-certificate-paralegal-practice-nqf-5",
        category: "Security & Legal Studies",
        duration: "12 months",
        nqf: "NQF 5",
        mode: "Full-time / Part-time",
        description: "Paralegal training covering legal research, client consultation, document drafting, court procedures, and South African legal system fundamentals.",
      },
      {
        title: "Family Law Practitioner NQF 5",
        slug: "family-law-practitioner-nqf-5",
        category: "Security & Legal Studies",
        duration: "24 months",
        nqf: "NQF 5",
        mode: "Online / In-person",
        description: "Specialised qualification in family law covering divorce, child custody, maintenance, domestic violence, and mediation practices.",
      },
    ],
  },
  {
    category: "Engineering",
    shortLabel: "Engineering",
    courses: [
      {
        title: "Mechanical Engineering N1-N6",
        slug: "mechanical-engineering-n1-n6",
        category: "Engineering",
        duration: "3 years",
        nqf: "N1-N6",
        mode: "Full-time / Part-time",
        description: "Comprehensive mechanical engineering programme covering thermodynamics, mechanics, design, manufacturing, and plant maintenance.",
      },
      {
        title: "Electrical Engineering N1-N6",
        slug: "electrical-engineering-n1-n6",
        category: "Engineering",
        duration: "3 years",
        nqf: "N1-N6",
        mode: "Full-time / Part-time",
        description: "Electrical engineering qualification covering circuit theory, power systems, electronics, industrial control, and electrical installations.",
      },
      {
        title: "Civil Engineering N1-N6",
        slug: "civil-engineering-n1-n6",
        category: "Engineering",
        duration: "3 years",
        nqf: "N1-N6",
        mode: "Full-time / Part-time",
        description: "Civil engineering programme covering structural design, construction technology, surveying, materials testing, and infrastructure development.",
      },
    ],
  },
  {
    category: "IT & Software Development",
    shortLabel: "IT & Software",
    courses: [
      {
        title: "CompTIA IT Fundamentals",
        slug: "comptia-it-fundamentals",
        category: "IT & Software Development",
        duration: "8 weeks",
        mode: "Online / Part-time",
        description: "Entry-level IT certification covering hardware, software, networking, databases, and cybersecurity basics. Perfect for starting an IT career.",
      },
      {
        title: "CompTIA A+ (PC Engineering)",
        slug: "comptia-a-plus-pc-engineering",
        category: "IT & Software Development",
        duration: "16 weeks",
        mode: "Online / Part-time",
        description: "Industry-standard certification for PC technicians. Covers hardware troubleshooting, operating systems, networking, and mobile devices.",
      },
      {
        title: "CompTIA Network+",
        slug: "comptia-network-plus",
        category: "IT & Software Development",
        duration: "12 weeks",
        mode: "Online / Part-time",
        description: "Networking certification covering network architecture, protocols, routing, switching, troubleshooting, and network security fundamentals.",
      },
      {
        title: "CompTIA Security+",
        slug: "comptia-security-plus",
        category: "IT & Software Development",
        duration: "12 weeks",
        mode: "Online / Part-time",
        description: "Cybersecurity certification covering threat management, cryptography, identity management, risk assessment, and security operations.",
      },
      {
        title: "Software Developer NQF 5",
        slug: "software-developer-nqf-5",
        category: "IT & Software Development",
        duration: "18-24 months",
        nqf: "NQF 5",
        mode: "Learnership",
        description: "Comprehensive software development programme covering programming, web development, database design, systems analysis, and agile methodologies.",
      },
      {
        title: "Website Design (5 Day)",
        slug: "website-design-bootcamp-5-day",
        category: "IT & Software Development",
        duration: "5 days",
        mode: "Full-time",
        description: "Intensive hands-on website design bootcamp. Build responsive websites with HTML, CSS, and modern design tools in just five days.",
      },
    ],
  },
  {
    category: "Health & Social Services",
    shortLabel: "Health & Social",
    courses: [
      {
        title: "Health Promotion Officer NQF 5",
        slug: "health-promotion-officer-nqf-5",
        category: "Health & Social Services",
        duration: "18 months",
        nqf: "NQF 5",
        mode: "Full-time / Online",
        description: "Train to promote community health and wellness. Covers health education, disease prevention, programme planning, and community outreach strategies.",
      },
    ],
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Our Courses"
        description="Find your path to success with 50+ accredited programmes across 14 fields of study."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-8" id="all-courses">
            <CourseFilterGrid
              groups={categoryGroups}
              categoryImages={categoryImages}
            />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#0B1F3F] py-16 md:py-24">
        <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[var(--color-primary-light)]/10 blur-3xl" aria-hidden />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} aria-hidden />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-[var(--fs-3xl)] font-extrabold text-white">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Contact us for more information. We&apos;ll help you find the
              perfect programme to match your goals.
            </p>
            <Button
              variant="accent"
              size="lg"
              href="/contact"
              className="shadow-lg shadow-[var(--color-accent)]/25"
            >
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
