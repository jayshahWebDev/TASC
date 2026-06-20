"use client";

import React from "react";
import Image from "next/image";
import TascLogo from "./TascLogo";
import { Play, ArrowRight, Award, Shield, Compass, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-jain-pattern py-20 lg:py-32 border-b border-slate-100">
      {/* Absolute top glow/overlay for premium Stripe-like depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/80 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* TASC Large Logo Banner */}
            <motion.div variants={itemVariants} className="mb-6">
              <TascLogo size="md" />
            </motion.div>

            {/* Tagline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-accent leading-tight tracking-tight mb-6"
            >
              Building <span className="text-primary bg-clip-text">Ethical Leaders</span> <br />
              for India's Future
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl"
            >
              Tapovan Administrative Services Centre prepares aspiring UPSC and GPSC candidates through academic excellence, rigorous mentorship, military-like discipline, and value-based leadership rooted in core Jain principles.
            </motion.p>

            {/* Buttons & Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:bg-[#85164d] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 group text-base"
              >
                <span>Apply For Admission</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#video-showcase"
                className="flex items-center justify-center gap-2 bg-white text-accent hover:text-primary px-8 py-4 rounded-full font-bold border border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 text-base"
              >
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-primary group-hover:bg-primary/10">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Campus Video</span>
              </a>
            </motion.div>

            {/* Floating feature highlights under buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-100 pt-8 w-full"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/5 rounded-lg text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Residential Academy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Value-Based Ethics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/5 rounded-lg text-accent">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Officer Mentorship</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Image with Elegant Frame */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-80 h-80 sm:w-[400px] sm:h-[400px]"
            >
              {/* Outer soft glowing rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-[spin_100s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-secondary/20 animate-[spin_150s_linear_infinite]" />

              {/* Acharya portrait container */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                <Image
                  src="/images/acharya.png"
                  alt="Founder / Inspirational Jain Acharya"
                  fill
                  sizes="(max-w-768px) 320px, 400px"
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                  priority
                />
                
                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
              </div>

              {/* Floating Academic Badges */}
              <motion.div
                initial={{ x: -30, y: 30, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -left-4 bottom-12 bg-white/90 backdrop-blur-md border border-slate-100 shadow-xl px-4 py-2.5 rounded-2xl flex items-center gap-2.5 hover:scale-105 transition-transform"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  UPSC
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Preparation</span>
                  <span className="text-xs font-extrabold text-accent">IAS | IPS | IFS</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 30, y: -30, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -right-4 top-16 bg-white/90 backdrop-blur-md border border-slate-100 shadow-xl px-4 py-2.5 rounded-2xl flex items-center gap-2.5 hover:scale-105 transition-transform"
              >
                <div className="w-8 h-8 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary font-bold text-sm">
                  GPSC
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">State Services</span>
                  <span className="text-xs font-extrabold text-accent">Deputy Collector | DySP</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute left-1/3 -top-6 bg-white border border-slate-100 shadow-lg px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-accent hover:scale-105 transition-transform"
              >
                <BookOpen className="w-4 h-4 text-primary" />
                <span>Jain Values & Discipline</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
