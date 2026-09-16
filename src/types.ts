export interface KitOption {
  id: string;
  bottles: number;
  months: number;
  title: string;
  subtitle: string;
  originalPrice: number;
  promoPrice: number;
  installments: number;
  installmentValue: number;
  discountPercent: number;
  badge?: string;
  isPopular?: boolean;
  freeShipping: boolean;
  gifts?: string[];
  savings: number;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  timeUsing: string;
  quote: string;
  headline: string;
  avatar: string;
  rating: number;
  highlightTag: string;
}

export interface Ingredient {
  id: string;
  name: string;
  scientificName: string;
  role: string;
  description: string;
  benefit: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
