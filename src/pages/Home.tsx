import ParallaxHero from '../components/ParallaxHero'

export default function Home() {
  return (
    <div className="space-y-16">
      <ParallaxHero />

      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Modern converter</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Fast conversion for documents, media, and more
            </h2>
            <p className="max-w-2xl text-slate-300 leading-8">
              Convert files directly in your browser with a responsive interface, secure local workflows, and polished animations that look great on every device.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-[0_20px_80px_-50px_rgba(14,165,233,0.4)]">
              <h3 className="text-xl font-semibold text-white">Multiple Formats</h3>
              <p className="mt-3 text-slate-300">PDF, DOCX, PNG, MP3, MP4 and more are supported with fast browser-based conversion.</p>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-[0_20px_80px_-50px_rgba(125,211,252,0.16)]">
              <h3 className="text-xl font-semibold text-white">Batch Support</h3>
              <p className="mt-3 text-slate-300">Upload multiple files in one go and process them together with a clean, simple workflow.</p>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-[0_20px_80px_-50px_rgba(14,165,233,0.2)]">
              <h3 className="text-xl font-semibold text-white">Privacy First</h3>
              <p className="mt-3 text-slate-300">Keep conversions private and local by design. Files are processed without unnecessary uploads.</p>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-[0_20px_80px_-50px_rgba(129,140,248,0.18)]">
              <h3 className="text-xl font-semibold text-white">Responsive UI</h3>
              <p className="mt-3 text-slate-300">A mobile-first layout ensures a polished experience on phones, tablets, and desktops.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-10 text-center shadow-xl shadow-slate-950/30 sm:p-12">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to convert?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 leading-8">Jump into the converter and start transforming your files with a polished, modern interface built with Tailwind CSS.</p>
          <a href="/convert" className="mt-8 inline-flex rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Go to Converter
          </a>
        </div>
      </section>
    </div>
  )
}
