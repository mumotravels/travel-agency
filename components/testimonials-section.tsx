"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { TestimonialIProps } from "@/lib/data-fetch"


export function TestimonialsSection({ testimonials }: { testimonials: TestimonialIProps[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0))

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [itemsPerView, maxIndex, currentIndex])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [maxIndex])

  return (
    <section className="py-4 md:py-10  bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-3 md:px-20">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-8 md:mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm md:text-base mb-2 md:mb-4">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6 text-balance">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg">
            Real experiences from our valued customers around the world
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-1.5 md:px-4">
                  <Card
                    className={cn(
                      "h-full bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-500",
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 md:p-8">
                      <Quote className="h-6 w-6 md:h-10 md:w-10 text-primary/20 mb-3 md:mb-4" />
                      <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 md:h-5 md:w-5 text-gold fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 text-xs md:text-base">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-2.5 md:gap-4 pt-3 md:pt-4 border-t border-border">
                        <Avatar className="h-9 w-9 md:h-12 md:w-12">
                          <AvatarImage src={"/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-foreground text-xs md:text-base">{testimonial.name}</div>
                          <div className="text-[10px] md:text-sm text-muted-foreground">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 md:gap-4 mt-5 md:mt-8">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="p-2.5 md:p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="p-2.5 md:p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
