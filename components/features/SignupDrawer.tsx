"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SignupDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* BACKDROP */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[130]"
        ></div>
      )}

      {/* DRAWER */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? "0%" : "100%" }}
        transition={{
          duration: 0.5,
          ease: [0.16, 0.84, 0.44, 1] as const,
        }}
        className="
          fixed top-0 right-0 h-full w-full md:w-1/3 bg-white 
          shadow-outerCard z-[140] px-8 py-10 overflow-y-auto
        "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-xl hover:text-black"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-black mb-6">
          Create Your FOBO Account
        </h2>

        <p className="text-muted-dark mb-8">
          Sign up to book rides, save locations, and access your wheelchair-friendly travel options.
        </p>

        {/* FORM */}
        <div className="flex flex-col gap-4">

          <div>
            <label className="text-sm font-medium text-muted-dark">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-2 w-full border border-borderLight bg-white px-4 py-3 rounded-cardMd focus:outline-none shadow-innerCard"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-muted-dark">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full border border-borderLight bg-white px-4 py-3 rounded-cardMd focus:outline-none shadow-innerCard"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-muted-dark">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="mt-2 w-full border border-borderLight bg-white px-4 py-3 rounded-cardMd focus:outline-none shadow-innerCard"
            />
          </div>

          <button className="btn-primary px-8 py-3 rounded-cardMd text-sm shadow-outerCard mt-4">
            Sign up →
          </button>
        </div>
      </motion.div>
    </>
  );
}
