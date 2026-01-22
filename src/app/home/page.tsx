'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RainbowButton } from '../../components/magicui/rainbow-button'
import { CoolMode } from '../../components/magicui/cool-mode'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import Web from '../../assets/images/online-marketing.png'

const Home: React.FC = () => {
  return (
    <>
      {/* About / Purpose Section */}
      <section className="relative flex items-center justify-center min-h-screen py-20 overflow-hidden bg-black">
        <div className="relative z-10 flex flex-col items-center max-w-7xl w-full px-6">
          
          {/* Main Heading updated to match new pillars */}
          <div className="text-center mb-24">
            <h2 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-thin tracking-tighter leading-[1.1] uppercase">
              Driven by{' '}
              <AnimatedGradientText className="inline" speed={3}>
                STRATEGY.
              </AnimatedGradientText>
              <br />
              Powered by{' '}
              <AnimatedGradientText
                className="inline"
                speed={3}
                colorFrom="#4ade80"
                colorTo="#37b7ff"
              >
                CODE.
              </AnimatedGradientText>
            </h2>
          </div>

          {/* Interactive Content Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side - Digital Illustration */}
            <div className="relative order-2 lg:order-1 flex justify-center">
              <div className="absolute inset-0 bg-[#37b7ff]/10 blur-[100px] rounded-full" />
              <Image
                src={Web}
                alt="Digital Legacy Engineering"
                width={500}
                height={500}
                className="relative z-10 object-contain animate-float hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Text Side - Glassmorphism Card */}
<div className="order-1 lg:order-2 space-y-8 backdrop-blur-md bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
  
  {/* The Revised Mission Statement */}
  <p className="font-poppins text-lg md:text-xl leading-relaxed font-light text-gray-300">
    Strategic solutions that elevate your brand and redefine your digital landscape. 
    Specializing in <span className="text-white font-medium">UI/UX, branding, and engineering</span>, 
    we don't just design—we build.
  </p>

  {/* The "Start to Launch" Promise */}
  <p className="font-poppins text-lg md:text-xl leading-relaxed font-light text-gray-300">
    From the <span className="text-[#37b7ff]">first spark of inception</span> to the 
    <span className="text-[#37b7ff]"> final moment of launch</span>, we are with you every 
    step of the way, fostering growth through tailored experiences.
  </p>

  <div className="h-[1px] w-24 bg-gradient-to-r from-[#37b7ff] to-transparent opacity-50" />

  {/* THE CORE BRAND IDENTITY BLOCK */}
  <div className="space-y-4">
    {/* The Three Pillars - Permanent & Bold */}
    <p className="font-poppins text-[11px] md:text-xs uppercase tracking-[0.5em] text-[#37b7ff] font-bold border-l-2 border-[#37b7ff] pl-4">
      Strategy • Identity • Code
    </p>
    
    {/* The Philosophy - Supporting */}
    <div className="flex flex-col space-y-1">
      <p className="font-poppins text-[10px] text-white/50 uppercase tracking-[0.3em] font-medium">
        Curating Digital Excellence
      </p>
      <p className="font-poppins text-[9px] text-gray-500 uppercase tracking-[0.2em] italic font-light">
        Bringing Vision to Life
      </p>
    </div>
  </div>

  {/* Call to Action */}
  <div className="pt-6">
    <Link href="/about">
      <CoolMode>
        <RainbowButton className="font-poppins px-10 py-6 text-xs uppercase tracking-[0.2em] font-medium text-white rounded-full transition-transform active:scale-95">
          Discover Our Story
        </RainbowButton>
      </CoolMode>
    </Link>
  </div>
</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home