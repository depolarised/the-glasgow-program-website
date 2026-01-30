"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title?: string;
  subtitle?: string;
  headline?: string;
  subheadline?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  headline,
  subheadline,
  badge,
  align = "center",
  className,
}: SectionHeadingProps) {
  const resolvedTitle = title ?? headline;
  const resolvedSubtitle = subtitle ?? subheadline;

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary-muted px-3 py-1 text-xs font-medium text-primary mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl tracking-tight">
        {resolvedTitle}
      </h2>
      {resolvedSubtitle && (
        <p className="mt-4 text-lg text-foreground-muted sm:text-xl">
          {resolvedSubtitle}
        </p>
      )}
    </div>
  );
}
