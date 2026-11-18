import { site } from '@/config/site';

export function mailtoHref(subject: string, body: string): string {
  const params = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${site.contactEmail}?${params}`;
}
