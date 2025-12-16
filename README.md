# JLPT Flashcard App

A modern, adaptive Japanese language learning application for JLPT (Japanese Language Proficiency Test) preparation.

![JLPT Levels](https://img.shields.io/badge/JLPT-N5%20%7C%20N4-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Platform](https://img.shields.io/badge/platform-Web%20%7C%20PWA-orange)

## ✨ Features

### 📚 Multi-Level Vocabulary
- **N5**: 230+ beginner words
- **N4**: 520+ elementary words
- **N3**: Coming soon (~700 words)

### 🧠 Spaced Repetition System
Scientific learning algorithm that optimizes review timing:
- Tracks your progress per word
- Prioritizes words you struggle with
- Adaptive intervals from 10 minutes to 30 days

### 🎯 Multiple Quiz Modes
- **Multiple Choice**: Classic 4-option quiz
- **Mixed Challenge**: Random question directions
- **Speed Challenge**: Timed responses
- **Kanji Only**: No reading hints
- **Listening First**: Audio-based questions

### 🗣️ Audio Pronunciation
- Google Cloud TTS integration
- Natural Japanese pronunciation
- Cached locally for offline use

### 📝 Particle Grammar Quiz
Practice essential Japanese particles with contextual fill-in-the-blank questions.

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- No installation required - runs in browser

### Access the App
Visit the live site: [Your Netlify URL]

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/kevvykevwin/JLPT.git
   cd JLPT
   ```

2. **Start a local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using VS Code Live Server extension
   # Right-click index.html → "Open with Live Server"
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

---

## 📖 How to Use

### Study Mode
1. View flashcards with Japanese word and reading
2. Press **Space** or click to flip and reveal meaning
3. Use **←/→** arrows to navigate between cards
4. Toggle kana mode to hide/show readings

### Quiz Mode
1. Select a quiz type from the dropdown
2. Answer questions by clicking options
3. Track your progress with the session stats
4. Complete batches of 10 questions for reviews

### Level Selection
1. Open the hamburger menu (☰)
2. Choose your JLPT level (N5 or N4)
3. Progress is saved separately per level

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `Space` | Flip card / Select answer |
| `←` | Previous card |
| `→` | Next card |
| `1-4` | Select quiz option |
| `S` | Shuffle deck |

---

## 🏗️ Architecture

```
assets/
├── css/           # Modular stylesheets
├── js/
│   ├── app.js     # Entry point
│   ├── controllers/ # Event handlers
│   ├── core/      # Data & algorithms
│   ├── features/  # Quiz, audio, particles
│   ├── state/     # State management
│   └── ui/        # UI rendering
└── netlify/
    └── functions/ # Serverless TTS function
```

See [CLAUDE.md](CLAUDE.md) for detailed architecture documentation.

---

## 🛠️ Development

### Branch Strategy
- `main` - Production (deployed to Netlify)
- `develop` - Staging (branch deploy for testing)
- `feature/*` - Feature branches

### Adding Vocabulary

1. Create a new vocabulary file:
   ```javascript
   // assets/js/core/vocabularyN3.js
   export const N3_VOCABULARY = [
       { japanese: "経験", reading: "けいけん", meaning: "experience", type: "noun" },
       // ...
   ];
   ```

2. Register in `vocabulary.js`:
   ```javascript
   import { N3_VOCABULARY } from './vocabularyN3.js';
   
   export const LEVEL_CONFIG = {
       // ...
       N3: { level: 'N3', vocabulary: N3_VOCABULARY, enabled: true }
   };
   ```

3. Add UI option in `index.html`

### Running Tests
Currently manual testing. Automated tests planned for future releases.

---

## 📱 Mobile Support

The app is fully responsive and works on:
- iOS Safari (13+)
- Chrome Mobile (80+)
- Android WebView

PWA support allows "Add to Home Screen" for app-like experience.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly on staging
5. Submit a Pull Request

### Code Style
- ES6 modules
- Descriptive naming
- Minimal comments (code should be self-documenting)
- Follow existing patterns

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- JLPT vocabulary sourced from official curriculum standards
- Google Cloud Text-to-Speech for audio
- Spaced repetition algorithm inspired by SM-2

---

## 📞 Support

Having issues? Here are some options:
1. Check the [Troubleshooting section in CLAUDE.md](CLAUDE.md#troubleshooting)
2. Open an issue on GitHub
3. Use the in-app feedback form

---

## 🗺️ Roadmap

- [x] N5 vocabulary (230+ words)
- [x] N4 vocabulary (520+ words)
- [x] Spaced repetition system
- [x] Multiple quiz modes
- [x] Audio pronunciation
- [x] Particle grammar quiz
- [ ] N3 vocabulary (~700 words)
- [ ] Offline mode (service worker)
- [ ] Mobile app wrapper
- [ ] Progress sync across devices
- [ ] Learning analytics dashboard

---

**頑張って！** (Good luck with your studies!) d
