"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, Lock, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Map from "@/components/Map";

export default function ChangePasswordPage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const handleUpdate = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    router.back();
  };

  const panelVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 120, damping: 20 } },
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
          {/* Top Gradient - Desktop Only */}
          <div className="hidden lg:block h-2 w-full bg-primary flex-shrink-0" />

          {/* Header*/}
          <div className="p-5 pb-2 flex items-center gap-4 border-b border-border/50 flex-shrink-0">
            <button 
                onClick={() => router.back()} 
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary transition shadow-sm"
            >
                <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold text-muted-dark">Change Password</h1>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-hide">
            
            <div className="bg-secondary-light/10 p-4 rounded-2xl border border-secondary-light/30 flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-secondary-light/20 flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck size={16} />
                </div>
                <div>
                    <h3 className="font-bold text-sm text-primary-dark mb-0.5">Strong Password Required</h3>
                    <p className="text-[11px] text-muted leading-relaxed">
                        Use at least 8 characters, including one number and one symbol.
                    </p>
                </div>
            </div>

            {/* Inputs*/}
            <div className="space-y-4">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-wider ml-1">New Password</label>
                    <div className="relative group">
                        <Lock size={18} className="absolute left-4 top-3.5 text-muted group-focus-within:text-primary transition-colors" />
                        <Input 
                            type={showPass1 ? "text" : "password"}
                            value={newPassword} 
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="pl-11 pr-12 h-11 rounded-xl bg-background border-border focus-visible:ring-primary shadow-sm text-sm"
                            placeholder="••••••••"
                        />
                        <button 
                            onClick={() => setShowPass1(!showPass1)}
                            className="absolute right-3 top-3.5 text-muted hover:text-muted-dark transition"
                        >
                            {showPass1 ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-wider ml-1">Confirm Password</label>
                    <div className="relative group">
                        <Lock size={18} className="absolute left-4 top-3.5 text-muted group-focus-within:text-primary transition-colors" />
                        <Input 
                            type={showPass2 ? "text" : "password"}
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="pl-11 pr-12 h-11 rounded-xl bg-background border-border focus-visible:ring-primary shadow-sm text-sm"
                            placeholder="••••••••"
                        />
                        <button 
                            onClick={() => setShowPass2(!showPass2)}
                            className="absolute right-3 top-3.5 text-muted hover:text-muted-dark transition"
                        >
                            {showPass2 ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Requirements Checklist */}
            <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle2 size={14} className={newPassword.length >= 8 ? "text-green-500" : "text-muted-light"} />
                    <span>At least 8 characters long</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle2 size={14} className={/\d/.test(newPassword) ? "text-green-500" : "text-muted-light"} />
                    <span>Contains at least one number</span>
                </div>
            </div>

          </div>

          {/* Footer*/}
          <div className="p-5 mt-auto border-t border-border/50 bg-surface/50 flex-shrink-0">
            <Button 
                onClick={handleUpdate}
                className="w-full h-11 rounded-xl bg-gradient-to-r from-primary-dark to-primary hover:opacity-90 text-white font-bold shadow-glow flex items-center gap-2 justify-center"
            >
                <ShieldCheck size={18} /> Update Password
            </Button>
          </div>

        </motion.div>
      </div>
    </div>
  );
}