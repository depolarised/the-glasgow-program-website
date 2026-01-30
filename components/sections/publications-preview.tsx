"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";
import { keyPublications, books, teamMembers } from "@/lib/constants";

export function PublicationsPreview() {
  const professorMacfarlane = teamMembers[0];

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="section-container">
        <SectionHeading
          title="Research & Publications"
          subtitle="Our research into automated ECG interpretation has resulted in numerous peer-reviewed publications and contributions to international guidelines."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Key Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Selected Publications
            </h3>
            <div className="space-y-4">
              {keyPublications.slice(0, 4).map((pub) => (
                <div
                  key={pub.title}
                  className="p-4 rounded-lg border border-border bg-background hover:border-primary transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-foreground leading-tight">
                        {pub.title}
                      </h4>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {pub.authors}
                      </p>
                      <p className="text-sm text-foreground-muted">
                        {pub.journal}, {pub.year}
                      </p>
                      {pub.note && (
                        <p className="mt-1 text-xs text-primary">{pub.note}</p>
                      )}
                    </div>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-2 text-foreground-muted hover:text-primary transition-colors"
                        aria-label="View on PubMed"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/publications" className="inline-block mt-6">
              <Button variant="secondary">
                View All Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Books & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Publication Stats */}
            <div className="p-6 rounded-lg border border-border bg-background">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">424</div>
                  <div className="text-xs text-foreground-muted">Publications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">77</div>
                  <div className="text-xs text-foreground-muted">h-index</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">53K+</div>
                  <div className="text-xs text-foreground-muted">Citations</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-sm text-foreground-muted">
                  Including publications in Nature Communications, Circulation,
                  The Lancet, and Journal of Electrocardiology
                </div>
              </div>
            </div>

            {/* Books */}
            <div className="p-6 rounded-lg border border-border bg-background">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Books</h3>
              </div>
              <div className="space-y-3">
                {books.slice(0, 2).map((book) => (
                  <div key={book.title}>
                    <div className="font-medium text-foreground text-sm">
                      {book.title}
                    </div>
                    <div className="text-xs text-foreground-muted">
                      {book.publisher}
                      {book.edition && ` · ${book.edition}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guidelines contribution */}
            <div className="p-6 rounded-lg border border-primary/20 bg-primary-muted">
              <h3 className="font-semibold text-foreground mb-2">
                Clinical Guidelines
              </h3>
              <p className="text-sm text-foreground-muted">
                Research from the Electrocardiology Section has contributed to
                ESC, ACC, and AHA guidelines for acute myocardial infarction
                diagnosis criteria.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
