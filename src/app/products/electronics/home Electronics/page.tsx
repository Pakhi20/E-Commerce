// import Navbar from "@/components/Navbar"

// export default function HomeElectronicsPage() {
//   return (
//     <div>
//       <Navbar />
//       <div className="p-10">
//         <h1 className="text-3xl font-bold">Home Electronics</h1>
//         <p className="mt-4 text-gray-600">
//           TVs, refrigerators, washing machines and more.
//         </p>
//       </div>
//     </div>
//   )
// }

import CategoryPage from "@/components/CategoryPage"

export default function HomeElectronicsPage() {
  return (
    <CategoryPage
      title="Home Electronics"
      category="Electronics"
      subCategory="Home Electronics"
    />
  )
}