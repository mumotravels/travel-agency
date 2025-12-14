import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"
import { ServicesWithFilter } from "@/components/services-with-filter"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <div className="px-4 md:px-6 lg:px-20">
        <ServicesWithFilter />
        <ServicesSection />
      </div>
      <WhyChooseUsSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
    </main>
  )
}
