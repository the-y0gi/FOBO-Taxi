"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function DialogPopup({ title, children, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-muted-dark/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-surface w-full max-w-sm rounded-[32px] p-8 shadow-2xl relative border border-white/20"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-background rounded-full hover:bg-muted-light/20 text-muted"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-center mb-8 text-muted-dark">
          {title}
        </h2>

        {children}
      </motion.div>
    </div>
  );
}
