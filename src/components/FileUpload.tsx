import { useState, useRef } from 'react';
import { FiUploadCloud, FiX, FiCheck } from 'react-icons/fi';
import { formatFileSize } from '../utilities/FileHelper';
import {isJpegFile, isPngFile} from '../utilities/CheckFileType';

interface UploadedFile {
  id: string;
  file: File;
  progress: number;
  status: 'pending' | 'uploading' | 'complete' | 'error';
  error?: string;
}

export default function FileUpload() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [targetFormat, setTargetFormat] = useState<'png' | 'jpeg'>('png');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getFormatFileSize = (bytes: number) => {
    return formatFileSize(bytes);
  };

  const convertImageFormat = async (
    file: File,
    format: 'png' | 'jpeg'
  ): Promise<File> => {
    const shouldConvertToPng = format === 'png' && isJpegFile(file);
    const shouldConvertToJpeg = format === 'jpeg' && isPngFile(file);

    if (!shouldConvertToPng && !shouldConvertToJpeg) {
      return file;
    }

    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Unable to read image file'));
        }
      };
      reader.onerror = () => reject(reader.error ?? new Error('File reading failed'));
      reader.readAsDataURL(file);
    });

    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Unable to load image for conversion'));
      img.src = dataUrl;
    });

    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Canvas is not supported');
    }
    context.drawImage(image, 0, 0, image.width, image.height);

    const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
    const extension = format === 'png' ? '.png' : '.jpg';

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (result) => {
          if (result) {
            resolve(result);
          } else {
            reject(new Error('Image conversion failed'));
          }
        },
        mimeType,
        format === 'jpeg' ? 0.92 : undefined
      );
    });

    const outputName = file.name.replace(/\.(jpe?g|png)$/i, extension);
    return new File([blob], outputName, { type: mimeType });
  };

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
    processFiles(droppedFiles);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.currentTarget.files ? Array.from(e.currentTarget.files) : [];
    processFiles(selectedFiles);
  };

  const processFiles = async (newFiles: File[]) => {
    const convertedFiles = await Promise.all(
      newFiles.map(async (file) => {
        try {
          return await convertImageFormat(file, targetFormat);
        } catch (error) {
          setFiles((prev) => [
            ...prev,
            {
              id: `${file.name}-${Date.now()}-${Math.random()}`,
              file,
              progress: 0,
              status: 'error',
              error: 'Image conversion failed',
            },
          ]);
          return null;
        }
      })
    );

    const uploadedFiles: UploadedFile[] = convertedFiles
      .filter((file): file is File => file !== null)
      .map((file) => ({
        id: `${file.name}-${Date.now()}-${Math.random()}`,
        file,
        progress: 0,
        status: 'pending',
      }));

    setFiles((prev) => [...prev, ...uploadedFiles]);

    // Simulate upload for each file
    uploadedFiles.forEach((uploadedFile) => {
      simulateUpload(uploadedFile.id);
    });
  };

  const simulateUpload = (fileId: string) => {
    // Update status to uploading
    setFiles((prev) =>
      prev.map((f) => (f.id === fileId ? { ...f, status: 'uploading' } : f))
    );

    // Simulate progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // Simulate completion with random success/failure
        const isSuccess = Math.random() > 0.1; // 90% success rate
        setFiles((prev) =>
          prev.map((f) =>
            f.id === fileId
              ? {
                  ...f,
                  progress: 100,
                  status: isSuccess ? 'complete' : 'error',
                  error: isSuccess ? undefined : 'Upload failed. Please try again.',
                }
              : f
          )
        );
      } else {
        setFiles((prev) =>
          prev.map((f) => (f.id === fileId ? { ...f, progress } : f))
        );
      }
    }, 500);
  };

  const removeFile = (fileId: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  const clearAll = () => {
    setFiles([]);
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Drag and Drop Area */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="text-sm text-slate-300">Convert images to:</span>
        <button
          type="button"
          onClick={() => setTargetFormat('png')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            targetFormat === 'png'
              ? 'bg-cyan-500 text-slate-950'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          PNG
        </button>
        <button
          type="button"
          onClick={() => setTargetFormat('jpeg')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            targetFormat === 'jpeg'
              ? 'bg-cyan-500 text-slate-950'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          JPG
        </button>
      </div>

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
          accept="*/*"
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

      {/* Files List */}
      {files.length > 0 && (
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">
              {files.length} file{files.length !== 1 ? 's' : ''} uploaded
            </h3>
            {files.length > 0 && (
              <button
                onClick={clearAll}
                className="text-sm text-slate-400 hover:text-red-400 transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="space-y-3">
            {files.map((uploadedFile) => (
              <div
                key={uploadedFile.id}
                className="rounded-lg border border-white/10 bg-slate-900/50 p-4 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {uploadedFile.file.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {getFormatFileSize(uploadedFile.file.size)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        uploadedFile.status === 'complete'
                          ? 'bg-green-400/20 text-green-300'
                          : uploadedFile.status === 'error'
                          ? 'bg-red-400/20 text-red-300'
                          : uploadedFile.status === 'uploading'
                          ? 'bg-cyan-400/20 text-cyan-300'
                          : 'bg-slate-400/20 text-slate-300'
                      }`}
                    >
                      {uploadedFile.progress.toFixed(0)}%
                    </span>

                    <button
                      onClick={() => removeFile(uploadedFile.id)}
                      className="text-slate-400 hover:text-red-400 transition-colors p-1"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 rounded-full ${
                      uploadedFile.status === 'complete'
                        ? 'bg-gradient-to-r from-green-400 to-green-500'
                        : uploadedFile.status === 'error'
                        ? 'bg-gradient-to-r from-red-400 to-red-500'
                        : 'bg-gradient-to-r from-cyan-400 to-cyan-500'
                    }`}
                    style={{ width: `${uploadedFile.progress}%` }}
                  />
                </div>

                {/* Status Messages */}
                <div className="mt-2 flex items-center gap-2">
                  {uploadedFile.status === 'complete' && (
                    <>
                      <FiCheck className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-green-300">Upload complete</span>
                    </>
                  )}
                  {uploadedFile.status === 'error' && (
                    <span className="text-xs text-red-300">{uploadedFile.error}</span>
                  )}
                  {uploadedFile.status === 'uploading' && (
                    <span className="text-xs text-cyan-300">Uploading...</span>
                  )}
                  {uploadedFile.status === 'pending' && (
                    <span className="text-xs text-slate-400">Pending...</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {files.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">No files uploaded yet</p>
        </div>
      )}
    </div>
  );
}
