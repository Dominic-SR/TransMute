import React from 'react'
import ParallaxHero from '../components/ParallaxHero'

export default function Home() {
  return (
    <div className="page page-home">
      <ParallaxHero />

      <section className="container section features">
        <h2>Fast, simple file conversion</h2>
        <p>Convert documents, images, audio and video right in your browser — secure and private.</p>

        <div className="feature-grid">
          <div className="card">
            <h3>Multiple Formats</h3>
            <p>PDF, DOCX, PNG, MP3 and more.</p>
          </div>
          <div className="card">
            <h3>Batch Convert</h3>
            <p>Upload many files and download them in one archive.</p>
          </div>
          <div className="card">
            <h3>Privacy First</h3>
            <p>Files stay local unless you choose to upload.</p>
          </div>
        </div>
      </section>

      <section className="container section cta">
        <h2>Ready to convert?</h2>
        <a className="btn primary" href="/convert">Go to Converter</a>
      </section>
    </div>
  )
}
