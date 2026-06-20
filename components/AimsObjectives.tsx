"use client";

import React from "react";
import { Users, BarChart3, Scale, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function AimsObjectives() {
  const aims = [
    {
      title: "Empowering Jain Youth",
      desc: "Providing resources, structured guidance, and a supportive environment to help promising young minds break barriers and achieve high administrative success.",
      icon: Users,
      badge: "Youth Focus",
      colSpan: "lg:col-span-6",
      color: "border-primary",
    },
    {
      title: "Enhancing Representation in Civil Services",
      desc: "Increasing the participation of value-driven candidates in the bureaucracy to ensure diverse perspectives and ethical values are represented in administrative decisions.",
      icon: BarChart3,
      badge: "Administration",
      colSpan: "lg:col-span-6",
      color: "border-secondary",
    },
    {
      title: "Promoting Ethics & Public Service",
      desc: "Instilling deep commitment to public service, selflessness, and spiritual discipline into the standard UPSC test-preparation routine.",
      icon: Scale,
      badge: "Core Value",
      colSpan: "lg:col-span-4",
      color: "border-accent",
    },
    {
      title: "Creating Future Policymakers",
      desc: "Training aspirants in critical analysis, empathy, and objective thinking to design policy frameworks that uplift all strata of society.",
      icon: GraduationCap,
      badge: "Leadership",
      colSpan: "lg:col-span-4",
      color: "border-primary",
    },
    {
      title: "Developing Responsible Leaders",
      desc: "Cultivating leadership attributes like resilience, mindfulness, moral courage, and public communications required for field administration.",
      icon: Award,
      badge: "Holistic Growth",
      colSpan: "lg:col-span-4",
      color: "border-secondary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 bg-surface relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
            Goals & Benchmarks
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
            Our Aims & Objectives
          </h2>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            TASC is built on a concrete roadmap to support the next generation of civil servants. Our objective is to combine academic quality with values.
          </p>
        </div>

        {/* Premium Grid (Asymmetric Layout) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {aims.map((aim, idx) => {
            const Icon = aim.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`bg-white border border-slate-100/60 rounded-2xl p-8 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${aim.colSpan} border-t-2 ${aim.color}`}
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-slate-50 rounded-xl text-primary group-hover:bg-primary/5 transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">
                      {aim.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-accent mb-3 group-hover:text-primary transition-colors">
                    {aim.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {aim.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
