import type { CSSProperties } from 'react'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '@/data/dörtayaklı-removebg-preview.png'
import { asset, absoluteUrl } from '@/lib/paths'

export const metadata: Metadata = {
  title: 'Dört Ayaklı Kahvaltı Kafe – QR Menü',
  description: "Diyarbakır'ın tarihi dokusunu ve bazalt avlusunun ruhunu taşıyan otantik dijital menü.",
  icons: { icon: asset('/favicon.ico') },
  other: { 'theme-color': '#f7f7f7' },
  openGraph: {
    title: 'Dört Ayaklı Kahvaltı Kafe – QR Menü',
    description: "Diyarbakır'ın tarihi dokusunu ve bazalt avlusunun ruhunu taşıyan otantik dijital menü.",
    url: absoluteUrl(),
    siteName: 'Dört Ayaklı Kafe',
    images: [{ url: absoluteUrl('/bazalt.jpg'), width: 1200, height: 630 }],
    locale: 'tr_TR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dört Ayaklı Kahvaltı Kafe – QR Menü',
    description: "Diyarbakır'ın tarihi dokusunu ve bazalt avlusunun ruhunu taşıyan otantik dijital menü.",
    images: [absoluteUrl('/bazalt.jpg')]
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const bodyStyle = {
    '--bazalt-bg': `url(${asset('/bazalt.jpg')})`
  } as CSSProperties

  return (
    <html lang="tr">
      <body style={bodyStyle}>
        {/* Mobilde statik arka plan - performans için video yok */}
        <div className="fixed inset-0 z-0 pointer-events-none md:hidden" aria-hidden>
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(9, 9, 11, 0.92) 0%, rgba(17, 24, 39, 0.94) 35%, rgba(17, 24, 39, 0.98) 100%), url(${asset('/bazalt.jpg')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'saturate(0.9)',
              transform: 'translateZ(0)'
            }}
          />
        </div>
        {/* Masaüstünde video arka plan */}
        <div className="fixed inset-0 z-0 pointer-events-none hidden md:block">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={asset('/dortayaklıweb.mp4')} type="video/mp4" />
            <source src={asset('/dörtayaklıkafe.mp4')} type="video/mp4" />
          </video>
        </div>
        <div className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-copper-600 via-terracotta-600 via-dicle-600 to-copper-600 z-50 shadow-copper"></div>
        
        <header className="border-b-4 border-basalt-700 sticky top-0 z-40 bg-gradient-to-r from-basalt-800 via-basalt-900 to-basalt-800 shadow-basalt wall-pattern">
          <div className="container">
            <div className="h-20 sm:h-24 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 sm:gap-4 hover:opacity-90 transition-opacity">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                  <Image
                    src={LogoImg}
                    alt="Dört Ayaklı Kahvaltı Cafe Logo"
                    className="object-contain"
                    fill
                    priority
                  />
                </div>
                <div>
                  <p className="font-ottoman font-black text-lg sm:text-2xl text-white tracking-wider drop-shadow-lg">
                    DÖRT AYAKLI
                  </p>
                  <p className="text-[10px] sm:text-xs text-white font-semibold flex items-center gap-1 sm:gap-1.5 tracking-widest uppercase mt-0.5">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    Kahvaltı & Kafe
                  </p>
                </div>
              </Link>
              {/* Dijital menü rozeti kaldırıldı */}
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
                <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                  <Image
                    src={LogoImg}
                    alt="Dört Ayaklı Kahvaltı Cafe Logo"
                    className="object-contain"
                    fill
                    priority
                  />
                </div>
                <span className="font-ottoman font-black text-xl sm:text-2xl text-white tracking-wider">
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

