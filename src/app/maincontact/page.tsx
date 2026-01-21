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
    <section className="relative w-full py-24 bg-black text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter">
            We’d love to <AuroraText>hear from you.</AuroraText>
          </h2>
          <p className="text-gray-400 mt-4 text-lg font-light italic">
            Ready to start a project? Let&apos;s talk about your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Branding & Info */}
          <div className="flex flex-col justify-between p-8 md:p-12 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
            <div className="space-y-12">
              <div className="space-y-8">
                <h3 className="text-3xl font-light">
                  Contact <span className="text-[#37b7ff]">Details</span>
                </h3>

                <div className="space-y-6">
                  {/* Email Item */}
                  <div className="flex items-center gap-6 group">
                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[#37b7ff]/20 transition-all duration-500">
                      <Image
                        src={EmailIcon}
                        alt="Email"
                        width={44}
                        height={44}
                        className="animate-float"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">
                        Email Us
                      </p>
                      <a
                        href="mailto:hello@thedesignhub.co.za"
                        className="text-lg hover:text-[#37b7ff] transition-colors"
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
                        width={44}
                        height={44}
                        className="animate-float"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">
                        Call Us
                      </p>
                      <a
                        href="tel:+27686499017"
                        className="text-lg hover:text-[#37b7ff] transition-colors"
                      >
                        +27 68 649 9017
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex justify-center opacity-80 py-4">
                <Image
                  src={MailIllustration}
                  alt="Contact"
                  width={280}
                  height={280}
                  className="animate-float-slower"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-12 border-t border-white/10 flex gap-6">
              {[
                {
                  img: Facebook,
                  url: 'https://www.facebook.com/TheDesignHubMgt',
                },
                {
                  img: Instagram,
                  url: 'https://www.instagram.com/thedesignhubmgt/',
                },
                {
                  img: Linkedin,
                  url: 'https://www.linkedin.com/company/thedesignhubmgt',
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full hover:bg-[#37b7ff]/10 transition-all hover:-translate-y-1"
                >
                  <Image
                    src={social.img}
                    alt="Social"
                    width={24}
                    height={24}
                    className="grayscale hover:grayscale-0 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="p-8 md:p-12 bg-[#0a0a0a] rounded-[2.5rem] border border-white/10 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#37b7ff]/10 blur-[100px] rounded-full pointer-events-none" />

            <h3 className="text-2xl md:text-3xl font-light mb-10">
              <AnimatedGradientText className="inline">
                Send a Message
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
                  placeholder="Name"
                  required
                  className="input-field"
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  required
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="input-field"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input-field"
                />
              </div>

              <div className="relative">
                <select
                  name="service"
                  required
                  className="input-field appearance-none cursor-pointer"
                >
                  <option value="" disabled selected>
                    Select a service
                  </option>
                  <option value="UX/UI Design">UX/UI Design</option>
                  <option value="Branding">Branding</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Consulting">Consulting</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
                  ▼
                </div>
              </div>

              {/* Textarea: Fixed Alignment & Size */}
              <div className="w-full">
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  required
                  className="input-field min-h-[180px] py-5 resize-none block w-full"
                ></textarea>
              </div>

              <div className="pt-4">
                <CoolMode>
                  <RainbowButton
                    type="submit"
                    className="w-full py-8 text-xl font-medium tracking-tight text-blue-100"
                  >
                    Launch Inquiry
                  </RainbowButton>
                </CoolMode>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input-field {
          @apply w-full bg-white/[0.03] border border-white/10 rounded-2xl text-white px-6 py-4 focus:border-[#37b7ff]/50 focus:bg-white/[0.06] outline-none transition-all font-light placeholder:text-gray-600;
        }
      `}</style>
    </section>
  )
}

export default Contact
