"use client";

import { useEffect, useRef, useCallback } from "react";

interface ECGAnimationProps {
  className?: string;
}

export function ECGAnimation({ className }: ECGAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const offsetRef = useRef(0);
  const prefersReducedMotion = useRef(false);

  // ECG waveform generator - creates realistic PQRST complex
  const generateECGPoint = useCallback((x: number, width: number): number => {
    const cycleWidth = 200; // Width of one heartbeat cycle in pixels
    const position = ((x + offsetRef.current) % cycleWidth) / cycleWidth;

    // Baseline
    let y = 0;

    // P wave (small bump before QRS)
    if (position >= 0.1 && position < 0.2) {
      const t = (position - 0.1) / 0.1;
      y = Math.sin(t * Math.PI) * 0.15;
    }
    // Q wave (small dip)
    else if (position >= 0.25 && position < 0.3) {
      const t = (position - 0.25) / 0.05;
      y = -Math.sin(t * Math.PI) * 0.1;
    }
    // R wave (tall spike up)
    else if (position >= 0.3 && position < 0.35) {
      const t = (position - 0.3) / 0.05;
      y = Math.sin(t * Math.PI) * 1;
    }
    // S wave (dip below baseline)
    else if (position >= 0.35 && position < 0.4) {
      const t = (position - 0.35) / 0.05;
      y = -Math.sin(t * Math.PI) * 0.25;
    }
    // T wave (rounded bump)
    else if (position >= 0.5 && position < 0.7) {
      const t = (position - 0.5) / 0.2;
      y = Math.sin(t * Math.PI) * 0.3;
    }

    return y;
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mediaQuery.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };

    mediaQuery.addEventListener("change", handleChange);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set up canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Get theme color from CSS variables
    const getECGColor = () => {
      const styles = getComputedStyle(document.documentElement);
      return styles.getPropertyValue('--color-ecg-line').trim() || '#1E3A5F';
    };

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerY = height / 2;
      const amplitude = height * 0.3;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Get current theme color
      const ecgColor = getECGColor();

      // Draw ECG line
      ctx.beginPath();
      ctx.strokeStyle = ecgColor;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Add glow effect
      ctx.shadowColor = ecgColor;
      ctx.shadowBlur = 10;

      for (let x = 0; x < width; x++) {
        const y = centerY - generateECGPoint(x, width) * amplitude;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();

      // Update offset for animation (only if motion is allowed)
      if (!prefersReducedMotion.current) {
        offsetRef.current += 1.5;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      mediaQuery.removeEventListener("change", handleChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [generateECGPoint]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
