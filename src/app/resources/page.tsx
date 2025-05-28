"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { FileText, Users, BookOpen, Calendar, Clock, ArrowRight, Book, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GlowingEffect } from "@/components/animated/glowing-card"
import { resourcesData } from "@/data/resource-data"


interface ResourceCardProps {
  item: any
  type: string
  index: number
}

const ResourceCard = ({ item, type, index }: ResourceCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const getSectionIcon = (type: string) => {
    switch (type) {
      case "whitepapers":
        return <FileText className="h-4 w-4 text-[#d9b6ff]" />
      case "case_studies":
        return <Users className="h-4 w-4 text-[#d9b6ff]" />
      case "blogs_insights":
        return <BookOpen className="h-4 w-4 text-[#d9b6ff]" />
      case "articles":
        return <Code className="h-4 w-4 text-[#d9b6ff]" />
      default:
        return <FileText className="h-4 w-4 text-[#d9b6ff]" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        type: "spring",
        stiffness: 140,
        damping: 20,
      }}
      className="group"
    >
      <Link href={item.link}>
        <div className="relative h-full rounded-lg border border-[#43256e]/30 p-1 bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500 cursor-pointer">
          <GlowingEffect
            spread={15}
            glow={true}
            disabled={false}
            proximity={30}
            inactiveZone={0.01}
            movementDuration={1}
            borderWidth={1}
          />

          <div className="relative flex flex-col h-full overflow-hidden rounded-md bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20">
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden rounded-t-md">
              <Image
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02010f]/60 to-transparent" />

              {/* Type badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#18062a]/80 backdrop-blur-sm border border-[#43256e]/50">
                {getSectionIcon(type)}
                <span className="text-xs font-medium text-[#d9b6ff] capitalize">{type.replace("_", " ")}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 space-y-3">
              <h3 className="font-semibold text-white group-hover:text-[#d9b6ff] transition-colors duration-300 leading-tight line-clamp-2">
                {item.title}
              </h3>

              <p className="text-sm text-[#e0dbfb]/80 leading-relaxed line-clamp-3">
                {"description" in item ? item.description : (item as any).excerpt || ""}
              </p>

              {/* Author info */}
              {item.author && (
                <div className="flex items-center gap-2">
                  <Image
                    src={item.author.avatar || "/placeholder.svg"}
                    alt={item.author.name}
                    width={24}
                    height={24}
                    className="rounded-full border border-[#43256e]/50"
                  />
                  <span className="text-xs text-[#e0dbfb]/70">{item.author.name}</span>
                </div>
              )}

              {/* Meta info */}
              <div className="flex items-center gap-4 text-xs text-[#e0dbfb]/60">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(item.published_date)}
                </div>
                {item.reading_time && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.reading_time}
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {(item.tags || []).slice(0, 3).map((tag: string, tagIndex: number) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="bg-[#43256e]/30 text-[#d9b6ff] text-xs border border-[#43256e]/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Read more */}
              <div className="flex items-center gap-1 text-sm text-[#9569fe] group-hover:text-[#d9b6ff] transition-colors duration-300 pt-2">
                <span>Read more</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ResourcesPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  const getSectionIcon = (type: string) => {
    switch (type) {
      case "whitepapers":
        return <FileText className="h-6 w-6 text-[#d9b6ff]" />
      case "case_studies":
        return <Users className="h-6 w-6 text-[#d9b6ff]" />
      case "blogs_insights":
        return <BookOpen className="h-6 w-6 text-[#d9b6ff]" />
      case "articles":
        return <Code className="h-6 w-6 text-[#d9b6ff]" />
      default:
        return <FileText className="h-6 w-6 text-[#d9b6ff]" />
    }
  }

  return (
    <div className="min-h-screen bg-[#02010f] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.01]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#9569fe" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <section ref={containerRef} className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div style={{ y: textY }} className="text-center mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#18062a]/60 backdrop-blur-xl border border-[#9569fe]/20 text-[#d9b6ff] text-sm font-medium">
                <Book className="w-3.5 h-3.5 mr-2" />
                Knowledge Hub
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Resources
              <span className="block text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-[#6d18ff] via-[#9569fe] to-[#d9b6ff] bg-clip-text text-transparent mt-2">
                Whitepapers, Case Studies, Blogs, Articles
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-[#e0dbfb]/80 max-w-4xl mx-auto leading-relaxed"
            >
              {resourcesData.resources.description}
            </motion.p>
          </motion.div>

          {/* Quick navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {resourcesData.resources.sections.map((section) => (
              <Link
                key={section.type}
                href={section.type === "blogs_insights" ? "/resources/blogs" : `#${section.type}`}
                className="group"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18062a]/40 border border-[#43256e]/30 hover:border-[#9569fe]/50 transition-all duration-300">
                  {getSectionIcon(section.type)}
                  <span className="text-sm font-medium text-[#e0dbfb] group-hover:text-[#d9b6ff] transition-colors">
                    {section.title}
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Sections */}
          {resourcesData.resources.sections.map((section, sectionIndex) => (
            <motion.div
              key={section.type}
              id={section.type}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16 lg:mb-20"
            >
              {/* Section header */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {getSectionIcon(section.type)}
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">{section.title}</h2>
                    <p className="text-[#e0dbfb]/80 text-lg max-w-3xl">{section.intro}</p>
                  </div>
                </div>
                {section.type === "blogs_insights" && (
                  <Link href="/resources/blogs">
                    <Button
                      variant="outline"
                      className="border-[#43256e]/50 bg-[#18062a]/40 text-[#e0dbfb] hover:bg-[#43256e]/30 hover:border-[#9569fe]/50"
                    >
                      View All Blogs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>

              {/* Simple Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <ResourceCard key={itemIndex} item={item} type={section.type} index={itemIndex} />
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA Banners */}
       
        </div>
      </section>
    </div>
  )
}
