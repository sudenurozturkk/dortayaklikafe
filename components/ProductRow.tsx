import { MenuItem } from "@/lib/types"
import { toTRY } from "@/lib/format"
import { motion } from "framer-motion"

export default function ProductRow({ item }: { item: MenuItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="group flex flex-col justify-between p-2 sm:p-3 rounded-lg border-2 border-basalt-700 bg-basalt-900/60 h-full min-h-72 md:min-h-80"
    >
      <div className="w-full">
        {item.image && (
          <div className="mb-2 rounded-md overflow-hidden border border-basalt-700">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] object-contain bg-basalt-800"
            />
          </div>
        )}
        <p className="font-display font-bold text-base sm:text-lg text-white transition-colors">
          {item.name}
        </p>
        {item.desc && (
          <p className="text-xs sm:text-sm text-white/80 mt-1 sm:mt-2 leading-relaxed">
            {item.desc}
          </p>
        )}
      </div>
      <div className="w-full sm:text-right flex justify-start sm:justify-end items-start mt-3">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-copper-600 to-terracotta-600 rounded-lg border-2 border-copper-700 shadow-copper wood-texture wood-grain">
          <span className="text-lg sm:text-xl font-black text-white font-ottoman tracking-wide">
            {toTRY(item.price)}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

