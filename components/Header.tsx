"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import TascLogo from "./TascLogo";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Facilities", href: "/facilities" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-3"
            : "bg-white/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo in responsive container ensuring max-width behavior */}
          <Link
            href="/"
            className="focus:outline-none flex items-center group"
            aria-label="TASC Home"
          >
            <div className="w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[230px] transition-all">
              <TascLogo size="sm" priority />
            </div>
          </Link>

          {/* Desktop Navigation using Next.js Link */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors relative py-2 group ${
                    active
                      ? "text-primary"
                      : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Call to Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://chat.whatsapp.com/D6gC4px5mY9FbbBg3l9Mys"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-slate-700 hover:text-white hover:bg-[#25D366] hover:border-transparent transition-all duration-300 text-sm font-semibold group shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
              <span>WhatsApp Group</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-1.5 bg-primary text-white px-5 py-2.5 rounded-full hover:bg-[#85164d] transition-all duration-300 text-sm font-semibold shadow-md shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-primary focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 lg:hidden bg-white border-b border-slate-100 shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-5 max-h-[calc(100vh-65px)] overflow-y-auto">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                        active
                          ? "bg-primary/10 text-primary font-bold"
                          : "text-slate-800 hover:text-primary hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <hr className="border-slate-100" />

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/918200596350?text=Hello,%20I%20am%20interested%20in%20TASC%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-slate-200 rounded-full text-slate-700 hover:bg-[#25D366] hover:text-white transition-all duration-300 text-sm font-semibold shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Inquiry</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-full hover:bg-[#85164d] transition-all duration-300 text-sm font-semibold shadow-md shadow-primary/10"
                >
                  <span>Apply For Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
