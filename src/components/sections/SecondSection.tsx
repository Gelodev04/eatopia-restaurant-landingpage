import React from "react";
import Image from "next/image";
import { Rightarrow } from "../ui/OurStory";

export default function SecondSection() {
  return (
    <div id="discover" className="mt-[10rem] flex flex-col gap-5 md:gap-0 md:flex-row justify-center lg:mx-[5rem]" style={{ scrollMarginTop: "8rem" }}>
      <div className="relative mx-5   ">
        <Image
          className="h-[350px] object-cover  rounded-lg"
          src="/images/food2.jpg"
          alt="eatopia"
          width={2000}
          height={2000}
        />
        <p className="text-2xl font-semibold mt-7 uppercase tracking-wider">Romantic Restaurant</p>
        <p className="mt-2">
          Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
        </p>
        <button className="uppercase flex gap-1 mt-3 items-center">
          <span className="text-red-500 text-sm">Learn More</span>
          <Rightarrow />
        </button>
      </div>

      <div className="relative mx-5 overflow-hidden ">
        <Image
          className="object-cover h-[350px] rounded-lg"
          src="/images/food3.jpg"
          alt="eatopia"
          width={2000}
          height={2000}
        />
        <p className="text-2xl font-semibold mt-7 uppercase tracking-wider">Delicious Food</p>
        <p className="mt-2">
          Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
        </p>
        <button className="uppercase flex gap-1 mt-3 items-center">
          <span className="text-red-500 text-sm">Learn More</span>
          <Rightarrow />
        </button>
      </div>

      <div className="relative mx-5 overflow-hidden ">
        <Image
          className="object-cover h-[350px] rounded-lg"
          src="/images/food4.jpg"
          alt="eatopia"
          width={2000}
          height={2000}
        />
        <p className="text-2xl font-semibold mt-7 uppercase tracking-wider">Variety of Foods</p>
        <p className="mt-2">
          Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
        </p>
        <button className="uppercase flex gap-1 mt-3 items-center">
          <span className="text-red-500 text-sm">Learn More</span>
          <Rightarrow />
        </button>
      </div>
    </div>
  );
}
