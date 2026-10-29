import { ArrowUpRight } from "lucide-react";
import { emailID, githubProfile, linkedinProfile } from "../data/portfolio.js";

export default function ContactSection() {
  return (
    <section
      className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-28"
      id="contact"
    >
      <div className="relative overflow-hidden rounded-3xl border border-lime-300/15 bg-[#111a1b] px-6 py-10 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full bg-lime-300/[0.09] blur-[90px]" />
        <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-lime-300">
              04 / Next step
            </p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s build &amp; learn together.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-400">
              Got a project idea, want to collaborate, or share feedback?
              I&apos;d love to connect.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-3">
            <a
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-lime-300 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-lime-200"
              href={linkedinProfile}
              target="_blank"
              rel="noreferrer"
            >
              Connect on Linkedin <ArrowUpRight size={16} />
            </a>
            <a
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-lime-300 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-lime-200"
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
            >
              Connect on GitHub <ArrowUpRight size={16} />
            </a>
            <a
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-lime-300 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-lime-200"
              href={emailID}
              target="_blank"
              rel="noreferrer"
            >
             Connect on Gmail <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
