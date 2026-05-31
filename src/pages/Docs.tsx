const Docs = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-slate-100 sm:px-8">
      <div className="rounded-3xl border border-slate-700/80 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/20">
        <h1 className="text-4xl font-semibold text-white">Docs</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Explore the TransMute design system, API guidelines, and conversion workflow documentation.
        </p>
        <ul className="mt-8 space-y-4 text-slate-300">
          <li className="rounded-2xl border border-slate-800/70 bg-slate-900/80 p-5">Getting started with conversion rules</li>
          <li className="rounded-2xl border border-slate-800/70 bg-slate-900/80 p-5">Supported formats and export profiles</li>
          <li className="rounded-2xl border border-slate-800/70 bg-slate-900/80 p-5">Best practices for audio quality</li>
        </ul>
      </div>
    </section>
  )
}

export default Docs
