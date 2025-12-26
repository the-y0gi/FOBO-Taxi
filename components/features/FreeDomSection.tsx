"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// --- ICONS ---
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-primary flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const HeartHandshakeIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95, x: -20 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function FreedomSection() {
  return (
    <section className="w-full py-16 lg:py-32 bg-slate-50 overflow-hidden relative">
      {/* Decorative Background Pattern (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute left-[-10%] top-[20%] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        {/* --- LEFT: IMAGE COMPOSITION --- */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative flex justify-center lg:justify-start"
        >
          {/* Wrapper to control width on mobile */}
          <div className="relative w-full max-w-[400px] lg:max-w-[480px]">
            {/* The Image (Arch Shape) */}
            <div className="relative z-10 overflow-hidden rounded-t-[150px] lg:rounded-t-[200px] rounded-b-[40px] shadow-2xl shadow-slate-200 border-4 border-white aspect-[4/5] group">
              <Image
                src="/freedom-image.png"
                alt="Care and Accessibility"
                width={600}
                height={750}
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Back Pattern Dots (Decorative) */}
            <div className="absolute -z-0 top-6 -left-6 lg:top-10 lg:-left-10 w-full h-full border-2 border-primary/20 rounded-t-[150px] lg:rounded-t-[200px] rounded-b-[40px] translate-x-0 translate-y-0" />

            {/* Floating Badge (Responsive Positioning) */}
            {/* Mobile: Bottom-Right inside | Desktop: Floating outside to the right */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="
                absolute z-20 bg-white p-3 lg:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 lg:gap-4 max-w-[200px]
                bottom-4 right-4 
                lg:bottom-8 lg:-right-12
              "
            >
              <div className="bg-primary p-2 lg:p-3 rounded-full flex-shrink-0 shadow-lg shadow-primary/30">
                <HeartHandshakeIcon />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Certified
                </p>
                <p className="text-xs lg:text-sm font-bold text-slate-800 leading-tight">
                  Extra Care & Support
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- RIGHT: TEXT CONTENT --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 lg:space-y-8 text-center lg:text-left"
        >
          {/* Section Label */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-2"
          >
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary font-bold text-xs lg:text-sm tracking-widest uppercase">
              Our Mission
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl lg:text-5xl font-bold text-slate-900 leading-[1.2]"
          >
            Freedom to Move, <br />
            <span className="text-primary-dark">Without Barriers.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            We understand that some riders require more than just a car. We
            provide patience, assistance, and accessible vehicles to ensure your
            journey is as smooth as your destination.
          </motion.p>

          {/* Feature Points */}
          <motion.ul
            variants={itemVariants}
            className="space-y-3 lg:space-y-4 pt-2 text-left inline-block lg:block"
          >
            {[
              "Wheelchair Accessible Vehicles (WAV)",
              "Drivers trained in disability support",
              "Door-to-door personal assistance",
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-start lg:items-center gap-3"
              >
                <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 lg:mt-0">
                  <CheckIcon />
                </div>
                <span className="text-slate-700 font-medium text-sm lg:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="pt-4 lg:pt-6 flex justify-center lg:justify-start"
          >
            <button className="group flex items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-primary transition-colors duration-300 shadow-lg hover:shadow-primary/25 text-sm lg:text-base">
              <span>View Services</span>
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
