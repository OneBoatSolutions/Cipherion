"use client";

import WhySection from "@/components/WhySection";
import React, { forwardRef, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
  Landmark,
  Server,
  Smartphone,
  Computer,
  CreditCard,
  History,
  GanttChart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/animated/glowing-card";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/animated/aurora-text";
import { GradientBorder } from "@/components/animated/gradient-border";
import { CtA1 } from "@/components/cta";
import { ReactFlowCanvas } from "@/components/flowcharts/components/main/Canvas";

function DataFlowDiagram() {
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
        {/* Mobile/Web App / API */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Smartphone className="h-8 w-8 text-[#d9b6ff]" />
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
            <p className="text-sm font-medium text-[#e0dbfb]">
              Mobile/Web App / API
            </p>
            <p className="text-xs text-[#e0dbfb]/60">Core Banking System</p>
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

        {/* Cipherion SDK */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl border-2 border-[#9569fe]/70 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Shield className="h-10 w-10 text-[#9569fe]" />
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
            <p className="text-sm font-medium text-[#e0dbfb]">Cipherion SDK</p>
            <p className="text-xs text-[#e0dbfb]/60">
              Encrypt, Tokenize, Mask, Log
            </p>
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

        {/* Database & Integrations */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Database className="h-8 w-8 text-[#d9b6ff]" />
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#d9b6ff]/20 to-[#6d18ff]/20 rounded-2xl blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-[#e0dbfb]">
              Database & Reporting
            </p>
            <p className="text-xs text-[#e0dbfb]/60">3rd-Party Integrations</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const fintechDataMatrix = [
  {
    asset: "Card Numbers (PAN), CVV",
    risk: "PCI-DSS violation, data breach",
    protection:
      "Polymorphic encryption + format-preserving tokenization for safe processing",
    icon: <CreditCard className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    asset: "Customer PII (Aadhaar, PAN, Mobile)",
    risk: "Regulatory fine, trust loss",
    protection:
      "Inline encryption and masking at field/API level without app rewrites",
    icon: <Users className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    asset: "UPI IDs, IFSC, Bank Accounts",
    risk: "Can reveal financial relationships",
    protection: "Tokenized during API exchange, encrypted in reports and DB",
    icon: <Landmark className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    asset: "Loan & Credit Score Info",
    risk: "Prone to leaks during underwriting or ML pipelines",
    protection: "Encrypted and anonymized data pipeline for safe processing",
    icon: <GanttChart className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    asset: "Transaction History & Spend Patterns",
    risk: "Insider misuse or analytics leakage",
    protection:
      "Query-safe encryption with deterministic tokens for filtering without revealing",
    icon: <History className="h-5 w-5 text-[#d9b6ff]" />,
  },
];

const keyBenefits = [
  {
    title: "Plugs Into Your Core Systems",
    description:
      "Cipherion doesn’t replace your infra — it wraps around your payment gateways, banking core APIs, and customer onboarding systems.",
    icon: <Server className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Encrypts, Tokenizes, or Masks Without Breaking UX",
    description:
      "From onboarding to checkout to KYC, Cipherion encrypts sensitive fields while allowing sorting, search, and analytics to function normally.",
    icon: <Lock className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "PCI-DSS, DPDP & GDPR Ready",
    description:
      "Achieve compliance across geographies by applying industry-standard cryptographic controls without outsourcing storage or key management.",
    icon: <Shield className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Tracks and Logs Every Sensitive Access",
    description:
      "Each PII/financial field access is logged with action, origin, and timestamp — ready for internal audits and regulatory inspections.",
    icon: <FileText className="h-6 w-6 text-[#d9b6ff]" />,
  },
];

export default function FintechSolutions() {
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
                  <Landmark className="w-4 h-4 mr-2" />
                  Cipherion for Fintech
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-muted-foreground mb-8 leading-tight"
            >
              Secure Financial Data. Enable Compliance.
              <br />
              <span className="relative">
                <span className="">
                  <AuroraText>Build Trust.</AuroraText>
                </span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-[#e0dbfb]/80 max-w-4xl mx-auto leading-relaxed"
            >
              Cipherion helps fintech platforms secure transaction data,
              customer PII, and sensitive financial flows — enabling PCI-DSS,
              DPDP, and GDPR compliance without changing your backend.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
            </motion.div>
          </motion.div>

          {/* Why Fintech Needs Cipherion Section */}
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
                Why Fintech Needs Cipherion?
              </h3>
              <p className="text-lg text-[#e0dbfb]/80 leading-relaxed">
                Fintech apps, payment processors, and banks handle massive
                volumes of highly sensitive data. Cipherion solves this by
                applying encryption, masking, logging, and tokenization directly
                in your infrastructure.
              </p>
            </div>
          </motion.div>

          {/* What Cipherion Secures Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              Fintech Data Protection Matrix – Cipherion Capabilities
            </h3>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              {fintechDataMatrix.map((item, index) => (
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
                          {item.asset}
                        </h4>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-[#9569fe] mb-2">
                        Risk
                      </h5>
                      <p className="text-sm text-[#e0dbfb]/80">{item.risk}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-[#9569fe] mb-2">
                        Cipherion Protection
                      </h5>
                      <p className="text-sm text-[#e0dbfb]/80">
                        {item.protection}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How Cipherion Works Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              How Cipherion Works in Fintech Environments?
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {keyBenefits.map((benefit, index) => (
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

          {/* Data Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              Cipherion in a Fintech Data Stack
            </h3>
            <DataFlowDiagram />
          </motion.div>

          {/* Why Cipherion for Fintech */}
          <WhySection
            title="Why Cipherion for Fintech?"
            benefits={[
              "Protects PII, cardholder data, and transactions inline",
              "PCI-DSS Section 3.4, 3.5, 10 compliance enabled out-of-the-box",
              "DPDP & GDPR ready with inline consent tagging & masking",
              "Zero-vault architecture — your data stays with you",
              "Minimal latency, compatible with real-time fintech workloads",
              "Integrates with payment APIs, lending engines, BI tools, and CRM",
            ]}
          />

          {/* Final CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
          </motion.div>
        </div>
        <div className="flex w-full justify-center mt-20">
          <CtA1 />
        </div>
      </section>
    </div>
  );
}
