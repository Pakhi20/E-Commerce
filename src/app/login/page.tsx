import SignInForm from "@/components/SignInForm"

export default function LoginPage() {
  
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/20">

      <div className="bg-white p-8 shadow-lg rounded-lg w-96">

        <h1 className="text-2xl font-bold mb-6">
          Sign In
        </h1>

        <SignInForm />

      </div>
    </div>
  )
}
























// "use client"

// import { useRouter } from "next/navigation"

// export default function LoginPage() {
//   const router = useRouter()

//   const handleLogin = () => {
//     // Fake login
//     localStorage.setItem("isLoggedIn", "true")

//     // Navbar update
//     window.dispatchEvent(new Event("storage"))

//     router.push("/")
//   }

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-md w-96">
//         <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

//         <input
//           type="text"
//           placeholder="Email"
//           className="w-full border px-4 py-2 mb-4 rounded-lg"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border px-4 py-2 mb-4 rounded-lg"
//         />

//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-600 text-white py-2 rounded-lg"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   )
// }













