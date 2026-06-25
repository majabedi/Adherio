import { ImageWithFallback } from "@/app/components/ImageWithFallback";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Solution", href: "#solution" },
  { label: "Platform", href: "#platform" },
  { label: "Demo", href: "#demo" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

const platformComponents = [
  {
    title: "AI Voice Agent",
    description:
      "Calls patients in a warm, simple, and respectful way to confirm medication intake.",
  },
  {
    title: "Adherence Dashboard",
    description:
      "Shows adherence status, risk signals, trends, and follow-up opportunities.",
  },
  {
    title: "Patient Journey Monitoring",
    description:
      "Supports selected patient journeys with scheduled check-ins and structured adherence tracking.",
  },
  {
    title: "Insight Layer",
    description:
      "Generates aggregated insights to support better adherence strategies and service improvement.",
  },
];

const solutionPoints = [
  "AI-powered voice check-ins",
  "Simple patient conversations",
  "Medication intake confirmation",
  "Adherence risk detection",
  "Dashboard for care teams",
  "Barrier insights across forgetfulness, side effects, confusion, access problems, and low motivation",
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Research & Preparation",
    period: "July-August 2026",
    items: [
      "Select initial patient journey",
      "Define adherence KPI framework",
      "Clarify target customer, buyer, payer, and decision pathway",
      "Assess regulatory, privacy, consent, and data requirements",
      "Design MVP architecture",
    ],
  },
  {
    phase: "Phase 2",
    title: "MVP Development & Internal Validation",
    period: "September-October 2026",
    items: [
      "Develop AI-powered medication adherence MVP",
      "Implement voice-based patient interactions",
      "Build basic dashboard and reporting",
      "Test internally and refine workflows",
    ],
  },
  {
    phase: "Phase 3",
    title: "Real-World Validation & Scale-Up Preparation",
    period: "November-December 2026",
    items: [
      "Test in an initial real-world patient journey",
      "Measure adherence-related KPIs",
      "Collect feedback",
      "Refine business model and commercialization plan",
      "Prepare 2027 scale-up roadmap",
    ],
  },
];

const deliverables = [
  "AI-powered medication adherence MVP",
  "Voice-based patient interaction prototype",
  "Adherence dashboard",
  "Pilot results and learnings",
  "Business model canvas and scale-up plan",
  "Financial business plan",
  "Medication adherence KPI framework",
];

const defensibility = [
  "Proprietary adherence data",
  "Validated adherence-risk models",
  "Integration with medication-dispensing workflows",
  "Trusted clinical partnerships",
  "Evidence-based adherence insights",
  "Potential proof-based adherence mechanisms",
];

const founders = [
  {
    name: "Dr. Majid Abedi",
    role: "Technical & Product Lead",
    photo: "/images/majid-photo.png",
    fallback: "MA",
    description:
      "Majid leads AI, data analytics, platform development, adherence measurement, reporting frameworks, MVP development, and pilot execution.",
  },
  {
    name: "Ernst Wodrada",
    role: "Business Development & Venture Strategy",
    photo: "/images/ernst-photo.png",
    fallback: "EW",
    description:
      "Ernst leads customer discovery, market validation, commercialization planning, stakeholder engagement, business model development, and partnerships.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  children,
}: Readonly<{
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}>) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#178f86]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-5 text-lg leading-8 text-[#5f6f82]">{children}</p>
      ) : null}
    </div>
  );
}

function CheckItem({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <li className="flex gap-3 text-[#344154]">
      <span
        aria-hidden="true"
        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DDF7F4] text-xs font-bold text-[#14877f]"
      >
        +
      </span>
      <span>{children}</span>
    </li>
  );
}

function PlatformIcon({ index }: Readonly<{ index: number }>) {
  const paths = [
    "M6 13c3-4 9-4 12 0M8.5 16a5 5 0 0 1 7 0M12 20h.01M7 5h10a2 2 0 0 1 2 2v2H5V7a2 2 0 0 1 2-2Z",
    "M5 18V8m0 10h14M9 18v-6m4 6V5m4 13v-9",
    "M7 7h10M7 12h10M7 17h6M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z",
    "M12 3v18M3 12h18M6 6l12 12M18 6 6 18",
  ];

  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d={paths[index]} />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-[#F6FAFB] text-[#1F2937]">
      <header className="sticky top-0 z-50 border-b border-[#DDE8EE] bg-white/90 backdrop-blur-xl">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8"
        >
          <a href="#home" className="flex items-center gap-3" aria-label="Adherio home">
            <ImageWithFallback
              src="/images/adherio-logo.png"
              alt="Adherio logo"
              fallback="Adherio"
              className="flex h-11 min-w-32 items-center"
              imageClassName="max-h-11 w-auto object-contain"
              fallbackClassName="text-xl font-semibold text-[#0B1F3A]"
              priority
            />
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#435268] transition hover:bg-[#EAF6F8] hover:text-[#0B1F3A]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#0B1F3A] px-5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(11,31,58,0.18)] transition hover:bg-[#12345c]"
          >
            Request a Demo
          </a>
        </nav>
        <div className="flex gap-2 overflow-x-auto border-t border-[#E6EEF2] px-5 py-3 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full bg-[#F3F8FA] px-4 py-2 text-sm font-medium text-[#435268]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F6FAFB_0%,#FFFFFF_42%,#E8F7F5_100%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#21B6A8] to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <ImageWithFallback
              src="/images/adherio-logo.png"
              alt="Adherio logo"
              fallback="Adherio"
              className="mb-8 flex h-16 min-w-44 items-center"
              imageClassName="max-h-16 w-auto object-contain"
              fallbackClassName="text-3xl font-bold text-[#0B1F3A]"
              priority
            />
            <p className="mb-5 inline-flex rounded-full border border-[#B9E9E4] bg-white px-4 py-2 text-sm font-semibold text-[#147e77] shadow-sm">
              AI-powered medication adherence
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] text-[#0B1F3A] sm:text-6xl lg:text-7xl">
              Measure medication adherence. Understand barriers. Improve
              wellbeing.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#506176] sm:text-xl">
              Adherio is an AI-powered medication adherence platform that helps
              healthcare systems monitor medication intake, detect adherence
              risks, and support better patient follow-up.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0B1F3A] px-7 text-base font-semibold text-white shadow-[0_18px_42px_rgba(11,31,58,0.24)] transition hover:bg-[#14375f]"
              >
                Request a Demo
              </a>
              <a
                href="#solution"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#B8D5DE] bg-white px-7 text-base font-semibold text-[#0B1F3A] transition hover:border-[#21B6A8] hover:text-[#117f77]"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white bg-white p-5 shadow-[0_28px_90px_rgba(11,31,58,0.14)]">
              <div className="rounded-[1.5rem] bg-[#0B1F3A] p-6 text-white">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[#9CE4DF]">
                      Adherence layer
                    </p>
                    <p className="mt-2 text-2xl font-semibold">Care team view</p>
                  </div>
                  <div className="rounded-full bg-[#21B6A8] px-4 py-2 text-sm font-semibold text-[#052923]">
                    Pilot ready
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-[#B8DCE5]">Confirmed intake</p>
                    <p className="mt-3 text-4xl font-semibold">82%</p>
                    <div className="mt-5 h-2 rounded-full bg-white/15">
                      <div className="h-2 w-[82%] rounded-full bg-[#21B6A8]" />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-[#B8DCE5]">Follow-up priority</p>
                    <p className="mt-3 text-4xl font-semibold">14</p>
                    <p className="mt-4 text-sm leading-6 text-[#CFE7EE]">
                      Patients with emerging adherence risk signals.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5 sm:col-span-2">
                    <p className="text-sm text-[#B8DCE5]">Detected barriers</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {["Forgetfulness", "Side effects", "Access"].map((barrier) => (
                        <div
                          key={barrier}
                          className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium"
                        >
                          {barrier}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#178f86]">
                The Problem
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl">
                A critical gap between prescribed treatment and real-world
                adherence.
              </h2>
            </div>
            <div className="rounded-3xl border border-[#DDE8EE] bg-[#F8FBFC] p-8 shadow-sm">
              <p className="text-xl leading-9 text-[#344154]">
                Healthcare systems know what medication is prescribed and
                dispensed, but often do not know whether patients actually take
                it. This creates a major gap between treatment plans and
                real-world outcomes.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["Avoidable costs", "Poor outcomes", "Missed support"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#D6E6EC] bg-white p-4 text-sm font-semibold text-[#0B1F3A]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="scroll-mt-28 bg-[#F6FAFB] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Solution"
            title="Conversational adherence monitoring designed for healthcare teams."
          >
            Adherio combines conversational AI with adherence analytics to help
            healthcare teams understand whether medication is being taken, why
            adherence may decline, and where human follow-up is needed.
          </SectionHeading>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-3xl border border-[#DDE8EE] bg-white p-8 shadow-[0_18px_50px_rgba(11,31,58,0.08)]">
              <ul className="grid gap-5 sm:grid-cols-2">
                {solutionPoints.map((point) => (
                  <CheckItem key={point}>{point}</CheckItem>
                ))}
              </ul>
            </div>
            <aside className="rounded-3xl border border-[#B9E9E4] bg-[#EAFBF9] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#147e77]">
                Safety positioning
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[#0B1F3A]">
                Human oversight by design.
              </h3>
              <p className="mt-4 leading-7 text-[#405066]">
                Adherio does not provide medical advice, does not change
                medication, and does not replace doctors, nurses, pharmacists,
                or caregivers. It acts as an adherence monitoring and patient
                engagement layer. Relevant risks or issues should be escalated
                to appropriate human stakeholders.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section id="platform" className="scroll-mt-28 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Platform"
            title="A focused adherence layer for patient journeys."
          >
            The platform concept brings voice engagement, structured intake
            confirmation, risk signals, and dashboard-based insights into one
            practical operating layer.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {platformComponents.map((component, index) => (
              <article
                key={component.title}
                className="rounded-3xl border border-[#DDE8EE] bg-[#FBFDFE] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(11,31,58,0.10)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E5F7F5] text-[#12877f]">
                  <PlatformIcon index={index} />
                </div>
                <h3 className="text-xl font-semibold text-[#0B1F3A]">
                  {component.title}
                </h3>
                <p className="mt-4 leading-7 text-[#5f6f82]">
                  {component.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="scroll-mt-28 bg-[#F6FAFB] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#178f86]">
                Demo Agent
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl">
                A dedicated space for the medication adherence conversation demo.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5f6f82]">
                This section is ready for a future iframe, static HTML widget,
                ElevenLabs agent, OpenAI agent, or another conversational demo.
              </p>
              <a
                href="/demo-agent.html"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-[#B8D5DE] bg-white px-6 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#21B6A8] hover:text-[#117f77]"
              >
                Open demo placeholder
              </a>
            </div>
            <div
              id="demo-agent-placeholder"
              className="flex min-h-[360px] items-center justify-center rounded-3xl border border-dashed border-[#7BBDB7] bg-white p-8 text-center shadow-[0_18px_50px_rgba(11,31,58,0.08)]"
            >
              <p className="max-w-md text-xl font-semibold leading-8 text-[#0B1F3A]">
                Interactive demo agent coming soon. This area will host a live
                medication adherence conversation demo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="scroll-mt-28 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Roadmap"
            title="Six-month path from preparation to real-world validation."
          >
            The July to December 2026 roadmap is structured around focused
            research, MVP development, internal validation, and pilot readiness.
          </SectionHeading>
          <div className="grid gap-6 lg:grid-cols-3">
            {roadmap.map((phase) => (
              <article
                key={phase.phase}
                className="rounded-3xl border border-[#DDE8EE] bg-[#FBFDFE] p-7 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#178f86]">
                  {phase.phase}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#0B1F3A]">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#1E88E5]">
                  {phase.period}
                </p>
                <ul className="mt-6 space-y-4">
                  {phase.items.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6FAFB] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#178f86]">
                December 2026 Deliverables
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[#0B1F3A] sm:text-4xl">
                Practical outputs for pilot decisions and scale-up planning.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#DDE8EE] bg-white p-5 font-semibold text-[#0B1F3A] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-[#DDE8EE] bg-[#0B1F3A] p-8 text-white shadow-[0_18px_50px_rgba(11,31,58,0.16)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9CE4DF]">
              Strategic launch partnership
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              Independent venture, partner-enabled validation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#D7E6EF]">
              Adherio is being developed as an independent and scalable venture,
              with Global Factories envisioned as a strategic launch partner to
              support domain validation, market access, and pilot opportunities.
            </p>
          </div>
          <div className="rounded-3xl border border-[#B9E9E4] bg-[#EAFBF9] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#147e77]">
              Defensibility
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0B1F3A]">
              Long-term value beyond AI conversations.
            </h2>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {defensibility.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="founders" className="scroll-mt-28 bg-[#F6FAFB] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Founders"
            title="A focused founding team across product, AI, and venture strategy."
          >
            Adherio brings together technical product execution, adherence
            analytics, customer discovery, commercialization planning, and
            partner development.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="rounded-3xl border border-[#DDE8EE] bg-white p-7 shadow-[0_18px_50px_rgba(11,31,58,0.08)]"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <ImageWithFallback
                    src={founder.photo}
                    alt={`${founder.name} portrait`}
                    fallback={founder.fallback}
                    className="flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#E5F7F5]"
                    imageClassName="h-full w-full object-cover"
                    fallbackClassName="text-3xl font-semibold text-[#12877f]"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-[#0B1F3A]">
                      {founder.name}
                    </h3>
                    <p className="mt-2 font-semibold text-[#178f86]">
                      {founder.role}
                    </p>
                    <p className="mt-4 leading-7 text-[#5f6f82]">
                      {founder.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#178f86]">
              Contact
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-[#0B1F3A]">
              Partner with Adherio
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5f6f82]">
              We are looking for healthcare partners, pilot collaborators,
              research partners, and strategic investors to help validate and
              scale AI-powered medication adherence solutions.
            </p>
          </div>
          <form className="rounded-3xl border border-[#DDE8EE] bg-[#FBFDFE] p-6 shadow-[0_18px_50px_rgba(11,31,58,0.08)] sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-[#344154]">Name</span>
                <input
                  name="name"
                  type="text"
                  className="mt-2 h-12 w-full rounded-2xl border border-[#CADAE2] bg-white px-4 text-[#0B1F3A] outline-none transition focus:border-[#21B6A8] focus:ring-4 focus:ring-[#21B6A8]/15"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-[#344154]">
                  Organization
                </span>
                <input
                  name="organization"
                  type="text"
                  className="mt-2 h-12 w-full rounded-2xl border border-[#CADAE2] bg-white px-4 text-[#0B1F3A] outline-none transition focus:border-[#21B6A8] focus:ring-4 focus:ring-[#21B6A8]/15"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-[#344154]">Email</span>
                <input
                  name="email"
                  type="email"
                  className="mt-2 h-12 w-full rounded-2xl border border-[#CADAE2] bg-white px-4 text-[#0B1F3A] outline-none transition focus:border-[#21B6A8] focus:ring-4 focus:ring-[#21B6A8]/15"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-[#344154]">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border border-[#CADAE2] bg-white px-4 py-3 text-[#0B1F3A] outline-none transition focus:border-[#21B6A8] focus:ring-4 focus:ring-[#21B6A8]/15"
                />
              </label>
            </div>
            <button
              type="button"
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#0B1F3A] px-6 text-base font-semibold text-white shadow-[0_12px_30px_rgba(11,31,58,0.18)] transition hover:bg-[#14375f] sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#DDE8EE] bg-[#07182D] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <ImageWithFallback
            src="/images/adherio-logo.png"
            alt="Adherio logo"
            fallback="Adherio"
            className="flex h-12 min-w-36 items-center"
            imageClassName="max-h-12 w-auto object-contain brightness-0 invert"
            fallbackClassName="text-2xl font-semibold text-white"
          />
          <p className="max-w-xl text-sm leading-6 text-[#C8D6E4]">
            Adherio aims to become a global leader in medication adherence by
            helping healthcare systems better measure adherence, understand
            barriers, and support patient wellbeing through AI-powered
            solutions.
          </p>
        </div>
      </footer>
    </main>
  );
}
