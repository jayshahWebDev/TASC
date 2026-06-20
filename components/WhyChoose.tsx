"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Milestone, Compass, Users2, Target, HeartHandshake, Flag } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChoose() {
  const benefits = [
    {
      title: "Residential Learning Environment",
      desc: "Fully integrated campus with library, accommodation, and food, minimizing travel stress and distractions.",
      icon: CheckCircle2,
      color: "text-primary bg-primary/5",
    },
    {
      title: "Experienced Mentors",
      desc: "Receive coaching from subject matter experts and direct guidance from retired civil servants.",
      icon: Compass,
      color: "text-secondary bg-secondary/15",
    },
    {
      title: "Value-Based Education",
      desc: "Traditional Satvik environment keeping minds calm and focused on higher goals.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Leadership Development",
      desc: "Periodic interactive modules focused on grooming administrative, decision-making, and communication skills.",
      icon: Milestone,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      title: "Strong Peer Community",
      desc: "Study alongside highly motivated, disciplined Jain youth sharing similar values and goals.",
      icon: Users2,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Focused Preparation",
      desc: "Carefully structured syllabus milestones, daily answer checklists, and consistent mock drills.",
      icon: Target,
      color: "text-red-600 bg-red-50",
    },
    {
      title: "Ethical Foundation",
      desc: "Administrative ethics coaching deeply inspired by legendary historical ministers like Vastupal and Tejpal.",
      icon: HeartHandshake,
      color: "text-cyan-600 bg-cyan-50",
    },
    {
      title: "Nation-Building Vision",
      desc: "A mission-driven ecosystem focusing on placing competent, clean, and empathetic officers in key posts.",
      icon: Flag,
      color: "text-purple-600 bg-purple-50",
    },
  ];

  return (
    <section className="py-24 bg-white relative border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading & Graphic Callout */}
          <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-24">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full mb-6">
              Our Edge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-accent leading-tight tracking-tight mb-6">
              Why Leaders Choose TASC
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Preparing for civil service exams requires more than textbooks. It demands a supportive lifestyle, mental peace, and an environment that fosters constant concentration.
            </p>

            {/* Quick Fact Card */}
            <div className="bg-surface border border-slate-100 rounded-2xl p-6.5 w-full">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Campus Standard</span>
              <h4 className="text-sm font-bold text-accent mt-1 mb-2">Focused Satvik Ecosystem</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                By combining military-like study schedules with traditional Jain moral principles, we prepare administrators who are strong both academically and ethically.
              </p>
            </div>
          </div>

          {/* Right Column: Benefits Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-surface border border-slate-100/50 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-shadow flex items-start gap-4 group"
                >
                  {/* Icon */}
                  <div className={`p-3 rounded-xl ${benefit.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Text Details */}
                  <div>
                    <h3 className="text-sm font-bold text-accent group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
