'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { SparklesText } from '../../components/magicui/sparkles-text'
import { CoolMode } from '../../components/magicui/cool-mode'
import { RainbowButton } from '../../components/magicui/rainbow-button'

import Social from '../../assets/images/social-media-planning.png'

const processSteps = [
  {
    icon: '💡',
    title: 'THINK',
    description: 'Where ideas spark and strategy begins.',
    color: 'from-yellow-400/20',
  },
  {
    icon: '🎨',
    title: 'CREATE',
    description: 'Visuals meet vibes and pixels meet precision.',
    color: 'from-purple-400/20',
  },
  {
    icon: '💻',
    title: 'BUILD',
    description: 'Clean code, seamless launches, tech that just works.',
    color: 'from-blue-400/20',
  },
  {
    icon: '🚀',
    title: 'LAUNCH',
    description: 'Strategy meets execution. Ready for the world.',
    color: 'from-green-400/20',
  },
]

const PreServicesSection = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Removed redundant <Head> and <Particles />.
        These are inherited from Layout.tsx for better performance.
      */}

      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter leading-tight">
              Elevate Your <br />
              <AnimatedGradientText className="inline-block" speed={3}>
                Digital Presence
              </AnimatedGradientText>
            </h2>
          </div>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-md">
            From idea to impact, we shape your digital future with architectural
            clarity and creative flair.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Side */}
          <div className="w-full lg:w-1/3 flex justify-center relative">
            {/* Decorative glow behind the image */}
            <div className="absolute inset-0 bg-[#37b7ff]/20 blur-[120px] rounded-full shrink-0" />
            <Image
              src={Social}
              alt="Process"
              width={450}
              height={450}
              className="relative z-10 w-full max-w-[320px] object-contain animate-float"
            />
          </div>

          {/* Steps Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`relative group p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${step.color} to-transparent transition-all duration-500`}
              >
                <div className="flex flex-col h-full justify-between gap-6">
                  <div className="text-4xl">{step.icon}</div>
                  <div>
                    <h3 className="text-2xl font-light tracking-widest mb-2 group-hover:text-[#37b7ff] transition-colors">
                      {/* Fixed: Passing title as children instead of text prop */}
                      <SparklesText sparklesCount={5}>
                        {step.title}
                      </SparklesText>
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            Crafting Excellence / 2024-2026
          </p>
          <Link href="/services">
            <CoolMode>
              <RainbowButton className="px-12 py-7 text-blue-100 text-xl rounded-full hover:text-[#37b7ff]">
                Explore Our Services
              </RainbowButton>
            </CoolMode>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PreServicesSection
