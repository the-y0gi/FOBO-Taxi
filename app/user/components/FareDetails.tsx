"use client";

import { Button } from "@/components/ui/button";
import { Navigation, Search } from "lucide-react";

export default function FareDetails({ distance, fare, onSearch, mobile }: any) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-secondary-light/30 p-4 rounded-xl border border-secondary-light">
        <div className="flex items-center gap-3">
          <Navigation size={18} className="text-primary" />
          <div>
            <p className="text-sm font-semibold text-primary-dark">
              {distance?.toFixed(1)} km
            </p>
            <p className="text-xs text-muted">Est. 25 mins</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm text-muted">Total Fare</p>
          <p className="text-xl font-bold text-primary-dark">
            ₹{fare.toFixed(0)}
          </p>
        </div>
      </div>

      <Button
        onClick={onSearch}
        className="w-full h-12 bg-gradient-to-r from-primary-dark to-primary text-white text-lg font-bold rounded-xl shadow-glow flex items-center justify-center gap-2"
      >
        <Search size={20} />
        <span>Search Ride</span>
      </Button>
    </div>
  );
}
