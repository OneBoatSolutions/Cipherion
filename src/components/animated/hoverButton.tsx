"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

type HoverBorderGradientProps<T extends React.ElementType> = {
  as?: T;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  children?: React.ReactNode;               
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export function HoverBorderGradient<T extends React.ElementType = "button">({
  as,
  containerClassName,
  className,
  duration = 1,
  clockwise = true,
  children,
  ...props
}: HoverBorderGradientProps<T>) {
  // cast the tag to a React element type
  const Tag = (as || "button") as React.ElementType;

  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = useCallback(
    (current: Direction): Direction => {
      const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
      const idx = directions.indexOf(current);
      return directions[
        clockwise
          ? (idx - 1 + directions.length) % directions.length
          : (idx + 1) % directions.length
      ];
    },
    [clockwise]
  );

  const movingMap: Record<Direction, string> = {
    TOP:    "radial-gradient(20.7% 50% at 50% 0%, #fff 0%, rgba(255,255,255,0) 100%)",
    LEFT:   "radial-gradient(16.6% 43.1% at 0% 50%, #fff 0%, rgba(255,255,255,0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #fff 0%, rgba(255,255,255,0) 100%)",
    RIGHT:  "radial-gradient(16.2% 41.2% at 100% 50%, #fff 0%, rgba(255,255,255,0) 100%)",
  };
  const highlight =
    "radial-gradient(75% 181.16% at 50% 50%, #3275F8 0%, rgba(255,255,255,0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const id = setInterval(() => setDirection((p) => rotateDirection(p)), duration * 1000);
      return () => clearInterval(id);
    }
  }, [hovered, duration, rotateDirection]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col gap-4 overflow-visible p-px w-fit",
        containerClassName
      )}
      {...props}
    >
      {/* wrap all children here */}
      <div className={cn("relative z-10 px-4 py-2 bg-black text-white rounded-[inherit]", className)}>
        {children}
      </div>

      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit]"
        style={{ filter: "blur(2px)" }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration }}
      />

      <div className="absolute inset-[2px] rounded-[inherit] bg-black" />
    </Tag>
  );
}
