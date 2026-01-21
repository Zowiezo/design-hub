'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AuroraText } from './magicui/aurora-text'
import { RainbowButton } from './magicui/rainbow-button'
import { CoolMode } from './magicui/cool-mode'

const JoinLabCTA = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative p-12 md:p-20 rounded-[3rem] border border-[#37b7ff]/20 bg-[#050505] overflow-hidden text-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#37b7ff]/10 to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter text-white leading-tight">
                Have a vision for the <br />
                <AuroraText>Next Big Thing?</AuroraText>
              </h2>
              <p className="mt-6 text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                Whether it's a full-stack deployment or a brand evolution, our{' '}
                <span className="text-blue-100 font-normal">
                  Incubation Lab
                </span>{' '}
                is ready to engineer your digital future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <CoolMode>
                <Link href="/contact">
                  <RainbowButton className="px-12 py-8 text-xl text-blue-100 font-medium rounded-full">
                    Apply for Incubation
                  </RainbowButton>
                </Link>
              </CoolMode>

              <Link
                href="/services"
                className="group flex items-center gap-2 text-white/60 hover:text-[#37b7ff] transition-all tracking-widest text-xs uppercase font-medium"
              >
                View Service Modules
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Decorative Corner Ornaments */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-white/10 rounded-tl-[3rem]" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-white/10 rounded-br-[3rem]" />
        </div>
      </div>
    </section>
  )
}

export default JoinLabCTA
