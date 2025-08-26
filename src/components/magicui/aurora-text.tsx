'use client'

import React, { memo } from 'react'

interface AuroraTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  speed?: number
}

export const AuroraText = memo(
  ({
    children,
    className = '',
    // Brighter, neon-like colors for contrast against black
    colors = ['#FF1B8D', '#9D4EDD', '#00CFFF', '#4DFF91'],
    speed = 1,
  }: AuroraTextProps) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(', ')}, ${
        colors[0]
      })`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animationDuration: `${10 / speed}s`,
      // Add glow for readability on dark backgrounds
      // textShadow: `
      //   0 0 6px rgba(255, 255, 255, 0.6),
      //   0 0 12px rgba(0, 200, 255, 0.6),
      //   0 0 18px rgba(255, 0, 149, 0.67)
      // `,
    }

    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    )
  },
)

AuroraText.displayName = 'AuroraText'
