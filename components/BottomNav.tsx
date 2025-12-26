"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Car, Clock, User } from "lucide-react";

export default function BottomNav({ activeTab }: { activeTab: "ride" | "history" | "profile" }) {
  const router = useRouter();

  // Helper function to style active vs inactive buttons
  const getButtonClass = (tab: string) =>
    activeTab === tab
      ? "bg-primary/10 text-primary shadow-sm" // Active Style
      : "text-muted hover:text-muted-dark hover:bg-gray-100/50"; // Inactive Style

  return (
    // 'lg:hidden' ensures it only shows on Mobile
    <div className="fixed bottom-6 left-0 w-full flex justify-center z-[100] lg:hidden pointer-events-none">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="pointer-events-auto bg-surface/90 backdrop-blur-xl border border-white/40 rounded-full px-3 py-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-6 ring-1 ring-black/5"
      >
        
        {/* RIDE BUTTON */}
        <button
          onClick={() => router.push("/user/dashboard")}
          className={`flex flex-col items-center justify-center w-10 h-10 rounded-full transition-all active:scale-90 ${getButtonClass("ride")}`}
        >
          <Car size={18} strokeWidth={2.5} />
        </button>

        {/* HISTORY BUTTON */}
        <button
          onClick={() => router.push("/user/history")}
          className={`flex flex-col items-center justify-center w-10 h-10 rounded-full transition-all active:scale-90 ${getButtonClass("history")}`}
        >
          <Clock size={18} strokeWidth={2.5} />
        </button>

        {/* PROFILE BUTTON */}
        <button
          onClick={() => router.push("/user/profile")}
          className={`flex flex-col items-center justify-center w-10 h-10 rounded-full transition-all active:scale-90 ${getButtonClass("profile")}`}
        >
          <User size={18} strokeWidth={2.5} />
        </button>

      </motion.div>
    </div>
  );
}