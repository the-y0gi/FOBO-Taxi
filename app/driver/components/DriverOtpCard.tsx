"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DriverOtpCard({ otp, onConfirm }: { otp: string; onConfirm: () => void }) {
  const [enteredOtp, setEnteredOtp] = useState("");
  const [error, setError] = useState("");

  const verifyOtp = () => {
    if (enteredOtp.trim() !== otp.trim()) {
      setError("Incorrect OTP. Please try again.");
      return;
    }
    setError("");
    onConfirm(); // Start ride
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-card border border-border"
    >
      <h2 className="text-xl font-bold text-primary-dark mb-3 text-center">
        Enter OTP to Start Ride
      </h2>

      {/* ✔ OTP now visible */}
      <div className="bg-secondary-light text-primary-dark font-bold text-lg text-center py-3 rounded-xl mb-4">
        OTP: {otp}
      </div>

      <input
        type="text"
        placeholder="Enter OTP"
        value={enteredOtp}
        onChange={(e) => setEnteredOtp(e.target.value)}
        maxLength={6}
        className="w-full border border-border rounded-xl p-3 text-center text-lg outline-none focus:ring-2 focus:ring-primary"
      />

      {error && (
        <p className="text-red-500 text-sm text-center mt-2">{error}</p>
      )}

      <button
        onClick={verifyOtp}
        className="mt-5 w-full bg-primary text-white py-3 rounded-xl shadow-glow font-semibold text-lg"
      >
        Verify OTP & Start Ride
      </button>
    </motion.div>
  );
}
