"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    reason: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.reason.trim()) newErrors.reason = "Please select a reason";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", reason: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-[#180436] to-[#0b0117] border border-purple-500/30 rounded-2xl p-8 text-center shadow-xl text-white">
        <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-neutral-300 mb-6">
          Thank you for contacting us. We'll get back to you soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#180436] to-[#0b0117] border border-purple-500/30 rounded-2xl shadow-lg p-8 text-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={cn(
              "w-full px-4 py-3 bg-transparent border rounded-lg text-white placeholder:text-neutral-400 outline-none transition-all duration-200",
              "focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
              errors.name && "border-red-500 focus:ring-red-500 focus:border-red-500"
            )}
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={cn(
              "w-full px-4 py-3 bg-transparent border rounded-lg text-white placeholder:text-neutral-400 outline-none transition-all duration-200",
              "focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
              errors.email && "border-red-500 focus:ring-red-500 focus:border-red-500"
            )}
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>

        {/* Reason Dropdown */}
        <div className="relative">
          <label htmlFor="reason" className="block text-sm font-medium mb-2">
            Query
          </label>
          <div className="relative">
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              className={cn(
                "w-full px-4 py-3 bg-[#180436] border rounded-lg text-white outline-none appearance-none",
                "focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
                "transition-all duration-200 pr-10",
                errors.reason && "border-red-500 focus:ring-red-500 focus:border-red-500"
              )}
            >
              <option className="bg-[#180436] text-white" value="">Select a query</option>
              <option className="bg-[#180436] text-white" value="support">Support</option>
              <option className="bg-[#180436] text-white" value="sales">Request a demo</option>
              <option className="bg-[#180436] text-white" value="partnership">Explore Solutions</option>
              <option className="bg-[#180436] text-white" value="feedback">Feedback</option>
            </select>

            {/* Custom Dropdown Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {errors.reason && <p className="mt-1 text-sm text-red-400">{errors.reason}</p>}
        </div>


        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className={cn(
              "w-full px-4 py-3 bg-transparent border rounded-lg text-white placeholder:text-neutral-400 outline-none transition-all duration-200 resize-vertical",
              "focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
              errors.message && "border-red-500 focus:ring-red-500 focus:border-red-500"
            )}
          />
          {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full py-3 px-6 rounded-full font-medium transition-all duration-200 text-white",
            isSubmitting
              ? "bg-purple-400/40 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700 hover:shadow-lg transform hover:-translate-y-0.5"
          )}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
