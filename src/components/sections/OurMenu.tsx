import React from "react";
import Image from "next/image";
export default function OurMenu() {
  const menu = [
    {
      type: "Lunch",
      image: "/images/lucnh.jpg"
    },
    {
      type: "Dinner",
      image: "/images/dinner.jpg"
    },
    {
      type: "Dessert",
      image: "/images/dessert.jpg"
    },
    {
      type: "Drink",
      image: "/images/drink.jpg"
    },
    
  ]

  return (
    <div id="menu" className="flex flex-col gap-10  items-center mt-20">
      <div className="text-center">
        <h1 className="text-2xl text-red-500 italic">Discover</h1>
        <p className="uppercase text-5xl font-bold tracking-widest">Our Menu</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {menu.map((item, index) => (
          <div key={index} className="relative mx-5 rounded-lg overflow-hidden group">
            <Image
              className="rounded-lg h-[600px] duration-300 object-cover group-hover:scale-110"
              src={item.image}
              alt={item.type}
              width={1000}
              height={1000}
              objectFit="cover"
            />
            <div className="absolute bg-black bg-opacity-[0.3] inset-0 z-10 flex flex-col items-center justify-center">
              <button className="bg-white bg-opacity-[0.9] font-medium text-2xl px-5 rounded-full py-2 hover:text-white hover:bg-red-500 duration-250">
                {item.type}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
