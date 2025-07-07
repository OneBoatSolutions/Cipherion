"use client";
import { TextHoverEffect } from "@/components/animated/text-hover";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const hoverLinkClass =
    "hover:text-purple-400 transition-colors duration-200 cursor-pointer";

  return (
    <footer className="bg-transparent px-6 py-10 mt-16 text-white">
      {/* Brand text animation */}
      <div className="h-40 flex items-center justify-center">
        <TextHoverEffect text="Cipherion" />
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 text-sm">
        {/* Logo */}
        <div>
          <div className="mb-4 -ml-5 -mt-4">
            <Image
              src="/bitmap.png"
              alt="Cipherion Logo"
              width={150}
              height={40}
              priority
            />
          </div>
          <p className="text-neutral-400 -mt-4">
            Field-level, format-preserving encryption that embeds the key in
            your data. Built today for tomorrow's threats.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-neutral-400">
            <li><Link href="/about" className={hoverLinkClass}>About Us</Link></li>
            <li><Link href="/about#contact-section" className={hoverLinkClass}>Contact Us</Link></li>
            <li><Link href="/resources" className={hoverLinkClass}>Resources</Link></li>
            <li><Link href="/pricing" className={hoverLinkClass}>Pricing</Link></li>
            <li><Link href="/resources/blogs" className={hoverLinkClass}>Blog</Link></li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="font-semibold mb-2">Industries</h3>
          <ul className="space-y-1 text-neutral-400">
            <li><Link href="/solution/healthcare" className={hoverLinkClass}>Healthcare</Link></li>
            <li><Link href="/solution/manufacturing" className={hoverLinkClass}>Manufacturing</Link></li>
            <li><Link href="/solution/fintech" className={hoverLinkClass}>Fintech</Link></li>
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="font-semibold mb-2">Use Cases</h3>
          <ul className="space-y-1 text-neutral-400">
            <li><Link href="/solution/pci" className={hoverLinkClass}>Banking Data</Link></li>
            <li><Link href="/solution/pii" className={hoverLinkClass}>PII</Link></li>
            <li><Link href="/solution/phi" className={hoverLinkClass}>HIPAA & ePHI</Link></li>
            <li><Link href="/solution/gen-ai" className={hoverLinkClass}>Gen AI Privacy</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-neutral-400">
            <li><Link href="/privacy-policy" className={hoverLinkClass}>Privacy Policy</Link></li>
            <li><Link href="/terms" className={hoverLinkClass}>Terms of Service</Link></li>
            {/* <li className={hoverLinkClass}>Cookie Policy</li> */}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-700 mt-10 pt-6 text-xs text-neutral-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2025 Cipherion. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="/privacy-policy" className={hoverLinkClass}>Privacy Policy</a>
          <a href="/terms" className={hoverLinkClass}>Terms of Service</a>
          {/* <a href="#" className={hoverLinkClass}>Cookies</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
