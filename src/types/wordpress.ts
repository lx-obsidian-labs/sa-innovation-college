// ═══════════════════════════════════════════════════════════
// SA Innovation College — WordPress Types
// ═══════════════════════════════════════════════════════════

export interface WPImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface WPPage {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage?: WPImage;
  link: string;
  date: string;
  modified: string;
}

export interface WPCourse {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage?: WPImage;
  link: string;
  date: string;
  categories: WPCourseCategory[];
  duration?: string;
  mode?: string;
  price?: string;
  entryRequirements?: string;
  accreditation?: string;
  modules?: string[];
  careerOpportunities?: string[];
  featured?: boolean;
}

export interface WPCourseCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WPTestimonial {
  id: number;
  name: string;
  role: string;
  programme: string;
  quote: string;
  avatar?: WPImage;
}

export interface WPStaff {
  id: number;
  name: string;
  position: string;
  department: string;
  bio: string;
  qualifications: string[];
  image?: WPImage;
}

export interface WPPartner {
  id: number;
  name: string;
  logo: WPImage;
  website?: string;
  description?: string;
}

export interface WPPost {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage?: WPImage;
  link: string;
  date: string;
  modified: string;
  categories: { id: number; name: string; slug: string }[];
}

export interface WPDownload {
  id: number;
  title: string;
  file: { url: string; mimeType: string };
  fileType: string;
  description?: string;
}

export interface WPFAQ {
  id: number;
  question: string;
  answer: string;
  order: number;
}

export interface GlobalSettings {
  siteName: string;
  siteTagline: string;
  siteUrl: string;
  logo?: WPImage;
  favicon?: WPImage;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  googleMapsUrl: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    tiktok?: string;
  };
  footerText: string;
  operatingHours: string;
}

export interface WPMenuItem {
  id: number;
  title: string;
  url: string;
  target?: string;
  children?: WPMenuItem[];
}

// API response wrapper
export interface WPResponse<T> {
  data: T;
  total: number;
  totalPages: number;
}
