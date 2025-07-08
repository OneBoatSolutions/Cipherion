"use client";

import React from "react";
import { useRouter } from "next/navigation";
import EmailLink from "@/Constants/EmailLink";

export default function PrivacyPolicyPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // ensures scroll after route back
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 mt-28 text-white bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/60 backdrop-blur-xl rounded-2xl border border-[#43256e]/30 shadow-2xl">
      <h1 className="text-4xl font-bold mb-6 text-purple-400 text-center -mt-6">
        Privacy Policy
      </h1>

      <h2 className="text-xl font-semibold text-white mt-8 mb-2">1. Introduction</h2>
      <p className="text-neutral-400 mb-4">
        Cipherion ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect,
        use, and safeguard your information when you visit our website or use our services.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-2">2. Information We Collect</h2>
      <ul className="list-disc list-inside text-neutral-400 mb-4 space-y-1">
        <li><strong>Personal Information:</strong> Name, email address, organization details, IP address, etc., when you sign up, contact us, or use our services.</li>
        <li><strong>Usage Data:</strong> Browser type, access times, pages visited, referring URLs.</li>
        <li><strong>Cookies & Tracking:</strong> We use cookies for analytics, security, and personalization. You can manage cookies via your browser settings.</li>
      </ul>

      <h2 className="text-xl font-semibold text-white mt-8 mb-2">3. How We Use Your Information</h2>
      <ul className="list-disc list-inside text-neutral-400 mb-4 space-y-1">
        <li>Deliver and improve our services</li>
        <li>Respond to inquiries and provide support</li>
        <li>Monitor and analyze usage patterns</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="text-xl font-semibold text-white mt-8 mb-2">4. Data Sharing</h2>
      <p className="text-neutral-400 mb-2">We do not sell or rent your personal data. We may share information with:</p>
      <ul className="list-disc list-inside text-neutral-400 mb-4 space-y-1">
        <li>Service providers working on our behalf (under strict confidentiality)</li>
        <li>Legal authorities if required by law or regulation</li>
      </ul>

      <h2 className="text-xl font-semibold text-white mt-8 mb-2">5. Data Security</h2>
      <p className="text-neutral-400 mb-4">
        We use end-to-end encryption, access controls, and secure storage to protect your data. However, no online
        transmission is 100% secure.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-2">6. Data Retention</h2>
      <p className="text-neutral-400 mb-4">
        We retain your information only as long as necessary to fulfill the purposes outlined or to comply with legal
        requirements.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-2">7. Your Rights</h2>
      <p className="text-neutral-400 mb-2">Depending on your jurisdiction, you may have the right to:</p>
      <ul className="list-disc list-inside text-neutral-400 mb-4 space-y-1">
        <li>Access the personal data we hold about you</li>
        <li>Request corrections or deletion</li>
        <li>Withdraw consent at any time</li>
      </ul>

      <h2 className="text-xl font-semibold text-white mt-8 mb-2">8. Third-Party Links</h2>
      <p className="text-neutral-400 mb-4">
        Our site may contain links to other websites. We are not responsible for their privacy practices.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-2">9. Changes to This Policy</h2>
      <p className="text-neutral-400 mb-4">
        We may update this policy occasionally. Changes will be posted here with the updated effective date.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-2">10. Contact Us</h2>
      <p className="text-neutral-400 mb-10">
        For any questions or requests, contact us at:{" "}
        {/* <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=official@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-500 hover:text-purple-300 transition-colors duration-200"
        >
          official@gmail.com
        </a> */}
        <EmailLink email="official@cipherion.in" />
      </p>

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
}
