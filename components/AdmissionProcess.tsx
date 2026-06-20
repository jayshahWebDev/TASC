"use client";

import React from "react";
import { ClipboardEdit, SearchCode, Presentation, Milestone } from "lucide-react";
import { motion } from "framer-motion";

export default function AdmissionProcess() {
  const steps = [
    {
      step: "01",
      title: "Submit Application",
      desc: "Fill the admission form online or scan the WhatsApp contact QR to get direct registration sheets.",
      icon: ClipboardEdit,
      badge: "Application",
    },
    {
      step: "02",
      title: "Screening Exam",
      desc: "Aptitude and basic analytical check test evaluating writing skills and generic intelligence.",
      icon: SearchCode,
      badge: "Testing",
    },
    {
      step: "03",
      title: "Personal Orientation",
      desc: "Detailed briefing session with candidates and parents regarding Jain rules, schedules, and residency guidelines.",
      icon: Presentation,
      badge: "Alignment",
    },
    {
      step: "04",
      title: "Enrollment & Check-in",
      desc: "Syllabus book handover, hostel allotment, and joining the batch under the discipline of Tapovan.",
      icon: Milestone,
      badge: "Finalized",
    },
  ];

  return (
    <section className="py-24 bg-white relative border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
            Join TASC
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
            Admissions Process
          </h2>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            Follow our four straightforward steps to register your candidature for the upcoming UPSC/GPSC administrative batches.
          </p>
        </div>

        {/* Process Cards Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting dashed line behind cards (desktop only) */}
          <div className="hidden lg:block absolute top-[68px] left-[12%] right-[12%] border-t-2 border-dashed border-slate-150 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-surface border border-slate-100 rounded-2xl p-6.5 relative z-10 shadow-2xs hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  {/* Step Bubble Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-150 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-3xs font-extrabold text-xs">
                      {step.step}
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-white border border-slate-100 px-2.5 py-0.5 rounded shadow-3xs">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                    <h4 className="text-sm font-bold text-accent group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                  </div>

                  {/* Desc */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Sub info */}
                <span className="text-[10px] font-bold text-slate-400 border-t border-slate-100 pt-4 block mt-auto">
                  Step {step.step} Checkpoint
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
