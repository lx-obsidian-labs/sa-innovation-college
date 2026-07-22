import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

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
  icon: React.ReactNode;
  courses: CourseItem[];
}

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-3.5 w-3.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-3.5 w-3.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

const categoryGroups: CategoryGroup[] = [
  {
    category: "Computer & Digital Skills",
    shortLabel: "Computer & Digital",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 0 4.5 6h7.5a.75.75 0 0 0 .75-.75v-.75m0 0v11.25M3.75 4.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75M3 18.75V6.75" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v12m-8-8a8 8 0 0 1 16 0m-8-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.087 4.113" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
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

const filterLabels = categoryGroups.map((g) => g.shortLabel);

function CourseCard({ course }: { course: CourseItem }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-primary)]/30"
    >
      <div className="mb-3 flex items-center gap-2">
        <Badge variant="gray">{course.category}</Badge>
      </div>
      <h3 className="mb-2 text-[var(--fs-lg)] font-bold leading-snug text-[var(--color-text-primary)] transition-colors duration-200 group-hover:text-[var(--color-primary)]">
        {course.title}
      </h3>
      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {course.description}
      </p>
      <div className="mt-auto flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-md bg-[var(--color-gray-50)] px-2.5 py-1 text-xs font-medium text-[var(--color-gray-600)]">
          <ClockIcon />
          {course.duration}
        </span>
        {course.nqf && (
          <span className="inline-flex items-center gap-1 rounded-md bg-[var(--color-primary)]/10 px-2.5 py-1 text-xs font-medium text-[var(--color-primary)]">
            {course.nqf}
          </span>
        )}
        <span className="inline-flex items-center gap-1 rounded-md bg-[var(--color-gray-50)] px-2.5 py-1 text-xs font-medium text-[var(--color-gray-600)]">
          <UserIcon />
          {course.mode}
        </span>
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] transition-all duration-200 group-hover:gap-2">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </span>
    </Link>
  );
}

function CategorySection({ group }: { group: CategoryGroup }) {
  return (
    <section>
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
          {group.icon}
        </span>
        <div>
          <h2 className="text-[var(--fs-2xl)] font-bold text-[var(--color-text-primary)]">
            {group.category}
          </h2>
          <p className="text-sm text-[var(--color-text-muted)]">
            {group.courses.length} course{group.courses.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {group.courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Our Courses"
        description="Find your path to success with 50+ accredited programmes across 14 fields of study."
      />

      <section className="py-[var(--section-py)]">
        <Container>
          <div className="mb-10 overflow-x-auto pb-2">
            <div className="flex flex-nowrap gap-2 min-w-max">
              <span className="inline-block cursor-default rounded-full bg-[var(--color-primary)] px-5 py-2 text-xs font-bold uppercase tracking-wide text-[var(--color-text-inverse)] shadow-sm">
                All Courses
              </span>
              {filterLabels.map((label) => (
                <span
                  key={label}
                  className="inline-block cursor-default rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-gray-600)] transition-colors duration-200 hover:bg-[var(--color-gray-50)] hover:text-[var(--color-gray-900)]"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {categoryGroups.map((group) => (
              <CategorySection key={group.category} group={group} />
            ))}
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
