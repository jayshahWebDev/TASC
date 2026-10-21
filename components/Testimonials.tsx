"use client";

import React, { useState } from "react";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  category: "Aspirant" | "Parent" | "Mentor";
  name: string;
  role: string;
  exam: string;
  achievement: string;
  quote: string;
  rating: number;
  highlight: string;
}

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<
    "All" | "Aspirant" | "Parent" | "Mentor"
  >("All");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      category: "Aspirant",
      name: "Nem Shah",
      role: "GPSC & UPSC Candidate",
      exam: "GPSC & UPSC Civil Services Examination",
      achievement:
        "Cleared GPSC Mains (Adv. 47) & GPSC Prelims & Mains (Adv. 240)",
      highlight: "Inculcated Officer-Like Qualities (OLQs)",
      quote:
        "Since the last week of June 2024, I have been part of TASC for the preparation of the GPSC Mains Examination. It has been a golden phase of my preparation journey. The mentorship of Sudeep Sir, Abhinav Sir, and Om Bhai has been exceptional—they have been a 24×7 support system throughout my mains preparation. The peer group I found at TASC is one of the greatest assets I have gained in my life. Studying selflessly while supporting each other is the real KPI of our group. Gurunaa is a constant source of inspiration. My preparation at TASC helped me immensely and transformed my mindset from that of an aspirant to that of an officer, inculcating Officer-Like Qualities (OLQs) in my personality. Trust your mentors, as they are well aware of common mistakes aspirants make and guide you in the right direction. A never-give-up attitude, complete dedication to studies, and unwavering focus are the keys to success.",
      rating: 5,
    },
    {
      id: 2,
      category: "Aspirant",
      name: "CA. Nancy Jain",
      role: "Chartered Accountant (AIR-32) & UPSC CSE Aspirant",
      exam: "UPSC Civil Services Examination",
      achievement: "UPSC CSE Prelims Cleared | CA AIR-32",
      highlight: "Consistency, CSAT Strategy & Religious Values",
      quote:
        "I really appreciated the positive learning environment, constant mentor support, and daily prelims level test series which helped me build consistency and time management. Toppers sessions for exam strategy and CSAT management worked exceptionally well for me. The emphasis on religious values was equally enriching, fostering discipline, clarity, and holistic development. I'm truly thankful for being part of the TASC family.",
      rating: 5,
    },
    {
      id: 3,
      category: "Aspirant",
      name: "Stuti Hingad",
      role: "Civil Services Aspirant",
      exam: "UPSC & GPSC Civil Services",
      achievement: "Cleared 2 GPSC Prelims",
      highlight: "Conceptual Clarity & Test Series Discussions",
      quote:
        "TASC has played a significant role in strengthening my UPSC preparation. It provided conceptual clarity and helped develop logical thinking across subjects. The mentors not only guided us with effective exam strategies but also helped us understand the evolving demands of the examination. The Prelims Test Series and its detailed discussions were particularly valuable, enabling us to identify mistakes, rectify them, and improve systematically. Beyond academics, mentors were always supportive during phases of emotional uncertainty and self-doubt. Overall, TASC gave me the right strategy, practical exam hacks, and the confidence required to move closer to my goal of clearing the UPSC Civil Services Examination.",
      rating: 5,
    },
    {
      id: 4,
      category: "Aspirant",
      name: "Harchi Vora",
      role: "Civil Services Aspirant",
      exam: "UPSC + GPSC Combined Preparation",
      achievement: "GPSC Prelims Score: 110+ | High-Confidence Peer Group",
      highlight: "Focused Growth & Personalized Sessions",
      quote:
        "TASC provides the best mentors available for focused growth. The continuous test series, detailed answer critiques, and personalized 1-on-1 sessions helped generate confidence and systematic improvement, leading to a strong 110 score in GPSC Prelims. The selfless peer group and disciplined campus atmosphere keep everyone motivated every single day.",
      rating: 5,
    },
  ];

  const filteredTestimonials =
    activeTab === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === activeTab);

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevFeatured = () => {
    setFeaturedIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentFeatured = testimonials[featuredIndex];

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-24 bg-surface relative overflow-hidden border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full inline-block">
            Proven Results & Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
            Voices of TASC Aspirants
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 leading-relaxed">
            Authentic reflections from successful UPSC and GPSC candidates,
            parents, and officer mentors on TASC's transformative preparation
            ecosystem.
          </p>
        </div>

        {/* Featured Spotlight Card */}
        <div className="max-w-4xl mx-auto mb-16 relative bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 md:p-12 shadow-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeatured.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col justify-between"
            >
              <div>
                {/* Header Badge & Stars */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      <span>{currentFeatured.achievement}</span>
                    </span>
                  </div>
                </div>

                {/* Highlight Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-accent mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{currentFeatured.highlight}</span>
                </h3>

                {/* Quote Text */}
                <p className="text-sm sm:text-base md:text-lg text-slate-700 font-normal leading-relaxed mb-8">
                  "{currentFeatured.quote}"
                </p>
              </div>

              {/* Profile Meta & Slider Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-100 pt-6 gap-4">
                <div className="flex flex-col">
                  <span className="font-extrabold text-accent text-base sm:text-lg">
                    {currentFeatured.name}
                  </span>
                  <span className="text-xs font-medium text-slate-500 mt-0.5">
                    {currentFeatured.role} •{" "}
                    <span className="text-primary font-semibold">
                      {currentFeatured.exam}
                    </span>
                  </span>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-xs text-slate-400 font-medium mr-2">
                    {featuredIndex + 1} of {testimonials.length}
                  </span>
                  <button
                    type="button"
                    onClick={prevFeatured}
                    className="p-2.5 border border-slate-200 rounded-full hover:bg-slate-50 hover:text-primary transition-colors cursor-pointer text-slate-600"
                    aria-label="Previous Testimonial"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextFeatured}
                    className="p-2.5 border border-slate-200 rounded-full hover:bg-slate-50 hover:text-primary transition-colors cursor-pointer text-slate-600"
                    aria-label="Next Testimonial"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Filter Pills for All Testimonial Cards */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto whitespace-nowrap pb-3 mb-8 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 px-1">
            {(["All", "Aspirant", "Parent", "Mentor"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all duration-200 cursor-pointer select-none ${
                  activeTab === tab
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {tab === "All" ? "All Reviews" : `${tab}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-150 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  <div className="flex text-secondary">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-accent font-bold text-[11px] px-3 py-1.5 rounded-lg leading-snug">
                    <Award className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{item.achievement}</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  "
                  {item.quote.length > 280
                    ? `${item.quote.substring(0, 280)}...`
                    : item.quote}
                  "
                </p>
              </div>

              {/* Author footer */}
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-accent group-hover:text-primary transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {item.role}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                  {item.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
