'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { servicesData } from '../../data/servicesData'
import { AuroraText } from '../../components/magicui/aurora-text'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import Image from 'next/image'

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <section
      className="relative bg-black text-white px-6 py-24"
      id="our-services"
    >
      {/* Particles/Head handled by Layout.tsx */}

      {/* Heading */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-6">
          Our <AuroraText>Services</AuroraText>
        </h1>
        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          We bridge the gap between imagination and execution, blending creative
          strategy with technical precision.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {servicesData.map((service, index) => {
          const isActive = activeService === index

          return (
            <motion.div
              key={index}
              layout
              onClick={() => setActiveService(isActive ? null : index)}
              className={`relative h-[400px] rounded-[2.5rem] cursor-pointer transition-all duration-500 border ${
                isActive
                  ? 'border-[#37b7ff] bg-[#0a0a0a]'
                  : 'border-white/10 bg-white/5 hover:bg-white/10'
              }`}
              whileHover={!isActive ? { y: -10 } : {}}
            >
              <AnimatePresence mode="wait">
                {!isActive ? (
                  /* FRONT OF CARD */
                  <motion.div
                    key="front"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="relative mb-8 p-6 bg-black/40 rounded-3xl border border-white/5 group-hover:border-[#37b7ff]/50 transition-all">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={80}
                        height={80}
                        className="object-contain animate-float"
                      />
                    </div>
                    <h3 className="text-2xl font-light tracking-wide mb-2 uppercase">
                      {service.title}
                    </h3>
                    <p className="text-[#37b7ff] text-sm tracking-[0.2em] font-medium opacity-70">
                      CLICK TO EXPLORE
                    </p>
                  </motion.div>
                ) : (
                  /* BACK OF CARD (DETAILS) */
                  <motion.div
                    key="back"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-full p-10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-light text-[#37b7ff]">
                          <AnimatedGradientText className="inline">
                            {service.title}
                          </AnimatedGradientText>
                        </h3>
                        <button className="text-white/40 hover:text-white transition-colors text-xl">
                          ✕
                        </button>
                      </div>

                      <div className="space-y-4">
                        {service.details.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="text-[#37b7ff] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#37b7ff] shrink-0" />
                            <p className="text-gray-300 font-light leading-snug">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Service Category: 0{index + 1}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Branding Marquee placeholder or bottom CTA */}
      <div className="mt-24 text-center">
        <p className="text-blue-500 uppercase tracking-[0.4em] text-xs">
          Tailored Solutions / Timeless Design / Innovative Code
        </p>
      </div>
    </section>
  )
}

export default Services
