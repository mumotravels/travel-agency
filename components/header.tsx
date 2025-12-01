"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Plane } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isInternalPage = pathname !== "/"
  const showSolidHeader = isScrolled || isInternalPage

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        showSolidHeader
          ? "bg-card/98 backdrop-blur-xl shadow-lg shadow-foreground/5 py-3"
          : "bg-linear-to-b from-foreground/20 to-transparent py-5",
      )}
    >
      <div className="container mx-auto md:px-20 px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={cn(
              "relative p-2.5 rounded-xl transition-all duration-500 overflow-hidden",
              showSolidHeader
                ? "bg-linear-to-br from-primary to-primary/80 shadow-lg shadow-primary/25"
                : "bg-card/20 backdrop-blur-md border border-card/20",
            )}
          >
            <Plane
              className={cn(
                "h-6 w-6 transition-all duration-300 group-hover:rotate-12",
                showSolidHeader ? "text-primary-foreground" : "text-card",
              )}
            />
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "text-xl font-bold transition-colors duration-300 leading-tight",
                showSolidHeader ? "text-foreground" : "text-card",
              )}
            >
              Global<span className="text-primary">Voyage</span>
            </span>
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300",
                showSolidHeader ? "text-muted-foreground" : "text-card/70",
              )}
            >
              Travel & Visa
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group",
                showSolidHeader
                  ? "text-foreground/80 hover:text-foreground hover:bg-secondary"
                  : "text-card/90 hover:text-card hover:bg-card/10",
                pathname === link.href && (showSolidHeader ? "text-primary bg-primary/5" : "text-card bg-card/15"),
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
              "relative overflow-hidden rounded-full px-7 font-semibold",
              "bg-linear-to-r from-primary to-primary/90",
              "hover:from-primary/90 hover:to-primary",
              "text-primary-foreground shadow-lg shadow-primary/25",
              "hover:shadow-xl hover:shadow-primary/30",
              "transition-all duration-300 hover:scale-[1.02]",
            )}

            asChild>
            <Link href="/contact">
              <span className="relative z-10">Book Now</span>
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
                "rounded-xl",
                showSolidHeader ? "text-foreground hover:bg-secondary" : "text-card hover:bg-card/10",
              )}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-card border-l border-border/50">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full py-6">
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2.5 rounded-xl bg-linear-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
                  <Plane className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-foreground leading-tight">
                    Global<span className="text-primary">Voyage</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                    Travel & Visa
                  </span>
                </div>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-foreground text-base font-medium py-3.5 px-4 rounded-xl transition-all duration-300",
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
              <div className="mt-auto pt-6 border-t border-border/50">
                <Button className="w-full bg-linear-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-xl h-12 font-semibold shadow-lg shadow-primary/20">
                  Book
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
