# 🔄 TransMute

A modern, fast, and user-friendly file converter application built with React and TypeScript. Convert your files effortlessly with an intuitive interface and real-time progress tracking.

## ✨ Features

- **🖼️ Image Format Conversion**
  - JPEG ↔ PNG conversion with automatic format detection
  - Canvas-based conversion for high-quality output
  - Configurable JPEG quality (0.92 by default)
  - Intelligent file type validation using MIME types and extensions
  - Support for multiple image formats detection (GIF, WebP, SVG, BMP, TIFF, ICO, AVIF, HEIC)
  
- **✨ User-Friendly Interface**
  - Drag-and-drop file upload with visual feedback
  - Click to browse and select multiple files simultaneously
  - Real-time upload progress tracking with visual progress bars
  - Responsive design optimized for desktop and mobile devices
  - Instant file status indicators (pending, uploading, complete, error)

- **🎨 Theme Support**
  - Dark mode (default) with professional dark theme
  - Light mode with clean, bright interface
  - Automatic theme detection based on system preferences
  - Persistent theme preference storage using localStorage

- **🗺️ Navigation & Pages**
  - Home page with quick access to key features
  - Dedicated Convert page with format selection
  - Comprehensive Documentation page
  - About page with project information

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/transmute.git
   cd transmute
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📦 Build & Deployment

### Development

```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR).

### Production Build

```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```
Previews the production build locally before deployment.

### Linting

```bash
npm run lint
```
Runs ESLint to check code quality and style compliance.

## 🛠️ Tech Stack

- **Framework**: React 19.x with TypeScript
- **Language**: TypeScript 5.x
- **Build Tool**: Vite 8.x (Lightning-fast module bundler)
- **Styling**: Tailwind CSS 4.x (Utility-first CSS framework)
- **Routing**: React Router DOM 7.x (Client-side routing)
- **Icons**: React Icons 5.x (Comprehensive icon library)
- **Package Manager**: npm (Node Package Manager)
- **Linting**: ESLint (Code quality and consistency)

## 📁 Project Structure

```
transmute/
├── src/
│   ├── pages/                      # Application pages
│   │   ├── Home.tsx               # Landing page with feature overview
│   │   ├── Convert.tsx            # Main file converter page
│   │   ├── Docs.tsx               # Documentation and usage guide
│   │   └── About.tsx              # Project information
│   ├── components/                # Reusable React components
│   │   ├── FileUpload.tsx         # File upload and conversion handler
│   │   ├── Navbar.tsx             # Top navigation bar with theme switcher
│   │   ├── Sidebar.tsx            # Sidebar navigation menu
│   │   └── GridBox.tsx            # Grid layout component for tools
│   ├── utilities/                 # Helper functions and utilities
│   │   ├── CheckFileType.tsx      # File type detection functions
│   │   │   ├── isJpegFile()       # Detects JPEG files
│   │   │   ├── isPngFile()        # Detects PNG files
│   │   │   ├── isGifFile()        # Detects GIF files
│   │   │   └── ... more formats   # Additional image/video format detection
│   │   └── FileHelper.tsx         # File utility functions
│   │       └── formatFileSize()   # Formats bytes to readable size
│   ├── assets/                    # Static assets
│   │   ├── dataset/               # Data definitions
│   │   │   └── ToolsList.tsx      # Available tools configuration
│   │   └── Images/                # Image files and icons
│   ├── App.tsx                    # Main application component
│   ├── main.tsx                   # Application entry point
│   ├── App.css                    # App-level styles
│   └── index.css                  # Global styles
├── public/                        # Public static files
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript configuration
├── eslint.config.js               # ESLint configuration
├── package.json                   # Project dependencies
├── LICENSE                        # MIT License
└── README.md                       # This file
```

## 🎯 How to Use

1. **Navigate to the Convert Page**
   - Click "Convert" in the navigation bar or select a converter tool from the home page

2. **Upload Files**
   - **Option A (Drag & Drop):** Drag files directly into the upload zone
   - **Option B (Browse):** Click the upload area to open file browser and select files
   - Support for multiple file selection

3. **Select Output Format**
   - Choose your desired output format: **PNG** or **JPEG**
   - The app automatically detects source format and validates compatibility

4. **Monitor Progress**
   - Real-time progress bar shows conversion status
   - Color-coded status indicators:
     - 🔵 **Blue**: Uploading/Converting
     - 🟢 **Green**: Complete
     - 🔴 **Red**: Error
     - ⚪ **Gray**: Pending

5. **Download or Manage Files**
   - Remove individual files with the **×** button
   - Clear all files with the **"Clear all"** button
   - Files are processed sequentially with error handling

## 🎨 Customization

### Theme Customization

The app supports light and dark themes. Theme preferences are automatically saved and synced with system preferences. Toggle themes using the theme switcher in the navigation bar.

### Adding New Converters

To add new file format conversions:

1. **Add Detection Function** in `src/utilities/CheckFileType.tsx`:
   ```typescript
   export const isMyFormatFile = (file: File) =>
     file.type === 'my/type' || /\.myformat$/i.test(file.name);
   ```

2. **Add Tool Definition** in `src/assets/dataset/ToolsList.tsx`

3. **Add Tool Icon/Image** to `src/assets/Images/`

4. **Update Conversion Logic** in `FileUpload.tsx`:
   - Extend format type unions
   - Add conversion canvas logic
   - Update MIME types and file extensions

5. **Test thoroughly** with various file types

## � File Type Detection

TransMute uses intelligent file type detection combining two methods:

1. **MIME Type Detection**: Checks the browser's detected MIME type
2. **Extension Validation**: Regex-based file extension validation as fallback

### Supported Format Detection

**Image Formats:**
- JPEG/JPG (image/jpeg)
- PNG (image/png)
- GIF (image/gif)
- WebP (image/webp)
- SVG (image/svg+xml)
- BMP (image/bmp)
- TIFF (image/tiff)
- ICO (image/x-icon)
- AVIF (image/avif)
- HEIC/HEIF (image/heic, image/heif)

**Video Formats:** MP4, WebM, OGG, MOV, AVI, MKV (detection ready for future conversions)

This dual-validation approach ensures reliable format detection even with renamed files.

## �🔐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Environment Variables

No environment variables required for basic setup. The app stores user preferences (theme) in localStorage.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the actual URL.

### Theme Not Persisting
- Clear your browser's localStorage
- Press `F12` → Application → Storage → Local Storage → Clear All
- Reload the page

### Conversion Fails
- Ensure the file is a valid image (not corrupted)
- Check browser console for detailed error messages (`F12` → Console)
- Try with a different image file to isolate the issue

### Build Errors
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` to reinstall dependencies
- Ensure Node.js version is v16 or higher
- Clear npm cache: `npm cache clean --force`

### File Upload Hangs
- Check browser console for errors
- Verify file size is reasonable (< 100MB)
- Try a smaller test image
- Clear browser cache and reload

## ⚡ Performance

TransMute is optimized for speed and efficiency:

- **Vite** provides near-instant hot module replacement (HMR)
- **Canvas-based** image conversion for efficient browser processing
- **Lazy loading** of components for faster initial page load
- **Responsive UI** with minimal re-renders using React hooks
- Batch file processing with progress feedback

##  Support & Feedback

For issues, questions, or suggestions:
- 🐛 Open an issue on [GitHub Issues](https://github.com/yourusername/transmute/issues)
- 💬 Discuss ideas in [GitHub Discussions](https://github.com/yourusername/transmute/discussions)
- 📄 Review the [Docs page](/) for comprehensive guides
- ℹ️ Check the [About page](/) for project information

## 📚 Future Enhancements

- [ ] Batch download as ZIP
- [ ] Video format conversion
- [ ] Advanced image editing (crop, resize, filters)
- [ ] Cloud storage integration
- [ ] API endpoint for server-side conversion
- [ ] Compression options
- [ ] Multi-format batch conversion
- [ ] Offline mode support
- [ ] WebP, GIF, SVG format support

---

**Made with ❤️ by the TransMute Team**
