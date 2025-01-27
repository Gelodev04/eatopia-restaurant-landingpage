import React from "react";

export const Rightarrow = () => {
  return (
    <svg

      fill="#000000"
      viewBox="0 0 24 24"
      id="right-arrow"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-color w-[25px]"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          id="primary"
          d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z"
          style={{ fill: '#ef4444' }}
        ></path>
      </g>
    </svg>
  );
};

export default function OurStory() {
  return (
    <button className="my-5 flex justify-center items-center gap-1">
      <span className="text-red-500 uppercase text-sm font-medium">Our Story</span>
      <span>
        <Rightarrow />
      </span>
    </button>
  );
}
