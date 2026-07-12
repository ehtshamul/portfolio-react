import { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

const skillCategories = [
  {
    title: 'WordPress & CMS',
    icon: '🔧',
    color: 'blue',
    skills: [
      { name: 'WordPress Development', percentage: 95 },
      { name: 'Custom Theme Development', percentage: 92 },
      { name: 'Plugin Development', percentage: 88 },
      { name: 'Elementor & Page Builders', percentage: 90 },
    ],
  },
  {
    title: 'LMS & E-Learning',
    icon: '🎓',
    color: 'purple',
    skills: [
      { name: 'Tutor LMS', percentage: 95 },
      { name: 'LearnDash', percentage: 85 },
      { name: 'Course Creation', percentage: 90 },
      { name: 'Quiz & Assessment Systems', percentage: 88 },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'cyan',
    skills: [
      { name: 'React & Next.js', percentage: 92 },
      { name: 'TypeScript', percentage: 88 },
      { name: 'Tailwind CSS', percentage: 95 },
      { name: 'Framer Motion', percentage: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'green',
    skills: [
      { name: 'Node.js', percentage: 88 },
      { name: 'PHP & REST APIs', percentage: 90 },
      { name: 'MySQL & Databases', percentage: 85 },
      { name: 'Server Management', percentage: 82 },
    ],
  },
  {
    title: 'Performance & SEO',
    icon: '🚀',
    color: 'yellow',
    skills: [
      { name: 'Core Web Vitals', percentage: 92 },
      { name: 'Technical SEO', percentage: 90 },
      { name: 'Caching & CDN', percentage: 88 },
      { name: 'Image Optimization', percentage: 95 },
    ],
  },
  {
    title: 'Design & Tools',
    icon: '✨',
    color: 'pink',
    skills: [
      { name: 'Figma & Design Systems', percentage: 88 },
      { name: 'Git & Version Control', percentage: 90 },
      { name: 'Docker & DevOps', percentage: 80 },
      { name: 'CI/CD Pipelines', percentage: 78 },
    ],
  },
]

const colorMap: Record<string, { bg: string; fill: string; text: string; glow: string }> = {
  blue: {
    bg: 'bg-blue-500/10',
    fill: 'bg-gradient-to-r from-blue-500 to-blue-400',
    text: 'text-blue-400',
    glow: '0 0 30px rgba(59,130,246,0.3)',
  },
  purple: {
    bg: 'bg-purple-500/10',
    fill: 'bg-gradient-to-r from-purple-500 to-purple-400',
    text: 'text-purple-400',
    glow: '0 0 30px rgba(139,92,246,0.3)',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    fill: 'bg-gradient-to-r from-cyan-500 to-cyan-400',
    text: 'text-cyan-400',
    glow: '0 0 30px rgba(6,182,212,0.3)',
  },
  green: {
    bg: 'bg-green-500/10',
    fill: 'bg-gradient-to-r from-green-500 to-green-400',
    text: 'text-green-400',
    glow: '0 0 30px rgba(34,197,94,0.3)',
  },
  yellow: {
    bg: 'bg-yellow-500/10',
    fill: 'bg-gradient-to-r from-yellow-500 to-yellow-400',
    text: 'text-yellow-400',
    glow: '0 0 30px rgba(234,179,8,0.3)',
  },
  pink: {
    bg: 'bg-pink-500/10',
    fill: 'bg-gradient-to-r from-pink-500 to-pink-400',
    text: 'text-pink-400',
    glow: '0 0 30px rgba(236,72,153,0.3)',
  },
}

function SkillBar({
  name,
  percentage,
  color,
  delay,
}: {
  name: string
  percentage: number
  color: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const colors = colorMap[color]

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-300">{name}</span>
        <span className={`${colors.text} font-medium`}>{percentage}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${colors.fill}`}
          initial={{ width: 0, scaleX: 0 }}
          animate={isInView ? { width: `${percentage}%`, scaleX: 1 } : { width: 0, scaleX: 0 }}
          transition={{ duration: 1.2, delay: delay * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </div>
  )
}

function SkillCard({ category, index, isInView }: {
  category: typeof skillCategories[0]
  index: number
  isInView: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const colors = colorMap[category.color]

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="glass rounded-3xl p-8 relative overflow-hidden group"
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      whileHover={{
        y: -8,
        boxShadow: colors.glow,
        transition: { duration: 0.3 },
      }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${colors.glow.replace('0 0 30px', 'rgba(255,255,255,0.05)')}, transparent 60%)`,
        }}
      />

      {/* Top line accent */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, transparent, ${colors.text.replace('text-', '#').replace('-400', '')}, transparent)` }}
      />

      <div className="flex items-center gap-4 mb-6" style={{ transform: 'translateZ(20px)' }}>
        <motion.div
          className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center text-2xl`}
          whileHover={{ scale: 1.15, rotateZ: 10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {category.icon}
        </motion.div>
        <h3 className="text-lg font-semibold text-white">
          {category.title}
        </h3>
      </div>

      <div className="space-y-4" style={{ transform: 'translateZ(10px)' }}>
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            color={category.color}
            delay={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-5 py-2 rounded-full glass text-sm font-semibold text-white/70 mb-6 tracking-wider"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            EXPERTISE
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text">Skills & Technologies</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Mastering modern technologies to build exceptional digital experiences
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
