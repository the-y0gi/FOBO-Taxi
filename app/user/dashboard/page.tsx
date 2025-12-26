"use client";

import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Map from "@/components/Map";

import useRoute from "@/hooks/useRoutes";
import useGeoSearch from "@/hooks/useGeoSearch";

import { motion,type Variants, AnimatePresence, PanInfo } from "framer-motion";
import {
  Navigation,
  CreditCard,
  Clock,
  ShieldCheck,
  MapPin,
  Star,
} from "lucide-react";

import InputGroup from "../components/InputGroup";
import FareDetails from "../components/FareDetails";
import SearchingState from "../components/SearchingState";
import DriverInfoWithPayment from "../components/DriverInfoWithPayment";
import OtpCard from "../components/OtpCard";
import ActiveRideWithDriver from "../components/ActiveRideWithDriver";
import RideSummary from "../components/RideSummary";
import DialogPopup from "../components/DialogPopup";
import BottomNav from "@/components/BottomNav";

export default function UserDashboard() {
  const [members, setMembers] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const [userLocation, setUserLocation] = useState<any>(null);
  const [dropLocation, setDropLocation] = useState<any>(null);
  const [routeCoords, setRouteCoords] = useState<any[]>([]);
  const [distance, setDistance] = useState<number | null>(null);

  const [showFareScreen, setShowFareScreen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [showDriverInfo, setShowDriverInfo] = useState(false);

  const [isExpanded, setIsExpanded] = useState(true);

  const [showOTP, setShowOTP] = useState(false);
  const [rideOTP, setRideOTP] = useState("");

  const [showRideDetails, setShowRideDetails] = useState(false);
  const [showArrivalBanner, setShowArrivalBanner] = useState(false);
  const [showArrivedBanner, setShowArrivedBanner] = useState(false);

  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showRideCompleted, setShowRideCompleted] = useState(false);
  const [showRideSummary, setShowRideSummary] = useState(false);

  const {
    results: pickupResults,
    searchLocation: searchPickup,
    setResults: setPickupResults,
  } = useGeoSearch();

  const {
    results: dropResults,
    searchLocation: searchDrop,
    setResults: setDropResults,
  } = useGeoSearch();

  const { reverseGeocode } = useGeoSearch();
  const { getRoute } = useRoute();
  const { toast } = useToast();
  const router = useRouter();

  const arrivalTimer = useRef<any>(null);
  const arrivedTimer = useRef<any>(null);
  const timers = useRef<number[]>([]);

  const calculatedFare =
    distance && members ? distance * Number(members) * 1 : 0;

  useEffect(() => {
    return () => timers.current.forEach((id) => clearTimeout(id));
  }, []);

  useEffect(() => {
    if (showDriverInfo || showRideDetails) {
      setIsExpanded(true);
    }
  }, [showDriverInfo, showRideDetails]);

  const handlePickupChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPickup(e.target.value);
    searchPickup(e.target.value);
  };

  const handleDropChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDrop(e.target.value);
    searchDrop(e.target.value);
  };

  const handleMembersChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    setMembers(value);

    if (value !== "" && Number(value) > 15) {
      toast({
        title: "Limit Exceeded",
        description: "Max 15 members.",
        variant: "destructive",
      });
    }
  };

  const handleSelectPickup = (item: any) => {
    setPickup(item.display_name);
    setPickupResults([]);
    setUserLocation({ lat: item.lat, lng: item.lon });
  };

  const handleSelectDrop = async (item: any) => {
    setDrop(item.display_name);
    setDropLocation({ lat: item.lat, lng: item.lon });
    setDropResults([]);

    if (userLocation) {
      const route = await getRoute(userLocation, {
        lat: item.lat,
        lng: item.lon,
      });
      if (route) {
        setRouteCoords(route.coords);
        setDistance(route.distance);
        setShowFareScreen(true);
      }
    }
  };

  const handleShareLocation = () => {
    if (!navigator.geolocation) return alert("Location unsupported");

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      setUserLocation({ lat: latitude, lng: longitude });

      const niceName = await reverseGeocode(latitude, longitude);
      setPickup(niceName || `${latitude}, ${longitude}`);
    });
  };

  const handleSearchRide = () => {
    setShowFareScreen(false);
    setIsSearching(true);
    setIsExpanded(true);

    timers.current.push(
      window.setTimeout(() => {
        setIsSearching(false);
        setShowDriverInfo(true);
      }, 3000)
    );
  };

  const handleConfirmPayment = () => {
    setPaymentSuccess(true);
    setShowPaymentPopup(false);

    timers.current.push(
      window.setTimeout(() => {
        setPaymentSuccess(false);
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        setRideOTP(otp);
        setShowOTP(true);
        setIsExpanded(true);
      }, 1500)
    );
  };

  const handleOtpOk = () => {
    setShowOTP(false);
    setShowDriverInfo(false);
    setShowRideDetails(true);

    arrivalTimer.current = window.setTimeout(() => {
      setShowArrivalBanner(true);

      arrivedTimer.current = window.setTimeout(() => {
        setShowArrivalBanner(false);

        window.setTimeout(() => {
          setShowArrivedBanner(true);

          window.setTimeout(() => {
            setShowArrivedBanner(false);
            window.setTimeout(() => setShowRideCompleted(true), 3000);
          }, 3000);
        }, 2000);
      }, 3000);
    }, 2000);
  };

  const handleBackToHome = () => window.location.reload();

  //drag
  const handleDragEnd = (event: any, info: PanInfo) => {
    const dragDistance = info.offset.y;
    const dragVelocity = info.velocity.y;

    // Swipe Down ->Collapse
    if (dragDistance > 50 || dragVelocity > 500) {
      setIsExpanded(false);
    }
    // Swipe Up -> Expand
    else if (dragDistance < -50 || dragVelocity < -500) {
      setIsExpanded(true);
    }
  };

  const panelVariants: Variants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 20 },
    },
  };

  // Variants for Mobile Bottom Sheet(Slide Up/Down)
  const mobileSheetVariants: Variants = {
    hidden: { y: "110%", height: "auto" },
    visible: (expanded: boolean) => ({
      y: 0,
      height: expanded ? "auto" : "180px",
      transition: { type: "spring" as const, stiffness: 120, damping: 20 },
    }),
    exit: { y: "110%", transition: { duration: 0.3 } },
  };

  return (
     <div className="relative w-full h-screen overflow-hidden bg-background font-sans text-muted-dark selection:bg-secondary-light selection:text-primary-dark">
        {/* MAP */}
        <div className="absolute inset-0 z-0">
          <Map
            userLocation={userLocation}
            routeCoords={routeCoords}
            dropLocation={dropLocation}
          />
          <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-multiply" />
        </div>

        {/* DESKTOP SIDEBAR*/}
        <div className="hidden lg:flex flex-col justify-center absolute top-0 left-0 z-20 pl-6 pointer-events-none h-screen pt-20 pb-10">
          <motion.div
            initial="hidden"
            animate="visible"
            layout
            variants={panelVariants}
            className="
              w-[480px] 
              max-h-[85vh] h-auto 
              bg-surface/95 backdrop-blur-xl 
              shadow-2xl rounded-3xl 
              border border-white/20 
              pointer-events-auto 
              flex flex-col overflow-hidden
            "
          >
            {/* Top Gradient - Desktop Only */}
            <div className="hidden lg:block h-2 w-full bg-gradient-to-r from-primary-dark to-primary flex-shrink-0" />

            {/* HEADER */}
            <div className="p-6 pb-2 flex-shrink-0">
              <div className="flex items-center gap-2 mb-2 opacity-80">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Navigation size={18} />
                </div>
                <span className="font-bold text-xl text-primary-dark">
                  FOBO Cab
                </span>
              </div>
            </div>

            <div className="overflow-y-auto p-6 pt-2 scrollbar-hide">
              {!showDriverInfo && !showRideDetails && !showRideSummary && (
                <>
                  <h1 className="text-3xl font-bold mb-2">Get a ride</h1>
                  <p className="text-muted mb-6 text-sm">
                    Comfortable & safe journey awaits.
                  </p>

                  <InputGroup
                    pickup={pickup}
                    drop={drop}
                    members={members}
                    handlePickupChange={handlePickupChange}
                    handleDropChange={handleDropChange}
                    handleMembersChange={handleMembersChange}
                    handleShareLocation={handleShareLocation}
                    pickupResults={pickupResults}
                    dropResults={dropResults}
                    handleSelectPickup={handleSelectPickup}
                    handleSelectDrop={handleSelectDrop}
                  />

                  <AnimatePresence>
                    {showFareScreen && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 pt-6 border-t border-dashed border-border"
                      >
                        <FareDetails
                          distance={distance}
                          fare={calculatedFare}
                          onSearch={handleSearchRide}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {isSearching && <SearchingState />}
                </>
              )}

              {/* DRIVER INFO */}
              {showDriverInfo && !showOTP && (
                <DriverInfoWithPayment
                  fare={calculatedFare}
                  onPay={() => setShowPaymentPopup(true)}
                />
              )}

              {/* OTP */}
              {showOTP && <OtpCard otp={rideOTP} onConfirm={handleOtpOk} />}

              {/* ACTIVE RIDE */}
              {showRideDetails && (
                <ActiveRideWithDriver
                  otp={rideOTP}
                  status={
                    showArrivedBanner
                      ? "Driver Arrived"
                      : showArrivalBanner
                      ? "Arriving Soon"
                      : "En Route"
                  }
                  onCancel={() => setShowCancelPopup(true)}
                />
              )}

              {/* SUMMARY */}
              {showRideSummary && <RideSummary onHome={handleBackToHome} />}
            </div>
          </motion.div>
        </div>

        {/* MOBILE UI */}
        <div className="lg:hidden absolute inset-0 pointer-events-none flex flex-col z-30 pt-20">
          {!isSearching &&
            !showDriverInfo &&
            !showOTP &&
            !showRideDetails &&
            !showRideSummary && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" as const }}
                className="flex-1 flex items-start justify-center px-4 pt-4 pointer-events-auto"
              >
                <div className="w-full bg-surface/95 backdrop-blur-md shadow-card rounded-2xl p-5 border border-border/50">
                  <InputGroup
                    pickup={pickup}
                    drop={drop}
                    members={members}
                    handlePickupChange={handlePickupChange}
                    handleDropChange={handleDropChange}
                    handleMembersChange={handleMembersChange}
                    handleShareLocation={handleShareLocation}
                    pickupResults={pickupResults}
                    dropResults={dropResults}
                    handleSelectPickup={handleSelectPickup}
                    handleSelectDrop={handleSelectDrop}
                  />

                  <AnimatePresence>
                    {showFareScreen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-dashed border-border">
                          <FareDetails
                            distance={distance}
                            fare={calculatedFare}
                            onSearch={handleSearchRide}
                            mobile
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

          {/* Bottom Sheet with Expand/Collapse*/}
          <AnimatePresence>
            {(isSearching || showDriverInfo || showOTP || showRideDetails) && (
              <motion.div
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                variants={mobileSheetVariants}
                custom={isExpanded}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-surface rounded-t-[32px] overflow-hidden p-6 pb-6 border-t border-white/50 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] pointer-events-auto mt-auto z-40 touch-none fixed bottom-0 left-0 right-0 w-full"
              >
                {/*Clickable Handle Bar for Toggling */}
                <div
                  className="w-full flex justify-center pb-6 -mt-2 cursor-grab active:cursor-grabbing"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <div className="w-12 h-1.5 bg-muted-light/40 rounded-full" />
                </div>

                {/* Content Container*/}
                <motion.div animate={{ opacity: isExpanded ? 1 : 0.8 }}>
                  {isSearching && <SearchingState />}

                  {showDriverInfo && !showOTP && (
                    <DriverInfoWithPayment
                      fare={calculatedFare}
                      onPay={() => setShowPaymentPopup(true)}
                      mobile
                    />
                  )}

                  {showOTP && <OtpCard otp={rideOTP} onConfirm={handleOtpOk} />}

                  {showRideDetails && (
                    <ActiveRideWithDriver
                      otp={rideOTP}
                      status={
                        showArrivedBanner
                          ? "Driver Arrived"
                          : showArrivalBanner
                          ? "Arriving Soon"
                          : "En Route"
                      }
                      onCancel={() => setShowCancelPopup(true)}
                      mobile
                    />
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* BOTTOM FLOATING NAVBAR */}
          {!showFareScreen &&
            !isSearching &&
            !showDriverInfo &&
            !showRideDetails &&
            !showRideSummary && <BottomNav activeTab="ride" />}

          {/* Summary Overlay */}
          {showRideSummary && (
            <div className="absolute inset-0 bg-surface flex items-center justify-center p-6 pointer-events-auto z-50">
              <RideSummary onHome={handleBackToHome} />
            </div>
          )}
        </div>

        {/* POPUPS (Payment/Cancel/Success)*/}
        <AnimatePresence>
          {showPaymentPopup && (
            <DialogPopup
              title="Payment"
              onClose={() => setShowPaymentPopup(false)}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secondary-light rounded-2xl flex items-center justify-center mb-4 text-primary">
                  <CreditCard size={32} />
                </div>

                <p className="text-muted text-sm mb-1">Amount to Pay</p>

                <p className="text-3xl font-bold text-muted-dark mb-6">
                  ₹{calculatedFare.toFixed(2)}
                </p>

                <Button
                  onClick={handleConfirmPayment}
                  className="w-full bg-primary text-white h-12 rounded-xl"
                >
                  Confirm Payment
                </Button>
              </div>
            </DialogPopup>
          )}

          {showCancelPopup && (
            <DialogPopup
              title="Cancel Ride"
              onClose={() => setShowCancelPopup(false)}
            >
              <p className="text-muted text-center mb-6">
                Are you sure? This action cannot be undone.
              </p>

              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  className="flex-1 text-red-500"
                  onClick={() => {
                    setShowCancelPopup(false);
                    setShowRideDetails(false);
                    setShowArrivalBanner(false);
                    setShowArrivedBanner(false);
                    window.location.reload();
                  }}
                >
                  Yes, Cancel
                </Button>

                <Button
                  className="flex-1 bg-primary text-white"
                  onClick={() => setShowCancelPopup(false)}
                >
                  No, Back
                </Button>
              </div>
            </DialogPopup>
          )}

          {showRideCompleted && (
            <DialogPopup
              title="Success!"
              onClose={() => {
                setShowRideCompleted(false);
                setTimeout(() => setShowRideSummary(true), 300);
              }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white mb-4"
                >
                  <ShieldCheck size={40} />
                </motion.div>

                <p className="text-muted mb-6 text-center">
                  You have arrived at your destination.
                </p>

                {/* Dummy Rating UI */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <Star
                      key={index}
                      size={32}
                      className="text-muted/30 hover:text-yellow-400 hover:fill-yellow-400 cursor-pointer transition-all duration-200"
                    />
                  ))}
                </div>

                <Button
                  className="w-full bg-primary text-white h-12 rounded-xl"
                  onClick={() => {
                    setShowRideCompleted(false);
                    setTimeout(() => setShowRideSummary(true), 300);
                  }}
                >
                  Rate Ride
                </Button>
              </div>
            </DialogPopup>
          )}
        </AnimatePresence>

        {/* ARRIVAL BANNERS */}
        <AnimatePresence>
          {showArrivalBanner && (
            <motion.div
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -120, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" as const }}
              className="
        fixed
        top-20 left-1/2 -translate-x-1/2
        z-[999]
        px-5 py-3
        w-max max-w-[100%]
        bg-muted-dark text-white
        rounded-full shadow-2xl
        flex items-center gap-2
        text-sm
      "
            >
              <Clock size={18} />
              <span className="font-medium">Arriving in 2 mins</span>
            </motion.div>
          )}

          {showArrivedBanner && (
            <motion.div
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -120, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" as const }}
              className="
        fixed
        top-20 left-1/2 -translate-x-1/2
        z-[999]
        px-6 py-3
        w-max max-w-[100%]
        bg-primary text-white
        rounded-full shadow-2xl
        flex items-center gap-2
        text-sm
      "
            >
              <MapPin size={18} />
              <span className="font-semibold">Driver has arrived</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
}
