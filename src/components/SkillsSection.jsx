import { Code2 } from "lucide-react";
import { skillGroups } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function SkillCard({ group }) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-[#10151c] p-6 sm:p-7">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-lg bg-lime-300/10 text-lime-200"><Code2 size={17} /></span>
        <h3 className="font-medium text-white">{group.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => <span className="rounded-lg border border-white/[0.08] px-3 py-2 font-mono text-xs text-slate-400" key={item}>{item}</span>)}
      </div>
    </article>
  );
}

export default function SkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28" id="skills">
      <SectionHeading index="03" eyebrow="What I work with" title="Tools of the trade" />
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => <SkillCard group={group} key={group.title} />)}
      </div>
    </section>
  );
}
