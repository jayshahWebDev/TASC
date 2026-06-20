import React from "react";
import Link from "next/link";
import TascLogo from "./TascLogo";
import { Twitter, Facebook, Youtube, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About TASC", href: "#about" },
    { name: "Facilities", href: "#facilities" },
    { name: "Campus Life", href: "#campus-life" },
    { name: "Gallery", href: "#gallery" },
    { name: "Inquiry Desk", href: "#contact" },
  ];

  const programs = [
    { name: "UPSC Civil Services", href: "#programs" },
    { name: "GPSC Preparation", href: "#programs" },
    { name: "IAS Foundation", href: "#programs" },
    { name: "Interview Guidance", href: "#programs" },
    { name: "Test Series", href: "#programs" },
  ];

  return (
    <footer className="bg-surface border-t border-slate-100 py-16 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Col 1: Branding */}
          <div className="lg:col-span-4 space-y-6">
            <TascLogo size="sm" />
            <p className="text-slate-500 leading-relaxed text-xs">
              Tapovan Administrative Services Centre (TASC) is a premium residential academy preparing UPSC and GPSC candidates through administrative rigor and spiritual discipline.
            </p>
            <div className="flex items-center gap-3">
              {/* Social icons */}
              <a href="#" className="p-2 bg-white hover:bg-primary hover:text-white border border-slate-150 rounded-lg transition-all shadow-3xs" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white hover:bg-primary hover:text-white border border-slate-150 rounded-lg transition-all shadow-3xs" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white hover:bg-primary hover:text-white border border-slate-150 rounded-lg transition-all shadow-3xs" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white hover:bg-primary hover:text-white border border-slate-150 rounded-lg transition-all shadow-3xs" aria-label="Linkedin">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white hover:bg-primary hover:text-white border border-slate-150 rounded-lg transition-all shadow-3xs" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4 lg:pl-4">
            <h4 className="font-bold text-accent text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors flex items-center gap-0.5 group">
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="lg:col-span-3 space-y-4 lg:pl-4">
            <h4 className="font-bold text-accent text-sm tracking-wider uppercase">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors flex items-center gap-0.5 group">
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-accent text-sm tracking-wider uppercase">Contact Details</h4>
            <ul className="space-y-3.5 text-[11px] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-accent shrink-0">Helpline:</span>
                <a href="tel:+918200596350" className="hover:text-primary">
                  +91 82005 96350
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-accent shrink-0">Email:</span>
                <a href="mailto:admissions@tascindia.org" className="hover:text-primary">
                  admissions@tascindia.org
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-accent shrink-0">Address:</span>
                <span>
                  Tapovan Sanskardham, Gandhinagar-Ahmedabad Highway, Koba, Gandhinagar, Gujarat 382007
                </span>
              </li>
              <li className="pt-2 border-t border-slate-200/50">
                <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Managed By</span>
                <span className="font-bold text-slate-650 text-xs">TYAG TRUST</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright divider */}
        <div className="border-t border-slate-200/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400">
            © {currentYear} Tapovan Administrative Services Centre (TASC). All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] text-slate-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Admission</a>
            <a href="#" className="hover:text-primary transition-colors">Rules & Regulations</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
