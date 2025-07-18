'use client'

import React from 'react'
import { cn } from '../lib/utils'

interface PreServiceCardProps {
  icon: string
  title: string
  description: string
  link: string
  className?: string
}

const PreServiceCard: React.FC<PreServiceCardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        'cursor-pointer group rounded-2xl border border-gray-700 bg-black text-white p-6 hover:shadow-xl hover:border-teal-500 transition-all duration-300 ease-in-out relative overflow-hidden',
        className,
      )}
    >
      {/* Icon with playful animation */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-4xl group-hover:animate-bounce z-10">
        {icon}
      </div>

      <div className="pt-8 text-center">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default PreServiceCard
