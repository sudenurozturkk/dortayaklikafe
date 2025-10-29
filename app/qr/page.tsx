'use client'
import { useState, useEffect } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { motion } from 'framer-motion'
import { QrCode, Download, Eye, Printer } from 'lucide-react'
import { absoluteUrl } from '@/lib/paths'

export default function QRPage(){
  const [table, setTable] = useState('A1')
  const [qrSize, setQrSize] = useState(280)
  
  useEffect(() => {
    const handleResize = () => {
      setQrSize(window.innerWidth < 640 ? 200 : 280)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const url = absoluteUrl(`/t/${encodeURIComponent(table)}`)
  
  const downloadQR = () => {
    const canvas = document.querySelector('canvas')
    if (canvas) {
      const url = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.download = `qr-masa-${table}.png`
      link.href = url
      link.click()
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3"
      >
        <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-copper-600 to-terracotta-600 rounded-xl border-2 border-copper-700 shadow-copper mb-3 wood-texture wood-grain">
          <QrCode className="text-basalt-50 w-10 h-10" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-ottoman font-black bg-gradient-to-r from-basalt-900 to-copper-800 bg-clip-text text-transparent tracking-wider px-4">
          QR KOD OLUŞTUR
        </h1>
        <p className="text-basalt-600 text-sm sm:text-base md:text-lg font-medium px-4">
          Masalarınız için özel QR kodları oluşturun ve yazdırın
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card p-4 sm:p-6 md:p-8 space-y-6"
      >
        <div className="space-y-4">
          <label className="block text-sm font-black text-basalt-800 uppercase tracking-widest font-ottoman">
            Masa Kodu
          </label>
          <input 
            value={table} 
            onChange={e=>setTable(e.target.value)}
            className="input-field w-full text-xl font-bold text-center"
            placeholder="Masa kodu (örn. A1)" 
          />
          <p className="text-xs text-basalt-500 font-semibold">
            URL: <span className="text-copper-700 font-mono">{url}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href={url} 
            target="_blank"
            className="btn-secondary flex items-center gap-2 flex-1 justify-center"
          >
            <Eye className="w-4 h-4" />
            Önizle
          </a>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-copper-500 to-terracotta-600 rounded-xl blur-2xl opacity-30"></div>
              <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-copper border-4 border-basalt-700">
                <QRCodeCanvas 
                  value={url} 
                  size={qrSize} 
                  level="H"
                  includeMargin
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>

            <div className="text-center space-y-3">
              <p className="text-lg font-black text-basalt-900 uppercase tracking-wider font-ottoman">
                Masa {table} için QR Kod
              </p>
              <p className="text-sm text-basalt-600 font-semibold">
                Müşterileriniz bu kodu okutarak menüye erişebilir
              </p>
            </div>

            <div className="flex gap-3 w-full">
              <button 
                onClick={downloadQR}
                className="btn-primary flex items-center gap-2 flex-1 justify-center"
              >
                <Download className="w-4 h-4" />
                İndir
              </button>
              <button 
                onClick={() => window.print()}
                className="btn-secondary flex items-center gap-2 flex-1 justify-center"
              >
                <Printer className="w-4 h-4" />
                Yazdır
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="card p-4 sm:p-6 md:p-8 bg-gradient-to-br from-dicle-50 to-transparent border-dicle-400"
      >
        <h3 className="font-ottoman font-black text-xl text-basalt-900 mb-6 flex items-center gap-3 uppercase tracking-wider">
          <div className="p-2 bg-gradient-to-br from-dicle-600 to-dicle-700 rounded-lg">
            <QrCode className="w-6 h-6 text-basalt-50" />
          </div>
          Kullanım Talimatları
        </h3>
        <ul className="space-y-4 text-sm text-basalt-700">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-copper-600 to-terracotta-600 text-basalt-50 font-black rounded-lg font-ottoman wood-texture">1</span>
            <span className="font-semibold pt-1">Masa kodunu girin (örn. A1, B3, C5)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-copper-600 to-terracotta-600 text-basalt-50 font-black rounded-lg font-ottoman wood-texture">2</span>
            <span className="font-semibold pt-1">QR kodu indirin veya doğrudan yazdırın</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-copper-600 to-terracotta-600 text-basalt-50 font-black rounded-lg font-ottoman wood-texture">3</span>
            <span className="font-semibold pt-1">Masanızın üzerine yerleştirin</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-copper-600 to-terracotta-600 text-basalt-50 font-black rounded-lg font-ottoman wood-texture">4</span>
            <span className="font-semibold pt-1">Müşteriler QR kodu okutarak menüye kolayca erişebilir</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

