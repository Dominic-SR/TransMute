import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link to="/" className="brand">TransMute</Link>
        <nav>
          <Link to="/convert">Convert</Link>
          <Link to="/docs">Docs</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  )
}
