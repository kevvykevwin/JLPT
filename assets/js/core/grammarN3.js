// assets/js/core/grammarN3.js
// JLPT N3 Grammar Patterns - 47 patterns
// Structured similarly to particleData.js for consistency

/**
 * Grammar pattern categories for N3
 */
export const grammarCategories = {
    CONDITIONAL: 'conditional',      // If/when patterns (ば, たら, なら)
    SCOPE: 'scope',                  // Degree/extent patterns (ほど, くらい, だけ)
    EMPHASIS: 'emphasis',            // Emphasis particles (こそ, さえ, すら)
    CONNECTION: 'connection',        // Connecting actions/states (ながら, つつ)
    EXPRESSION: 'expression',        // Fixed expressions (わけ, ことになる)
    REASONING: 'reasoning',          // Cause/reason patterns
    CONTRAST: 'contrast'             // Contrast/comparison (ものの, ながらも)
};

/**
 * Difficulty levels matching particleData.js
 */
export const difficultyLevels = {
    BEGINNER: 'beginner',
    INTERMEDIATE: 'intermediate',
    ADVANCED: 'advanced'
};

/**
 * N3 Grammar patterns organized with examples
 * Structure mirrors particleData.js for consistency
 */
export const grammarPatterns = [
    // ========================================
    // CONDITIONAL PATTERNS
    // ========================================
    {
        pattern: "ばいい",
        reading: "ばいい",
        function: "suggestion/advice",
        description: "Used to give advice or suggestions - should, it would be good if",
        usageNotes: "Attach to verb conditional form (ば form)",
        jlptLevel: "N3",
        category: grammarCategories.CONDITIONAL,
        examples: [
            {
                japanese: "早く寝れ___。",
                english: "You should go to bed early.",
                correct: "ばいい",
                options: ["ばいい", "たらいい", "といい"],
                explanation: "Giving advice about sleeping early",
                difficulty: difficultyLevels.BEGINNER
            },
            {
                japanese: "分からなかったら先生に聞け___。",
                english: "If you do not understand, you should ask the teacher.",
                correct: "ばいい",
                options: ["ばいい", "ばよかった", "ばいけない"],
                explanation: "Suggesting to ask for help",
                difficulty: difficultyLevels.INTERMEDIATE
            }
        ]
    },
    {
        pattern: "ば～ほど",
        reading: "ばほど",
        function: "proportional comparison",
        description: "The more X, the more Y - shows proportional relationship",
        usageNotes: "First verb in ば form, second uses ほど",
        jlptLevel: "N3",
        category: grammarCategories.CONDITIONAL,
        examples: [
            {
                japanese: "勉強すれ___する___、難しくなる。",
                english: "The more you study, the harder it gets.",
                correct: "ば|ほど",
                options: ["ば|ほど", "ば|だけ", "たら|ほど"],
                explanation: "Proportional relationship between studying and difficulty",
                difficulty: difficultyLevels.INTERMEDIATE
            },
            {
                japanese: "練習すれ___する___、上手になる。",
                english: "The more you practice, the better you get.",
                correct: "ば|ほど",
                options: ["ば|ほど", "と|ほど", "ば|くらい"],
                explanation: "Practice leading to improvement",
                difficulty: difficultyLevels.INTERMEDIATE
            }
        ]
    },
    {
        pattern: "ば～のに",
        reading: "ばのに",
        function: "regret/counterfactual",
        description: "Would have / should have / if only - expresses regret",
        usageNotes: "Used to express regret about past events",
        jlptLevel: "N3",
        category: grammarCategories.CONDITIONAL,
        examples: [
            {
                japanese: "もっと勉強すれ___よかった___。",
                english: "If only I had studied more.",
                correct: "ば|のに",
                options: ["ば|のに", "ば|から", "たら|のに"],
                explanation: "Expressing regret about not studying",
                difficulty: difficultyLevels.INTERMEDIATE
            }
        ]
    },

    // ========================================
    // SCOPE/DEGREE PATTERNS
    // ========================================
    {
        pattern: "ほど",
        reading: "ほど",
        function: "degree/extent marker",
        description: "Indicates degree or extent - to the extent that, so...that",
        usageNotes: "Can follow nouns, verbs, or adjectives",
        jlptLevel: "N3",
        category: grammarCategories.SCOPE,
        examples: [
            {
                japanese: "こんな___美味しい料理は食べたことがない。",
                english: "I have never eaten food this delicious.",
                correct: "ほど",
                options: ["ほど", "くらい", "だけ"],
                explanation: "Expressing degree of deliciousness",
                difficulty: difficultyLevels.INTERMEDIATE
            },
            {
                japanese: "死ぬ___疲れた。",
                english: "I am so tired I could die.",
                correct: "ほど",
                options: ["ほど", "くらい", "まで"],
                explanation: "Exaggerating degree of tiredness",
                difficulty: difficultyLevels.INTERMEDIATE
            }
        ]
    },
    {
        pattern: "ほど～ない",
        reading: "ほどない",
        function: "negative comparison",
        description: "Is not as ... as - comparing two things",
        usageNotes: "A is not as [adjective] as B",
        jlptLevel: "N3",
        category: grammarCategories.SCOPE,
        examples: [
            {
                japanese: "今日は昨日___寒くない。",
                english: "Today is not as cold as yesterday.",
                correct: "ほど",
                options: ["ほど", "より", "くらい"],
                explanation: "Comparing temperatures",
                difficulty: difficultyLevels.INTERMEDIATE
            }
        ]
    },
    {
        pattern: "きり",
        reading: "きり",
        function: "limitation/since",
        description: "Only, just, since (and nothing after)",
        usageNotes: "Indicates something happened and nothing since",
        jlptLevel: "N3",
        category: grammarCategories.SCOPE,
        examples: [
            {
                japanese: "一度会った___、連絡がない。",
                english: "Since we met once, there has been no contact.",
                correct: "きり",
                options: ["きり", "だけ", "ばかり"],
                explanation: "Nothing happened after meeting once",
                difficulty: difficultyLevels.INTERMEDIATE
            }
        ]
    },

    // ========================================
    // EMPHASIS PATTERNS
    // ========================================
    {
        pattern: "こそ",
        reading: "こそ",
        function: "strong emphasis",
        description: "Emphasizes the preceding word - precisely, especially, it is...that",
        usageNotes: "Replaces は/が to add strong emphasis",
        jlptLevel: "N3",
        category: grammarCategories.EMPHASIS,
        examples: [
            {
                japanese: "今日___頑張ろう。",
                english: "Today is THE day to do my best.",
                correct: "こそ",
                options: ["こそ", "は", "だけ"],
                explanation: "Emphasizing today specifically",
                difficulty: difficultyLevels.BEGINNER
            },
            {
                japanese: "あなた___私の親友です。",
                english: "YOU are my best friend.",
                correct: "こそ",
                options: ["こそ", "が", "は"],
                explanation: "Strong emphasis on the person",
                difficulty: difficultyLevels.BEGINNER
            },
            {
                japanese: "こちら___よろしくお願いします。",
                english: "It is I who should be asking YOU (for your kindness).",
                correct: "こそ",
                options: ["こそ", "が", "も"],
                explanation: "Polite response emphasizing self",
                difficulty: difficultyLevels.INTERMEDIATE
            }
        ]
    },
    {
        pattern: "さえ",
        reading: "さえ",
        function: "extreme example emphasis",
        description: "Even - emphasizes extreme or unexpected example",
        usageNotes: "Implies if even X, then certainly others",
        jlptLevel: "N3",
        category: grammarCategories.EMPHASIS,
        examples: [
            {
                japanese: "子供___分かる問題だ。",
                english: "It is a problem that even a child would understand.",
                correct: "さえ",
                options: ["さえ", "でも", "も"],
                explanation: "Even children understand (so adults definitely should)",
                difficulty: difficultyLevels.INTERMEDIATE
            }
        ]
    },

    // ========================================
    // EXPRESSION PATTERNS
    // ========================================
    {
        pattern: "わけがない",
        reading: "わけがない",
        function: "strong negation",
        description: "There is no way that... / It is impossible that...",
        usageNotes: "Expresses strong denial or impossibility",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: [
            {
                japanese: "彼が嘘をつく___。",
                english: "There is no way he would lie.",
                correct: "わけがない",
                options: ["わけがない", "はずがない", "ことがない"],
                explanation: "Expressing impossibility of lying",
                difficulty: difficultyLevels.INTERMEDIATE
            },
            {
                japanese: "そんな簡単に成功する___。",
                english: "There is no way it will succeed that easily.",
                correct: "わけがない",
                options: ["わけがない", "ことはない", "はずがない"],
                explanation: "Denying easy success",
                difficulty: difficultyLevels.INTERMEDIATE
            }
        ]
    },
    {
        pattern: "わけにはいかない",
        reading: "わけにはいかない",
        function: "cannot due to circumstances",
        description: "Cannot do something (due to social/moral reasons)",
        usageNotes: "Used when circumstances prevent an action",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: [
            {
                japanese: "約束を破る___。",
                english: "I cannot break my promise.",
                correct: "わけにはいかない",
                options: ["わけにはいかない", "ことができない", "はずがない"],
                explanation: "Social/moral obligation prevents breaking promise",
                difficulty: difficultyLevels.INTERMEDIATE
            },
            {
                japanese: "仕事中に寝る___。",
                english: "I cannot sleep during work.",
                correct: "わけにはいかない",
                options: ["わけにはいかない", "ことはできない", "べきではない"],
                explanation: "Professional circumstances prevent sleeping",
                difficulty: difficultyLevels.INTERMEDIATE
            }
        ]
    },
    {
        pattern: "ように",
        reading: "ように",
        function: "purpose/manner",
        description: "In order to / So that / In such a way that",
        usageNotes: "Used with potential or negative forms for purpose",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: [
            {
                japanese: "忘れない___メモした。",
                english: "I took notes so I would not forget.",
                correct: "ように",
                options: ["ように", "ために", "ことに"],
                explanation: "Purpose of taking notes",
                difficulty: difficultyLevels.BEGINNER
            },
            {
                japanese: "聞こえる___大きな声で話してください。",
                english: "Please speak loudly so that I can hear.",
                correct: "ように",
                options: ["ように", "ために", "ことに"],
                explanation: "Purpose - so listener can hear",
                difficulty: difficultyLevels.INTERMEDIATE
            }
        ]
    },
    {
        pattern: "っけ",
        reading: "っけ",
        function: "confirmation/recall",
        description: "Used to confirm something you are trying to remember",
        usageNotes: "Casual, often used when thinking aloud",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: [
            {
                japanese: "明日は何曜日だ___？",
                english: "What day is tomorrow again?",
                correct: "っけ",
                options: ["っけ", "かな", "の"],
                explanation: "Trying to recall what day it is",
                difficulty: difficultyLevels.BEGINNER
            },
            {
                japanese: "あの人の名前は何だ___？",
                english: "What was that person's name again?",
                correct: "っけ",
                options: ["っけ", "の", "か"],
                explanation: "Trying to remember a name",
                difficulty: difficultyLevels.BEGINNER
            }
        ]
    },

    // ========================================
    // CONTRAST PATTERNS
    // ========================================
    {
        pattern: "ものの",
        reading: "ものの",
        function: "concession/contrast",
        description: "Although / Even though (formal)",
        usageNotes: "More formal than けど/が for contrast",
        jlptLevel: "N3",
        category: grammarCategories.CONTRAST,
        examples: [
            {
                japanese: "買った___、使っていない。",
                english: "Although I bought it, I have not used it.",
                correct: "ものの",
                options: ["ものの", "けど", "のに"],
                explanation: "Formal contrast between buying and using",
                difficulty: difficultyLevels.INTERMEDIATE
            }
        ]
    },
    {
        pattern: "ながらも",
        reading: "ながらも",
        function: "despite/although",
        description: "Despite / Although / While (unexpectedly)",
        usageNotes: "Similar to ものの but emphasizes unexpectedness",
        jlptLevel: "N3",
        category: grammarCategories.CONTRAST,
        examples: [
            {
                japanese: "小さい___、力が強い。",
                english: "Despite being small, (he/she) is strong.",
                correct: "ながらも",
                options: ["ながらも", "のに", "けど"],
                explanation: "Unexpected strength despite small size",
                difficulty: difficultyLevels.INTERMEDIATE
            }
        ]
    },

    {
        pattern: "いくら～ても",
        reading: "いくら～ても",
        function: "grammar pattern",
        description: "no matter how",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "から〜にかけて",
        reading: "から〜にかけて",
        function: "grammar pattern",
        description: "through; from A to B",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "こと",
        reading: "こと",
        function: "grammar pattern",
        description: "must do; should do",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "くらい／ぐらい",
        reading: "くらい／ぐらい",
        function: "grammar pattern",
        description: "approximately; about; around; to the extent",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "くせに",
        reading: "くせに",
        function: "grammar pattern",
        description: "and yet; though; despite",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "も～ば～も",
        reading: "も～ば～も",
        function: "grammar pattern",
        description: "and; also; either/or; neither/nor",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "もしも～たら",
        reading: "もしも～たら",
        function: "grammar pattern",
        description: "if; supposing",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "なんか／なんて／など",
        reading: "なんか／なんて／など",
        function: "grammar pattern",
        description: "give examples; show modesty; make light of",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "にしても",
        reading: "にしても",
        function: "grammar pattern",
        description: "even if; regardless of",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "にしては",
        reading: "にしては",
        function: "grammar pattern",
        description: "considering (something)",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "にとって",
        reading: "にとって",
        function: "grammar pattern",
        description: "to; for; as far as … is concerned",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "について",
        reading: "について",
        function: "grammar pattern",
        description: "concerning; regarding; about",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "には",
        reading: "には",
        function: "grammar pattern",
        description: "for the purpose of; in order to",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "さえ～ば",
        reading: "さえ～ば",
        function: "grammar pattern",
        description: "if only; as long as",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "しかない",
        reading: "しかない",
        function: "grammar pattern",
        description: "have no choice but",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "数量＋は",
        reading: "すうりょう＋は",
        function: "grammar pattern",
        description: "at least",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "たものだ",
        reading: "たものだ",
        function: "grammar pattern",
        description: "used to do; would often do",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "たって",
        reading: "たって",
        function: "grammar pattern",
        description: "even if; no matter how",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "といい／たらいい",
        reading: "といい／たらいい",
        function: "grammar pattern",
        description: "it would be nice if; should; I hope",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "として",
        reading: "として",
        function: "grammar pattern",
        description: "as; in the role of",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "とは限らない",
        reading: "とはかぎらない",
        function: "grammar pattern",
        description: "not necessarily so; not always true",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "は別として",
        reading: "はべつとして",
        function: "grammar pattern",
        description: "aside from; apart from; except for",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "よりも",
        reading: "よりも",
        function: "grammar pattern",
        description: "in comparison to; rather than; more than",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "しばらく",
        reading: "しばらく",
        function: "grammar pattern",
        description: "for a while; for the time being",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "すでに",
        reading: "すでに",
        function: "grammar pattern",
        description: "already",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "少しも",
        reading: "すこしも",
        function: "grammar pattern",
        description: "not one bit (with negative)",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "すなわち",
        reading: "すなわち",
        function: "grammar pattern",
        description: "in other words; namely",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "たとたん",
        reading: "たとたん",
        function: "grammar pattern",
        description: "as soon as; just as",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "たびに",
        reading: "たびに",
        function: "grammar pattern",
        description: "whenever; every time",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "確かに",
        reading: "たしかに",
        function: "grammar pattern",
        description: "surely; certainly",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "多少",
        reading: "たしょう",
        function: "grammar pattern",
        description: "more or less; somewhat",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "たとえ～ても",
        reading: "たとえ～ても",
        function: "grammar pattern",
        description: "even if",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "例えば",
        reading: "たとえば",
        function: "grammar pattern",
        description: "for example",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "と共に",
        reading: "とともに",
        function: "grammar pattern",
        description: "together with; at the same time as",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "途中で／途中に",
        reading: "とちゅうで／とちゅうに",
        function: "grammar pattern",
        description: "on the way; in the middle of",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "とおりに",
        reading: "とおりに",
        function: "grammar pattern",
        description: "in the same way as",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
    {
        pattern: "とても～ない",
        reading: "とても～ない",
        function: "grammar pattern",
        description: "cannot",
        usageNotes: "",
        jlptLevel: "N3",
        category: grammarCategories.EXPRESSION,
        examples: []
    },
];

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Get patterns by category
 */
export function getPatternsByCategory(category) {
    return grammarPatterns.filter(p => p.category === category);
}

/**
 * Get all patterns with examples (ready for quiz)
 */
export function getPatternsWithExamples() {
    return grammarPatterns.filter(p => p.examples && p.examples.length > 0);
}

/**
 * Get pattern info by pattern string
 */
export function getPatternInfo(pattern) {
    return grammarPatterns.find(p => p.pattern === pattern) || null;
}

/**
 * Get random example from patterns with examples
 */
export function getRandomExample() {
    const patternsWithExamples = getPatternsWithExamples();
    if (patternsWithExamples.length === 0) return null;
    
    const randomPattern = patternsWithExamples[Math.floor(Math.random() * patternsWithExamples.length)];
    const randomExample = randomPattern.examples[Math.floor(Math.random() * randomPattern.examples.length)];
    
    return {
        pattern: randomPattern.pattern,
        ...randomExample
    };
}

/**
 * Get statistics
 */
export function getGrammarStats() {
    return {
        total: grammarPatterns.length,
        withExamples: grammarPatterns.filter(p => p.examples?.length > 0).length,
        totalExamples: grammarPatterns.reduce((sum, p) => sum + (p.examples?.length || 0), 0),
        byCategory: {
            conditional: grammarPatterns.filter(p => p.category === grammarCategories.CONDITIONAL).length,
            scope: grammarPatterns.filter(p => p.category === grammarCategories.SCOPE).length,
            emphasis: grammarPatterns.filter(p => p.category === grammarCategories.EMPHASIS).length,
            connection: grammarPatterns.filter(p => p.category === grammarCategories.CONNECTION).length,
            expression: grammarPatterns.filter(p => p.category === grammarCategories.EXPRESSION).length,
            reasoning: grammarPatterns.filter(p => p.category === grammarCategories.REASONING).length,
            contrast: grammarPatterns.filter(p => p.category === grammarCategories.CONTRAST).length
        }
    };
}

console.log('📚 N3 Grammar Patterns loaded:', getGrammarStats());
