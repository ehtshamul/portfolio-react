import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, BookOpen } from 'lucide-react';
import CardTilt from '../../effects/CardTilt';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string[];
  tags: string[];
  emoji: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Multi-Instructor LMS Platform',
    description:
      'A comprehensive learning management system with multi-instructor support, course creation tools, and advanced analytics.',
    category: ['tutor-lms', 'wordpress', 'fullstack'],
    tags: ['WordPress', 'Tutor LMS', 'React', 'PHP'],
    emoji: '🎓',
  },
  {
    id: 2,
    title: 'University Community Portal',
    description:
      'A social learning platform connecting students, professors, and alumni with forums, groups, and event management.',
    category: ['buddyboss', 'wordpress', 'fullstack'],
    tags: ['WordPress', 'BuddyBoss', 'PHP', 'REST API'],
    emoji: '🏛️',
  },
  {
    id: 3,
    title: 'Premium E-Commerce Store',
    description:
      'A high-performance online store with custom product configurations, subscription plans, and integrated payment processing.',
    category: ['woocommerce', 'wordpress', 'fullstack'],
    tags: ['WooCommerce', 'WordPress', 'Stripe', 'React'],
    emoji: '🛍️',
  },
  {
    id: 4,
    title: 'Corporate SaaS Website',
    description:
      'A modern SaaS landing page with dynamic pricing, feature showcases, and integrated CRM functionality.',
    category: ['wordpress', 'fullstack'],
    tags: ['WordPress', 'ACF', 'React', 'Node.js'],
    emoji: '🚀',
  },
  {
    id: 5,
    title: 'Library Management System',
    description:
      'A complete digital library solution with catalog management, member tracking, and automated fine calculations.',
    category: ['fullstack'],
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    emoji: '📚',
  },
  {
    id: 6,
    title: 'Online School Academy',
    description:
      'A full-featured school platform with virtual classrooms, assignment submissions, grade tracking, and parent portals.',
    category: ['tutor-lms', 'buddyboss', 'wordpress', 'fullstack'],
    tags: ['WordPress', 'Tutor LMS', 'BuddyBoss', 'PHP'],
    emoji: '🏫',
  },
];

const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'WordPress', value: 'wordpress' },
  { label: 'Tutor LMS', value: 'tutor-lms' },
  { label: 'BuddyBoss', value: 'buddyboss' },
  { label: 'WooCommerce', value: 'woocommerce' },
  { label: 'Full Stack', value: 'fullstack' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section
      id="portfolio"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-royal to-purple" />
            <span className="text-sm font-medium text-white/70">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Featured{' '}
            </span>
            <span className="bg-gradient-to-r from-royal via-purple to-cyan bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A showcase of my best work across WordPress, LMS platforms, and full-stack development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-royal to-purple text-white shadow-lg shadow-royal/25'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <CardTilt>
                  <div className="group glass rounded-3xl overflow-hidden transition-all duration-500 hover:translate-y-[-8px]">
                    <div className="relative h-52 bg-gradient-to-br from-royal/30 via-purple/30 to-cyan/30 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-7xl">
                        {project.emoji}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6 gap-4">
                        <a
                          href="#"
                          className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:bg-white/30 transition-colors"
                        >
                          <Code2 size={16} />
                          GitHub
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:bg-white/30 transition-colors"
                        >
                          <BookOpen size={16} />
                          Case Study
                        </a>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-white/5 text-white/60 rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-royal transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardTilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
