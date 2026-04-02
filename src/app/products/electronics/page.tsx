import CategoryPage from "@/components/CategoryPage"
import {products} from "@/data/products"

export default function ElectronicsPage() {
  return (
    <CategoryPage
      title="Electronics "
      category="Electronics"
    />
  )
}


// "use client"

// import ProductGrid from "@/components/ProductGrid"
// import { products } from "@/data/products"


// export default function ElectronicsPage() {
//   const electronicsProducts = products.filter(
//     (product) => product.category === "Electronics"
//   )

//   return (
//     <div>

//       <div className="p-10">
//         <h1 className="text-3xl font-bold mb-6">Electronics</h1>
//         <p className="text-gray-600 mb-8">
//           Browse the latest electronic gadgets and appliances.
//         </p>

//         <ProductGrid products={electronicsProducts} />
//       </div>
//     </div>
//   )
// }