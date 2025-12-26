"use client";

import { Input } from "@/components/ui/input";
import SuggestionList from "@/components/SuggestionList";
import { Navigation, Users } from "lucide-react";

export default function InputGroup({
  pickup,
  drop,
  members,
  handlePickupChange,
  handleDropChange,
  handleMembersChange,
  handleShareLocation,
  pickupResults,
  dropResults,
  handleSelectPickup,
  handleSelectDrop,
}: any) {
  return (
    <div className="space-y-0 relative">
      <div className="absolute left-[22px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary to-muted-light/30 z-0" />

      {/* Pickup */}
      <div className="relative z-30">
        <div className="flex items-center gap-3 bg-background border border-border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all shadow-sm">
          <div className="w-6 h-6 rounded-full bg-secondary-light flex items-center justify-center shrink-0">
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>

          <div className="flex-1">
            <label className="flex-1 cursor-text">
              <span className="text-[10px] uppercase font-bold text-muted tracking-wider block">
                Pickup
              </span>
              <Input
                value={pickup}
                onChange={handlePickupChange}
                placeholder="Current Location"
                className="p-0 h-6 border-0 bg-transparent shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-muted-dark font-medium"
              />
            </label>
          </div>
          <button
            onClick={handleShareLocation}
            className="text-primary hover:bg-secondary-light p-2 rounded-lg transition-colors"
          >
            <Navigation size={18} />
          </button>
        </div>

        {pickupResults.length > 0 && (
          <div className="absolute top-[110%] left-0 w-full z-50">
            <SuggestionList
              results={pickupResults}
              onSelect={handleSelectPickup}
            />
          </div>
        )}
      </div>

      <div className="h-3" />

      {/* Drop */}
      <div className="relative z-20 ">
        <div className="flex items-center gap-3 bg-background border border-border rounded-xl px-3 py-2 shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
          <div className="w-6 h-6 rounded-full bg-muted-light/20 flex items-center justify-center shrink-0">
            <div className="w-2 h-2 bg-muted rounded-sm" />
          </div>

          <div className="flex-1">
            <label className="flex-1 cursor-text">
              <span className="text-[10px] uppercase font-bold text-muted tracking-wider block">
                Drop off
              </span>
              <Input
                value={drop}
                onChange={handleDropChange}
                placeholder="Where to go?"
                className="p-0 h-6 border-0 bg-transparent shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-muted-dark font-medium"
              />
            </label>
          </div>
        </div>

        {dropResults.length > 0 && (
          <div className="absolute top-[110%] left-0 w-full z-50">
            <SuggestionList results={dropResults} onSelect={handleSelectDrop} />
          </div>
        )}
      </div>

      {(members || pickup || drop) && (
        <div className="flex items-center gap-2 relative z-10">
          <div className=" mt-2 bg-background border border-border rounded-lg px-3 py-1.5 flex items-center gap-2">
            <Users size={14} className="text-muted" />
            <Input
              value={members}
              onChange={handleMembersChange}
              placeholder="1 Passenger"
              className="w-24 h-5 p-0 border-0 bg-transparent text-sm focus-visible:ring-0 focus-visible:ring-offset-0 text-muted-dark font-medium"
            />
          </div>
        </div>
      )}
    </div>
  );
}
