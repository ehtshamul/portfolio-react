import { useEffect, useState, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import CustomCursor from './effects/CustomCursor'
import GlobalScene from './components/three/GlobalScene'
import { GradientMesh } from './components/effects/GradientMesh'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import Timeline from './components/sections/Timeline'
import Testimonials from './components/sections/Testimonials'
import Stats from './components/sections/Stats'
import WhyHire from './components/sections/WhyHire'
import Process from './components/sections/Process'
import Contact from './components/sections/Contact'

function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 80)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      setProgress(100)
      setTimeout(onComplete, 300)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-deep flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
        >
          <span className="text-6xl md:text-8xl font-black gradient-text">EH</span>
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <div className="w-56 h-1.5 bg-white/10 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-royal via-purple to-cyan rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <motion.p
          className="text-white/40 text-sm mt-4 font-mono"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading experience...
        </motion.p>
      </div>
    </motion.div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />

          {/* Global 3D background */}
          <Suspense fallback={null}>
            <GlobalScene />
          </Suspense>
          <GradientMesh />

          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Services />
            <Portfolio />
            <Timeline />
            <Testimonials />
            <Stats />
            <WhyHire />
            <Process />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  )
}

export default App
