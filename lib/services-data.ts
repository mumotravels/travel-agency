import { Plane, FileText, Map, Kanban as Kaaba } from "lucide-react"

export interface Package {
    id: string
    name: string
    duration: string
    price: number
    currency: string
    description: string
    highlights: string[]
    image: string
}

export interface Service {
    id: string
    slug: string
    icon: typeof Plane
    title: string
    shortTitle: string
    description: string
    longDescription: string
    features: string[]
    color: string
    packages: Package[]
}

export const servicesData: Service[] = [
    {
        id: "air-ticket",
        slug: "air-ticket",
        icon: Plane,
        title: "Air Ticket Booking",
        shortTitle: "Air Ticket",
        description:
            "Best deals on domestic and international flights with flexible booking options and 24/7 customer support.",
        longDescription:
            "We provide comprehensive air ticket booking services with access to all major airlines worldwide. Our team ensures you get the best prices, convenient flight timings, and seamless travel experience from booking to boarding.",
        features: [
            "Best price guarantee",
            "Flexible rebooking",
            "Multi-city options",
            "Last-minute deals",
            "24/7 Support",
            "All airlines covered",
        ],
        color: "from-sky-500 to-sky-600",
        packages: [
            {
                id: "dhaka-bangkok",
                name: "Dhaka to Bangkok",
                duration: "Round Trip",
                price: 32900,
                currency: "BDT",
                description: "Direct flights to Bangkok with flexible dates and baggage included.",
                highlights: ["Direct flight", "23kg baggage", "Meal included", "Free date change"],
                image: "/bangkok-cityscape.png",
            },
            {
                id: "dhaka-dubai",
                name: "Dhaka to Dubai",
                duration: "Round Trip",
                price: 45900,
                currency: "BDT",
                description: "Premium flights to Dubai with excellent connectivity and services.",
                highlights: ["Multiple airlines", "30kg baggage", "In-flight entertainment", "Transit lounge access"],
                image: "/dubai-skyline-burj-khalifa.png",
            },
            {
                id: "dhaka-singapore",
                name: "Dhaka to Singapore",
                duration: "Round Trip",
                price: 38500,
                currency: "BDT",
                description: "Convenient flights to Singapore with great stopover options.",
                highlights: ["Via Kuala Lumpur", "25kg baggage", "Meal included", "Priority boarding"],
                image: "/singapore-marina-bay.png",
            },
            {
                id: "dhaka-kolkata",
                name: "Dhaka to Kolkata",
                duration: "Round Trip",
                price: 15900,
                currency: "BDT",
                description: "Quick domestic flights to Kolkata with multiple daily departures.",
                highlights: ["45 min flight", "15kg baggage", "Multiple departures", "Same day return"],
                image: "/kolkata-victoria-memorial.jpg",
            },
            {
                id: "dhaka-kualalumpur",
                name: "Dhaka to Kuala Lumpur",
                duration: "Round Trip",
                price: 28900,
                currency: "BDT",
                description: "Affordable flights to Malaysia with excellent airline options.",
                highlights: ["Direct flight", "25kg baggage", "Meal included", "Online check-in"],
                image: "/kuala-lumpur-petronas-towers.png",
            },
            {
                id: "dhaka-london",
                name: "Dhaka to London",
                duration: "Round Trip",
                price: 89900,
                currency: "BDT",
                description: "Premium long-haul flights to London with top airlines.",
                highlights: ["Via Dubai/Doha", "40kg baggage", "Premium economy available", "Lounge access"],
                image: "/london-big-ben-tower-bridge.jpg",
            },
        ],
    },
    {
        id: "visa-processing",
        slug: "visa-processing",
        icon: FileText,
        title: "Visa Processing Assistance",
        shortTitle: "Visa Processing",
        description:
            "Expert guidance for all visa types including tourist, business, student, and work visas with a 99% approval rate.",
        longDescription:
            "Our dedicated visa processing team provides end-to-end assistance for all types of visas. With years of experience and a 99% approval rate, we ensure your visa application is handled professionally and efficiently.",
        features: [
            "Document preparation",
            "Application review",
            "Embassy appointment",
            "Interview coaching",
            "99% approval rate",
            "Express processing",
        ],
        color: "from-blue-500 to-blue-600",
        packages: [
            {
                id: "thailand-visa",
                name: "Thailand Tourist Visa",
                duration: "Processing: 5-7 Days",
                price: 5500,
                currency: "BDT",
                description: "Complete Thailand tourist visa processing with document assistance.",
                highlights: ["60 days validity", "Document checklist", "Application review", "Embassy submission"],
                image: "/thailand-temple-wat-arun.jpg",
            },
            {
                id: "malaysia-visa",
                name: "Malaysia E-Visa",
                duration: "Processing: 3-5 Days",
                price: 4500,
                currency: "BDT",
                description: "Quick Malaysia e-visa processing with online submission.",
                highlights: ["30 days stay", "Online application", "Fast processing", "Email delivery"],
                image: "/malaysia-kuala-lumpur.jpg",
            },
            {
                id: "singapore-visa",
                name: "Singapore Tourist Visa",
                duration: "Processing: 5-7 Days",
                price: 6500,
                currency: "BDT",
                description: "Singapore visa processing with high approval rate.",
                highlights: ["30 days validity", "Multiple entry", "Document review", "Interview prep"],
                image: "/singapore-gardens-by-bay.jpg",
            },
            {
                id: "dubai-visa",
                name: "UAE Tourist Visa",
                duration: "Processing: 3-4 Days",
                price: 12500,
                currency: "BDT",
                description: "UAE/Dubai visa with express processing option available.",
                highlights: ["30 days stay", "Express available", "OK to board", "Insurance included"],
                image: "/dubai-desert-safari.png",
            },
            {
                id: "schengen-visa",
                name: "Schengen Visa",
                duration: "Processing: 15-20 Days",
                price: 8500,
                currency: "BDT",
                description: "Complete Schengen visa assistance for European countries.",
                highlights: ["26 countries access", "Full documentation", "Appointment booking", "Interview coaching"],
                image: "/europe-eiffel-tower-paris.jpg",
            },
            {
                id: "uk-visa",
                name: "UK Tourist Visa",
                duration: "Processing: 15-21 Days",
                price: 9500,
                currency: "BDT",
                description: "UK visitor visa with comprehensive documentation support.",
                highlights: ["6 months validity", "Multiple entry", "Document preparation", "VFS appointment"],
                image: "/london-uk-landmarks.jpg",
            },
        ],
    },
    {
        id: "tour-package",
        slug: "tour-package",
        icon: Map,
        title: "Tour Packages",
        shortTitle: "Tour Package",
        description:
            "Customized travel itineraries designed to match your preferences, budget, and travel style perfectly.",
        longDescription:
            "Explore the world with our carefully curated tour packages. From serene mountain retreats to vibrant cityscapes, we offer complete travel experiences with accommodation, transportation, sightseeing, and meals included.",
        features: [
            "Personalized itineraries",
            "Local experiences",
            "Group tours",
            "Private tours",
            "All-inclusive options",
            "Expert guides",
        ],
        color: "from-teal-500 to-teal-600",
        packages: [
            {
                id: "kathmandu-3d2n",
                name: "Kathmandu",
                duration: "3 Days / 2 Nights",
                price: 44900,
                currency: "BDT",
                description: "Explore the cultural heart of Nepal with visits to ancient temples and vibrant markets.",
                highlights: [
                    "Hotel accommodation",
                    "Airport transfers",
                    "Pashupatinath Temple",
                    "Boudhanath Stupa",
                    "Swayambhunath",
                    "Breakfast included",
                ],
                image: "/kathmandu-nepal-temple-boudhanath.jpg",
            },
            {
                id: "kathmandu-nagarkot-4d3n",
                name: "Kathmandu + Nagarkot",
                duration: "4 Days / 3 Nights",
                price: 53900,
                currency: "BDT",
                description: "Experience Kathmandu's heritage and Nagarkot's stunning Himalayan sunrise views.",
                highlights: [
                    "3-star hotels",
                    "Sunrise view point",
                    "Mountain panorama",
                    "Kathmandu sightseeing",
                    "All transfers",
                    "Breakfast daily",
                ],
                image: "/nagarkot-himalaya-sunrise-mountain-view.jpg",
            },
            {
                id: "kathmandu-pokhara-5d4n",
                name: "Kathmandu + Pokhara",
                duration: "5 Days / 4 Nights",
                price: 55900,
                currency: "BDT",
                description: "Discover Nepal's capital and the lakeside paradise of Pokhara.",
                highlights: [
                    "Phewa Lake boating",
                    "Sarangkot sunrise",
                    "Davis Falls",
                    "Peace Pagoda",
                    "Domestic flight",
                    "All meals",
                ],
                image: "/pokhara-nepal-phewa-lake-mountains.jpg",
            },
            {
                id: "nepal-complete-5d4n",
                name: "Kathmandu 1N + Pokhara 2N + Nagarkot 1N",
                duration: "5 Days / 4 Nights",
                price: 61900,
                currency: "BDT",
                description: "The complete Nepal experience covering all major destinations.",
                highlights: [
                    "3 destinations",
                    "Himalayan views",
                    "Lake activities",
                    "Cultural tours",
                    "All transport",
                    "Guide included",
                ],
                image: "/nepal-himalaya-annapurna-range.jpg",
            },
            {
                id: "bangkok-pattaya-5d4n",
                name: "Bangkok + Pattaya",
                duration: "5 Days / 4 Nights",
                price: 42900,
                currency: "BDT",
                description: "Thailand's best - Bangkok's temples and Pattaya's beaches.",
                highlights: [
                    "4-star hotels",
                    "Coral Island trip",
                    "Safari World",
                    "Temple tours",
                    "Thai massage",
                    "Breakfast included",
                ],
                image: "/bangkok-thailand-grand-palace-temple.jpg",
            },
            {
                id: "malaysia-singapore-6d5n",
                name: "Malaysia + Singapore",
                duration: "6 Days / 5 Nights",
                price: 68900,
                currency: "BDT",
                description: "Two amazing countries in one trip - KL, Genting & Singapore.",
                highlights: [
                    "Petronas Towers",
                    "Genting Highlands",
                    "Marina Bay Sands",
                    "Universal Studios",
                    "Sentosa Island",
                    "All transfers",
                ],
                image: "/malaysia-singapore-combined-tour.jpg",
            },
        ],
    },
    {
        id: "umrah-package",
        slug: "umrah-package",
        icon: Kaaba,
        title: "Umrah Packages",
        shortTitle: "Umrah Package",
        description: "Spiritual journey packages with complete arrangements for a blessed pilgrimage experience.",
        longDescription:
            "Embark on your sacred journey with our comprehensive Umrah packages. We provide complete arrangements including flights, premium accommodations near Haram, guided ziyarat, and all necessary support for a peaceful pilgrimage.",
        features: [
            "5-star accommodations",
            "Guided tours",
            "Transport included",
            "Visa processing",
            "Ziyarat included",
            "24/7 assistance",
        ],
        color: "from-emerald-500 to-emerald-600",
        packages: [
            {
                id: "umrah-economy-10d",
                name: "Economy Umrah Package",
                duration: "10 Days / 9 Nights",
                price: 145000,
                currency: "BDT",
                description: "Affordable Umrah package with comfortable 3-star accommodations.",
                highlights: [
                    "3-star hotels",
                    "500m from Haram",
                    "Return flights",
                    "Visa included",
                    "Ziyarat tours",
                    "Group departure",
                ],
                image: "/makkah-kaaba-night-view.jpg",
            },
            {
                id: "umrah-standard-12d",
                name: "Standard Umrah Package",
                duration: "12 Days / 11 Nights",
                price: 175000,
                currency: "BDT",
                description: "Well-balanced package with 4-star hotels and excellent services.",
                highlights: [
                    "4-star hotels",
                    "300m from Haram",
                    "Saudi Airlines",
                    "Full board meals",
                    "Laundry service",
                    "Medical support",
                ],
                image: "/madinah-prophet-mosque-green-dome.jpg",
            },
            {
                id: "umrah-premium-14d",
                name: "Premium Umrah Package",
                duration: "14 Days / 13 Nights",
                price: 225000,
                currency: "BDT",
                description: "Premium experience with 5-star hotels and exclusive services.",
                highlights: [
                    "5-star hotels",
                    "Haram view rooms",
                    "Emirates/Qatar Airways",
                    "VIP transfers",
                    "Personal guide",
                    "All inclusive",
                ],
                image: "/placeholder.svg?height=400&width=600",
            },
            {
                id: "umrah-family-15d",
                name: "Family Umrah Package",
                duration: "15 Days / 14 Nights",
                price: 195000,
                currency: "BDT",
                description: "Family-friendly package with spacious rooms and kid-friendly services.",
                highlights: [
                    "Family rooms",
                    "400m from Haram",
                    "Kid-friendly meals",
                    "Stroller facility",
                    "Extra luggage",
                    "Flexible schedule",
                ],
                image: "/placeholder.svg?height=400&width=600",
            },
            {
                id: "umrah-ramadan-special",
                name: "Ramadan Special Umrah",
                duration: "Last 10 Days of Ramadan",
                price: 285000,
                currency: "BDT",
                description: "Experience the blessed last 10 days of Ramadan in the Holy Land.",
                highlights: [
                    "5-star hotels",
                    "Haram adjacent",
                    "Iftar & Suhoor",
                    "Laylatul Qadr",
                    "Special prayers",
                    "Limited seats",
                ],
                image: "/placeholder.svg?height=400&width=600",
            },
            {
                id: "umrah-vip",
                name: "VIP Umrah Package",
                duration: "10 Days / 9 Nights",
                price: 350000,
                currency: "BDT",
                description: "Luxury Umrah experience with the finest accommodations and services.",
                highlights: [
                    "Luxury hotels",
                    "Direct Haram access",
                    "Business class flight",
                    "Private transport",
                    "Personal assistant",
                    "Exclusive ziyarat",
                ],
                image: "/placeholder.svg?height=400&width=600",
            },
        ],
    },
]

export function getServiceBySlug(slug: string): Service | undefined {
    return servicesData.find((service) => service.slug === slug)
}

export function getPackageById(serviceSlug: string, packageId: string): Package | undefined {
    const service = getServiceBySlug(serviceSlug)
    return service?.packages.find((pkg) => pkg.id === packageId)
}