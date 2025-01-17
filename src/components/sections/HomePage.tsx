import React from "react";
import Carousel from "../ui/Carousel";
import LookMenu from "../ui/LookMenu";

export default function HomePage() {
  return (
    <>
      <div className="absolute  inset-[80px] z-10 flex flex-col items-center justify-center ">
          <h1 className="text-white text-4xl italic">Welcome to </h1>
          <span className="text-white text-7xl">Eatopia</span>
          <LookMenu/>
        </div>
      <Carousel />
    </>
  );
}
