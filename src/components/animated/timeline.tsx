"use client"
import { useScroll, useTransform, motion, useInView } from "motion/react"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { GlowingEffect } from "./glowing-card" 
import { Sparkles } from "lucide-react"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full bg-[#02010f] font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-[#ffffff] max-w-4xl font-semibold">The Cipherion Story</h2>
        <p className="text-[#e0dbfb]/80 text-sm md:text-base max-w-sm">
          From a college mini project to enterprise-grade quantum-resilient encryption. Here's our journey of redefining
          data security.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#43256e] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#6d18ff] via-[#9569fe] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

const TimelineItem = ({ item, index }: { item: TimelineEntry; index: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="flex justify-start pt-10 md:pt-40 md:gap-10"
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#18062a] border border-[#43256e] flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-[#6d18ff] border border-[#9569fe] p-2" />
        </div>
        <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[#9569fe]">{item.title}</h3>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <div className="relative rounded-2xl border border-[#43256e]/30 p-2 md:rounded-3xl md:p-3 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500 group">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            movementDuration={1.5}
            borderWidth={1}
          />

          {/* Glass-morphic inner container */}
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id={`dots-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#9569fe" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
              </svg>
            </div>

            {/* Floating sparkles */}
            <motion.div
              className="absolute top-4 right-4 w-3 h-3 text-[#d9b6ff]/40"
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.5,
              }}
            >
              <Sparkles className="w-full h-full" />
            </motion.div>

            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#9569fe]">{item.title}</h3>

            <div className="relative">{item.content}</div>

            {/* Bottom accent line */}
            <motion.div
              className="h-1 bg-gradient-to-r from-[#6d18ff] via-[#9569fe] to-[#d9b6ff] rounded-full mt-4 origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
