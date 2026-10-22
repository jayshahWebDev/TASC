import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Facilities from "@/components/Facilities";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import {
  ArrowRight,
  Compass,
  GraduationCap,
  Home as HomeIcon,
  PhoneCall,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />

      {/* About Preview Teaser */}
      <About />
      <div className="bg-surface py-6 text-center border-b border-slate-100">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
        >
          <span>Discover Our Full Heritage, Vision & Objectives</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Programs Teaser */}
      <Programs />

      {/* Facilities Teaser */}
      <Facilities />
      <div className="bg-surface py-6 text-center border-b border-slate-100">
        <Link
          href="/facilities"
          className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
        >
          <span>View Campus Life & Photo Gallery</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Why Choose & Testimonials */}
      <WhyChoose />
      <Testimonials />

      {/* Call to Action Banner linking to /contact */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4">
            Admissions Open
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Begin Your Administrative Journey with TASC
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base leading-relaxed mb-8">
            Experience an elite residential environment combining academic
            rigor, officer mentorship, and Jain moral discipline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-slate-100 px-8 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all"
            >
              <span>Apply Online Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918200596350?text=Hello,%20I%20am%20interested%20in%20TASC%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold text-sm transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to Admissions Counsellor</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
