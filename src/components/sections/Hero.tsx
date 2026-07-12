import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Send, Eye, Download, ChevronDown, Sparkles } from 'lucide-react'
import HeroScene from '../three/HeroScene'
import MagneticButton from '../../effects/MagneticButton'

const roles = [
  'WordPress', 'Tutor LMS', 'BuddyBoss', 'WooCommerce', 'React', 'Node.js',
]

const floatingCards = [
  { name: 'React', icon: '⚛️', delay: 'animate-float', position: 'left-[10%] top-[5%]' },
  { name: 'Node.js', icon: '🟢', delay: 'animate-float-delayed', position: 'right-[10%] top-[15%]' },
  { name: 'WordPress', icon: '📝', delay: 'animate-float-slow', position: 'left-[5%] bottom-[20%]' },
  { name: 'Tutor LMS', icon: '🎓', delay: 'animate-float', position: 'right-[5%] bottom-[10%]' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-deep">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Gradient Overlays */}
      <motion.div className="absolute inset-0 z-10 bg-gradient-to-b from-deep/70 via-transparent to-deep/90" style={{ opacity }} />
      <motion.div className="absolute inset-0 z-10 bg-gradient-to-r from-deep/80 via-transparent to-deep/50" style={{ opacity }} />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full z-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full z-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Content */}
      <motion.div className="relative z-20 flex h-full items-center" style={{ opacity, scale, y }}>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center space-y-6"
          >
            {/* Available Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="glass rounded-full px-5 py-2.5 text-sm font-medium text-white/90 flex items-center gap-2">
                <motion.span
                  className="inline-block h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.6)]"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Available for Work
              </span>
            </motion.div>

            {/* Heading with 3D text */}
            <motion.div variants={itemVariants} className="space-y-2" style={{ perspective: 1000 }}>
              <motion.h1
                className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                Premium Digital
              </motion.h1>
              <motion.h1
                className="gradient-text text-5xl font-bold md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, x: 50, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                Enterprise
              </motion.h1>
              <motion.h1
                className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                Solutions
              </motion.h1>
            </motion.div>

            {/* Role Tags with stagger */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {roles.map((role, i) => (
                <motion.span
                  key={role}
                  className="glass rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80"
                  initial={{ opacity: 0, scale: 0.5, rotateX: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + i * 0.08 }}
                  whileHover={{ scale: 1.1, y: -2, boxShadow: '0 0 20px rgba(59,130,246,0.3)' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* Subtext */}
            <motion.p variants={itemVariants} className="max-w-lg text-lg text-white/60 leading-relaxed">
              Full-stack developer specializing in enterprise web solutions,
              LMS platforms, and modern web applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <MagneticButton>
                <motion.button
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/25"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139,92,246,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="h-5 w-5" />
                  Hire Me
                  <Sparkles className="h-4 w-4" />
                </motion.button>
              </MagneticButton>

              <MagneticButton>
                <motion.button
                  className="glass flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 font-semibold text-white"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="h-5 w-5" />
                  View Portfolio
                </motion.button>
              </MagneticButton>

              <MagneticButton>
                <motion.button
                  className="glass flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 font-semibold text-white"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="h-5 w-5" />
                  Resume
                </motion.button>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating 3D Cards */}
          <div className="relative hidden items-center justify-center lg:flex">
            <div className="relative h-[500px] w-full" style={{ perspective: 1200 }}>
              {floatingCards.map((card, index) => (
                <motion.div
                  key={card.name}
                  className={`glass absolute rounded-2xl p-5 shadow-xl ${card.position}`}
                  initial={{ opacity: 0, scale: 0.5, rotateY: -30, z: -100 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ scale: 1.1, z: 50, rotateY: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-2xl">
                      {card.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{card.name}</p>
                      <p className="text-xs text-white/50">Expert Level</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Center Circle with 3D effect */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0, rotateX: -90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ delay: 2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-white/5"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="text-center" style={{ transform: 'rotateY(0deg)' }}>
                    <p className="text-4xl font-bold gradient-text">7+</p>
                    <p className="text-xs text-white/50 mt-1">Years Exp.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="glass flex flex-col items-center gap-2 rounded-full px-5 py-3"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }}
        >
          <span className="text-xs text-white/60 font-mono">SCROLL</span>
          <ChevronDown className="h-4 w-4 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
