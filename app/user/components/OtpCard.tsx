"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function OtpCard({ otp, onConfirm }: any) {
  return (
    <div className="text-center py-2">
      <h3 className="text-primary font-bold text-sm uppercase tracking-widest mb-6">
        Start Code
      </h3>

      <div className="flex justify-center gap-3 mb-8">
        {otp.split("").map((digit: string, i: number) => (
          <motion.div
            key={i}
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="w-12 h-14 flex items-center justify-center bg-background border-2 border-primary/20 rounded-lg text-2xl font-bold text-muted-dark shadow-sm"
          >
            {digit}
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-muted mb-6 bg-secondary-light/30 py-2 rounded-lg">
        Provide this code to the driver
      </p>

      <Button
        onClick={onConfirm}
        className="w-full h-12 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold shadow-glow"
      >
        Start Journey
      </Button>
    </div>
  );
}
