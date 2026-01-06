"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { BlogPostIProps } from "@/lib/data-fetch"

export function BlogSection({ blogPosts }: { blogPosts: BlogPostIProps[] }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const displayPosts = blogPosts.slice(0, 3)

  return (
    <section className="md:py-16 py-2 bg-secondary/30" ref={ref}>
      <div className="container mx-auto md:px-8 px-2 lg:px-12">
        {/* Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-12 lg:mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <p className="text-primary font-medium tracking-wider uppercase mb-4">Travel Blog</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6 text-balance">
            Latest Travel Insights
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Tips, guides, and stories to inspire your next adventure
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayPosts.map((post, index) => (
            <Link prefetch={false} href={`/blog/${post.slug}`} key={post.slug}>
              <Card
                className={cn(
                  "group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card cursor-pointer h-full",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full aspect-16/10 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{post.category}</Badge>
                </div>
                <CardContent className="p-5 lg:p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {
                          new Date(post.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        }
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>5 min</span>
                    </div>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
