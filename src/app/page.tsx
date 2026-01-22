'use client'

import React from 'react'
import Hero from './hero/page'
import Home from './home/page'
import PreServicesSection from './preservicessection/page'
import Work from '@/components/Work'
import PartnersSection from '@/components/Partner'
import JoinLabCTA from '@/components/JoinLabCTA'
import Contact from './contact/page'

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section: The First Impression */}
      <Hero />

      {/* 2. Home Section: The 'Modern Era' Intro */}
      <Home />

      {/* 3. The Strategy: Think / Create / Build / Launch */}
      <PreServicesSection />

      {/* 4. The Portfolio: The Incubation Lab Grid */}
      <Work />

      <PartnersSection />

      {/* 5. The Pitch: Why join the Lab? */}
      <JoinLabCTA />

      {/* 6. The Final Step: Contact / Inquire */}
      <section id="contact-section">
        <Contact />
      </section>
    </div>
  )
}
