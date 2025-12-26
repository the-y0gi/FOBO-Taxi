"use client";

import { motion } from "framer-motion";

export default function AnimatedRoute() {
  return (
    <motion.svg
      width="260"
      height="260"
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ strokeDashoffset: 800 }}  // correct length
      animate={{ strokeDashoffset: 0 }}
      transition={{
        duration: 1000,        // nice slow movement
        ease: "easeInOut" as const,
        repeat: Infinity,
      }}
      className="absolute bottom-6 left-4 pointer-events-none"
    >
      <motion.path
        d="
          M20 40 
          C80 30, 150 30, 190 40

          C230 60, 240 110, 210 150

          C180 190, 100 200, 60 180

          C20 160, 20 200, 40 220
        "
        stroke="#059669"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray="30 20"  // perfect dotted effect
      />
    </motion.svg>
  );
}
