"use client";

import { motion } from "framer-motion";
import { SectionHeading, UseCaseCard } from "@/components/ui";
import { useCases } from "@/lib/constants";

export function UseCases() {
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
            badge="Solutions"
            headline="Built for Your Use Case"
            subheadline="Whether you're building medical devices, managing hospital systems, or advancing cardiac research — Glasgow adapts to your needs."
          />
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <UseCaseCard
                category={useCase.category}
                headline={useCase.headline}
                description={useCase.description}
                href={useCase.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
