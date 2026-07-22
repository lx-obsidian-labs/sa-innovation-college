import { createClient } from './server';

export interface Application {
  id: string;
  ref_number: string;
  title: string | null;
  full_name: string;
  email: string;
  phone: string;
  id_number: string | null;
  dob: string | null;
  address: string | null;
  course_id: string | null;
  education_level: string | null;
  employment_status: string | null;
  heard_about: string | null;
  status: 'new' | 'reviewed' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}

export async function submitApplication(
  data: Omit<Application, 'id' | 'ref_number' | 'status' | 'created_at' | 'updated_at'>
): Promise<{ success: boolean; refNumber?: string; error?: string }> {
  const supabase = createClient();

  // Generate reference number
  const refNumber = `SAIC-${Date.now().toString(36).toUpperCase()}-${Math.random()
    .toString(36)
    .substring(2, 6)
    .toUpperCase()}`;

  const { data: inserted, error } = await supabase
    .from('applications')
    .insert([
      {
        ...data,
        ref_number: refNumber,
        status: 'new',
      },
    ])
    .select();

  if (error) {
    console.error('[Application Submission Error]', error);
    return { success: false, error: error.message };
  }

  return { success: true, refNumber };
}

export async function getApplications(): Promise<Application[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[Get Applications Error]', error);
    return [];
  }

  return data || [];
}

export async function getApplicationByRefNumber(
  refNumber: string
): Promise<Application | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .eq('ref_number', refNumber)
    .single();

  if (error) {
    console.error('[Get Application Error]', error);
    return null;
  }

  return data;
}

export async function updateApplicationStatus(
  id: string,
  status: 'reviewed' | 'approved' | 'rejected'
): Promise<{ success: boolean; error?: string }> {
  const supabase = createClient();
  const { error } = await supabase
    .from('applications')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id);

  if (error) {
    console.error('[Update Application Error]', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
