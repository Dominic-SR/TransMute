import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const heroMetrics = [
  { label: 'Parallax layers', value: '06', detail: 'Depth-aware scenes' },
  { label: 'Responsive cards', value: '24', detail: 'Adaptive breakpoints' },
  { label: 'Dynamic assets', value: '100%', detail: 'Theme-ready media' },
]

export default function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let frame = 0

    const updateScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setScrollY(window.scrollY))
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])

  const layerTransforms = useMemo(() => ({
    base: `translate3d(0, ${scrollY * 0.18}px, 0)`,
    mid: `translate3d(0, ${scrollY * 0.28}px, 0)`,
    front: `translate3d(0, ${scrollY * 0.36}px, 0)`,
  }), [scrollY])

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.2), rgba(2,6,23,0.88)), url('/src/assets/hero.png')`,
          transform: layerTransforms.base,
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_bottom,rgba(76,29,149,0.3),transparent_35%)]" />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(14,116,144,0.32), transparent 22%), radial-gradient(circle at 80% 10%, rgba(168,85,247,0.34), transparent 24%), radial-gradient(circle at 50% 80%, rgba(8,145,178,0.24), transparent 26%)',
          transform: layerTransforms.mid,
          filter: 'blur(0.2px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90" />

      <div className="absolute left-6 top-24 hidden h-24 w-24 rounded-full border border-cyan-300/40 bg-cyan-300/10 blur-2xl md:block" style={{ transform: `translate3d(0, ${scrollY * 0.22}px, 0)` }} />
      <div className="absolute right-10 top-28 hidden h-32 w-32 rounded-full border border-violet-300/30 bg-violet-500/10 blur-3xl lg:block" style={{ transform: `translate3d(0, ${scrollY * 0.14}px, 0)` }} />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-300/30 bg-slate-950/55 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200 backdrop-blur">
            Responsive parallax theme studio
          </div>

          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Dynamic assets, responsive storytelling, and immersive web motion.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200/85 sm:text-lg">
            Launch elegant landing pages with layered depth, adaptive visual treatments, and polished conversion flows tuned for modern product websites.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/convert"
              className="inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_80px_-28px_rgba(34,211,238,0.9)] transition hover:bg-cyan-200"
            >
              Start the experience
            </Link>
            <Link
              to="/docs"
              className="inline-flex rounded-full border border-slate-200/20 bg-slate-950/55 px-6 py-3 text-sm font-medium text-slate-100 backdrop-blur transition hover:border-cyan-200/60 hover:text-white"
            >
              View design system
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3" style={{ transform: layerTransforms.front }}>
          {heroMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/10 bg-slate-950/65 p-5 text-left shadow-[0_30px_90px_-50px_rgba(34,211,238,0.65)] backdrop-blur"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">{metric.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
                </div>
                <span className="mt-1 rounded-full bg-cyan-300/15 px-2.5 py-1 text-[10px] font-semibold text-cyan-100">Live</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
