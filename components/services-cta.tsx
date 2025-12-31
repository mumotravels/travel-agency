"use client"

import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="py-20 lg:py-32 bg-linear-to-br from-[oklch(0.25_0.06_250)] via-[oklch(0.20_0.05_250)] to-[oklch(0.25_0.06_250)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Our travel experts are ready to help you plan the perfect trip. Get in touch today for a free
              consultation.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90 rounded-full px-8 group" asChild>
                <Link prefetch={false} href="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 rounded-full px-8"
              >
                <Link prefetch={false} href="tel:+8801332846700" className="text-lg font-semibold flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Link>
              </Button>
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full px-8" asChild>
                <Link prefetch={false}
                  href="https://wa.me/8801332846700"
                  className="text-lg font-semibold"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
