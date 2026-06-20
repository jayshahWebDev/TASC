"use client";

import React, { useState } from "react";
import { Play, Clock, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoItem {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  desc: string;
}

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: 1,
      title: "Tapovan Administrative Services Centre Introduction",
      duration: "3:45 Mins",
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      desc: "An overview of TASC's academic coaching, ethical guidance, and residential facilities.",
    },
    {
      id: 2,
      title: "A Day in the Life of a TASC Resident",
      duration: "5:20 Mins",
      thumbnail: "https://images.unsplash.com/photo-1526976729451-9d41490f8253?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      desc: "Follow an aspirant from the morning meditation circle to the midnight study room.",
    },
    {
      id: 3,
      title: "Jain Ethics and Public Service Roundtable",
      duration: "8:10 Mins",
      thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      desc: "Retired IAS and IPS officers discuss values like compassion and integrity in modern governance.",
    },
  ];

  return (
    <section id="video-showcase" className="py-24 bg-surface border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
              Video Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
              Experience Life at TASC
            </h2>
            <p className="text-base text-slate-500 mt-4 leading-relaxed">
              Watch interviews with successful candidates, campus tour walk-throughs, and insights into our value-based administrative prep.
            </p>
          </div>
          
          <a
            href="https://wa.me/918200596350?text=Hello,%20I%20would%20like%20to%20request%20more%20campus%20videos."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:gap-2.5 transition-all"
          >
            <span>Request Campus Tour Video</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              className="bg-white border border-slate-100/60 rounded-2xl overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-103 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-accent/20 group-hover:bg-accent/40 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-350">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-3 right-3 bg-accent/70 backdrop-blur-xs text-[10px] text-white font-bold py-1 px-2.5 rounded-full flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  <span>{vid.duration}</span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-6">
                <h4 className="text-sm font-bold text-accent group-hover:text-primary transition-colors leading-snug">
                  {vid.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-2">
                  {vid.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overlay Lightbox Video Player */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 bg-accent/95 z-55 flex items-center justify-center p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close Player"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Box */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={activeVideo.videoUrl}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
