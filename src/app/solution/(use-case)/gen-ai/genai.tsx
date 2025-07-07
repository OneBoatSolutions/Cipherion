"use client";
import Link from "next/link"; // redirect to contact-us in ABOUT US page

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Shield,
  Brain,
  FileText,
  Users,
  Eye,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Database,
  Server,
  Sparkles,
  Filter,
  ScanLine,
  VenetianMaskIcon as Mask,
  Settings,
  BarChart3,
  FileSearch,
} from "lucide-react";
import { GlowingEffect } from "@/components/animated/glowing-card";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/animated/aurora-text";
import { GradientBorder } from "@/components/animated/gradient-border";
import { Separator } from "@/components/ui/separator";
import { CtA1 } from "@/components/cta";

function GenAIFlowDiagram() {
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
        {/* User Prompt */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Users className="h-8 w-8 text-[#d9b6ff]" />
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
            <p className="text-sm font-medium text-[#e0dbfb]">User Prompt</p>
            <p className="text-xs text-[#e0dbfb]/60">Contains PII/PHI</p>
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="hidden lg:block">
          <ArrowRight className="h-6 w-6 text-[#9569fe]" />
        </div>
        <div className="lg:hidden">
          <motion.div
            className="h-8 w-1 bg-gradient-to-b from-[#6d18ff] to-[#9569fe] rounded-full mx-auto"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        {/* Cipherion Filter */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl border-2 border-[#9569fe]/70 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Filter className="h-10 w-10 text-[#9569fe]" />
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
              Cipherion Filter
            </p>
            <p className="text-xs text-[#e0dbfb]/60">+ Tokenizer</p>
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="hidden lg:block">
          <ArrowRight className="h-6 w-6 text-[#9569fe]" />
        </div>
        <div className="lg:hidden">
          <motion.div
            className="h-8 w-1 bg-gradient-to-b from-[#7143fe] to-[#d9b6ff] rounded-full mx-auto"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </div>

        {/* LLM/GenAI API */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Brain className="h-8 w-8 text-[#d9b6ff]" />
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
            <p className="text-sm font-medium text-[#e0dbfb]">LLM / GenAI</p>
            <p className="text-xs text-[#e0dbfb]/60">API</p>
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="hidden lg:block">
          <ArrowRight className="h-6 w-6 text-[#9569fe]" />
        </div>
        <div className="lg:hidden">
          <motion.div
            className="h-8 w-1 bg-gradient-to-b from-[#9569fe] to-[#d9b6ff] rounded-full mx-auto"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          />
        </div>

        {/* Output Scrubber */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <ScanLine className="h-8 w-8 text-[#d9b6ff]" />
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
              Output Scrubber
            </p>
            <p className="text-xs text-[#e0dbfb]/60">Validation</p>
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="hidden lg:block">
          <ArrowRight className="h-6 w-6 text-[#9569fe]" />
        </div>
        <div className="lg:hidden">
          <motion.div
            className="h-8 w-1 bg-gradient-to-b from-[#d9b6ff] to-[#6d18ff] rounded-full mx-auto"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          />
        </div>

        {/* User/Logs/App */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Server className="h-8 w-8 text-[#d9b6ff]" />
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
                delay: 2.5,
              }}
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-[#e0dbfb]">
              User / Logs / App
            </p>
            <p className="text-xs text-[#e0dbfb]/60">Secure Output</p>
          </div>
        </motion.div>
      </div>

      {/* Consent Manager - Bottom */}
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
              Consent Manager
            </p>
            <p className="text-xs text-[#e0dbfb]/60">+ Prompt Logger</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function MaskingFlowDiagram() {
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
        {/* Client DB */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Database className="h-8 w-8 text-[#d9b6ff]" />
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
            <p className="text-sm font-medium text-[#e0dbfb]">Client DB</p>
            <p className="text-xs text-[#e0dbfb]/60">Raw Data</p>
          </div>
        </motion.div>

        {/* Bidirectional Arrow */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-2">
            <ArrowRight className="h-6 w-6 text-[#9569fe]" />
            <ArrowRight className="h-6 w-6 text-[#9569fe] rotate-180" />
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex flex-col items-center gap-2">
            <motion.div
              className="h-8 w-1 bg-gradient-to-b from-[#6d18ff] to-[#9569fe] rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="h-8 w-1 bg-gradient-to-t from-[#6d18ff] to-[#9569fe] rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </div>
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
              <Mask className="h-10 w-10 text-[#9569fe]" />
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
            <p className="text-xs text-[#e0dbfb]/60">Mask + Tokenize</p>
          </div>
        </motion.div>

        {/* Bidirectional Arrow */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-2">
            <ArrowRight className="h-6 w-6 text-[#9569fe]" />
            <ArrowRight className="h-6 w-6 text-[#9569fe] rotate-180" />
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex flex-col items-center gap-2">
            <motion.div
              className="h-8 w-1 bg-gradient-to-b from-[#7143fe] to-[#d9b6ff] rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.div
              className="h-8 w-1 bg-gradient-to-t from-[#7143fe] to-[#d9b6ff] rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
            />
          </div>
        </div>

        {/* Client API */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Server className="h-8 w-8 text-[#d9b6ff]" />
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
            <p className="text-sm font-medium text-[#e0dbfb]">Client API</p>
            <p className="text-xs text-[#e0dbfb]/60">Masked Data</p>
          </div>
        </motion.div>

        {/* Bidirectional Arrow */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-2">
            <ArrowRight className="h-6 w-6 text-[#9569fe]" />
            <ArrowRight className="h-6 w-6 text-[#9569fe] rotate-180" />
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex flex-col items-center gap-2">
            <motion.div
              className="h-8 w-1 bg-gradient-to-b from-[#9569fe] to-[#d9b6ff] rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            />
            <motion.div
              className="h-8 w-1 bg-gradient-to-t from-[#9569fe] to-[#d9b6ff] rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            />
          </div>
        </div>

        {/* End Users */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-2 border-[#43256e]/50 bg-gradient-to-br from-[#18062a]/80 to-[#02010f]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <Users className="h-8 w-8 text-[#d9b6ff]" />
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
            <p className="text-sm font-medium text-[#e0dbfb]">User, Analyst</p>
            <p className="text-xs text-[#e0dbfb]/60">App, Auditor</p>
          </div>
        </motion.div>
      </div>

      {/* Masking Rules - Bottom */}
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
              <Settings className="h-6 w-6 text-[#d9b6ff]" />
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
            <p className="text-xs font-medium text-[#e0dbfb]">Masking Rules</p>
            <p className="text-xs text-[#e0dbfb]/60">+ Logging Engine</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const genAIRisks = [
  {
    title: "They may retain sensitive training inputs",
    description:
      "LLMs can memorize and later reproduce sensitive data from training sets",
    icon: <Database className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    title: "They can hallucinate or leak internal data",
    description:
      "Models may generate false information or accidentally expose private data",
    icon: <Brain className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    title: "Prompts may contain PII, PHI, or financial information",
    description:
      "User inputs often include sensitive personal or business information",
    icon: <Users className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    title: "Output can accidentally include regulated data",
    description:
      "AI responses might contain sensitive information that should be protected",
    icon: <FileText className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    title: "They often lack purpose limitation or consent compliance",
    description: "Many AI systems don't properly manage data usage permissions",
    icon: <Shield className="h-5 w-5 text-[#d9b6ff]" />,
  },
];

const complianceMatrix = [
  {
    category: "Prompt Injection",
    threat: "Attackers insert crafted inputs to extract private info",
    response:
      "Cipherion sanitizes and tokenizes user prompts before passing them to GenAI",
    icon: <AlertTriangle className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    category: "Training on Sensitive Data",
    threat:
      "LLM fine-tuned on raw customer data may leak it in future responses",
    response:
      "Cipherion enforces tokenized training datasets — replacing PII with pseudonyms",
    icon: <Database className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    category: "PII in Prompts or Responses",
    threat: "Users enter or receive Aadhaar, PAN, contact info in chatbot",
    response:
      "Cipherion masks or encrypts sensitive fields before reaching the model",
    icon: <Eye className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    category: "No Consent for AI Usage",
    threat: "Data processed by GenAI systems without explicit consent",
    response:
      "Cipherion appends consent flags and policy constraints to prompt context",
    icon: <Users className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    category: "Model Output Logging",
    threat:
      "LLM logs or memory store raw conversations containing personal data",
    response:
      "Cipherion scrubs and anonymizes logs before storage, complying with DPDP/GDPR",
    icon: <FileText className="h-5 w-5 text-[#d9b6ff]" />,
  },
];

const cipherionCapabilities = [
  {
    title: "Pre-Model Data Sanitization",
    description:
      "Cipherion filters, tokenizes, or encrypts sensitive elements in the prompt — such as names, numbers, and medical or financial terms — before sending data to an LLM or image generator.",
    icon: <Filter className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Post-Model Output Scrubbing",
    description:
      "All GenAI responses are scanned for potential sensitive information before they reach the user, API, or are logged — ensuring no reverse leakage.",
    icon: <ScanLine className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Prompt Policy Enforcement",
    description:
      "Add fine-grained control over what kinds of prompts or data can be processed — e.g., block confidential IDs, prevent model queries on sensitive case records, or apply purpose restrictions.",
    icon: <Shield className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Anonymized Fine-Tuning / RAG",
    description:
      "Train or retrieve on encrypted, anonymized datasets — allowing your organization to use internal data safely for LLM fine-tuning or Retrieval-Augmented Generation (RAG).",
    icon: <Brain className="h-6 w-6 text-[#d9b6ff]" />,
  },
];

const dataMaskingUseCases = [
  {
    useCase: "App User View",
    needsMasking: "Show only last 4 digits of a PAN, Aadhaar, or phone number",
    strategy: "Apply partial masking: ********1234 via inline masking filters",
    icon: <Eye className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    useCase: "Support / QA Teams",
    needsMasking:
      "Test environments require realistic data without exposing it",
    strategy:
      "Use reversible format-preserving tokens with masking rules for controlled environments",
    icon: <Settings className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    useCase: "Third-Party Tools",
    needsMasking:
      "Analytics, CRM, or BI tools shouldn't see real personal data",
    strategy:
      "Mask or anonymize PII fields via API responses using Cipherion middleware",
    icon: <BarChart3 className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    useCase: "Log Files",
    needsMasking:
      "Prevent sensitive data from leaking in logs or crash reports",
    strategy: "Mask personal fields in logs before they're written or exported",
    icon: <FileText className="h-5 w-5 text-[#d9b6ff]" />,
  },
  {
    useCase: "Audit Reports",
    needsMasking: "Show masked values during compliance audits or exports",
    strategy:
      "Generate dual-layer reports (masked + traceable with access rights) using Cipherion export modules",
    icon: <FileSearch className="h-5 w-5 text-[#d9b6ff]" />,
  },
];

const maskingCapabilities = [
  {
    title: "Inline Field Masking Without Code Change",
    description:
      "Apply masking rules directly at the database or API response level — e.g., emails, mobile numbers, IDs — without modifying your frontend or backend code.",
    icon: <Database className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Context-Based Masking",
    description:
      "Apply different masking levels based on user context — show full values to admin APIs but masked values to frontend dashboards or test users.",
    icon: <Users className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Logging Masked by Default",
    description:
      "Ensure logs, debug outputs, and analytics queries never reveal actual PII/PHI/PAN values — masking is enforced at the SDK level.",
    icon: <FileText className="h-6 w-6 text-[#d9b6ff]" />,
  },
  {
    title: "Analytics-Safe Data",
    description:
      "Keep structure and format intact so masked data can still be used in reports and dashboards without risking privacy.",
    icon: <BarChart3 className="h-6 w-6 text-[#d9b6ff]" />,
  },
];

const dataMaskingBenefits = [
  "Protect production databases",
  "Meet compliance (GDPR, DPDP, HIPAA, PCI-DSS)",
  "Allow safe testing, QA, and analytics without revealing real data",
  "Prevent insider misuse",
];

const maskingKeyBenefits = [
  "Partial & full masking support",
  "Regex-based and dynamic masking rules",
  "Inline masking at DB, API, or middleware layers",
  "Works for PII, PHI, PAN, Aadhaar, UPI, email, etc.",
  "Format-preserving tokens for QA environments",
  "No change to your existing storage or codebase",
];

export default function GenAIPrivacy() {
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
                  id="grid-genai"
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
              <rect width="100%" height="100%" fill="url(#grid-genai)" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <section
        ref={containerRef}
        className="relative py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div style={{ y: textY }} className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="inline-block"
            >
              <div className="relative">
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-[#18062a]/60 backdrop-blur-xl border border-[#9569fe]/20 text-[#d9b6ff] text-sm font-medium mb-8">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Privacy-First GenAI Solution
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6d18ff]/10 to-[#9569fe]/10" />
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-muted-foreground mb-8 leading-tight"
            >
              <span className="relative">
                <AuroraText>Privacy-First GenAI:</AuroraText>
              </span>
              <br />
              Protect Sensitive Data in AI Workflows
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-[#e0dbfb]/80 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Cipherion secures personally identifiable, financial, or regulated
              data that passes through LLMs or GenAI systems — without
              compromising model performance or usability.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <GradientBorder>
                <Button className="relative inline-flex rounded-md items-center px-8 py-4 font-semibold overflow-hidden group">
                  <span className="relative z-10">
                    Secure Your GenAI Pipeline
                  </span>
                  <ArrowRight className="w-5 h-5 ml-2 relative z-10" />
                </Button>
              </GradientBorder>
              <Link href="/about#contact-section" className="w-full md:w-auto">
              <Button
                variant="outline"
                className="bg-transparent border-[#43256e]/50 text-[#d9b6ff] hover:bg-[#18062a]/50 px-8 py-4"
              >
                Request Privacy Toolkit
              </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Why GenAI Raises New Privacy Risks */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              Why GenAI Raises New Privacy Risks?
            </h2>
            <p className="text-lg text-[#e0dbfb]/80 text-center mb-12 max-w-4xl mx-auto">
              Generative AI (GenAI) systems such as LLMs, image models, and
              chatbots pose unique risks:
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {genAIRisks.map((risk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl border border-[#43256e]/30 p-6 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500"
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
                      {risk.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {risk.title}
                      </h3>
                      <p className="text-[#e0dbfb]/80 text-sm">
                        {risk.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-[#e0dbfb]/80 text-center mt-12 max-w-4xl mx-auto"
            >
              Cipherion helps mitigate these risks by embedding
              privacy-preserving encryption, masking, and monitoring into your
              GenAI pipeline — all while keeping data within your
              infrastructure.
            </motion.p>
          </motion.div>

          {/* GenAI Privacy Compliance Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              GenAI Privacy Compliance Matrix – Cipherion Controls
            </h2>
            <div className="space-y-6">
              {complianceMatrix.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl border border-[#43256e]/30 p-6 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500"
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
                        <h3 className="text-lg font-semibold text-[#d9b6ff]">
                          {item.category}
                        </h3>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[#9569fe] mb-2">
                        Example Threat
                      </h4>
                      <p className="text-sm text-[#e0dbfb]/80">{item.threat}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[#9569fe] mb-2">
                        Cipherion Response
                      </h4>
                      <p className="text-sm text-[#e0dbfb]/80">
                        {item.response}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How Cipherion Enables Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              How Cipherion Enables Privacy in GenAI Systems
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {cipherionCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl border border-[#43256e]/30 p-6 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500"
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
                      {capability.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {capability.title}
                      </h3>
                      <p className="text-[#e0dbfb]/80 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cipherion in the GenAI Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Cipherion in the GenAI Stack
            </h2>
            <GenAIFlowDiagram />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="relative rounded-3xl p-8">
              <h2 className="text-4xl font-bold text-white mb-6 flex justify-center">
                Why Cipherion for GenAI Privacy
              </h2>
              <h3 className="text-2xl font-semibold text-[#d9b6ff] mb-6 flex justify-center">
                Guardrails Without Bottlenecks
              </h3>
              <p className="text-lg text-[#e0dbfb]/80 mb-8 leading-relaxed flex justify-center">
                Cipherion gives you privacy controls that run inline with your
                GenAI stack — no need to modify your model or switch vendors.
              </p>

              <h4 className="text-xl font-semibold text-white mb-4 flex justify-center">
                You Get:
              </h4>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  "Prompt sanitization and field masking",
                  "Output validation and scrubbing",
                  "Tokenized datasets for training/fine-tuning",
                  "Consent-tagged prompt flows",
                  "DPDP / GDPR / HIPAA / PCI support",
                  "Deployable with OpenAI, Azure OpenAI, Claude, LLaMA, Falcon, etc.",
                ].map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-[#18062a]/20 border border-[#43256e]/30 text-sm font-medium text-[#e0dbfb]/90 hover:bg-[#9569fe]/20 transition-colors duration-300"
                  >
                    <CheckCircle className="h-5 w-5 text-[#6d18ff] mr-2 flex-shrink-0" />
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* Final CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientBorder>
                  <Button className="relative inline-flex rounded-md items-center px-8 py-4 font-semibold overflow-hidden group">
                    <span className="relative z-10">
                      Start Free LLM Privacy Audit
                    </span>
                    <ArrowRight className="w-5 h-5 ml-2 relative z-10" />
                  </Button>
                </GradientBorder>
                <Link href="/about#contact-section" className="w-full md:w-auto">
                <Button
                  variant="outline"
                  className="bg-transparent border-[#43256e]/50 text-[#d9b6ff] hover:bg-[#18062a]/50 px-8 py-4"
                >
                  Talk to AI Security Engineer
                </Button>
                </Link>
              </div>
            </div>
          </motion.div>



          {/* Data Masking Section */}
          <Separator/>
                <div className="mt-36 flex justify-center">
          <motion.div   
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="inline-block"
            >
              <div className="relative">
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-[#18062a]/60 backdrop-blur-xl border border-[#9569fe]/20 text-[#d9b6ff] text-sm font-medium mb-8">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Privacy-First GenAI Solution
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6d18ff]/10 to-[#9569fe]/10" />
                </span>
              </div>
            </motion.div>
            </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold text-muted-foreground mb-8 leading-tight"
              >
                Protect Sensitive Data with{" "}
                <span className="relative">
                  <AuroraText>Real-Time Data Masking</AuroraText>
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-[#e0dbfb]/80 max-w-4xl mx-auto leading-relaxed mb-8"
              >
                Cipherion enables on-the-fly masking of sensitive fields — like
                PII, PHI, PANs — right within your databases, APIs, and apps,
                without changing your infrastructure.
              </motion.p>

              {/* Data Masking CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <GradientBorder>
                  <Button className="relative inline-flex rounded-md items-center px-8 py-4 font-semibold overflow-hidden group">
                    <span className="relative z-10">Try Masking Toolkit</span>
                    <ArrowRight className="w-5 h-5 ml-2 relative z-10" />
                  </Button>
                </GradientBorder>
                <Link href="/about#contact-section" className="w-full md:w-auto">
                <Button
                  variant="outline"
                  className="bg-transparent border-[#43256e]/50 text-[#d9b6ff] hover:bg-[#18062a]/50 px-8 py-4"
                >
                  Schedule Live Demo
                </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* What Is Data Masking */}
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
                What Is Data Masking and Why It's Needed?
              </h3>
              <p className="text-lg text-[#e0dbfb]/80 leading-relaxed mb-8">
                Data masking refers to the obfuscation of real data — partially
                or fully — to prevent exposure during software development,
                support, analytics, and unauthorized access. Unlike encryption
                (which is reversible with keys), masked data is made permanently
                non-identifiable or partially viewable.
              </p>

              <h4 className="text-xl font-semibold text-white mb-4">
                Industries use data masking to:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {dataMaskingBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#9569fe] flex-shrink-0" />
                    <span className="text-[#e0dbfb]/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Data Masking Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              Data Masking Matrix – Cipherion Capabilities
            </h3>
            <div className="space-y-6">
              {dataMaskingUseCases.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl border border-[#43256e]/30 p-6 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500"
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
                          {item.useCase}
                        </h4>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-[#9569fe] mb-2">
                        What Needs Masking?
                      </h5>
                      <p className="text-sm text-[#e0dbfb]/80">
                        {item.needsMasking}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-[#9569fe] mb-2">
                        Cipherion Masking Strategy
                      </h5>
                      <p className="text-sm text-[#e0dbfb]/80">
                        {item.strategy}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How Cipherion Applies Data Masking */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              How Cipherion Applies Data Masking?
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {maskingCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl border border-[#43256e]/30 p-6 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500"
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
                      {capability.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {capability.title}
                      </h4>
                      <p className="text-[#e0dbfb]/80 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Masking Flow Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              Cipherion Masking Flow Architecture
            </h3>
            <MaskingFlowDiagram />
          </motion.div>

          {/* Why Cipherion for Data Masking */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="relative rounded-3xl backdrop-blur-sm">
            

              <h3 className="text-4xl font-bold text-white mb-6 text-center">
                Why Cipherion for Data Masking?
              </h3>
              <h4 className="text-2xl font-semibold text-[#d9b6ff] mb-6 text-center">
                Smart Masking Without Breaking Functionality
              </h4>
              <p className="text-lg text-[#e0dbfb]/80 mb-8 leading-relaxed text-center">
                Cipherion masks data with minimal performance impact and maximal
                control — enabling compliance, analytics, and testing
                simultaneously.
              </p>

              <h5 className="text-xl font-semibold text-white mb-4 text-center">
                Key Benefits:
              </h5>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {maskingKeyBenefits.map((benefit, index) => (
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

              {/* Masking CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientBorder>
                  <Button className="relative inline-flex rounded-md items-center px-8 py-4 font-semibold overflow-hidden group">
                    <span className="relative z-10">
                      Launch Masking Dashboard
                    </span>
                    <ArrowRight className="w-5 h-5 ml-2 relative z-10" />
                  </Button>
                </GradientBorder>
                <Link href="/about#contact-section" className="w-full md:w-auto">
                <Button
                  variant="outline"
                  className="bg-transparent border-[#43256e]/50 text-[#d9b6ff] hover:bg-[#18062a]/50 px-8 py-4"
                >
                  Talk to Integration Specialist
                </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-40">
        </div>
        <CtA1/>
      </section>
    </div>
  );
}
