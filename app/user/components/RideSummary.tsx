"use client";

import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import CheckMarkAnimated from "./CheckMarkAnimated";

export default function RideSummary({ onHome }: any) {
  return (
    <div className="text-center bg-surface w-full  rounded-3xl p-6 shadow-2xl border border-white/20 mt-5">
      <div className="bg-primary/10 p-6 flex justify-center rounded-xl mb-6">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-glow border-4 border-white">
          <CheckMarkAnimated />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-muted-dark mb-1">Ride Finished</h2>
      <p className="text-muted text-sm mb-6">Hope you had a comfortable journey</p>

      <div className="bg-background border border-border rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-muted text-sm">Total Fare</span>
          <span className="font-bold text-lg text-primary-dark">₹240.00</span>
        </div>

        <div className="w-full h-px bg-border mb-3" />

        <div className="flex justify-between items-center">
          <span className="text-muted text-sm">Paid via</span>

          <span className="text-sm font-medium text-muted-dark flex items-center gap-1">
            <CreditCard size={14} /> UPI
          </span>
        </div>
      </div>

      <Button
        onClick={onHome}
        className="w-full h-12 bg-muted-dark text-white rounded-xl font-bold hover:bg-black"
      >
        Back to Home
      </Button>
    </div>
  );
}
