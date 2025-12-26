"use client";

import Navbar from "@/components/navbar/Navbar"; 
import DriverLoginCard from "@/components/driver/DriverLoginCard";

export default function DriverLoginPage() {
return (
  <div
    className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/hero-bg.png')" }}
  >
    {/* NAVBAR */}
    <div className="absolute top-0 left-0 w-full z-20">
      <Navbar />
    </div>

    {/* MAIN CONTENT */}
    <div className="flex justify-between items-center px-20 pt-40">

      {/* LEFT SECTION */}
      <div className="text-white drop-shadow-lg">
        <h1 className="text-7xl font-bold leading-tight">Australia drives</h1>
        <h1 className="text-7xl font-bold leading-tight">Fobo.</h1>

        <p className="mt-6 text-xl max-w-xl leading-relaxed">
          Accept rides instantly, stay in control of your time, and build
          the income you want — one trip at a time.
        </p>
      </div>

      {/* RIGHT LOGIN CARD */}
      <div className="z-10">
        <DriverLoginCard />
      </div>

    </div>
  </div>
);
}
