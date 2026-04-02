import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "oasis.opstatics.com",
      },
      {
        protocol: "https",
        hostname: "images.openai.com"
      }
    ],
  },
};

export default nextConfig;













































































































































// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "images.unsplash.com",
//       "plus.unsplash.com",
//       "media.istockphoto.com","oasis.opstatics.com"

//     ],
//   },
// };

// module.exports = nextConfig;










































// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//     ],
//   },
// }









// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "images.unsplash.com",
//       "media.istockphoto.com"
//     ],
//   },
// };

// module.exports = nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//     ],
//   },
// }

// module.exports = nextConfig
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   images: {
//     domains: ['images.unsplash.com',"rukminim1.flixcart.com"],
    
//   },
// };

// export default nextConfig;
