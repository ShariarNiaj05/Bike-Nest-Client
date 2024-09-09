const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-4">
          <strong>Last Updated:</strong> [Insert Date]
        </p>
        <p className="text-gray-600 mb-8">
          At Bike Nest, your privacy is of utmost importance to us. This Privacy
          Policy outlines how we collect, use, and protect your personal
          information when you use our website, mobile app, and services. By
          using our platform, you agree to the practices described in this
          policy.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, postal address, and payment information when you register,
              make purchases, or use our services.
            </li>
            <li>
              <strong>Usage Data:</strong> Information on how you use our
              website and services, such as your IP address, browser type, and
              pages visited.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies and similar technologies
              to improve user experience, personalize content, and analyze
              website performance.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>To Provide Services:</strong> Process your transactions,
              manage bike rentals, and provide customer support.
            </li>
            <li>
              <strong>To Improve Our Platform:</strong> Analyze data to enhance
              user experience and develop new features.
            </li>
            <li>
              <strong>Marketing and Communications:</strong> Send you updates,
              promotions, and other relevant content based on your preferences.
              You can opt out of marketing communications at any time.
            </li>
            <li>
              <strong>Compliance:</strong> Ensure compliance with legal
              obligations, such as fraud prevention and security monitoring.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            3. Sharing Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We do not sell, trade, or rent your personal information. We may
            share your information with:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Service Providers:</strong> Third-party vendors who assist
              in providing services (e.g., payment processors, hosting
              providers).
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required to comply with
              legal obligations or protect our rights.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-600">
            We implement industry-standard security measures to protect your
            personal information. However, no online system is 100% secure, and
            we cannot guarantee absolute protection.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            5. Your Rights
          </h2>
          <p className="text-gray-600">
            You have the following rights concerning your personal data:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Access:</strong> Request access to the personal data we
              hold about you.
            </li>
            <li>
              <strong>Correction:</strong> Correct any inaccuracies in your
              personal information.
            </li>
            <li>
              <strong>Deletion:</strong> Request the deletion of your personal
              data, subject to legal and contractual obligations.
            </li>
            <li>
              <strong>Opt-Out:</strong> Opt-out of marketing emails and other
              communications.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            6. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-600">
            We use cookies and similar tracking technologies to collect and
            track information and improve our services. You can control cookie
            preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            7. Third-Party Links
          </h2>
          <p className="text-gray-600">
            Our website may contain links to third-party sites. We are not
            responsible for the privacy practices or content of those sites. We
            encourage you to review the privacy policies of those websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            8. Children's Privacy
          </h2>
          <p className="text-gray-600">
            Bike Nest does not knowingly collect personal information from
            children under the age of 13. If we discover that we have collected
            such information, we will take steps to delete it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy or your personal
            information, please contact us at:
          </p>
          <ul className="list-none text-gray-600">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="shariarn85@gamil.com"
                className="text-primary hover:underline"
              >
                shariarn85@gamil.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +8801850893033
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
