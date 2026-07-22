import { createClient } from './server';

export async function uploadCourseImage(
  file: File,
  courseSlug: string
): Promise<{ success: boolean; url?: string; error?: string }> {
  const supabase = createClient();
  const fileName = `${courseSlug}-${Date.now()}.${file.name.split('.').pop()}`;

  const { data, error } = await supabase.storage
    .from('course-images')
    .upload(`courses/${fileName}`, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error('[Upload Error]', error);
    return { success: false, error: error.message };
  }

  const { data: url } = supabase.storage
    .from('course-images')
    .getPublicUrl(`courses/${fileName}`);

  return { success: true, url: url.publicUrl };
}

export async function deleteCourseImage(
  filePath: string
): Promise<{ success: boolean; error?: string }> {
  const supabase = createClient();
  const { error } = await supabase.storage
    .from('course-images')
    .remove([filePath]);

  if (error) {
    console.error('[Delete Error]', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
