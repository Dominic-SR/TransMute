export default function About() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-10 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">About</p>
      <h1 className="mt-4 text-3xl font-semibold text-white">About this app</h1>
      <p className="mt-4 text-slate-300 leading-7">
        A lightweight SPA structure with a top navbar, a responsive sidebar, and client-side routing.
      </p>
    </section>
  )
}
