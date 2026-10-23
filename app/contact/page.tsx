import React from "react";
import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Admissions | Tapovan Administrative Services Centre (TASC)",
  description:
    "Get in touch with TASC admissions office in Gandhinagar, Gujarat. Call our helpline, WhatsApp desk, or submit your online inquiry.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-jain-pattern py-16 sm:py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/80 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full inline-block mb-4">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-accent tracking-tight mb-4">
            Contact Admissions Desk
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our civil services preparation batches, hostel
            admissions, or entry tests? Our administrative team is here to
            assist.
          </p>
        </div>
      </section>

      {/* Main Contact Section (Controlled Form + Regex Validations + Loading Spinner + Administrative Location) */}
      <Contact />
    </div>
  );
}
