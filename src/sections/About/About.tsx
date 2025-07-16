// About.tsx
import React from 'react'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { AuroraText } from '../../components/magicui/aurora-text'
import { Particles } from '../../components/magicui/particles'
import AboutDH from '../../assets/images/web-background.png'
import AboutDH2 from '../../assets/images/htmlWeb.png'

const About = () => {
  return (
    <section className="bg-black text-[#fff] px-6 py-20 md:px-24 mt-[10rem]">
      {/* Particles */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color={'#37b7ff'}
        quantity={300}
        ease={80}
        size={0.05}
      />
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <p className="text-[calc(3.5rem*1)] md:text-6xl  mb-4 tracking-tight">
          Who We Are
        </p>
        <p className="text-[calc(1.25rem*1.15)] text-gray-400 max-w-3xl mx-auto">
          <AuroraText>
            The Design Hub Management is a creative tech studio crafting
            unforgettable digital <br /> experiences through intentional design,
            innovative code, and bold storytelling.
          </AuroraText>
        </p>
      </div>

      {/* 🚀 Social Media Mail with Overlap */}
      <div className="relative flex ml-[45rem] mt-[3rem] h-[14rem]">
        <img
          src={AboutDH}
          alt="Social Media Mail"
          className="absolute left-1/2 transform -translate-x-[55%] z-10 h-[20rem] w-[20rem] sm:h-[16rem] sm:w-[16rem] md:h-[18rem] md:w-[18rem] object-contain animate-float"
        />
      </div>

      {/* About Description */}
      <div className="max-w-4xl mx-auto text-[calc(1.25rem*1)] text-gray-300 space-y-6 max-w-3xl mx-auto ml-[15rem] mt-[-15rem]">
        <p>
          We specialize in{' '}
          <AnimatedGradientText>
            {' '}
            <strong className="text-white">UX/UI design,</strong>
          </AnimatedGradientText>
          <AnimatedGradientText>
            <strong className="text-white"> branding</strong>,
          </AnimatedGradientText>
          <AnimatedGradientText>
            <strong className="text-white"> web development</strong>,
          </AnimatedGradientText>{' '}
          <br />
          and
          <AnimatedGradientText>
            <strong className="text-white"> digital strategy</strong>
          </AnimatedGradientText>
          —merging thoughtful design with <br />
          future-forward technology.
        </p>

        <p>
          Founded by Zoleka “Zowie” Kubheka — she is an engineer with an eye{' '}
          <br />
          for beauty and a mind for systems. We empower brands to <br />{' '}
          connect, grow, and stand out in the digital space.
        </p>

        <p>
          Our work is guided by purpose, powered by creativity, and rooted{' '}
          <br />
          in innovation. Every pixel, every line of code, and every brand
          identity <br /> we create is built with care and intention.
        </p>
      </div>

      {/* 🚀 Social Media Mail with Overlap */}
      <div className="relative flex mr-[45rem] h-[14rem]">
        <img
          src={AboutDH2}
          alt="Social Media Mail"
          className="absolute left-1/2 transform -translate-x-[55%] z-10 h-[20rem] w-[20rem] sm:h-[16rem] sm:w-[16rem] md:h-[18rem] md:w-[18rem] object-contain animate-float mt-[5rem]"
        />
      </div>

      {/* Mission & Vision */}
      <div className="text-[calc(1.5rem*1)] md:text-6xl  mt-[-15rem] tracking-tight">
        {/* Mission */}
        <div>
          <p className="text-[calc(3.5rem*1)] md:text-6xl  mb-4 tracking-tight text-center">
            <AnimatedGradientText>Our Mission</AnimatedGradientText>
          </p>
          <p className="text-lg text-gray-300 ml-[35rem] mt-[-3rem]">
            To revolutionize digital experiences by blending <br /> design and
            innovation to create impactful, user-centric <br /> solutions that
            empower businesses and individuals to <br />
            succeed in the ever-evolving digital landscape.
          </p>
        </div>

        {/* Vision */}
        <div>
          <p className="text-[calc(3.5rem*1)] md:text-6xl  mb-4 tracking-tight text-center">
            <AnimatedGradientText>Our Vision</AnimatedGradientText>
          </p>
          <p className="text-lg text-gray-300 ml-[15rem] mt-[-3rem] mb-[4rem]">
            To become a leading global agency where creativity meets
            technology—driving <br />
            design-forward solutions that shape the future of digital
            interaction.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
