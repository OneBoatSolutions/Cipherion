"use client";
import Link from "next/link"; // redirect to contact-us in ABOUT US page

import WhySection from "@/components/WhySection";

import React, { forwardRef, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  CreditCard,
  Database,
  Key,
  FileText,
  Users,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Smartphone,
  Server,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/animated/glowing-card";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/animated/aurora-text";
import { GradientBorder } from "@/components/animated/gradient-border";
import { CtA1 } from "@/components/cta";
import { ReactFlowCanvas } from "@/components/flowcharts/components/main/Canvas";
import { Shield } from "lucide-react";

function PaymentDataFlowDiagram() {
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

      {/* Flow: Payment Frontend -> Cipherion SDK -> Merchant API/DB + Audit Logger */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-12">
        {/* Payment Frontend / POS */}
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
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-[#e0dbfb]">
              Payment Frontend / POS
            </p>
            <p className="text-xs text-[#e0dbfb]/60">Card Input</p>
          </div>
        </motion.div>

        {/* Connection Line */}
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
              <Key className="h-10 w-10 text-[#9569fe]" />
            </div>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-[#9569fe]/30 to-[#d9b6ff]/30 rounded-2xl blur-xl"
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-[#e0dbfb]">Cipherion SDK</p>
            <p className="text-xs text-[#e0dbfb]/60">Encrypt PAN & CVV</p>
          </div>
        </motion.div>

        {/* Connection */}
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

        {/* Merchant API / DB */}
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
              animate={{ opacity: [0.5, 1, 0.5] }}
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
              Merchant API / DB
            </p>
            <p className="text-xs text-[#e0dbfb]/60">Store Tokenized Data</p>
          </div>
        </motion.div>

        {/* Connection to Audit Logger */}
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

        {/* Audit Logger + Token Mapper */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <FileText className="h-8 w-8 text-[#d9b6ff]" />
            </div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#d9b6ff]/20 to-[#9569fe]/20 rounded-2xl blur-xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
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
              Audit Logger + Token Mapper
            </p>
            <p className="text-xs text-[#e0dbfb]/60">Log & Map Tokens</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const complianceMatrixPCI = [
  {
    rule: "Req 3.4: Render PAN Unreadable",
    requirement: "PAN must be encrypted, truncated, tokenized, or hashed",
    approach:
      "Cipherion encrypts PANs and CVVs using polymorphic encryption and supports format-preserving tokenization",
    icon: <CreditCard className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    rule: "Req 3.5: Protect Keys",
    requirement: "Keys must be stored securely and access controlled",
    approach:
      "Cipherion uses ephemeral, session-based keys generated at runtime — no static key storage",
    icon: <Key className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    rule: "Req 7: Restrict Access to Cardholder Data",
    requirement: "Limit access to only what’s required for business",
    approach:
      "Cipherion integrates with client-side logic to authorize access based on transaction context, not centralized roles",
    icon: <Users className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    rule: "Req 10: Track & Monitor Access",
    requirement: "Log every access to CHD (Cardholder Data)",
    approach:
      "Built-in access logs capture user ID, transaction type, IP address, and timestamp — streamed to your logging system or SIEM",
    icon: <FileText className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    rule: "Req 9: Physical & Logical Security",
    requirement: "Secure card data in storage and transit",
    approach:
      "Cipherion encrypts data both in transit (API layer) and at rest (DB field-level), ensuring end-to-end security without re-architecting systems",
    icon: <Shield className="h-5 w-5 text-[#d9b6ff]" />,
  },
];

const keyBenefitsPCI = [
  {
    title: "Encrypt PANs and CVVs Inline",
    description:
      "Directly integrate encryption into your card input flows and store tokens instead of raw data — without changing your database schema.",
    icon: <Key className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Tokenize Without Losing Format",
    description:
      "Cipherion provides format-preserving tokenization (FPT) — allowing card number storage for logging, reconciliation, or analytics, without revealing true values.",
    icon: <CreditCard className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Track All Access to CHD",
    description:
      "Each time a PAN or CVV is accessed, the event is logged with metadata. Logs are immutable and audit-ready for PCI-DSS 10.2, 10.3, and 10.6 compliance.",
    icon: <FileText className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Ephemeral Key Handling",
    description:
      "Cipherion avoids long-term storage of encryption keys — using secure session-based key generation and disposal mechanisms.",
    icon: <Shield className="h-6 w-6 text-[#d9b6ff]" />,
  },
];

export default function PCISolutions() {
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
          {/* Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#6d18ff]/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-[#9569fe]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#d9b6ff]/5 rounded-full blur-3xl" />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid-pci"
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
              <rect width="100%" height="100%" fill="url(#grid-pci)" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* PCI Section */}
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
                  <CreditCard className="w-4 h-4 mr-2" />
                  PCI-DSS Compliance Solution
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6d18ff]/10 to-[#9569fe]/10" />
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-muted-foreground mb-8 leading-tight"
            >
              Achieve{" "}
              <span className="relative">
                <AuroraText>PCI-DSS Compliance</AuroraText>
              </span>
              <br />
              Without Moving Cardholder Data
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-[#e0dbfb]/80 max-w-4xl mx-auto leading-relaxed"
            >
              Cipherion secures PANs, CVVs, and transaction metadata inside your
              infrastructure — enabling PCI compliance with field-level
              encryption, tokenization, and real-time audit logs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <GradientBorder>
                <Link href="/about#contact-section" className="w-full md:w-auto">
                <Button className="relative inline-flex rounded-md items-center px-8 py-4 font-semibold overflow-hidden group">
                  <div className="absolute inset-0" />
                  <span className="relative z-10">
                    Request PCI Compliance Demo
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 ml-2" />
                </Button>
                </Link>
              </GradientBorder>
            </motion.div>
          </motion.div>

          {/* What Is PCI-DSS Section */}
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
                What Is PCI-DSS and Who Must Comply?
              </h3>
              <p className="text-lg text-[#e0dbfb]/80 leading-relaxed">
                Payment Card Industry Data Security Standard (PCI-DSS) applies
                to any business that stores, processes, or transmits credit card
                information. Whether you're a fintech startup, online store, or
                payment processor — non-compliance can result in hefty fines,
                audits, and breach liability.
              </p>
            </div>
          </motion.div>

          {/* PCI-DSS Key Elements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              Key Elements PCI-DSS Requires
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Secure storage of cardholder data",
                "Access control",
                "Encryption",
                "Monitoring & logging",
                "Regular testing",
              ].map((text, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-[#18062a]/20 border border-[#43256e]/30 text-sm font-medium text-[#e0dbfb]/90 hover:bg-[#9569fe]/20 transition-colors duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-[#6d18ff] mr-2 flex-shrink-0" />
                  {text}
                </motion.span>
              ))}
            </div>
          </motion.div>
          {/* PCI-DSS Compliance Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              PCI-DSS Compliance Matrix – Cipherion’s Support
            </h3>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              {complianceMatrixPCI.map((item, index) => (
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
                        Requirement
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

          {/* How Cipherion Enables PCI-DSS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              How Cipherion Enables PCI-DSS Compliance?
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {keyBenefitsPCI.map((benefit, index) => (
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
              Payment Data Flow with Cipherion
            </h3>
            <PaymentDataFlowDiagram />
          </motion.div>

            <WhySection
            title="Why Cipherion for PCI-DSS Environments?"
            subtitle="Compliance Without Lock-In or Re-Architecture"
            description="Cipherion fits into your existing payment stack, encrypts data at the source, and logs everything for PCI-DSS audits — without offloading your cardholder data to a third-party vault."
            benefits={[
              "PAN + CVV encryption at input layer",
              "Format-preserving tokenization",
              "Logging built for PCI-DSS Sections 10.2–10.6",
              "Session-based key generation",
              "Works with existing databases, APIs, gateways",
              "No vendor lock-in or shared storage",
            ]}
          />

          {/* Why Cipherion for PCI-DSS
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
                Why Cipherion for PCI-DSS Environments
              </h3>
              <h4 className="text-2xl font-semibold text-[#d9b6ff] mb-6">
                Compliance Without Lock-In or Re-Architecture
              </h4>
              <p className="text-lg text-[#e0dbfb]/80 mb-8 leading-relaxed">
                Cipherion fits into your existing payment stack, encrypts data
                at the source, and logs everything for PCI-DSS audits — without
                offloading your cardholder data to a third-party vault.
              </p>

              <h5 className="text-xl font-semibold text-white mb-4">
                Features You Get:
              </h5>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "PAN + CVV encryption at input layer",
                  "Format-preserving tokenization",
                  "Logging built for PCI-DSS Sections 10.2–10.6",
                  "Session-based key generation",
                  "Works with existing databases, APIs, gateways",
                  "No vendor lock-in or shared storage",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#9569fe] flex-shrink-0" />
                    <span className="text-[#e0dbfb]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div> */}

          {/* Final CTAs */}
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
