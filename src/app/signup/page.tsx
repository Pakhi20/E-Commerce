"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"

export default function SignupPage() {

  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [generatedOtp, setGeneratedOtp] = useState("")
  const [remember, setRemember] = useState(false)

  const sendOtp = () => {

    if (phone.length !== 10) {
      alert("Enter valid 10 digit phone number")
      return
    }

    const newOtp = Math.floor(100000 + Math.random() * 900000).toString()

    setGeneratedOtp(newOtp)

    alert("Your OTP is: " + newOtp)

  }

  const handleSignup = (e: React.FormEvent) => {

    e.preventDefault()

    // Name validation
    if (!/^[A-Za-z ]+$/.test(name)) {
      alert("Name should contain only letters")
      return
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Enter a valid email")
      return
    }

    // Phone validation
    if (phone.length !== 10) {
      alert("Phone number must be 10 digits")
      return
    }

    // Password validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters")
      return
    }

    // OTP validation
    if (!generatedOtp) {
      alert("Please send OTP first")
      return
    }

    if (otp !== generatedOtp) {
      alert("Invalid OTP")
      return
    }

    const user = {
      name,
      email,
      password,
      phone
    }

    localStorage.setItem("user", JSON.stringify(user))

    localStorage.setItem("isLoggedIn", "true")

    alert("Account created successfully!")

    router.push("/") // go to home page

  }

  return (

    <div>

      

      <div className="flex justify-center items-center mt-20 px-4">

        <div className="flex bg-white shadow-xl rounded-lg overflow-hidden w-212.5">

          {/* Left Panel */}

          <div className="bg-blue-600 text-white p-10 w-1/2 flex flex-col justify-center">

            <h2 className="text-3xl font-bold mb-4">
              Sign Up
            </h2>

            <p>
              Create an account to enjoy shopping with amazing deals.
            </p>

            <img
              src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
              className="mt-8 w-40"
              alt="signup"
            />

          </div>


          {/* Right Panel */}

          <div className="p-8 w-1/2">

            <form onSubmit={handleSignup} className="space-y-4">

              {/* Name */}
<input
  type="text"
  placeholder="Full Name"
  required
  className="w-full border p-2 rounded"
  value={name}
  onChange={(e) => {
    const value = e.target.value.replace(/[^A-Za-z ]/g, "")
    setName(value)
  }}
/>

              {/* Email */}

              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Phone */}

              <input
                type="tel"
                placeholder="Phone Number"
                required
                maxLength={10}
                className="w-full border p-2 rounded"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "")
                  setPhone(value)
                }}
              />

              {/* Password */}

              <input
                type="password"
                placeholder="Password"
                required
                className="w-full border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* OTP */}

              <div className="flex gap-2">

                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full border p-2 rounded"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button
                  type="button"
                  onClick={sendOtp}
                  className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
                >
                  Send OTP
                </button>

              </div>


              {/* Remember me */}

              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember me
                </label>

                <a href="#" className="text-blue-600 hover:underline">
                  Forgot Password?
                </a>

              </div>


              {/* Signup Button */}

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Create Account
              </button>


              {/* Login link */}

              <p className="text-sm text-center mt-3">

                Already have an account?

                <span
                  className="text-blue-600 cursor-pointer ml-1"
                  onClick={() => router.push("/login")}
                >
                  Login
                </span>

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
// import Navbar from "@/components/Navbar"

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

//     if (remember) {
//       localStorage.setItem("isLoggedIn", "true")
//     } else {
//       sessionStorage.setItem("isLoggedIn", "true")
//     }

//     alert("Account created successfully!")

//     router.push("/login")

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

//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 required
//                 className="w-full border p-2 rounded"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
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