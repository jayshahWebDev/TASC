import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "TASC | Tapovan Administrative Services Centre",
  description: "Tapovan Administrative Services Centre (TASC) prepares aspiring UPSC and GPSC candidates through academic excellence, mentorship, discipline, and value-based leadership rooted in Jain principles.",
  keywords: [
    "TASC",
    "Tapovan",
    "Tapovan Administrative Services Centre",
    "UPSC Coaching",
    "GPSC Preparation",
    "Jain UPSC coaching",
    "IAS IPS Academy India",
    "Residential civil services coaching",
    "Tyag Trust"
  ],
  authors: [{ name: "TASC" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-accent font-sans">
        {children}
      </body>
    </html>
  );
}

