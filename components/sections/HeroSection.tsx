'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <p className="text-white/70 uppercase tracking-[0.3em] mb-6 text-sm">
            Infrastructure & Development
          </p>

          <h1 className="text-white text-6xl md:text-8xl font-semibold leading-none">
            Building Mongolia’s Future
          </h1>

          <p className="mt-8 text-white/80 text-lg md:text-xl max-w-xl leading-8">
            Modern construction, infrastructure, and industrial development
            across Mongolia.
          </p>

          <button className="mt-10 px-8 py-4 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition">
            View Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}