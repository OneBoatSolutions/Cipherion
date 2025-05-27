"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen  flex-col overflow-hidden w-full  rounded-md z-0  ",
        className
      )}
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="relative  flex w-full flex-1 scale-y-125 items-center  justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            background: `conic-gradient(from 70deg at center top, var(--primary) 0%, transparent 50%, transparent 100%)`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] text-white"
        >
          <div
            className="absolute w-[100%] left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
            style={{ backgroundColor: "var(--background)" }}
          />
          <div
            className="absolute w-40 h-[100%] left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"
            style={{ backgroundColor: "var(--background)" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            background: `conic-gradient(from 290deg at center top, transparent 0%, transparent 50%, var(--primary) 100%)`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] text-white"
        >
          <div
            className="absolute w-40 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"
            style={{ backgroundColor: "var(--background)" }}
          />
          <div
            className="absolute w-[100%] right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
            style={{ backgroundColor: "var(--background)" }}
          />
        </motion.div>
        <div
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl"
          style={{ backgroundColor: "var(--background)" }}
        />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-0 rounded-full opacity-50 blur-2xl"
          style={{ backgroundColor: "var(--primary)" }}
        />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem]"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <div
          className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]"
          style={{ backgroundColor: "var(--background)" }}
        />
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

// Utility Components - Fixed TypeScript interfaces

interface LampProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  colors?: {
    primary: string;
    secondary: string;
    background: string;
  };
  size?: "sm" | "md" | "lg";
  intensity?: "low" | "medium" | "high";
  position?: "top" | "bottom" | "center";
  animated?: boolean;
  as?: React.ElementType;
}

export const Lamp = React.forwardRef<HTMLDivElement, LampProps>(
  (
    {
      children,
      colors = {
        primary: "var(--primary)",
        secondary: "var(--accent)",
        background: "var(--background)",
      },
      size = "sm",
      intensity = "medium",
      position = "top",
      animated = true,
      as: Component = "div",
      className,
      style,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "w-24 h-24",
      md: "w-48 h-48",
      lg: "w-72 h-72",
    };

    const intensityStyles = {
      low: "opacity-25",
      medium: "opacity-50",
      high: "opacity-75",
    };

    const positionStyles = {
      top: "top-0 left-0",
      bottom: "bottom-0 left-0",
      center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    };
    const cssVars = {
      "--primary": colors.primary,
      "--secondary": colors.secondary,
      "--background": colors.background,
    } as React.CSSProperties;

    return (
      <div
        ref={ref}
        className={cn(
          "relative",
          sizeClasses[size],
          intensityStyles[intensity],
          positionStyles[position],
          className
        )}
        style={{ ...cssVars, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Lamp.displayName = "Lamp";

interface LampBreakProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: {
    primary: string;
    secondary: string;
    background: string;
  };
  size?: "sm" | "md" | "lg";
}

export const LampBreak = React.forwardRef<HTMLDivElement, LampBreakProps>(
  (
    {
      colors = {
        primary: "var(--primary)",
        secondary: "var(--accent)",
        background: "var(--background)",
      },
      size = "md",
      className,
      style,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "h-1",
      md: "h-2",
      lg: "h-4",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full rounded-full overflow-hidden",
          sizeClasses[size],
          className
        )}
        style={{
          background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
          ...style,
        }}
        {...props}
      />
    );
  }
);

LampBreak.displayName = "LampBreak";
