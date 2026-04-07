"use client"

import { Suspense } from "react"
import CheckoutContent from "@/context/CheckoutContent"

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}



// "use client"

// import { useState, useEffect } from "react"
// import { useRouter, useSearchParams } from "next/navigation"
// import { useCart } from "@/context/CartContext"

// interface CartItem {
//   id: string | number
//   title: string
//   image: string
//   price: number
//   quantity: number
// }

// interface CartContextType {
//   cart: CartItem[]
//   totalPrice: number
//   clearCart: () => void
// }

// export default function CheckoutPage() {

//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const type = searchParams.get("type")

//   const { cart, totalPrice, clearCart } = useCart() as CartContextType

//   const [items, setItems] = useState<CartItem[]>([])
//   const [finalPrice, setFinalPrice] = useState(0)

//   const [name, setName] = useState("")
//   const [phone, setPhone] = useState("")
//   const [pincode, setPincode] = useState("")
//   const [city, setCity] = useState("")
//   const [state, setState] = useState("")
//   const [address, setAddress] = useState("")

//   // 🔥 Decide Buy Now or Cart
  
//   useEffect(() => {
//     if (type === "buynow") {
//       const buyNowItem = localStorage.getItem("buyNowItem")
//       if (buyNowItem) {
//         const parsedItem = JSON.parse(buyNowItem)
//         setItems([parsedItem])
//         setFinalPrice(parsedItem.price * parsedItem.quantity)
//       }
//     } else {
//       setItems(cart)
//       setFinalPrice(totalPrice)
//     }
//   }, [type, cart, totalPrice])

//   const placeOrder = () => {

//     const nameRegex = /^[A-Za-z\s]+$/
//     const phoneRegex = /^[0-9]{10}$/
//     const pinRegex = /^[0-9]{6}$/

//     if (!nameRegex.test(name)) {
//       alert("Name should contain only letters")
//       return
//     }

//     if (!phoneRegex.test(phone)) {
//       alert("Phone number must be exactly 10 digits")
//       return
//     }

//     if (!pinRegex.test(pincode)) {
//       alert("Pincode must be exactly 6 digits")
//       return
//     }

//     if (!city || !state || !address) {
//       alert("Please fill all fields")
//       return
//     }

//     alert("✅ Order placed successfully!")

//     if (type !== "buynow") {
//       clearCart()
//     }

//     localStorage.removeItem("buyNowItem")

//     router.push("/")
//   }

//   return (

//     <div className="bg-gray-100 min-h-screen py-10">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

//         <div className="md:col-span-2 bg-white p-8 rounded-xl shadow">
//           <h1 className="text-2xl font-bold mb-6">Delivery Address</h1>

//           <div className="grid grid-cols-2 gap-4">
//             <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" />

//             <div className="flex">
//               <span className="bg-gray-200 px-3 flex items-center border border-r-0 rounded-l">+91</span>
//               <input type="text" placeholder="Phone Number" value={phone}
//                 onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
//                 className="border p-2 rounded-r w-full"
//               />
//             </div>

//             <input type="text" placeholder="Pincode" value={pincode}
//               onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
//               className="border p-2 rounded"
//             />

//             <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="border p-2 rounded" />

//             <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} className="border p-2 rounded col-span-2" />
//           </div>

//           <textarea
//             placeholder="Full Address (House No, Street, Area)"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             className="w-full border p-2 rounded mt-4"
//           />
//         </div>

//         {/* ORDER SUMMARY */}
//         <div className="bg-white p-6 rounded-xl shadow h-fit">
//           <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

//           <div className="space-y-4">
//             {items.map((item, index) => (
//               <div key={index} className="flex gap-4 items-center border-b pb-3">
//                 <img src={item.image} className="w-16 h-16 object-cover rounded" />
//                 <div className="flex-1">
//                   <p className="text-sm font-medium">{item.title}</p>
//                   <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
//                 </div>
//                 <p className="font-semibold">₹{item.price * item.quantity}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 space-y-2">
//             <div className="flex justify-between">
//               <span>Price ({items.length} items)</span>
//               <span>₹{finalPrice}</span>
//             </div>

//             <div className="flex justify-between text-green-600">
//               <span>Delivery Charges</span>
//               <span>Free</span>
//             </div>

//             <hr />

//             <div className="flex justify-between font-bold text-lg">
//               <span>Total Amount</span>
//               <span>₹{finalPrice}</span>
//             </div>
//           </div>

//           <button
//             onClick={placeOrder}
//             className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
//           >
//             Place Order
//           </button>
//         </div>

//       </div>
//     </div>
//   )
// }





























































































































































