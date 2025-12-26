"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function RideActions() {
  const [step, setStep] = useState("reached"); 
  // values: reached → start → end

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-5 shadow-xl rounded-t-3xl">
      {step === "reached" && (
        <Button className="w-full bg-blue-600" onClick={() => setStep("start")}>
          I have reached pickup
        </Button>
      )}

      {step === "start" && (
        <Button className="w-full bg-green-600" onClick={() => setStep("end")}>
          Start Ride
        </Button>
      )}

      {step === "end" && (
        <Button className="w-full bg-red-600">End Ride</Button>
      )}
    </div>
  );
}
