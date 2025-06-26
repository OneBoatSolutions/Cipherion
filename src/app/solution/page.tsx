"use client"
import { CtA1, CtA2 } from '@/components/cta'
import { ReactFlowCanvas } from '@/components/flowcharts/components/main/Canvas'
import React, { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion"
import { Zap } from 'lucide-react'
import { AuroraText } from '@/components/animated/aurora-text'
import { BentoDemo } from './_components/SolutionGrid'

function page() {
    const containerRef = useRef(null)
      const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
      })
    
      const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
      const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
    
  return (
    <div className='h-auto mt-20 space-y-2'>
        <div className=" bg-transparent relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0">
                <motion.div style={{ y: backgroundY }} className="absolute inset-0">
                  <div className="absolute inset-0 opacity-[0.02]">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="pricing-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#9569fe" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#pricing-grid)" />
                    </svg>
                  </div>
                </motion.div>
              </div>
        
              <section ref={containerRef} className="relative  px-4 sm:px-6 lg:px-8">
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
                          <Zap className="w-4 h-4 mr-2" />
                          Solution
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6d18ff]/10 to-[#9569fe]/10" />
                        </span>
                      </div>
                    </motion.div>
        
                    <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
                    >
                      <span className="relative">
                        <AuroraText>
                            Cipherion Solution
                        </AuroraText>
                        <motion.div
                          className="absolute -inset-2  blur-xl rounded-lg"
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />
                      </span>
                    </motion.h2>
        
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="text-xl text-[#e0dbfb]/80 max-w-4xl mx-auto leading-relaxed"
                    >
                      Quantum Resilient <br className="hidden md:block" />
                      Encryption
                    </motion.p>
                  </motion.div>
                 
                </div>
              </section>
            </div>
       
        <ReactFlowCanvas/>
        <BentoDemo/>
       <CtA1/>
    </div>
  )
}

export default page
