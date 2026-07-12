import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'James Davidson',
    country: '🇺🇸',
    initials: 'JD',
    quote: 'Ehtisham delivered a WordPress site that exceeded all expectations. The performance optimizations brought our load time from 6s to under 1.5s. Incredible work!',
  },
  {
    name: 'Sarah Khan',
    country: '🇬🇧',
    initials: 'SK',
    quote: 'Our WooCommerce store\'s conversion rate jumped 40% after the redesign. The attention to detail and clean code is truly impressive.',
  },
  {
    name: 'Michael Anderson',
    country: '🇦🇺',
    initials: 'MA',
    quote: 'The LMS platform built for our training center handles 500+ concurrent users flawlessly. Professional, responsive, and technically brilliant.',
  },
  {
    name: 'Lars Petersen',
    country: '🇩🇪',
    initials: 'LP',
    quote: 'From SEO optimization to speed tuning, Ehtisham knows WordPress inside and out. Our organic traffic doubled within three months.',
  },
  {
    name: 'Amira Rodriguez',
    country: '🇪🇸',
    initials: 'AR',
    quote: 'Working with Ehtisham was seamless. Clear communication, timely delivery, and a final product that perfectly matched our vision.',
  },
  {
    name: 'Tariq Nasir',
    country: '🇦🇪',
    initials: 'TN',
    quote: 'The scalability of the solution built for our e-commerce business has been phenomenal. We\'ve grown 3x without any technical issues.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep/80 via-deep/60 to-deep/80" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-royal/10 text-royal text-sm font-semibold tracking-wider mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-royal to-accent bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl p-8 hover:bg-white/5 transition-all"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal to-accent flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <span className="text-white/50 text-sm">{testimonial.country}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}