// import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
// import { ShimmerButton } from '../../components/magicui/shimmer-button'
import { MagicCard } from '../../components/magicui/magic-card'
import { SparklesText } from '../../components/magicui/sparkles-text'
import { CoolMode } from '../../components/magicui/cool-mode'
import { RainbowButton } from '../../components/magicui/rainbow-button'

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
    transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
  },
}

const PreServicesSection = () => {
  return (
    <section className="py-24 bg-black text-white text-center px-4">
      <p className="text-[calc(3.5rem*1.15)] font-light tracking-tight">
        Elevate Your{' '}
        <AnimatedGradientText>Digital Presence</AnimatedGradientText>
      </p>
      <p className="text-[calc(1.15rem*1.1)] tracking-tight mb-[4%]">
        From idea to impact, we shape your digital future with clarity and
        style.
      </p>

      <div className="grid grid-cols-2 gap-[5%] mx-auto mt-[16px] w-[45%] bottom-[5%] bg-[#000]">
        {cards.map((card, index) => (
          <Link to={card.href} key={index} className="no-underline bg-[#000]">
            <Card className="p-0 max-w-sm w-full border-none bg-[#000] text-[#fff] ">
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
          </Link>
        ))}
      </div>

      <div className="mt-16 flex justify-center text-[calc(4.5rem*1.15)]">
        <Link to="/services">
          <CoolMode>
            <RainbowButton className="text-[calc(1.5rem*1.15)]">
              Explore Our Services <br />
            </RainbowButton>
          </CoolMode>
        </Link>
      </div>
    </section>
  )
}

export default PreServicesSection
