import React from "react";

interface TascLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function TascLogo({ className = "", showText = true, size = "md" }: TascLogoProps) {
  const dimensions = {
    sm: { logo: "h-10 w-10", title: "text-base", subtitle: "text-[10px]" },
    md: { logo: "h-16 w-16", title: "text-2xl tracking-wide", subtitle: "text-xs" },
    lg: { logo: "h-28 w-28", title: "text-4xl tracking-widest font-extrabold", subtitle: "text-sm" },
  };

  const selectedSize = dimensions[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Crisp SVG Seal of TASC */}
      <div className={`relative ${selectedSize.logo} flex-shrink-0 animate-fade-in`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(166,30,98,0.15)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Gold Ring */}
          <circle cx="100" cy="100" r="96" stroke="#F7931E" strokeWidth="3" fill="#FFFFFF" />
          <circle cx="100" cy="100" r="92" stroke="#F7931E" strokeWidth="1" />
          
          {/* Inner Gold Wreath Ring */}
          <circle cx="100" cy="100" r="72" stroke="#E2E8F0" strokeWidth="1" />
          <circle cx="100" cy="100" r="68" stroke="#F7931E" strokeWidth="1.5" />

          {/* Curved Text - Top: तपोवन (Tapovan) */}
          <path id="curve-top" d="M 32 100 A 68 68 0 0 1 168 100" fill="none" />
          <text className="font-semibold text-[15px]" fill="#A61E62" letterSpacing="6">
            <textPath href="#curve-top" startOffset="50%" textAnchor="middle">
              तपोवन
            </textPath>
          </text>

          {/* Curved Text - Bottom: धर्मो रक्षति रक्षितः */}
          <path id="curve-bottom" d="M 168 100 A 68 68 0 0 1 32 100" fill="none" />
          <text className="font-medium text-[9px]" fill="#A61E62" letterSpacing="1">
            <textPath href="#curve-bottom" startOffset="50%" textAnchor="middle">
              धर्मो रक्षति रक्षितः
            </textPath>
          </text>

          {/* Laurel Wreath Graphic Elements */}
          {/* Left Laurel Branch */}
          <path
            d="M 52 100 C 52 80, 60 62, 74 54 M 56 90 C 56 86, 52 84, 48 85 M 60 78 C 58 74, 54 74, 52 77 M 66 66 C 63 63, 59 65, 59 69 M 72 58 C 68 56, 66 59, 68 63"
            stroke="#16A34A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Right Laurel Branch */}
          <path
            d="M 148 100 C 148 80, 140 62, 126 54 M 144 90 C 144 86, 148 84, 152 85 M 140 78 C 142 74, 146 74, 148 77 M 134 66 C 137 63, 141 65, 141 69 M 128 58 C 132 56, 134 59, 132 63"
            stroke="#16A34A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Inner Circle Border */}
          <circle cx="100" cy="100" r="44" stroke="#F7931E" strokeWidth="1" fill="#FFFFFF" />

          {/* Red Lotus Symbol inside */}
          <g transform="translate(100, 114) scale(0.9)">
            {/* Center Petal */}
            <path
              d="M 0 -34 C -8 -20, -10 -8, 0 0 C 10 -8, 8 -20, 0 -34 Z"
              fill="#A61E62"
            />
            {/* Left Petal */}
            <path
              d="M -3 -30 C -18 -18, -18 -2, 0 0 C -8 -8, -10 -18, -3 -30 Z"
              fill="#A61E62"
              opacity="0.95"
            />
            {/* Right Petal */}
            <path
              d="M 3 -30 C 18 -18, 18 -2, 0 0 C 8 -8, 10 -18, 3 -30 Z"
              fill="#A61E62"
              opacity="0.95"
            />
            {/* Lotus Base */}
            <path
              d="M -12 2 C -6 5, 6 5, 12 2 C 8 -1, -8 -1, -12 2 Z"
              fill="#F7931E"
            />
          </g>

          {/* Open Book above Lotus */}
          <g transform="translate(100, 70) scale(0.85)">
            {/* Left Page */}
            <path
              d="M -16 4 C -8 0, 0 4, 0 4 L 0 -12 C 0 -12, -8 -16, -16 -12 Z"
              fill="#FFFFFF"
              stroke="#A61E62"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Right Page */}
            <path
              d="M 16 4 C 8 0, 0 4, 0 4 L 0 -12 C 0 -12, 8 -16, 16 -12 Z"
              fill="#FFFFFF"
              stroke="#A61E62"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Book Spine Lines */}
            <line x1="0" y1="4" x2="0" y2="-12" stroke="#A61E62" strokeWidth="2" />
            {/* Document Symbol */}
            <path d="M-8 -6 H-4 M-10 -2 H-4 M8 -6 H12 M4 -2 H12" stroke="#A61E62" strokeWidth="1" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif font-black text-primary uppercase tracking-wider ${selectedSize.title}`}>
            TASC
          </span>
          <span className={`font-sans font-medium text-slate-500 uppercase tracking-widest ${selectedSize.subtitle}`}>
            Tapovan Administrative Services Centre
          </span>
        </div>
      )}
    </div>
  );
}
