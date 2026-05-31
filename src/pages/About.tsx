const About = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-slate-100 sm:px-8">
      <div className="rounded-3xl border border-slate-700/80 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/20">
        <h1 className="text-4xl font-semibold text-white">About</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          TransMute is a lightweight audio conversion experience built for creators who need fast, reliable workflow tools.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Mission</h2>
            <p className="mt-3 text-slate-300">Streamline media conversion with clean design and strong performance.</p>
          </div>
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Vision</h2>
            <p className="mt-3 text-slate-300">Make multimedia workflows easier without sacrificing style or clarity.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
