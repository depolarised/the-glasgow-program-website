"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCounter({ value, label, className }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numericValue = parseFloat(match[1]);
    const suffix = match[2];

    // Animate the number
    const duration = 2000;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (numericValue - startValue) * eased;

      if (Number.isInteger(numericValue)) {
        setDisplayValue(Math.round(current) + suffix);
      } else {
        setDisplayValue(current.toFixed(1) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={cn("text-center", className)}
    >
      <div className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
        {displayValue}
      </div>
      <div className="mt-2 text-sm text-foreground-muted sm:text-base">
        {label}
      </div>
    </motion.div>
  );
}
