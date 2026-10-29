import { useState } from "react";
import { ArrowUpRight, Menu, Terminal, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#0b0f14]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a className="flex items-center gap-2.5 font-mono text-sm font-semibold text-white" href="#home" onClick={closeMenu} aria-label="Abdul Basit home">
          <span className="grid size-8 place-items-center rounded-lg border border-lime-300/20 bg-lime-300/10 text-lime-300"><Terminal size={17} /></span>
          <span>basit<span className="text-lime-300">.dev</span></span>
        </a>
        <button
          className="grid size-10 place-items-center rounded-lg border border-white/10 text-slate-300 sm:hidden"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav className={`${menuOpen ? "absolute inset-x-0 top-[67px] flex flex-col border-b border-white/10 bg-[#0b0f14] px-5 pb-5 pt-2" : "hidden"} gap-1 sm:static sm:flex sm:flex-row sm:items-center sm:gap-8 sm:border-0 sm:bg-transparent sm:p-0`} aria-label="Main navigation">
          <a className="rounded-md px-3 py-2.5 text-sm text-slate-400 transition hover:text-white sm:px-0 sm:py-2" href="#work" onClick={closeMenu}>Projects</a>
          <a className="rounded-md px-3 py-2.5 text-sm text-slate-400 transition hover:text-white sm:px-0 sm:py-2" href="#about" onClick={closeMenu}>About</a>
          <a className="rounded-md px-3 py-2.5 text-sm text-slate-400 transition hover:text-white sm:px-0 sm:py-2" href="#skills" onClick={closeMenu}>Skills</a>
          <a className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-lime-300/30 px-4 py-2.5 text-sm font-medium text-lime-200 transition hover:bg-lime-300/10 sm:mt-0" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={14} /></a>
        </nav>
      </div>
    </header>
  );
}
