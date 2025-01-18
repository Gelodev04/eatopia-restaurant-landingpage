import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import HomePage from "@/components/sections/HomePage";
import FirstSection from "@/components/sections/FirstSection";
import SecondSection from "@/components/sections/SecondSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      
      <FirstSection />
      <SecondSection/>
      <div className="h-screen"></div>
    </>
  );
}
