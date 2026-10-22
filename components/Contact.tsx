"use client";

import React, { useState, useId } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function Contact() {
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const programId = useId();
  const messageId = useId();

  // Controlled form state
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    program: "UPSC Civil Services",
    message: "",
  });

  // Touched state for immediate user feedback
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
  });

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Validation Regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Supports 10-digit Indian numbers, optional country code (+91), spaces, or dashes
  const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;

  // Field validations
  const isNameValid = formState.name.trim().length >= 2;
  const isEmailValid = emailRegex.test(formState.email.trim());
  const isPhoneValid = phoneRegex.test(formState.phone.replace(/[\s\-]/g, ""));

  const isFormValid = isNameValid && isEmailValid && isPhoneValid;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: "name" | "phone" | "email") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all required fields as touched
    setTouched({
      name: true,
      phone: true,
      email: true,
    });

    if (!isFormValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Simulate asynchronous API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      setFormState({
        name: "",
        phone: "",
        email: "",
        program: "UPSC Civil Services",
        message: "",
      });
      setTouched({
        name: false,
        phone: false,
        email: false,
      });

      // Clear success notification after 6 seconds
      setTimeout(() => setIsSuccess(false), 6000);
    } catch {
      setSubmitError(
        "An error occurred while submitting. Please try again or reach out on WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white relative border-b border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
            Inquiries & Admissions Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-accent mt-4 tracking-tight">
            Connect With Admissions
          </h2>
          <p className="text-base text-slate-500 mt-4 leading-relaxed">
            Reach out to our administrative team directly, visit our Gandhinagar
            administrative campus, or submit an inquiry using the verified form
            below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Info & Map */}
          <div className="lg:col-span-6 space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Node */}
              <div className="border border-slate-100 p-5 rounded-2xl bg-surface flex items-start gap-4 shadow-2xs">
                <div className="p-3 bg-primary/5 text-primary rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                    Call Helpline
                  </span>
                  <a
                    href="tel:+918200596350"
                    className="block text-sm font-bold text-accent hover:text-primary transition-colors mt-1"
                  >
                    +91 82005 96350
                  </a>
                </div>
              </div>

              {/* WhatsApp Node */}
              <div className="border border-slate-100 p-5 rounded-2xl bg-surface flex items-start gap-4 shadow-2xs">
                <div className="p-3 bg-[#25D366]/10 text-[#25D366] rounded-xl">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                    WhatsApp Desk
                  </span>
                  <a
                    href="https://wa.me/918200596350?text=Hello,%20I%20have%20an%20admission%20inquiry%20for%20TASC."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-bold text-accent hover:text-[#25D366] transition-colors mt-1"
                  >
                    +91 82005 96350
                  </a>
                </div>
              </div>

              {/* Email Node */}
              <div className="border border-slate-100 p-5 rounded-2xl bg-surface flex items-start gap-4 shadow-2xs">
                <div className="p-3 bg-amber-50 text-secondary rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                    Email Support
                  </span>
                  <a
                    href="mailto:admissions@tascindia.org"
                    className="block text-sm font-bold text-accent hover:text-primary transition-colors mt-1"
                  >
                    admissions@tascindia.org
                  </a>
                </div>
              </div>

              {/* Address Node */}
              <div className="border border-slate-100 p-5 rounded-2xl bg-surface flex items-start gap-4 shadow-2xs">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                    Administrative Address
                  </span>
                  <p className="text-xs font-bold text-accent mt-1 leading-snug">
                    21-A Parelise Sol Paradise Society Lane, Ahmedabad, Gujarat
                    380013
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-100 h-[280px] shadow-2xs relative">
              <iframe
                title="TASC Location Map"
                src="https://www.google.com/maps?q=Tapovan%20Administrative%20Services%20Centre%2C%20Ahmedabad%2C%20Gujarat&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-6 bg-surface border border-slate-100 rounded-3xl p-8 shadow-xs">
            <h3 className="text-xl font-extrabold text-accent mb-2">
              Admission Inquiry Form
            </h3>
            <p className="text-xs text-slate-500 mb-8 leading-relaxed">
              Please fill this form and our academic counsellor will review your
              details and contact you within 24 hours to schedule an entry
              assessment.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor={nameId}
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id={nameId}
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur("name")}
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-sm focus:outline-none transition-colors text-slate-800 ${
                    touched.name && !isNameValid
                      ? "border-red-400 focus:border-red-500 bg-red-50/20"
                      : "border-slate-200 focus:border-primary"
                  }`}
                  placeholder="Enter your full name"
                />
                {touched.name && !isNameValid && (
                  <p className="text-red-500 text-[11px] mt-1.5 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> Please enter your
                    name (minimum 2 characters).
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div>
                  <label
                    htmlFor={phoneId}
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id={phoneId}
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("phone")}
                    className={`w-full px-4 py-3 bg-white border rounded-xl text-sm focus:outline-none transition-colors text-slate-800 ${
                      touched.phone && !isPhoneValid
                        ? "border-red-400 focus:border-red-500 bg-red-50/20"
                        : "border-slate-200 focus:border-primary"
                    }`}
                    placeholder="e.g. 9876543210"
                  />
                  {touched.phone && !isPhoneValid && (
                    <p className="text-red-500 text-[11px] mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> Enter
                      valid 10-digit number.
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor={emailId}
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id={emailId}
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("email")}
                    className={`w-full px-4 py-3 bg-white border rounded-xl text-sm focus:outline-none transition-colors text-slate-800 ${
                      touched.email && !isEmailValid
                        ? "border-red-400 focus:border-red-500 bg-red-50/20"
                        : "border-slate-200 focus:border-primary"
                    }`}
                    placeholder="name@example.com"
                  />
                  {touched.email && !isEmailValid && (
                    <p className="text-red-500 text-[11px] mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> Enter
                      valid email address.
                    </p>
                  )}
                </div>
              </div>

              {/* Course Interest */}
              <div>
                <label
                  htmlFor={programId}
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Program Interested In
                </label>
                <select
                  id={programId}
                  name="program"
                  value={formState.program}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors text-slate-800 cursor-pointer"
                >
                  <option value="UPSC Civil Services">
                    UPSC Civil Services (IAS / IPS / IFS)
                  </option>
                  <option value="GPSC Preparation">
                    GPSC Preparation (Class 1 & 2)
                  </option>
                  <option value="IAS Foundation">
                    IAS Foundation (Undergraduate Cohort)
                  </option>
                  <option value="Interview Guidance">
                    Interview Guidance & Mock Board
                  </option>
                  <option value="Test Series & Assessment">
                    Test Series & Evaluation Program
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor={messageId}
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Message / Queries (Optional)
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors text-slate-800 resize-none"
                  placeholder="Tell us about your educational background or preparation timeline..."
                ></textarea>
              </div>

              {/* Submit Button with Loading Spinner and Disabled State */}
              <button
                type="submit"
                disabled={isSubmitting || (touched.name && !isFormValid)}
                className="w-full bg-primary hover:bg-[#85164d] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md shadow-primary/10 flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Admission Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Success Notification */}
              {isSuccess && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3 text-emerald-800 text-xs animate-fade-in mt-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block font-bold">
                      Inquiry Successfully Submitted!
                    </strong>
                    <span>
                      Your query has been logged. Our academic counsellor will
                      contact you shortly.
                    </span>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-red-800 text-xs animate-fade-in mt-4">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
