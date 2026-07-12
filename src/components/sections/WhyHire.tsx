import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  CheckCircle,
  Search,
  Rocket,
  MessageCircle,
  Smartphone,
  Shield,
  Layers,
  Code2,
  HeartHandshake,
} from 'lucide-react';

const advantages = [
  {
    icon: CheckCircle,
    title: 'Clean Code',
    description: 'Well-structured, maintainable code following best practices and industry standards.',
  },
  {
    icon: Search,
    title: 'SEO Friendly',
    description: 'Optimized for search engines to help your business rank higher and get found.',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Efficient project management ensuring timely delivery without compromising quality.',
  },
  {
    icon: MessageCircle,
    title: 'Clear Communication',
    description: 'Transparent updates and responsive communication throughout the project.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Pixel-perfect designs that look stunning on every device and screen size.',
  },
  {
    icon: Shield,
    title: 'Security & Performance',
    description: 'Hardened security practices and blazing-fast performance optimization.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business, handling increased traffic and features.',
  },
  {
    icon: Code2,
    title: 'Modern Technologies',
    description: 'Latest tools and frameworks for cutting-edge, future-proof solutions.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-term Support',
    description: 'Ongoing maintenance and support to keep your site running smoothly.',
  },
];

export default function WhyHire() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="whyhire" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep/80 via-deep/60 to-deep/80" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-royal/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-royal/10 text-royal text-sm font-semibold tracking-wider mb-4">
            WHY HIRE ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-royal to-accent bg-clip-text text-transparent">
              The Ehtisham Advantage
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 flex items-start gap-4 hover:bg-white/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                <advantage.icon className="w-6 h-6 text-royal" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">{advantage.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}