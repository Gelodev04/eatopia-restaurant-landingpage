import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import HomePage from "@/components/sections/HomePage";

export default function Home() {
  return (
    <div>
      <Navbar />

      <HomePage />
    </div>
  );
}
