import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="card p-12 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-copper-600 to-terracotta-600 rounded-xl border-2 border-copper-700 shadow-copper wood-texture wood-grain">
          <Search className="w-12 h-12 text-basalt-50" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl font-ottoman font-black bg-gradient-to-r from-basalt-900 to-copper-800 bg-clip-text text-transparent tracking-wider">
            SAYFA BULUNAMADI
          </h1>
          <p className="text-basalt-600 text-lg font-medium leading-relaxed">
            Aradığınız sayfa bazalt taşlarının arasında kaybolmuş olabilir.<br/>
            Ana sayfaya dönün veya menüyü keşfedin.
          </p>
        </div>

        <div className="pt-4">
          <Link 
            href="/" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  )
}

