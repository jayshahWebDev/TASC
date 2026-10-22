"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, Landmark, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Programs() {
  const [activeTab, setActiveTab] = useState<"all" | "upsc" | "gpsc">("all");

  const programsList = [
    {
      id: "upsc",
      category: "upsc",
      title: "UPSC Civil Services Preparation",
      badge: "Central Services",
      desc: "A comprehensive preparation program designed for aspirants aiming to become IAS, IPS, and other central civil service officers, with a focus on conceptual clarity, examination readiness, and personality development.",
      icon: GraduationCap,
      iconColor: "text-primary bg-primary/10",
      badgeColor: "text-primary bg-primary/5 border-primary/20",
      hoverBorder: "hover:border-primary/30",
    },
    {
      id: "gpsc",
      category: "gpsc",
      title: "GPSC Civil Services Preparation",
      badge: "State Services",
      desc: "A structured preparation program for aspirants seeking careers in Gujarat's administrative services, focusing on subject knowledge, examination strategies, and the skills required to serve the state.",
      icon: Landmark,
      iconColor: "text-secondary bg-secondary/10",
      badgeColor: "text-secondary bg-secondary/10 border-secondary/20",
      hoverBorder: "hover:border-secondary/30",
    },
    {
      id: "interview",
      category: "all",
      title: "Interview Guidance",
      badge: "Personality Test",
      desc: "Focused guidance to help civil services aspirants develop confidence, communication skills, leadership qualities, and a well-rounded personality through interview preparation and mock interview sessions.",
      icon: Users,
      iconColor: "text-accent bg-accent/10",
      badgeColor: "text-accent bg-accent/5 border-accent/20",
      hoverBorder: "hover:border-accent/30",
    },
  ];

  const filteredPrograms = programsList.filter(
    (prog) =>
      activeTab === "all" ||
      prog.category === activeTab ||
      prog.category === "all",
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 18,
      },
    },
  };

  return (
    <section
      id="programs"
      className="py-20 md:py-24 bg-white relative border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
              Educational Paths
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
              Curated Academic Programs
            </h2>
            <p className="text-base text-slate-500 mt-3 leading-relaxed">
              We offer structured curriculum channels designed for different
              stages of the civil service preparation journey, always backed by
              high discipline.
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPrograms.map((prog) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.id}
                variants={itemVariants}
                className={`group relative bg-surface border border-slate-200/70 ${prog.hoverBorder} rounded-2xl p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 overflow-hidden`}
              >
                {/* Visual top accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3 rounded-xl ${prog.iconColor} transition-transform group-hover:scale-110 duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-white ${prog.badgeColor}`}
                    >
                      {prog.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {prog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {prog.desc}
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
