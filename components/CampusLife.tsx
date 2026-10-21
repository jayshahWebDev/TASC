"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Play, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  type: "image" | "video";
  url: string;
  alt: string;
  width: number;
  height: number;
  videoUrl?: string;
}

export default function CampusLife() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Classroom Learning",
    "Library & Study",
    "Hostel & Residence",
    "Officer Seminars",
    "Spiritual & Meditation",
    "Group Discussions",
  ];

  const galleryItems: GalleryItem[] = useMemo(
    () => [
      {
        id: 1,
        category: "Classroom Learning",
        title: "Interactive Civil Services Session & GS Discussion",
        type: "image",
        url: "/images/tasc_classroom.jpg",
        alt: "Aspirants attending intensive administrative governance lecture at TASC classroom",
        width: 800,
        height: 600,
      },
      {
        id: 2,
        category: "Library & Study",
        title: "Silent Study Hall & Research Desk",
        type: "image",
        url: "/images/study_hall.png",
        alt: "Silent research tables and reference archives in TASC dedicated study hall",
        width: 800,
        height: 600,
      },
      {
        id: 3,
        category: "Hostel & Residence",
        title: "Air-Conditioned Residential Aspirant Quarters",
        type: "image",
        url: "/images/tasc_hostel.jpg",
        alt: "Pristine distraction-free student living quarters and study desks at TASC hostel",
        width: 800,
        height: 600,
      },
      {
        id: 4,
        category: "Officer Seminars",
        title: "Strategy Masterclass by Senior IAS Officer",
        type: "image",
        url: "/images/tasc_seminar.jpg",
        alt: "Guest civil service officer addressing candidates on administrative ethics and strategy",
        width: 800,
        height: 600,
      },
      {
        id: 5,
        category: "Spiritual & Meditation",
        title: "Morning Dhyan & Meditation Assembly at Tapovan Hall",
        type: "image",
        url: "/images/tasc_meditation.jpg",
        alt: "Daily morning meditation and spiritual mindfulness assembly at Tapovan Hall",
        width: 800,
        height: 600,
      },
      {
        id: 6,
        category: "Group Discussions",
        title: "Peer-to-Peer Mains Answer Writing Evaluation",
        type: "image",
        url: "/images/tasc_discussion.jpg",
        alt: "Candidates reviewing model answers and GS strategies in outdoor campus area",
        width: 800,
        height: 600,
      },
      {
        id: 7,
        category: "Spiritual & Meditation",
        title: "Spiritual Mentorship & Ethical Guidance by Pujya Acharya Bhagwant",
        type: "image",
        url: "/images/acharya.png",
        alt: "Revered spiritual inspiration guiding ethical leadership and service values",
        width: 800,
        height: 600,
      },
      {
        id: 8,
        category: "Classroom Learning",
        title: "Answer Writing Evaluation Workshop",
        type: "video",
        url: "/images/tasc_classroom.jpg",
        alt: "Faculty conducting answer evaluation masterclass for civil services aspirants",
        width: 800,
        height: 600,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
    []
  );

  // Instant filter memoization ensuring clean re-render without lag or hanging DOM elements
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, galleryItems]);

  // Dynamic grid fallback classes for 1, 2, or 3+ images
  const gridClasses = useMemo(() => {
    if (filteredItems.length === 1) {
      return "grid grid-cols-1 max-w-md mx-auto gap-6";
    }
    if (filteredItems.length === 2) {
      return "grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6";
    }
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
  }, [filteredItems.length]);

  const openLightbox = (id: number) => {
    const index = galleryItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextItem = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  };

  const prevItem = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
            Campus Life & Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
            Authentic TASC Experience
          </h2>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            Take an authentic look inside the disciplined classrooms, peaceful study halls, officer seminars, and spiritual routines that define life at TASC.
          </p>
        </div>

        {/* Mobile-Responsive Overflow Filter Pill Container: flex layout, horizontal overflow, no text wrapping, hidden scrollbars */}
        <div className="w-full flex items-center justify-start sm:justify-center overflow-x-auto whitespace-nowrap pb-4 pt-1 mb-10 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-2 px-1">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 text-xs font-semibold px-4.5 py-2.5 rounded-full border transition-all duration-200 cursor-pointer select-none ${
                    isSelected
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-surface text-slate-600 border-slate-100 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Layout Grid with conditional classes for 1, 2, or 3+ images */}
        <div className={gridClasses}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="rounded-2xl overflow-hidden border border-slate-100 bg-surface shadow-2xs group cursor-pointer hover:shadow-lg hover:border-slate-200 transition-all duration-300 flex flex-col"
            >
              {/* Next.js Image Optimization with explicit width & height */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.url}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Dark Hover overlay */}
                <div className="absolute inset-0 bg-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
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
              <div className="p-4 bg-white border-t border-slate-50 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-accent mt-1 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                </div>
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
              onClick={closeLightbox}
              className="fixed inset-0 bg-accent/95 z-50 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-5 right-5 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Navigate */}
              <button
                type="button"
                onClick={prevItem}
                className="absolute left-4 sm:left-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20 hidden sm:block cursor-pointer"
                aria-label="Previous Item"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Center Content Box */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
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
                  <div className="relative w-full aspect-[4/3] max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
                    <Image
                      src={galleryItems[lightboxIndex].url}
                      alt={galleryItems[lightboxIndex].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 896px"
                      className="object-contain"
                      priority
                    />
                  </div>
                )}

                {/* Meta details below */}
                <div className="text-center mt-4 text-white max-w-xl">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                    {galleryItems[lightboxIndex].category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold mt-1 leading-snug">
                    {galleryItems[lightboxIndex].title}
                  </h3>
                </div>
              </motion.div>

              {/* Right Navigate */}
              <button
                type="button"
                onClick={nextItem}
                className="absolute right-4 sm:right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20 hidden sm:block cursor-pointer"
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
