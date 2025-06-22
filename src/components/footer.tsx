"use client";
import { TextHoverEffect } from "@/components/animated/text-hover";
import { GlowingEffect } from "./animated/glowing-card";

const Footer = () => {
  return (
    
    <footer className="bg-transparent px-6 py-10 mt-16">
  
      <div className="h-40 flex items-center justify-center">
        <TextHoverEffect text="Cipherion"  />
      </div>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h2 className="text-lg font-semibold mb-2">Cipherion</h2>
          <p className="text-muted">
            Field-level, format-preserving encryption that embeds the key in your data. Built today for tomorrow's threats.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-muted">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Resources</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Solutions</h3>
          <ul className="space-y-1 text-muted">
            <li>Encryption API</li>
            <li>Batch Processor</li>
            <li>Webhooks & Events</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-muted">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>GDPR Compliance</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-700 mt-10 pt-6 text-xs text-neutral-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2025 Cipherion. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
