'use client'

import React from 'react'
import { Particles } from '../../components/magicui/particles'

const TermsOfService = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#37b7ff]/30 selection:text-[#37b7ff]">
      <div className="fixed inset-0 z-0">
        <Particles
          className="h-full w-full"
          color="#37b7ff"
          quantity={120}
          size={0.05}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 md:py-48">
        <header className="text-center mb-24">
          <h1 className="font-montserrat text-5xl md:text-7xl font-thin tracking-tighter mb-6 uppercase">
            Terms of <span className="text-[#37b7ff]">Service</span>
          </h1>
          <div className="flex flex-col items-center gap-2">
            <span className="h-[1px] w-12 bg-[#37b7ff] mb-4" />
            <p className="font-poppins text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">
              Legal Framework / Version 1.2 — July 2025
            </p>
          </div>
        </header>

        <div className="space-y-20 font-poppins font-light text-gray-400 leading-relaxed">
          {/* Section 1: Acceptance */}
          <section className="border-l border-white/5 pl-8 group transition-all duration-700 hover:border-[#37b7ff]/50">
            <h2 className="font-montserrat text-lg font-thin text-white mb-6 uppercase tracking-[0.2em] group-hover:text-[#37b7ff] transition-colors">
              01. Ecosystem Acceptance
            </h2>
            <p className="text-sm md:text-base">
              By engaging with the digital ecosystem of The Design Hub Management, you acknowledge 
              a binding commitment to these Terms of Service. These protocols govern the interaction 
              between the Studio (The Architect) and the Client (The Visionary).
            </p>
          </section>

          {/* Section 2: Intellectual Property */}
          <section className="border-l border-white/5 pl-8 group transition-all duration-700 hover:border-[#37b7ff]/50">
            <h2 className="font-montserrat text-lg font-thin text-white mb-6 uppercase tracking-[0.2em] group-hover:text-[#37b7ff] transition-colors">
              02. Intellectual Architecture
            </h2>
            <div className="bg-white/[0.02] p-8 rounded-[2rem] border border-white/5 backdrop-blur-sm group-hover:border-white/10 transition-all">
              <p className="text-xs md:text-sm leading-relaxed">
                All proprietary assets, modular source code, and strategic deliverables remain 
                the exclusive intellectual property of 
                <span className="text-white font-medium"> The Design Hub Management </span> 
                until final financial reconciliation is confirmed. Upon settlement, usage rights 
                are transferred as dictated by the specific Project Inception Agreement.
              </p>
            </div>
          </section>

          {/* Section 3: Engagement Terms */}
          <section className="border-l border-white/5 pl-8 group transition-all duration-700 hover:border-[#37b7ff]/50">
            <h2 className="font-montserrat text-lg font-thin text-white mb-6 uppercase tracking-[0.2em] group-hover:text-[#37b7ff] transition-colors">
              03. Service Deployment
            </h2>
            <p className="text-sm md:text-base">
              The Studio reserves the right to modify technical specifications and service 
              modules to maintain alignment with evolving digital standards. Project timelines 
              are strategic estimates and are subject to the agile requirements of high-fidelity 
              engineering.
            </p>
          </section>

          {/* Section 4: Law */}
          <section className="border-l border-white/5 pl-8 group transition-all duration-700 hover:border-[#37b7ff]/50">
            <h2 className="font-montserrat text-lg font-thin text-white mb-6 uppercase tracking-[0.2em] group-hover:text-[#37b7ff] transition-colors">
              04. Governing Jurisdiction
            </h2>
            <p className="text-sm md:text-base">
              These terms are synthesized under the legal mandates of the 
              <span className="text-white"> Republic of South Africa</span>. Any formal 
              disputations will be resolved within the relevant provincial court jurisdictions.
            </p>
          </section>

          <section className="pt-20 border-t border-white/5 text-center">
            <p className="font-poppins text-[11px] text-gray-500 mb-8 uppercase tracking-widest">
              Ready to execute your vision under these protocols?
            </p>
            <a
              href="mailto:hello@thedesignhub.co.za"
              className="font-poppins inline-block text-[#37b7ff] text-[10px] font-bold uppercase tracking-[0.3em] border border-[#37b7ff]/30 px-10 py-4 rounded-full hover:bg-[#37b7ff] hover:text-black transition-all duration-500"
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