"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function SearchingState() {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="relative w-24 h-24 mb-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" as const }}
          className="w-full h-full border-[6px] border-primary/20 rounded-full border-t-primary"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center"
          >
            <Search size={24} className="text-primary-dark" />
          </motion.div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-muted-dark">Finding a driver...</h3>
      <p className="text-muted text-sm mt-1">Checking nearby partners for you</p>
    </div>
  );
}
