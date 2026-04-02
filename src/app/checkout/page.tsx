"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"

interface CartItem {
  id: string | number
  title: string
  image: string
  price: number
  quantity: number
}

interface DeliveryFormState {
  name: string
  phone: string
  pincode: string
  city: string
  state: string
  address: string
}

interface CartContextType {
  cart: CartItem[]
  totalPrice: number
  clearCart: () => void
}

export default function CheckoutPage() {

  const router = useRouter()
  const { cart, totalPrice, clearCart } = useCart() as CartContextType

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [pincode, setPincode] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [address, setAddress] = useState("")

  const placeOrder = () => {

    const nameRegex = /^[A-Za-z\s]+$/
    const phoneRegex = /^[0-9]{10}$/
    const pinRegex = /^[0-9]{6}$/

    if (!nameRegex.test(name)) {
      alert("Name should contain only letters")
      return
    }

    if (!phoneRegex.test(phone)) {
      alert("Phone number must be exactly 10 digits")
      return
    }

    if (!pinRegex.test(pincode)) {
      alert("Pincode must be exactly 6 digits")
      return
    }

    if (!city || !state || !address) {
      alert("Please fill all fields")
      return
    }

    alert("✅ Order placed successfully!")

    clearCart()
    router.push("/")
  }

  return (

    <div className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* ADDRESS FORM */}

        <div className="md:col-span-2 bg-white p-8 rounded-xl shadow">

          <h1 className="text-2xl font-bold mb-6">
            Delivery Address
          </h1>

          <div className="grid grid-cols-2 gap-4">

            {/* NAME */}

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded"
            />

            {/* PHONE */}

            <div className="flex">

              <span className="bg-gray-200 px-3 flex items-center border border-r-0 rounded-l">
                +91
              </span>

              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                className="border p-2 rounded-r w-full"
              />

            </div>

            {/* PINCODE */}

            <input
              type="text"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) =>
                setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              className="border p-2 rounded"
            />

            {/* CITY */}

            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border p-2 rounded"
            />

            {/* STATE */}

            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="border p-2 rounded col-span-2"
            />

          </div>

          {/* ADDRESS */}

          <textarea
            placeholder="Full Address (House No, Street, Area)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-2 rounded mt-4"
          />

        </div>

        {/* ORDER SUMMARY */}

        <div className="bg-white p-6 rounded-xl shadow h-fit">

          <h2 className="text-xl font-semibold mb-4">
            Order Summary
          </h2>

          {/* CART ITEMS */}

          <div className="space-y-4">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex gap-4 items-center border-b pb-3"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />

                <div className="flex-1">

                  <p className="text-sm font-medium">
                    {item.title}
                  </p>

                  <p className="text-gray-500 text-sm">
                    Qty: {item.quantity}
                  </p>

                </div>

                <p className="font-semibold">
                  ₹{item.price * item.quantity}
                </p>

              </div>

            ))}

          </div>

          {/* PRICE DETAILS */}

          <div className="mt-6 space-y-2">

            <div className="flex justify-between">
              <span>Price ({cart.length} items)</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between text-green-600">
              <span>Delivery Charges</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span>₹{totalPrice}</span>
            </div>

          </div>

          <button
            onClick={placeOrder}
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Place Order
          </button>

        </div>

      </div>

    </div>

  )
}






