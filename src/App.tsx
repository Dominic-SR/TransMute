import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Convert from './pages/Convert'
import Docs from './pages/Docs'
import About from './pages/About'
import './App.css'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const defaultTheme = saved === 'light' || saved === 'dark'
      ? saved
      : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'

    setTheme(defaultTheme)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <Navbar theme={theme} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />

        <div className="flex flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
          {/* <Sidebar /> */}

          <main className="flex-1 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_35px_120px_-50px_rgba(0,0,0,0.55)] backdrop-blur-xl lg:p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/convert" element={<Convert />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
