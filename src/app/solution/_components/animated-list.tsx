"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CreditCard,
  DollarSign,
  Banknote,
  BarChart2,
  ShieldCheck,
  Clock11, // optional for timestamp icon
} from "lucide-react";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 2000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children],
    );

    useEffect(() => {
      // Always schedule next index in a loop
      const timeout = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
      }, delay);

      return () => clearTimeout(timeout);
    }, [index, delay, childrenArray.length]);

    const itemsToShow = useMemo(() => {
      // Show from 0 up to index, reversing so newest appears at top
      const result = childrenArray.slice(0, index + 1).reverse();
      return result;
    }, [index, childrenArray]);

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => {
            // Use key from element or fallback to index-like string
            const key =
              typeof (item as React.ReactElement).key === "string"
                ? (item as React.ReactElement).key!
                : undefined;
            return (
              <AnimatedListItem key={key ?? Math.random().toString()}>
                {item}
              </AnimatedListItem>
            );
          })}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";

// Update interface: icon is React.ReactNode
interface Item {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  time: string;
}

// Example fintech notifications:
let notifications: Item[] = [
  {
    name: "Transaction Completed",
    description: "₹5,250 debited from Wallet • Order #12345",
    time: "Just now",
    icon: <CreditCard className="w-5 h-5 text-white" />,
    color: "#4F46E5", // Indigo
  },
  {
    name: "Cash Deposit",
    description: "₹10,000 credited to Savings Account",
    time: "2m ago",
    icon: <Banknote className="w-5 h-5 text-white" />,
    color: "#059669", // Emerald
  },
  {
    name: "Balance Alert",
    description: "Your balance dropped below ₹1,000",
    time: "5m ago",
    icon: <DollarSign className="w-5 h-5 text-white" />,
    color: "#DC2626", // Red
  },
  {
    name: "Spending Summary",
    description: "You spent ₹2,300 today on Food & Dining",
    time: "10m ago",
    icon: <BarChart2 className="w-5 h-5 text-white" />,
    color: "#F59E0B", // Amber
  },
  {
    name: "Security Alert",
    description: "New login from unrecognized device",
    time: "15m ago",
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    color: "#EF4444", // Bright Red
  },
  {
    name: "Scheduled Payment",
    description: "Upcoming EMI of ₹12,000 due tomorrow",
    time: "20m ago",
    icon: <Clock11 className="w-5 h-5 text-white" />,
    color: "#2563EB", // Blue
  },
  // Add more variants as desired...
];

// Optionally repeat to have a longer list; here we repeat the array twice:
notifications = Array.from({ length: 2 }, () => notifications).flat();

const Notification = ({
  name,
  description,
  icon,
  color,
  time,
}: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // hover scale
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          {icon}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList delay={2000}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      {/* Gradient fade at bottom to mask older notifications */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
