// import Navbar from "@/components/Navbar"
// import Link from "next/link"

// export default function MenPage() {
//   return (
//     <div>
//       <Navbar />

//       <div className="p-10 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Men's Fashion</h1>

//         <p className="text-gray-600 mb-8">
//           Explore clothing, footwear and accessories for men.
//         </p>

//         <Link
//           href="/products/fashion"
//           className="text-blue-600 hover:underline"
//         >
//           ← Back to Fashion
//         </Link>
//       </div>
//     </div>
//   )
// }

import CategoryPage from "@/components/CategoryPage"

export default function MenPage() {
  return (
    <CategoryPage
      title="Men's Fashion"
      category="Fashion"
      subCategory="Men"
    />
  )
}