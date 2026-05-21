import { CONTACT_STORAGE_KEY } from './catalog';

export function saveContactInquiry(inquiry) {
  const stored = sessionStorage.getItem(CONTACT_STORAGE_KEY);
  const inquiries = stored ? JSON.parse(stored) : [];

  inquiries.push({
    ...inquiry,
    submittedAt: new Date().toISOString(),
  });

  sessionStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(inquiries));
}

export function getContactInquiries() {
  const stored = sessionStorage.getItem(CONTACT_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}
