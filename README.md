# 日本語 JLPT Flashcard App

A modern, adaptive Japanese vocabulary and grammar learning application for JLPT N5, N4, and N3 preparation.

🌐 **Live App**: [nihongotanoshimi.com](https://nihongotanoshimi.com/)

---

## ✨ Features

### 📚 Comprehensive Content
| Level | Vocabulary | Grammar/Particles |
|-------|------------|-------------------|
| **N5** | 460+ words | 12 essential particles |
| **N4** | 486+ words | 8 additional particles |
| **N3** | 524 words | 47 grammar patterns |

### 🧠 Smart Learning
- **Spaced Repetition**: Scientific intervals adapt to your performance
- **Learning States**: Visual progress tracking (New → Learning → Review → Mastered)
- **Per-Level Progress**: Stats saved separately for each JLPT level

### 🎮 Quiz Modes
| Mode | Description |
|------|-------------|
| **Multiple Choice** | Japanese → English vocabulary |
| **Listening First** | Audio-based learning |
| **Mixed Challenge** | Random direction (JP↔EN) |
| **Speed Challenge** | 8-second time pressure |
| **Kanji Only** | Character recognition |
| **Particle Quiz** | Fill-in-the-blank (N5/N4) |
| **Grammar Quiz** | Pattern recognition (N3) |

### 🎨 Adaptive Themes
Time-based backgrounds automatically adjust to your local time:
- 🌅 Morning (6am-12pm)
- ☀️ Afternoon (12pm-5pm)
- 🌇 Evening (5pm-8pm)
- 🌙 Night (8pm-6am)

### 🔊 Audio Features
- Native pronunciation via Text-to-Speech
- Audio caching for instant playback
- Listening-first quiz mode

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` / `Enter` | Flip card / Next question |
| `←` `→` | Navigate cards |
| `1` `2` `3` `4` | Select quiz answers |
| `K` | Toggle kana display |

---

## 🏗️ Tech Stack

- **Frontend**: Vanilla JavaScript (ES6 modules)
- **Styling**: CSS3 with responsive design
- **Backend**: Netlify Functions (TTS API)
- **Storage**: localStorage (level-prefixed keys)
- **Architecture**: Modular MVC-inspired structure

---

## 📁 Project Structure

```
├── assets/
│   ├── css/           # Modular stylesheets (8 files)
│   ├── images/        # Time-based background images
│   └── js/
│       ├── core/      # Vocabulary, particles, grammar, storage, SRS
│       ├── features/  # Audio, quiz engines
│       ├── state/     # State management
│       ├── ui/        # UI components & renderers
│       ├── controllers/
│       ├── utils/     # Time background utility
│       └── app.js     # Main coordinator
├── netlify/functions/ # Serverless TTS function
└── index.html
```

---

## 🚀 Getting Started

### Prerequisites
- Modern browser (Chrome 80+, Firefox 75+, Safari 13+)
- Node.js (optional, for local Netlify functions)

### Local Development
```bash
# Clone the repository
git clone https://github.com/kevvykevwin/JLPT.git
cd JLPT

# Option 1: Netlify Dev (includes functions)
npm install
npx netlify dev

# Option 2: Simple static server
# Use VS Code Live Server or similar
```

---

## 📖 Learning Path

1. **Study Mode** — Flip through cards to familiarize yourself
2. **Multiple Choice** — Test basic recognition
3. **Mixed Challenge** — Practice both directions
4. **Speed Mode** — Build recall speed
5. **Kanji Only** — Focus on character recognition
6. **Particle/Grammar Quiz** — Master sentence structure

---

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Follow existing code patterns
4. Test on mobile devices
5. Submit a PR with clear description

---

## 📄 License

MIT License - feel free to use and modify for your learning needs.

---

頑張って！ Good luck with your JLPT studies! 🎌
