import { motion } from 'motion/react'
import { type ReactNode } from 'react'

import { Navbar } from '@/components/organisms/navbar'
import { useLanguage } from '@/store/language'

const FADE_DURATION = 0.2
const OPACITY_HIDDEN = 0
const OPACITY_VISIBLE = 1

interface BaseProps {
  children: ReactNode
}

export function Base({ children }: BaseProps): ReactNode {
  const { isTransitioning } = useLanguage()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-white/30">
      <Navbar />
      <motion.main
        animate={{ opacity: isTransitioning ? OPACITY_HIDDEN : OPACITY_VISIBLE }}
        className="max-w-5xl mx-auto px-6 pt-24 pb-12 space-y-32"
        transition={{ duration: FADE_DURATION }}
      >
        {children}
      </motion.main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-[#a1a1aa]">
        <p>© {new Date().getFullYear()} Jaime Jesús Serrano Rodríguez.</p>
      </footer>
    </div>
  )
}
