# 🔄 TransMute

A modern, fast, and user-friendly file converter application built with React and TypeScript. Convert your files effortlessly with an intuitive interface and real-time progress tracking.

## ✨ Features

- **Image Format Conversion**
  - JPG to PNG conversion
  - PNG to JPG conversion
  - Quick and efficient processing
  
- **User-Friendly Interface**
  - Drag-and-drop file upload
  - Click to browse and select files
  - Real-time upload progress tracking
  - Responsive design for desktop and mobile devices

- **Theme Support**
  - Dark mode (default)
  - Light mode
  - Automatic theme detection based on system preferences
  - Persistent theme preference storage

- **Navigation**
  - Home page with quick access to converters
  - Dedicated convert page with format selection
  - Documentation for guidance
  - About page for project information

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

- **Framework**: React 19.2.6
- **Language**: TypeScript 6.0
- **Build Tool**: Vite 8.0
- **Styling**: Tailwind CSS 4.3.0
- **Routing**: React Router DOM 7.15.1
- **Icons**: React Icons 5.6.0
- **Package Manager**: npm

## 📁 Project Structure

```
transmute/
├── src/
│   ├── pages/              # Application pages
│   │   ├── Home.tsx        # Landing page
│   │   ├── Convert.tsx     # File converter page
│   │   ├── Docs.tsx        # Documentation page
│   │   └── About.tsx       # About page
│   ├── components/         # Reusable components
│   │   ├── FileUpload.tsx  # File upload handler
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Sidebar.tsx     # Sidebar navigation
│   │   ├── GrdidBox.tsx    # Grid layout component
│   │   └── FileUpload.tsx  # File upload component
│   ├── assets/             # Static assets
│   │   ├── dataset/        # Data definitions
│   │   │   └── ToolsList.tsx
│   │   └── Images/         # Image files
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Public static files
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies

```

## 🎯 How to Use

1. **Navigate to Convert**
   - Click on "Convert" in the navigation bar or select a converter tool from the home page

2. **Upload Files**
   - Drag and drop files into the upload area, or
   - Click the upload area to browse and select files

3. **Select Output Format**
   - Choose your desired output format (PNG or JPG)

4. **Monitor Progress**
   - Watch the real-time progress bar as files are being processed

5. **Download Converted Files**
   - Once complete, download your converted files directly

## 🎨 Customization

### Theme Customization

The app supports light and dark themes. Theme preferences are automatically saved and synced with system preferences. Toggle themes using the theme switcher in the navigation bar.

### Adding New Converters

To add new file format conversions:

1. Update `src/assets/dataset/ToolsList.tsx` with new tool definitions
2. Add corresponding images to `src/assets/Images/`
3. Extend `FileUpload.tsx` logic to handle new formats
4. Update the conversion logic as needed

## 🔐 Browser Support

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
If port 5173 is already in use, Vite will automatically use the next available port.

### Theme Not Persisting
Clear your browser's localStorage and reload the page.

### Build Errors
- Clear `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure Node.js version is v16 or higher

## 📞 Support

For issues, questions, or suggestions, please:
- Open an issue on GitHub
- Check existing documentation in the Docs page
- Review the About page for project information

## 🚀 Future Enhancements

- [ ] Additional image format conversions (WebP, GIF, SVG, etc.)
- [ ] Batch file processing
- [ ] Advanced image editing options
- [ ] Video format conversion
- [ ] Document format conversion (PDF, Word, etc.)
- [ ] Offline mode support
- [ ] Cloud storage integration

---

**Made with ❤️ by the TransMute Team**
