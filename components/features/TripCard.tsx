"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// SVG icon components for consistent UI elements
const MapPinIcon = () => (
  <svg
    className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    className="w-6 h-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export default function TripCard() {
  // State management for form inputs
  const [activeTab, setActiveTab] = useState("ride"); // Tracks active tab: 'ride' or 'schedule'
  const [from, setFrom] = useState(""); // Departure location
  const [to, setTo] = useState(""); // Destination location
  const [people, setPeople] = useState("1-2"); // Passenger count

  return (
    <div className="relative w-full px-4 lg:px-6 z-40 -mt-10 lg:-mt-24 pb-16 flex justify-center">
      {/* Animated container for entrance effect */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        className="w-full max-w-5xl"
      >
        {/* Tab navigation (currently commented out but preserved for future use) */}
        {/* 
        <div className="flex justify-center mb-4 lg:mb-6">
          <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-white/50 flex gap-1">
            <button 
              onClick={() => setActiveTab("ride")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'ride' ? 'bg-primary text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Ride Now
            </button>
            <button 
              onClick={() => setActiveTab("schedule")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'schedule' ? 'bg-primary text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Schedule
            </button>
          </div>
        </div>
        */}

        {/* Main card container */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          {/* Desktop layout - horizontal form with divider lines */}
          <div className="hidden lg:flex items-center divide-x divide-slate-100 p-2">
            {/* Departure location input */}
            <div className="flex-1 px-6 py-3 hover:bg-slate-50 rounded-2xl transition-colors group cursor-pointer relative">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                From
              </label>
              <div className="flex items-center gap-3">
                <MapPinIcon />
                <input
                  type="text"
                  placeholder="Current Location"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full bg-transparent text-slate-700 font-medium focus:outline-none placeholder:text-slate-400 truncate"
                />
              </div>
            </div>

            {/* Destination input */}
            <div className="flex-1 px-6 py-3 hover:bg-slate-50 rounded-2xl transition-colors group cursor-pointer">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                To
              </label>
              <div className="flex items-center gap-3">
                <MapPinIcon />
                <input
                  type="text"
                  placeholder="Enter Destination"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full bg-transparent text-slate-700 font-medium focus:outline-none placeholder:text-slate-400 truncate"
                />
              </div>
            </div>

            {/* Passenger count selector */}
            <div className="w-[180px] px-6 py-3 hover:bg-slate-50 rounded-2xl transition-colors group cursor-pointer">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                People
              </label>
              <div className="flex items-center gap-3">
                <UserIcon />
                <select
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full bg-transparent text-slate-700 font-medium focus:outline-none cursor-pointer appearance-none"
                >
                  <option value="1-2">1-2</option>
                  <option value="3-5">3-5</option>
                  <option value="6+">6+</option>
                </select>
              </div>
            </div>

            {/* Search/action button */}
            <div className="pl-4 pr-2">
              <button className="h-14 w-14 bg-primary hover:bg-primary-dark transition-all rounded-2xl flex items-center justify-center shadow-lg hover:shadow-primary/40 active:scale-95">
                <SearchIcon />
              </button>
            </div>
          </div>

          {/* Mobile layout - vertical stacked form */}
          <div className="lg:hidden p-5 space-y-4">
            {/* Departure location input (mobile) */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
              <MapPinIcon />
              <div className="flex-1">
                <label className="block text-[10px] font-bold text-slate-400 uppercase">
                  From
                </label>
                <input
                  type="text"
                  placeholder="Current Location"
                  className="w-full bg-transparent font-medium text-slate-800 focus:outline-none"
                />
              </div>
            </div>

            {/* Destination input (mobile) */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
              <MapPinIcon />
              <div className="flex-1">
                <label className="block text-[10px] font-bold text-slate-400 uppercase">
                  To
                </label>
                <input
                  type="text"
                  placeholder="Enter Destination"
                  className="w-full bg-transparent font-medium text-slate-800 focus:outline-none"
                />
              </div>
            </div>

            {/* Passenger and schedule options grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Passenger selector (mobile) */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-2">
                <UserIcon />
                <select className="w-full bg-transparent font-medium text-slate-800 focus:outline-none">
                  <option>1-2 Ppl</option>
                  <option>3-5 Ppl</option>
                  <option>6+ Ppl</option>
                </select>
              </div>

              {/* Date picker - only visible in schedule mode */}
              {activeTab === "schedule" && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-center font-medium text-slate-600 text-sm">
                  Pick Date
                </div>
              )}
            </div>

            {/* Primary action button (mobile) */}
            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2">
              Calculate Fare
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
