'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import Image from 'next/image'

import { Marquee } from '../../components/magicui/marquee'
import { AuroraText } from '../../components/magicui/aurora-text'
import Logo from '../../assets/images/DH.png'
import Rocket from '../../assets/images/Rocket.gif'

gsap.registerPlugin(MotionPathPlugin)

const words = [
  'Web Development',
  'Brand Identity',
  'Design & UX',
  'Social Media',
  'Digital Marketing',
  'Consulting',
  'Business Start-Up',
]

const Hero = () => {
  const orbitRef = useRef<HTMLDivElement>(null)
  const rocketRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const rocket = rocketRef.current
    if (!rocket) return

    // Create a smoother, elliptical orbit
    gsap.set(rocket, { xPercent: -50, yPercent: -50 })

    gsap.to(rocket, {
      duration: 20,
      repeat: -1,
      ease: 'none',
      motionPath: {
        path: 'M -150,0 A 150,150 0 1,1 150,0 A 150,150 0 1,1 -150,0',
        autoRotate: true,
      },
    })

    return () => {
      gsap.killTweensOf(rocket)
    }
  }, [])

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Note: Particles are handled by Layout.tsx to avoid stacking multiple particle systems.
       */}

      {/* Hero Content */}
      <div ref={orbitRef} className="relative z-10 flex flex-col items-center">
        <div className="relative group cursor-pointer">
          <Image
            src={Logo}
            alt="Logo"
            width={280}
            height={280}
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
          {/* Rocket orbiting the logo specifically */}
          <Image
            ref={rocketRef}
            src={Rocket}
            alt="Rocket"
            width={80}
            height={80}
            className="absolute top-1/2 left-1/2 z-20 pointer-events-none"
          />
        </div>

        <div className="text-center mt-8 space-y-2">
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] text-[#37b7ff]">
            THE DESIGN HUB
          </h1>
          <p className="text-xl md:text-2xl font-extralight tracking-[0.5em] text-[#b7e3fe]">
            MANAGEMENT
          </p>
        </div>
      </div>

      <div className="mt-16 text-center px-4">
        <h2 className="text-3xl md:text-7xl font-thin tracking-tighter leading-tight">
          Where <AuroraText>DESIGN</AuroraText> Meets{' '}
          <AuroraText>INNOVATION</AuroraText>
        </h2>
      </div>

      {/* Ultra-Clean Marquee Section */}
      <div className="w-full mt-20 opacity-80">
        <Marquee className="py-4 [--duration:40s]" pauseOnHover>
          {words.map((word) => (
            <span
              key={word}
              className="mx-8 text-2xl font-extralight uppercase tracking-widest italic"
            >
              || {word}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Hero
