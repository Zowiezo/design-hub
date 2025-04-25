import React from 'react'
import { RainbowButton } from '../../components/magicui/rainbow-button'
import { CoolMode } from '../../components/magicui/cool-mode'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import PreServicesSection from '../../sections/Services/PreServicesSection'
import Hero from './Hero'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="relative flex items-center justify-center min-h-screen text-white bg-black">
        {/* Wrapper with consistent spacing */}
        <div className="text-center flex-col max-w-4xl">
          {/* Main Heading */}
          <p className="text-[calc(3.5rem*1.15)] font-light tracking-tight">
            Driven by{' '}
            <AnimatedGradientText
              speed={2}
              colorFrom="#4ade80"
              colorTo="#06b6d4"
              className="text-4xl font-semibold tracking-tight"
            >
              DESIGN.
            </AnimatedGradientText>{' '}
            <br /> Powered by{' '}
            <AnimatedGradientText
              speed={2}
              colorFrom="#4ade80"
              colorTo="#06b6d4"
              className="text-4xl font-semibold tracking-tight"
            >
              PURPOSE.
            </AnimatedGradientText>
          </p>

          {/* Paragraph */}
          <p className="text-[calc(1.5rem*1.15)] leading-relaxed">
            Experience strategic solutions that elevate your brand and <br />
            redefine your presence in the digital landscape. Our focus on <br />
            UX/UI design, branding, and web development enables us to <br />
            create tailored experiences that foster growth and enhance user{' '}
            <br />
            interaction. Starting with personalized solutions that meet <br />
            your unique needs.
          </p>

          {/* Color Text */}
          <AnimatedGradientText
            className="text-[calc(1.25rem*1.15)] tracking-tight"
            speed={2}
            colorFrom="#4ade80"
            colorTo="#06b6d4"
          >
            Our approach is a perfect blend of creativity and functionality.
          </AnimatedGradientText>

          {/* Button (now spaced correctly!) */}
          <div className="text-[calc(4.5rem*1.15)]  w-64 h-48">
            <CoolMode>
              <RainbowButton className="text-[calc(1.5rem*1.15)]">
                Learn More About Us {''}
              </RainbowButton>
            </CoolMode>
          </div>
        </div>
      </section>
      <PreServicesSection />
    </>
  )
}

export default Home
