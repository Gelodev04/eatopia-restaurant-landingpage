import React from "react";
import Datepicker from "../ui/Datepicker";
import InputPeople, {
  InputEmail,
  InputName,
  InputPhone,
} from "../ui/InputPeople";
import Image from "next/image";

export default function Reservations() {
  return (
    <div className="mt-[6rem] mx-5  flex flex-col justify-center items-center lg:flex-row gap-5">
      <div className="flex flex-col gap-5 w-full lg:w-1/2">
        <div className="text-center">
          <h1 className="text-2xl text-[#ef4444] italic font-medium">
            Reservations
          </h1>
          <p className="uppercase text-5xl font-bold tracking-widest">
            Book Table
          </p>
        </div>
        <div className="mt-5 grid md:grid-cols-2 gap-5 w-full">
          <Datepicker />
          <InputPeople />
          <InputName />
          <InputPhone />
          <InputEmail />
        </div>
        <div className="flex justify-center items-center mt-7">
          <button className="bg-[#0c0c0c] text-white px-5 rounded-lg py-3 uppercase text-xs hover:bg-red-500 duration-200 ease-in-out">
            Book Table
          </button>
        </div>
      </div>

      <div className="mt-8 rounded-lg overflow-hidden h-[410px] w-[360px] ">
        <Image
        className="object-cover rounded-lg h-full w-full hover:scale-105 duration-200"
          src="/images/restaurant.jpg"
          alt="eatopia"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
