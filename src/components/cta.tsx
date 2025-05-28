import React from 'react'
import { CardSpotlight } from './animated/card-spotlight'
import Link from 'next/link'
import { GlowingEffect } from './animated/glowing-card'
import { Button } from './ui/button'
function CtA() {
  return (
    <div className='w-full flex px-4 justify-center  items-center'>
      
      <CardSpotlight className="max-w-max h-[350px]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          movementDuration={1.5}
          borderWidth={1}
        />
        <h2 className="text-white text-2xl w-full flex justify-center font-semibold z-20 relative">
          Ready to Secure Your Data with Quantum-Resilient Encryption?
        </h2>
        <p className="text-neutral-300 mt-4 w-[80%] flex justify-center relative z-20">
          Schedule a personalized demo today and discover how our field-level encryption can transform your security posture.
        </p>
        <div className="flex gap-4 mt-6 relative z-20">
          <Link href="/demo">
            <Button variant="default">
              Get a Demo
            </Button>
          </Link>
          <Link href="/solutions">
            <Button variant="outline">
              Explore Solutions
            </Button>
          </Link>
        </div>
      </CardSpotlight>
    </div>
  )
}

export { CtA }
