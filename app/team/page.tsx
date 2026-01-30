import type { Metadata } from "next";
import Link from "next/link";
import { Award, BookOpen, Building2, Mail, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";
import { teamMembers, siteConfig, externalResources } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the University of Glasgow Electrocardiology Section — the researchers behind the Glasgow ECG Program.",
};

const achievements = [
  {
    icon: Award,
    title: "CBE for Services to Healthcare",
    description:
      "Commander of the British Empire awarded to Professor Macfarlane in 2014",
  },
  {
    icon: BookOpen,
    title: "237 Publications",
    description:
      "Extensive peer-reviewed research output spanning over 50 years",
  },
  {
    icon: Building2,
    title: "International Influence",
    description:
      "Research adopted into ESC, ACC, and AHA guidelines for acute MI definition",
  },
];

const affiliations = [
  "Royal Society of Edinburgh",
  "International Society of Electrocardiology",
  "Computing in Cardiology",
  "International Society for Computerized Electrocardiology",
];

function getInitials(name: string) {
  const withoutHonorific = name.replace(/^(Professor|Prof\.?|Dr\.?)\s+/i, "");
  return withoutHonorific
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("");
}

export default function TeamPage() {
  const professorMacfarlane = teamMembers[0];

  return (
    <main className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary">
              The Electrocardiology Section
            </span>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Team
            </h1>
            <p className="mt-6 text-xl text-foreground-muted">
              Based at Glasgow Royal Infirmary, the Electrocardiology Section
              has been advancing computerised ECG interpretation since 1964.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Photo placeholder */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] rounded-lg border border-border bg-background flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-primary-muted mx-auto flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">PM</span>
                  </div>
                  <p className="mt-4 text-sm text-foreground-muted">
                    Professor Peter Macfarlane
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground">
                {professorMacfarlane.name}
              </h2>
              {professorMacfarlane.titles ? (
                <p className="text-lg text-primary mt-1">
                  {professorMacfarlane.titles}
                </p>
              ) : null}
              <p className="text-foreground-muted">{professorMacfarlane.role}</p>

              <p className="mt-6 text-foreground-muted leading-relaxed">
                {professorMacfarlane.bio}
              </p>

              {professorMacfarlane.achievements?.length ? (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Honours & Recognition
                  </h3>
                  <ul className="space-y-2">
                    {professorMacfarlane.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-foreground-muted"
                      >
                        <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {professorMacfarlane.research?.length ? (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Research Interests
                  </h3>
                  <ul className="space-y-2">
                    {professorMacfarlane.research.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-foreground-muted"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {professorMacfarlane.email ? (
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href={`mailto:${professorMacfarlane.email}`}
                      className="text-primary hover:underline"
                    >
                      {professorMacfarlane.email}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="Team Members"
            subtitle="The Electrocardiology Section team."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.slice(1).map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-lg border border-border bg-surface"
              >
                <div className="w-16 h-16 rounded-full bg-primary-muted flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">
                    {getInitials(member.name)}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                {member.titles ? (
                  <p className="text-sm text-primary">{member.titles}</p>
                ) : null}
                <p className="text-sm text-primary">{member.role}</p>
                {member.secondaryRole ? (
                  <p className="text-sm text-primary">{member.secondaryRole}</p>
                ) : null}
                <p className="mt-3 text-sm text-foreground-muted">
                  {member.bio}
                </p>
                {member.email ? (
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-3 inline-block text-sm text-primary hover:underline"
                  >
                    {member.email}
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <SectionHeading
            title="Recognition & Impact"
            subtitle="The Section's contributions to electrocardiology have been recognised internationally."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="p-6 rounded-lg border border-border bg-background text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-muted text-primary mx-auto mb-4">
                  <achievement.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Professional Affiliations
              </h2>
              <p className="mt-4 text-foreground-muted">
                The Electrocardiology Section maintains connections with
                international cardiology and electrocardiology organisations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {affiliations.map((affiliation) => (
                <div
                  key={affiliation}
                  className="rounded-lg border border-border bg-surface p-4"
                >
                  <p className="text-sm font-medium text-foreground">
                    {affiliation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="p-8 lg:p-12 rounded-lg border border-primary/20 bg-primary-muted">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Our Location
                </h2>
                <p className="mt-4 text-foreground-muted">
                  The Electrocardiology Section is located within Glasgow Royal
                  Infirmary, one of Scotland&apos;s major teaching hospitals.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <address className="not-italic text-foreground-muted">
                      <span className="font-medium text-foreground">
                        Electrocardiology Section
                      </span>
                      <br />
                      {siteConfig.address.building}
                      <br />
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city} {siteConfig.address.postcode}
                      <br />
                      {siteConfig.address.country}
                    </address>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/contact">
                    <Button>
                      Contact the Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Part of the University of Glasgow
                </h3>
                <p className="text-sm text-foreground-muted mb-4">
                  {siteConfig.department}, {siteConfig.school}
                </p>
                <div className="space-y-2">
                  <a
                    href={siteConfig.links.robertsonCentre}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Robertson Centre for Biostatistics
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href={siteConfig.links.schoolOfHealth}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    School of Health & Wellbeing
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
