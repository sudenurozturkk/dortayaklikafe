import menuData from '@/data/menu.json'
import CategoryPageClient from './CategoryPageClient'
import { notFound } from 'next/navigation'

export const dynamic = 'error'

const menu = menuData as Record<string, any[]>

export function generateStaticParams() {
  return Object.keys(menu)
    .filter((category) => Array.isArray(menu[category]) && (menu[category] as unknown[]).length > 0)
    .map((category) => ({ category }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  let decoded = decodeURIComponent(params.category)
  if (!menu[decoded] && decoded.includes('%')) {
    decoded = decodeURIComponent(decoded)
  }
  const items = (menu[decoded] as any[]) || []

  if (!items.length) {
    notFound()
  }

  return <CategoryPageClient category={decoded} items={items} />
}

