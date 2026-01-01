"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { Clock, CheckCircle2, MessageCircle, Phone } from "lucide-react"
import { servicesData } from "@/lib/services-data"

interface ServicePackagesGridProps {
  activeService: string
}

export function ServicePackagesGrid({ activeService }: ServicePackagesGridProps) {
  const service = servicesData.find((s) => s.slug === activeService)

  if (!service) return null

  return (
    <section className="md:py-4 py-2 bg-background">
      <div className="container mx-auto px-4">
        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.packages.map((pkg, index) => (
            <AnimatedSection key={pkg.id} direction="up" delay={index * 50}>
              <div className="group h-full bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                {/* Package Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
                    <Clock className="h-4 w-4" />
                    {pkg.duration}
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{pkg.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex justify-between gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link prefetch={false} href="tel:+8801332-846700">
                        <Phone className="mr-2 h-5 w-5" />
                        Call for Price
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="shrink-0 bg-transparent hover:bg-[#20BD5A]" asChild>
                      <Link prefetch={false}
                        href="https://wa.me/8801332846700"
                        className="text-lg font-semibold"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Link>
                    </Button>
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
