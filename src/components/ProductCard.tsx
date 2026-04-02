"use client"

import Image from "next/image"
import { Product } from "@/types/product"
import { useCart } from "@/context/CartContext"
import { useWishlist } from "@/context/WishlistContext"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Heart } from "lucide-react"


const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart()
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const router = useRouter()

  const [isWishlisted, setIsWishlisted] = useState(false)

  // Check if product already in wishlist
  useEffect(() => {
    const exists = wishlist.find((item: any) => item.id === product.id)
    setIsWishlisted(!!exists)
  }, [wishlist, product.id])

  // Toggle wishlist
const toggleWishlist = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    alert("Please login first");
    return;
  }

  const item = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    selectedOptions: {},
  };

  const exists = wishlist.find(
    (w: any) =>
      w.id === product.id &&
      JSON.stringify(w.selectedOptions || {}) === JSON.stringify({})
  );

  if (exists) {
    removeFromWishlist(product.id, {});
  } else {
    addToWishlist(item);
  }
};


  // Add to cart
  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (isLoggedIn !== "true") {
      alert("Please login first")
      return
    }

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      selectedOptions: {},
    })

    router.push("/cart")
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition relative">

      {/* Wishlist Button */}
      <button onClick={toggleWishlist} className="absolute top-3 right-3">
        <Heart
          size={22}
          className={
            isWishlisted
              ? "text-red-500 fill-red-500"
              : "text-gray-400"
          }
        />
      </button>

      {/* Image */}
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={200}
        className="h-40 w-full object-contain mb-4 cursor-pointer"
        onClick={() => router.push(`/products/${product.id}`)}
      />

      {/* Info */}
      <h2 className="font-semibold text-lg">{product.title}</h2>
      <p className="text-gray-500 text-sm mb-2">{product.category}</p>
      <p className="text-green-600 font-bold mb-3">₹{product.price}</p>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
      >
        Add to Cart
      </button>
    </div>
  )
}



// "use client"

// import Image from "next/image"
// import { Product } from "@/types/product"
// import { useCart } from "@/context/CartContext"
// import { useRouter } from "next/navigation"
// import { useState, useEffect } from "react"
// import { Heart } from "lucide-react"

// interface Props {
//   product: Product
// }

// export default function ProductCard({ product }: Props) {
//   const { addToCart } = useCart()
//   const router = useRouter()

//   const [showLoginModal, setShowLoginModal] = useState(false)
//   const [wishlist, setWishlist] = useState<string[]>([])

//   useEffect(() => {
//     const storedWishlist = localStorage.getItem("wishlist")
//     if (storedWishlist) {
//       setWishlist(JSON.parse(storedWishlist))
//     }
//   }, [])

//   const toggleWishlist = () => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn")

//     if (isLoggedIn !== "true") {
//       setShowLoginModal(true)
//       return
//     }

//     let updatedWishlist = [...wishlist]

//     if (wishlist.includes(product.id)) {
//       updatedWishlist = updatedWishlist.filter(id => id !== product.id)
//     } else {
//       updatedWishlist.push(product.id)
//     }

//     setWishlist(updatedWishlist)
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
//   }

//   const handleAddToCart = () => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn")

//     if (isLoggedIn !== "true") {
//       setShowLoginModal(true)
//       return
//     }

//     addToCart(product)
//     router.push("/cart")
//   }

//   return (
//     <>
//       <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition relative">

//         <button onClick={toggleWishlist} className="absolute top-3 right-3">
//           <Heart
//             size={22}
//             className={
//               wishlist.includes(product.id)
//                 ? "text-red-500 fill-red-500"
//                 : "text-gray-400"
//             }
//           />
//         </button>

//         <Image
//           src={product.image}
//           alt={product.title}
//           width={300}
//           height={200}
//           className="h-40 w-full object-contain mb-4 cursor-pointer"
//           onClick={() => router.push(`/products/${product.id}`)}
//         />

//         <h2 className="font-semibold text-lg">{product.title}</h2>
//         <p className="text-gray-500 text-sm mb-2">{product.category}</p>
//         <p className="text-green-600 font-bold mb-3">₹{product.price}</p>

//         <button
//           onClick={handleAddToCart}
//           className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </>
//   )
// }






































































































































































































































































// "use client"

// import Image from "next/image"
// import { Product } from "@/types/product"
// import { useCart } from "@/context/CartContext"
// import { useRouter } from "next/navigation"
// import { useState, useEffect } from "react"
// import { Heart } from "lucide-react"

// interface Props {
//   product: Product
// }

// export default function ProductCard({ product }: Props) {

//   const { addToCart } = useCart()
//   const router = useRouter()

//   const [showLoginModal, setShowLoginModal] = useState(false)
//   const [wishlist, setWishlist] = useState<string[]>([])

//   useEffect(() => {
//     const storedWishlist = localStorage.getItem("wishlist")
//     if (storedWishlist) {
//       setWishlist(JSON.parse(storedWishlist))
//     }
//   }, [])

//   const toggleWishlist = () => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn")

//     if (isLoggedIn !== "true") {
//       setShowLoginModal(true)
//       return
//     }

//     let updatedWishlist = [...wishlist]

//     if (wishlist.includes(product.id)) {
//       updatedWishlist = updatedWishlist.filter(id => id !== product.id)
//     } else {
//       updatedWishlist.push(product.id)
//     }

//     setWishlist(updatedWishlist)
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
//   }

//   const handleAddToCart = () => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn")

//     if (isLoggedIn !== "true") {
//       setShowLoginModal(true)
//       return
//     }

//     addToCart(product)
//     router.push("/cart")
//   }

//   return (
//     <>
//       <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition relative">

//         {/* ❤️ Wishlist */}
//         <button
//           onClick={toggleWishlist}
//           className="absolute top-3 right-3"
//         >
//           <Heart
//             size={22}
//             className={
//               wishlist.includes(product.id)
//                 ? "text-red-500 fill-red-500"
//                 : "text-gray-400"
//             }
//           />
//         </button>

//         <Image
//           src={product.image}
//           alt={product.title}
//           width={300}
//           height={200}
//           className="h-40 w-full object-contain mb-4 cursor-pointer"
//           onClick={() => router.push(`/productDetails/${product.id}`)}
//         />

//         <h2 className="font-semibold text-lg">{product.title}</h2>
//         <p className="text-gray-500 text-sm mb-2">{product.category}</p>
//         <p className="text-green-600 font-bold mb-3">₹{product.price}</p>

//         <button
//           onClick={handleAddToCart}
//           className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
//         >
//           Add to Cart
//         </button>
//       </div>

//       {/* Login Modal */}
//       {showLoginModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
//             <h2 className="text-xl font-bold mb-3">Login Required</h2>
//             <p className="text-gray-600 mb-5">Please login first.</p>

//             <div className="flex justify-center gap-3">
//               <button
//                 onClick={() => router.push("/login")}
//                 className="bg-blue-600 text-white px-4 py-2 rounded"
//               >
//                 Login
//               </button>

//               <button
//                 onClick={() => router.push("/signup")}
//                 className="bg-green-600 text-white px-4 py-2 rounded"
//               >
//                 Signup
//               </button>
//             </div>

//             <button
//               onClick={() => setShowLoginModal(false)}
//               className="mt-4 text-gray-500 text-sm"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }









