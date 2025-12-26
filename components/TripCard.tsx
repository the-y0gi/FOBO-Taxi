"use client";

import { useState } from "react";

export default function TripCard() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [people, setPeople] = useState("");

  return (
    <section className="relative w-full flex justify-center -mt-32 z-[60]">
      
      {/* FLOATING CARD */}
      <div className="
        bg-white border border-borderLight rounded-cardLg shadow-outerCard
        p-8 w-full max-w-5xl mx-auto
      ">

        {/* TITLE */}
        {/* TITLE */}
        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-primary-dark mb-8">
          Plan Your Trip
        </h2>

        {/* GRID — ALL IN ONE LINE */}
        <div className="w-full grid grid-cols-4 gap-6">

          {/* FROM */}
          <div className="p-5 bg-cardInner rounded-cardMd shadow-innerCard border border-borderLight">
            <label className="text-sm font-medium text-muted-dark">From</label>
            <input
              type="text"
              placeholder="Enter pickup location"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="mt-2 w-full bg-white px-4 py-3 rounded-md border border-borderLight focus:outline-none"
            />
          </div>

          {/* SWAP BUTTON */}
          <div className="flex items-center justify-center">
            <button className="
              w-12 h-12 rounded-swapBtn bg-swapBg shadow-swap 
              flex items-center justify-center text-primary-dark text-xl
            ">
              ⇅
            </button>
          </div>

          {/* TO */}
          <div className="p-5 bg-cardInner rounded-cardMd shadow-innerCard border border-borderLight">
            <label className="text-sm font-medium text-muted-dark">To</label>
            <input
              type="text"
              placeholder="Enter destination"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="mt-2 w-full bg-white px-4 py-3 rounded-md border border-borderLight focus:outline-none"
            />
          </div>

          {/* NUMBER OF PEOPLE */}
          <div className="p-5 bg-cardInner rounded-cardMd shadow-innerCard border border-borderLight">
            <label className="text-sm font-medium text-muted-dark">
              Number of People
            </label>
            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="mt-2 w-full bg-white px-4 py-3 rounded-md border border-borderLight focus:outline-none"
            >
              <option value="">Select</option>
              <option value="1-2">1-2</option>
              <option value="3-5">3-5</option>
              <option value="6-10">6-10</option>
              <option value="10+">10+</option>
            </select>
          </div>

        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-10">
          <button className="btn-gradient px-12 py-4 rounded-cardMd">
            Calculate fare →
          </button>
        </div>

      </div>
    </section>
  );
}
