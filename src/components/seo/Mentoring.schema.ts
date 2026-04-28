import { mentorings } from '../../data/mentorings';
import { withSiteUrl } from './constants';

export const mentoringJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Asesoria de comportamiento felino online',
  provider: {
    '@type': 'Person',
    name: 'Nicole Saavedra',
  },
  areaServed: 'Latinoamerica',
  availableLanguage: ['es'],
  url: withSiteUrl('/asesorias'),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Planes de asesoria',
    itemListElement: mentorings.map((mentoring) => ({
      '@type': 'Offer',
      name: mentoring.title,
      description: mentoring.description || 'Asesoria personalizada de comportamiento felino.',
      url: withSiteUrl('/asesorias'),
      priceCurrency: 'USD',
    })),
  },
};
