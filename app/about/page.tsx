"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FaQuoteLeft, FaLeaf, FaUsers, FaGlobeAmericas } from "react-icons/fa";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export default function AboutSection() {
  return (
    <>
      <Navbar />
      <section className="w-full bg-slate-50 py-24 px-6 relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-10 left-0 w-full text-center pointer-events-none select-none overflow-hidden">
          <h2 className="text-[12rem] font-bold text-slate-200/40 leading-none whitespace-nowrap opacity-30">
            WHO WE ARE
          </h2>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* --- HEADER --- */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-4"
            >
              Our Story
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
            >
              We are more than just <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary-light">
                a ride-hailing company.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Founded in 2025, FOBO Cab started with a simple mission: To make
              urban mobility accessible, safe, and dignified for
              everyone—regardless of ability or destination.
            </motion.p>
          </motion.div>

          {/* --- BENTO GRID LAYOUT --- */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* CARD 1: MAIN IMAGE (Tall) */}
            <motion.div
              variants={fadeUp}
              className="md:col-span-1 row-span-2 relative h-[400px] md:h-auto rounded-[2.5rem] overflow-hidden shadow-xl group"
            >
              <Image
                src="/about-team1.jpg" // Replace with a team or driver image
                alt="Our Drivers"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-bold text-xl mb-1">Empowering Drivers</p>
                <p className="text-white/80 text-sm">
                  Providing flexible earnings & respect.
                </p>
              </div>
            </motion.div>

            {/* CARD 2: STATS (Wide) */}
            <motion.div
              variants={fadeUp}
              whileHover="hover"
              className="md:col-span-2 bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-lg border border-slate-100 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-10 md:items-center justify-between relative z-10">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-green-100 text-primary rounded-xl flex items-center justify-center mb-4">
                    <FaGlobeAmericas size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    50+ Cities
                  </h3>
                  <p className="text-slate-500">
                    Connecting communities across the nation.
                  </p>
                </div>
                <div className="w-px h-24 bg-slate-100 hidden md:block" />
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <FaUsers size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    2 Million+
                  </h3>
                  <p className="text-slate-500">
                    Happy riders delivered safely.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 3: MISSION (Green Card) */}
            <motion.div
              variants={fadeUp}
              whileHover="hover"
              initial="rest"
              className="bg-primary text-white p-8 rounded-[2.5rem] shadow-xl shadow-primary/30 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Background Pattern */}
              <div className="absolute -right-10 -top-10 text-white/10 rotate-12">
                <FaLeaf size={150} />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">Eco-Friendly Fleet</h3>
                <p className="text-emerald-100 leading-relaxed text-sm">
                  We are committed to a greener future. 40% of our fleet is
                  hybrid or electric, reducing carbon footprints every mile.
                </p>
              </div>
              <button className="mt-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all self-end">
                ↗
              </button>
            </motion.div>

            {/* CARD 4: QUOTE (Glass/White) */}
            <motion.div
              variants={fadeUp}
              className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-100 flex flex-col justify-center"
            >
              <FaQuoteLeft className="text-3xl text-primary/30 mb-4" />
              <blockquote className="text-slate-700 font-medium text-lg italic leading-relaxed mb-6">
                &ldquo;We didn&rsquo;t just build an app; we built a promise. A promise that
                no matter who you are, you can move freely with dignity.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                  {/* Founder Image Placeholder */}
                  <Image src="/founder.jpeg" width={40} height={40} alt="CEO" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Yogesh Gadhewal</p>
                  <p className="text-xs text-slate-500 font-bold uppercase">
                    Founder & CEO
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
