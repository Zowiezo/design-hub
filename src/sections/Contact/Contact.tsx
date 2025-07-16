import React from 'react'
import { Particles } from '../../components/magicui/particles'
import Mail from '../../assets/images/social-media-mail.png'
import { AuroraText } from '../../components/magicui/aurora-text'
import { HyperText } from '../../components/magicui/hyper-text'
import { AnimatedGradientText } from '../../components/magicui/animated-gradient-text'
import { RainbowButton } from '../../components/magicui/rainbow-button'
import { CoolMode } from '../../components/magicui/cool-mode'

import Phone from '../../assets/images/3dicons-call-only-dynamic-color.png'
import Email from '../../assets/images/3dicons-mail-dynamic-color.png'
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import Linkedin from '../../assets/images/linkedin.png'

const Contact: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-16 mt-[-7rem]">
      {/* Particles */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        color={'#37b7ff'}
        quantity={300}
        ease={80}
        size={0.05}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start justify-between mt-[6rem]">
        {/* Left Side – Contact Info */}
        <p className="text-[calc(3.5rem*1.15)] font-light tracking-tight ml-[20rem]">
          We’d love to <AuroraText>hear from you.</AuroraText>
        </p>
        <div className="lg:w-1/2 space-y-6 ml-[10rem]">
          {/* Email Info */}
          <div>
            {/* 🚀 web with Overlap */}
            <div className="flex items-start gap-4">
              <img
                src={Email}
                alt="Email Icon"
                className="h-[2.5rem] w-[2.5rem] object-contain animate-float"
              />
            </div>
            <div>
              <p className="text-[calc(1.15rem*1)] mt-[-0.5rem] mb-[-0.30rem]">
                Email Us
              </p>
              <a
                href="mailto:hello@thedesignhub.co.za"
                className="text-[#37b7ff] text-[calc(1.15rem*1.15)]"
              >
                <HyperText>hello@thedesignhub.co.za</HyperText>
              </a>
              <p className="text-[calc(1.15rem*1)] text-gray-400 mt-[-0.10rem]">
                We typically respond within <br /> one to two business days.
              </p>
            </div>
          </div>

          {/* Phone Info */}
          <div className="text-[calc(1.15rem*1)] font-semibold">
            {/* 🚀 web with Overlap */}
            <div className="flex items-start gap-4 mt-8">
              <img
                src={Phone}
                alt="Phone Icon"
                className="h-[2.5rem] w-[2.5rem] object-contain animate-float mt-[4rem]"
              />
            </div>

            <p className="text-[calc(1.15rem*1)] mt-[-0.5rem] mb-[-0.30rem]">
              Call Us
            </p>
            <a
              href="tel:+27686499017"
              className="text-[#37b7ff] text-[calc(1.15rem*1.15)]"
            >
              <HyperText>+27 68 649 9017</HyperText>
            </a>
            <p className="text-[calc(1.15rem*1)] text-gray-400 mt-[-0.10rem]">
              Monday – Friday
              <br />8 AM – 5 PM
            </p>
          </div>
        </div>

        {/* 🚀 web with Overlap */}
        <div className="relative flex ml-[40rem] mt-[-23rem] h-[14rem]">
          <img
            src={Mail}
            alt="Social Media Mail"
            className="absolute left-1/2 transform -translate-x-[55%] z-10 h-[30rem] w-[30rem] sm:h-[16rem] sm:w-[16rem] md:h-[18rem] md:w-[18rem] object-contain animate-float"
          />
        </div>

        {/* Right Side – Form */}
        <div className="lg:w-1/2 bg-[#111111] p-8 rounded-xl shadow-xl ml-[45rem] mt-[-15rem] w-full max-w-[35rem]">
          <p className="text-[calc(1.15rem*1.5)] mb-6 ml-[2.5rem]">
            Have questions or need assistance? <br />
            <span className="text-[#b7e3fe] ml-[7.5rem]">
              <AnimatedGradientText>We’re Here to Help!</AnimatedGradientText>
            </span>
          </p>

          <form className="space-y-6 ml-[8rem] mt-[-1rem]">
            {/* Row 1: Name + Surname */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-[calc(1.15rem*0.90)] font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full max-w-[20rem] h-[2rem] px-5 py-4 bg-black border border-[#444] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#37b7ff] mb-[0.15rem]"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[calc(1.15rem*0.90)] font-medium mb-1">
                  Surname
                </label>
                <input
                  type="text"
                  placeholder="Enter your surname"
                  className="w-full max-w-[20rem] h-[2rem] px-5 py-4 bg-black border border-[#444] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#37b7ff] mb-[0.15rem]"
                />
              </div>
            </div>

            {/* Row 2: Phone + Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-[calc(1.15rem*0.90)] font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+27..."
                  className="w-full max-w-[20rem] h-[2rem] px-5 py-4 bg-black border border-[#444] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#37b7ff] mb-[0.15rem]"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[calc(1.15rem*0.90)] font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full max-w-[20rem] h-[2rem] px-5 py-4 bg-black border border-[#444] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#37b7ff] mb-[0.15rem]"
                />
              </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-[calc(1.15rem*0.90)] font-medium mb-1">
                Services
              </label>
              <select className="w-full max-w-[20rem] h-[2rem] px-5 py-4 bg-black border border-[#444] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#37b7ff] mb-[0.15rem]">
                <option value="">Select a service</option>
                <option value="ux">UX/UI Design</option>
                <option value="branding">Branding</option>
                <option value="web">Web Development</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[calc(1.15rem*0.90)] font-medium mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us more..."
                className="w-full max-w-[20rem] h-[2.75rem] px-5 py-4 bg-black border border-[#444] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#37b7ff] mb-[0.15rem]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <CoolMode>
              <RainbowButton
                type="submit"
                className="w-full max-w-[20rem] h-[2.5rem] px-5 py-4 bg-black border border-[#fff] rounded-md text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#37b7ff] mb-[1.5rem]"
              >
                Send Message
              </RainbowButton>
            </CoolMode>
          </form>
        </div>
        {/* Social Media Icons */}
        <div className="flex items-center gap-6 mt-[-6rem] ml-[20rem]">
          <a
            href="https://www.facebook.com/TheDesignHubMgt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Facebook}
              alt="Facebook"
              className="h-[5rem] w-[5rem] object-contain hover:scale-150 transition-transform duration-200"
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
              className="h-[5rem] w-[5rem] object-contain hover:scale-150 transition-transform duration-200"
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
              className="h-[5rem] w-[5rem] object-contain hover:scale-150 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
