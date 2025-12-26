"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Car, Phone, Star } from "lucide-react";

export default function ActiveRideWithDriver({ otp, status, onCancel, mobile }: any) {
  const getStatusColor = () => {
    switch (status) {
      case "Driver Arrived":
        return "text-green-500";
      case "Arriving Soon":
        return "text-orange-500";
      default:
        return "text-primary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-surface rounded-2xl p-5 border border-border">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-dashed border-border">
          <div>
            <p className="text-xs text-muted uppercase font-bold">STATUS</p>

            <motion.p
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`font-bold ${getStatusColor()}`}
            >
              {status}
            </motion.p>
          </div>

          <div className="text-right">
            <p className="text-xs text-muted uppercase font-bold">OTP</p>
            <p className="text-muted-dark font-mono font-bold text-lg">{otp}</p>
          </div>
        </div>

        {/* ROUTE BOX */}
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex flex-col items-center mt-1">
              <div className="w-2.5 h-2.5 bg-primary rounded-full" />
              <div className="w-0.5 flex-1 bg-gradient-to-b from-primary to-muted-light/50 my-1" />
              <div className="w-2.5 h-2.5 border-2 border-muted rounded-sm" />
            </div>

            <div className="flex-1 space-y-6">
              <div>
                <p className="font-bold text-muted-dark text-sm">Home (5 min away)</p>
                <p className="text-xs text-muted truncate">123, Green Street...</p>
              </div>

              <div>
                <p className="font-bold text-muted-dark text-sm">Office Complex</p>
                <p className="text-xs text-muted truncate">IT Park, Sector 5...</p>
              </div>
            </div>
          </div>
        </div>

        {/* CANCEL BTN */}
        <Button
          variant="ghost"
          onClick={onCancel}
          className="w-full h-12 text-red-500 hover:bg-red-50 rounded-xl mt-6"
        >
          Cancel Ride
        </Button>
      </div>

      {/* DESKTOP DRIVER INFO */}
      {!mobile && (
        <div className="bg-background rounded-2xl p-5 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                src="/driver.jpg"
                className="w-14 h-14 rounded-full object-cover border border-border"
                alt="Driver"
              />

              <div>
                <h3 className="font-bold text-lg text-muted-dark">Rohit S.</h3>
                <p className="text-sm text-muted">
                  Toyota Swift • <span className="text-primary">White</span>
                </p>

                <div className="flex items-center gap-1 mt-1">
                  <div className="flex items-center gap-1 bg-primary text-white text-[10px] px-2 py-[2px] rounded-full">
                    <span>4.9</span>
                    <Star size={10} fill="currentColor" />
                  </div>
                  <span className="text-xs text-muted">ETA: 5 mins</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="bg-white border px-3 py-1 rounded text-xs font-mono">
                MH-12-AB-999
              </div>
              <p className="text-[10px] text-muted mt-1 uppercase">Sedan</p>
            </div>
          </div>

          <div className="flex gap-3 pt-3">
            <Button className="flex-1 h-10 border border-border rounded-xl bg-surface text-muted hover:text-primary">
              <Phone size={18} />
            </Button>
          </div>
        </div>
      )}

      {/* MOBILE DRIVER CARD */}
      {mobile && (
        <div className="bg-background rounded-2xl p-5 border border-border">
          <h4 className="font-bold text-muted-dark mb-4 flex items-center gap-2">
            <Car size={16} />
            Driver Info
          </h4>

          <div className="flex items-center gap-4">
            <img
              src="/driver.jpg"
              className="w-14 h-14 rounded-full object-cover border border-border"
              alt="Driver"
            />

            <div className="flex-1">
              <p className="font-semibold text-muted-dark">Rohit S.</p>
              <p className="text-sm text-muted">Toyota Swift • White</p>

              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1 text-xs">
                  <Star size={10} className="text-amber-500 fill-amber-500" />
                  <span>4.9</span>
                </div>

                <span className="text-muted">•</span>

                <span className="text-xs font-mono text-muted">MH-12-AB-999</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
