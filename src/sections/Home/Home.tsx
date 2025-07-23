import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { RainbowButton } from '../../components/magicui/rainbow-button'
import { CoolMode } from '../../components/magicui/cool-mode'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { Particles } from '../../components/magicui/particles'
import PreServicesSection from '../../sections/Services/PreServicesSection'
import Contact from '../../sections/Contact/Contact'
import Hero from './Hero'
import Web from '../../assets/images/online-marketing.png'
// import { Import } from 'lucide-react'

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

        <div className="text-center flex flex-col max-w-[95vw] relative">
          {/* Main Heading */}
          <p className="text-[calc(3rem*1.5)] tracking-tighter md:text-[calc(4rem*1)] lg:text-[calc(6rem*1)] xl:text-[calc(7rem*1)] leading-tight mb-[1rem]">
            Driven by{' '}
            <AnimatedGradientText speed={2}>DESIGN.</AnimatedGradientText>{' '}
            <br /> Powered by{' '}
            <AnimatedGradientText
              speed={2}
              colorFrom="#4ade80"
              colorTo="#06b6d4"
            >
              PURPOSE.
            </AnimatedGradientText>
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-[95vw] gap-[2rem] px-[2rem]">
            {/* Paragraph */}
            <div className="lg:w-1/2">
              <p className="text-[1.15rem] text-left whitespace-pre-line break-words">
                Experience strategic solutions that elevate your brand and
                redefine your presence in the digital landscape. Our focus on
                UX/UI design, branding, and web development enables us to create
                tailored experiences that foster growth and enhance user
                interaction. Starting with personalized solutions that meet your
                unique needs.
              </p>
            </div>

            {/* 🚀 Image */}
            <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2 mt-10 lg:mt-0">
              <Image
                src={Web}
                alt="Web Design"
                className="h-[28rem] w-[28rem] sm:h-[14rem] sm:w-[14rem] md:h-[20rem] md:w-[20rem] lg:h-[24rem] lg:w-[24rem] object-contain animate-float"
              />
            </div>
          </div>

          {/* Highlight Text */}
          <AnimatedGradientText
            className="text-[calc(1.25rem*1.25)] tracking-tight mt-[1rem]"
            speed={2}
          >
            Our approach is a perfect blend of creativity and functionality.
          </AnimatedGradientText>

          {/* CTA */}
          <div className="pt-[5%] flex justify-center">
            <Link href="/about">
              <CoolMode>
                <RainbowButton className="font-poppins w-full max-w-[20rem] h-[2.5rem] px-5 py-4 bg-black border border-[#fff] rounded-md text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#37b7ff] mb-[1.5rem] text-[calc(1.5rem*1.11)]">
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
