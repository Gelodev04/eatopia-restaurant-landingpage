import React from "react";
import OurStory from "../ui/OurStory";
import Image from "next/image";

export default function FirstSection() {
  return (
    <div className="mt-[5rem] flex flex-col">
      <h1 className="text-6xl text-center font-bold">Welcome</h1>
      <p className="text-center text-lg mt-7">
        Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
        fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
        facilisis ligula sem id neque.
      </p>
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
    </div>
  );
}
