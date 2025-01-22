"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import CustomNavbarComponent from "../ui/CustomNavbar";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  BurgerIcon,
} from "../svgicons/navbaricons";
import NavMenu from "../ui/NavMenu";

interface NavbarProps {
  className?: string;
  shouldHideOnScroll?: boolean;
  isBlurred?: boolean;
}

export default function CustomNavbar() {
  const menuItems = [
    { name: "About", link: "#about" },
    { name: "Discover", link: "#discover" },
    { name: "Menu", link: "#menu" },
    { name: "Book", link: "#book" },
    { name: "Reviews", link: "#reviews" },
    { name: "Contact", link: "#contact" },
  ];


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <CustomNavbarComponent>
        <a href="#home">
          <h1  className="text-3xl font-semibold tracking-widest hover:text-red-500 duration-200 cursor-pointer">Eatopia</h1>
        </a>

        <div className="lg:block hidden">
          <ul className="flex items-center gap-10 uppercase text-xs">
            {menuItems.map((item, index) => (
              <li key={index} className="hover:text-red-500 duration-200 cursor-pointer">
                <a href={item.link} className="">
              {item.name}
            </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex items-center gap-5 ">
          <li className="flex items-center gap-4">
            <InstagramIcon />
            <TiktokIcon />
            <FacebookIcon />
          </li>
          <li>
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="focus:outline-none"
            >
              <BurgerIcon />
            </button>
          </li>
        </ul>
      </CustomNavbarComponent>

      {/* Conditional rendering of the NavMenu */}
      <NavMenu isVisible={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
