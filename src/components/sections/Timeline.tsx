import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  side: 'left' | 'right';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: '2024',
    title: 'Senior WordPress Developer',
    description:
      'Leading enterprise-level WordPress projects with a focus on scalability, performance, and complex custom integrations.',
    side: 'left',
  },
  {
    id: 2,
    date: '2023',
    title: 'LMS Specialist',
    description:
      'Specialized in building advanced learning management systems using Tutor LMS and custom educational platforms.',
    side: 'right',
  },
  {
    id: 3,
    date: '2022',
    title: 'Full Stack Developer',
    description:
      'Expanded skill set to full-stack development with React, Node.js, and modern JavaScript frameworks.',
    side: 'left',
  },
  {
    id: 4,
    date: '2021',
    title: 'WordPress Developer',
    description:
      'Started professional WordPress development, building custom themes, plugins, and client websites.',
    side: 'right',
  },
  {
    id: 5,
    date: '2020',
    title: 'Learning & Freelancing',
    description:
      'Began my journey into web development through self-learning and freelancing on various platforms.',
    side: 'left',
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-royal/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-royal to-purple" />
            <span className="text-sm font-medium text-white/70">JOURNEY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              My{' '}
            </span>
            <span className="bg-gradient-to-r from-royal via-purple to-cyan bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            The milestones that have shaped my career in web development
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5">
            <div className="w-full h-full bg-gradient-to-b from-royal via-purple to-cyan" />
          </div>

          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5">
            <div className="w-full h-full bg-gradient-to-b from-royal via-purple to-cyan" />
          </div>

          <div className="space-y-12 md:space-y-0">
            {timelineData.map((item, index) => {
              const ref = useRef<HTMLDivElement>(null);
              const isInView = useInView(ref, { once: true, margin: '-100px' });
              const isLeft = item.side === 'left';

              return (
                <div
                  key={item.id}
                  ref={ref}
                  className="relative md:flex md:items-center md:min-h-[160px]"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-royal to-purple shadow-lg shadow-royal/50" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="md:hidden absolute left-4 -translate-x-1/2 z-10"
                  >
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-royal to-purple shadow-lg shadow-royal/50" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`w-full pl-12 md:pl-0 ${
                      isLeft ? 'md:pr-[calc(50%+40px)]' : 'md:pl-[calc(50%+40px)]'
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 hover:bg-white/5 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-royal to-purple">
                          <Briefcase size={18} className="text-white" />
                        </div>
                        <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-royal/20 to-purple/20 text-royal rounded-full border border-royal/30">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
