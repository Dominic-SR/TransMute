// ─── Images ───────────────────────────────────────────────────────────────────

export const isJpegFile = (file: File) =>
  file.type === 'image/jpeg' || /\.(jpe?g)$/i.test(file.name);

export const isPngFile = (file: File) =>
  file.type === 'image/png' || /\.png$/i.test(file.name);

export const isGifFile = (file: File) =>
  file.type === 'image/gif' || /\.gif$/i.test(file.name);

export const isWebpFile = (file: File) =>
  file.type === 'image/webp' || /\.webp$/i.test(file.name);

export const isSvgFile = (file: File) =>
  file.type === 'image/svg+xml' || /\.svg$/i.test(file.name);

export const isBmpFile = (file: File) =>
  file.type === 'image/bmp' || /\.bmp$/i.test(file.name);

export const isTiffFile = (file: File) =>
  file.type === 'image/tiff' || /\.tiff?$/i.test(file.name);

export const isIcoFile = (file: File) =>
  file.type === 'image/x-icon' || file.type === 'image/vnd.microsoft.icon' || /\.ico$/i.test(file.name);

export const isAvifFile = (file: File) =>
  file.type === 'image/avif' || /\.avif$/i.test(file.name);

export const isHeicFile = (file: File) =>
  file.type === 'image/heic' || file.type === 'image/heif' || /\.hei[cf]$/i.test(file.name);

// ─── Video ────────────────────────────────────────────────────────────────────

export const isMp4File = (file: File) =>
  file.type === 'video/mp4' || /\.mp4$/i.test(file.name);

export const isWebmVideoFile = (file: File) =>
  file.type === 'video/webm' || /\.webm$/i.test(file.name);

export const isOggVideoFile = (file: File) =>
  file.type === 'video/ogg' || /\.og[gv]$/i.test(file.name);

export const isMovFile = (file: File) =>
  file.type === 'video/quicktime' || /\.mov$/i.test(file.name);

export const isAviFile = (file: File) =>
  file.type === 'video/x-msvideo' || /\.avi$/i.test(file.name);

export const isMkvFile = (file: File) =>
  file.type === 'video/x-matroska' || /\.mkv$/i.test(file.name);

export const isFlvFile = (file: File) =>
  file.type === 'video/x-flv' || /\.flv$/i.test(file.name);

export const isWmvFile = (file: File) =>
  file.type === 'video/x-ms-wmv' || /\.wmv$/i.test(file.name);

// ─── Audio ────────────────────────────────────────────────────────────────────

export const isMp3File = (file: File) =>
  file.type === 'audio/mpeg' || /\.mp3$/i.test(file.name);

export const isWavFile = (file: File) =>
  file.type === 'audio/wav' || file.type === 'audio/x-wav' || /\.wav$/i.test(file.name);

export const isOggAudioFile = (file: File) =>
  file.type === 'audio/ogg' || /\.oga$/i.test(file.name);

export const isFlacFile = (file: File) =>
  file.type === 'audio/flac' || /\.flac$/i.test(file.name);

export const isAacFile = (file: File) =>
  file.type === 'audio/aac' || /\.aac$/i.test(file.name);

export const isM4aFile = (file: File) =>
  file.type === 'audio/mp4' || file.type === 'audio/x-m4a' || /\.m4a$/i.test(file.name);

export const isWebmAudioFile = (file: File) =>
  file.type === 'audio/webm' || /\.weba$/i.test(file.name);

// ─── Documents ────────────────────────────────────────────────────────────────

export const isPdfFile = (file: File) =>
  file.type === 'application/pdf' || /\.pdf$/i.test(file.name);

export const isDocFile = (file: File) =>
  file.type === 'application/msword' || /\.doc$/i.test(file.name);

export const isDocxFile = (file: File) =>
  file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
  /\.docx$/i.test(file.name);

export const isXlsFile = (file: File) =>
  file.type === 'application/vnd.ms-excel' || /\.xls$/i.test(file.name);

export const isXlsxFile = (file: File) =>
  file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
  /\.xlsx$/i.test(file.name);

export const isPptFile = (file: File) =>
  file.type === 'application/vnd.ms-powerpoint' || /\.ppt$/i.test(file.name);

export const isPptxFile = (file: File) =>
  file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ||
  /\.pptx$/i.test(file.name);

export const isOdtFile = (file: File) =>
  file.type === 'application/vnd.oasis.opendocument.text' || /\.odt$/i.test(file.name);

export const isRtfFile = (file: File) =>
  file.type === 'application/rtf' || file.type === 'text/rtf' || /\.rtf$/i.test(file.name);

// ─── Text / Code ──────────────────────────────────────────────────────────────

export const isTextFile = (file: File) =>
  file.type === 'text/plain' || /\.txt$/i.test(file.name);

export const isCsvFile = (file: File) =>
  file.type === 'text/csv' || /\.csv$/i.test(file.name);

export const isJsonFile = (file: File) =>
  file.type === 'application/json' || /\.jsonc?$/i.test(file.name);

export const isXmlFile = (file: File) =>
  file.type === 'application/xml' || file.type === 'text/xml' || /\.xml$/i.test(file.name);

export const isHtmlFile = (file: File) =>
  file.type === 'text/html' || /\.html?$/i.test(file.name);

export const isCssFile = (file: File) =>
  file.type === 'text/css' || /\.css$/i.test(file.name);

export const isJsFile = (file: File) =>
  file.type === 'text/javascript' || file.type === 'application/javascript' ||
  /\.[cm]?jsx?$/i.test(file.name);

export const isTsFile = (file: File) =>
  file.type === 'text/typescript' || file.type === 'application/typescript' ||
  /\.[cm]?tsx?$/i.test(file.name);

export const isMarkdownFile = (file: File) =>
  file.type === 'text/markdown' || /\.mdx?$/i.test(file.name);

export const isYamlFile = (file: File) =>
  file.type === 'application/yaml' || file.type === 'text/yaml' ||
  /\.ya?ml$/i.test(file.name);

// ─── Archives ─────────────────────────────────────────────────────────────────

export const isZipFile = (file: File) =>
  file.type === 'application/zip' || file.type === 'application/x-zip-compressed' ||
  /\.zip$/i.test(file.name);

export const isTarFile = (file: File) =>
  file.type === 'application/x-tar' || /\.tar$/i.test(file.name);

export const isGzFile = (file: File) =>
  file.type === 'application/gzip' || /\.(gz|tgz)$/i.test(file.name);

export const isRarFile = (file: File) =>
  file.type === 'application/x-rar-compressed' || file.type === 'application/vnd.rar' ||
  /\.rar$/i.test(file.name);

export const is7zFile = (file: File) =>
  file.type === 'application/x-7z-compressed' || /\.7z$/i.test(file.name);

// ─── Fonts ────────────────────────────────────────────────────────────────────

export const isTtfFile = (file: File) =>
  file.type === 'font/ttf' || /\.ttf$/i.test(file.name);

export const isOtfFile = (file: File) =>
  file.type === 'font/otf' || /\.otf$/i.test(file.name);

export const isWoffFile = (file: File) =>
  file.type === 'font/woff' || /\.woff$/i.test(file.name);

export const isWoff2File = (file: File) =>
  file.type === 'font/woff2' || /\.woff2$/i.test(file.name);