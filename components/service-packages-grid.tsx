"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react"
import { PackageIProps, ServicesIProps } from "@/lib/data-fetch"

interface ServicePackagesGridProps {
  activeService: string
  services: ServicesIProps[]
}

export function ServicePackagesGrid({ activeService, services }: ServicePackagesGridProps) {
  const service = services.find((s) => s.url === activeService)
  if (!service) return null

  return (
    <section className="md:py-4 py-2 bg-background">
      <div className="container mx-auto px-4">
        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {service?.packages?.map((pkg: PackageIProps, index) => (
            <AnimatedSection key={pkg.id} direction="up" delay={index * 50}>
              <div className="group h-full bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                {/* Package Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    priority
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                </div>

                {/* Package Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{pkg.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {pkg.bulletPoints.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="pt-4 border-t border-border">
                    <div className=" flex items-center justify-between mb-2 gap-3">
                      <Button size="sm" variant="outline" asChild>
                        <Link prefetch={false} href="https://wa.me/8801332846700">
                          <Phone className=" h-5 w-5" />
                          Call for Price
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link prefetch={false} href="/contact">
                          Book Now
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
