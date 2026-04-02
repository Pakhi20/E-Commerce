"use client";

import { ReactNode, createContext, useContext, useState, useEffect } from "react";

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<any[]>([]);

  // 🔑 Unique key generator: id + selectedOptions
  const getItemKey = (id: number, options: any) => {
    return id + "-" + JSON.stringify(options || {});
  };

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to cart
  const addToCart = (product: any) => {
    const options = product.selectedOptions || {};
    const key = getItemKey(product.id, options);

    setCart((prev: any[]) => {
      const exists = prev.find(item => item.key === key);

      if (exists) {
        return prev.map(item =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prev, { ...product, key, quantity: 1, selectedOptions: options }];
    });
  };

  // ✅ Increase quantity
  const increaseQty = (id: number, options: any) => {
    const key = getItemKey(id, options);

    setCart((prev: any[]) =>
      prev.map(item =>
        item.key === key ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ✅ Decrease quantity
  const decreaseQty = (id: number, options: any) => {
    console.log("Decreasing qty for", id, options);
    const key = getItemKey(id, options);

    setCart((prev: any[]) =>
      prev
        .map(item =>
          item.key === key ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // ✅ Remove item from cart
  const removeFromCart = (id: number, options: any) => {
    const key = getItemKey(id, options);

    setCart((prev: any[]) => prev.filter(item => item.key !== key));
  };

  // ✅ Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // ✅ Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ Custom hook
export const useCart = () => useContext(CartContext);



