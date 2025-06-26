"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { GlowingEffect } from "@/components/animated/glowing-card"; // Adjust if needed


export default function page() {
  return (
    <>
    <div className="mt-20">

    </div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-28"
    >
       
      <div className="relative rounded-3xl border border-[#43256e]/30 p-8 bg-[#18062a]/20 backdrop-blur-sm max-w-4xl mx-auto">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          movementDuration={1.5}
          borderWidth={1}
        />

        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-[#e0dbfb]/80 text-center mb-8 leading-relaxed">
          We're here to help. Reach out with questions, collaboration ideas, or support needs.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-8 justify-center">
          <Image
            src="/bitmap.png"
            alt="Cipherion Logo"
            width={120}
            height={120}
            className="rounded-lg drop-shadow-[0_5px_15px_rgba(149,105,254,0.5)]"
          />
          <div className="text-[#e0dbfb]/90 space-y-4 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#9569fe]" />
              <span>+91 81051 88413</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#9569fe]" />
              <span>official@cipherion.in</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
}
