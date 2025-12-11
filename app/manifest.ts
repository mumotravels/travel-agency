import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Mumo Travels & Tours",
        short_name: "Mumo Travels",
        description:
            "Your trusted travel partner for visa processing, air tickets, Umrah packages, tour packages, and foreign education services.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#1e40af",
        orientation: "portrait-primary",
        icons: [
            {
                src: "/apple-icon.jpg",
                sizes: "180x180",
                type: "image/jpeg",
            },
            {
                src: "/icon.jpg",
                sizes: "any",
                type: "image/jpeg",
            },
        ],
        categories: ["travel", "tourism", "business"],
        lang: "en",
        dir: "ltr",
    }
}
