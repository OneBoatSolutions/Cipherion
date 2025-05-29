import { cn } from "@/lib/utils";
import React from "react";
import { FaqSection } from "./ui/faq-section";
import { faqData } from "@/data/faq-data";

function Faqs() {
  return (
    <div className="relative m-4 md:m-6 py-12 md:py-2  rounded-3xl overflow-hidden bg-[linear-gradient(to_bottom,_#02010f_40%,_#6d18ff_75%,_#9569fe_100%)] ">
      {/* Center glowing circle background */}
     <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2  w-[95%] h-[95%] bg-[var(--background)] blur-3xl rounded-full z-0"></div>

      <div className="relative z-10">
        <FaqSection
          title="Frequently Asked Questions"
          description="Everything you need to know about our platform"
          items={faqData}
        />
      </div>
    </div>
  );
}

export default Faqs;
