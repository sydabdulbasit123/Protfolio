import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <a className="font-mono text-slate-300" href="#home">basit<span className="text-lime-300">.dev</span></a>
        <span>Designed &amp; built with React and Tailwind CSS.</span>
        <a className="inline-flex items-center gap-2 transition hover:text-lime-200" href="#home">Back to top <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}
