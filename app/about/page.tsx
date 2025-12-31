import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { AboutContent } from "@/components/about-content"
import { MilestonesSection } from "@/components/milestones-section"
import { PartnersSection } from "@/components/partners-section"

export const metadata: Metadata = {
  title: "About Us | Mumo Travels & Tours - Your Trusted Travel Partner",
  description:
    "Learn about Mumo Travels & Tours' journey, our mission, expert team, and commitment to making your travel dreams come true since 2009.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="About Mumo Travels & Tours "
        subtitle="Your trusted partner in creating unforgettable travel experiences since 2018"
        breadcrumb="About Us"
      />
      <div className="md:px-20 px-4">
        <AboutContent />
        <MilestonesSection />
        <PartnersSection />
      </div>
    </main>
  )
}
