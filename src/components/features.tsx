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
  Atom,
  Shield,
  EyeOff,
  KeyRound,
  ScrollText,
  Globe,
  Zap,
  Code,
  Lock,
  Sparkles,
  BarChart3,
  Trash2,
  Cloud,
} from "lucide-react"
import { GlowingEffect } from "@/components/animated/glowing-card"

/**
 * Updated feature list (June 20 2025)
 * – Removed “Role‑Based Access Control (RBAC)”
 * – Added four new capabilities:
 *   7  Inline Data Protection Without Code Refactor
 *   9  Format‑Consistent Analytics Compatibility
 *   10 Instant Anonymization & Data Lifecycle Controls
 *   11 On‑Prem & Cloud‑Agnostic Deployment
 */
const features = [
  {
    id: 1,
    title: "Quantum‑Resilient Encryption",
    description:
      "Uses advanced cryptographic models designed to resist quantum attacks. Secure against Shor's and Grover's algorithms.",
    icon: <Atom className="h-5 w-5 text-[#d9b6ff]" />,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    id: 2,
    title: "Field‑Level Encryption",
    description:
      "Encrypt individual data fields like names, emails, card numbers, EMRs, etc. Enables selective access and minimizes blast radius in case of breach.",
    icon: <Shield className="h-5 w-5 text-[#d9b6ff]" />,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]",
  },
  {
    id: 3,
    title: "Dynamic Tokenization & PII Masking",
    description:
      "Replace sensitive fields with non‑reversible tokens or masked values. Ensures compliance with GDPR, HIPAA, and PCI‑DSS.",
    icon: <EyeOff className="h-5 w-5 text-[#d9b6ff]" />,
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/9/2/13]",
  },
  {
    id: 4,
    title: "Zero Key Storage Architecture",
    description:
      "No need to store or rotate encryption keys. Cipherion dynamically derives encryption context from input.",
    icon: <KeyRound className="h-5 w-5 text-[#d9b6ff]" />,
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/5]",
  },
  {
    id: 5,
    title: "REST & gRPC APIs for Developers",
    description:
      "Lightweight, plug‑and‑play API integrations. Built with OpenAPI standards and supports token‑based authentication.",
    icon: <Code className="h-5 w-5 text-[#d9b6ff]" />,
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/5/3/9]",
  },
  {
    id: 6,
    title: "Real‑Time Audit Logging",
    description:
      "Track every access, mutation, and request involving sensitive data. Generate reports for internal review or third‑party audits.",
    icon: <ScrollText className="h-5 w-5 text-[#d9b6ff]" />,
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/9/3/13]",
  },
  {
    id: 7,
    title: "Inline Data Protection Without Code Refactor",
    description:
      "Encrypt, tokenize, or mask sensitive fields directly inside existing forms, APIs, and database flows — no need to redesign your application logic.",
    icon: <Lock className="h-5 w-5 text-[#d9b6ff]" />,
    area: "md:[grid-area:4/1/5/7] xl:[grid-area:3/1/4/7]",
  },
  {
    id: 8,
    title: "Cross‑Border Compliance Mode",
    description:
      "Adapts to country‑specific regulations dynamically (e.g., GDPR vs. HIPAA). Localized masking/encryption logic for multi‑region deployment.",
    icon: <Globe className="h-5 w-5 text-[#d9b6ff]" />,
    area: "md:[grid-area:4/7/5/13] xl:[grid-area:3/7/4/13]",
  },
  {
    id: 9,
    title: "Format‑Consistent Analytics Compatibility",
    description:
      "Tokenized or masked data retains structure and data types, enabling continued use in dashboards, BI tools, and machine‑learning workflows without data leakage.",
    icon: <BarChart3 className="h-5 w-5 text-[#d9b6ff]" />,
    area: "md:[grid-area:5/1/6/7] xl:[grid-area:4/1/5/5]",
  },
  {
    id: 10,
    title: "Instant Anonymization & Data Lifecycle Controls",
    description:
      "One‑click anonymize, revoke, or delete PII/PHI/PCI records to support user rights under data privacy laws (Right to be Forgotten, Right to Access).",
    icon: <Trash2 className="h-5 w-5 text-[#d9b6ff]" />,
    area: "md:[grid-area:5/7/6/13] xl:[grid-area:4/5/5/9]",
  },
  {
    id: 11,
    title: "On‑Prem & Cloud‑Agnostic Deployment",
    description:
      "Deploy Cipherion wherever your systems are — cloud‑native, hybrid, or fully on‑prem — with no vendor lock‑in.",
    icon: <Cloud className="h-5 w-5 text-[#d9b6ff]" />,
    area: "md:[grid-area:6/1/7/13] xl:[grid-area:4/9/5/13]",
  },
] as const

interface GridItemProps {
  area: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  index: number
}

const GridItem = ({ area, icon, title, description, index }: GridItemProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.li
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
      className={`min-h-[16rem] list-none ${area}`}
    >
      <div className="relative h-full rounded-2xl border border-[#43256e]/30 p-2 md:rounded-3xl md:p-3 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500 group">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          movementDuration={1.5}
          borderWidth={1}
        />

        {/* Glass‑morphic inner container */}
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`dots-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#9569fe" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
            </svg>
          </div>

          {/* Floating sparkles */}
          <motion.div
            className="absolute top-4 right-4 w-3 h-3 text-[#d9b6ff]/40"
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

          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {/* Icon container */}
            <motion.div
              className="w-fit rounded-lg border border-[#43256e]/50 bg-gradient-to-br from-[#43256e]/30 to-[#18062a]/50 p-3 backdrop-blur-sm group-hover:border-[#9569fe]/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              {icon}
            </motion.div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="font-sans text-xl/[1.375rem] font-semibold text-balance text-[#ffffff] md:text-2xl/[1.875rem] group-hover:text-[#d9b6ff] transition-colors duration-300">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-[#e0dbfb]/80 md:text-base/[1.375rem] leading-relaxed">
                {description}
              </p>
            </div>

            {/* Bottom accent line */}
            <motion.div
              className="h-1 bg-gradient-to-r from-[#6d18ff] via-[#9569fe] to-[#d9b6ff] rounded-full mt-4 origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            />
          </div>
        </div>
      </div>
    </motion.li>
  )
}

function FloatingOrb({
  delay = 0,
  size = "w-4 h-4",
  color = "#9569fe",
}: { delay?: number; size?: string; color?: string }) {
  return (
    <motion.div
      className={`${size} rounded-full absolute opacity-40`}
      style={{ backgroundColor: color }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}

export default function Features() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <div className="min-h-screen bg-transparent  relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          {/* Large background orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#6d18ff]/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-[#9569fe]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#d9b6ff]/5 rounded-full blur-3xl" />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#9569fe" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
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
                  Enterprise Security Suite
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
              Key Features of{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#6d18ff] via-[#9569fe] to-[#d9b6ff] bg-clip-text text-transparent">
                  Cipherion
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
              Built for enterprises that demand zero compromise on data security. <br className="hidden md:block" />
              Cipherion isn't just another encryption layer — it's a complete security fabric.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-6 lg:gap-6 xl:grid-rows-4">
            {features.map((feature, index) => (
              <GridItem
                key={feature.id}
                area={feature.area}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </ul>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#6d18ff] to-[#7143fe] text-white font-semibold rounded-2xl overflow-hidden group"
            >
              {/* Button background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7143fe] to-[#9569fe] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Button content */}
              <Lock className="w-5 h-5 mr-3 relative z-10" />
              <span className="relative z-10">Explore Cipherion Security</span>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
