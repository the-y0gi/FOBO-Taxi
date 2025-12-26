"use client";

import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

export default function ArrivalBanner({
  status, // "approaching" | "arrived"
}: {
  status: "approaching" | "arrived";
}) {
  if (!status) return null;

  const isArrived = status === "arrived";

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring" as const, stiffness: 140, damping: 20 }}
      className="
        fixed top-6 left-1/2 -translate-x-1/2
        px-6 py-3
        rounded-full shadow-card
        z-[200]
        flex items-center gap-2
        text-white
      "
      style={{
        backgroundColor: isArrived ? "#059669" : "#334155", // your theme colors
      }}
    >
      {isArrived ? (
        <>
          <MapPin size={18} className="text-white" />
          <span className="font-semibold">Arrived at pickup point</span>
        </>
      ) : (
        <>
          <Clock size={18} className="text-white" />
          <span className="font-medium">Approaching pickup</span>
        </>
      )}
    </motion.div>
  );
}
