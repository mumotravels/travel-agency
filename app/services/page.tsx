import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ServicesGrid } from "@/components/services-grid"
import { ServiceProcess } from "@/components/service-process"
import { ServicesCTA } from "@/components/services-cta"

export const metadata: Metadata = {
  title: "Our Services | Mumo Travels & Tours - Complete Travel Solutions",
  description:
    "Explore our comprehensive travel services including visa processing, flight booking, tour planning and more.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive travel solutions tailored to your needs"
        breadcrumb="Services"
      />
      <div className="md:px-20 px-4">
        <ServicesGrid />
        <ServiceProcess />
      </div>
      <ServicesCTA />
    </main>
  )
}
