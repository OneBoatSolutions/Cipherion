import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs, World } from "@/data/globeConfig";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center ">
        <div className="text-center max-w-4xl mx-auto mb-16 mt-16 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span
              className="bg-gradient-to-r from-[#9f00ff] via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold"
              style={{
                textShadow:
                  "1px 0 1px #9f00ff, 0 1px 2px #bf40ff, 1px 0 2px #e0b3ff, 1px 0 1px #ffffff",
              }}
            >
              Quantum-Resilient
            </span>{" "}
            Encryption.
            <span className="block">Zero Trust. Zero Compromise.</span>
          </h1>

          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed px-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Enterprise-grade security built for a post-quantum world—Cipherion
            protects your most sensitive data at the field level, in motion and
            at rest.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            className="px-8 py-3 rounded-lg text-base font-medium"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              border: "none",
            }}
          >
            Request a Demo
          </Button>
          <Button
            className="px-8 py-3 rounded-lg text-base font-medium border"
            style={{
              backgroundColor: "transparent",
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          >
            Explore Solution
          </Button>
        </div>
        <div className="absolute w-full bottom-0  overflow-hidden z-[-1] flex justify-center items-end">
          <div className="w-[1400px] h-[1200px] relative -mb-[800px] opacity-65">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
      </main>
    </>
  );
}
