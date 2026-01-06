import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"
import { ServicesWithFilter } from "@/components/services-with-filter"
import { ServicesSection } from "@/components/services-section"
import { getServicesWithPackages, getSlidersData } from "@/lib/data-fetch"

export default async function Home() {
  const sliders = await getSlidersData();
  const services = await getServicesWithPackages();
  return (
    <>
      <main className="min-h-screen">
        <HeroSection sliders={sliders} />
        <AboutSection />
        <div className="px-4 md:px-6 lg:px-20">
          <ServicesWithFilter services={services} />
          <ServicesSection />
        </div>
        <WhyChooseUsSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
      </main>
    </>
  )
}
