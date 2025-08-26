'use client'

import React from 'react'
import { motion, easeInOut } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { SparklesText } from '../../components/magicui/sparkles-text'
import { CoolMode } from '../../components/magicui/cool-mode'
import { RainbowButton } from '../../components/magicui/rainbow-button'
import { Particles } from '../../components/magicui/particles'

import Social from '../../assets/images/social-media-planning.png'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'

const cards = [
  {
    icon: '💡',
    title: 'THINK',
    description: 'Where ideas spark and strategy begins.',
    href: '/services/strategy',
  },
  {
    icon: '🎨',
    title: 'CREATE',
    description: 'Where visuals meet vibes and pixels meet precision.',
    href: '/services/design',
  },
  {
    icon: '💻',
    title: 'BUILD',
    description:
      'Where the code is clean, launches are seamless, and the tech just works.',
    href: '/services/development',
  },
  {
    icon: '🚀',
    title: 'LAUNCH',
    description: 'Strategy meets execution. Ready to show the world.',
    href: '/services/launch',
  },
]

const iconVariants = {
  initial: { y: -10, scale: 1 },
  animate: {
    y: [0, -8, 0],
    transition: { duration: 1.5, repeat: Infinity, ease: easeInOut },
  },
}

const PreServicesSection = () => {
  return (
    <section className="relative max-w-full py-24 bg-black text-white overflow-hidden">
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

      {/* Particles */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color="#37b7ff"
        quantity={300}
        ease={80}
        size={0.05}
      />

      {/* Heading */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto mb-16 text-center">
        <p className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] tracking-tighter leading-tight">
          Elevate Your{' '}
          <AnimatedGradientText>Digital Presence</AnimatedGradientText>
        </p>
        <p className="text-[1.25rem] md:text-[1.5rem] mt-6">
          From idea to impact, we shape your digital future with clarity and
          style.
        </p>
      </div>

      {/* Image + Cards */}
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start gap-8 px-4">
        {/* Image left */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <Image
            src={Social}
            alt="Process Illustration"
            width={400}
            height={400}
            className="w-[14rem] h-[14rem] md:ml-[15%] sm:w-[20rem] sm:h-[20rem] md:w-[23rem] md:h-[23rem] lg:w-[24rem] lg:h-[24rem] object-contain animate-float"
          />
        </div>

        {/* Cards right */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:mr-[15%]">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="p-4 bg-black border-none text-white w-full max-w-xs mx-auto lg:mx-0"
            >
              <motion.div
                className="flex items-center justify-center w-16 h-16 mb-2 text-[1.75rem] content-center ml-[40%]"
                variants={iconVariants}
                initial="initial"
                animate="animate"
              >
                {card.icon}
              </motion.div>
              <CardHeader>
                <CardTitle className="text-lg font-light text-center">
                  <SparklesText>{card.title}</SparklesText>
                </CardTitle>
                <CardDescription className="mt-1 text-[1rem] font-light leading-snug text-center text-white font-light">
                  {card.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center w-full">
        <Link href="/services">
          <CoolMode>
            <RainbowButton className="font-poppins w-full max-w-[20rem] h-[2.5rem] px-5 py-4 bg-black border border-white rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#37b7ff] text-[1.25rem]">
              Explore Our Services
            </RainbowButton>
          </CoolMode>
        </Link>
      </div>
    </section>
  )
}

export default PreServicesSection
