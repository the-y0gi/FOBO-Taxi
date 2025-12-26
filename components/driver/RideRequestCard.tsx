"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface RideRequest {
  id: string;
  name: string;
  people: number;
  pickupLocation: string;
  dropLocation: string;
  distanceKm: number;
  pickupTime: string;
  etaSeconds: number;
  lat: number;
  lng: number;
}

export default function RideRequestCard({
  request,
  onAccept,
  onDecline,
}: {
  request: RideRequest;
  onAccept: () => void;
  onDecline: () => void;
}) {
  const [secondsLeft, setSecondsLeft] = useState<number>(request.etaSeconds);

  useEffect(() => {
    setSecondsLeft(request.etaSeconds);
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [request.id]);

  const mmss = () => {
    const m = Math.floor(secondsLeft / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(secondsLeft % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35 }}
      className="min-w-[320px] max-w-[320px] bg-white rounded-2xl shadow-lg p-6"
    >
      <div className="flex justify-end mb-2">
        <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
          {mmss()}
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Ride Details</h3>

      <div className="text-sm text-gray-700 space-y-2 mb-4">
        <div>
          <span className="font-medium">Name - </span>
          {request.name}
        </div>
        <div>
          <span className="font-medium">No. of people - </span>
          {request.people.toString().padStart(2, "0")}
        </div>
        <div>
          <span className="font-medium">Pickup Location - </span>
          <div className="text-xs text-gray-500">{request.pickupLocation}</div>
        </div>
        <div>
          <span className="font-medium">Pickup Distance - </span>
          {request.distanceKm} km
        </div>
        <div>
          <span className="font-medium">Pickup Time - </span>
          {request.pickupTime}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onDecline}
          className="flex-1 border border-gray-300 text-gray-700 rounded-full py-2"
        >
          Decline
        </button>

        <button
          onClick={onAccept}
          className="flex-1 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full py-2"
        >
          Accept
        </button>
      </div>
    </motion.div>
  );
}
