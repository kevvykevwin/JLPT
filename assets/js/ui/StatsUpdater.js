// assets/js/ui/StatsUpdater.js
// FIXED: Now receives SpacedRepetition reference for SRS dashboard
console.log('📦 StatsUpdater.js loading...');

export class StatsUpdater {
    constructor(appState, spacedRepetition = null) {
        this.state = appState;
        this.sr = spacedRepetition;  // ✅ SpacedRepetition reference
    }
    
    /**
     * Set SR reference (if not passed in constructor)
     */
    setSpacedRepetition(sr) {
        this.sr = sr;
    }
    
    updateAll() {
        this.updateCardCounter();
        this.updateProgressBar();
        this.updateStats();
        this.updateSRSStats();  // ✅ Update SRS dashboard
    }

    updateCardCounter() {
        const cardCounter = document.getElementById('cardCounter');
        const progressBar = document.getElementById('progressBar');
        const currentIndex = this.state.get('currentCardIndex');
        const deckLength = this.state.get('currentDeck')?.length || 0;
        
        if (cardCounter && deckLength > 0) {
            const mode = this.state.get('currentMode');
            const display = mode === 'quiz' ? 'Quiz' : 'Card';
            cardCounter.textContent = `${display} ${currentIndex + 1} of ${deckLength}`;
            console.log(`🔢 Counter updated: ${currentIndex + 1}/${deckLength}`);
        }
        
        if (progressBar && deckLength > 0) {
            const percent = ((currentIndex + 1) / deckLength) * 100;
            progressBar.style.width = Math.min(100, Math.max(0, percent)) + '%';
        }
    }
    
    updateProgressBar() {
        const index = this.state.get('currentCardIndex');
        const deck = this.state.get('currentDeck');
        const progressBar = document.getElementById('progressBar');
        
        if (progressBar && deck && deck.length > 0) {
            const percent = ((index + 1) / deck.length) * 100;
            progressBar.style.width = `${Math.min(100, percent)}%`;
        }
    }
    
    updateStats() {
        const studied = this.state.get('cardsStudied').size;
        const flipCount = this.state.get('flipCount');
        
        const studiedEl = document.getElementById('cardsStudied');
        const flippedEl = document.getElementById('timesFlipped');
        
        if (studiedEl) studiedEl.textContent = studied;
        if (flippedEl) flippedEl.textContent = flipCount;
    }
    
    /**
     * ✅ NEW: Update SRS Learning Dashboard
     * Updates statNew, statLearning, statReview, statMastered
     */
    updateSRSStats() {
        if (!this.sr) {
            console.warn('⚠️ StatsUpdater: No SpacedRepetition reference, skipping SRS update');
            return;
        }
        
        // Get counts from spaced repetition system
        const counts = this.sr.getDueCounts();
        
        console.log('📊 SRS Counts:', counts);
        
        // Update dashboard elements - exact IDs from index.html
        const statNew = document.getElementById('statNew');
        const statLearning = document.getElementById('statLearning');
        const statReview = document.getElementById('statReview');
        const statMastered = document.getElementById('statMastered');
        
        if (statNew) statNew.textContent = counts.new;
        if (statLearning) statLearning.textContent = counts.learning;
        if (statReview) statReview.textContent = counts.review;
        if (statMastered) statMastered.textContent = counts.mastered;
        
        // Update overall mastery percentage if element exists
        const total = counts.new + counts.learning + counts.review + counts.mastered;
        const masteryPercent = total > 0 ? Math.round((counts.mastered / total) * 100) : 0;
        
        const masteryEl = document.getElementById('overallMastery');
        if (masteryEl) {
            masteryEl.textContent = `${masteryPercent}%`;
        }
    }
    
    /**
     * Get full study statistics (for stats modal or export)
     */
    getFullStats() {
        if (!this.sr) return null;
        
        const counts = this.sr.getDueCounts();
        const studyStats = this.sr.getStudyStats();
        
        return {
            srs: counts,
            study: studyStats,
            session: {
                cardsStudied: this.state.get('cardsStudied').size,
                flipCount: this.state.get('flipCount')
            }
        };
    }
    
    toggleStats() {
        const stats = document.getElementById('stats');
        if (stats) {
            stats.classList.toggle('show');
            
            // Refresh stats when showing
            if (stats.classList.contains('show')) {
                this.updateSRSStats();
            }
        }
    }
}

console.log('✅ StatsUpdater.js loaded');