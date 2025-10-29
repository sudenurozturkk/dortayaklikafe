import Link from 'next/link'
import menuData from '@/data/menu.json'
import { toSlug } from '@/lib/slug'

export default function MenuIndexPage() {
  const categories = Object.entries(menuData as Record<string, { name: string }[]>)

  return (
    <div className="space-y-8 py-6 sm:py-10">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-ottoman font-black text-white tracking-wide">
          Tüm Menü Kategorileri
        </h1>
        <p className="text-basalt-200 max-w-2xl mx-auto px-4">
          Aşağıdan herhangi bir kategoriyi seçerek ürün detaylarına ulaşabilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories.map(([title, items]) => (
          <Link
            key={title}
            href={`/menu/${toSlug(title)}`}
            className="card p-5 sm:p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-ottoman font-black text-basalt-900">{title}</h2>
              <p className="text-basalt-600 text-sm font-semibold mt-1">{items.length} ürün</p>
            </div>
            <span className="text-copper-700 font-bold text-sm uppercase tracking-wide self-end">Detayları Gör</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
