import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { categoryImages, heroGradients } from "@/lib/course-images";

interface CourseData {
  slug: string;
  title: string;
  category: string;
  duration: string;
  mode: string;
  nqfLevel: string | null;
  credits: string | null;
  description: string;
  overview: string;
  whatYouLearn: string[];
  entryRequirements: string[];
  careerOpportunities: string[];
  modules?: string[];
  certification?: string;
  price: string;
}

const COURSES_DATA: Record<string, CourseData> = {
  "basic-computer-literacy-nqf-3": {
    slug: "basic-computer-literacy-nqf-3",
    title: "Basic Computer Literacy NQF 3",
    category: "Computer & Digital Skills",
    duration: "12 weeks",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 3",
    credits: null,
    description: "Build a solid foundation in essential computer skills for the modern workplace.",
    overview:
      "This accredited programme provides a structured foundation in computer literacy. Learners develop practical proficiency in essential software applications, file management, and digital communication, preparing them for further study or immediate workplace productivity.",
    whatYouLearn: [
      "Computer hardware identification and operation",
      "Operating system management and file organisation",
      "Word processing and document creation",
      "Spreadsheet fundamentals and data entry",
      "Presentation software basics",
      "Internet research and email communication",
    ],
    entryRequirements: ["Grade 9 or equivalent"],
    careerOpportunities: [
      "Administrative Clerk",
      "Data Capturer",
      "Office Assistant",
      "Receptionist",
    ],
    price: "Contact for fees",
  },
  "advanced-computer-literacy-nqf-3": {
    slug: "advanced-computer-literacy-nqf-3",
    title: "Advanced Computer Literacy NQF 3",
    category: "Computer & Digital Skills",
    duration: "12 weeks",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 3",
    credits: null,
    description: "Master advanced features of productivity software, cloud computing, and digital collaboration.",
    overview:
      "Take your computer skills to the next level with this advanced programme. Learners master sophisticated features of productivity software, explore cloud-based collaboration tools, and develop the digital skills required for supervisory and specialised administrative roles.",
    whatYouLearn: [
      "Advanced Microsoft Word features and mail merge",
      "Advanced Excel functions, formulas, and charts",
      "Database management fundamentals",
      "Cloud computing and online collaboration tools",
      "Digital presentation mastery",
      "Basic troubleshooting and IT support skills",
    ],
    entryRequirements: ["Grade 10 or equivalent", "Basic Computer Literacy or equivalent knowledge"],
    careerOpportunities: [
      "Senior Administrative Assistant",
      "Data Analyst Assistant",
      "IT Support Technician (entry-level)",
      "Office Systems Coordinator",
    ],
    price: "Contact for fees",
  },
  "ms-word": {
    slug: "ms-word",
    title: "MS Word (Intro to Advanced)",
    category: "Computer & Digital Skills",
    duration: "4 weeks per level",
    mode: "Full-time / Online",
    nqfLevel: "Short Course",
    credits: null,
    description: "Master document creation, formatting, mail merge, and professional document design.",
    overview:
      "Microsoft Word remains the standard for professional document creation. This comprehensive programme guides learners from basic document creation through to advanced layout design, mail merge automation, and collaborative editing features.",
    whatYouLearn: [
      "Document creation and text formatting",
      "Page layout, margins, and sections",
      "Tables, images, and object insertion",
      "Styles, templates, and themes",
      "Mail merge and form letters",
      "Collaborative editing and document review",
    ],
    entryRequirements: ["Grade 9 or equivalent", "Basic computer literacy required"],
    careerOpportunities: [
      "Document Specialist",
      "Administrative Assistant",
      "Executive Assistant",
      "Content Creator",
      "Office Administrator",
    ],
    modules: ["Word Introduction", "Word Intermediate", "Word Advanced"],
    price: "Contact for fees",
  },
  "ms-excel": {
    slug: "ms-excel",
    title: "MS Excel (Intro to Advanced)",
    category: "Computer & Digital Skills",
    duration: "4 weeks per level",
    mode: "Full-time / Online",
    nqfLevel: "Short Course",
    credits: null,
    description: "From basic spreadsheets to advanced data analysis, pivot tables, and macros.",
    overview:
      "Microsoft Excel is the world's leading spreadsheet application. This modular programme takes learners from absolute beginner to advanced user, covering everything from basic formulas and formatting to complex data analysis, pivot tables, and automated macros.",
    whatYouLearn: [
      "Spreadsheet navigation and data entry",
      "Formulas, functions, and cell referencing",
      "Data formatting and conditional formatting",
      "Charts and graphical data representation",
      "Pivot tables and data analysis",
      "Macros and automation",
    ],
    entryRequirements: ["Grade 9 or equivalent", "Basic computer literacy required"],
    careerOpportunities: [
      "Data Analyst",
      "Administrative Coordinator",
      "Finance Clerk",
      "Business Analyst Assistant",
      "Operations Administrator",
    ],
    modules: ["Excel Introduction", "Excel Intermediate", "Excel Advanced", "Excel Expert"],
    price: "Contact for fees",
  },
  "ms-powerpoint": {
    slug: "ms-powerpoint",
    title: "MS PowerPoint (Intro to Advanced)",
    category: "Computer & Digital Skills",
    duration: "4 weeks per level",
    mode: "Full-time / Online",
    nqfLevel: "Short Course",
    credits: null,
    description: "Create compelling presentations with animations, multimedia, and professional design.",
    overview:
      "Microsoft PowerPoint is the leading presentation software used in business and education worldwide. This programme teaches learners to design visually engaging presentations, incorporate multimedia elements, and deliver messages with impact.",
    whatYouLearn: [
      "Slide creation and layout design",
      "Animations, transitions, and timing",
      "Inserting charts, tables, and media",
      "Master slides and templates",
      "Collaborative presentation development",
      "Effective presentation delivery techniques",
    ],
    entryRequirements: ["Grade 9 or equivalent", "Basic computer literacy required"],
    careerOpportunities: [
      "Presentation Specialist",
      "Marketing Coordinator",
      "Training Developer",
      "Executive Assistant",
      "Sales Support Administrator",
    ],
    modules: ["PowerPoint Introduction", "PowerPoint Intermediate", "PowerPoint Advanced"],
    price: "Contact for fees",
  },
  "ms-access": {
    slug: "ms-access",
    title: "MS Access (Intro to Advanced)",
    category: "Computer & Digital Skills",
    duration: "4 weeks per level",
    mode: "Full-time / Online",
    nqfLevel: "Short Course",
    credits: null,
    description: "Design and manage relational databases using Microsoft Access.",
    overview:
      "Microsoft Access is a powerful database management tool for small to medium-scale business applications. This programme covers database design, table relationships, queries, forms, and reporting, enabling learners to build and maintain functional database systems.",
    whatYouLearn: [
      "Database design principles and table creation",
      "Table relationships and referential integrity",
      "Query design using SQL and QBE",
      "Form design for data entry",
      "Report generation and formatting",
      "Basic macros and database automation",
    ],
    entryRequirements: ["Grade 10 or equivalent", "Basic computer literacy required"],
    careerOpportunities: [
      "Database Administrator (junior)",
      "Data Capturer",
      "Administrative Coordinator",
      "IT Support Technician",
      "Records Manager",
    ],
    modules: ["Access Introduction", "Access Intermediate", "Access Advanced"],
    price: "Contact for fees",
  },
  "ms-outlook": {
    slug: "ms-outlook",
    title: "MS Outlook (Intro to Advanced)",
    category: "Computer & Digital Skills",
    duration: "3 weeks per level",
    mode: "Full-time / Online",
    nqfLevel: "Short Course",
    credits: null,
    description: "Master email management, calendar scheduling, and task organisation with Outlook.",
    overview:
      "Microsoft Outlook is the most widely used email and personal information management system in the corporate world. This programme helps learners optimise their productivity through effective email management, calendar coordination, contact organisation, and task tracking.",
    whatYouLearn: [
      "Email setup, folders, and rules",
      "Calendar management and meeting scheduling",
      "Contact organisation and distribution lists",
      "Task creation and tracking",
      "Notes, journal, and advanced features",
      "Email etiquette and professional communication",
    ],
    entryRequirements: ["Grade 9 or equivalent", "Basic computer literacy required"],
    careerOpportunities: [
      "Administrative Assistant",
      "Executive Assistant",
      "Office Coordinator",
      "Personal Assistant",
      "Virtual Assistant",
    ],
    modules: ["Outlook Introduction", "Outlook Intermediate", "Outlook Advanced"],
    price: "Contact for fees",
  },
  "ms-project": {
    slug: "ms-project",
    title: "MS Project (Intro to Advanced)",
    category: "Computer & Digital Skills",
    duration: "4 weeks per level",
    mode: "Full-time / Online",
    nqfLevel: "Short Course",
    credits: null,
    description: "Plan, track, and manage projects using Microsoft Project professional tools.",
    overview:
      "Microsoft Project is the industry-standard project management software. This programme equips learners with the skills to create project plans, allocate resources, track progress, and generate insightful reports using this powerful tool.",
    whatYouLearn: [
      "Project setup and task creation",
      "Work Breakdown Structure (WBS) development",
      "Resource allocation and levelling",
      "Critical path analysis and scheduling",
      "Progress tracking and baselines",
      "Reporting and dashboards",
    ],
    entryRequirements: ["Grade 10 or equivalent", "Basic project management knowledge recommended"],
    careerOpportunities: [
      "Project Scheduler",
      "Project Coordinator",
      "Project Administrator",
      "Programme Assistant",
      "PMO Support Officer",
    ],
    modules: ["Project Introduction", "Project Intermediate", "Project Advanced"],
    price: "Contact for fees",
  },
  "website-design-5-day": {
    slug: "website-design-5-day",
    title: "5-Day Website Design",
    category: "Computer & Digital Skills",
    duration: "5 days",
    mode: "Full-time",
    nqfLevel: "Short Course",
    credits: null,
    description: "Build a complete, responsive website in just 5 days. HTML, CSS, and modern design.",
    overview:
      "An intensive, hands-on bootcamp that takes participants from zero to a fully functional, responsive website in just five days. Covering HTML, CSS, and modern design principles, this programme is perfect for entrepreneurs, marketers, and aspiring web designers.",
    whatYouLearn: [
      "HTML5 structure and semantic markup",
      "CSS3 styling, flexbox, and grid",
      "Responsive design principles",
      "Website planning and information architecture",
      "Basic SEO and web performance",
      "Domain registration and web hosting basics",
    ],
    entryRequirements: ["Basic computer literacy", "No prior coding experience required"],
    careerOpportunities: [
      "Junior Web Designer",
      "WordPress Administrator",
      "Digital Marketing Assistant",
      "Freelance Website Developer",
    ],
    price: "Contact for fees",
  },
  "office-administration-nqf-3": {
    slug: "office-administration-nqf-3",
    title: "Office Administration NQF 3",
    category: "Business & Administration",
    duration: "12 months",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 3",
    credits: null,
    description:
      "Comprehensive programme covering office management, from reception duties to financial administration. Opens doors across every industry.",
    overview:
      "This comprehensive programme equips learners with the practical skills and theoretical knowledge needed to excel in office administration. Covering everything from reception duties and document management to financial administration and customer service, graduates emerge as versatile professionals ready to contribute across every industry sector.",
    whatYouLearn: [
      "Office communication and reception management",
      "Document and record keeping procedures",
      "Financial administration and bookkeeping basics",
      "Customer service and client relationship management",
      "Business writing and professional correspondence",
      "Time management and office organisation",
    ],
    entryRequirements: ["Grade 10 or equivalent", "Basic computer literacy is recommended"],
    careerOpportunities: [
      "Office Administrator",
      "Receptionist",
      "Administrative Assistant",
      "Data Entry Clerk",
      "Personal Assistant",
    ],
    price: "Contact for fees",
  },
  "general-administration-nqf-4": {
    slug: "general-administration-nqf-4",
    title: "General Administration NQF 4",
    category: "Business & Administration",
    duration: "12 months",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 4",
    credits: null,
    description: "Advanced administrative skills for the modern workplace. Develop expertise in project coordination and office systems.",
    overview:
      "Building on foundational administration skills, this advanced programme develops expertise in project coordination, office systems management, and supervisory administration. Learners gain the confidence to manage complex administrative functions and lead small teams in dynamic workplace environments.",
    whatYouLearn: [
      "Advanced office systems and procedures",
      "Project coordination and administration",
      "Supervisory management skills",
      "Financial administration and reporting",
      "Human resources administration basics",
      "Strategic business communication",
    ],
    entryRequirements: ["Grade 11 or equivalent", "Completion of Office Administration NQF 3 or relevant experience"],
    careerOpportunities: [
      "Senior Administrator",
      "Office Manager",
      "Project Administrator",
      "Executive Assistant",
      "Administrative Supervisor",
    ],
    price: "Contact for fees",
  },
  "basic-bookkeeping": {
    slug: "basic-bookkeeping",
    title: "Basic Bookkeeping",
    category: "Business & Administration",
    duration: "12 weeks",
    mode: "Full-time / Part-time",
    nqfLevel: "Skills Programme",
    credits: null,
    description: "Learn double-entry bookkeeping, bank reconciliations, VAT, and financial record keeping.",
    overview:
      "This practical programme introduces learners to the fundamentals of bookkeeping and financial record keeping. From double-entry principles to VAT reconciliation, participants gain hands-on experience with real-world financial scenarios, preparing them for entry-level finance roles or small business management.",
    whatYouLearn: [
      "Double-entry bookkeeping principles",
      "Bank reconciliations and cash management",
      "VAT calculations and submissions",
      "Financial record keeping and filing",
      "Debtors and creditors management",
      "Basic financial statements",
    ],
    entryRequirements: ["Grade 10 or equivalent", "Pass in Mathematics or Mathematical Literacy"],
    careerOpportunities: [
      "Bookkeeper",
      "Accounts Clerk",
      "Finance Administrator",
      "Payroll Administrator",
      "Junior Accountant",
    ],
    modules: [
      "Introduction to Bookkeeping",
      "Double-Entry System",
      "Bank Reconciliation",
      "VAT and Taxation Basics",
      "Debtors and Creditors",
      "Financial Statements",
    ],
    price: "Contact for fees",
  },
  "business-communication-skills": {
    slug: "business-communication-skills",
    title: "Business Communication Skills",
    category: "Business & Administration",
    duration: "6 weeks",
    mode: "Full-time / Part-time",
    nqfLevel: "Short Course",
    credits: null,
    description: "Develop professional verbal and written communication skills for the workplace.",
    overview:
      "Effective communication is the cornerstone of professional success. This programme equips learners with the verbal, written, and interpersonal communication skills needed to excel in modern business environments, from email etiquette to presentation delivery.",
    whatYouLearn: [
      "Professional writing and business correspondence",
      "Verbal communication and presentation skills",
      "Active listening and feedback techniques",
      "Meeting etiquette and minutes taking",
      "Negotiation and persuasion skills",
      "Cross-cultural business communication",
    ],
    entryRequirements: ["Grade 9 or equivalent"],
    careerOpportunities: [
      "Communications Officer",
      "Administrative Assistant",
      "Client Liaison Officer",
      "Corporate Affairs Assistant",
      "Public Relations Assistant",
    ],
    price: "Contact for fees",
  },
  "receptionist-course": {
    slug: "receptionist-course",
    title: "Receptionist Course",
    category: "Business & Administration",
    duration: "8 weeks",
    mode: "Full-time / Part-time",
    nqfLevel: "Skills Programme",
    credits: null,
    description: "Professional reception skills, switchboard management, and visitor coordination.",
    overview:
      "The receptionist is the face of any organisation. This programme develops the professional communication, organisational, and technical skills needed to manage reception areas, handle switchboard operations, and coordinate visitors with poise and efficiency.",
    whatYouLearn: [
      "Professional reception and front desk management",
      "Switchboard and telephone etiquette",
      "Visitor reception and coordination",
      "Appointment scheduling and diary management",
      "Administrative support and filing",
      "Professional appearance and conduct",
    ],
    entryRequirements: ["Grade 10 or equivalent"],
    careerOpportunities: [
      "Receptionist",
      "Front Desk Coordinator",
      "Administrative Assistant",
      "Guest Relations Officer",
      "Client Services Agent",
    ],
    price: "Contact for fees",
  },
  "customer-service-skills": {
    slug: "customer-service-skills",
    title: "Customer Service Skills",
    category: "Business & Administration",
    duration: "6 weeks",
    mode: "Full-time / Online",
    nqfLevel: "Short Course",
    credits: null,
    description: "Master complaint handling, client relationships, and service excellence.",
    overview:
      "Exceptional customer service is the cornerstone of every successful business. This intensive programme equips learners with the communication skills, conflict resolution techniques, and service mindset needed to deliver outstanding customer experiences in any industry.",
    whatYouLearn: [
      "Professional communication and active listening",
      "Complaint handling and conflict resolution",
      "Building and maintaining client relationships",
      "Service excellence standards",
      "Cross-cultural customer service",
      "Telephone and digital communication etiquette",
    ],
    entryRequirements: ["Grade 9 or equivalent"],
    careerOpportunities: [
      "Customer Service Representative",
      "Call Centre Agent",
      "Client Liaison Officer",
      "Retail Sales Assistant",
      "Service Desk Agent",
    ],
    price: "Contact for fees",
  },
  "table-service-course": {
    slug: "table-service-course",
    title: "Table Service Course",
    category: "Hospitality & Services",
    duration: "8 weeks",
    mode: "Full-time",
    nqfLevel: "Skills Programme",
    credits: null,
    description: "Professional serving skills, customer care techniques, and dining etiquette for hospitality careers.",
    overview:
      "This practical programme prepares learners for careers in restaurant and hospitality service. From fine dining etiquette to efficient service techniques, participants gain the professional skills and confidence to excel in fast-paced hospitality environments.",
    whatYouLearn: [
      "Table setting and restaurant preparation",
      "Food and beverage service techniques",
      "Menu knowledge and upselling",
      "Customer care and complaint handling",
      "Hygiene and safety standards",
      "Point of sale (POS) system operation",
    ],
    entryRequirements: ["Grade 9 or equivalent"],
    careerOpportunities: [
      "Waiter / Waitress",
      "Restaurant Server",
      "Hospitality Assistant",
      "Food and Beverage Attendant",
      "Banqueting Assistant",
    ],
    price: "Contact for fees",
  },
  "call-centre-operator": {
    slug: "call-centre-operator",
    title: "Call Centre Operator",
    category: "Hospitality & Services",
    duration: "8 weeks",
    mode: "Full-time / Part-time",
    nqfLevel: "Skills Programme",
    credits: null,
    description: "Develop call handling skills, CRM system proficiency, and sales techniques for call centre careers.",
    overview:
      "The call centre industry offers dynamic career opportunities. This programme prepares learners with the communication skills, technology proficiency, and sales techniques needed to succeed in inbound and outbound call centre environments.",
    whatYouLearn: [
      "Professional call handling and etiquette",
      "CRM system navigation and data management",
      "Inbound and outbound calling techniques",
      "Objection handling and closing skills",
      "Performance metrics and target achievement",
      "Stress management and resilience",
    ],
    entryRequirements: ["Grade 10 or equivalent", "Fluent in English"],
    careerOpportunities: [
      "Call Centre Agent",
      "Customer Service Representative",
      "Telemarketer",
      "Help Desk Agent",
      "Sales Consultant",
    ],
    price: "Contact for fees",
  },
  "basic-marketing-nqf-2": {
    slug: "basic-marketing-nqf-2",
    title: "Basic Marketing NQF 2",
    category: "Marketing",
    duration: "12 months",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 2",
    credits: null,
    description: "Introduction to marketing principles, market research, and promotional strategies.",
    overview:
      "This foundational programme introduces learners to the exciting world of marketing. Covering marketing principles, consumer behaviour, market research, and promotional strategies, graduates gain the knowledge to contribute to marketing activities in any organisation.",
    whatYouLearn: [
      "Marketing principles and the marketing mix",
      "Consumer behaviour and market segmentation",
      "Market research methods and techniques",
      "Advertising and promotional strategies",
      "Digital marketing fundamentals",
      "Sales techniques and customer relations",
    ],
    entryRequirements: ["Grade 9 or equivalent"],
    careerOpportunities: [
      "Marketing Assistant",
      "Sales Representative",
      "Promotions Coordinator",
      "Market Research Assistant",
      "Brand Ambassador",
    ],
    price: "Contact for fees",
  },
  "marketing-management-n4-n6": {
    slug: "marketing-management-n4-n6",
    title: "Marketing Management N4-N6",
    category: "Marketing",
    duration: "18-36 months",
    mode: "Full-time / Part-time",
    nqfLevel: "N4-N6",
    credits: null,
    description: "Comprehensive marketing qualification covering strategy, research, and brand management.",
    overview:
      "This nationally recognised N4-N6 programme provides a thorough grounding in marketing management. From strategic marketing planning and brand management to digital marketing and market research, graduates emerge as well-rounded marketing professionals ready for the modern business landscape.",
    whatYouLearn: [
      "Marketing strategy and planning",
      "Brand management and positioning",
      "Digital and social media marketing",
      "Market research and data analysis",
      "Consumer behaviour and psychology",
      "Sales management and distribution",
    ],
    entryRequirements: ["Grade 12 or equivalent"],
    careerOpportunities: [
      "Marketing Coordinator",
      "Brand Assistant",
      "Digital Marketing Specialist",
      "Market Research Analyst",
      "Sales Manager",
    ],
    certification: "National N Diploma upon completion of N4-N6 + 18 months work experience",
    price: "Contact for fees",
  },
  "entrepreneurship-small-business": {
    slug: "entrepreneurship-small-business",
    title: "Entrepreneurship & Small Business (ESB)",
    category: "Entrepreneurship & Management",
    duration: "12 weeks",
    mode: "Full-time / Part-time",
    nqfLevel: "Skills Programme",
    credits: null,
    description: "Turn your business ideas into reality. Learn business planning, finance, and marketing.",
    overview:
      "Entrepreneurship is the engine of economic growth. This practical programme guides aspiring entrepreneurs through the entire process of starting and managing a small business \u2014 from idea validation and business planning to financial management and marketing strategy.",
    whatYouLearn: [
      "Business idea generation and validation",
      "Business plan development",
      "Financial management and budgeting",
      "Marketing and brand strategy",
      "Sales techniques and customer acquisition",
      "Legal and regulatory compliance for small businesses",
    ],
    entryRequirements: ["Grade 9 or equivalent", "A business idea is encouraged"],
    careerOpportunities: [
      "Small Business Owner",
      "Entrepreneur",
      "Freelancer",
      "Business Consultant",
      "Start-up Founder",
    ],
    price: "Contact for fees",
  },
  "new-venture-creation-nqf-2": {
    slug: "new-venture-creation-nqf-2",
    title: "New Venture Creation NQF 2",
    category: "Entrepreneurship & Management",
    duration: "12 weeks",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 2",
    credits: null,
    description: "Start, manage, grow, and sustain a small business in South Africa.",
    overview:
      "This accredited programme provides a nationally recognised qualification in new venture creation. Learners develop the practical skills to start, manage, and grow a sustainable small business in the South African context, with particular emphasis on the informal and small business sectors.",
    whatYouLearn: [
      "Business opportunity identification",
      "Business planning and feasibility studies",
      "Basic financial management and bookkeeping",
      "Customer relations and sales",
      "Operations and stock management",
      "Business legal requirements in South Africa",
    ],
    entryRequirements: ["Grade 9 or equivalent"],
    careerOpportunities: [
      "Small Business Owner",
      "Informal Sector Trader",
      "Cooperative Member",
      "Social Entrepreneur",
    ],
    price: "Contact for fees",
  },
  "project-management": {
    slug: "project-management",
    title: "Project Management",
    category: "Entrepreneurship & Management",
    duration: "12 weeks",
    mode: "Full-time / Part-time",
    nqfLevel: "Skills Programme",
    credits: null,
    description: "Learn industry-standard project management methodologies from initiation to closure.",
    overview:
      "Project management skills are in high demand across every industry. This programme introduces learners to industry-standard methodologies including PMBOK principles, covering the full project lifecycle from initiation and planning through execution, monitoring, and closure.",
    whatYouLearn: [
      "Project lifecycle and methodology frameworks",
      "Project scope, time, and cost management",
      "Risk management and mitigation strategies",
      "Stakeholder communication and reporting",
      "Project documentation and tracking tools",
      "Project closure and lessons learned",
    ],
    entryRequirements: ["Grade 10 or equivalent"],
    careerOpportunities: [
      "Project Coordinator",
      "Project Administrator",
      "Junior Project Manager",
      "Project Support Officer",
      "Operations Coordinator",
    ],
    price: "Contact for fees",
  },
  "conflict-management-nqf-5": {
    slug: "conflict-management-nqf-5",
    title: "Conflict Management NQF 5",
    category: "Entrepreneurship & Management",
    duration: "6 weeks",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 5",
    credits: null,
    description: "Develop skills to manage, mediate, and resolve workplace conflict effectively.",
    overview:
      "Workplace conflict is inevitable, but it can be managed constructively. This programme equips learners with the theory and practical skills to identify, address, and resolve conflicts in professional settings, fostering healthier and more productive work environments.",
    whatYouLearn: [
      "Conflict theory and root cause analysis",
      "Mediation and negotiation techniques",
      "Communication strategies for de-escalation",
      "Emotional intelligence in conflict situations",
      "Workplace dispute resolution procedures",
      "Building a positive organisational culture",
    ],
    entryRequirements: ["Grade 12 or equivalent", "Some workplace experience recommended"],
    careerOpportunities: [
      "Conflict Resolution Officer",
      "HR Practitioner",
      "Labour Relations Officer",
      "Mediator",
      "Team Leader / Supervisor",
    ],
    price: "Contact for fees",
  },
  "business-management-n4-n6": {
    slug: "business-management-n4-n6",
    title: "Business Management N4-N6",
    category: "Entrepreneurship & Management",
    duration: "18-36 months",
    mode: "Full-time / Part-time",
    nqfLevel: "N4-N6",
    credits: null,
    description: "Comprehensive business management qualification covering all core business functions.",
    overview:
      "This nationally recognised N4-N6 programme provides a holistic understanding of business management. Learners study entrepreneurship, management principles, financial management, marketing, and human resources, preparing them for leadership roles across various industries.",
    whatYouLearn: [
      "Management principles and leadership theories",
      "Financial management and budgeting",
      "Marketing strategy and customer management",
      "Human resource management fundamentals",
      "Business law and regulatory compliance",
      "Strategic planning and organisational development",
    ],
    entryRequirements: ["Grade 12 or equivalent"],
    careerOpportunities: [
      "Business Manager",
      "Department Supervisor",
      "Operations Manager",
      "Management Trainee",
      "Entrepreneur",
    ],
    certification: "National N Diploma upon completion of N4-N6 + 18 months work experience",
    price: "Contact for fees",
  },
  "management-assistant-n4-n6": {
    slug: "management-assistant-n4-n6",
    title: "Management Assistant N4-N6",
    category: "Entrepreneurship & Management",
    duration: "18-36 months",
    mode: "Full-time / Part-time",
    nqfLevel: "N4-N6",
    credits: null,
    description: "Become a highly skilled management assistant with expertise in office management and administration.",
    overview:
      "This nationally recognised programme develops highly competent management assistants who can support executives and managers effectively. Covering office practice, communication, finance, and information technology, graduates are prepared for demanding administrative leadership roles.",
    whatYouLearn: [
      "Advanced office practice and management",
      "Executive support and diary management",
      "Financial administration and reporting",
      "Information technology for managers",
      "Communication and public relations",
      "Legal aspects of office management",
    ],
    entryRequirements: ["Grade 12 or equivalent"],
    careerOpportunities: [
      "Management Assistant",
      "Executive Personal Assistant",
      "Office Manager",
      "Administrative Manager",
      "Company Secretary Assistant",
    ],
    certification: "National N Diploma upon completion of N4-N6 + 18 months work experience",
    price: "Contact for fees",
  },
  "basic-financial-management": {
    slug: "basic-financial-management",
    title: "Basic Financial Management",
    category: "Entrepreneurship & Management",
    duration: "12 weeks",
    mode: "Full-time / Part-time",
    nqfLevel: "Skills Programme",
    credits: null,
    description: "Understand financial statements, budgeting, cash flow management, and financial planning.",
    overview:
      "Sound financial management is critical for organisational success. This practical programme equips learners with the skills to understand financial statements, prepare budgets, manage cash flow, and make informed financial decisions.",
    whatYouLearn: [
      "Understanding financial statements",
      "Budget preparation and monitoring",
      "Cash flow management and forecasting",
      "Cost analysis and control",
      "Financial ratio analysis",
      "Basic investment and funding principles",
    ],
    entryRequirements: ["Grade 10 or equivalent", "Basic mathematical literacy"],
    careerOpportunities: [
      "Finance Clerk",
      "Accounts Assistant",
      "Budget Analyst (junior)",
      "Financial Administrator",
      "Small Business Financial Manager",
    ],
    price: "Contact for fees",
  },
  "bookkeeper": {
    slug: "bookkeeper",
    title: "Bookkeeper",
    category: "Entrepreneurship & Management",
    duration: "6 months",
    mode: "Full-time / Part-time",
    nqfLevel: "Skills Programme",
    credits: null,
    description: "Complete bookkeeping programme covering ledgers, trial balance, and financial reports.",
    overview:
      "This comprehensive bookkeeping programme builds on foundational knowledge to develop fully competent bookkeepers. Learners master ledger management, trial balances, financial statements, and accounting software, preparing them for professional bookkeeping roles.",
    whatYouLearn: [
      "General ledger and trial balance preparation",
      "Financial statements and income statements",
      "Accounting software (Sage / QuickBooks)",
      "Payroll processing and reconciliation",
      "Inventory management and costing",
      "Internal controls and fraud prevention",
    ],
    entryRequirements: ["Grade 10 or equivalent", "Basic Bookkeeping or equivalent knowledge"],
    careerOpportunities: [
      "Bookkeeper",
      "Accounts Clerk",
      "Payroll Administrator",
      "Finance Assistant",
      "Accounting Technician",
    ],
    modules: [
      "Ledger Management",
      "Financial Statements",
      "Accounting Software",
      "Payroll Administration",
      "Inventory Costing",
      "Internal Controls",
    ],
    price: "Contact for fees",
  },
  "financial-management-n4-n6": {
    slug: "financial-management-n4-n6",
    title: "Financial Management N4-N6",
    category: "Entrepreneurship & Management",
    duration: "18-36 months",
    mode: "Full-time / Part-time",
    nqfLevel: "N4-N6",
    credits: null,
    description: "Advanced financial qualification covering managerial finance, taxation, and auditing.",
    overview:
      "This nationally recognised programme provides in-depth knowledge of financial management principles. Learners study financial accounting, cost and management accounting, taxation, and auditing, preparing for professional careers in finance and accounting.",
    whatYouLearn: [
      "Financial accounting principles and practices",
      "Cost and management accounting techniques",
      "Taxation theory and calculations",
      "Auditing principles and procedures",
      "Corporate finance and investment decisions",
      "Financial analysis and reporting",
    ],
    entryRequirements: ["Grade 12 with Mathematics or Accounting"],
    careerOpportunities: [
      "Financial Accountant",
      "Management Accountant",
      "Tax Consultant (junior)",
      "Internal Auditor",
      "Finance Manager (junior)",
    ],
    certification: "National N Diploma upon completion of N4-N6 + 18 months work experience",
    price: "Contact for fees",
  },
  "human-resources-management-n4-n6": {
    slug: "human-resources-management-n4-n6",
    title: "Human Resources Management N4-N6",
    category: "Education & Training",
    duration: "18-36 months",
    mode: "Full-time / Part-time",
    nqfLevel: "N4-N6",
    credits: null,
    description: "Comprehensive HR qualification covering recruitment, training, labour law, and IR.",
    overview:
      "This nationally recognised programme prepares learners for careers in human resources management. From recruitment and selection to labour law, training and development, and industrial relations, graduates gain the skills to manage an organisation's most valuable asset \u2014 its people.",
    whatYouLearn: [
      "Recruitment, selection, and onboarding processes",
      "Performance management and appraisal systems",
      "Labour law and employee relations",
      "Training and development coordination",
      "Compensation and benefits administration",
      "HR information systems and record keeping",
    ],
    entryRequirements: ["Grade 12 or equivalent"],
    careerOpportunities: [
      "HR Administrator",
      "Recruitment Consultant",
      "Training Coordinator",
      "HR Generalist",
      "Labour Relations Officer",
    ],
    certification: "National N Diploma upon completion of N4-N6 + 18 months work experience",
    price: "Contact for fees",
  },
  "skills-development-facilitation-nqf-5": {
    slug: "skills-development-facilitation-nqf-5",
    title: "Skills Development Facilitation Practitioner NQF 5",
    category: "Education & Training",
    duration: "12 months",
    mode: "Part-time",
    nqfLevel: "NQF 5",
    credits: null,
    description: "Coordinate skills development, manage WSPs/ATRs, and SETA compliance.",
    overview:
      "This specialised programme focuses on the critical role of Skills Development Facilitators (SDFs) within organisations. Learners master the skills to coordinate skills development strategies, manage Workplace Skills Plans (WSPs) and Annual Training Reports (ATRs), and ensure SETA compliance.",
    whatYouLearn: [
      "Skills development legislation and frameworks",
      "Workplace Skills Plan (WSP) development",
      "Annual Training Report (ATR) submission",
      "SETA engagement and grant management",
      "Skills gap analysis and planning",
      "Skills development committee facilitation",
    ],
    entryRequirements: ["Grade 12 or equivalent", "Experience in HR or training is beneficial"],
    careerOpportunities: [
      "Skills Development Facilitator",
      "ETD Coordinator",
      "Training Administrator",
      "HR Development Coordinator",
      "SETA Liaison Officer",
    ],
    price: "Contact for fees",
  },
  "facilitator-course-nqf-5": {
    slug: "facilitator-course-nqf-5",
    title: "Facilitator Course NQF 5",
    category: "Education & Training",
    duration: "30 days",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 5",
    credits: null,
    description: "Learn to plan, prepare, facilitate, and evaluate learning in any context.",
    overview:
      "This accredited programme develops skilled facilitators capable of delivering effective learning experiences across multiple contexts. From corporate training to adult education, graduates gain the methodologies and confidence to engage learners and achieve measurable outcomes.",
    whatYouLearn: [
      "Learning programme planning and design",
      "Facilitation techniques and methods",
      "Learner assessment and feedback",
      "Learning environment management",
      "Evaluation of learning outcomes",
      "Communication and group dynamics",
    ],
    entryRequirements: ["Grade 12 or equivalent", "Relevant workplace experience recommended"],
    careerOpportunities: [
      "Skills Development Facilitator",
      "Corporate Trainer",
      "Adult Education Facilitator",
      "Training Coordinator",
      "Learning and Development Specialist",
    ],
    price: "Contact for fees",
  },
  "assessor-course": {
    slug: "assessor-course",
    title: "Assessor Course",
    category: "Education & Training",
    duration: "30 days",
    mode: "Full-time / Part-time",
    nqfLevel: "Skills Programme",
    credits: null,
    description: "Become a qualified skills assessor. Plan assessments, gather evidence, and provide feedback.",
    overview:
      "This programme equips learners with the skills to conduct competent and credible assessments in education, training, and workplace settings. Participants learn to plan assessments, gather and evaluate evidence, and provide constructive feedback that supports learner development.",
    whatYouLearn: [
      "Assessment principles and practices",
      "Assessment planning and design",
      "Evidence gathering methods",
      "Judging and decision-making",
      "Feedback and reporting",
      "Quality assurance of assessments",
    ],
    entryRequirements: ["Grade 12 or equivalent", "Competence in the field to be assessed"],
    careerOpportunities: [
      "Skills Assessor",
      "Training Assessor",
      "ETQA Coordinator",
      "Competency Assessor",
      "Workplace Mentor",
    ],
    price: "Contact for fees",
  },
  "training-development-practitioner-nqf-5": {
    slug: "training-development-practitioner-nqf-5",
    title: "Training & Development Practitioner NQF 5",
    category: "Education & Training",
    duration: "18-24 months",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 5",
    credits: null,
    description: "Comprehensive qualification covering facilitation, assessment, and L&D management.",
    overview:
      "A comprehensive qualification for those pursuing a career in training and development. Covering the full spectrum of L&D functions \u2014 from needs analysis and programme design to facilitation, assessment, and quality assurance \u2014 this programme produces well-rounded practitioners ready to drive organisational learning.",
    whatYouLearn: [
      "Training needs analysis and programme design",
      "Advanced facilitation and presentation skills",
      "Assessment design and moderation",
      "Learning management system administration",
      "Quality assurance in education and training",
      "L&D strategy and organisational development",
    ],
    entryRequirements: ["Grade 12 or equivalent", "Some workplace experience recommended"],
    careerOpportunities: [
      "Training and Development Practitioner",
      "Learning and Development Coordinator",
      "Training Manager",
      "Instructional Designer",
      "HR Development Specialist",
    ],
    price: "Contact for fees",
  },
  "learning-development-practitioner-nqf-6": {
    slug: "learning-development-practitioner-nqf-6",
    title: "Learning & Development Practitioner NQF 6",
    category: "Education & Training",
    duration: "24 months",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 6",
    credits: null,
    description: "Advanced L&D qualification for senior practitioners and learning managers.",
    overview:
      "This advanced qualification builds on foundational L&D knowledge to develop senior practitioners capable of managing complex learning interventions. Learners explore strategic L&D, organisational development, advanced assessment practices, and learning analytics.",
    whatYouLearn: [
      "Strategic learning and development management",
      "Organisational development and change management",
      "Advanced assessment and moderation practices",
      "Learning analytics and ROI measurement",
      "Curriculum design and development",
      "Mentoring and coaching strategies",
    ],
    entryRequirements: ["Grade 12 or equivalent", "NQF 5 qualification in Education & Training or equivalent"],
    careerOpportunities: [
      "Senior L&D Practitioner",
      "Learning Manager",
      "Instructional Designer",
      "Organisational Development Specialist",
      "Training and Development Manager",
    ],
    price: "Contact for fees",
  },
  "work-based-learning-practitioner-nqf-5": {
    slug: "work-based-learning-practitioner-nqf-5",
    title: "Work-Based Learning Practitioner NQF 5",
    category: "Education & Training",
    duration: "12 months",
    mode: "Part-time",
    nqfLevel: "NQF 5",
    credits: null,
    description: "Coordinate and facilitate work-based learning and apprenticeship programmes.",
    overview:
      "This qualification prepares practitioners to design, coordinate, and facilitate effective work-based learning programmes including apprenticeships, learnerships, and internships. Learners develop the skills to support learners in the workplace and ensure quality learning outcomes.",
    whatYouLearn: [
      "Work-based learning programme design",
      "Mentoring and coaching in the workplace",
      "Learnership and apprenticeship coordination",
      "Workplace assessment and moderation",
      "Stakeholder engagement and partnership management",
      "Quality assurance of work-based learning",
    ],
    entryRequirements: ["Grade 12 or equivalent", "Workplace training or mentoring experience beneficial"],
    careerOpportunities: [
      "Work-Based Learning Practitioner",
      "Learnership Coordinator",
      "Apprenticeship Manager",
      "Workplace Mentor",
      "TVET College Industry Liaison",
    ],
    price: "Contact for fees",
  },
  "educare-junior-teacher-n4-n6": {
    slug: "educare-junior-teacher-n4-n6",
    title: "Educare / Junior Teacher N4-N6",
    category: "Education & Training",
    duration: "18-36 months",
    mode: "Full-time",
    nqfLevel: "N4-N6",
    credits: null,
    description: "Become a qualified junior teacher or educare practitioner with this N4-N6 programme.",
    overview:
      "This nationally recognised programme prepares learners for careers in early childhood and junior primary education. Covering child development, educational psychology, teaching methodologies, and classroom management, graduates are equipped to nurture and educate young learners.",
    whatYouLearn: [
      "Child development and educational psychology",
      "Teaching methodologies and lesson planning",
      "Classroom management and discipline",
      "Curriculum development and implementation",
      "Assessment and learner progress tracking",
      "Health, nutrition, and child safety",
    ],
    entryRequirements: ["Grade 12 or equivalent"],
    careerOpportunities: [
      "Junior Teacher",
      "Educare Practitioner",
      "Preschool Teacher",
      "Teaching Assistant",
      "ECD Centre Manager",
    ],
    certification: "National N Diploma upon completion of N4-N6 + 18 months work experience",
    price: "Contact for fees",
  },
  "adult-literacy-teacher": {
    slug: "adult-literacy-teacher",
    title: "Adult Literacy Teacher",
    category: "Education & Training",
    duration: "6 months",
    mode: "Full-time / Part-time",
    nqfLevel: "Skills Programme",
    credits: null,
    description: "Learn to teach adult learners basic literacy and numeracy skills effectively.",
    overview:
      "Adult literacy is a critical need in South Africa. This programme equips educators with the specialised skills needed to teach adult learners reading, writing, and numeracy, using andragogical approaches that respect and leverage adult learners' life experiences.",
    whatYouLearn: [
      "Adult learning theories and andragogy",
      "Literacy teaching methods and resources",
      "Numeracy instruction techniques",
      "Lesson planning for adult learners",
      "Assessment and learner support",
      "Community engagement and outreach",
    ],
    entryRequirements: ["Grade 12 or equivalent", "Passion for adult education and community development"],
    careerOpportunities: [
      "Adult Literacy Teacher",
      "ABET Practitioner",
      "Community Education Facilitator",
      "Literacy Programme Coordinator",
      "NGO Education Officer",
    ],
    price: "Contact for fees",
  },
  "early-childhood-development-nqf-4": {
    slug: "early-childhood-development-nqf-4",
    title: "Early Childhood Development NQF 4",
    category: "Education & Training",
    duration: "12 months",
    mode: "Full-time",
    nqfLevel: "NQF 4",
    credits: null,
    description: "Support the holistic development of young children through play-based learning and ECD principles.",
    overview:
      "This programme prepares learners to work effectively with young children in early childhood development settings. Covering child development theory, play-based learning, and practical classroom management, graduates are equipped to create nurturing, stimulating environments for children aged 0-5.",
    whatYouLearn: [
      "Child development theories and milestones",
      "Play-based learning programme design",
      "Classroom management and child safety",
      "Nutrition, health, and well-being",
      "Parent and community engagement",
      "Observation and assessment of young children",
    ],
    entryRequirements: ["Grade 10 or equivalent"],
    careerOpportunities: [
      "ECD Practitioner",
      "Preschool Teacher",
      "Childcare Centre Assistant",
      "Au Pair",
      "Community ECD Worker",
    ],
    price: "Contact for fees",
  },
  "early-childhood-caregiver-nqf-1": {
    slug: "early-childhood-caregiver-nqf-1",
    title: "Early Childhood Caregiver NQF 1",
    category: "Education & Training",
    duration: "6 months",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 1",
    credits: null,
    description: "Entry-level qualification for caring for young children in home or centre-based settings.",
    overview:
      "This entry-level qualification provides foundational knowledge and skills for caring for young children. Learners develop basic childcare competencies including hygiene, safety, nutrition, and age-appropriate play, preparing them for roles in home-based or centre-based childcare.",
    whatYouLearn: [
      "Basic childcare and hygiene practices",
      "Child safety and first aid basics",
      "Age-appropriate play and stimulation",
      "Nutrition and meal preparation for children",
      "Communication with children and parents",
      "Creating a safe and nurturing environment",
    ],
    entryRequirements: ["Grade 9 or equivalent", "Love for working with children"],
    careerOpportunities: [
      "Childcare Worker",
      "Daycare Assistant",
      "Au Pair",
      "Home-Based Carer",
      "Preschool Assistant",
    ],
    price: "Contact for fees",
  },
  "basic-health-safety": {
    slug: "basic-health-safety",
    title: "Basic Health and Safety",
    category: "Health & Safety",
    duration: "8 weeks",
    mode: "Full-time / Part-time",
    nqfLevel: "Skills Programme",
    credits: null,
    description: "Understand workplace health and safety legislation, risk assessment, and emergency procedures.",
    overview:
      "This foundational programme introduces learners to the principles of occupational health and safety. Covering legislation, hazard identification, risk assessment, and emergency response, participants develop the knowledge to contribute to safer workplaces across any industry.",
    whatYouLearn: [
      "Occupational Health and Safety Act (OHSA)",
      "Hazard identification and risk assessment",
      "Emergency procedures and evacuation",
      "Personal protective equipment (PPE)",
      "Incident reporting and investigation",
      "Health and safety committee functions",
    ],
    entryRequirements: ["Grade 9 or equivalent"],
    careerOpportunities: [
      "Health and Safety Representative",
      "Safety Assistant",
      "Compliance Officer Assistant",
      "Site Safety Coordinator",
    ],
    price: "Contact for fees",
  },
  "health-safety-assistant-nqf-4": {
    slug: "health-safety-assistant-nqf-4",
    title: "Health and Safety Assistant NQF 4",
    category: "Health & Safety",
    duration: "12 weeks",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 4",
    credits: null,
    description: "Comprehensive health and safety qualification covering risk management and legal compliance.",
    overview:
      "This accredited qualification provides comprehensive knowledge of occupational health and safety management. Learners develop the skills to assist in implementing health and safety systems, conducting risk assessments, and ensuring legal compliance in diverse workplace environments.",
    whatYouLearn: [
      "Health and safety legislation and compliance",
      "Comprehensive risk assessment methodologies",
      "Incident investigation and root cause analysis",
      "Health and safety management systems",
      "Workplace inspections and audits",
      "Emergency preparedness and response planning",
    ],
    entryRequirements: ["Grade 10 or equivalent", "Basic health and safety knowledge is beneficial"],
    careerOpportunities: [
      "Health and Safety Assistant",
      "Safety Coordinator",
      "Compliance Officer",
      "Risk Assessment Officer",
      "Environmental Health Assistant",
    ],
    price: "Contact for fees",
  },
  "first-aid": {
    slug: "first-aid",
    title: "First Aid (Basic / Intermediate / Advanced)",
    category: "Health & Safety",
    duration: "2-6 weeks",
    mode: "Full-time",
    nqfLevel: "Skills Programme",
    credits: null,
    description: "Life-saving skills from basic first aid to advanced emergency response.",
    overview:
      "Accidents and medical emergencies can happen anywhere. This progressive first aid programme equips learners with life-saving skills from basic wound care and CPR through to advanced emergency response. Training is practical and scenario-based, ensuring participants are ready to act when it matters most.",
    whatYouLearn: [
      "Basic life support and CPR",
      "Wound care and bleeding control",
      "Fracture and injury management",
      "Medical emergency recognition",
      "Advanced airway management",
      "Automated External Defibrillator (AED) use",
    ],
    entryRequirements: ["Grade 9 or equivalent", "Physical ability to perform first aid procedures"],
    careerOpportunities: [
      "First Aid Responder",
      "Safety Officer",
      "Emergency Response Team Member",
      "Community Health Worker",
      "Childcare First Aider",
    ],
    modules: ["Basic First Aid (2 weeks)", "Intermediate First Aid (4 weeks)", "Advanced First Aid (6 weeks)"],
    price: "Contact for fees",
  },
  "occupational-health-safety-practitioner": {
    slug: "occupational-health-safety-practitioner",
    title: "Occupational Health & Safety Practitioner",
    category: "Health & Safety",
    duration: "12 months",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 5",
    credits: null,
    description: "Advanced OH&S qualification for managing comprehensive safety programmes.",
    overview:
      "This advanced programme prepares learners to function as competent occupational health and safety practitioners. Covering advanced risk management, safety systems auditing, occupational hygiene, and safety leadership, graduates are ready to manage comprehensive safety programmes in any industry.",
    whatYouLearn: [
      "Advanced risk assessment and management",
      "Occupational hygiene principles and practices",
      "Safety management systems (ISO 45001)",
      "Incident investigation and advanced reporting",
      "Safety leadership and organisational culture",
      "Environmental management fundamentals",
    ],
    entryRequirements: ["Grade 12 or equivalent", "Health and Safety Assistant NQF 4 or equivalent experience"],
    careerOpportunities: [
      "Health and Safety Officer",
      "Safety Practitioner",
      "Risk Manager",
      "Compliance Manager",
      "Environmental Health Officer",
    ],
    price: "Contact for fees",
  },
  "traffic-officer-course": {
    slug: "traffic-officer-course",
    title: "Traffic Officer Course",
    category: "Law Enforcement & Legal",
    duration: "18 months",
    mode: "Full-time",
    nqfLevel: "National Certificate",
    credits: null,
    description: "National Certificate in Tactical Road Traffic Operations. Traffic control, law enforcement, and road safety.",
    overview:
      "This intensive programme prepares learners for careers in traffic law enforcement. Covering traffic control, road safety, law enforcement procedures, and public service ethics, graduates are equipped to serve as professional traffic officers committed to road safety and justice.",
    whatYouLearn: [
      "Road traffic legislation and regulations",
      "Traffic control and point duty procedures",
      "Vehicle stopping and searching procedures",
      "Accident investigation and scene management",
      "Courts and legal procedures",
      "Ethics, professionalism, and community service",
    ],
    entryRequirements: [
      "Grade 12 or equivalent",
      "Valid driver's license",
      "No criminal record",
      "Medically fit",
    ],
    careerOpportunities: [
      "Traffic Officer",
      "Metro Police Officer",
      "Road Safety Inspector",
      "Law Enforcement Officer",
    ],
    price: "Contact for fees",
  },
  "national-diploma-policing-nqf-6": {
    slug: "national-diploma-policing-nqf-6",
    title: "National Diploma in Policing NQF 6",
    category: "Law Enforcement & Legal",
    duration: "36 months",
    mode: "Full-time",
    nqfLevel: "NQF 6",
    credits: "360",
    description: "Comprehensive policing diploma covering criminal law, investigation, and community safety.",
    overview:
      "This nationally recognised diploma provides comprehensive education in policing and law enforcement. Learners study criminal law, forensic investigation, community policing, and crime prevention, preparing them for professional careers in the South African Police Service and related agencies.",
    whatYouLearn: [
      "Criminal law and procedure",
      "Forensic investigation techniques",
      "Community policing and crime prevention",
      "Constitutional and human rights law",
      "Police administration and management",
      "Cybercrime and modern policing challenges",
    ],
    entryRequirements: ["Grade 12 with relevant subject requirements", "No criminal record", "Medically and psychologically fit"],
    careerOpportunities: [
      "Police Officer",
      "Investigation Officer",
      "Crime Prevention Officer",
      "Forensic Investigator",
      "Community Safety Coordinator",
    ],
    price: "Contact for fees",
  },
  "paralegal-practice-nqf-5": {
    slug: "paralegal-practice-nqf-5",
    title: "Paralegal Practice NQF 5",
    category: "Law Enforcement & Legal",
    duration: "12 months",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 5",
    credits: null,
    description: "Become a qualified paralegal. Learn legal research, document drafting, and case management.",
    overview:
      "This programme provides the foundational knowledge and practical skills for a career as a paralegal. Learners develop expertise in legal research, document drafting, case management, and client consultation, enabling them to provide essential support in legal environments.",
    whatYouLearn: [
      "South African legal system and court structures",
      "Legal research and writing",
      "Document drafting and pleadings",
      "Case management and file organisation",
      "Client consultation and communication",
      "Ethics and professional responsibility",
    ],
    entryRequirements: ["Grade 12 or equivalent"],
    careerOpportunities: [
      "Paralegal",
      "Legal Assistant",
      "Legal Secretary",
      "Court Clerk",
      "Legal Researcher",
    ],
    price: "Contact for fees",
  },
  "family-law-practitioner-nqf-5": {
    slug: "family-law-practitioner-nqf-5",
    title: "Family Law Practitioner NQF 5",
    category: "Law Enforcement & Legal",
    duration: "12 months",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 5",
    credits: null,
    description: "Specialise in family law, divorce proceedings, custody matters, and mediation.",
    overview:
      "This specialised programme focuses on the field of family law. Learners develop expertise in divorce proceedings, child custody and maintenance, domestic violence protection, and family mediation, preparing them to assist families navigating legal challenges.",
    whatYouLearn: [
      "Marriage, divorce, and dissolution of relationships",
      "Child custody, access, and maintenance",
      "Domestic violence protection orders",
      "Family mediation and negotiation",
      "Wills, estates, and inheritance",
      "Family court procedures and documentation",
    ],
    entryRequirements: ["Grade 12 or equivalent", "Paralegal Practice NQF 5 or equivalent recommended"],
    careerOpportunities: [
      "Family Law Paralegal",
      "Divorce Mediator",
      "Family Court Clerk",
      "Legal Aid Officer",
      "Child Maintenance Officer",
    ],
    price: "Contact for fees",
  },
  "mechanical-engineering-n1-n6": {
    slug: "mechanical-engineering-n1-n6",
    title: "Mechanical Engineering N1-N6",
    category: "Engineering",
    duration: "18-36 months",
    mode: "Full-time",
    nqfLevel: "N1-N6",
    credits: null,
    description: "Comprehensive mechanical engineering programme from N1 through N6 level.",
    overview:
      "This nationally recognised engineering programme provides a solid foundation in mechanical engineering principles. From engineering fundamentals at N1 to advanced topics at N6, learners develop the theoretical knowledge and practical skills required for careers in the mechanical engineering field.",
    whatYouLearn: [
      "Engineering mathematics and science",
      "Mechanical drawing and CAD fundamentals",
      "Strength of materials and thermodynamics",
      "Fluid mechanics and hydraulics",
      "Machine design and maintenance",
      "Engineering management and supervision",
    ],
    entryRequirements: ["Grade 10 for N1", "Grade 12 for N4", "Subject-specific requirements apply"],
    careerOpportunities: [
      "Mechanical Technician",
      "Maintenance Engineer",
      "Design Draughtsman",
      "Quality Control Inspector",
      "Engineering Supervisor",
    ],
    certification: "National N Diploma upon completion of N4-N6 + 24 months work experience",
    price: "Contact for fees",
  },
  "electrical-engineering-n1-n6": {
    slug: "electrical-engineering-n1-n6",
    title: "Electrical Engineering N1-N6",
    category: "Engineering",
    duration: "18-36 months",
    mode: "Full-time",
    nqfLevel: "N1-N6",
    credits: null,
    description: "Comprehensive electrical engineering programme from N1 through N6 level.",
    overview:
      "This nationally recognised engineering programme provides thorough training in electrical engineering. From basic electrical principles at N1 to advanced power systems, electronics, and industrial control at N6, learners build the expertise for rewarding careers in the electrical field.",
    whatYouLearn: [
      "Electrical circuit theory and analysis",
      "Electronic components and systems",
      "Power systems and distribution",
      "Electrical machines and transformers",
      "Programmable logic controllers (PLC)",
      "Engineering management and supervision",
    ],
    entryRequirements: ["Grade 10 for N1", "Grade 12 for N4", "Subject-specific requirements apply"],
    careerOpportunities: [
      "Electrical Technician",
      "Electronics Technician",
      "Power Systems Technician",
      "Maintenance Electrician",
      "Engineering Supervisor",
    ],
    certification: "National N Diploma upon completion of N4-N6 + 24 months work experience",
    price: "Contact for fees",
  },
  "civil-engineering-n1-n6": {
    slug: "civil-engineering-n1-n6",
    title: "Civil Engineering N1-N6",
    category: "Engineering",
    duration: "18-36 months",
    mode: "Full-time",
    nqfLevel: "N1-N6",
    credits: null,
    description: "Comprehensive civil engineering programme from N1 through N6 level.",
    overview:
      "This nationally recognised programme prepares learners for careers in civil engineering and construction. Covering structural analysis, geotechnical engineering, road construction, and building science from N1 to N6, graduates contribute to shaping South Africa's built environment.",
    whatYouLearn: [
      "Building science and construction methods",
      "Structural analysis and design",
      "Geotechnical engineering and soil mechanics",
      "Road construction and surveying",
      "Quantity surveying and estimation",
      "Engineering management and supervision",
    ],
    entryRequirements: ["Grade 10 for N1", "Grade 12 for N4", "Subject-specific requirements apply"],
    careerOpportunities: [
      "Civil Engineering Technician",
      "Construction Supervisor",
      "Site Technician",
      "Quantity Surveying Assistant",
      "Road Construction Inspector",
    ],
    certification: "National N Diploma upon completion of N4-N6 + 24 months work experience",
    price: "Contact for fees",
  },
  "comptia-it-fundamentals": {
    slug: "comptia-it-fundamentals",
    title: "CompTIA IT Fundamentals (ITF+)",
    category: "IT & Software",
    duration: "6 weeks",
    mode: "Full-time / Online",
    nqfLevel: "Short Course",
    credits: null,
    description: "Entry-level IT certification covering hardware, software, networking, and security basics.",
    overview:
      "CompTIA IT Fundamentals (ITF+) is the ideal starting point for anyone considering a career in IT. This vendor-neutral certification covers essential IT concepts including hardware, software, networking, databases, and security, providing a solid foundation for further specialisation.",
    whatYouLearn: [
      "IT concepts and terminology",
      "Hardware identification and installation",
      "Software installation and management",
      "Networking fundamentals and connectivity",
      "Database basics and SQL queries",
      "Security principles and best practices",
    ],
    entryRequirements: ["Grade 10 or equivalent", "Basic computer literacy"],
    careerOpportunities: [
      "IT Support Technician (entry-level)",
      "Help Desk Agent",
      "Technical Support Specialist",
      "IT Assistant",
    ],
    certification: "CompTIA ITF+ certification (international)",
    price: "Contact for fees",
  },
  "comptia-a-plus": {
    slug: "comptia-a-plus",
    title: "CompTIA A+",
    category: "IT & Software",
    duration: "12 weeks",
    mode: "Full-time / Online",
    nqfLevel: "Short Course",
    credits: null,
    description: "Industry-standard certification for IT support and hardware technicians.",
    overview:
      "CompTIA A+ is the industry standard for launching an IT career. This globally recognised certification validates the skills needed to install, configure, and troubleshoot PCs, mobile devices, and operating systems, making it a must-have for aspiring IT professionals.",
    whatYouLearn: [
      "PC hardware installation and configuration",
      "Operating system setup and administration",
      "Network connectivity and troubleshooting",
      "Mobile device configuration and security",
      "Virtualisation and cloud computing basics",
      "Security, safety, and operational procedures",
    ],
    entryRequirements: ["Grade 11 or equivalent", "CompTIA ITF+ or equivalent knowledge recommended"],
    careerOpportunities: [
      "IT Support Specialist",
      "Desktop Support Technician",
      "Help Desk Technician",
      "Field Service Technician",
      "IT Administrator (junior)",
    ],
    certification: "CompTIA A+ certification (international)",
    modules: ["Core 1: Hardware & Networking", "Core 2: OS & Security"],
    price: "Contact for fees",
  },
  "comptia-network-plus": {
    slug: "comptia-network-plus",
    title: "CompTIA Network+",
    category: "IT & Software",
    duration: "12 weeks",
    mode: "Full-time / Online",
    nqfLevel: "Short Course",
    credits: null,
    description: "Validate your networking knowledge and skills for IT infrastructure roles.",
    overview:
      "CompTIA Network+ is a globally recognised certification that validates the essential knowledge and skills needed to design, configure, manage, and troubleshoot wired and wireless networks. It serves as a critical stepping stone for networking careers.",
    whatYouLearn: [
      "Network architectures and topologies",
      "Network cabling and hardware",
      "IP addressing and subnetting",
      "Routing and switching fundamentals",
      "Network security and hardening",
      "Network monitoring and troubleshooting",
    ],
    entryRequirements: ["Grade 12 or equivalent", "CompTIA A+ or equivalent networking knowledge recommended"],
    careerOpportunities: [
      "Network Technician",
      "Network Administrator (junior)",
      "IT Support Engineer",
      "Systems Administrator",
      "Network Operations Center (NOC) Technician",
    ],
    certification: "CompTIA Network+ certification (international)",
    price: "Contact for fees",
  },
  "comptia-security-plus": {
    slug: "comptia-security-plus",
    title: "CompTIA Security+",
    category: "IT & Software",
    duration: "12 weeks",
    mode: "Full-time / Online",
    nqfLevel: "Short Course",
    credits: null,
    description: "Core cybersecurity certification covering threats, vulnerabilities, and risk management.",
    overview:
      "CompTIA Security+ is the premier cybersecurity certification for IT professionals. This globally recognised credential validates the baseline skills needed to perform core security functions, identify and mitigate threats, and implement secure network architectures.",
    whatYouLearn: [
      "Threats, vulnerabilities, and attacks",
      "Identity and access management",
      "Risk management and compliance",
      "Network security architecture",
      "Cryptography and PKI",
      "Incident response and forensics",
    ],
    entryRequirements: ["Grade 12 or equivalent", "CompTIA Network+ or equivalent security knowledge recommended"],
    careerOpportunities: [
      "Security Analyst (junior)",
      "Security Administrator",
      "SOC Analyst",
      "Cybersecurity Specialist",
      "IT Auditor (junior)",
    ],
    certification: "CompTIA Security+ certification (international)",
    price: "Contact for fees",
  },
  "software-developer-nqf-5": {
    slug: "software-developer-nqf-5",
    title: "Software Developer NQF 5",
    category: "IT & Software",
    duration: "18-24 months",
    mode: "Full-time (Learnership)",
    nqfLevel: "NQF 5",
    credits: null,
    description: "Comprehensive software development programme covering programming, web dev, and database design.",
    overview:
      "This comprehensive learnership programme transforms beginners into job-ready software developers. Covering programming fundamentals, web development, database design, and software engineering principles, graduates emerge with a portfolio of projects and the skills to launch a career in the fast-growing tech industry.",
    whatYouLearn: [
      "Programming fundamentals with Python and JavaScript",
      "Front-end web development (HTML, CSS, React)",
      "Back-end development and API design",
      "Database design and SQL",
      "Version control with Git and GitHub",
      "Software testing and deployment",
    ],
    entryRequirements: ["Grade 12 with Mathematics or Mathematical Literacy", "Passion for technology and problem-solving"],
    careerOpportunities: [
      "Junior Software Developer",
      "Web Developer",
      "Application Developer",
      "Full-Stack Developer Trainee",
      "IT Graduate Trainee",
    ],
    modules: [
      "Programming Fundamentals",
      "Front-End Web Development",
      "Back-End Development",
      "Database Design and SQL",
      "Software Engineering Principles",
      "Capstone Project",
    ],
    price: "Contact for fees",
  },
  "health-promotion-officer-nqf-5": {
    slug: "health-promotion-officer-nqf-5",
    title: "Health Promotion Officer NQF 5",
    category: "Healthcare",
    duration: "12 months",
    mode: "Full-time / Part-time",
    nqfLevel: "NQF 5",
    credits: null,
    description: "Promote community health and wellness through education, outreach, and programme coordination.",
    overview:
      "Health promotion is vital for improving community well-being and reducing disease burden. This programme equips learners with the knowledge and skills to design, implement, and evaluate health promotion programmes, conduct community outreach, and advocate for healthier lifestyles.",
    whatYouLearn: [
      "Health promotion theories and models",
      "Community health needs assessment",
      "Health education programme design",
      "Communication and behaviour change strategies",
      "Disease prevention and management",
      "Monitoring and evaluation of health programmes",
    ],
    entryRequirements: ["Grade 12 or equivalent", "Interest in community health and development"],
    careerOpportunities: [
      "Health Promotion Officer",
      "Community Health Worker",
      "Public Health Educator",
      "NGO Health Programme Coordinator",
      "Wellness Programme Coordinator",
    ],
    price: "Contact for fees",
  },
  "free-computer-literacy": {
    slug: "free-computer-literacy",
    title: "FREE Computer Literacy",
    category: "Computer & Digital Skills",
    duration: "12 weeks",
    mode: "Part-time",
    nqfLevel: "Short Course",
    credits: null,
    description:
      "Boost your digital skills for free! Learn computer fundamentals, internet literacy, and productivity tools.",
    overview:
      "This free programme is designed to bridge the digital divide by providing essential computer skills to all learners. From basic computer operations to internet navigation and productivity tools, participants gain the digital confidence needed for modern workplaces and daily life.",
    whatYouLearn: [
      "Computer hardware and software fundamentals",
      "Windows operating system navigation",
      "Internet browsing and online safety",
      "Email communication and etiquette",
      "Microsoft Word basics for document creation",
      "Microsoft Excel basics for spreadsheets",
    ],
    entryRequirements: ["No formal requirements", "Open to all learners"],
    careerOpportunities: [
      "Entry-level administrative roles",
      "Data capture positions",
      "Retail and service industry roles",
    ],
    price: "Free",
  },
};

function getCourseBySlug(slug: string): CourseData | undefined {
  return COURSES_DATA[slug];
}

export function generateStaticParams() {
  return Object.keys(COURSES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | SA Innovation College",
    };
  }

  return {
    title: `${course.title} | SA Innovation College`,
    description: course.description,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <>
        <section className="py-[var(--section-py)]">
          <Container>
            <div className="mx-auto max-w-xl text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-gray-100)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10 text-[var(--color-gray-400)]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <h1 className="mb-3 text-[var(--fs-3xl)] font-bold text-[var(--color-text-primary)]">
                Course Not Found
              </h1>
              <p className="mb-8 text-[var(--color-text-secondary)]">
                Sorry, we couldn&apos;t find the course you&apos;re looking
                for. It may have been removed or the link may be incorrect.
              </p>
              <Button variant="primary" size="lg" href="/courses">
                View All Courses
              </Button>
            </div>
          </Container>
        </section>
      </>
    );
  }

  const heroImage = categoryImages[course.category] || categoryImages["default"];
  const heroGradient = heroGradients[course.category] || "from-blue-900/80 via-blue-800/60";

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-gray-900)]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover opacity-40"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${heroGradient} to-transparent`} />
        </div>

        <div className="relative z-10 py-16 md:py-20">
          <Container>
            <nav className="mb-4 flex items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3 w-3" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              <Link href="/courses" className="transition-colors hover:text-white">
                Courses
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3 w-3" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-white/80" aria-current="page">
                {course.title}
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="inline-flex items-center rounded-md bg-white/15 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                {course.category}
              </span>
              {course.nqfLevel && (
                <span className="inline-flex items-center rounded-md bg-[var(--color-accent)]/20 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                  {course.nqfLevel}
                </span>
              )}
            </div>

            <h1 className="max-w-3xl text-[var(--fs-3xl)] md:text-[var(--fs-4xl)] font-extrabold leading-tight text-white">
              {course.title}
            </h1>

            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/80">
              {course.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white/90 border border-white/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {course.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white/90 border border-white/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                {course.mode}
              </span>
              {course.price && course.price !== "Free" && course.price !== "Contact for fees" && (
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-accent)]/15 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {course.price}
                </span>
              )}
            </div>
          </Container>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] py-12 md:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-10">
                <h2 className="mb-3 text-[var(--fs-xl)] font-bold text-[var(--color-text-primary)]">
                  Programme Overview
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {course.overview}
                </p>
              </div>

              <div className="mb-10">
                <h2 className="mb-4 text-[var(--fs-xl)] font-bold text-[var(--color-text-primary)]">
                  What You&apos;ll Learn
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {course.whatYouLearn.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {course.modules && course.modules.length > 0 && (
                <div className="mb-10">
                  <h2 className="mb-4 text-[var(--fs-xl)] font-bold text-[var(--color-text-primary)]">
                    Programme Modules
                  </h2>
                  <div className="space-y-2">
                    {course.modules.map((mod, idx) => (
                      <details
                        key={mod}
                        className="group rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-card)] transition-shadow duration-200"
                      >
                        <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-3.5 text-sm font-semibold text-[var(--color-text-primary)] transition-colors duration-200 hover:text-[var(--color-primary)]">
                          <span className="flex items-center gap-3">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs font-bold text-[var(--color-primary)]">
                              {idx + 1}
                            </span>
                            {mod}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4 shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 group-open:rotate-180"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </summary>
                        <div className="border-t border-[var(--color-border)] px-5 py-3">
                          <p className="text-sm text-[var(--color-text-secondary)]">
                            Detailed curriculum content for {mod} is provided upon registration.
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-10">
                <h2 className="mb-3 text-[var(--fs-xl)] font-bold text-[var(--color-text-primary)]">
                  Entry Requirements
                </h2>
                <ul className="list-inside list-disc space-y-1 text-[var(--color-text-secondary)] leading-relaxed">
                  {course.entryRequirements.map((req) => (
                    <li key={req}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="mb-4 text-[var(--fs-xl)] font-bold text-[var(--color-text-primary)]">
                  Career Opportunities
                </h2>
                <div className="flex flex-wrap gap-2">
                  {course.careerOpportunities.map((career) => (
                    <span
                      key={career}
                      className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] shadow-[var(--shadow-xs)] transition-colors duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              {course.certification && (
                <div className="mb-10">
                  <h2 className="mb-3 text-[var(--fs-xl)] font-bold text-[var(--color-text-primary)]">
                    Certification
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {course.certification}
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)]">
                  <h3 className="mb-5 text-base font-bold text-[var(--color-text-primary)]">
                    Key Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
                      <span className="text-sm text-[var(--color-text-muted)]">Duration</span>
                      <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
                      <span className="text-sm text-[var(--color-text-muted)]">NQF Level</span>
                      <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {course.nqfLevel ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
                      <span className="text-sm text-[var(--color-text-muted)]">Study Mode</span>
                      <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {course.mode}
                      </span>
                    </div>
                    {course.credits && (
                      <div className="flex items-center justify-between pb-3">
                        <span className="text-sm text-[var(--color-text-muted)]">Credits</span>
                        <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                          {course.credits}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)]">
                  <h3 className="mb-4 text-base font-bold text-[var(--color-text-primary)]">
                    Take the Next Step
                  </h3>
                  <p className="mb-5 text-sm text-[var(--color-text-secondary)]">
                    Ready to enrol or want more information? Get in touch with our admissions team.
                    {course.price !== "Free" && course.price !== "Contact for fees" && (
                      <span className="mt-1 block font-semibold text-[var(--color-text-primary)]">
                        Tuition: {course.price}
                      </span>
                    )}
                  </p>
                  <div className="space-y-3">
                    <Button variant="accent" size="lg" href="/apply" className="w-full">
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      href={`https://wa.me/27727733960?text=${encodeURIComponent(`Hi, I'd like more information about the ${course.title} programme.`)}`}
                      className="w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Request Info
                    </Button>
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)]">
                  <h3 className="mb-4 text-sm font-bold text-[var(--color-text-primary)]">
                    Share This Course
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.sainnovationcollege.co.za/courses/${course.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gray-100)] text-[var(--color-gray-600)] transition-all duration-200 hover:bg-[var(--color-primary)] hover:text-white"
                      aria-label="Share on Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out ${course.title} at SA Innovation College`)}&url=${encodeURIComponent(`https://www.sainnovationcollege.co.za/courses/${course.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gray-100)] text-[var(--color-gray-600)] transition-all duration-200 hover:bg-[var(--color-primary)] hover:text-white"
                      aria-label="Share on Twitter"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.sainnovationcollege.co.za/courses/${course.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gray-100)] text-[var(--color-gray-600)] transition-all duration-200 hover:bg-[var(--color-primary)] hover:text-white"
                      aria-label="Share on LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-[var(--color-border)] pt-8">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] transition-all duration-200 hover:gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Back to All Courses
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
