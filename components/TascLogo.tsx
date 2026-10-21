import React from "react";
import Image from "next/image";

interface TascLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}

export default function TascLogo({
  className = "",
  size = "md",
  priority = false,
}: TascLogoProps) {
  const sizeClasses = {
    sm: "w-36 sm:w-44 md:w-52",
    md: "w-48 sm:w-60 md:w-72",
    lg: "w-60 sm:w-76 md:w-88",
  };

  return (
    <div
      className={`relative inline-flex items-center select-none ${sizeClasses[size]} ${className}`}
    >
      <Image
        src="/images/logo.png"
        alt="Tapovan Administrative Services Centre (TASC) Logo"
        width={1440}
        height={490}
        className="w-full h-auto object-contain mix-blend-multiply"
        priority={priority}
      />
    </div>
  );
}
