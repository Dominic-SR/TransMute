export default function Home() {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-10 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Home</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Simple routes with responsive navigation</h1>
        <p className="mt-5 max-w-3xl text-slate-300 leading-8">
          A clean single-page app layout with a top navbar, sidebar for large screens, and adaptive mobile menu.
        </p>
      </div>
    </section>
  )
}
