"use client";

import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { ArchitectureFlow, FlowNode } from "@/data/portfolio";

interface ArchitectureDiagramProps {
  flow: ArchitectureFlow;
  className?: string;
  /** Smaller rows for cards — captions and tags hidden. */
  compact?: boolean;
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

/**
 * Vertical system-flow diagram: numbered stages connected by a ruled line,
 * with an optional "support systems" column on wide screens. Stages reveal
 * sequentially when scrolled into view; static when reduced motion is set.
 */
export function ArchitectureDiagram({
  flow,
  className = "",
  compact = false,
}: ArchitectureDiagramProps) {
  const reduce = useReducedMotion();
  const hasSupport = (flow.support?.length ?? 0) > 0;

  return (
    <div className={`panel overflow-hidden rounded-xl ${className}`}>
      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 md:px-5 dark:border-line-dark">
        <p className="eyebrow truncate">Flow — {flow.title}</p>
        <p className="eyebrow hidden shrink-0 sm:block">
          {String(flow.nodes.length).padStart(2, "0")} stages
        </p>
      </div>

      <div
        className={
          hasSupport
            ? "lg:grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
            : ""
        }
      >
        {reduce ? (
          <ol className="px-4 py-5 md:px-6">
            {flow.nodes.map((node, i) => (
              <NodeRow
                key={node.label}
                node={node}
                index={i + 1}
                total={flow.nodes.length}
                compact={compact}
              />
            ))}
          </ol>
        ) : (
          <motion.ol
            className="px-4 py-5 md:px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {flow.nodes.map((node, i) => (
              <motion.li key={node.label} variants={itemVariants}>
                <NodeRow
                  node={node}
                  index={i + 1}
                  total={flow.nodes.length}
                  compact={compact}
                />
              </motion.li>
            ))}
          </motion.ol>
        )}

        {hasSupport && flow.support ? (
          <aside className="border-t border-line px-4 py-5 md:px-6 lg:border-l lg:border-t-0 dark:border-line-dark">
            <p className="eyebrow mb-4">Support systems</p>
            <ul className="space-y-4">
              {flow.support.map((item) => (
                <li key={item.label} className="relative pl-5">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[0.62rem] h-px w-3 border-t border-dashed border-accent dark:border-mint"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[0.52rem] h-1.5 w-1.5 rounded-full bg-accent dark:bg-mint"
                  />
                  <p className="text-sm font-medium">{item.label}</p>
                  {item.caption && !compact ? (
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft dark:text-slate-soft">
                      {item.caption}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
    </div>
  );
}

function NodeRow({
  node,
  index,
  total,
  compact,
}: {
  node: FlowNode;
  index: number;
  total: number;
  compact: boolean;
}) {
  const isLast = index === total;

  return (
    <div className="relative flex gap-4">
      <div className="flex shrink-0 flex-col items-center">
        <span className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-paper font-mono text-[0.7rem] font-medium text-accent-strong dark:border-line-dark dark:bg-navy dark:text-accent">
          {String(index).padStart(2, "0")}
        </span>
        {!isLast ? (
          <>
            <span
              aria-hidden="true"
              className="mt-1 h-5 w-px bg-line dark:bg-line-dark"
            />
            <ChevronDown
              aria-hidden="true"
              className="-mt-[0.15rem] h-3.5 w-3.5 text-accent dark:text-mint"
            />
          </>
        ) : null}
      </div>
      <div className={isLast ? "" : "pb-5"}>
        <p className="text-sm font-semibold md:text-[0.95rem]">{node.label}</p>
        {node.caption && !compact ? (
          <p className="mt-1 max-w-md text-xs leading-relaxed text-ink-soft md:text-[0.8rem] dark:text-slate-soft">
            {node.caption}
          </p>
        ) : null}
        {node.tags && !compact ? (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {node.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
