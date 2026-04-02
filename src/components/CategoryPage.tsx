"use client";

import { useState, useEffect } from "react";
import { products } from "@/data/products";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";
import LoginModal from "@/components/LoginModal";
import { Heart, ShoppingBasketIcon } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

interface CategoryPageProps {
  title: string;
  category: string;
}

export default function CategoryPage({ title, category }: CategoryPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const urlSub = searchParams.get("sub")
    ? decodeURIComponent(searchParams.get("sub") as string)
    : null;

  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    urlSub
  );
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [pendingProduct, setPendingProduct] = useState<Product | null>(null);

  const routeCategory = category.toLowerCase();

  useEffect(() => {
    if (selectedSubCategory) {
      const encodedSub = encodeURIComponent(selectedSubCategory);
      router.replace(`/products/${routeCategory}?sub=${encodedSub}`);
    } else {
      router.replace(`/products/${routeCategory}`);
    }
  }, [selectedSubCategory, routeCategory, router]);

  // Toggle Wishlist
  const toggleWishlist = (product: any) => {
    const loginStatus =
      localStorage.getItem("isLoggedIn") ||
      sessionStorage.getItem("isLoggedIn");

    if (loginStatus !== "true") {
      setPendingProduct(product);
      setShowLoginModal(true);
      return;
    }

    const exists = wishlist.some(
      (item: any) =>
        item.id === product.id &&
        JSON.stringify(item.selectedOptions) ===
          JSON.stringify(product.selectedOptions)
    );

    if (exists) {
      removeFromWishlist(product.id, product.selectedOptions);
    } else {
      addToWishlist({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        selectedOptions: product.selectedOptions,
      });
    }
  };

  // Add To Cart
  const handleAddToCart = (product: Product) => {
    const loginStatus =
      localStorage.getItem("isLoggedIn") ||
      sessionStorage.getItem("isLoggedIn");

    if (loginStatus !== "true") {
      setPendingProduct(product);
      setShowLoginModal(true);
      return;
    }

    addToCart(product);
    router.push("/cart");
  };

  const handleLoginSuccess = () => {
    if (pendingProduct) {
      addToCart(pendingProduct);
      router.push("/cart");
      setPendingProduct(null);
    }
    setShowLoginModal(false);
  };

  // Filter Products
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      product.category.toLowerCase() === category.toLowerCase();

    if (!categoryMatch) return false;

    if (selectedSubCategory) {
      return (
        product.subCategory?.toLowerCase() ===
        selectedSubCategory.toLowerCase()
      );
    }

    return true;
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>

        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.some(
                (item: any) => item.id === product.id
              );

              return (
                <div
                  key={product.id}
                  onClick={() =>
                    router.push(`/productDetails/${product.id}`)
                  }
                  className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                >
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-gray-500 text-sm">
                    {product.description}
                  </p>
                  <p className="font-bold text-blue-600 mt-2">
                    ₹{product.price}
                  </p>
                  <p className="text-yellow-500">⭐ {product.rating}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="flex flex-1 bg-blue-600 text-white py-2 rounded-lg justify-center gap-2"
                    >
                      <ShoppingBasketIcon size={18} />
                      <span>Add to Cart</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product);
                      }}
                      className="p-2 border rounded-lg"
                    >
                      <Heart
                        size={22}
                        className={
                          isWishlisted
                            ? "text-red-500 fill-red-500"
                            : "text-gray-500"
                        }
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={handleLoginSuccess}
      />
    </div>
  );
}






















// "use client"

// import { useState, useEffect } from "react"
// import { products } from "@/data/products"
// import Image from "next/image"
// import { useRouter, useSearchParams } from "next/navigation"
// import { useCart } from "@/context/CartContext"
// import { Product } from "@/types/product"
// import LoginModal from "@/components/LoginModal"
// import { Heart, ShoppingBasketIcon } from "lucide-react"
// import { useWishlist } from "@/context/WishlistContext";

// interface CategoryPageProps {
//   title: string
//   category: string
// }

// export default function CategoryPage({ title, category }: CategoryPageProps) {
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const { addToCart } = useCart()
//   const { addToWishlist } = useWishlist();

//   // const urlSub = searchParams.get("sub")



// const urlSub = searchParams.get("sub")
//   ? decodeURIComponent(searchParams.get("sub") as string)
//   : null







//   const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(urlSub)
//   const [showLoginModal, setShowLoginModal] = useState(false)
//   const [pendingProduct, setPendingProduct] = useState<Product | null>(null)
//   const [wishlist, setWishlist] = useState<string[]>([])

//   // Sync URL subcategory
//   useEffect(() => {
//     setSelectedSubCategory(urlSub)
//   }, [urlSub])

//   const routeCategory = category.toLowerCase()












//   // useEffect(() => {
//   //   if (selectedSubCategory) {
//   //     router.replace(`/products/${routeCategory}?sub=${selectedSubCategory}`)
//   //   } else {
//   //     router.replace(`/products/${routeCategory}`)
//   //   }
//   // }, [selectedSubCategory, routeCategory, router])

// useEffect(() => {
//   if (selectedSubCategory) {
//     const encodedSub = encodeURIComponent(selectedSubCategory)
//     router.replace(`/products/${routeCategory}?sub=${encodedSub}`)
//   } else {
//     router.replace(`/products/${routeCategory}`)
//   }
// }, [selectedSubCategory, routeCategory, router])











//   // Load Wishlist
//   useEffect(() => {
//     const storedWishlist = localStorage.getItem("wishlist")
//     if (storedWishlist) {
//       console.log(storedWishlist)
//       setWishlist(JSON.parse(storedWishlist))
      
//     }
//   }, [])

















//   // Toggle Wishlist
//   const toggleWishlist = (product: any) => {
    
//     const loginStatus =
//       localStorage.getItem("isLoggedIn") ||
//       sessionStorage.getItem("isLoggedIn")
 
//     if (loginStatus !== "true") {
//       setPendingProduct(product)
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
 

// // Navbar update
// // ✅ CORRECT
// useEffect(() => {
//   window.dispatchEvent(new Event("wishlistUpdated"))
// }, [wishlist])

//   // Add To Cart
//   const handleAddToCart = (product: Product) => {
//     const loginStatus =
//       localStorage.getItem("isLoggedIn") ||
//       sessionStorage.getItem("isLoggedIn")

//     if (loginStatus !== "true") {
//       setPendingProduct(product)
//       setShowLoginModal(true)
//       return
//     }

//     addToCart(product)
//     router.push("/cart")
//   }

//   const handleLoginSuccess = () => {
//     if (pendingProduct) {
//       addToCart(pendingProduct)
//       router.push("/cart")
//       setPendingProduct(null)
//     }
//     setShowLoginModal(false)
//   }

//   // Subcategory Map
//   const subcategoryMap: any = {
//     fashion: ["Men", "Women", "Children"],
//     electronics: ["Mobile", "Camera", "Laptop", "Mobile Accessories"],
//     books: ["Self Development", "Education", "Comics", "Story", "Business"],
//     beauty: ["Skin care", "Makeup", "Hair care"],
//     sports: ["Indoor", "Outdoor", "Gym"],
//     toys: ["Educational", "Action", "Puzzle"],
//     home: ["Decor", "Lighting", "Storage"],
//     furniture: ["Bed", "Chair", "Table"],
//     kitchen: ["Cookware", "Tools", "Appliances", "Storage"],
//     food: ["Snacks", "Beverages", "Groceries"],
//     health: ["Medicine", "Fitness", "Supplements"],
//     instrument: ["Guitar", "Keyboard", "Drums", "Music", "Accessories"],
//   }

//   // Filter Products
//   const filteredProducts = products.filter((product) => {
//     const categoryMatch =
//       product.category.toLowerCase() === category.toLowerCase()

//     if (!categoryMatch) return false

//     if (selectedSubCategory) {
//       return (
//         product.subCategory?.toLowerCase() ===
//         selectedSubCategory.toLowerCase()
//       )
//     }

//     return true
//   })

//   const getButtonStyle = (name: string, color: string) => {
//     return `px-4 py-2 rounded-lg ${
//       selectedSubCategory === name
//         ? `${color} text-white`
//         : "bg-gray-200 text-black"
//     }`
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="px-8 py-10">
//         <h1 className="text-3xl font-bold mb-6">{title}</h1>

//         {/* Subcategory Buttons */}
//         {subcategoryMap[routeCategory] && (
//           <div className="flex gap-4 mb-8 flex-wrap">
//             {subcategoryMap[routeCategory].map((sub: string) => (
//               <button
//                 key={sub}
//                 onClick={() => setSelectedSubCategory(sub)}
//                 className={getButtonStyle(sub, "bg-blue-600")}
//               >
//                 {sub}
//               </button>
//             ))}

//             <button
//               onClick={() => setSelectedSubCategory(null)}
//               className={`px-4 py-2 rounded-lg ${
//                 selectedSubCategory === null
//                   ? "bg-gray-700 text-white"
//                   : "bg-gray-300"
//               }`}
//             >
//               All
//             </button>
//           </div>
//         )}

//         {/* Product Grid */}
//         {filteredProducts.length === 0 ? (
//           <p className="text-gray-500">No products found.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 onClick={() => router.push(`/productDetails/${product.id}`)}
//                 className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
//               >
//                 <div className="relative w-full h-48 mb-4">
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     fill
//                     className="object-cover rounded-lg"
//                   />
//                 </div>

//                 <h3 className="font-semibold">{product.title}</h3>
//                 <p className="text-gray-500 text-sm">{product.description}</p>
//                 <p className="font-bold text-blue-600 mt-2">₹{product.price}</p>
//                 <p className="text-yellow-500">⭐ {product.rating}</p>

//                 {/* Add to Cart + Wishlist */}
//                 <div className="flex items-center gap-3 mt-3">
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation()
//                       handleAddToCart(product)
//                     }}
//                     className=" flex flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 justify-center gap-2"
//                   >
//                     <ShoppingBasketIcon size={18} /> <span>Add to Cart</span>
//                   </button>

//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation()
//                       toggleWishlist(product)
//                     }}
//                     className="p-2 border rounded-lg hover:bg-gray-100"
//                   >
//                     <Heart
//                       size={22}
//                       className={
//                         wishlist.includes(product.id)
//                           ? "text-red-500 fill-red-500"
//                           : "text-gray-500"
//                       }
//                     />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Login Modal */}
//       <LoginModal
//         isOpen={showLoginModal}
//         onClose={() => setShowLoginModal(false)}
//         onSuccess={handleLoginSuccess}
//       />
//     </div>
//   )
// }





















