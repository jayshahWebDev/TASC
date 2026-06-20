"use client";

import React from "react";
import {
  BookOpen,
  Home,
  GraduationCap,
  Users,
  CalendarDays,
  UserCheck,
  Apple,
  Search,
  Scale,
  Sparkles,
  Flame,
  Sun,
  ShieldCheck,
  Clock,
  QrCode
} from "lucide-react";
import { motion } from "framer-motion";

export default function Facilities() {
  const facilitiesList = [
    {
      title: "24/7 Library Access",
      desc: "Quiet, air-conditioned workspace equipped with reference desks, administrative archives, and private desks.",
      icon: BookOpen,
      color: "text-primary bg-primary/5",
    },
    {
      title: "Residential Hostel",
      desc: "Premium, distraction-free in-campus accommodation designed specifically for intensive preparation.",
      icon: Home,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "In-House Coaching",
      desc: "Daily interactive classes from specialized faculty covering core subjects and optionals.",
      icon: GraduationCap,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Personal Mentorship",
      desc: "1-on-1 performance mapping, answer writing critique, and mental health checkpoints with experts.",
      icon: Users,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      title: "Weekly Test Series",
      desc: "Strictly-timed mock exam formats under simulated hall settings, followed by evaluation dashboard ranks.",
      icon: CalendarDays,
      color: "text-red-600 bg-red-50",
    },
    {
      title: "Guest Sessions by Officers",
      desc: "Periodic interactive seminars and strategy workshops run by serving and retired IAS/IPS/GPSC officers.",
      icon: UserCheck,
      color: "text-cyan-600 bg-cyan-50",
    },
    {
      title: "Nutritious Jain Food",
      desc: "Fresh, healthy, Satvik meals prepared in compliance with core Jain principles to support concentration.",
      icon: Apple,
      color: "text-pink-600 bg-pink-50",
    },
    {
      title: "Focused Study Environment",
      desc: "A strictly managed distraction-free digital ecosystem promoting camaraderie and peer group learnings.",
      icon: Search,
      color: "text-slate-600 bg-slate-100",
    },
  ];

  const rules = [
    {
      title: "Strict Adherence to Jain Principles",
      desc: "Students must strictly respect and maintain Jain cultural values throughout their campus residency.",
      icon: ShieldCheck,
    },
    {
      title: "Daily Spiritual Activity",
      desc: "Participation in daily spiritual practices and meditation is mandatory to build internal focus.",
      icon: Sun,
    },
    {
      title: "Satvik Jain Food Only",
      desc: "Strictly vegetarian, Satvik meals served. Non-Jain food items are completely prohibited.",
      icon: Apple,
    },
    {
      title: "Prohibition of Ratribhojan",
      desc: "Meals are served and eaten before sunset, keeping in line with the healthy practice of Ratribhojan Tyag.",
      icon: Clock,
    },
    {
      title: "Adherence to Daily Schedule",
      desc: "Residency runs on a strict timeline structure from morning study cycles to physical checkpoints.",
      icon: CalendarDays,
    },
    {
      title: "High Standards of Discipline",
      desc: "Maintaining polite behavior, library silence, and cooperation with admin rules is essential.",
      icon: Scale,
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-surface relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
            Ecosystem & Lifestyle
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
            World-Class Infrastructure
          </h2>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            TASC provides an elite, self-contained residential preparation ecosystem designed to optimize learning curves and eliminate life distractions.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {facilitiesList.map((facility, idx) => {
            const Icon = facility.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-6.5 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col items-start group hover:-translate-y-1"
              >
                <div className={`p-3 rounded-xl ${facility.color} mb-5 group-hover:scale-115 transition-transform duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-accent mb-2.5 group-hover:text-primary transition-colors">
                  {facility.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Rules & Regulations - Styled directly inspired by the brochure pages */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-12 shadow-md relative overflow-hidden">
          
          {/* Saffron side flare */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Rules List */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-amber-50 rounded-xl text-secondary">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Residency Code</span>
                  <h3 className="text-2xl font-extrabold text-accent">Rules & Regulations</h3>
                </div>
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                To maintain a clean mental environment and rigorous preparation cycle, residents are expected to commit fully to the code of conduct:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rules.map((rule, idx) => {
                  const Icon = rule.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">{rule.title}</h4>
                        <p className="text-[11px] text-slate-500 leading-normal mt-1">{rule.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Col: Callout / Contact QR Card */}
            <div className="lg:col-span-4 bg-surface border border-slate-100 rounded-2xl p-6.5 flex flex-col items-center text-center shadow-xs">
              <span className="text-[9px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2.5 py-1 rounded-md mb-4">
                Admissions open
              </span>
              
              <h4 className="text-sm font-bold text-accent mb-2">Want to Join the Batch?</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed mb-6">
                Scan below or click the WhatsApp group link to receive syllabus structures, hostel brochures, and admission tests schedules directly.
              </p>
              
              {/* Illustrated QR code slot */}
              <div className="w-36 h-36 bg-white border border-slate-150 rounded-2xl p-3 shadow-2xs relative group flex items-center justify-center">
                <QrCode className="w-full h-full text-accent opacity-90 group-hover:scale-95 transition-transform duration-300" />
                {/* Micro branding label in QR */}
                <div className="absolute inset-0 m-auto w-8 h-8 bg-white border border-slate-200 rounded-md flex items-center justify-center shadow-xs font-bold text-[9px] text-primary">
                  TASC
                </div>
              </div>

              <a
                href="https://wa.me/918200596350?text=Hello,%20I%20would%20like%20to%20join%20the%20TASC%20Admissions%20WhatsApp%2520group."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md shadow-[#25D366]/10 hover:shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-[0.98] w-full"
              >
                <span>WhatsApp: 82005 96350</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
