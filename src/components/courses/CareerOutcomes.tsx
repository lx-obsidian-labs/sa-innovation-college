import Icon from "@/components/ui/Icon";

interface CareerOutcome {
  title: string;
  avgSalary: string;
  growthRate: string;
  topEmployers: string[];
}

interface CareerOutcomesProps {
  careers: string[];
  category: string;
}

const CATEGORY_SALARY_DATA: Record<string, CareerOutcome[]> = {
  "Computer & Digital Skills": [
    { title: "Administrative Clerk", avgSalary: "R10,000 – R18,000", growthRate: "Stable", topEmployers: ["Banks", "Government", "Corporate offices"] },
    { title: "Data Capturer", avgSalary: "R12,000 – R20,000", growthRate: "Moderate", topEmployers: ["Medical aid schemes", "Insurance companies", "Retail groups"] },
    { title: "IT Support Technician", avgSalary: "R15,000 – R30,000", growthRate: "High", topEmployers: ["Tech companies", "ISPs", "Corporate IT departments"] },
  ],
  "Business & Administration": [
    { title: "Office Administrator", avgSalary: "R12,000 – R22,000", growthRate: "Stable", topEmployers: ["Corporate firms", "Government", "NGOs"] },
    { title: "Receptionist", avgSalary: "R10,000 – R18,000", growthRate: "Stable", topEmployers: ["Hotels", "Corporate offices", "Medical practices"] },
    { title: "Executive Assistant", avgSalary: "R20,000 – R40,000", growthRate: "Moderate", topEmployers: ["Large corporates", "Law firms", "Consulting firms"] },
  ],
  "Customer Service & Hospitality": [
    { title: "Customer Service Agent", avgSalary: "R10,000 – R18,000", growthRate: "Stable", topEmployers: ["Call centres", "Banks", "Retail chains"] },
    { title: "Hospitality Supervisor", avgSalary: "R15,000 – R28,000", growthRate: "High", topEmployers: ["Hotels", "Restaurants", "Event venues"] },
  ],
  "Marketing & Sales": [
    { title: "Sales Representative", avgSalary: "R15,000 – R35,000 + commission", growthRate: "High", topEmployers: ["FMCG companies", "Tech firms", "Real estate"] },
    { title: "Marketing Coordinator", avgSalary: "R18,000 – R30,000", growthRate: "Moderate", topEmployers: ["Advertising agencies", "Corporate marketing departments"] },
  ],
  "Management & Entrepreneurship": [
    { title: "Business Owner", avgSalary: "Varies widely", growthRate: "High", topEmployers: ["Self-employed", "Small businesses"] },
    { title: "Project Manager", avgSalary: "R30,000 – R65,000", growthRate: "High", topEmployers: ["Construction", "IT", "Consulting"] },
    { title: "Office Manager", avgSalary: "R20,000 – R40,000", growthRate: "Stable", topEmployers: ["Corporate firms", "Government", "NGOs"] },
  ],
  "Finance & Accounting": [
    { title: "Bookkeeper", avgSalary: "R15,000 – R28,000", growthRate: "Stable", topEmployers: ["Accounting firms", "SMEs", "Corporate finance departments"] },
    { title: "Financial Clerk", avgSalary: "R18,000 – R35,000", growthRate: "Moderate", topEmployers: ["Banks", "Insurance companies", "Government"] },
  ],
  "Human Resources": [
    { title: "HR Officer", avgSalary: "R20,000 – R40,000", growthRate: "Moderate", topEmployers: ["Corporate HR departments", "Recruitment agencies"] },
    { title: "Recruitment Consultant", avgSalary: "R18,000 – R45,000 + commission", growthRate: "High", topEmployers: ["Staffing agencies", "Corporate recruitment"] },
  ],
  "Education & Training": [
    { title: "Facilitator / Trainer", avgSalary: "R18,000 – R35,000", growthRate: "Moderate", topEmployers: ["Colleges", "Corporate L&D departments", "SETAs"] },
    { title: "Assessor", avgSalary: "R20,000 – R40,000", growthRate: "High", topEmployers: ["Training providers", "SETAs", "Colleges"] },
  ],
  "Health & Safety": [
    { title: "H&S Officer", avgSalary: "R20,000 – R45,000", growthRate: "High", topEmployers: ["Construction", "Mining", "Manufacturing"] },
    { title: "First Aider", avgSalary: "R12,000 – R22,000", growthRate: "Stable", topEmployers: ["Corporate offices", "Schools", "Events"] },
  ],
  "Security & Legal Studies": [
    { title: "Traffic Officer", avgSalary: "R18,000 – R35,000", growthRate: "Stable", topEmployers: ["Provincial traffic departments", "Municipal authorities"] },
    { title: "Policeman / Woman", avgSalary: "R18,000 – R40,000", growthRate: "Stable", topEmployers: ["SAPS", "Private security", "Metro police"] },
    { title: "Paralegal", avgSalary: "R15,000 – R30,000", growthRate: "Moderate", topEmployers: ["Law firms", "Corporate legal departments", "NGOs"] },
  ],
  "Engineering": [
    { title: "Engineering Technician", avgSalary: "R25,000 – R55,000", growthRate: "High", topEmployers: ["Eskom", "Transnet", "Mining companies"] },
    { title: "Artisan / Fitter", avgSalary: "R20,000 – R40,000", growthRate: "Moderate", topEmployers: ["Manufacturing", "Mining", "Construction"] },
  ],
  "IT & Software Development": [
    { title: "Junior Developer", avgSalary: "R20,000 – R40,000", growthRate: "Very High", topEmployers: ["Tech startups", "Banks", "IT consultancies"] },
    { title: "IT Support Specialist", avgSalary: "R18,000 – R35,000", growthRate: "High", topEmployers: ["Corporate IT", "ISPs", "Tech companies"] },
    { title: "Network Administrator", avgSalary: "R25,000 – R50,000", growthRate: "High", topEmployers: ["Telecoms", "Banks", "Government"] },
  ],
  "Health & Social Services": [
    { title: "Health Promotion Officer", avgSalary: "R18,000 – R35,000", growthRate: "Moderate", topEmployers: ["Department of Health", "NGOs", "Community organisations"] },
  ],
  "Early Childhood Development": [
    { title: "ECD Practitioner", avgSalary: "R10,000 – R20,000", growthRate: "High", topEmployers: ["ECD centres", "Schools", "NGOs"] },
    { title: "Junior Teacher", avgSalary: "R12,000 – R25,000", growthRate: "Moderate", topEmployers: ["Primary schools", "Private schools", "Government schools"] },
  ],
};

export default function CareerOutcomes({ careers, category }: CareerOutcomesProps) {
  const salaryData = CATEGORY_SALARY_DATA[category] || [];

  if (salaryData.length === 0) return null;

  return (
    <div className="premium-card mb-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
          <Icon name="banknotes" size={5} className="text-[var(--color-accent)]" />
        </div>
        <div>
          <h2 className="text-[var(--fs-xl)] font-bold text-[var(--color-text-primary)]">
            Career Outcomes & Salary Data
          </h2>
          <p className="text-xs text-[var(--color-text-muted)]">Based on South African job market data (2025/2026)</p>
        </div>
      </div>

      <div className="space-y-4">
        {salaryData.slice(0, 3).map((outcome) => (
          <div key={outcome.title} className="rounded-xl border border-[var(--color-border)] bg-white p-4">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">{outcome.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-accent)]/10 px-2 py-0.5 text-[10px] font-bold text-[var(--color-accent)]">
                    <Icon name="trending-up" size={3} />
                    {outcome.growthRate} growth
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-[var(--color-text-muted)]">Avg. monthly salary</span>
                <p className="text-sm font-bold text-[var(--color-primary)]">{outcome.avgSalary}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-medium text-[var(--color-text-muted)]">Top employers:</span>
              {outcome.topEmployers.map((emp) => (
                <span key={emp} className="inline-block rounded-full bg-[var(--color-gray-100)] px-2 py-0.5 text-[10px] text-[var(--color-gray-600)]">
                  {emp}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-[var(--color-text-muted)]">
        Salary ranges are estimates based on South African job market data and may vary by location, experience, and employer.
        Completing a programme does not guarantee employment or a specific salary.
      </p>
    </div>
  );
}
