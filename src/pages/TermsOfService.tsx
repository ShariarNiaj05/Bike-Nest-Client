const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Terms of Service
        </h1>
        <p className="text-gray-700 mb-4">
          <strong>Effective Date:</strong> [Insert Date]
        </p>
        <p className="text-gray-600 mb-8">
          Welcome to Bike Nest! These Terms of Service govern your use of our
          website and services. By accessing or using Bike Nest, you agree to
          comply with and be bound by these terms. Please read them carefully
          before using our platform.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            By using Bike Nest, you confirm that you have read, understood, and
            agree to be bound by these Terms of Service. If you do not agree,
            please discontinue using our website and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            2. Changes to Terms
          </h2>
          <p className="text-gray-600">
            We reserve the right to modify or update these terms at any time.
            Any changes will be effective immediately upon posting on this page.
            Your continued use of Bike Nest after any changes constitutes your
            acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            3. Use of Services
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              To use certain services, you may need to create an account with
              accurate and complete information.
            </li>
            <li>
              You are responsible for safeguarding your account and any actions
              taken under your account.
            </li>
            <li>
              You agree not to use Bike Nest for any unlawful or prohibited
              activities, including hacking, spamming, or violating any laws.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            4. Payments and Refunds
          </h2>
          <p className="text-gray-600">
            All payments made for bike rentals, services, or products on Bike
            Nest are final, except as required by applicable law. We reserve the
            right to issue refunds at our discretion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            Bike Nest is provided "as is" and without warranties of any kind. We
            are not responsible for any damages or losses that may result from
            using our services, including but not limited to data loss,
            interruption of service, or system failures.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            6. User Content
          </h2>
          <p className="text-gray-600">
            You are solely responsible for any content you post, upload, or
            share on Bike Nest. You agree that you will not post any illegal,
            harmful, or inappropriate content. We reserve the right to remove or
            modify any user content that violates these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            7. Termination of Services
          </h2>
          <p className="text-gray-600">
            We may suspend or terminate your access to Bike Nest at any time,
            for any reason, including if you violate these terms. Upon
            termination, your right to use our services will cease immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            8. Intellectual Property
          </h2>
          <p className="text-gray-600">
            All content, trademarks, and intellectual property on Bike Nest,
            including but not limited to logos, images, and software, are owned
            by or licensed to Bike Nest. You may not use, copy, or distribute
            any content without our written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            9. Governing Law
          </h2>
          <p className="text-gray-600">
            These Terms of Service are governed by the laws of [Insert
            Jurisdiction]. Any legal disputes will be handled in the courts of
            [Insert Location].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            10. Contact Information
          </h2>
          <p className="text-gray-600">
            If you have any questions or concerns about these Terms of Service,
            please contact us at:
          </p>
          <ul className="list-none text-gray-600">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@bikenest.com"
                className="text-primary hover:underline"
              >
                support@bikenest.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> [Insert Phone Number]
            </li>
            <li>
              <strong>Address:</strong> [Insert Office Address]
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
