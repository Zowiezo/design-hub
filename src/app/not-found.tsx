'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Particles } from '@/components/magicui/particles'

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden selection:bg-[#37b7ff]/30">
      {/* Background Particles - Lower quantity for subtle depth */}
      <div className="absolute inset-0 z-0">
        <Particles
          className="h-full w-full"
          color="#37b7ff"
          quantity={180}
          size={0.05}
        />
      </div>

      {/* Central Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Architectural Watermark */}
          <div className="relative">
            <h1 className="font-montserrat text-[140px] md:text-[240px] font-thin leading-none tracking-tighter text-white opacity-5 select-none">
              404
            </h1>
            
            {/* Overlaying Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-8 md:mt-12">
              <h2 className="font-montserrat text-xl md:text-3xl font-thin text-white uppercase tracking-[0.4em] mb-4">
                Architecture <span className="text-[#37b7ff]">Mismatch</span>
              </h2>
              <p className="font-poppins text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.6em] max-w-xs md:max-w-md mx-auto leading-loose">
                Coordinate not found in current ecosystem
              </p>
            </div>
          </div>

          {/* Action Button - Placed below the central visual */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 md:mt-20"
          >
            <Link 
              href="/"
              className="group relative inline-flex items-center gap-6 px-10 py-4 border border-[#37b7ff]/20 rounded-full transition-all duration-700 hover:bg-[#37b7ff] hover:border-[#37b7ff] hover:shadow-[0_0_30px_rgba(55,183,255,0.2)]"
            >
              <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.5em] text-[#37b7ff] group-hover:text-black transition-colors">
                Return to Inception
              </span>
              <span className="text-[#37b7ff] group-hover:text-black transition-colors text-xl">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Studio Footer Reference - Positioned at the extreme bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 w-full text-center"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="h-[1px] w-8 bg-[#37b7ff]/30" />
          <p className="font-poppins text-[8px] text-gray-500 uppercase tracking-[1.2em] ml-[1.2em]">
            The Design Hub Management • Engineered Excellence
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound