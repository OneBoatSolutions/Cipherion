import { cn } from "@/lib/utils";
import React from "react";
import { FaqSection } from "./ui/faq-section";
import { faqData } from "@/data/faq-data";
function Faqs() {
  return (
    <>
      <FaqSection
        title="Frequently Asked Questions"
        description="Everything you need to know about our platform"
        items={faqData}
      />
    </>
  );
}

export default Faqs;
