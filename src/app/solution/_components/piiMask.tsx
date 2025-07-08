// "use client";

// import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
// import React, { useState, useEffect, useRef } from "react";


// interface PIITextCardProps {
//   text?: string;
//   className?: string;
// }

// const cn = (...classes: (string | undefined)[]) => {
//   return classes.filter(Boolean).join(' ');
// };

// const generateRandomString = (length: number) => {
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// };

// const CardPattern = ({ mouseX, mouseY, randomString }: any) => {
//   let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
//   let style = { maskImage, WebkitMaskImage: maskImage };

//   return (
//     <div className="pointer-events-none">
//             <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-20"></div>
//       <motion.div
//         className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-30 backdrop-blur-xl transition duration-500"
//         style={style}
//       />
//       <motion.div
//         className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-40"
//         style={style}
//       >
//         <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
//           {randomString}
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// const PIITextCard = ({
//   text = "Please provide your SSN: 123-45-6789 and email: john.doe@email.com for verification. Your credit card 4532-1234-5678-9012 will be charged.",
//   className,
// }: PIITextCardProps) => {
//   let mouseX = useMotionValue(0);
//   let mouseY = useMotionValue(0);
//   const [randomString, setRandomString] = useState("");
//   const [displayText, setDisplayText] = useState(text);
//   const [isHovering, setIsHovering] = useState(false);

//   // PII patterns to detect and mask
//   const piiPatterns = [
//     { pattern: /\b\d{3}-\d{2}-\d{4}\b/g, mask: "***-**-****" }, // SSN
//     { pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, mask: "****@****.***" }, // Email
//     { pattern: /\b\d{4}-\d{4}-\d{4}-\d{4}\b/g, mask: "****-****-****-****" }, // Credit Card
//     { pattern: /\b\d{3}-\d{3}-\d{4}\b/g, mask: "***-***-****" }, // Phone
//   ];

//   useEffect(() => {
//     let str = generateRandomString(1500);
//     setRandomString(str);
//   }, []);

//   useEffect(() => {
//     if (isHovering) {
//       let maskedText = text;
//       piiPatterns.forEach(({ pattern, mask }) => {
//         maskedText = maskedText.replace(pattern, mask);
//       });
//       setDisplayText(maskedText);
//     } else {
//       setDisplayText(text);
//     }
//   }, [isHovering, text]);

//   function onMouseMove({ currentTarget, clientX, clientY }: any) {
//     let { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);

//     const str = generateRandomString(1500);
//     setRandomString(str);
//   }

//   return (
//     <div className={cn("max-w-2xl mx-auto", className)}>
//       <motion.div
//         className="p-8 bg-background rounded-2xl  relative overflow-hidden group/card"
//         onMouseMove={onMouseMove}
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <CardPattern
//           mouseX={mouseX}
//           mouseY={mouseY}
//           randomString={randomString}
//         />
        
//         <div className="relative z-10 ">
//           <motion.h2 
//             className="text-2xl font-bold text-foreground mb-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             Sensitive Information Card
//           </motion.h2>
          
//           <motion.div
//             className="text-foreground/80 leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             <motion.p
//               className="font-mono text-lg bg-muted/50 p-4 rounded-lg border"
//               animate={{
//                 backgroundColor: isHovering ? "rgba(239, 68, 68, 0.1)" : "rgba(0, 0, 0, 0.05)",
//                 borderColor: isHovering ? "rgba(239, 68, 68, 0.3)" : "rgba(0, 0, 0, 0.1)",
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               {displayText.split('').map((char, index) => {
//                 const isOriginalChar = char === text[index];
//                 return (
//                   <motion.span
//                     key={index}
//                     className={cn(
//                       "transition-colors duration-200",
//                       !isOriginalChar && isHovering ? "text-blue-500 font-bold" : "text-foreground"
//                     )}
//                     animate={{
//                       scale: !isOriginalChar && isHovering ? [1, 1.1, 1] : 1,
//                     }}
//                     transition={{ duration: 0.2, delay: index * 0.01 }}
//                   >
//                     {char}
//                   </motion.span>
//                 );
//               })}
//             </motion.p>
//           </motion.div>

//         </div>
        
//         <div className="absolute top-4 right-4 z-10">
//           <motion.div
//             className={cn(
//               "px-3 py-1 rounded-full text-xs font-medium transition-colors",
//               isHovering 
//                 ? "bg-background/50 text-text-primary border border-border" 
//                 : "text-transparent"
//             )}
//             animate={{
//               scale: isHovering ? [1, 1.05, 1] : 1,
//             }}
//             transition={{ duration: 0.2 }}
//           >
//             {isHovering ? "PII Masked" : "PII Visible"}
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default function PIITextCardDemo() {
//   return (
//     <div className="absolute right-0 top-6 origin-top scale-75 rounded-2xl  transition-all duration-300 ease-out  group-hover:scale-90 opacity-70 hover:top-3 ">
//       <PIITextCard />
//     </div>
//   );
// }


"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import React, { useState, useEffect } from "react";

interface PIITextCardProps {
  text?: string;
  className?: string;
}

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

const generateRandomString = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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
  const [maskedHtml, setMaskedHtml] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  // PII patterns to detect and mask with green span
  const piiPatterns = [
    { pattern: /\b\d{3}-\d{2}-\d{4}\b/g, mask: "***-**-****" }, // SSN
    { pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, mask: "****@****.***" }, // Email
    { pattern: /\b\d{4}-\d{4}-\d{4}-\d{4}\b/g, mask: "****-****-****-****" }, // Credit Card
    { pattern: /\b\d{3}-\d{3}-\d{4}\b/g, mask: "***-***-****" }, // Phone
  ];

  useEffect(() => {
    setRandomString(generateRandomString(1500));
  }, []);

  useEffect(() => {
    if (isHovering) {
      let masked = text;
      piiPatterns.forEach(({ pattern, mask }) => {
        masked = masked.replace(
        pattern,
        `<span class="text-blue-500 font-bold">${mask}</span>`
        );

      });
      setMaskedHtml(masked);
    }
  }, [isHovering, text]);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    setRandomString(generateRandomString(1500));
  }

  return (
    <div className={cn("max-w-2xl mx-auto", className)}>
      <motion.div
        className="p-4 bg-background rounded-2xl relative overflow-hidden group/card"
        onMouseMove={onMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />

        <div className="relative z-10">
          <motion.h2
            className="text-xl font-bold text-foreground mb-2"
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
                backgroundColor: isHovering ? "rgba(59, 130, 246, 0.1)" : "rgba(30, 41, 59, 0.2)", // bluish hover + slate fallback
                borderColor: isHovering ? "rgba(59, 130, 246, 0.3)" : "rgba(100, 116, 139, 0.2)",   // bluish border
              }}
              transition={{ duration: 0.3 }}
              dangerouslySetInnerHTML={{
                __html: isHovering ? maskedHtml : text,
              }}
            />
          </motion.div>
        </div>

        <div className="absolute top-2 right-2 z-10">
          <motion.div
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-colors",
              isHovering
                ? "bg-background/50 text-text-primary border border-border"
                : "text-transparent"
            )}
            animate={{ scale: isHovering ? [1, 1.05, 1] : 1 }}
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
    <div className="absolute right-0 top-6 origin-top scale-75 rounded-2xl transition-all duration-300 ease-out group-hover:scale-90 opacity-70 hover:top-3">
      <PIITextCard />
    </div>
  );
}
