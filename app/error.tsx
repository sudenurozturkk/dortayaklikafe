"use client"
import { AlertCircle, RefreshCw } from 'lucide-react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="card p-12 text-center space-y-8">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl border-2 border-red-700 shadow-copper wood-texture">
          <AlertCircle className="w-12 h-12 text-basalt-50" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl font-ottoman font-black bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent tracking-wider">
            BİR HATA OLUŞTU
          </h1>
          <p className="text-basalt-600 text-lg font-semibold">
            Üzgünüz, bir şeyler yanlış gitti.
          </p>
        </div>

        <div className="card p-6 bg-red-50 border-red-400">
          <pre className="text-sm text-red-800 whitespace-pre-wrap text-left overflow-auto max-h-40 font-mono">
            {error.message}
          </pre>
        </div>

        <div className="pt-4">
          <button 
            onClick={reset}
            className="btn-primary inline-flex items-center gap-3"
          >
            <RefreshCw className="w-5 h-5" />
            TEKRAR DENE
          </button>
        </div>
      </div>
    </div>
  )
}

