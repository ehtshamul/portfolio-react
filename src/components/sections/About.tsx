import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, GraduationCap, Layout, Palette, Zap } from 'lucide-react';
import { CounterAnimation } from '../../effects/CounterAnimation';

const stats = [
  { label: 'Projects', value: 50 },
  { label: 'Clients', value: 30 },
  { label: 'Countries', value: 15 },
];

const roleCards = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Full-Stack Developer',
    description:
      'Building end-to-end web applications with modern frameworks and scalable architectures.',
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: 'WordPress Expert',
    description:
      'Custom themes, plugins, and enterprise WordPress solutions for businesses worldwide.',
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'LMS Specialist',
    description:
      'Tutor LMS and eLearning platform development with gamification and community features.',
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'UI/UX Designer',
    description:
      'Creating intuitive, beautiful interfaces that enhance user engagement and satisfaction.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Performance Optimizer',
    description:
      'Speed optimization, caching strategies, and Core Web Vitals improvement.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="glass mb-4 inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-purple-300">
            ABOUT ME
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Crafting{' '}
            <span className="gradient-text">Digital Experiences</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Bio Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="glass rounded-3xl p-8 hover:bg-white/5 transition-all"
            >
              {/* Photo Placeholder */}
              <div className="mb-6 flex items-center gap-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-3xl font-bold text-white shadow-lg shadow-purple-500/25">
                  EH
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Ehtsham</h3>
                  <p className="text-white/60">Full-Stack Developer</p>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-white/40">
                    <span className="inline-block h-2 w-2 rounded-full bg-blue-400" />
                    Pakistan
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-white/60">
                <p>
                  Passionate full-stack developer with over 7 years of experience
                  building enterprise-grade web applications and digital solutions
                  for clients across the globe.
                </p>
                <p>
                  I specialize in WordPress development, LMS platforms like Tutor LMS,
                  and modern JavaScript frameworks including React and Node.js. My focus
                  is on creating scalable, performant, and user-friendly applications
                  that drive business growth.
                </p>
                <p>
                  From custom plugin development to complete platform architectures,
                  I deliver solutions that exceed expectations and stand the test of time.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-all"
                >
                  <div className="text-3xl font-bold text-white">
                    <CounterAnimation
                      target={stat.value}
                    />
                  </div>
                  <p className="mt-1 text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Role Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            {roleCards.map((card) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className="glass group rounded-3xl p-8 hover:bg-white/5 transition-all"
              >
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {card.title}
                    </h4>
                    <p className="mt-1 text-sm text-white/50">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
