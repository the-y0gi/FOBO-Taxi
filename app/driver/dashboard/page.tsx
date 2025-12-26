"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Map from "@/components/Map";
import RideRequestCard, { RideRequest } from "../components/RideRequestCard";
import AcceptedRideCard from "../components/DriverAcceptedRideCard";
import ArrivalBanner from "../components/DriverArrivalBanner";
import CancelRideDialog from "../components/DriverCancelDialog";
import DriverOtpCard from "../components/DriverOtpCard";
import ActiveRidePanel from "../components/ActiveRidePanel";
import DriverRideSummary from "../components/DriverRideSummary";
import DriverStatusToggle from "@/components/driver/DriverStatusToggle";
import useGeoSearch from "@/hooks/useGeoSearch";

/* ------------------------------------------------------------------
   DRIVER DASHBOARD (fixed toggle + stable flow)
------------------------------------------------------------------ */
export default function DriverDashboard() {
  /* STATES */
  const [isOnline, setIsOnline] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | undefined>(undefined);

  const [requests, setRequests] = useState<RideRequest[]>([]);
  const [showRequests, setShowRequests] = useState(false);

  const [acceptedRide, setAcceptedRide] = useState<RideRequest | null>(null);
  const [driverStatus, setDriverStatus] = useState<string | null>(null);
  const [arrivalState, setArrivalState] = useState<"approaching" | "arrived" | null>(null);

  const [showOTP, setShowOTP] = useState(false);
  const [rideOTP, setRideOTP] = useState<string>("");
  const [showCancelPopup, setShowCancelPopup] = useState(false);

  const [isRideStarted, setIsRideStarted] = useState(false);
  const [showCompleteButton, setShowCompleteButton] = useState(false);
  const [showRideSummary, setShowRideSummary] = useState(false);

  const [routeCoords, setRouteCoords] = useState<any[]>([]);
  const [dropLocation, setDropLocation] = useState<{ lat: number; lng: number } | undefined>(undefined);

  const timers = useRef<number[]>([]);
  const { reverseGeocode } = useGeoSearch();

  /* Dummy requests */
  const rideRequests: RideRequest[] = [
    {
      id: "1",
      name: "ABC XYZ",
      people: 4,
      pickupLocation: "H - 890, East Area XYZ dxfhb, Victoria Street, 21054",
      dropLocation: "MG Road, Pune",
      lat: 18.525,
      lng: 73.855,
      distanceKm: 10,
      pickupTime: "4:00 PM",
      etaSeconds: 12,
    },
    {
      id: "2",
      name: "John Doe",
      people: 2,
      pickupLocation: "I - 42, East Area XYZ",
      dropLocation: "MG Road, Pune",
      lat: 18.525,
      lng: 73.855,
      distanceKm: 6,
      pickupTime: "ASAP",
      etaSeconds: 20,
    },
    {
      id: "3",
      name: "Jane Smith",
      people: 1,
      pickupLocation: "12-B, West Lane Road",
      dropLocation: "MG Road, Pune",
      lat: 18.525,
      lng: 73.855,
      distanceKm: 3,
      pickupTime: "4:15 PM",
      etaSeconds: 26,
    },
    {
      id: "4",
      name: "Gaurav",
      people: 3,
      pickupLocation: "Park View Colony",
      dropLocation: "MG Road, Pune",
      lat: 18.525,
      lng: 73.855,
      distanceKm: 12,
      pickupTime: "4:30 PM",
      etaSeconds: 26,
    },
  ];

  /* cleanup on unmount */
  useEffect(() => {
    return () => {
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
    };
  }, []);

  /* online/offline effect */
  useEffect(() => {
    if (!isOnline) {
      // clear timers and reset UI
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];

      setRequests([]);
      setShowRequests(false);
      setAcceptedRide(null);
      setRouteCoords([]);
      setDropLocation(undefined);
      setArrivalState(null);
      setShowOTP(false);
      setIsRideStarted(false);
      setShowCompleteButton(false);
      setShowRideSummary(false);
      setDriverStatus(null);
      return;
    }

    // going online
    setDriverStatus("ONLINE");

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          try {
            await reverseGeocode?.(pos.coords.latitude, pos.coords.longitude);
          } catch {}
        },
        () => {},
        { enableHighAccuracy: true }
      );
    }

    const t = window.setTimeout(() => {
      setRequests(rideRequests);
      setShowRequests(true);
    }, 700);
    timers.current.push(t);

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);

  /* fetch route via OSRM */
  const fetchRoute = async (from: any, to: any) => {
    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=geojson`;
      const res = await fetch(url);
      const data = await res.json();
      if (data?.routes?.[0]?.geometry?.coordinates) {
        setRouteCoords(data.routes[0].geometry.coordinates);
      }
    } catch (err) {
      console.error("Route error", err);
    }
  };

  /* accept request */
const acceptRequest = async (id: string) => {
  const ride = requests.find((r) => r.id === id) || null;
  if (!ride) return;

  setAcceptedRide(ride);
  setShowRequests(false);
  setRequests([]);

  // Show card ONLY — do NOT show banners or OTP yet
  setDriverStatus("ARRIVING");

  // Route to pickup
  if (userLocation) {
    await fetchRoute(userLocation, { lat: ride.lat, lng: ride.lng });
  }
};

  /* start ride  */
    const handleStartRide = () => {
  // 1️⃣ Show “Approaching pickup”
  setArrivalState("approaching");

  const t1 = window.setTimeout(() => {
    // 2️⃣ After 3 sec → show “Driver arrived”
    setArrivalState("arrived");
    setDriverStatus("ARRIVED");

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setRideOTP(otp);

    // 3️⃣ After 3 sec → show OTP card
    const t2 = window.setTimeout(() => {
      setShowOTP(true);
    }, 3000);

    timers.current.push(t2);
  }, 3000);

  timers.current.push(t1);
};

  /* OTP confirm -> start ride */
  const handleOtpConfirm = async () => {
    setShowOTP(false);
    setDriverStatus("ON_RIDE");
    setIsRideStarted(true);

    if (acceptedRide) setDropLocation({ lat: acceptedRide.lat, lng: acceptedRide.lng });

    if (userLocation && acceptedRide) {
      await fetchRoute(userLocation, { lat: acceptedRide.lat, lng: acceptedRide.lng });
    }

    const t = window.setTimeout(() => setShowCompleteButton(true), 3000);
    timers.current.push(t);
  };

  /* complete ride */
  const completeRide = () => {
    setShowCompleteButton(false);
    setIsRideStarted(false);
    setDriverStatus("COMPLETED");
    setShowRideSummary(true);
  };

  /* cancel ride confirm */
  const confirmCancel = () => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];

    setDriverStatus("ONLINE");
    setAcceptedRide(null);
    setRouteCoords([]);
    setDropLocation(undefined);
    setShowOTP(false);
    setIsRideStarted(false);
    setShowCompleteButton(false);

    setShowRequests(true);
    setRequests(rideRequests);
  };

  /* back to home from summary */
  const backToHome = () => {
    setShowRideSummary(false);
    setDriverStatus("ONLINE");

    setAcceptedRide(null);
    setRouteCoords([]);
    setDropLocation(undefined);

    setShowRequests(true);
    setRequests(rideRequests);
  };

  const panelVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 120, damping: 20 } }
  };

  /* ---------------- RENDER ---------------- */
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background font-sans text-muted-dark selection:bg-secondary-light selection:text-primary-dark">
      {/* MAP */}
      <div className="absolute inset-0 z-0">
        <Map
          userLocation={userLocation}
          routeCoords={routeCoords}
          dropLocation={dropLocation}
          acceptedRide={acceptedRide ? { lat: acceptedRide.lat, lng: acceptedRide.lng } : undefined}
        />
        <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-multiply" />
      </div>

      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:flex flex-col justify-center h-full absolute top-0 left-0 z-20 pl-6 pointer-events-none">
<motion.div
  initial="hidden"
  animate="visible"
  variants={panelVariants}
  className="w-[480px] pointer-events-auto"
>
  <div className="bg-surface/95 backdrop-blur-xl shadow-2xl rounded-3xl
  border border-white/20 
  max-h-[92vh] 
  overflow-y-auto 
  overflow-x-hidden 
  overflow-hidden
  [mask-image:linear-gradient(black,black)]">


          <div className="h-2 bg-gradient-to-r from-primary-dark to-primary" />
          <div className="p-8">
            {/* HEADER */}
            <div className="flex items-center gap-2 mb-8 opacity-80">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 12h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-bold text-xl text-primary-dark">FOBO Cab</span>
            </div>

            {/* ALWAYS SHOW STATUS + TOGGLE (DESKTOP): always rendered, never inside other conditionals */}
            <div className="mb-6 pointer-events-auto">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted">Status</p>
                  <p className="font-semibold text-primary-dark">{isOnline ? driverStatus || "ONLINE" : "OFFLINE"}</p>
                </div>

                {/* desktop toggle — high z-index & pointer-events-auto so it's never covered */}
                <div className="bg-white px-3 py-1 rounded-full shadow z-[999] pointer-events-auto">
                  <DriverStatusToggle isOnline={isOnline} setIsOnline={setIsOnline} />
                </div>
              </div>
            </div>

            {/* OFFLINE MESSAGE (below toggle) */}
            {!isOnline && !acceptedRide && !showOTP && !isRideStarted && !showRideSummary && (
              <div className="text-center py-20 mt-3">
                <p className="text-yellow-300 text-lg mb-2">☀️ Good Morning, Captain</p>
                <h1 className="text-muted-dark text-3xl font-bold mb-6">
                  Go <span className="text-primary-dark font-extrabold">ONLINE</span> and start earning
                </h1>
              </div>
            )}

            {/* REQUESTS */}
            {isOnline && showRequests && requests.length > 0 && !acceptedRide && (
              <>
                <h3 className="text-lg font-bold mb-3">Ride Requests</h3>
                <div className="space-y-4">
                  {requests.map((req) => (
                    <RideRequestCard key={req.id} request={req} onAccept={() => acceptRequest(req.id)} />
                  ))}
                </div>
              </>
            )}

            {/* ACCEPTED RIDE (desktop) */}
            {isOnline && acceptedRide && !showOTP && !isRideStarted && !showRideSummary && (
              <motion.div className="mt-6">
                <AcceptedRideCard ride={acceptedRide} onStartRide= {handleStartRide} />
              </motion.div>
            )}

            {/* OTP */}
            {showOTP && (
              <motion.div className="mt-6">
                <DriverOtpCard otp={rideOTP} onConfirm={handleOtpConfirm} />
              </motion.div>
            )}

            {/* ACTIVE RIDE */}
            {isRideStarted && !showRideSummary && acceptedRide && (
              <motion.div className="mt-6">
                <ActiveRidePanel
                  ride={acceptedRide}
                  onCancel={() => setShowCancelPopup(true)}
                  onComplete={completeRide}
                  canCancel={!showCompleteButton}
                  status={driverStatus === "ON_RIDE" ? "onride" : "enroute"}
                />
              </motion.div>
            )}

            {/* SUMMARY */}
            {showRideSummary && acceptedRide && (
              <motion.div className="mt-6">
                <DriverRideSummary ride={acceptedRide} onHome={backToHome} />
              </motion.div>
            )}
          </div>
        </div>
        </motion.div>
      </div>

      {/* MOBILE UI */}
      <div className="lg:hidden absolute inset-0 flex flex-col justify-between pointer-events-none z-30">
        {/* Offline full-screen */}
        {!isOnline && !acceptedRide && !showOTP && !isRideStarted && !showRideSummary && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-40 px-6">
            <p className="text-yellow-300 text-lg">☀️ Good Morning, Captain</p>
            <h1 className="text-white text-4xl font-bold leading-tight mt-2">
              Go <span className="font-extrabold">ONLINE</span>
              <br />
              and start earning
            </h1>

            {/* mobile toggle — no layoutId to avoid duplication issues */}
            <motion.div className="bg-white px-10 py-4 rounded-full shadow-xl mt-6 pointer-events-auto">
              <DriverStatusToggle isOnline={isOnline} setIsOnline={setIsOnline} />
            </motion.div>
          </div>
        )}

        {/* Floating toggle when online (mobile) */}
        {isOnline && (
          <div className="fixed top-5 right-4 z-40 pointer-events-auto">
            <div className="bg-white px-5 py-2 rounded-full shadow-lg">
              <DriverStatusToggle isOnline={isOnline} setIsOnline={setIsOnline} />
            </div>
          </div>
        )}

        {/* Nearby requests (mobile floating) */}
        {isOnline && showRequests && requests.length > 0 && !acceptedRide && (
          <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="px-4 pt-4 pointer-events-auto">
            <div className="bg-surface/95 backdrop-blur-md shadow-card rounded-2xl p-5 border border-border/50">
              <h3 className="text-lg font-bold mb-2">Nearby Requests</h3>

              <div className="overflow-x-auto">
                <div className="flex gap-4">
                  {requests.map((req) => (
                    <RideRequestCard key={req.id} request={req} onAccept={() => acceptRequest(req.id)} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* accepted ride bottom sheet (mobile) */}
        <AnimatePresence>
          {acceptedRide && !showOTP && !isRideStarted && (
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring" as const, stiffness: 120, damping: 18 }} className="bg-surface rounded-t-[30px] p-6 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] pointer-events-auto mt-auto">
              <div className="w-12 h-1 bg-muted-light/30 rounded-full mx-auto mb-4" />
              <AcceptedRideCard ride={acceptedRide} onStartRide= {handleStartRide} mobile />
            </motion.div>
          )}
        </AnimatePresence>

        {/* OTP bottom sheet */}
        <AnimatePresence>
          {showOTP && (
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring" as const, stiffness: 120, damping: 18 }} className="bg-surface rounded-t-[30px] p-6 pb-10 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] pointer-events-auto mt-auto">
              <div className="w-12 h-1 bg-muted-light/30 rounded-full mx-auto mb-4" />
              <DriverOtpCard otp={rideOTP} onConfirm={handleOtpConfirm} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* active ride bottom sheet */}
        <AnimatePresence>
          {isRideStarted && !showRideSummary && acceptedRide && (
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring" as const, stiffness: 120, damping: 18 }} className="bg-surface rounded-t-[30px] p-6 pb-10 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] pointer-events-auto mt-auto">
              <div className="w-12 h-1 bg-muted-light/30 rounded-full mx-auto mb-4" />
              <ActiveRidePanel ride={acceptedRide} onCancel={() => setShowCancelPopup(true)} onComplete={completeRide} canCancel={!showCompleteButton} status={driverStatus === "ON_RIDE" ? "onride" : "enroute"} mobile />
            </motion.div>
          )}
        </AnimatePresence>

        {/* summary fullscreen */}
        <AnimatePresence>
          {showRideSummary && acceptedRide && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-surface flex items-center justify-center p-6 pointer-events-auto z-50">
              <DriverRideSummary ride={acceptedRide} onHome={backToHome} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* arrival banner */}
      <AnimatePresence>{arrivalState && <ArrivalBanner status={arrivalState} />}</AnimatePresence>

      {/* cancel dialog */}
      <AnimatePresence>
        {showCancelPopup && <CancelRideDialog onClose={() => setShowCancelPopup(false)} onConfirm={() => confirmCancel()} />}
      </AnimatePresence>
    </div>
  );
}
