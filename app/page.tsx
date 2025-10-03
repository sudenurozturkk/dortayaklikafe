'use client'
import menuData from '@/data/menu.json'
import CategoryCard from '@/components/CategoryCard'
import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Page() {
  const categories = useMemo(() =>
    Object.entries(menuData as Record<string, any>)
      .map(([k,v])=>({ title:k, count:(v as any[]).length }))
  , [])

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-5 mb-2"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-copper-600 to-terracotta-600 rounded-lg border-2 border-copper-700 shadow-copper mb-3 wood-texture wood-grain">
          <Sparkles className="w-5 h-5 text-basalt-900" />
          <span className="text-sm font-black text-basalt-900 uppercase tracking-widest font-ottoman">Hoş Geldiniz</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-ottoman font-black bg-gradient-to-r from-basalt-900 via-copper-800 to-basalt-900 bg-clip-text text-transparent tracking-wider drop-shadow-lg">
          MENÜMÜZÜ KEŞFEDİN
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-copper-500"></div>
          <div className="w-3 h-3 rotate-45 bg-copper-500"></div>
          <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-copper-500"></div>
        </div>
        <p className="text-basalt-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Diyarbakır'ın tarihi dokusundan ilham alan<br/>
          otantik lezzetler ve özenle hazırlanan seçimlerimiz
        </p>
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {categories.map(({title, count})=> (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <CategoryCard title={title} count={count} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

