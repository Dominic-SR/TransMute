import { Link } from 'react-router-dom'

export default function ParallaxHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-bg absolute inset-0 bg-fixed" />
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="absolute -left-24 top-12 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 top-28 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center text-slate-100 sm:py-32 lg:px-8">
        <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyan-300">
          Responsive parallax hero
        </span>
        <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Build a faster converter experience with modern parallax design
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          TransMute delivers an elegant file conversion flow with responsive layouts, polished cards, and a lightweight parallax hero.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/convert"
            className="inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
          >
            Start converting
          </Link>
          <Link
            to="/docs"
            className="inline-flex rounded-full border border-slate-700 bg-slate-950/80 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-white"
          >
            Read the docs
          </Link>
        </div>
      </div>
    </section>
  )
}
