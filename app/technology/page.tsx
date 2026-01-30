import { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  Database,
  FileText,
  Globe,
  Shield,
  Layers,
  ArrowRight,
  CheckCircle,
  Server,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui";
import { languages, certifications } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Technology",
  description: "Technical architecture of the Glasgow ECG Program — from signal processing to output formats, designed for seamless integration.",
};

const technicalFeatures = [
  {
    icon: Cpu,
    title: "Signal Processing",
    description: "Advanced digital signal processing for noise reduction, baseline wander correction, and high-fidelity waveform analysis.",
  },
  {
    icon: Database,
    title: "Reference Databases",
    description: "Extensive population databases including 1,750+ pediatric recordings and ethnicity-specific reference values.",
  },
  {
    icon: Layers,
    title: "Multi-Lead Analysis",
    description: "Supports 3 to 15 simultaneously recorded leads, including standard 12-lead, XYZ leads, and reduced configurations.",
  },
  {
    icon: FileText,
    title: "Flexible Output",
    description: "Short diagnostic statements, extended reasoning, or structured data formats for system integration.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Automatic detection of electrode misplacement, poor signal quality, and other technical artifacts.",
  },
  {
    icon: Globe,
    title: "Localisation",
    description: "Diagnostic statements available in 15+ languages with culturally appropriate medical terminology.",
  },
];

const integrationOptions = [
  {
    title: "Embedded Systems",
    description: "Lightweight footprint optimised for embedded deployment in ECG machines, patient monitors, and portable devices.",
    features: [
      "Minimal memory requirements",
      "Real-time processing capability",
      "Cross-platform compatibility",
      "Hardware-agnostic design",
    ],
  },
  {
    title: "Server Deployment",
    description: "Scalable server-based deployment for hospital information systems and cloud-based ECG management platforms.",
    features: [
      "High-throughput processing",
      "RESTful API integration",
      "Batch processing support",
      "HL7/FHIR compatibility",
    ],
  },
  {
    title: "Research Platforms",
    description: "Specialised configurations for clinical trials and epidemiological studies with enhanced data export capabilities.",
    features: [
      "Minnesota coding output",
      "Serial comparison reports",
      "Bulk analysis workflows",
      "Custom parameter extraction",
    ],
  },
];

const outputFormats = [
  {
    name: "Diagnostic Statements",
    description: "Human-readable interpretation suitable for clinical reports",
    example: `Sinus rhythm
Rate: 72 bpm
Normal ECG`,
  },
  {
    name: "Extended Interpretation",
    description: "Detailed reasoning with supporting measurements",
    example: `Rhythm: Sinus rhythm at 72 bpm
PR interval: 168 ms (normal)
QRS duration: 92 ms (normal)
QTc: 412 ms (Bazett, normal)
Axis: Normal (+45°)
Interpretation: Normal ECG`,
  },
  {
    name: "Structured Data",
    description: "Machine-readable format for system integration",
    example: `{
  "rhythm": "sinus",
  "rate_bpm": 72,
  "intervals": {
    "pr_ms": 168,
    "qrs_ms": 92,
    "qtc_ms": 412
  },
  "interpretation": "Normal ECG"
}`,
  },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan mb-4">
              Technical Architecture
            </span>
            <h1 className="text-4xl font-bold text-text sm:text-5xl lg:text-6xl tracking-tight">
              Built for Integration
            </h1>
            <p className="mt-6 text-xl text-text-muted">
              From embedded devices to enterprise systems, the Glasgow Program is designed
              for seamless deployment across diverse technical environments.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              Core Capabilities
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              The Glasgow Program combines sophisticated signal processing with extensive
              clinical databases to deliver accurate, reproducible interpretations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technicalFeatures.map((feature) => (
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

      {/* Integration Options */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              Deployment Options
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Flexible architecture supports deployment scenarios from single-device
              embedding to enterprise-scale infrastructure.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {integrationOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-lg border border-white/10 bg-navy-light/30 p-6"
              >
                <h3 className="text-xl font-semibold text-text mb-3">{option.title}</h3>
                <p className="text-sm text-text-muted mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                      <CheckCircle className="h-4 w-4 text-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Output Formats */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              Output Formats
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              From human-readable reports to machine-processable data structures,
              choose the output format that fits your workflow.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {outputFormats.map((format) => (
              <div
                key={format.name}
                className="rounded-lg border border-white/10 bg-navy-light/30 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text mb-2">{format.name}</h3>
                  <p className="text-sm text-text-muted">{format.description}</p>
                </div>
                <div className="border-t border-white/10 bg-navy/50 p-4">
                  <pre className="font-mono text-xs text-cyan whitespace-pre-wrap">
                    {format.example}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text sm:text-4xl">
                Global Language Support
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                Diagnostic statements are available in 15+ languages, enabling deployment
                across international markets with culturally appropriate medical terminology.
              </p>
              <p className="mt-4 text-text-muted">
                Each language translation is developed with input from native-speaking
                cardiologists to ensure clinical accuracy and appropriate medical terminology.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-navy-light/30 p-6">
              <div className="grid grid-cols-2 gap-3">
                {languages.map((language) => (
                  <div
                    key={language}
                    className="flex items-center gap-2 text-sm text-text-muted"
                  >
                    <Globe className="h-4 w-4 text-cyan flex-shrink-0" />
                    <span>{language}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              Standards Compliance
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              The Glasgow Program meets international standards for medical device safety
              and quality management.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-lg border border-white/10 bg-navy-light/30 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan/10 text-cyan mb-4">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{cert.name}</h3>
                <p className="text-sm text-text-muted">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="section-container">
          <div className="rounded-2xl border border-cyan/20 bg-gradient-to-br from-navy-light to-navy p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-text sm:text-4xl">
                  Technical Documentation
                </h2>
                <p className="mt-4 text-lg text-text-muted">
                  Comprehensive technical documentation, integration guides, and API
                  references available for licensed partners.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button size="lg">
                      Request Documentation
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

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-navy/50 p-4">
                  <Server className="h-5 w-5 text-cyan mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-text">Integration Guides</h4>
                    <p className="text-sm text-text-muted">Step-by-step integration documentation for all deployment scenarios</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-navy/50 p-4">
                  <Code className="h-5 w-5 text-cyan mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-text">API Reference</h4>
                    <p className="text-sm text-text-muted">Complete API documentation with code examples</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-navy/50 p-4">
                  <FileText className="h-5 w-5 text-cyan mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-text">Technical Specifications</h4>
                    <p className="text-sm text-text-muted">Detailed specifications for regulatory submissions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
