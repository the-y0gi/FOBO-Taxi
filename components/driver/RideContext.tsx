"use client";
import { createContext, useContext, useState } from "react";

const RideContext = createContext<any>(null);

export const RideProvider = ({ children }: any) => {
  const [completedRide, setCompletedRide] = useState(null);

  return (
    <RideContext.Provider value={{ completedRide, setCompletedRide }}>
      {children}
    </RideContext.Provider>
  );
};

export const useRide = () => useContext(RideContext);
