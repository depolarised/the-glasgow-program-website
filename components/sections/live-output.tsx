"use client";

import { motion } from "framer-motion";
import { SectionHeading, OutputToggle } from "@/components/ui";

export function LiveOutput() {
  return (
    <section className="bg-background-alt py-20 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Flexible Output"
            headline="Output That Fits Your Workflow"
            subheadline="From human-readable summaries to structured JSON — get ECG interpretations in the format you need."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          {/* ECG Strip Placeholder */}
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="text-sm font-medium text-foreground-muted mb-4">
              Sample ECG Input
            </h3>
            <div className="relative h-48 rounded-md bg-background border border-border overflow-hidden">
              {/* Grid background */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, var(--color-primary-muted) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--color-primary-muted) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* ECG waveform SVG */}
              <svg
                viewBox="0 0 400 100"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 50 L40 50 L50 50 L55 45 L60 50 L80 50 L85 30 L90 80 L95 40 L100 50 L120 50 L125 45 L135 55 L145 50 L160 50 L170 50 L175 45 L180 50 L200 50 L205 30 L210 80 L215 40 L220 50 L240 50 L245 45 L255 55 L265 50 L280 50 L290 50 L295 45 L300 50 L320 50 L325 30 L330 80 L335 40 L340 50 L360 50 L365 45 L375 55 L385 50 L400 50"
                  fill="none"
                  stroke="var(--color-ecg-line)"
                  strokeWidth="1.5"
                  className="drop-shadow-[0_0_3px_var(--color-ecg-glow)]"
                />
              </svg>
            </div>
            <p className="mt-4 text-xs text-foreground-muted">
              12-lead ECG processed through Glasgow algorithm
            </p>
          </div>

          {/* Output Toggle */}
          <OutputToggle />
        </motion.div>
      </div>
    </section>
  );
}
