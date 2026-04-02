"use client"

import Link from "next/link"

const categories = [
  { name: "Fashion", icon: "👕", link: "/products/fashion" },
  { name: "Mobiles", icon: "📱", link: "/products/electronics/mobile-applications" },
  { name: "Electronics", icon: "💻", link: "/products/electronics" },
  { name: "Home", icon: "🏠", link: "/products/electronics/home-electronics" },
  { name: "Appliances", icon: "🧊", link: "#" },
  { name: "Sports", icon: "🏏", link: "/products/sports" },
]

export default function CategoryBar() {

  return (
    <div className="bg-white shadow-sm">

      <div className="max-w-7xl mx-auto flex justify-between px-8 py-4">

        {categories.map((cat, index) => (

          <Link
            key={index}
            href={cat.link}
            className="flex flex-col items-center text-sm hover:text-blue-600"
          >

            <span className="text-2xl">
              {cat.icon}
            </span>

            {cat.name}

          </Link>

        ))}

      </div>

    </div>
  )
}