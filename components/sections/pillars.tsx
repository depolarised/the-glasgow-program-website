"use client";

import { motion } from "framer-motion";
import { SectionHeading, PillarCard } from "@/components/ui";
import { pillars } from "@/lib/constants";

export function Pillars() {
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
            headline="Why Glasgow?"
            subheadline="Three pillars that make the Glasgow algorithm the trusted choice for clinical ECG interpretation."
          />
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PillarCard
                icon={pillar.icon}
                title={pillar.title}
                points={pillar.points}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
