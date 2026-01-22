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
          quantity={80}
          size={0.05}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 md:py-48">
        <header className="text-center mb-24">
          <h1 className="font-montserrat text-5xl md:text-7xl font-thin tracking-tighter mb-6 uppercase">
            Privacy <span className="text-[#37b7ff]">Policy</span>
          </h1>
          <div className="flex flex-col items-center gap-2">
            <span className="h-[1px] w-12 bg-[#37b7ff] mb-4" />
            <p className="font-poppins text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">
              Legal Governance / Effective: 16 July 2025
            </p>
          </div>
        </header>

        <div className="space-y-20 font-poppins font-light text-gray-400 leading-relaxed">
          {/* Section 1: Identity */}
          <section className="border-l border-white/5 pl-8 group transition-all duration-700 hover:border-[#37b7ff]/50">
            <h2 className="font-montserrat text-lg font-thin text-white mb-6 uppercase tracking-[0.2em] group-hover:text-[#37b7ff] transition-colors">
              01. Entity Identity
            </h2>
            <p className="text-sm md:text-base">
              The Design Hub Management operates as a specialized creative technology studio in South Africa. 
              Our operations are built on a foundation of transparency, ensuring your digital footprint is 
              handled with the same precision we apply to our code and design architecture.
            </p>
          </section>

          {/* Section 2: Data Collection */}
          <section className="border-l border-white/5 pl-8 group transition-all duration-700 hover:border-[#37b7ff]/50">
            <h2 className="font-montserrat text-lg font-thin text-white mb-6 uppercase tracking-[0.2em] group-hover:text-[#37b7ff] transition-colors">
              02. Data Acquisition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white/[0.02] p-8 rounded-[2rem] border border-white/5 backdrop-blur-sm group-hover:border-white/10 transition-all">
                <h4 className="font-montserrat text-xs text-[#37b7ff] mb-4 font-bold uppercase tracking-widest">
                  Active Submissions
                </h4>
                <p className="text-xs leading-relaxed text-gray-500">
                  Identifiers including name, electronic mail, and proprietary project briefs 
                  voluntarily submitted via our inception forms.
                </p>
              </div>
              <div className="bg-white/[0.02] p-8 rounded-[2rem] border border-white/5 backdrop-blur-sm group-hover:border-white/10 transition-all">
                <h4 className="font-montserrat text-xs text-[#37b7ff] mb-4 font-bold uppercase tracking-widest">
                  Technical Metadata
                </h4>
                <p className="text-xs leading-relaxed text-gray-500">
                  Network identifiers, browser configurations, and engagement telemetry 
                  processed through our analytical frameworks (GA4).
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Usage */}
          <section className="border-l border-white/5 pl-8 group transition-all duration-700 hover:border-[#37b7ff]/50">
            <h2 className="font-montserrat text-lg font-thin text-white mb-6 uppercase tracking-[0.2em] group-hover:text-[#37b7ff] transition-colors">
              03. Purpose of Processing
            </h2>
            <p className="text-sm md:text-base">
              Information acquired is utilized exclusively to engineer bespoke digital solutions, 
              facilitate studio-client communication, and optimize our digital interface performance. 
              We do not participate in the trade or unauthorized distribution of personal datasets.
            </p>
          </section>

          {/* Section 4: Storage */}
          <section className="border-l border-white/5 pl-8 group transition-all duration-700 hover:border-[#37b7ff]/50">
            <h2 className="font-montserrat text-lg font-thin text-white mb-6 uppercase tracking-[0.2em] group-hover:text-[#37b7ff] transition-colors">
              04. Data Security Architecture
            </h2>
            <p className="text-sm md:text-base">
              We implement industry-standard encryption and secure cloud infrastructure to safeguard 
              your data. While no digital environment is absolute, our technical protocols are 
              designed to mitigate risk and prevent unauthorized access to your project assets.
            </p>
          </section>

          {/* Section 5: POPIA & GDPR */}
          <section className="border-l border-white/5 pl-8 group transition-all duration-700 hover:border-[#37b7ff]/50">
            <h2 className="font-montserrat text-lg font-thin text-white mb-6 uppercase tracking-[0.2em] group-hover:text-[#37b7ff] transition-colors">
              05. Regulatory Governance
            </h2>
            <p className="text-sm md:text-base mb-6">
              In accordance with the **Protection of Personal Information Act (POPIA)** of South Africa 
              and the **GDPR (EU)**, you maintain full sovereignty over your data. This includes the 
              right to access, rectify, or request total erasure of your information from our systems.
            </p>
            <a
              href="mailto:hello@thedesignhub.co.za"
              className="font-poppins inline-flex items-center gap-4 text-[#37b7ff] text-[10px] uppercase tracking-[0.3em] font-bold border-b border-[#37b7ff]/20 hover:border-[#37b7ff] transition-all pb-2"
            >
              Initiate Data Request <span className="text-lg">→</span>
            </a>
          </section>

          {/* Section 6: Contact */}
          <section className="pt-12 border-t border-white/5">
            <p className="font-poppins text-[10px] text-gray-600 uppercase tracking-[0.5em] text-center">
              The Design Hub Management • All Rights Reserved
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy