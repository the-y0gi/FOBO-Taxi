"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants for staggered reveal effects
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variant for upward fade-in animation
const itemUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

// Floating animation for continuous vertical movement
const imageFloat = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden 
        bg-gradient-to-br from-[#E9F8EC] via-[#F0FDF4] to-[#DCFCE7]
        pt-32 pb-24 lg:pt-40 lg:pb-32 px-6
      "
    >
      {/* Animated background blob with pulsing scale and opacity */}
      <motion.div
        aria-hidden="true"
        className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-primary-light/20 blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Secondary background blob with horizontal movement */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text content column with staggered animations */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8 text-center lg:text-left z-10"
        >
          <div className="space-y-4">
            <motion.h1
              variants={itemUp}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-primary-dark leading-[1.1]"
            >
              Ride With <br />
              <span className="text-primary">Confidence.</span>
            </motion.h1>

            <motion.h2
              variants={itemUp}
              className="text-2xl lg:text-3xl font-medium text-muted-dark"
            >
              Where Care Meets Convenience.
            </motion.h2>

            <motion.p
              variants={itemUp}
              className="text-lg text-muted-DEFAULT max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Experience wheelchair-accessible, on-demand, and scheduled rides
              designed for your safety and comfort.
            </motion.p>
          </div>

          {/* Action buttons (currently commented out for future use) */}
          {/* <motion.div 
            variants={itemUp}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-glow transition-all active:scale-95 w-full sm:w-auto">
              Book a Ride
            </button>
            <button className="px-8 py-4 bg-white text-primary-dark border-2 border-primary/20 hover:border-primary/50 text-lg font-semibold rounded-full shadow-sm hover:bg-primary-light/10 transition-all active:scale-95 w-full sm:w-auto">
              Download App
            </button>
          </motion.div> */}

          {/* Trust indicators with styled badges */}
          <motion.div
            variants={itemUp}
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
          >
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full border border-primary/10 shadow-sm text-sm font-semibold text-primary-dark">
              <span className="text-yellow-500 text-lg">★</span> 4.9 by NDIS
              Riders
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full border border-primary/10 shadow-sm text-sm font-semibold text-primary-dark">
              <span className="text-blue-500 text-lg">✔</span> Trusted Support
              Workers
            </div>
          </motion.div>
        </motion.div>

        {/* Visual section with glass-morphism card effect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" as const, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main floating card container */}
          <motion.div
            variants={imageFloat}
            animate="animate"
            className="
              relative w-full max-w-[500px] aspect-square
              bg-white/40 backdrop-blur-xl border border-white/60
              rounded-[2.5rem] shadow-2xl overflow-hidden
              flex items-center justify-center
            "
          >
            {/* Gradient overlay for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-[2.5rem]" />

            {/* Container for image elements */}
            <div className="relative w-full h-full p-8">
              {/* Route map image positioned at bottom left */}
              <motion.div
                className="absolute bottom-0 left-0 w-[70%]"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Image
                  src="/route.png"
                  alt="Route Map"
                  width={300}
                  height={300}
                  className="drop-shadow-xl object-contain"
                />
              </motion.div>

              {/* Main vehicle image with spring animation */}
              <motion.div
                className="absolute top-10 right-[-20px] w-[80%]"
                initial={{ scale: 0.8, opacity: 0, x: 50 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8, type: "spring" as const }}
              >
                <Image
                  src="/van.png"
                  alt="Fobo Cab Van"
                  width={400}
                  height={400}
                  className="drop-shadow-2xl object-contain hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Decorative animated element (currently empty) */}
              <motion.div
                className="absolute top-1/2 left-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Optional: Add location pin or other decorative element here */}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
