"use client";
import { GlowingEffect } from "@/components/animated/glowing-card";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface WhySectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  benefits: string[];
  twoColumn?: boolean; 
}

export default function WhySection({
  title,
  subtitle,
  description,
  benefits,
  twoColumn = false,
}: WhySectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <div className="relative rounded-3xl border border-[#43256e]/30 p-8 bg-[#18062a]/20 backdrop-blur-sm">
        {/* Optional Glow */}
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          movementDuration={1.5}
          borderWidth={1}
        />
        {/* You can add conditional glow effect support too if needed */}
        
        <h3 className="text-4xl font-bold text-white mb-6 text-center">{title}</h3>

        {subtitle && (
          <h4 className="text-2xl font-semibold text-[#d9b6ff] mb-6 text-center">
            {subtitle}
          </h4>
        )}

        {description && (
          <p className="text-lg text-[#e0dbfb]/80 mb-8 leading-relaxed text-center">
            {description}
          </p>
        )}

        {twoColumn ? (
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#9569fe] flex-shrink-0" />
                <span className="text-[#e0dbfb]/80">{item}</span>
              </div>
            ))}
          </div>
        ) : (
          <>
            <h5 className="text-xl font-semibold text-white mb-4 text-center">
              Key Benefits:
            </h5>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-[#18062a]/20 border border-[#43256e]/30 text-sm font-medium text-[#e0dbfb]/90 hover:bg-[#9569fe]/20 transition-colors duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-[#6d18ff] mr-2 flex-shrink-0" />
                  {benefit}
                </motion.span>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

