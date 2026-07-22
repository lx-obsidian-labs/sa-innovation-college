import { z } from 'zod';
import {
  PHONE_REGEX,
  EMAIL_REGEX,
  ID_NUMBER_REGEX,
} from './validation';

export const ApplicationFormSchema = z.object({
  title: z.string().optional(),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().regex(PHONE_REGEX, 'Enter a valid phone number'),
  idNumber: z.string().regex(ID_NUMBER_REGEX, 'ID number must be 13 digits').optional().or(z.literal('')),
  dob: z.string().datetime().optional().or(z.literal('')),
  address: z.string().optional().or(z.literal('')),
  startDate: z.string().datetime().optional().or(z.literal('')),
  courseId: z.string().uuid('Select a valid course'),
  education: z.string().optional().or(z.literal('')),
  employStatus: z.string().optional().or(z.literal('')),
  hearAbout: z.string().optional().or(z.literal('')),
  agree: z.boolean().refine(val => val === true, 'You must agree to terms'),
});

export type ApplicationFormData = z.infer<typeof ApplicationFormSchema>;

export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().regex(PHONE_REGEX, 'Enter a valid phone number'),
  courseId: z.string().uuid().optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long'),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
