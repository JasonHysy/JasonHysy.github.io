/**
 * Central portfolio content.
 *
 * Every user-facing string on the site lives here so pages stay maintainable
 * and nothing is hard-coded in components. Anything marked `TODO` must be
 * confirmed before it is made public — see CONTENT_TODO.md.
 */

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface NavItem {
  label: string;
  href: string;
  /** Whether the item is shown only when a condition is met (e.g. resume). */
  conditional?: boolean;
}

export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProofItem {
  label: string;
  title: string;
  context: string;
  signal: string;
  signalNote: string;
  href?: string;
}

export interface FlowNode {
  label: string;
  caption?: string;
  tags?: string[];
}

export interface SupportItem {
  label: string;
  caption?: string;
}

export interface ArchitectureFlow {
  id: string;
  title: string;
  nodes: FlowNode[];
  support?: SupportItem[];
  note?: string;
}

export interface ExperienceEntry {
  org: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tech?: string[];
}

export interface CapabilityBlock {
  index: string;
  title: string;
  description: string;
  items: string[];
}

export type Block =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; heading?: string; items: string[] }
  | { type: "quote"; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    }
  | { type: "architecture"; flow: ArchitectureFlow; caption?: string };

export interface CaseStudySection {
  id: string;
  heading: string;
  blocks: Block[];
}

export interface CaseStudy {
  slug: string;
  name: string;
  shortName?: string;
  eyebrow: string;
  title: string;
  role: string;
  dates: string;
  location?: string;
  intro: string;
  metaDescription: string;
  tags: string[];
  links: LinkItem[];
  publicNote?: string;
  result?: string;
  sections: CaseStudySection[];
}

/* ------------------------------------------------------------------ */
/* Site configuration                                                  */
/* ------------------------------------------------------------------ */

export const siteConfig = {
  name: "Yisiyuan (Jason) Huang",
  shortName: "Jason Huang",
  initials: "JH",
  headline: "Software Engineer & Applied AI Builder",
  eyebrow: "Software Engineering · Applied AI",
  location: "Quincy, Massachusetts",
  email: "yh3595@nyu.edu",
  profileImage: "/profile/jason-huang.jpg",

  /**
   * TODO: confirm the final production domain before launch. This is the
   * GitHub Pages URL matching the repository name and is used for canonicals,
   * sitemap, robots, and Open Graph URLs.
   */
  siteUrl: "https://jasonhysy.github.io",

  homeTitle: "Jason Huang — Software Engineer & Applied AI Builder",
  homeDescription:
    "Yisiyuan (Jason) Huang builds production AI products across OCR, LLM workflows, backend infrastructure, billing, reliability, computer vision, and deployment.",

  links: {
    prismaSub: "https://prismasub.com",
    visionAssistDemo: "https://jasonhysy.github.io/vision-assist-demo/",
    vltNet: "https://vlt-lzson.github.io/",
    githubRag: "https://github.com/JasonHysy/multimodal-video-qa-rag",
    /** TODO_LINKEDIN_URL — not confirmed; keep `null` and the UI stays hidden. */
    linkedin: null as string | null,
    /** TODO_GITHUB_PROFILE_URL — not confirmed; keep `null` and the UI stays hidden. */
    githubProfile: null as string | null,
  },

  /**
   * Resume PDF. Drop the file at `public/resume/jason-huang-resume.pdf` and
   * set this to "/resume/jason-huang-resume.pdf" to make the button appear.
   * Keep `null` when no PDF exists — the button is hidden automatically.
   */
  resumeUrl: null as string | null,
} as const;

export const navItems: NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

/* ------------------------------------------------------------------ */
/* Home — hero                                                         */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Software Engineering · Applied AI",
  titleLead: "I build AI-powered products",
  titleAccent: "end to end.",
  subtitle:
    "From OCR and LLM workflows to backend APIs, billing, reliability, and production deployment.",
  description:
    "I’m Yisiyuan (Jason) Huang, a software engineer with an ML background. I turn AI capabilities into complete products that people can actually use.",
  ctas: [
    { label: "View selected work", href: "/#work", kind: "primary" },
    { label: "Email me", href: "mailto:yh3595@nyu.edu", kind: "secondary" },
  ] as { label: string; href: string; kind: "primary" | "secondary" }[],
  diagram: {
    title: "What I own end to end",
    nodes: [
      { label: "Input", caption: "Screen · video · user intent" },
      {
        label: "Perception / OCR",
        caption: "Extracting text and structure from the real world",
        tags: ["OCR", "Multimodal AI"],
      },
      {
        label: "AI Reasoning",
        caption: "Models that decide, translate, and ground answers",
        tags: ["LLM Routing", "Multimodal AI"],
      },
      {
        label: "Backend Systems",
        caption: "APIs, data, auth, billing, and safeguards",
        tags: ["APIs", "PostgreSQL", "Billing", "Observability"],
      },
      {
        label: "Production Product",
        caption: "Deployed, measured, and running for real users",
      },
    ],
  } as ArchitectureFlow,
};

/* ------------------------------------------------------------------ */
/* Home — proof strip                                                  */
/* ------------------------------------------------------------------ */

export const proofStrip = {
  eyebrow: "Proof of work",
  heading: "Built where claims get tested.",
  description:
    "A live product, peer-reviewed research, and a production data pipeline — work shaped by users, reviewers, and operating constraints.",
  items: [
    {
      label: "Production product",
      title: "PrismaSub",
      context:
        "A Windows product carrying OCR, LLM translation, authentication, billing, and reliability into one user-facing workflow.",
      signal: "Live product",
      signalNote: "Built and operated end to end",
      href: "/work/prismasub",
    },
    {
      label: "Published research",
      title: "VLTNet",
      context:
        "Peer-reviewed zero-shot object navigation research, evaluated against a reported benchmark baseline.",
      signal: "ICPR 2024",
      signalNote: "+33.7% reported improvement",
      href: "/work/vltnet",
    },
    {
      label: "Applied ML systems",
      title: "Presskit AI",
      context:
        "A daily ingestion and retrieval pipeline grounding AI responses in recently published news content.",
      signal: "200+ sources",
      signalNote: "Processed every day",
    },
  ] as ProofItem[],
};

/* ------------------------------------------------------------------ */
/* Home — selected work                                                */
/* ------------------------------------------------------------------ */

export const selectedWork = {
  eyebrow: "Selected Work",
  title: "Selected Work",
  description:
    "Production systems, on-device perception, inspectable code, and experimentally validated AI research.",
};

/* ------------------------------------------------------------------ */
/* Case studies                                                        */
/* ------------------------------------------------------------------ */

export const caseStudies: CaseStudy[] = [
  {
    slug: "prismasub",
    name: "PrismaSub",
    eyebrow: "Production AI SaaS · Featured",
    title: "Real-time AI subtitle translation for Windows",
    role: "Founder & Software Engineer",
    dates: "April 2026 — Present",
    location: "Quincy, MA",
    intro:
      "PrismaSub captures on-screen subtitles, extracts text through OCR, translates it through cloud LLM workflows, and renders bilingual subtitles back to the user in near real time.",
    metaDescription:
      "How PrismaSub turns Windows OCR and cloud LLM workflows into a real-time bilingual subtitle translation product: architecture, reliability, billing, and latency measurement.",
    tags: [
      "React",
      "TypeScript",
      "Cloudflare Workers",
      "Supabase",
      "PostgreSQL",
      "OAuth",
      "Stripe",
      "Windows OCR",
      "LLM APIs",
      "Observability",
    ],
    links: [
      { label: "Visit product", href: "https://prismasub.com", external: true },
      { label: "Read case study", href: "/work/prismasub" },
    ],
    publicNote: "Active production product. Source code remains private.",
    sections: [
      {
        id: "overview",
        heading: "Project overview",
        blocks: [
          {
            type: "paragraph",
            text: "PrismaSub is a Windows desktop application that translates subtitles as they appear on screen. It captures the screen, extracts subtitle text with Windows OCR, translates it through cloud LLM workflows, and renders the original line with a translation beneath it — in near real time.",
          },
          {
            type: "paragraph",
            text: "I built PrismaSub as its founder and software engineer, owning the desktop client, the cloud backend, authentication, billing, usage management, and reliability. It is an active production product; the source code remains private.",
          },
          {
            type: "quote",
            text: "The central engineering challenge was not simply generating a translation. It was making a continuous OCR-to-LLM workflow responsive, measurable, and reliable enough for a real product.",
          },
        ],
      },
      {
        id: "problem",
        heading: "The user problem",
        blocks: [
          {
            type: "paragraph",
            text: "Watching video in a language you don’t fully understand usually means waiting for subtitles that don’t exist, lag behind the audio, or arrive poorly translated. Translating subtitles by hand is slow; translating them in real time as they appear is a systems problem.",
          },
          {
            type: "paragraph",
            text: "PrismaSub solves that with a continuous pipeline: keep reading the subtitle region of the screen, only translate what actually changed, and keep total latency low enough that the translation stays synchronized with the video.",
          },
        ],
      },
      {
        id: "workflow",
        heading: "End-to-end workflow",
        blocks: [
          {
            type: "architecture",
            caption: "The continuous capture → OCR → translation → rendering loop.",
            flow: {
              id: "prismasub-flow",
              title: "Translation pipeline",
              nodes: [
                {
                  label: "Screen / Video Frames",
                  caption: "Captures the active screen region where subtitles appear.",
                },
                {
                  label: "Subtitle Region Filtering",
                  caption: "Restricts OCR to the subtitle area to reduce noise, cost, and unnecessary calls.",
                },
                {
                  label: "Windows OCR",
                  caption: "Extracts subtitle text from the captured region.",
                },
                {
                  label: "Translation Request",
                  caption: "Sends the extracted text with conversation context to the translation layer.",
                },
                {
                  label: "LLM Provider Routing",
                  caption: "Selects an available provider and falls back when one fails.",
                },
                {
                  label: "Bilingual Subtitle Rendering",
                  caption: "Displays the original line and its translation back to the user.",
                },
              ],
            },
          },
          {
            type: "paragraph",
            text: "Each stage is a small, replaceable unit. The region filter decides whether anything changed worth translating. The routing layer treats model providers as interchangeable capacity. The renderer is the only part the user ever sees — and it has to feel instant.",
          },
        ],
      },
      {
        id: "architecture",
        heading: "Production architecture",
        blocks: [
          {
            type: "paragraph",
            text: "The desktop client is a React and TypeScript application. The cloud side runs on Cloudflare Workers with Supabase for authentication, authorization, API routing, and usage validation. Billing flows through Stripe Checkout, and webhook events are fulfilled against an idempotent PostgreSQL credit ledger.",
          },
          {
            type: "architecture",
            caption: "Support systems around the core pipeline.",
            flow: {
              id: "prismasub-support",
              title: "Support systems",
              nodes: [
                { label: "Core translation pipeline", caption: "Capture → OCR → routing → rendering." },
              ],
              support: [
                { label: "Google OAuth", caption: "Sign-in and identity for desktop users." },
                { label: "Usage Validation", caption: "Checks entitlements and credits before work is performed." },
                { label: "Stripe Checkout", caption: "Handles payment capture and session lifecycle." },
                { label: "Webhook Fulfillment", caption: "Applies payment events exactly once via idempotent processing." },
                { label: "PostgreSQL Credit Ledger", caption: "Tracks credits and usage as a consistent, auditable ledger." },
                { label: "Concurrency Safeguards", caption: "Prevents a single user from saturating shared inference capacity." },
                { label: "Structured Tracing", caption: "Records request context across every stage." },
                { label: "Latency Profiling", caption: "Separates database, network, and inference timing." },
              ],
            },
          },
          {
            type: "paragraph",
            text: "The backend never exposes provider credentials to the client: every model call is proxied server-side, so keys stay out of the desktop binary and usage can be validated and metered at one choke point.",
          },
        ],
      },
      {
        id: "reliability",
        heading: "Reliability and correctness",
        blocks: [
          {
            type: "paragraph",
            text: "For a product people pay for, correctness is a product feature. A request that succeeds twice is as bad as one that fails: it consumes credits, confuses the ledger, and erodes trust. PrismaSub is built around exactly these edge cases.",
          },
          {
            type: "bullets",
            items: [
              "Idempotent webhook fulfillment — payment events are keyed so retries cannot apply the same credit fulfillment twice.",
              "Credit and usage consistency — the PostgreSQL ledger keeps payment fulfillment and translation usage auditable.",
              "Provider fallback — if one LLM provider fails or slows down, requests route to an available one.",
              "User-level concurrency protection — usage limits stop a single user from overloading shared inference capacity.",
              "Secure server-side API proxying — provider keys never reach the desktop client.",
              "Structured request traces — every request carries an ID that links client, backend, and inference stages.",
            ],
          },
        ],
      },
      {
        id: "performance",
        heading: "Performance and observability",
        blocks: [
          {
            type: "paragraph",
            text: "Real-time translation is a latency budget problem: OCR, network, and model inference each consume a slice of the budget, and the user notices every millisecond the subtitle drifts out of sync.",
          },
          {
            type: "bullets",
            items: [
              "Reduced unnecessary OCR and inference calls by filtering subtitle regions and translating only changed text.",
              "Measured p50 and p95 latency across the full request path.",
              "Separated database, network, and model-inference timing so delay is attributed to the right stage.",
              "Used those measurements to find and remove bottlenecks before they became user-visible.",
            ],
          },
        ],
      },
      {
        id: "lessons",
        heading: "Engineering lessons",
        blocks: [
          {
            type: "quote",
            text: "Getting a feature to work is different from getting it to work reliably for real users.",
          },
          {
            type: "paragraph",
            text: "PrismaSub taught me to design for the failure cases first: retries, duplicates, overload, and slow providers. A demo pipeline and a product differ in exactly these details — idempotency, metering, fallbacks, and the measurements that tell you which stage is actually slow.",
          },
        ],
      },
      {
        id: "product",
        heading: "Product",
        blocks: [
          {
            type: "paragraph",
            text: "PrismaSub is live. Active production product — source code remains private.",
          },
        ],
      },
    ],
  },
  {
    slug: "visionassist",
    name: "VisionAssist",
    eyebrow: "On-device AI · Assistive Technology",
    title: "iPhone-powered visual assistance with spatial audio",
    role: "Software Engineer · Applied AI",
    dates: "2025 — 2026",
    location: "iPhone · iOS 17+",
    intro:
      "An iPhone-based assistive-vision prototype combining on-device object detection, ARKit LiDAR depth, directional HRTF cues, and cloud VLM scene understanding for blind and low-vision users.",
    metaDescription:
      "VisionAssist is an iPhone assistive-vision software prototype combining YOLO26n Core ML detection, ARKit LiDAR depth, HRTF directional audio, and cloud vision-language scene understanding.",
    tags: [
      "Swift",
      "React Native",
      "Expo",
      "YOLO26n",
      "Core ML",
      "ARKit",
      "LiDAR",
      "HRTF",
      "Vision-Language Models",
      "iOS",
    ],
    links: [
      {
        label: "Explore interactive demo",
        href: "https://jasonhysy.github.io/vision-assist-demo/",
        external: true,
      },
      { label: "Read case study", href: "/work/visionassist" },
    ],
    publicNote:
      "Working iPhone software prototype. Wearable enclosure remains a concept awaiting physical validation.",
    sections: [
      {
        id: "overview",
        heading: "Project overview",
        blocks: [
          {
            type: "paragraph",
            text: "VisionAssist is a working iPhone software prototype for blind and low-vision users. It gives the phone two focused roles: local camera-and-LiDAR obstacle awareness, and cloud vision-language scene understanding using the current view together with a spoken question.",
          },
          {
            type: "paragraph",
            text: "The iPhone is the compute and sensing platform. Its rear camera, LiDAR sensor, native inference path, network connection, and audio stack replace a separate wearable computer. The proposed shoulder-and-neck enclosure is a concept; the software path is implemented, while the physical mount still requires real-world validation.",
          },
          {
            type: "image",
            src: "/projects/visionassist/overview.png",
            alt: "VisionAssist concept showing an iPhone mounted in a shoulder harness with camera, LiDAR, on-device compute, and cloud scene-understanding flow",
            width: 1200,
            height: 630,
            caption:
              "Wearable concept rendering — software implemented; enclosure and physical ergonomics pending validation.",
          },
          {
            type: "quote",
            text: "The phone is the system: sensing, local perception, connectivity, and audio feedback stay in one device the user already carries.",
          },
        ],
      },
      {
        id: "local-perception",
        heading: "Local obstacle awareness",
        blocks: [
          {
            type: "paragraph",
            text: "The low-latency safety path stays on the iPhone. Camera frames feed a bundled YOLO26n INT8 Core ML model, while ARKit scene depth supplies nearby geometry. The app combines object location and depth into qualitative hazard states, then maps left, center, and right hazards into directional headphone cues.",
          },
          {
            type: "architecture",
            caption:
              "Local perception path — no cloud round trip for nearby obstacle awareness.",
            flow: {
              id: "visionassist-local",
              title: "On-device perception and cueing",
              nodes: [
                {
                  label: "Rear Camera + LiDAR",
                  caption: "Captures the current scene and ARKit depth on a supported iPhone.",
                },
                {
                  label: "YOLO26n Core ML",
                  caption: "Runs bundled INT8 object detection on device.",
                },
                {
                  label: "Depth Association",
                  caption: "Connects detected objects with nearby scene-depth evidence.",
                },
                {
                  label: "Hazard Assessment",
                  caption: "Expresses direction and qualitative proximity without claiming meter-level certainty.",
                },
                {
                  label: "HRTF Audio Cue",
                  caption: "Places concise alerts toward the detected hazard direction.",
                },
              ],
              support: [
                {
                  label: "Runtime Capability Check",
                  caption: "Confirms ARKit scene-depth support before enabling the LiDAR path.",
                },
                {
                  label: "Audio-first Feedback",
                  caption: "Keeps the camera view available while alerts remain concise and directional.",
                },
              ],
            },
          },
        ],
      },
      {
        id: "scene-understanding",
        heading: "Cloud scene understanding",
        blocks: [
          {
            type: "paragraph",
            text: "For questions that require semantic reasoning rather than immediate obstacle response, VisionAssist packages the latest camera view with the user’s spoken question. A cloud vision-language model returns a concise explanation that the app speaks back through the same audio experience.",
          },
          {
            type: "architecture",
            caption:
              "Scene and question travel together so the response is grounded in the user’s current view.",
            flow: {
              id: "visionassist-cloud",
              title: "Visual question and response flow",
              nodes: [
                {
                  label: "Spoken Question",
                  caption: "Captures what the user wants to understand about the scene.",
                },
                {
                  label: "Current Camera View",
                  caption: "Pairs the latest visual context with the question.",
                },
                {
                  label: "Cloud VLM",
                  caption: "Reasons over the scene and query together.",
                },
                {
                  label: "Concise Explanation",
                  caption: "Returns a short response designed for spoken delivery.",
                },
                {
                  label: "Audio Response",
                  caption: "Speaks the grounded scene description to the user.",
                },
              ],
            },
          },
        ],
      },
      {
        id: "boundaries",
        heading: "Validation boundary",
        blocks: [
          {
            type: "bullets",
            items: [
              "The iPhone software prototype and its two perception flows are implemented.",
              "The wearable enclosure is a concept awaiting physical validation for fit, stability, heat, battery use, and sensor alignment.",
              "LiDAR functionality targets supported iPhones on iOS 17+ and is gated by ARKit scene-depth capability at runtime.",
              "Directional HRTF cues require compatible wired, USB, or Bluetooth headphones, including AirPods.",
              "VisionAssist is intended to support orientation; it is not a replacement for a cane, guide dog, or professional mobility guidance.",
            ],
          },
        ],
      },
      {
        id: "demo",
        heading: "Interactive demo",
        blocks: [
          {
            type: "paragraph",
            text: "The public VisionAssist demo presents the wearable concept, the local sensing path, and the cloud scene-understanding path in a focused product walkthrough.",
          },
        ],
      },
    ],
  },
  {
    slug: "multimodal-video-qa-rag",
    name: "Multimodal Video QA RAG",
    eyebrow: "Open Source · Inspectable Code",
    title: "Question answering over video with multimodal retrieval",
    role: "Co-builder · NYU course project",
    dates: "NYU · Course project",
    intro:
      "A multimodal retrieval system for answering questions about video content using frames, subtitles, embeddings, vector search, and a locally hosted language model.",
    metaDescription:
      "Multimodal Video QA RAG: a two-person NYU course project combining video frame and subtitle ETL, CLIP and text embeddings, Qdrant vector retrieval, MongoDB metadata, and a local LLM via Ollama.",
    tags: [
      "Python",
      "PyTorch",
      "OpenCLIP",
      "Sentence Transformers",
      "BERTopic",
      "Qdrant",
      "MongoDB",
      "Ollama",
      "Gradio",
      "Docker",
    ],
    links: [
      {
        label: "View source code",
        href: "https://github.com/JasonHysy/multimodal-video-qa-rag",
        external: true,
      },
      { label: "Read case study", href: "/work/multimodal-video-qa-rag" },
    ],
    publicNote: "Built as a two-person NYU course project.",
    sections: [
      {
        id: "overview",
        heading: "Overview",
        blocks: [
          {
            type: "paragraph",
            text: "Multimodal Video QA RAG answers natural-language questions about video content. The system processes video frames and subtitles, embeds both modalities, stores metadata and vectors, retrieves the most relevant evidence for a question, and generates an answer with a locally hosted language model.",
          },
          {
            type: "paragraph",
            text: "The project is designed as a reproducible local AI stack: MongoDB and Qdrant run as local services, while Ollama serves the language model and Gradio provides the interface.",
          },
        ],
      },
      {
        id: "scope",
        heading: "Shared project scope",
        blocks: [
          {
            type: "paragraph",
            text: "Built as a two-person NYU course project. The shared implementation covers the processing pipeline, embedding generation, retrieval indexing, and end-to-end data flow.",
          },
          {
            type: "bullets",
            heading: "System components",
            items: [
              "Video and frame ETL — sampling frames from source video.",
              "Subtitle extraction and alignment — pairing subtitle segments with the frames they describe.",
              "CLIP/OpenCLIP visual embeddings — representing frames for retrieval.",
              "Sentence Transformer text embeddings — representing subtitle text for retrieval.",
              "BERTopic-based processing — organizing subtitle content into topics.",
              "Qdrant vector retrieval — searching over combined visual and textual embeddings.",
              "MongoDB metadata storage — keeping source, timestamp, and segment context.",
              "Deduplication — preventing near-identical frames and repeated lines from dominating results.",
              "Local LLM inference through Ollama — generating answers from retrieved context.",
              "Gradio interface — asking questions and inspecting evidence.",
              "Locally reproducible services — MongoDB, Qdrant, Ollama, and Gradio are documented as separate runnable components.",
            ],
          },
        ],
      },
      {
        id: "pipeline",
        heading: "Data pipeline",
        blocks: [
          {
            type: "architecture",
            caption: "From source video to an answer, entirely on local infrastructure.",
            flow: {
              id: "rag-flow",
              title: "End-to-end data flow",
              nodes: [
                { label: "Video + Subtitles", caption: "Source video files with their subtitle tracks." },
                { label: "Frame / Text Processing", caption: "Sampling, alignment, cleaning, and deduplication." },
                { label: "Embedding Generation", caption: "Visual embeddings from OpenCLIP; text embeddings from Sentence Transformers." },
                { label: "MongoDB + Qdrant", caption: "Metadata in MongoDB, vectors indexed in Qdrant." },
                { label: "Multimodal Retrieval", caption: "Queries combine visual and textual evidence to find relevant segments." },
                { label: "Local LLM", caption: "Ollama serves a model that answers from retrieved context." },
                { label: "Gradio Answer Interface", caption: "Web UI for questions and evidence inspection." },
              ],
            },
          },
          {
            type: "paragraph",
            text: "The pipeline’s job is alignment: every embedded frame and every embedded text segment must be able to point back to the video, the timestamp, and the surrounding context. Without that, retrieval can find the right content but the system cannot say where it came from.",
          },
        ],
      },
      {
        id: "retrieval",
        heading: "Retrieval architecture",
        blocks: [
          {
            type: "paragraph",
            text: "Retrieval has to bridge two modalities. A question like “what color is the car at 3:20?” needs visual evidence; a question about dialogue needs text evidence. The system embeds both into a shared vector space and lets the question pull from either side.",
          },
          {
            type: "bullets",
            items: [
              "Frames and subtitle segments are embedded into a shared vector space.",
              "Queries retrieve the most relevant frames and text segments together.",
              "MongoDB stores the metadata that maps embeddings back to source videos and timestamps.",
              "Deduplication keeps near-identical frames and repeated subtitle lines from dominating results.",
            ],
          },
        ],
      },
      {
        id: "public-code",
        heading: "Public code",
        blocks: [
          {
            type: "paragraph",
            text: "The full source is public on GitHub, including the pipeline, the service configuration, and the interface. The project is designed to run locally with Docker: Qdrant, MongoDB, Ollama, and the Gradio app are all reproducible on a developer machine.",
          },
          {
            type: "bullets",
            heading: "What is inspectable",
            items: [
              "Frame and subtitle processing code.",
              "Embedding and indexing configuration.",
              "Docker-based service orchestration.",
              "The retrieval and answer interface.",
            ],
          },
        ],
      },
      {
        id: "learned",
        heading: "What I learned",
        blocks: [
          {
            type: "bullets",
            items: [
              "How to build a reproducible local AI stack with Docker and locally hosted models.",
              "How to design an ETL pipeline that keeps frames, text, and metadata aligned.",
              "How embedding choice, chunking, and deduplication affect retrieval quality.",
              "How to scope a research-style project into a working demo within a semester.",
            ],
          },
          {
            type: "paragraph",
            text: "The project made retrieval concepts concrete: what gets embedded, how chunks are formed, and why the alignment between modalities determines whether the system can actually answer a question.",
          },
        ],
      },
      {
        id: "github",
        heading: "Source",
        blocks: [
          {
            type: "paragraph",
            text: "github.com/JasonHysy/multimodal-video-qa-rag — built as a two-person NYU course project.",
          },
        ],
      },
    ],
  },
  {
    slug: "vltnet",
    name: "Zero-Shot Object Navigation with Vision-Language Reasoning",
    shortName: "VLTNet",
    eyebrow: "Published Research · ICPR 2024",
    title: "Zero-shot object navigation with vision-language reasoning",
    role: "Research Contributor and Co-author",
    dates: "ICPR 2024",
    location: "NYU Computer Vision Lab",
    intro:
      "A modular vision-language navigation system that combines scene understanding, semantic mapping, exploration reasoning, and goal verification for zero-shot object navigation.",
    metaDescription:
      "VLTNet: modular zero-shot object navigation with vision-language reasoning, co-authored and published at ICPR 2024. Controlled experiments and ablation studies.",
    tags: [
      "Python",
      "PyTorch",
      "RoboTHOR",
      "PASTURE",
      "2D Semantic Mapping",
      "Vision-Language Reasoning",
      "Controlled Experiments",
      "Ablation Studies",
    ],
    links: [
      {
        label: "View research project",
        href: "https://vlt-lzson.github.io/",
        external: true,
      },
      { label: "Read case study", href: "/work/vltnet" },
    ],
    result:
      "Reported 33.7% improvement over the baseline in the evaluated benchmark setting.",
    sections: [
      {
        id: "question",
        heading: "Research question",
        blocks: [
          {
            type: "paragraph",
            text: "Can a robot navigate to objects it has never been trained on — by understanding the scene and the language goal, rather than relying on a fixed object vocabulary?",
          },
          {
            type: "paragraph",
            text: "VLTNet investigates zero-shot object navigation: given a natural-language goal, the system must find the target in an unfamiliar environment without prior training on that object class.",
          },
        ],
      },
      {
        id: "decomposition",
        heading: "System decomposition",
        blocks: [
          {
            type: "paragraph",
            text: "Instead of one end-to-end model, VLTNet decomposes navigation into modules with clear responsibilities. That decomposition is what makes the system interpretable and the experiments meaningful — each module can be studied, ablated, and improved on its own.",
          },
          {
            type: "bullets",
            heading: "Modules",
            items: [
              "Scene understanding — grounding the visual observation and the language goal.",
              "Semantic mapping — building a 2D map of what has been seen.",
              "Exploration reasoning — deciding where to look next.",
              "Goal identification — matching the language goal to candidate objects.",
              "Goal verification — confirming the candidate before acting.",
            ],
          },
        ],
      },
      {
        id: "pipeline",
        heading: "Navigation pipeline",
        blocks: [
          {
            type: "architecture",
            caption: "Perception and language meet in a closed decision loop.",
            flow: {
              id: "vltnet-flow",
              title: "Decision loop",
              nodes: [
                { label: "Visual Observation", caption: "The robot’s current view of the scene." },
                { label: "Language Goal", caption: "The object the robot is asked to find." },
                { label: "Scene Understanding", caption: "Parses the observation into semantic content." },
                { label: "2D Semantic Map", caption: "Accumulates detected semantics into a spatial map." },
                { label: "Exploration Reasoning", caption: "Chooses the next viewpoint to reduce uncertainty." },
                { label: "Goal Identification", caption: "Ranks candidate regions against the language goal." },
                { label: "Goal Verification", caption: "Confirms the target before the final approach." },
                { label: "Navigation Action", caption: "Executes the next movement toward the goal." },
              ],
            },
          },
          {
            type: "paragraph",
            text: "The loop is the interesting part: exploration is driven by what the semantic map does not yet contain, and verification exists because identification alone is not enough. Reasoning about uncertainty is what separates navigation from pattern matching.",
          },
        ],
      },
      {
        id: "evaluation",
        heading: "Evaluation and ablations",
        blocks: [
          {
            type: "paragraph",
            text: "The system was evaluated with controlled experiments and ablation studies in the RoboTHOR and PASTURE environments.",
          },
          {
            type: "bullets",
            items: [
              "Controlled experiments isolate the effect of each module.",
              "Ablation studies measure what each reasoning stage contributes.",
              "Failure modes are analyzed to understand where navigation breaks down.",
              "The modular design makes each result attributable to a specific component.",
            ],
          },
        ],
      },
      {
        id: "result",
        heading: "Result",
        blocks: [
          {
            type: "paragraph",
            text: "In the evaluated benchmark setting, VLTNet achieved a reported 33.7% improvement over the baseline. That figure is specific to the study’s experimental setup and comparison baseline — a measured result within the paper, not a general claim.",
          },
          {
            type: "paragraph",
            text: "The durable outcome is the method: decompose the problem, map what the system knows, reason about where to look, and verify before acting. Those are the habits the paper validated.",
          },
        ],
      },
      {
        id: "lessons",
        heading: "Research-to-production lessons",
        blocks: [
          {
            type: "quote",
            text: "Research taught me to decompose and experimentally validate AI systems. Building production software taught me to make those systems reliable for real users.",
          },
          {
            type: "paragraph",
            text: "The skills that transferred are long-lived: structured reasoning, modular system design, autonomous decision-making, experimental validation, ablation studies, and understanding failure modes. Decompose, measure, ablate, verify — those habits apply as directly to production systems as they do to navigation.",
          },
        ],
      },
      {
        id: "paper",
        heading: "Project and paper",
        blocks: [
          {
            type: "paragraph",
            text: "Published at ICPR 2024 as co-author. Project page: vlt-lzson.github.io.",
          },
        ],
      },
    ],
  },
];

/** Display order — PrismaSub is the featured project. */
export const caseStudyOrder = [
  "prismasub",
  "visionassist",
  "multimodal-video-qa-rag",
  "vltnet",
] as const;

/** Rich media and copy used by the dedicated VLTNet research showcase. */
export const vltnetShowcase = {
  authors: [
    { name: "CongCong Wen", equalContribution: true },
    { name: "Yisiyuan Huang", equalContribution: true, highlight: true },
    { name: "Yanjia Huang" },
    { name: "Wenyu Han" },
    { name: "Shuaihang Yuan" },
    { name: "Yu-Shen Liu" },
    { name: "Yi Fang" },
  ],
  heroFigure: {
    src: "/projects/vltnet/research-overview.png",
    alt: "VLTNet comparison of distance-based and language-guided frontier selection for simple and contextual object goals",
    width: 1048,
    height: 548,
  },
  pipelineFigure: {
    src: "/projects/vltnet/system-pipeline.png",
    alt: "VLTNet system pipeline connecting vision-language understanding, semantic mapping, Tree of Thoughts exploration, and goal identification",
    width: 1912,
    height: 774,
  },
  metrics: [
    { value: "ICPR 2024", label: "Peer-reviewed publication" },
    {
      value: "33.7%",
      label: "Reported improvement over the baseline in the evaluated benchmark setting",
    },
    { value: "2", label: "Evaluation environments: RoboTHOR and PASTURE" },
    { value: "4", label: "Interpretable reasoning and navigation modules" },
  ],
  modules: [
    {
      index: "01",
      title: "Vision-language understanding",
      description:
        "Grounds object candidates from the current RGB observation so language goals can be connected to what the agent actually sees.",
      image: "/projects/vltnet/vlm-detection.png",
      alt: "RGB observation before and after vision-language object grounding",
      width: 1656,
      height: 548,
    },
    {
      index: "02",
      title: "Semantic mapping",
      description:
        "Fuses object detections with depth and agent pose to maintain a spatial memory of rooms, obstacles, frontiers, and observed objects.",
      image: "/projects/vltnet/semantic-map.png",
      alt: "Detected objects projected into a two-dimensional semantic navigation map",
      width: 1536,
      height: 834,
    },
    {
      index: "03",
      title: "Tree of Thoughts exploration",
      description:
        "Evaluates multiple frontier hypotheses against the language goal, allowing the agent to revisit reasoning before choosing where to explore next.",
      image: "/projects/vltnet/tree-of-thought.png",
      alt: "Tree of Thoughts prompt evaluating several candidate frontier locations",
      width: 1632,
      height: 953,
    },
    {
      index: "04",
      title: "Goal identification",
      description:
        "Checks whether the observed scene satisfies a detailed goal description before the agent stops, reducing false-positive navigation success.",
      image: "/projects/vltnet/goal-identification.png",
      alt: "Goal identification reasoning over detected objects and spatial context",
      width: 1587,
      height: 716,
    },
  ],
  demos: [
    {
      id: "long-tail",
      label: "Long-tail object",
      goal: "Navigate to an uncommon object goal",
      description:
        "Tests whether language-guided exploration can move beyond frequently observed object categories.",
      video: "/projects/vltnet/trajectory-longtail.mp4",
      poster: "/projects/vltnet/research-overview.png",
    },
    {
      id: "spatial",
      label: "Spatial attributes",
      goal: "Use surrounding objects and spatial context",
      description:
        "Tests a goal that cannot be resolved by category alone and requires reasoning about nearby objects and layout.",
      video: "/projects/vltnet/trajectory-spatial.mp4",
      poster: "/projects/vltnet/semantic-map.png",
    },
    {
      id: "appearance",
      label: "Appearance attributes",
      goal: "Resolve a visually specific language goal",
      description:
        "Tests whether the navigation loop can combine perception and descriptive language to distinguish the target.",
      video: "/projects/vltnet/trajectory-appearance.mp4",
      poster: "/projects/vltnet/goal-identification.png",
    },
  ],
  contributions: [
    "Python and PyTorch navigation pipelines across data preparation, evaluation, and experiment management.",
    "Language-guided navigation with 2D semantic mapping, frontier reasoning, and goal identification.",
    "Controlled experiments and ablation studies across RoboTHOR and PASTURE.",
    "Analysis of system behavior and failure modes in complex language-goal settings.",
  ],
} as const;

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

/** Like getCaseStudy but throws on unknown slugs (build-time safety). */
export function requireStudy(slug: string): CaseStudy {
  const study = getCaseStudy(slug);
  if (!study) throw new Error(`Missing case study: ${slug}`);
  return study;
}

/* ------------------------------------------------------------------ */
/* Home — experience                                                   */
/* ------------------------------------------------------------------ */

export const experience = {
  eyebrow: "Experience",
  title: "Experience",
  description: "A compact timeline — the full story lives in the case studies.",
  entries: [
    {
      org: "PrismaSub",
      role: "Founder & Software Engineer",
      period: "April 2026 — Present",
      location: "Quincy, MA",
      description:
        "Building and operating a production Windows SaaS product for real-time AI subtitle translation, including the desktop client, cloud backend, authentication, billing, usage management, reliability, and latency monitoring.",
      tech: ["React", "TypeScript", "Cloudflare Workers", "Supabase", "Stripe", "OCR", "LLM APIs"],
    },
    {
      org: "Guangzhou Heyuan Technology",
      role: "Applied AI Intern",
      period: "October 2025 — March 2026",
      location: "Guangzhou, China",
      description:
        "Built an edge-cloud assistive perception system integrating on-device vision models, cloud visual reasoning, camera and external-camera feeds, ASR/TTS, GPS caching, and real-time mobile software.",
      tech: ["RF-DETR", "Depth Anything V2", "Qwen3-VL", "React Native", "Expo", "ASR/TTS", "Edge-cloud orchestration"],
    },
    {
      org: "NYU Computer Vision Lab",
      role: "Research Assistant",
      period: "February 2022 — August 2025",
      location: "Brooklyn, NY",
      description:
        "Built reproducible Python and PyTorch pipelines for perception and navigation research, including training, evaluation, controlled experiments, ablation studies, and multimodal reasoning systems.",
      tech: ["Python", "PyTorch", "Controlled experiments", "Ablation studies", "Multimodal reasoning"],
    },
    {
      org: "Presskit AI",
      role: "Machine Learning Intern",
      period: "January 2024 — May 2024",
      location: "Brooklyn, NY",
      description:
        "Built Python ingestion and retrieval workflows that processed content daily from more than 200 news websites and grounded AI-generated responses in recent articles.",
      tech: ["Python", "BeautifulSoup", "Extraction", "Cleaning & normalization", "Retrieval indexing", "RAG", "Vector search"],
    },
  ] as ExperienceEntry[],
};

/* ------------------------------------------------------------------ */
/* Home — technical capabilities                                       */
/* ------------------------------------------------------------------ */

export const capabilities = {
  eyebrow: "Technical Capabilities",
  title: "How I build systems",
  description:
    "Not a logo wall — the stack as it composes into working systems.",
  blocks: [
    {
      index: "01",
      title: "Product & Backend Engineering",
      description:
        "The layer between an AI output and a usable product: interfaces, APIs, data, auth, and billing.",
      items: [
        "TypeScript",
        "React",
        "REST APIs",
        "Cloudflare Workers",
        "Supabase",
        "PostgreSQL",
        "OAuth",
        "Stripe",
        "Docker",
        "SQL",
      ],
    },
    {
      index: "02",
      title: "Applied AI",
      description:
        "Choosing, wiring, and evaluating models inside real product flows — not just calling an API.",
      items: [
        "Python",
        "PyTorch",
        "LLM APIs",
        "RAG",
        "Embeddings",
        "Vector Search",
        "Multimodal Inference",
        "OCR",
        "Provider Routing",
      ],
    },
    {
      index: "03",
      title: "Reliability & Production Systems",
      description:
        "Making the system predictable when real users depend on it, and measurable when it is not.",
      items: [
        "Idempotent Workflows",
        "Usage Metering",
        "Concurrency Safeguards",
        "Structured Tracing",
        "p50/p95 Latency Profiling",
        "Provider Fallback",
        "CI/CD",
      ],
    },
    {
      index: "04",
      title: "Computer Vision & Robotics",
      description:
        "Perception and decision-making under real-world constraints, from research to edge devices.",
      items: [
        "Semantic Mapping",
        "Zero-shot Object Navigation",
        "Instance Segmentation",
        "Depth Estimation",
        "Visual Question Answering",
        "Edge-cloud Inference",
        "Autonomous Navigation",
      ],
    },
  ] as CapabilityBlock[],
};

/* ------------------------------------------------------------------ */
/* Home — about                                                        */
/* ------------------------------------------------------------------ */

export const about = {
  eyebrow: "About",
  title: "Building the system around the model.",
  paragraphs: [
    "My background spans software engineering, applied AI, and computer vision research. I enjoy the part of AI engineering that begins after a model produces its first successful output: building the APIs, data flows, interfaces, safeguards, measurements, and product infrastructure required to make the capability useful in practice.",
    "At NYU, I learned to decompose complex AI systems and validate them through controlled experiments. Through PrismaSub and my applied AI work, I learned to carry those systems through to deployment, reliability, billing, observability, and real user workflows.",
  ],
  focus: [
    {
      title: "End-to-end ownership",
      text: "From OCR on a screen to a billed, measured product running in production.",
    },
    {
      title: "Validated, not assumed",
      text: "Controlled experiments, ablations, and latency measurements instead of intuition.",
    },
    {
      title: "Product-shaped AI",
      text: "Models exist to serve users; the system around them decides whether they do.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Home — education and publication                                    */
/* ------------------------------------------------------------------ */

export const educationPublication = {
  eyebrow: "Education & Publication",
  title: "Education and Publication",
  education: [
    {
      school: "New York University Tandon School of Engineering",
      degree: "M.S. in Computer Science",
      period: "August 2025",
    },
    {
      school: "New York University Tandon School of Engineering",
      degree: "B.S. in Computer Science",
      period: "May 2024",
    },
  ],
  publication: {
    title: "Zero-Shot Object Navigation with Vision-Language Models Reasoning",
    venue: "ICPR 2024",
    role: "Co-author",
    href: "https://vlt-lzson.github.io/",
  },
};

/* ------------------------------------------------------------------ */
/* Home — contact                                                      */
/* ------------------------------------------------------------------ */

export const contact = {
  eyebrow: "Contact",
  title: "Let’s build something that has to work in the real world.",
  description:
    "I’m interested in software engineering and applied AI roles where I can work across product, backend systems, and intelligent workflows.",
  emailLabel: "Email Jason",
  location: "Quincy, Massachusetts",
};

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  tagline: "Software Engineer building production AI systems end to end.",
  navigationLabel: "Navigate",
  externalLabel: "Public work",
  contactLabel: "Contact",
};
