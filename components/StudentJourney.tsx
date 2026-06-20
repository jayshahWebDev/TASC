"use client";

import React from "react";
import { UserCheck, BookOpen, Compass, Award, FileSpreadsheet, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentJourney() {
  const steps = [
    {
      title: "Admission",
      desc: "Detailed screening profile review, aptitude test, and personal orientation interview.",
      icon: UserCheck,
      badge: "Step 01",
    },
    {
      title: "Foundation Building",
      desc: "NCERT fundamentals, daily lectures, and analytical reading of national newspapers.",
      icon: BookOpen,
      badge: "Step 02",
    },
    {
      title: "Mentorship Allocation",
      desc: "Assignment of personal advisor to outline optional subjects and plan milestones.",
      icon: Compass,
      badge: "Step 03",
    },
    {
      title: "Rigorous Assessment",
      desc: "Weekly test papers, essay check-ups, and time-management drill simulations.",
      icon: FileSpreadsheet,
      badge: "Step 04",
    },
    {
      title: "Interview Coaching",
      desc: "Personality analysis, Grooming drills, and panel simulation mock interviews.",
      icon: Award,
      badge: "Step 05",
    },
    {
      title: "Success & Duty",
      desc: "Transitioning into civil administration, ready to serve with competence and values.",
      icon: Trophy,
      badge: "Step 06",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 bg-white relative border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
            The Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
            The TASC Student Journey
          </h2>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            From induction to final success, our structured pipeline supports aspirants through every critical node of their preparation.
          </p>
        </div>

        {/* Journey Timeline */}
        {/* Desktop View: Horizontal Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden lg:block relative mt-16"
        >
          {/* Continuous Connecting Line */}
          <div className="absolute top-1/2 left-[5%] right-[5%] h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Top: Step Badge */}
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2.5 py-1 rounded-md mb-6 transition-colors group-hover:bg-primary group-hover:text-white duration-300">
                    {step.badge}
                  </span>

                  {/* Middle: Interactive Bubble */}
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 group-hover:border-primary flex items-center justify-center text-slate-400 group-hover:text-primary shadow-xs group-hover:shadow-md group-hover:scale-110 transition-all duration-350 bg-white">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Bottom: Text details */}
                  <div className="mt-6">
                    <h4 className="text-sm font-bold text-accent mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed max-w-[160px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile & Tablet View: Vertical Timeline */}
        <div className="lg:hidden relative space-y-10 pl-6 border-l border-slate-100 ml-4 mt-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex gap-6 items-start">
                
                {/* Visual Timeline Node */}
                <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary z-10 shadow-2xs">
                  <Icon className="w-3 h-3" />
                </div>

                {/* Card Details */}
                <div className="bg-surface border border-slate-100 rounded-xl p-5 w-full shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded">
                      {step.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-accent">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-normal mt-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
