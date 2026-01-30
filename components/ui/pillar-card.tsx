"use client";

import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

interface PillarCardProps {
  icon: string;
  title: string;
  points: string[];
  className?: string;
}

export function PillarCard({ icon, title, points, className }: PillarCardProps) {
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as React.ElementType;

  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-300",
        "hover:border-primary/20 hover:shadow-soft",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-muted text-primary">
        {IconComponent && <IconComponent className="h-6 w-6" />}
      </div>
      <h3 className="mb-4 text-xl font-semibold text-foreground">{title}</h3>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-foreground-muted">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
