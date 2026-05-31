import ParallaxHero from '../components/ParallaxHero'

const Home = () => {
  return (
    <div className="space-y-10">
      <ParallaxHero />
      <section className="mx-auto max-w-6xl px-6 pb-16 text-slate-200 sm:px-8">
        <div className="rounded-3xl border border-slate-700/80 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/20">
          <h1 className="text-3xl font-semibold text-white">Welcome to TransMute</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Convert audio with confidence, explore documentation, and access the tools you need from one polished interface.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home