// import React, { useState, useRef, useEffect } from "react";
// import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
// import { cn } from "@/lib/utils";


// interface PIITextCardProps {
//   text?: string;
//   className?: string;
// }

// const PIITextCard: React.FC<PIITextCardProps> = ({
//   text = "Hello, my name is John Doe and my email is john.doe@example.com. My phone number is +1-555-123-4567 and my SSN is 123-45-6789.",
//   className = "",
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [randomString, setRandomString] = useState("");
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const piiPatterns = [
//     { pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, type: "email" },
//     { pattern: /\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/g, type: "phone" },
//     { pattern: /\b\d{3}-\d{2}-\d{4}\b/g, type: "ssn" },
//     { pattern: /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g, type: "name" },
//   ];

//   const generateRandomString = (length: number) => {
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
//     let result = "";
//     for (let i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return result;
//   };

//   const maskPII = (text: string) => {
//     let maskedText = text;
//     piiPatterns.forEach(({ pattern, type }) => {
//       maskedText = maskedText.replace(pattern, (match) => {
//         if (type === "email") {
//           const [local, domain] = match.split("@");
//           return `${"*".repeat(local.length)}@${domain}`;
//         } else if (type === "phone") {
//           return "*".repeat(match.length);
//         } else if (type === "ssn") {
//           return "*".repeat(match.length);
//         } else if (type === "name") {
//           return match.split(" ").map(word => word[0] + "*".repeat(word.length - 1)).join(" ");
//         }
//         return "*".repeat(match.length);
//       });
//     });
//     return maskedText;
//   };

//   useEffect(() => {
//     const str = generateRandomString(800);
//     setRandomString(str);
//   }, []);

//   const onMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
//     const { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);

//     const str = generateRandomString(800);
//     setRandomString(str);
//   };

//   const maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`;
//   const style = { maskImage, WebkitMaskImage: maskImage };

//   return (
//     <div className={cn("w-full max-w-2xl mx-auto", className)}>
//       <motion.div
//         className="relative p-8 bg-background border border-border rounded-xl overflow-hidden group"
//         onMouseMove={onMouseMove}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Background pattern overlay */}
//         <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-700 ease-in-out">
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
//             style={style}
//           />
//           <motion.div
//             className="absolute inset-0 mix-blend-overlay"
//             style={style}
//           >
//             <p className="absolute inset-0 text-xs font-mono text-muted-foreground/50 break-words whitespace-pre-wrap p-4">
//               {randomString}
//             </p>
//           </motion.div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10">
//           <motion.h2
//             className="text-2xl font-bold text-foreground mb-4"
//             initial={{ filter: "blur(3px)", opacity: 0.7 }}
//             animate={{ filter: "blur(0px)", opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Animated PII Protection Card
//           </motion.h2>

//           <motion.div
//             className="text-foreground/80 leading-relaxed"
//             initial={{ opacity: 0.8 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             <motion.p
//               key={isHovered ? "masked" : "unmasked"} // Key change to force re-render and trigger transition
//               initial={{ opacity: 0, y: 5 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -5 }}
//               transition={{ 
//                 duration: 0.4,
//                 ease: "easeInOut"
//               }}
//             >
//               {isHovered ? maskPII(text) : text}
//             </motion.p>
//           </motion.div>
//         </div>

//         {/* Glow effect */}
//         <motion.div
//           className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
//           style={{
//             background: "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
//             filter: "blur(20px)",
//           }}
//         />
//       </motion.div>
//     </div>
//   );
// };

// const PIITextCardDemo = () => {
//   return (
//     <div className=" absolute right-0 top-10 origin-top scale-75 rounded-md transition-all duration-300 ease-out">
//       <PIITextCard
//         text="Welcome! My name is Sarah Johnson and you can reach me at sarah.johnson@company.com. For urgent matters, call me at +1-555-987-6543. My employee ID is EMP-2024-001 and my SSN is 987-65-4321. I work at 123 Main Street, Suite 456, New York, NY 10001."
//         className="max-w-3xl"
//       />
//     </div>
//   );
// };

// export default PIITextCardDemo;




"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";


interface PIITextCardProps {
  text?: string;
  className?: string;
}

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

const generateRandomString = (length: number) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const CardPattern = ({ mouseX, mouseY, randomString }: any) => {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
            <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-20"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-30 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-40"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
};

const PIITextCard = ({
  text = "Please provide your SSN: 123-45-6789 and email: john.doe@email.com for verification. Your credit card 4532-1234-5678-9012 will be charged.",
  className,
}: PIITextCardProps) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  // PII patterns to detect and mask
  const piiPatterns = [
    { pattern: /\b\d{3}-\d{2}-\d{4}\b/g, mask: "***-**-****" }, // SSN
    { pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, mask: "****@****.***" }, // Email
    { pattern: /\b\d{4}-\d{4}-\d{4}-\d{4}\b/g, mask: "****-****-****-****" }, // Credit Card
    { pattern: /\b\d{3}-\d{3}-\d{4}\b/g, mask: "***-***-****" }, // Phone
  ];

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  useEffect(() => {
    if (isHovering) {
      let maskedText = text;
      piiPatterns.forEach(({ pattern, mask }) => {
        maskedText = maskedText.replace(pattern, mask);
      });
      setDisplayText(maskedText);
    } else {
      setDisplayText(text);
    }
  }, [isHovering, text]);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div className={cn("max-w-2xl mx-auto", className)}>
      <motion.div
        className="p-8 bg-background rounded-2xl  relative overflow-hidden group/card"
        onMouseMove={onMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        
        <div className="relative z-10 ">
          <motion.h2 
            className="text-2xl font-bold text-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sensitive Information Card
          </motion.h2>
          
          <motion.div
            className="text-foreground/80 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.p
              className="font-mono text-lg bg-muted/50 p-4 rounded-lg border"
              animate={{
                backgroundColor: isHovering ? "rgba(239, 68, 68, 0.1)" : "rgba(0, 0, 0, 0.05)",
                borderColor: isHovering ? "rgba(239, 68, 68, 0.3)" : "rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              {displayText.split('').map((char, index) => {
                const isOriginalChar = char === text[index];
                return (
                  <motion.span
                    key={index}
                    className={cn(
                      "transition-colors duration-200",
                      !isOriginalChar && isHovering ? "text-red-500 font-bold" : "text-foreground"
                    )}
                    animate={{
                      scale: !isOriginalChar && isHovering ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.2, delay: index * 0.01 }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.p>
          </motion.div>

        </div>
        
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-colors",
              isHovering 
                ? "bg-red-500/20 text-red-400 border border-red-500/30" 
                : "bg-green-500/20 text-green-400 border border-green-500/30"
            )}
            animate={{
              scale: isHovering ? [1, 1.05, 1] : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {isHovering ? "PII Masked" : "PII Visible"}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default function PIITextCardDemo() {
  return (
    <div className="absolute right-0 top-6 origin-top scale-75 rounded-2xl  transition-all duration-300 ease-out  group-hover:scale-90 opacity-70 hover:top-3 ">
      <PIITextCard />
    </div>
  );
}
