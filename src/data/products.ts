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

export const products: Product[] = [
  {
    id: "sk-india-blue-striker",
    title: "India Blue Striker Jersey",
    slug: "india-blue-striker-jersey",
    country: "India",
    theme: "Striker Energy",
    price: 1499,
    compareAtPrice: 1999,
    image: "/products/shonen-kits-india-blue-striker.png",
    emoji: "🇮🇳",
    gradient: "from-blue-700 via-blue-900 to-slate-950",
    accentText: "text-blue-300",
    shortDescription:
      "A bold blue football jersey inspired by Indian matchday energy and anime-style striker intensity.",
    description:
      "The India Blue Striker Jersey is designed for fans who want to carry national team energy with a sharp anime-inspired edge. Built for casual wear, matchday viewing, football sessions, and streetwear styling.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      "Premium lightweight polyester feel",
      "Anime-inspired front graphic styling",
      "Comfortable regular athletic fit",
      "Suitable for casual wear and matchday use",
      "Designed and shipped from India"
    ]
  },
  {
    id: "sk-japan-samurai-spirit",
    title: "Japan Samurai Spirit Jersey",
    slug: "japan-samurai-spirit-jersey",
    country: "Japan",
    theme: "Samurai Spirit",
    price: 1599,
    compareAtPrice: 2099,
    image: "/products/shonen-kits-japan-samurai-spirit.png",
    emoji: "🇯🇵",
    gradient: "from-red-600 via-red-950 to-slate-950",
    accentText: "text-red-300",
    shortDescription:
      "A red-and-black jersey inspired by Japanese football culture, discipline, and shonen battle spirit.",
    description:
      "The Japan Samurai Spirit Jersey blends football fanwear with anime-inspired design language. It is made for fans who love clean kits, bold contrast, and disciplined main-character energy.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      "Smooth sportswear-inspired fabric",
      "Bold red and black visual direction",
      "Anime-inspired samurai energy",
      "Comfortable for everyday styling",
      "Designed for anime and football fans"
    ]
  },
  {
    id: "sk-brazil-ace-forward",
    title: "Brazil Ace Forward Jersey",
    slug: "brazil-ace-forward-jersey",
    country: "Brazil",
    theme: "Ace Forward",
    price: 1599,
    compareAtPrice: 2099,
    image: "/products/shonen-kits-brazil-ace-forward.png",
    emoji: "🇧🇷",
    gradient: "from-yellow-400 via-green-700 to-slate-950",
    accentText: "text-yellow-200",
    shortDescription:
      "A bright attacking jersey inspired by Brazilian flair, street football rhythm, and anime confidence.",
    description:
      "The Brazil Ace Forward Jersey is made for fans who love flair, speed, skill, and expressive football. Its anime-inspired direction gives it a bold fanwear identity beyond a normal jersey.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      "Bright Brazil-inspired visual style",
      "Street football and anime-inspired feel",
      "Lightweight fanwear construction",
      "Great for watch parties and casual fits",
      "Regular comfortable fit"
    ]
  },
  {
    id: "sk-germany-titan-press",
    title: "Germany Titan Press Jersey",
    slug: "germany-titan-press-jersey",
    country: "Germany",
    theme: "Titan Press",
    price: 1599,
    compareAtPrice: 2099,
    image: "/products/shonen-kits-germany-titan-press.png",
    emoji: "🇩🇪",
    gradient: "from-white via-zinc-500 to-slate-950",
    accentText: "text-zinc-200",
    shortDescription:
      "A clean black-white-gold jersey inspired by German pressing, power, and anime titan energy.",
    description:
      "The Germany Titan Press Jersey brings a sharp monochrome football look with anime-inspired intensity. It is designed for fans who prefer clean kits with strong presence.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      "Black, white, and gold inspired direction",
      "Clean premium fanwear look",
      "Comfortable regular fit",
      "Made for football fans and anime fans",
      "Easy to style with casual outfits"
    ]
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}