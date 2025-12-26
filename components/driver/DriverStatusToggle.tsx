"use client";

import { motion } from "framer-motion";
import React from "react";

interface DriverStatusToggleProps {
  isOnline: boolean;
  setIsOnline: (v: boolean) => void;
}

export default function DriverStatusToggle({
  isOnline,
  setIsOnline,
}: DriverStatusToggleProps) {

  const KNOB_X = 18;

  return (
    <button
      onClick={() => setIsOnline(!isOnline)}
      aria-pressed={isOnline}
      className="flex items-center gap-3 px-0 py-0 rounded-full select-none focus:outline-none"
    >
      <span className="text-sm text-gray-700 font-medium">
        {isOnline ? "ONLINE" : "OFFLINE"}
      </span>

      <div
        className={`inline-flex items-center rounded-full p-1 transition-colors duration-200 ${
          isOnline ? "bg-green-500" : "bg-gray-300"
        }`}
        style={{ width: 48, height: 24 }} 
      >
        <motion.div
          className="w-4 h-4 bg-white rounded-full shadow transform"
          initial={false}
          animate={{ x: isOnline ? KNOB_X : 0 }}
          transition={{ type: "spring" as const, stiffness: 520, damping: 30 }}
        />
      </div>
    </button>
  );
}
