import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Facilities from "@/components/Facilities";
import CampusLife from "@/components/CampusLife";
import VideoShowcase from "@/components/VideoShowcase";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Campus Facilities & Life | Tapovan Administrative Services Centre (TASC)",
  description:
    "Explore the 24/7 library, residential hostel quarters, Satvik Jain food, and daily life routines at TASC Gandhinagar.",
};

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-jain-pattern py-16 sm:py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/80 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full inline-block mb-4">
            Living & Learning Environment
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-accent tracking-tight mb-4">
            Facilities & Campus Life
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover our student focused residential ecosystem, 24/7 library,
            Satvik dining, and disciplined campus life designed for aspirants.
          </p>
        </div>
      </section>

      {/* Facilities & Rules */}
      <Facilities />

      {/* Interactive Photo & Video Gallery with Optimized Filters & Grid Layouts */}
      <CampusLife />
    </div>
  );
}
