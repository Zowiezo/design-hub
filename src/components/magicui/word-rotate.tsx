'use client'

import { AnimatePresence, motion, MotionProps } from 'motion/react'
import { useEffect, useState } from 'react'

import { cn } from '../../components/lib/utils'

interface WordRotateProps {
  words: string[]
  duration?: number
  motionProps?: MotionProps
  className?: string
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: 'easeOut' },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(className)}
          {...motionProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}
export const steps = [
  {
    title: 'Discovery Call',
    description:
      'We kick things off with a deep dive into your brand, vision, and goals.This helps us understand your unique needs and uncover the best path forward.',
    image: '/assets/images/1-number.png',
  },
  {
    title: 'Strategy & Briefing',
    description:
      'You’ll complete a creative client brief and we’ll map the entire project — timelines, milestones, and deliverables — to keep everything aligned and on track.',
    image: '/assets/images/2-number.png',
  },
  {
    title: 'Design & Build',
    description:
      'This is where the magic happens. Our designers and developers bring your vision to life with stunning visuals and functional, intuitive code.',
    image: '/assets/images/3-number.png',
  },
  {
    title: 'Feedback & Refine',
    description:
      'You share your feedback, we refine. We polish the final product together to ensure every pixel and every interaction aligns with your goals.',
    image: '/assets/images/4-number.png',
  },
  {
    title: 'Launch & Handoff',
    description:
      'It’s go time. We launch your project, provide any training needed, and hand over the assets. Cue the confetti — and maybe a little champagne!',
    image: '/assets/images/5-number.png',
  },
]
