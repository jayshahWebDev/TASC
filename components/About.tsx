"use client";

import React from "react";
import Image from "next/image";
import { Compass, BookOpen, Heart, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      title: "Desh Seva",
      desc: "Dedicated service to the nation through honest and competent governance.",
      icon: Compass,
      color: "text-primary",
    },
    {
      title: "Samaj Seva",
      desc: "Serving the society by lifting community development and ethical policies.",
      icon: Heart,
      color: "text-secondary",
    },
    {
      title: "Shasan Seva",
      desc: "Preserving and promoting the compassionate, ethical teachings of Jainism.",
      icon: BookOpen,
      color: "text-accent",
    },
  ];

  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Story & History */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full mb-6">
              Our Heritage & Vision
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-accent leading-tight tracking-tight mb-6">
              Cultivating the Legacy of Administrative Leadership
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              TASC (Tapovan Administrative Services Centre) is a premium residential civil services preparation institute dedicated to developing future administrators who combine profound competence, absolute integrity, value-based leadership, and selfless service to society.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Drawing inspiration from the rich historical legacy of revered Jain administrators—such as **Vastupal**, **Tejpal**, **Vimal Mantri**, and **Sajan Mantri**—our institution seeks to revive this heritage of excellence. We prepare our students for meaningful contributions to public administration and ethical policymaking.
            </p>

            {/* Core Values / Focus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-8">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-100 p-5 rounded-xl shadow-2xs hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className={`${val.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-extrabold text-sm text-accent tracking-wide">
                        {val.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-normal">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Inscription Note Card */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5 flex items-start gap-4">
              <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-accent">Inspired by Tapovan Principles</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  We are dedicated to preparing upcoming cohorts of administrative officers who carry a deep commitment to spiritual values, discipline, and nation-building.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful Image / Collage */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background design accents */}
            <div className="absolute w-72 h-72 bg-primary/5 rounded-full -top-10 -left-10 blur-3xl pointer-events-none" />
            <div className="absolute w-72 h-72 bg-secondary/5 rounded-full -bottom-10 -right-10 blur-3xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[420px]"
            >
              {/* Outer decorative borders representing linear/stripe design */}
              <div className="absolute -inset-3 border border-slate-200/50 rounded-2xl pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl pointer-events-none z-10" />

              {/* Main Image */}
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/images/study_hall.png"
                  alt="TASC Premium Campus Study Hall"
                  fill
                  sizes="(max-w-768px) 100vw, 420px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-slate-100 shadow-xl rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EBFDF2] flex items-center justify-center text-emerald-600 font-extrabold text-sm">
                  100%
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Environment</span>
                  <span className="text-xs font-extrabold text-accent">Residential Study Focus</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
