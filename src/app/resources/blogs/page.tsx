"use client"

import { useRef, useState, useMemo } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { BookOpen, Calendar, Clock, Search, Filter, ArrowRight, X, Book } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlowingEffect } from "@/components/animated/glowing-card"
import { resourcesData } from "@/data/resource-data"

interface BlogCardProps {
  blog: any
  index: number
}

const BlogCard = ({ blog, index }: BlogCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

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
        delay: index * 0.08,
        type: "spring",
        stiffness: 140,
        damping: 20,
      }}
      className="group"
    >
      <Link href={blog.link}>
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
                src={blog.thumbnail || "/placeholder.svg"}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02010f]/60 to-transparent" />

              {/* Blog badge */}
              <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-[#18062a]/80 backdrop-blur-sm border border-[#43256e]/50">
                <span className="text-xs font-medium text-[#d9b6ff]">Blog</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 space-y-3">
              <h3 className="font-semibold text-white group-hover:text-[#d9b6ff] transition-colors duration-300 leading-tight line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-sm text-[#e0dbfb]/80 leading-relaxed line-clamp-3">{blog.excerpt}</p>

              {/* Author info */}
              {blog.author && (
                <div className="flex items-center gap-2">
                  <Image
                    src={blog.author.avatar || "/placeholder.svg"}
                    alt={blog.author.name}
                    width={24}
                    height={24}
                    className="rounded-full border border-[#43256e]/50"
                  />
                  <span className="text-xs text-[#e0dbfb]/70">{blog.author.name}</span>
                </div>
              )}

              {/* Meta info */}
              <div className="flex items-center gap-4 text-xs text-[#e0dbfb]/60">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(blog.published_date)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {blog.reading_time}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {(blog.tags || []).slice(0, 3).map((tag: string, tagIndex: number) => (
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
                <span>Read article</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function BlogsPage() {
  const containerRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  const blogsSection = resourcesData.resources.sections.find((section) => section.type === "blogs_insights")
  const blogs = blogsSection?.items || []

  // Get unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    blogs.forEach((blog) => {
      if (blog.tags && Array.isArray(blog.tags)) {
        blog.tags.forEach((tag) => tags.add(tag))
      }
    })
    return Array.from(tags).sort()
  }, [blogs])

  // Filter blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => (blog.tags || []).includes(tag))

      return matchesSearch && matchesTags
    })
  }, [blogs, searchTerm, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedTags([])
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
          <motion.div style={{ y: textY }} className="text-center mb-12">
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
              Security Insights &{" "}
              <span className="bg-gradient-to-r from-[#6d18ff] via-[#9569fe] to-[#d9b6ff] bg-clip-text text-transparent">
                Expert Analysis
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-[#e0dbfb]/80 max-w-3xl mx-auto leading-relaxed"
            >
              Stay ahead of the curve with expert insights on data security, compliance, and emerging threats from our
              team of security professionals.
            </motion.p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            {/* Search bar */}
            <div className="relative max-w-md mx-auto mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#e0dbfb]/60" />
              <Input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-[#18062a]/60 border-[#43256e]/50 text-white placeholder-[#e0dbfb]/60 focus:border-[#9569fe]/50"
              />
            </div>

            {/* Filter toggle */}
            <div className="text-center mb-4">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="border-[#43256e]/30 bg-[#18062a]/40 text-[#e0dbfb] hover:border-[#9569fe]/50"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {selectedTags.length > 0 && <span className="w-2 h-2 bg-[#9569fe] rounded-full ml-2"></span>}
              </Button>
            </div>

            {/* Filters panel */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-[#18062a]/40 border border-[#43256e]/30 rounded-lg p-4 mb-6"
              >
                {/* Tags */}
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-[#e0dbfb] mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {allTags.map((tag) => (
                      <Button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        size="sm"
                        className={`text-xs ${
                          selectedTags.includes(tag)
                            ? "bg-[#9569fe] border-[#9569fe] text-white"
                            : "border-[#43256e]/50 text-[#e0dbfb] hover:border-[#9569fe]/50"
                        }`}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Clear filters */}
                <Button
                  onClick={clearFilters}
                  variant="ghost"
                  size="sm"
                  className="text-[#9569fe] hover:text-[#d9b6ff]"
                >
                  <X className="w-3 h-3 mr-1" />
                  Clear all filters
                </Button>
              </motion.div>
            )}

            {/* Active filters display */}
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {selectedTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-[#9569fe]/20 border border-[#9569fe]/30 text-[#d9b6ff] cursor-pointer"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                    <X className="w-3 h-3 ml-1" />
                  </Badge>
                ))}
              </div>
            )}
          </motion.div>

          {/* Results count */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-8">
            <p className="text-[#e0dbfb]/70">
              Showing {filteredBlogs.length} of {blogs.length} articles
            </p>
          </motion.div>

          {/* Blog Grid */}
          {filteredBlogs.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
              <BookOpen className="w-12 h-12 text-[#43256e] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#e0dbfb] mb-2">No articles found</h3>
              <p className="text-[#e0dbfb]/70 mb-4">Try adjusting your search or filters</p>
              <Button onClick={clearFilters} className="bg-[#9569fe] text-white hover:bg-[#7143fe]">
                Clear filters
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog, index) => (
                <BlogCard key={`${blog.title}-${index}`} blog={blog} index={index} />
              ))}
            </div>
          )}

          {/* Back to resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/resources">
              <Button
                variant="outline"
                className="border-[#43256e]/50 bg-[#18062a]/40 text-[#e0dbfb] hover:bg-[#43256e]/30 hover:border-[#9569fe]/50"
              >
                <ArrowRight className="w-4 h-4 rotate-180 mr-2" />
                Back to All Resources
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
