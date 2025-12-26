"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function RideFastSection() {
  const { scrollY } = useScroll();

  // LEFT IMAGES MOVE DOWN
  const leftY = useTransform(scrollY, [0, 300], [0, 50]); // 50px down

  // RIGHT IMAGES MOVE UP
  const rightY = useTransform(scrollY, [0, 300], [0, -50]); // 50px up

  return (
    <section className="w-full bg-background py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE CONTENT */}
        <div>
          <h2 className="text-5xl font-bold text-black leading-tight mb-6">
            Ride Fast. <br />
            Spend Less.
          </h2>

          <p className="text-muted-dark text-lg mb-8">
            Fobo ensures a seamless travel experience with fast
            pickups and affordable fares.
          </p>

          <button className="btn-primary px-10 py-4 rounded-cardMd shadow-outerCard font-medium">
            Book a Ride →
          </button>
        </div>

        {/* FLOATING PARALLAX IMAGES */}
        <div className="relative w-full h-[450px]">

          {/* LEFT TOP */}
          <motion.div
            style={{ y: leftY }}
            className="absolute top-0 left-24 w-48 h-48 rounded-cardMd overflow-hidden shadow-innerCard bg-cardOuter"
          >
            <Image src="/ride/ride1.jpg" alt="Travel Image 1" fill className="object-cover" />
          </motion.div>

          {/* LEFT BOTTOM */}
          <motion.div
            style={{ y: leftY }}
            className="absolute top-56 left-24 w-48 h-48 rounded-cardMd overflow-hidden shadow-innerCard bg-cardOuter"
          >
            <Image src="/ride/ride3.jpg" alt="Travel Image 3" fill className="object-cover" />
          </motion.div>

          {/* RIGHT TOP */}
          <motion.div
            style={{ y: rightY }}
            className="absolute top-10 right-12 w-48 h-48 rounded-cardMd overflow-hidden shadow-innerCard bg-cardOuter"
          >
            <Image src="/ride/ride2.jpg" alt="Travel Image 2" fill className="object-cover" />
          </motion.div>

          {/* RIGHT BOTTOM */}
          <motion.div
            style={{ y: rightY }}
            className="absolute bottom-0 right-12 w-48 h-48 rounded-cardMd overflow-hidden shadow-innerCard bg-cardOuter"
          >
            <Image src="/ride/ride4.jpg" alt="Travel Image 4" fill className="object-cover" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
