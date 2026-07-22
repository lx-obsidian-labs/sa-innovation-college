export const TITLES = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr', 'Prof'];

export const COURSE_CATEGORIES = [
  { id: 'computer', label: 'Computer & Digital Skills' },
  { id: 'business', label: 'Business & Administration' },
  { id: 'hospitality', label: 'Customer Service & Hospitality' },
  { id: 'marketing', label: 'Marketing & Sales' },
  { id: 'management', label: 'Management & Entrepreneurship' },
  { id: 'finance', label: 'Finance & Accounting' },
  { id: 'hr', label: 'Human Resources' },
  { id: 'education', label: 'Education & Training' },
  { id: 'ecd', label: 'Early Childhood Development' },
  { id: 'safety', label: 'Health & Safety' },
  { id: 'security', label: 'Security & Legal Studies' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'it', label: 'Information Technology' },
  { id: 'health', label: 'Health & Social Services' },
];

export const EMPLOYMENT_STATUS = [
  'Employed Full-time',
  'Employed Part-time',
  'Self-employed',
  'Unemployed',
  'Student',
  'Retired',
  'Other',
];

export const EDUCATION_LEVELS = [
  { value: 'grade-9', label: 'Grade 9' },
  { value: 'grade-10', label: 'Grade 10' },
  { value: 'grade-11', label: 'Grade 11' },
  { value: 'grade-12', label: 'Grade 12 / Matric' },
  { value: 'certificate', label: 'Certificate' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'degree', label: 'Degree' },
  { value: 'postgraduate', label: 'Postgraduate' },
  { value: 'other', label: 'Other' },
];

export const HEAR_ABOUT_US = [
  'Google / Search',
  'Facebook',
  'Instagram',
  'WhatsApp',
  'Friend / Family',
  'Walk-in',
  'Radio / TV',
  'Newspaper',
  'LinkedIn',
  'Other',
];

export const CATEGORY_COLORS: Record<string, string> = {
  'Computer & Digital Skills': 'bg-blue-100 text-blue-700',
  'Business & Administration': 'bg-emerald-100 text-emerald-700',
  'Customer Service & Hospitality': 'bg-orange-100 text-orange-700',
  'Marketing & Sales': 'bg-pink-100 text-pink-700',
  'Management & Entrepreneurship': 'bg-amber-100 text-amber-700',
  'Finance & Accounting': 'bg-green-100 text-green-700',
  'Human Resources': 'bg-purple-100 text-purple-700',
  'Education & Training': 'bg-indigo-100 text-indigo-700',
  'Early Childhood Development': 'bg-rose-100 text-rose-700',
  'Health & Safety': 'bg-red-100 text-red-700',
  'Security & Legal Studies': 'bg-slate-100 text-slate-700',
  'Engineering': 'bg-cyan-100 text-cyan-700',
  'Information Technology': 'bg-violet-100 text-violet-700',
  'Health & Social Services': 'bg-fuchsia-100 text-fuchsia-700',
};

export const CATEGORY_GRADIENTS: Record<string, string> = {
  'Computer & Digital Skills': 'from-blue-500 to-blue-400',
  'Business & Administration': 'from-emerald-500 to-emerald-400',
  'Customer Service & Hospitality': 'from-orange-500 to-orange-400',
  'Marketing & Sales': 'from-pink-500 to-pink-400',
  'Management & Entrepreneurship': 'from-amber-500 to-amber-400',
  'Finance & Accounting': 'from-green-500 to-green-400',
  'Human Resources': 'from-purple-500 to-purple-400',
  'Education & Training': 'from-indigo-500 to-indigo-400',
  'Early Childhood Development': 'from-rose-500 to-rose-400',
  'Health & Safety': 'from-red-500 to-red-400',
  'Security & Legal Studies': 'from-slate-500 to-slate-400',
  'Engineering': 'from-cyan-500 to-cyan-400',
  'Information Technology': 'from-violet-500 to-violet-400',
  'Health & Social Services': 'from-fuchsia-500 to-fuchsia-400',
};
