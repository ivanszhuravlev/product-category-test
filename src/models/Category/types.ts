export type Category = {
  id: string;
  name: string;
  image: string;
  subCategories: SubCategory[];
};

export type SubCategory = {
  id: string;
  name: string;
  productIds: number[];
};
