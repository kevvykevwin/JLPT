// assets/js/core/particleDataN5.js
// JLPT N5 Particles - 12 Essential Particles
// Split from monolithic particleData.js for level-based loading

/**
 * Difficulty levels for progressive learning
 */
export const difficultyLevels = {
    BEGINNER: 'beginner',
    INTERMEDIATE: 'intermediate',
    ADVANCED: 'advanced'
};

/**
 * Sentence categories for contextual learning
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
 * N5 Particles list
 */
export const N5_PARTICLES = ["は", "が", "を", "に", "で", "と", "の", "も", "か", "から", "まで", "へ"];

/**
 * N5 Particle data with examples
 */
export const particleDataN5 = [
    // ========================================
    // は - Topic Marker
    // ========================================
    {
        particle: "は",
        reading: "wa",
        function: "topic marker",
        description: "Marks what the sentence is about (the topic)",
        commonMistakes: "Often confused with が when expressing likes/dislikes",
        usageNotes: "は marks contrast or known information, while が marks new information",
        jlptLevel: "N5",
        examples: [
            {
                japanese: "私_学生です",
                english: "I am a student",
                correct: "は",
                options: ["は", "が", "を"],
                explanation: "私 is the topic being discussed",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.DAILY_LIFE
            },
            {
                japanese: "これ_本です",
                english: "This is a book",
                correct: "は",
                options: ["は", "が", "の"],
                explanation: "これ (this) is the topic we're identifying",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.DAILY_LIFE
            },
            {
                japanese: "今日_天気がいいです",
                english: "Today's weather is good",
                correct: "は",
                options: ["は", "が", "の"],
                explanation: "今日 is the topic of discussion",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.WEATHER
            },
            {
                japanese: "日本語_難しいです",
                english: "Japanese is difficult",
                correct: "は",
                options: ["は", "が", "を"],
                explanation: "日本語 is what we're talking about",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.WORK_STUDY
            },
            {
                japanese: "コーヒー_好きですが、お茶は好きじゃないです",
                english: "I like coffee, but I don't like tea",
                correct: "は",
                options: ["は", "が", "も"],
                explanation: "は used for contrast: coffee (yes) vs tea (no)",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.FOOD
            }
        ]
    },

    // ========================================
    // が - Subject Marker
    // ========================================
    {
        particle: "が",
        reading: "ga",
        function: "subject marker",
        description: "Marks the grammatical subject, often for emphasis or new information",
        commonMistakes: "Confusing when to use が vs は with adjectives and verbs of state",
        usageNotes: "Use が for new information, questions, and with words like 好き・上手・分かる",
        jlptLevel: "N5",
        examples: [
            {
                japanese: "犬_好きです",
                english: "I like dogs",
                correct: "が",
                options: ["が", "は", "を"],
                explanation: "犬 is the object of liking (grammatical subject with 好き)",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.HOBBIES
            },
            {
                japanese: "雨_降っています",
                english: "It's raining",
                correct: "が",
                options: ["が", "は", "に"],
                explanation: "雨 is the natural phenomenon occurring",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.WEATHER
            },
            {
                japanese: "誰_来ましたか",
                english: "Who came?",
                correct: "が",
                options: ["が", "は", "を"],
                explanation: "Question words (誰, 何, etc.) always use が",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.SOCIAL
            },
            {
                japanese: "日本語_分かりますか",
                english: "Do you understand Japanese?",
                correct: "が",
                options: ["が", "は", "を"],
                explanation: "分かる (to understand) requires が for its object",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.WORK_STUDY
            },
            {
                japanese: "音楽_聞こえます",
                english: "I can hear music",
                correct: "が",
                options: ["が", "を", "に"],
                explanation: "聞こえる (can hear) uses が for what is heard",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.HOBBIES
            }
        ]
    },

    // ========================================
    // を - Direct Object Marker
    // ========================================
    {
        particle: "を",
        reading: "wo/o",
        function: "direct object marker",
        description: "Marks what receives the action of the verb (the direct object)",
        commonMistakes: "Forgetting を with verbs like 飲む, 食べる, 見る, 読む",
        usageNotes: "Also marks the space through which movement occurs (歩く, 走る, etc.)",
        jlptLevel: "N5",
        examples: [
            {
                japanese: "本_読みます",
                english: "I read a book",
                correct: "を",
                options: ["を", "が", "に"],
                explanation: "本 is what is being read (direct object)",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.HOBBIES
            },
            {
                japanese: "映画_見ました",
                english: "I watched a movie",
                correct: "を",
                options: ["を", "が", "で"],
                explanation: "映画 is what was watched (direct object)",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.HOBBIES
            },
            {
                japanese: "水_飲みます",
                english: "I drink water",
                correct: "を",
                options: ["を", "が", "に"],
                explanation: "水 is what is being drunk (direct object)",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.FOOD
            },
            {
                japanese: "日本語_勉強します",
                english: "I study Japanese",
                correct: "を",
                options: ["を", "に", "で"],
                explanation: "日本語 is what is being studied",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.WORK_STUDY
            },
            {
                japanese: "公園_散歩します",
                english: "I take a walk in the park",
                correct: "を",
                options: ["を", "で", "に"],
                explanation: "を marks the space through which movement occurs",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.HOBBIES
            }
        ]
    },

    // ========================================
    // に - Direction/Time/Indirect Object
    // ========================================
    {
        particle: "に",
        reading: "ni",
        function: "direction/time/indirect object marker",
        description: "Shows direction, specific time, or recipient of an action",
        commonMistakes: "Confusing に (destination) with で (location of action)",
        usageNotes: "Use に for: destination, specific time, existence location, indirect object, purpose",
        jlptLevel: "N5",
        examples: [
            {
                japanese: "学校_行きます",
                english: "I go to school",
                correct: "に",
                options: ["に", "で", "を"],
                explanation: "学校 is the destination",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.WORK_STUDY
            },
            {
                japanese: "七時_起きます",
                english: "I wake up at 7 o'clock",
                correct: "に",
                options: ["に", "で", "から"],
                explanation: "七時 is a specific time point",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.TIME
            },
            {
                japanese: "友達_手紙を書きます",
                english: "I write a letter to my friend",
                correct: "に",
                options: ["に", "が", "を"],
                explanation: "友達 is the recipient (indirect object)",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.SOCIAL
            },
            {
                japanese: "机の上_本があります",
                english: "There is a book on the desk",
                correct: "に",
                options: ["に", "で", "を"],
                explanation: "Location of existence with ある/いる",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.LOCATION
            },
            {
                japanese: "東京_住んでいます",
                english: "I live in Tokyo",
                correct: "に",
                options: ["に", "で", "を"],
                explanation: "Permanent location of residence",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.LOCATION
            }
        ]
    },

    // ========================================
    // で - Location of Action/Method
    // ========================================
    {
        particle: "で",
        reading: "de",
        function: "location of action/method marker",
        description: "Shows where an action takes place or the method/means used",
        commonMistakes: "Confusing で (action location) with に (existence location)",
        usageNotes: "Use で for: action location, method/means, cause/reason, scope/limit",
        jlptLevel: "N5",
        examples: [
            {
                japanese: "図書館_勉強します",
                english: "I study at the library",
                correct: "で",
                options: ["で", "に", "を"],
                explanation: "図書館 is where the action takes place",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.WORK_STUDY
            },
            {
                japanese: "電車_行きます",
                english: "I go by train",
                correct: "で",
                options: ["で", "に", "が"],
                explanation: "電車 is the method of transportation",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.TRANSPORTATION
            },
            {
                japanese: "日本語_話します",
                english: "I speak in Japanese",
                correct: "で",
                options: ["で", "を", "に"],
                explanation: "日本語 is the language used (method)",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.WORK_STUDY
            },
            {
                japanese: "レストラン_食事します",
                english: "I eat at a restaurant",
                correct: "で",
                options: ["で", "に", "を"],
                explanation: "レストラン is where the eating occurs",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.FOOD
            },
            {
                japanese: "ペン_書きます",
                english: "I write with a pen",
                correct: "で",
                options: ["で", "を", "に"],
                explanation: "ペン is the tool used (method)",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.WORK_STUDY
            }
        ]
    },

    // ========================================
    // と - Conjunction/Accompaniment
    // ========================================
    {
        particle: "と",
        reading: "to",
        function: "conjunction/accompaniment marker",
        description: "Connects nouns ('and') or shows accompaniment ('with')",
        commonMistakes: "Using と for 'or' (should use か), or with more than 2-3 items (use や)",
        usageNotes: "と lists items exhaustively; use や for partial lists",
        jlptLevel: "N5",
        examples: [
            {
                japanese: "友達_映画を見ます",
                english: "I watch a movie with my friend",
                correct: "と",
                options: ["と", "に", "が"],
                explanation: "友達 is who you're with (accompaniment)",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.SOCIAL
            },
            {
                japanese: "パン_牛乳を買います",
                english: "I buy bread and milk",
                correct: "と",
                options: ["と", "を", "に"],
                explanation: "と connects two items being bought",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.FOOD
            },
            {
                japanese: "犬_猫がいます",
                english: "There are dogs and cats",
                correct: "と",
                options: ["と", "や", "か"],
                explanation: "Complete list of two types of animals",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.DAILY_LIFE
            },
            {
                japanese: "これ_それは違います",
                english: "This and that are different",
                correct: "と",
                options: ["と", "が", "は"],
                explanation: "Connecting two items for comparison",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.DAILY_LIFE
            },
            {
                japanese: "母_買い物に行きました",
                english: "I went shopping with my mother",
                correct: "と",
                options: ["と", "に", "で"],
                explanation: "母 is the person you went with",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.SHOPPING
            }
        ]
    },

    // ========================================
    // の - Possessive/Explanatory
    // ========================================
    {
        particle: "の",
        reading: "no",
        function: "possessive/explanatory marker",
        description: "Shows possession, attribution, or explanation",
        commonMistakes: "Overusing の in chains (use な for na-adjectives)",
        usageNotes: "Can replace nouns in certain contexts (私のです = it's mine)",
        jlptLevel: "N5",
        examples: [
            {
                japanese: "私_本です",
                english: "It's my book",
                correct: "の",
                options: ["の", "が", "を"],
                explanation: "Shows possession (my book)",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.DAILY_LIFE
            },
            {
                japanese: "日本_料理",
                english: "Japanese cuisine",
                correct: "の",
                options: ["の", "が", "に"],
                explanation: "Shows origin/attribution",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.FOOD
            },
            {
                japanese: "友達_家",
                english: "My friend's house",
                correct: "の",
                options: ["の", "が", "は"],
                explanation: "Possessive relationship",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.LOCATION
            },
            {
                japanese: "学校_先生",
                english: "School teacher",
                correct: "の",
                options: ["の", "で", "に"],
                explanation: "Shows affiliation/workplace",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.WORK_STUDY
            },
            {
                japanese: "これは誰_ですか",
                english: "Whose is this?",
                correct: "の",
                options: ["の", "が", "を"],
                explanation: "の as noun substitute (whose thing)",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.DAILY_LIFE
            }
        ]
    },

    // ========================================
    // も - Inclusive Particle
    // ========================================
    {
        particle: "も",
        reading: "mo",
        function: "inclusive particle",
        description: "Means 'also', 'too', or 'both/neither' (with negative)",
        commonMistakes: "Forgetting that も replaces は/が/を (not added to them)",
        usageNotes: "Use with negative verbs to mean 'neither' or 'not...either'",
        jlptLevel: "N5",
        examples: [
            {
                japanese: "私_学生です",
                english: "I am also a student",
                correct: "も",
                options: ["も", "は", "が"],
                explanation: "Indicates 'me too/also'",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.DAILY_LIFE
            },
            {
                japanese: "コーヒー_お茶も好きです",
                english: "I like both coffee and tea",
                correct: "も",
                options: ["も", "と", "や"],
                explanation: "Both items are liked",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.FOOD
            },
            {
                japanese: "本_読みません",
                english: "I don't read books either",
                correct: "も",
                options: ["も", "は", "を"],
                explanation: "も with negative = 'not...either'",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.HOBBIES
            },
            {
                japanese: "彼_来ます",
                english: "He is coming too",
                correct: "も",
                options: ["も", "は", "が"],
                explanation: "Indicates additional person",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.SOCIAL
            },
            {
                japanese: "日本語_中国語も話せます",
                english: "I can speak both Japanese and Chinese",
                correct: "も",
                options: ["も", "と", "を"],
                explanation: "Multiple abilities indicated",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.WORK_STUDY
            }
        ]
    },

    // ========================================
    // か - Question Marker
    // ========================================
    {
        particle: "か",
        reading: "ka",
        function: "question marker",
        description: "Turns statements into questions, or shows uncertainty",
        commonMistakes: "Using か with rising intonation (か already makes it a question)",
        usageNotes: "Can mean 'or' between choices, or 'some/something' with question words",
        jlptLevel: "N5",
        examples: [
            {
                japanese: "学生です_",
                english: "Are you a student?",
                correct: "か",
                options: ["か", "ね", "よ"],
                explanation: "か turns statement into question",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.DAILY_LIFE
            },
            {
                japanese: "コーヒー_お茶が好きですか",
                english: "Do you like coffee or tea?",
                correct: "か",
                options: ["か", "と", "や"],
                explanation: "か between options means 'or'",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.FOOD
            },
            {
                japanese: "何_食べますか",
                english: "What will you eat?",
                correct: "か",
                options: ["か", "が", "を"],
                explanation: "Question marker with 何",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.FOOD
            },
            {
                japanese: "誰_知っていますか",
                english: "Do you know someone?",
                correct: "か",
                options: ["か", "が", "を"],
                explanation: "か with 誰 = 'someone'",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.SOCIAL
            },
            {
                japanese: "行きます_行きませんか",
                english: "Will you go or not?",
                correct: "か",
                options: ["か", "と", "が"],
                explanation: "か offering two opposite choices",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.DAILY_LIFE
            }
        ]
    },

    // ========================================
    // から - Starting Point/Reason
    // ========================================
    {
        particle: "から",
        reading: "kara",
        function: "starting point/reason marker",
        description: "Shows starting point in time or space, or indicates reason ('because')",
        commonMistakes: "Confusing から (because) with ので (softer reason)",
        usageNotes: "から after verbs/adjectives = 'because'; after nouns/time = 'from'",
        jlptLevel: "N5",
        examples: [
            {
                japanese: "家_出ます",
                english: "I leave from home",
                correct: "から",
                options: ["から", "に", "で"],
                explanation: "家 is the starting point",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.LOCATION
            },
            {
                japanese: "九時_始まります",
                english: "It starts from 9 o'clock",
                correct: "から",
                options: ["から", "に", "まで"],
                explanation: "九時 is the starting time",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.TIME
            },
            {
                japanese: "疲れました_休みます",
                english: "I'm tired, so I'll rest",
                correct: "から",
                options: ["から", "が", "で"],
                explanation: "から indicates reason (because I'm tired)",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.DAILY_LIFE
            },
            {
                japanese: "東京_大阪まで",
                english: "From Tokyo to Osaka",
                correct: "から",
                options: ["から", "で", "に"],
                explanation: "Starting point of journey",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.TRANSPORTATION
            },
            {
                japanese: "雨です_行きません",
                english: "Because it's raining, I won't go",
                correct: "から",
                options: ["から", "ので", "が"],
                explanation: "Stating reason (because of rain)",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.WEATHER
            }
        ]
    },

    // ========================================
    // まで - Ending Point
    // ========================================
    {
        particle: "まで",
        reading: "made",
        function: "ending point marker",
        description: "Shows ending point in time or space ('until', 'to', 'as far as')",
        commonMistakes: "Confusing まで (endpoint) with までに (deadline)",
        usageNotes: "Often paired with から to show range (から...まで = from...to)",
        jlptLevel: "N5",
        examples: [
            {
                japanese: "駅_歩きます",
                english: "I walk to the station",
                correct: "まで",
                options: ["まで", "に", "で"],
                explanation: "駅 is the destination/endpoint",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.TRANSPORTATION
            },
            {
                japanese: "五時_働きます",
                english: "I work until 5 o'clock",
                correct: "まで",
                options: ["まで", "に", "から"],
                explanation: "五時 is the ending time",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.WORK_STUDY
            },
            {
                japanese: "ここ_ください",
                english: "Please go up to here",
                correct: "まで",
                options: ["まで", "に", "で"],
                explanation: "ここ is the endpoint/limit",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.LOCATION
            },
            {
                japanese: "東京から大阪_",
                english: "From Tokyo to Osaka",
                correct: "まで",
                options: ["まで", "に", "へ"],
                explanation: "Ending point of range (paired with から)",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.TRANSPORTATION
            },
            {
                japanese: "明日_待ちます",
                english: "I'll wait until tomorrow",
                correct: "まで",
                options: ["まで", "に", "で"],
                explanation: "Time limit for waiting",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.TIME
            }
        ]
    },

    // ========================================
    // へ - Direction
    // ========================================
    {
        particle: "へ",
        reading: "e",
        function: "direction marker",
        description: "Shows direction of movement ('to', 'toward')",
        commonMistakes: "Confusing へ (general direction) with に (specific destination)",
        usageNotes: "へ emphasizes the direction; に emphasizes arrival at destination",
        jlptLevel: "N5",
        examples: [
            {
                japanese: "学校_行きます",
                english: "I go to school",
                correct: "へ",
                options: ["へ", "に", "で"],
                explanation: "へ shows direction toward school",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.WORK_STUDY
            },
            {
                japanese: "東_進みます",
                english: "I proceed toward the east",
                correct: "へ",
                options: ["へ", "に", "を"],
                explanation: "Direction of movement (eastward)",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.LOCATION
            },
            {
                japanese: "日本_来ました",
                english: "I came to Japan",
                correct: "へ",
                options: ["へ", "に", "で"],
                explanation: "Direction of travel toward Japan",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.TRANSPORTATION
            },
            {
                japanese: "未来_進む",
                english: "Move toward the future",
                correct: "へ",
                options: ["へ", "に", "で"],
                explanation: "Abstract direction (toward future)",
                difficulty: difficultyLevels.INTERMEDIATE,
                category: sentenceCategories.DAILY_LIFE
            },
            {
                japanese: "友達の家_遊びに行きます",
                english: "I'm going to my friend's house to play",
                correct: "へ",
                options: ["へ", "に", "で"],
                explanation: "Direction toward friend's house",
                difficulty: difficultyLevels.BEGINNER,
                category: sentenceCategories.SOCIAL
            }
        ]
    }
];

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Get all N5 particle data
 */
export function getParticleData() {
    return particleDataN5;
}

/**
 * Get particle by name
 */
export function getParticle(particleName) {
    return particleDataN5.find(p => p.particle === particleName) || null;
}

/**
 * Get all examples for a particle
 */
export function getExamples(particleName) {
    const particle = getParticle(particleName);
    return particle ? particle.examples : [];
}

/**
 * Get random example from all N5 particles
 */
export function getRandomExample() {
    const randomParticle = particleDataN5[Math.floor(Math.random() * particleDataN5.length)];
    const randomExample = randomParticle.examples[Math.floor(Math.random() * randomParticle.examples.length)];
    return {
        particle: randomParticle.particle,
        ...randomExample
    };
}

/**
 * Get statistics
 */
export function getStats() {
    return {
        totalParticles: particleDataN5.length,
        totalExamples: particleDataN5.reduce((sum, p) => sum + p.examples.length, 0),
        particles: N5_PARTICLES
    };
}

console.log('📚 N5 Particles loaded:', getStats());
