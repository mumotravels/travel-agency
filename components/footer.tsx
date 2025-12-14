import Link from "next/link"
import { Plane, Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { servicesData } from "@/lib/services-data"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/#packages", label: "Packages" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
]

const services = [
  {
    name: "Visa Processing",
    href: "/services/visa-processing"
  },
  {
    name: "Flight Booking",
    href: "/services/flight-booking"
  },
  {
    name: "Tour Packages",
    href: "/services/tour-packages"
  },
  {
    name: "Umrah & Hajj",
    href: "/services/umrah-hajj"
  },
];

const legal = [
  { href: "#", label: "Terms & Conditions" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Refund Policy" },
  { href: "#", label: "Cookie Policy" },
]

export function Footer() {
  return (
    <footer className="bg-linear-to-b from-[oklch(0.18_0.04_250)] to-[oklch(0.14_0.04_250)] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky/5 rounded-full blur-[150px]" />

      {/* Newsletter Section */}
      <div className="border-b border-white/10 relative">
        <div className="container mx-auto px-3 md:px-20 py-8 md:py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">
                Subscribe to Our <span className="text-primary">Newsletter</span>
              </h3>
              <p className="text-white/60 text-sm md:text-base">
                Get exclusive travel deals and updates straight to your inbox
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-2 md:gap-3">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-11 md:h-14 w-full lg:w-80 rounded-full focus:bg-white/15 focus:border-primary transition-all text-sm md:text-base"
              />
              <Button className="bg-linear-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full h-11 md:h-14 px-5 md:px-8 shrink-0 font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all text-sm md:text-base">
                Subscribe
                <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-3 md:px-20 py-10 md:py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6 group">
              <div className=" rounded-lg md:rounded-xl bg-linear-to-br from-primary to-primary/80 shadow-lg shadow-primary/25 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all">
                <Image src="/icon.png" alt="Mumo Travels & Tours Logo" width={50} height={50} className="" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold leading-tight">
                  Mu<span className="text-primary">mo</span>
                </span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-medium text-white/50">
                  Travels & Tours
                </span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed text-sm md:text-base mb-4 md:mb-6">
              Your trusted partner for visa processing, tour packages, and unforgettable travel experiences worldwide.
              Making travel dreams come true since 2009.
            </p>
            <div className="flex gap-2 md:gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/mumotravelsandtours" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2.5 md:p-3 rounded-lg md:rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 md:w-10 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full" />
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary hover:translate-x-2 transition-all inline-flex items-center gap-2 group text-sm md:text-base"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 md:w-10 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full" />
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {servicesData.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/60 hover:text-primary hover:translate-x-2 transition-all inline-flex items-center gap-2 group text-sm md:text-base"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-8 md:w-10 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full" />
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3 md:gap-4 group">
                <div className="p-2 md:p-2.5 rounded-lg md:rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all shrink-0">
                  <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </div>
                <span className="text-white/60 leading-relaxed text-sm md:text-base">
                  House - 25, Road-13,Sector-6, Uttara Model Town,
                  <br />
                  Dhaka-1230 Bangladesh.
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/8801332846700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 group cursor-pointer"
                >
                  <div className="p-2 md:p-2.5 rounded-lg md:rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all shrink-0">
                    <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </div>
                  <span className="text-white/60 text-sm md:text-base group-hover:text-primary transition-colors">
                    +8801332-846700
                  </span>
                </a>
              </li>
              <li className="text-[12px]">
                <a
                  href="mailto:mumotravelsandtours@gmail.com"
                  className="flex items-center gap-3 md:gap-4 group cursor-pointer"
                >
                  <div className="px-2 md:p-2.5 rounded-lg md:rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all shrink-0">
                    <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </div>
                  <span className="text-white/60 text-[12px] md:text-base group-hover:text-primary transition-colors">
                    mumotravelsandtours@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-3 md:px-20 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-white/40 text-xs md:text-sm text-center md:text-left">
              © 2025 Mu<span className="text-primary">mo</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs md:text-sm text-white/40 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
