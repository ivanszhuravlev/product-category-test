import {Product} from './types';

export const productsMock: Mock = {
  'shampo--o': [
    {
      id: 1,
      name: 'Kids, Curl Defining, Shampoo',
      image: 'https://s3.images-iherb.com/jnj/jnj18385/v/0.jpg',
      brand: {
        name: "Johnson's Baby",
      },
      Price: 4.31,
    },
    {
      id: 2,
      name: 'Thicken & Restore Biotin + Hyaluronic Acid Shampoo',
      image: 'https://s3.images-iherb.com/jas/jas07005/v/23.jpg',
      brand: {
        name: 'Jason Natural',
      },
      Price: 7.51,
    },
    {
      id: 3,
      name: 'Pomegranate Mint Balancing Shampoo',
      image: 'https://s3.images-iherb.com/mbn/mbn01832/v/2.jpg',
      brand: {
        name: 'Mild By Nature',
      },
      Price: 7.0,
    },
    {
      id: 4,
      name: 'The Anti-Residue Shampoo, All Hair Types',
      image: 'https://s3.images-iherb.com/ngn/ngn01640/v/1.jpg',
      brand: {
        name: 'Neutrogena',
      },
      Price: 12.14,
    },
    {
      id: 5,
      name: 'Thicken & Restore Biotin + Hyaluronic Acid Shampoo',
      image: 'https://s3.images-iherb.com/jas/jas07005/v/23.jpg',
      brand: {
        name: 'Jason Natural',
      },
      Price: 7.51,
    },
  ],
  'hand-wash': [
    {
      id: 6,
      name: 'Foaming Hand Wash, Orange Blossom Honey',
      image: 'https://s3.images-iherb.com/sof/sof20183/v/12.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      id: 7,
      name: 'Foaming Hand Wash, Refill, Lavender - Chamomile',
      image: 'https://s3.images-iherb.com/dee/dee10100/v/8.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      id: 8,
      name: 'Argan Oil Hand Wash, Lilac Blossom',
      image: 'https://s3.images-iherb.com/dee/dee10059/v/10.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
  ],
  'shower-gel': [
    {
      id: 9,
      name: 'Gel 1',
      image: 'https://s3.images-iherb.com/pfh/pfh72772/v/9.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      id: 10,
      name: 'Gel 2',
      image: 'https://s3.images-iherb.com/ava/ava35196/v/3.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      id: 11,
      name: 'Gel 3',
      image: 'https://s3.images-iherb.com/pfh/pfh72712/v/3.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      id: 12,
      name: 'Gel 4',
      image: 'https://s3.images-iherb.com/pfh/pfh72732/v/9.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      id: 13,
      name: 'Gel 5',
      image: 'https://s3.images-iherb.com/mbn/mbn00249/v/20.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      id: 14,
      name: 'Gel 6',
      image: 'https://s3.images-iherb.com/adn/adn02025/v/6.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      id: 15,
      name: 'Gel 7',
      image: 'https://s3.images-iherb.com/pfh/pfh72772/v/9.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      id: 16,
      name: 'Gel 8',
      image: 'https://s3.images-iherb.com/adn/adn02025/v/6.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
  ],
  'bathroom-accessories': [],
};

type Mock = {
  [key: string]: Product[];
};
