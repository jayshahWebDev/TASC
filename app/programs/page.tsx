import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Programs from "@/components/Programs";
import StudentJourney from "@/components/StudentJourney";
import AdmissionProcess from "@/components/AdmissionProcess";
import { ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Programs | Tapovan Administrative Services Centre (TASC)",
  description:
    "Explore UPSC Civil Services, GPSC Preparation, IAS Foundation, Mock Interview Panels, and Test Series offered at TASC.",
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-jain-pattern py-16 sm:py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/80 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full inline-block mb-4">
            Academic Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-accent tracking-tight mb-4">
            Our Academic Programs
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From comprehensive UPSC and GPSC coaching to early college
            foundation modules and officer mock interview panels.
          </p>
        </div>
      </section>

      {/* Main Programs Component */}
      <Programs />

      {/* Admission Process Timeline */}
      <AdmissionProcess />

      {/* CTA Box */}
      <section className="py-16 bg-surface border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-accent mb-3">
            Need Guidance Choosing the Right Program?
          </h3>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">
            Our senior academic counsellors provide 1-on-1 syllabus mapping to
            help aspirants pick the ideal preparation roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full text-xs font-bold shadow-md hover:bg-[#85164d] transition-all"
            >
              <span>Schedule Free Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 bg-white text-slate-700 border border-slate-200 hover:border-primary/40 px-6 py-3.5 rounded-full text-xs font-bold transition-all shadow-2xs"
            >
              <span>View Residential Facilities</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
