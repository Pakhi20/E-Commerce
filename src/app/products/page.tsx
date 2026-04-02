import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"
import Navbar from "@/components/Navbar"

export default function AllProductsPage() {
  return (
    <div>
      

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">All Products</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/productDetails/${product.id}`}
              className="border rounded-xl p-3 hover:shadow-lg hover:scale-105 transition duration-300 bg-white"
            >
              <div className="relative w-full h-40">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded"
                />
              </div>

              <h2 className="mt-2 font-semibold text-sm line-clamp-2">
                {product.title}
              </h2>

              <p className="text-green-600 font-bold">
                ₹{product.price}
              </p>

              <p className="text-xs text-gray-500">
                ⭐ {product.rating}
              </p>

              <p className="text-xs text-gray-400 mt-1 capitalize">
                {product.category}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}