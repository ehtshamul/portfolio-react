import { motion } from 'framer-motion'

interface SectionHeader3DProps {
  badge: string
  title: string
  highlight?: string
  subtitle?: string
}

export function SectionHeader3D({ badge, title, highlight, subtitle }: SectionHeader3DProps) {
  const words = title.split(' ')

  return (
    <motion.div
      className="text-center mb-16 md:mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Animated badge */}
      <motion.div
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-gradient-to-r from-royal to-purple"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-sm font-semibold tracking-wider text-white/70">{badge}</span>
      </motion.div>

      {/* 3D Title */}
      <div className="overflow-hidden">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-black"
          style={{ transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, y: 60, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-3 ${word === highlight ? 'gradient-text' : 'text-white'}`}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className="text-white/50 max-w-2xl mx-auto mt-6 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Animated line */}
      <motion.div
        className="mt-8 mx-auto h-px bg-gradient-to-r from-transparent via-royal/50 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: '200px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
    </motion.div>
  )
}
