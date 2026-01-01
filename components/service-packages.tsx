import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, ArrowRight, Phone, MessageCircle } from "lucide-react"
import type { Service, Package } from "@/lib/services-data"

interface ServicePackagesProps {
    service: Service
}

function PackageCard({ pkg, index, serviceColor }: { pkg: Package; index: number; serviceColor: string }) {
    return (
        <AnimatedSection direction="up" delay={index * 75}>
            <div className="group relative h-full bg-card rounded-3xl border border-border overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={pkg.image || "/placeholder.svg"}
                        alt={pkg.name}
                        fill={true}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                    {/* Duration Badge */}
                    <Badge className="absolute top-4 left-4 bg-white/90 text-foreground backdrop-blur-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {pkg.duration}
                    </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {pkg.name}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{pkg.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                        {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                {highlight}
                            </li>
                        ))}
                    </ul>

                    {/* Price & CTA */}
                    <div className="flex items-end justify-between pt-4 border-t border-border">
                        <div className="flex gap-2">
                            <Button size="sm" variant="outline" asChild>
                                <Link prefetch={false} href="tel:+8801332-846700">
                                    <Phone className=" h-5 w-5" />
                                    Call for Price
                                </Link>
                            </Button>
                            <Button size="sm" variant="outline" className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full" asChild>
                                <Link prefetch={false}
                                    href="https://wa.me/8801332846700"
                                    className="text-lg font-semibold"
                                >
                                    <img src="/whatsapp.svg" alt="WhatsApp" className="inline-block h-5 w-4" />
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
    )
}

export function ServicePackages({ service }: ServicePackagesProps) {
    return (
        <section className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <AnimatedSection direction="up">
                        <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">Our Packages</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Choose Your Perfect Package
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Select from our carefully curated packages designed to give you the best experience at competitive prices
                        </p>
                    </AnimatedSection>
                </div>

                {/* Features Bar */}
                <AnimatedSection direction="up" delay={100}>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {service.features.map((feature, index) => (
                            <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                                {feature}
                            </Badge>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Packages Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service.packages.map((pkg, index) => (
                        <PackageCard key={pkg.id} pkg={pkg} index={index} serviceColor={service.color} />
                    ))}
                </div>

                {/* Contact CTA */}
                <AnimatedSection direction="up" delay={300}>
                    <div className="mt-16 text-center p-8 bg-muted/50 rounded-3xl border border-border">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Need a Custom Package?</h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Can't find exactly what you're looking for? Contact us and we'll create a personalized package that fits
                            your needs and budget.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link prefetch={false} href="/contact">
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    Contact Us
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link prefetch={false} href="tel:+8801332-846700">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call Now
                                </Link>
                            </Button>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}
