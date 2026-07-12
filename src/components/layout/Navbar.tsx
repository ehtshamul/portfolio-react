import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'
import MagneticButton from '../../effects/MagneticButton'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Work' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(section => {
        const top = (section as HTMLElement).offsetTop - 200
        if (window.pageYOffset >= top) {
          setActiveSection(section.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass-nav flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
            scrolled ? 'bg-deep/85 border-white/10' : ''
          }`}>
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero') }} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal via-purple to-cyan flex items-center justify-center font-black text-sm group-hover:scale-110 transition-transform">EH</div>
              <span className="font-bold text-lg hidden sm:block">Ehtsham</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === link.href.slice(1)
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-royal to-purple rounded-full"
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <MagneticButton
                className="hidden sm:inline-flex px-5 py-2.5 bg-gradient-to-r from-royal to-purple rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-purple/25 transition-all"
                onClick={() => scrollTo('#contact')}
              >
                <span className="flex items-center gap-2"><Send className="w-4 h-4" /> Hire Me</span>
              </MagneticButton>
              <button
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }} className="w-6 h-0.5 bg-white rounded-full block" />
                <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="w-6 h-0.5 bg-white rounded-full block" />
                <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0, width: mobileOpen ? 24 : 16 }} className="w-4 h-0.5 bg-white rounded-full block" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 top-0 bg-deep/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                className="text-3xl font-bold text-white/80 hover:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
            <MagneticButton
              className="px-8 py-3 bg-gradient-to-r from-royal to-purple rounded-xl font-semibold mt-4"
              onClick={() => scrollTo('#contact')}
            >
              Hire Me
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
