import GrdidBox from "../components/GrdidBox";
import ToolsList from "../assets/dataset/ToolsList";

const Home = () =>{
  // Generate 25 boxes for 5x5 grid

  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-10 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl text-center">
        <h1 className="text-3xl font-semibold text-white sm:text-3xl my-4">All the file tools you need, in one place.</h1>
        <p className="mt-5 text-cyan-300/80 leading-8">
Convert, compress, merge, and edit your files in seconds. 100% free, completely secure, and incredibly fast.
        </p>
      </div>

      {/* 5x5 Responsive Grid using Flexbox */}
      <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Explore All Tools</h2>
        <div className="flex flex-wrap gap-5 justify-center">
         {ToolsList.map((tool) => (
            <GrdidBox  data={tool} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home;