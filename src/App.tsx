import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Convert from './pages/Convert'
import About from './pages/About'
import Docs from './pages/Docs'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <main className="pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/convert" element={<Convert />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
