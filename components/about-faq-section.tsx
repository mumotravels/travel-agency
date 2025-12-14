"use client"

import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Plane, FileText, Map, Moon } from "lucide-react"

const serviceFaqs = [
    {
        category: "Air Ticket",
        icon: Plane,
        faqs: [
            {
                question: "How can I book the cheapest air tickets?",
                answer:
                    "Book 6-8 weeks in advance, be flexible with dates, and consider mid-week flights. Our team has access to special airline fares and can find deals not available online. We compare multiple airlines to get you the best price.",
            },
            {
                question: "Can you book tickets for any airline?",
                answer:
                    "Yes, we book tickets for all major international and domestic airlines including Biman Bangladesh, Emirates, Singapore Airlines, Qatar Airways, Thai Airways, Malaysia Airlines, and many more.",
            },
            {
                question: "Do you offer flight + hotel packages?",
                answer:
                    "Yes, we offer combined flight and hotel packages that provide better value than booking separately. Our packages include airport transfers and can be customized to your preferences.",
            },
        ],
    },
    {
        category: "Visa Processing",
        icon: FileText,
        faqs: [
            {
                question: "What documents are required for visa applications?",
                answer:
                    "Common requirements include: valid passport (6+ months validity), passport photos, bank statements (3-6 months), employment/business proof, travel itinerary, hotel bookings, and return tickets. Requirements vary by country.",
            },
            {
                question: "How long does visa processing take?",
                answer:
                    "Processing times vary: Schengen visas take 15-45 days, UAE visas 3-5 days, Thailand visa-on-arrival is instant. We recommend applying at least 4-6 weeks before travel. Express processing available for urgent cases.",
            },
            {
                question: "What is your visa approval success rate?",
                answer:
                    "We maintain a 99% visa approval rate. Our experts thoroughly review all documents, prepare your application professionally, and provide interview coaching when required to maximize your chances of approval.",
            },
        ],
    },
    {
        category: "Tour Package",
        icon: Map,
        faqs: [
            {
                question: "What destinations do you offer tour packages for?",
                answer:
                    "We offer packages for Nepal (Kathmandu, Pokhara, Nagarkot), Thailand (Bangkok, Pattaya, Phuket), Malaysia, Singapore, Dubai, Maldives, India, Turkey, Egypt, and many European destinations. Custom itineraries available.",
            },
            {
                question: "What is included in your tour packages?",
                answer:
                    "Our packages typically include: accommodation, meals (as specified), airport transfers, local transportation, guided sightseeing, entry fees to attractions, and travel insurance. Flights can be included or booked separately.",
            },
            {
                question: "Can I customize my tour package?",
                answer:
                    "All packages can be tailored to your preferences. Add extra days, upgrade hotels, include specific activities, or modify the itinerary. Our planners create personalized trips for individuals, families, and groups.",
            },
        ],
    },
    {
        category: "Umrah Package",
        icon: Moon,
        faqs: [
            {
                question: "What is included in your Umrah packages?",
                answer:
                    "Our Umrah packages include: visa processing, return flights, accommodation in Makkah and Madinah (close to Haram), ground transportation between cities, Ziyarat tours, and guidance from experienced religious guides.",
            },
            {
                question: "When is the best time to perform Umrah?",
                answer:
                    "Umrah can be performed year-round. Ramadan offers the highest spiritual rewards but is crowded. Off-peak months (January-February, May-June) offer comfortable weather and fewer crowds. We have packages for all seasons.",
            },
            {
                question: "Do you offer different budget options for Umrah?",
                answer:
                    "Yes, we offer Economy (3-star hotels), Standard (4-star hotels near Haram), and Premium (5-star hotels with VIP services) packages. All packages include the essential services; the difference is in accommodation quality and proximity to Haram.",
            },
        ],
    },
]

export function AboutFaqSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section className="py-20 lg:py-32 bg-muted/30" ref={ref}>
            <div className="container mx-auto px-4">
                <div
                    className={cn(
                        "text-center mb-12 transition-all duration-700",
                        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    )}
                >
                    <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">FAQ</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Find answers to common questions about our services
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {serviceFaqs.map((service, serviceIndex) => (
                        <div
                            key={service.category}
                            className={cn(
                                "transition-all duration-700",
                                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                            )}
                            style={{ transitionDelay: `${serviceIndex * 100}ms` }}
                        >
                            <div className="bg-card rounded-2xl border border-border p-6 h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-xl bg-primary/10">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">{service.category}</h3>
                                </div>
                                <Accordion type="single" collapsible className="space-y-3">
                                    {service.faqs.map((faq, faqIndex) => (
                                        <AccordionItem
                                            key={faqIndex}
                                            value={`${service.category}-${faqIndex}`}
                                            className="bg-muted/50 rounded-xl border-none px-4 data-[state=open]:bg-primary/5 transition-all"
                                        >
                                            <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-4 hover:no-underline text-sm">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div
                    className={cn(
                        "mt-12 text-center transition-all duration-700 delay-500",
                        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    )}
                >
                    <div className="inline-block p-6 rounded-2xl bg-primary text-primary-foreground">
                        <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                        <p className="text-primary-foreground/80 mb-3">Our team is ready to help you</p>
                        <a
                            href="https://wa.me/8801332846700"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold hover:underline"
                        >
                            WhatsApp: +8801332-846700
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
