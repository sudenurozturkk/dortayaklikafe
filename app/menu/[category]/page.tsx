import menuData from '@/data/menu.json'
import CategoryPageClient from './CategoryPageClient'
import { notFound } from 'next/navigation'
import { toSlug } from '@/lib/slug'

export const dynamic = 'error'
export const dynamicParams = false

const menu = menuData as Record<string, any[]>
const categories = Object.keys(menu).map((category) => ({
  category,
  slug: toSlug(category)
})).filter((entry) => entry.slug)

export const generateStaticParams = () => {
  return categories.map(({ slug }) => ({ category: slug }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const normalizedSlug = params.category.toLocaleLowerCase('tr-TR')
  const match = categories.find((entry) => entry.slug === normalizedSlug)

  if (!match) {
    notFound()
  }

  const items = (menu[match.category] as any[]) || []

  if (!items.length) {
    notFound()
  }

  return <CategoryPageClient category={match.category} items={items} />
}

