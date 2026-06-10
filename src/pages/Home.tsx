const Home = () =>{
  // Generate 25 boxes for 5x5 grid
  const boxes = Array.from({ length: 25 }, (_, i) => i + 1)

  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-10 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl text-center">
        <h1 className="text-3xl font-semibold text-white sm:text-3xl">All the file tools you need, in one place.</h1>
        <p className="mt-5 text-cyan-300/80 leading-8">
Convert, compress, merge, and edit your files in seconds. 100% free, completely secure, and incredibly fast.
        </p>
      </div>

      {/* 5x5 Responsive Grid using Flexbox */}
      <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Explore All Tools</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {boxes.map((num) => (
            <div
              key={num}
              className="aspect-square bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-300/30 rounded-2xl flex items-center justify-center hover:border-cyan-300/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              style={{
                width: 'calc(20% - 16px)', // 5 columns with 16px gap adjustment
                minWidth: '100px', // Minimum width for very small screens
                maxWidth: '150px', // Maximum width for very large screens
              }}
            >
              <span className="text-cyan-300 font-semibold text-lg">{num}</span>
              <i>Icon</i>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home;