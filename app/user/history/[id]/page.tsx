"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { ArrowLeft, Star, CreditCard, CheckCircle2 } from "lucide-react";
import Map from "@/components/Map";

export default function TripDetailsPage() {
  const router = useRouter();
  const { id } = useParams();

  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Check device and auto-expand for mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      if (mobile) {
        setIsExpanded(true);
      }

      setTimeout(() => setIsLoaded(true), 100);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle drag gestures for expand/collapse
  const handleDragEnd = (event: any, info: PanInfo) => {
    if (!isMobile) return;

    const dragDistance = info.offset.y;
    const dragVelocity = info.velocity.y;

    // Swipe up to expand
    if (dragDistance < -50 || dragVelocity < -500) {
      setIsExpanded(true);
      // Swipe down to collapse
    } else if (dragDistance > 50 || dragVelocity > 500) {
      setIsExpanded(false);
    }
  };

  const tripData = {
    pickup: {
      lat: 18.5204,
      lng: 73.8567,
      text: "H – 890, East Area XYZ",
      time: "04:00 PM",
    },
    drop: {
      lat: 18.5304,
      lng: 73.8667,
      text: "I – 12, West side XYZ",
      time: "04:30 PM",
    },
    routeCoords: [
      [73.8567, 18.5204],
      [73.8667, 18.5304],
    ],
    driver: "Rohit Shetty",
    car: "Toyota Etios",
    plate: "MH 12 AB 1234",
    fare: "₹240.00",
    rating: 5,
    status: "Completed",
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background font-sans text-muted-dark">
      <div className="absolute inset-0 z-0">
        <Map
          userLocation={tripData.pickup}
          dropLocation={tripData.drop}
          routeCoords={tripData.routeCoords}
        />
        <div className="hidden lg:block absolute inset-0 bg-primary/5 pointer-events-none mix-blend-multiply" />
      </div>

      {/* Mobile Back Button */}
      <button
        onClick={() => router.back()}
        className="lg:hidden absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-muted-dark active:scale-95 transition-transform"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Content Container */}
      <div className="absolute mt-16 inset-0 pointer-events-none z-20 flex flex-col lg:block">
        <motion.div
          drag={isMobile ? "y" : false}
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          initial={false}
          animate={
            isMobile
              ? { height: isExpanded ? "65vh" : "210px", y: 0 }
              : { x: 0, opacity: 1 }
          }
          transition={{ type: "spring" as const, damping: 24, stiffness: 180 }}
          className="
            pointer-events-auto bg-surface/95 backdrop-blur-xl 
            shadow-[0_-10px_40px_rgba(0,0,0,0.1)] 
            overflow-hidden flex flex-col relative border-white/20 w-full mt-auto 
            rounded-t-[32px] border-t 
            
            lg:w-[480px] lg:h-[85vh] 
            lg:m-6 lg:rounded-3xl lg:border lg:top-0 lg:absolute lg:mt-6
          "
          style={isMobile && !isLoaded ? { height: "65vh" } : {}}
        >
          {/* Handle Bar (Mobile Only) */}
          <div
            className="lg:hidden w-full pt-4 pb-2 cursor-grab active:cursor-grabbing flex justify-center z-50 bg-surface/50 flex-shrink-0"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
          </div>

          {/* Top Gradient - Desktop Only */}
          <div className="hidden lg:block h-2 w-full bg-primary flex-shrink-0" />

          {/* Header Section*/}
          <div className="px-5 pt-3 pb-2 lg:pt-5 lg:pb-3 flex items-center justify-between z-10 shrink-0 border-b border-border/40">
            <button
              onClick={() => router.back()}
              className="hidden lg:flex w-9 h-9 rounded-full bg-background border border-border items-center justify-center text-muted hover:text-primary transition shadow-sm"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="flex flex-col lg:block">
              <span className="font-bold text-lg text-muted-dark mx-auto lg:mx-2">
                Trip #{id}
              </span>
              <span className="text-[10px] text-muted">
Today, 4:00 PM
              </span>
            </div>

            {/* Mobile Status Badge */}
            <div className="lg:hidden flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold">
              <CheckCircle2 size={10} />
              <span>{tripData.status}</span>
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div
            className={`flex-1 px-4 py-4 lg:px-5 lg:py-5 transition-all scrollbar-hide ${
              isMobile
                ? isExpanded
                  ? "overflow-y-auto"
                  : "overflow-hidden"
                : "overflow-y-auto"
            }`}
          >
            {/* Driver Information Card*/}
            <div className="bg-background rounded-2xl p-4 border border-border shadow-sm mb-3 relative overflow-hidden">
              <div className="hidden lg:block absolute top-0 right-0 bg-green-100 text-green-700 text-[9px] font-bold px-3 py-1 rounded-bl-xl tracking-wide">
                COMPLETED
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="/driver.jpg"
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-surface shadow-md object-cover"
                  alt="driver"
                />
                <div>
                  <h2 className="font-bold text-base lg:text-lg text-muted-dark">
                    {tripData.driver}
                  </h2>
                  <p className="text-xs text-muted mt-0.5">
                    {tripData.car} •{" "}
                    <span className="font-mono bg-white px-1 border rounded text-[10px] lg:text-xs">
                      {tripData.plate}
                    </span>
                  </p>
                  <div className="flex items-center gap-0.5 mt-1.5 text-amber-500">
                    {[...Array(tripData.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Trip Details */}
            <div className="space-y-3">
              {/* Route Timeline */}
              <div className="bg-background rounded-2xl p-4 border border-border shadow-sm">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center pt-1.5">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full shadow-glow" />
                    <div className="w-0.5 flex-1 bg-border my-1 dashed-line min-h-[30px]" />
                    <div className="w-2.5 h-2.5 border-2 border-muted-dark rounded-sm" />
                  </div>
                  <div className="flex-1 space-y-6">
                    <div>
                      <p className="text-[10px] text-muted font-bold mb-1 tracking-wide">
                        PICKUP • {tripData.pickup.time}
                      </p>
                      <p className="text-sm font-medium text-muted-dark leading-snug">
                        {tripData.pickup.text}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted font-bold mb-1 tracking-wide">
                        DROP • {tripData.drop.time}
                      </p>
                      <p className="text-sm font-medium text-muted-dark leading-snug">
                        {tripData.drop.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Details  */}
              <div className="bg-background rounded-2xl p-4 border border-border shadow-sm">
                <h3 className="font-bold text-sm text-muted-dark mb-3">
                  Payment Details
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-muted text-xs lg:text-sm">
                    <span>Trip Fare</span>
                    <span>₹220.00</span>
                  </div>
                  <div className="flex justify-between text-muted text-xs lg:text-sm">
                    <span>Tax & Fees</span>
                    <span>₹20.00</span>
                  </div>
                  <div className="h-px bg-border my-2" />
                  <div className="flex justify-between font-bold text-base lg:text-lg text-muted-dark">
                    <span>Total Paid</span>
                    <span>{tripData.fare}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] lg:text-xs text-muted bg-secondary-light/20 p-2 rounded-lg mt-2">
                    <CreditCard size={14} />
                    <span>Paid via UPI •••• 8902</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}