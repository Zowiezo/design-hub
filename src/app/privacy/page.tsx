'use client'

import React from 'react'
import { Particles } from '../../components/magicui/particles'

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#37b7ff]/30 selection:text-[#37b7ff]">
      {/* Background stays fixed for performance */}
      <div className="fixed inset-0 z-0">
        <Particles
          className="h-full w-full"
          color="#37b7ff"
          quantity={150}
          size={0.05}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 md:py-48">
        <header className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-4">
            Privacy <span className="text-[#37b7ff]">Policy</span>
          </h1>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 font-medium">
            Effective Date: 16 July 2025
          </p>
        </header>

        <div className="space-y-20 font-light text-gray-300 leading-relaxed">
          {/* Section 1 */}
          <section className="border-l border-[#37b7ff]/20 pl-8 group transition-all duration-500 hover:border-[#37b7ff]">
            <h2 className="text-xl font-medium text-white mb-6 uppercase tracking-widest group-hover:text-[#37b7ff] transition-colors">
              1. Who We Are
            </h2>
            <p>
              The Design Hub Management is a creative tech studio based in South
              Africa. We are dedicated to bridging the gap between imaginative
              design and technical execution through UI/UX, branding, and
              engineering.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-l border-[#37b7ff]/20 pl-8 group transition-all duration-500 hover:border-[#37b7ff]">
            <h2 className="text-xl font-medium text-white mb-6 uppercase tracking-widest group-hover:text-[#37b7ff] transition-colors">
              2. Data Collection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-[#37b7ff] mb-2 font-medium">
                  Direct Information
                </h4>
                <p className="text-sm">
                  Name, email, and project specifics provided through our
                  contact forms or collaboration tools.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-[#37b7ff] mb-2 font-medium">
                  Automated Metadata
                </h4>
                <p className="text-sm">
                  IP addresses, browser types, and engagement metrics collected
                  via Google Analytics 4.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 (Updated for POPIA/GDPR) */}
          <section className="border-l border-[#37b7ff]/20 pl-8 group transition-all duration-500 hover:border-[#37b7ff]">
            <h2 className="text-xl font-medium text-white mb-6 uppercase tracking-widest group-hover:text-[#37b7ff] transition-colors">
              6. Your Data Rights
            </h2>
            <p className="mb-6">
              In accordance with **POPIA (South Africa)** and **GDPR (EU)**, you
              hold the right to access, rectify, or request the erasure of your
              data.
            </p>
            <a
              href="mailto:hello@thedesignhub.co.za"
              className="inline-flex items-center gap-2 text-[#37b7ff] font-medium border-b border-[#37b7ff]/20 hover:border-[#37b7ff] transition-all pb-1"
            >
              Request Data Removal →
            </a>
          </section>

          {/* ... other sections ... */}
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
