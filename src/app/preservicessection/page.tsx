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
    icon: '01',
    title: 'STRATEGIZE',
    description: 'The Inception. We define the blueprint and map the digital landscape.',
    color: 'from-blue-500/20',
  },
  {
    icon: '02',
    title: 'IDENTIFY',
    description: 'Curating the visual soul. Where brand identity meets premium UX.',
    color: 'from-violet-500/20',
  },
  {
    icon: '03',
    title: 'ENGINEER',
    description: 'Precision code. Building robust, scalable digital infrastructure.',
    color: 'from-pink-500/20',
  },
  {
    icon: '04',
    title: 'LAUNCH',
    description: 'The final moment. Deploying excellence to the world.',
    color: 'from-orange-500/20',
  },
]

const PreServicesSection = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <h2 className="font-montserrat text-4xl md:text-6xl font-thin tracking-tighter leading-tight uppercase">
              Curating <br />
              <AnimatedGradientText className="inline-block" speed={3}>
                Digital Excellence
              </AnimatedGradientText>
            </h2>
          </div>
          <p className="font-poppins text-gray-400 text-base md:text-lg font-light max-w-md leading-relaxed">
            From the first spark of inception to the final moment of launch, 
            we architect your future with technical precision.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Side */}
          <div className="w-full lg:w-1/3 flex justify-center relative">
            <div className="absolute inset-0 bg-[#37b7ff]/10 blur-[120px] rounded-full shrink-0" />
            <Image
              src={Social}
              alt="Strategic Process"
              width={450}
              height={450}
              className="relative z-10 w-full max-w-[320px] object-contain opacity-80"
            />
          </div>

          {/* Steps Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`relative group p-10 rounded-[2rem] border border-white/5 bg-gradient-to-br ${step.color} to-transparent backdrop-blur-sm transition-all duration-500`}
              >
                <div className="flex flex-col h-full justify-between gap-8">
                  <div className="font-montserrat text-xs tracking-[0.5em] text-[#37b7ff] font-bold opacity-50 group-hover:opacity-100">
                    PHASE {step.icon}
                  </div>
                  <div>
                    <h3 className="font-montserrat text-2xl font-thin tracking-[0.2em] mb-4 group-hover:text-[#37b7ff] transition-colors uppercase">
                      <SparklesText sparklesCount={3}>
                        {step.title}
                      </SparklesText>
                    </h3>
                    <p className="font-poppins text-gray-400 text-sm font-light leading-relaxed tracking-wide">
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
          <div className="space-y-1">
            <p className="font-poppins text-[10px] uppercase tracking-[0.6em] text-[#37b7ff] font-semibold">
              Strategy • Identity • Code
            </p>
            <p className="font-poppins text-[9px] uppercase tracking-[0.3em] text-gray-600">
              Bringing Vision to Life / 2024-2026
            </p>
          </div>
          <Link href="/services">
            <CoolMode>
              <RainbowButton className="font-poppins px-12 py-7 text-xs text-blue-50 uppercase tracking-widest rounded-full">
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