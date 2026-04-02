import "./globals.css"
import Navbar from "@/components/Navbar"

import { AuthProvider } from "@/context/AuthContext"
import { CartProvider } from "@/context/CartContext"
import { WishlistProvider } from "@/context/WishlistContext"
import { OrderProvider } from "@/context/OrderContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <OrderProvider>
                <Navbar />
                {children}
              </OrderProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}












// import "./globals.css"
// import { CartProvider } from "@/context/CartContext"
// import Navbar from "@/components/Navbar"
// import { AuthProvider } from "@/context/AuthContext"

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {

//   return (

//     <html lang="en">

//       <body className="bg-gray-100 min-h-screen">

//         <AuthProvider>

//           <CartProvider>

//             <Navbar />

//             {children}
            

//           </CartProvider>

//         </AuthProvider>

//       </body>

//     </html>

//   )
// }


