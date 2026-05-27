import ParallaxHero from '../components/ParallaxHero'

const dynamicAssets = [
  {
    title: 'Aurora Grid',
    description: 'Layered gradients and soft glows adapt to each breakpoint while preserving cinematic depth.',
    accent: 'from-cyan-400/90 via-slate-950/70 to-violet-500/70',
    stats: ['Depth motion', 'Adaptive overlays', 'Glass panels'],
    tone: 'border-cyan-300/20 bg-cyan-400/10',
  },
  {
    title: 'Nebula Media',
    description: 'Dynamic image surfaces and animated textures make content feel like a live visual system.',
    accent: 'from-fuchsia-500/90 via-slate-950/65 to-cyan-400/70',
    stats: ['Dynamic gradients', 'Responsive scaling', 'Texture-driven UI'],
    tone: 'border-fuchsia-300/15 bg-fuchsia-500/10',
  },
  {
    title: 'Orbit Canvas',
    description: 'Product storytelling flows into premium cards, rich copy, and highly responsive content modules.',
    accent: 'from-violet-500/90 via-slate-950/70 to-emerald-400/70',
    stats: ['Story-first layout', 'Rich sections', 'Smooth transitions'],
    tone: 'border-violet-300/20 bg-violet-500/10',
  },
]

export default function Home() {
  return (
    <div className="space-y-16 pb-10">
      <ParallaxHero />

      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-800/70 bg-slate-950/78 p-8 shadow-[0_30px_100px_-55px_rgba(34,211,238,0.5)]">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Immersive theme engine</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Designed for standout product storytelling.
            </h2>
            <p className="mt-4 max-w-xl text-slate-300 leading-8">
              Pair cinematic depth with responsive blocks to create modern marketing and conversion experiences. Every section can scale, shift, and react across devices.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-200">
              {[
                'Large-format hero scenes with layered parallax',
                'Reusable glass panels with rich visual contrast',
                'Dynamic asset cards tuned for high-performance marketing',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/80 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {dynamicAssets.map((asset) => (
              <article
                key={asset.title}
                className={`group rounded-[1.75rem] border p-6 ${asset.tone} transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className={`rounded-2xl bg-gradient-to-br ${asset.accent} p-[1px]`}>
                  <div className="rounded-[calc(1rem-1px)] bg-slate-950/85 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/90">Live asset</p>
                      <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[10px] font-semibold text-cyan-100">
                        Responsive
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-white">{asset.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{asset.description}</p>

                    <ul className="mt-5 space-y-2 text-xs text-slate-200/80">
                      {asset.stats.map((stat) => (
                        <li key={stat} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{stat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="rounded-[2rem] border border-slate-800/70 bg-slate-950/86 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Responsive theme system</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Motion, polish, and flexible layouts build trust fast.
              </h2>
              <p className="mt-4 text-slate-300 leading-8">
                Dynamic visual blocks make every section feel intentional. The theme scales cleanly from mobile layouts to large displays without losing impact.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['94%', 'Optimized contrast'],
                ['18ms', 'Smooth scroll response'],
                ['4K', 'Large display comfort'],
                ['Mobile', 'Adaptive layout grid'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-slate-800/70 bg-slate-900/85 p-5">
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-2 text-sm text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-slate-950/85 p-10 text-center shadow-[0_40px_120px_-60px_rgba(34,211,238,0.8)] sm:p-12">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Ready to launch</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Turn parallax into a polished site system.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 leading-8">
            Create standout product pages, campaign homes, and conversion flows using dynamic assets, responsive layouts, and layered visual storytelling.
          </p>
          <a href="/convert" className="mt-8 inline-flex rounded-full bg-cyan-300 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
            Start your build
          </a>
        </div>
      </section>
    </div>
  )
}
