import React from 'react'
import Link from 'next/link'
import { CardSpotlight } from './animated/card-spotlight'
import { GlowingEffect } from './animated/glowing-card'
import { Button } from './ui/button'
import { AuroraText } from './animated/aurora-text'
function CtA1() {
  return (
    <div className="w-full flex flex-col px-4 justify-center items-center gap-10 mt-20">
      
      <CardSpotlight className="max-w-max h-[350px] z[-1]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          movementDuration={1.5}
          borderWidth={1}
        />
        <h2 className="text-muted text-xl md:text-3xl w-full text-center font-semibold z-20 relative px-2 md:px-4">
          Ready to Secure Your Data with
        </h2>

        <h2 className="text-2xl md:text-4xl mt-2 font-bold text-center px-2">
          <AuroraText>Quantum-Resilient Encryption?</AuroraText>
        </h2>

        <p className="w-full md:w-[80%] mt-2 text-center relative z-20 text-sm md:text-base px-2">
          Schedule a personalized demo today and discover how our{" "}
          <span className="">field-level encryption</span> can transform your security posture.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center relative z-20 w-full px-4">
        <Link href="/about#contact-section" className="w-full md:w-auto">
          <Button variant="default" className="w-full md:w-auto">
            Get a Demo
          </Button>
        </Link>
        <Link href="/about#contact-section" className="w-full md:w-auto">
          <Button variant="outline" className="w-full md:w-auto">
            Explore Solutions
          </Button>
        </Link>
      </div>
      </CardSpotlight>
    </div>
  );
}


function CtA2() {
return (
    <div className="w-full flex flex-col px-4 justify-center items-center gap-10">
 <CardSpotlight className="max-w-max h-[320px]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          movementDuration={1.5}
          borderWidth={1}
        />
        <h2 className="text-white text-2xl w-full flex justify-center font-semibold z-20 relative text-center">
          Explore our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">API Documentation</span>
        </h2>
        <p className="text-neutral-300 mt-4 w-[80%] text-center relative z-20">
          Comprehensive guide covering <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">endpoints</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400">requests</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">schemas</span>, and code examples in multiple languages.
        </p>
        <div className="flex gap-4 mt-6 justify-center relative z-20">
          <Link href="/docs/api">
            <Button variant="default">View API Reference</Button>
          </Link>
          <Link href="/get-api-key">
            <Button variant="outline">Get API Key</Button>
          </Link>
        </div>
      </CardSpotlight>
    </div>
  )
}

export { CtA1, CtA2 }
