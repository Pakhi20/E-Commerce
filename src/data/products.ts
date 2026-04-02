import { Product } from "@/types/product"

export const products: Product[] = [

  
  
  {
  id: "1",
  title: "Women's Formal Dress",
  description: "Elegant and sophisticated formal dress perfect for office and formal events.",
  price: 2999,
  category: "fashion",
  subCategory: "Women",
  image: "https://plus.unsplash.com/premium_photo-1661766556012-15d4115ef1aa",
  rating: 4.5,

  brand: "Zara",
  fabric: "Polyester Blend",
  color: "Black / Navy Blue / Maroon",
  sizes: ["XS", "S", "M", "L", "XL"],
  stock: 20,
  discount: 15,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    { color: "Black", price: 2999, image: "https://images.unsplash.com/photo-1747707499012-684390664060?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJsYWNrJTIwZm9ybWFsJTIwZHJlc3MlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D" },
    { color: "Navy Blue", price: 2899, image: "https://media.istockphoto.com/id/1418423712/photo/young-glamorous-female-fashion-model-in-navy-blue-smart-casual-dress.webp?a=1&b=1&s=612x612&w=0&k=20&c=Im2oXJPfCl1fLzEmoBnqFF4azh0agfJxVd0XeeNyrTE=" },
    { color: "Maroon", price: 3099, image: "https://images.unsplash.com/photo-1671571943786-f1cea5dbabc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hcm9vbiUyMGRyZXNzJTIwd29tZW58ZW58MHx8MHx8fDA%3D" }
  ],

  features: [
    "Elegant slim fit design",
    "Wrinkle-resistant fabric",
    "Comfortable for long office wear",
    "Hidden back zipper",
    "Perfect for office & formal events"
  ],

  specs: [
    { label: "Fabric", value: "Polyester Blend" },
    { label: "Pattern", value: "Solid" },
    { label: "Fit", value: "Slim Fit" },
    { label: "Sleeve", value: "Half Sleeve" },
    { label: "Length", value: "Knee Length" },
    { label: "Occasion", value: "Formal / Office Wear" }
  ]
},
{
  id: "2",
  title: "Men's Casual Shirt",
  description: "Comfortable and stylish casual shirt.",
  price: 1999,
  category: "fashion",
  subCategory: "Men",
  image: "https://media.istockphoto.com/id/2148419703/photo/portrait-of-a-young-indian-man-in-glasses-and-a-white-shirt-standing-near-an-office-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ov-4immlwIJdFndC0NYpPwhIHL85itRXnbWdwnIKe8k=",
  rating: 4.2,

  brand: "Raymond",
  fabric: "100% Cotton",
  color: "Green / Blue / White",
  sizes: ["S", "M", "L", "XL"],
  stock: 20,
  discount: 15,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    { color: "Green", price: 1999, image: "https://media.istockphoto.com/id/1396138223/photo/portrait-of-a-handsome-man-in-a-shirt-standing-in-front-of-a-white-background.jpg?s=1024x1024&w=is&k=20&c=skRsc7bk1FCIWnAeHTU-ued-_M5Xw76DhG11BHNYE5A=" },
    { color: "Blue", price: 1899, image: "https://media.istockphoto.com/id/1195166190/photo/male-model-in-a-blue-suit-casual-outfit.jpg?s=1024x1024&w=is&k=20&c=xtOd7zCWJbmWJKk4HWt7GXXild2krWmS8QAvzD3AU3g=" },
    { color: "White", price: 1799, image: "https://media.istockphoto.com/id/2148419703/photo/portrait-of-a-young-indian-man-in-glasses-and-a-white-shirt-standing-near-an-office-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ov-4immlwIJdFndC0NYpPwhIHL85itRXnbWdwnIKe8k=" }
  ],

  features: [
    "Breathable cotton fabric",
    "Regular fit for daily comfort",
    "Button-down front",
    "Perfect for casual and office wear",
    "All-season comfortable shirt"
  ],

  specs: [
    { label: "Fabric", value: "Cotton" },
    { label: "Pattern", value: "Solid" },
    { label: "Fit", value: "Regular Fit" },
    { label: "Sleeve", value: "Full Sleeve" },
    { label: "Collar", value: "Spread Collar" },
    { label: "Occasion", value: "Casual / Office" }
  ]
},
{
  id: "3",
  title: "Girl's T-Shirt",
  description: "Fun and colorful t-shirt for kids.",
  price: 999,
  category: "fashion",
  subCategory: "Children",
  image: "https://media.istockphoto.com/id/1143044466/photo/portrait-of-a-young-girl.webp?a=1&b=1&s=612x612&w=0&k=20&c=LIjS37du0HBBmlQTeINxm-ivdeUQmbow29Cc7cOwCRg=",
  rating: 4.0,

  brand: "BabyHug",
  fabric: "Cotton",
  color: "Pink / Yellow / Sky Blue",
  sizes: ["0-1yr", "1-3yr", "3-5yr", "5-8yr"],
  stock: 20,
  discount: 15,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    { color: "Pink", price: 999, image: "https://media.istockphoto.com/id/1143044466/photo/portrait-of-a-young-girl.webp?a=1&b=1&s=612x612&w=0&k=20&c=LIjS37du0HBBmlQTeINxm-ivdeUQmbow29Cc7cOwCRg=" },
    { color: "Yellow", price: 949, image: "https://images.unsplash.com/photo-1700751615484-6b4427a1dacd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwY2hpbGRyZW4lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D" },
    { color: "Sky Blue", price: 979, image: "https://images.unsplash.com/photo-1763089402397-3862c71b03f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGRyZW4lMjBza3klMjBibHVlJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D" }
  ],

  features: [
    "Soft cotton fabric safe for kids",
    "Stretchable and comfortable",
    "Colorful printed design",
    "Skin-friendly material",
    "Perfect for daily wear"
  ],

  specs: [
    { label: "Fabric", value: "Cotton" },
    { label: "Fit", value: "Comfort Fit" },
    { label: "Sleeve", value: "Half Sleeve" },
    { label: "Neck", value: "Round Neck" },
    { label: "Pattern", value: "Printed" },
    { label: "Occasion", value: "Daily Wear" }
  ]
},
{
  id: "4",
  title: "Nike Air Max",
  description: "Comfortable and stylish running shoes.",
  price: 7999,
  category: "fashion",
  subCategory: "Men",
  image: "https://images.unsplash.com/photo-1610870372593-a8647b04451f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHJlZCUyMHNob2V8ZW58MHx8MHx8fDA%3D",
  rating: 4.5,

  brand: "Nike",
  fabric: "Mesh & Synthetic",
  color: "Red / Black / White",
  sizes: ["6 UK", "7 UK", "8 UK", "9 UK", "10 UK"],
  stock: 20,
  discount: 15,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    { color: "Red", price: 7999, image: "https://images.unsplash.com/photo-1610870372593-a8647b04451f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHJlZCUyMHNob2V8ZW58MHx8MHx8fDA%3D" },
    { color: "Black", price: 7899, image: "https://images.unsplash.com/photo-1593081891731-fda0877988da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZSUyMGJsYWNrc2hvZXxlbnwwfHwwfHx8MA%3D%3D" },
    { color: "White", price: 8099, image: "https://images.unsplash.com/photo-1580902215262-9b941bc6eab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHdoaXRlJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D" }
  ],

  features: [
    "Air Max cushioning for comfort",
    "Breathable mesh upper",
    "Durable rubber outsole",
    "Lightweight running shoes",
    "Suitable for running and casual wear"
  ],

  specs: [
    { label: "Upper", value: "Mesh & Synthetic" },
    { label: "Midsole", value: "Air Max Cushioning" },
    { label: "Outsole", value: "Rubber" },
    { label: "Weight", value: "300g per shoe" },
    { label: "Use", value: "Running / Casual" }
  ]
}
,
  {
    id: "5",
    title: "Puma Running Shoes",
    description: "Lightweight and comfortable running shoes designed for optimal performance, breathability, and support during training or casual wear.",
    price: 6999,
   category: "fashion",
   subCategory: "Men",
    image: "https://images.unsplash.com/photo-1619253341026-74c609e6ce50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVtYSUyMGJsYWNrJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.0,

    brand: "Puma",
    fabric: "Engineered mesh upper",
    color: "White / Red / Black",
    sizes: ["7 UK", "8 UK", "9 UK", "10 UK", "11 UK", "12 UK"],
    stock: 25,
    discount: 10,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",
    // 🔥 NEW VARIANTS SYSTEM
  variants: [
    {
      color: "Black",
      price: 6999,
      image: "https://images.unsplash.com/photo-1619253341026-74c609e6ce50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVtYSUyMGJsYWNrJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      color: "Red",
      price: 6899,
      image: "https://images.unsplash.com/photo-1626298038175-e9f383124e1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVtYSUyMHJlZCUyMHNob2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      color: "White",
      price: 7099,
      image: "https://images.unsplash.com/photo-1608230616491-5d696aa9fe52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHVtYSUyMHdoaXRlJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ],

    features: [
      "Lightweight EVA midsole for cushioning",
      "Breathable mesh upper for ventilation",
      "Rubber outsole for enhanced grip",
      "Lace-up closure for secure fit",
      "Flexible design for natural movement"
    ],

    specs: [
      { label: "Weight", value: "290g per shoe" },
      { label: "Heel-to-Toe Drop", value: "8mm" },
      { label: "Outsole", value: "Durable rubber" },
      { label: "Midsole", value: "EVA foam" },
      { label: "Use", value: "Running / Casual Wear" }
    ]
  },
  
  {
    id: "6",
    title: "Reebok Classic",
    description: "Timeless and stylish sneakers featuring a retro design, premium leather upper, and superior cushioning for all-day comfort and everyday street style.",
    price: 4999,
    category: "fashion",
    subCategory: "Men",
    image: "https://images.unsplash.com/photo-1582231640349-6ea6881fabeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVlYm9rJTIwQ2xhc3NpYyUyMHdoaXRlJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.3,

    brand: "Reebok",
    fabric: "Leather upper with synthetic lining",
    color: "White / Grey / Black",
    sizes: ["7 UK", "8 UK", "9 UK", "10 UK", "11 UK", "12 UK"],
    stock: 30,
    discount: 10,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "White",
        price: 4999,
        image: "https://images.unsplash.com/photo-1582231640349-6ea6881fabeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVlYm9rJTIwQ2xhc3NpYyUyMHdoaXRlJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        color: "Black",
        price: 4899,
        image: "https://images.unsplash.com/photo-1673557475656-d580caccefa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmVlYm9rJTIwQ2xhc3NpYyUyMGJsYWNrJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        color: "Grey",
        price: 4799,
        image: "https://images.unsplash.com/photo-1704949841973-9db544ac35ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFJlZWJvayUyMENsYXNzaWMlMjBncmV5JTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],

    features: [
      "Premium leather upper for durability",
      "Cushioned EVA midsole for comfort",
      "High-abrasion rubber outsole",
      "Classic lace-up design",
      "Iconic retro streetwear look"
    ],

    specs: [
      { label: "Weight", value: "320g per shoe" },
      { label: "Outsole", value: "Rubber" },
      { label: "Midsole", value: "EVA foam" },
      { label: "Closure", value: "Lace-up" },
      { label: "Use", value: "Casual / Everyday Wear" }
    ]
  },

  {
    id: "7",
    title: "Men's Casual Shirt",
    description: "Slim fit cotton shirt designed for modern style and comfort. Ideal for casual outings, office wear, or semi-formal occasions.",
    price: 1499,
    category: "fashion",
    subCategory: "Men",
    image: "https://plus.unsplash.com/premium_photo-1727942411342-b16f0d576bfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVuJ3MlMjBDYXN1YWwlMjBTaGlydCUyMHNreSUyMGJsdWV8ZW58MHx8MHx8fDA%3D",
    rating: 4.2,

    brand: "Generic",
    fabric: "100% Cotton",
    color: "Sky Blue / White / Navy",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 50,
    discount: 5,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Sky Blue",
        price: 1499,
        image: "https://plus.unsplash.com/premium_photo-1727942411342-b16f0d576bfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVuJ3MlMjBDYXN1YWwlMjBTaGlydCUyMHNreSUyMGJsdWV8ZW58MHx8MHx8fDA%3D"
      },
      {
        color: "White",
        price: 1399,
        image: "https://images.unsplash.com/photo-1669791777188-301b370d05f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1lbidzJTIwQ2FzdWFsJTIwU2hpcnQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        color: "Navy",
        price: 1499,
        image: "https://images.unsplash.com/photo-1769032214032-a91aa5bbf0d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWVuJ3MlMjBDYXN1YWwlMjBTaGlydCUyMG5hdnl8ZW58MHx8MHx8fDA%3D"
      }
    ],

    features: [
      "Breathable cotton fabric",
      "Slim fit modern design",
      "Button-down collar",
      "Wrinkle-resistant finish",
      "Suitable for office & casual wear"
    ],

    specs: [
      { label: "Fabric", value: "Cotton" },
      { label: "Fit", value: "Slim" },
      { label: "Sleeve Type", value: "Full Sleeve" },
      { label: "Closure", value: "Buttons" },
      { label: "Use", value: "Casual / Semi-formal" }
    ]
  },

  {
    id: "8",
    title: "Women's Casual Dress",
    description: "Stylish and comfortable casual dress crafted from soft breathable fabric, perfect for daily wear, outings, or relaxed evenings.",
    price: 1999,
    category: "fashion",
    subCategory: "Women",
    image: "https://images.unsplash.com/photo-1768289223084-1b57698e9f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V29tZW4ncyUyMENhc3VhbCUyMERyZXNzJTIwcmVkfGVufDB8fDB8fHww",
    rating: 4.0,

    brand: "Generic",
    fabric: "Cotton blend",
    color: "Red / Black / Navy",
    sizes: ["S", "M", "L", "XL"],
    stock: 40,
    discount: 8,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Red",
        price: 1999,
        image: "https://images.unsplash.com/photo-1768289223084-1b57698e9f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V29tZW4ncyUyMENhc3VhbCUyMERyZXNzJTIwcmVkfGVufDB8fDB8fHww"
      },
      {
        color: "Black",
        price: 1899,
        image: "https://images.unsplash.com/photo-1647370929006-17064fcdcad2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V29tZW4ncyUyMENhc3VhbCUyMERyZXNzJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D"
      },
      {
        color: "Navy",
        price: 1999,
        image: "https://media.istockphoto.com/id/1303006702/photo/young-confident.webp?a=1&b=1&s=612x612&w=0&k=20&c=wTk8WtcjUTvZdj5IzrQmV8mTbuZBEkdsdFOWCjEjG84="
      }
    ],

    features: [
      "Soft breathable fabric",
      "Elegant casual styling",
      "Comfortable knee-length fit",
      "Lightweight and airy",
      "Perfect for daily wear"
    ],

    specs: [
      { label: "Fabric", value: "Cotton blend" },
      { label: "Fit", value: "Regular" },
      { label: "Length", value: "Knee-length" },
      { label: "Sleeve Type", value: "Short Sleeve" },
      { label: "Use", value: "Casual / Everyday Wear" }
    ]
  },

  {
    id: "9",
    title: "Boy's T-Shirt",
    description: "Fun and vibrant t-shirt designed for kids with soft cotton fabric, ensuring comfort and durability for active play.",
    price: 999,
    category: "fashion",
    subCategory: "Children",
    image: "https://images.unsplash.com/photo-1772510750155-2a4c79d296c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJveSUyMGNoaWxkJTIwZHJlc3MlMjB5ZWxsb3d8ZW58MHx8MHx8fDA%3D",
    rating: 4.0,

    brand: "Generic",
    fabric: "100% Cotton",
    color: "Yellow / Blue / Green",
    sizes: ["2-3 Years", "4-5 Years", "6-7 Years", "8-9 Years"],
    stock: 60,
    discount: 5,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Yellow",
        price: 999,
        image: "https://images.unsplash.com/photo-1772510750155-2a4c79d296c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJveSUyMGNoaWxkJTIwZHJlc3MlMjB5ZWxsb3d8ZW58MHx8MHx8fDA%3D"
      },
      {
        color: "Blue",
        price: 949,
        image: "https://images.unsplash.com/photo-1758782213286-26f295563f43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95JTIwY2hpbGQlMjBkcmVzcyUyMGJsdWV8ZW58MHx8MHx8fDA%3D"
      },
      {
        color: "Green",
        price: 999,
        image: "https://images.unsplash.com/photo-1727924571257-4235cd4db29e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJveSUyMGNoaWxkJTIwZHJlc3MlMjBncmVlbnxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],

    features: [
      "Soft skin-friendly cotton",
      "Bright playful colors",
      "Comfortable regular fit",
      "Easy to wash",
      "Durable for daily use"
    ],

    specs: [
      { label: "Fabric", value: "Cotton" },
      { label: "Fit", value: "Regular" },
      { label: "Sleeve Type", value: "Short Sleeve" },
      { label: "Closure", value: "Pull-on" },
      { label: "Use", value: "Play / Casual Wear" }
    ]
  },

  {
    id: "10",
    title: "Men's Formal Suit",
    description: "Premium formal suit crafted with precision tailoring and high-quality fabric, perfect for weddings, business meetings, and formal occasions.",
    price: 4999,
    category: "fashion",
    subCategory: "Men",
    image: "https://images.unsplash.com/photo-1619533394727-57d522857f89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVuJ3MlMjBGb3JtYWwlMjBTdWl0JTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
    rating: 4.5,

    brand: "Generic",
    fabric: "Wool blend",
    color: "Black / Navy / Charcoal",
    sizes: ["38", "40", "42", "44", "46"],
    stock: 20,
    discount: 12,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 4999,
        image: "https://images.unsplash.com/photo-1619533394727-57d522857f89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVuJ3MlMjBGb3JtYWwlMjBTdWl0JTIwYmxhY2t8ZW58MHx8MHx8fDA%3D"
      },
      {
        color: "Navy",
        price: 4899,
        image: "https://media.istockphoto.com/id/1032564422/photo/your-style-is-your-brand.webp?a=1&b=1&s=612x612&w=0&k=20&c=o1PC31Dit91bpyZG66_5kUx9_8vkTwaviF9MjFQ3Nco="
      },
      {
        color: "Charcoal",
        price: 4999,
        image: "https://media.istockphoto.com/id/486810104/photo/black-suit-business-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=_C8Ji8_ObGq3F99mhPE26_HUQUGWPY8RDTObUUMcR1w="
      }
    ],

    features: [
      "Premium wool-blend fabric",
      "Slim tailored fit",
      "Structured blazer design",
      "Includes matching trousers",
      "Perfect for formal events"
    ],

    specs: [
      { label: "Fabric", value: "Wool blend" },
      { label: "Fit", value: "Slim" },
      { label: "Jacket Type", value: "Single-breasted" },
      { label: "Occasion", value: "Formal / Business" },
      { label: "Set Includes", value: "Blazer + Trouser" }
    ]
  },
 

  {
    id: "12",
    title: "Laptop",
    description: "High-performance laptop designed for productivity, programming, and light gaming with fast SSD storage and smooth multitasking.",
    price: 49999,
    category: "electronics",
    subCategory: "Laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
    rating: 4.7,

    brand: "HP / Dell / Lenovo",
    processor: "Intel i5 12th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    display: "15.6 inch Full HD",
    graphics: "Intel Integrated Graphics",
    stock: 20,
    discount: 12,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Silver",
        price: 49999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Grey",
        price: 48999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Intel i5 12th Gen processor",
      "16GB RAM for heavy multitasking",
      "512GB SSD for fast performance",
      "Full HD anti-glare display",
      "Backlit keyboard for night use"
    ],

    specs: [
      { label: "Processor", value: "Intel i5 12th Gen" },
      { label: "RAM", value: "16GB" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "15.6 inch FHD" },
      { label: "Graphics", value: "Integrated Intel UHD" }
    ]
  },

  {
    id: "13",
    title: "Wireless Earbuds",
    description: "Premium wireless earbuds with immersive sound, active noise cancellation, and long battery life for music and calls on the go.",
    price: 9999,
    category: "electronics",
    subCategory: "Audio",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=600&auto=format&fit=crop&q=60",
    rating: 4.6,

    brand: "Boat / Realme / Noise",
    battery: "24 Hours Backup",
    connectivity: "Bluetooth 5.2",
    color: "Black / White",
    stock: 40,
    discount: 18,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 9999,
        image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "White",
        price: 9799,
        image: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Active Noise Cancellation (ANC)",
      "Deep bass stereo sound",
      "Touch controls",
      "IPX4 water resistance",
      "Fast charging support"
    ],

    specs: [
      { label: "Battery", value: "24 Hours" },
      { label: "Bluetooth", value: "5.2" },
      { label: "Water Resistance", value: "IPX4" },
      { label: "Noise Cancellation", value: "Active ANC" },
      { label: "Warranty", value: "1 Year" }
    ]
  },

  {
    id: "14",
    title: "Smartwatch",
    description: "Smart fitness watch with health tracking, smart notifications, and stylish design, perfect for everyday wear and workouts.",
    price: 19999,
    category: "electronics",
    subCategory: "Wearables",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,

    brand: "Noise / Boat / Firebolt",
    display: "1.8 inch HD Display",
    battery: "7 Days Backup",
    connectivity: "Bluetooth",
    waterResistant: "Yes",
    stock: 35,
    discount: 15,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 19999,
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 19499,
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Heart rate monitoring",
      "Step & calorie tracking",
      "Sleep monitoring",
      "Call & app notifications",
      "Multiple sports modes"
    ],

    specs: [
      { label: "Display", value: "1.8 inch HD" },
      { label: "Battery", value: "Up to 7 Days" },
      { label: "Water Resistance", value: "Yes (IP Rated)" },
      { label: "Connectivity", value: "Bluetooth" },
      { label: "Warranty", value: "1 Year" }
    ]
  }
  ,
  {
    id: "15",
    title: "Sports Running Shoes",
    description: "High-performance running shoes built for speed, comfort, and durability. Designed with breathable materials and responsive cushioning for running, gym workouts, and daily sports activities.",
    price: 8999,
    category: "Sports",
    subCategory: "Running",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,

    brand: "Nike / Adidas / Puma",
    material: "Mesh & Synthetic",
    color: "Black / White / Blue / Red",
    sizes: ["6", "7", "8", "9", "10", "11"],
    stock: 35,
    discount: 15,
    delivery: "2-4 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 8999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "White",
        price: 8799,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 8899,
        image: "https://images.unsplash.com/photo-1528701800489-20be3c9b5f34?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Red",
        price: 8999,
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Breathable mesh upper",
      "Lightweight performance design",
      "Responsive cushioned sole",
      "Anti-slip rubber outsole",
      "Ideal for running, gym & training"
    ],

    specs: [
      { label: "Material", value: "Mesh & Synthetic" },
      { label: "Sole", value: "Rubber" },
      { label: "Closure", value: "Lace-up" },
      { label: "Fit", value: "Regular" },
      { label: "Use", value: "Running / Gym / Sports" }
    ]
  },

  {
    id: "16",
    title: "Basketball Sneakers",
    description: "High-performance basketball sneakers offering superior ankle support, grip, and shock absorption for intense matches on indoor and outdoor courts.",
    price: 7999,
    category: "Sports",
    subCategory: "Basketball",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&auto=format&fit=crop&q=60",
    rating: 4.3,

    brand: "Nike / Adidas / Under Armour",
    material: "Synthetic & Mesh",
    color: "Black / Red / White",
    sizes: ["7", "8", "9", "10", "11", "12"],
    stock: 25,
    discount: 10,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 7999,
        image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Red",
        price: 7799,
        image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "White",
        price: 7999,
        image: "https://images.unsplash.com/photo-1606813909028-3e1c2a74a2c2?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "High ankle support",
      "Shock-absorbing cushioning",
      "Durable synthetic upper",
      "Non-slip grip outsole",
      "Designed for court performance"
    ],

    specs: [
      { label: "Material", value: "Synthetic & Mesh" },
      { label: "Sole", value: "Rubber" },
      { label: "Ankle Type", value: "High-top" },
      { label: "Fit", value: "Regular" },
      { label: "Use", value: "Basketball" }
    ]
  },

  {
    id: "17",
    title: "Tennis Shoes",
    description: "Lightweight and flexible tennis shoes built for speed, agility, and stability during matches and training sessions.",
    price: 6999,
    category: "Sports",
    subCategory: "Tennis",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&auto=format&fit=crop&q=60",
    rating: 4.0,

    brand: "Puma / Adidas / Nike",
    material: "Mesh & Synthetic",
    color: "White / Blue / Green",
    sizes: ["6", "7", "8", "9", "10"],
    stock: 30,
    discount: 8,
    delivery: "2-4 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "White",
        price: 6999,
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 6799,
        image: "https://images.unsplash.com/photo-1584735175315-9d5df23be620?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Green",
        price: 6899,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Lightweight and flexible",
      "Breathable mesh upper",
      "Enhanced court grip",
      "Shock-absorbing sole",
      "Built for agility and speed"
    ],

    specs: [
      { label: "Material", value: "Mesh & Synthetic" },
      { label: "Sole", value: "Rubber" },
      { label: "Closure", value: "Lace-up" },
      { label: "Fit", value: "Regular" },
      { label: "Use", value: "Tennis" }
    ]
  },

  {
    id: "18",
    title: "Track Suits",
    description: "Comfortable and stylish track suits designed for workouts, sports, and casual wear with breathable and flexible fabric.",
    price: 2999,
    category: "fashion",
    subCategory: "Women",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&auto=format&fit=crop&q=60",
    rating: 4.2,

    brand: "Nike",
    fabric: "Polyester Blend",
    color: "Gray / Black / Pink",
    sizes: ["S", "M", "L", "XL"],
    stock: 30,
    discount: 10,
    delivery: "2-4 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Gray",
        price: 2999,
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Black",
        price: 2899,
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Pink",
        price: 2999,
        image: "https://images.unsplash.com/photo-1520975922203-bc9d5a5d3d77?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Breathable fabric",
      "Stretchable waistband",
      "Lightweight design",
      "Flexible movement",
      "Ideal for workouts & casual wear"
    ],

    specs: [
      { label: "Fabric", value: "Polyester Blend" },
      { label: "Fit", value: "Regular" },
      { label: "Waist", value: "Elastic" },
      { label: "Pockets", value: "Side Pockets" },
      { label: "Use", value: "Sports / Casual" }
    ]
  },

  {
    id: "19",
    title: "Yoga Pants",
    description: "Stretchable and comfortable yoga pants designed for flexibility, breathability, and all-day comfort during workouts or casual wear.",
    price: 1999,
    category: "fashion",
    subCategory: "Women",
    image: "https://images.unsplash.com/photo-1506629905607-d9d2e3a7d1d5?w=600&auto=format&fit=crop&q=60",
    rating: 4.2,

    brand: "Adidas",
    fabric: "Cotton Spandex",
    color: "Black / Grey / Navy",
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 25,
    discount: 12,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 1999,
        image: "https://images.unsplash.com/photo-1506629905607-d9d2e3a7d1d5?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Grey",
        price: 1899,
        image: "https://images.unsplash.com/photo-1558611848-73f7eb4001ab?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Navy",
        price: 1999,
        image: "https://images.unsplash.com/photo-1520975922284-9f3f7f1d0f59?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "High stretchability",
      "Moisture-wicking fabric",
      "Comfortable elastic waistband",
      "Body-hugging fit",
      "Perfect for yoga & gym"
    ],

    specs: [
      { label: "Fabric", value: "Cotton Spandex" },
      { label: "Fit", value: "Slim Fit" },
      { label: "Waist", value: "Elastic" },
      { label: "Length", value: "Full Length" },
      { label: "Use", value: "Fitness / Casual" }
    ]
  }
  ,
  
  {
    id: "20",
    title: "Sarees",
    description: "Elegant and traditional sarees crafted with premium fabric and intricate detailing, perfect for weddings, festivals, and special occasions.",
    price: 2999,
    category: "fashion",
    subCategory: "Women",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60",
    rating: 4.2,

    brand: "FabIndia",
    fabric: "Silk Blend",
    color: "Red / Green / Blue",
    sizes: ["Free Size"],
    stock: 40,
    discount: 15,
    delivery: "3-6 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Red",
        price: 2999,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Green",
        price: 2899,
        image: "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 3099,
        image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Elegant embroidery work",
      "Soft and lightweight fabric",
      "Traditional ethnic design",
      "Includes matching blouse piece",
      "Perfect for festive and wedding wear"
    ],

    specs: [
      { label: "Fabric", value: "Silk Blend" },
      { label: "Pattern", value: "Embroidered" },
      { label: "Occasion", value: "Festive / Wedding" },
      { label: "Length", value: "6.3 meters" },
      { label: "Blouse Included", value: "Yes" }
    ]
  },

  {
    id: "21",
    title: "Panjabi Suits",
    description: "Traditional and stylish Panjabi suits designed with elegant patterns and premium fabric, ideal for festivals, weddings, and cultural events.",
    price: 3999,
    category: "fashion",
    subCategory: "Men",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f4017c?w=600&auto=format&fit=crop&q=60",
    rating: 4.3,

    brand: "Manyavar",
    fabric: "Cotton Silk",
    color: "Beige / Maroon / White",
    sizes: ["M", "L", "XL", "XXL"],
    stock: 15,
    discount: 10,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Beige",
        price: 3999,
        image: "https://images.unsplash.com/photo-1593032465175-481ac7f4017c?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Maroon",
        price: 3899,
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "White",
        price: 3799,
        image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Premium cotton-silk fabric",
      "Elegant traditional styling",
      "Comfortable and breathable",
      "Perfect for festive occasions",
      "Fine stitching and finishing"
    ],

    specs: [
      { label: "Fabric", value: "Cotton Silk" },
      { label: "Fit", value: "Regular Fit" },
      { label: "Occasion", value: "Festive / Traditional" },
      { label: "Sleeve", value: "Full Sleeve" },
      { label: "Neck", value: "Mandarin Collar" }
    ]
  },


  {
    id: "23",
    title: "Laptop",
    description: "Powerful and reliable laptop built for work, study, coding, and entertainment with fast performance and sleek design.",
    price: 49999,
    category: "electronics",
    subCategory: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60",
    rating: 4.7,

    brand: "HP / Dell / Lenovo",
    processor: "Intel i5 12th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    display: "15.6 inch Full HD",
    graphics: "Intel UHD Graphics",
    stock: 20,
    discount: 12,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Silver",
        price: 49999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Grey",
        price: 48999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Intel i5 12th Gen processor",
      "16GB RAM multitasking",
      "Fast SSD storage",
      "Full HD display",
      "Backlit keyboard"
    ],

    specs: [
      { label: "Processor", value: "Intel i5 12th Gen" },
      { label: "RAM", value: "16GB" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "15.6 inch FHD" },
      { label: "Graphics", value: "Intel UHD" }
    ]
  },

  {
    id: "24",
    title: "Wireless Earbuds",
    description: "Premium wireless earbuds delivering immersive sound, deep bass, and active noise cancellation for calls and music.",
    price: 9999,
    category: "electronics",
    subCategory: "Audio",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=600&auto=format&fit=crop&q=60",
    rating: 4.6,

    brand: "Boat / Realme / Noise",
    battery: "24 Hours Backup",
    connectivity: "Bluetooth 5.2",
    color: "Black / White",
    stock: 40,
    discount: 18,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 9999,
        image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "White",
        price: 9799,
        image: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Active noise cancellation",
      "Deep bass sound",
      "Touch controls",
      "Water resistant",
      "Fast charging"
    ],

    specs: [
      { label: "Battery", value: "24 Hours" },
      { label: "Bluetooth", value: "5.2" },
      { label: "Water Resistance", value: "IPX4" },
      { label: "Noise Cancellation", value: "ANC" },
      { label: "Warranty", value: "1 Year" }
    ]
  },

  {
    id: "25",
    title: "Smartwatch",
    description: "Smartwatch with advanced fitness tracking, notifications, and stylish design for everyday use.",
    price: 19999,
    category: "electronics",
    subCategory: "Mobile Accessories",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,

    brand: "Noise / Boat / Firebolt",
    display: "1.8 inch HD Display",
    battery: "7 Days Backup",
    connectivity: "Bluetooth",
    waterResistant: "Yes",
    stock: 35,
    discount: 15,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 19999,
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 19499,
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Heart rate monitor",
      "Step tracking",
      "Sleep analysis",
      "Call & notifications",
      "Multiple sports modes"
    ],

    specs: [
      { label: "Display", value: "1.8 inch HD" },
      { label: "Battery", value: "Up to 7 Days" },
      { label: "Water Resistance", value: "Yes" },
      { label: "Connectivity", value: "Bluetooth" },
      { label: "Warranty", value: "1 Year" }
    ]
  }

  ,
  
  {
    id: "26",
    title: "Sarees",
    description: "Elegant sarees crafted with premium silk blend fabric, featuring intricate embroidery and vibrant colors, perfect for festive occasions and weddings.",
    price: 2999,
    category: "fashion",
    subCategory: "Women",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60",
    rating: 4.3,

    brand: "FabIndia",
    fabric: "Silk Blend",
    color: "Red / Green / Blue",
    sizes: ["Free Size"],
    stock: 45,
    discount: 15,
    delivery: "3-6 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Red",
        price: 2999,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Green",
        price: 2899,
        image: "https://images.unsplash.com/photo-1771654805171-5c5141289116?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyZWVuJTIwc2FyZWV8ZW58MHx8MHx8fDA%3D"
      },
      {
        color: "Blue",
        price: 3099,
        image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZSUyMHNhcmVlfGVufDB8fDB8fHww"
      }
    ],

    features: [
      "Premium silk blend fabric",
      "Elegant embroidery work",
      "Soft and lightweight",
      "Includes blouse piece",
      "Perfect for festive & wedding wear"
    ],

    specs: [
      { label: "Fabric", value: "Silk Blend" },
      { label: "Pattern", value: "Embroidered" },
      { label: "Length", value: "6.3 meters" },
      { label: "Blouse Included", value: "Yes" },
      { label: "Occasion", value: "Festive / Wedding" }
    ]
  },

  {
    id: "27",
    title: "Panjabi Suits",
    description: "Stylish traditional Panjabi suits made with premium cotton silk fabric, offering comfort and elegance for festive and cultural occasions.",
    price: 3999,
    category: "fashion",
    subCategory: "Men",
    image: "https://media.istockphoto.com/id/1058374456/photo/two-indian-stylish-mans-friends-in-traditional-clothes.webp?a=1&b=1&s=612x612&w=0&k=20&c=hv-iFj7qIyeY5vLmTcnfrcHdWl3cTpHykU3nq6v6qlw=",
    rating: 4.4,

    brand: "Manyavar",
    fabric: "Cotton Silk",
    color: "Beige / Maroon / White",
    sizes: ["M", "L", "XL", "XXL"],
    stock: 20,
    discount: 10,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Beige",
        price: 3999,
        image: "https://media.istockphoto.com/id/960277518/photo/sikh-man-posing.webp?a=1&b=1&s=612x612&w=0&k=20&c=rSaJpvBvWH9Cwpv-gAlZk6cmEMRf5Exj8ec07xSqzBk="
      },
      {
        color: "Maroon",
        price: 3899,
        image: "https://images.unsplash.com/photo-1634843824979-c89d2910b80f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhbmphYmklMjBzdWl0cyUyMG1lbiUyME1hcm9vbiUyMGNvbG91cnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        color: "White",
        price: 3799,
        image: "https://images.unsplash.com/photo-1774527929750-f2f32fbb3b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhbmphYmklMjBzdWl0cyUyMG1lbiUyME1hcm9vbiUyMGNvbG91cnxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],

    features: [
      "Premium cotton silk fabric",
      "Elegant traditional look",
      "Comfortable fit",
      "Durable stitching",
      "Perfect for festivals and weddings"
    ],

    specs: [
      { label: "Fabric", value: "Cotton Silk" },
      { label: "Fit", value: "Regular Fit" },
      { label: "Sleeve", value: "Full Sleeve" },
      { label: "Neck", value: "Mandarin Collar" },
      { label: "Occasion", value: "Festive / Traditional" }
    ]
  },

  {
    id: "29",
    title: "Laptop",
    description: "High-performance laptop designed for productivity, coding, and entertainment with powerful specs and sleek design.",
    price: 49999,
    category: "electronics",
    subCategory: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60",
    rating: 4.7,

    brand: "HP / Dell / Lenovo",
    processor: "Intel i5 12th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    display: "15.6 inch Full HD",
    graphics: "Intel UHD Graphics",
    stock: 25,
    discount: 12,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Silver",
        price: 49999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Grey",
        price: 48999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Intel i5 12th Gen processor",
      "16GB RAM",
      "Fast SSD storage",
      "Full HD display",
      "Backlit keyboard"
    ],

    specs: [
      { label: "Processor", value: "Intel i5 12th Gen" },
      { label: "RAM", value: "16GB" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "15.6 inch FHD" },
      { label: "Graphics", value: "Intel UHD" }
    ]
  },
  {
    id: "30",
    title: "Mobile Phone",
    description: "Next-gen smartphone with high-speed performance, stunning display, and advanced camera features for everyday use and gaming.",
    category: "electronics",
      price: 19999,
    subCategory: "Mobile",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60",
    rating: 4.6,

    brand: "Samsung / Realme / Xiaomi",
    model: "2025 Edition",
    display: "6.5 inch AMOLED FHD+",
    battery: "5000 mAh",
    stock: 55,
    discount: 10,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    // VARIANTS (Color + RAM + Storage)
    variants: [
      {
        color: "Black",
        ram: "6GB",
        storage: "128GB",
        price: 19999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60",
        stock: 10
      },
      {
        color: "Black",
        ram: "8GB",
        storage: "128GB",
        price: 20999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60",
        stock: 8
      },
      {
        color: "Blue",
        ram: "6GB",
        storage: "128GB",
        price: 19499,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
        stock: 12
      },
      {
        color: "Blue",
        ram: "8GB",
        storage: "256GB",
        price: 21999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
        stock: 7
      },
      {
        color: "Silver",
        ram: "8GB",
        storage: "256GB",
        price: 22499,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=60",
        stock: 6
      }
    ],

    features: [
      "AMOLED display",
      "50MP AI camera",
      "Fast charging",
      "Long battery life",
      "Fingerprint unlock"
    ],

    specs: [
      { label: "Display", value: "6.5 inch AMOLED" },
      { label: "Processor", value: "Octa-core 5G" },
      { label: "Battery", value: "5000mAh" },
      { label: "Camera", value: "50MP AI Camera" },
      { label: "OS", value: "Android 14" },
      { label: "Network", value: "5G" }
    ]
  },
  {
    id: "31",
    title: "Laptop",
    description: "High-performance laptop designed for productivity, coding, and entertainment with powerful specs and sleek design.",
    category: "electronics",
    price: 49999,
    subCategory: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60",
    rating: 4.7,

    brand: "HP / Dell / Lenovo",
    processor: "Intel i5 12th Gen",
    display: "15.6 inch Full HD",
    graphics: "Intel UHD Graphics",
    discount: 12,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    // VARIANTS (Color + RAM + Storage)
    variants: [
      {
        color: "Silver",
        ram: "8GB",
        storage: "512GB SSD",
        price: 49999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60",
        stock: 10
      },
      {
        color: "Silver",
        ram: "16GB",
        storage: "512GB SSD",
        price: 52999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60",
        stock: 6
      },
      {
        color: "Grey",
        ram: "16GB",
        storage: "512GB SSD",
        price: 48999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
        stock: 5
      },
      {
        color: "Grey",
        ram: "16GB",
        storage: "1TB SSD",
        price: 55999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
        stock: 4
      }
    ],

    features: [
      "Intel i5 12th Gen processor",
      "16GB RAM",
      "Fast SSD storage",
      "Full HD display",
      "Backlit keyboard"
    ],

    specs: [
      { label: "Processor", value: "Intel i5 12th Gen" },
      { label: "Display", value: "15.6 inch FHD" },
      { label: "Graphics", value: "Intel UHD" },
      { label: "Battery", value: "6 Hours Backup" },
      { label: "Weight", value: "1.7kg" },
      { label: "OS", value: "Windows 11" }
    ]
  },

  {
    id: "32",
    title: "Wireless Earbuds",
    description: "Wireless earbuds with premium sound quality, deep bass, and noise cancellation for music lovers and professionals.",
    price: 9999,
    category: "electronics",
    subCategory: "Audio",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=600&auto=format&fit=crop&q=60",
    rating: 4.6,

    brand: "Boat / Realme / Noise",
    battery: "24 Hours Backup",
    connectivity: "Bluetooth 5.2",
    color: "Black / White",
    stock: 45,
    discount: 18,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 9999,
        image: "https://images.unsplash.com/photo-1585386959984-a41552231658?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "White",
        price: 9799,
        image: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Active noise cancellation",
      "Deep bass sound",
      "Touch controls",
      "Water resistant",
      "Fast charging"
    ],

    specs: [
      { label: "Battery", value: "24 Hours" },
      { label: "Bluetooth", value: "5.2" },
      { label: "Water Resistance", value: "IPX4" },
      { label: "Noise Cancellation", value: "ANC" },
      { label: "Warranty", value: "1 Year" }
    ]
  },

  {
    id: "33",
    title: "Smartwatch",
    description: "Advanced smartwatch with fitness tracking, notifications, and stylish design for modern lifestyle.",
    price: 19999,
    category: "electronics",
    subCategory: "Wearables",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,

    brand: "Noise / Boat / Firebolt",
    display: "1.8 inch HD Display",
    battery: "7 Days Backup",
    connectivity: "Bluetooth",
    waterResistant: "Yes",
    stock: 40,
    discount: 15,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      {
        color: "Black",
        price: 19999,
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&auto=format&fit=crop&q=60"
      },
      {
        color: "Blue",
        price: 19499,
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&auto=format&fit=crop&q=60"
      }
    ],

    features: [
      "Heart rate monitor",
      "Step tracking",
      "Sleep monitoring",
      "Call notifications",
      "Multiple sports modes"
    ],

    specs: [
      { label: "Display", value: "1.8 inch HD" },
      { label: "Battery", value: "Up to 7 Days" },
      { label: "Water Resistance", value: "Yes" },
      { label: "Connectivity", value: "Bluetooth" },
      { label: "Warranty", value: "1 Year" }
    ]
  },
  
  {
    id: "34",
    title: "Kids Educational Toys",
    description: "Fun and educational toys designed to improve creativity, learning, and motor skills in children.",
    price: 999,
    category: "toys",
    subCategory: "Kids",
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&auto=format&fit=crop&q=60",
    rating: 4.1,

    brand: "Funskool",
    material: "Plastic",
    ageGroup: "3+ Years",
    stock: 50,
    discount: 5,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      { name: "Puzzle", price: 999, image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop&q=60" },
      { type: "Blocks", price: 1099, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=60" }
    ],

    features: [
      "Safe for kids",
      "Educational learning toy",
      "Colorful design",
      "Durable build",
      "Boosts creativity"
    ],

    specs: [
      { label: "Material", value: "Plastic" },
      { label: "Age Group", value: "3+ Years" },
      { label: "Battery", value: "No" },
      { label: "Type", value: "Educational" },
      { label: "Safety", value: "Non-toxic" }
    ]
  },

  {
    id: "35",
    title: "Board Games Set",
    description: "Classic board games set perfect for family entertainment and group fun.",
    price: 1499,
    category: "toys",
    subCategory: "Games",
    image: "https://images.unsplash.com/photo-1606503153255-59d8b8b33d88?w=600&auto=format&fit=crop&q=60",
    rating: 4.3,

    brand: "Hasbro",
    material: "Cardboard & Plastic",
    stock: 50,
    discount: 10,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      { type: "Chess", price: 1499, image: "https://images.unsplash.com/photo-1606503153255-59d8b8b33d88?w=600" },
      { type: "Ludo", price: 1299, image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600" }
    ],

    features: [
      "Fun for family",
      "Multiple games included",
      "Durable material",
      "Improves strategy",
      "Group entertainment"
    ],

    specs: [
      { label: "Players", value: "2-6" },
      { label: "Material", value: "Cardboard & Plastic" },
      { label: "Age Group", value: "6+ Years" },
      { label: "Duration", value: "30-60 mins" },
      { label: "Use", value: "Family / Party" }
    ]
  },

  {
    id: "36",
    title: "LED Table Lamp",
    description: "Modern LED lamp with adjustable brightness and eye protection, ideal for study and office use.",
    price: 1299,
    category: "Home",
    subCategory: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=60",
    rating: 4.4,

    brand: "Philips / Wipro",
    material: "Plastic & Metal",
    color: "White / Black",
    power: "10W",
    stock: 40,
    discount: 12,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      { color: "White", price: 1299, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600" },
      { color: "Black", price: 1249, image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=600" }
    ],

    features: [
      "Energy efficient LED",
      "Adjustable brightness",
      "Eye protection light",
      "Touch control",
      "Modern design"
    ],

    specs: [
      { label: "Power", value: "10W" },
      { label: "Light Type", value: "LED" },
      { label: "Control", value: "Touch" },
      { label: "Material", value: "Plastic & Metal" },
      { label: "Warranty", value: "6 Months" }
    ]
  },

  {
    id: "37",
    title: "Acoustic Guitar",
    description: "High-quality acoustic guitar with rich sound, perfect for beginners and professionals.",
    price: 5999,
    category: "Instrument",
    subCategory: "Music",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,

    brand: "Yamaha / Kadence",
    material: "Wood",
    color: "Brown / Black",
    stock: 15,
    discount: 8,
    delivery: "3-5 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      { color: "Brown", price: 5999, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600" },
      { color: "Black", price: 6199, image: "https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ],

    features: [
      "Rich sound quality",
      "Steel strings",
      "Durable wooden body",
      "Comfortable neck",
      "Beginner friendly"
    ],

    specs: [
      { label: "Type", value: "Acoustic" },
      { label: "Strings", value: "6" },
      { label: "Material", value: "Wood" },
      { label: "Skill Level", value: "All Levels" },
      { label: "Warranty", value: "1 Year" }
    ]
  },

  {
    id: "38",
    title: "Skin Care Kit",
    description: "Complete skincare kit for glowing and healthy skin with daily essentials.",
    price: 1899,
    category: "Beauty",
    subCategory: "Skin Care",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=60",
    rating: 4.4,

    brand: "Lakme / Garnier / Mamaearth",
    skinType: "All Skin Types",
    stock: 50,
    discount: 15,
    delivery: "2-3 Days Delivery",
    replacement: "No Replacement",

    variants: [
      { type: "Basic Kit", price: 1899, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600" },
      { type: "Advanced Kit", price: 2299, image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600" }
    ],

    features: [
      "Face wash included",
      "Moisturizer included",
      "Sunscreen included",
      "Daily use",
      "Improves glow"
    ],

    specs: [
      { label: "Skin Type", value: "All" },
      { label: "Use", value: "Daily" },
      { label: "Organic", value: "Yes" },
      { label: "Gender", value: "Unisex" },
      { label: "Warranty", value: "No Warranty" }
    ]
  },

  {
    id: "39",
    title: "Remote Control Car",
    description: "High-speed RC car with strong build and long battery life for kids entertainment.",
    price: 1499,
    category: "toys",
    subCategory: "Kids",
    image: "https://images.unsplash.com/photo-1601758123927-196a33e53c0a?w=600&auto=format&fit=crop&q=60",
    rating: 4.2,

    brand: "ToyZone",
    material: "Plastic",
    color: "Red / Blue",
    battery: "Rechargeable",
    ageGroup: "5+ Years",
    stock: 35,
    discount: 10,
    delivery: "2-3 Days Delivery",
    replacement: "7 Days Replacement",

    variants: [
      { color: "Red", price: 1499, image: "https://images.unsplash.com/photo-1601758123927-196a33e53c0a?w=600" },
      { color: "Blue", price: 1449, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600" }
    ],

    features: [
      "Remote controlled",
      "Rechargeable battery",
      "High speed",
      "Durable build",
      "Kid-friendly"
    ],

    specs: [
      { label: "Range", value: "10m" },
      { label: "Battery", value: "Rechargeable" },
      { label: "Material", value: "Plastic" },
      { label: "Age Group", value: "5+" },
      { label: "Warranty", value: "6 Months" }
    ]
  },
 
{
  id: "41",
  title: "Studio Microphone",
  description: "High-quality condenser microphone for recording and streaming.",
  price: 3499,
  category: "electronics",
  subCategory: "Mobile Accessories",
  image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600",
  rating: 4.5,

  brand: "Blue",
  connectivity: "USB / XLR",
  color: "Black",

  stock: 25,
  discount: 12,
  delivery: "2-3 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      variantType: "USB",
      price: 3499,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600"
    },
    {
      variantType: "XLR",
      price: 4299,
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600"
    }
  ],

  features: [
    "Studio quality sound",
    "Noise reduction",
    "Plug and play",
    "Podcast ready",
    "Durable build"
  ],

  specs: [
    { label: "Type", value: "Condenser" },
    { label: "Connectivity", value: "USB/XLR" },
    { label: "Frequency", value: "20Hz-20kHz" },
    { label: "Use", value: "Recording" },
    { label: "Warranty", value: "1 Year" }
  ]
},
{
  id: "42",
  title: "Face Wash",
  description: "Gentle face wash for daily skincare routine.",
  price: 299,
  category: "beauty",
  subCategory: "skin care",
  image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600",
  rating: 4.3,

  brand: "Himalaya",
  skinType: "All Skin Types",

  stock: 60,
  discount: 10,
  delivery: "2-3 Days Delivery",
  replacement: "No Replacement",

  variants: [
    {
      size: "100ml",
      price: 249,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600"
    },
    {
      size: "150ml",
      price: 299,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600"
    }
  ],

  features: [
    "Removes dirt",
    "Gentle on skin",
    "Daily use",
    "Fresh fragrance",
    "Oil control"
  ],

  specs: [
    { label: "Skin Type", value: "All" },
    { label: "Form", value: "Gel" },
    { label: "Use", value: "Daily" },
    { label: "Quantity", value: "150ml" },
    { label: "Warranty", value: "No Warranty" }
  ]
},

{
  id: "43",
  title: "Bunk Bed",
  description: "Space saving bunk bed for kids. Strong and stylish bunk bed suitable for modern homes.",
  price: 15999,
  category: "Furniture",
  subCategory: "Bed",
  rating: 4.5,
  image: "https://images.unsplash.com/photo-1586105251261-72a756497a11",
  brand: "IKEA",
  material: ["Wood", "Metal", "Fabric"],
  warranty: "1 Year Warranty",
  stock: 25,
  discount: 12,
  delivery: "5-7 Days Delivery",
  replacement: "7 Days Replacement",

  features: [
    "Premium Build Quality",
    "Modern Design",
    "Durable Material",
    "Easy Assembly",
    "Space Saving Design",
    "Safety Guard Rails",
    "Ladder Included"
  ],

  specs: [
    { label: "Material", value: "Solid Wood & Metal" },
    { label: "Bed Size", value: "Single / Double" },
    { label: "Storage", value: "Available" },
    { label: "Finish", value: "Matte Finish" },
    { label: "Weight Capacity", value: "120kg Each Bed" },
    { label: "Warranty", value: "1 Year" }
  ],

  variants: [
    {
      color: "Brown",
      size: "Single",
      storage: "No",
      price: 15999,
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a11"
    },
    {
      color: "Brown",
      size: "Single",
      storage: "Yes",
      price: 17999,
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a11"
    },
    {
      color: "White",
      size: "Double",
      storage: "No",
      price: 18999,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    {
      color: "White",
      size: "Double",
      storage: "Yes",
      price: 20999,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    }
  ]
},
{
  id: "45",
  title: "Sony Alpha Mirrorless Camera",
  description: "Compact mirrorless camera with excellent image quality.",
    price: 74999,
  category: "Electronics",
  subCategory: "Camera",
  image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600",
  rating: 4.8,

  brand: "Sony",
  warranty: "2 Years Warranty",
  stock: 8,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      color: "Black",
      storage: "128GB",
      price: 74999,
      discount: 8,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd"
    },
    {
      color: "Silver",
      storage: "256GB",
      price: 78999,
      discount: 10,
      image: "https://images.unsplash.com/photo-1519183071298-a2962be96f83"
    }
  ],

  features: [
    "24.2 MP Sensor",
    "4K Video Recording",
    "Fast Auto Focus",
    "WiFi & Bluetooth",
    "Compact Design"
  ],

  specs: [
    { label: "Resolution", value: "24.2 MP" },
    { label: "Sensor", value: "APS-C CMOS" },
    { label: "Video", value: "4K" },
    { label: "Connectivity", value: "WiFi + Bluetooth" },
    { label: "Warranty", value: "2 Years" }
  ],


},{
  id: "46",
  title: "Nikon Z50 Camera",
  description: "Lightweight mirrorless camera perfect for travel photography.",
   price: 67999,
  category: "Electronics",
  subCategory: "Camera",
  image: "https://images.unsplash.com/photo-1519183071298-a2962be96f83?w=600",
  rating: 4.6,

  brand: "Nikon",
  warranty: "2 Years Warranty",
  stock: 12,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      color: "Black",
      storage: "64GB",
      price: 68999,
      discount: 9,
      image: "https://images.unsplash.com/photo-1519183071298-a2962be96f83"
    },
    {
      color: "Black",
      storage: "128GB",
      price: 70999,
      discount: 10,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd"
    }
  ],

  features: [
    "20.9 MP Sensor",
    "4K Video Recording",
    "Compact Mirrorless Camera",
    "Travel Friendly",
    "WiFi & Bluetooth"
  ],

  specs: [
    { label: "Resolution", value: "20.9 MP" },
    { label: "Sensor", value: "APS-C CMOS" },
    { label: "Video", value: "4K" },
    { label: "Connectivity", value: "WiFi + Bluetooth" },
    { label: "Warranty", value: "2 Years" }
  ],

 
},
  {
  id: "47",
  title: "Non Stick Frying Pan",
  description: "Durable non-stick frying pan perfect for everyday cooking.",
  price: 899,
  category: "Kitchen",
  subCategory: "Cookware",
  image: "https://plus.unsplash.com/premium_photo-1716488286931-79cef654e08c",
  rating: 4.4,

  brand: "Prestige",
  material: ["Aluminium"],
  warranty: "6 Months Warranty",
  stock: 40,
  discount: 10,
  delivery: "2-4 Days Delivery",
  replacement: "5 Days Replacement",

  variants: [
    {
      size: "20cm",
      color: "Black",
      price: 899,
      image: "https://plus.unsplash.com/premium_photo-1716488286931-79cef654e08c"
    },
    {
      size: "24cm",
      color: "Black",
      price: 999,
      image: "https://plus.unsplash.com/premium_photo-1716488286931-79cef654e08c"
    },
    {
      size: "28cm",
      color: "Red",
      price: 1199,
      image: "https://images.unsplash.com/photo-1584990347449-8c03c8e8a2d1"
    }
  ],

  features: [
    "Non-stick Coating",
    "Aluminium Body",
    "Heat Resistant Handle",
    "Induction Compatible",
    "Easy to Clean"
  ],

  specs: [
    { label: "Material", value: "Aluminium" },
    { label: "Coating", value: "Non-stick" },
    { label: "Compatibility", value: "Gas & Induction" },
    { label: "Dishwasher Safe", value: "Yes" },
    { label: "Warranty", value: "6 Months" }
  ]
},{
  id: "70",
  title: "Stainless Steel Cooking Pot",
  description: "High quality stainless steel pot for boiling and cooking.",
  price: 1299,
  category: "Kitchen",
  subCategory: "Cookware",
  image: "https://plus.unsplash.com/premium_photo-1718735910395-94a28fbc9f6b",
  rating: 4.5,

  brand: "Pigeon",
  material: ["Stainless Steel"],
  warranty: "1 Year Warranty",
  stock: 35,
  discount: 8,
  delivery: "2-4 Days Delivery",
  replacement: "5 Days Replacement",

  variants: [
    {
      size: "2 Litre",
      price: 1299,
      image: "https://plus.unsplash.com/premium_photo-1718735910395-94a28fbc9f6b"
    },
    {
      size: "3 Litre",
      price: 1499,
      image: "https://plus.unsplash.com/premium_photo-1718735910395-94a28fbc9f6b"
    },
    {
      size: "5 Litre",
      price: 1799,
      image: "https://images.unsplash.com/photo-1604908176997-4317b8b0b7a9"
    }
  ],

  features: [
    "Stainless Steel Body",
    "Induction Compatible",
    "Rust Resistant",
    "Strong Handles",
    "Dishwasher Safe"
  ],

  specs: [
    { label: "Material", value: "Stainless Steel" },
    { label: "Capacity", value: "Multiple Sizes" },
    { label: "Compatibility", value: "Gas & Induction" },
    { label: "Rust Resistant", value: "Yes" },
    { label: "Warranty", value: "1 Year" }
  ]
},
{
  id: "49",
  title: "Knife Set",
  description: "Sharp stainless steel kitchen knife set.",
  price: 799,
  category: "Kitchen",
  subCategory: "Tools",
  image: "https://images.unsplash.com/photo-1596633609591-e4e1e9e06b7f",
  rating: 4.3,

  brand: "Pigeon",
  material: ["Stainless Steel"],
  warranty: "6 Months Warranty",
  stock: 50,
  discount: 15,
  delivery: "2-3 Days Delivery",
  replacement: "5 Days Replacement",

  variants: [
    {
      size: "3 Pieces",
      price: 799,
      image: "https://images.unsplash.com/photo-1596633609591-e4e1e9e06b7f"
    },
    {
      size: "5 Pieces",
      price: 999,
      image: "https://images.unsplash.com/photo-1596633609591-e4e1e9e06b7f"
    },
    {
      size: "7 Pieces",
      price: 1299,
      image: "https://images.unsplash.com/photo-1604908554027-7c2b6b8d2c9d"
    }
  ],

  features: [
    "Sharp Stainless Steel Blades",
    "Ergonomic Handle",
    "Rust Resistant",
    "Easy to Clean",
    "Multiple Knife Options"
  ],

  specs: [
    { label: "Material", value: "Stainless Steel" },
    { label: "Pieces", value: "3 / 5 / 7" },
    { label: "Rust Resistant", value: "Yes" },
    { label: "Dishwasher Safe", value: "Yes" },
    { label: "Warranty", value: "6 Months" }
  ]
},
{
  id: "50",
  title: "Coffee",
  description: "Authentic coffee",
  price: 499,
  category: "Food",
  subCategory: "Beverages",
  image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  rating: 4.5,

  brand: "Nescafe",
  warranty: "No Warranty",
  stock: 100,
  discount: 5,
  delivery: "2-3 Days Delivery",
  replacement: "No Replacement",

  variants: [
    {
      weight: "100g",
      flavor: "Classic",
      price: 299,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    {
      weight: "200g",
      flavor: "Classic",
      price: 499,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    {
      weight: "500g",
      flavor: "Classic",
      price: 999,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    },
    {
      weight: "200g",
      flavor: "Strong",
      price: 549,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    },
    {
      weight: "200g",
      flavor: "Hazelnut",
      price: 599,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735"
    }
  ],

  features: [
    "Rich Aroma",
    "Instant Coffee Powder",
    "Premium Quality Beans",
    "Easy to Prepare",
    "Strong Flavor"
  ],

  specs: [
    { label: "Weight", value: "Multiple Options" },
    { label: "Type", value: "Instant Coffee" },
    { label: "Flavor", value: "Classic / Strong / Hazelnut" },
    { label: "Shelf Life", value: "12 Months" },
    { label: "Brand", value: "Nescafe" }
  ]
},
  
  {
  id: "73",
  title: "Wooden Table",
  description: "Multipurpose wooden table.",
  price: 3499,
  category: "Furniture",
  subCategory: "Table",
  rating: 4.3,
  image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc",
  brand: "IKEA",
  material: ["Wood", "Metal"],
  warranty: "1 Year Warranty",
  stock: 25,
  discount: 12,
  delivery: "5-7 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      color: "Brown",
      size: "Small",
      price: 3499,
      image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc"
    },
    {
      color: "Brown",
      size: "Medium",
      price: 4499,
      image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc"
    },
    {
      color: "White",
      size: "Large",
      price: 5499,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    }
  ],

  features: [
    "Premium Build Quality",
    "Modern Design",
    "Durable Material",
    "Easy Assembly",
    "Home & Office Use"
  ],

  specs: [
    { label: "Material", value: "Wood/Metal" },
    { label: "Weight Capacity", value: "120kg" },
    { label: "Assembly", value: "Required" },
    { label: "Finish", value: "Matte" },
    { label: "Warranty", value: "1 Year" }
  ]
},
{
  id: "72",
  title: "Black Arm Chair",
  description: "Comfortable arm chair for living room.",
  price: 5599,
  category: "Furniture",
  subCategory: "Chair",
  rating: 4.4,
  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
  brand: "IKEA",
  material: ["Wood", "Metal", "Fabric"],
  warranty: "1 Year Warranty",
  stock: 20,
  discount: 15,
  delivery: "5-7 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      color: "Black",
      material: "Fabric",
      price: 5599,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
    },
    {
      color: "Grey",
      material: "Fabric",
      price: 5799,
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c"
    },
    {
      color: "Brown",
      material: "Leather",
      price: 6999,
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
    }
  ],

  features: [
    "Premium Build Quality",
    "Modern Design",
    "Durable Material",
    "Comfortable Seating",
    "Home & Office Use"
  ],

  specs: [
    { label: "Material", value: "Wood/Metal/Fabric" },
    { label: "Weight Capacity", value: "120kg" },
    { label: "Assembly", value: "Required" },
    { label: "Finish", value: "Matte" },
    { label: "Warranty", value: "1 Year" }
  ]
}
,
{
  id: "53",
  title: "Gaming Chair",
  description: "Ergonomic gaming chair with headrest.",
  price: 7499,
  category: "Furniture",
  subCategory: "Chair",
  rating: 4.6,
  image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
  brand: "IKEA",
  material: ["Wood", "Metal", "Fabric"],
  warranty: "1 Year Warranty",
  stock: 20,
  discount: 15,
  delivery: "5-7 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      color: "Black",
      material: "Leather",
      price: 7499,
      image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6"
    },
    {
      color: "Red",
      material: "Leather",
      price: 7999,
      image: "https://images.unsplash.com/photo-1616627450209-4f7b8b0c6c34"
    },
    {
      color: "Blue",
      material: "Fabric",
      price: 7699,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    }
  ],

  features: [
    "Ergonomic Design",
    "Adjustable Height",
    "Headrest & Lumbar Support",
    "Premium Build Quality",
    "Comfortable for Long Gaming Sessions"
  ],

  specs: [
    { label: "Material", value: "Leather/Fabric" },
    { label: "Weight Capacity", value: "120kg" },
    { label: "Adjustable Height", value: "Yes" },
    { label: "Finish", value: "Matte" },
    { label: "Warranty", value: "1 Year" }
  ]
}
,
{
  id: "54",
  title: "Single Bed",
  description: "Single bed for kids room.",
  price: 7999,
  category: "Furniture",
  subCategory: "Bed",
  rating: 4.2,
  image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
  brand: "IKEA",
  material: ["Wood", "Metal"],
  warranty: "1 Year Warranty",
  stock: 18,
  discount: 12,
  delivery: "5-7 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      size: "Single",
      storage: "No",
      price: 7999,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304"
    },
    {
      size: "Single",
      storage: "Yes",
      price: 9999,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    {
      size: "Queen",
      storage: "Yes",
      price: 13999,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    }
  ],

  features: [
    "Premium Build Quality",
    "Modern Design",
    "Durable Material",
    "Storage Option Available",
    "Easy Assembly"
  ],

  specs: [
    { label: "Material", value: "Wood" },
    { label: "Size", value: "Single / Queen" },
    { label: "Storage", value: "Yes / No" },
    { label: "Finish", value: "Matte" },
    { label: "Warranty", value: "1 Year" }
  ]
},
{
  id: "48",
  title: "Math Education Book",
  description: "Helpful education book for students to master mathematics concepts.",
  price: 299,
  category: "Books",
  subCategory: "Education",
  image: "https://images.unsplash.com/photo-1589998059171-988d887df646",
  rating: 4.2,

  brand: "Oxford",
  author: "R.D. Sharma",
  pages: 450,
  language: "English",
  warranty: "No Warranty",
  stock: 80,
  discount: 12,
  delivery: "3-5 Days Delivery",
  replacement: "No Replacement",

  features: [
    "Step by Step Solutions",
    "Practice Problems",
    "Easy Explanations",
    "Perfect for School Students",
    "Covers Core Mathematics Topics"
  ],

  specs: [
    { label: "Author", value: "R.D. Sharma" },
    { label: "Pages", value: "450" },
    { label: "Language", value: "English" },
    { label: "Publisher", value: "Oxford" },
    { label: "Subject", value: "Mathematics" }
  ],

  // ✅ Variants added (important for your UI)
  variants: [
    {
      color: "Standard Edition",
      price: 299,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646",
      format: "Paperback"
    },
    {
      color: "Hardcover Edition",
      price: 399,
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      format: "Hardcover"
    },
    {
      color: "Student Edition",
      price: 249,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      format: "Paperback"
    }
  ]
},
{
  id: "209",
  title: "Fiction Story Book",
  description: "Interesting fiction novel with engaging storyline and memorable characters.",
  price: 399,
  category: "Books",
  subCategory: "Fiction",
  image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  rating: 4.5,

  brand: "Penguin",
  author: "John Smith",
  pages: 320,
  language: "English",
  warranty: "No Warranty",
  stock: 100,
  discount: 10,
  delivery: "3-5 Days Delivery",
  replacement: "No Replacement",

  features: [
    "Interesting Storyline",
    "Easy to Read",
    "Premium Quality Paper",
    "Best Selling Novel",
    "Perfect for Leisure Reading"
  ],

  specs: [
    { label: "Author", value: "John Smith" },
    { label: "Pages", value: "320" },
    { label: "Language", value: "English" },
    { label: "Publisher", value: "Penguin" },
    { label: "Genre", value: "Fiction" }
  ],

  // ✅ Variants added
  variants: [
    {
      color: "Paperback Edition",
      price: 399,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      format: "Paperback"
    },
    {
      color: "Hardcover Edition",
      price: 499,
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      format: "Hardcover"
    },
    {
      color: "Collector's Edition",
      price: 599,
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
      format: "Hardcover"
    }
  ]
},
{
  id: "50",
  title: "Recliner Chair",
  description: "Luxury recliner chair for relaxation.",
  price: 8999,
  category: "Furniture",
  subCategory: "Chair",
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  brand: "IKEA",
  material: ["Wood", "Metal", "Fabric"],
  warranty: "1 Year Warranty",
  stock: 20,
  discount: 15,
  delivery: "5-7 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      color: "Brown",
      material: "Leather",
      price: 8999,
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
    },
    {
      color: "Black",
      material: "Leather",
      price: 9499,
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c"
    },
    {
      color: "Grey",
      material: "Fabric",
      price: 8599,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
    }
  ],

  features: [
    "Premium Build Quality",
    "Modern Design",
    "Comfortable Reclining",
    "Durable Material",
    "Perfect for Living Room"
  ],

  specs: [
    { label: "Material", value: "Leather/Fabric" },
    { label: "Weight Capacity", value: "120kg" },
    { label: "Reclining", value: "Yes" },
    { label: "Finish", value: "Matte" },
    { label: "Warranty", value: "1 Year" }
  ]
},
{
  id: "51",
  title: "Recliner Chair",
  description: "Luxury recliner chair for relaxation.",
  price: 8999,
  category: "Furniture",
  subCategory: "Chair",
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  brand: "IKEA",
  material: ["Wood", "Metal", "Fabric"],
  warranty: "1 Year Warranty",
  stock: 25,
  discount: 15,
  delivery: "5-7 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      color: "Brown",
      material: "Leather",
      price: 8999,
      discount: 10,
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
    },
    {
      color: "Black",
      material: "Leather",
      price: 9499,
      discount: 12,
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c"
    },
    {
      color: "Grey",
      material: "Fabric",
      price: 8599,
      discount: 8,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
    }
  ],

  features: [
    "Premium Build Quality",
    "Modern Design",
    "Comfortable Reclining",
    "Soft Cushion Support",
    "Perfect for Living Room"
  ],

  specs: [
    { label: "Material", value: "Leather/Fabric" },
    { label: "Weight Capacity", value: "120kg" },
    { label: "Reclining", value: "Yes" },
    { label: "Assembly", value: "Required" },
    { label: "Warranty", value: "1 Year" }
  ]
},


{
  id: "52",
  title: "King Size Bed",
  description: "Luxury king size bed for master bedroom.",
  price: 18999,
  category: "Furniture",
  subCategory: "Bed",
  rating: 4.6,
  image: "https://images.unsplash.com/photo-1505693314120-0d443867891c",
  brand: "IKEA",
  material: "Wood",
  warranty: "1 Year Warranty",
  stock: 20,
  discount: 15,
  delivery: "5-7 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      size: "Single",
      storage: "No",
      color: "Brown",
      price: 14999,
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c"
    },
    {
      size: "Queen",
      storage: "Yes",
      color: "Brown",
      price: 17999,
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c"
    },
    {
      size: "King",
      storage: "Yes",
      color: "Brown",
      price: 18999,
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c"
    },
    {
      size: "King",
      storage: "Yes",
      color: "Black",
      price: 19999,
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c"
    }
  ],

  features: [
    "Premium Build Quality",
    "Modern Design",
    "Hydraulic Storage Available",
    "Durable Wooden Frame",
    "Easy Assembly"
  ],

  specs: [
    { label: "Material", value: "Wood" },
    { label: "Sizes Available", value: "Single/Queen/King" },
    { label: "Storage", value: "Available" },
    { label: "Finish", value: "Matte" },
    { label: "Warranty", value: "1 Year" }
  ]
},
{
  id: "53",
  title: "Lipstick",
  description: "Long lasting makeup lipstick with smooth matte finish.",
  price: 599,
  category: "Beauty",
  subCategory: "Makeup",
  image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
  rating: 4.4,

  brand: "Lakme",
  type: "Matte",
  weight: "4g",
  warranty: "No Warranty",
  stock: 70,
  discount: 10,
  delivery: "2-3 Days Delivery",
  replacement: "No Replacement",

  variants: [
    {
      color: "Red",
      type: "Matte",
      price: 599,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa"
    },
    {
      color: "Pink",
      type: "Matte",
      price: 579,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348"
    },
    {
      color: "Nude",
      type: "Creamy",
      price: 549,
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    {
      color: "Maroon",
      type: "Glossy",
      price: 629,
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a"
    }
  ],

  features: [
    "Long Lasting",
    "Matte & Glossy Finish Options",
    "Smooth Texture",
    "Highly Pigmented",
    "Lightweight Formula"
  ],

  specs: [
    { label: "Shades Available", value: "Red/Pink/Nude/Maroon" },
    { label: "Finish", value: "Matte/Glossy/Creamy" },
    { label: "Weight", value: "4g" },
    { label: "Skin Type", value: "All" },
    { label: "Brand", value: "Lakme" }
  ]
},

{
  id: "54",
  title: "Dumbbells",
  description: "Gym dumbbells set for home and gym use.",
  price: 1999,
  category: "Sports",
  subCategory: "Gym",
  image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
  rating: 4.6,

  brand: "Protoner",
  material: "Cast Iron",
  warranty: "6 Months Warranty",
  stock: 30,
  discount: 12,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      weight: "5kg Set",
      material: "PVC",
      price: 999,
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
    },
    {
      weight: "10kg Set",
      material: "Cast Iron",
      price: 1999,
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
    },
    {
      weight: "15kg Set",
      material: "Cast Iron",
      price: 2599,
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
    },
    {
      weight: "20kg Set",
      material: "Rubber Coated",
      price: 3299,
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
    }
  ],

  features: [
    "Multiple Weight Options",
    "Durable Material",
    "Non-slip Grip",
    "Gym & Home Use",
    "Long Lasting"
  ],

  specs: [
    { label: "Weight Options", value: "5kg/10kg/15kg/20kg" },
    { label: "Material", value: "PVC/Cast Iron/Rubber" },
    { label: "Grip", value: "Non-slip" },
    { label: "Use", value: "Gym/Home" },
    { label: "Warranty", value: "6 Months" }
  ]
}
,
{
  id: "55",
  title: "Chess Board",
  description: "Indoor wooden chess board game for 2 players.",
  price: 699,
  category: "Sports",
  subCategory: "Indoor",
  image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461",
  rating: 4.3,

  brand: "Funskool",
  material: "Wood",
  players: "2 Players",
  warranty: "No Warranty",
  stock: 40,
  discount: 5,
  delivery: "3-5 Days Delivery",
  replacement: "No Replacement",

  variants: [
    {
      size: "Small",
      material: "Plastic",
      price: 399,
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461"
    },
    {
      size: "Medium",
      material: "Wood",
      price: 699,
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461"
    },
    {
      size: "Large",
      material: "Wood",
      price: 999,
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461"
    },
    {
      size: "Large",
      material: "Magnetic",
      price: 1099,
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461"
    }
  ],

  features: [
    "Multiple Board Sizes",
    "Foldable Board",
    "Smooth Finish",
    "Indoor Game",
    "Portable Design"
  ],

  specs: [
    { label: "Board Sizes", value: "Small/Medium/Large" },
    { label: "Material", value: "Plastic/Wood/Magnetic" },
    { label: "Players", value: "2" },
    { label: "Foldable", value: "Yes" },
    { label: "Brand", value: "Funskool" }
  ]
}
,
{
  id: "56",
  title: "Dumbbells",
  description: "Gym dumbbells set.",
  price: 1999,
  category: "Sports",
  subCategory: "Gym",
  image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
  rating: 4.6,

  brand: "Protoner",
  warranty: "6 Months Warranty",
  stock: 30,
  discount: 12,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      weight: "5kg Set",
      material: "PVC",
      price: 999,
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
    },
    {
      weight: "10kg Set",
      material: "Cast Iron",
      price: 1999,
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
    },
    {
      weight: "15kg Set",
      material: "Cast Iron",
      price: 2599,
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
    },
    {
      weight: "20kg Set",
      material: "Rubber Coated",
      price: 3299,
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
    }
  ],

  features: [
    "Multiple Weight Options",
    "Durable Material",
    "Non-slip Grip",
    "Gym & Home Use",
    "Long Lasting"
  ],

  specs: [
    { label: "Weight Options", value: "5kg/10kg/15kg/20kg" },
    { label: "Material", value: "PVC/Cast Iron/Rubber" },
    { label: "Grip", value: "Non-slip" },
    { label: "Use", value: "Gym/Home" },
    { label: "Warranty", value: "6 Months" }
  ]
},
{
  id: "57",
  title: "Wall Decor",
  description: "Beautiful wall decor item.",
  price: 999,
  category: "Home",
  subCategory: "Decor",
  image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
  rating: 4.3,

  brand: "Home Centre",
  warranty: "No Warranty",
  stock: 35,
  discount: 10,
  delivery: "3-5 Days Delivery",
  replacement: "No Replacement",

  variants: [
    {
      size: "Small",
      material: "Wood",
      color: "Brown",
      price: 699,
      image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9"
    },
    {
      size: "Medium",
      material: "Wood & Metal",
      color: "Black",
      price: 999,
      image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9"
    },
    {
      size: "Large",
      material: "Metal",
      color: "Gold",
      price: 1299,
      image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9"
    },
    {
      size: "Large",
      material: "Wood",
      color: "White",
      price: 1199,
      image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9"
    }
  ],

  features: [
    "Modern Design",
    "Wall Mounted",
    "Premium Finish",
    "Lightweight",
    "Perfect for Living Room"
  ],

  specs: [
    { label: "Material Options", value: "Wood/Metal/Wood & Metal" },
    { label: "Sizes Available", value: "Small/Medium/Large" },
    { label: "Mount Type", value: "Wall" },
    { label: "Style", value: "Modern" },
    { label: "Brand", value: "Home Centre" }
  ]
}
,
{
  id: "58",
  title: "Keyboard Piano",
  description: "Electronic keyboard piano.",
  price: 6999,
  category: "Instrument",
  subCategory: "Keyboard",
  image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a",
  rating: 4.4,

  brand: "Casio",
  power: "Electric",
  warranty: "1 Year Warranty",
  stock: 18,
  discount: 12,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      keys: "49 Keys",
      power: "Battery",
      price: 4999,
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a"
    },
    {
      keys: "61 Keys",
      power: "Electric",
      price: 6999,
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a"
    },
    {
      keys: "76 Keys",
      power: "Electric",
      price: 8999,
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a"
    },
    {
      keys: "88 Keys",
      power: "Electric",
      price: 12999,
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a"
    }
  ],

  features: [
    "Multiple Key Options",
    "Built-in Speakers",
    "Recording Feature",
    "Multiple Tones",
    "Beginner Friendly"
  ],

  specs: [
    { label: "Keys Options", value: "49/61/76/88 Keys" },
    { label: "Power", value: "Battery/Electric" },
    { label: "Speaker", value: "Built-in" },
    { label: "Recording", value: "Yes" },
    { label: "Warranty", value: "1 Year" }
  ]
}
,
{
  id: "59",
  title: "Water Bottle",
  description: "Durable and reusable water bottle.",
  price: 299,
  category: "Home",
  subCategory: "Storage",
  image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba",
  rating: 4.3,

  brand: "Milton",
  warranty: "6 Months Warranty",
  stock: 100,
  discount: 5,
  delivery: "2-3 Days Delivery",
  replacement: "No Replacement",

  variants: [
    {
      capacity: "500ml",
      material: "Plastic",
      color: "Blue",
      price: 199,
      image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba"
    },
    {
      capacity: "750ml",
      material: "Plastic",
      color: "Red",
      price: 249,
      image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba"
    },
    {
      capacity: "1 Litre",
      material: "Steel",
      color: "Silver",
      price: 299,
      image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba"
    },
    {
      capacity: "1.5 Litre",
      material: "Steel",
      color: "Black",
      price: 349,
      image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba"
    }
  ],

  features: [
    "Multiple Capacity Options",
    "Leak Proof Design",
    "Durable Material",
    "Reusable Bottle",
    "Travel Friendly"
  ],

  specs: [
    { label: "Capacity Options", value: "500ml/750ml/1L/1.5L" },
    { label: "Material", value: "Plastic/Steel" },
    { label: "Leak Proof", value: "Yes" },
    { label: "Reusable", value: "Yes" },
    { label: "Warranty", value: "6 Months" }
  ]
},
{
  id: "60",
  title: "Cookies",
  description: "Delicious cookies.",
  price: 199,
  category: "Food",
  subCategory: "Snacks",
  image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
  rating: 4.4,

  brand: "Oreo",
  stock: 150,
  discount: 5,
  delivery: "2-3 Days Delivery",
  replacement: "No Replacement",

  variants: [
    {
      weight: "150g",
      flavor: "Chocolate",
      price: 99,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35"
    },
    {
      weight: "300g",
      flavor: "Chocolate",
      price: 199,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35"
    },
    {
      weight: "300g",
      flavor: "Strawberry",
      price: 209,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35"
    },
    {
      weight: "500g",
      flavor: "Chocolate",
      price: 299,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35"
    }
  ],

  features: [
    "Multiple Flavors Available",
    "Crunchy Cookies",
    "Ready to Eat",
    "Premium Quality",
    "Kids Favorite"
  ],

  specs: [
    { label: "Weight Options", value: "150g/300g/500g" },
    { label: "Flavors", value: "Chocolate/Strawberry" },
    { label: "Type", value: "Cookies" },
    { label: "Shelf Life", value: "6 Months" },
    { label: "Brand", value: "Oreo" }
  ]
}
,
{
  id: "200",
  title: "Resistance Bands Set",
  description: "Elastic resistance bands set for home and gym workout.",
  price: 799,
  category: "Health",
  subCategory: "Fitness",
  image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff",
  rating: 4.5,

  brand: "Boldfit",
  warranty: "6 Months Warranty",
  stock: 80,
  discount: 10,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      type: "Light",
      weight: "5-10kg",
      color: "Yellow",
      price: 499,
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff"
    },
    {
      type: "Medium",
      weight: "10-20kg",
      color: "Red",
      price: 699,
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff"
    },
    {
      type: "Heavy",
      weight: "20-30kg",
      color: "Black",
      price: 899,
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff"
    }
  ],

  features: [
    "Full Body Workout",
    "Durable Elastic Material",
    "Lightweight & Portable",
    "Suitable for Home & Gym",
    "Beginner to Advanced Use"
  ],

  specs: [
    { label: "Material", value: "Latex" },
    { label: "Resistance Levels", value: "Light/Medium/Heavy" },
    { label: "Use", value: "Workout/Yoga/Stretching" },
    { label: "Portable", value: "Yes" },
    { label: "Warranty", value: "6 Months" }
  ]
}


,
{
  id: "201",
  title: "Whey Protein Powder",
  description: "High quality whey protein for muscle recovery and fitness.",
  price: 2499,
  category: "Health",
  subCategory: "Supplement",
  image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d",
  rating: 4.5,

  brand: "Optimum Nutrition",
  warranty: "No Warranty",
  stock: 50,
  discount: 15,
  delivery: "2-4 Days Delivery",
  replacement: "No Replacement",

  variants: [
    {
      flavor: "Chocolate",
      weight: "1kg",
      price: 2499,
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d"
    },
    {
      flavor: "Vanilla",
      weight: "1kg",
      price: 2399,
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d"
    },
    {
      flavor: "Chocolate",
      weight: "2kg",
      price: 4599,
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d"
    }
  ],

  features: [
    "High Protein Content",
    "Muscle Recovery Support",
    "Easy to Mix",
    "Great Taste",
    "Gym & Fitness Use"
  ],

  specs: [
    { label: "Protein", value: "24g per scoop" },
    { label: "Flavors", value: "Chocolate/Vanilla" },
    { label: "Weight Options", value: "1kg/2kg" },
    { label: "Use", value: "Muscle Recovery" },
    { label: "Brand", value: "Optimum Nutrition" }
  ]
},{
  id: "202",
  title: "Digital Weighing Scale",
  description: "Accurate digital body weight scale.",
  price: 1299,
  category: "Health",
  subCategory: "Health Monitor",
  image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  rating: 4.4,

  brand: "HealthSense",
  warranty: "1 Year Warranty",
  stock: 40,
  discount: 10,
  delivery: "2-3 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      color: "Black",
      price: 1299,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
    },
    {
      color: "White",
      price: 1249,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
    }
  ],

  features: [
    "Accurate Measurement",
    "Digital Display",
    "Auto Power Off",
    "Slim Design",
    "Home Use"
  ],

  specs: [
    { label: "Max Weight", value: "180kg" },
    { label: "Display", value: "Digital" },
    { label: "Power", value: "Battery" },
    { label: "Auto Off", value: "Yes" },
    { label: "Warranty", value: "1 Year" }
  ]
}
,
{
  id: "203",
  title: "Luxury Perfume",
  description: "Long lasting luxury fragrance perfume.",
  price: 1499,
  category: "Beauty",
  subCategory: "Makeup",
  image: "https://images.unsplash.com/photo-1541643600914-78b084683601",
  rating: 4.5,

  brand: "Skinn",
  warranty: "No Warranty",
  stock: 70,
  discount: 12,
  delivery: "2-4 Days Delivery",
  replacement: "No Replacement",

  variants: [
    {
      size: "50ml",
      flavor: "Floral",
      price: 999,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601"
    },
    {
      size: "100ml",
      flavor: "Floral",
      price: 1499,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601"
    },
    {
      size: "100ml",
      flavor: "Woody",
      price: 1599,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601"
    },
    {
      size: "150ml",
      flavor: "Citrus",
      price: 1799,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601"
    }
  ],

  features: [
    "Long Lasting Fragrance",
    "Premium Quality",
    "Luxury Perfume",
    "Travel Friendly Bottle",
    "Perfect for Daily Use"
  ],

  specs: [
    { label: "Fragrance Type", value: "Floral/Woody/Citrus" },
    { label: "Size Options", value: "50ml/100ml/150ml" },
    { label: "Long Lasting", value: "Yes" },
    { label: "Ideal For", value: "Men & Women" },
    { label: "Brand", value: "Skinn" }
  ]
}
,
{
  id: "156",
  title: "Yoga Mat",
  description: "Comfortable anti-slip yoga mat for home and gym workout.",
  price: 999,
  category: "Health",
  subCategory: "Fitness",
  image: "https://images.unsplash.com/photo-1591291621164-2c6367723315",
  rating: 4.6,

  brand: "Boldfit",
  material: "EVA Foam",
  thickness: "6mm",
  size: "183cm x 61cm",
  warranty: "6 Months Warranty",
  stock: 60,
  discount: 10,
  delivery: "3-5 Days Delivery",
  replacement: "7 Days Replacement",

  variants: [
    {
      material: "EVA Foam",
      thickness: "4mm",
      color: "Blue",
      price: 699,
      image: "https://images.unsplash.com/photo-1591291621164-2c6367723315"
    },
    {
      material: "EVA Foam",
      thickness: "6mm",
      color: "Black",
      price: 999,
      image: "https://images.unsplash.com/photo-1591291621164-2c6367723315"
    },
    {
      material: "TPE",
      thickness: "6mm",
      color: "Green",
      price: 1199,
      image: "https://images.unsplash.com/photo-1591291621164-2c6367723315"
    },
    {
      material: "Rubber",
      thickness: "8mm",
      color: "Purple",
      price: 1499,
      image: "https://images.unsplash.com/photo-1591291621164-2c6367723315"
    }
  ],

  features: [
    "Anti-slip Surface",
    "Soft Cushioning for Joints",
    "Lightweight & Portable",
    "Water & Sweat Resistant",
    "Suitable for Yoga, Gym, Pilates"
  ],

  specs: [
    { label: "Material", value: "EVA/TPE/Rubber" },
    { label: "Thickness", value: "4mm/6mm/8mm" },
    { label: "Size", value: "183cm x 61cm" },
    { label: "Anti-slip", value: "Yes" },
    { label: "Washable", value: "Yes" }
  ]
}











]