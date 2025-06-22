"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Globe2 } from "lucide-react";
import { AuroraText } from "@/components/animated/aurora-text"; 
import CipherionTimeline from "@/components/CipherionStory";
import { CtA1, CtA2 } from "@/components/cta";


const corePrinciples = [
  {
    id: 1,
    title: "Fearless Security",
    description:
      "Quantum‑resilient, zero‑trust encryption that stands up to tomorrow’s threats—today.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Borderless Privacy",
    description:
      "Compliance‑ready across GDPR, HIPAA, PCI‑DSS and more, delivered without vendor lock‑in.",
    icon: Globe2,
  },
];

// ────────────────────────────────────────────────────────────────
//  Page Component
// ────────────────────────────────────────────────────────────────
const Page = () => {
  return (
    <section className="w-full mt-20 bg-background text-[#e0dbfb] px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <AuroraText className="text-4xl md:text-6xl font-extrabold">
              About Cipherion
            </AuroraText>

            <p className="mt-4 text-lg md:text-2xl text-[#e0dbfb]/90 max-w-xl mx-auto lg:mx-0">
              Building a world where data privacy is not an afterthought—but a promise.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-xl overflow-hidden  bg-[#02010f] shadow-lg flex justify-center items-center"
        >
          <Image
            src="/banner1.png"
            alt="Cipherion Banner"
            width={640}
            height={400}
            priority
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto py-20 space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AuroraText className="text-3xl md:text-4xl font-bold">Our Mission</AuroraText>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg leading-relaxed text-[#e0dbfb]/80"
        >
          At Cipherion, our mission is to redefine data security for the modern, connected world by
          delivering <span className="text-white font-semibold">quantum‑resilient, zero‑trust encryption</span> that is keyless by design and compliance‑ready at scale. We empower enterprises to secure every data field, transaction, and access point— <em>without complexity, compromise, or vendor lock‑in</em>. By eliminating the limitations of legacy encryption, we’re building a future where privacy is not just protected, but assured—globally, instantly, and irreversibly.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2">
          {corePrinciples.map(({ id, title, description, icon: Icon }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: id * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-[#43256e]/50 to-[#18062a]/50 border border-[#43256e]/40">
                <Icon className="h-6 w-6 text-[#d9b6ff]" />
              </div>
              <div>
                <AuroraText className="text-xl font-semibold mb-1" colors={['#6d18ff','#d9b6ff' ,'#6d18ff', '#6d18ff', '#5e0695']}>{title}</AuroraText>
                <p className="text-sm text-[#e0dbfb]/80 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CipherionTimeline/>
      <div className="mt-20">

      </div>
      <CtA1/>
    </section>
  );
};

export default Page;
