import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { oemPartners } from "@/lib/constants";

const solutionData = {
  oem: {
    title: "For OEMs",
    subtitle: "Device Manufacturers",
    description: "License the Glasgow ECG Program for your medical devices, patient monitors, defibrillators, and wearable ECG systems.",
    heroText: "Join the leading medical device manufacturers who trust Glasgow for clinically validated ECG interpretation.",
    features: [
      {
        title: "Non-Exclusive Licensing",
        description: "Flexible licensing terms that allow you to differentiate your products while benefiting from proven technology.",
      },
      {
        title: "Integration Support",
        description: "Technical documentation, integration guides, and engineering support to accelerate your development timeline.",
      },
      {
        title: "Regulatory Documentation",
        description: "IEC 60601-2-51 compliance documentation and technical specifications for regulatory submissions.",
      },
      {
        title: "Multi-Language Support",
        description: "Diagnostic statements available in 15+ languages for global market deployment.",
      },
    ],
    benefits: [
      "50+ years of continuous development and validation",
      "20+ million ECGs interpreted annually worldwide",
      "Lightweight footprint for embedded systems",
      "Age/sex/race-specific diagnostic criteria",
      "Neonatal through adult age range support",
      "Serial comparison and Minnesota coding options",
    ],
    cta: "Contact our licensing team to discuss integration options and pricing for your device platform.",
  },
  healthcare: {
    title: "For Healthcare",
    subtitle: "Hospitals & Health Systems",
    description: "Deploy validated ECG diagnostics across your healthcare organisation with enterprise integration and centralised management.",
    heroText: "Bring consistent, high-quality ECG interpretation to every point of care in your health system.",
    features: [
      {
        title: "Enterprise Integration",
        description: "HL7/FHIR compatible interfaces for seamless integration with electronic health records and clinical workflows.",
      },
      {
        title: "Centralised Analysis",
        description: "Server-based deployment for high-throughput analysis across multiple sites and departments.",
      },
      {
        title: "Quality Assurance",
        description: "Built-in quality metrics and audit trails for clinical governance and accreditation requirements.",
      },
      {
        title: "Clinical Decision Support",
        description: "Structured outputs that integrate with clinical decision support systems and care pathways.",
      },
    ],
    benefits: [
      "Consistent interpretation across all care settings",
      "Reduced over-reading burden on cardiologists",
      "Automatic Minnesota coding for research",
      "Serial comparison for longitudinal care",
      "Extended diagnostic reasoning available",
      "Multi-language support for diverse populations",
    ],
    cta: "Contact us to discuss enterprise deployment options for your healthcare organisation.",
  },
  research: {
    title: "For Research",
    subtitle: "Clinical Trials & Epidemiology",
    description: "ECG Core Lab services and standardised analysis for clinical trials, epidemiological studies, and cardiac research.",
    heroText: "ISO 9001:2015 certified ECG analysis supporting major clinical trials and research studies worldwide.",
    features: [
      {
        title: "ECG Core Lab Services",
        description: "Centralised ECG management, analysis, and quality control for multi-site clinical trials.",
      },
      {
        title: "Minnesota Coding",
        description: "Automatic centralised Minnesota coding — the international standard for epidemiological studies.",
      },
      {
        title: "Serial Comparison",
        description: "Automated comparison of ECGs across study timepoints to detect and quantify changes.",
      },
      {
        title: "Expert Oversight",
        description: "Cardiologist over-reading and adjudication services for endpoint validation.",
      },
    ],
    benefits: [
      "ISO 9001:2015 certified quality management",
      "Standardised analysis across all study sites",
      "Batch processing for large datasets",
      "Custom parameter extraction",
      "Protocol development support",
      "Regulatory-compliant documentation",
    ],
    cta: "Contact our research team to discuss ECG Core Lab services for your study.",
  },
  "ai-partners": {
    title: "For AI Partners",
    subtitle: "Machine Learning & AI",
    description: "Use the Glasgow Program as a deterministic foundation layer for AI-enhanced cardiac diagnostics and machine learning applications.",
    heroText: "Build your AI innovations on a clinically validated, explainable foundation.",
    features: [
      {
        title: "Structured Outputs",
        description: "Machine-readable diagnostic data and measurements for ML pipeline integration.",
      },
      {
        title: "Explainable Baseline",
        description: "Deterministic, rule-based interpretation that provides explainable outputs for regulatory compliance.",
      },
      {
        title: "Training Data Labels",
        description: "Consistent, validated labels for supervised learning model development.",
      },
      {
        title: "Hybrid Architecture",
        description: "Design patterns for combining rule-based and AI-based interpretation layers.",
      },
    ],
    benefits: [
      "50+ years of clinical validation",
      "Transparent diagnostic reasoning",
      "Regulatory-friendly explainability",
      "Consistent ground truth labels",
      "Extensive edge case coverage",
      "Demographic-aware baselines",
    ],
    cta: "Contact us to discuss how Glasgow can enhance your AI cardiac solutions.",
  },
};

type SolutionSlug = keyof typeof solutionData;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionData[slug as SolutionSlug];

  if (!solution) {
    return { title: "Not Found" };
  }

  return {
    title: solution.title,
    description: solution.description,
  };
}

export function generateStaticParams() {
  return Object.keys(solutionData).map((slug) => ({ slug }));
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutionData[slug as SolutionSlug];

  if (!solution) {
    notFound();
  }

  const isOEM = slug === "oem";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary-muted px-3 py-1 text-xs font-medium text-primary mb-4">
              {solution.subtitle}
            </span>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl tracking-tight">
              {solution.title}
            </h1>
            <p className="mt-6 text-xl text-foreground-muted">
              {solution.heroText}
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-4 text-lg text-foreground-muted">
              {solution.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {solution.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-background-alt">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Why Choose Glasgow?
              </h2>
              <p className="mt-4 text-lg text-foreground-muted">
                The Glasgow Program offers unique advantages for your application.
              </p>
            </div>

            <div className="space-y-3">
              {solution.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OEM Partners (only for OEM page) */}
      {isOEM && (
        <section className="py-16 lg:py-24 bg-surface">
          <div className="section-container">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Current OEM Partners
              </h2>
              <p className="mt-4 text-lg text-foreground-muted">
                Leading medical device manufacturers trust Glasgow for ECG interpretation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {oemPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="rounded-lg border border-border bg-background p-4"
                >
                  <h3 className="font-semibold text-foreground">{partner.name}</h3>
                  <p className="text-sm text-foreground-muted mt-1">{partner.description}</p>
                  <p className="text-xs text-primary mt-2">Partner since {partner.since}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={`py-16 lg:py-24 ${isOEM ? "bg-background-alt" : "bg-surface"}`}>
        <div className="section-container">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-muted to-background p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
              {solution.cta}
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
                  Licensing Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
