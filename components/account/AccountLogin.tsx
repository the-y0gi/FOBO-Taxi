"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaUserCircle } from "react-icons/fa";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95, x: 30 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const floatCard = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function AccountLogin() {
  return (
    <section className="w-full bg-white py-20 lg:py-32 px-6 overflow-hidden relative border-t border-slate-100">
      {/* Decorative Background Element */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* --- LEFT: TEXT & ACTIONS --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={fadeUp} className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm tracking-widest uppercase">
              My FOBO Account
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15]">
              Log in to unlock your <br />
              <span className="text-primary">Personal Travel Hub.</span>
            </h2>
          </motion.div>

          {/* Benefits Checklist */}
          <motion.ul variants={containerVariants} className="space-y-4">
            {[
              "View trip history & invoices",
              "Manage payment methods securely",
              "Get personalized ride suggestions",
              "Access priority customer support",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                className="flex items-center gap-3 text-slate-600 text-lg"
              >
                <FaCheckCircle className="text-primary/80 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Action Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button className="group px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all flex items-center justify-center gap-2 active:scale-95">
              <span>Log in to Account</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

            <a
              href="/signup"
              className="group px-10 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:border-primary hover:text-primary transition-all flex items-center justify-center"
            >
              Create an account
            </a>
          </motion.div>
        </motion.div>

        {/* --- RIGHT: IMAGE & PROFILE PREVIEW --- */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main Image Frame */}
          <div className="relative w-full max-w-[500px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-white">
            <Image
              src="/Login.jpg" // Using your provided image path
              alt="Accessible Vehicle Boarding"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating "Welcome" Card (Simulates UI) */}
          <motion.div
            variants={floatCard}
            animate="animate"
            className="absolute -bottom-8 -left-4 lg:-left-12 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 w-[240px]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                <FaUserCircle size={28} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">
                  Welcome back
                </p>
                <p className="text-lg font-bold text-slate-800">Alex Johnson</p>
              </div>
            </div>
            {/* Mini Stats */}
            <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase">
                  Total Rides
                </p>
                <p className="text-lg font-bold text-primary">42</p>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase">
                  Rating
                </p>
                <p className="text-lg font-bold text-yellow-500">5.0 ★</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
