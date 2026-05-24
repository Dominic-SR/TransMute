import React from 'react'

export default function ParallaxHero() {
  return (
    <section className="parallax-hero">
      <div className="parallax-layer bg-layer" />
      <div className="parallax-layer mid-layer">
        <div className="container hero-inner">
          <h1>Convert files instantly</h1>
          <p>Upload, convert, and download — fast and secure.</p>
          <a className="btn primary" href="/convert">Start Converting</a>
        </div>
      </div>
      <div className="parallax-layer fg-layer" />
    </section>
  )
}
