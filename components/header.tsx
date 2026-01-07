"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Plane } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
]

export function Header({ siteUrl, logo, siteName, description }: { siteUrl: string; logo: string; siteName: string; description: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isInternalPage = pathname !== "/"
  const showSolidHeader = true // Always show solid background for distinct separation

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-card border-b border-border/50 shadow-sm py-2 md:py-3",
        isScrolled && "shadow-md py-1.5 md:py-2",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link prefetch={false} href="/" className="flex items-center gap-2 md:gap-3 group">
          <div
            className={cn("relative w-auto h-10 md:h-14 lg:h-14 transition-all duration-500 overflow-hidden shrink-0")}
          >
            <Image
              src={logo || "/logo.png"}
              alt={siteName || "Mumo Travels & Tours"}
              className="object-contain h-full w-auto"
              height={100}
              width={200}
              priority
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              prefetch={false}
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group",
                "text-foreground/70 hover:text-primary",
                pathname === link.href && "text-primary bg-primary/5",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300",
                  pathname === link.href ? "w-6" : "w-0 group-hover:w-4",
                )}
              />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            size="lg"
            className={cn(
              "relative overflow-hidden rounded-full px-6 lg:px-7 font-semibold",
              "bg-linear-to-r from-primary to-primary/90",
              "hover:from-primary/90 hover:to-primary",
              "text-primary-foreground shadow-lg shadow-primary/25",
              "hover:shadow-xl hover:shadow-primary/30",
              "transition-all duration-300 hover:scale-[1.02]",
            )}
            asChild
          >
            <Link prefetch={false} href="/contact">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-card/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-lg md:rounded-xl h-9 w-9 md:h-10 md:w-10 shrink-0",
                showSolidHeader ? "text-foreground hover:bg-secondary" : "text-card hover:bg-card/10",
              )}
            >
              <Menu className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-60 bg-card border-l border-border/50">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full py-4 md:py-6">
              <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-10">
                <div className="p-2 md:p-2.5 rounded-lg md:rounded-xl bg-linear-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
                  <Plane className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    Mu<span className="text-primary">mo</span>
                  </span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-medium text-muted-foreground">
                    Travels & Tours
                  </span>
                </div>
              </div>
              <nav className="flex flex-col gap-0.5 md:gap-1">
                {navLinks.map((link, index) => (
                  <Link
                    prefetch={false}
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-foreground text-sm md:text-base font-medium py-3 md:py-3.5 px-3 md:px-4 rounded-lg md:rounded-xl transition-all duration-300",
                      "hover:bg-linear-to-r hover:from-primary/10 hover:to-transparent",
                      "animate-fade-in-right",
                      pathname === link.href &&
                      "bg-linear-to-r from-primary/15 to-transparent text-primary border-l-2 border-primary",
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-4 md:pt-6 border-t border-border/50">
                <Button
                  className="w-full bg-linear-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-lg md:rounded-xl h-11 md:h-12 font-semibold shadow-lg shadow-primary/20"
                  asChild
                >
                  <Link prefetch={false} href="/contact" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}