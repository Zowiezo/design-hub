'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { AuroraText } from '../../components/magicui/aurora-text'

import AboutDH from '../../assets/images/web-background.png'
import AboutDH2 from '../../assets/images/htmlWeb.png'

const About = () => {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section 1: Editorial Header */}
        <header className="max-w-4xl mb-32 pt-12">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-extralight tracking-tighter leading-none mb-10"
          >
            Engineering <br /> <AuroraText>Digital Legacies</AuroraText>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed border-l-2 border-[#37b7ff] pl-6 md:pl-10 max-w-3xl">
            The Design Hub Management is more than a studio—it is a modern
            <span className="text-white"> incubation lab</span> where visionary
            concepts are architected into high-performance digital realities.
          </p>
        </header>

        {/* Section 2: The Manifesto (Your Favorite Paragraph) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-40 py-24 border-y border-white/5"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute inset-0 bg-[#37b7ff]/5 blur-[120px] rounded-full opacity-30 pointer-events-none" />

          <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#37b7ff] font-semibold mb-10 block">
              Our Core Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-extralight leading-tight text-white/90 italic tracking-tight">
              &quot;The Design Hub Management is a creative tech studio crafting
              <span className="text-white font-normal not-italic">
                {' '}
                unforgettable digital experiences{' '}
              </span>
              through intentional design, innovative code, and bold
              storytelling.&quot;
            </h2>
          </div>
        </motion.div>

        {/* Section 3: The Founder / Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-8 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              <p>
                We operate at the intersection of{' '}
                <span className="text-white font-normal underline decoration-[#37b7ff]/40 underline-offset-8">
                  UI/UX engineering, branding architecture, and full-stack
                  deployment.
                </span>
              </p>

              <p>
                Founded by{' '}
                <span className="text-[#37b7ff] font-medium italic">
                  Zoleka “Zowie” Kubheka
                </span>
                , a designer-engineer who views code as a creative medium, the
                studio was re-envisioned to act as a bridge between raw
                imagination and technical excellence.
              </p>

              <div className="p-10 bg-white/[0.03] rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
                <span className="absolute top-4 left-6 text-6xl text-[#37b7ff]/10 font-serif">
                  “
                </span>
                <p className="relative z-10 italic text-white/70 leading-loose text-base md:text-lg">
                  Our lab is guided by intentionality. We don&apos;t just build
                  websites; we engineer ecosystems that empower brands to scale
                  with dignity, clarity, and technical resilience.
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-[#37b7ff]/10 blur-[120px] rounded-full animate-pulse" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease: 'circOut' }}
              className="relative"
            >
              <Image
                src={AboutDH}
                alt="Studio Architecture"
                width={500}
                height={600}
                className="relative z-10 rounded-[3rem] shadow-2xl animate-float border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>

        {/* Section 4: Core Pillars (Mission & Vision) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-32">
          {/* Mission Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group p-12 bg-[#080808] rounded-[3.5rem] border border-white/5 hover:border-[#37b7ff]/30 transition-all duration-500"
          >
            <div className="mb-10 inline-block p-5 bg-[#37b7ff]/10 rounded-3xl text-3xl">
              🚀
            </div>
            <h2 className="text-4xl font-extralight mb-6 tracking-tight">
              Our{' '}
              <AnimatedGradientText className="inline">
                Mission
              </AnimatedGradientText>
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              To bridge the gap between complex technology and human-centric
              design, ensuring every venture in our lab launches with a
              competitive edge and a clear digital voice in the global
              marketplace.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group p-12 bg-[#080808] rounded-[3.5rem] border border-white/5 hover:border-[#37b7ff]/30 transition-all duration-500 lg:mt-16"
          >
            <div className="mb-10 inline-block p-5 bg-[#37b7ff]/10 rounded-3xl text-3xl">
              👁️
            </div>
            <h2 className="text-4xl font-extralight mb-6 tracking-tight">
              Our{' '}
              <AnimatedGradientText className="inline">
                Vision
              </AnimatedGradientText>
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              To be the primary catalyst for digital transformation in South
              Africa, crafting a legacy of innovation where creativity is the
              standard and technology is the enabler for generations to come.
            </p>
          </motion.div>
        </div>

        {/* Section 5: Bottom Visual Accent */}
        <footer className="pt-24 border-t border-white/5 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            whileHover={{ opacity: 1 }}
            className="transition-all duration-1000 grayscale hover:grayscale-0 cursor-crosshair"
          >
            <Image
              src={AboutDH2}
              alt="Tech Motif"
              width={200}
              height={200}
              className="object-contain"
            />
          </motion.div>
          <p className="mt-12 text-[10px] uppercase tracking-[0.5em] text-gray-600 font-medium">
            The Design Hub Management &copy; 2015—2026 / The Modern Era
          </p>
        </footer>
      </div>
    </section>
  )
}

export default About
