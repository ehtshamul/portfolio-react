import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  offset?: number
  rotate?: boolean
}

export function ParallaxSection({ children, className = '', offset = 50, rotate = false }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [rotate ? 5 : 0, 0, rotate ? -5 : 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        rotateX: rotateX,
        scale,
        opacity,
        transformPerspective: 1200,
      }}
    >
      {children}
    </motion.div>
  )
}
