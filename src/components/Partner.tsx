'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp, Search, Megaphone } from 'lucide-react'

const PartnersSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-montserrat text-xs font-bold uppercase tracking-[0.5em] text-[#37b7ff] mb-4">
            Ecosystem Partners
          </h2>
          <h3 className="font-montserrat text-3xl md:text-5xl font-thin text-white tracking-tighter uppercase">
            Strategic <span className="text-gray-500">Collaborations</span>
          </h3>
        </div>

        {/* Media.CNR Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-8 md:p-12 relative group"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="h-12 w-auto">
                {/* Replace with Media.CNR Logo if available */}
                <span className="font-montserrat text-2xl font-bold tracking-tighter text-white">
                  MEDIA<span className="text-[#37b7ff]">.CNR</span>
                </span>
              </div>
              <a 
                href="https://www.mediacnr.co.za" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#37b7ff] transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>

            <p className="font-poppins text-gray-400 font-light leading-relaxed mb-8 text-lg">
              Our official partner for Digital Growth & Performance. Media.CNR specializes in 
              the surgical execution of SEO, data-driven marketing strategies, and multi-channel 
              visibility campaigns that ensure your digital legacy is found by the right audience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white font-bold">
                <Search size={14} className="text-[#37b7ff]" /> Search Engine Optimization
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white font-bold">
                <TrendingUp size={14} className="text-[#37b7ff]" /> Growth Strategy
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white font-bold">
                <Megaphone size={14} className="text-[#37b7ff]" /> Performance Marketing
              </div>
            </div>
          </motion.div>

          {/* Contextual Text */}
          <div className="space-y-6">
            <p className="font-poppins text-sm text-gray-500 uppercase tracking-widest leading-loose">
              We believe in specialized excellence. While we architect the technical and visual 
              infrastructure of your brand, <span className="text-white">Media<span className='text-red-600'>.</span>CNR</span> drives the 
              narrative and visibility. Together, we provide a 360° approach to the modern era of 
              business growth.
            </p>
            <div className="h-[1px] w-24 bg-[#37b7ff]/30" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection