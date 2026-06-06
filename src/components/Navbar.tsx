import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Convert', to: '/convert' },
  { label: 'Docs', to: '/docs' },
  { label: 'About', to: '/about' },
]

export default function Navbar({ theme, onToggleTheme }: { theme: 'dark' | 'light'; onToggleTheme: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <NavLink to="/" className="flex items-center gap-3 text-[var(--text)]">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-lg font-semibold text-cyan-300">
            TM
          </span>
          <span className="text-base font-semibold tracking-[0.18em] uppercase text-[var(--text)]">TransMute</span>
        </NavLink>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-4 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition ${
                    isActive ? 'bg-slate-200/10 text-cyan-200' : 'text-slate-300 hover:bg-slate-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition hover:border-cyan-300/50 hover:text-white"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            <span className="text-xl">{theme === 'dark' ? '☀' : '🌙'}</span>
          </button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/90 bg-slate-950/90 text-slate-200 transition hover:border-cyan-300/50 hover:text-white md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-slate-800/70 transition-all duration-300 md:hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="space-y-2 px-6 pb-4 pt-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-3xl px-4 py-3 text-sm transition ${
                  isActive ? 'bg-slate-900 text-cyan-200' : 'text-slate-300 hover:bg-slate-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
