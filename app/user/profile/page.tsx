"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import {
  User,
  Lock,
  Clock,
  LogOut,
  ChevronRight,
  Camera,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import Map from "@/components/Map";
import BottomNav from "@/components/BottomNav";

export default function ProfilePage() {
  const router = useRouter();
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const savedName = localStorage.getItem("user_name");
    if (savedName) setUserName(savedName);
  }, []);

  const menuItems = [
    {
      label: "Personal Info",
      sub: "Name, Email, Phone",
      icon: <User size={20} />,
      path: "/user/profile/personal-info",
    },
    {
      label: "Security",
      sub: "Change Password",
      icon: <Lock size={20} />,
      path: "/user/profile/change-password",
    },
    {
      label: "Trip History",
      sub: "Recent rides & costs",
      icon: <Clock size={20} />,
      path: "/user/history",
    },
 
  ];

  // Animation Variants
  const panelVariants: Variants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 20 },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background font-sans text-muted-dark">
      
      {/* Background Map */}
      <div className="absolute inset-0 z-0">
        <Map />
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] pointer-events-none" />
      </div>

      {/* MAIN PANEL CONTAINER */}
      <div className="flex flex-col justify-center h-full absolute top-0 left-0 pt-20 z-20 w-full lg:w-auto pointer-events-none">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={panelVariants}
          className={`
            pointer-events-auto bg-surface/95 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col relative border-white/20
            w-full h-full
            
            lg:w-[480px] lg:h-[85vh] lg:m-6 lg:rounded-3xl lg:border lg:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
          `}
        >
          {/* Top Gradient - Desktop Only */}
          <div className="hidden lg:block h-2 w-full bg-primary flex-shrink-0" />

          {/* HEADER */}
          <div className="p-6 pb-2">
            <div className="flex items-center gap-4 mb-4 lg:mb-6">
              <button
                onClick={() => router.back()}
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted hover:text-primary transition shadow-sm"
              >
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-2xl font-bold text-muted-dark">Profile</h1>
            </div>

            {/* Profile Card*/}
            <div className="bg-emerald-50/80 rounded-3xl p-6 border border-emerald-100/50 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-200/20 rounded-full blur-3xl -mr-10 -mt-10" />

              <div className="flex items-center gap-5 relative z-10">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full p-1 border-2 border-white shadow-sm bg-white">
                    <img
                      src="/driver.jpg"
                      className="w-full h-full rounded-full object-cover"
                      alt="Profile"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-emerald-500 text-white p-1.5 rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform border-2 border-white">
                    <Camera size={14} />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-emerald-950">
                    {userName}
                  </h2>
                  <p className="text-xs text-emerald-700/70 font-medium mt-1">
                    User since 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SCROLLABLE  */}
          <div className="flex-1 overflow-y-auto px-6 py-2 space-y-3 pb-28 lg:pb-6 scrollbar-hide">
            <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-2 ml-1 mt-2">
              Account Settings
            </h3>

            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push(item.path)}
                className="w-full flex items-center justify-between p-4 bg-background border border-border rounded-xl hover:border-emerald-500/30 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-light/30 flex items-center justify-center text-muted-dark group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <span className="block font-semibold text-muted-dark text-sm">
                      {item.label}
                    </span>
                    <span className="block text-xs text-muted">{item.sub}</span>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="text-muted/40 group-hover:text-emerald-500 transition-colors"
                />
              </motion.button>
            ))}

            {/* Logout Buttons*/}
            <div className="pt-6">
              <button className="w-full py-3.5 mb-3 flex items-center justify-center gap-2 bg-red-50 border border-red-100 text-red-600 rounded-xl font-bold text-sm hover:bg-red-100 transition shadow-sm">
                <LogOut size={16} /> Log Out
              </button>

              <div className="flex justify-center pb-4">
                <button className="text-xs text-muted/60 hover:text-red-500 flex items-center gap-1 transition">
                  <ShieldCheck size={12} /> Delete my account
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <BottomNav activeTab="profile" />
    </div>
  );
}
