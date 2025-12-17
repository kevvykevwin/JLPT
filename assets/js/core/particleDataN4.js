// assets/js/core/particleDataN4.js
// JLPT N4 Particles - 8 Additional Particles
// Standalone version (no imports from N5)

/**
 * Difficulty levels (duplicated for standalone use)
 */
export const difficultyLevels = {
    BEGINNER: 'beginner',
    INTERMEDIATE: 'intermediate',
    ADVANCED: 'advanced'
};

/**
 * Sentence categories (duplicated for standalone use)
 */
export const sentenceCategories = {
    DAILY_LIFE: 'daily_life',
    TIME: 'time',
    LOCATION: 'location',
    SOCIAL: 'social',
    FOOD: 'food',
    TRANSPORTATION: 'transportation',
    WORK_STUDY: 'work_study',
    HOBBIES: 'hobbies',
    WEATHER: 'weather',
    SHOPPING: 'shopping'
};

/**
 * N4 Particles list
 */
export const N4_PARTICLES = ["や", "より", "など", "だけ", "しか", "ばかり", "ずつ", "くらい"];

/**
 * N4 Particle data with examples
 */
export const particleDataN4 = [
    // ========================================
    // や - Partial List
    // ========================================
    {
        particle: "や",
        reading: "ya",
        function: "partial list conjunction",
        description: "Lists examples (not exhaustive), meaning 'and' or 'things like'",
        commonMistakes: "Using や for complete lists (should use と)",
        usageNotes: "Implies 'among other things' - softer than と",
        jlptLevel: "N4",
        examples: [
            {
                japanese: "りんご_みかんを買いました",
                english: "I bought apples, oranges, and other things",
                correct: "や",
                options: ["や", "と", "か"],
                explanation: "Partial list (not just those two items)",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.SHOPPING
            },
            {
                japanese: "本_ノートが必要です",
                english: "I need books, notebooks, and so on",
                correct: "や",
                options: ["や", "と", "など"],
                explanation: "Example items from a longer list",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.WORK_STUDY
            },
            {
                japanese: "犬_猫などの動物",
                english: "Animals like dogs and cats",
                correct: "や",
                options: ["や", "と", "か"],
                explanation: "Examples from category of animals",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.DAILY_LIFE
            }
        ]
    },

    // ========================================
    // より - Comparison
    // ========================================
    {
        particle: "より",
        reading: "yori",
        function: "comparison marker",
        description: "Marks the standard of comparison ('than', 'rather than')",
        commonMistakes: "Forgetting より when using comparative forms",
        usageNotes: "A は B より [adjective] = A is more [adjective] than B",
        jlptLevel: "N4",
        examples: [
            {
                japanese: "私_彼は背が高いです",
                english: "He is taller than me",
                correct: "より",
                options: ["より", "から", "まで"],
                explanation: "私 is the standard for comparison",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.SOCIAL
            },
            {
                japanese: "コーヒー_お茶が好きです",
                english: "I like tea better than coffee",
                correct: "より",
                options: ["より", "から", "と"],
                explanation: "Comparing preference (tea > coffee)",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.FOOD
            },
            {
                japanese: "昨日_今日は暑いです",
                english: "Today is hotter than yesterday",
                correct: "より",
                options: ["より", "から", "まで"],
                explanation: "Comparing temperatures between days",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.WEATHER
            }
        ]
    },

    // ========================================
    // など - Exemplification
    // ========================================
    {
        particle: "など",
        reading: "nado",
        function: "exemplification particle",
        description: "Means 'etc.', 'and so on', 'such as'",
        commonMistakes: "Placing など incorrectly in the sentence",
        usageNotes: "Often used after や or to soften statements",
        jlptLevel: "N4",
        examples: [
            {
                japanese: "ペンやノート_を買いました",
                english: "I bought pens, notebooks, etc.",
                correct: "など",
                options: ["など", "や", "も"],
                explanation: "Indicates more items beyond those listed",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.SHOPPING
            },
            {
                japanese: "映画を見る_が好きです",
                english: "I like watching movies and such",
                correct: "など",
                options: ["など", "とか", "や"],
                explanation: "Softens/generalizes the statement",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.HOBBIES
            },
            {
                japanese: "犬や猫_の動物",
                english: "Animals such as dogs and cats",
                correct: "など",
                options: ["など", "とか", "や"],
                explanation: "Examples from a category",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.DAILY_LIFE
            }
        ]
    },

    // ========================================
    // だけ - Limitation (Only)
    // ========================================
    {
        particle: "だけ",
        reading: "dake",
        function: "limitation particle",
        description: "Means 'only', 'just', 'merely'",
        commonMistakes: "Confusing だけ (only this) with しか (nothing but)",
        usageNotes: "だけ can be used with any verb form; しか requires negative",
        jlptLevel: "N4",
        examples: [
            {
                japanese: "これ_ください",
                english: "Please give me only this",
                correct: "だけ",
                options: ["だけ", "しか", "も"],
                explanation: "Limiting to just this item",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.SHOPPING
            },
            {
                japanese: "三つ_食べました",
                english: "I ate only three",
                correct: "だけ",
                options: ["だけ", "しか", "まで"],
                explanation: "Limiting quantity to three",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.FOOD
            },
            {
                japanese: "見る_です",
                english: "I'm just looking",
                correct: "だけ",
                options: ["だけ", "しか", "ばかり"],
                explanation: "Limiting action to just looking",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.SHOPPING
            }
        ]
    },

    // ========================================
    // しか - Exclusive Limitation
    // ========================================
    {
        particle: "しか",
        reading: "shika",
        function: "exclusive limitation particle",
        description: "Means 'only' (with negative verb), emphasizes limitation",
        commonMistakes: "Forgetting to use negative verb form with しか",
        usageNotes: "MUST be followed by negative: ~しか...ない = only/nothing but",
        jlptLevel: "N4",
        examples: [
            {
                japanese: "千円_ありません",
                english: "I only have 1000 yen",
                correct: "しか",
                options: ["しか", "だけ", "まで"],
                explanation: "しか + negative emphasizes limited amount",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.SHOPPING
            },
            {
                japanese: "二人_来ませんでした",
                english: "Only two people came",
                correct: "しか",
                options: ["しか", "だけ", "も"],
                explanation: "Emphasizing disappointingly few people",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.SOCIAL
            },
            {
                japanese: "日本語_話せません",
                english: "I can only speak Japanese",
                correct: "しか",
                options: ["しか", "だけ", "も"],
                explanation: "Limitation with regret/emphasis",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.WORK_STUDY
            }
        ]
    },

    // ========================================
    // ばかり - Emphasis (Nothing But)
    // ========================================
    {
        particle: "ばかり",
        reading: "bakari",
        function: "emphasis particle",
        description: "Means 'only', 'nothing but', often with criticism or excess",
        commonMistakes: "Confusing ばかり (excessive focus) with だけ (simple limitation)",
        usageNotes: "Implies doing something excessively or to the exclusion of other things",
        jlptLevel: "N4",
        examples: [
            {
                japanese: "ゲーム_しています",
                english: "You do nothing but play games",
                correct: "ばかり",
                options: ["ばかり", "だけ", "しか"],
                explanation: "Criticism for excessive gaming",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.HOBBIES
            },
            {
                japanese: "肉_食べています",
                english: "You eat nothing but meat",
                correct: "ばかり",
                options: ["ばかり", "だけ", "も"],
                explanation: "Implies unhealthy exclusive focus",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.FOOD
            },
            {
                japanese: "寝て_いる",
                english: "You're always sleeping",
                correct: "ばかり",
                options: ["ばかり", "だけ", "しか"],
                explanation: "Criticism for excessive sleeping",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.DAILY_LIFE
            }
        ]
    },

    // ========================================
    // ずつ - Distribution
    // ========================================
    {
        particle: "ずつ",
        reading: "zutsu",
        function: "distribution particle",
        description: "Means 'each', 'at a time', 'apiece'",
        commonMistakes: "Forgetting ずつ when distributing quantities evenly",
        usageNotes: "Shows equal distribution: 一つずつ = one each, 少しずつ = little by little",
        jlptLevel: "N4",
        examples: [
            {
                japanese: "一つ_取ってください",
                english: "Please take one each",
                correct: "ずつ",
                options: ["ずつ", "だけ", "ごと"],
                explanation: "Equal distribution of one item per person",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.SOCIAL
            },
            {
                japanese: "少し_進みます",
                english: "I'll proceed little by little",
                correct: "ずつ",
                options: ["ずつ", "ごと", "だけ"],
                explanation: "Gradual progression in small increments",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.WORK_STUDY
            },
            {
                japanese: "三人_チームを作ります",
                english: "We'll make teams of three people each",
                correct: "ずつ",
                options: ["ずつ", "ごと", "で"],
                explanation: "Equal distribution into groups",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.SOCIAL
            }
        ]
    },

    // ========================================
    // くらい - Approximation
    // ========================================
    {
        particle: "くらい",
        reading: "kurai/gurai",
        function: "approximation particle",
        description: "Means 'about', 'approximately', 'at least'",
        commonMistakes: "Confusing くらい (approximate amount) with ごろ (approximate time)",
        usageNotes: "Can express extent: これくらい = about this much",
        jlptLevel: "N4",
        examples: [
            {
                japanese: "三時間_かかります",
                english: "It takes about 3 hours",
                correct: "くらい",
                options: ["くらい", "ごろ", "ほど"],
                explanation: "Approximate duration",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.TIME
            },
            {
                japanese: "十人_来ました",
                english: "About 10 people came",
                correct: "くらい",
                options: ["くらい", "ごろ", "ほど"],
                explanation: "Approximate number",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.SOCIAL
            },
            {
                japanese: "これ_できます",
                english: "I can at least do this much",
                correct: "くらい",
                options: ["くらい", "ほど", "だけ"],
                explanation: "Minimum extent/capability",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.WORK_STUDY
            }
        ]
    }
];

// ========================================
// UTILITY FUNCTIONS
// ========================================

export function getParticleData() {
    return particleDataN4;
}

export function getParticle(particleName) {
    return particleDataN4.find(p => p.particle === particleName) || null;
}

export function getStats() {
    return {
        totalParticles: particleDataN4.length,
        totalExamples: particleDataN4.reduce((sum, p) => sum + p.examples.length, 0),
        particles: N4_PARTICLES
    };
}

console.log('📚 N4 Particles loaded:', getStats());