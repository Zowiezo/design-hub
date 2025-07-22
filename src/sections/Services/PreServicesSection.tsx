// import React from 'react'
import { Link } from 'react-router-dom'
import { motion, easeInOut } from 'framer-motion'

import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { MagicCard } from '../../components/magicui/magic-card'
import { SparklesText } from '../../components/magicui/sparkles-text'
import { CoolMode } from '../../components/magicui/cool-mode'
import { RainbowButton } from '../../components/magicui/rainbow-button'
import { Particles } from '../../components/magicui/particles'
import Social from '../../assets/images/social-media-planning.png'
import { Helmet } from 'react-helmet-async'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/components/ui/card'

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
    <section className="max-w-[100vw] py-[24px] bg-black text-white text-center">
      <Helmet>
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
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedesignhub.co.za" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Design Hub" />
        <meta
          name="twitter:description"
          content="Creative, innovative design and development agency."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>
      {/* Particles */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color={'#37b7ff'}
        quantity={300}
        ease={80}
        size={0.05}
      />
      <p className="text-[calc(3rem*1.5)] tracking-tighter sm:text-[calc(2rem*1.5)] md:text-[calc(4rem*1)] lg:text-[calc(6rem*1)] xl:text-[calc(7rem*1)] leading-tight mb-[1rem]">
        {' '}
        Elevate Your{' '}
        <AnimatedGradientText>Digital Presence</AnimatedGradientText>
      </p>
      <p className="text-[1.15rem] whitespace-pre-line break-words text-center">
        From idea to impact, we shape your digital future with clarity and
        style.
      </p>

      <div className="grid grid-cols-2 gap-[20%] mx-auto mt-[16px] ml-[40%] w-[45%] bottom-[5%] bg-[#000]">
        {cards.map((card, index) => (
          <div key={index} className="no-underline bg-[#000]">
            <Card className="p-[0rem] max-w-sm w-full border-none bg-[#000] text-[#fff] ">
              <MagicCard className="p-0">
                <div className="bg-[#000]">
                  <motion.div
                    className="relative -top-[.50rem] left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <span className="text-[1.75rem]">{card.icon}</span>
                  </motion.div>
                </div>
                <CardHeader className="bg-[#000] text-[#fff]">
                  <CardTitle className="bg-[#000] text-[#fff] text-[calc(1.5rem*1.15)]">
                    <SparklesText> {card.title} </SparklesText>
                  </CardTitle>
                  <div className="bg-[#000] text-[#fff] mb-[15px]">
                    <CardDescription>{card.description}</CardDescription>
                  </div>
                </CardHeader>
              </MagicCard>
            </Card>
          </div>
        ))}
        {/* 🚀 web with Overlap */}
        <div className="relative flex mt-[-30rem] ml-[-40rem] h-[14rem]">
          <img
            src={Social}
            alt="Social Media"
            className="absolute left-1/2 transform -translate-x-[55%] z-10 h-[30rem] w-[30rem] sm:h-[10rem] sm:w-[10rem] md:h-[18rem] md:w-[18rem] object-contain animate-float"
          />
        </div>
      </div>

      <div className="mt-[9rem] flex justify-center">
        <Link to="/services">
          <CoolMode>
            <RainbowButton className="font-poppins w-full max-w-[20rem] h-[2.5rem] px-5 py-4 bg-black border border-[#fff] rounded-md text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#37b7ff] mb-[1.5rem] text-[calc(1.5rem*1.11)]">
              Explore Our Services
            </RainbowButton>
          </CoolMode>
        </Link>
      </div>
    </section>
  )
}

export default PreServicesSection
