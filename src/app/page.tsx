import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import HomePage from "@/components/sections/HomePage";
import FirstSection from "@/components/sections/FirstSection";
import SecondSection from "@/components/sections/SecondSection";
import OurMenu from "@/components/sections/OurMenu";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      
      <FirstSection />
      <SecondSection/>
      <OurMenu/>
      <div className="h-screen"></div>
    </>
  );
}
