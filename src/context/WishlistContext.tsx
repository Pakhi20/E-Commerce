"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface WishlistItem {
  id: string;
  title: string;
  price: number;
  image: string;
  selectedOptions?: any;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string, selectedOptions?: any) => void;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: any) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("wishlistItems");
    if (stored) {
      setWishlist(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add
  const addToWishlist = (item: WishlistItem) => {
    const exists = wishlist.some(
      (w) =>
        w.id === item.id &&
        JSON.stringify(w.selectedOptions) ===
          JSON.stringify(item.selectedOptions)
    );

    if (!exists) {
      setWishlist([...wishlist, item]);
    }
  };

  // Remove
  const removeFromWishlist = (id: string, selectedOptions?: any) => {
    const filtered = wishlist.filter(
      (item) =>
        !(
          item.id === id &&
          JSON.stringify(item.selectedOptions) ===
            JSON.stringify(selectedOptions)
        )
    );
    setWishlist(filtered);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext)!;










