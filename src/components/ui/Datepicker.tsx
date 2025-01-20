"use client";
import { DatePicker } from "@heroui/react";
import { JSX } from "react";

export default function Datepicker(): JSX.Element {
  return (
    
      <DatePicker
        color="primary"
        label="Date"
        variant="faded"
        className="border-black"
      />
    
  );
}
