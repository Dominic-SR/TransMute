export default function Docs() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <div className="space-y-8 rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/20">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Documentation</p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">How to use TransMute</h1>
          <p className="max-w-3xl text-slate-300 leading-8">Select files to upload, choose your desired output format, and download the converted results. The UI is built to be accessible, responsive, and clear.</p>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Supported formats</h2>
            <p className="mt-3 text-slate-400">PDF, DOCX, PNG, JPG, MP3, MP4, and more can be added to the converter flow with simple extension.</p>
          </div>
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">Usage</h2>
            <p className="mt-3 text-slate-400">The app currently shows a responsive navigation, parallax hero, and content sections ready for a complete conversion workflow.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
