'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { servicesData } from '../data/servicesData'
import { AuroraText } from '../components/magicui/aurora-text'
import { AnimatedGradientText } from '../components/magicui/animated-gradient-text'
import { SparklesText } from '../components/magicui/sparkles-text'
import SEO from '../assets/images/seo.png'
import Head from 'next/head'

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <section
      className="relative bg-black text-white px-6 py-24 md:px-24 mt-[7rem]"
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
        <meta
          property="og:title"
          content="The Design Hub | Where Design Meets Innovation"
        />
        <meta
          property="og:description"
          content="Discover our services in design, branding, UX/UI, and more."
        />
        <meta property="og:image" content="/g-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedesignhub.co.za" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Design Hub" />
        <meta
          name="twitter:description"
          content="Creative, innovative design and development agency."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
        <p className="text-[calc(3.25rem*1)] md:text-6xl font-light tracking-tight mb-6">
          Our Services
        </p>
        <p className="text-[calc(1.25rem*1)] mb-[2.5rem]">
          <AuroraText>
            Explore what we do best — each service blends creativity with
            strategy and code.
          </AuroraText>
        </p>
      </div>

      {/* 🚀 Social Media Mail with Overlap */}
      <div className="relative flex ml-[7rem]">
        <img
          src={SEO}
          alt="SEO Icon"
          className="absolute left-1/2 transform -translate-x-[55%] z-10 h-[35rem] w-[35rem] sm:h-[16rem] sm:w-[16rem] md:h-[18rem] md:w-[18rem] object-contain animate-float mt-[10rem]"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-[4rem] justify-items-center">
        {servicesData.map((service, index) => {
          const isActive = activeService === index

          return (
            <motion.div
              key={index}
              onClick={() => setActiveService(isActive ? null : index)}
              // ⬇️ Adjust default card size here (when not clicked)
              className="relative bg-[#111] rounded-xl overflow-hidden cursor-pointer transition-all flex items-center justify-center text-center px-4"
              style={{
                width: isActive ? '20rem' : '15rem', // ⬅️ Clicked vs. default width
                height: isActive ? '20rem' : '15rem', // ⬅️ Clicked vs. default height
                zIndex: isActive ? 20 : 1,
                transition: 'all 0.3s ease-in-out',
              }}
              layout
            >
              {/* Default Title (only shows when not active) */}
              {!isActive && (
                <AnimatedGradientText>
                  <p className="text-[calc(1.25rem*1.17)]">{service.title}</p>
                </AnimatedGradientText>
              )}

              {/* Overlay with Details */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-black/90 backdrop-blur-md z-10 p-4 flex flex-col justify-center items-center text-center"
                  >
                    <SparklesText className="font-[100]">
                      <div className="list-disc list-inside space-y-1 overflow-y-auto max-h-[60%]">
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
