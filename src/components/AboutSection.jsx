import { ArrowUpRight, Github } from "lucide-react";
import { githubProfile } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

export default function AboutSection() {
  return (
    <section className="border-y border-white/[0.07] bg-[#0e1319]" id="about">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div><SectionHeading index="02" eyebrow="A bit about me" title="Curious by default." /></div>
        <div className="max-w-2xl">
          <p className="text-xl leading-8 tracking-tight text-slate-200 sm:text-2xl sm:leading-9">I&apos;m a student growing into full-stack development by building real projects — including AI-powered tools, REST APIs, and React apps.</p>
          <p className="mt-5 text-sm leading-7 text-slate-400">My GitHub shows the learning journey: React fundamentals, API-driven interfaces, authentication, file uploads, databases, and now AI integrations. I&apos;m still learning, shipping projects, and getting better with every build.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition hover:border-white/20 hover:text-white" href={githubProfile} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
