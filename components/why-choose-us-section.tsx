"use client"

import { useInView } from "react-intersection-observer"
import { Shield, Zap, DollarSign, Headphones, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const reasons = [
  {
    icon: Shield,
    title: "Professional & Trusted Team",
    description: "Our experienced consultants ensure seamless travel planning with years of industry expertise.",
  },
  {
    icon: Zap,
    title: "Fast Visa Processing",
    description: "Quick and efficient visa processing with high success rates for all types of visas.",
  },
  {
    icon: DollarSign,
    title: "Affordable Travel Deals",
    description: "Best prices guaranteed with exclusive packages and seasonal discounts for all budgets.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance before, during, and after your trip for complete peace of mind.",
  },
]

const highlights = [
  "Govt Licenses Approved",
  "Ministry of Civil Aviation and Tourism Approved",
  "Return policy refunds",
  "No Hidden Charges",
  "Flexible Payment Options",
  "Travel Insurance Available",
]

export function WhyChooseUsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-card rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-card rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
            )}
          >
            <p className="text-sky font-medium tracking-wider uppercase mb-4">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Making Your Travel Dreams Come True
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              With over 15 years of experience, we've helped thousands of travelers explore the world safely and
              affordably. Our commitment to excellence sets us apart.
            </p>

            {/* Highlights List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-sky shrink-0" />
                  <span className="text-primary-foreground/90">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Side */}
          <div
            className={cn(
              "grid sm:grid-cols-2 gap-6 transition-all duration-700 delay-200",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
            )}
          >
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card/10 backdrop-blur-sm border border-card/20 hover:bg-card/20 transition-all"
              >
                <div className="inline-flex p-3 rounded-xl bg-sky mb-4">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
