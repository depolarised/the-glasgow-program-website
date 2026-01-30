"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, FlaskConical, FileText, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui";

const areas = [
  {
    icon: Activity,
    title: "Automated ECG Interpretation",
    description:
      "Development of the Glasgow Program for computer-aided ECG analysis, incorporating age, sex, and racial variation in diagnostic criteria.",
    href: "/program",
  },
  {
    icon: FlaskConical,
    title: "ECG Core Laboratory",
    description:
      "ISO 9001:2015 certified services for research studies, providing centralised ECG processing and endpoint adjudication.",
    href: "/services/core-lab",
  },
  {
    icon: FileText,
    title: "Clinical Guidelines",
    description:
      "Research contributing to ESC, ACC, and AHA guidelines for acute myocardial infarction diagnosis and ECG interpretation standards.",
    href: "/publications",
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description:
      "Educational resources for ECG recording techniques, electrode placement, and quality assurance in clinical trials.",
    href: "/training",
  },
];

export function ResearchAreas() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="section-container">
        <SectionHeading
          title="Research Focus"
          subtitle="Our work spans automated ECG interpretation, clinical trials support, and contributions to international guidelines."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={area.href}
                className="block h-full p-6 rounded-lg border border-border bg-background hover:border-primary transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-muted text-primary">
                    <area.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
