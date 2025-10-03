'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Coffee, Loader2 } from 'lucide-react'

export const dynamicParams = true

// Static params - Masa QR kodları dinamik olduğu için fallback'e izin ver
export async function generateStaticParams() {
  // Örnek masa kodları - Production'da tüm masalar eklenebilir
  return [
    { id: 'A1' },
    { id: 'A2' },
    { id: 'A3' },
    { id: 'B1' },
    { id: 'B2' },
    { id: 'B3' },
  ]
}

export default function TablePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const tableId = decodeURIComponent(params.id)

  useEffect(() => {
    // Masa bilgisini localStorage'a kaydet (opsiyonel)
    if (typeof window !== 'undefined') {
      localStorage.setItem('tableId', tableId)
    }
    // Ana menüye yönlendir
    const timer = setTimeout(() => {
      router.push('/')
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [tableId, router])

  return (
    <div className="max-w-md mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-12 text-center space-y-6"
      >
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-copper-500 to-terracotta-600 rounded-xl blur-2xl opacity-40 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-copper-600 via-copper-500 to-terracotta-600 p-8 rounded-xl shadow-copper border-2 border-copper-700 wood-texture wood-grain">
            <Coffee className="text-basalt-50 w-16 h-16" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-ottoman font-black bg-gradient-to-r from-copper-600 to-terracotta-600 bg-clip-text text-transparent tracking-wider">
            MASA {tableId}
          </h1>
          <p className="text-basalt-600 text-xl font-semibold">
            Hoş geldiniz! Menüye yönlendiriliyorsunuz...
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-copper-100 to-terracotta-100 rounded-lg border-2 border-copper-300">
          <Loader2 className="w-6 h-6 animate-spin text-copper-700" />
          <span className="text-sm font-black uppercase tracking-widest text-copper-700 font-ottoman">Yükleniyor</span>
        </div>
      </motion.div>
    </div>
  )
}

