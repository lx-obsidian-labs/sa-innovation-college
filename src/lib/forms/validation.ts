export const PHONE_REGEX = /^[\d\s+\-()]{7,15}$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const ID_NUMBER_REGEX = /^\d{13}$/;

export interface ValidationError {
  field: string;
  message: string;
}

export function validateEmail(email: string): ValidationError | null {
  if (!email.trim()) {
    return { field: 'email', message: 'Email is required' };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { field: 'email', message: 'Enter a valid email address' };
  }
  return null;
}

export function validatePhone(phone: string): ValidationError | null {
  if (!phone.trim()) {
    return { field: 'phone', message: 'Phone is required' };
  }
  if (!PHONE_REGEX.test(phone)) {
    return { field: 'phone', message: 'Enter a valid phone number (7-15 digits)' };
  }
  return null;
}

export function validateName(name: string, fieldName = 'name'): ValidationError | null {
  if (!name.trim()) {
    return { field: fieldName, message: 'Name is required' };
  }
  if (name.trim().length < 2) {
    return { field: fieldName, message: 'Name must be at least 2 characters' };
  }
  if (name.trim().length > 100) {
    return { field: fieldName, message: 'Name must be less than 100 characters' };
  }
  return null;
}

export function validateMessage(
  message: string,
  minLength = 10,
  maxLength = 2000
): ValidationError | null {
  if (!message.trim()) {
    return { field: 'message', message: 'Message is required' };
  }
  if (message.trim().length < minLength) {
    return { field: 'message', message: `Message must be at least ${minLength} characters` };
  }
  if (message.trim().length > maxLength) {
    return { field: 'message', message: `Message must be less than ${maxLength} characters` };
  }
  return null;
}

export function validateIdNumber(idNumber: string): ValidationError | null {
  if (!idNumber.trim()) {
    return null; // Optional field
  }
  if (!ID_NUMBER_REGEX.test(idNumber)) {
    return { field: 'id_number', message: 'ID number must be 13 digits' };
  }
  return null;
}

export function validateDate(dateStr: string): ValidationError | null {
  if (!dateStr) {
    return null; // Optional field
  }
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return { field: 'dob', message: 'Invalid date' };
  }
  // Check if over 16 years old
  const today = new Date();
  const age = today.getFullYear() - date.getFullYear();
  if (age < 16) {
    return { field: 'dob', message: 'Must be at least 16 years old' };
  }
  return null;
}

export function validateRequired(value: string | null | undefined, fieldName: string): ValidationError | null {
  if (!value || !value.toString().trim()) {
    return { field: fieldName, message: `${fieldName} is required` };
  }
  return null;
}
