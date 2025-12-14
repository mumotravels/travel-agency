import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Compass, Home, MapPin, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <main className="min-h-screen py-20 md:py-24 flex items-center justify-center bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky/5 rounded-full blur-3xl" />
            </div>

            {/* Floating map pins decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <MapPin
                    className="absolute top-[15%] left-[10%] w-6 h-6 text-primary/20 animate-float"
                    style={{ animationDelay: "0s" }}
                />
                <MapPin
                    className="absolute top-[25%] right-[15%] w-8 h-8 text-accent/20 animate-float"
                    style={{ animationDelay: "0.5s" }}
                />
                <MapPin
                    className="absolute bottom-[20%] left-[20%] w-5 h-5 text-sky/20 animate-float"
                    style={{ animationDelay: "1s" }}
                />
                <MapPin
                    className="absolute bottom-[30%] right-[10%] w-7 h-7 text-primary/15 animate-float"
                    style={{ animationDelay: "1.5s" }}
                />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    {/* Animated compass icon */}
                    <div className="relative mb-6 md:mb-8">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center">
                            <Compass className="w-12 h-12 md:w-16 md:h-16 text-primary animate-pulse" />
                        </div>
                        <div
                            className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin"
                            style={{ animationDuration: "10s" }}
                        />
                    </div>

                    {/* 404 Text */}
                    <h1 className="text-7xl md:text-9xl font-bold gradient-text mb-2 md:mb-4">404</h1>

                    {/* Message */}
                    <h2 className="text-xl md:text-3xl font-semibold text-foreground mb-3 md:mb-4">Lost Your Way?</h2>
                    <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-md leading-relaxed">
                        It seems you&apos;ve ventured off the beaten path. The page you&apos;re looking for has either moved to a
                        new destination or doesn&apos;t exist.
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                        <Button asChild size="lg" className="gap-2">
                            <Link href="/">
                                <Home className="w-4 h-4" />
                                Back to Home
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                            <Link href="/contact">
                                <ArrowLeft className="w-4 h-4" />
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}
