"use client";

import { useMap } from "react-leaflet";
import { useEffect } from "react";

export default function RecenterMap({ userLocation }: any) {
  const map = useMap();

  useEffect(() => {
    if (!userLocation) return;

    // Delay recenter to match your animation
    const t = setTimeout(() => {
      map.setView(
        [userLocation.lat, userLocation.lng],
        map.getZoom(),
        { animate: true }
      );
    }, 1800); // Same as your showInitialMap timeout

    return () => clearTimeout(t);
  }, [userLocation]);

  return null;
}
