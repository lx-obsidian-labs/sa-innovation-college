import { createClient } from './server';

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  course_id: string | null;
  message: string;
  status: 'new' | 'responded';
  created_at: string;
  updated_at: string;
}

export async function submitContactMessage(
  data: Omit<ContactMessage, 'id' | 'status' | 'created_at' | 'updated_at'>
): Promise<{ success: boolean; error?: string }> {
  const supabase = createClient();

  const { error } = await supabase
    .from('contact_messages')
    .insert([
      {
        ...data,
        status: 'new',
      },
    ]);

  if (error) {
    console.error('[Contact Submission Error]', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[Get Contact Messages Error]', error);
    return [];
  }

  return data || [];
}

export async function updateMessageStatus(
  id: string,
  status: 'responded'
): Promise<{ success: boolean; error?: string }> {
  const supabase = createClient();
  const { error } = await supabase
    .from('contact_messages')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id);

  if (error) {
    console.error('[Update Message Error]', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
