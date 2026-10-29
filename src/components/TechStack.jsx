import { toolbox } from "../data/portfolio.js";

export default function TechStack() {
  return (
    <section className="border-y border-white/[0.07] bg-white/[0.015]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-5 font-mono text-xs text-slate-500 sm:gap-x-10 sm:px-8">
        <span className="text-slate-600">IN MY TOOLBOX</span>
        {toolbox.map((item) => <span className="flex items-center gap-2" key={item}><span className="size-1 rounded-full bg-lime-300/70" />{item}</span>)}
      </div>
    </section>
  );
}
