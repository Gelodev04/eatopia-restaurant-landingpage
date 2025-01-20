import React from "react";
import Datepicker from "../ui/Datepicker";
import InputPeople, { InputEmail, InputName, InputPhone } from "../ui/InputPeople";

export default function Reservations() {
  return (
    <div className="mt-20 mx-7">
      <div className="text-center">
        <h1 className="text-2xl text-red-500 italic font-medium">
          Reservations
        </h1>
        <p className="uppercase text-5xl font-bold tracking-widest">
          Book Table
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-5">
        <Datepicker />
        <InputPeople/>
        <InputName/>
        <InputPhone/>
        <InputEmail/>
      </div>
    </div>
  );
}
