import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CounterAnimation } from '../../effects/CounterAnimation';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Countries Served' },
  { value: 20, suffix: '+', label: 'Technologies' },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-royal/5 via-transparent to-accent/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-royal to-accent bg-clip-text text-transparent mb-2">
                <CounterAnimation target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/60 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}