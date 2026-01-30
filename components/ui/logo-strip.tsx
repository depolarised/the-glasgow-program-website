"use client";

import { cn } from "@/lib/utils";

interface Partner {
  name: string;
  logo: string;
}

interface LogoStripProps {
  partners: Partner[];
  caption?: string;
  className?: string;
}

export function LogoStrip({ partners, caption, className }: LogoStripProps) {
  return (
    <div className={cn("w-full", className)}>
      {caption && (
        <p className="mb-6 text-center text-sm text-foreground-muted">
          {caption}
        </p>
      )}
      <div className="flex items-center justify-center gap-8 overflow-x-auto scrollbar-hide sm:gap-12 lg:gap-16">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex h-8 flex-shrink-0 items-center justify-center opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:h-10"
          >
            {/* Placeholder for partner logos - replace with actual Image components */}
            <div className="flex h-full items-center justify-center px-4 text-sm font-medium text-foreground-muted">
              {partner.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
