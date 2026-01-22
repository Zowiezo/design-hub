'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SparklesText } from '@/components/magicui/sparkles-text'
import { CoolMode } from '@/components/magicui/cool-mode'
import JoinLabCTA from '@/components/JoinLabCTA'

interface Project {
  name: string
  type: string
  status: string
  logo?: string
  logos?: string[]
  url: string
  color: string
  description: string
}

const projects: Project[] = [
  {
    name: 'Triplii',
    type: 'Strategy • Identity • Code',
    status: 'Flagship Project',
    logo: '/assets/images/logos/triplii.png',
    url: 'https://triplii.co.za/',
    color: 'from-blue-500/20',
    description: 'Engineering a cross-platform digital ecosystem. From mobile-first UI architecture to scalable backend deployment, Triplii represents our flagship full-stack capability.',
  },
  {
    name: 'My Desk Buddy',
    type: 'E-commerce Architecture',
    status: 'Operations & Management',
    logo: '/assets/images/logos/MyDeskBuddy.png',
    url: 'https://mydeskbuddy.co.za',
    color: 'from-orange-500/20',
    description: 'Strategic E-commerce scaling. Leveraging Netcash Shop infrastructure to provide a robust, retail experience with high-conversion checkout flows.',
  },
  {
    name: 'Media.CNR',
    type: 'Digital Transformation',
    status: 'In Development',
    logo: '/assets/images/logos/MediaCnr.png',
    url: 'https://mediacnr.co.za',
    color: 'from-purple-500/20',
    description: "A holistic digital transformation. We are currently restructuring the platform's visual language and content hierarchy to maximize user engagement.",
  },
  {
    name: 'Incubation Lab',
    type: 'Multi-Brand Deployment',
    status: 'Active Builds',
    logos: [
      '/assets/images/logos/CorMag.png',
      '/assets/images/logos/NikiweS.png',
      '/assets/images/logos/MemoSwift.png',
    ],
    url: '/services',
    color: 'from-emerald-500/20',
    description: 'Our active development hub. Leading brand identity and digital deployment for CorMag Creations, Nikiwe Solutions, and Memo Swift.',
  },
]

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20 border-b border-white/5 pb-12">
          <p className="font-poppins text-[#37b7ff] text-[10px] md:text-xs tracking-[0.6em] uppercase mb-6 font-semibold">
            Selected Case Studies
          </p>
          <h2 className="font-montserrat text-4xl md:text-6xl font-thin tracking-tighter text-white uppercase leading-tight">
            Architecting <SparklesText sparklesCount={3}>Visions</SparklesText>{' '}
            into Digital Reality.
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className={`relative p-8 rounded-[2.5rem] border border-white/5 bg-gradient-to-br ${project.color} to-transparent overflow-hidden group cursor-pointer h-full transition-all duration-700 hover:border-[#37b7ff]/30 backdrop-blur-sm`}
            >
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[340px]">
                <div>
                  <span className="font-poppins text-[9px] uppercase tracking-widest text-[#37b7ff] font-bold px-4 py-1.5 rounded-full bg-[#37b7ff]/10 border border-[#37b7ff]/20">
                    {project.status}
                  </span>

                  {project.name === 'Incubation Lab' ? (
                    <div className="flex -space-x-3 mt-10 mb-8">
                      {project.logos?.map((img, idx) => (
                        <div key={idx} className="w-12 h-12 rounded-2xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center p-2 shadow-2xl ring-2 ring-black">
                          <Image src={img} alt="stack" width={28} height={28} className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-10 mb-8 h-12 flex items-center">
                      <Image src={project.logo || ''} alt={project.name} width={45} height={45} className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 font-light" />
                    </div>
                  )}

                  <h3 className="font-montserrat text-xl text-white font-light tracking-[0.1em] uppercase group-hover:text-[#37b7ff] transition-colors">
                    {project.name}
                  </h3>
                  <p className="font-poppins text-gray-500 text-[11px] mt-3 font-light leading-relaxed uppercase tracking-widest">
                    {project.type}
                  </p>
                </div>

                <div className="font-poppins text-white/40 text-[9px] uppercase tracking-[0.3em] group-hover:text-[#37b7ff] transition-colors flex items-center gap-2 font-medium">
                  Technical Analysis <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-xl bg-[#080808] border border-white/10 rounded-[3rem] p-10 md:p-14 overflow-hidden shadow-2xl">
              <button onClick={() => setSelectedProject(null)} className="absolute top-10 right-10 text-gray-600 hover:text-[#37b7ff] transition-colors uppercase text-[10px] tracking-widest font-bold">Close ✕</button>
              <div className="space-y-8">
                <span className="font-poppins text-[#37b7ff] text-[10px] uppercase tracking-[0.4em] font-bold">{selectedProject.status}</span>
                <h3 className="font-montserrat text-4xl md:text-5xl text-white font-thin tracking-tighter uppercase">{selectedProject.name}</h3>
                <div className="h-[1px] bg-gradient-to-r from-[#37b7ff]/50 to-transparent w-full" />
                <p className="font-poppins text-gray-400 text-base md:text-lg font-light leading-relaxed">{selectedProject.description}</p>
                <div className="flex flex-col gap-4 pt-8">
                  <CoolMode>
                    <Link href={selectedProject.url} target="_blank" className="font-poppins px-10 py-5 bg-[#37b7ff] text-black font-bold rounded-2xl text-center text-xs uppercase tracking-widest hover:bg-white transition-all">Launch Live Experience ↗</Link>
                  </CoolMode>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <JoinLabCTA />
    </section>
  )
}

export default Work