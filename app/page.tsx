'use client'
import menuData from '@/data/menu.json'
import CategoryCard from '@/components/CategoryCard'
import { useMemo } from 'react'
import { motion } from 'framer-motion'
import SplitText from '@/components/SplitText'
import { asset } from '@/lib/paths'

export default function Page() {
  const uiMap: Record<string, { bg?: string; accent?: 'dark'|'light' }> = {
    'İçecekler': { bg: asset('/icecekler.jpg'), accent: 'dark' },
    'Yemekler & Kahvaltılar': { bg: asset('/serpmekahvaltı.jpg'), accent: 'dark' },
    'Portre Resim Çizimi': { bg: asset('/porte.png'), accent: 'dark' },
  }

  const categories = useMemo(() => {
    // Mobilde istenen sıralama: İçecekler, Yemekler & Kahvaltılar, Portre Resim Çizimi
    const categoryOrder = ['İçecekler', 'Yemekler & Kahvaltılar', 'Portre Resim Çizimi']
    
    return categoryOrder
      .map(k => ({ title: k, count: (menuData as any)[k]?.length || 0, ...uiMap[k] }))
      .filter(cat => cat.count > 0) // Sadece içeriği olan kategorileri göster
  }, [])

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-5 mb-2"
      >
        {/* Hoş Geldiniz rozeti kaldırıldı */}
        <SplitText
          tag="h1"
          text="MENÜMÜZÜ KEŞFEDİN"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-ottoman font-extrabold text-white tracking-wide drop-shadow-xl px-4 text-balance text-center"
          splitType="words"
          allowWrap
          delayMs={35}
        />
        <div className="flex items-center justify-center gap-4">
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-copper-500"></div>
          <div className="w-3 h-3 rotate-45 bg-copper-500"></div>
          <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-copper-500"></div>
        </div>
        <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-semibold px-4 drop-shadow">
          Diyarbakır'ın tarihi dokusundan ilham alan otantik lezzetler ve özenle hazırlanan seçimlerimiz
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
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
            <CategoryCard title={title} count={count} backgroundImage={(uiMap[title]?.bg)} accent={(uiMap[title]?.accent) as any} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

