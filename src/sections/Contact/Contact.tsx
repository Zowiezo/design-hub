'use client'

import React from 'react'
import { Particles } from '../../components/magicui/particles'
import Mail from '../../assets/images/social-media-mail.png'
import { AuroraText } from '../../components/magicui/aurora-text'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { RainbowButton } from '../../components/magicui/rainbow-button'
import { CoolMode } from '../../components/magicui/cool-mode'

import Image from 'next/image'
import Head from 'next/head'

import Phone from '../../assets/images/3dicons-call-only-dynamic-color.png'
import EmailIcon from '../../assets/images/3dicons-mail-dynamic-color.png'
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import Linkedin from '../../assets/images/linkedin.png'

const Contact: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-12">
      <Head>
        <title>The Design Hub | Where Design Meets Innovation</title>
        <meta
          name="description"
          content="We blend creativity and technology to deliver stunning design, branding, and web development solutions."
        />
      </Head>

      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color="#37b7ff"
        quantity={300}
        ease={80}
        size={0.05}
      />

      {/* Heading */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-12 px-4">
        <p className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] tracking-tighter leading-tight">
          We’d love to <AuroraText>hear from you.</AuroraText>
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Column: Contact Info */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <Image
                src={EmailIcon}
                alt="Email Icon"
                width={50}
                height={50}
                className="object-contain animate-float"
              />
              <div>
                <p className="text-md font-light font-Poppins">Email Us</p>
                <a
                  href="mailto:hello@thedesignhub.co.za"
                  className="text-[#37b7ff] text-lg"
                >
                  <p className="text-md font-light">hello@thedesignhub.co.za</p>
                </a>
                <p className="text-[#fff] text-sm font-light">
                  We typically respond within 1–2 business days.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Image
                src={Phone}
                alt="Phone Icon"
                width={50}
                height={50}
                className="object-contain animate-float"
              />
              <div>
                <p className="text-md font-light">Call Us</p>
                <a href="tel:+27686499017" className="text-[#37b7ff] text-lg">
                  <p className="text-lg font-light">+27 68 649 9017</p>
                </a>
                <p className="text-[#fff] text-sm font-light">
                  Mon–Fri, 8 AM – 5 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Mail Image + Centered Form */}
        {/* Floating Mail Image */}
        <div className="w-full flex justify-center items-center gap-8">
          <Image
            src={Mail}
            alt="Mail Image"
            className="h-80 w-80 sm:h-96 sm:w-96 object-contain animate-float"
          />
        </div>
      </div>

      {/* Centered Form */}
      <div className="w-full lg:w-[90%] bg-[#111111] p-6 md:p-8 rounded-xl shadow-xl justify-center gap-8 ml-[5%] mr-[10%]">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-center">
          Have questions or need assistance? <br />
          <span className="text-[#b7e3fe]">
            <AnimatedGradientText>We’re Here to Help!</AnimatedGradientText>
          </span>
        </h3>
        <form
          action="https://formspree.io/f/mpwlzbzl"
          method="POST"
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="flex-1 bg-black border border-[#444] rounded-md text-white px-3 py-2 focus:ring-2 focus:ring-[#37b7ff]"
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              required
              className="flex-1 bg-black border border-[#444] rounded-md text-white px-3 py-2 focus:ring-2 focus:ring-[#37b7ff]"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="flex-1 bg-black border border-[#444] rounded-md text-white px-3 py-2 focus:ring-2 focus:ring-[#37b7ff]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="flex-1 bg-black border border-[#444] rounded-md text-white px-3 py-2 focus:ring-2 focus:ring-[#37b7ff]"
            />
          </div>

          <select
            name="service"
            required
            className="w-full bg-black border border-[#444] rounded-md text-white px-3 py-2 focus:ring-2 focus:ring-[#37b7ff]"
          >
            <option value="">Select a service</option>
            <option value="UX/UI Design">UX/UI Design</option>
            <option value="Branding">Branding</option>
            <option value="Web Development">Web Development</option>
            <option value="Consulting">Consulting</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full bg-black border border-[#444] rounded-md text-white px-3 py-2 focus:ring-2 focus:ring-[#37b7ff]"
          ></textarea>

          <CoolMode>
            <RainbowButton
              type="submit"
              className="w-full py-2 text-white bg-black border border-[#37b7ff] rounded-md focus:ring-2 focus:ring-[#37b7ff]"
            >
              Send Message
            </RainbowButton>
          </CoolMode>
        </form>
      </div>

      {/* Social Links at Bottom */}
      <div className="relative z-10 mt-12 flex justify-center gap-6">
        <a
          href="https://www.facebook.com/TheDesignHubMgt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={Facebook}
            alt="Facebook"
            className="h-12 w-12 object-contain hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a
          href="https://www.instagram.com/thedesignhubmgt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={Instagram}
            alt="Instagram"
            className="h-12 w-12 object-contain hover:scale-110 transition-transform duration-200"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/thedesignhubmgt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={Linkedin}
            alt="LinkedIn"
            className="h-12 w-12 object-contain hover:scale-110 transition-transform duration-200"
          />
        </a>
      </div>
    </section>
  )
}

export default Contact
