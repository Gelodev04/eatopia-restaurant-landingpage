"use client";
import React, { useState } from "react";
import { Input } from "@heroui/react";
import "@/style/style.css"

export const InputName = () => {
  return (
    <Input
      label="Name"
      placeholder="Enter your Name"
      type="text"
      variant="faded"
      color="primary"
    />
  );
};

export const InputEmail = () => {
  return (
    <Input
      label="Email"
      placeholder="Enter your Email"
      type="email"
      variant="faded"
      color="primary"
    />
  );
};

export const InputPhone = () => {
  return (
    <Input
      className="phone"
      label="Phone"
      placeholder="Enter your Phone No."
      type="number"
      variant="faded"
      color="primary"
    />
  );
};

export default function InputPeople() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (newValue < 0) {
      setValue(0);
    } else {
      setValue(newValue);
    }
  };

  return (
    <Input
      color="primary"
      label="No. of People"
      labelPlacement="inside"
      placeholder="0"
      type="number"
      value={value.toString()}
      onChange={handleChange}
      variant="faded"
    />
  );
}
