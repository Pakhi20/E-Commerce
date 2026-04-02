"use client"

import Link from "next/link"

export interface DropdownItem {
  children: boolean
  label: string
  href?: string
}

interface Props {
  items: DropdownItem[]
}

export default function NavDropdown({ items }: Props) {
  return (
    <div className="absolute left-0 top-full mt-2 w-64 bg-white text-black shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

      <ul className="py-2">

        {items.map((item, index) => (

          <li
            key={index}
            className="px-4 py-2 hover:bg-gray-100"
          >

            {item.href ? (
              <Link href={item.href} className="block">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}

          </li>

        ))}

      </ul>

    </div>
  )
}









// "use client"

// import Link from "next/link"

// export interface DropdownItem {
//   label: string
//   href?: string
//   children?: DropdownItem[]
// }

// interface Props {
//   items: DropdownItem[]
// }

// export default function NavDropdown({ items }: Props) {
//   return (
//     <div className="absolute left-0 top-full mt-2 w-64 bg-white text-black shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//       <ul className="py-2">
//         {items.map((item, index) => (
//           <li
//             key={index}
//             className="relative group px-4 py-2 hover:bg-gray-100"
//           >
//             {item.href ? (
//               <Link href={item.href} className="block">
//                 {item.label}
//               </Link>
//             ) : (
//               <span className="cursor-pointer">{item.label}</span>
//             )}

//             {item.children && (
//               <ul className="absolute left-full top-0 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 {item.children.map((child, childIndex) => (
//                   <li
//                     key={childIndex}
//                     className="px-4 py-2 hover:bg-gray-100"
//                   >
//                     {child.href ? (
//                       <Link href={child.href} className="block">
//                         {child.label}
//                       </Link>
//                     ) : (
//                       child.label
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }