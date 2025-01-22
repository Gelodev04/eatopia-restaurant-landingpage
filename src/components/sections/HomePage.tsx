import React from "react";
import Carousel from "../ui/Carousel";
import LookMenu from "../ui/LookMenu";

export default function HomePage() {
  return (
    <>
    
      <div id="home" className="min-h-screen ">
        <div className="absolute inset-y-[300px]  inset-[100px]  z-10 flex flex-col items-center justify-center ">
            <h1 className="text-white text-4xl italic">Welcome to </h1>
            <span className="text-white text-7xl font-semibold ">Eatopia</span>
            <LookMenu/>
          </div>
        <Carousel />
      </div>
    </>
  );
}
