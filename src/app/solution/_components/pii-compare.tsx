"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/animated/sparkles";

interface PIIJsonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  jsonData?: string;
  variant?: "dark" | "dark";
}

const MemoizedSparklesCore = React.memo(SparklesCore);

const PIITextCard = React.forwardRef<HTMLDivElement, PIIJsonCardProps>(
  (
    {
      className,
      jsonData = `{
  "pii_data": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "address": "123 Main St, Anytown, USA",
    "ssn": "123-45-6789"
  },
  "encrypted_data": {
    "name": "Sm9obiBEb2U=",
    "email": "am9obi5kb2VAZXhhbXBsZS5jb20=",
    "phone": "KzEyMzQ1Njc4OTA=",
    "address": "MTIzIE1haW4gU3QsIEFueXRvd24sIFVTQQ==",
    "ssn": "MTIzLTQ1LTY3ODk="
  }
}`,
      variant = "default",
      ...props
    },
    ref
  ) => {
    const [widthPercentage, setWidthPercentage] = React.useState(0);
    const [plainJson, setPlainJson] = React.useState("");
    const [encryptedJson, setEncryptedJson] = React.useState("");
    const [copied, setCopied] = React.useState(false);
    const [left, setLeft] = React.useState(0);
    const [localWidth, setLocalWidth] = React.useState(0);
    const [isMouseOver, setIsMouseOver] = React.useState(false);
    const cardRef = React.useRef<HTMLDivElement>(null);

    // Extract and format JSON data
    const extractAndFormatJson = (jsonString: string) => {
      try {
        const parsed = JSON.parse(jsonString);
        const piiData = parsed.pii_data || {};
        const encryptedData = parsed.encrypted_data || {};

        const plainText = JSON.stringify(piiData, null, 2)
          .split('\n')
          .map((line, idx) => idx === 0 ? `"pii_data": ${line}` : `  ${line}`)
          .join('\n');
        
        const revealText = JSON.stringify(encryptedData, null, 2)
          .split('\n')
          .map((line, idx) => idx === 0 ? `"encrypted_data": ${line}` : `  ${line}`)
          .join('\n');

        return { plainText, revealText };
      } catch (error) {
        console.error("Failed to parse JSON:", error);
        return { plainText: "", revealText: "" };
      }
    };

    React.useEffect(() => {
      const { plainText, revealText } = extractAndFormatJson(jsonData);
      setPlainJson(plainText);
      setEncryptedJson(revealText);
    }, [jsonData]);

    React.useEffect(() => {
      if (cardRef.current) {
        const { left, width: localWidth } = cardRef.current.getBoundingClientRect();
        setLeft(left);
        setLocalWidth(localWidth);
      }
    }, []);

    const mouseMoveHandler = (event: React.MouseEvent) => {
      event.preventDefault();
      const { clientX } = event;
      if (cardRef.current) {
        const relativeX = clientX - left;
        setWidthPercentage((relativeX / localWidth) * 100);
      }
    };

    const mouseLeaveHandler = () => {
      setIsMouseOver(false);
      setWidthPercentage(0);
    };

    const mouseEnterHandler = () => {
      setIsMouseOver(true);
    };

    const touchMoveHandler = (event: React.TouchEvent<HTMLDivElement>) => {
      event.preventDefault();
      const clientX = event.touches[0]!.clientX;
      if (cardRef.current) {
        const relativeX = clientX - left;
        setWidthPercentage((relativeX / localWidth) * 100);
      }
    };

    
    const rotateDeg = (widthPercentage - 60) * 0.1;

    return (
      <div
        ref={cardRef}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseMove={mouseMoveHandler}
        onTouchStart={mouseEnterHandler}
        onTouchEnd={mouseLeaveHandler}
        onTouchMove={touchMoveHandler}
        className={cn(
          "bg-transparent rounded-2xl p-4 relative overflow-hidden min-h-[300px]",
          className
        )}
        {...props}
      >
       
        {/* JSON Content Area */}
        <div className="relative w-full h-full bg-transparent flex items-center overflow-hidden">
          {/* Reveal layer (encrypted data) */}
          <motion.div
            style={{ width: "100%" }}
            animate={
              isMouseOver
                ? {
                    opacity: widthPercentage > 0 ? 1 : 0,
                    clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                  }
                : {
                    clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                  }
            }
            transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
            className="absolute bg-transparent z-20 will-change-transform"
          >
            <pre
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
              className="text-sm p-8 font-mono text-red-400 whitespace-pre-wrap leading-relaxed [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
            >
              {`{\n  ${encryptedJson}\n}`}
            </pre>
          </motion.div>

          {/* Divider line with sparkles and gradient effects */}
          <motion.div
            animate={{
              left: `${widthPercentage}%`,
              rotate: `${rotateDeg}deg`,
              opacity: widthPercentage > 0 ? 1 : 0,
            }}
            transition={isMouseOver ? { duration: 0 } : { duration: 0.3 }}
            className="h-full w-[2px]  bg-gradient-to-b from-transparent via-white/50 to-transparent absolute z-50 will-change-transform"
          >
            {/* Gradient effects */}
            <div className="w-36 h-full [mask-image:radial-gradient(100px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-indigo-400 via-transparent to-transparent z-20 opacity-50" />
            <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-cyan-400 via-transparent to-transparent z-10 opacity-100" />
            
            {/* Sparkles around the divider */}
            <div className="w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10 [mask-image:radial-gradient(100px_at_left,white,transparent)]">
              <MemoizedSparklesCore
                background="transparent"
                minSize={0.6}
                maxSize={1.5}
                particleDensity={1400}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
          </motion.div>

          {/* Base layer (PII data) */}
          <div className="overflow-hidden w-full [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] h-full flex items-center">
            <pre className="text-sm font-mono p-8 text-gray-500 whitespace-pre-wrap leading-relaxed">
              {`{\n  ${plainJson}\n}`}
            </pre>
          </div>
        </div>
      </div>
    );
  }
);

PIITextCard.displayName = "PIITextCard";

function PIITextReveal() {
  return (
    <div className="absolute right-0 -top-10 origin-top scale-90 rounded-2xl  transition-all duration-300 ease-out  group-hover:scale-90  ">
      <div className="mb-4">
        <p className="text-gray-400 text-md relative -top-4">
          Safegaurd all the PII information accross the complaince landscape
        </p>
      </div>
      <PIITextCard />
    </div>
  );
}

export { PIITextReveal, PIITextCard };