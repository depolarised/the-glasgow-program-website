"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button, ECGAnimation } from "@/components/ui";
import { siteConfig, stats } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-background pt-16 lg:pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-alt" />

      {/* ECG Animation Background */}
      <div className="absolute inset-0 opacity-10">
        <ECGAnimation className="h-full w-full" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Institutional affiliation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 text-sm text-foreground-muted mb-6"
          >
            <Link
              href={siteConfig.links.universityMain}
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of Glasgow
            </Link>
            <span>/</span>
            <Link
              href={siteConfig.links.schoolOfHealth}
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              School of Health &amp; Wellbeing
            </Link>
            <span>/</span>
            <Link
              href={siteConfig.links.robertsonCentre}
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Robertson Centre for Biostatistics
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Electrocardiology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-primary sm:text-2xl font-medium"
          >
            Over 50 years of research into automated ECG interpretation
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg text-foreground-muted max-w-3xl"
          >
            The Electrocardiology Section develops the Glasgow Program for automated ECG analysis,
            provides ECG Core Laboratory services for research studies, and conducts research into
            electrocardiographic methods. Our work, led by Professor Peter Macfarlane,
            has been adopted internationally and contributes to clinical guidelines.
          </motion.p>

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 inline-flex items-center gap-2 text-sm text-foreground-muted"
          >
            <MapPin className="h-4 w-4" />
            <span>Glasgow Royal Infirmary, New Lister Building</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <Link href="/research">
              <Button size="lg">
                About Our Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/program">
              <Button variant="secondary" size="lg">
                The Glasgow Program
              </Button>
            </Link>
            <Link href="/services/core-lab">
              <Button variant="ghost" size="lg">
                ECG Core Lab
              </Button>
            </Link>
          </motion.div>

          {/* Stats - understated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
