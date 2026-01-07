import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { BlogGrid } from "@/components/blog-grid"
import { getBlogCategories, getBlogPostsData } from "@/lib/data-fetch"

export const metadata: Metadata = {
  title: "Travel Blog | Mumo Travels - Travel Tips & Inspiration",
  description:
    "Discover travel tips, destination guides, visa information, and inspiring stories from around the world.",
}

export default async function BlogPage() {
  const blogs = await getBlogPostsData();
  const categories = await getBlogCategories();
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Travel Blog"
        subtitle="Tips, guides, and inspiring stories for your next adventure"
        breadcrumb="Blog"
      />
      <div className="md:mx-10 mx-1">
        <BlogGrid blogs={blogs} categories={categories} />
      </div>
    </main>
  )
}
