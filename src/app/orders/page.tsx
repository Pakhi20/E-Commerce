"use client"

import { useOrders } from "@/context/OrderContext"
import Image from "next/image"

export default function OrdersPage() {
  const { orders } = useOrders()

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders placed yet</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order: any) => (
            <div key={order.id} className="border p-4 rounded-lg">
              <p className="font-semibold">Order Date: {order.date}</p>

              <div className="grid grid-cols-4 gap-4 mt-4">
                {order.items.map((item: any) => (
                  <div key={item.id}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={150}
                      height={150}
                      className="h-32 object-cover"
                    />
                    <p>{item.title}</p>
                    <p className="text-green-600">₹{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}