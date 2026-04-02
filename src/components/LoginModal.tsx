"use client"

import SignInForm from "./SignInForm"

interface Props {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}




export default function LoginModal({ isOpen, onClose, onSuccess }: Props) {

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/20 z-50">

      <div className="bg-white w-187.5 rounded-lg flex overflow-hidden shadow-lg">

       

        <div className="bg-blue-600 text-white p-8 w-1/2 flex flex-col justify-center">

          <h2 className="text-2xl font-bold mb-4">
            Login
          </h2>

          <p className="text-sm">
            Get access to your Orders, Wishlist and Recommendations
          </p>

        </div>

      

        <div className="p-8 w-1/2 relative">

          <button
            onClick={onClose}
            className="absolute right-4 top-3 text-xl"
          >
            ✕
          </button>

          <SignInForm onSuccess={onSuccess} />

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
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

//       <div className="bg-white w-187.5 rounded-lg flex overflow-hidden shadow-lg">

//         {/* Left Panel (Flipkart Style) */}

//         <div className="bg-blue-600 text-white p-8 w-1/2 flex flex-col justify-center">

//           <h2 className="text-2xl font-bold mb-4">
//             Login
//           </h2>

//           <p className="text-sm">
//             Get access to your Orders, Wishlist and Recommendations
//           </p>

//         </div>

//         {/* Right Panel (Login Form) */}

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
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

//       <div className="bg-white p-6 rounded-lg w-96">

//         <h2 className="text-xl font-bold mb-4">
//           Sign In
//         </h2>

//         <SignInForm onSuccess={onSuccess} />

//         <button
//           onClick={onClose}
//           className="mt-4 text-gray-500"
//         >
//           Close
//         </button>

//       </div>

//     </div>
//   )
// }