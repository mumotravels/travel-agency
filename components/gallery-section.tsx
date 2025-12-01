"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { X, ZoomIn, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const galleryImages = [
  { src: "/dubai-burj-khalifa-night-skyline-modern-city.jpg", alt: "Dubai Skyline", location: "Dubai, UAE" },
  { src: "/paris-eiffel-tower-sunset-romantic-beautiful.jpg", alt: "Paris", location: "Paris, France" },
  { src: "/maldives-beach-crystal-clear-water-tropical.jpg", alt: "Maldives Beach", location: "Maldives" },
  { src: "/cappadocia-turkey-hot-air-balloons-sunrise.jpg", alt: "Cappadocia", location: "Turkey" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; location: string } | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="gallery" className="py-10 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />

      <div className="container mx-auto md:px-20 px-4 relative">
        {/* Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Captured <span className="text-primary">Moments</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Beautiful destinations from our travelers' journeys around the world
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-2xl cursor-pointer",
                "transition-all duration-500 hover:shadow-2xl",
                index === 0 && "md:col-span-2 md:row-span-2",
                index === 4 && "md:col-span-2",
                inView ? "opacity-100 scale-100" : "opacity-0 scale-95",
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="p-4 rounded-full bg-card/90 backdrop-blur-sm mb-3 shadow-xl">
                  <ZoomIn className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center gap-1.5 text-card font-medium">
                  <MapPin className="h-4 w-4" />
                  <span>{image.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-3 rounded-full bg-card/20 text-card hover:bg-card hover:text-foreground transition-all duration-300 hover:scale-110"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative max-w-5xl w-full animate-scale-in">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full max-h-[85vh] object-contain rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-foreground/80 to-transparent rounded-b-2xl">
              <div className="flex items-center gap-2 text-card">
                <MapPin className="h-5 w-5" />
                <span className="text-lg font-medium">{selectedImage.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
