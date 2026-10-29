import { useState } from "react";
import { ArrowRight, ArrowUpRight, Github, Sparkles } from "lucide-react";
import { projectFilters, projects } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function CodePreview({ project }) {
  const ProjectIcon = project.icon;

  return (
    <div className={`relative min-h-60 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${project.tone} bg-[#111821] p-5 sm:min-h-64 sm:p-7`}>
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff6b6b]" /><span className="size-2.5 rounded-full bg-[#ffc857]" /><span className="size-2.5 rounded-full bg-[#8bd450]" />
        </div>
        <span className="font-mono text-[10px] text-slate-500">{project.file}</span>
        <ProjectIcon className="size-4 text-slate-500" aria-hidden="true" />
      </div>
      <div className="space-y-2.5 font-mono text-[11px] leading-relaxed sm:text-xs">
        {project.code.map(([number, first, rest]) => (
          <div className="flex gap-4" key={number}>
            <span className="select-none text-slate-600">{number}</span>
            <span><span className={first === "$" || first === "✓" ? "text-lime-300" : "text-violet-300"}>{first}</span><span className="text-slate-300">{rest}</span></span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute -bottom-16 -right-10 size-44 rounded-full bg-lime-300/10 blur-3xl" />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group rounded-2xl border border-white/[0.08] bg-[#10151c] p-3 transition hover:-translate-y-1 hover:border-white/15 sm:p-4">
      <CodePreview project={project} />
      <div className="flex items-start justify-between gap-4 px-2 pb-2 pt-5">
        <div>
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">{project.description}</p>
        </div>
        <a className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-slate-400 transition group-hover:border-lime-300/30 group-hover:text-lime-200" href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} source code`}>
          <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="flex flex-wrap gap-2 px-2 pb-2 pt-3">
        {project.stack.map((item) => <span className="rounded-md bg-white/[0.045] px-2.5 py-1.5 font-mono text-[10px] text-slate-400" key={item}>{item}</span>)}
      </div>
      <div className="flex gap-4 px-2 pb-2 pt-3">
        <a className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-400 transition hover:text-lime-200" href={project.repo} target="_blank" rel="noreferrer"><Github size={13} /> Source code <ArrowUpRight size={12} /></a>
        {project.live && <a className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-400 transition hover:text-lime-200" href={project.live} target="_blank" rel="noreferrer"><Sparkles size={13} /> Live project <ArrowUpRight size={12} /></a>}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = projects.filter((project) => activeFilter === "All" || project.category === activeFilter);

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28" id="work">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div><SectionHeading index="01" eyebrow="Learning by building" title="Projects from my GitHub" /></div>
        <div className="mb-10 flex flex-wrap gap-2 sm:mb-12">
          {projectFilters.map((filter) => (
            <button
              className={`rounded-lg border px-3.5 py-2 font-mono text-[11px] transition ${activeFilter === filter ? "border-lime-300/30 bg-lime-300/10 text-lime-200" : "border-white/10 text-slate-500 hover:border-white/20 hover:text-white"}`}
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project) => <ProjectCard project={project} key={project.name} />)}
      </div>
      <a className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-slate-400 transition hover:text-lime-200" href="https://github.com/sydabdulbasit123" target="_blank" rel="noreferrer">Explore all my repositories <ArrowRight size={14} /></a>
    </section>
  );
}
