import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-royal via-purple to-cyan z-[100] origin-left"
      style={{ scaleX }}
    />
  )
}
