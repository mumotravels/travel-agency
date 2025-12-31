"use client"

import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { Target, Eye, Heart, Globe, Shield, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your satisfaction is our top priority. We go above and beyond to ensure every journey exceeds expectations.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Honest pricing, clear communication, and reliable service form the foundation of everything we do.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We strive for excellence in every detail, from visa processing to creating perfect itineraries.",
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description: "Our worldwide network ensures you receive the best experiences, wherever your journey takes you.",
  },
]

const achievements = [
  "15+ years of industry experience",
  "50,000+ happy travelers worldwide",
  "99% visa approval success rate",
  "24/7 dedicated customer support",
  "100+ destination partnerships",
  "Award-winning travel agency",
]

export function AboutContent() {
  return (
    <section className="md:py-20 py-4 lg:py-32 bg-background">
      <div className="container mx-auto md:px-4 px-1">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Grid */}
          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/travel-agency-professional-team-meeting-office.jpg"
                    alt="Our Team"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-primary flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-6">
                    <div className="text-5xl font-bold mb-2">7+</div>
                    <div className="text-sm opacity-90">Years of Excellence</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/happy-tourists-traveling-destination-landmark.jpg"
                    alt="Happy Travelers"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    width={500}
                    height={500}
                    src="/beautiful-travel-destination-scenic-view.jpg"
                    alt="Destination"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <AnimatedSection direction="right" delay={100}>
              <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">Our Story</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Making Travel Dreams <span className="text-primary">Come True</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded in 2018, Mumo Travels & Tours began with a simple vision: to make world-class travel accessible to
                everyone. What started as a small consultancy has grown into a trusted name in the travel industry,
                serving over 50,000 happy travelers worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of passionate travel experts brings decades of combined experience in visa processing, tour
                planning, and creating personalized travel experiences. We understand that every journey is unique, and
                we take pride in crafting itineraries that match your dreams perfectly.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={300}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={400}>
              <Button size="lg" className="rounded-full px-8 group" asChild>
                <Link prefetch={false} href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <AnimatedSection direction="up" delay={100}>
            <div className="group p-8 lg:p-10 rounded-3xl bg-linear-to-br from-primary/5 to-primary/10 border border-primary/10 hover:border-primary/30 transition-all duration-500 h-full">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional travel experiences that inspire, connect, and transform. We aim to make every
                journey seamless, memorable, and accessible to travelers worldwide through expert guidance, personalized
                service, and unwavering commitment to excellence.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <div className="group p-8 lg:p-10 rounded-3xl bg-linear-to-br from-sky/5 to-sky/10 border border-sky/10 hover:border-sky/30 transition-all duration-500 h-full">
              <div className="inline-flex p-4 rounded-2xl bg-sky/10 mb-6 group-hover:scale-110 transition-transform">
                <Eye className="h-8 w-8 text-sky" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most trusted travel consultancy, known for turning travel dreams into reality. We
                envision a world where every traveler feels confident, supported, and inspired to explore new horizons
                with GlobalVoyage as their guide.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <AnimatedSection direction="up">
            <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
          </AnimatedSection>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 100}>
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 text-center h-full">
                <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
