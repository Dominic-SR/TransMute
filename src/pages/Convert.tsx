import React from 'react'

export default function Convert() {
  return (
    <div className="page container section">
      <h1>Converter</h1>
      <p>Upload files to convert. (UI stub)</p>

      <div className="upload-box">
        <input type="file" multiple />
        <div className="upload-hints">Drop files here or click to browse</div>
      </div>
    </div>
  )
}
