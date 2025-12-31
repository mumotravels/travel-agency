"use client"

import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Sparkles } from "lucide-react"

export function BlogNewsletter() {
  return (
    <section className="py-20 lg:py-24 bg-linear-to-br from-primary/5 via-background to-sky/5">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up">
          <div className="max-w-3xl mx-auto text-center bg-card p-10 md:p-16 rounded-3xl border border-border shadow-xl relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stay Updated with Our Travel Offers</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
                Get the latest travel tips, destination guides, and exclusive deals delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="h-12 rounded-full px-6 flex-1" />
                <Button className="h-12 rounded-full px-8">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe anytime. Read our Privacy Policy.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
