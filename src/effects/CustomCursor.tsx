import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useSpring(useMotionValue(-100), { damping: 25, stiffness: 200 })
  const ringY = useSpring(useMotionValue(-100), { damping: 25, stiffness: 200 })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4)
      cursorY.set(e.clientY - 4)
      ringX.set(e.clientX - 20)
      ringY.set(e.clientY - 20)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <>
      <motion.div
        ref={ref}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        className="fixed w-10 h-10 border-2 border-white/30 rounded-full pointer-events-none z-[99998] hidden md:block"
        style={{ x: ringX, y: ringY }}
      />
    </>
  )
}
