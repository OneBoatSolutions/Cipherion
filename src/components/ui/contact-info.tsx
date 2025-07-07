import React from "react";

import EmailLink from "@/Constants/EmailLink";


export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-6 h-6 text-gray-700 mt-1">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div>
            <p className="text-neutral-200 font-medium"> 2nd floor 125/B/12 Vaze Galli, Vadgaon, Belagavi, 590005</p>
            <p className="text-neutral-200">Karnataka, India</p>

          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-6 h-6 text-gray-700 mt-1">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <div>
            <p className="text-gray-200 font-medium">+91 8105188413</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-6 h-6 text-gray-700 mt-1">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <div>
            <EmailLink email="official@cipherion.in" />
            {/* <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=official@cipherion.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 font-medium hover:text-purple-400 transition-colors"
            >
              official@cipherion.in
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
