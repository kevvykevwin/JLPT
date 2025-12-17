# JLPT Flashcard App - Development Guide

## Project Overview

A comprehensive Japanese language learning web application for JLPT N5/N4/N3 vocabulary and grammar practice. Features adaptive spaced repetition, multiple quiz modes, time-based themes, and progressive learning states.

**Live App**: https://nihongotanoshimi.com/  
**Stack**: Vanilla JavaScript (ES6 modules), CSS3, HTML5, Netlify Functions

---

## Architecture (December 2025)

### Directory Structure
```
.
├── assets/
│   ├── css/
│   │   ├── base.css              # Core layout, typography
│   │   ├── components.css        # Flashcards, buttons, level badges
│   │   ├── modal.css             # Modal dialogs
│   │   ├── particle-quiz.css     # Particle/grammar quiz styling
│   │   ├── quiz.css              # Quiz modes, kana toggle, speed timer
│   │   ├── responsive.css        # Mobile breakpoints (320px → 1200px+)
│   │   ├── stats.css             # Statistics display
│   │   └── styles.css            # Time-based background themes
│   ├── images/
│   │   └── backgrounds/
│   │       ├── morning.jpg       # 6am-12pm theme
│   │       ├── afternoon.jpg     # 12pm-5pm theme
│   │       ├── evening.jpg       # 5pm-8pm theme
│   │       └── night.jpg         # 8pm-6am theme
│   └── js/
│       ├── core/
│       │   ├── vocabulary.js         # Multi-level vocabulary manager
│       │   ├── vocabularyN5.js       # 460+ N5 words
│       │   ├── vocabularyN4.js       # 486+ N4 words
│       │   ├── vocabularyN4kanji.js  # 300+ N4 kanji entries
│       │   ├── vocabularyN3.js       # 524 N3 words
│       │   ├── vocabularyN3kanji.js  # N3 kanji entries
│       │   ├── storage.js            # Level-aware localStorage
│       │   ├── spacedRepetition.js   # SRS algorithm
│       │   ├── particleDataN5.js     # 12 N5 particles (standalone)
│       │   ├── particleDataN4.js     # 8 N4 particles (standalone)
│       │   ├── grammarN3.js          # 47 N3 grammar patterns
│       │   └── particleGrammarLoader.js  # Unified content loader
│       ├── features/
│       │   ├── audioSystem.js        # TTS with IndexedDB caching
│       │   ├── particleQuiz.js       # Particle/grammar quiz engine
│       │   └── quiz.js               # Vocabulary quiz logic
│       ├── state/
│       │   ├── AppState.js           # Central state container
│       │   └── StateManager.js       # State subscriptions
│       ├── ui/
│       │   ├── UIManager.js          # UI coordinator
│       │   ├── CardRenderer.js       # Flashcard rendering
│       │   ├── QuizRenderer.js       # Quiz UI
│       │   ├── FilterManager.js      # Type filters & level switching
│       │   ├── ModalManager.js       # Modal dialogs
│       │   ├── NotificationManager.js
│       │   └── StatsUpdater.js       # Progress statistics
│       ├── controllers/
│       │   ├── KeyboardController.js
│       │   └── NavigationController.js
│       ├── utils/
│       │   └── timeBackground.js     # Time-based theme switcher
│       └── app.js                    # Main coordinator
├── netlify/
│   └── functions/
│       └── tts.js                    # Google Cloud TTS API
├── index.html
├── manifest.json
├── package.json
├── CLAUDE.md
└── README.md

14 directories, 47 files
```

---

## Content by Level

| Level | Vocabulary | Particles/Grammar | Status |
|-------|------------|-------------------|--------|
| **N5** | 460+ words | 12 particles (は, が, を, に, で, と, の, も, か, から, まで, へ) | ✅ Active |
| **N4** | 486+ words + 300 kanji | 8 particles (や, より, など, だけ, しか, ばかり, ずつ, くらい) | ✅ Active |
| **N3** | 524 words (290 nouns, 207 verbs, 24 na-adj, 3 i-adj) | 47 grammar patterns | ✅ Active |

---

## Key Architecture Decisions

### Particle Data Split (New)
The monolithic `particleData.js` was refactored into standalone files:
- `particleDataN5.js` - Self-contained with own difficulty/category constants
- `particleDataN4.js` - Self-contained, no imports from N5
- This enables independent loading and reduces bundle size per level

### Grammar Loader System (New)
`particleGrammarLoader.js` provides a unified API for both particles and grammar:
```javascript
// Content types differentiate N5/N4 (particles) from N3+ (grammar)
export const contentTypes = {
    PARTICLE: 'particle',
    GRAMMAR: 'grammar'
};

// Normalized question format works for both types
getRandomQuestion(level) → { 
    particle: '...' | null,  // For N5/N4
    pattern: '...' | null,   // For N3+
    answer, japanese, english, options, explanation...
}
```

### Time-Based Backgrounds (New)
`timeBackground.js` automatically applies themes based on local time:
- **Morning** (6am-12pm): Warm, light overlay
- **Afternoon** (12pm-5pm): Fresh, green-tinted overlay
- **Evening** (5pm-8pm): Golden hour warmth
- **Night** (8pm-6am): Cool, blue-tinted overlay

CSS classes: `.time-morning`, `.time-afternoon`, `.time-evening`, `.time-night`

---

## Quiz Modes

| Mode | Description | Content Type |
|------|-------------|--------------|
| Multiple Choice | Japanese → English | Vocabulary |
| Listening First | Audio-based | Vocabulary |
| Mixed Challenge | Random JP↔EN direction | Vocabulary |
| Speed Challenge | 8-second timer | Vocabulary |
| Kanji Only | Character recognition | Vocabulary |
| Particle Quiz | Fill-in-the-blank particles | N5/N4 Particles |
| Grammar Quiz | Pattern recognition | N3 Grammar |

---

## Critical Implementation Notes

### Level Switching with Content Type Awareness
```javascript
// FilterManager must check content type when switching levels
handleLevelChange(level) {
    // Switch vocabulary
    this.vocabulary.switchLevel(level);
    
    // Reinitialize spaced repetition
    this.stateManager.sr.initialize();
    
    // Update particle/grammar quiz based on content type
    const contentType = getContentType(level);
    if (contentType === 'particle') {
        this.particleQuiz.setJLPTLevel(level);
    } else if (contentType === 'grammar') {
        this.particleQuiz.setGrammarMode(level);
    }
}
```

### Quiz Answer Direction (Mixed Challenge)
```javascript
// QuizRenderer tracks question direction
this.currentQuestionDirection = Math.random() < 0.5 ? 'jp-to-en' : 'en-to-jp';
// EN→JP: Show Japanese answers + optional kana
// JP→EN: Show English meanings
```

### Kana Toggle
- **Scope**: Affects answer OPTIONS only, never question text
- **Position**: Top-left inside quiz container
- **Keyboard**: 'K' key toggles
- **Persistence**: Within session only

### Speed Challenge Timer
- **Position**: Top-right corner (`right: 15px`)
- **Duration**: 8 seconds
- **Timeout**: Must call `selectQuizAnswer(null, card, card, true)` with `isTimeout=true`

---

## Spaced Repetition System

### Learning States
```
new → learning_1 → learning_2 → review_1 → review_2 → review_3 → mastered
```

### Intervals
| State | Interval |
|-------|----------|
| learning_1 | 10 minutes |
| learning_2 | 1 hour |
| review_1 | 1 day |
| review_2 | 3 days |
| review_3 | 1 week |
| mastered | 30 days |

### Visual Indicators
- **Blue border + "N"**: New
- **Orange border + "L"**: Learning
- **Purple border + "R"**: Review
- **Green border + "M"**: Mastered

---

## File Dependencies

```
app.js
├── core/vocabulary.js
│   ├── vocabularyN5.js
│   ├── vocabularyN4.js
│   └── vocabularyN3.js
├── core/storage.js
├── core/spacedRepetition.js
├── core/particleGrammarLoader.js
│   ├── particleDataN5.js
│   ├── particleDataN4.js
│   └── grammarN3.js
├── features/audioSystem.js
├── features/particleQuiz.js
└── utils/timeBackground.js
```

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Space/Enter | Flip card / Next question |
| ← → | Navigate cards |
| 1-4 | Select quiz answer |
| K | Toggle kana display |

---

## Common Issues & Solutions

### Time Background Not Changing
- Check `timeBackground.js` is imported in app.js
- Verify body classes are being applied
- Check for CSS specificity conflicts with `!important`

### N3 Grammar Not Loading
- Ensure `grammarN3.js` exports `grammarPatterns` array
- Verify `particleGrammarLoader.js` imports correctly
- Check console for loader initialization message

### Particle Quiz Shows Wrong Level Content
- Confirm `particleQuiz.setJLPTLevel()` called on level switch
- Check `getContentType(level)` returns correct type
- Verify `particleDataN5.js` and `particleDataN4.js` are standalone

### Progress Not Persisting
- Storage keys are level-prefixed: `jlpt-word-progress-N5`, etc.
- Check localStorage quota not exceeded
- Verify `storage.js` `getCurrentLevel()` returns correct level

---

## Development Workflow

1. **Local Testing**: VS Code Live Server or `npx netlify dev`
2. **Debug**: `window.jlptApp` exposes app instance
3. **Branch Strategy**: `main` for production, `develop` for testing
4. **Deploy**: Auto-deploys on push to configured Netlify branch

---

## Future Enhancements

- [ ] N2/N1 vocabulary and grammar
- [ ] Kanji-specific quiz modes (on-yomi/kun-yomi)
- [ ] Enhanced grammar explanation modals
- [ ] PWA offline mode with service worker
- [ ] Progress export/sync across devices
- [ ] Dark mode toggle (currently time-based only)
