"use client";

import { forwardRef, useEffect, useId, useRef } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam = forwardRef<SVGSVGElement, AnimatedBeamProps>(
  (
    {
      className,
      containerRef,
      fromRef,
      toRef,
      curvature = 0,
      reverse = false,
      duration = 5,
      delay = 0,
      pathColor = "gray",
      pathWidth = 2,
      pathOpacity = 0.2,
      gradientStartColor = "#6d18ff",
      gradientStopColor = "#9569fe",
      startXOffset = 0,
      startYOffset = 0,
      endXOffset = 0,
      endYOffset = 0,
    },
    ref,
  ) => {
    const id = useId();
    const svgRef = useRef<SVGSVGElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
      const updatePath = () => {
        if (containerRef.current && fromRef.current && toRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const rectA = fromRef.current.getBoundingClientRect();
          const rectB = toRef.current.getBoundingClientRect();

          const svgTop = containerRect.top;
          const svgLeft = containerRect.left;

          const startX = rectA.left - svgLeft + rectA.width / 2 + startXOffset;
          const startY = rectA.top - svgTop + rectA.height / 2 + startYOffset;
          const endX = rectB.left - svgLeft + rectB.width / 2 + endXOffset;
          const endY = rectB.top - svgTop + rectB.height / 2 + endYOffset;

          const controlPointX = startX + (endX - startX) / 2;
          const controlPointY = startY - curvature;

          const d = `M ${startX},${startY} Q ${controlPointX},${controlPointY} ${endX},${endY}`;
          pathRef.current?.setAttribute("d", d);
        }
      };

      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          updatePath();
        }
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      updatePath();
      return () => resizeObserver.disconnect();
    }, [
      containerRef,
      fromRef,
      toRef,
      curvature,
      startXOffset,
      startYOffset,
      endXOffset,
      endYOffset,
    ]);

    return (
      <svg
        ref={ref}
        className={cn(
          "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
          className,
        )}
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient
            className="transform-gpu"
            id={id}
            gradientUnits="userSpaceOnUse"
            gradientTransform={reverse ? "rotate(180)" : ""}
          >
            <stop stopColor={gradientStartColor} stopOpacity="0" />
            <stop stopColor={gradientStartColor} />
            <stop offset="32.5%" stopColor={gradientStopColor} />
            <stop
              offset="100%"
              stopColor={gradientStopColor}
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          stroke={pathColor}
          strokeWidth={pathWidth}
          strokeOpacity={pathOpacity}
          fill="none"
        />
        <path
          stroke={`url(#${id})`}
          strokeWidth={pathWidth}
          fill="none"
          strokeDasharray="20 20"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;40"
            dur={`${duration}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
        </path>
      </svg>
    );
  },
);

AnimatedBeam.displayName = "AnimatedBeam";