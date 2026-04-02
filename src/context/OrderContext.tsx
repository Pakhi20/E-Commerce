"use client"

import { createContext, useContext, useState, useEffect } from "react"

const OrderContext = createContext<any>(null)

export const OrderProvider = ({ children }: any) => {
  const [orders, setOrders] = useState<any[]>([])

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders")
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders))
    }
  }, [])

  const placeOrder = (cartItems: any[]) => {
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      date: new Date().toLocaleDateString(),
    }

    const updatedOrders = [...orders, newOrder]
    setOrders(updatedOrders)
    localStorage.setItem("orders", JSON.stringify(updatedOrders))
  }

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export const useOrders = () => useContext(OrderContext)