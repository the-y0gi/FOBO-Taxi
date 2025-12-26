"use client";

import { Button } from "@/components/ui/button";
import { Phone, Star, CreditCard } from "lucide-react";

export default function DriverInfoWithPayment({ fare, onPay, mobile }: any) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-2">
        <h3 className="text-xl font-bold text-muted-dark">Driver Found!</h3>
        <p className="text-muted text-sm">Your ride is confirmed</p>
      </div>

      <div className="bg-background rounded-2xl p-5 border border-border">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <img
              src="/driver.jpg"
              className="w-16 h-16 rounded-full object-cover border-2 border-surface shadow-md"
              alt="Driver"
            />

            <div className="absolute -bottom-1 -right-1 bg-surface p-0.5 rounded-full">
              <div className="flex items-center gap-0.5 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                <span>4.9</span>
                <Star size={8} fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-lg text-muted-dark">Rohit S.</h3>
            <p className="text-muted text-sm">
              Toyota Swift • <span className="text-primary font-medium">White</span>
            </p>
            <p className="text-xs text-muted mt-1">ETA: 5 mins</p>
          </div>

          <div className="text-right">
            <div className="bg-white border border-border px-2 py-1 rounded text-xs font-mono font-bold text-muted-dark">
              MH-12-AB-999
            </div>
            <p className="text-[10px] text-muted mt-1 uppercase tracking-wide">
              Sedan
            </p>
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t border-border">
          <Button
            variant="outline"
            className="flex-1 h-10 rounded-xl border-border text-muted hover:text-primary hover:border-primary bg-surface"
          >
            <Phone size={18} />
          </Button>
        </div>
      </div>

      <Button
        onClick={onPay}
        className="w-full h-14 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-lg shadow-glow flex items-center justify-center gap-2"
      >
        <CreditCard size={20} />
        Pay ₹{fare.toFixed(0)} & Start Ride
      </Button>
    </div>
  );
}
