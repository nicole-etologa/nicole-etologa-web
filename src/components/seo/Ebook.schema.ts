import { Ebook } from '../../data/ebooks';
import { withSiteUrl } from './constants';

export const ebookJsonLd = (ebook: Ebook) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: ebook.title,
  description: ebook.description,
  category: 'Guia digital de comportamiento felino',
  image: withSiteUrl('/cat.svg'),
  brand: {
    '@type': 'Brand',
    name: 'Nicole Etologa',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: ebook.price,
    availability: 'https://schema.org/InStock',
    url: withSiteUrl(`/ebooks/${ebook.id}`),
  },
});
