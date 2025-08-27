'use client'

import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import Image from 'next/image'

import { Marquee } from '../../components/magicui/marquee'
import { AuroraText } from '../../components/magicui/aurora-text'
import { Particles } from '../../components/magicui/particles'
import Logo from '../../assets/images/DH.png'
import Rocket from '../../assets/images/Rocket.gif'

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

    const updatePath = () => {
      const rect = orbit.getBoundingClientRect()
      const padding = 50 // distance from edges
      const width = rect.width
      const height = rect.height

      const path = [
        { x: padding, y: padding },
        { x: width - padding, y: padding / 2 },
        { x: width - padding / 2, y: height - padding },
        { x: padding / 2, y: height - padding / 2 },
        { x: padding, y: padding },
      ]

      gsap.to(rocket, {
        duration: 15,
        repeat: -1,
        ease: 'power1.inOut',
        motionPath: {
          path,
          autoRotate: true,
          curviness: 1.25,
        },
      })
    }

    updatePath()
    window.addEventListener('resize', updatePath)

    return () => {
      window.removeEventListener('resize', updatePath)
      gsap.killTweensOf(rocket)
    }
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-between py-10 px-4">
      <Head>
        <title>The Design Hub Management | Where Design Meets Innovation</title>
        <meta
          name="description"
          content="The Design Hub Management is a Black female-owned design and tech company based in South Africa. We specialize in UI/UX design, branding, and web development, delivering timeless and innovative digital experiences."
        />
        <meta
          name="keywords"
          content="The Design Hub Management, UI/UX Design, Branding, Web Development, Digital Strategy, Tech Company, South Africa, Black Female Owned"
        />
        <meta name="author" content="The Design Hub Management" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thedesignhub.co.za/" />
        <meta
          property="og:title"
          content="The Design Hub Management | Where Design Meets Innovation"
        />
        <meta
          property="og:description"
          content="A Black female-owned design and tech company delivering UI/UX, branding, and web development services in South Africa."
        />
        <meta
          property="og:image"
          content="https://www.thedesignhub.co.za/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.thedesignhub.co.za/" />
        <meta
          name="twitter:title"
          content="The Design Hub Management | Where Design Meets Innovation"
        />
        <meta
          name="twitter:description"
          content="Where creativity meets technology — discover UI/UX design, branding, and web development services with The Design Hub Management."
        />
        <meta
          name="twitter:image"
          content="https://www.thedesignhub.co.za/og-image.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Particle Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color="#37b7ff"
        quantity={300}
        ease={80}
        size={0.05}
      />

      {/* Logo + Title Container */}
      <div
        ref={orbitRef}
        className="relative flex flex-col items-center gap-3 w-full max-w-[400px] h-[400px] mt-[5rem] md:mt-[6rem] lg:mt-[7rem]"
      >
        <Image
          src={Logo}
          alt="The Design Hub Logo"
          width={250}
          height={250}
          className="object-contain"
        />
        <div className="text-center">
          <p className="font-thin text-[#37b7ff] text-[2rem] md:text-[2rem] lg:text-[3rem] xl:text-[3rem]">
            THE DESIGN HUB
          </p>
          <p className="font-thin text-[#b7e3fe] text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem]">
            MANAGEMENT
          </p>
        </div>

        {/* Rocket orbiting */}
        <Image
          ref={rocketRef}
          src={Rocket}
          alt="Rocket Orbiting"
          width={130}
          height={130}
          className="absolute z-20 pointer-events-none"
        />
      </div>

      {/* Main Heading */}
      <div className="z-10 text-center max-w-[95vw] break-words px-2 mt-[8%] md:mt-[12%] lg:mt-[18%] xl:mt-[20%] mb-[5%]">
        <p className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[5rem] tracking-tighter font-thin leading-tight">
          Where <AuroraText>DESIGN</AuroraText> Meets{' '}
          <AuroraText>INNOVATION</AuroraText>
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="z-10 space-y-[1%] w-full overflow-hidden">
        <Marquee
          className="opacity-50 text-[calc(1rem+2%)] text-white lowercase"
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
          className="opacity-50 text-[calc(1rem+2%)] text-white lowercase mb-[6%]"
          reverse
          pauseOnHover
        >
          {words.join(' ')}
        </Marquee>
      </div>

      {/* Subheading */}
      <div className="z-10 text-center px-4 max-w-[90vw]">
        <p className="text-[2rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem] tracking-tighter uppercase leading-snug mb-[15%] font-thin">
          <AuroraText>Design</AuroraText> is our language.{' '}
          <AuroraText> Innovation</AuroraText> is our accent.
        </p>
      </div>
    </section>
  )
}

export default Hero
