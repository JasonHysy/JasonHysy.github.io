"use client";

import { useState } from "react";
import { CirclePlay } from "lucide-react";

interface DemoScenario {
  id: string;
  label: string;
  goal: string;
  description: string;
  video: string;
  poster: string;
}

/** Accessible scenario switcher for the real VLTNet trajectory recordings. */
export function TrajectoryDemo({ demos }: { demos: readonly DemoScenario[] }) {
  const [activeId, setActiveId] = useState(demos[0]?.id ?? "");
  const active = demos.find((demo) => demo.id === activeId) ?? demos[0];

  if (!active) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white dark:border-line-dark dark:bg-navy-soft">
      <div
        role="tablist"
        aria-label="VLTNet trajectory scenarios"
        className="grid gap-px border-b border-line bg-line sm:grid-cols-3 dark:border-line-dark dark:bg-line-dark"
      >
        {demos.map((demo, index) => {
          const selected = demo.id === active.id;
          return (
            <button
              key={demo.id}
              id={`trajectory-tab-${demo.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`trajectory-panel-${demo.id}`}
              onClick={() => setActiveId(demo.id)}
              className={`flex items-center gap-3 px-4 py-4 text-left transition-colors sm:px-5 ${
                selected
                  ? "bg-navy text-paper dark:bg-paper dark:text-navy"
                  : "bg-white text-ink-soft hover:text-ink dark:bg-navy-soft dark:text-slate-soft dark:hover:text-paper"
              }`}
            >
              <span
                className={`font-mono text-[0.65rem] ${
                  selected ? "text-mint dark:text-accent-strong" : "text-accent-strong dark:text-accent"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium">{demo.label}</span>
            </button>
          );
        })}
      </div>

      <div
        id={`trajectory-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`trajectory-tab-${active.id}`}
        className="grid lg:grid-cols-[minmax(0,1.65fr)_minmax(17rem,0.75fr)]"
      >
        <div className="relative bg-navy-deep p-3 sm:p-5">
          <video
            key={active.video}
            controls
            playsInline
            preload="metadata"
            poster={active.poster}
            className="aspect-video w-full rounded-xl bg-black object-contain shadow-2xl"
          >
            <source src={active.video} type="video/mp4" />
            Your browser does not support embedded MP4 video.
          </video>
        </div>

        <div className="flex flex-col justify-between border-t border-line p-6 lg:border-l lg:border-t-0 dark:border-line-dark">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <CirclePlay className="h-4 w-4 text-accent-strong dark:text-accent" aria-hidden="true" />
              Live trajectory
            </p>
            <h3 className="mt-5 font-serif text-2xl leading-tight">
              {active.goal}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft dark:text-slate-soft">
              {active.description}
            </p>
          </div>
          <p className="mt-8 border-t border-line pt-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-soft dark:border-line-dark dark:text-slate-soft">
            Recorded in the evaluated navigation environment
          </p>
        </div>
      </div>
    </div>
  );
}
