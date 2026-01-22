'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AuroraText } from './magicui/aurora-text'
import { RainbowButton } from './magicui/rainbow-button'
import { CoolMode } from './magicui/cool-mode'

const JoinLabCTA = () => {
  return (
    <section className="py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative p-12 md:p-20 rounded-[3.5rem] border border-[#37b7ff]/10 bg-white/[0.01] overflow-hidden text-center backdrop-blur-3xl shadow-2xl">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#37b7ff]/5 blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-montserrat text-3xl md:text-6xl font-thin tracking-tighter text-white leading-tight uppercase">
                Initiate the <br />
                <AuroraText>Next Evolution</AuroraText>
              </h2>
              <p className="font-poppins mt-8 text-gray-400 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
                Whether it&apos;s a full-stack deployment or a brand architecture, our 
                <span className="text-[#37b7ff] font-medium"> Incubation Lab </span> 
                is ready to engineer your digital legacy.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-10">
              <CoolMode>
                <Link href="/contact">
                  <RainbowButton className="font-poppins px-14 py-8 text-[10px] uppercase tracking-[0.5em] font-bold text-white rounded-full">
                    Apply for Incubation
                  </RainbowButton>
                </Link>
              </CoolMode>

              <Link href="/services" className="font-poppins group flex items-center gap-3 text-white/40 hover:text-[#37b7ff] transition-all tracking-[0.4em] text-[9px] uppercase font-bold">
                Technical Modules
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Architectural Ornaments */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#37b7ff]/20 rounded-tl-[3.5rem]" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[#37b7ff]/20 rounded-br-[3.5rem]" />
        </div>
      </div>
    </section>
  )
}

export default JoinLabCTA