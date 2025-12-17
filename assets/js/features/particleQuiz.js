// assets/js/features/particleQuiz.js
// BACKWARD-COMPATIBLE: Maintains original API for QuizRenderer.js
// Now uses split data files (N5/N4 particles, N3+ grammar)

import { particleDataN5, N5_PARTICLES, difficultyLevels, sentenceCategories } from '../core/particleDataN5.js';
import { particleDataN4, N4_PARTICLES } from '../core/particleDataN4.js';

// Optional: Import N3 grammar when ready
// import { grammarPatterns } from '../core/grammarN3.js';

/**
 * ParticleQuiz - Backward-compatible with QuizRenderer.js
 * Maintains generateQuestion() and validateAnswer() API
 */
class ParticleQuiz {
    constructor() {
        this.currentLevel = 'N5';
        this.score = { correct: 0, total: 0 };
        this.currentQuestion = null;
        this.questionHistory = [];
        
        // Combine N5 and N4 data for "all particles" mode
        this.particleData = [...particleDataN5, ...particleDataN4];
        this.allParticles = [...N5_PARTICLES, ...N4_PARTICLES];
        
        // Level-specific data
        this.levelData = {
            'N5': { data: particleDataN5, particles: N5_PARTICLES },
            'N4': { data: particleDataN4, particles: N4_PARTICLES },
            'N3': { data: particleDataN5, particles: N5_PARTICLES }, // Fallback to N5 until grammar quiz ready
            'ALL': { data: this.particleData, particles: this.allParticles }
        };
        
        console.log('✅ ParticleQuiz initialized with', this.particleData.length, 'particles');
    }
    
    /**
     * Set the current level
     */
    setLevel(level) {
        if (this.levelData[level]) {
            this.currentLevel = level;
            console.log(`📚 ParticleQuiz level set to: ${level}`);
            return true;
        } else {
            console.warn(`Unknown level: ${level}, using ALL`);
            this.currentLevel = 'ALL';
            return false;
        }
    }
    
    /**
     * Alias for backward compatibility with FilterManager
     */
    setJLPTLevel(level) {
        return this.setLevel(level);
    }
    
    /**
     * Get count of available particles for current level
     * Used by FilterManager for notifications
     */
    getAvailableParticleCount() {
        const levelData = this.getCurrentLevelData();
        return levelData.particles.length;
    }
    
    /**
     * Get current level data
     */
    getCurrentLevelData() {
        return this.levelData[this.currentLevel] || this.levelData['ALL'];
    }
    
    /**
     * Generate a quiz question
     * Returns format expected by QuizRenderer.js
     */
    generateQuestion() {
        const levelData = this.getCurrentLevelData();
        const data = levelData.data;
        
        if (!data || data.length === 0) {
            console.error('No particle data available');
            return null;
        }
        
        // Filter to particles with examples
        const particlesWithExamples = data.filter(p => p.examples && p.examples.length > 0);
        
        if (particlesWithExamples.length === 0) {
            console.error('No particles with examples');
            return null;
        }
        
        // Pick random particle
        const randomParticle = particlesWithExamples[Math.floor(Math.random() * particlesWithExamples.length)];
        
        // Pick random example from that particle
        const randomExample = randomParticle.examples[Math.floor(Math.random() * randomParticle.examples.length)];
        
        // Generate options (correct + distractors)
        const options = this.generateOptions(randomExample.correct, randomExample.options || null);
        
        // Build question object in format QuizRenderer expects
        const question = {
            particle: randomParticle.particle,
            reading: randomParticle.reading,
            function: randomParticle.function,
            description: randomParticle.description,
            usageNotes: randomParticle.usageNotes,
            commonMistakes: randomParticle.commonMistakes,
            jlptLevel: randomParticle.jlptLevel,
            example: {
                japanese: randomExample.japanese,
                english: randomExample.english,
                correct: randomExample.correct,
                explanation: randomExample.explanation,
                difficulty: randomExample.difficulty,
                category: randomExample.category
            },
            options: options
        };
        
        this.currentQuestion = question;
        return question;
    }
    
    /**
     * Generate answer options
     */
    generateOptions(correct, predefinedOptions = null) {
        // Use predefined options if available
        if (predefinedOptions && predefinedOptions.length >= 3) {
            return this.shuffleArray([...predefinedOptions]);
        }
        
        // Otherwise generate from available particles
        const levelData = this.getCurrentLevelData();
        const allParticles = levelData.particles;
        
        const options = [correct];
        const otherParticles = allParticles.filter(p => p !== correct);
        const shuffled = this.shuffleArray(otherParticles);
        
        // Add 3 distractors
        options.push(...shuffled.slice(0, 3));
        
        return this.shuffleArray(options);
    }
    
    /**
     * Validate user's answer
     */
    validateAnswer(selectedParticle) {
        if (!this.currentQuestion) {
            console.warn('No current question to validate');
            return false;
        }
        
        const isCorrect = selectedParticle === this.currentQuestion.example.correct;
        
        // Update score
        this.score.total++;
        if (isCorrect) {
            this.score.correct++;
        }
        
        // Record in history
        this.questionHistory.push({
            question: this.currentQuestion,
            selected: selectedParticle,
            isCorrect: isCorrect,
            timestamp: Date.now()
        });
        
        console.log(`${isCorrect ? '✅' : '❌'} Answer: ${selectedParticle} (Correct: ${this.currentQuestion.example.correct})`);
        
        return isCorrect;
    }
    
    /**
     * Get current score
     */
    getScore() {
        return {
            correct: this.score.correct,
            total: this.score.total,
            percentage: this.score.total > 0 
                ? Math.round((this.score.correct / this.score.total) * 100) 
                : 0
        };
    }
    
    /**
     * Reset score
     */
    resetScore() {
        this.score = { correct: 0, total: 0 };
        this.questionHistory = [];
    }
    
    /**
     * Get statistics
     */
    getStats() {
        const levelData = this.getCurrentLevelData();
        return {
            level: this.currentLevel,
            totalParticles: levelData.data.length,
            totalExamples: levelData.data.reduce((sum, p) => sum + (p.examples?.length || 0), 0),
            score: this.getScore(),
            questionsAnswered: this.questionHistory.length
        };
    }
    
    /**
     * Shuffle array (Fisher-Yates)
     */
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    /**
     * Get all particle data (for reference)
     */
    getAllParticleData() {
        return this.particleData;
    }
    
    /**
     * Get particles for specific level
     */
    getParticlesForLevel(level) {
        return this.levelData[level]?.particles || this.allParticles;
    }
}

// Create singleton instance
const particleQuiz = new ParticleQuiz();

// Export both class and instance
export { ParticleQuiz, particleQuiz };
export default particleQuiz;

console.log('✅ ParticleQuiz module loaded');