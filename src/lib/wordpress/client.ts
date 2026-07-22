import type {
  WPPage,
  WPCourse,
  WPTestimonial,
  WPStaff,
  WPPartner,
  WPPost,
  WPDownload,
  WPFAQ,
  GlobalSettings,
  WPResponse,
} from "@/types/wordpress";

const WP_API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL ?? "https://www.sainnovationcollege.co.za/wp-json/wp/v2";

async function wpFetch<T>(endpoint: string, params?: Record<string, string | number | boolean>): Promise<T> {
  const url = new URL(`${WP_API}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, val]) => url.searchParams.set(key, String(val)));
  }

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// ─── Pages ────────────────────────────────────────────────

export async function getPage(slug: string): Promise<WPPage | null> {
  try {
    const pages = await wpFetch<Record<string, unknown>[]>("/pages", { slug, status: "publish" });
    if (!pages.length) return null;
    const p = pages[0];
    return {
      id: p.id as number,
      slug: p.slug as string,
      title: (p.title as { rendered: string })?.rendered ?? "",
      content: (p.content as { rendered: string })?.rendered ?? "",
      excerpt: (p.excerpt as { rendered: string })?.rendered ?? "",
      link: p.link as string,
      date: p.date as string,
      modified: p.modified as string,
    };
  } catch {
    return null;
  }
}

export async function getAllPages(): Promise<WPPage[]> {
  return wpFetch<WPPage[]>("/pages", { status: "publish", per_page: 50 });
}

// ─── Courses ──────────────────────────────────────────────

export async function getAllCourses(): Promise<WPCourse[]> {
  return wpFetch<WPCourse[]>("/sa_course", { status: "publish", per_page: 50 });
}

export async function getCourse(slug: string): Promise<WPCourse | null> {
  try {
    const courses = await wpFetch<WPCourse[]>("/sa_course", { slug, status: "publish" });
    return courses[0] ?? null;
  } catch {
    return null;
  }
}

export async function getFeaturedCourses(): Promise<WPCourse[]> {
  return wpFetch<WPCourse[]>("/sa_course", { status: "publish", per_page: 6, featured: true });
}

export async function getCourseCategories() {
  return wpFetch<Record<string, unknown>[]>("/sa_course_category", { per_page: 50 });
}

// ─── Testimonials ─────────────────────────────────────────

export async function getTestimonials(): Promise<WPTestimonial[]> {
  return wpFetch<WPTestimonial[]>("/sa_testimonial", { status: "publish", per_page: 20 });
}

// ─── Staff ────────────────────────────────────────────────

export async function getStaffMembers(): Promise<WPStaff[]> {
  return wpFetch<WPStaff[]>("/sa_staff", { status: "publish", per_page: 50 });
}

export async function getStaffBySlug(slug: string): Promise<WPStaff | null> {
  try {
    const staff = await wpFetch<WPStaff[]>("/sa_staff", { slug, status: "publish" });
    return staff[0] ?? null;
  } catch {
    return null;
  }
}

// ─── Partners ─────────────────────────────────────────────

export async function getPartners(): Promise<WPPartner[]> {
  return wpFetch<WPPartner[]>("/sa_partner", { status: "publish", per_page: 50 });
}

// ─── News Posts ───────────────────────────────────────────

export async function getAllPosts(perPage = 10, page = 1): Promise<WPResponse<WPPost[]>> {
  const [data, total, totalPages] = await Promise.all([
    wpFetch<WPPost[]>("/posts", { status: "publish", per_page: perPage, page }),
    fetch(`${WP_API}/posts?status=publish&per_page=1`, { next: { revalidate: 3600 } }).then(r => Number(r.headers.get("X-WP-Total") ?? 0)),
    fetch(`${WP_API}/posts?status=publish&per_page=1`, { next: { revalidate: 3600 } }).then(r => Number(r.headers.get("X-WP-TotalPages") ?? 0)),
  ]);
  return { data, total, totalPages };
}

export async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const posts = await wpFetch<WPPost[]>("/posts", { slug, status: "publish" });
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

// ─── Downloads ────────────────────────────────────────────

export async function getDownloads(): Promise<WPDownload[]> {
  return wpFetch<WPDownload[]>("/sa_download", { status: "publish", per_page: 50 });
}

// ─── FAQs ─────────────────────────────────────────────────

export async function getFAQs(): Promise<WPFAQ[]> {
  return wpFetch<WPFAQ[]>("/sa_faq", { status: "publish", per_page: 100, orderby: "menu_order", order: "asc" });
}

// ─── Menus ────────────────────────────────────────────────

export async function getNavigation(): Promise<{ primary: { title: string; url: string }[] }> {
  // Default navigation — WordPress menus require a plugin (e.g., WP REST API Menus)
  return {
    primary: [
      { title: "Home", url: "/" },
      { title: "About", url: "/about" },
      { title: "Courses", url: "/courses" },
      { title: "News", url: "/news" },
      { title: "Contact", url: "/contact" },
    ],
  };
}

// ─── Global Settings ──────────────────────────────────────

export async function getGlobalSettings(): Promise<GlobalSettings> {
  try {
    const options = await wpFetch<Record<string, unknown>>("/options/v1/all");
    return {
      siteName: (options.site_name as string) ?? "SA Innovation College",
      siteTagline: (options.site_tagline as string) ?? "Empowering Future Innovators",
      siteUrl: (options.site_url as string) ?? "https://www.sainnovationcollege.co.za",
      phone: (options.phone as string) ?? "0800 014 568",
      whatsapp: (options.whatsapp as string) ?? "+27727733960",
      email: (options.email as string) ?? "info@sainnovationcollege.co.za",
      address: (options.address as string) ?? "147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157",
      googleMapsUrl: (options.google_maps_url as string) ?? "https://maps.app.goo.gl/V4LqhhDbZeSUgGN37",
      socialLinks: {
        facebook: options.facebook_url as string,
        instagram: options.instagram_url as string,
        twitter: options.twitter_url as string,
        linkedin: options.linkedin_url as string,
        tiktok: options.tiktok_url as string,
      },
      footerText: (options.footer_text as string) ?? "© 2026 SA Innovation College. All rights reserved.",
      operatingHours: (options.operating_hours as string) ?? "Mon–Fri: 08:00–17:00",
    };
  } catch {
    return {
      siteName: "SA Innovation College",
      siteTagline: "Empowering Future Innovators",
      siteUrl: "https://www.sainnovationcollege.co.za",
      phone: "0800 014 568",
      whatsapp: "+27727733960",
      email: "info@sainnovationcollege.co.za",
      address: "147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157",
      googleMapsUrl: "https://maps.app.goo.gl/V4LqhhDbZeSUgGN37",
      socialLinks: {},
      footerText: "© 2026 SA Innovation College. All rights reserved.",
      operatingHours: "Mon–Fri: 08:00–17:00",
    };
  }
}
