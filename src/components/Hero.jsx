import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Code2,
  Github,
  GraduationCap,
  Terminal,
} from "lucide-react";
import { githubProfile } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section
      className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:grid-cols-[1.1fr_0.9fr]"
      id="home"
    >
      <div className="pointer-events-none absolute -left-40 top-12 size-80 rounded-full bg-lime-300/[0.06] blur-[100px]" />
      <div className="hero-enter relative">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-3 py-1.5 font-mono text-[11px] text-lime-200">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-300 opacity-40" />
            <span className="relative inline-flex size-2 rounded-full bg-lime-300" />
          </span>
          STUDENT · BUILDING &amp; LEARNING
        </div>
        <p className="mb-3 flex items-center gap-2 font-mono text-sm text-slate-400">
          Hey, I&apos;m Abdul Basit <span className="text-lime-300">👋</span>
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
          Full-stack dev
          <br />
          <span className="text-slate-500">building with</span>
          <br />
          AI<span className="text-lime-300">.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
          I&apos;m a student learning by building full-stack web apps with
          React, Node.js, and AI. I like taking an idea from the UI all the way
          to the API, database, and AI integration.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-200"
            href="#work"
          >
            See my work <ArrowDownRight size={16} />
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-white/25 hover:text-white"
            href={githubProfile}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={15} /> Find me on GitHub <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] text-slate-500">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-lime-300" /> Learning in
            public
          </span>
          <span className="flex items-center gap-2">
            <GraduationCap size={13} /> Student developer
          </span>
        </div>
      </div>

      <div className="hero-enter relative mx-auto w-full max-w-[420px] lg:ml-auto">
        <div className="portrait-glow absolute inset-[8%] rounded-full bg-lime-300/20 blur-[75px]" />
        <div className="portrait-orbit portrait-orbit-one absolute left-1/2 top-1/2 aspect-square w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-200/15" />
        <div className="portrait-orbit portrait-orbit-two absolute left-1/2 top-1/2 aspect-square w-[128%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sky-200/10" />
        <span className="orbit-dot orbit-dot-one absolute left-[7%] top-[25%] size-2 rounded-full bg-lime-200 shadow-[0_0_16px_4px_rgba(217,249,157,0.35)]" />
        <span className="orbit-dot orbit-dot-two absolute right-[8%] top-[68%] size-1.5 rounded-full bg-sky-200 shadow-[0_0_16px_4px_rgba(125,211,252,0.3)]" />
        <div className="portrait-frame relative mx-auto aspect-[4/5] w-[78%] overflow-hidden rounded-[48%_48%_28px_28px] border border-white/15 bg-[#191c20] shadow-2xl shadow-black/50">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0b0f14]/85 via-transparent to-[#0b0f14]/10" />
          <img
            className="portrait-image h-full w-full object-cover object-top"
            src="/profile.png"
            alt="Abdul Basit, full-stack developer"
          />
          <div className="absolute inset-x-0 bottom-0 z-20 p-5 text-center sm:p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-lime-200">
              Developer · Coder
            </p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Building the web,
              <br />
              one idea at a time.
            </p>
          </div>
        </div>
        <div className="tech-float tech-float-react absolute left-0 top-[22%] flex items-center gap-2 rounded-xl border border-sky-200/15 bg-[#111821]/90 px-3 py-2.5 shadow-xl shadow-black/20 backdrop-blur-md">
          <Code2 size={16} className="text-sky-300" />
          <span className="font-mono text-[11px] text-slate-200">React</span>
        </div>
        <div className="tech-float tech-float-js absolute right-0 top-[42%] flex items-center gap-2 rounded-xl border border-amber-200/15 bg-[#111821]/90 px-3 py-2.5 shadow-xl shadow-black/20 backdrop-blur-md">
          <Braces size={16} className="text-amber-200" />
          <span className="font-mono text-[11px] text-slate-200">
            JavaScript
          </span>
        </div>
        <div className="tech-float tech-float-css absolute bottom-[16%] left-[3%] flex items-center gap-2 rounded-xl border border-lime-200/15 bg-[#111821]/90 px-3 py-2.5 shadow-xl shadow-black/20 backdrop-blur-md">
          <Terminal size={15} className="text-lime-200" />
          <span className="font-mono text-[11px] text-slate-200">
            Tailwind CSS
          </span>
        </div>
        <div className="absolute right-[2%] top-[7%] hidden items-center gap-2 rounded-full border border-lime-200/20 bg-[#111821]/90 px-3 py-2 backdrop-blur-md sm:flex">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-300 opacity-40" />
            <span className="relative inline-flex size-2 rounded-full bg-lime-300" />
          </span>
          <span className="font-mono text-[9px] text-slate-300">
            STUDENT BUILDER
          </span>
        </div>
      </div>
      <a
        className="absolute bottom-7 left-5 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-600 transition hover:text-lime-300 sm:left-8 sm:flex"
        href="#work"
      >
        Scroll to explore <ArrowDown size={13} />
      </a>
    </section>
  );
}
