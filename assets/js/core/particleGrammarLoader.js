// assets/js/core/particleGrammarLoader.js
// Unified loader for particles (N5/N4) and grammar patterns (N3+)
// Provides a consistent API regardless of content type

import { particleDataN5, N5_PARTICLES, difficultyLevels, sentenceCategories } from './particleDataN5.js';
import { particleDataN4, N4_PARTICLES } from './particleDataN4.js';
import { grammarPatterns, grammarCategories } from './grammarN3.js';

/**
 * Content types
 */
export const contentTypes = {
    PARTICLE: 'particle',
    GRAMMAR: 'grammar'
};

/**
 * Level configuration
 */
export const levelConfig = {
    N5: {
        type: contentTypes.PARTICLE,
        displayName: 'N5 Particles',
        description: '12 essential particles for basic Japanese',
        data: particleDataN5,
        items: N5_PARTICLES,
        color: '#4CAF50'
    },
    N4: {
        type: contentTypes.PARTICLE,
        displayName: 'N4 Particles',
        description: '8 additional particles for elementary Japanese',
        data: particleDataN4,
        items: N4_PARTICLES,
        color: '#FF9800'
    },
    N3: {
        type: contentTypes.GRAMMAR,
        displayName: 'N3 Grammar',
        description: '47 intermediate grammar patterns',
        data: grammarPatterns,
        items: grammarPatterns.map(p => p.pattern),
        color: '#2196F3'
    }
};

if (level === 'Everyday') {
    particleQuizBtn.disabled = true;
    particleQuizBtn.title = 'Particle quiz not available for Everyday vocabulary';
} else {
    particleQuizBtn.disabled = false;
}

/**
 * Get data for a specific level
 */
export function getDataForLevel(level) {
    const config = levelConfig[level];
    if (!config) {
        console.warn(`Unknown level: ${level}, defaulting to N5`);
        return levelConfig.N5;
    }
    return config;
}

/**
 * Get all content for a level (particles or grammar patterns)
 */
export function getContentForLevel(level) {
    return getDataForLevel(level).data;
}

/**
 * Get content type for a level
 */
export function getContentType(level) {
    return getDataForLevel(level).type;
}

/**
 * Check if level uses particles or grammar
 */
export function isParticleLevel(level) {
    return getContentType(level) === contentTypes.PARTICLE;
}

export function isGrammarLevel(level) {
    return getContentType(level) === contentTypes.GRAMMAR;
}

/**
 * Get a random quiz question for a level
 * Returns normalized format regardless of content type
 */
export function getRandomQuestion(level) {
    const config = getDataForLevel(level);
    const data = config.data;
    
    if (!data || data.length === 0) {
        return null;
    }
    
    // Filter to items with examples
    const itemsWithExamples = data.filter(item => item.examples && item.examples.length > 0);
    
    if (itemsWithExamples.length === 0) {
        return null;
    }
    
    // Pick random item and example
    const randomItem = itemsWithExamples[Math.floor(Math.random() * itemsWithExamples.length)];
    const randomExample = randomItem.examples[Math.floor(Math.random() * randomItem.examples.length)];
    
    // Normalize to common format
    return {
        level: level,
        type: config.type,
        // For particles
        particle: config.type === contentTypes.PARTICLE ? randomItem.particle : null,
        // For grammar
        pattern: config.type === contentTypes.GRAMMAR ? randomItem.pattern : null,
        // Common fields
        answer: randomExample.correct,
        japanese: randomExample.japanese,
        english: randomExample.english,
        options: randomExample.options,
        explanation: randomExample.explanation,
        difficulty: randomExample.difficulty,
        category: randomExample.category,
        // Metadata
        function: randomItem.function,
        description: randomItem.description,
        usageNotes: randomItem.usageNotes
    };
}

/**
 * Get all quiz questions for a level
 */
export function getAllQuestions(level) {
    const config = getDataForLevel(level);
    const data = config.data;
    const questions = [];
    
    for (const item of data) {
        if (!item.examples) continue;
        
        for (const example of item.examples) {
            questions.push({
                level: level,
                type: config.type,
                particle: config.type === contentTypes.PARTICLE ? item.particle : null,
                pattern: config.type === contentTypes.GRAMMAR ? item.pattern : null,
                answer: example.correct,
                japanese: example.japanese,
                english: example.english,
                options: example.options,
                explanation: example.explanation,
                difficulty: example.difficulty,
                category: example.category,
                function: item.function,
                description: item.description
            });
        }
    }
    
    return questions;
}

/**
 * Get questions by difficulty
 */
export function getQuestionsByDifficulty(level, difficulty) {
    return getAllQuestions(level).filter(q => q.difficulty === difficulty);
}

/**
 * Get questions by category
 */
export function getQuestionsByCategory(level, category) {
    return getAllQuestions(level).filter(q => q.category === category);
}

/**
 * Get statistics for all levels
 */
export function getStatistics() {
    const stats = {};
    
    for (const [level, config] of Object.entries(levelConfig)) {
        const questions = getAllQuestions(level);
        stats[level] = {
            type: config.type,
            displayName: config.displayName,
            totalItems: config.data.length,
            itemsWithExamples: config.data.filter(d => d.examples?.length > 0).length,
            totalQuestions: questions.length,
            byDifficulty: {
                beginner: questions.filter(q => q.difficulty === difficultyLevels.BEGINNER).length,
                intermediate: questions.filter(q => q.difficulty === difficultyLevels.INTERMEDIATE).length,
                advanced: questions.filter(q => q.difficulty === difficultyLevels.ADVANCED).length
            }
        };
    }
    
    return stats;
}

/**
 * Get combined N5+N4 particles (for "All Particles" mode)
 */
export function getCombinedParticles() {
    return [...particleDataN5, ...particleDataN4];
}

/**
 * Get all particle names
 */
export function getAllParticleNames() {
    return [...N5_PARTICLES, ...N4_PARTICLES];
}

// Export constants
export { difficultyLevels, sentenceCategories, grammarCategories };

console.log('📚 Particle/Grammar Loader initialized:', getStatistics());
