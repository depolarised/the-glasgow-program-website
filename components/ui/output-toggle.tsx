"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type OutputMode = "summary" | "clinical" | "json";

interface OutputToggleProps {
  className?: string;
}

const outputContent: Record<OutputMode, { title: string; content: string }> = {
  summary: {
    title: "Summary Output",
    content: `Normal sinus rhythm
Heart rate: 72 bpm
PR interval: 168 ms
QRS duration: 92 ms
QTc interval: 412 ms (Bazett)

No acute ischemic changes
No significant arrhythmia detected`,
  },
  clinical: {
    title: "Clinical Interpretation",
    content: `RHYTHM: Normal sinus rhythm at 72 bpm
INTERVALS: PR 168ms (normal), QRS 92ms (normal), QTc 412ms (normal)
AXIS: Normal axis (45°)
MORPHOLOGY: Normal R-wave progression, no pathological Q waves
ST-T CHANGES: No significant ST elevation or depression
CONDUCTION: No AV block, no bundle branch block

IMPRESSION: Normal ECG
COMPARISON: No prior ECG available for comparison`,
  },
  json: {
    title: "Structured JSON",
    content: `{
  "rhythm": {
    "type": "sinus",
    "rate": 72,
    "regularity": "regular"
  },
  "intervals": {
    "pr_ms": 168,
    "qrs_ms": 92,
    "qtc_ms": 412,
    "qtc_formula": "bazett"
  },
  "axis": {
    "frontal": 45,
    "classification": "normal"
  },
  "findings": [],
  "interpretation": "Normal ECG",
  "confidence": 0.96
}`,
  },
};

export function OutputToggle({ className }: OutputToggleProps) {
  const [mode, setMode] = useState<OutputMode>("summary");

  return (
    <div className={cn("rounded-lg border border-border bg-surface overflow-hidden", className)}>
      {/* Toggle buttons */}
      <div className="flex border-b border-border">
        {(["summary", "clinical", "json"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={cn(
              "flex-1 px-4 py-3 text-sm font-medium transition-colors",
              mode === m
                ? "bg-primary-muted text-primary border-b-2 border-primary"
                : "text-foreground-muted hover:text-foreground hover:bg-surface-hover"
            )}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-sm font-medium text-foreground-muted mb-3">
          {outputContent[mode].title}
        </h4>
        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap leading-relaxed">
          {outputContent[mode].content}
        </pre>
      </div>
    </div>
  );
}
