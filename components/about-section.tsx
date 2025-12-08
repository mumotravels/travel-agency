"use client"

import { useInView } from "react-intersection-observer"
import { Award, Clock, Heart, Shield, Users, Headphones, MoonStar } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Shield, value: "99%", label: "Visa Success Rate" },
  { icon: Headphones, value: "24/7", label: "Customer Support" },
]

const features = [
  { icon: Shield, title: "Visa Support", description: "Expert visa processing for all countries" },
  { icon: Clock, title: "Flight Booking", description: "Best deals on domestic & international flights" },
  { icon: Heart, title: "Tour Planning", description: "Customized itineraries for every traveler" },
  { icon: MoonStar, title: "Umrah & Hajj Packages", description: "Spiritual journey packages with complete arrangements" },
]

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto md:px-20 px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div
            className={cn(
              "relative transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
            )}
          >
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <img src="/travel-agency-office-team-professional-meeting.jpg" alt="Our Team" className="w-full h-full object-cover" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-sky/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Content Side */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
            )}
          >
            <p className="text-primary font-medium tracking-wider uppercase mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Your Trusted Partner for Global Travel
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Since 2009, Mumo Travels & Tours has been helping travelers explore the world with confidence. We combine
              expertise, passion, and personalized service to create unforgettable journeys. Whether you need visa
              assistance, flight bookings, or complete tour packages, our dedicated team is here to make your travel
              dreams a reality.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={cn(
            "mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
