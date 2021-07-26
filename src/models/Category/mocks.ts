import {Category} from './types';

export const categoriesMock: Mock = {
  'personal-care': {
    id: 'personal-care',
    name: 'Personal Care',
    image:
      'https://www.newhope.com/sites/newhope360.com/files/styles/article_featured_retina/public/natural-personal-care-ew20.jpg?itok=Oo-4RnUr',
    subCategories: [
      {
        name: 'Shampoo',
        id: 'shampo--o',
        // Frankly speaking I didn't get, why I need it :)
        productIds: [123123, 123123, 123123],
      },
      {
        name: 'Handwash',
        id: 'hand-wash',
        productIds: [123123, 123123, 123123],
      },
      {
        name: 'Shower gel',
        id: 'shower-gel',
        productIds: [123123, 123123, 123123],
      },
      {
        name: 'Bathroom Accessories',
        id: 'bathroom-accessories',
        productIds: [123123, 123123, 123123],
      },
    ],
  },
};

type Mock = {
  [key: string]: Category;
};
