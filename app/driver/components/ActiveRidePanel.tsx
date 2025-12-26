"use client";

import { MapPin, Users, Clock, Route } from "lucide-react";

export default function ActiveRidePanel({
  ride,
  onCancel,
  onComplete,
  canCancel,
  status,
  mobile
}: any) {
  if (!ride) return null;

  return (
    <div
      className={`
        bg-surface shadow-2xl rounded-3xl border border-border
        ${mobile ? "p-6" : "p-8"}
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Route className="text-primary-dark" size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-muted-dark">Ride in Progress</h2>
          <p className="text-sm text-muted">
            {status === "onride" ? "On the way" : "Enroute pickup"}
          </p>
        </div>
      </div>

      {/* Rider Summary */}
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-muted-dark">
          {ride.name}
        </h1>

        <div className="flex items-center gap-6 text-muted mt-2 text-sm">
          <div className="flex items-center gap-1">
            <Users size={16} /> {ride.people} People
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} /> {ride.distanceKm} km
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} /> {ride.etaSeconds} min
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-4" />

      {/* Pickup Location */}
      <div className="mb-4">
        <p className="text-xs text-muted flex items-center gap-1">
          <MapPin size={14} className="text-primary-dark" /> Pickup Location
        </p>
        <p className="font-medium text-muted-dark mt-1">{ride.pickupLocation}</p>
      </div>

      {/* Drop Location */}
      <div className="mb-4">
        <p className="text-xs text-muted flex items-center gap-1">
          <MapPin size={14} className="text-primary-dark" /> Drop Location
        </p>
        <p className="font-medium text-muted-dark mt-1">{ride.dropLocation}</p>
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-4" />

      {/* Action Button */}
      {canCancel ? (
        <button
          onClick={onCancel}
          className="
            w-full py-4 rounded-xl text-center
            font-semibold text-red-600 bg-red-50
            hover:bg-red-100 transition
          "
        >
          Cancel Ride
        </button>
      ) : (
        <button
          onClick={onComplete}
          className="
            w-full py-4 rounded-xl text-center
            font-semibold text-white bg-primary-dark
            hover:bg-primary transition
          "
        >
          Complete Ride
        </button>
      )}
    </div>
  );
}
