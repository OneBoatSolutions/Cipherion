"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "../animated/glowing-card";

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  items: {
    question: string;
    answer: string;
  }[];
  contactInfo?: {
    title: string;
    description: string;
    buttonText: string;
    onContact?: () => void;
  };
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, title, description, items, contactInfo, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 w-full bg-transparent", className)}
        style={{ backgroundColor: "" }}
        {...props}
      >
        <div className=" bg-transparent">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-12 bg-transparent"
          >
            <h2
              className="text-3xl font-semibold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              {title}
            </h2>
            {description && (
              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {description}
              </p>
            )}
          </motion.div>

          <div className="flex flex-col w-full md:flex-row md:flex-wrap md:justify-between gap-4 max-w-5xl mx-auto px-2">
            {items.map((item, index) => (
              <div key={index} className="relative  w-full border-[#43256e]/30  border bg-[#18062a]/20 backdrop-blur-sm hover:border-[#9569fe]/50 transition-all duration-500 p-1 rounded-2xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  movementDuration={1.5}
                  borderWidth={1}
                />
                <FaqItem
                  question={item.question}
                  answer={item.answer}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* Contact Section */}
          {contactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-md mx-auto mt-12 p-6 rounded-lg text-center border"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div className="inline-flex items-center justify-center p-1.5 rounded-full mb-4">
                <Mail
                  className="h-4 w-4"
                  style={{ color: "var(--primary)" }}
                />
              </div>
              <p
                className="text-sm font-medium mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {contactInfo.title}
              </p>
              <p
                className="text-xs mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {contactInfo.description}
              </p>
              <Button size="sm" onClick={contactInfo.onContact}>
                {contactInfo.buttonText}
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    );
  }
);
FaqSection.displayName = "FaqSection";

// FAQ Item with internal motion
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string;
    answer: string;
    index: number;
  }
>(({ question, answer, index }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "rounded-2xl overflow-hidden transition-all duration-200 ease-in-out bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20",
        isOpen ? "bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20" : "bg-gradient-to-br from-[#18062a]/60 to-[#02010f]/80 backdrop-blur-xl border border-[#43256e]/20"
      )}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-nowrap py-4 h-auto px-2 justify-between items-center hover:text-accent-foreground "
      >
        <h3
          className={cn(" w-full h-auto  px-4 font-medium text-left flex flex-wrap")}
          style={{ color: isOpen ? "var(--text-primary)" : "var(--text-secondary)" }}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
          style={{ color: isOpen ? "var(--primary)" : "var(--text-disabled)" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-6 pb-4 pt-2 ">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm leading-relaxed "
                style={{ color: "var(--text-secondary)" }}
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = "FaqItem";

export { FaqSection };
