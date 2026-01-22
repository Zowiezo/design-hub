'use client'

import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { AuroraText } from '../../components/magicui/aurora-text'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

const steps = [
  {
    title: 'THE INCEPTION',
    description:
      'Every legacy begins with a conversation. We deep-dive into your brand architecture to uncover the strategic foundations required for digital dominance.',
    image: '/assets/images/1.png',
  },
  {
    title: 'STRATEGIC MAPPING',
    description:
      'We translate vision into a technical roadmap. Defining the user journey, project milestones, and the architectural brief that guides the entire lifecycle.',
    image: '/assets/images/2.png',
  },
  {
    title: 'CREATIVE ENGINEERING',
    description:
      'Where Identity meets Code. Our studio architects high-performance visuals and intuitive software, ensuring aesthetic excellence and functional resilience.',
    image: '/assets/images/3.png',
  },
  {
    title: 'REFINEMENT LAB',
    description:
      'Precision is non-negotiable. We collaborate through an iterative feedback loop to polish every interaction and refine the digital ecosystem.',
    image: '/assets/images/4.png',
  },
  {
    title: 'THE LAUNCH',
    description:
      'Execution at scale. We deploy your vision to the global landscape, providing a seamless handoff of digital assets and infrastructure.',
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
      className="relative bg-black text-white py-24 overflow-hidden border-t border-white/5"
      id="our-process"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Modern Header - Montserrat Thin */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-12">
          <div className="max-w-2xl">
            <h2 className="font-montserrat text-5xl md:text-7xl font-thin tracking-tighter mb-6 uppercase">
              The <AuroraText>Process</AuroraText>
            </h2>
            <p className="font-poppins text-base md:text-lg text-gray-500 font-light leading-relaxed uppercase tracking-[0.3em]">
              Inception to Launch • Strategy • Identity • Code
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#37b7ff] hover:border-[#37b7ff] transition-all duration-500 group"
            >
              <span className="group-hover:scale-125 transition-transform">←</span>
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#37b7ff] hover:border-[#37b7ff] transition-all duration-500 group"
            >
              <span className="group-hover:scale-125 transition-transform">→</span>
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
                  <div className="absolute inset-0 bg-[#37b7ff]/5 blur-[120px] rounded-full group-hover:bg-[#37b7ff]/15 transition-all duration-700" />
                  <div className="relative aspect-square w-full max-w-[450px] mx-auto flex items-center justify-center bg-white/[0.02] rounded-[3rem] border border-white/10 backdrop-blur-sm">
                    <span className="font-montserrat absolute top-8 left-8 text-8xl font-thin opacity-5 tracking-tighter">
                      0{i + 1}
                    </span>
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={280}
                      height={280}
                      className="object-contain animate-float grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                     <span className="h-[1px] w-8 bg-[#37b7ff]" />
                     <p className="font-poppins text-[#37b7ff] uppercase tracking-[0.5em] font-medium text-[10px] md:text-xs">
                       Phase 0{i + 1}
                     </p>
                  </div>
                  
                  <h3 className="font-montserrat text-4xl md:text-6xl font-thin tracking-tight uppercase">
                    <AnimatedGradientText className="inline">
                      {step.title}
                    </AnimatedGradientText>
                  </h3>
                  
                  <p className="font-poppins text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                    {step.description}
                  </p>

                  <div className="pt-12">
                    <div className="flex items-center gap-3">
                      {steps.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`h-1 transition-all duration-700 rounded-full ${
                            i === dotIndex ? 'w-16 bg-[#37b7ff]' : 'w-4 bg-white/10'
                          }`}
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