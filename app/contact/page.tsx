import React from "react";
import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Admissions | Tapovan Administrative Services Centre (TASC)",
  description: "Get in touch with TASC admissions office in Gandhinagar, Gujarat. Call our helpline, WhatsApp desk, or submit your online inquiry.",
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
            Have questions about our civil services preparation batches, hostel admissions, or entry tests? Our administrative team is here to assist.
          </p>
        </div>
      </section>

      {/* Main Contact Section (Controlled Form + Regex Validations + Loading Spinner + Administrative Location) */}
      <Contact />

      {/* Office Hours & Quick Highlights */}
      <section className="py-12 bg-surface border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-150 p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-primary/5 text-primary rounded-xl shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Desk Hours</h4>
                <p className="text-sm font-bold text-accent mt-1">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                <p className="text-xs text-slate-500 mt-0.5">Sunday by prior appointment</p>
              </div>
            </div>

            <div className="bg-white border border-slate-150 p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-[#25D366]/10 text-[#25D366] rounded-xl shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Instant Chat</h4>
                <p className="text-sm font-bold text-accent mt-1">WhatsApp Helpline Active</p>
                <a
                  href="https://wa.me/918200596350?text=Hello,%20I%20have%20an%20admission%20inquiry%20for%20TASC."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary font-semibold hover:underline mt-0.5 inline-block"
                >
                  Start WhatsApp Chat &rarr;
                </a>
              </div>
            </div>

            <div className="bg-white border border-slate-150 p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Administrative Block</h4>
                <p className="text-sm font-bold text-accent mt-1">Tapovan Sanskardham Campus</p>
                <p className="text-xs text-slate-500 mt-0.5">Koba Highway, Gandhinagar, Gujarat</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
