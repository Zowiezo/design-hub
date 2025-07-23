const TermsOfService = () => {
  return (
    <div className="px-6 py-16 max-w-5xl mx-auto text-[#fff] mt-[5rem] ml-[5rem]">
      <p className="text-[calc(3.25rem*1)] md:text-6xl font-light tracking-tight text-center">
        Terms of Service
      </p>
      <p className="text-sm text-gray-500 mb-12">Last updated: July 16, 2025</p>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h3>
        <p>
          By accessing or using our website or services, you agree to be bound
          by these Terms of Service. <br /> If you do not agree, please do not
          use our services.
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
            You may not use our services for unlawful or unauthorized purposes
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">4. Payments & Invoicing</h3>
        <p>
          All pricing and timelines are discussed and confirmed before project
          commencement. A deposit is required for most projects.
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
          received. After full payment, rights transfer as agreed per project
          terms.
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
          Refunds are reviewed on a case-by-case basis, considering <br /> the
          work already completed. We reserve the right to cancel services for
          abusive or unethical behavior.
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
          We may update these Terms of Service from time to time. Continued use
          of our website and services means you <br />
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
          <a href="mailto:hello@thedesignhub.co.za" className="text-[#37b7ff]">
            hello@thedesignhub.co.za
          </a>
        </p>
      </section>
    </div>
  )
}

export default TermsOfService
