import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your goals, audience, and requirements through in-depth consultation.',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Strategic roadmap with clear milestones, wireframes, and technical architecture.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building your solution with clean code, regular updates, and quality assurance.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Seamless deployment with ongoing maintenance and optimization support.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep/80 via-deep/60 to-deep/80" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-royal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-royal/10 text-royal text-sm font-semibold tracking-wider mb-4">
            PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-royal to-accent bg-clip-text text-transparent">
              How I Work
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl p-8 text-center hover:bg-white/5 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-royal to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-royal to-accent flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}