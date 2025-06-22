"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  Database,
  Server,
  EyeOff,
  UserX,
  Lock,
  Key,
  ChevronDown,
  Eye,
  CreditCard,
  FileText,
  AlertTriangle,
  Sparkles,
  Brain,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GlowingEffect } from "@/components/animated/glowing-card";
import { motion } from "framer-motion";
import Image from "next/image";

export const SensitiveDataCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm md:max-w-md rounded-2xl border border-[#43256e]/30 p-2 md:rounded-3xl md:p-3 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500 group">
      {/* Glow Effect */}
      <GlowingEffect
        spread={40}
        glow
        proximity={64}
        inactiveZone={0.01}
        movementDuration={1.5}
        borderWidth={1}
      />

      {/* Inner Glass Morphic Container */}
      <div className="relative z-10 flex flex-col gap-3 rounded-2xl p-6 bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20 overflow-hidden">
        {/* Decorative SVG Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dots-pattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-2xl flex justify-center font-semibold text-[#ffffff] group-hover:text-[#d9b6ff] transition-colors duration-300">
          Sensitive Data
        </h3>

        {/* Accordion */}
        <Accordion
          type="single"
          defaultValue="pii"
          className="space-y-2 w-full"
        >
          <AccordionItem value="pii">
            <AccordionTrigger className="font-medium text-lg">
              PII
            </AccordionTrigger>
            <AccordionContent className="text-lg ">
              Includes Name, Email, Phone, Address, SSN, etc.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pci">
            <AccordionTrigger className="font-medium text-lg">
              PCI
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Includes Credit Card Number, CVV, Expiry Date, and Billing Info.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="phi">
            <AccordionTrigger className="font-medium text-lg">
              PHI
            </AccordionTrigger>
            <AccordionContent className="text-lg ">
              Includes Medical Records, Diagnoses, Lab Results, and
              Prescriptions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="other">
            <AccordionTrigger className="font-medium text-lg">
              Other
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Includes Biometric Data, Location History, Trade Secrets, etc.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export const CipherionCard: React.FC = () => {
  return (
    /* ── Outer wrapper ────────────────────────────────────────── */
    <div className="relative w-[300px]  rounded-2xl border border-[#43256e]/30 p-2 md:rounded-3xl md:p-3 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500 group">
      <GlowingEffect
        spread={40}
        glow
        proximity={64}
        inactiveZone={0.2}
        movementDuration={1.5}
        borderWidth={1}
      />

      <div className="relative z-10 flex flex-col gap-6 rounded-2xl p-6 bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="cipherion-dots"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cipherion-dots)" />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold flex justify-center text-[#ffffff] group-hover:text-[#d9b6ff] transition-colors duration-300 tracking-wider">
          <Image
            src="/bitmap.png" // path from /public
            alt="Description of the image"
            width={200}
            height={200}
            className="rounded-lg drop-shadow-[0_5px_15px_rgba(149,105,254,0.5)]"
          />
        </h3>

        {/* Status area */}
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center gap-2 bg-[#43256e]/30 px-4 py-2 rounded-xl border border-[#43256e]/40 backdrop-blur-sm">
            <div className="w-3 h-3 bg-[#d9b6ff] rounded-full animate-pulse" />
            <span className=" text-[#e0dbfb]/90 font-mono text-2xl">
              Encrypting…
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ClientDatabaseCard: React.FC = () => {
  return (
    /* ── Outer wrapper ────────────────────────────────────────── */
    <div className="relative w-[300px] max-w-sm md:max-w-md rounded-2xl border border-[#43256e]/30 p-2 md:rounded-3xl md:p-3 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500 group">
      {/* Glow */}
      <GlowingEffect
        spread={40}
        glow
        proximity={64}
        inactiveZone={0.01}
        movementDuration={1.5}
        borderWidth={1}
      />

      {/* ── Inner glass panel ─────────────────────────────────── */}
      <div className="relative z-10 flex flex-col gap-6 rounded-2xl p-6 bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20 overflow-hidden">
        {/* Dotted bg */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="db-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#db-dots)" />
          </svg>
        </div>

     

        {/* Title */}
        <h3 className="text-2xl flex justify-center font-semibold text-[#ffffff] group-hover:text-[#d9b6ff] transition-colors duration-300">
          Client&nbsp;Database
        </h3>

        {/* Content grid */}
        <div className="flex flex-col gap-4">
          {/* secure storage box */}
          <div className="flex flex-col items-center gap-2 bg-[#43256e]/30 p-4 rounded-lg border border-[#43256e]/40 backdrop-blur-sm">
            <Server className="text-[#d9b6ff]" size={32} />
            <div className="text-lg font-semibold text-[#d9b6ff]">
              SECURE STORAGE
            </div>
            <div className="text-lg text-[#e0dbfb]/80 -mt-1">
              Encrypted at Rest
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#43256e]/30 p-3 rounded-lg border border-[#43256e]/40 backdrop-blur-sm">
              <div className="text-lg font-semibold text-[#d9b6ff]">RECORDS</div>
              <div className="text-lg text-white mt-1">1,247,893</div>
            </div>
            <div className="bg-[#43256e]/30 p-3 rounded-lg border border-[#43256e]/40 backdrop-blur-sm">
              <div className="text-lg font-semibold text-[#d9b6ff]">STATUS</div>
              <div className="text-lg text-white mt-1">Online</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );

};


export const DeIdentifiedDataCard: React.FC = () => {
  return (
    <div className="relative w-[400px] max-w-sm md:max-w-md rounded-2xl border border-[#43256e]/30 p-2 md:rounded-3xl md:p-3 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500 group">
      {/* Glow */}
      <GlowingEffect
        spread={40}
        glow
        proximity={64}
        inactiveZone={0.01}
        movementDuration={1.5}
        borderWidth={1}
      />

      {/* Inner Glass Panel */}
      <div className="relative z-10 flex flex-col gap-6 rounded-2xl p-6 bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20 overflow-hidden">
        {/* Dotted Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-deid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-deid)" />
          </svg>
        </div>

        
        

        {/* Title */}
        <h3 className="text-2xl flex justify-center font-semibold text-white group-hover:text-[#d9b6ff] transition-colors duration-300">
          De‑identified Data
        </h3>

        {/* Chat Examples */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#43256e]/30 p-3 rounded-lg border border-[#43256e]/40 backdrop-blur-sm">
            <div className="text-lg font-semibold text-[#d9b6ff] mb-2">CUSTOMER</div>
            <p className="text-lg text-white mb-1">
              Hi, it's [NAME_01], I need to
            </p>
            <p className="text-lg text-white mb-1">
              schedule a follow-up appointment for my
            </p>
            <p className="text-lg text-white">[PROCEDURE_01]. Can you help?</p>
          </div>

        </div>

      </div>
    </div>
  );
};


export const EncryptedDataCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm md:max-w-md rounded-2xl border border-[#43256e]/30 p-2 md:rounded-3xl md:p-3 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500 group">
      {/* Glow */}
      <GlowingEffect
        spread={40}
        glow
        proximity={64}
        inactiveZone={0.01}
        movementDuration={1.5}
        borderWidth={1}
      />

      {/* Inner Container */}
      <div className="relative z-10 flex flex-col gap-6 rounded-2xl p-6 bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20 overflow-hidden">
        {/* Dotted Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-encrypted" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-encrypted)" />
          </svg>
        </div>

       

        {/* Title */}
        <h3 className="text-2xl flex justify-center font-semibold text-white group-hover:text-[#d9b6ff] transition-colors duration-300">
          Encrypted Data
        </h3>

        {/* Content */}
        <div className="flex flex-col gap-3">
          <div className="bg-[#43256e]/30 p-3 rounded-lg border border-[#43256e]/40 backdrop-blur-sm">
            <div className="text-lg font-semibold text-[#d9b6ff] mb-1">ENCRYPTED NAME</div>
            <div className="text-lg text-white font-mono">7A8B9C2D1E3F4G5H</div>
          </div>
          <div className="bg-[#43256e]/30 p-3 rounded-lg border border-[#43256e]/40 backdrop-blur-sm">
            <div className="text-lg font-semibold text-[#d9b6ff] mb-1">ENCRYPTED SSN</div>
            <div className="text-lg text-white font-mono">X9Y8Z7W6V5U4T3S2</div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export const NonSensitiveDataCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm md:max-w-md rounded-2xl border border-[#43256e]/30 p-2 md:p-3 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500 group">
      <GlowingEffect glow spread={40} proximity={64} movementDuration={1.5} borderWidth={1} inactiveZone={0.01} />

      <div className="relative z-10 flex flex-col gap-6 rounded-xl p-6 bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <pattern id="dots-non-sensitive" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-non-sensitive)" />
          </svg>
        </div>

       

        

        <h3 className="text-2xl flex justify-center font-semibold text-white group-hover:text-[#d9b6ff] transition-colors duration-300">
          Non Sensitive Data
        </h3>

        <div className="flex flex-col gap-3">
          <div className="bg-[#43256e]/30 p-3 rounded-lg border border-[#43256e]/40">
            <div className="text-lg font-semibold text-[#d9b6ff] mb-1">PRODUCT NAME</div>
            <div className="text-lg text-white">Premium Software License</div>
          </div>
          <div className="bg-[#43256e]/30 p-3 rounded-lg border border-[#43256e]/40">
            <div className="text-lg font-semibold text-[#d9b6ff] mb-1">CATEGORY</div>
            <div className="text-lg text-white">Enterprise Software</div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export const ThirdPartyLLMCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm md:max-w-md rounded-2xl border border-[#43256e]/30 p-2 md:p-3 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500 group">
      <GlowingEffect glow spread={40} proximity={64} movementDuration={1.5} borderWidth={1} inactiveZone={0.01} />

      <div className="relative z-10 flex flex-col gap-6 rounded-2xl p-6 bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <pattern id="dots-llm" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-llm)" />
          </svg>
        </div>

        

        <h3 className="text-2xl font-semibold text-white group-hover:text-[#d9b6ff] transition-colors duration-300">
          Third Party LLMs
        </h3>

        <div className="flex flex-col gap-3">
          
        </div>
      </div>
    </div>
  );
};
