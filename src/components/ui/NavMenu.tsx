import React from "react";
import Image from "next/image";

export default function NavMenu({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  const menuItems = [
    {
      id: 1,
      title: "About",
      url: "#about",
    },
    {
      id: 2,
      title: "Discover",
      url: "#discover",
    },
    {
      id: 3,
      title: "Menu",
      url: "#menu",
    },
    {
      id: 4,
      title: "Book",
      url: "#book",
    },
    {
        id: 5,
        title: "reviews",
        url: "#reviews",
      },
      {
        id: 6,
        title: "contact",
        url: "#contact",
      },
  ];

  const images = [
    { src: "/images/dessert.jpg", alt: "gallery1" },
    { src: "/images/dinner.jpg", alt: "gallery1" },
    { src: "/images/drink.jpg", alt: "gallery1" },
    { src: "/images/food1.jpg", alt: "gallery1" },
    { src: "/images/food2.jpg", alt: "gallery1" },
    { src: "/images/food3.jpg", alt: "gallery1" },
    { src: "/images/food4.jpg", alt: "gallery1" },
    { src: "/images/lucnh.jpg", alt: "gallery1" },
    { src: "/images/restaurant.jpg", alt: "gallery1" },
    
  ];
  return (
    <div
      className={`fixed overflow-y-auto top-0 right-0 h-screen w-1/2 lg:w-1/3 bg-white z-[9999] shadow-lg transform transition-transform duration-300 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute text-2xl top-4 right-4 text-gray-600 hover:text-gray-900"
        aria-label="Close menu"
      >
        ✕
      </button>
      <ul className="flex flex-col items-center justify-center  mt-[6rem]">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.url}
              className="block py-3 px-6 text-md font-semibold text-gray-800 duration-250  uppercase hover:text-red-500"
            >
              {item.title}
            </a>
          </li>
        ))}
        <button className="uppercase bg-black text-white px-3 py-2 text-xs rounded mt-3 hover:bg-red-500 duration-200">
          Reservation
        </button>

        <div className="flex flex-col justify-center items-center pb-10">
          <h1 className="uppercase font-bold tracking-widest mt-10 text-lg">Gallery</h1>
          <ul className="grid grid-cols-3 gap-2 mt-5 gap-y-2">
            {images.map((image, index) => (
              <li key={index}>
                <Image
                width={500}
                height={500}
                  src={image.src}
                  alt={image.alt}
                  className="w-[60px] h-[60px] object-cover lg:w-[90px] lg:h-[90px]   "
                />
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
}
