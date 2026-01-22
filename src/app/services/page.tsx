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
      className="relative bg-black text-white px-6 py-24 overflow-hidden border-t border-white/5"
      id="our-services"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#37b7ff]/5 blur-[120px] rounded-full pointer-events-none opacity-20" />

      {/* Heading */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-24">
        <h2 className="font-montserrat text-4xl md:text-7xl font-thin tracking-tighter mb-8 uppercase">
          Studio <AuroraText>Services</AuroraText>
        </h2>
        <div className="flex flex-col items-center gap-4">
           <p className="font-poppins text-gray-400 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between imagination and execution through strategic 
            architecture and engineered precision.
          </p>
          <div className="h-[1px] w-12 bg-[#37b7ff] mt-4 opacity-50" />
          <p className="font-poppins text-[#37b7ff] text-[10px] uppercase tracking-[0.6em] font-semibold">
            Strategy • Identity • Code
          </p>
        </div>
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
              className={`relative h-[450px] rounded-[3rem] cursor-pointer transition-all duration-700 border ${
                isActive
                  ? 'border-[#37b7ff]/50 bg-white/[0.03]'
                  : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/10'
              } backdrop-blur-md`}
              whileHover={!isActive ? { y: -8 } : {}}
            >
              <AnimatePresence mode="wait">
                {!isActive ? (
                  /* FRONT OF CARD */
                  <motion.div
                    key="front"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="h-full flex flex-col items-center justify-center p-10 text-center"
                  >
                    <div className="relative mb-10 p-8 bg-black/40 rounded-[2rem] border border-white/5 group-hover:border-[#37b7ff]/30 transition-all duration-500">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={70}
                        height={70}
                        className="object-contain animate-float group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <h3 className="font-montserrat text-xl font-thin tracking-[0.2em] mb-4 uppercase">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-3">
                       <span className="w-4 h-[1px] bg-[#37b7ff]/40" />
                       <p className="font-poppins text-[#37b7ff] text-[9px] tracking-[0.3em] font-medium">
                         VIEW SPECIFICATIONS
                       </p>
                       <span className="w-4 h-[1px] bg-[#37b7ff]/40" />
                    </div>
                  </motion.div>
                ) : (
                  /* BACK OF CARD (DETAILS) */
                  <motion.div
                    key="back"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full p-10 md:p-12 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col gap-2">
                           <h3 className="font-montserrat text-xl font-thin tracking-widest text-[#37b7ff] uppercase">
                            <AnimatedGradientText className="inline text-left m-0 p-0 bg-transparent border-none">
                              {service.title}
                            </AnimatedGradientText>
                          </h3>
                          {service.partner && (
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#37b7ff] animate-pulse" />
                              <span className="font-poppins text-[8px] uppercase tracking-[0.2em] text-white/60">
                                Powered by {service.partner}
                              </span>
                            </div>
                          )}
                        </div>
                        <button className="text-white/20 hover:text-white transition-colors text-sm font-light">
                          CLOSE ✕
                        </button>
                      </div>

                      <div className="space-y-4">
                        {service.details.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 group">
                            <span className="text-[#37b7ff] mt-2 w-1.5 h-[1px] bg-[#37b7ff] shrink-0" />
                            <p className="font-poppins text-gray-400 font-light leading-relaxed text-[13px] group-hover:text-white transition-colors">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                      <p className="font-poppins text-[9px] uppercase tracking-[0.4em] text-gray-600 font-medium">
                        Service Class / 00{index + 1}
                      </p>
                      {service.partner && (
                         <div className="font-montserrat text-[8px] font-bold tracking-tighter text-white opacity-40">
                            MEDIA<span className="text-[#37b7ff]">.CNR</span>
                         </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Brand Ethos Footer */}
      <div className="mt-28 text-center">
        <div className="inline-block py-2 px-6 border border-white/5 rounded-full bg-white/[0.02]">
           <p className="font-poppins text-gray-500 uppercase tracking-[0.5em] text-[9px] md:text-[10px]">
              Curating Digital Excellence / Bringing Vision to Life
           </p>
        </div>
      </div>
    </section>
  )
}

export default Services