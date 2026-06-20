"use client";

import React from "react";
import { BookOpen, ShieldAlert, Flag, Award, Globe, History } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionMission() {
  const missions = [
    {
      title: "Quality Education",
      desc: "Providing top-notch training, materials, and classes to ensure students excel in competitive administrative exams.",
      icon: BookOpen,
      color: "text-primary bg-primary/5",
    },
    {
      title: "Ethical Leadership",
      desc: "Nurturing principled and responsible leaders who uphold administrative ethics and values in service of the state.",
      icon: ShieldAlert,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Nation Building",
      desc: "Producing competent administrators and policymakers dedicated to driving social progress and national integrity.",
      icon: Flag,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Holistic Development",
      desc: "Fostering academic excellence, strength of character, physical health, and psychological resilience.",
      icon: Award,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      title: "Legacy of Service",
      desc: "Reviving and celebrating the historical role of Jain administrators in governance to inspire the new generation.",
      icon: History,
      color: "text-red-600 bg-red-50",
    },
    {
      title: "Diversity & Inclusivity",
      desc: "Welcoming aspirants from all walks of life while maintaining a focused residential discipline and moral ecosystem.",
      icon: Globe,
      color: "text-cyan-600 bg-cyan-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Split Hero Section: Vision & Mission Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 items-start">
          
          {/* Vision Statement Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full mb-6">
              Vision Statement
            </span>
            <h3 className="text-3xl font-extrabold text-accent leading-tight tracking-tight mb-6">
              Empowering Aspirants, Shaping Governance
            </h3>
            
            {/* Elegant Quotation Block */}
            <div className="border-l-4 border-secondary pl-6 py-2 bg-slate-50/50 rounded-r-xl pr-4">
              <p className="text-lg font-serif italic text-slate-700 leading-relaxed">
                "To create a vibrant and thriving community of Jain youth, equipped with the knowledge and integrity to be at the forefront of governance and policy-making, driven by a strong commitment to serve the nation, society and Jain Shasan while upholding the ethical and compassionate values of Jainism."
              </p>
            </div>
          </div>

          {/* Mission Intro Column */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full pt-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full mb-6 w-fit">
              Mission Statement
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-accent leading-snug mb-4">
              Six Pillars of Excellence
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our mission is structured around building holistic capacity. We believe administrative preparation shouldn't just be about memorizing data, but about training the intellect and character to make fair decisions for the country.
            </p>
          </div>
        </div>

        {/* Mission Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {missions.map((mission, idx) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border border-slate-100 hover:border-slate-200/80 rounded-2xl p-6.5 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left group hover:-translate-y-1"
              >
                {/* Icon Circle */}
                <div className={`p-3 rounded-xl ${mission.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>
                
                {/* Content */}
                <h4 className="text-base font-bold text-accent mb-3 group-hover:text-primary transition-colors">
                  {mission.title}
                </h4>
                
                <p className="text-xs text-slate-500 leading-relaxed">
                  {mission.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
