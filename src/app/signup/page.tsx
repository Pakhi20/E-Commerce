"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link";
// import AddressesPage from '../addresses/page';
// import { Link as LinkIcon } from "lucide-react"


export default function SignupPage() {

  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [generatedOtp, setGeneratedOtp] = useState("")
  const [remember, setRemember] = useState(false)

  const [loading, setLoading] = useState(false)

  const [popup, setPopup] = useState({
    show: false,
    message: "",
  })

  const [banner, setBanner] = useState("")

  const showPopup = (msg: string) => {
    setPopup({ show: true, message: msg })
    setTimeout(() => {
      setPopup({ show: false, message: "" })
    }, 2500)
  }

  // ✅ OTP
  const sendOtp = () => {
    if (!/^[0-9]{10}$/.test(phone)) {
      return alert("Enter valid 10 digit phone number")
    }

    const newOtp = Math.floor(100000 + Math.random() * 900000).toString()
    setGeneratedOtp(newOtp)

    alert("Your OTP is: " + newOtp)
  }

  // ✅ SIGNUP
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    // ✅ validations
    if (!/^[A-Za-z ]+$/.test(name)) {
      return alert("Name should contain only letters")
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return alert("Enter a valid email")
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      return alert("Phone must be 10 digits")
    }

    if (password.length < 6) {
      return alert("Password must be at least 6 characters")
    }

    // ✅ OTP check BEFORE API
    if (!generatedOtp) {
      setBanner("⚠️ Please send OTP first before creating account")
      setTimeout(() => setBanner(""), 3000)
      return
    }

    if (otp !== generatedOtp) {
      return alert("Invalid OTP")
    }

    try {
      setLoading(true)

      // inside handleSignup body

const body = {
  name,
  email,
 
  phone_no: phone, // 🔥 ADD THIS LINE (IMPORTANT)
  password,
}

      console.log("SIGNUP DATA:", body)

      const res = await fetch(
        "https://learnbackendflipcartclone.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      )

      const data = await res.json()

      console.log("STATUS:", res.status)
      console.log("RESPONSE:", data)

      if (!res.ok) {
        return alert(data.error || "Signup failed ❌")
      }

      // ✅ store user
      localStorage.setItem("userName", data.name)
      localStorage.setItem("userEmail", data.email)
      localStorage.setItem("isLoggedIn", "true")

      window.dispatchEvent(new Event("loginUpdated"))

      alert("Account created successfully 🎉")

      setTimeout(() => {
        router.push("/")
      }, 1500)

    } catch (err) {
      console.error(err)
      showPopup("Server error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {banner && (
        <div className="fixed top-0 left-0 w-full bg-yellow-400 text-black text-center py-3 font-medium shadow-md z-50">
          {banner}
        </div>
      )}

      {popup.show && (
        <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
          {popup.message}
        </div>
      )}

      <div className="flex justify-center items-center mt-20 px-4">
        <div className="flex bg-white shadow-xl rounded-lg overflow-hidden w-[850px]">

          {/* LEFT SAME */}
          <div className="bg-blue-600 text-white p-10 w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
            <p>Create an account to enjoy shopping with amazing deals.</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
              className="mt-8 w-40"
              alt="signup"
            />
          </div>

          {/* RIGHT SAME */}
          <div className="p-8 w-1/2">
            <form onSubmit={handleSignup} className="space-y-4">

              <input type="text" placeholder="Full Name" required
                className="w-full border p-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value.replace(/[^A-Za-z ]/g, ""))}
              />

              <input type="email" placeholder="Email" required
                className="w-full border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input type="tel" placeholder="Phone Number" required maxLength={10}
                className="w-full border p-2 rounded"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              />

              <input type="password" placeholder="Password" required
                className="w-full border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex gap-2">
                <input type="text" placeholder="Enter OTP"
                  className="w-full border p-2 rounded"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button type="button" onClick={sendOtp}
                  className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700">
                  Send OTP
                </button>
              </div>

              <button type="submit" disabled={loading}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                {loading ? "Creating..." : "Create Account"}
              </button>
           

<p className="text-sm text-center mt-3">
  Already have an account?{" "}
  <Link
    href="/login"
    className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
  >
    Login
  </Link>
</p>


            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"

// export default function SignupPage() {

//   const router = useRouter()

//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [phone, setPhone] = useState("")
//   const [otp, setOtp] = useState("")
//   const [generatedOtp, setGeneratedOtp] = useState("")
//   const [remember, setRemember] = useState(false)

//   const [loading, setLoading] = useState(false)

//   // 🔥 Popup
//   const [popup, setPopup] = useState({
//     show: false,
//     message: "",
//   })

//   // 🔥 Banner
//   const [banner, setBanner] = useState("")

//   const showPopup = (msg: string) => {
//     setPopup({ show: true, message: msg })

//     setTimeout(() => {
//       setPopup({ show: false, message: "" })
//     }, 2500)
//   }

//   // ✅ Send OTP
//   const sendOtp = () => {
//     if (!/^[0-9]{10}$/.test(phone)) {
//       return showPopup("Enter valid 10 digit phone number")
//     }

//     const newOtp = Math.floor(100000 + Math.random() * 900000).toString()
//     setGeneratedOtp(newOtp)

//     // 👉 show OTP to user
//     alert("Your OTP is: " + newOtp)
//   }

//   // ✅ Signup
//   // const handleSignup = async (e: React.FormEvent) => {
//   //   e.preventDefault()

//   //   // validations
//   //   if (!/^[A-Za-z ]+$/.test(name)) {
//   //     return showPopup("Name should contain only letters")
//   //   }

//   //   if (!/\S+@\S+\.\S+/.test(email)) {
//   //     return showPopup("Enter a valid email")
//   //   }

//   //   if (!/^[0-9]{10}$/.test(phone)) {
//   //     return alert("Phone number must be 10 digits")
//   //   }

//   //   if (password.length < 6) {
//   //     return alert("Password must be at least 6 characters")
//   //   }


// const handleSignup = async (e: React.FormEvent) => {
//   e.preventDefault();

//   const body = {
//     name,
//     email,
//     phone_no: phone,   // ✅ FIX HERE
//     password,
//   };

//   console.log("SIGNUP DATA:", body);

//   try {
//     const res = await fetch(
//       "https://learnbackendflipcartclone.onrender.com/auth/register",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       }
//     );

//     const data = await res.json();

//     console.log("STATUS:", res.status);
//     console.log("RESPONSE:", data);

//     if (res.ok) {
//       alert("Signup successful ✅");
//       router.push("/");
//     } else {
//       alert(data.error || "Signup failed ❌");
//     }
//   } catch (error) {
//     console.error("Signup error:", error);
//   }



//   //   // 🔥 Banner for OTP
//     if (!generatedOtp) {
//       setBanner("⚠️ Please send OTP first before creating account")

//       setTimeout(() => {
//         setBanner("")
//       }, 3000)

//       return
//     }

//     if (otp !== generatedOtp) {
//       return alert("Invalid OTP")
//     }

//     try {
//       setLoading(true)

//       const res = await fetch("https://learnbackendflipcartclone.onrender.com/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           phone_no: phone, // ✅ correct key
//           password,
//         }),
//       })
//       console.log("SIGNUP DATA:", {
//   name,
//   email,
//   phone,
//   password
// })

//       const data = await res.json()

//       console.log("STATUS:", res.status)
//       console.log("RESPONSE:", data)

//       // ✅ FIXED CONDITION
//       // if (!res.ok) {
//       //   return alert(data.message || "Signup failed")
//       // }

//       // ✅ Store user
//       localStorage.setItem("userEmail", email)
//       localStorage.setItem("userName", name)
//       localStorage.setItem("isLoggedIn", "true")

//       window.dispatchEvent(new Event("loginUpdated"))

//       alert("Account created successfully 🎉")

//       // ✅ redirect to LOGIN page
//       setTimeout(() => {
//         router.push("/")
//       }, 1500)

//     } catch (err) {
//       console.error(err)
//       showPopup("Server error. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div>

//       {/* 🔥 Banner */}
//       {banner && (
//         <div className="fixed top-0 left-0 w-full bg-yellow-400 text-black text-center py-3 font-medium shadow-md z-50">
//           {banner}
//         </div>
//       )}

//       {/* 🔥 Popup */}
//       {popup.show && (
//         <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
//           {popup.message}
//         </div>
//       )}

//       <div className="flex justify-center items-center mt-20 px-4">

//         <div className="flex bg-white shadow-xl rounded-lg overflow-hidden w-[850px]">

//           {/* Left Panel */}
//           <div className="bg-blue-600 text-white p-10 w-1/2 flex flex-col justify-center">

//             <h2 className="text-3xl font-bold mb-4">
//               Sign Up
//             </h2>

//             <p>
//               Create an account to enjoy shopping with amazing deals.
//             </p>

//             <img
//               src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
//               className="mt-8 w-40"
//               alt="signup"
//             />

//           </div>

//           {/* Right Panel */}
//           <div className="p-8 w-1/2">

//             <form onSubmit={handleSignup} className="space-y-4">

//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 required
//                 className="w-full border p-2 rounded"
//                 value={name}
//                 onChange={(e) => {
//                   const value = e.target.value.replace(/[^A-Za-z ]/g, "")
//                   setName(value)
//                 }}
//               />

//               <input
//                 type="email"
//                 placeholder="Email"
//                 required
//                 className="w-full border p-2 rounded"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 required
//                 maxLength={10}
//                 className="w-full border p-2 rounded"
//                 value={phone}
//                 onChange={(e) => {
//                   const value = e.target.value.replace(/\D/g, "")
//                   setPhone(value)
//                 }}
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 className="w-full border p-2 rounded"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <div className="flex gap-2">

//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   className="w-full border p-2 rounded"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />

//                 <button
//                   type="button"
//                   onClick={sendOtp}
//                   className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
//                 >
//                   Send OTP
//                 </button>

//               </div>

//               <div className="flex items-center justify-between text-sm">

//                 <label className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={remember}
//                     onChange={(e) => setRemember(e.target.checked)}
//                   />
//                   Remember me
//                 </label>

//                 <span className="text-blue-600 hover:underline cursor-pointer">
//                   Forgot Password?
//                 </span>

//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
//               >
//                 {loading ? "Creating..." : "Create Account"}
//               </button>

//               <p className="text-sm text-center mt-3">

//                 Already have an account?

//                 <span
//                   className="text-blue-600 cursor-pointer ml-1"
//                   onClick={() => router.push("/login")}
//                 >
//                   Login
//                 </span>

//               </p>

//             </form>

//           </div>

//         </div>

//       </div>

//     </div>
//   )
// }






















// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"

// export default function SignupPage() {

//   const router = useRouter()

//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [phone, setPhone] = useState("")
//   const [otp, setOtp] = useState("")
//   const [generatedOtp, setGeneratedOtp] = useState("")
//   const [remember, setRemember] = useState(false)

//   const [loading, setLoading] = useState(false)
//   const [message, setMessage] = useState("")

//   // ✅ Send OTP
//   const sendOtp = () => {
//     setMessage("")

//     if (!/^[0-9]{10}$/.test(phone)) {
//       return setMessage("Enter valid 10 digit phone number")
//     }

//     const newOtp = Math.floor(100000 + Math.random() * 900000).toString()
//     setGeneratedOtp(newOtp)

//     console.log("OTP:", newOtp)
//     setMessage("OTP sent successfully (check console)")
//   }

//   // ✅ Signup API
//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setMessage("")

//     // 🔹 Validations
//     if (!/^[A-Za-z ]+$/.test(name)) {
//       return setMessage("Name should contain only letters")
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       return setMessage("Enter a valid email")
//     }

//     if (!/^[0-9]{10}$/.test(phone)) {
//       return setMessage("Phone number must be 10 digits")
//     }

//     if (password.length < 6) {
//       return setMessage("Password must be at least 6 characters")
//     }

//     if (!generatedOtp) {
//       return setMessage("Please send OTP first")
//     }

//     if (otp !== generatedOtp) {
//       return setMessage("Invalid OTP")
//     }

//     try {
//       setLoading(true)

//       const res = await fetch("https://learnbackendflipcartclone.onrender.com/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           phone_no: phone,
//           password,
//         }),
//       })

//       const data = await res.json()
//       console.log(data)

//       // ❌ Backend error
//       if (!data.success) {
      
//         return setMessage(data.message || "Signup failed")
//       }

//       // ❗ Safety check
//       if (!email) {
//         return setMessage("Email is required")
//       }

//       // ✅ Store user
//       localStorage.setItem("userEmail", email)
//       localStorage.setItem("userName", name)
//       localStorage.setItem("isLoggedIn", "true")

//       // 🔥 Update UI
//       window.dispatchEvent(new Event("loginUpdated"))

//       setMessage("Account created successfully 🎉")

//       // ✅ Redirect
//       setTimeout(() => {
//         router.push("/")
//       }, 1500)

//     } catch (err) {
//       console.error(err)
//       setMessage("Server error. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (

//     <div>

//       <div className="flex justify-center items-center mt-20 px-4">

//         <div className="flex bg-white shadow-xl rounded-lg overflow-hidden w-212.5">

//           {/* Left Panel */}
//           <div className="bg-blue-600 text-white p-10 w-1/2 flex flex-col justify-center">

//             <h2 className="text-3xl font-bold mb-4">
//               Sign Up
//             </h2>

//             <p>
//               Create an account to enjoy shopping with amazing deals.
//             </p>

//             <img
//               src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
//               className="mt-8 w-40"
//               alt="signup"
//             />

//           </div>

//           {/* Right Panel */}
//           <div className="p-8 w-1/2">

//             <form onSubmit={handleSignup} className="space-y-4">

//               {/* Message */}
//               {message && (
//                 <p className="text-center text-sm text-blue-600">{message}</p>
//               )}

//               {/* Name */}
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 required
//                 className="w-full border p-2 rounded"
//                 value={name}
//                 onChange={(e) => {
//                   const value = e.target.value.replace(/[^A-Za-z ]/g, "")
//                   setName(value)
//                 }}
//               />

//               {/* Email */}
//               <input
//                 type="email"
//                 placeholder="Email"
//                 required
//                 className="w-full border p-2 rounded"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               {/* Phone */}
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 required
//                 maxLength={10}
//                 className="w-full border p-2 rounded"
//                 value={phone}
//                 onChange={(e) => {
//                   const value = e.target.value.replace(/\D/g, "")
//                   setPhone(value)
//                 }}
//               />

//               {/* Password */}
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 className="w-full border p-2 rounded"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               {/* OTP */}
//               <div className="flex gap-2">

//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   className="w-full border p-2 rounded"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />

//                 <button
//                   type="button"
//                   onClick={sendOtp}
//                   className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
//                 >
//                   Send OTP
//                 </button>

//               </div>

//               {/* Remember */}
//               <div className="flex items-center justify-between text-sm">

//                 <label className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={remember}
//                     onChange={(e) => setRemember(e.target.checked)}
//                   />
//                   Remember me
//                 </label>

//                 <span className="text-blue-600 hover:underline cursor-pointer">
//                   Forgot Password?
//                 </span>

//               </div>

//               {/* Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
//               >
//                 {loading ? "Creating..." : "Create Account"}
//               </button>

//               {/* Login link */}
//               <p className="text-sm text-center mt-3">

//                 Already have an account?

//                 <span
//                   className="text-blue-600 cursor-pointer ml-1"
//                   onClick={() => router.push("/login")}
//                 >
//                   Login
//                 </span>

//               </p>

//             </form>

//           </div>

//         </div>

//       </div>

//     </div>
//   )
// }












































































// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import Navbar from "@/components/Navbar"
import AddressesPage from '../addresses/page';
import { Link as LinkIcon } from "lucide-react"

// export default function SignupPage() {

//   const router = useRouter()

//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [phone, setPhone] = useState("")
//   const [otp, setOtp] = useState("")
//   const [generatedOtp, setGeneratedOtp] = useState("")
//   const [remember, setRemember] = useState(false)

//   const sendOtp = () => {

//     if (phone.length !== 10) {
//       alert("Enter valid 10 digit phone number")
//       return
//     }

//     const newOtp = Math.floor(100000 + Math.random() * 900000).toString()

//     setGeneratedOtp(newOtp)

//     alert("Your OTP is: " + newOtp)

//   }

//   const handleSignup = (e: React.FormEvent) => {

//     e.preventDefault()

//     // Name validation
//     if (!/^[A-Za-z ]+$/.test(name)) {
//       alert("Name should contain only letters")
//       return
//     }

//     // Email validation
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       alert("Enter a valid email")
//       return
//     }

//     // Phone validation
//     if (phone.length !== 10) {
//       alert("Phone number must be 10 digits")
//       return
//     }

//     // Password validation
//     if (password.length < 6) {
//       alert("Password must be at least 6 characters")
//       return
//     }

//     // OTP validation
//     if (!generatedOtp) {
//       alert("Please send OTP first")
//       return
//     }

//     if (otp !== generatedOtp) {
//       alert("Invalid OTP")
//       return
//     }

//     const user = {
//       name,
//       email,
//       password,
//       phone
//     }

//     localStorage.setItem("user", JSON.stringify(user))

//     localStorage.setItem("isLoggedIn", "true")
//     localStorage.setItem("userEmail", email)
//     localStorage.setItem("userName", name)

//     window.dispatchEvent(new Event("loginUpdated"))

//     alert("Account created successfully!")

//     router.push("/") // go to home page

//   }

//   return (

//     <div>

      

//       <div className="flex justify-center items-center mt-20 px-4">

//         <div className="flex bg-white shadow-xl rounded-lg overflow-hidden w-212.5">

//           {/* Left Panel */}

//           <div className="bg-blue-600 text-white p-10 w-1/2 flex flex-col justify-center">

//             <h2 className="text-3xl font-bold mb-4">
//               Sign Up
//             </h2>

//             <p>
//               Create an account to enjoy shopping with amazing deals.
//             </p>

//             <img
//               src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
//               className="mt-8 w-40"
//               alt="signup"
//             />

//           </div>


//           {/* Right Panel */}

//           <div className="p-8 w-1/2">

//             <form onSubmit={handleSignup} className="space-y-4">

//               {/* Name */}
// <input
//   type="text"
//   placeholder="Full Name"
//   required
//   className="w-full border p-2 rounded"
//   value={name}
//   onChange={(e) => {
//     const value = e.target.value.replace(/[^A-Za-z ]/g, "")
//     setName(value)
//   }}
// />

//               {/* Email */}

//               <input
//                 type="email"
//                 placeholder="Email"
//                 required
//                 className="w-full border p-2 rounded"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               {/* Phone */}

//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 required
//                 maxLength={10}
//                 className="w-full border p-2 rounded"
//                 value={phone}
//                 onChange={(e) => {
//                   const value = e.target.value.replace(/\D/g, "")
//                   setPhone(value)
//                 }}
//               />

//               {/* Password */}

//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 className="w-full border p-2 rounded"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               {/* OTP */}

//               <div className="flex gap-2">

//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   className="w-full border p-2 rounded"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />

//                 <button
//                   type="button"
//                   onClick={sendOtp}
//                   className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
//                 >
//                   Send OTP
//                 </button>

//               </div>


//               {/* Remember me */}

//               <div className="flex items-center justify-between text-sm">

//                 <label className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={remember}
//                     onChange={(e) => setRemember(e.target.checked)}
//                   />
//                   Remember me
//                 </label>

//                 <a href="#" className="text-blue-600 hover:underline">
//                   Forgot Password?
//                 </a>

//               </div>


//               {/* Signup Button */}

//               <button
//                 type="submit"
//                 className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//               >
//                 Create Account
//               </button>


//               {/* Login link */}

//               <p className="text-sm text-center mt-3">

//                 Already have an account?

//                 <span
//                   className="text-blue-600 cursor-pointer ml-1"
//                   onClick={() => router.push("/login")}
//                 >
//                   Login
//                 </span>

//               </p>

//             </form>

//           </div>

//         </div>

//       </div>

//     </div>
//   )
// }









