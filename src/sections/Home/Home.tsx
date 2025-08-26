import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { RainbowButton } from '../../components/magicui/rainbow-button'
import { CoolMode } from '../../components/magicui/cool-mode'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { Particles } from '../../components/magicui/particles'
import PreServicesSection from '../PreServicesSection/PreServicesSection'
import Contact from '../../sections/Contact/Contact'
import Hero from './Hero'
import Web from '../../assets/images/online-marketing.png'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="relative flex items-center justify-center min-h-screen text-white bg-black overflow-hidden mt-[-5rem]">
        <Head>
          <title>The Design Hub | Where Design Meets Innovation </title>
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
        </Head>
        {/* Particles */}
        <Particles
          className="absolute top-0 left-0 w-full h-full z-0"
          color={'#37b7ff'}
          quantity={300}
          ease={80}
          size={0.05}
        />

        <div className="relative z-10 flex flex-col items-center max-w-[1200px] w-full px-4 sm:mt-[15%]">
          {/* Main Heading */}
          <p className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] text-center tracking-tighter leading-tight mb-[10%]">
            Driven by{' '}
            <AnimatedGradientText speed={2}>DESIGN.</AnimatedGradientText>
            <br />
            Powered by{' '}
            <AnimatedGradientText
              speed={2}
              colorFrom="#4ade80"
              colorTo="#06b6d4"
            >
              PURPOSE.
            </AnimatedGradientText>
          </p>

          {/* Text + Image Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
            {/* Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-[1.15rem] md:text-[1.25rem] leading-relaxed break-words md:ml-[15%] font-light">
                Experience strategic solutions that elevate your brand and
                redefine your presence in the digital landscape. Our focus on
                UX/UI design, branding, and web development enables us to create
                tailored experiences that foster growth and enhance user
                interaction. Starting with personalized solutions that meet your
                unique needs.
              </p>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-[-2%]">
              <Image
                src={Web}
                alt="Web Design"
                width={400}
                height={400}
                className="object-contain animate-float"
              />
            </div>
          </div>

          {/* Highlight Text */}
          <AnimatedGradientText
            className="text-[1.25rem] md:text-[1.5rem] tracking-tight mt-8 text-center font-light"
            speed={2}
          >
            Our approach is a perfect blend of creativity and functionality.
          </AnimatedGradientText>

          {/* CTA Button */}
          <div className="mt-6 flex justify-center">
            <Link href="/about">
              <CoolMode>
                <RainbowButton className="font-poppins w-full max-w-[20rem] h-[2.5rem] px-5 py-4 bg-black border border-white rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#37b7ff] text-[1.25rem]">
                  Discover Our Story
                </RainbowButton>
              </CoolMode>
            </Link>
          </div>
        </div>
      </section>
      <PreServicesSection />
      <Contact />
    </>
  )
}

export default Home
