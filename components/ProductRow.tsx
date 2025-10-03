import { MenuItem } from "@/lib/types"
import { toTRY } from "@/lib/format"
import { motion } from "framer-motion"

export default function ProductRow({ item }: { item: MenuItem }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="group grid grid-cols-12 items-start gap-4 py-5 px-5 -mx-5 rounded-lg border-b-2 border-basalt-200 last:border-0 hover:bg-gradient-to-r hover:from-copper-50/30 hover:to-terracotta-50/30 transition-all duration-200"
    >
      <div className="col-span-8">
        <p className="font-display font-bold text-lg text-basalt-900 group-hover:text-copper-700 transition-colors">
          {item.name}
        </p>
        {item.desc && (
          <p className="text-sm text-basalt-600 mt-2 leading-relaxed">
            {item.desc}
          </p>
        )}
      </div>
      <div className="col-span-4 text-right flex justify-end items-start">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-copper-600 to-terracotta-600 rounded-lg border-2 border-copper-700 shadow-copper wood-texture wood-grain">
          <span className="text-xl font-black text-copper-950 font-ottoman tracking-wide">
            {toTRY(item.price)}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

