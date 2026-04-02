"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import Link from "next/link"
import Image from "next/image"

export default function OfferCarousel() {

  const offers = [

    {
      title: "Big Electronics Sale",
      discount: "Up to 50% OFF",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      link: "/products/electronics?sub=Mobile"
    },

    {
      title: "Fashion Mega Sale",
      discount: "Flat 40% OFF",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      link: "/products/fashion"
    },

    {
      title: "Sports Deals",
      discount: "Save up to ₹2000",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      link: "/products/sports"
    },

    {
      title: "Home & Kitchen Sale",
      discount: "Starting ₹199",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
      link: "/products/home"
    },

    {
      title: "Beauty Products Sale",
      discount: "Up to 35% OFF",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
      link: "/products/beauty"
    },

    {
      title: "Books Festival",
      discount: "Flat 30% OFF",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      link: "/products/books/education"
    },

    {
      title: "Furniture Deals",
      discount: "Save up to ₹7000",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      link: "/products/furniture"
    },

    {
      title: "Toy Carnival",
      discount: "Up to 45% OFF",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
      link: "/products/toys"
    },

    {
      title: "Health & Fitness Sale",
      discount: "Starting ₹299",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      link: "/products/health"
    }

  ]

  return (

    <div className="p-10">

      <h2 className="text-2xl font-bold mb-6">
        Exciting Offers
      </h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >

        {offers.map((offer, index) => (

          <SwiperSlide key={index}>

            <Link href={offer.link}>

              <div className="relative cursor-pointer rounded-xl overflow-hidden">

                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={500}
                  height={200}
                  className="h-48 w-full object-cover"
                />

                <div className="absolute bottom-4 left-4 text-white">

                  <h2 className="text-lg font-bold">
                    {offer.title}
                  </h2>

                  <p className="text-sm">
                    {offer.discount}
                  </p>

                </div>

              </div>

            </Link>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>

  )
}