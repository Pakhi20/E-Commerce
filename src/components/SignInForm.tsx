"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"


interface Props {
  onSuccess?: () => void
}

export default function SignInForm({ onSuccess }: Props) {

  const router = useRouter()

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault()

    
    const nameRegex = /^[A-Za-z\s]+$/

    if (!nameRegex.test(name)) {
      alert("Name should contain only letters")
      return
    }

    
    const phoneRegex = /^[0-9]{10}$/

    if (!phoneRegex.test(phone)) {
      alert("Phone number must be exactly 10 digits")
      return
    }

    if (email && password) {

      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("userName", name)
      localStorage.setItem("userEmail", email)
      

      if (onSuccess) {
        onSuccess()
      }

      router.push("/")
    }
  }

  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-3">



<input
  type="text"
  placeholder="Enter Your Name"
  className="border p-2 rounded"
  value={name}
  onChange={(e) => {
    const value = e.target.value.replace(/[^A-Za-z ]/g, "");
    setName(value);
  }}
  required
/>







{/* 
      
      <input
        type="text"
        placeholder="Enter Your Name"
        className="border p-2 rounded"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
      /> */}
{/*  onChange={(e) => {
    const value = e.target.value.replace(/^[A-Za-z\s]/g, "")
    setPhone(value)
  }} */}
    
      {/* <input
        type="tel"
        placeholder="Enter Phone Number"
        className="border p-2 rounded"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        maxLength={10}
        required
      /> */}






<input
  type="tel"
  placeholder="Enter Phone Number"
  className="border p-2 rounded"
  value={phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    if (value.length <= 10) {
      setPhone(value);
    }
  }}
  required
/>



      
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
      />

     
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required
      />

      <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Sign In
      </button>

      <p className="text-sm text-center mt-4">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue-600 font-medium">
          Sign Up
        </Link>
      </p>

    </form>
  )
}


























