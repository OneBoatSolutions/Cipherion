"use client";
import Link from "next/link"; // redirect to contact-us in ABOUT US page

import WhySection from "@/components/WhySection";

import React, { forwardRef, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  Shield,
  Database,
  Key,
  FileText,
  Users,
  Eye,
  Lock,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Cloud,
  Server,
  Smartphone,
  Computer,
  Sparkles,
  UserCheck,
  Fingerprint,
  Globe,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/animated/glowing-card";
import { Button } from "@/components/ui/button";
import { CtA1 } from "@/components/cta";
import { GradientBorder } from "@/components/animated/gradient-border";
import { AuroraText } from "@/components/animated/aurora-text";

function PIIFlowDiagram() {
  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-br from-[#18062a]/40 to-[#02010f]/60 backdrop-blur-xl border border-[#43256e]/30 p-8 md:p-12">
      <GlowingEffect
        spread={30}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        movementDuration={1.5}
        borderWidth={1}
      />

      {/* Main Flow */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-12">
        {/* App / Frontend */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Computer className="h-8 w-8 text-[#d9b6ff]" />
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#6d18ff]/20 to-[#9569fe]/20 rounded-2xl blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-[#e0dbfb]">App / Frontend</p>
            <p className="text-xs text-[#e0dbfb]/60">User Interface</p>
          </div>
        </motion.div>

        {/* Connection Line 1 */}
        <div className="hidden lg:block">
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-[#6d18ff] to-[#9569fe] rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div
            className="w-3 h-3 bg-[#9569fe] rounded-full ml-auto -mt-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          />
        </div>

        {/* Mobile Connection */}
        <div className="lg:hidden">
          <motion.div
            className="h-16 w-1 bg-gradient-to-b from-[#6d18ff] to-[#9569fe] rounded-full mx-auto"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div
            className="w-3 h-3 bg-[#9569fe] rounded-full mx-auto -mt-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          />
        </div>

        {/* API Layer */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Server className="h-8 w-8 text-[#d9b6ff]" />
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#9569fe]/20 to-[#d9b6ff]/20 rounded-2xl blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-[#e0dbfb]">API Layer</p>
            <p className="text-xs text-[#e0dbfb]/60">Business Logic</p>
          </div>
        </motion.div>

        {/* Connection Line 2 */}
        <div className="hidden lg:block">
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-[#7143fe] to-[#d9b6ff] rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.div
            className="w-3 h-3 bg-[#d9b6ff] rounded-full ml-auto -mt-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
          />
        </div>

        {/* Mobile Connection 2 */}
        <div className="lg:hidden">
          <motion.div
            className="h-16 w-1 bg-gradient-to-b from-[#7143fe] to-[#d9b6ff] rounded-full mx-auto"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.div
            className="w-3 h-3 bg-[#d9b6ff] rounded-full mx-auto -mt-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
          />
        </div>

        {/* Cipherion PII SDK */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl border-2 border-[#9569fe]/70 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Fingerprint className="h-10 w-10 text-[#9569fe]" />
            </div>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-[#9569fe]/30 to-[#d9b6ff]/30 rounded-2xl blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-[#e0dbfb]">
              Cipherion PII SDK
            </p>
            <p className="text-xs text-[#e0dbfb]/60">Encryption Engine</p>
          </div>
        </motion.div>

        {/* Connection Line 3 */}
        <div className="hidden lg:block">
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-[#9569fe] to-[#d9b6ff] rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          />
          <motion.div
            className="w-3 h-3 bg-[#d9b6ff] rounded-full ml-auto -mt-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.8 }}
          />
        </div>

        {/* Mobile Connection 3 */}
        <div className="lg:hidden">
          <motion.div
            className="h-16 w-1 bg-gradient-to-b from-[#9569fe] to-[#d9b6ff] rounded-full mx-auto"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          />
          <motion.div
            className="w-3 h-3 bg-[#d9b6ff] rounded-full mx-auto -mt-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.8 }}
          />
        </div>

        {/* Client Database */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Database className="h-8 w-8 text-[#d9b6ff]" />
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#d9b6ff]/20 to-[#9569fe]/20 rounded-2xl blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-[#e0dbfb]">
              Client Database
            </p>
            <p className="text-xs text-[#e0dbfb]/60">Encrypted PII</p>
          </div>
        </motion.div>
      </div>

      {/* Access & Audit Logger - Bottom */}
      <div className="flex justify-center">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {/* Connection to Cipherion */}
          <motion.div
            className="h-12 w-1 bg-gradient-to-b from-[#6d18ff] to-[#7143fe] rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />

          <div className="relative">
            <div className="w-16 h-16 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <FileText className="h-6 w-6 text-[#d9b6ff]" />
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#6d18ff]/20 to-[#7143fe]/20 rounded-2xl blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </div>
          <div className="text-center">
            <p className="text-xs font-medium text-[#e0dbfb]">
              Access & Audit Logger
            </p>
            <p className="text-xs text-[#e0dbfb]/60">Monitor & Record</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const piiComplianceMatrix = [
  {
    rule: "Data Minimization (GDPR Art. 5)",
    requirement: "Limit collection and use of PII to what is necessary",
    approach:
      "Cipherion enables encrypted aliases and tokens to reduce direct exposure of real PII",
    icon: <Database className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    rule: "Security of Processing (GDPR Art. 32)",
    requirement:
      "Implement security measures to protect PII in storage and transmission",
    approach:
      "Field-level polymorphic encryption ensures PII is secured in databases and APIs",
    icon: <Shield className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    rule: "Access Control",
    requirement: "Restrict access to PII to authorized parties only",
    approach:
      "Cipherion allows integration with your IAM or API gateway to control and monitor access without altering your backend",
    icon: <Lock className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    rule: "Breach Notification (GDPR Art. 33)",
    requirement:
      "Notify authorities within 72 hours if personal data is breached",
    approach:
      "Cipherion's encrypted tokens and hashing techniques ensure that even in a breach, exposed data is unusable",
    icon: <AlertTriangle className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    rule: "Right to Access/Erasure (GDPR Art. 15 & 17)",
    requirement:
      "Allow users to request, download, or delete their personal data",
    approach:
      "Cipherion provides lightweight APIs for secure data retrieval or anonymization inline with user requests",
    icon: <UserCheck className="h-5 w-5 text-[#d9b6ff]" />,
  },
];

const piiBenefits = [
  {
    title: "Encrypt PII Where It Already Lives",
    description:
      "Keep your PII in your own infrastructure — Cipherion wraps it in polymorphic encryption that supports exact-match querying and secure sharing.",
    icon: <Lock className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Replace PII with Format-Preserving Tokens",
    description:
      "Instead of real data, use Cipherion-generated tokens that retain format for analytics, testing, or external use — reducing privacy risk.",
    icon: <Key className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Auto-Log All PII Access & Actions",
    description:
      "Every access to sensitive personal data is logged with timestamp, IP, and method — ready for audits or breach investigations.",
    icon: <FileText className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Comply with Global Data Privacy Laws",
    description:
      "Whether you operate in Europe, the US, or India — Cipherion gives you privacy-ready tools for GDPR, CCPA, and DPDP compliance.",
    icon: <Globe className="h-6 w-6 text-[#d9b6ff]" />,
  },
];

export default function Solutions() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
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
                <pattern
                  id="grid-solutions"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="#9569fe"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-solutions)" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Solutions Section */}
      <section
        ref={containerRef}
        className="relative py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* PII Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="relative">
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-[#18062a]/60 backdrop-blur-xl border border-[#9569fe]/20 text-[#d9b6ff] text-sm font-medium mb-8">
                  <Fingerprint className="w-4 h-4 mr-2" />
                  PII Protection Solution
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6d18ff]/10 to-[#9569fe]/10" />
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Protect{" "}
              <span className="relative">
                <span className="">
                  <AuroraText>PII</AuroraText> Without
                </span>
                
              </span>
              <br />
              Moving It
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-[#e0dbfb]/80 max-w-4xl mx-auto leading-relaxed"
            >
              Cipherion enables you to secure sensitive personal data (PII)
              directly inside your existing databases and workflows — with no
              vendor lock-in or infrastructure change.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <GradientBorder>
                <Link href="/about#contact-section" className="w-full md:w-auto">
                <Button className="relative inline-flex rounded-md  items-center px-8 py-4  font-semibold  overflow-hidden group">
                  <div className="absolute inset-0" />
                  <span className="relative z-10">Request a Demo</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                </Button>
                </Link>
              </GradientBorder>
            </motion.div>
          </motion.div>

          {/* What Is PII Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="relative rounded-3xl border border-[#43256e]/30 p-8 bg-[#18062a]/20 backdrop-blur-sm">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                movementDuration={1.5}
                borderWidth={1}
              />

              <h3 className="text-3xl font-bold text-white mb-6">
                What Is PII and Why It Needs Protection?
              </h3>
              <p className="text-lg text-[#e0dbfb]/80 leading-relaxed">
                Personally Identifiable Information (PII) includes any data that
                can identify an individual — names, contact details, government
                IDs, financial information, IP addresses, etc. Whether you're in
                fintech, healthtech, e-commerce, or SaaS, regulations like GDPR,
                CCPA, and India DPDP demand you protect this data from
                unauthorized access, breaches, and misuse.
              </p>
            </div>
          </motion.div>

          {/* PII Compliance Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              PII Compliance Matrix – How Cipherion Helps?
            </h3>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              {piiComplianceMatrix.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl border border-[#43256e]/30 p-6 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500 group"
                >
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    movementDuration={1.5}
                    borderWidth={1}
                  />

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        {item.icon}
                        <h4 className="text-lg font-semibold text-[#d9b6ff]">
                          {item.rule}
                        </h4>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-[#9569fe] mb-2">
                        Compliance Need
                      </h5>
                      <p className="text-sm text-[#e0dbfb]/80">
                        {item.requirement}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-[#9569fe] mb-2">
                        Cipherion Approach
                      </h5>
                      <p className="text-sm text-[#e0dbfb]/80">
                        {item.approach}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How Cipherion Secures PII */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              How Cipherion Secures PII?
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {piiBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl border border-[#43256e]/30 p-6 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500 group"
                >
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    movementDuration={1.5}
                    borderWidth={1}
                  />

                  <div className="flex items-start gap-4">
                    <div className="w-fit rounded-lg border border-[#43256e]/50 bg-gradient-to-br from-[#43256e]/30 to-[#18062a]/50 p-3 backdrop-blur-sm">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {benefit.title}
                      </h4>
                      <p className="text-[#e0dbfb]/80 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* PII Data Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              Cipherion PII Flow (Architecture Overview)
            </h3>
            <PIIFlowDiagram />
          </motion.div>
          
          {/* Why Cipherion for PII Compliance*/}
          <WhySection
          title="Why Cipherion for PII Compliance?"
          subtitle="Protect People Without Rebuilding Systems"
          description="Cipherion keeps your PII protected at every stage — without sending it to any third-party vault or compromising application speed."
          benefits={[
            "Secure PII inside your own DB (no external vaults)",
            "Format-preserving tokenization for safe processing",
            "Real-time breach protection with deterministic hashing",
            "APIs for access, download, deletion, and anonymization",
            "Ready for GDPR, CCPA, India DPDP, and more",
          ]}
        />

          {/* Why Cipherion for PII Compliance
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="relative rounded-3xl border border-[#43256e]/30 p-8 bg-[#18062a]/20 backdrop-blur-sm">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                movementDuration={1.5}
                borderWidth={1}
              />

              <h3 className="text-4xl font-bold text-white mb-6">
                Why Cipherion for PII Compliance
              </h3>
              <h4 className="text-2xl font-semibold text-[#d9b6ff] mb-6">
                Protect People Without Rebuilding Systems
              </h4>
              <p className="text-lg text-[#e0dbfb]/80 mb-8 leading-relaxed">
                Cipherion keeps your PII protected at every stage — without
                sending it to any third-party vault or compromising application
                speed.
              </p>

              <h5 className="text-xl font-semibold text-white mb-4">
                Key Benefits:
              </h5>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Secure PII inside your own DB (no external vaults)",
                  "Format-preserving tokenization for safe processing",
                  "Real-time breach protection with deterministic hashing",
                  "APIs for access, download, deletion, and anonymization",
                  "Ready for GDPR, CCPA, India DPDP, and more",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#9569fe] flex-shrink-0" />
                    <span className="text-[#e0dbfb]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div> */}

          {/* Final CTAs for PII */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CtA1 />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
