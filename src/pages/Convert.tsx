export default function Convert() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Converter</p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Upload files and convert instantly</h1>
          <p className="max-w-2xl text-slate-300 leading-8">Select one or more files to see the modern conversion workflow. This interface is responsive and ready for a production-ready conversion flow.</p>
        </div>

        <div className="mt-10 rounded-3xl border border-dashed border-slate-700/70 bg-slate-900/80 p-8 text-center">
          <label className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl bg-slate-950/60 px-6 py-12 text-slate-300 transition hover:border-cyan-300/50 hover:text-white">
            <span className="text-2xl">📁</span>
            <span className="text-base font-medium">Drop files here, or click to browse</span>
            <input className="sr-only" type="file" multiple />
          </label>
          <p className="mt-4 text-sm text-slate-500">Supports documents, images, audio, and video formats.</p>
        </div>
      </div>
    </section>
  )
}
