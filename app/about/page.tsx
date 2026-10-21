import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import AimsObjectives from "@/components/AimsObjectives";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Trust from "@/components/Trust";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Tapovan Administrative Services Centre (TASC)",
  description: "Learn about TASC's heritage, inspired by revered Jain administrators like Vastupal, Tejpal, Vimal Mantri, and Sajan Mantri, cultivating ethical leadership in civil services.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-jain-pattern py-16 sm:py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/80 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full inline-block mb-4">
            Heritage & Ideology
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-accent tracking-tight mb-4">
            About TASC
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Reviving the legacy of great Jain administrators through intellectual excellence, disciplined preparation, and public service ethics.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <About />
      <VisionMission />
      <AimsObjectives />
      <WhyChoose />
      <Testimonials />
      <Trust />

      {/* Next Step Call to Action */}
      <section className="py-16 bg-surface border-t border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-extrabold text-accent mb-3">
            Interested in Joining TASC?
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Review our academic channels or reach out to our admissions department directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-xs font-bold shadow-md hover:bg-[#85164d] transition-all"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-700 border border-slate-200 hover:border-primary/40 px-6 py-3 rounded-full text-xs font-bold transition-all shadow-2xs"
            >
              <span>Contact Admissions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
