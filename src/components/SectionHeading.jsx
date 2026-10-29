export default function SectionHeading({ eyebrow, title, index }) {
  return (
    <div className="mb-10 flex flex-col gap-3 sm:mb-12">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-lime-300">
        <span className="text-slate-500">{index} /</span> {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
    </div>
  );
}
