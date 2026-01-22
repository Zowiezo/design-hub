'use client'

import React from 'react'
import { Particles } from '../../components/magicui/particles'

const TermsOfService = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#37b7ff]/30 selection:text-[#37b7ff]">
      {/* Background stays fixed */}
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
            Terms of <span className="text-[#37b7ff]">Service</span>
          </h1>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 font-medium">
            Version 1.2 — Last Updated: 16 July 2025
          </p>
        </header>

        <div className="space-y-20 font-light text-gray-300 leading-relaxed">
          {/* Section 1: Acceptance */}
          <section className="border-l border-[#37b7ff]/20 pl-8 group transition-all duration-500 hover:border-[#37b7ff]">
            <h2 className="text-xl font-medium text-white mb-6 uppercase tracking-widest group-hover:text-[#37b7ff] transition-colors">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using our digital ecosystem, you acknowledge that
              you have read, understood, and agree to be bound by these Terms of
              Service. If you do not concur with these terms, please refrain
              from using our specialized services.
            </p>
          </section>

          {/* Section 5: Intellectual Property - Critical for a Design House */}
          <section className="border-l border-[#37b7ff]/20 pl-8 group transition-all duration-500 hover:border-[#37b7ff]">
            <h2 className="text-xl font-medium text-white mb-6 uppercase tracking-widest group-hover:text-[#37b7ff] transition-colors">
              5. Intellectual Property
            </h2>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <p className="text-sm">
                All custom assets, source code, and creative deliverables remain
                the sole intellectual property of{' '}
                <span className="text-white font-normal">
                  The Design Hub Management
                </span>
                until full financial settlement is reached. Upon completion of
                payment, usage rights transfer as specified in your individual
                Project Service Agreement.
              </p>
            </div>
          </section>

          {/* Section 11: Governing Law */}
          <section className="border-l border-[#37b7ff]/20 pl-8 group transition-all duration-500 hover:border-[#37b7ff]">
            <h2 className="text-xl font-medium text-white mb-6 uppercase tracking-widest group-hover:text-[#37b7ff] transition-colors">
              11. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the{' '}
              <span className="text-white">Republic of South Africa</span>. Any
              disputes arising from these services will be handled exclusively
              within the applicable South African courts.
            </p>
          </section>

          <section className="pt-10 border-t border-white/10 text-center">
            <p className="text-sm text-gray-500 mb-4 italic">
              Ready to start a project under these terms?
            </p>
            <a
              href="mailto:hello@thedesignhub.co.za"
              target="_blank"
    rel="noopener noreferrer"
              className="inline-block text-[#37b7ff] font-medium border border-[#37b7ff]/30 px-8 py-3 rounded-full hover:bg-[#37b7ff] hover:text-black transition-all duration-300"
            >
              Contact Legal Desk
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
