'use client'

import React from 'react'
import { Particles } from '../../components/magicui/particles'

const CookiesPolicy = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#37b7ff]/30 selection:text-[#37b7ff]">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          className="h-full w-full"
          color="#37b7ff"
          quantity={100}
          size={0.05}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 md:py-48">
        <header className="text-center mb-24">
          <h1 className="font-montserrat text-5xl md:text-7xl font-thin tracking-tighter mb-6 uppercase">
            Cookie <span className="text-[#37b7ff]">Policy</span>
          </h1>
          <div className="flex flex-col items-center gap-2">
            <span className="h-[1px] w-12 bg-[#37b7ff] mb-4" />
            <p className="font-poppins text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">
              Metadata Governance / Updated: 22 Jan 2026
            </p>
          </div>
        </header>

        <div className="space-y-16 font-poppins font-light text-gray-400 leading-relaxed">
          
          <section className="border-l border-white/5 pl-8 transition-all hover:border-[#37b7ff]/50 group">
            <h2 className="font-montserrat text-lg font-thin text-white mb-4 uppercase tracking-widest group-hover:text-[#37b7ff]">
              01. Technical Definition
            </h2>
            <p className="text-sm md:text-base">
              Cookies are diagnostic text files deployed to your hardware. They enable our digital 
              architecture to recognize your session, preserving preferences and optimizing interaction 
              telemetry.
            </p>
          </section>

          <section className="border-l border-white/5 pl-8 transition-all hover:border-[#37b7ff]/50 group">
            <h2 className="font-montserrat text-lg font-thin text-white mb-6 uppercase tracking-widest group-hover:text-[#37b7ff]">
              02. Telemetry Utilization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Ensuring structural site stability",
                "Preserving customized user parameters",
                "Analyzing engagement traffic patterns",
                "Optimizing UX flow modules"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500">
                  <span className="w-1.5 h-[1px] bg-[#37b7ff]" /> {item}
                </div>
              ))}
            </div>
          </section>

          <section className="border-l border-white/5 pl-8 transition-all hover:border-[#37b7ff]/50 group">
            <h2 className="font-montserrat text-lg font-thin text-white mb-4 uppercase tracking-widest group-hover:text-[#37b7ff]">
              03. Categorization
            </h2>
            <div className="space-y-6">
              <div className="bg-white/[0.01] p-6 rounded-2xl border border-white/5">
                <p className="text-sm">
                  <strong className="text-white font-medium uppercase tracking-tighter">Essential:</strong> 
                  Mandatory for core framework functionality. These cannot be deactivated within our internal systems.
                </p>
              </div>
              <div className="bg-white/[0.01] p-6 rounded-2xl border border-white/5">
                <p className="text-sm">
                  <strong className="text-white font-medium uppercase tracking-tighter">Performance:</strong> 
                  Facilitates anonymous reporting of interaction metrics via Google Analytics 4.
                </p>
              </div>
            </div>
          </section>

          <section className="border-l border-white/5 pl-8 transition-all hover:border-[#37b7ff]/50 group">
            <h2 className="font-montserrat text-lg font-thin text-white mb-4 uppercase tracking-widest group-hover:text-[#37b7ff]">
              04. User Sovereignty
            </h2>
            <p className="text-sm md:text-base">
              You maintain total authority over your browser settings. Declining technical cookies 
              may restrict access to specific high-fidelity modules within the Incubation Lab experience.
            </p>
          </section>

          <section className="pt-16 border-t border-white/5 text-center">
            <p className="font-poppins text-[10px] text-gray-600 uppercase tracking-[0.5em]">
              The Design Hub Management • Data Governance Unit
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CookiesPolicy