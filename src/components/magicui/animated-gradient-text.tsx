import { cn } from '../../components/lib/utils'
import { ComponentPropsWithoutRef } from 'react'

export interface AnimatedGradientTextProps
  extends ComponentPropsWithoutRef<'div'> {
  speed?: number
  colorFrom?: string
  colorTo?: string
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = '#FF1B8D', // brighter neon pink
  colorTo = '#00CFFF', // bright cyan
  ...props
}: AnimatedGradientTextProps) {
  return (
    <span
      style={
        {
          '--bg-size': `${speed * 300}%`,
          '--color-from': colorFrom,
          '--color-to': colorTo,
          // textShadow: `
          //   0 0 6px rgba(255, 255, 255, 0.6),
          //   0 0 12px rgba(0, 200, 255, 0.6),
          //   0 0 18px rgba(255, 0, 150, 0.4)
          // `,
        } as React.CSSProperties
      }
      className={cn(
        `inline animate-gradient bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
