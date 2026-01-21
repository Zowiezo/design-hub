'use client'

import React from 'react'
import { cn } from '../components/lib/utils'
import { motion } from 'framer-motion'

interface PreServiceCardProps {
  icon: string
  title: string
  description: string
  link: string // You can wrap the component in a Link in the parent
  className?: string
}

const PreServiceCard: React.FC<PreServiceCardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        'group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#37b7ff]/50 hover:bg-white/[0.08]',
        className,
      )}
    >
      {/* Dynamic Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#37b7ff]/10 blur-[50px] transition-all duration-500 group-hover:bg-[#37b7ff]/20" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Animated Icon Container */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/40 border border-white/5 text-4xl shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <span className="drop-shadow-[0_0_15px_rgba(55,183,255,0.5)]">
            {icon}
          </span>
        </div>

        {/* Content */}
        <h3 className="mb-3 text-lg font-light tracking-widest uppercase text-white">
          {title}
        </h3>

        <div className="mb-4 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#37b7ff] to-transparent opacity-50 group-hover:w-24 transition-all duration-500" />

        <p className="text-sm font-light leading-relaxed text-gray-400 group-hover:text-gray-200 transition-colors">
          {description}
        </p>
      </div>

      {/* Subtle Bottom Border Light */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#37b7ff] to-transparent transition-all duration-700 group-hover:w-full" />
    </motion.div>
  )
}

export default PreServiceCard
