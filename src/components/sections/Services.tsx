import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Globe,
  GraduationCap,
  Users,
  ShoppingCart,
  Rocket,
  Lock,
  Building2,
  Wrench,
  Code2,
} from 'lucide-react'

const services = [
  {
    title: 'WordPress Development',
    description:
      'Custom WordPress solutions tailored to your business needs with modern, scalable architectures.',
    icon: Globe,
    tags: ['WordPress', 'PHP', 'Custom Themes'],
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-500/10',
  },
  {
    title: 'Tutor LMS',
    description:
      'Complete e-learning platforms with course management, quizzes, and student tracking systems.',
    icon: GraduationCap,
    tags: ['Tutor LMS', 'E-Learning', 'Courses'],
    gradient: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-500/10',
  },
  {
    title: 'BuddyBoss Community',
    description:
      'Build thriving online communities with profiles, groups, and social networking features.',
    icon: Users,
    tags: ['BuddyBoss', 'Community', 'Social'],
    gradient: 'from-pink-500 to-pink-600',
    bg: 'bg-pink-500/10',
  },
  {
    title: 'WooCommerce Store',
    description:
      'Full-featured e-commerce solutions with payment integration and inventory management.',
    icon: ShoppingCart,
    tags: ['WooCommerce', 'E-Commerce', 'Payments'],
    gradient: 'from-green-500 to-green-600',
    bg: 'bg-green-500/10',
  },
  {
    title: 'Membership Website',
    description:
      'Subscription-based platforms with content restriction, member dashboards, and payment gates.',
    icon: Lock,
    tags: ['Memberships', 'Subscriptions', 'Content'],
    gradient: 'from-yellow-500 to-yellow-600',
    bg: 'bg-yellow-500/10',
  },
  {
    title: 'Landing Page',
    description:
      'High-converting landing pages designed to capture leads and drive user engagement.',
    icon: Rocket,
    tags: ['Landing Pages', 'Conversion', 'UI/UX'],
    gradient: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-500/10',
  },
  {
    title: 'Business Website',
    description:
      'Professional corporate websites that establish credibility and drive business growth.',
    icon: Building2,
    tags: ['Corporate', 'Professional', 'Branding'],
    gradient: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-500/10',
  },
  {
    title: 'Website Optimization',
    description:
      'Speed optimization, Core Web Vitals improvement, and performance tuning for existing sites.',
    icon: Wrench,
    tags: ['Performance', 'Speed', 'SEO'],
    gradient: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-500/10',
  },
  {
    title: 'Custom Development',
    description:
      'Bespoke web applications and solutions built from scratch to meet unique requirements.',
    icon: Code2,
    tags: ['Custom', 'React', 'Node.js'],
    gradient: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-500/10',
  },
]

const tagColors: Record<string, string> = {
  WordPress: 'bg-blue-500/20 text-blue-300',
  PHP: 'bg-purple-500/20 text-purple-300',
  'Custom Themes': 'bg-indigo-500/20 text-indigo-300',
  'Tutor LMS': 'bg-purple-500/20 text-purple-300',
  'E-Learning': 'bg-violet-500/20 text-violet-300',
  Courses: 'bg-fuchsia-500/20 text-fuchsia-300',
  BuddyBoss: 'bg-pink-500/20 text-pink-300',
  Community: 'bg-rose-500/20 text-rose-300',
  Social: 'bg-red-500/20 text-red-300',
  WooCommerce: 'bg-green-500/20 text-green-300',
  'E-Commerce': 'bg-emerald-500/20 text-emerald-300',
  Payments: 'bg-teal-500/20 text-teal-300',
  Memberships: 'bg-yellow-500/20 text-yellow-300',
  Subscriptions: 'bg-amber-500/20 text-amber-300',
  Content: 'bg-lime-500/20 text-lime-300',
  'Landing Pages': 'bg-cyan-500/20 text-cyan-300',
  Conversion: 'bg-sky-500/20 text-sky-300',
  'UI/UX': 'bg-teal-500/20 text-teal-300',
  Corporate: 'bg-indigo-500/20 text-indigo-300',
  Professional: 'bg-violet-500/20 text-violet-300',
  Branding: 'bg-purple-500/20 text-purple-300',
  Performance: 'bg-orange-500/20 text-orange-300',
  Speed: 'bg-amber-500/20 text-amber-300',
  SEO: 'bg-yellow-500/20 text-yellow-300',
  Custom: 'bg-rose-500/20 text-rose-300',
  React: 'bg-cyan-500/20 text-cyan-300',
  'Node.js': 'bg-green-500/20 text-green-300',
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 mb-6">
            SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              What I Offer
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end web development services to bring your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className="glass rounded-3xl p-8 group hover:bg-white/5 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        tagColors[tag] || 'bg-white/10 text-gray-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
