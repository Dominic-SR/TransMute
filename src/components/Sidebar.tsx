import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Convert', to: '/convert' },
  { label: 'Docs', to: '/docs' },
  { label: 'About', to: '/about' },
]

export default function Sidebar() {
  return (
    <aside className="hidden w-full max-w-[260px] shrink-0 lg:block">
      <div className="sticky top-24 space-y-4 rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Quick links</p>
        <nav className="space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 text-sm transition ${
                  isActive ? 'bg-cyan-300/10 text-cyan-200' : 'text-slate-300 hover:bg-slate-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}
