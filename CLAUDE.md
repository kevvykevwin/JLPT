# JLPT Flashcard App - Development Guide

> **For AI Assistants**: This document describes the architecture, patterns, and conventions of the JLPT flashcard application. Use this as context when helping with development.

## Project Overview

A Japanese language learning web application focused on JLPT (Japanese Language Proficiency Test) preparation. Features spaced repetition, multiple quiz modes, audio pronunciation, and particle grammar practice.

**Live Site**: Deployed on Netlify with GitHub integration  
**Target Users**: Japanese learners preparing for JLPT N5, N4, (and soon N3)

---

## Architecture

### Design Philosophy

The application uses a **modular architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────────┐
│                         app.js                              │
│                    (Entry Point & Coordinator)              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│   │ Controllers │  │     UI      │  │   Features  │        │
│   │ (Events)    │→ │ (Rendering) │← │ (Logic)     │        │
│   └─────────────┘  └─────────────┘  └─────────────┘        │
│          │               │               │                  │
│          └───────────────┴───────────────┘                  │
│                          │                                  │
│                    ┌─────▼─────┐                            │
│                    │   State   │                            │
│                    │ Management│                            │
│                    └─────┬─────┘                            │
│                          │                                  │
│                    ┌─────▼─────┐                            │
│                    │   Core    │                            │
│                    │ (Data)    │                            │
│                    └───────────┘                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### File Structure

```
assets/
├── css/
│   ├── base.css           # Core layout, typography, variables
│   ├── components.css     # Buttons, cards, toggles
│   ├── modal.css          # Modal dialogs
│   ├── particle-quiz.css  # Particle quiz styling
│   ├── quiz.css           # Quiz mode styling
│   ├── responsive.css     # Mobile/tablet breakpoints
│   └── stats.css          # Statistics display
│
└── js/
    ├── app.js             # Main entry point & coordinator
    │
    ├── controllers/       # Event handling & flow control
    │   ├── KeyboardController.js   # Keyboard shortcuts
    │   └── NavigationController.js # Card navigation
    │
    ├── core/              # Data & business logic
    │   ├── particleData.js        # Particle grammar data
    │   ├── spacedRepetition.js    # SRS algorithm
    │   ├── storage.js             # LocalStorage management
    │   ├── vocabulary.js          # Vocabulary manager
    │   ├── vocabularyN4.js        # N4 word list
    │   ├── vocabularyN4kanji.js   # N4 kanji-focused words
    │   └── vocabularyN5.js        # N5 word list
    │
    ├── features/          # Feature-specific logic
    │   ├── audioSystem.js    # TTS with IndexedDB caching
    │   ├── particleQuiz.js   # Particle grammar quiz
    │   └── quiz.js           # Quiz logic (partial)
    │
    ├── state/             # State management
    │   ├── AppState.js       # Central state container
    │   └── StateManager.js   # State mutations & subscriptions
    │
    └── ui/                # UI rendering
        ├── CardRenderer.js        # Flashcard display
        ├── FilterManager.js       # Word type & level filters
        ├── ModalManager.js        # Modal dialogs
        ├── NotificationManager.js # Toast notifications
        ├── QuizRenderer.js        # Quiz UI
        ├── StatsUpdater.js        # Statistics display
        └── UIManager.js           # UI coordinator
```

---

## Module Details

### Core Modules

#### `vocabulary.js`
Central vocabulary management with multi-level support.

```javascript
// Level configuration pattern
export const LEVEL_CONFIG = {
    N5: { level: 'N5', vocabulary: N5_VOCABULARY, enabled: true, color: '#4CAF50' },
    N4: { level: 'N4', vocabulary: N4_VOCABULARY, enabled: true, color: '#FF9800' },
    // N3: { level: 'N3', vocabulary: N3_VOCABULARY, enabled: true, color: '#2196F3' },
};

// Key exports
export class VocabularyManager {
    loadLevel(level)           // Switch vocabulary level
    getCurrentLevelInfo()      // Get current level metadata
    getAvailableLevels()       // List all levels
    switchLevel(newLevel)      // Change active level
    filterByTypes(types)       // Filter by word type
    shuffleArray(array)        // Fisher-Yates shuffle
    interleavedShuffle(array)  // Type-balanced shuffle
}
```

#### `storage.js`
Level-aware localStorage management with safe fallbacks.

```javascript
// Storage keys are prefixed by level
// e.g., 'jlpt-word-progress-N5', 'jlpt-word-progress-N4'

export class StorageManager {
    getCurrentLevel()          // Get saved level preference
    setCurrentLevel(level)     // Save level preference
    getWordProgress(level)     // Get SRS progress for level
    saveWordProgress(data)     // Save SRS progress
    getUserPreference(key)     // Get user settings
    setUserPreference(key, val)// Save user settings
}
```

#### `spacedRepetition.js`
Scientific spaced repetition implementation.

```javascript
// Learning states progression
// new → learning_1 → learning_2 → review_1 → review_2 → review_3 → mastered

// Review intervals (in milliseconds)
const INTERVALS = {
    learning_1: 10 * 60 * 1000,      // 10 minutes
    learning_2: 60 * 60 * 1000,      // 1 hour
    review_1: 24 * 60 * 60 * 1000,   // 1 day
    review_2: 3 * 24 * 60 * 60 * 1000, // 3 days
    review_3: 7 * 24 * 60 * 60 * 1000, // 1 week
    mastered: 30 * 24 * 60 * 60 * 1000 // 30 days
};

export class SpacedRepetitionManager {
    initialize()               // Load progress from storage
    getNextCards(count, filters) // Priority-based card selection
    updateWordProgress(word, correct) // Record answer result
    resetAllProgress()         // Clear all progress
}
```

### Feature Modules

#### `audioSystem.js`
Text-to-speech with IndexedDB caching.

```javascript
export class AudioSystem {
    initializeCache()          // Setup IndexedDB
    playAudio(text, options)   // Play Japanese audio
    getAudioFromCache(key)     // Check cache first
    saveAudioToCache(key, data)// Cache for 30 days
}

// Uses Netlify function for Google Cloud TTS
// Endpoint: /.netlify/functions/tts
```

#### `particleQuiz.js`
Japanese grammar particle practice.

```javascript
export class ParticleQuiz {
    constructor(jlptLevel)     // Initialize with level
    setJLPTLevel(level)        // Change particle set
    generateQuestion()         // Create particle fill-in
    validateAnswer(answer)     // Check correctness
    getAvailableParticleCount()// Count for current level
}
```

### State Management

#### `AppState.js`
Centralized state container.

```javascript
// State shape
{
    currentMode: 'study' | 'quiz',
    currentCardIndex: number,
    currentDeck: Array<Card>,
    activeFilters: Set<string>,
    isFlipped: boolean,
    kanaMode: boolean,
    quizAnswered: boolean,
    cardsStudied: Set<string>,
    flipCount: number
}
```

#### `StateManager.js`
State mutations with side effects.

```javascript
export class StateManager {
    loadInitialState()         // Hydrate from storage
    loadNewDeck()              // Get cards from SRS
    navigateToCard(direction)  // Move through deck
    flipCard()                 // Toggle card flip
    setMode(mode)              // Switch study/quiz
    applyFilters(filters)      // Update active filters
    switchLevel(level)         // Change JLPT level
}
```

---

## Key Patterns

### Adding a New JLPT Level

1. **Create vocabulary file**: `assets/js/core/vocabularyN3.js`
   ```javascript
   export const N3_VOCABULARY = [
       { japanese: "経験", reading: "けいけん", meaning: "experience", type: "noun" },
       // ... more words
   ];
   ```

2. **Update vocabulary.js**: Add to LEVEL_CONFIG
   ```javascript
   N3: {
       level: 'N3',
       displayName: 'JLPT N3',
       vocabulary: N3_VOCABULARY,
       enabled: true,
       color: '#2196F3'
   }
   ```

3. **Update index.html**: Add level option to dropdown
   ```html
   <div class="level-option" data-level="N3">
       <div class="level-badge level-n3">N3</div>
       ...
   </div>
   ```

4. **Update CSS**: Add level color class
   ```css
   .level-n3 { background: #2196F3; }
   ```

### Word Object Schema

```javascript
{
    japanese: string,    // Kanji/kana form (required)
    reading: string,     // Hiragana reading (required)
    meaning: string,     // English meaning (required)
    type: 'noun' | 'verb' | 'i-adjective' | 'na-adjective' | 'adverb',
    
    // Optional kanji metadata (for kanji-focused sets)
    kanji: {
        character: string,
        onYomi: string[],
        kunYomi: string[]
    }
}
```

### Event Flow Example

```
User clicks "Next" button
    │
    ▼
NavigationController.nextCard()
    │
    ▼
StateManager.navigateToCard('next')
    │
    ├── Updates AppState.currentCardIndex
    ├── Updates AppState.isFlipped = false
    │
    ▼
UIManager.renderCurrentCard()
    │
    ├── CardRenderer.render(card)
    ├── StatsUpdater.update()
    │
    ▼
User sees new card
```

---

## Development Guidelines

### Adding New Features

1. Identify which layer the feature belongs to (core/feature/ui/controller)
2. Create or extend appropriate module
3. Wire up in `app.js` if needed
4. Test in isolation, then integration

### Debugging

- **Console logging**: Each module logs initialization
- **Global access**: `window.jlptApp` for debugging
- **State inspection**: Check `window.jlptApp.appState`

### Code Style

- ES6 modules with named exports
- Classes for stateful components
- Descriptive method names
- Comments for complex logic only

---

## Browser Support

| Browser | Version | Notes |
|---------|---------|-------|
| Chrome | 80+ | Primary target |
| Firefox | 75+ | Fully supported |
| Safari | 13+ | iOS Safari included |
| Edge | 80+ | Chromium-based |

**Fallbacks:**
- localStorage → memory storage
- IndexedDB → localStorage
- Google TTS → Browser speechSynthesis

---

## Deployment

**Platform**: Netlify  
**Build**: Static files, no build step required  
**Functions**: `netlify/functions/tts.js` for Google Cloud TTS

**Environment Variables** (Netlify):
- `GOOGLE_TTS_API_KEY`: Google Cloud TTS API key

**Branch Strategy**:
- `main` → Production
- `develop` → Staging (branch deploy)
- `feature/*` → Development

---

## Future Roadmap

### Phase 2: N3 Expansion
- [ ] Add vocabularyN3.js (~700 words)
- [ ] Add vocabularyN3kanji.js (~280 kanji)
- [ ] Update particle quiz for N3 grammar
- [ ] Test level switching N5 ↔ N4 ↔ N3

### Phase 3: Mobile App
- [ ] Optimize touch interactions
- [ ] Add service worker for offline
- [ ] Consider Capacitor/Cordova wrapper

### Phase 4: Advanced Features
- [ ] Learning analytics dashboard
- [ ] Stroke order animations
- [ ] Example sentence integration
- [ ] Progress sync across devices

---

## Troubleshooting

### Audio Not Working
1. Check browser console for TTS errors
2. Verify Netlify function is deployed
3. Test Google API key validity
4. Clear IndexedDB audio cache

### Progress Not Saving
1. Check localStorage in DevTools
2. Look for quota exceeded errors
3. Verify level-specific keys exist

### Level Switch Issues
1. Canonical source: `StateManager.switchLevel()`
2. Also triggers: `FilterManager.handleLevelChange()`
3. Must reinitialize: SpacedRepetition, ParticleQuiz

---

## Quick Reference

### Key Files to Edit

| Task | File(s) |
|------|---------|
| Add vocabulary | `core/vocabularyN*.js`, `core/vocabulary.js` |
| Change SRS timing | `core/spacedRepetition.js` |
| Modify quiz logic | `features/quiz.js`, `ui/QuizRenderer.js` |
| Update UI layout | `ui/*.js`, `css/*.css` |
| Add keyboard shortcut | `controllers/KeyboardController.js` |
| Change navigation | `controllers/NavigationController.js` |

### Important Constants

```javascript
// Deck size
const DEFAULT_DECK_SIZE = 50;

// Quiz batch size
const BATCH_SIZE = 10;

// Audio cache expiry
const CACHE_EXPIRY_DAYS = 30;

// Auto-advance delay (ms)
const AUTO_ADVANCE_DELAY = 1500;
```
 d