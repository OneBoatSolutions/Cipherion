"use client"

import type React from "react"
import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion"
import {
  Shield,
  Zap,
  Sparkles,
  Check,
  Star,
} from "lucide-react"
import { GlowingEffect } from "@/components/animated/glowing-card"
import { CtA1 } from "./cta"

const pricingPlans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "$0.004",
    period: "/ API call",
    description: "Perfect for startups and small teams getting started with data protection",
    features: [
      "Stateless keyless encryption",
      "PII masking",
      "Basic support",
    ],
    usageLimits: [
      "Up to 1M API calls/month",
      "Burst rate limited",
    ],
    additionalServices: "Not included",
    popular: false,
    gradient: "from-[#6d18ff]/20 to-[#9569fe]/20",
    borderGradient: "from-[#6d18ff] to-[#9569fe]",
  },
  {
    id: 2,
    name: "Standard Plan",
    price: "$0.007",
    period: "/ API call",
    description: "Ideal for growing businesses with advanced security requirements",
    features: [
      "Full encryption suite",
      "Compliance tagging",
      "LLM-safe integration",
    ],
    usageLimits: [
      "Up to 10M API calls/month",
      "Elastic scaling",
    ],
    additionalServices: "Optional dashboards, compliance reports",
    popular: true,
    gradient: "from-[#9569fe]/30 to-[#d9b6ff]/30",
    borderGradient: "from-[#9569fe] to-[#d9b6ff]",
  },
  {
    id: 3,
    name: "Premium Plan",
    price: "$0.012",
    period: "/ API call",
    description: "Enterprise-grade solution with unlimited capabilities",
    features: [
      "All features unlocked",
      "Real-time threat detection",
      "24/7 expert support",
    ],
    usageLimits: [
      "Unlimited usage",
      "Enterprise-level API traffic",
    ],
    additionalServices: "Premium onboarding, reporting, consulting, and SLAs included",
    popular: false,
    gradient: "from-[#d9b6ff]/20 to-[#6d18ff]/20",
    borderGradient: "from-[#d9b6ff] to-[#6d18ff]",
  },
]

interface PricingCardProps {
  plan: typeof pricingPlans[0]
  index: number
}

const PricingCard = ({ plan, index }: PricingCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={`relative h-full ${plan.popular ? 'scale-105 z-10' : ''}`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="bg-gradient-to-r from-[#9569fe] to-[#d9b6ff] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-2" />
            Most Popular
          </div>
        </motion.div>
      )}

      <div className={`relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-[#18062a]/20 backdrop-blur-sm transition-all duration-500 group ${
        plan.popular 
          ? 'border-[#9569fe]/70 shadow-2xl shadow-[#9569fe]/20' 
          : 'border-[#43256e]/30 hover:border-[#9569fe]/50'
      }`}>
        <GlowingEffect
          spread={plan.popular ? 60 : 40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          movementDuration={1.5}
          borderWidth={plan.popular ? 2 : 1}
        />

        {/* Glass-morphic inner container */}
        <div className={`relative flex h-full flex-col overflow-hidden rounded-xl p-8 bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`pricing-dots-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#9569fe" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#pricing-dots-${index})`} />
            </svg>
          </div>

          {/* Floating sparkles */}
          <motion.div
            className="absolute top-6 right-6 w-4 h-4 text-[#d9b6ff]/40"
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.5,
            }}
          >
            <Sparkles className="w-full h-full" />
          </motion.div>

          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${plan.gradient} border border-[#9569fe]/30 mb-4`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
            </motion.div>
            
            <div className="flex items-baseline justify-center mb-4">
              <span className={`text-5xl font-bold bg-gradient-to-r ${plan.borderGradient} bg-clip-text text-transparent`}>
                {plan.price}
              </span>
              <span className="text-[#e0dbfb]/80 ml-2">{plan.period}</span>
            </div>
            
            <p className="text-[#e0dbfb]/70 text-sm leading-relaxed">
              {plan.description}
            </p>
          </div>

          {/* Features Section */}
          <div className="flex-1 space-y-6">
            {/* Features */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-[#d9b6ff]" />
                Features
              </h4>
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                    className="flex items-start text-[#e0dbfb]/80 text-sm"
                  >
                    <Check className="w-4 h-4 mr-3 mt-0.5 text-[#9569fe] flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Usage Limits */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Zap className="w-4 h-4 mr-2 text-[#d9b6ff]" />
                Usage Limits
              </h4>
              <ul className="space-y-3">
                {plan.usageLimits.map((limit, limitIndex) => (
                  <motion.li
                    key={limitIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + (plan.features.length + limitIndex) * 0.1 }}
                    className="flex items-start text-[#e0dbfb]/80 text-sm"
                  >
                    <Check className="w-4 h-4 mr-3 mt-0.5 text-[#9569fe] flex-shrink-0" />
                    {limit}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Additional Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Additional Services</h4>
              <p className="text-[#e0dbfb]/80 text-sm leading-relaxed">
                {plan.additionalServices}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`relative w-full mt-8 py-4 rounded-xl font-semibold text-white overflow-hidden group ${
              plan.popular 
                ? 'bg-gradient-to-r from-[#9569fe] to-[#d9b6ff]' 
                : 'bg-gradient-to-r from-[#6d18ff] to-[#7143fe]'
            }`}
          >
            {/* Button background effects */}
            <div className={`absolute inset-0 bg-gradient-to-r ${
              plan.popular 
                ? 'from-[#d9b6ff] to-[#9569fe]' 
                : 'from-[#7143fe] to-[#9569fe]'
            } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Button content */}
            <span className="relative z-10">
              {plan.popular ? 'Start Free Trial' : 'Get Started'}
            </span>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            />
          </motion.button>

          {/* Bottom accent line */}
          <motion.div
            className={`h-1 bg-gradient-to-r ${plan.borderGradient} rounded-full mt-6 origin-left`}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          {/* Large background orbs */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#6d18ff]/5 rounded-full blur-3xl" />
          <div className="absolute top-40 left-20 w-[500px] h-[500px] bg-[#9569fe]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-[#d9b6ff]/5 rounded-full blur-3xl" />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="pricing-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#9569fe" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pricing-grid)" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Pricing Section */}
      <section ref={containerRef} className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div style={{ y: textY }} className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="inline-block"
            >
              <div className="relative">
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-[#18062a]/60 backdrop-blur-xl border border-[#9569fe]/20 text-[#d9b6ff] text-sm font-medium mb-8">
                  <Zap className="w-4 h-4 mr-2" />
                  Simple, Transparent Pricing
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6d18ff]/10 to-[#9569fe]/10" />
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Pricing{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#6d18ff] via-[#9569fe] to-[#d9b6ff] bg-clip-text text-transparent">
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-[#6d18ff]/20 to-[#d9b6ff]/20 blur-xl rounded-lg"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-[#e0dbfb]/80 max-w-4xl mx-auto leading-relaxed"
            >
              Pay only for what you use. Scale from startup to enterprise <br className="hidden md:block" />
              with transparent, usage-based pricing that grows with your business.
            </motion.p>
          </motion.div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                index={index}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <CtA1/>
        </motion.div>
        </div>
      </section>
    </div>
  )
}
