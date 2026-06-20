"use client";

import React, { useState } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  category: "Student" | "Parent" | "Mentor";
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<"Student" | "Parent" | "Mentor">("Student");
  const [slideIndex, setSlideIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      category: "Student",
      name: "Devam Sanghavi",
      role: "GPSC Class 1/2 Aspirant",
      quote: "The residential structure at TASC removes all micro-decisions from your day. The food, schedule, and environment are fixed, leaving you 100% focused on preparation. The mock interviews with retired officers gave me real administrative perspective.",
      rating: 5,
    },
    {
      id: 2,
      category: "Student",
      name: "Anay Shah",
      role: "UPSC IAS Candidate",
      quote: "Studying alongside a highly disciplined group of peers keeps you consistently motivated. The daily answer evaluation cycles at TASC forced me to refine my writing structures, helping me cross crucial scoring gaps.",
      rating: 5,
    },
    {
      id: 3,
      category: "Parent",
      name: "Mahendra Mehta",
      role: "Parent of TASC Resident",
      quote: "Unlike crowded coaching hubs where students face extreme isolation and lifestyle issues, TASC provides a wholesome family environment. We are completely reassured by the strict discipline, spiritual daily routines, and healthy Jain food.",
      rating: 5,
    },
    {
      id: 4,
      category: "Parent",
      name: "Smitaben Shah",
      role: "Parent of GPSC Resident",
      quote: "The safety, moral guidelines, and clean Satvik environment of Tapovan are exactly what we wanted. Our daughter has grown not just academically but also in self-discipline and leadership values.",
      rating: 5,
    },
    {
      id: 5,
      category: "Mentor",
      name: "R. K. Trivedi, IAS (Retd.)",
      role: "Former administrative officer & Panel Mentor",
      quote: "What sets TASC apart is its focus on value-based administration. We don't just instruct on the syllabus; we teach students how to analyze policy under the prism of ethical administration, compassion, and public accountability.",
      rating: 5,
    },
    {
      id: 6,
      category: "Mentor",
      name: "Dr. Hiren J. Shah",
      role: "Ethics & Public Policy Faculty",
      quote: "The students here exhibit exceptional focus. The lack of standard digital distractions and their commitment to daily schedules makes our teaching highly receptive, resulting in very strong answer writing quality.",
      rating: 5,
    },
  ];

  const filteredTestimonials = testimonials.filter((t) => t.category === activeTab);

  const handleTabChange = (tab: "Student" | "Parent" | "Mentor") => {
    setActiveTab(tab);
    setSlideIndex(0);
  };

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const currentTestimonial = filteredTestimonials[slideIndex] || filteredTestimonials[0];

  return (
    <section className="py-24 bg-surface relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
            Voices of TASC Community
          </h2>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            Read reflections from our current students, parents, and administrative mentors regarding TASC's residency ecosystem.
          </p>
        </div>

        {/* Categories Tab selector */}
        <div className="flex justify-center gap-4 mb-16">
          {(["Student", "Parent", "Mentor"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full border transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-white border-transparent shadow-md"
                  : "bg-white text-slate-500 border-slate-100 hover:border-slate-350 hover:bg-slate-50"
              }`}
            >
              {tab}s
            </button>
          ))}
        </div>

        {/* Testimonial Box */}
        <div className="max-w-4xl mx-auto relative bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm min-h-[340px] flex flex-col justify-between">
          
          {/* Saffron background quote graphic */}
          <div className="absolute top-8 right-8 text-secondary/10 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1.5]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${slideIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-6 text-secondary">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed mb-8">
                  "{currentTestimonial.quote}"
                </p>
              </div>

              {/* Profile Meta */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                <div className="flex flex-col">
                  <span className="font-bold text-accent text-sm md:text-base">
                    {currentTestimonial.name}
                  </span>
                  <span className="text-xs text-slate-450 mt-0.5">
                    {currentTestimonial.role}
                  </span>
                </div>

                {/* Navigation Arrows for Slider */}
                {filteredTestimonials.length > 1 && (
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 hover:text-primary transition-colors cursor-pointer text-slate-450"
                      aria-label="Previous Testimonial"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 hover:text-primary transition-colors cursor-pointer text-slate-450"
                      aria-label="Next Testimonial"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
