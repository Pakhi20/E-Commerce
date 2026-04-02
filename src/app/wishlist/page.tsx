// "use client";

// import { useWishlist } from "@/context/WishlistContext";
// import { useCart } from "@/context/CartContext";
// import Image from "next/image";

// export default function WishlistPage() {
//   const { wishlist, removeFromWishlist } = useWishlist();
//   const { addToCart } = useCart();

//   const moveToCart = (item: any) => {
//     addToCart(item);
//     removeFromWishlist(item.id, item.selectedOptions);
//   };

//   return (
//     <div className="p-10 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

//       {wishlist.length === 0 ? (
//         <p>No items in wishlist</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {wishlist.map((item: any, index: number) => (
//             <div key={index} className="bg-white p-4 rounded-xl shadow">
//               <div className="relative w-full h-48 mb-4">
//                 <Image
//                   src={item.image }
//                   alt={item.title}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>

//               <h2 className="font-semibold">{item.title}</h2>
//               <p className="text-blue-600 font-bold">₹{item.price}</p>

//               {item.selectedOptions &&
//                 Object.entries(item.selectedOptions).map(([key, value]) => (
//                   <p key={key} className="text-sm text-gray-500">
//                     {key}: {String(value)}
//                   </p>
//                 ))}

//               {/* Buttons Side by Side */}
//               <div className="flex gap-3 mt-4">
//                 <button
//                   onClick={() => moveToCart(item)}
//                   className="flex-1 bg-green-600 text-white py-2 rounded-lg"
//                 >
//                   Add to Cart
//                 </button>

//                 <button
//                   onClick={() =>
//                     removeFromWishlist(item.id, item.selectedOptions)
//                   }
//                   className="flex-1 bg-red-500 text-white py-2 rounded-lg"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useRouter } from "next/navigation";
import { DeleteIcon, ShoppingBasketIcon } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const router = useRouter();

  // ✅ Move to Cart (with variant support)
  const moveToCart = (item: any) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      selectedOptions: item.selectedOptions,
    });

    removeFromWishlist(item.id, item.selectedOptions);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="bg-white p-10 rounded-xl shadow text-center">
          <p className="text-gray-500 text-lg">No items in wishlist ❤️</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlist.map((item: any, index: number) => (
            <div
              key={`${item.id}-${JSON.stringify(item.selectedOptions)}`}
              className="bg-white p-4 rounded-xl shadow"
            >
              {/* Image */}
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Title */}
              <h2 className="font-semibold text-lg">{item.title}</h2>

              {/* Price */}
              <p className="text-blue-600 font-bold mt-1">₹{item.price}</p>

              {/* ✅ Selected Variants */}
              {item.selectedOptions &&
                Object.keys(item.selectedOptions).length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {Object.entries(item.selectedOptions).map(
                      ([key, value]: any) =>
                        value ? (
                          <span
                            key={`${key}-${value}`}
                            className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                          >
                            {key}: {value}
                          </span>
                        ) : null
                    )}
                  </div>
                )}

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                {/* Move to Cart */}
                <button
                  onClick={() => moveToCart(item)}
                  className="flex flex-1 bg-green-600 text-white py-2 rounded-lg items-center justify-center gap-2"
                >
                  <ShoppingBasketIcon size={18} />
                  <span>Move to Cart</span>
                </button>

                {/* Remove */}
                <button
                  onClick={() =>
                    removeFromWishlist(item.id, item.selectedOptions)
                  }
                  className="flex flex-1 bg-red-500 text-white py-2 rounded-lg items-center justify-center gap-2"
                >
                  <DeleteIcon size={18} />
                  <span>Remove</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}




















































// "use client"

// import { useEffect, useState } from "react"
// import { products } from "@/data/products"
// import { Product } from "@/types/product"
// import Image from "next/image"
// import { useCart } from "@/context/CartContext"
// import { useRouter } from "next/navigation"
// import { DeleteIcon, Heart, ShoppingBasketIcon } from "lucide-react"

// export default function WishlistPage() {
//   const [wishlistProducts, setWishlistProducts] = useState<Product[]>([])
//   const { addToCart } = useCart()
//   const router = useRouter()

//   const loadWishlist = () => {
//     const wishlist = localStorage.getItem("wishlist")
//     if (wishlist) {
//       const ids = JSON.parse(wishlist)
//       const filtered = products.filter((p) => ids.includes(p.id))
//       setWishlistProducts(filtered)
//     } else {
//       setWishlistProducts([])
//     }
//   }

//   useEffect(() => {
//     loadWishlist()

//     // Navbar sync
//     window.addEventListener("wishlistUpdated", loadWishlist)

//     return () => {
//       window.removeEventListener("wishlistUpdated", loadWishlist)
//     }
//   }, [])

//   // Remove from wishlist
//   const removeFromWishlist = (id: string) => {
//     const wishlist = localStorage.getItem("wishlist")
//     if (!wishlist) return

//     const updated = JSON.parse(wishlist).filter((item: string) => item !== id)
//     localStorage.setItem("wishlist", JSON.stringify(updated))

//     setWishlistProducts((prev) => prev.filter((p) => p.id !== id))

//     // Update navbar count
//     window.dispatchEvent(new Event("wishlistUpdated"))
//   }

//   // Move to cart
//   const moveToCart = (product: Product) => {
//     addToCart(product)
//     removeFromWishlist(product.id)

//     // Update navbar cart + wishlist
//     window.dispatchEvent(new Event("wishlistUpdated"))

//     router.push("/cart")
//   }

//   return (
//     <div className="p-10 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

//       {wishlistProducts.length === 0 ? (
//         <p>No items in wishlist</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {wishlistProducts.map((product) => (
//             <div key={product.id} className="bg-white p-4 rounded-xl shadow">
//               <div className="relative w-full h-48 mb-4">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>

//               <h2 className="font-semibold">{product.title}</h2>
//               <p className="text-blue-600 font-bold">₹{product.price}</p>

//               <div className="flex gap-3 mt-3">
//                 <button
//                   onClick={() => moveToCart(product)}
                  
//                    className="flex flex-1 mt-6 w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-lg transition items-center justify-center gap-2"
//                 >
//                   <ShoppingBasketIcon size={18} />
//                  <span>Move to Cart</span> 
//                 </button>

//                 <button
//                   onClick={() => removeFromWishlist(product.id)}
                  
//                   className="flex flex-1 mt-6 w-full bg-red-500 text-white py-3 rounded-xl font-semibold text-lg transition items-center justify-center gap-2"
//                 >
//                   <DeleteIcon size ={18}/>
//                   <span>Remove</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }





























































