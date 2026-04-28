import { workshops } from '../../data/workshops';
import { withSiteUrl } from './constants';

export const workshopsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Talleres de comportamiento felino',
  url: withSiteUrl('/talleres'),
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: workshops.map((workshop, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: workshop.title,
        description: workshop.description,
        url: withSiteUrl('/talleres'),
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: workshop.price,
          availability: 'https://schema.org/InStock',
          url: workshop.link,
        },
      },
    })),
  },
};
