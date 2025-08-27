import Head from 'next/head'

import { Particles } from '../../components/magicui/particles'

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | The Design Hub Management</title>
        <meta
          name="description"
          content="Read the Terms of Service for The Design Hub Management. Learn about our policies, usage guidelines, and conditions for using our design and tech services."
        />
        <meta
          name="keywords"
          content="The Design Hub Management Terms of Service, Terms, Policies, Legal, Conditions, South Africa"
        />
        <meta name="author" content="The Design Hub Management" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.thedesignhub.co.za/terms"
        />
        <meta
          property="og:title"
          content="Terms of Service | The Design Hub Management"
        />
        <meta
          property="og:description"
          content="Review the Terms of Service for The Design Hub Management and understand the policies for using our design and tech services."
        />
        <meta
          property="og:image"
          content="https://www.thedesignhub.co.za/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.thedesignhub.co.za/terms"
        />
        <meta
          name="twitter:title"
          content="Terms of Service | The Design Hub Management"
        />
        <meta
          name="twitter:description"
          content="Learn more about the Terms of Service and policies of The Design Hub Management."
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
            Terms of Service
          </p>
          <p className="text-sm text-gray-500 text-center mb-12">
            Last updated: 16 July 2025
          </p>

          {/* Sections */}
          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing or using our website or services, you agree to be
              bound by these Terms of Service. <br /> If you do not agree,
              please do not use our services.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">2. Services</h3>
            <p>
              The Design Hub Management offers branding, UX/UI design, software
              development, marketing consulting, <br /> and related digital
              services. All services are provided based on a mutual agreement,
              project scope, and payment terms.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              3. User Responsibilities
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                You agree to provide accurate information for quotes or bookings
              </li>
              <li>
                You’re responsible for maintaining confidentiality of your own
                accounts and data
              </li>
              <li>
                You may not use our services for unlawful or unauthorized
                purposes
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              4. Payments & Invoicing
            </h3>
            <p>
              All pricing and timelines are discussed and confirmed before
              project commencement. A deposit is required for most projects.
              <br /> Late payments may result in delays or service suspensions.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              5. Intellectual Property
            </h3>
            <p>
              All custom designs, code, and deliverables remain the intellectual
              property of The Design Hub Management until full payment <br /> is
              received. After full payment, rights transfer as agreed per
              project terms.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              6. Revisions & Approvals
            </h3>
            <p>
              We offer a defined number of revision rounds per project. Any
              additional revisions outside scope may incur extra fees.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              7. Cancellations & Refunds
            </h3>
            <p>
              Projects canceled after the deposit is paid are not refundable.
              Refunds are reviewed on a case-by-case basis, considering <br />{' '}
              the work already completed. We reserve the right to cancel
              services for abusive or unethical behavior.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              8. Limitation of Liability
            </h3>
            <p>
              We are not liable for any indirect, incidental, or consequential
              damages resulting from use of our services. Our maximum <br />
              liability shall not exceed the amount paid for the service in
              question.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              9. Third-Party Tools & Integrations
            </h3>
            <p>
              We may use or recommend third-party tools or platforms. You
              acknowledge and accept the terms of those platforms <br />
              independently.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">
              10. Updates to These Terms
            </h3>
            <p>
              We may update these Terms of Service from time to time. Continued
              use of our website and services means you <br />
              accept the updated terms.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">11. Governing Law</h3>
            <p>
              These terms are governed by the laws of South Africa. Any disputes
              will be handled within the applicable <br /> South African courts.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">12. Contact</h3>
            <p>
              For any questions, please contact us at:{' '}
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

export default TermsOfService
