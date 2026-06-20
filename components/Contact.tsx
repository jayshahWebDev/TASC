"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    program: "UPSC Civil Services",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: "",
        phone: "",
        email: "",
        program: "UPSC Civil Services",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
            Inquiries & Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
            Connect With Admissions
          </h2>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            Reach out to our administrative team directly, visit our Gandhinagar campus, or send us a query using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Info & Map */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Phone Node */}
              <div className="border border-slate-100 p-5 rounded-2xl bg-surface flex items-start gap-4">
                <div className="p-3 bg-primary/5 text-primary rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Call Helpline</span>
                  <a href="tel:+918200596350" className="block text-sm font-bold text-accent hover:text-primary transition-colors mt-1">
                    +91 82005 96350
                  </a>
                </div>
              </div>

              {/* WhatsApp Node */}
              <div className="border border-slate-100 p-5 rounded-2xl bg-surface flex items-start gap-4">
                <div className="p-3 bg-[#25D366]/10 text-[#25D366] rounded-xl">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">WhatsApp chat</span>
                  <a
                    href="https://wa.me/918200596350?text=Hello,%20I%20have%20an%20admission%2520inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-bold text-accent hover:text-[#25D366] transition-colors mt-1"
                  >
                    +91 82005 96350
                  </a>
                </div>
              </div>

              {/* Email Node */}
              <div className="border border-slate-100 p-5 rounded-2xl bg-surface flex items-start gap-4">
                <div className="p-3 bg-amber-50 text-secondary rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Email support</span>
                  <a href="mailto:admissions@tascindia.org" className="block text-sm font-bold text-accent hover:text-primary transition-colors mt-1">
                    admissions@tascindia.org
                  </a>
                </div>
              </div>

              {/* Address Node */}
              <div className="border border-slate-100 p-5 rounded-2xl bg-surface flex items-start gap-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Campus address</span>
                  <p className="text-xs font-bold text-accent mt-1 leading-snug">
                    Tapovan Sanskardham, Koba Highway, Gandhinagar, Gujarat 382007
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 h-[280px] shadow-2xs relative">
              <iframe
                title="TASC Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7570535269785!2d72.63750867606362!3d23.10600101349544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e816a75f144d1%3A0xe54fb7a8342caee!2sTapovan%20Sanskardham!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-6 bg-surface border border-slate-100 rounded-3xl p-8 shadow-xs">
            <h3 className="text-xl font-extrabold text-accent mb-2">Admission Inquiry Form</h3>
            <p className="text-xs text-slate-500 mb-8 leading-relaxed">
              Please fill this form and our academic counsellor will get in touch with you within 24 hours to schedule an entry test.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-150 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors text-slate-800"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-slate-150 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors text-slate-800"
                    placeholder="Enter phone number"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-slate-150 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors text-slate-800"
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              {/* Course Interest */}
              <div>
                <label htmlFor="program" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Program Interested In
                </label>
                <select
                  id="program"
                  name="program"
                  value={formState.program}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-150 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors text-slate-800"
                >
                  <option>UPSC Civil Services</option>
                  <option>GPSC Preparation</option>
                  <option>IAS Foundation</option>
                  <option>Interview Guidance</option>
                  <option>Test Series & Assessment</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Message / Queries (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-150 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors text-slate-800 resize-none"
                  placeholder="Any details you would like to mention..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-[#85164d] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md shadow-primary/10 flex items-center justify-center gap-2 text-sm disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Submitting Inquiries...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Success Notification */}
              {isSuccess && (
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center gap-3 text-emerald-800 text-xs animate-fade-in mt-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Success! Your query has been logged. Our counsellor will contact you shortly.</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
