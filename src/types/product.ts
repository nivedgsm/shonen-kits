export type Product = {
  id: string;
  title: string;
  slug: string;

  country: string;
  theme: string;

  price: number;
 compareAtPrice: number;

  image: string;

  emoji: string;
  gradient: string;
  accentText: string;

  shortDescription: string;
  description: string;

  sizes: string[];
  details: string[];
};