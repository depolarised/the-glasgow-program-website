"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface UseCaseCardProps {
  category: string;
  headline: string;
  description: string;
  href: string;
  className?: string;
}

export function UseCaseCard({
  category,
  headline,
  description,
  href,
  className,
}: UseCaseCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-300",
        "hover:border-primary/30 hover:shadow-soft",
        "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-primary/0 before:via-primary/5 before:to-primary/0 before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        className
      )}
    >
      <span className="relative z-10 mb-2 text-xs font-medium uppercase tracking-wider text-primary">
        {category}
      </span>
      <h3 className="relative z-10 mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        {headline}
      </h3>
      <p className="relative z-10 mb-4 flex-grow text-sm text-foreground-muted">
        {description}
      </p>
      <div className="relative z-10 flex items-center text-sm font-medium text-primary">
        <span>Learn more</span>
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
