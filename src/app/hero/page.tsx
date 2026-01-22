'use client'

import React from 'react'
import Image from 'next/image'
import { Marquee } from '../../components/magicui/marquee'
import { AuroraText } from '../../components/magicui/aurora-text'
import Logo from '../../assets/images/DH.png'

const words = [
  'Web Development',
  'Brand Identity',
  'Design & UX',
  'Social Media',
  'Digital Marketing',
  'Consulting',
  'Business Start-Up',
]

const Hero = () => {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center overflow-hidden py-20 bg-black">
      
      {/* 1. The Hub Core (Logo Area) */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          {/* Orbital Glow Rings */}
          <div className="absolute inset-0 -m-8 rounded-full border border-[#37b7ff]/20 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-0 -m-12 rounded-full border border-[#37b7ff]/10 animate-[spin_30s_linear_infinite_reverse]" />
          
          {/* The Logo */}
          <div className="relative group transition-all duration-700 hover:brightness-125">
            <Image
              src={Logo}
              alt="The Design Hub Management"
              width={260}
              height={260}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Brand Typography - Montserrat Thin */}
        <div className="text-center mt-10 space-y-2">
          <h1 className="font-montserrat text-3xl md:text-5xl font-thin tracking-[0.3em] text-white uppercase">
            The Design Hub
          </h1>
          <p className="font-montserrat text-lg md:text-xl font-thin tracking-[0.3em] text-[#37b7ff] uppercase">
            Management
          </p>
        </div>
      </div>

      {/* 2. Strategy. Identity. Code. Section */}
      <div className="mt-16 text-center px-4 max-w-6xl">
        {/* Three Pillars */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
          <span className="font-poppins text-[#37b7ff] uppercase tracking-[0.5em] text-[10px] md:text-xs font-medium">Strategy</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="font-poppins text-[#37b7ff] uppercase tracking-[0.5em] text-[10px] md:text-xs font-medium">Identity</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="font-poppins text-[#37b7ff] uppercase tracking-[0.5em] text-[10px] md:text-xs font-medium">Code</span>
        </div>

        {/* Main Philosophy - Montserrat Thin with Aurora Effect */}
        <h2 className="font-montserrat text-4xl md:text-6xl font-thin tracking-tighter leading-[1.1] uppercase">
          Strategic <AuroraText>Identity</AuroraText> <br/>
          Engineered <AuroraText>Excellence</AuroraText>
        </h2>
        
        <p className="font-poppins mt-10 text-white/30 uppercase tracking-[0.3em] text-[10px] md:text-[11px] font-light">
          A Creative Tech Studio • Est. 2015
        </p>
      </div>

      {/* 3. Ultra-Clean Marquee Section */}
      <div className="w-full mt-24 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <Marquee className="py-6 [--duration:50s]" pauseOnHover>
          {words.map((word) => (
            <div key={word} className="flex items-center gap-6 mx-12">
              <span className="w-2 h-2 rounded-full bg-[#37b7ff] shadow-[0_0_10px_#37b7ff]" />
              <span className="font-poppins text-xl md:text-2xl font-extralight uppercase tracking-[0.2em] text-white/70">
                {word}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Hero