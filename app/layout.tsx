import type { Metadata } from 'next'
import './globals.css'
import { Coffee, QrCode, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dört Ayaklı Kahvaltı Kafe – QR Menü',
  description: 'Diyarbakır\'ın tarihi dokusunu ve bazalt avlusunun ruhunu taşıyan otantik dijital menü.',
  icons: { icon: '/favicon.ico' },
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 5 },
  other: { 'theme-color': '#f7f7f7' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <div className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-copper-600 via-terracotta-600 via-dicle-600 to-copper-600 z-50 shadow-copper"></div>
        
        <header className="border-b-4 border-basalt-700 sticky top-0 z-40 bg-gradient-to-r from-basalt-800 via-basalt-900 to-basalt-800 shadow-basalt wall-pattern">
          <div className="container">
            <div className="h-20 sm:h-24 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-copper-500 to-terracotta-600 rounded-lg blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-copper-600 via-copper-500 to-terracotta-600 p-2.5 sm:p-4 rounded-lg shadow-copper border-2 border-copper-700 wood-texture wood-grain">
                    <Coffee className="text-basalt-50 w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                </div>
                <div>
                  <p className="font-ottoman font-black text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-copper-300 to-terracotta-400 tracking-wider drop-shadow-lg">
                    DÖRT AYAKLI
                  </p>
                  <p className="text-[10px] sm:text-xs text-basalt-300 font-semibold flex items-center gap-1 sm:gap-1.5 tracking-widest uppercase mt-0.5">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-copper-400" />
                    Kahvaltı & Kafe
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-dicle-700 to-dicle-800 backdrop-blur-sm rounded-lg border-2 border-dicle-600 shadow-inner">
                <QrCode className="w-5 h-5 text-dicle-200" />
                <span className="text-sm text-dicle-100 font-bold tracking-wide">DİJİTAL MENÜ</span>
              </div>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-transparent via-copper-500 to-transparent"></div>
        </header>

        <main className="container py-6 sm:py-10 min-h-[calc(100vh-280px)]">
          {children}
        </main>

        <footer className="relative border-t-4 border-basalt-700 mt-20 bg-gradient-to-b from-basalt-800 to-basalt-900 diyarbakir-pattern wall-pattern">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-copper-500 to-transparent"></div>
          <div className="container py-8 sm:py-12">
            <div className="flex flex-col items-center gap-4 sm:gap-5">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-gradient-to-br from-copper-600 to-terracotta-600 rounded-lg shadow-copper wood-texture wood-grain">
                  <Coffee className="text-basalt-50 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-ottoman font-black text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-copper-400 to-terracotta-400 tracking-wider">
                  DÖRT AYAKLI
                </span>
              </div>
              <p className="text-basalt-300 text-xs sm:text-sm text-center max-w-md leading-relaxed px-4">
                Diyarbakır'ın tarihi dokusunu ve bazalt avlusunun otantik ruhunu sofranıza taşıyoruz
              </p>
              <div className="h-0.5 w-32 sm:w-40 bg-gradient-to-r from-transparent via-copper-500 to-transparent"></div>
              <p className="text-basalt-400 text-[10px] sm:text-xs tracking-wider">
                © {new Date().getFullYear()} Diyarbakır · Tüm Hakları Saklıdır
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

