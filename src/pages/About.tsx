export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <div className="space-y-8 rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/20">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">About TransMute</p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Smart, elegant file conversion in React</h1>
          <p className="max-w-3xl text-slate-300 leading-8">TransMute is designed to show a clean, responsive experience using Tailwind CSS, React Router, and a parallax hero. Every page adapts for mobile, tablet, and desktop users.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Built with Tailwind</h2>
            <p className="mt-3 text-slate-400">Utility-first styling makes the layout responsive and easy to evolve with additional sections.</p>
          </div>
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Responsive by default</h2>
            <p className="mt-3 text-slate-400">The UI scales gracefully across breakpoints, keeping the hero, cards, and converter view readable on any screen.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
