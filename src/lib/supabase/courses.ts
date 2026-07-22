import { createClient } from './server';

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  category: string;
  nqf_level: number | null;
  duration: string | null;
  delivery_mode: string | null;
  credits: number | null;
  unit_standards: string[] | null;
  image_url: string | null;
  featured: boolean;
  price: number | null;
  rating: number | null;
  created_at: string;
  updated_at: string;
}

export async function getAllCourses(): Promise<Course[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('featured', { ascending: false })
    .order('title');

  if (error) {
    console.error('[Courses Query Error]', error);
    return [];
  }

  return data || [];
}

export async function getFeaturedCourses(limit = 6): Promise<Course[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('featured', true)
    .limit(limit);

  if (error) {
    console.error('[Featured Courses Query Error]', error);
    return [];
  }

  return data || [];
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('[Course Query Error]', error);
    return null;
  }

  return data;
}

export async function getCoursesByCategory(category: string): Promise<Course[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('category', category)
    .order('title');

  if (error) {
    console.error('[Courses by Category Query Error]', error);
    return [];
  }

  return data || [];
}

export async function searchCourses(query: string): Promise<Course[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .or(
      `title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`
    )
    .order('title');

  if (error) {
    console.error('[Search Courses Error]', error);
    return [];
  }

  return data || [];
}
