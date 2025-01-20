import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import HomePage from "@/components/sections/HomePage";
import FirstSection from "@/components/sections/FirstSection";
import SecondSection from "@/components/sections/SecondSection";
import OurMenu from "@/components/sections/OurMenu";
import Reservations from "@/components/sections/Reservations";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />

      <FirstSection />
      <SecondSection />
      <div className="bg-gray-100 py-20 mt-10">
        <OurMenu />
        <Reservations />
      </div>
      <div className="h-screen"></div>
    </>
  );
}
