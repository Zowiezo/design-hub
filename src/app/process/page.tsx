'use client'

import { useRef } from 'react'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { AuroraText } from '../../components/magicui/aurora-text'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

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
      'It’s go time. We launch your project, provide any training needed, and hand over the assets. Cue the confetti 🎉!',
    image: '/assets/images/5.png',
  },
]

const Process = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 50 },
  })

  return (
    <section
      className="relative bg-black text-white py-24 overflow-hidden"
      id="our-process"
    >
      {/* Particles/Head handled by Layout.tsx */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Modern Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-6">
              Our <AuroraText>Process</AuroraText>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              A seamless, collaborative journey from initial spark to digital
              excellence.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              ←
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              →
            </button>
          </div>
        </div>

        {/* Enhanced Slider */}
        <div
          ref={sliderRef}
          className="keen-slider cursor-grab active:cursor-grabbing"
        >
          {steps.map((step, i) => (
            <div key={i} className="keen-slider__slide overflow-visible">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Visual Side */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#37b7ff]/10 blur-[120px] rounded-full group-hover:bg-[#37b7ff]/20 transition-all duration-700" />
                  <div className="relative aspect-square w-full max-w-[450px] mx-auto flex items-center justify-center bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-sm">
                    <span className="absolute top-8 left-8 text-6xl font-black opacity-10">
                      0{i + 1}
                    </span>
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={300}
                      height={300}
                      className="object-contain animate-float"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="space-y-8">
                  <p className="text-[#37b7ff] uppercase tracking-[0.4em] font-medium text-sm">
                    Phase 0{i + 1}
                  </p>
                  <h3 className="text-4xl md:text-6xl font-light tracking-tight">
                    <AnimatedGradientText className="inline">
                      {step.title}
                    </AnimatedGradientText>
                  </h3>
                  <p className="text-xl text-gray-300 font-light leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-8">
                    <div className="flex items-center gap-4">
                      {steps.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`h-1 transition-all duration-500 rounded-full ${i === dotIndex ? 'w-12 bg-[#37b7ff]' : 'w-4 bg-white/20'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
