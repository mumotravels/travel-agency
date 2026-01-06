"use client"
import { AnimatedSection } from "@/components/ui/animated-section"
import { cn } from "@/lib/utils"
import { servicesData } from "@/lib/services-data"
import { ServicesIProps } from "@/lib/data-fetch"

interface ServiceCategoriesProps {
  activeService: string
  onServiceChange: (serviceSlug: string) => void
  services: ServicesIProps[]
}

export function ServiceCategories({ activeService, onServiceChange, services }: ServiceCategoriesProps) {
  return (
    <section className="md:py-4 py-1 bg-background border-b border-border">
      <div className="container mx-auto md:px-4 px-1">
        <AnimatedSection direction="up">
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => onServiceChange(service.url)}
                className={cn(
                  "md:px-5 px-1 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                  activeService === service.url
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground",
                )}
              >
                {service.title}
                <span className="text-xs hidden md:inline opacity-70">({service.packages?.length || 0})</span>
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
