"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();

  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
    clearCart,
  } = useCart();

  const { addToWishlist } = useWishlist();

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");
  const [isApplied, setIsApplied] = useState(false);

  const coupons: Record<string, number> = {
    FLIP10: 0.1,
    SAVE20: 0.2,
    NEWUSER: 0.15,
  };

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (coupons[code]) {
      const discountValue = totalPrice * coupons[code];
      setDiscount(discountValue);
      setMessage(`✅ ${coupons[code] * 100}% discount applied`);
      setIsApplied(true);
    } else {
      setDiscount(0);
      setMessage("❌ Invalid coupon code");
      setIsApplied(false);
    }
  };

  const removeCoupon = () => {
    setCoupon("");
    setDiscount(0);
    setIsApplied(false);
    setMessage("Coupon removed");
  };

  const finalPrice = totalPrice - discount;

  // const moveToWishlist = (item: any) => {
  //   addToWishlist(item);
  //   removeFromCart(item.id, item.selectedOptions || {});
  // };

const moveToWishlist = (item: any) => {
  addToWishlist({
    id: item.id,
    title: item.title,
    price: item.price,
    image: item.image,
    selectedOptions: item.selectedOptions,
  });

  removeFromCart(item.id, item.selectedOptions);
};



  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">
            My Cart ({totalItems})
          </h1>

          {cart.length === 0 && (
            <div className="bg-white p-10 rounded-xl shadow text-center">
              <p className="text-gray-700 mb-4 text-lg">
                Your cart is empty 🛒
              </p>
              <button
                onClick={() => router.push("/")}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg"
              >
                Continue Shopping
              </button>
            </div>
          )}

          {cart.map((item: any) => {
            return (
              <div
                key={`${item.id}-${JSON.stringify(item.selectedOptions)}`}
                className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
              >
                <div className="flex gap-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="font-semibold text-lg">{item.title}</h2>

                    {/* Selected Options */}
                    {item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {Object.entries(item.selectedOptions).map(([key, value]) =>
                          value ? (
                            <span
                              key={`${key}-${value}`}
                              className="px-2 py-1 bg-gray-200 text-black-700 text-xs rounded-full"
                            >
                              {value && `${key}: ${value}`}
                            </span>
                          ) : null
                        )}
                      </div>
                    )}

                    <p className="text-blue-600 font-bold mt-1">
                      ₹{item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                         onClick={() => decreaseQty(item.id, item.selectedOptions)}
                        
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        -
                      </button>

                      <span className="font-medium">{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQty(item.id, item.selectedOptions || {})
                        }
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove + Wishlist */}
                    <div className="flex gap-4 mt-2">
                      <button
                        onClick={() =>
                          removeFromCart(item.id, item.selectedOptions || {})
                        }
                        className="text-red-500 text-sm hover:underline"
                      >
                        Remove
                      </button>

                      <button
                        onClick={() => moveToWishlist(item)}
                        className="text-pink-500 text-sm hover:underline"
                      >
                        Move to Wishlist
                      </button>
                    </div>
                  </div>
                </div>

                <div className="font-semibold text-lg">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 rounded-xl shadow h-fit sticky top-10">
          <h2 className="text-xl font-semibold mb-4">Price Details</h2>

          <div className="flex justify-between mb-2">
            <span>Price ({totalItems} items)</span>
            <span>₹{totalPrice}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-green-600 mb-2">
              <span>Discount</span>
              <span>-₹{discount}</span>
            </div>
          )}

          <div className="flex justify-between text-green-600 mb-2">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{finalPrice}</span>
          </div>

          {/* Coupon */}
          <div className="mt-6">
            <label className="block mb-2 font-medium">Apply Coupon</label>
            <div className="flex gap-2">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter code"
                className="flex-1 border px-3 py-2 rounded-lg"
              />

              <button
                onClick={isApplied ? removeCoupon : applyCoupon}
                className="bg-pink-500 text-white px-4 rounded-lg"
              >
                {isApplied ? "Remove" : "Apply"}
              </button>
            </div>

            {message && <p className="text-sm mt-2">{message}</p>}
          </div>

          <button
            onClick={() => router.push("/checkout")}
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg"
          >
            Place Order
          </button>

          <button
            onClick={clearCart}
            className="w-full mt-3 text-sm text-red-500 hover:underline"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}























































































































































































































































































































































































// "use client"

// import { useState } from "react"
// import { useCart } from "@/context/CartContext"
// import { useRouter } from "next/navigation"
// import { useOrders } from "@/context/OrderContext"


// const { placeOrder } = useOrders()
// const { cart, clearCart } = useCart()

// const handleOrder = () => {
//   placeOrder(cart)
//   clearCart()
//   alert("Order placed successfully")
// }

// export default function CartPage() {
//   const router = useRouter()

//   const {
//     cart,
//     removeFromCart,
//     increaseQty,
//     decreaseQty,
//     totalPrice,
//     clearCart,
//   } = useCart()

//   const [coupon, setCoupon] = useState("")
//   const [discount, setDiscount] = useState(0)
//   const [message, setMessage] = useState("")
//   const [isCouponApplied, setIsCouponApplied] = useState(false)

//   const coupons: any = {
//     FLIP10: 0.1,
//     SAVE20: 0.2,
//     NEWUSER: 0.15,
//   }

//   const applyCoupon = () => {

//     const code = coupon.toUpperCase()

//     if (coupons[code]) {

//       const discountAmount = totalPrice * coupons[code]

//       setDiscount(discountAmount)

//       setIsCouponApplied(true)

//       setMessage(`Coupon Applied! ${coupons[code] * 100}% discount`)

//     } else {

//       setDiscount(0)
//       setMessage("Invalid Coupon Code")

//     }

//   }

//   const removeCoupon = () => {

//     setCoupon("")
//     setDiscount(0)
//     setIsCouponApplied(false)
//     setMessage("Coupon removed")

//   }

//   const handleOrder = () => {

//     if (cart.length === 0) {
//       alert("Cart is empty")
//       return
//     }

//     alert("✅ Order placed successfully!")
//     clearCart()

//   }

//   return (

//     <div className="bg-gray-100 min-h-screen py-10">

//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

      

//         <div className="md:col-span-2 space-y-6">

//           <h1 className="text-3xl font-bold">
//             My Cart ({cart.length})
//           </h1>

//           {cart.length === 0 && (
//             <p className="text-gray-600">Your cart is empty.</p>
//           )}

//           {cart.map((item) => (

//             <div
//               key={item.id}
//               className="bg-white p-6 rounded-xl shadow flex justify-between"
//             >

//               <div className="flex gap-6">

//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-28 h-28 object-cover rounded"
//                 />

//                 <div>

//                   <h2 className="text-lg font-semibold">
//                     {item.title}
//                   </h2>

//                   <p className="text-gray-500 text-sm">
//                     Seller: Flipkart
//                   </p>

//                   <p className="text-blue-600 font-bold mt-1">
//                     ₹{item.price}
//                   </p>

//                   <p className="text-green-600 text-sm">
//                     Free Delivery
//                   </p>

                  

//                   <div className="flex items-center gap-3 mt-3">

//                     <button
//                       onClick={() => decreaseQty(item.id)}
//                       className="bg-gray-200 px-3 py-1 rounded"
//                     >
//                       -
//                     </button>

//                     <span className="font-medium">
//                       {item.quantity}
//                     </span>

//                     <button
//                       onClick={() => increaseQty(item.id)}
//                       className="bg-gray-200 px-3 py-1 rounded"
//                     >
//                       +
//                     </button>

//                   </div>

//                   {/* ACTION BUTTONS */}

//                 <div className="flex gap-5 mt-2 text-sm">

//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="text-red-500 font-medium"
//                     >
//                       Remove
//                     </button>

//                     <button className="text-blue-600 font-medium">
//                       Save for later
//                     </button>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

   

//         <div className="bg-white p-6 rounded-xl shadow h-fit">

//           <h2 className="text-xl font-semibold mb-4">
//             Price Details
//           </h2>

//           <div className="flex justify-between mb-2">
//             <span>Price ({cart.length} items)</span>
//             <span>₹{totalPrice}</span>
//           </div>

//           {discount > 0 && (

//             <div className="flex justify-between text-green-600 mb-2">
//               <span>Discount</span>
//               <span>-₹{discount}</span>
//             </div>

//           )}

//           <div className="flex justify-between mb-2 text-green-600">
//             <span>Delivery Charges</span>
//             <span>Free</span>
//           </div>

//           <hr className="my-3"/>

//           <div className="flex justify-between text-lg font-bold">
//             <span>Total Amount</span>
//             <span>₹{totalPrice - discount}</span>
//           </div>

   

//           <div className="mt-6">

//             <label className="block mb-2 font-medium">
//               Apply Coupon
//             </label>

//             <div className="flex gap-3">

//               <input
//                 type="text"
//                 value={coupon}
//                 onChange={(e) => setCoupon(e.target.value)}
//                 placeholder="Enter Coupon Code"
//                 className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />

//               <button
//                 onClick={isCouponApplied ? removeCoupon : applyCoupon}
//                 className="bg-pink-500 text-white px-4 py-1 rounded-lg hover:bg-pink-700"
//               >
//                 {isCouponApplied ? "Remove" : "Apply"}
//               </button>

//             </div>

//             {message && (
//               <p className="mt-2 text-sm text-green-600">
//                 {message}
//               </p>
//             )}

//           </div>



//           <button
//   onClick={() => router.push("/checkout")}
//   className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
// >
//   Place Order
// </button>


//         </div>

//       </div>

//     </div>

//   )

// }












