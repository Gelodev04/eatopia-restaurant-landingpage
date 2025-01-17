import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import HomePage from "@/components/sections/HomePage";
import FirstSection from "@/components/sections/FirstSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <div className="mx-4"> 
      <FirstSection />
      </div>
      <div className="h-screen"></div>
    </>
  );
}
