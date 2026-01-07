"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin, Link2 } from "lucide-react"
import { BlogPostIProps } from "@/lib/data-fetch"

interface BlogPostContentProps {
  post: BlogPostIProps
  relatedPosts: BlogPostIProps[]
  categories: { id: string; name: string; count: number }[]
}

export function BlogPostContent({ post, relatedPosts, categories }: BlogPostContentProps) {


  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : ""
    const text = post.title

    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    }

    if (platform === "copy") {
      navigator.clipboard.writeText(url)
      return
    }

    window.open(shareUrls[platform], "_blank", "width=600,height=400")
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <AnimatedSection direction="up">
            <Link
              prefetch={false}
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 lg:mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <Badge className="mb-4 bg-primary text-primary-foreground">{post.category}</Badge>

            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6 max-w-4xl text-balance">
              {post.title}
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-3xl">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{
                  new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8 lg:pb-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <AnimatedSection direction="up" delay={100}>
            <div className="relative aspect-21/9 rounded-xl lg:rounded-2xl overflow-hidden">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16 lg:pb-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content */}
            <AnimatedSection direction="up" delay={200} className="lg:col-span-8">
              <article
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Section */}
              <div className="mt-10 lg:mt-12 pt-6 lg:pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Share this article</h3>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-transparent"
                    onClick={() => handleShare("facebook")}
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-transparent"
                    onClick={() => handleShare("twitter")}
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-transparent"
                    onClick={() => handleShare("linkedin")}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-transparent"
                    onClick={() => handleShare("copy")}
                  >
                    <Link2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <AnimatedSection direction="up" delay={300}>
                <div className="sticky top-24 space-y-6 lg:space-y-8">
                  {/* Categories */}
                  <Card className="border-border">
                    <CardContent className="p-5 lg:p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <Badge
                            key={category.id}
                            variant={category.name === post.category ? "default" : "secondary"}
                            className="cursor-pointer"
                          >
                            {category.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <AnimatedSection direction="up">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 lg:mb-8">Related Articles</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <AnimatedSection key={relatedPost.slug} direction="up" delay={index * 100}>
                <Link prefetch={false} href={`/blog/${relatedPost.slug}`}>
                  <Card className="group overflow-hidden border-border hover:border-primary/30 shadow-none hover:shadow-xl transition-all duration-500 h-full bg-card">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {relatedPost.category}
                      </Badge>
                    </div>
                    <CardContent className="p-5 lg:p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{
                            new Date(post.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          }</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span> 5 min </span>
                        </div>
                      </div>
                      <h3 className="text-base lg:text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
