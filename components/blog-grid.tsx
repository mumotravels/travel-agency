"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { blogPosts, getFilteredPosts } from "@/lib/blog-data"
import { BlogCategories } from "@/components/blog-categories"

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPosts = getFilteredPosts(activeCategory)
  const [featuredPost, ...otherPosts] = filteredPosts.length > 0 ? filteredPosts : blogPosts

  return (
    <>
      <BlogCategories activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* Featured Post */}
          <AnimatedSection direction="up" className="mb-12 lg:mb-16">
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center bg-card rounded-2xl lg:rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group">
                <div className="relative aspect-16/10 lg:aspect-auto lg:h-full overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1.5">
                    Featured
                  </Badge>
                </div>
                <div className="p-6 lg:p-10">
                  <Badge variant="secondary" className="mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground text-base lg:text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="rounded-full px-6 group/btn">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {otherPosts.map((post, index) => (
              <AnimatedSection key={post.slug} direction="up" delay={index * 100}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="group overflow-hidden border-border hover:border-primary/30 shadow-none hover:shadow-xl transition-all duration-500 h-full bg-card">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-5 lg:p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-base lg:text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <span className="text-primary font-medium text-sm flex items-center gap-1 group/btn">
                        Read More
                        <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Load More */}
          {otherPosts.length > 5 && (
            <AnimatedSection direction="up" delay={400} className="text-center mt-10 lg:mt-12">
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                Load More Articles
              </Button>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  )
}
