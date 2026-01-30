"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent, SectionHeading, MetricCard } from "@/components/ui";
import { diagnosticCapabilities } from "@/lib/constants";

export function DiagnosticCapabilities() {
  const categories = Object.entries(diagnosticCapabilities);

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
            badge="Comprehensive Analysis"
            headline="Diagnostic Capabilities"
            subheadline="From rhythm analysis to structural abnormalities — the Glasgow algorithm covers the full spectrum of ECG interpretation."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Tabs defaultValue="rhythm" className="w-full">
            <div className="flex justify-center">
              <TabsList className="flex-wrap justify-center">
                {categories.map(([key, category]) => (
                  <TabsTrigger key={key} value={key}>
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <MetricCard
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                      />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
