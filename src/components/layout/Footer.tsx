import { motion } from 'framer-motion'
import { Code2, Link2, Briefcase, ExternalLink, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative py-16 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-deep to-navy/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal via-purple to-cyan flex items-center justify-center font-black text-sm">EH</div>
              <span className="font-bold text-lg">Ehtsham Ul Haq</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
              Senior WordPress Developer & Full Stack Expert. Building enterprise-level websites, LMS platforms, and community solutions for clients worldwide.
            </p>
            <div className="flex items-center gap-2 text-sm text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for new projects
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-white/50 text-sm hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <div className="space-y-2">
              {['WordPress Development', 'Tutor LMS', 'BuddyBoss', 'WooCommerce', 'Full Stack Dev'].map(item => (
                <a key={item} href="#services" className="block text-white/50 text-sm hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-white/30 text-sm">&copy; 2026 Ehtsham Ul Haq. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {[
              { icon: <Code2 className="w-5 h-5" />, href: 'https://github.com/ehtshamul' },
              { icon: <Link2 className="w-5 h-5" />, href: 'https://www.linkedin.com/in/ehtsham-ul-haq-web-developer/' },
              { icon: <Briefcase className="w-5 h-5" />, href: 'https://www.fiverr.com/users/webmern' },
              { icon: <ExternalLink className="w-5 h-5" />, href: 'https://upwork.com/freelancers/ehtshamul' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 glass rounded-xl flex items-center justify-center z-40 hover:bg-white/10 transition-all"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}
