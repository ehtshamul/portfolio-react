import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Send,
  Mail,
  MessageCircle,
  Link2,
  Code2,
  Briefcase,
  ExternalLink,
  Calendar,
} from 'lucide-react';

const socials = [
  { icon: Mail, label: 'Email', href: 'mailto:ehtshamhaqnawaz2@gmail.com' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/923160143685' },
  { icon: Link2, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ehtsham-ul-haq-web-developer/' },
  { icon: Code2, label: 'GitHub', href: 'https://github.com/ehtshamul' },
  { icon: Briefcase, label: 'Fiverr', href: 'https://www.fiverr.com/users/webmern' },
  { icon: ExternalLink, label: 'Upwork', href: 'https://upwork.com/freelancers/ehtshamul' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 2000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep/80 via-deep/60 to-deep/80" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-royal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-royal/10 text-royal text-sm font-semibold tracking-wider mb-4">
            CONTACT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-royal to-accent bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-royal/50"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-royal/50"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-royal/50">
                  <option value="" className="bg-deep">Select Service</option>
                  <option value="wordpress" className="bg-deep">WordPress Development</option>
                  <option value="woocommerce" className="bg-deep">WooCommerce</option>
                  <option value="lms" className="bg-deep">LMS Development</option>
                  <option value="speed" className="bg-deep">Speed Optimization</option>
                  <option value="seo" className="bg-deep">SEO</option>
                </select>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-royal/50">
                  <option value="" className="bg-deep">Budget Range</option>
                  <option value="500-1000" className="bg-deep">$500 - $1,000</option>
                  <option value="1000-3000" className="bg-deep">$1,000 - $3,000</option>
                  <option value="3000-5000" className="bg-deep">$3,000 - $5,000</option>
                  <option value="5000+" className="bg-deep">$5,000+</option>
                </select>
              </div>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-royal/50 resize-none"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-gradient-to-r from-royal to-accent rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === 'sent' ? (
                  'Message Sent!'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-5 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/80 text-sm">Available for new projects</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-5 hover:bg-white/5 transition-all group flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal/20 to-accent/20 flex items-center justify-center group-hover:from-royal/30 group-hover:to-accent/30 transition-all">
                    <social.icon className="w-5 h-5 text-royal" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-royal" />
                <h4 className="text-white font-semibold">Schedule a Call</h4>
              </div>
              <div className="bg-white/5 rounded-xl p-8 text-center">
                <p className="text-white/60 text-sm mb-4">Book a free 30-minute consultation</p>
                <div className="w-full h-32 bg-white/5 rounded-xl flex items-center justify-center">
                  <span className="text-white/30 text-sm">Calendly Widget Placeholder</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}