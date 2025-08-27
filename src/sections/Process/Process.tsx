'use client'

import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { AuroraText } from '../../components/magicui/aurora-text'
import { Particles } from '../../components/magicui/particles'
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    title: 'Discovery Call',
    description:
      'We kick things off with a deep dive into your brand, vision, and goals. This helps us understand your unique needs and uncover the best path forward.',
    image: '/assets/images/1.png',
  },
  {
    title: 'Strategy & Briefing',
    description:
      'You’ll complete a creative client brief. We’ll map the entire project — timelines, milestones, and deliverables — to stay aligned and on track.',
    image: '/assets/images/2.png',
  },
  {
    title: 'Design & Build',
    description:
      'This is where the magic happens. Our designers and developers bring your vision to life with stunning visuals and functional, intuitive code.',
    image: '/assets/images/3.png',
  },
  {
    title: 'Feedback & Refine',
    description:
      'You share your feedback, we refine. We polish the final product together to ensure every pixel and every interaction aligns with your goals.',
    image: '/assets/images/4.png',
  },
  {
    title: 'Launch & Handoff',
    description:
      'It’s go time. We launch your project, provide any training needed, and hand over the assets. Cue the confetti 🎉 — and maybe a little champagne 🍾!',
    image: '/assets/images/5.png',
  },
]

const Process = () => {
  const sectionsRef = useRef<Array<HTMLDivElement | null>>([])
  const [, setActiveStep] = useState<number | null>(null)
  const sliderInstanceRef = useRef<KeenSliderInstance | null>(null)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 30,
    },
    created(slider) {
      sliderInstanceRef.current = slider
    },
  })

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
            onEnter: () => setActiveStep(i),
            onEnterBack: () => setActiveStep(i),
          },
          duration: 0.8,
          ease: 'power2.out',
        },
      )
    })
  }, [])

  const goToNext = () => {
    instanceRef.current?.next()
  }

  return (
    <section
      className="relative bg-black text-white px-6 py-24"
      id="our-process"
    >
      <Head>
        <title>Our Process | The Design Hub Management</title>
        <meta
          name="description"
          content="At The Design Hub Management, we believe in a seamless creative process — from discovery and strategy to design and development."
        />
        <meta
          name="keywords"
          content="The Design Hub Management Process, Creative Workflow, Design Process, UI/UX Strategy, Branding Process, South Africa"
        />
        <meta name="author" content="The Design Hub Management" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.thedesignhub.co.za/process"
        />
        <meta
          property="og:title"
          content="Our Process | The Design Hub Management"
        />
        <meta
          property="og:description"
          content="Discover how The Design Hub Management approaches each project — a process built on strategy, creativity, and innovation."
        />
        <meta
          property="og:image"
          content="https://www.thedesignhub.co.za/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.thedesignhub.co.za/process"
        />
        <meta
          name="twitter:title"
          content="Our Process | The Design Hub Management"
        />
        <meta
          name="twitter:description"
          content="Explore our process — from discovery to design to development. The Design Hub Management blends creativity with technology to deliver impact."
        />
        <meta
          name="twitter:image"
          content="https://www.thedesignhub.co.za/og-image.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color={'#37b7ff'}
        quantity={250}
        ease={80}
        size={0.05}
      />

      {/* Heading */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
        <p className="text-3xl md:text-5xl font-light tracking-tight mb-6">
          Our Process
        </p>
        <p className="text-lg md:text-xl font-light">
          <AuroraText className="drop-shadow-lg">
            From idea to execution — we follow a clear, collaborative process
            that ensures every project is delivered with purpose and polish.
          </AuroraText>
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={sliderRef}
        className="keen-slider relative z-10 max-w-md mx-auto"
      >
        {steps.map((step, i) => (
          <div
            id={`step-${i + 1}`}
            key={i}
            ref={(el) => {
              sectionsRef.current[i] = el
            }}
            className="keen-slider__slide"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              {/* Image */}
              <div className="mt-[5%]">
                <Image
                  src={step.image}
                  alt={`Step 0${i + 1}`}
                  width={160}
                  height={160}
                  className="object-contain animate-fade-in animate-orbit"
                />
              </div>

              {/* Title */}
              <p className="text-2xl font-semibold uppercase tracking-wide">
                <AnimatedGradientText>{step.title}</AnimatedGradientText>
              </p>

              {/* Description */}
              <div className="space-y-6 text-gray-200 text-left text-lg leading-relaxed font-light drop-shadow-md">
                {step.description.split('\n').map((line, idx) => (
                  <p key={idx} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>

              {/* Arrow button */}
              <div className="mt-6">
                <button
                  onClick={goToNext}
                  aria-label="Next step"
                  className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 p-[2px] hover:scale-110 transition-transform"
                >
                  <div className="w-full h-full flex items-center justify-center rounded-full bg-black">
                    <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
                      &gt;
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process
