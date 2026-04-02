"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import ProductGrid from "@/components/ProductGrid"
import { products } from "@/data/products"

export default function CategoryPage({ params }: any) {
  const category = params?.category?.toLowerCase() || ""
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null)

  // Subcategory list for each category
  const subcategoryMap: any = {
    fashion: ["Men", "Women", "Children"],
    electronics: ["Mobile", "Laptop", "Accessories"],
    books: ["Fiction", "Education", "Comics"],
    beauty: ["Skincare", "Makeup", "Haircare"],
    sports: ["Indoor", "Outdoor", "Gym"],
    toys: ["Educational", "Action", "Puzzle"],
    home: ["Decor", "Lighting", "Storage"],
    furniture: ["Bed", "Chair", "Table"],
    kitchen: ["Cookware", "Appliances", "Storage"],
    food: ["Snacks", "Beverages", "Groceries"],
    health: ["Medicine", "Fitness", "Supplements"],
    instrument: ["Guitar", "Keyboard", "Drums"],
  }

  const filteredProducts = products.filter((p) => {
    const matchCategory = p.category.toLowerCase() === category
    const matchSubCategory = selectedSubCategory
      ? p.subCategory === selectedSubCategory
      : true

    return matchCategory && matchSubCategory
  })

  const getButtonStyle = (name: string, color: string) => {
    return `px-4 py-2 rounded-lg text-white ${
      selectedSubCategory === name ? color : "bg-gray-400"
    }`
  }

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 capitalize">{category}</h1>

        {/* 🔥 SUBCATEGORY BUTTONS */}
        {subcategoryMap[category] && (
          <div className="flex gap-4 mb-8 flex-wrap">
            {subcategoryMap[category].map((sub: string) => (
              <button
                key={sub}
                onClick={() => setSelectedSubCategory(sub)}
                className={getButtonStyle(sub, "bg-blue-600")}
              >
                {sub}
              </button>
            ))}

            <button
              onClick={() => setSelectedSubCategory(null)}
              className={`px-4 py-2 rounded-lg ${
                selectedSubCategory === null
                  ? "bg-gray-700 text-white"
                  : "bg-gray-300"
              }`}
            >
              All
            </button>
          </div>
        )}

        {/* PRODUCTS */}
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          <ProductGrid products={filteredProducts} />
        )}
      </div>
    </div>
  )
}























// import Navbar from "@/components/Navbar"
// import ProductGrid from "@/components/ProductGrid"
// import { products } from "@/data/products"

// type Props = {
//   params: { category: string }
// }

// export default function CategoryPage({ params }: Props) {
//   const category = params.category.toLowerCase()

//   const filteredProducts = products.filter(
//     (p) => p.category.toLowerCase() === category
//   )

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-7xl mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-6 capitalize">
//           {category} Products
//         </h1>

//         <ProductGrid products={filteredProducts} />
//       </div>
//     </div>
//   )
// }