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
            className="font-montserrat text-5xl md:text-8xl font-thin tracking-tighter leading-none mb-10 uppercase"
          >
            Curating <br /> <AuroraText>Digital Excellence</AuroraText>
          </motion.h1>
          <p className="font-poppins text-lg md:text-xl text-gray-400 font-light leading-relaxed border-l border-[#37b7ff] pl-6 md:pl-10 max-w-3xl">
            The Design Hub Management is more than a studio—it is a creative tech 
            <span className="text-white"> incubation hub</span> where visionary 
            concepts are architected into high-performance digital legacies.
          </p>
        </header>

        {/* Section 2: Strategy • Identity • Code (The Anchor) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-40 py-24 border-y border-white/5"
        >
          <div className="absolute inset-0 bg-[#37b7ff]/5 blur-[120px] rounded-full opacity-30 pointer-events-none" />

          <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
            <span className="font-poppins text-[10px] md:text-xs uppercase tracking-[0.8em] text-[#37b7ff] font-bold mb-12 block">
              Strategy • Identity • Code
            </span>
            <h2 className="font-montserrat text-2xl md:text-5xl font-thin leading-tight text-white/90 italic tracking-tight uppercase">
              &quot;A creative tech studio crafting
              <span className="text-white font-normal not-italic text-[#37b7ff]"> unforgettable digital experiences </span>
              through intentional design, innovative code, and strategic excellence.&quot;
            </h2>
          </div>
        </motion.div>

        {/* Section 3: The Founder / Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="font-poppins space-y-8 text-base md:text-lg text-gray-300 font-light leading-relaxed">
              <p>
                We operate at the intersection of{' '}
                <span className="text-white font-normal underline decoration-[#37b7ff]/40 underline-offset-8">
                  UI/UX engineering, branding architecture, and strategic consulting.
                </span>
              </p>

              <p>
                Founded by{' '}
                <span className="text-[#37b7ff] font-medium italic">
                  Zoleka “Zowie” Kubheka
                </span>
                , the studio acts as a bridge between raw imagination and technical excellence. 
                With a focus on <span className="text-white">Inception to Launch</span>, we ensure every project 
                is built to scale.
              </p>

              <div className="p-10 bg-white/[0.02] rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
                <p className="relative z-10 font-poppins italic text-white/60 leading-loose text-sm md:text-base tracking-wide">
                  &quot;Our hub is guided by intentionality. We don&apos;t just build
                  websites; we engineer ecosystems that empower brands to scale
                  with dignity, clarity, and technical resilience.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-[#37b7ff]/10 blur-[120px] rounded-full" />
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
                className="relative z-10 rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10"
              />
            </motion.div>
          </div>
        </div>

        {/* Section 4: Mission & Vision (The Final Word) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-32">
          {/* Mission Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group p-12 bg-[#080808] rounded-[3rem] border border-white/5 hover:border-[#37b7ff]/30 transition-all duration-500"
          >
            <h2 className="font-montserrat text-3xl font-thin mb-8 tracking-[0.2em] uppercase">
              Our{' '}
              <AnimatedGradientText className="inline">
                Mission
              </AnimatedGradientText>
            </h2>
            <p className="font-poppins text-base text-gray-400 font-light leading-relaxed tracking-wide">
              To bridge the gap between complex technology and human-centric
              design, ensuring every venture in our hub launches with a
              competitive edge and a clear digital voice in the global
              marketplace.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group p-12 bg-[#080808] rounded-[3rem] border border-white/5 hover:border-[#37b7ff]/30 transition-all duration-500 lg:mt-16"
          >
            <h2 className="font-montserrat text-3xl font-thin mb-8 tracking-[0.2em] uppercase">
              Our{' '}
              <AnimatedGradientText className="inline">
                Vision
              </AnimatedGradientText>
            </h2>
            <p className="font-poppins text-base text-gray-400 font-light leading-relaxed tracking-wide">
              To be the primary catalyst for digital transformation, crafting a legacy 
              of innovation where creativity is the standard and technology is the 
              enabler for the Modern Era.
            </p>
          </motion.div>
        </div>

        {/* Section 5: Bottom Visual Accent */}
        <footer className="pt-24 border-t border-white/5 flex flex-col items-center text-center">
          <motion.div className="opacity-20 hover:opacity-100 transition-all duration-1000 grayscale hover:grayscale-0">
            <Image
              src={AboutDH2}
              alt="The Design Hub Branding"
              width={160}
              height={160}
              className="object-contain"
            />
          </motion.div>
          <p className="font-poppins mt-12 text-[9px] uppercase tracking-[0.6em] text-gray-600 font-medium">
            The Design Hub Management • Strategy • Identity • Code
          </p>
        </footer>
      </div>
    </section>
  )
}

export default About