'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SparklesText } from './magicui/sparkles-text'
import { CoolMode } from './magicui/cool-mode'

interface Project {
  name: string
  type: string
  status: string
  logo?: string
  logos?: string[] // For the Incubation Lab stack
  url: string
  color: string
  description: string
}

const projects: Project[] = [
  {
    name: 'Triplii',
    type: 'Full-Stack / Brand / App',
    status: 'Flagship Project',
    logo: '/assets/images/logos/triplii.png',
    url: 'https://triplii-frontend.vercel.app/',
    color: 'from-blue-500/50',
    description:
      'Engineering a cross-platform digital ecosystem. From mobile-first UI architecture to scalable backend deployment, Triplii represents our flagship full-stack capability.',
  },
  {
    name: 'My Desk Buddy',
    type: 'E-commerce / Netcash Shop',
    status: 'Operations & Management',
    logo: '/assets/images/logos/MyDeskBuddy.png',
    url: 'https://mydeskbuddy.co.za',
    color: 'from-orange-500/50',
    description:
      'Strategic E-commerce scaling. Leveraging Netcash Shop infrastructure to provide a robust, retail experience with high-conversion checkout flows and operational stability.',
  },
  {
    name: 'Media.CNR',
    type: 'UI/UX Redesign / Content',
    status: 'In Development',
    logo: '/assets/images/logos/MediaCnr.png',
    url: 'https://mediacnr.co.za',
    color: 'from-purple-500/50',
    description:
      "A holistic digital transformation. We are currently restructuring the platform's visual language and content hierarchy to maximize user engagement.",
  },
  {
    name: 'Incubation Lab',
    type: 'Branding & Business Dev',
    status: 'Active Builds',
    logos: [
      '/assets/images/logos/CorMag.png',
      '/assets/images/logos/NikiweS.png',
      '/assets/images/logos/MemoSwift.png',
    ],
    url: '/services',
    color: 'from-emerald-500/50',
    description:
      'Our active development hub. We are currently leading the brand identity, strategic positioning, and digital deployment for CorMag Creations, Nikiwe Solutions, and Memo Swift.',
  },
]

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#37b7ff] text-sm tracking-[0.3em] uppercase mb-4">
            Selected Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter text-white">
            Transforming <SparklesText sparklesCount={5}>Visions</SparklesText>{' '}
            into Digital Reality.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className={`relative p-8 rounded-[2.5rem] border border-white/10 bg-gradient-to-br ${project.color} to-transparent overflow-hidden group cursor-pointer h-full transition-all duration-500 hover:border-[#37b7ff]/30`}
            >
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[320px]">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#37b7ff] font-medium px-3 py-1 rounded-full bg-[#37b7ff]/10">
                    {project.status}
                  </span>

                  {/* LOGO LOGIC */}
                  {project.name === 'Incubation Lab' ? (
                    <div className="flex -space-x-3 mt-8 mb-6">
                      {project.logos?.map((img, idx) => (
                        <div
                          key={idx}
                          className="w-12 h-12 rounded-2xl border border-white/10 bg-black flex items-center justify-center p-2 shadow-xl ring-2 ring-black"
                        >
                          <Image
                            src={img}
                            alt="logo"
                            width={30}
                            height={30}
                            className="object-contain grayscale group-hover:grayscale-0 transition-all"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-8 mb-6 h-12 flex items-center">
                      <Image
                        src={project.logo || ''}
                        alt={project.name}
                        width={50}
                        height={50}
                        className="object-contain group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  )}

                  <h3 className="text-2xl text-white font-light tracking-tight group-hover:text-[#37b7ff] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-3 font-light leading-relaxed">
                    {project.type}
                  </p>
                </div>

                <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] group-hover:text-[#37b7ff] transition-colors flex items-center gap-2">
                  View Detail <span className="text-lg">→</span>
                </div>
              </div>

              {/* Animated Glow Overlay */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#37b7ff]/10 rounded-full blur-[80px] group-hover:bg-[#37b7ff]/30 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-xl bg-[#0d0d0d] border border-white/10 rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-[0_0_50px_-12px_rgba(55,183,255,0.3)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"
              >
                ✕
              </button>

              <div className="space-y-6">
                <span className="text-[#37b7ff] text-[10px] uppercase tracking-[0.3em] font-semibold">
                  {selectedProject.status}
                </span>

                <h3 className="text-5xl text-white font-extralight tracking-tighter">
                  {selectedProject.name}
                </h3>

                <div className="h-px bg-white/10 w-full" />

                <p className="text-gray-400 text-lg font-light leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <CoolMode>
                    <Link
                      href={selectedProject.url}
                      target="_blank"
                      className="px-10 py-4 bg-[#37b7ff] text-black font-semibold rounded-2xl text-center hover:bg-white transition-all duration-300 shadow-lg shadow-[#37b7ff]/20"
                    >
                      Visit Live Site ↗
                    </Link>
                  </CoolMode>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-10 py-4 bg-white/5 text-white border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    Close Case Study
                  </button>
                </div>
              </div>

              {/* Decorative accent for modal */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#37b7ff]/5 blur-[100px] rounded-full pointer-events-none" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Work
