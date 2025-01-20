"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/style/style.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";


interface Review {
  profile: string;
  description: string;
  star: number;
  place: string;
}

export default function ReviewCarousel() {
  const [reviews, setReviews] = useState<Review[]>([]); 
  useEffect(() => {
    fetch("/data/data.json") 
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <div className="relative">
      
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

     
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000 }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="h-[400px]  flex flex-col items-center justify-center p-6 text-center">
              <Image
                src={review.profile || "/default-profile.png"} 
                alt={`Profile of reviewer ${index + 1}`}
                className="w-[150px] h-[150px]  rounded-full object-cover  border-red-500 border-large"
                width={500}
                height={500}
              />
              <p className="text-lg italic text-gray-600 mt-5">
                "{review.description || "No description available."}"
              </p>
              <div className="text-red-500 text-2xl ">
                {"★".repeat(review.star)} 
              </div>
              <p className=" uppercase text-sm mt-2">{review.place}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
