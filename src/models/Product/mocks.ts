import {Product} from './types';

export const productsMock: Mock = {
  'shampo--o': [
    {
      name: 'Kids, Curl Defining, Shampoo',
      image: 'https://s3.images-iherb.com/jnj/jnj18385/v/0.jpg',
      brand: {
        name: "Johnson's Baby",
      },
      Price: 4.31,
    },
    {
      name: 'Thicken & Restore Biotin + Hyaluronic Acid Shampoo',
      image: 'https://s3.images-iherb.com/jas/jas07005/v/23.jpg',
      brand: {
        name: 'Jason Natural',
      },
      Price: 7.51,
    },
    {
      name: 'Pomegranate Mint Balancing Shampoo',
      image: 'https://s3.images-iherb.com/mbn/mbn01832/v/2.jpg',
      brand: {
        name: 'Mild By Nature',
      },
      Price: 7.0,
    },
    {
      name: 'The Anti-Residue Shampoo, All Hair Types',
      image: 'https://s3.images-iherb.com/ngn/ngn01640/v/1.jpg',
      brand: {
        name: 'Neutrogena',
      },
      Price: 12.14,
    },
    {
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
      name: 'Foaming Hand Wash, Orange Blossom Honey',
      image: 'https://s3.images-iherb.com/sof/sof20183/v/12.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      name: 'Foaming Hand Wash, Refill, Lavender - Chamomile',
      image: 'https://s3.images-iherb.com/dee/dee10100/v/8.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
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
      name: 'Gel 1',
      image: 'https://s3.images-iherb.com/pfh/pfh72772/v/9.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      name: 'Gel 2',
      image: 'https://s3.images-iherb.com/ava/ava35196/v/3.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      name: 'Gel 3',
      image: 'https://s3.images-iherb.com/pfh/pfh72712/v/3.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      name: 'Gel 4',
      image: 'https://s3.images-iherb.com/pfh/pfh72732/v/9.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      name: 'Gel 5',
      image: 'https://s3.images-iherb.com/mbn/mbn00249/v/20.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      name: 'Gel 6',
      image: 'https://s3.images-iherb.com/adn/adn02025/v/6.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
      name: 'Gel 7',
      image: 'https://s3.images-iherb.com/pfh/pfh72772/v/9.jpg',
      brand: {
        name: 'South of France',
      },
      Price: 3.86,
    },
    {
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
