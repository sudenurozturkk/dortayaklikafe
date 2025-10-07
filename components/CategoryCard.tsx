import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Coffee, Cake, Salad, UtensilsCrossed, Droplets, Flame, Paintbrush } from "lucide-react"

const categoryIcons: Record<string, any> = {
  "İçecekler": Coffee,
  "Yemekler & Kahvaltılar": UtensilsCrossed,
  "Portre Resim Çizimi": Paintbrush,
  "Kahvaltı": UtensilsCrossed,
  "Sıcak İçecekler": Flame,
  "Soğuk İçecekler": Droplets,
  "Tatlılar": Cake,
  "Ana Yemekler": UtensilsCrossed,
  "Salatalar": Salad,
}

export default function CategoryCard({ title, count, backgroundImage, accent = 'dark' }: { title: string; count: number; backgroundImage?: string; accent?: 'dark'|'light' }) {
  const Icon = categoryIcons[title] || Coffee
  
  return (
    <Link href={`/menu/${encodeURIComponent(title)}`} className="group">
      <motion.div 
        whileHover={{ scale: 1.03, y: -6 }} 
        whileTap={{ scale: 0.97 }}
        className="card card-hover p-5 sm:p-7 relative overflow-hidden group"
      >
        {/* Ürün sayısı - kartın üstünde beyaz */}
        <div className="absolute top-3 right-3 z-10">
          <span className="text-white font-extrabold text-sm sm:text-base tracking-wider drop-shadow">{count} Ürün</span>
        </div>
        {/* Arka plan görseli props ile kontrol edilir */}
        {backgroundImage && (
          <>
            <div className="absolute inset-0 -z-10">
              <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url('${backgroundImage}')` }} aria-hidden />
            </div>
            <div className={`absolute inset-0 ${accent === 'dark' ? 'bg-basalt-900/30' : 'bg-white/20'} -z-10`} />
          </>
        )}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-copper-400/20 to-transparent rounded-full blur-3xl group-hover:opacity-100 opacity-50 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-dicle-400/15 to-transparent rounded-full blur-2xl"></div>
        
        <div className="relative">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-copper-500 to-terracotta-600 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative p-3 sm:p-4 bg-gradient-to-br from-copper-600 to-terracotta-600 rounded-xl border-2 border-copper-700 shadow-copper wood-texture">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-basalt-50" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-ottoman font-black text-xl sm:text-2xl text-white transition-colors tracking-wide">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1 font-semibold tracking-wide">Menüyü Keşfet</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t-2 border-basalt-200">
            <span className="sr-only" aria-label={`${count} ürün`}>
              {count} Ürün
            </span>
            <div className="flex items-center gap-1 text-white group-hover:gap-3 transition-all font-bold text-sm">
              <span className="tracking-wide">GÖRÜNTÜLE</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

