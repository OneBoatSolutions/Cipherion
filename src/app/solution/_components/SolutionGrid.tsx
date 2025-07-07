import { Brain, CalendarIcon, Cpu, FileTextIcon, HeartPlus, User } from "lucide-react";
import { BellIcon, Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedBeamMultipleOutputDemo } from "./animated-beam";
import {AnimatedListDemo} from "./animated-list";
import { BentoCard, BentoGrid } from "./bento-grid";
import { Marquee } from "./marquee";
import Credit from "./credit-card";
import PIITextCardDemo from "./piiMask";
import { PhiCards } from "./phi_cards";
import { PIITextReveal } from "./pii-compare";
import { GlowingEffect } from "@/components/animated/glowing-card";
import React from "react";

const files = [
  {
    name: "patient_record.pdf",
    body: "Comprehensive patient record with history, diagnoses, medications. Contains PHI; handle per HIPAA.",
  },
  {
    name: "blood_count.pdf",
    body: "CBC lab report showing hemoglobin, WBC, platelets. Contains PHI; secure handling required.",
  },
  {
    name: "lab_report.pdf",
    body: "Basic metabolic panel results (electrolytes, kidney function). Treat as PHI if real data.",
  },
  {
    name: "chest_xray.dcm",
    body: "Chest X-ray image in DICOM format. Contains embedded patient metadata; encrypt and access-log.",
  },
  {
    name: "mri_scan.dcm",
    body: "MRI brain scan (DICOM). Large file with PHI in metadata; store/transmit securely.",
  },
  {
    name: "abdomen.jpg",
    body: "Ultrasound image exported as JPEG. May still contain identifiers in filename or metadata; handle carefully.",
  },
  {
    name: "echocardiogram.mp4",
    body: "Recorded echocardiogram session. Video may include identifiable info; encrypt and log access.",
  },
  {
    name: "pathology_report.pdf",
    body: "Pathology findings report with patient identifiers. Secure storage and transmission required.",
  },
  {
    name: "prescription.pdf",
    body: "Doctor’s prescription document. Contains patient name, medication details; treat as PHI.",
  },
  {
    name: "discharge_summary.pdf",
    body: "Hospital discharge summary with treatment details and follow-up instructions. Contains PHI.",
  },
];


const features = [
  {
    Icon: FileTextIcon,
    name: "Helathcare",
    description: "We automatically save your files as you type.",
    href: "/solution/healthcare",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-44 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm  font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Fintech",
    description: "Get notified when something happens.",
    href: "/solution/fintech",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Manufacturing",
    description: "Secure the IoT, and the sensitive information of machines",
    href: "/solution/manufacturing",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "PCI-DSS",
    description: "Secure your card details.",
    className: "col-span-3 lg:col-span-1",
    href: "/solution/pci",
    cta: "Learn more",
    background: (
      <Credit/>
    ),
  },
  {
    Icon: Brain,
    name: "Gen AI Privacy",
    description: "Mask the sensitive data before sending it to LLM's",
    className: "col-span-3 lg:col-span-1",
    href: "/solution/gen-ai",
    cta: "Learn More",
    background: (
      <PIITextCardDemo/>
    )
  },
  {
    Icon: HeartPlus,
    name: "PHI",
    description: "Get complied by PHI, HIPPA",
    className: "col-span-3 lg:col-span-1",
    href: "/solution/phi",
    cta:"Learn More",
    background: (
      <PhiCards/>
    )
  },
  {
    Icon: User,
    name: "PII",
    description: "Encrypt the PII data",
    className: "col-span-3 lg:col-span-1",
    href: "/solution/pii",
    cta: "Learn More",
    background: (
      <PIITextReveal/>
    )
  }
];

export function BentoDemo() {
  return (
<React.Fragment>

    <BentoGrid className="p-10 lg:p-20 gap-8">

      {features.map((feature, idx) => (
        
        <BentoCard key={idx} {...feature} />
        
      ))}
    </BentoGrid>

      </React.Fragment>
  );
}
