import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { RainbowButton } from '../../components/magicui/rainbow-button'
import { CoolMode } from '../../components/magicui/cool-mode'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { Particles } from '../../components/magicui/particles'
import PreServicesSection from '../../sections/Services/PreServicesSection'
import Contact from '../../sections/Contact/Contact'
import Hero from './Hero'
import Web from '../../assets/images/online-marketing.png'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="relative flex items-center justify-center min-h-screen text-white bg-black overflow-hidden mt-[-5rem]">
        <Helmet>
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
        </Helmet>
        {/* Particles */}
        <Particles
          className="absolute top-0 left-0 w-full h-full z-0"
          color={'#37b7ff'}
          quantity={300}
          ease={80}
          size={0.05}
        />

        <div className="text-center flex flex-col max-w-4xl relative">
          {/* Main Heading */}
          <p className="text-[calc(3.5rem*1.5)] font-light tracking-tight mb-[8rem]">
            Driven by{' '}
            <AnimatedGradientText speed={2} className="text-4xl tracking-tight">
              DESIGN.
            </AnimatedGradientText>{' '}
            <br /> Powered by{' '}
            <AnimatedGradientText
              speed={2}
              colorFrom="#4ade80"
              colorTo="#06b6d4"
              className="text-4xl tracking-tight"
            >
              PURPOSE.
            </AnimatedGradientText>
          </p>

          {/* Paragraph */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
            <p className="text-[calc(1.5rem*0.85)] mt-[-4rem] mr-[20rem] text-justify">
              Experience strategic solutions that elevate your brand and <br />
              redefine your presence in the digital landscape. Our focus on{' '}
              <br />
              UX/UI design, branding, and web development enables us to <br />
              create tailored experiences that foster growth and enhance <br />{' '}
              user interaction. Starting with personalized solutions that meet{' '}
              <br />
              your unique needs.
            </p>

            {/* 🚀 web with Overlap */}
            <div className="relative flex  mb-[-2rem] ml-[55rem] h-[14rem] mt-[-50rem]">
              <img
                src={Web}
                alt="Web Design"
                className="absolute left-1/2 transform -translate-x-[55%] z-10 h-[30rem] w-[30rem] sm:h-[16rem] sm:w-[16rem] md:h-[18rem] md:w-[18rem] object-contain animate-float"
              />
            </div>
          </div>

          {/* Highlight Text */}
          <AnimatedGradientText
            className="text-[calc(1.25rem*1.25)] tracking-tight mt-[12rem]"
            speed={2}
          >
            Our approach is a perfect blend of creativity and functionality.
          </AnimatedGradientText>

          {/* CTA */}
          <div className="pt-[5%] flex justify-center">
            <Link to="/about">
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
