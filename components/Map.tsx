"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useMap } from "react-leaflet";
import type * as LType from "leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
) as any;
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
) as any;
const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
) as any;
const Popup = dynamic(
  () => import("react-leaflet").then((m) => m.Popup),
  { ssr: false }
) as any;
const Polyline = dynamic(
  () => import("react-leaflet").then((m) => m.Polyline),
  { ssr: false }
) as any;

interface LocationType {
  lat: number;
  lng: number;
}

const FlyToUser = ({ location }: { location?: LocationType }) => {
  const map = useMap();

  useEffect(() => {
    if (!location || !map) return;

    map.flyTo([location.lat, location.lng], 15, {
      animate: true,
      duration: 1.5,
    });
  }, [location, map]);

  return null;
};

export default function Map({
  userLocation,
  dropLocation,
  routeCoords,
  acceptedRide,
}: {
  userLocation?: LocationType;
  dropLocation?: LocationType;
  routeCoords?: any[];
  acceptedRide?: LocationType;
}) {
  const [driverRoute, setDriverRoute] = useState<any[]>([]);
  const [L, setL] = useState<typeof LType | null>(null);

  useEffect(() => {
    import("leaflet").then((leaflet) => setL(leaflet));
  }, []);

  useEffect(() => {
    if (!userLocation || !acceptedRide) return;

    const fetchRoute = async () => {
      const url = `https://router.project-osrm.org/route/v1/driving/${userLocation.lng},${userLocation.lat};${acceptedRide.lng},${acceptedRide.lat}?overview=full&geometries=geojson`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data?.routes?.[0]?.geometry?.coordinates) {
          setDriverRoute(data.routes[0].geometry.coordinates);
        }
      } catch (err) {
        console.error("Driver Route API Error:", err);
      }
    };

    fetchRoute();
  }, [userLocation, acceptedRide]);

  if (!L) {
    return <div className="w-full h-full bg-gray-100 animate-pulse" />;
  }

  const userIcon = L.divIcon({
    className: "user-pulse-marker",
    html: `<div class="user-pulse"></div><div class="user-dot"></div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  const dropIcon = L.divIcon({
    className: "destination-marker",
    html: `<div class="dest-pin"><div class="dest-dot"></div></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const carIcon = L.icon({
    iconUrl: "/car-top-view.png",
    iconSize: [40, 40],
  });

  return (
    <div className="w-full h-full relative bg-gray-50">
      <MapContainer
        center={
          userLocation
            ? [userLocation.lat, userLocation.lng]
            : [20.5937, 78.9629]
        }
        zoom={14}
        scrollWheelZoom
        zoomControl={false}
        style={{ width: "100%", height: "100%", zIndex: 0 }}
      >
        {/* Base Map */}
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <FlyToUser location={userLocation} />

        {/* User Marker */}
        {userLocation && (
          <Marker
            position={[userLocation.lat, userLocation.lng]}
            icon={userIcon}
          />
        )}

        {!acceptedRide && dropLocation && (
          <Marker
            position={[dropLocation.lat, dropLocation.lng]}
            icon={dropIcon}
          >
            <Popup>Destination</Popup>
          </Marker>
        )}

        {/* Driver Marker */}
        {acceptedRide && (
          <Marker
            position={[acceptedRide.lat, acceptedRide.lng]}
            icon={carIcon}
          >
            <Popup>Driver</Popup>
          </Marker>
        )}

        {/* User Route */}
        {!acceptedRide && routeCoords && routeCoords.length > 0 && (
          <>
            {/* Outer Soft Line */}
            <Polyline
              positions={routeCoords.map((p) => [p[1], p[0]])}
              pathOptions={{
                color: "#3b82f6",
                weight: 8,
                opacity: 0.3,
                lineCap: "round",
              }}
            />

            {/* Inner Strong Line */}
            <Polyline
              positions={routeCoords.map((p) => [p[1], p[0]])}
              pathOptions={{
                color: "#2563eb",
                weight: 4,
                opacity: 1,
                lineCap: "round",
              }}
            />
          </>
        )}

        {/* Driver Route */}
        {acceptedRide && driverRoute.length > 0 && (
          <Polyline
            positions={driverRoute.map((p) => [p[1], p[0]])}
            pathOptions={{
              color: "#059669",
              weight: 5,
              opacity: 0.9,
              dashArray: "10, 10",
            }}
          />
        )}
      </MapContainer>

      {/* Mobile Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/60 to-transparent pointer-events-none z-[400] lg:hidden" />
    </div>
  );
}
