import type { Metadata } from "next";
import { Mail, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { teamMembers } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the University of Glasgow Electrocardiology Section — the researchers behind the Glasgow ECG Program.",
};

function getInitials(name: string) {
  const withoutHonorific = name.replace(/^(Professor|Prof\.?|Dr\.?)\s+/i, "");
  return withoutHonorific
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("");
}

// Team member card component with expandable details
function TeamMemberCard({
  member,
  isLead = false
}: {
  member: typeof teamMembers[0];
  isLead?: boolean;
}) {
  return (
    <div className={`p-6 rounded-lg border border-border bg-surface ${isLead ? 'ring-1 ring-primary/20' : ''}`}>
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className={`${isLead ? 'w-16 h-16' : 'w-12 h-12'} rounded-full bg-primary-muted flex items-center justify-center shrink-0`}>
          <span className={`${isLead ? 'text-xl' : 'text-base'} font-bold text-primary`}>
            {getInitials(member.name)}
          </span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className={`${isLead ? 'text-lg' : 'text-base'} font-semibold text-foreground`}>
            {member.name}
          </h3>
          {member.titles && (
            <p className="text-sm text-primary">{member.titles}</p>
          )}
          {member.role && (
            <p className="text-sm text-foreground-muted">{member.role}</p>
          )}
          {member.secondaryRole && (
            <p className="text-sm text-foreground-muted">{member.secondaryRole}</p>
          )}
        </div>
      </div>

      {/* Bio */}
      <p className="mt-4 text-sm text-foreground-muted leading-relaxed">
        {member.bio}
      </p>

      {/* Email */}
      {member.email && (
        <div className="mt-4 pt-4 border-t border-border">
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Mail className="h-4 w-4" />
            {member.email}
          </a>
        </div>
      )}

      {/* Expandable section placeholder for education/qualifications */}
      <details className="mt-4 group">
        <summary className="flex items-center gap-2 text-sm text-foreground-muted cursor-pointer hover:text-foreground">
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
          Education & Qualifications
        </summary>
        <div className="mt-3 pl-6 text-sm text-foreground-muted">
          <p className="italic">Details to be added</p>
        </div>
      </details>
    </div>
  );
}

export default function TeamPage() {
  const professorMacfarlane = teamMembers[0];
  const otherMembers = teamMembers.slice(1);

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
              has been advancing computerised ECG interpretation for over 50 years.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Researcher */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="section-container">
          <div className="max-w-2xl">
            <TeamMemberCard member={professorMacfarlane} isLead={true} />
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="section-container">
          <SectionHeading
            title="Team Members"
            subtitle="The Electrocardiology Section team."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
