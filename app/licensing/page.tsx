import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Licensing",
  description: "License the Glasgow ECG Program for your medical devices, healthcare systems, or research applications.",
};

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-navy pt-24 lg:pt-32">
      <div className="section-container py-12">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Licensing
        </h1>
        <p className="mt-4 text-lg text-text-muted max-w-2xl">
          Partner with the University of Glasgow to license the Glasgow ECG Program
          for your products and applications.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "OEM License",
              description: "For medical device manufacturers seeking to embed ECG interpretation in their products.",
              features: ["Device integration support", "Technical documentation", "Regulatory guidance"],
            },
            {
              title: "Enterprise License",
              description: "For healthcare organizations deploying at scale across hospitals and clinics.",
              features: ["Multi-site deployment", "EHR integration", "Training and support"],
            },
            {
              title: "Research License",
              description: "For academic institutions and research organizations conducting cardiac studies.",
              features: ["Academic pricing", "Dataset analysis", "Publication support"],
            },
          ].map((license) => (
            <div
              key={license.title}
              className="rounded-lg border border-white/10 bg-navy-light/30 p-6"
            >
              <h2 className="text-xl font-semibold text-text">{license.title}</h2>
              <p className="mt-2 text-sm text-text-muted">{license.description}</p>
              <ul className="mt-4 space-y-2">
                {license.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-text-muted">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/contact">
            <Button size="lg">Contact Licensing Team</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
