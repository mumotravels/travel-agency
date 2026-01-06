
export interface HeroSliderIProps {
    id: number
    title: string
    subtitle: string
    image: string
}

export interface PackageIProps {
    id: number
    image: string
    name: string
    description: string
    bulletPoints: string[]
    serviceId: number
}

export interface ServicesIProps {
    id: number
    icon: string
    title: string
    description: string
    bulletPoints: string[]
    url: string
    packages?: PackageIProps[]
}

export interface TestimonialIProps {
    id: number
    name: string
    title: string
    content: string
    rating: number
}



const API_URL = process.env.NEXT_PRIVATE_API_URL;






export async function getTestimonialsData(): Promise<TestimonialIProps[]> {
    try {
        const res = await fetch(`${API_URL}/api/admin/testimonials`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!res.ok) {
            throw new Error("Failed to fetch testimonials");
        }
        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        return [];
    }
}



export async function getServicesWithPackages(): Promise<ServicesIProps[]> {
    try {
        const res = await fetch(`${API_URL}/api/admin/services`, {
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch services with packages");
        }
        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching services with packages:", error);
        return [];
    }
}


export async function getSlidersData(): Promise<HeroSliderIProps[]> {
    try {
        const res = await fetch(`${process.env.NEXT_PRIVATE_API_URL}/api/admin/hero-sliders`, {
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch sliders");
        }
        const sliders = await res.json();
        return sliders.data;
    } catch (error) {
        console.error("Error fetching sliders:", error);
        return [];
    }
}