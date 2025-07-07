import { cn } from "@/lib/utils";
import React from "react";
import { ContactForm } from "./ui/contact-form";
import { ContactInfo } from "./ui/contact-info";

interface ContactUsProps {
  className?: string;
}

function ContactUs({ className }: ContactUsProps) {
  return (
    <section 
      id="contact-section" // to redirect to Contact us section directly on click
      className={cn(
        "relative m-4 md:m-6 py-16 px-6 md:px-16 rounded-3xl overflow-hidden",
        "bg-[linear-gradient(to_bottom,_#0b0117_10%,_#180436_80%,_#0b0117_100%)] border border-[#8b5cf6]/20",
        className
      )}
    >
      

      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-[var(--background)] blur-3xl rounded-full z-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Have questions or need help? Fill out the form and our team will get
            back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
