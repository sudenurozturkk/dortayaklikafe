'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import ProductRow from '@/components/ProductRow'
import { MenuItem } from '@/lib/types'
import { toTRY } from '@/lib/format'
import { asset } from '@/lib/paths'

type Props = {
  category: string
  items: MenuItem[]
}

export default function CategoryPageClient({ category, items }: Props) {
  const sorted = useMemo(() => [...items], [items])

  const isDrinks = category === 'İçecekler'
  const { hotDrinks, coldDrinks } = useMemo(() => {
    if (!isDrinks) return { hotDrinks: [], coldDrinks: [] }
    const hot = items.filter((it) => it.type === 'hot')
    const cold = items.filter((it) => it.type === 'cold')
    return { hotDrinks: hot, coldDrinks: cold }
  }, [isDrinks, items])

  return (
    <div className="space-y-6 bg-basalt-900/90 -mx-4 px-4 sm:mx-0 sm:px-0 rounded-lg">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <Link 
          href="/" 
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-basalt-700 to-basalt-800 hover:from-basalt-600 hover:to-basalt-700 rounded-lg border-2 border-basalt-600 shadow-basalt transition-all group"
        >
          <ArrowLeft className="w-5 h-5 text-copper-400 group-hover:text-copper-300 transition-colors" />
          <span className="text-sm font-bold text-basalt-100 group-hover:text-white uppercase tracking-wide font-ottoman">Ana Sayfa</span>
        </Link>
        <div className="hidden sm:block h-8 w-px bg-basalt-400"></div>
        <h1 className="text-3xl md:text-4xl font-ottoman font-black text-white tracking-wider drop-shadow">
          {category.toUpperCase()}
        </h1>
      </motion.div>

      {/* Sıralama kaldırıldı */}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-basalt-900/70 p-4 sm:p-6 md:p-8 rounded-lg border-2 border-basalt-700 shadow-basalt"
      >
        <div className="mb-6 pb-4 border-b-2 border-basalt-700 flex items-center justify-between">
          <p className="text-sm text-white font-semibold uppercase tracking-wider">
            <span className="font-black text-white text-2xl mr-2">{sorted.length}</span>
            Ürün
          </p>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-copper-400 ml-6"></div>
        </div>
        
        {isDrinks ? (
          <div className="space-y-6">
            <div>
              <h2 className="text-white font-bold mb-3">Sıcak İçecekler</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {hotDrinks.map((it, idx) => (
                  <ProductRow key={`h-${idx}`} item={it} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-white font-bold mb-3">Soğuk İçecekler</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {coldDrinks.map((it, idx) => (
                  <ProductRow key={`c-${idx}`} item={it} />
                ))}
              </div>
            </div>
          </div>
        ) : category === 'Portre Resim Çizimi' ? (
          <div className="max-w-5xl mx-auto">
            {sorted.map((it, idx) => (
              <div key={idx} className="group flex flex-col justify-between p-4 sm:p-6 rounded-lg border-2 border-basalt-700 bg-basalt-900/60 transition-transform duration-200 hover:scale-[1.01]">
                <div className="w-full">
                  {it.image && (
                    <div className="mb-4 rounded-md overflow-hidden border border-basalt-700 bg-basalt-800">
                      <img 
                        src={it.image.startsWith('http') ? it.image : asset(it.image)} 
                        alt={it.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto aspect-video object-cover"
                      />
                    </div>
                  )}
                  <p className="font-display font-bold text-2xl sm:text-3xl text-white transition-colors mb-3">
                    {it.name}
                  </p>
                  {it.desc && (
                    <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                      {it.desc}
                    </p>
                  )}
                </div>
                <div className="w-full sm:text-right flex justify-start sm:justify-end items-start mt-4">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-copper-600 to-terracotta-600 rounded-lg border-2 border-copper-700 shadow-copper wood-texture wood-grain">
                    <span className="text-2xl sm:text-3xl font-black text-white font-ottoman tracking-wide">
                      {toTRY(it.price)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {sorted.map((it, idx) => (
              <ProductRow key={idx} item={it} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
