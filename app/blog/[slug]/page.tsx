import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPostContent } from "@/components/blog-post-content"
import { getBlogCategories, getBlogPostBySlug, getBlogPostsData, getRelatedPosts } from "@/lib/data-fetch"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}


export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found | Mumo Travels - Travel Tips & Inspiration",
    }
  }

  return {
    title: `${post.title} | Mumo Travels - Travel Tips & Inspiration`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const blogPosts = await getBlogPostsData()
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug);


  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.slug, post.category)
  const categories = (await getBlogCategories()).filter((c) => c.id !== "all")

  return (
    <main className="min-h-screen px-4 md:px-20">
      <BlogPostContent relatedPosts={relatedPosts} categories={categories} post={post} />
    </main>
  )
}
