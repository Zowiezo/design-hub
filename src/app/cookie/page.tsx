'use client'

import React from 'react'
import { Particles } from '../../components/magicui/particles'

const CookiesPolicy = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#37b7ff]/30 selection:text-[#37b7ff]">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
  <Particles
    className="h-full w-full"
    color="#37b7ff"
    quantity={550}
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
            Last updated: 22 January 2026
          </p>
        </header>

        {/* Content with subtle border dividers */}
        <div className="space-y-16 font-light text-gray-300 leading-relaxed">
          
          {/* 1. Definition */}
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

          {/* 2. Usage */}
          <section className="border-l border-[#37b7ff]/20 pl-8 transition-all hover:border-[#37b7ff]">
            <h2 className="text-xl font-medium text-white mb-4 uppercase tracking-widest">
              2. How We Use Cookies
            </h2>
            <p className="mb-4">We utilize these tools to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#37b7ff]" /> Ensuring site stability
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#37b7ff]" /> Remembering user settings
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#37b7ff]" /> Analyzing traffic patterns
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#37b7ff]" /> Enhancing overall UX
              </li>
            </ul>
          </section>

          {/* 3. Types of Cookies */}
          <section className="border-l border-[#37b7ff]/20 pl-8 transition-all hover:border-[#37b7ff]">
            <h2 className="text-xl font-medium text-white mb-4 uppercase tracking-widest">
              3. Types of Cookies We Set
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-white">Essential Cookies:</strong> Necessary for the website to function. Without these, our platform cannot provide basic services like secure logins.
              </p>
              <p>
                <strong className="text-white">Performance Cookies:</strong> These help us understand how visitors interact with the site by collecting and reporting information anonymously.
              </p>
            </div>
          </section>

          {/* 4. Analytics */}
          <section className="border-l border-[#37b7ff]/20 pl-8 transition-all hover:border-[#37b7ff]">
            <h2 className="text-xl font-medium text-white mb-4 uppercase tracking-widest">
              4. Third-Party Analytics
            </h2>
            <p>
              We use <span className="text-white">Google Analytics</span> to measure how users interact with our site content. These cookies collect data such as your IP address, browser type, and the pages you visit. This data is used solely to improve our Incubation Lab experience.
            </p>
          </section>

          {/* 5. Control */}
          <section className="border-l border-[#37b7ff]/20 pl-8 transition-all hover:border-[#37b7ff]">
            <h2 className="text-xl font-medium text-white mb-4 uppercase tracking-widest">
              5. Managing Your Preferences
            </h2>
            <p>
              You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline them if you prefer. Please note that this may prevent you from taking full advantage of the website.
            </p>
          </section>

          {/* 6. Security */}
          <section className="border-l border-[#37b7ff]/20 pl-8 transition-all hover:border-[#37b7ff]">
            <h2 className="text-xl font-medium text-white mb-4 uppercase tracking-widest">
              6. Data Protection
            </h2>
            <p>
              We do not use cookies to collect personally identifiable information. Any data stored via cookies is protected by our standard security protocols, ensuring that your digital footprint remains secure within The Design Hub ecosystem.
            </p>
          </section>

          {/* 7. Contact */}
          <section className="pt-10 border-t border-white/10">
            <h2 className="text-xl font-medium text-white mb-4 uppercase tracking-widest">
              7. Contact Us
            </h2>
            <p>
              Direct your privacy inquiries to{' '}
              <a
                href="mailto:hello@thedesignhub.co.za"
                target="_blank"
    rel="noopener noreferrer"
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