'use client'

import { Marquee } from '../../components/magicui/marquee'
import { AuroraText } from '../../components/magicui/aurora-text'
// import { motion } from 'framer-motion'
import { Particles } from '../../components/magicui/particles'
// import { HyperText } from '../../components/magicui/hyper-text'

const words = [
  '|| Development',
  '|| Brand Identity',
  '|| Design & UX',
  '|| Social Media & Content',
  '|| Digital Marketing',
  '|| Consulting',
]

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-between py-10">
      {/* Particles */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color={'#37b7ff'}
        quantity={300}
        ease={80}
        size={0.75}
      />

      {/* Main Heading Effect */}
      <div className="z-10 text-center mt-[5%]">
        <p className="text-[calc(3rem*1.15)] font-light tracking-tighter md:text-[calc(4rem*1.15)] lg:text-[calc(6rem*1.15)] xl:text-[calc(7rem*1.15)]">
          Where <AuroraText> DESIGN </AuroraText> Meets{' '}
          <AuroraText> INNOVATION </AuroraText>
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="z-10 space-y-[3%]">
        <Marquee
          className="opacity-20 text-[calc(1.75rem+2%)] font-light text-white lowercase"
          reverse
          pauseOnHover
        >
          {words.join('  ')}
        </Marquee>

        <Marquee
          className="text-[calc(2.25rem+2%)] font-light tracking-wider uppercase"
          pauseOnHover
        >
          <AuroraText>{words.join('  ')}</AuroraText>
        </Marquee>

        <Marquee
          className="opacity-20 text-[calc(1.75rem+2%)] font-light text-white lowercase"
          reverse
          pauseOnHover
        >
          {words.join(' ')}
        </Marquee>
      </div>

      {/* Subheading */}
      <div className="z-10 text-center mb-[5%]">
        <p className="text-[calc(1.25rem*1.15)] font-light tracking-tighter md:text-[calc(2.25rem*1.15)] lg:text-[calc(4.25rem*1.15)] xl:text-[calc(5.25rem*1.15)] uppercase">
          <AuroraText>Design </AuroraText> is our language.{' '}
          <AuroraText>Innovation</AuroraText> is our accent.
        </p>
      </div>
    </section>
  )
}

export default Hero
