import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import RideFast from "@/components/features/RideFast";
import DriveYourWay from "@/components/features/DriveYourway";
import AccountLogin from "@/components/account/AccountLogin";
import Footer from "@/components/footer/Footer";
import FreedomSection from "@/components/features/FreeDomSection";
import CareSection from "@/components/features/CareSection";
import TripCard from "@/components/features/TripCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TripCard />
      <FreedomSection />
      <CareSection />
      {/* <RideFast /> */}
      <DriveYourWay />
      <AccountLogin />
      <Footer />
    </>
  );
}
