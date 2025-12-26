"use client";

import { motion } from "framer-motion";

export default function CancelRideDialog({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="
        fixed bottom-0 left-0 w-full
        bg-surface
        rounded-t-3xl
        border-t border-border
        shadow-card
        p-6
        z-[999]
      "
    >
      {/* Top Drag Handle */}
      <div className="w-12 h-1 bg-muted-light/40 rounded-full mx-auto mb-5" />

      {/* Title */}
      <h3 className="text-center text-lg font-semibold text-muted-dark mb-2">
        Cancel Ride?
      </h3>

      {/* Subtitle */}
      <p className="text-center text-muted text-sm mb-6">
        Are you sure you want to cancel this ride?
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        {/* NO BUTTON */}
        <button
          onClick={onClose}
          className="
            flex-1 
            border border-border 
            text-muted-dark
            rounded-full py-2
            font-medium
            hover:bg-gray-100 transition
          "
        >
          No
        </button>

        {/* YES CANCEL BUTTON */}
        <button
          onClick={onConfirm}
          className="
            flex-1 
            bg-red-500 text-white
            rounded-full py-2
            font-semibold
            shadow-card
            hover:bg-red-600 transition
          "
        >
          Yes, Cancel
        </button>
      </div>
    </motion.div>
  );
}
