'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { servicesData } from '../../data/servicesData'
import { AuroraText } from '../../components/magicui/aurora-text'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { SparklesText } from '../../components/magicui/sparkles-text'
import { Particles } from '../../components/magicui/particles'
import Image from 'next/image'
import Head from 'next/head'

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <section
      className="relative bg-black text-white px-6 py-24 md:px-12 lg:px-24"
      id="our-services"
    >
      <Head>
        <title>The Design Hub | Our Services</title>
        <meta
          name="description"
          content="We blend creativity and technology to deliver stunning design, branding, and web development solutions."
        />
        <meta
          name="keywords"
          content="The Design Hub, TDHM, UI/UX Design, Web Development, Digital Marketing, Branding, Creative Studio, South Africa"
        />
      </Head>

      {/* Particles Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color="#37b7ff"
        quantity={250}
        ease={80}
        size={0.05}
      />

      {/* Heading */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
          Our Services
        </p>
        <p className="text-lg md:text-xl mb-[2.5rem] text-gray-300">
          <AuroraText>
            Explore what we do best — each service blends creativity with
            strategy and code.
          </AuroraText>
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {servicesData.map((service, index) => {
          const isActive = activeService === index

          return (
            <motion.div
              key={index}
              onClick={() => setActiveService(isActive ? null : index)}
              className="relative bg-[#000] rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center text-center px-4 shadow-lg transition-all"
              style={{
                width: isActive ? '100%' : '100%',
                maxWidth: isActive ? '22rem' : '18rem',
                height: isActive ? '22rem' : '16rem',
                zIndex: isActive ? 20 : 1,
              }}
              layout
              whileHover={{ y: -10, scale: 1.05 }} // floating effect
              animate={
                !isActive
                  ? {
                      scale: [1, 1.02, 1], // breathing
                      boxShadow: [
                        '0 0 4px rgba(255,0,150,0.8)',
                        '0 0 4px rgba(0,200,255,0.8)',
                        '0 0 4px rgba(0,255,150,0.8)',
                        '0 0 4px rgba(255,200,0,0.8)',
                        '0 0 4px rgba(255,0,150,0.8)',
                      ],
                    }
                  : {}
              }
              transition={{
                scale: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
                boxShadow: { repeat: Infinity, duration: 2, ease: 'linear' },
              }}
            >
              {/* Default Title */}
              {!isActive && (
                <div className="flex flex-col items-center justify-center relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="mb-4 object-contain"
                  />
                  <AnimatedGradientText>
                    <p className="text-lg md:text-xl font-medium">
                      {service.title}
                    </p>
                  </AnimatedGradientText>

                  {/* Playful hint */}
                  {/* <motion.span
                    className="absolute bottom-2 text-xs text-cyan-300"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  >
                    ⬇ Click me
                  </motion.span> */}
                </div>
              )}

              {/* Expanded Details */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-black/90 backdrop-blur-md z-10 p-6 flex flex-col justify-center items-center text-center rounded-2xl border border-cyan-500/30"
                  >
                    {/* Close button */}
                    <motion.button
                      onClick={() => setActiveService(null)}
                      className="absolute top-3 right-3 text-cyan-400 hover:text-cyan-200"
                      whileHover={{ rotate: 90, scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      ✕
                    </motion.button>

                    <h3 className="text-xl font-semibold mb-4 text-white">
                      {service.title}
                    </h3>
                    <SparklesText className="font-light text-gray-300 text-sm leading-relaxed">
                      <div className="list-disc list-inside space-y-1 overflow-y-auto max-h-[60%] px-2">
                        {service.details.map((item, i) => (
                          <div key={i}>{item}</div>
                        ))}
                      </div>
                    </SparklesText>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Services
