"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, Car, ChevronRight, Calendar } from "lucide-react";
import Map from "@/components/Map";
import BottomNav from "@/components/BottomNav";

export default function HistoryPage() {
  const router = useRouter();

  const trips = [
    {
      id: 1,
      date: "22 Nov · 04:00 PM",
      driver: "Rohit Shetty",
      car: "Go Sedan",
      amount: "₹240.00",
      status: "Completed",
      pickup: "Civil Lines, Nagpur",
      drop: "Phoenix Mall, Pune",
      image: "/driver.jpg",
    },
    {
      id: 2,
      date: "18 Nov · 01:20 PM",
      driver: "Akash Sharma",
      car: "Go Mini",
      amount: "₹150.00",
      status: "Cancelled",
      pickup: "Station Rd",
      drop: "Home",
      image: "/driver.jpg",
    },
    {
      id: 3,
      date: "10 Nov · 09:45 AM",
      driver: "Leo Amelia",
      car: "Go Van",
      amount: "₹850.00",
      status: "Completed",
      pickup: "Airport",
      drop: "Hotel Grand",
      image: "/driver.jpg",
    },
    {
      id: 4,
      date: "05 Nov · 10:00 AM",
      driver: "Raju Bhai",
      car: "Go Auto",
      amount: "₹50.00",
      status: "Completed",
      pickup: "Market",
      drop: "Office",
      image: "/driver.jpg",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background font-sans text-muted-dark">

      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <Map />
        <div className="hidden lg:block absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
      </div>

      {/* Main Container */}
      <div className="absolute inset-0 z-20 pt-20 flex flex-col lg:block pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="
            w-full h-full 
            lg:w-[480px] lg:h-[85vh] 
            bg-surface/95 backdrop-blur-xl 
            lg:shadow-2xl 
            overflow-hidden border-white/20 pointer-events-auto flex flex-col 

            lg:absolute lg:top-24 lg:left-6 lg:rounded-3xl
          "
        >
          {/* Top Gradient - Desktop Only */}
          <div className="hidden lg:block h-2 w-full bg-primary flex-shrink-0" />

          {/* Header*/}
          <div className="p-5 pb-3 border-b border-border/50 bg-white/40 flex-shrink-0">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary transition shadow-sm"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-muted-dark">
                  Your Trips
                </h1>
                <p className="text-xs text-muted">Past 30 days activity</p>
              </div>
            </div>
          </div>

          {/* Trip list */}
          <div className="flex-1 overflow-y-auto p-4 bg-surface/50 scrollbar-hide">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3" 
            >
              {trips.map((trip) => (
                <motion.div
                  key={trip.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push(`/user/history/${trip.id}`)}
                  className="bg-background border border-border hover:border-primary/50 rounded-2xl p-3.5 cursor-pointer shadow-sm group transition-all"
                >
                  {/* Driver and Status */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={trip.image}
                        alt={trip.driver}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover border-2 border-surface shadow-sm"
                      />
                      <div>
                        <h3 className="font-bold text-sm lg:text-base text-muted-dark">
                          {trip.driver}
                        </h3>
                        <p className="text-[10px] lg:text-xs text-muted flex items-center gap-1">
                          <Car size={10} /> {trip.car}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-base lg:text-lg text-primary-dark">
                        {trip.amount}
                      </p>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${
                          trip.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {trip.status}
                      </span>
                    </div>
                  </div>

                  {/* Date*/}
                  <div className="bg-secondary-light/20 rounded-xl p-2.5">
                    <div className="flex items-center gap-2 mb-2 text-xs text-muted-dark font-medium">
                      <Calendar size={12} className="text-muted" />
                      {trip.date}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 overflow-hidden w-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <p className="text-xs text-muted truncate max-w-[80px] lg:max-w-[100px]">
                          {trip.pickup}
                        </p>
                        <div className="w-4 h-px bg-border flex-shrink-0" />
                        <div className="w-1.5 h-1.5 rounded-sm bg-muted-dark flex-shrink-0" />
                        <p className="text-xs text-muted truncate max-w-[80px] lg:max-w-[100px]">
                          {trip.drop}
                        </p>
                      </div>
                      <ChevronRight
                        size={16}
                        className="text-muted/50 group-hover:text-primary flex-shrink-0"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <BottomNav activeTab="history" />
    </div>
  );
}
