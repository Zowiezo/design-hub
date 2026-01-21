'use client'

import React from 'react'
import { Particles } from '../../components/magicui/particles'

const CookiesPolicy = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#37b7ff]/30 selection:text-[#37b7ff]">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Particles
          className="h-full w-full"
          color="#37b7ff"
          quantity={150}
          size={0.05}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 md:py-48">
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-4">
            Cookie <span className="text-[#37b7ff]">Policy</span>
          </h1>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
            Last updated: 16 July 2025
          </p>
        </header>

        {/* Content with subtle border dividers */}
        <div className="space-y-16 font-light text-gray-300 leading-relaxed">
          <section className="border-l border-[#37b7ff]/20 pl-8 transition-all hover:border-[#37b7ff]">
            <h2 className="text-xl font-medium text-white mb-4 uppercase tracking-widest">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help improve your browsing experience by
              remembering preferences, login info, and how you interact with
              content.
            </p>
          </section>

          <section className="border-l border-[#37b7ff]/20 pl-8 transition-all hover:border-[#37b7ff]">
            <h2 className="text-xl font-medium text-white mb-4 uppercase tracking-widest">
              2. How We Use Cookies
            </h2>
            <p className="mb-4">We utilize these tools to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#37b7ff]" />{' '}
                Ensure site stability
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#37b7ff]" />{' '}
                Remember user settings
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#37b7ff]" />{' '}
                Analyze traffic patterns
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#37b7ff]" />{' '}
                Enhance overall UX
              </li>
            </ul>
          </section>

          {/* ... Follow same pattern for other sections ... */}

          <section className="pt-10 border-t border-white/10">
            <h2 className="text-xl font-medium text-white mb-4 uppercase tracking-widest">
              7. Contact Us
            </h2>
            <p>
              Direct your privacy inquiries to{' '}
              <a
                href="mailto:hello@thedesignhub.co.za"
                className="text-[#37b7ff] border-b border-[#37b7ff]/20 hover:border-[#37b7ff] transition-all pb-1 font-medium"
              >
                hello@thedesignhub.co.za
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CookiesPolicy
