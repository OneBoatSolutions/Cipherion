"use client"; // For enabling on click components
import { Button } from "@/components/ui/button"
import { globeConfig, sampleArcs, World } from "@/data/globeConfig"
import { LampBreak, LampContainer } from "@/components/ui/lamp"
import Features from "@/components/features"
import Faqs from "@/components/faqs"
import { CtA1 } from "@/components/cta"
import { AuroraText } from "@/components/animated/aurora-text"


export default function Home() {

  // Modified to add scroll button
  const scrollToContact = () => {
  const section = document.getElementById("contact-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <>
      {/* Home Screen Section */}
      <main className="relative min-h-screen  flex flex-col items-center justify-center">
        {/* Globe background */}
        <div className="absolute inset-0 opacity-70 w-full">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16 mt-16 md:mt-0 px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
           <AuroraText>Quantum Resilient</AuroraText>
            <span className="block">Zero Trust. Zero Compromise.</span>
          </h1>

          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Enterprise-grade security built for a post-quantum world—Cipherion protects your most sensitive data at the
            field level, in motion and at rest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

            <Button
              className="px-8 py-3 rounded-lg text-base font-medium"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                border: "none",
              }}
              onClick={scrollToContact} // this scrolls to Contact Us
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
              onClick={scrollToContact} // optional, if you want this also to scrolls to Contact Us
            >
              Explore Solution
            </Button>

          </div>
        </div>
      </main>

      {/* Introduction Section */}
      <section className="text-center mx-auto ">
         <LampContainer>
      
        <h1
          className=" text-4xl font-medium tracking-tight md:text-7xl"
         
        >
        Next-Generation <br /> Encryption Platform
        </h1>

        <p className="text-lg md:text-xl mt-6 leading-relaxed max-w-3xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          Cipherion is a next-generation Encryption-as-a-Service (EaaS) platform that integrates seamlessly into your
          systems. With real-time data masking, tokenization, and quantum-resistant architecture, we help you stay
          compliant, secure, and future-proof — no key storage required.
        </p>
      
    </LampContainer>
      </section>

      <section className="">
        <Features/>
        <CtA1/>
      </section>
      <Faqs/>
      

    </>
  )
}
