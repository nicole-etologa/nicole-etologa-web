import { useEffect } from 'react';
import { SITE_URL } from './constants';

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  jsonLd?: JsonLd;
}

const DEFAULT_IMAGE = '/cat.svg';

function toAbsoluteUrl(url: string): string {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  const normalizedPath = url.startsWith('/') ? url : `/${url}`;
  return `${SITE_URL}${normalizedPath}`;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let meta = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

function upsertCanonical(href: string): void {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
}

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const canonicalUrl = toAbsoluteUrl(path);
    const imageUrl = toAbsoluteUrl(image);

    document.documentElement.lang = 'es';
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta(
      'name',
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    );

    upsertCanonical(canonicalUrl);

    upsertMeta('property', 'og:locale', 'es_CL');
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:site_name', 'Nicole Etologa');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', imageUrl);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);

    const previousScript = document.getElementById('seo-jsonld');
    if (previousScript) {
      previousScript.remove();
    }

    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'seo-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [description, image, jsonLd, noindex, path, title, type]);

  return null;
}
