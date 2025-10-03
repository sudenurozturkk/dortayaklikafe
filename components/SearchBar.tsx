"use client"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="card px-6 py-5 flex items-center gap-4 group hover:shadow-copper"
    >
      <div className="p-3 bg-gradient-to-br from-copper-100 to-terracotta-100 rounded-lg group-hover:from-copper-200 group-hover:to-terracotta-200 transition-all border-2 border-copper-300">
        <Search className="text-copper-700 w-6 h-6" />
      </div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ürün Arayın: Menengiç, Latte, Serpme..."
        className="bg-transparent flex-1 placeholder-basalt-400 focus:outline-none text-basalt-900 font-semibold text-lg"
        aria-label="Menüde ara"
      />
      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => onChange('')}
            className="p-2.5 hover:bg-red-100 rounded-lg transition-colors border-2 border-transparent hover:border-red-400 group"
            aria-label="Aramayı temizle"
          >
            <X className="w-5 h-5 text-basalt-500 group-hover:text-red-600" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

