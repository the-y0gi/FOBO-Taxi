"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"; 
import { useState } from "react";
import { Navigation, Menu, X } from "lucide-react"; 
export default function Navbar({
  driverPhoto,
  status,
}: {
  driverPhoto?: string;
  status?: string;
}) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const pathname = usePathname();

  //MENU LINKS
  const navLinks = [
    { name: "Ride", href: "/user/dashboard" },
    { name: "History", href: "/user/history" },
    { name: "Profile", href: "/user/profile" },
    { name: "About", href: "/about" },
  ];

  // Scroll detection
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false);
    } else {
      setHidden(false);
    }
  });

  // LOGIN DRAWER HANDLERS 
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const openLoginHandler = () => setOpenLogin(true);
  const closeLoginHandler = () => setOpenLogin(false);

  const openSignupHandler = () => setOpenSignup(true);
  const closeSignupHandler = () => setOpenSignup(false);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" as const }}
      className={`
        fixed top-0 left-0 w-full z-[100] transition-all duration-300
        ${
          scrolled || mobileMenuOpen
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/*LOGO*/}
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Navigation size={20} fill="currentColor" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            FOBO <span className="text-primary">Cab</span>
          </span>
        </Link>

        {/* DESKTOP MENU  */}
        <nav className="hidden md:flex items-center gap-1 bg-white/50 px-2 py-1.5 rounded-full border border-gray-200/50 backdrop-blur-md shadow-sm">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  px-5 py-2 text-sm font-medium rounded-full transition-all
                  ${
                    isActive
                      ? "text-black bg-white shadow-sm font-bold"
                      : "text-gray-600 hover:text-black hover:bg-gray-100/80"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS  */}
        <div className="flex items-center gap-4 relative z-50">
          {status && (
            <div
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm border ${
                status === "ARRIVING"
                  ? "bg-blue-50 text-blue-600 border-blue-100"
                  : "bg-green-50 text-green-600 border-green-100"
              } `}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  status === "ARRIVING" ? "bg-blue-500" : "bg-green-500"
                } animate-pulse`}
              />
              {status}
            </div>
          )}

          {/* User/Driver Profile or Login - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-600 hover:text-black transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/"
              className="px-5 py-2.5 bg-black text-white text-sm font-bold rounded-full shadow-lg hover:bg-gray-900 hover:scale-105 active:scale-95 transition-all"
            >
              Sign up
            </Link>
          </div>

          {/* HAMBURGER ICON*/}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU dROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`text-lg font-medium ${
                    pathname === item.href ? "text-black" : "text-gray-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="h-px bg-gray-100 my-2" />
              
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold text-gray-600"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center px-5 py-3 bg-black text-white text-base font-bold rounded-xl shadow-lg"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}