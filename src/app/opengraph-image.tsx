import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/portfolio";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.headline}`;

/**
 * Social sharing image generated at build time. Uses locally installed
 * fonts only — no external requests.
 */
export default async function OpengraphImage() {
  const serif = readFileSync(
    join(
      process.cwd(),
      "node_modules/@fontsource/newsreader/files/newsreader-latin-600-normal.woff"
    )
  );
  // satori (the OG renderer) supports TTF/OTF/WOFF but not WOFF2, so the
  // static @fontsource/inter package (WOFF) is used here instead of the
  // variable font used by the site itself.
  const sans = readFileSync(
    join(
      process.cwd(),
      "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff"
    )
  );

  const stages = [
    "Input",
    "Perception / OCR",
    "AI Reasoning",
    "Backend Systems",
    "Production Product",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0B111A",
          color: "#F5F3EE",
          fontFamily: "Inter Variable",
          position: "relative",
        }}
      >
        {/* hairline grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            opacity: 0.5,
          }}
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                height: 1,
                background: "rgba(245,243,238,0.07)",
              }}
            />
          ))}
        </div>

        {/* left: identity */}
        <div
          style={{
            position: "absolute",
            left: 72,
            top: 64,
            width: 640,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: "#5577FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Newsreader",
                fontSize: 26,
                fontWeight: 600,
                color: "#FFFFFF",
              }}
            >
              JH
            </div>
            <div
              style={{
                fontSize: 18,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#A9B4C6",
              }}
            >
              Software Engineering · Applied AI
            </div>
          </div>
          <div
            style={{
              marginTop: 44,
              fontFamily: "Newsreader",
              fontSize: 68,
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            Jason Huang
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 30,
              color: "#A9B4C6",
            }}
          >
            Software Engineer &amp; Applied AI Builder
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {["OCR", "LLM Workflows", "Backend", "Billing", "Reliability", "Deployment"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    border: "1px solid rgba(245,243,238,0.22)",
                    borderRadius: 8,
                    padding: "8px 14px",
                    fontSize: 17,
                    color: "#F5F3EE",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
          <div
            style={{
              marginTop: 48,
              fontSize: 17,
              color: "#63D7C3",
            }}
          >
            Production AI · Public research · Inspectable code
          </div>
        </div>

        {/* right: end-to-end flow */}
        <div
          style={{
            position: "absolute",
            right: 72,
            top: 70,
            bottom: 70,
            width: 330,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 0,
          }}
        >
          {stages.map((stage, i) => (
            <div key={stage} style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    border: "1px solid rgba(85,119,255,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    color: "#5577FF",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ fontSize: 19, color: "#F5F3EE" }}>{stage}</div>
              </div>
              {i < stages.length - 1 ? (
                <div
                  style={{
                    width: 1,
                    height: 26,
                    marginLeft: 17,
                    background: "rgba(85,119,255,0.45)",
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
      fonts: [
        { name: "Newsreader", data: serif, style: "normal", weight: 600 },
        { name: "Inter Variable", data: sans, style: "normal", weight: 400 },
      ],
    }
  );
}
