// ✅ Variant Type (Updated)
export interface Variant {
  size?: string;         // Added size
  color?: string;
  storage?: string;
  ram?: string;
  price: number;
  image?: string;
  [key: string]: any;    // Flexible for future variant fields
}

// ✅ Product Type (Updated)
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  subCategory: string;
  image: string;
  rating: number;

  // Common optional fields
  brand?: string;
  color?: string;
  stock?: number;
  discount?: number;
  delivery?: string;
  replacement?: string;
  model?: string;
  storage?: string;
  ram?: string;
  display?: string;
  battery?: string;
  processor?: string;
  graphics?: string;
  controllers?: string;
  quantity?: string;
  author?: string;
  language?: string;
  pages?: number;
  publisher?: string;
  pieces?: number;
  range?: string;
  size?: string;
  camera?: string;
  warranty?: string;
  sensor?: string;
  video?: string;
  hairType?: string; 
  bulbType?: string;
  weightSet?: string;
  players?: string;
  strings?: string;
  connectivity?: string;
  waterResistant?: string;
  ageGroup?: string;
  skinType?: string;
  
 
  flavor?: string;

  // Home Electronics
  capacity?: string;
  power?: string;
  energyRating?: string;
  inverter?: string;
  screenSize?: string;
  smartTV?: string;
  resolution?: string;

  // Fitness / Sports
  weight?: string;
  thickness?: string;
  motor?: string;
  maxWeight?: string;
  type?: string;

  // Fashion
  fabric?: string;
  sizes?: string[];

  // Extra fields (keep if needed)
   material?: string | string[]; 

  // Flipkart style
  features?: string[];
  specs?: {
    label: string;
    value: string;
  }[];

  // ✅ Variants (REQUIRED)
variants: Variant[];
}

// ✅ Cart Item (Updated)
// export interface CartItem {
//   id: string;
//   title: string;
//   price: number;
//   image: string;
//   quantity: number;

//   selectedSize?: string;
//   selectedColor?: string;
// }

// ✅ Cart Item (Universal Variant)
export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  selectedOptions: {
    [key: string]: string;
  };
}











































































































































