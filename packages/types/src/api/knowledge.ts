export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  name: string;
  price: number;
  description: string;
}

export interface Promo {
  title: string;
  description: string;
  valid_until: string;
}

export interface KnowledgeBase {
  merchant_id: string;
  business_profile: string;
  products: Product[];
  faqs: FAQ[];
  promos: Promo[];
}
