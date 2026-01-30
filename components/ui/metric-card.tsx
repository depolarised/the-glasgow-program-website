"use client";

import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

interface MetricCardProps {
  icon?: string;
  title: string;
  description: string;
  className?: string;
}

export function MetricCard({ icon, title, description, className }: MetricCardProps) {
  const IconComponent = icon
    ? (LucideIcons[icon as keyof typeof LucideIcons] as React.ElementType)
    : null;

  return (
    <div
      className={cn(
        "group flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 transition-all duration-300",
        "hover:border-primary/30 hover:shadow-soft",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {IconComponent && (
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-muted text-primary transition-colors group-hover:bg-primary/20">
            <IconComponent className="h-5 w-5" />
          </div>
        )}
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-foreground-muted leading-relaxed">{description}</p>
    </div>
  );
}
