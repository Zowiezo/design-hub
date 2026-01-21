'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RainbowButton } from '../../components/magicui/rainbow-button'
import { CoolMode } from '../../components/magicui/cool-mode'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import Hero from '../hero/page'
import Web from '../../assets/images/online-marketing.png'

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      {/* About / Purpose Section */}
      <section className="relative flex items-center justify-center min-h-screen py-20 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center max-w-7xl w-full px-6">
          {/* Main Heading with refined spacing */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tighter leading-[1.1]">
              Driven by{' '}
              <AnimatedGradientText className="inline" speed={3}>
                DESIGN.
              </AnimatedGradientText>
              <br />
              Powered by{' '}
              <AnimatedGradientText
                className="inline"
                speed={3}
                colorFrom="#4ade80"
                colorTo="#37b7ff"
              >
                PURPOSE.
              </AnimatedGradientText>
            </h2>
          </div>

          {/* Interactive Content Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side - Added a glow effect */}
            <div className="relative order-2 lg:order-1 flex justify-center">
              <div className="absolute inset-0 bg-[#37b7ff]/10 blur-[100px] rounded-full" />
              <Image
                src={Web}
                alt="Digital Solutions Illustration"
                width={500}
                height={500}
                className="relative z-10 object-contain animate-float hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Text Side - Glassmorphism Card */}
            <div className="order-1 lg:order-2 space-y-8 backdrop-blur-sm bg-white/5 p-8 md:p-12 rounded-4xl border border-white/10">
              <p className="text-lg md:text-xl leading-relaxed font-light text-gray-300">
                Experience strategic solutions that elevate your brand and
                redefine your presence in the digital landscape. Our focus on
                <span className="text-white font-normal">
                  {' '}
                  UI/UX design, branding, and web development
                </span>{' '}
                enables us to create tailored experiences that foster growth and
                enhance user interaction.
              </p>

              <div className="h-[1px] w-20 bg-gradient-to-r from-[#37b7ff] to-transparent" />

              <p className="text-md uppercase tracking-[0.2em] text-[#37b7ff] font-medium">
                Creativity × Functionality
              </p>

              <div className="pt-4">
                <Link href="/about">
                  <CoolMode>
                    <RainbowButton className="px-10 py-6 text-lg text-blue-100 border rounded-full hover:text-[#37b7ff]">
                      Discover Our Story
                    </RainbowButton>
                  </CoolMode>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <PreServicesSection /> */}
      {/* <Contact /> */}
    </>
  )
}

export default Home
