"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaCarSide } from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdLocationOn,
  MdSupportAgent,
} from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
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

const iconPop = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

export default function CareSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-32 px-6 relative overflow-hidden">
      {/* Decorative Blob Background */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* --- TOP CONTENT: GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* LEFT: VISUAL COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" as const }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Main Image */}
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200">
              <Image
                src="/care-1.png" // Use your main care image here
                alt="Care Support"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating "Safety First" Card (3D Effect) */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-8 -right-4 lg:-right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-full text-primary">
                  <MdHealthAndSafety size={24} />
                </div>
                <span className="font-bold text-slate-800">Safety First</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every driver is vetted and trained to provide specialized
                assistance.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: TEXT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm"
            >
              ❤️ We Care About You
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15]"
            >
              Care That Goes <br />
              <span className="text-primary">Beyond Just a Ride.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-600 leading-relaxed"
            >
              With FOBO, you're in good hands. Our drivers are patient, our
              service is thoughtful, and every ride is designed to feel easy and
              supportive.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-600 leading-relaxed border-l-4 border-primary pl-4"
            >
              We ensure every rider — including those requiring extra assistance
              — receives a smooth, safe, and comfortable experience.
            </motion.p>

            <motion.button
              variants={fadeUp}
              className="mt-4 px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-xl hover:bg-primary transition-colors shadow-lg hover:shadow-primary/30"
            >
              Meet Our Drivers
            </motion.button>
          </motion.div>
        </div>

        {/* --- BOTTOM: FEATURES GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-8 lg:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-slate-800">
              Here’s What You Can Expect
            </h3>
            <div className="w-16 h-1 bg-primary mx-auto mt-2 rounded-full opacity-50"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
            {[
              { icon: <FaUsers />, text: "Supportive Drivers" },
              { icon: <FaCarSide />, text: "Clean Vehicles" },
              { icon: <MdHealthAndSafety />, text: "Safety First" },
              { icon: <MdLocationOn />, text: "Live Tracking" },
              { icon: <AiFillHeart />, text: "Inclusive Service" },
              { icon: <MdSupportAgent />, text: "24/7 Support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={iconPop}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-slate-600 text-center leading-tight group-hover:text-primary transition-colors">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
