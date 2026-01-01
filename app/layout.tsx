import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mumotravels.com"),
  title: {
    default: "Mumo Travels & Tours | Visa & Tour Services",
    template: "%s | Mumo Travels & Tours",
  },
  description:
    "Your trusted travel partner. Visa processing, air tickets, Umrah packages, tour packages, and foreign education services. Mumo Travels & Tours - We take you to your dream destination.",
  keywords: [
    "visa processing",
    "air tickets",
    "umrah packages",
    "tour packages",
    "foreign education",
    "mumo travels",
    "Bangladesh travel agency",
    "Dhaka travel agent",
    "international flights",
    "Schengen visa",
    "Thailand tour",
    "Nepal tour",
    "Dubai visa",
    "Malaysia Singapore tour",
  ],
  authors: [{ name: "Mumo Travels & Tours" }],
  creator: "Mumo Travels & Tours",
  publisher: "Mumo Travels & Tours",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mumo Travels & Tours",
    title: "Mumo Travels & Tours | Visa & Tour Services",
    description:
      "Your trusted travel partner for visa processing, air tickets, Umrah packages, and tour packages from Bangladesh.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumo Travels & Tours | Visa & Tour Services",
    description:
      "Your trusted travel partner for visa processing, air tickets, Umrah packages, and tour packages from Bangladesh.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "travel",
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e40af" },
    { media: "(prefers-color-scheme: dark)", color: "#0ea5e9" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="hydrated" data-scroll-behavior="smooth">
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '748336294208189');
            fbq('track', 'HomePageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=748336294208189&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${poppins.className} hydrated font-sans antialiased`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
