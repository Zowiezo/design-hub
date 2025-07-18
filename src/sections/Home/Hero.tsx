'use client'
import { Helmet } from 'react-helmet-async'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Marquee } from '../../components/magicui/marquee'
import { AuroraText } from '../../components/magicui/aurora-text'
import { Particles } from '../../components/magicui/particles'
import Logo from '../../assets/images/Design.svg'
import Rocket from '../../assets/images/Rocket.gif'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin)

const words = [
  '|| Web Development',
  '|| Brand Identity',
  '|| Design & UX',
  '|| Social Media & Content',
  '|| Digital Marketing',
  '|| Consulting',
]

const Hero = () => {
  const orbitRef = useRef<HTMLDivElement>(null)
  const rocketRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const rocket = rocketRef.current
    const orbit = orbitRef.current

    if (!rocket || !orbit) return

    const width = window.innerWidth
    const height = window.innerHeight

    const path = [
      { x: 100, y: 100 },
      { x: width - 150, y: 50 },
      { x: width - 100, y: height - 150 },
      { x: 50, y: height - 100 },
      { x: 100, y: 100 }, // loop back to start
    ]

    gsap.to(rocket, {
      duration: 15,
      repeat: -1,
      ease: 'power1.inOut',
      motionPath: {
        path: path,
        autoRotate: true,
        curviness: 1.25,
      },
    })
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-between py-10 px-4 mt-[2%]">
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

      {/* Particle Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color={'#37b7ff'}
        quantity={300}
        ease={80}
        size={0.05}
      />

      {/* Logo + Title in Orbit Container */}
      <div
        className="relative flex flex-col items-center gap-3 max-w-[100vw] mt-[5rem] w-[400px] h-[400px]"
        ref={orbitRef}
      >
        <img
          src={Logo}
          alt="The Design Hub Logo"
          className="h-[10rem] w-[10rem] sm:h-[20rem] sm:w-[20rem] md:h-[20rem] md:w-[20rem] object-contain"
        />
        <div className="text-center leading-tight break-words">
          <p className="font-light text-[#37b7ff] mt-[-11%] text-[calc(2rem*1)] md:text-[calc(4rem*1)] lg:text-[calc(6rem*1)] xl:text-[calc(7rem*1)]">
            THE DESIGN HUB
          </p>
          <p className="font-light text-[#b7e3fe] mt-[-10%] text-[calc(2rem*0.5)] md:text-[calc(4rem*0.65)] lg:text-[calc(6rem*0.65)] xl:text-[calc(7rem*0.65)]">
            MANAGEMENT
          </p>
        </div>

        {/* Rocket orbiting around logo+text */}
        <img
          ref={rocketRef}
          src={Rocket}
          alt="Rocket Orbiting"
          className="absolute w-[130px] sm:w-[150px] z-20 pointer-events-none"
        />
      </div>

      {/* Main Heading */}
      <div className="z-10 text-center mt-[-7rem] max-w-[95vw] break-words px-2">
        <p className="text-[calc(3rem*1)] tracking-tighter md:text-[calc(4rem*1)] lg:text-[calc(6rem*1)] xl:text-[calc(7rem*1)] leading-tight">
          Where <AuroraText> DESIGN </AuroraText> Meets{' '}
          <AuroraText> INNOVATION </AuroraText>
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="z-10 space-y-[1%] w-full overflow-hidden">
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
        <p className="text-[calc(1.25rem*1.15)] tracking-tighter md:text-[calc(2.25rem*1.15)] lg:text-[calc(4.25rem*1.15)] xl:text-[calc(5.25rem*1.15)] uppercase leading-snug mb-[5rem]">
          <AuroraText>Design </AuroraText> is our language.{' '}
          <AuroraText>Innovation</AuroraText> is our accent.
        </p>
      </div>
    </section>
  )
}

export default Hero
