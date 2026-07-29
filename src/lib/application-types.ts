export interface ApplicationFormValues {
  title: string; fullName: string; idNumber: string; dob: string; phone: string; email: string; address: string; startDate: string;
  category: string; course: string; education: string; employStatus: string; hearAbout: string; agree: boolean;
  gender: string; nationality: string; postalCode: string; emergencyName: string; emergencyPhone: string;
  fundingSource: string; previousSchool: string;
}

export const APPLICATION_DRAFT_KEY = "saic-application-draft-v1";
