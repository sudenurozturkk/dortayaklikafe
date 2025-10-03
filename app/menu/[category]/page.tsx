'use client'
import menuData from '@/data/menu.json'
import ProductRow from '@/components/ProductRow'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, SlidersHorizontal } from 'lucide-react'

export default function CategoryPage({ params }: { params: { category: string } }) {
  const decoded = decodeURIComponent(params.category)
  const items = (menuData as any)[decoded] || []

  const [sort, setSort] = useState<'az'|'za'|'low'|'high'>('az')

  const sorted = useMemo(()=>{
    const result = [...items]
    switch (sort) {
      case 'az': result.sort((a,b)=>a.name.localeCompare(b.name,'tr')); break
      case 'za': result.sort((a,b)=>b.name.localeCompare(a.name,'tr')); break
      case 'low': result.sort((a,b)=>a.price-b.price); break
      case 'high': result.sort((a,b)=>b.price-a.price); break
    }
    return result
  }, [items,sort])

  return (
    <div className="space-y-6">
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
        <h1 className="text-3xl md:text-4xl font-ottoman font-black bg-gradient-to-r from-copper-600 to-terracotta-600 bg-clip-text text-transparent tracking-wider">
          {decoded.toUpperCase()}
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:justify-between"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <div className="flex items-center gap-2.5 text-basalt-700">
            <SlidersHorizontal className="w-5 h-5" />
            <label className="text-sm font-bold uppercase tracking-wider font-ottoman">Sırala:</label>
          </div>
          <select 
            value={sort} 
            onChange={(e)=>setSort(e.target.value as any)}
            className="input-field pr-10 cursor-pointer font-semibold w-full sm:w-auto"
          >
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
            <option value="low">Fiyat (Artan)</option>
            <option value="high">Fiyat (Azalan)</option>
          </select>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-4 sm:p-6 md:p-8"
      >
        <div className="mb-6 pb-4 border-b-2 border-basalt-300 flex items-center justify-between">
          <p className="text-sm text-basalt-600 font-semibold uppercase tracking-wider">
            <span className="font-black text-copper-700 text-2xl mr-2">{sorted.length}</span> 
            Ürün
          </p>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-copper-400 ml-6"></div>
        </div>
        
        <div className="space-y-1">
          {sorted.map((it:any, idx:number)=> (
            <ProductRow key={idx} item={it} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

