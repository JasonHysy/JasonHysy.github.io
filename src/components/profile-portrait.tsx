import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/data/portfolio";

const FLOW = ["Perception", "Reasoning", "Systems", "Product"];

/** Human-centered hero visual built around Jason's supplied professional portrait. */
export function ProfilePortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[32rem] lg:ml-auto">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_35%,rgba(85,119,255,0.18),transparent_62%)] blur-2xl"
      />

      <div className="panel relative overflow-hidden rounded-[1.75rem] shadow-[0_26px_80px_rgba(11,17,26,0.12)] dark:shadow-[0_26px_80px_rgba(0,0,0,0.32)]">
        <div className="relative aspect-[1/1.06] overflow-hidden bg-paper-deep dark:bg-navy-deep">
          <Image
            src={siteConfig.profileImage}
            alt="Professional portrait of Yisiyuan (Jason) Huang"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover object-[center_28%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy/95 via-navy/45 to-transparent"
          />

          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/25 bg-navy/65 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Production AI · Research
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
            <p className="font-serif text-2xl leading-tight sm:text-[1.8rem]">
              Yisiyuan (Jason) Huang
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-white/75">
                Software Engineer · Applied AI
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-mint transition-colors hover:text-white"
              >
                Let&apos;s connect
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <ol className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4 dark:bg-line-dark">
          {FLOW.map((item, index) => (
            <li
              key={item}
              className="bg-white px-3 py-3.5 text-center dark:bg-navy-soft"
            >
              <span className="block font-mono text-[0.6rem] text-accent-strong dark:text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 block text-[0.7rem] font-medium text-ink-soft dark:text-slate-soft">
                {item}
              </span>
            </li>
          ))}
        </ol>
      </div>

    </div>
  );
}
