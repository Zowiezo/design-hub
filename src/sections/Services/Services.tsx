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
          content="The Design Hub, The Design Hub Management, TDHM, Business Start Up, UI/UX Design, Web Development, Digital Marketing, Branding, Tech Agency South Africa, Creative Studio, Black-owned, Female-owned"
        />
      </Head>

      {/* Particles Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color="#37b7ff"
        quantity={300}
        ease={80}
        size={0.05}
      />

      {/* Heading */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
        <p className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6">
          Our Services
        </p>
        <p className="text-lg md:text-xl mb-[2.5rem] text-gray-300">
          <AuroraText>
            Explore what we do best — each service blends creativity with
            strategy and code.
          </AuroraText>
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center relative z-10">
        {servicesData.map((service, index) => {
          const isActive = activeService === index

          return (
            <motion.div
              key={index}
              onClick={() => setActiveService(isActive ? null : index)}
              className="relative bg-[#111] rounded-2xl overflow-hidden cursor-pointer transition-all flex items-center justify-center text-center px-4"
              style={{
                width: isActive ? '100%' : '100%',
                maxWidth: isActive ? '22rem' : '18rem',
                height: isActive ? '22rem' : '16rem',
                zIndex: isActive ? 20 : 1,
                transition: 'all 0.3s ease-in-out',
              }}
              layout
            >
              {/* Default Title */}
              {!isActive && (
                <div className="flex flex-col items-center justify-center">
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
                </div>
              )}

              {/* Expanded Details */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-black/90 backdrop-blur-md z-10 p-6 flex flex-col justify-center items-center text-center rounded-2xl"
                  >
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
      </div>
    </section>
  )
}

export default Services
