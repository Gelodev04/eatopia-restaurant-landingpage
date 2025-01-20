"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/style/style.css"

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000 }}
        modules={[Navigation, Pagination, Autoplay]}
        className="swiper-pagination-custom"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              style={{ height: "100vh", width: "100%", objectFit: "cover", objectPosition: "center" }}
              src="/images/carousel1.jpg"
              alt="Slide 1"
              width={1000}
              height={1000}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              style={{ height: "100vh", width: "100%", objectFit: "cover", objectPosition: "center" }}
              src="/images/carousel2.jpg"
              alt="Slide 1"
              width={1000}
              height={1000}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
            
              style={{ height: "100vh", width: "100%", objectFit: "cover", objectPosition: "center" }}
              src="/images/carousel3.jpg"
              alt="Slide 1"
              width={1000}
              height={1000}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </SwiperSlide>
        <div className="swiper-button-prev" ></div>
        <div className="swiper-button-next" ></div>
       
      </Swiper>
    </div>
  );
}
