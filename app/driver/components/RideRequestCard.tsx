"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Clock, Navigation } from "lucide-react";

export interface RideRequest {
  id: string;
  name: string;
  people: number;
  pickupLocation: string;
  dropLocation: string;
  lat: number;
  lng: number;
  distanceKm: number;
  pickupTime?: string;
  etaSeconds?: number;
}

export default function RideRequestCard({
  request,
  onAccept,
}: {
  request: RideRequest;
  onAccept: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" as const, stiffness: 130, damping: 18 }}
      className="
        min-w-[300px]
        bg-surface 
        border border-border 
        rounded-2xl 
        shadow-card 
        p-6
      "
    >
      {/* TOP SECTION */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-primary-dark">
          {request.name}
        </h2>

        <div className="flex items-center gap-4 mt-2 text-muted text-sm">
          {/* PEOPLE */}
          <div className="flex items-center gap-1">
            <Users size={16} className="text-muted-light" />
            <span>{request.people} People</span>
          </div>

          {/* DISTANCE */}
          <div className="flex items-center gap-1">
            <Navigation size={16} className="text-primary" />
            <span>{request.distanceKm} km</span>
          </div>

          {/* ETA */}
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-secondary" />
            <span>
              {request.etaSeconds
                ? Math.ceil(request.etaSeconds / 60)
                : 2}{" "}
              min
            </span>
          </div>
        </div>
      </div>

      {/* PICKUP */}
      <div className="mt-4 text-muted-dark text-sm">
        <div className="flex items-start gap-2">
          <MapPin size={18} className="text-primary-dark" />
          <div>
            <p className="font-semibold">Pickup</p>
            <p className="text-xs text-muted">{request.pickupLocation}</p>
          </div>
        </div>
      </div>

      {/* DROP */}
      <div className="mt-4 text-muted-dark text-sm">
        <div className="flex items-start gap-2">
          <Navigation size={18} className="text-green-600" />
          <div>
            <p className="font-semibold">Drop</p>
            <p className="text-xs text-muted">{request.dropLocation}</p>
          </div>
        </div>
      </div>

      {/* ACCEPT BUTTON */}
      <button
        onClick={onAccept}
        className="
          mt-6 w-full 
          bg-primary text-white 
          py-3 
          rounded-xl 
          font-semibold 
          shadow-glow
          hover:bg-primary-dark 
          transition
        "
      >
        Accept Ride
      </button>
    </motion.div>
  );
}
