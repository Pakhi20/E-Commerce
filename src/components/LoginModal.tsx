"use client"

import { useEffect } from "react"
import SignInForm from "./SignInForm"

interface Props {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function LoginModal({ isOpen, onClose, onSuccess }: Props) {

  // ✅ Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden" // prevent scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // ✅ Close when clicking outside modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // ✅ Handle success (close modal + parent logic)
  const handleSuccess = () => {
    onSuccess()
    onClose()
  }

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/30 z-50"
    >

      <div className="bg-white w-[750px] rounded-lg flex overflow-hidden shadow-lg animate-fadeIn">

        {/* Left Panel */}
        <div className="bg-blue-600 text-white p-8 w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <p className="text-sm">
            Get access to your Orders, Wishlist and Recommendations
          </p>
        </div>

        {/* Right Panel */}
        <div className="p-8 w-1/2 relative">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-3 text-xl hover:text-red-500"
          >
            ✕
          </button>

          {/* Login Form */}
          <SignInForm onSuccess={handleSuccess} />

        </div>

      </div>

    </div>
  )
}


// "use client"

// import SignInForm from "./SignInForm"

// interface Props {
//   isOpen: boolean
//   onClose: () => void
//   onSuccess: () => void
// }

// export default function LoginModal({ isOpen, onClose, onSuccess }: Props) {

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/20 z-50">

//       <div className="bg-white w-187.5 rounded-lg flex overflow-hidden shadow-lg">      

//         <div className="bg-blue-600 text-white p-8 w-1/2 flex flex-col justify-center">

//           <h2 className="text-2xl font-bold mb-4">
//             Login
//           </h2>

//           <p className="text-sm">
//             Get access to your Orders, Wishlist and Recommendations
//           </p>

//         </div>

      

//         <div className="p-8 w-1/2 relative">

//           <button
//             onClick={onClose}
//             className="absolute right-4 top-3 text-xl"
//           >
//             ✕
//           </button>

//           <SignInForm onSuccess={onSuccess} />

//         </div>

//       </div>

//     </div>
//   )
// }










