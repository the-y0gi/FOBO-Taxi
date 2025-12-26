"use client";

import { Phone, Users, MapPin, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function DriverAcceptedRideCard({
  ride,
  onStartRide,
  mobile = false
}: {
  ride: any;
  onStartRide: () => void;
  mobile?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-3xl bg-white shadow-card border border-border ${
        mobile ? "p-5" : "p-7"
      }`}
    >
      {/* TOP ICON */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <Navigation className="text-primary" size={36} />
        </div>
      </div>

      {/* USER NAME */}
      <h2 className="text-center text-2xl font-bold text-muted-dark mb-2">
        {ride.name}
      </h2>

      {/* USER DETAILS */}
      <div className="flex justify-center items-center gap-5 text-muted mb-6">
        <span className="flex items-center gap-1 text-sm">
          <Users size={16} /> {ride.people} People
        </span>

        <span className="flex items-center gap-1 text-sm">
          <Navigation size={16} /> {ride.distanceKm} km
        </span>

        <span className="flex items-center gap-1 text-sm">
          <Clock size={16} /> {ride.etaSeconds} min
        </span>
      </div>

      {/* CALL BUTTON */}
      <button
        className="w-full bg-primary text-white py-3 rounded-xl flex items-center justify-center gap-2 shadow hover:bg-primary-dark transition mb-6"
      >
        <Phone size={18} /> Call Passenger
      </button>

      {/* PICKUP + DROP DETAILS */}
      <div className="space-y-5 mb-8">
        {/* PICKUP */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="text-primary" size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-dark">
              Pickup Location
            </p>
            <p className="text-sm text-muted-light">{ride.pickupLocation}</p>
          </div>
        </div>

        {/* DROP */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-secondary-light flex items-center justify-center">
            <MapPin className="text-primary-dark" size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-dark">Drop Location</p>
            <p className="text-sm text-muted-light">{ride.dropLocation}</p>
          </div>
        </div>
      </div>

      {/* START RIDE */}
      <button
        onClick={onStartRide}
        className="w-full bg-primary text-white py-3 rounded-xl text-lg font-semibold shadow hover:bg-primary-dark transition"
      >
        Start Ride
      </button>
    </motion.div>
  );
}
