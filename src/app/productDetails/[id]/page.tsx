"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";
import { Product, Variant } from "@/types/product";
import { useWishlist } from "@/context/WishlistContext";






export default function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<any>({});
  const [selectedSize, setSelectedSize] = useState("");

  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

  // 🔹 Load Product
  useEffect(() => {
    const foundProduct = products.find(
      (p) => p.id.toString() === id.toString()
    );

    if (foundProduct) {
      setProduct(foundProduct);

      // ✅ Variant থাকলে default set
      if (foundProduct.variants?.length) {
        const firstVariant = foundProduct.variants[0];
        setSelectedVariant(firstVariant);

        const defaultOptions: any = {};
        Object.keys(firstVariant).forEach((key) => {
          if (key !== "price" && key !== "image") {
            defaultOptions[key] = firstVariant[key];
          }
        });

        setSelectedOptions(defaultOptions);
      }

      // ✅ Size (fashion)
      if (foundProduct.sizes?.length) {
        setSelectedSize(foundProduct.sizes[0]);
      }
    }
  }, [id]);

  // 🔹 Variant Matching (core logic)
  useEffect(() => {
    if (!product?.variants) return;

    const matched = product.variants.find((variant) => {
      return Object.keys(selectedOptions).every(
        (key) => variant[key] === selectedOptions[key]
      );
    });

    if (matched) setSelectedVariant(matched);
  }, [selectedOptions, product]);

  if (!product) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  // 🔹 Dynamic Variant Keys
  const variantKeys =
    product.variants?.length > 0
      ? Object.keys(product.variants[0]).filter(
          (key) => key !== "price" && key !== "image"
        )
      : [];

  // 🔹 Unique options generator
  const getOptions = (key: string) => {
    return [
      ...new Set(
        product.variants
          ?.map((v: any) => v[key])
          .filter((val: any) => val)
      ),
    ];
  };

  // 🔹 Wishlist check
  const isInWishlist = wishlist.some(
    (item: any) =>
      item.id === product.id &&
      JSON.stringify(item.selectedOptions) ===
        JSON.stringify(selectedOptions) &&
      item.selectedSize === selectedSize
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow">
        
        {/* LEFT SIDE */}
        <div>
          <div className="relative w-full h-100">
            <Image
              src={selectedVariant?.image || product.image}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
              
            />
            <button
  onClick={addToWishlist}
  className="w-full bg-pink-500 text-white py-3 rounded-xl font-semibold mt-2"
>
  ❤️ Add to Wishlist
</button>
          </div>

          {/* ✅ SIZE (Fashion আলাদা থাকবে) */}
          {product.sizes && (
            <div className="mt-4">
              <h3 className="font-medium">Select Size</h3>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded ${
                      selectedSize === size
                        ? "border-blue-500 bg-blue-100"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ✅ ALL VARIANTS AUTO SHOW */}
          {variantKeys.map((key) => (
            <div className="mt-4" key={key}>
              <h3 className="font-medium capitalize">
                Select {key}
              </h3>

              <div className="flex gap-2 mt-2 flex-wrap">
                {getOptions(key).map((value: string) => (
                  <button
                    key={value}
                    onClick={() =>
                      setSelectedOptions({
                        ...selectedOptions,
                        [key]: value,
                      })
                    }
                    className={`px-3 py-1 border rounded ${
                      selectedOptions[key] === value
                        ? "border-blue-500 bg-blue-100"
                        : "border-gray-300"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col gap-3">
            {/* <AddToCartButton
              product={product}
              size={selectedSize}
              variant={selectedVariant}
              options={selectedOptions}
            /> */}
            {selectedVariant && (
  <AddToCartButton
    product={product}
    size={selectedSize}
    variant={selectedVariant}
    options={selectedOptions}
  />
)}

            <button
              onClick={() =>
                isInWishlist
                  ? removeFromWishlist(product.id)
                  : addToWishlist({
                      ...product,
                      selectedOptions,
                      selectedSize,
                      price: selectedVariant?.price || product.price,
                      image:
                        selectedVariant?.image || product.image,
                    })
              }
              // className="bg-pink-500 text-white py-2 rounded-lg"
            >
              {/* {isInWishlist
                ? "❤️ Remove from Wishlist"
                : "🤍 Add to Wishlist"} */}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-2xl font-semibold">
            {product.title}
          </h1>

          {/* PRICE */}
          <p className="text-green-600 text-2xl font-bold mt-2">
            ₹{selectedVariant?.price || product.price}
          </p>

          <p className="mt-1">⭐ {product.rating}</p>

          {/* DETAILS */}
          <div className="mt-4 space-y-1 text-sm text-gray-700">
            {product.brand && (
              <p><b>Brand:</b> {product.brand}</p>
            )}
            {product.delivery && (
              <p><b>Delivery:</b> {product.delivery}</p>
            )}
            {product.replacement && (
              <p><b>Replacement:</b> {product.replacement}</p>
            )}
          </div>

          {/* FEATURES */}
          {product.features && (
            <div className="mt-4">
              <h3 className="font-semibold">Highlights</h3>
              <ul className="list-disc pl-5">
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* SPECS */}
          {product.specs && (
            <div className="mt-4">
              <h3 className="font-semibold">Specifications</h3>
              {product.specs.map((s, i) => (
                <div key={i} className="flex border-b">
                  <div className="w-1/3 bg-gray-100 p-2">
                    {s.label}
                  </div>
                  <div className="w-2/3 p-2">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
















































// {show cookie variation}

// "use client";

// import { use, useEffect, useState } from "react";
// import Image from "next/image";
// import { products } from "@/data/products";
// import AddToCartButton from "@/components/AddToCartButton";
// import { Product, Variant } from "@/types/product";
// import { useWishlist } from "@/context/WishlistContext";

// export default function ProductDetails({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const resolvedParams = use(params);
//   const id = resolvedParams.id;

//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedOptions, setSelectedOptions] = useState<any>({});
//   const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

//   const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

//   // Load product
//   useEffect(() => {
//     const foundProduct = products.find(
//       (p) => p.id.toString() === id.toString()
//     );

//     if (foundProduct) {
//       setProduct(foundProduct);

//       if (foundProduct.variants?.length) {
//         const firstVariant = foundProduct.variants[0];
//         setSelectedVariant(firstVariant);

//         // Set default selected options
//         const options: any = {};
//         Object.keys(firstVariant).forEach((key) => {
//           if (key !== "price" && key !== "image") {
//             options[key] = firstVariant[key];
//           }
//         });
//         setSelectedOptions(options);
//       }
//     }
//   }, [id]);

//   // Match variant
//   useEffect(() => {
//     if (!product) return;

//     const matched = product.variants.find((v) => {
//       return Object.keys(selectedOptions).every(
//         (key) => v[key] === selectedOptions[key]
//       );
//     });

//     if (matched) setSelectedVariant(matched);
//   }, [selectedOptions, product]);

//   if (!product || !selectedVariant) {
//     return <div className="p-10 text-center">Loading...</div>;
//   }

//   // Get dynamic variant options
//   const optionTypes = Object.keys(product.variants[0]).filter(
//     (key) => key !== "price" && key !== "image"
//   );

//   const getOptions = (type: string) => {
//     return [
//       ...new Set(
//         product.variants
//           .map((v: any) => v[type])
//           .filter((v: any) => v)
//       ),
//     ];
//   };

//   // Wishlist check
//   const isInWishlist = wishlist.some(
//     (item: any) =>
//       item.id === product.id &&
//       JSON.stringify(item.selectedOptions) ===
//         JSON.stringify(selectedOptions)
//   );

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow">
        
//         {/* LEFT */}
//         <div>
//           <div className="relative w-full h-[400px]">
//             <Image
//               src={selectedVariant.image || product.image}
//               alt={product.title}
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>

//           {/* Dynamic Variant Options */}
//           {optionTypes.map((type) => (
//             <div className="mt-4" key={type}>
//               <h3 className="font-medium">Select {type}</h3>
//               <div className="flex gap-2 mt-2">
//                 {getOptions(type).map((value: string) => (
//                   <button
//                     key={value}
//                     onClick={() =>
//                       setSelectedOptions({
//                         ...selectedOptions,
//                         [type]: value,
//                       })
//                     }
//                     className={`px-3 py-1 border rounded ${
//                       selectedOptions[type] === value
//                         ? "border-blue-500 bg-blue-100"
//                         : "border-gray-300"
//                     }`}
//                   >
//                     {value}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}

//           {/* BUTTONS */}
//           <div className="mt-6 flex flex-col gap-3">
//             <AddToCartButton
//               product={product}
//               variant={selectedVariant}
//               // options={selectedOptions}
//             />

//             <button
//               onClick={() =>
//                 isInWishlist
//                   ? removeFromWishlist(product.id)
//                   : addToWishlist({
//                       ...product,
//                       selectedOptions,
//                       price: selectedVariant.price,
//                       image: selectedVariant.image,
//                     })
//               }
//             >
//               {isInWishlist
//                 ? "❤️ Remove from Wishlist"
//                 : "🤍 Add to Wishlist"}
//             </button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div>
//           <h1 className="text-2xl font-semibold">{product.title}</h1>

//           <p className="text-green-600 text-2xl font-bold mt-2">
//             ₹{selectedVariant.price}
//           </p>

//           <p className="mt-1">⭐ {product.rating}</p>

//           <div className="mt-4 space-y-1 text-sm text-gray-700">
//             {product.brand && (
//               <p><b>Brand:</b> {product.brand}</p>
//             )}
//             {product.delivery && (
//               <p><b>Delivery:</b> {product.delivery}</p>
//             )}
//             {product.replacement && (
//               <p><b>Replacement:</b> {product.replacement}</p>
//             )}
//           </div>

//           {/* FEATURES */}
//           {product.features && (
//             <div className="mt-4">
//               <h3 className="font-semibold">Highlights</h3>
//               <ul className="list-disc pl-5">
//                 {product.features.map((f) => (
//                   <li key={f}>{f}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* SPECS */}
//           {product.specs && (
//             <div className="mt-4">
//               <h3 className="font-semibold">Specifications</h3>
//               {product.specs.map((s, i) => (
//                 <div key={i} className="flex border-b">
//                   <div className="w-1/3 bg-gray-100 p-2">
//                     {s.label}
//                   </div>
//                   <div className="w-2/3 p-2">
//                     {s.value}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           <p className="mt-4">{product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

























