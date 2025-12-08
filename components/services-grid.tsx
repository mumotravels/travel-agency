"use client"

import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import {
  Plane,
  FileText,
  Map,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Visa Processing Assistance",
    description:
      "Expert guidance for all visa types including tourist, business, student, and work visas with a 99% approval rate.",
    features: ["Document preparation", "Application review", "Embassy appointment", "Interview coaching"],
    color: "from-blue-500 to-blue-600",
    popular: true,
  },
  {
    icon: Plane,
    title: "Air Ticket Booking",
    description:
      "Best deals on domestic and international flights with flexible booking options and 24/7 customer support.",
    features: ["Best price guarantee", "Flexible rebooking", "Multi-city options", "Last-minute deals"],
    color: "from-sky-500 to-sky-600",
  },
  {
    icon: Map,
    title: "Tour Planning",
    description:
      "Customized travel itineraries designed to match your preferences, budget, and travel style perfectly.",
    features: ["Personalized itineraries", "Local experiences", "Group tours", "Private tours"],
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Compass,
    title: "Umrah & Hajj Packages",
    description: "Spiritual journey packages with complete arrangements for a blessed pilgrimage experience.",
    features: ["5-star accommodations", "Guided tours", "Transport included", "Visa processing"],
    color: "from-emerald-500 to-emerald-600",
  }
]

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up">
            <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">What We Offer</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Complete Travel Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From visa processing to complete tour packages, we handle every aspect of your travel needs with expertise
              and care
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 75}>
              <div className="group relative h-full p-8 rounded-3xl bg-card border border-border hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    Popular
                  </div>
                )}

                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" className="p-0 h-auto font-semibold text-primary group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
