// assets/js/ui/FilterManager.js
console.log('📦 FilterManager.js loading...');

export class FilterManager {
    constructor(appState, stateManager, vocabulary, notifier, renderCallback, particleQuiz = null) {
        this.state = appState;
        this.stateManager = stateManager;
        this.vocabulary = vocabulary;
        this.notifier = notifier;
        this.renderCallback = renderCallback;
        this.particleQuiz = particleQuiz;
        
        this.initializeFilters();
    }
    
    initializeFilters() {
        console.log('🔧 Setting up filters...');
        
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const dropdownMenu = document.getElementById('dropdownMenu');
        
        // Hamburger toggle
        hamburgerMenu?.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburgerMenu.classList.toggle('active');
            dropdownMenu.classList.toggle('active');
        });
        
        // Click outside to close
        document.addEventListener('click', (e) => {
            if (!dropdownMenu?.contains(e.target) && !hamburgerMenu?.contains(e.target)) {
                hamburgerMenu?.classList.remove('active');
                dropdownMenu?.classList.remove('active');
            }
        });
        
        // Word type filters
        document.querySelectorAll('.filter-option').forEach(option => {
            const checkbox = option.querySelector('input[type="checkbox"]');
            if (!checkbox) return;
            
            option.addEventListener('click', (e) => {
                if (e.target !== checkbox) {
                    e.preventDefault();
                    checkbox.checked = !checkbox.checked;
                    this.handleFilterChange(checkbox);
                }
            });
            
            checkbox.addEventListener('change', () => {
                this.handleFilterChange(checkbox);
            });
        });
        
        // Level switching
        document.querySelectorAll('.level-option').forEach(option => {
            option.addEventListener('click', () => {
                const level = option.getAttribute('data-level');
                this.handleLevelChange(level);
            });
        });
        
        console.log('✅ Filters initialized');
    }
    
    handleFilterChange(checkbox) {
        const filterId = checkbox.id;
        const isChecked = checkbox.checked;
        
        console.log(`🔍 Filter changed: ${filterId} = ${isChecked}`);
        
        let activeFilters = new Set(this.state.get('activeFilters'));
        
        if (filterId === 'filterAll') {
            if (isChecked) {
                document.querySelectorAll('#dropdownMenu input[type="checkbox"]:not(#filterAll)')
                    .forEach(cb => cb.checked = false);
                activeFilters = new Set(['all']);
            } else {
                activeFilters.delete('all');
            }
        } else {
            document.getElementById('filterAll').checked = false;
            activeFilters.delete('all');
            
            const filterMap = {
                'filterNouns': 'noun',
                'filterVerbs': 'verb',
                'filterIAdj': 'i-adjective',
                'filterNaAdj': 'na-adjective'
            };
            
            if (isChecked) {
                activeFilters.add(filterMap[filterId]);
            } else {
                activeFilters.delete(filterMap[filterId]);
            }
            
            if (activeFilters.size === 0) {
                document.getElementById('filterAll').checked = true;
                activeFilters.add('all');
            }
        }
        
        this.stateManager.applyFilters(Array.from(activeFilters));
        
        if (this.renderCallback) {
            console.log('🎨 Triggering render callback after filter change');
            this.renderCallback();
        }

        return Array.from(activeFilters);
    }
    
    handleLevelChange(level) {
        console.log(`🎓 Attempting to switch to ${level}`);
        
        // Get current level before switching
        const oldLevel = this.vocabulary.getCurrentLevelInfo();
        
        // Switch vocabulary
        const switched = this.vocabulary.switchLevel(level);
        
        if (!switched) {
            const currentLevel = this.vocabulary.getCurrentLevelInfo();
            if (currentLevel.level === level) {
                this.notifier.show(`Already on ${level}`, 'info');
            } else {
                this.notifier.show(`${level} not available yet`, 'error');
            }
            return false;
        }
        console.log(`✅ Vocabulary switched: ${oldLevel.level} → ${level}`);

        // ✅ CRITICAL: Update particle quiz to match level
        // Skip particle quiz for Everyday level (no particles)
        if (this.particleQuiz && level !== 'Everyday') {
            console.log(`🔗 Syncing particle quiz to ${level}...`);
            const success = this.particleQuiz.setJLPTLevel(level);
            if (success) {
                const count = this.particleQuiz.getAvailableParticleCount();
                console.log(`✅ Particle quiz updated: ${level} (${count} particles)`);
            }
        } else if (level === 'Everyday') {
            console.log(`📚 Everyday mode - particle quiz not applicable`);
        } else {
            console.warn('⚠️ No particle quiz reference - skipping particle update');
        }
        
        // ✅ CRITICAL: Reinitialize spaced repetition with new vocabulary
        this.stateManager.sr.initialize();
        
        // ✅ Reset state for new level
        this.state.update({
            currentCardIndex: 0,
            cardsStudied: new Set(),
            isFlipped: false
        });
        
        // Update UI indicators
        document.querySelectorAll('.level-option').forEach(opt => {
            const status = opt.querySelector('.level-status');
            if (opt.getAttribute('data-level') === level) {
                status.textContent = 'Active';
                status.classList.add('level-active');
            } else {
                status.textContent = '';
                status.classList.remove('level-active');
            }
        });
        
        // ✅ Update header badge and title based on level type
        this.updateHeaderForLevel(level);
        
        // ✅ Load new deck with new vocabulary
        this.stateManager.loadNewDeck();

        if (this.renderCallback) {
            console.log('🎨 Triggering render callback after level change');
            this.renderCallback();
        }
        
        const levelInfo = this.vocabulary.getCurrentLevelInfo();
        
        // ✅ Enhanced notification with particle count (skip for Everyday)
        let message = `Switched to ${levelInfo.displayName} (${levelInfo.wordCount} words)`;
        if (this.particleQuiz && level !== 'Everyday') {
            const particleCount = this.particleQuiz.getAvailableParticleCount();
            message = `Switched to ${levelInfo.displayName} (${levelInfo.wordCount} words, ${particleCount} particles)`;
        }
        
        this.notifier.show(message, 'success');
        
        console.log(`🎉 Level switch complete: ${level}`);
        return true;
    }
    
    /**
     * Update header text and badge based on level type
     * JLPT levels show "JLPT [N5] Adaptive Learning"
     * Everyday shows "日常 Everyday Japanese"
     */
    updateHeaderForLevel(level) {
        const headerBadge = document.getElementById('currentLevelBadge');
        const jlptPrefix = document.getElementById('jlptPrefix');
        const headerSuffix = document.getElementById('headerSuffix');
        
        if (level === 'Everyday') {
            // Everyday mode: Hide JLPT prefix, show different styling
            if (jlptPrefix) jlptPrefix.style.display = 'none';
            if (headerSuffix) headerSuffix.textContent = 'Japanese';
            
            if (headerBadge) {
                headerBadge.textContent = '日常 Everyday';
                headerBadge.className = 'level-badge-inline level-everyday';
            }
        } else {
            // JLPT mode: Show JLPT prefix
            if (jlptPrefix) jlptPrefix.style.display = 'inline';
            if (headerSuffix) headerSuffix.textContent = 'Adaptive Learning';
            
            if (headerBadge) {
                headerBadge.textContent = level;
                headerBadge.className = `level-badge-inline level-${level.toLowerCase()}`;
            }
        }
    }
    
    updateWordCountBadges() {
        if (!this.vocabulary) return;
        
        const counts = this.vocabulary.getWordCounts();
        const badges = {
            'allCount': counts.all,
            'nounCount': counts.noun,
            'verbCount': counts.verb,
            'iAdjCount': counts['i-adjective'],
            'naAdjCount': counts['na-adjective']
        };
        
        Object.entries(badges).forEach(([id, count]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = count;
        });
    }
}

console.log('✅ FilterManager.js loaded');
