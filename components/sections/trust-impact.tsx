"use client";

import { motion } from "framer-motion";
import { SectionHeading, StatCounter } from "@/components/ui";
import { stats } from "@/lib/constants";

export function TrustImpact() {
  return (
    <section className="bg-surface py-20 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            headline="Trusted Internationally"
            subheadline="Decades of validation, millions of analyses, international adoption."
          />
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-full max-w-4xl aspect-[2/1]">
            {/* Simplified world map dots */}
            <svg
              viewBox="0 0 800 400"
              className="w-full h-full"
              fill="none"
            >
              {/* Background glow */}
              <defs>
                <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Location dots - major cities/regions */}
              {[
                // Europe
                { x: 420, y: 120 }, // UK
                { x: 440, y: 130 }, // Germany
                { x: 460, y: 140 }, // Eastern Europe
                // North America
                { x: 180, y: 140 }, // East Coast US
                { x: 120, y: 150 }, // West Coast US
                { x: 200, y: 100 }, // Canada
                // Asia
                { x: 640, y: 150 }, // China
                { x: 700, y: 160 }, // Japan
                { x: 600, y: 200 }, // India
                // Australia
                { x: 720, y: 300 }, // Australia
                // South America
                { x: 260, y: 280 }, // Brazil
                // Middle East
                { x: 520, y: 180 }, // Middle East
                // Africa
                { x: 460, y: 220 }, // North Africa
                { x: 480, y: 280 }, // South Africa
              ].map((dot, i) => (
                <g key={i}>
                  <circle
                    cx={dot.x}
                    cy={dot.y}
                    r="12"
                    fill="url(#dotGlow)"
                    opacity="0.3"
                  />
                  <circle
                    cx={dot.x}
                    cy={dot.y}
                    r="4"
                    fill="var(--color-primary)"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.5;1;0.5"
                      dur={`${2 + i * 0.2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}

              {/* Connecting lines (subtle) */}
              <path
                d="M420,120 Q400,100 180,140"
                stroke="var(--color-primary)"
                strokeWidth="0.5"
                opacity="0.2"
              />
              <path
                d="M420,120 Q500,120 640,150"
                stroke="var(--color-primary)"
                strokeWidth="0.5"
                opacity="0.2"
              />
              <path
                d="M180,140 Q200,200 260,280"
                stroke="var(--color-primary)"
                strokeWidth="0.5"
                opacity="0.2"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
