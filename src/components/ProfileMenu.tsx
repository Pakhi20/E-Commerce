"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import {
  User,
  Star,
  Package,
  Heart,
  Gift,
  Bell,
  Headphones,
  LogIn,
  LogOut,
} from "lucide-react"

export default function ProfileMenu() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Load email + login status
  useEffect(() => {
    const storedEmail =
      localStorage.getItem("userEmail") ||
      sessionStorage.getItem("userEmail")

    const loginStatus =
      localStorage.getItem("isLoggedIn") ||
      sessionStorage.getItem("isLoggedIn")

    if (storedEmail) setEmail(storedEmail)
    if (loginStatus === "true") setIsLoggedIn(true)
  }, [])

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    sessionStorage.removeItem("isLoggedIn")
    window.location.href = "/login"
  }

  // Click outside close
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div
      className="relative"
      ref={menuRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Profile Icon */}
      <button className="hover:text-yellow-300">
        <User size={22} />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-4 w-64 bg-white text-black shadow-xl rounded-lg z-50 
        transition-all duration-200 
        ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
      >
        {/* Email */}
        <div className="border-b p-3 text-sm">
          <p className="font-semibold">
            {isLoggedIn ? email : "Guest User"}
          </p>
        </div>

        <ul className="text-sm">
          {!isLoggedIn ? (
            <li>
              <Link
                href="/login"
                className="flex items-center gap-3 p-3 hover:bg-gray-100"
              >
                <LogIn size={16} /> Login
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  href="/profile"
                  className="flex items-center gap-3 p-3 hover:bg-gray-100"
                >
                  <User size={16} /> My Profile
                </Link>
              </li>

              <li className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
                <Star size={16} /> Flipkart Plus Zone
              </li>

              <li>
                <Link
                  href="/orders"
                  className="flex items-center gap-3 p-3 hover:bg-gray-100"
                >
                  <Package size={16} /> Orders
                </Link>
              </li>

              <li>
                <Link
                  href="/wishlist"
                  className="flex items-center gap-3 p-3 hover:bg-gray-100"
                >
                  <Heart size={16} /> Wishlist
                </Link>
              </li>

              <li className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
                <Gift size={16} /> Rewards
              </li>

              <li className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
                <Bell size={16} /> Notifications
              </li>

              <li className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
                <Headphones size={16} /> 24×7 Customer Care
              </li>

              <li
                onClick={handleLogout}
                className="flex items-center gap-3 p-3 hover:bg-red-100 cursor-pointer text-red-500"
              >
                <LogOut size={16} /> Logout
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}






























// "use client"

// import { useState, useRef, useEffect } from "react"
// import Link from "next/link"
// import { User, Star, Package, Heart, Gift, Bell, Headphones } from "lucide-react"

// export default function ProfileMenu() {

//   const [open, setOpen] = useState(false)
//   const [email, setEmail] = useState("")
//   const menuRef = useRef<HTMLDivElement>(null)

//   // ✅ Load email
//   useEffect(() => {
//     const storedEmail =
//       localStorage.getItem("userEmail") ||
//       sessionStorage.getItem("userEmail")

//     if (storedEmail) {
//       setEmail(storedEmail)
//     }
//   }, [])

//   // ✅ Logout
//   const handleLogout = () => {
//     localStorage.clear()
//     window.location.reload()
//   }

//   // ✅ Click outside close
//   useEffect(() => {
//     const handleClickOutside = (event: any) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setOpen(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   return (

//     <div
//       className="relative group"
//       ref={menuRef}
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >

//       {/* Profile Icon */}
//       <button className="hover:text-yellow-300">
//         <User size={22} />
//       </button>

//       {/* Dropdown */}
//       <div
//         className={`absolute right-0 mt-4 w-64 bg-white text-black shadow-xl rounded-lg z-50 
//         transition-all duration-200 
//         ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
//       >

//         {/* Email */}
//         <div className="border-b p-3 text-sm">
//           <p className="font-semibold">{email || "Guest User"}</p>
//         </div>

//         <ul className="text-sm">

//           <li>
//             <Link href="/profile" className="flex items-center gap-3 p-3 hover:bg-gray-100">
//               <User size={16} /> My Profile
//             </Link>
//           </li>

//           <li className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
//             <Star size={16} /> Flipkart Plus Zone
//           </li>

//           <li>
//             <Link href="/orders" className="flex items-center gap-3 p-3 hover:bg-gray-100">
//               <Package size={16} /> Orders
//             </Link>
//           </li>

//           <li>
//             <Link href="/wishlist" className="flex items-center gap-3 p-3 hover:bg-gray-100">
//               <Heart size={16} /> Wishlist
//             </Link>
//           </li>

//           <li className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
//             <Gift size={16} /> Rewards
//           </li>

//           <li className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
//             <Bell size={16} /> Notifications
//           </li>

//           <li className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
//             <Headphones size={16} /> 24×7 Customer Care
//           </li>

//           <li
//             onClick={handleLogout}
//             className="flex items-center gap-3 p-3 hover:bg-red-100 cursor-pointer text-red-500"
//           >
//             Logout
//           </li>

//         </ul>

//       </div>

//     </div>
//   )
// }


