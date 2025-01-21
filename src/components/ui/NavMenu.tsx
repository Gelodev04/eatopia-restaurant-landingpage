import React from "react";

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
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-1/2 lg:w-1/4 bg-white z-[9999] shadow-lg transform transition-transform duration-300 ${
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

        <div>
          <h1 className="uppercase font-semibold mt-10">Gallery</h1>
        </div>
      </ul>
    </div>
  );
}
