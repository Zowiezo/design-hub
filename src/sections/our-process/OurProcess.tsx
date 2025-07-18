'use client'

import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { AuroraText } from '../../components/magicui/aurora-text'
import { Particles } from '../../components/magicui/particles'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    title: 'Discovery Call',
    description:
      'We kick things off with a deep dive into your brand, vision, and goals.\nThis helps us understand your unique needs and uncover the best path forward.',
    image: '/assets/images/1.png',
  },
  {
    title: 'Strategy & Briefing',
    description:
      'You’ll complete a creative client brief.We’ll map the entire project — \ntimelines, milestones, and deliverables — to stay aligned and on track.',
    image: '/assets/images/2.png',
  },
  {
    title: 'Design & Build',
    description:
      'This is where the magic happens. Our designers and developers \n bring your vision to life with stunning visuals and functional, intuitive code.',
    image: '/assets/images/3.png',
  },
  {
    title: 'Feedback & Refine',
    description:
      'You share your feedback, we refine. We polish the final product \ntogether to ensure every pixel and every interaction aligns with your goals.',
    image: '/assets/images/4.png',
  },
  {
    title: 'Launch & Handoff',
    description:
      'It’s go time. We launch your project, provide any training needed, \n and hand over the assets. Cue the 🎉confetti 🎉 — and maybe a little 🍾champagne🍾!',
    image: '/assets/images/5.png',
  },
]

const OurProcess = () => {
  const sectionsRef = useRef<Array<HTMLDivElement | null>>([])
  const [, setActiveStep] = useState<number | null>(null)
  const sliderInstanceRef = useRef<any>(null)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 1 },
      },
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
      className="relative bg-black text-white px-6 py-24 md:px-24 mt-[10rem]"
      id="our-process"
    >
      <Helmet>
        <title>The Design Hub | Our Process </title>
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
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color={'#37b7ff'}
        quantity={250}
        ease={80}
        size={0.05}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
        <p className="text-[calc(3.25rem*1)] md:text-6xl font-light tracking-tight mb-6">
          Our Process
        </p>
        <p className="text-[calc(1.25rem*1)] text-gray-400">
          <AuroraText>
            From idea to execution — we follow a clear, collaborative process
            that ensures <br /> every project is delivered with purpose and
            polish.
          </AuroraText>
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={sliderRef}
        className="keen-slider relative z-10 max-w-5xl mx-auto ml-[25rem]"
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
            <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-16">
              {/* Image */}
              <div className="relative w-32 h-32 flex-shrink-0 ml-[15rem]">
                <img
                  src={step.image}
                  alt={`Step 0${i + 1}`}
                  className="w-[10rem] h-[10rem] mb-[-3rem] object-contain animate-fade-in animate-orbit"
                />
              </div>

              {/* Arrows */}
              <div className="relative flex justify-center items-center mb-8 z-20 gap-8">
                <img
                  onClick={goToNext}
                  src="/assets/images/arrow.png"
                  aria-label="Next step"
                  className="w-[10rem] h-[10rem] mb-[-10rem] ml-[40rem] object-contain animate-fade-in"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-[calc(1.75rem*1.2)] mb-[-1rem] ml-[11rem] uppercase tracking-wide">
                  <AnimatedGradientText>{step.title}</AnimatedGradientText>
                </p>
                <div className="text-[calc(1.15rem*1)] text-gray-300 max-w-xl leading-relaxed">
                  {step.description.split('\n').map((line, idx) => (
                    <p key={idx} className="mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-32" />
    </section>
  )
}

export default OurProcess
