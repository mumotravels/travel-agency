"use client"

import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { useIsMobile } from "@/components/ui/use-mobile"

export default function ContactPage() {
  const isMobile = useIsMobile()

  return (
    <main className="min-h-screen">
      {isMobile ? null : (
        <PageHeader
          title="Contact Us"
          subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          breadcrumb="Contact"
        />
      )}
      <ContactForm />
    </main>
  )
}