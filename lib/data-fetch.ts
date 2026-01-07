
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

export interface BlogPostIProps {
    id: number
    title: string
    slug: string
    category: string
    excerpt: string
    content: string
    image: string
    featured: boolean
    createdAt: string
}

export interface FaqIProps {
    id: number
    question: string
    answer: string
    category: string
}



const API_URL = process.env.NEXT_PRIVATE_API_URL;






export async function getFaqsData(): Promise<FaqIProps[]> {
    try {
        const res = await fetch(`${API_URL}/api/admin/faqs`, {
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 0 }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch FAQs");
        }
        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        return [];
    }
}

export async function getBlogCategories(): Promise<{ id: string; name: string; count: number }[]> {
    const blogs = await getBlogPostsData();
    const categoryCounts = blogs.reduce(
        (acc, post) => {
            acc[post.category] = (acc[post.category] || 0) + 1
            return acc
        },
        {} as Record<string, number>,
    )

    const categories = [
        { id: "all", name: "All Posts", count: blogs.length },
        ...Object.entries(categoryCounts).map(([name, count]) => ({
            id: name.toLowerCase().replace(/\s+/g, "-"),
            name,
            count,
        })),
    ]

    return categories
}

export async function getRelatedPosts(currentSlug: string, category: string, limit = 3): Promise<BlogPostIProps[]> {
    const blogs = await getBlogPostsData();
    return blogs
        .filter((post) => post.slug !== currentSlug)
        .filter((post) => post.category === category || Math.random() > 0.5)
        .slice(0, limit)
}


export function getFilteredPosts(category: string, blogs: BlogPostIProps[]): BlogPostIProps[] {
    if (category === "all") return blogs
    return blogs.filter((post) => post.category.toLowerCase().replace(/\s+/g, "-") === category)
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostIProps | undefined> {
    const blogs = await getBlogPostsData();
    return blogs.find((post) => post.slug === slug)
}



export async function getBlogPostsData(): Promise<BlogPostIProps[]> {
    try {
        const res = await fetch(`${API_URL}/api/admin/blog`, {
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 0 }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch blog posts");
        }
        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return [];
    }
}


export async function getTestimonialsData(): Promise<TestimonialIProps[]> {
    try {
        const res = await fetch(`${API_URL}/api/admin/testimonials`, {
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 0 }
            // Revalidate every 60 seconds
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

export async function getServiceBySlug(slug: string): Promise<ServicesIProps | undefined> {
    const servicesData = await getServicesWithPackages();
    return servicesData.find((service) => service.url === slug)
}

export async function getPackageById(serviceSlug: string, packageId: string): Promise<PackageIProps | undefined> {
    const service = await getServiceBySlug(serviceSlug)
    return service?.packages?.find((pkg) => pkg.id.toString() === packageId)
}


export async function getServicesWithPackages(): Promise<ServicesIProps[]> {
    try {
        const res = await fetch(`${API_URL}/api/admin/services`, {
            headers: {
                'Content-Type': 'application/json',
            },
            next: { revalidate: 0 }
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
            next: { revalidate: 0 }
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