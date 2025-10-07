'use client'
import menuData from '@/data/menu.json'
import ProductRow from '@/components/ProductRow'
import Link from 'next/link'
import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function CategoryPage({ params }: { params: { category: string } }) {
  const decoded = decodeURIComponent(params.category)
  const items = (menuData as any)[decoded] || []

  const sorted = useMemo(()=>[...items], [items])

  const isDrinks = decoded === 'İçecekler'
  const { hotDrinks, coldDrinks } = useMemo(()=>{
    if (!isDrinks) return { hotDrinks: [], coldDrinks: [] }
    const hot = (items as any[]).filter((it)=> it.type === 'hot')
    const cold = (items as any[]).filter((it)=> it.type === 'cold')
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
          {decoded.toUpperCase()}
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
                {hotDrinks.map((it:any, idx:number)=> (
                  <ProductRow key={`h-${idx}`} item={it} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-white font-bold mb-3">Soğuk İçecekler</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {coldDrinks.map((it:any, idx:number)=> (
                  <ProductRow key={`c-${idx}`} item={it} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {sorted.map((it:any, idx:number)=> (
              <ProductRow key={idx} item={it} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

