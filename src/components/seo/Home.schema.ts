import { faqs } from '../../data/faqs';
import { SITE_URL, withSiteUrl } from './constants';

export const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            name: 'Nicole Etologa',
            url: `${SITE_URL}/`,
            logo: withSiteUrl('/cat.svg'),
            sameAs: [
                'https://instagram.com/nicole.etologa',
                'https://tiktok.com/@nicole.etologa',
            ],
        },
        {
            '@type': 'Person',
            name: 'Nicole Saavedra',
            jobTitle: 'Etologa Felina',
            url: `${SITE_URL}/`,
            worksFor: {
                '@type': 'Organization',
                name: 'Nicole Etologa',
            },
        },
        {
            '@type': 'WebSite',
            name: 'Nicole Etologa',
            url: `${SITE_URL}/`,
            inLanguage: 'es',
        },
        {
            '@type': 'ProfessionalService',
            name: 'Asesorias de comportamiento felino',
            provider: {
                '@type': 'Person',
                name: 'Nicole Saavedra',
            },
            areaServed: 'Latinoamerica, España',
            availableLanguage: ['es'],
            url: withSiteUrl('/asesorias'),
        },
        {
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        },
    ],
};
