"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";

export function AIFoundation() {
  return (
    <section className="bg-background-alt py-20 lg:py-32">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary-muted px-3 py-1 text-xs font-medium text-primary mb-4">
              AI-Ready
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl tracking-tight">
              The Foundation for<br />
              <span className="text-primary">Cardiac AI</span>
            </h2>
            <p className="mt-6 text-lg text-foreground-muted">
              Glasgow provides the deterministic, explainable layer that modern AI
              solutions need. Use our validated algorithms as the foundation for
              your machine learning models — ensuring every AI prediction has a
              clinically proven baseline.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Deterministic baseline for AI model training",
                "Explainable outputs for regulatory compliance",
                "Structured data pipeline for ML integration",
                "Proven accuracy for hybrid AI systems",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground-muted">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Concentric Rings Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Outer ring - Clinical Applications */}
              <div className="absolute inset-0 rounded-full border border-primary/20 bg-primary-muted flex items-center justify-center">
                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground-muted whitespace-nowrap">
                  Clinical Applications
                </span>
              </div>

              {/* Middle ring - AI Extensions */}
              <div className="absolute inset-[15%] rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center">
                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-medium text-primary/80 whitespace-nowrap">
                  AI Extensions
                </span>
              </div>

              {/* Inner ring - Rule-Based Engine */}
              <div className="absolute inset-[30%] rounded-full border border-primary bg-primary/20 flex items-center justify-center shadow-glow">
                <div className="text-center px-4">
                  <div className="text-sm font-semibold text-primary">
                    Rule-Based
                  </div>
                  <div className="text-xs text-primary/80">
                    Engine
                  </div>
                </div>
              </div>

              {/* Animated pulse rings */}
              <div className="absolute inset-[30%]">
                <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-20" />
              </div>

              {/* Labels on sides */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-4 text-right">
                <div className="text-sm font-medium text-foreground">Telehealth</div>
                <div className="text-xs text-foreground-muted">Remote monitoring</div>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-4">
                <div className="text-sm font-medium text-foreground">Hospital Systems</div>
                <div className="text-xs text-foreground-muted">EHR integration</div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-4 text-center">
                <div className="text-sm font-medium text-foreground">Medical Devices</div>
                <div className="text-xs text-foreground-muted">OEM integration</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
