'use client'

import Head from 'next/head'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { AuroraText } from '../../components/magicui/aurora-text'
import { Particles } from '../../components/magicui/particles'
import Image from 'next/image'

import AboutDH from '../../assets/images/web-background.png'
import AboutDH2 from '../../assets/images/htmlWeb.png'

const About = () => {
  return (
    <section className="bg-black text-[#fff] px-6 py-20 md:px-24 font-Poppins">
      <Head>
        <title>The Design Hub | Who We Are</title>
        <meta
          name="description"
          content="We blend creativity and technology to deliver stunning design, branding, and web development solutions."
        />
      </Head>

      {/* Particles */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color={'#37b7ff'}
        quantity={300}
        ease={80}
        size={0.05}
      />

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <p className="text-5xl md:text-6xl font-extralight tracking-tight">
          Who We Are
        </p>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mt-4 font-light">
          <AuroraText>
            The Design Hub Management is a creative tech studio crafting
            unforgettable digital experiences through intentional design,
            innovative code, and bold storytelling.
          </AuroraText>
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6 text-gray-300 text-left text-lg leading-relaxed font-light">
          <p>
            We specialize in{' '}
            <AnimatedGradientText>
              <strong>UX/UI design,</strong>
            </AnimatedGradientText>{' '}
            <AnimatedGradientText>
              <strong>branding</strong>,
            </AnimatedGradientText>{' '}
            <AnimatedGradientText>
              <strong>web development</strong>,
            </AnimatedGradientText>{' '}
            and{' '}
            <AnimatedGradientText>
              <strong>digital strategy</strong>
            </AnimatedGradientText>
            —merging thoughtful design with future-forward technology.
          </p>

          <p>
            Founded by Zoleka “Zowie” Kubheka, a visionary UX/UI designer and
            engineer, this studio was created to redefine{' '}
            <AuroraText> digital experiences.</AuroraText> With an eye for
            beauty and a mind for systems, Zowie empowers brands to connect,
            grow, and stand out in a crowded{' '}
            <AuroraText>digital space.</AuroraText>
          </p>

          <p>
            Our work is guided by purpose, powered by{' '}
            <AnimatedGradientText>
              {' '}
              <strong>creativity, </strong>
            </AnimatedGradientText>{' '}
            and rooted in{' '}
            <AnimatedGradientText>
              <strong> innovation. </strong>
            </AnimatedGradientText>
            Every <AnimatedGradientText>pixel,</AnimatedGradientText> every line
            of <AnimatedGradientText>code,</AnimatedGradientText> and every{' '}
            <AnimatedGradientText>brand identity</AnimatedGradientText>
            we create is built with care and intention.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end relative">
          <Image
            src={AboutDH}
            alt="About us"
            width={350}
            height={450}
            className="rounded-2xl shadow-lg animate-float"
          />
        </div>
      </div>

      {/* Mission, Image & Vision Section */}
      <div className="max-w-6xl mx-auto mt-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side (Image on desktop, middle on mobile) */}
        <div className="order-2 md:order-1 flex justify-center md:justify-start">
          <Image
            src={AboutDH2}
            alt="HTML image"
            width={350}
            height={450}
            className="object-contain animate-float"
          />
        </div>

        {/* Right Side (Text content) */}
        <div className="order-1 md:order-2 text-center md:text-left space-y-16">
          {/* Mission */}
          <div>
            <p className="text-4xl md:text-6xl font-extralight mb-6">
              <AnimatedGradientText>Our Mission</AnimatedGradientText>
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto md:mx-0 font-light">
              To revolutionize <AuroraText>digital</AuroraText> experiences by
              blending <AuroraText>design</AuroraText> and{' '}
              <AuroraText>innovation </AuroraText> to create impactful,
              user-centric solutions that <AuroraText> empower</AuroraText>{' '}
              businesses and individuals to succeed in the ever-evolving{' '}
              <AuroraText> digital landscape.</AuroraText>
            </p>
          </div>

          {/* Vision */}
          <div>
            <p className="text-4xl md:text-6xl font-extralight mb-6">
              <AnimatedGradientText>Our Vision</AnimatedGradientText>
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto md:mx-0 font-light">
              To redefine <AuroraText>digital innovation</AuroraText> through
              the fusion of <AuroraText>creativity</AuroraText> and{' '}
              <AuroraText>technology</AuroraText> crafting experiences that{' '}
              <AnimatedGradientText>inspire,</AnimatedGradientText>{' '}
              <AuroraText>engage, </AuroraText>and{' '}
              <AnimatedGradientText>endure.</AnimatedGradientText>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
