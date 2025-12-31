"use client"

import { AnimatedSection } from "@/components/ui/animated-section"

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started our journey with a vision to make travel accessible",
  },
  { year: "2019", title: "10,000 Customers", description: "Reached our first major milestone of happy travelers" },
  { year: "2022", title: "Global Expansion", description: "Extended services to 50+ countries worldwide" },
  { year: "2023", title: "Industry Award", description: "Recognized as Best Travel Consultancy of the Year" },
  { year: "2024", title: "Digital Innovation", description: "Launched our state-of-the-art booking platform" },
  { year: "2025", title: "50,000+ Travelers", description: "Celebrating 50,000 successful journeys worldwide" },
]


export function MilestonesSection() {
  return (
    <section className="md:py-10 py-4 bg-linear-to-b from-background to-secondary/30">
      <div className="container mx-auto md:px-4 px-1">

        {/* Timeline */}
        <div className="text-center mb-16">
          <AnimatedSection direction="up">
            <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Key Milestones</h2>
          </AnimatedSection>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                <div className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="inline-block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500">
                      <span className="text-primary font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-foreground mt-2">{milestone.title}</h3>
                      <p className="text-muted-foreground mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold shrink-0 z-10">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
