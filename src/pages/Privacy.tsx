import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="px-6 py-16 max-w-5xl mx-auto text-[#fff] mt-[10rem] ml-[10rem]">
      <h2 className="text-4xl font-bold mb-4 text-black">Privacy Policy</h2>
      <p className="text-sm text-gray-500 mb-12">
        Effective Date: July 16, 2025
      </p>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">1. Who We Are</h3>
        <p>
          The Design Hub Management (“we,” “our,” or “us”) is a female-owned
          design and tech company based in South Africa. <br />
          We specialize in UX/UI, branding, development, and creative digital
          solutions.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">
          2. Information We Collect
        </h3>
        <p className="mb-2">
          <strong>a. Personal Information:</strong> Name, email address, phone
          number, project or business details, etc.
        </p>
        <p>
          <strong>b. Usage Data:</strong> IP address, device type, browser type,
          time on site, etc., via tools like Google Analytics.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">
          3. How We Use Your Information
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>To communicate and collaborate with you</li>
          <li>To improve our website and services</li>
          <li>To send promotional content (only with your consent)</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">
          4. Sharing Your Information
        </h3>
        <p>
          We do <strong>not</strong> sell your information. We only share it
          with trusted service providers, legal authorities (if required),
          <br /> or project collaborators under NDA.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">5. Cookies & Tracking</h3>
        <p>
          We use cookies to remember your preferences and analyze site usage.
          You can manage cookies via your browser settings.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">6. Your Data Rights</h3>
        <p>
          In line with POPIA and GDPR, you can request access to, correction, or
          deletion of your personal data. Contact us at:{' '}
          <a href="mailto:hello@thedesignhub.co.za" className="text-[#37b7ff]">
            hello@thedesignhub.co.za
          </a>
          .
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">7. Data Security</h3>
        <p>
          We implement strict security measures to protect your data from
          unauthorized access or misuse.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">8. Children's Privacy</h3>
        <p>
          We don’t knowingly collect data from individuals under 16. Please
          contact us if you believe a child’s data has been provided.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">9. Third-Party Links</h3>
        <p>
          Our site may link to other websites. We’re not responsible for their
          privacy practices. Please review their policies.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">
          10. Changes to This Policy
        </h3>
        <p>
          We may update this policy from time to time. Check this page for
          updates. The latest version will always have the updated effective
          date.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">11. Contact Us</h3>
        <p>
          Have questions? Reach us at:{' '}
          <a href="mailto:hello@thedesignhub.co.za" className="text-[#37b7ff]">
            hello@thedesignhub.co.za
          </a>
        </p>
      </section>
    </div>
  )
}

export default PrivacyPolicy
