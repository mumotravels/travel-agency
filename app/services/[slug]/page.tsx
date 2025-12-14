import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { ServicesCTA } from "@/components/services-cta"
import { servicesData, getServiceBySlug } from "@/lib/services-data"
import { ServicePackages } from "@/components/service-packages"

interface ServicePageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params
    const service = getServiceBySlug(slug)

    if (!service) {
        return {
            title: "Service Not Found | Mumo Travels & Tours",
        }
    }

    return {
        title: `${service.title} | Mumo Travels & Tours`,
        description: service.longDescription,
    }
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params
    const service = getServiceBySlug(slug)

    if (!service) {
        notFound()
    }

    return (
        <main className="min-h-screen">
            <PageHeader title={service.title} subtitle={service.longDescription} breadcrumb={service.shortTitle} />
            <div className="md:px-20 px-4">
                <ServicePackages service={service} />
            </div>
            <ServicesCTA />
        </main>
    )
}
