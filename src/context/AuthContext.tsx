"use client"

import { createContext, useContext, useState, useEffect } from "react"

interface AuthContextType {
  isLoggedIn: boolean
  login: (userData: any) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("isLoggedIn")
    if (stored === "true") {
      setIsLoggedIn(true)
    }
  }, [])

  const login = (userData: any) => {
    // ✅ clear old data
    localStorage.removeItem("userName")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userPhone")

    // ✅ save new data
    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem("userName", userData.name)
    localStorage.setItem("userEmail", userData.email)
    localStorage.setItem("userPhone", userData.phone_no || "")

    setIsLoggedIn(true)

    // 🔥 notify UI update
    window.dispatchEvent(new Event("loginUpdated"))
  }

  const logout = () => {
    localStorage.clear()
    setIsLoggedIn(false)
    window.dispatchEvent(new Event("loginUpdated"))
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used inside AuthProvider")
  return context
}

































































// "use client"

// import { createContext, useContext, useState, useEffect } from "react"

// interface AuthContextType {
//   isLoggedIn: boolean
//   login: () => void
//   logout: () => void
// }

// const AuthContext = createContext<AuthContextType | null>(null)

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)

//   useEffect(() => {
//     const stored = localStorage.getItem("loggedIn")
//     if (stored === "true") setIsLoggedIn(true)
//   }, [])

//   const login = () => {
//     localStorage.setItem("loggedIn", "true")
//     setIsLoggedIn(true)
//   }

//   const logout = () => {
//     localStorage.removeItem("loggedIn")
//     setIsLoggedIn(false)
//   }

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (!context) throw new Error("useAuth must be used inside AuthProvider")
//   return context
// }

