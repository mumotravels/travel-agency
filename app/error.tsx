"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw, Home, HelpCircle } from "lucide-react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <main className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-destructive/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    {/* Warning icon */}
                    <div className="relative mb-6 md:mb-8">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-destructive/10 flex items-center justify-center">
                            <AlertTriangle className="w-12 h-12 md:w-16 md:h-16 text-destructive" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-destructive flex items-center justify-center">
                            <span className="text-destructive-foreground text-xs font-bold">!</span>
                        </div>
                    </div>

                    {/* Error message */}
                    <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">Something Went Wrong</h1>
                    <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-md leading-relaxed">
                        We encountered an unexpected turbulence. Don&apos;t worry, our team is working to get you back on track.
                    </p>

                    {/* Error details (optional - shown in development) */}
                    {error.digest && (
                        <div className="mb-6 md:mb-8 px-4 py-2 bg-muted rounded-lg">
                            <p className="text-xs text-muted-foreground font-mono">Error ID: {error.digest}</p>
                        </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                        <Button onClick={reset} size="lg" className="gap-2">
                            <RefreshCw className="w-4 h-4" />
                            Try Again
                        </Button>
                        <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                            <Link href="/">
                                <Home className="w-4 h-4" />
                                Go Home
                            </Link>
                        </Button>
                    </div>

                    {/* Help link */}
                    <div className="mt-8 md:mt-10">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            <HelpCircle className="w-4 h-4" />
                            Need help? Contact our support team
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
