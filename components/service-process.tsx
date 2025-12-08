"use client"

import { AnimatedSection } from "@/components/ui/animated-section"
import { MessageSquare, FileSearch, CheckCircle, Plane } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description: "Share your travel requirements with our expert consultants for personalized guidance.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Planning",
    description: "We create a customized travel plan tailored to your preferences and budget.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Booking",
    description: "Once approved, we handle all bookings, reservations, and documentation.",
  },
  {
    icon: Plane,
    step: "04",
    title: "Travel",
    description: "Enjoy your journey with 24/7 support and assistance throughout your trip.",
  },
]

export function ServiceProcess() {
  return (
    <section className="py-20 lg:py-32 bg-linear-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up">
            <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">How It Works</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Simple 4-Step Process</h2>
            <p className="text-muted-foreground text-lg">
              We've streamlined our process to make your travel planning effortless
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 150}>
              <div className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-linear-to-r from-primary/30 to-transparent" />
                )}

                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 transition-all duration-500">
                      <step.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
