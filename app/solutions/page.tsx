import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { navigation } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Glasgow ECG solutions for OEMs, healthcare providers, researchers, and AI partners.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-navy pt-24 lg:pt-32">
      <div className="section-container py-12">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Solutions
        </h1>
        <p className="mt-4 text-lg text-text-muted max-w-2xl">
          Whether you&apos;re building medical devices, managing healthcare systems,
          conducting research, or developing AI — Glasgow adapts to your needs.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {navigation.solutions.map((solution) => (
            <Link
              key={solution.href}
              href={solution.href}
              className="group rounded-lg border border-white/10 bg-navy-light/30 p-6 transition-all hover:border-cyan/30 hover:bg-navy-light/50"
            >
              <h2 className="text-xl font-semibold text-text group-hover:text-cyan transition-colors">
                {solution.name}
              </h2>
              <p className="mt-2 text-text-muted">
                {solution.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-cyan">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
