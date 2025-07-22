import React from 'react'
import { Particles } from '../components/magicui/particles'
import Mail from '../assets/images/social-media-mail.png'
import { AuroraText } from '../components/magicui/aurora-text'
import { HyperText } from '../components/magicui/hyper-text'
import { AnimatedGradientText } from '../components/magicui/animated-gradient-text'
import { RainbowButton } from '../components/magicui/rainbow-button'
import { CoolMode } from '../components/magicui/cool-mode'
import { Helmet } from 'react-helmet-async'

import Phone from '../assets/images/3dicons-call-only-dynamic-color.png'
import Email from '../assets/images/3dicons-mail-dynamic-color.png'
import Facebook from '../assets/images/facebook.png'
import Instagram from '../assets/images/instagram.png'
import Linkedin from '../assets/images/linkedin.png'

const Contact: React.FC = () => {
  return (
    <section className="bg-black text-[#fff] px-6 py-20 md:px-24 mt-[7rem]">
      <Helmet>
        <title>The Design Hub | Where Design Meets Innovation</title>
        <meta
          name="description"
          content="We blend creativity and technology to deliver stunning design, branding, and web development solutions."
        />
        <meta
          name="keywords"
          content="The Design Hub, The Design Hub Management, TDHM, UI/UX, Web Development, Branding, Creative Studio South Africa"
        />
        <meta property="og:title" content="The Design Hub" />
        <meta
          property="og:description"
          content="Discover our services in design, branding, UX/UI, and more."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedesignhub.co.za" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Design Hub" />
        <meta name="twitter:description" content="Design meets innovation." />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>

      <Particles
        className="absolute top-[0rem] left-[0rem] w-full h-full z-0"
        color={'#37b7ff'}
        quantity={300}
        ease={80}
        size={0.05}
      />

      <div className="relative z-10 max-w-[95vw] mx-auto flex flex-col md:flex-row gap-[12px] justify-center items-start">
        {/* LEFT COLUMN */}
        <div className="w-full md:w-1/2 flex flex-col gap-[6px]">
          <p className="text-center md:text-left text-[2.75rem] md:text-[4rem] lg:text-[5rem] leading-tight tracking-tighter">
            We’d love to <AuroraText>hear from you.</AuroraText>
          </p>

          {/* Contact Info */}
          <div className="space-y-[8px] ml-[2rem]">
            {/* Email */}
            <div className="flex items-start gap-[4px]">
              <img
                src={Email}
                alt="Email Icon"
                className="h-[15vh] w-[15vw] object-contain animate-float"
              />
              <div>
                <p className="text-lg">Email Us</p>
                <a
                  href="mailto:hello@thedesignhub.co.za"
                  className="text-[#37b7ff] text-xl"
                >
                  <HyperText>hello@thedesignhub.co.za</HyperText>
                </a>
                <p className="text-gray-400 text-sm mb-[5rem]">
                  We typically respond within 1–2 business days.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-[4px]">
              <img
                src={Phone}
                alt="Phone Icon"
                className="h-[15vh] w-[15vw] object-contain animate-float"
              />
              <div>
                <p className="text-lg">Call Us</p>
                <a href="tel:+27686499017" className="text-[#37b7ff] text-xl">
                  <HyperText>+27 68 649 9017</HyperText>
                </a>
                <p className="text-gray-400 text-sm mb-[5rem]">
                  Monday – Friday, 8 AM – 5 PM
                </p>
              </div>
            </div>

            {/* MIDDLE FLOATING MAIL IMAGE */}
            <div className="flex justify-end items-end w-full md:w-auto">
              <img
                src={Mail}
                alt="Social Media Mail"
                className="h-[25rem] w-[25rem] float-right animate-float  mr-[10rem] mt-[-35rem]"
              />
            </div>
          </div>
        </div>

        {/* MIDDLE FLOATING MAIL IMAGE */}
        {/* <div className="flex justify-center items-center w-full md:w-auto">
          <img
            src={Mail}
            alt="Social Media Mail"
            className="h-[20rem] w-[20rem] object-contain animate-float"
          />
        </div> */}

        {/* RIGHT COLUMN – FORM */}
        <div className="w-full md:w-1/2 bg-[#111111] p-[2rem] rounded-xl shadow-xl max-w-[35rem] mx-auto">
          <p className="text-[1.75rem] md:text-[4rem] lg:text-[5rem] mb-4 text-center">
            Have questions or need assistance? <br />
            <span className="text-[#b7e3fe]">
              <AnimatedGradientText>We’re Here to Help!</AnimatedGradientText>
            </span>
          </p>

          <form
            action="https://formspree.io/f/mpwlzbzl"
            method="POST"
            className="space-y-[6px]"
          >
            {/* Row 1: Name + Surname */}
            <div className="flex flex-col sm:flex-row gap-[4px]">
              <div className="flex-1">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-black border border-[#444] rounded-md text-white px-[4px] py-[2px] focus:ring-2 focus:ring-[#37b7ff]"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium">Surname</label>
                <input
                  type="text"
                  name="surname"
                  required
                  className="w-full bg-black border border-[#444] rounded-md text-white px-[4px] py-[2px] focus:ring-2 focus:ring-[#37b7ff]"
                />
              </div>
            </div>

            {/* Row 2: Phone + Email */}
            <div className="flex flex-col sm:flex-row gap-[4px]">
              <div className="flex-1">
                <label className="text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-black border border-[#444] rounded-md text-white px-[4px] py-[2px] focus:ring-2 focus:ring-[#37b7ff]"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black border border-[#444] rounded-md text-white px-[4px] py-[2px] focus:ring-2 focus:ring-[#37b7ff]"
                />
              </div>
            </div>

            {/* Services */}
            <div>
              <label className="text-sm font-medium">Services</label>
              <select
                name="service"
                required
                className="w-full bg-black border border-[#444] rounded-md text-white px-[4px] py-[2px] focus:ring-2 focus:ring-[#37b7ff]"
              >
                <option value="">Select a service</option>
                <option value="UX/UI Design">UX/UI Design</option>
                <option value="Branding">Branding</option>
                <option value="Web Development">Web Development</option>
                <option value="Consulting">Consulting</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full bg-black border border-[#444] rounded-md text-white px-[4px] py-[2px] mb-[1rem] focus:ring-2 focus:ring-[#37b7ff]"
              ></textarea>
            </div>

            <CoolMode>
              <RainbowButton
                type="submit"
                className="w-full py-[3px] pt-[15px] text-[#fff] bg-black border border-white rounded-md focus:ring-2 focus:ring-[#37b7ff]"
              >
                Send Message
              </RainbowButton>
            </CoolMode>
          </form>
        </div>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="flex justify-center items-center gap-12 mt-[16px] mb-[2.5rem]">
        <a
          href="https://www.facebook.com/TheDesignHubMgt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Facebook}
            alt="Facebook"
            className="h-[14vh] w-[14vw] object-contain hover:scale-125 transition-transform duration-200"
          />
        </a>
        <a
          href="https://www.instagram.com/thedesignhubmgt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Instagram}
            alt="Instagram"
            className="h-[14vh] w-[14vw] object-contain hover:scale-125 transition-transform duration-200"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/thedesignhubmgt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Linkedin}
            alt="LinkedIn"
            className="h-[14vh] w-[14vw] object-contain hover:scale-125 transition-transform duration-200"
          />
        </a>
      </div>
    </section>
  )
}

export default Contact
