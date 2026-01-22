'use client'

import React from 'react'
import Image from 'next/image'
import { AuroraText } from '../../components/magicui/aurora-text'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import { CoolMode } from '../../components/magicui/cool-mode'

import Phone from '../../assets/images/3dicons-call-only-dynamic-color.png'
import EmailIcon from '../../assets/images/3dicons-mail-dynamic-color.png'
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import Linkedin from '../../assets/images/linkedin.png'
import MailIllustration from '../../assets/images/social-media-mail.png'

const Contact: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header - Aligned with Modern Era Branding */}
        <div className="text-center mb-20">
          <h2 className="font-montserrat text-3xl md:text-6xl font-thin tracking-tighter uppercase leading-tight">
            Bringing <AuroraText>Vision</AuroraText> to Life.
          </h2>
          <div className="mt-6 flex flex-col items-center gap-2">
            <p className="font-poppins text-[#37b7ff] text-[10px] md:text-xs uppercase tracking-[0.6em] font-semibold">
              Strategy • Identity • Code
            </p>
            <p className="font-poppins text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.3em] italic font-light">
              Curating Digital Excellence
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Column: Direct Channels */}
          <div className="flex flex-col justify-between p-8 md:p-12 bg-white/[0.02] rounded-[2.5rem] border border-white/10 backdrop-blur-md">
            <div className="space-y-12">
              <div className="space-y-8">
                <h3 className="font-montserrat text-2xl font-thin uppercase tracking-widest text-white/70">
                  Direct <span className="text-[#37b7ff]">Channels</span>
                </h3>

                <div className="space-y-8">
                  {/* Email Item */}
                  <div className="flex items-center gap-6 group">
                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[#37b7ff]/20 transition-all duration-500">
                      <Image
                        src={EmailIcon}
                        alt="Email"
                        width={40}
                        height={40}
                        className="animate-float"
                      />
                    </div>
                    <div>
                      <p className="font-poppins text-[10px] uppercase tracking-[0.4em] text-blue-400 mb-1 font-medium">
                        The Inception
                      </p>
                      <a
                        href="mailto:hello@thedesignhub.co.za"
                        className="font-poppins text-lg hover:text-[#37b7ff] transition-colors font-light"
                      >
                        hello@thedesignhub.co.za
                      </a>
                    </div>
                  </div>

                  {/* Phone Item */}
                  <div className="flex items-center gap-6 group">
                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[#37b7ff]/20 transition-all duration-500">
                      <Image
                        src={Phone}
                        alt="Phone"
                        width={40}
                        height={40}
                        className="animate-float"
                      />
                    </div>
                    <div>
                      <p className="font-poppins text-[10px] uppercase tracking-[0.4em] text-blue-400 mb-1 font-medium">
                        Real-time Collaboration
                      </p>
                      <a
                        href="tel:+27686499017"
                        className="font-poppins text-lg hover:text-[#37b7ff] transition-colors font-light"
                      >
                        +27 68 649 9017
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Illustration Area */}
              <div className="hidden md:flex justify-center opacity-40 py-4">
                <Image
                  src={MailIllustration}
                  alt="Contact"
                  width={240}
                  height={240}
                  className="animate-float-slower grayscale"
                />
              </div>
            </div>

            {/* Social Links & Location Marker */}
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex gap-4">
                {[
                  { img: Facebook, url: 'https://www.facebook.com/TheDesignHubMgt' },
                  { img: Instagram, url: 'https://www.instagram.com/thedesignhubmgt/' },
                  { img: Linkedin, url: 'https://www.linkedin.com/company/thedesignhubmgt' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full hover:bg-[#37b7ff]/10 transition-all hover:-translate-y-1 border border-white/5"
                  >
                    <Image
                      src={social.img}
                      alt="Social"
                      width={24}
                      height={24}
                      className="hover:grayscale-0 transition-all"
                    />
                  </a>
                ))}
              </div>
              <p className="font-poppins text-[9px] uppercase tracking-[0.3em] text-gray-600">
                Joburg • Mafikeng • Global
              </p>
            </div>
          </div>

          {/* Right Column: The Launch Inquiry Form */}
          <div className="p-8 md:p-12 bg-[#0a0a0a] rounded-[2.5rem] border border-white/10 relative overflow-hidden flex flex-col justify-center shadow-2xl">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#37b7ff]/10 blur-[100px] rounded-full pointer-events-none" />

            <h3 className="font-montserrat text-xl md:text-2xl font-thin tracking-[0.3em] mb-10 uppercase text-white/90">
              <AnimatedGradientText className="inline">
                Launch Inquiry
              </AnimatedGradientText>
            </h3>

            <form
              action="https://formspree.io/f/mpwlzbzl"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  required
                  className="input-field"
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="SURNAME"
                  required
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE"
                  className="input-field"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  required
                  className="input-field"
                />
              </div>

              <div className="relative">
                <select
                  name="service"
                  required
                  className="input-field appearance-none cursor-pointer font-poppins text-xs uppercase tracking-widest"
                >
                  <option value="" disabled selected>Nature of Project</option>
                  <option value="Strategic Consulting">Strategic Consulting</option>
                  <option value="Brand Identity">Brand Identity</option>
                  <option value="Digital Engineering">Digital Engineering</option>
                  <option value="Business Start-up">Business Start-up</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#37b7ff] text-[10px]">
                  ▼
                </div>
              </div>

              <div className="w-full">
                <textarea
                  name="message"
                  placeholder="TELL US ABOUT YOUR VISION..."
                  required
                  className="input-field min-h-[160px] py-5 resize-none block w-full"
                ></textarea>
              </div>

              <div className="pt-4">
                <CoolMode>
                  <RainbowButton
                    type="submit"
                    className="font-poppins w-full py-8 text-[10px] uppercase tracking-[0.5em] font-bold text-white transition-transform active:scale-95"
                  >
                    Submit Project Brief
                  </RainbowButton>
                </CoolMode>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input-field {
          @apply w-full bg-white/[0.03] border border-white/10 rounded-2xl text-white px-6 py-5 focus:border-[#37b7ff]/40 focus:bg-white/[0.06] outline-none transition-all font-poppins font-light text-sm tracking-wide placeholder:text-gray-700 placeholder:text-[10px] placeholder:tracking-[0.2em] placeholder:uppercase;
        }
      `}</style>
    </section>
  )
}

export default Contact