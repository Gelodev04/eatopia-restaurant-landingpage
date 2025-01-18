import React from "react";
import OurStory from "../ui/OurStory";
import Image from "next/image";

export default function FirstSection() {
  return (
    <div className="mt-[5rem] flex flex-col">
      <div className="mx-3">
        <h1 className="text-6xl text-center font-bold">Welcome</h1>
        <p className="text-center text-lg mt-7">
        Welcome to Eatopia, where every dish is crafted with passion and every visit feels like home. Sit back, relax, and let us take you on a delightful culinary journey!
        </p>
      </div>
      <OurStory />
      <div className="overflow-hidden rounded-lg h-[450px] mx-8">
        <Image
          className="rounded-lg duration-300 hover:scale-105 ease-in-out h-full object-cover"
          src="/images/food1.jpg"
          alt="eatopia"
          width={1000}
          height={1000}
        />
      </div>

      <div className="overflow-hidden  mt-[10rem] h-[500px] relative group">
        <div className="absolute bg-black  bg-opacity-[0.4] inset-0 z-10 flex flex-col items-center justify-center ">
          <h1 className="text-red-500 text-4xl italic">Discover </h1>
          <span className="text-white text-7xl font-semibold">Eatopia</span>
        </div>
        <Image
          className=" duration-300 group-hover:scale-105 ease-in-out h-full object-cover w-full"
          src="/images/discoverpic.jpg"
          alt="eatopia"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
