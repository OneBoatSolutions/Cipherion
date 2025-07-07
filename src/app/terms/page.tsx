"use client";

import React from "react";
import { useRouter } from "next/navigation";
import EmailLink from "@/Constants/EmailLink";

const TermsPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
    // Scroll to top after slight delay to ensure page loads first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50); // delay may be adjusted if needed
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 mt-28 text-white bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/60 backdrop-blur-xl rounded-2xl border border-[#43256e]/30 shadow-2xl">
      <h1 className="text-4xl font-bold mb-6 text-purple-400 text-center -mt-6">
        Terms and Conditions
      </h1>

      <div className="space-y-8 text-base leading-relaxed text-neutral-200">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Cipherion’s services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Use of Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>You agree to use our services only for lawful purposes.</li>
            <li>You must not engage in any activity that disrupts or interferes with our platform.</li>
            <li>You are responsible for any content you submit or actions you take on our platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
          <p>
            All content, branding, and software associated with Cipherion are the property of Cipherion and protected by applicable laws. Unauthorized use is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
          <p>
            Cipherion is not liable for any indirect, incidental, or consequential damages arising from your use of our services. We do not guarantee that our platform will be error-free or uninterrupted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Updates will be effective upon posting. Continued use of our services constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Governing Law</h2>
          <p>
            These terms are governed by the laws of your jurisdiction. Disputes will be resolved in the appropriate courts of that jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at: {" "}
            <EmailLink email="official@cipherion.in" />
          </p>
        </section>
      </div>

      {/* Go Back Button */}
      <div className="text-center mt-10">
        <button
          onClick={handleGoBack}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-sm rounded-full transition-colors duration-300 shadow-md hover:-translate-y-1"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default TermsPage;
