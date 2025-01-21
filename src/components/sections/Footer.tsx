import React from "react";
import { EmailIcon, LocationIcon } from "../svgicons/footericons";
import { PhoneIcon } from "../svgicons/footericons";
import Image from "next/image";
import { FacebookIcon } from "../svgicons/navbaricons";
import { InstagramIcon } from "../svgicons/navbaricons";
import { TiktokIcon } from "../svgicons/navbaricons";

export default function Footer() {
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
    { src: "/images/carousel1.jpg", alt: "gallery1" },
    { src: "/images/carousel2.jpg", alt: "gallery1" },
    { src: "/images/carousel3.jpg", alt: "gallery1" },
  ];

  return (
    <div className=" text-white bg-[#212529] pt-20 mt-[10rem] ">
      <div className="px-5">
        <h1 className="uppercase font-semibold text-xl">Contact Us</h1>
        <div className="flex flex-col gap-3 mt-5 text-sm text-gray-400">
          <div className="flex gap-1">
            <LocationIcon />
            <p>3rd floor, 842 Pine Ave, San Francisco, CA 94110</p>
          </div>
          <div className="flex gap-1">
            <PhoneIcon />
            <p>(+1) 91 415 3421</p>
          </div>
          <div className="flex gap-1">
            <EmailIcon />
            <p>contact@site.com</p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="uppercase font-semibold text-xl">Opening Time</h1>
          <div className="flex flex-col  mt-5 text-sm text-gray-400">
            <p>08:00 AM – 9:00 PM</p>
            <p>Everyday</p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="uppercase font-semibold text-xl">Gallery</h1>
          <div className="grid grid-cols-4     mt-5 text-sm max-w-[430px]">
            {images.map((image, index) => (
              <Image
                width={500}
                height={500}
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-[90px] h-[90px] object-cover mb-2  "
              />
            ))}
            <div className=""></div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-[#111111] py-5 px-5 flex items-center justify-between">
        <ul>
          <li className="flex items-center gap-3">
            <InstagramIcon />
            <TiktokIcon />
            <FacebookIcon />
          </li>
        </ul>
        <p className=" text-sm">@Angelo Manalo | Built with Nextjs</p>
      </div>
    </div>
  );
}
