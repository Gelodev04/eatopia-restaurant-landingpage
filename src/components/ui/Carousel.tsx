"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Carousel() {
  return (
    <div className="h-screen bg-black">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <Image
            style={{ height: "100vh", width: "100%", objectFit: "cover" }}
            src="/images/carousel1.jpg"
            alt="Slide 1"
            width={2000}
            height={1000}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
