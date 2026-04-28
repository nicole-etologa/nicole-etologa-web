import { ebooks } from '../../data/ebooks';
import { withSiteUrl } from './constants';

export const ebooksJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Biblioteca digital de guias felinas',
  url: withSiteUrl('/ebooks'),
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: ebooks.map((ebook, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: ebook.title,
        description: ebook.description,
        url: withSiteUrl(`/ebooks/${ebook.id}`),
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: ebook.price,
          availability: 'https://schema.org/InStock',
          url: withSiteUrl(`/ebooks/${ebook.id}`),
        },
      },
    })),
  },
};
