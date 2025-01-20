
import React from "react";
import Datepicker from "../ui/Datepicker"

export default function Reservations() {
  return (
    <div className="mt-20 mx-7">
      <div className="text-center">
        <h1 className="text-2xl text-red-500 italic font-medium">Reservations</h1>
        <p className="uppercase text-5xl font-bold tracking-widest">
          Book Table
        </p>
      </div>
      <Datepicker/>
    </div>
  );
}
