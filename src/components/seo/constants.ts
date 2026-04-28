export const SITE_URL = 'https://nicoletologa.com';

export function withSiteUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}
