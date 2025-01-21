"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/style/style.css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Carousel() {
  const slides = [
    { src: "/images/carousel1.jpg", alt: "Slide 1" },
    { src: "/images/carousel2.jpg", alt: "Slide 2" },
    { src: "/images/carousel3.jpg", alt: "Slide 3" },
  ];

  return (
    
      <Swiper
      
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000 }}
        modules={[Navigation, Pagination, Autoplay]}
        className="swiper-pagination-custom  "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} >
            <div className="relative ">
              <Image
              className="h-[100vh] object-cover w-full"
                
                src={slide.src}
                alt={slide.alt}
                width={1000}
                height={1000}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    
  );
}
