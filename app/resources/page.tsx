import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Download,
  ExternalLink,
  GraduationCap,
  Microscope,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resources",
  description: "Publications, documentation, and educational resources for the Glasgow ECG Program.",
};

const publicationHighlights = [
  {
    title: "STEMI Screening Performance with an Updated University of Glasgow ECG Analysis Program",
    journal: "Journal of Electrocardiology",
    year: "2023",
    description: "Evaluation of STEMI detection performance using age/sex-specific criteria.",
  },
  {
    title: "Comprehensive Electrocardiology",
    journal: "Springer (4 volumes)",
    year: "2011",
    description: "Definitive reference work covering all aspects of electrocardiology.",
  },
  {
    title: "Methodology of ECG interpretation in the Glasgow program",
    journal: "Methods of Information in Medicine",
    year: "1990",
    description: "Foundational paper describing the rule-based interpretation methodology.",
  },
  {
    title: "The University of Glasgow (Uni-G) ECG analysis program",
    journal: "Computing in Cardiology",
    year: "2005",
    description: "Overview of the modern Glasgow Program architecture and capabilities.",
  },
];

const researchAreas = [
  {
    icon: Microscope,
    title: "Acute Myocardial Infarction",
    description: "STEMI and NSTEMI detection, infarct localisation, and serial comparison for evolving changes.",
  },
  {
    icon: Microscope,
    title: "Atrial Fibrillation",
    description: "Automated AF detection in standard and limited lead configurations.",
  },
  {
    icon: Microscope,
    title: "Interval Standardisation",
    description: "QT/QTc measurement methodology and standardisation across different ECG systems.",
  },
  {
    icon: Microscope,
    title: "Demographic Variations",
    description: "Age, sex, and racial differences in ECG appearances and diagnostic criteria.",
  },
  {
    icon: Microscope,
    title: "Pediatric ECG",
    description: "Neonatal and pediatric ECG interpretation with age-appropriate criteria.",
  },
  {
    icon: Microscope,
    title: "Hypertrophy Criteria",
    description: "Evaluation and refinement of LVH and RVH detection criteria.",
  },
];

const documentTypes = [
  {
    icon: FileText,
    title: "Technical Documentation",
    description: "Detailed specifications, integration guides, and API references for licensed partners.",
    access: "Licensed Partners",
  },
  {
    icon: BookOpen,
    title: "Clinical Guidelines",
    description: "Best practices for ECG interpretation and quality assurance procedures.",
    access: "Licensed Partners",
  },
  {
    icon: GraduationCap,
    title: "Training Materials",
    description: "Educational resources for clinical staff and system administrators.",
    access: "Licensed Partners",
  },
  {
    icon: Download,
    title: "Product Overview",
    description: "High-level overview of Glasgow Program capabilities and benefits.",
    access: "Public",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan mb-4">
              Resources
            </span>
            <h1 className="text-4xl font-bold text-text sm:text-5xl lg:text-6xl tracking-tight">
              Publications & Documentation
            </h1>
            <p className="mt-6 text-xl text-text-muted">
              Over 50 years of research, 237+ publications, and comprehensive documentation
              supporting the Glasgow ECG Program.
            </p>
          </div>
        </div>
      </section>

      {/* Publication Highlights */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              Key Publications
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Selected publications spanning the development and validation of the Glasgow Program.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {publicationHighlights.map((pub) => (
              <div
                key={pub.title}
                className="rounded-lg border border-white/10 bg-navy-light/30 p-6"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-text leading-tight">
                    {pub.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-cyan flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-cyan mb-2">
                  {pub.journal} ({pub.year})
                </p>
                <p className="text-sm text-text-muted">
                  {pub.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-text-muted mb-4">
              Full publication list available from the University of Glasgow research portal.
            </p>
            <a
              href="https://www.gla.ac.uk/schools/healthwellbeing/research/robertsoncentreforbiostatistics/electrocardiology/publications/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan hover:text-cyan/80 transition-colors"
            >
              View all publications
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              Research Focus Areas
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Ongoing research continues to refine and expand the Glasgow Program&apos;s capabilities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-lg border border-white/10 bg-navy-light/30 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan/10 text-cyan mb-4">
                  <area.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{area.title}</h3>
                <p className="text-sm text-text-muted">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              Documentation
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Comprehensive documentation available for licensed partners and prospective customers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {documentTypes.map((doc) => (
              <div
                key={doc.title}
                className="rounded-lg border border-white/10 bg-navy-light/30 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan/10 text-cyan flex-shrink-0">
                    <doc.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-text">{doc.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        doc.access === "Public"
                          ? "bg-success/10 text-success"
                          : "bg-cyan/10 text-cyan"
                      }`}>
                        {doc.access}
                      </span>
                    </div>
                    <p className="text-sm text-text-muted">{doc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECG Core Lab */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan mb-4">
                ECG Core Lab Services
              </span>
              <h2 className="text-3xl font-bold text-text sm:text-4xl">
                Clinical Trial Support
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                The Electrocardiology Group provides ECG Core Lab services for clinical trials
                and epidemiological studies, offering standardised analysis and expert oversight.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2 text-text-muted">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0" />
                  <span>Centralised Minnesota coding for epidemiological standardisation</span>
                </li>
                <li className="flex items-start gap-2 text-text-muted">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0" />
                  <span>Serial comparison and change detection across study timepoints</span>
                </li>
                <li className="flex items-start gap-2 text-text-muted">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0" />
                  <span>Expert cardiologist over-reading and adjudication</span>
                </li>
                <li className="flex items-start gap-2 text-text-muted">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0" />
                  <span>ISO 9001:2015 certified quality management</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-navy-light/30 p-8">
              <h3 className="text-xl font-semibold text-text mb-4">Study Support Includes</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-cyan mt-0.5" />
                  <div>
                    <p className="font-medium text-text">Protocol Development</p>
                    <p className="text-sm text-text-muted">ECG acquisition and analysis protocols tailored to study objectives</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-cyan mt-0.5" />
                  <div>
                    <p className="font-medium text-text">Site Training</p>
                    <p className="text-sm text-text-muted">Training for clinical site staff on ECG acquisition procedures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-cyan mt-0.5" />
                  <div>
                    <p className="font-medium text-text">Quality Reports</p>
                    <p className="text-sm text-text-muted">Regular quality metrics and audit reports for sponsors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="section-container">
          <div className="rounded-2xl border border-cyan/20 bg-gradient-to-br from-navy-light to-navy p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              Request Documentation
            </h2>
            <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
              Contact us to request technical documentation, discuss licensing options,
              or learn more about ECG Core Lab services.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/licensing">
                <Button variant="secondary" size="lg">
                  Licensing Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
