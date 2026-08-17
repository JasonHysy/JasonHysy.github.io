"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";

interface CountUpProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * Numeric counter that counts up once when scrolled into view.
 *
 * The final value is server-rendered (correct for SEO and no-JS clients) and
 * the animation runs client-side only, driven by a motion value so state
 * updates happen in animation callbacks. Reduced motion renders the final
 * value immediately.
 */
export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const progress = useMotionValue(0);
  // null → show the final value (server render, pre-animation, reduced motion)
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(progress, value, {
      duration: 1.1,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [inView, progress, reduce, value]);

  useMotionValueEvent(progress, "change", (v) => {
    setText(v.toFixed(decimals));
  });

  const shown = text ?? value.toFixed(decimals);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
