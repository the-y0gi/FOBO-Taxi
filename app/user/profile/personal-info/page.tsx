"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, User, Mail, Phone, Save, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Map from "@/components/Map";

export default function PersonalInfoPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("user_name") || "Ansh Bhatia");
    setEmail(localStorage.getItem("user_email") || "ansh@example.com");
    setPhone(localStorage.getItem("user_phone") || "+91 9876543210");
  }, []);

  const handleSave = () => {
    localStorage.setItem("user_name", name);
    localStorage.setItem("user_email", email);
    localStorage.setItem("user_phone", phone);
    router.back();
  };

  const panelVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 20 },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background font-sans text-muted-dark">
      

      {/* BACKGROUND MAP */}
      <div className="absolute inset-0 z-0">
        <Map />
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] pointer-events-none" />
      </div>

      {/* FLOATING PANEL CONTAINER */}
      <div className="flex flex-col justify-center h-full absolute top-0 left-0 pt-20 z-20 w-full lg:w-auto pointer-events-none">
        
        <motion.div
           initial="hidden"
           animate="visible"
           variants={panelVariants}
           className={`
             pointer-events-auto bg-surface/95 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col relative border-white/20
             w-full h-full
             
             lg:w-[480px] lg:h-[85vh] lg:m-6 lg:rounded-3xl lg:border
           `}
        >
          {/* Top Gradient - Desktop  */}
          <div className="hidden lg:block h-2 w-full bg-primary flex-shrink-0" />

          {/* Header*/}
          <div className="p-5 pb-2 flex items-center gap-4 border-b border-border/50 flex-shrink-0">
            <button 
                onClick={() => router.back()} 
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary transition shadow-sm"
            >
                <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold text-muted-dark">Personal Info</h1>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-hide">
            
            {/* Photo  Section */}
            <div className="flex flex-col items-center justify-center pt-2">
                <div className="relative group cursor-pointer">
                    <div className="w-24 h-24 rounded-full border-2 border-primary/20 p-1 bg-surface shadow-sm">
                        <img src="/driver.jpg" className="w-full h-full rounded-full object-cover" alt="Profile" />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-md hover:scale-110 transition-transform border-2 border-surface">
                        <Camera size={14} />
                    </div>
                </div>
                <p className="text-xs text-muted mt-3 font-medium">Tap to change photo</p>
            </div>

            {/* Form FIeld */}
            <div className="space-y-4">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-wider ml-1">Full Name</label>
                    <div className="relative group">
                        <User size={18} className="absolute left-4 top-3.5 text-muted group-focus-within:text-primary transition-colors" />
                        <Input 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            className="pl-11 h-11 rounded-xl bg-background border-border focus-visible:ring-primary shadow-sm text-sm"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-wider ml-1">Email Address</label>
                    <div className="relative group">
                        <Mail size={18} className="absolute left-4 top-3.5 text-muted group-focus-within:text-primary transition-colors" />
                        <Input 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-11 h-11 rounded-xl bg-background border-border focus-visible:ring-primary shadow-sm text-sm"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-wider ml-1">Phone Number</label>
                    <div className="relative group">
                        <Phone size={18} className="absolute left-4 top-3.5 text-muted group-focus-within:text-primary transition-colors" />
                        <Input 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)}
                            className="pl-11 h-11 rounded-xl bg-background border-border focus-visible:ring-primary shadow-sm text-sm"
                        />
                    </div>
                </div>
            </div>

          </div>

          {/* Footer btn */}
          <div className="p-5 mt-auto border-t border-border/50 bg-surface/50 flex-shrink-0">
            <Button 
                onClick={handleSave}
                className="w-full h-11 rounded-xl bg-gradient-to-r from-primary-dark to-primary hover:opacity-90 text-white font-bold shadow-glow flex items-center gap-2"
            >
                <Save size={18} /> Save Changes
            </Button>
          </div>

        </motion.div>
      </div>
    </div>
  );
}