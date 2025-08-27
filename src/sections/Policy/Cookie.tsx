import Head from 'next/head'

import { Particles } from '../../components/magicui/particles'

const CookiesPolicy = () => {
  return (
    <>
      <Head>
        <title>Cookie Policy | The Design Hub Management</title>
        <meta
          name="description"
          content="Read The Design Hub Management’s Cookie Policy. Learn how we use cookies and similar technologies to improve your browsing experience."
        />
        <meta
          name="keywords"
          content="The Design Hub Management Cookie Policy, Cookies, Tracking, Privacy, Analytics, South Africa"
        />
        <meta name="author" content="The Design Hub Management" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.thedesignhub.co.za/cookies"
        />
        <meta
          property="og:title"
          content="Cookie Policy | The Design Hub Management"
        />
        <meta
          property="og:description"
          content="Understand how The Design Hub Management uses cookies and tracking technologies to enhance user experience."
        />
        <meta
          property="og:image"
          content="https://www.thedesignhub.co.za/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.thedesignhub.co.za/cookies"
        />
        <meta
          name="twitter:title"
          content="Cookie Policy | The Design Hub Management"
        />
        <meta
          name="twitter:description"
          content="Read about how The Design Hub Management uses cookies and similar tools to improve website performance and user experience."
        />
        <meta
          name="twitter:image"
          content="https://www.thedesignhub.co.za/og-image.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-black px-6 py-16">
        {/* Particles Background */}
        <Particles
          className="absolute top-0 left-0 w-full h-full z-0"
          color="#37b7ff"
          quantity={250}
          ease={80}
          size={0.05}
        />
        <div className="max-w-5xl text-white">
          <p className="text-[calc(3.25rem*1)] md:text-6xl font-light tracking-tight text-center mb-4">
            Cookies Policy
          </p>
          <p className="text-sm text-gray-500 text-center mb-12">
            Last updated: 16 July 2025
          </p>

          {/* Sections */}
          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              1. What Are Cookies?
            </h3>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help improve your browsing <br /> experience by
              remembering preferences, login info, and how you interact with
              content.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              2. How We Use Cookies
            </h3>
            <p>We use cookies to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Ensure our website functions smoothly</li>
              <li>Remember your settings and preferences</li>
              <li>
                Analyze site performance and traffic (via analytics tools)
              </li>
              <li>Improve user experience and site design</li>
              <li>Serve relevant content or ads (where applicable)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              3. Types of Cookies We Use
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Essential Cookies:</strong> Required for site
                functionality (e.g., login, navigation).
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how users
                interact with the site.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember settings like
                language or layout.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used for advertising and
                tracking (optional).
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">4. Managing Cookies</h3>
            <p>
              Most browsers allow you to manage cookies via settings. You can
              choose to block or delete cookies, but note
              <br /> that some parts of the site may not work properly without
              them.
            </p>
            <p className="mt-2">
              Here are links to manage cookies in popular browsers:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#37b7ff]"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#37b7ff]"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/en-us/HT201265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#37b7ff]"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/topic/how-to-delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#37b7ff]"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              5. Third-Party Cookies
            </h3>
            <p>
              Some cookies may be placed by third-party services we use, such as
              Google Analytics or embedded content. <br />
              These cookies are governed by the respective privacy policies of
              those providers.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              6. Updates to This Policy
            </h3>
            <p>
              We may update this Cookies Policy from time to time. Any changes
              will be posted on this page with the updated date.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">7. Contact Us</h3>
            <p>
              If you have any questions about this Cookies Policy, please email
              us at{' '}
              <a
                href="mailto:hello@thedesignhub.co.za"
                className="text-[#37b7ff]"
              >
                hello@thedesignhub.co.za
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default CookiesPolicy
