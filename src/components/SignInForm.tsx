"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext"

interface Props {
  onSuccess?: () => void
}

export default function SignInForm({ onSuccess }: Props) {
  const router = useRouter()
  const { login } = useAuth()

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: any) => {
    const { name, value } = e.target

    if (name === "name") {
      setForm({ ...form, name: value.replace(/[^A-Za-z ]/g, "") })
    } else if (name === "phone") {
      const cleaned = value.replace(/\D/g, "")
      if (cleaned.length <= 10) {
        setForm({ ...form, phone: cleaned })
      }
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError("")

    // ✅ validations (kept)
    if (!/^[0-9]{10}$/.test(form.phone)) {
      return setError("Phone must be 10 digits")
    }

    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters")
    }

    try {
      setLoading(true)

      // const body = {
      //  name: form.name,
      //  email: form.email,
      //   phone: form.phone, // 🔥 FIX (important)
      //   password: form.password,
      // }
      const payload = {
  name: form.name,
  email: form.email,
  phone_no: form.phone,
  password: form.password,
}

      console.log("LOGIN BODY:", payload)

      const res = await fetch("https://learnbackendflipcartclone.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      console.log("LOGIN RESPONSE:", data)
      

      if (!res.ok) {
        return setError(data.error || "Invalid credentials ❌")
      }

      // ✅ safe fallback (if backend doesn't return name/email)
      const userName = data.name || form.name || "User"
      const userEmail = data.email || form.email || ""

      login({
        name: userName,
        email: userEmail,
        phone: form.phone,
        password: form.password,
      })

      localStorage.setItem("userName", userName)
      localStorage.setItem("userEmail", userEmail)
      localStorage.setItem("isLoggedIn", "true")

      window.dispatchEvent(new Event("loginUpdated"))

      router.push("/")

    } catch (err) {
      console.error(err)
      setError("Server error. Try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

      <h2 className="text-xl font-bold text-center">Login</h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <input
        name="name"
        placeholder="Name"
        className="border p-2 rounded"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Phone"
        className="border p-2 rounded"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        type="email"
        className="border p-2 rounded"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="password"
        placeholder="Password"
        type="password"
        className="border p-2 rounded"
        value={form.password}
        onChange={handleChange}
        required
      />

      <button disabled={loading} className="bg-blue-600 text-white py-2 rounded">
        {loading ? "Logging in..." : "Login"}
      </button>

      <p className="text-sm text-center">
        New user?{" "}
        <Link href="/signup" className="text-blue-600">
          Create account
        </Link>
      </p>

    </form>
  )
}





































































































// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import { useAuth } from "@/context/AuthContext"


// interface Props {
//   onSuccess?: () => void
// }

// export default function SignInForm({ onSuccess }: Props) {

//   const router = useRouter()
//   const { login } = useAuth()

//   const [name, setName] = useState("")
//   const [phone, setPhone] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const handleSubmit = (e: React.FormEvent) => {

//     e.preventDefault()

    
//     const nameRegex = /^[A-Za-z\s]+$/

//     if (!nameRegex.test(name)) {
//       alert("Name should contain only letters")
//       return
//     }

    
//     const phoneRegex = /^[0-9]{10}$/

//     if (!phoneRegex.test(phone)) {
//       alert("Phone number must be exactly 10 digits")
//       return
//     }

//     if (email && password) {

//       localStorage.setItem("userName", name)
//       localStorage.setItem("userEmail", email)
      
//       login()
//       if (onSuccess) {
//         onSuccess()
//       }

//       router.push("/")
//     }
//   }

//   return (

//     <form onSubmit={handleSubmit} className="flex flex-col gap-3">



// <input
//   type="text"
//   placeholder="Enter Your Name"
//   className="border p-2 rounded"
//   value={name}
//   onChange={(e) => {
//     const value = e.target.value.replace(/[^A-Za-z ]/g, "");
//     setName(value);
//   }}
//   required
// />



// <input
//   type="tel"
//   placeholder="Enter Phone Number"
//   className="border p-2 rounded"
//   value={phone}
//   onChange={(e) => {
//     const value = e.target.value.replace(/\D/g, ""); 
//     if (value.length <= 10) {
//       setPhone(value);
//     }
//   }}
//   required
// />



      
//       <input
//         type="email"
//         placeholder="Email"
//         className="border p-2 rounded"
//         value={email}
//         onChange={(e)=>setEmail(e.target.value)}
//         required
//       />

     
//       <input
//         type="password"
//         placeholder="Password"
//         className="border p-2 rounded"
//         value={password}
//         onChange={(e)=>setPassword(e.target.value)}
//         required
//       />

//       <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//         Sign In
//       </button>

//       <p className="text-sm text-center mt-4">
//         Don't have an account?{" "}
//         <Link href="/signup" className="text-blue-600 font-medium">
//           Sign Up
//         </Link>
//       </p>

//     </form>
//   )
// }






