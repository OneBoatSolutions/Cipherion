"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export const RotatingNavGlow = ({
  children,
  duration = 2,
  clockwise = true,
}: {
  children: React.ReactNode;
  duration?: number;
  clockwise?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (current: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const index = directions.indexOf(current);
    return clockwise
      ? directions[(index + 1) % directions.length]
      : directions[(index - 1 + directions.length) % directions.length];
  };

  const gradients: Record<Direction, string> = {
    TOP: "radial-gradient(40% 50% at 50% 0%, var(--accent) 0%, transparent 100%)",
    LEFT: "radial-gradient(40% 50% at 0% 50%, var(--accent) 0%, transparent 100%)",
    BOTTOM: "radial-gradient(40% 50% at 50% 100%, var(--accent) 0%, transparent 100%)",
    RIGHT: "radial-gradient(40% 50% at 100% 50%, var(--accent) 0%, transparent 100%)",
  };

  const highlight =
    "radial-gradient(100% 100% at 50% 50%, var(--accent) 0%, transparent 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-visible rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit] pointer-events-none"
        style={{ filter: "blur(4px)" }}
        initial={{ background: gradients[direction] }}
        animate={{
          background: hovered
            ? [gradients[direction], highlight]
            : gradients[direction],
        }}
        transition={{ duration, ease: "linear" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
