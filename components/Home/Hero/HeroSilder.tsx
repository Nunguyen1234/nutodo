"use client";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function WavyText({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;
      const { chars } = splitText(
        containerRef.current.querySelector(".wavy")!
      );
      containerRef.current.style.visibility = "visible";
      const staggerDelay = 0.15;
      animate(
        chars,
        { y: [-20, 20] },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 2,
          delay: stagger(
            staggerDelay,
            { startDelay: -staggerDelay * chars.length }
          ),
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} style={{ visibility: "hidden" }}>
      <span className="wavy">{children}</span>
      <style>{`
        .split-char {
          will-change: transform, opacity;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}