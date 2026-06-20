"use client";

import React, { useState } from "react";
import { BookOpen, Check, ArrowRight, ArrowDownLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Programs() {
  const programsList = [
    {
      title: "UPSC Civil Services",
      desc: "Our flagship comprehensive residency program for aspirants targetting the IAS, IPS, and IFS cadres.",
      details: "Comprehensive syllabus completion spanning Prelims (GS + CSAT), Mains (GS I-IV + Essay), and Optional coaching, accompanied by dedicated daily mentor sessions.",
      features: [
        "1-on-1 feedback with retired officers",
        "Dedicated optional subject modules",
        "Rigorous weekly GS answer evaluation",
      ],
      duration: "12-18 Months",
      category: "Full Program",
    },
    {
      title: "GPSC Preparation",
      desc: "Expert classroom coaching custom-tailored for the Gujarat Administrative Services examinations.",
      details: "Complete coverage of Gujarat's regional administration, history, culture, and economy. Rigorous preparation in Gujarati/English descriptive essay writing.",
      features: [
        "Language & translation masterclasses",
        "Detailed state administration insights",
        "Regular GPSC mock tests",
      ],
      duration: "10-12 Months",
      category: "Full Program",
    },
    {
      title: "IAS Foundation",
      desc: "Early orientation program designed specifically for undergraduate college students.",
      details: "Focuses on developing conceptual clarity through NCERT books, basic polity, geography, history, and building daily newspaper reading habits.",
      features: [
        "College-compatible evening schedules",
        "Focus on fundamental NCERT syllabus",
        "Analytical habit building modules",
      ],
      duration: "2-3 Years",
      category: "Foundational",
    },
    {
      title: "Interview Guidance",
      desc: "Premium personality development module and mock interview program.",
      details: "Conducted by a panel of retired IAS, IPS, and GPSC officers, featuring Detailed Application Form (DAF) analysis, video recording feedback, and grooming tips.",
      features: [
        "Real-life simulated board interviews",
        "Detailed video analysis session feedback",
        "Current affairs integration queries",
      ],
      duration: "2-4 Weeks",
      category: "Advanced",
    },
    {
      title: "Current Affairs Program",
      desc: "Continuous updating module focusing on dynamic portions of UPSC & GPSC syllabus.",
      details: "Daily analysis of The Hindu & Indian Express, weekly current affairs webinars, monthly digests, and sessions linking news to GS answer structures.",
      features: [
        "Daily analytical digest reports",
        "Integrating dynamic news into GS papers",
        "Monthly compilation dossiers",
      ],
      duration: "Ongoing",
      category: "Supportive",
    },
    {
      title: "Test Series & Assessment",
      desc: "Highly structured examination simulation designed to build speed and accuracy.",
      details: "Includes section-wise tests, full-length mock exams, and micro-analytics tracking weakness. Detailed answer keys with model explanations.",
      features: [
        "Detailed grading with rank dashboard",
        "Questions curated by UPSC experts",
        "Time-management assessment tips",
      ],
      duration: "6 Months",
      category: "Supportive",
    },
  ];

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="programs" className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
              Educational Paths
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
              Curated Academic Programs
            </h2>
            <p className="text-base text-slate-500 mt-4 leading-relaxed">
              We offer structured curriculum channels designed for different stages of the civil service preparation journey, always backed by high discipline.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex gap-2 border border-slate-100 p-1.5 rounded-full bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            <span className="bg-white text-primary shadow-xs px-4 py-1.5 rounded-full">All Courses</span>
            <span className="px-4 py-1.5 rounded-full">UPSC</span>
            <span className="px-4 py-1.5 rounded-full">GPSC</span>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsList.map((prog, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                className="group relative bg-surface border border-slate-100 hover:border-primary/20 rounded-2xl p-8 transition-all duration-500 flex flex-col justify-between hover:shadow-xl overflow-hidden min-h-[460px]"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Visual top accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary/40 to-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  {/* Category & Duration header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2.5 py-1 rounded-md">
                      {prog.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {prog.duration}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-medium">
                    {prog.desc}
                  </p>

                  <hr className="border-slate-200/50 mb-4" />

                  {/* Program details - shows on hover or subtle styling */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {prog.details}
                  </p>
                </div>

                <div>
                  {/* Features bullets */}
                  <ul className="space-y-2.5 mb-8">
                    {prog.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <div className="w-4 h-4 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <a
                    href="#contact"
                    className="flex items-center justify-between w-full bg-white hover:bg-primary text-slate-700 hover:text-white border border-slate-200 hover:border-transparent py-3 px-5 rounded-xl text-xs font-bold transition-all duration-300 group/btn shadow-2xs hover:shadow-md"
                  >
                    <span>Inquire / Enroll Now</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
