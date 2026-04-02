"use client"

import { useState } from "react"
import Link from "next/link"
import { DropdownItem } from "./NavDropdown"

interface Props {
  items: DropdownItem[]
}

export default function MobileMenu({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    
    <div className="md:hidden bg-white text-black px-6 py-4 space-y-3">
        <Link href="/" className="block font-medium mb-2">
  Home
</Link>
      {items.map((item, index) => (
        <div key={index}>
          <div
            className="font-medium cursor-pointer"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              item.label
            )}
          </div>

          {Array.isArray(item.children) && openIndex === index && (
            <div className="ml-4 mt-2 space-y-2">
              {item.children.map((child, childIndex) => (
                <div key={childIndex}>
                  {child.href ? (
                    <Link href={child.href} className="block text-sm">
                      {child.label}
                    </Link>
                  ) : (
                    child.label
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}