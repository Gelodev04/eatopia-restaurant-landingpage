import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import HomePage from "@/components/sections/HomePage";
import FirstSection from "@/components/sections/FirstSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <FirstSection />
      <div className="h-screen"></div>
    </div>
  );
}
