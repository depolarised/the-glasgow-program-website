import { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  GitBranch,
  AlertTriangle,
  Maximize,
  CheckCircle,
  ArrowRight,
  Globe,
  Baby,
  Users,
  Pill
} from "lucide-react";
import { Button } from "@/components/ui";
import { timeline, certifications } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Algorithm",
  description: "The Glasgow ECG Analysis Program — over 50 years of continuous development delivering clinically validated, automated ECG interpretation.",
};

const capabilities = [
  {
    icon: Activity,
    title: "Rhythm & Arrhythmias",
    items: [
      "Atrial fibrillation and flutter detection",
      "Ventricular tachycardia identification",
      "Bradyarrhythmia classification",
      "Premature complex analysis (PAC, PVC)",
      "Pacemaker rhythm recognition",
    ],
  },
  {
    icon: GitBranch,
    title: "Conduction & Intervals",
    items: [
      "Bundle branch block detection (RBBB, LBBB)",
      "QT/QTc interval measurement and analysis",
      "PR interval and AV block classification",
      "QRS duration assessment",
      "Intraventricular conduction delays",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Ischaemia & Infarction",
    items: [
      "STEMI screening with age/sex criteria",
      "NSTEMI indicator detection",
      "Infarct territory localisation",
      "Old MI and scar pattern recognition",
      "Serial comparison for evolving changes",
    ],
  },
  {
    icon: Maximize,
    title: "Structural Abnormalities",
    items: [
      "Left and right ventricular hypertrophy",
      "Atrial enlargement patterns",
      "Early repolarisation and J-waves",
      "Long QT syndrome screening",
      "Electrode misplacement detection",
    ],
  },
];

const keyFeatures = [
  {
    icon: Baby,
    title: "Neonates to Adults",
    description: "The only ECG program based on normal limits derived using the algorithm itself, applicable from birth through adulthood with age-appropriate criteria.",
  },
  {
    icon: Users,
    title: "Demographic Factors",
    description: "Incorporates age, sex, and race into diagnostic criteria, recognising that ECG appearances vary significantly across populations.",
  },
  {
    icon: Pill,
    title: "Clinical Context",
    description: "Optional integration of medication history and clinical diagnosis to enhance interpretation accuracy.",
  },
  {
    icon: Globe,
    title: "15+ Languages",
    description: "Diagnostic statements available in major European languages plus Chinese, Russian, and Japanese.",
  },
];

export default function AlgorithmPage() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan mb-4">
              The Core Technology
            </span>
            <h1 className="text-4xl font-bold text-text sm:text-5xl lg:text-6xl tracking-tight">
              The Glasgow ECG<br />Analysis Program
            </h1>
            <p className="mt-6 text-xl text-text-muted">
              Pioneering computerised ECG interpretation since 1964, the Glasgow Program
              delivers reliable, clinically validated diagnoses used in over 20 million
              ECG interpretations annually worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Request Technical Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/solutions/oem">
                <Button variant="secondary" size="lg">
                  Licensing Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              How the Algorithm Works
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              The Glasgow Program employs a sophisticated rule-based approach, applying
              mathematical equations to raw ECG waveform data while considering patient
              demographics and clinical context.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-navy-light/30 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10 text-cyan mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Signal Acquisition</h3>
              <p className="text-sm text-text-muted">
                Analyses 3 to 15 simultaneously recorded leads, with support for standard
                12-lead, extended 15-lead, and reduced lead configurations. Identifies and
                flags potential electrode misplacement.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-navy-light/30 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10 text-cyan mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Waveform Analysis</h3>
              <p className="text-sm text-text-muted">
                Measures intervals (PR, QRS, QT/QTc), amplitudes, and morphological features.
                Applies age/sex/race-specific normal limits derived from extensive population databases.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-navy-light/30 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10 text-cyan mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Interpretation</h3>
              <p className="text-sm text-text-muted">
                Generates diagnostic statements with optional extended reasoning. Provides
                automatic Minnesota coding for epidemiological standardisation. Supports
                serial comparison across multiple ECGs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Capabilities */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              Diagnostic Capabilities
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Comprehensive coverage of cardiac abnormalities, from common arrhythmias
              to complex structural conditions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((category) => (
              <div
                key={category.title}
                className="rounded-lg border border-white/10 bg-navy-light/30 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan/10 text-cyan">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-text">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                      <CheckCircle className="h-4 w-4 text-cyan mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              What Sets Glasgow Apart
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Unlike competing algorithms that rely primarily on age and gender, the Glasgow
              Program incorporates multiple clinically significant variables for more accurate
              interpretations across diverse patient populations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-white/10 bg-navy-light/30 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan/10 text-cyan mb-4">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{feature.title}</h3>
                <p className="text-sm text-text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              50+ Years of Development
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              From pioneering research in 1964 to worldwide deployment today, the Glasgow
              Program has evolved continuously to meet clinical needs.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-cyan/20 lg:left-1/2 lg:-translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex gap-6 lg:gap-12 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 w-3 h-3 rounded-full bg-cyan mt-1.5" />

                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <span className="text-sm font-medium text-cyan">{item.year}</span>
                    <h3 className="text-lg font-semibold text-text mt-1">{item.title}</h3>
                    <p className="text-sm text-text-muted mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text sm:text-4xl">
                Standards & Certifications
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                The Glasgow Program meets international standards for medical device safety
                and quality management, ensuring reliable deployment across regulatory jurisdictions.
              </p>

              <div className="mt-8 space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-start gap-4 rounded-lg border border-white/10 bg-navy-light/30 p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-cyan mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text">{cert.name}</h4>
                      <p className="text-sm text-text-muted">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-navy-light/30 p-8">
              <h3 className="text-xl font-semibold text-text mb-4">Minnesota Coding</h3>
              <p className="text-text-muted mb-6">
                The Glasgow Program provides automatic centralised Minnesota coding — the
                internationally agreed standard for epidemiological studies and clinical trials.
                This ensures consistent, reproducible coding across research sites.
              </p>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan" />
                  Standardised epidemiological classification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan" />
                  Serial comparison capability
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-cyan" />
                  Clinical trial support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="section-container">
          <div className="rounded-2xl border border-cyan/20 bg-gradient-to-br from-navy-light to-navy p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              Integrate Glasgow into Your Platform
            </h2>
            <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
              Non-exclusive licensing available for OEMs, healthcare providers, and research institutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Contact Licensing Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="secondary" size="lg">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
