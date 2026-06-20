"use client";

import React from "react";
import { GraduationCap, Landmark, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Trust() {
  const cards = [
    {
      title: "UPSC Civil Services",
      subtitle: "Union Public Service Commission",
      description: "Rigorous preparation for India's prestigious civil services examinations including IAS, IPS, and IFS. Led by experienced faculty and retired administrative officers.",
      icon: GraduationCap,
      color: "border-primary",
      iconColor: "text-primary bg-primary/5",
      badge: "National Level",
      features: [
        "Syllabus coverage from basics to advanced",
        "Answer-writing workshops by top ranks",
        "All-India test series and feedback cycles",
      ],
    },
    {
      title: "GPSC Preparation",
      subtitle: "Gujarat Public Service Commission",
      description: "Dedicated coaching for Class 1 & 2 officer positions in the state administration. Deep curriculum focus matching the latest GPSC patterns.",
      icon: Landmark,
      color: "border-secondary",
      iconColor: "text-secondary bg-secondary/10",
      badge: "State Level",
      features: [
        "Regional history, language & administration modules",
        "Expert guidance for descriptive examinations",
        "Mock interviews with senior state officials",
      ],
    },
    {
      title: "Leadership & Ethics",
      subtitle: "Value-based Administration",
      description: "Developing administrators who blend core competence with spiritual discipline, integrity, compassion, and commitment to public welfare.",
      icon: Sparkles,
      color: "border-accent",
      iconColor: "text-accent bg-accent/5",
      badge: "Jain Principles",
      features: [
        "Ethics modules inspired by historical administrators",
        "Daily spiritual activity & routine discipline",
        "Focus on nation-building & social welfare",
      ],
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
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Intro header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
            Core Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
            Academic Excellence and Ethical Foundations
          </h2>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            We prepare aspirants for the toughest exams of governance while instilling the spiritual discipline and legacy of dedication required to guide our nation.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`bg-surface rounded-2xl border-t-4 ${card.color} border border-slate-100/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2`}
              >
                <div>
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-xl ${card.iconColor} transition-transform group-hover:scale-110 duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white border border-slate-100 px-3 py-1 rounded-full shadow-2xs">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Sub */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-accent group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase mt-1">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-3 mb-8">
                    {card.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs font-medium text-slate-500">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Primary Action link */}
                <a
                  href="#programs"
                  className="flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2.5 transition-all mt-auto"
                >
                  <span>Explore Curriculum</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
