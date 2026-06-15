import FileUpload from '../components/FileUpload';
import { useLocation } from 'react-router-dom';

const Convert = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-10 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Convert</p>
      <h1 className="mt-4 text-3xl font-semibold text-white">{state?.tool || "File Converter"}</h1>
      <p className="mt-4 text-slate-300 leading-7">{state?.description || "Upload your files here. Drag and drop or click to select files. Monitor upload progress with the real-time progress bar."}</p>
      
      <div className="mt-8">
        <FileUpload />
      </div>
    </section>
  )
}

export default Convert
