"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoginDrawer({ open, onClose }: any) {
  if (!open) return null;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{
        duration: 0.6,
        ease: [0.16, 0.84, 0.44, 1] as const,
      }}
      className="
        fixed top-0 right-0 h-screen w-1/3 
        bg-white shadow-outerCard z-[999] 
        border-l border-borderLight px-10 py-12
        flex flex-col
      "
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="self-end text-2xl text-muted-dark hover:text-black"
      >
        ✕
      </button>

      <h2 className="text-3xl font-bold text-black mt-4">
        Welcome Back 👋
      </h2>

      <p className="text-muted-dark mt-2 mb-8">
        Log in to continue your journey with FOBO.
      </p>

      {/* EMAIL INPUT */}
      <div className="mb-6">
        <label className="text-sm text-muted-dark">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          className="
            mt-2 w-full bg-cardInner px-4 py-3 rounded-cardMd 
            border border-borderLight shadow-innerCard
            focus:outline-none
          "
        />
      </div>

      {/* PASSWORD INPUT */}
      <div className="mb-6">
        <label className="text-sm text-muted-dark">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="
            mt-2 w-full bg-cardInner px-4 py-3 rounded-cardMd
            border border-borderLight shadow-innerCard
            focus:outline-none
          "
        />
      </div>

      {/* LOGIN BUTTON */}
      <button className="btn-primary w-full py-3 rounded-cardMd shadow-outerCard">
        Login →
      </button>

      <p className="text-sm text-muted-dark mt-6 text-center">
        Don't have an account?{" "}
        <span className="text-primary font-semibold cursor-pointer">
          Sign up
        </span>
      </p> 
    </motion.div>
  );
}
