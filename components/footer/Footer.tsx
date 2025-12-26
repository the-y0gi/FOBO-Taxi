// "use client";

// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaApple, FaGooglePlay } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#022c22] text-slate-300 pt-24 pb-10 px-6 relative overflow-hidden">

//       {/* --- BACKGROUND GLOW EFFECTS (Theme Matching) --- */}
//       {/* Top Right Glow */}
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
//       {/* Bottom Left Glow */}
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10">

//         {/* --- TOP SECTION: BRAND & LINKS --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

//           {/* 1. BRAND COLUMN (Wider: Takes 4 cols) */}
//           <div className="lg:col-span-4 space-y-6">
//              {/* Logo */}
//              <div className="flex items-center gap-2 text-white font-bold text-3xl tracking-tight">
//                 <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
//                   <svg className="w-6 h-6 text-white transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
//                 </div>
//                 FOBO<span className="text-primary">Cab</span>
//              </div>

//              <p className="text-slate-400 leading-relaxed text-base max-w-sm">
//                Experience the freedom of movement. Safe, reliable, and accessible rides designed for everyone.
//              </p>

//              {/* Premium App Store Buttons */}
//              <div className="flex flex-wrap gap-3 pt-4">
//                 <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all duration-300 px-5 py-3 rounded-xl group">
//                    <FaApple className="text-3xl text-white group-hover:text-primary transition-colors" />
//                    <div className="text-left">
//                       <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Download on the</p>
//                       <p className="text-sm font-bold text-white leading-none">App Store</p>
//                    </div>
//                 </button>
//                 <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all duration-300 px-5 py-3 rounded-xl group">
//                    <FaGooglePlay className="text-2xl text-white group-hover:text-primary transition-colors" />
//                    <div className="text-left">
//                       <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Get it on</p>
//                       <p className="text-sm font-bold text-white leading-none">Google Play</p>
//                    </div>
//                 </button>
//              </div>
//           </div>

//           {/* SPACER COLUMN (Desktop only) */}
//           <div className="hidden lg:block lg:col-span-1"></div>

//           {/* 2. COMPANY LINKS (2 cols) */}
//           <div className="lg:col-span-2">
//              <h3 className="text-white font-bold text-lg mb-6">Company</h3>
//              <ul className="space-y-4 font-medium text-slate-400">
//                <li><a href="#" className="hover:text-primary hover:pl-1 transition-all">About Us</a></li>
//                <li><a href="#" className="hover:text-primary hover:pl-1 transition-all">Careers</a></li>
//                <li><a href="#" className="hover:text-primary hover:pl-1 transition-all">Blog</a></li>
//                <li><a href="#" className="hover:text-primary hover:pl-1 transition-all">Press</a></li>
//              </ul>
//           </div>

//           {/* 3. PRODUCT LINKS (2 cols) */}
//           <div className="lg:col-span-2">
//              <h3 className="text-white font-bold text-lg mb-6">Product</h3>
//              <ul className="space-y-4 font-medium text-slate-400">
//                <li><a href="#" className="hover:text-primary hover:pl-1 transition-all">Ride</a></li>
//                <li><a href="#" className="hover:text-primary hover:pl-1 transition-all">Drive</a></li>
//                <li><a href="#" className="hover:text-primary hover:pl-1 transition-all">Safety</a></li>
//                <li><a href="#" className="hover:text-primary hover:pl-1 transition-all">Cities</a></li>
//              </ul>
//           </div>

//           {/* 4. SUPPORT LINKS (3 cols) */}
//           <div className="lg:col-span-3">
//              <h3 className="text-white font-bold text-lg mb-6">Support</h3>
//              <ul className="space-y-4 font-medium text-slate-400">
//                <li><a href="#" className="hover:text-primary hover:pl-1 transition-all">Help Center</a></li>
//                <li><a href="#" className="hover:text-primary hover:pl-1 transition-all">Accessibility Services</a></li>
//                <li><a href="#" className="hover:text-primary hover:pl-1 transition-all">Terms of Service</a></li>
//                <li><a href="#" className="hover:text-primary hover:pl-1 transition-all">Privacy Policy</a></li>
//              </ul>
//           </div>

//         </div>

//         {/* --- BOTTOM STRIP: COPYRIGHT & SOCIALS --- */}
//         <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

//           <p className="text-slate-500 text-sm font-medium">
//             © 2025 Fobo Technologies Inc. All rights reserved.
//           </p>

//           <div className="flex items-center gap-4">
//              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1 transition-all duration-300"
//                 >
//                    <Icon size={16} />
//                 </a>
//              ))}
//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }

"use client";

import { useState, ReactNode, ElementType } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay,
  FaChevronDown,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[#022c22] text-slate-300 relative overflow-hidden font-sans">
      {/* --- 1. MASSIVE BACKGROUND WATERMARK (Resized for Mobile) --- */}
      <div className="absolute bottom-0 lg:-bottom-0 left-0 select-none pointer-events-none z-0">
        <h1 className="text-[7rem] md:text-[25rem] font-bold text-white/[0.02] leading-none tracking-tighter">
          FOBO
        </h1>
      </div>

      {/* --- 2. DECORATIVE GRADIENT GLOWS --- */}
      <div className="absolute top-0 right-0 w-[300px] lg:w-[800px] h-[300px] lg:h-[800px] bg-primary/10 rounded-full blur-[80px] lg:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-12 lg:pt-20">
        {/* --- 4. MAIN GRID LINKS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 lg:pb-20">
          {/* BRAND COLUMN (Always Visible) */}
          <div className="lg:col-span-5 space-y-6 lg:space-y-8">
            <div className="flex items-center gap-2 text-white font-bold text-2xl lg:text-3xl tracking-tight">
              <div className="w-10 h-10 bg-white text-primary rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 transform -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              FOBO Cab
            </div>

            <p className="text-slate-400 leading-relaxed text-base lg:text-lg max-w-sm">
              Redefining urban mobility with safety, accessibility, and care at
              the core of every journey.
            </p>

            <div className="flex gap-4">
              <SocialIcon Icon={FaFacebookF} />
              <SocialIcon Icon={FaTwitter} />
              <SocialIcon Icon={FaInstagram} />
              <SocialIcon Icon={FaLinkedinIn} />
            </div>
          </div>

          {/* LINKS COLUMNS (Collapsible on Mobile, Static on Desktop) */}

          <div className="lg:col-span-2 border-t border-white/5 lg:border-none pt-4 lg:pt-0">
            <FooterColumn title="Company">
              <FooterLink text="About" />
              <FooterLink text="Careers" />
              <FooterLink text="Press" />
              <FooterLink text="Blog" />
            </FooterColumn>
          </div>

          <div className="lg:col-span-2 border-t border-white/5 lg:border-none pt-4 lg:pt-0">
            <FooterColumn title="Product">
              <FooterLink text="Ride" />
              <FooterLink text="Drive" />
              <FooterLink text="Business" />
              <FooterLink text="Safety" />
            </FooterColumn>
          </div>

          {/* DOWNLOAD APP (Modified layout for Mobile) */}
          <div className="lg:col-span-3 border-t border-white/5 lg:border-none pt-6 lg:pt-0">
            <h4 className="text-white font-bold text-lg mb-4 lg:mb-6">
              Download App
            </h4>
            {/* Mobile: Grid (Side by side), Desktop: Flex Col (Stacked) */}
            <div className="grid grid-cols-2 lg:flex lg:flex-col gap-3">
              <AppButton
                icon={<FaApple size={24} />}
                title="App Store"
                subtitle="Download"
              />
              <AppButton
                icon={<FaGooglePlay size={20} />}
                title="Google Play"
                subtitle="Get it on"
              />
            </div>
          </div>
        </div>

        {/* --- 5. BOTTOM COPYRIGHT --- */}
        <div className="border-t border-white/10 py-6 lg:py-8 flex flex-col-reverse lg:flex-row justify-between items-center gap-4 text-sm text-slate-500 text-center lg:text-left">
          <p>© 2025 Fobo Technologies Inc.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- SMART SUB-COMPONENTS ---

// 1. Collapsible Column Component (The Magic Logic)
interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Mobile Trigger / Desktop Title */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full lg:cursor-default group"
      >
        <h4 className="text-white font-bold text-lg mb-2 lg:mb-6">{title}</h4>
        {/* Chevron only shows on Mobile */}
        <span
          className={`lg:hidden text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <FaChevronDown />
        </span>
      </button>

      {/* Content: Always Show on Desktop, Toggle on Mobile */}
      <div className={`hidden lg:block`}>
        <ul className="space-y-4">{children}</ul>
      </div>

      {/* Mobile Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden"
          >
            <ul className="space-y-4 pb-4">{children}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FooterLinkProps {
  text: string;
}

function FooterLink({ text }: FooterLinkProps) {
  return (
    <li>
      <a
        href="#"
        className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
      >
        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-primary">
          →
        </span>
        {text}
      </a>
    </li>
  );
}

interface SocialIconProps {
  Icon: ElementType;
}

function SocialIcon({ Icon }: SocialIconProps) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-[#022c22] transition-all duration-300"
    >
      <Icon size={16} />
    </a>
  );
}

interface AppButtonProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

function AppButton({ icon, title, subtitle }: AppButtonProps) {
  return (
    <button className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-3 lg:px-5 lg:py-3 rounded-xl transition-all group w-full">
      <span className="text-white group-hover:text-primary transition-colors text-xl lg:text-2xl">
        {icon}
      </span>
      <div className="text-left">
        <p className="text-[9px] lg:text-[10px] text-slate-400 uppercase font-bold leading-none mb-1 whitespace-nowrap">
          {subtitle}
        </p>
        <p className="text-xs lg:text-sm font-bold text-white leading-none whitespace-nowrap">
          {title}
        </p>
      </div>
    </button>
  );
}
