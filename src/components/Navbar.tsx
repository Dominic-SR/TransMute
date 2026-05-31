import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-8">
        <Link to="/" className="text-lg font-semibold tracking-tight text-cyan-300 transition hover:text-cyan-200">
          TransMute
        </Link>

        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-200 sm:gap-6">
          <Link to="/convert" className="transition hover:text-cyan-300 hover:underline underline-offset-4">
            Convert
          </Link>
          <Link to="/docs" className="transition hover:text-cyan-300 hover:underline underline-offset-4">
            Docs
          </Link>
          <Link to="/about" className="transition hover:text-cyan-300 hover:underline underline-offset-4">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
