'use client'

import { Marquee } from '../../components/magicui/marquee'
import { AuroraText } from '../../components/magicui/aurora-text'
import { Particles } from '../../components/magicui/particles'
import Logo from '../../assets/images/Design.svg'

const words = [
  '|| Web Development',
  '|| Brand Identity',
  '|| Design & UX',
  '|| Social Media & Content',
  '|| Digital Marketing',
  '|| Consulting',
]

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-between py-10 px-4">
      {/* Logo + Text */}
      <div className="flex flex-col items-center gap-3 max-w-[100vw] mt-[2%]">
        <img
          src={Logo}
          alt="The Design Hub Logo"
          className="h-[10rem] w-[10rem] sm:h-[20rem] sm:w-[20rem] md:h-[20rem] md:w-[20rem] object-contain"
        />
        <div className="text-center leading-tight break-words">
          <p className="font-light text-[#37b7ff] mt-[-12%] text-[calc(2rem*1)] md:text-[calc(4rem*1)] lg:text-[calc(6rem*1)] xl:text-[calc(7rem*1)]">
            THE DESIGN HUB
          </p>
          <p className="font-light text-[#b7e3fe] mt-[-11%] text-[calc(2rem*0.5)] md:text-[calc(4rem*0.65)] lg:text-[calc(6rem*0.65)] xl:text-[calc(7rem*0.65)]">
            MANAGEMENT
          </p>
        </div>
      </div>

      {/* Particles */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color={'#37b7ff'}
        quantity={300}
        ease={80}
        size={0.05}
      />

      {/* Main Heading */}
      <div className="z-10 text-center mt-[1%] max-w-[95vw] break-words px-2">
        <p className="text-[calc(3rem*1)] tracking-tighter md:text-[calc(4rem*1)] lg:text-[calc(6rem*1)] xl:text-[calc(7rem*1)] leading-tight">
          Where <AuroraText> DESIGN </AuroraText> Meets{' '}
          <AuroraText> INNOVATION </AuroraText>
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="z-10 space-y-[1%] mt-1 w-full overflow-hidden">
        <Marquee
          className="opacity-15 text-[calc(1rem+2%)] text-white lowercase"
          reverse
          pauseOnHover
        >
          {words.join('  ')}
        </Marquee>

        <Marquee
          className="text-[calc(2rem+2%)] tracking-wider uppercase"
          pauseOnHover
        >
          <AuroraText>{words.join('  ')}</AuroraText>
        </Marquee>

        <Marquee
          className="opacity-15 text-[calc(1rem+2%)] text-white lowercase"
          reverse
          pauseOnHover
        >
          {words.join(' ')}
        </Marquee>
      </div>

      {/* Subheading */}
      <div className="z-10 text-center px-4 max-w-[90vw]">
        <p className="text-[calc(1.25rem*1.15)] tracking-tighter md:text-[calc(2.25rem*1.15)] lg:text-[calc(4.25rem*1.15)] xl:text-[calc(5.25rem*1.15)] uppercase leading-snug">
          <AuroraText>Design </AuroraText> is our language.{' '}
          <AuroraText>Innovation</AuroraText> is our accent.
        </p>
      </div>
    </section>
  )
}

export default Hero
