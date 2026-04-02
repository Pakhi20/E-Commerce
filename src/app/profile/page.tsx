"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {

  const router = useRouter()

  const [user, setUser] = useState<any>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  })

  const [errors, setErrors] = useState<any>({})

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn")

    if (loginStatus === "true") {
      setIsLoggedIn(true)

      const data = {
        name: localStorage.getItem("userName") || "User",
        email: localStorage.getItem("userEmail") || "No Email",
        phone: localStorage.getItem("userPhone") || "",
        address: localStorage.getItem("userAddress") || ""
      }

      setUser(data)
      setFormData(data)
    }
  }, [])

  // ✅ Validation
  const validate = (field: string, value: string) => {
    let newErrors: any = { ...errors }

    if (field === "name") {
      const nameRegex = /^[A-Za-z\s]+$/
      if (!nameRegex.test(value)) {
        newErrors.name = "Only letters allowed"
      } else {
        delete newErrors.name
      }
    }

    if (field === "phone") {
      const phoneRegex = /^[0-9]{10}$/
      if (!phoneRegex.test(value)) {
        newErrors.phone = "Phone must be 10 digits"
      } else {
        delete newErrors.phone
      }
    }

    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        newErrors.email = "Invalid email"
      } else {
        delete newErrors.email
      }
    }

    setErrors(newErrors)
  }

  const handleChange = (field: string, value: string) => {

    // ✅ Phone only number allow
    if (field === "phone") {
      value = value.replace(/[^0-9]/g, "")
    }

    setFormData({ ...formData, [field]: value })
    validate(field, value)
  }

  const handleSave = () => {

    if (Object.keys(errors).length > 0) return

    localStorage.setItem("userName", formData.name)
    localStorage.setItem("userEmail", formData.email)
    localStorage.setItem("userPhone", formData.phone)
    localStorage.setItem("userAddress", formData.address)

    setUser(formData)
    setIsEditing(false)
  }

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Please login to view profile</p>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
              {user.name.charAt(0)}
            </div>

            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </div>

          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-600 font-medium"
          >
            ✏️ {isEditing ? "Cancel" : "Edit Profile"}
          </button>

        </div>

        {/* Profile Details */}
        {!isEditing ? (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <p className="text-gray-500 text-sm">Full Name</p>
              <p className="font-medium">{user.name}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="font-medium">{user.phone || "Not Added"}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Address</p>
              <p className="font-medium">{user.address || "Not Added"}</p>
            </div>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Name */}
            <div>
              <input
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`border p-2 rounded w-full ${errors.name ? "border-red-500" : ""}`}
                placeholder="Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`border p-2 rounded w-full ${errors.email ? "border-red-500" : ""}`}
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                inputMode="numeric"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={`border p-2 rounded w-full ${errors.phone ? "border-red-500" : ""}`}
                placeholder="Phone"
                maxLength={10}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Address */}
            <div>
              <input
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="Address"
              />
            </div>

            <button
              onClick={handleSave}
              className="col-span-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              Save Changes
            </button>

          </div>

        )}

        {/* Extra Sections */}
        {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="p-4 border rounded-lg hover:shadow cursor-pointer">
            📦 Orders
          </div>

          <div className="p-4 border rounded-lg hover:shadow cursor-pointer">
            ❤️ Wishlist
          </div>

          <div className="p-4 border rounded-lg hover:shadow cursor-pointer">
            📍 Saved Addresses
          </div>

        </div> */}




        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">

  <div
    onClick={() => router.push("/orders")}
    className="p-4 border rounded-lg hover:shadow cursor-pointer"
  >
    📦 Orders
  </div>

  <div
    onClick={() => router.push("/wishlist")}
    className="p-4 border rounded-lg hover:shadow cursor-pointer"
  >
    ❤️ Wishlist
  </div>

  <div
    onClick={() => router.push("/addresses")}
    className="p-4 border rounded-lg hover:shadow cursor-pointer"
  >
    📍 Saved Addresses
  </div>

</div>





        {/* Actions */}
        <div className="mt-6 flex gap-4">

          <button
            onClick={() => router.push("/")}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            Home
          </button>

          <button
            onClick={() => {
              localStorage.clear()
              router.push("/")
            }}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  )
}
























// "use client"

// import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"

// export default function ProfilePage() {

//   const router = useRouter()

//   const [user, setUser] = useState<any>(null)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [isEditing, setIsEditing] = useState(false)
//   const [successMsg, setSuccessMsg] = useState("")

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: ""
//   })

//   const [errors, setErrors] = useState<any>({})

//   useEffect(() => {
//     const loginStatus = localStorage.getItem("isLoggedIn")

//     if (loginStatus === "true") {
//       setIsLoggedIn(true)

//       const data = {
//         name: localStorage.getItem("userName") || "User",
//         email: localStorage.getItem("userEmail") || "No Email",
//         phone: localStorage.getItem("userPhone") || "",
//         address: localStorage.getItem("userAddress") || ""
//       }

//       setUser(data)
//       setFormData(data)
//     }
//   }, [])

//   // 🔹 Validation function (real-time)
//   const validate = (field: string, value: string) => {

//     let newErrors: any = { ...errors }

//     if (field === "name") {
//       const nameRegex = /^[A-Za-z\s]+$/
//       if (!nameRegex.test(value)) {
//         newErrors.name = "Only letters allowed"
//       } else {
//         delete newErrors.name
//       }
//     }

//     if (field === "phone") {
//       const phoneRegex = /^[0-9]{10}$/
//       if (!phoneRegex.test(value)) {
//         newErrors.phone = "Phone must be 10 digits"
//       } else {
//         delete newErrors.phone
//       }
//     }

//     if (field === "email") {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//       if (!emailRegex.test(value)) {
//         newErrors.email = "Invalid email format"
//       } else {
//         delete newErrors.email
//       }
//     }

//     setErrors(newErrors)
//   }

//   const handleChange = (field: string, value: string) => {
//     setFormData({ ...formData, [field]: value })
//     validate(field, value)
//   }

//   // 🔹 Save
//   const handleSave = () => {

//     if (Object.keys(errors).length > 0) return

//     localStorage.setItem("userName", formData.name)
//     localStorage.setItem("userEmail", formData.email)
//     localStorage.setItem("userPhone", formData.phone)
//     localStorage.setItem("userAddress", formData.address)

//     setUser(formData)
//     setIsEditing(false)
//     setSuccessMsg("Profile updated successfully ✅")

//     setTimeout(() => setSuccessMsg(""), 2000)
//   }

//   if (!isLoggedIn) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p>Please login to view profile</p>
//       </div>
//     )
//   }

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p>Loading...</p>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">

//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">

//           <div className="flex items-center gap-4">
//             <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
//               {user.name.charAt(0)}
//             </div>

//             <div>
//               <h2 className="text-xl font-bold">{user.name}</h2>
//               <p className="text-gray-500">{user.email}</p>
//             </div>
//           </div>

//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="text-blue-600 font-medium"
//           >
//             ✏️ {isEditing ? "Cancel" : "Edit Profile"}
//           </button>
//         </div>

//         {/* Success Message */}
//         {successMsg && (
//           <p className="text-green-600 mb-4">{successMsg}</p>
//         )}

//         {/* VIEW MODE */}
//         {!isEditing ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//             <div>
//               <p className="text-gray-500 text-sm">Full Name</p>
//               <p>{user.name}</p>
//             </div>

//             <div>
//               <p className="text-gray-500 text-sm">Email</p>
//               <p>{user.email}</p>
//             </div>

//             <div>
//               <p className="text-gray-500 text-sm">Phone</p>
//               <p>{user.phone || "Not Added"}</p>
//             </div>

//             <div>
//               <p className="text-gray-500 text-sm">Address</p>
//               <p>{user.address || "Not Added"}</p>
//             </div>

//           </div>
//         ) : (

//           /* EDIT MODE */
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//             {/* Name */}
//             <div>
//               <input
//                 value={formData.name}
//                 onChange={(e) => handleChange("name", e.target.value)}
//                 className={`border p-2 rounded w-full ${errors.name ? "border-red-500" : ""}`}
//                 placeholder="Name"
//               />
//               {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//             </div>

//             {/* Email */}
//             <div>
//               <input
//                 value={formData.email}
//                 onChange={(e) => handleChange("email", e.target.value)}
//                 className={`border p-2 rounded w-full ${errors.email ? "border-red-500" : ""}`}
//                 placeholder="Email"
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//             </div>

//             {/* Phone */}
//             <div>
//               <input
//                 value={formData.phone}
//                 onChange={(e) => handleChange("phone", e.target.value)}
//                 className={`border p-2 rounded w-full ${errors.phone ? "border-red-500" : ""}`}
//                 placeholder="Phone"
//                 maxLength={10}
//               />
//               {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//             </div>

//             {/* Address */}
//             <div>
//               <input
//                 value={formData.address}
//                 onChange={(e) => handleChange("address", e.target.value)}
//                 className="border p-2 rounded w-full"
//                 placeholder="Address"
//               />
//             </div>

//             <button
//               onClick={handleSave}
//               className="col-span-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
//             >
//               Save Changes
//             </button>

//           </div>
//         )}

//         {/* Actions */}
//         <div className="mt-6 flex gap-4">

//           <button
//             onClick={() => router.push("/")}
//             className="bg-gray-200 px-4 py-2 rounded"
//           >
//             Home
//           </button>

//           <button
//             onClick={() => {
//               localStorage.clear()
//               router.push("/")
//             }}
//             className="bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Logout
//           </button>

//         </div>

//       </div>

//     </div>
//   )
// }




































// "use client"

// import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"

// export default function ProfilePage() {

//   const router = useRouter()

//   const [user, setUser] = useState<any>(null)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [isEditing, setIsEditing] = useState(false)

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: ""
//   })

//   useEffect(() => {
//     const loginStatus = localStorage.getItem("isLoggedIn")

//     if (loginStatus === "true") {
//       setIsLoggedIn(true)

//       const data = {
//         name: localStorage.getItem("userName") || "User",
//         email: localStorage.getItem("userEmail") || "No Email",
//         phone: localStorage.getItem("userPhone") || "Not Added",
//         address: localStorage.getItem("userAddress") || "Not Added"
//       }

//       setUser(data)
//       setFormData(data)
//     }
//   }, [])

//   if (!isLoggedIn) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p>Please login to view profile</p>
//       </div>
//     )
//   }

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p>Loading...</p>
//       </div>
//     )
//   }

//   const handleSave = () => {
//     localStorage.setItem("userName", formData.name)
//     localStorage.setItem("userEmail", formData.email)
//     localStorage.setItem("userPhone", formData.phone)
//     localStorage.setItem("userAddress", formData.address)

//     setUser(formData)
//     setIsEditing(false)
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">

//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">

//           <div className="flex items-center gap-4">

//             <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
//               {user.name.charAt(0)}
//             </div>

//             <div>
//               <h2 className="text-xl font-bold">{user.name}</h2>
//               <p className="text-gray-500">{user.email}</p>
//             </div>

//           </div>

//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="text-blue-600 font-medium"
//           >
//             ✏️ {isEditing ? "Cancel" : "Edit Profile"}
//           </button>

//         </div>

//         {/* Profile Details */}
//         {!isEditing ? (

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//             <div>
//               <p className="text-gray-500 text-sm">Full Name</p>
//               <p className="font-medium">{user.name}</p>
//             </div>

//             <div>
//               <p className="text-gray-500 text-sm">Email</p>
//               <p className="font-medium">{user.email}</p>
//             </div>

//             <div>
//               <p className="text-gray-500 text-sm">Phone</p>
//               <p className="font-medium">{user.phone}</p>
//             </div>

//             <div>
//               <p className="text-gray-500 text-sm">Address</p>
//               <p className="font-medium">{user.address}</p>
//             </div>

//           </div>

//         ) : (

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//             <input
//               value={formData.name}
//               onChange={(e) => setFormData({...formData, name: e.target.value})}
//               className="border p-2 rounded"
//               placeholder="Name"
//             />

//             <input
//               value={formData.email}
//               onChange={(e) => setFormData({...formData, email: e.target.value})}
//               className="border p-2 rounded"
//               placeholder="Email"
//             />

//             <input
//               value={formData.phone}
//               onChange={(e) => setFormData({...formData, phone: e.target.value})}
//               className="border p-2 rounded"
//               placeholder="Phone"
//             />

//             <input
//               value={formData.address}
//               onChange={(e) => setFormData({...formData, address: e.target.value})}
//               className="border p-2 rounded"
//               placeholder="Address"
//             />

//             <button
//               onClick={handleSave}
//               className="col-span-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
//             >
//               Save Changes
//             </button>

//           </div>

//         )}

//         {/* Extra Sections */}
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">

//           <div className="p-4 border rounded-lg hover:shadow cursor-pointer">
//             📦 Orders
//           </div>

//           <div className="p-4 border rounded-lg hover:shadow cursor-pointer">
//             ❤️ Wishlist
//           </div>

//           <div className="p-4 border rounded-lg hover:shadow cursor-pointer">
//             📍 Saved Addresses
//           </div>

//         </div>

//         {/* Actions */}
//         <div className="mt-6 flex gap-4">

//           <button
//             onClick={() => router.push("/")}
//             className="bg-gray-200 px-4 py-2 rounded"
//           >
//             Home
//           </button>

//           <button
//             onClick={() => {
//               localStorage.clear()
//               router.push("/")
//             }}
//             className="bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Logout
//           </button>

//         </div>

//       </div>

//     </div>
//   )
// }












