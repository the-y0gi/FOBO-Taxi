"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ShieldCheck, Clock } from "lucide-react";
import { RideRequest } from "./RideRequestCard";

export default function DriverRideSummary({
  ride,
  onHome,
}: {
  ride: RideRequest;
  onHome: () => void;
}) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring" as const, stiffness: 120, damping: 20 }}
      className="
        bg-surface 
        border border-border 
        shadow-card 
        rounded-3xl 
        max-w-lg w-full 
        mx-auto mt-10 p-8
      "
    >
      {/* SUCCESS ICON */}
      <div className="flex justify-center mb-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
          className="
            w-20 h-20 
            bg-primary 
            text-white 
            rounded-full 
            flex items-center justify-center
            shadow-glow
          "
        >
          <ShieldCheck size={42} />
        </motion.div>
      </div>

      {/* TITLE */}
      <h3 className="text-center text-2xl font-bold text-primary-dark mb-1">
        Ride Completed
      </h3>

      <p className="text-center text-muted mb-8">
        Here are your ride details.
      </p>

      {/* PICKUP */}
      <div className="mb-6">
        <div className="flex items-start gap-3">
          <MapPin size={20} className="text-primary-dark" />
          <div>
            <p className="text-sm font-semibold text-muted-dark">Pickup Location</p>
            <p className="text-xs text-muted">{ride.pickupLocation}</p>
          </div>
        </div>
      </div>

      {/* DROP */}
      <div className="mb-6">
        <div className="flex items-start gap-3">
          <Navigation size={20} className="text-green-600" />
          <div>
            <p className="text-sm font-semibold text-muted-dark">Drop Location</p>
            <p className="text-xs text-muted">{ride.dropLocation}</p>
          </div>
        </div>
      </div>

      {/* DISTANCE + TIME */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-secondary-light py-3 rounded-xl text-center">
          <p className="text-primary-dark font-semibold">{ride.distanceKm} km</p>
          <p className="text-muted text-xs mt-1">Distance</p>
        </div>

        <div className="bg-secondary-light py-3 rounded-xl text-center">
          <p className="text-primary-dark font-semibold">
            {ride.etaSeconds ? Math.ceil(ride.etaSeconds / 60) : 10} min
          </p>
          <p className="text-muted text-xs mt-1">Time Taken</p>
        </div>
      </div>

      {/* BACK HOME BUTTON */}
      <button
        onClick={onHome}
        className="
          w-full py-3 
          bg-primary text-white 
          rounded-xl font-semibold
          hover:bg-primary-dark transition
          shadow-glow
        "
      >
        Back to Home
      </button>
    </motion.div>
  );
}
