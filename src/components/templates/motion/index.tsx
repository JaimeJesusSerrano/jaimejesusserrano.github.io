import { motion } from 'motion/react'
import { type ReactNode } from 'react'

const HIDDEN_OPACITY = 0
const VISIBLE_OPACITY = 1
const RESTING_Y = 0
const ENTRANCE_OFFSET_Y = 20
const ENTRANCE_DURATION_SECONDS = 0.5

interface MotionProps {
  children: ReactNode
  className?: string
}

export function Motion({ children, className }: MotionProps): ReactNode {
  return (
    <motion.div
      className={className}
      initial={{ opacity: HIDDEN_OPACITY, y: ENTRANCE_OFFSET_Y }}
      transition={{ duration: ENTRANCE_DURATION_SECONDS }}
      viewport={{ once: true }}
      whileInView={{ opacity: VISIBLE_OPACITY, y: RESTING_Y }}
    >
      {children}
    </motion.div>
  )
}
