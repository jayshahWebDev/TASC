"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  type: "image" | "video";
  url: string;
  videoUrl?: string; // YouTube or MP4
}

export default function CampusLife() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Classroom Learning",
    "Library",
    "Hostel Life",
    "Festival Celebrations",
    "Community Activities",
    "Guest Lectures",
    "Spiritual Activities",
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: "Classroom Learning",
      title: "Interactive Civil Services Session",
      type: "image",
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      category: "Library",
      title: "Silent Zones & Research Tables",
      type: "image",
      url: "/images/study_hall.png",
    },
    {
      id: 3,
      category: "Hostel Life",
      title: "Premium Residential Rooms",
      type: "image",
      url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      category: "Festival Celebrations",
      title: "Traditional Festival Gatherings",
      type: "image",
      url: "https://images.unsplash.com/photo-1514894780887-121968d00567?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      category: "Community Activities",
      title: "Peer-to-Peer Essay Discussions",
      type: "image",
      url: "https://images.unsplash.com/photo-1526976729451-9d41490f8253?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      category: "Guest Lectures",
      title: "Strategy Session by IPS Officer",
      type: "image",
      url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      category: "Spiritual Activities",
      title: "Daily Morning Meditation Circle",
      type: "image",
      url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      category: "Classroom Learning",
      title: "Answer Writing Evaluation Workshop",
      type: "video",
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Dummy/Template embed
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (id: number) => {
    const index = galleryItems.findIndex((item) => item.id === id);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextItem = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  };

  const prevItem = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="campus-life" className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
            Campus Life
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
            Explore TASC Life
          </h2>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            Take a look inside the daily learning, spiritual routines, sports, study halls, and officer sessions that shape our candidates.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-4.5 py-2.5 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white border-transparent shadow-md"
                  : "bg-surface text-slate-600 border-slate-100 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden border border-slate-100 bg-surface shadow-2xs group cursor-pointer hover:shadow-md hover:border-slate-200 transition-all duration-300"
            >
              {/* Image box */}
              <div className="relative w-full aspect-auto min-h-[220px]">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 rounded-2xl"
                />
                
                {/* Dark Hover overlay */}
                <div className="absolute inset-0 bg-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 rounded-2xl">
                  {item.type === "video" ? (
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-white text-accent flex items-center justify-center shadow-lg">
                      <Eye className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom tag bar */}
              <div className="p-4.5 bg-white border-t border-slate-50/50">
                <span className="text-[9px] font-bold text-primary uppercase tracking-widest">
                  {item.category}
                </span>
                <h4 className="text-xs font-bold text-accent mt-1 leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Video Viewer Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-accent/95 z-55 flex items-center justify-center p-6"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Navigate */}
              <button
                onClick={prevItem}
                className="absolute left-6 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors hidden sm:block"
                aria-label="Previous Item"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Center Content Box */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {galleryItems[lightboxIndex].type === "video" ? (
                  /* Video Embed */
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                    <iframe
                      src={galleryItems[lightboxIndex].videoUrl}
                      title={galleryItems[lightboxIndex].title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  /* Expanded Image */
                  <div className="relative w-full max-h-[70vh] flex justify-center">
                    <img
                      src={galleryItems[lightboxIndex].url}
                      alt={galleryItems[lightboxIndex].title}
                      className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                    />
                  </div>
                )}

                {/* Meta details below */}
                <div className="text-center mt-6 text-white max-w-xl">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                    {galleryItems[lightboxIndex].category}
                  </span>
                  <h3 className="text-lg font-bold mt-1.5 leading-snug">
                    {galleryItems[lightboxIndex].title}
                  </h3>
                </div>
              </motion.div>

              {/* Right Navigate */}
              <button
                onClick={nextItem}
                className="absolute right-6 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors hidden sm:block"
                aria-label="Next Item"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
