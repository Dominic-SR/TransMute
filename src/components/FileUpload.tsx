import { useState, useRef } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

export default function FileUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    console.log('Dropped files:', droppedFiles);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.currentTarget.files ? Array.from(e.currentTarget.files) : [];
    console.log('Selected files:', selectedFiles);
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClickUpload}
        className={`relative rounded-2xl border-2 border-dashed p-12 text-center cursor-pointer transition-all duration-300 ${
          isDragging
            ? 'border-cyan-400 bg-cyan-400/10 scale-105'
            : 'border-white/20 bg-slate-900/50 hover:border-cyan-300/50 hover:bg-cyan-400/5'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />

        <div className="flex flex-col items-center gap-4">
          <FiUploadCloud className="w-12 h-12 text-cyan-400" />
          <div>
            <p className="text-lg font-semibold text-white">
              Drag and drop files here
            </p>
            <p className="text-sm text-slate-400 mt-2">
              or click to select files from your computer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
