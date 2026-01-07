"use client"

import { AnimatedSection } from "@/components/ui/animated-section"
import { cn } from "@/lib/utils"

interface BlogCategoriesProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
  categories: { id: string; name: string; count: number }[]
}

export function BlogCategories({ activeCategory, onCategoryChange, categories }: BlogCategoriesProps) {

  return (
    <section className="py-8 md:py-12 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <AnimatedSection direction="up">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={cn(
                  "px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground",
                )}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
