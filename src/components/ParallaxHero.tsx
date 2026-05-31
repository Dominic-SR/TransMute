import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const heroHighlights = [
  { label: 'Soft gradients', value: 'Fluid', description: 'Seamless color transitions across every layer.' },
  { label: 'Layered motion', value: 'Depth', description: 'Scroll-driven parallax elements that feel alive.' },
  { label: 'Clean spacing', value: 'Modern', description: 'Airy layout for focused content and visual rhythm.' },
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

  const transforms = useMemo(
    () => ({
      slow: `translate3d(0, ${scrollY * 0.08}px, 0)`,
      mid: `translate3d(0, ${scrollY * 0.16}px, 0)`,
      fast: `translate3d(0, ${scrollY * 0.24}px, 0)`,
    }),
    [scrollY],
  )

  return (
    <section className="relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-slate-950/95" />
      <div
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl md:left-14 md:top-24"
        style={{ transform: transforms.slow }}
      />
      <div
        className="absolute -right-20 top-44 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl lg:right-16 lg:top-32"
        style={{ transform: transforms.mid }}
      />
      <div
        className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl"
        style={{ transform: transforms.fast }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.2),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_26%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 sm:px-8 lg:px-10 lg:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.34em] text-cyan-300/80">Gradient Parallax</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            A softer visual experience with layered gradient motion.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            A clean, modern landing page where color, depth, and spacing work together to create calm focus.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/convert"
              className="inline-flex rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_24px_80px_-32px_rgba(34,211,238,0.75)] transition hover:bg-cyan-200"
            >
              Launch app
            </Link>
            <Link
              to="/docs"
              className="inline-flex rounded-full border border-slate-200/20 bg-slate-950/60 px-7 py-3.5 text-sm font-medium text-slate-100 backdrop-blur transition hover:border-cyan-200/60 hover:text-white"
            >
              Browse features
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3" style={{ transform: transforms.fast }}>
          {heroHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-left shadow-[0_30px_90px_-50px_rgba(34,211,238,0.5)] backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">{item.label}</p>
              <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
