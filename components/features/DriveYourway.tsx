"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWallet, FaClock, FaShieldAlt } from "react-icons/fa";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardFloat = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function DriveEarnSection() {
  return (
    <section className="w-full bg-slate-50 py-20 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* --- LEFT: IMAGE COMPOSITION (With Floating Earnings) --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
          className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
        >
          {/* Main Image Frame */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-white">
            <Image
              src="/drive-your-way.png"
              alt="Driver behind the wheel"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay for text readability (optional) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Floating "Earnings" Card (The 'Wow' Factor) */}
          <motion.div
            variants={cardFloat}
            animate="animate"
            className="absolute -right-4 -bottom-10 lg:-right-10 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 w-[220px] z-10"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Weekly Earn
              </span>
              <div className="p-1.5 bg-green-100 rounded-md text-primary">
                <FaWallet size={12} />
              </div>
            </div>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-2xl font-bold text-slate-800">$1,250</span>
              <span className="text-xs text-green-600 font-bold mb-1.5">
                ▲ 12%
              </span>
            </div>
            {/* Fake Graph Lines */}
            <div className="flex items-end gap-1 h-8 mt-2">
              <div className="w-1/5 h-4 bg-slate-100 rounded-sm"></div>
              <div className="w-1/5 h-6 bg-slate-100 rounded-sm"></div>
              <div className="w-1/5 h-3 bg-slate-100 rounded-sm"></div>
              <div className="w-1/5 h-full bg-primary rounded-sm shadow-md shadow-primary/30"></div>
              <div className="w-1/5 h-5 bg-slate-100 rounded-sm"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- RIGHT: TEXT CONTENT --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 lg:order-2 space-y-8"
        >
          {/* Heading */}
          <div className="space-y-4">
            <motion.div
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest uppercase"
            >
              Partner With Us
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.1]"
            >
              Drive your way. <br />
              <span className="text-primary">Earn your way.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-600 leading-relaxed max-w-lg"
            >
              Turn your free time into extra income with FOBO. No boss, no fixed
              hours. Just you, your car, and the open road.
            </motion.p>
          </div>

          {/* Benefits List (Better than plain text) */}
          <motion.div variants={containerVariants} className="grid gap-6">
            {[
              {
                icon: <FaClock />,
                title: "Flexible Schedule",
                desc: "Drive whenever you want. You are the boss.",
              },
              {
                icon: <FaWallet />,
                title: "Instant Payouts",
                desc: "Cash out your earnings daily, instantly.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Safety Toolkit",
                desc: "24/7 support and GPS tracking for every trip.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all border border-transparent hover:border-slate-100 cursor-default group"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] transition-all flex justify-center items-center gap-2">
              Become a Driver
              <svg
                className="w-5 h-5"
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
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all">
              Driver Login
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
