// assets/js/core/vocabularyN4Kanji.js

/**
 * N4 Kanji Vocabulary Dataset
 * 
 * Structure includes:
 * - japanese: The word/phrase using the kanji
 * - reading: Hiragana reading
 * - meaning: English definition
 * - type: Word classification (noun, verb, adjective)
 * - kanji: Metadata for future kanji quiz modes
 *   - character: The kanji character
 *   - onYomi: Array of on-yomi readings
 *   - kunYomi: Array of kun-yomi readings
 */

export const N4_KANJI_VOCABULARY = [
    // 会 (カイ/あう) - meet
    {
        japanese: "会う",
        reading: "あう",
        meaning: "to meet",
        type: "verb",
        kanji: {
            character: "会",
            onYomi: ["カイ"],
            kunYomi: ["あう"]
        }
    },
    {
        japanese: "会社",
        reading: "かいしゃ",
        meaning: "company",
        type: "noun",
        kanji: {
            character: "会",
            onYomi: ["カイ"],
            kunYomi: ["あう"]
        }
    },
    
    // 同 (ドウ/おなじ) - same
    {
        japanese: "同じ",
        reading: "おなじ",
        meaning: "same",
        type: "na-adjective",
        kanji: {
            character: "同",
            onYomi: ["ドウ"],
            kunYomi: ["おなじ"]
        }
    },
    
    // 事 (ジ/こと) - matter/thing
    {
        japanese: "事故",
        reading: "じこ",
        meaning: "accident",
        type: "noun",
        kanji: {
            character: "事",
            onYomi: ["ジ"],
            kunYomi: ["こと"]
        }
    },
    {
        japanese: "仕事",
        reading: "しごと",
        meaning: "work/job",
        type: "noun",
        kanji: {
            character: "事",
            onYomi: ["ジ"],
            kunYomi: ["こと"]
        }
    },
    
    // 自 (ジ/みずから) - self
    {
        japanese: "自転車",
        reading: "じてんしゃ",
        meaning: "bicycle",
        type: "noun",
        kanji: {
            character: "自",
            onYomi: ["ジ"],
            kunYomi: ["みずから"]
        }
    },
    
    // 発 (ハツ/はつ) - emit/depart
    {
        japanese: "発表",
        reading: "はっぴょう",
        meaning: "presentation/announcement",
        type: "noun",
        kanji: {
            character: "発",
            onYomi: ["ハツ"],
            kunYomi: ["はつ"]
        }
    },
    
    // 者 (シャ/もの) - person
    {
        japanese: "医者",
        reading: "いしゃ",
        meaning: "doctor",
        type: "noun",
        kanji: {
            character: "者",
            onYomi: ["シャ"],
            kunYomi: ["もの"]
        }
    },
    
    // 地 (チ/じ) - ground/land
    {
        japanese: "地下鉄",
        reading: "ちかてつ",
        meaning: "subway",
        type: "noun",
        kanji: {
            character: "地",
            onYomi: ["チ"],
            kunYomi: ["じ"]
        }
    },
    
    // 業 (ギョウ/わざ) - business/study
    {
        japanese: "卒業",
        reading: "そつぎょう",
        meaning: "graduation",
        type: "noun",
        kanji: {
            character: "業",
            onYomi: ["ギョウ"],
            kunYomi: ["わざ"]
        }
    },
    
    // 方 (ホウ/かた) - direction/way
    {
        japanese: "方法",
        reading: "ほうほう",
        meaning: "method",
        type: "noun",
        kanji: {
            character: "方",
            onYomi: ["ホウ"],
            kunYomi: ["かた"]
        }
    },
    
    // 新 (シン/あたらしい) - new
    {
        japanese: "新聞",
        reading: "しんぶん",
        meaning: "newspaper",
        type: "noun",
        kanji: {
            character: "新",
            onYomi: ["シン"],
            kunYomi: ["あたらしい"]
        }
    },
    
    // 場 (ジョウ/ば) - place
    {
        japanese: "場所",
        reading: "ばしょ",
        meaning: "place/location",
        type: "noun",
        kanji: {
            character: "場",
            onYomi: ["ジョウ"],
            kunYomi: ["ば"]
        }
    },
    {
        japanese: "広場",
        reading: "ひろば",
        meaning: "plaza/square",
        type: "noun",
        kanji: {
            character: "場",
            onYomi: ["ジョウ"],
            kunYomi: ["ば"]
        }
    },
    
    // 員 (イン/いん) - member
    {
        japanese: "会社員",
        reading: "かいしゃいん",
        meaning: "company employee",
        type: "noun",
        kanji: {
            character: "員",
            onYomi: ["イン"],
            kunYomi: ["いん"]
        }
    },
    {
        japanese: "店員",
        reading: "てんいん",
        meaning: "clerk/shop assistant",
        type: "noun",
        kanji: {
            character: "員",
            onYomi: ["イン"],
            kunYomi: ["いん"]
        }
    },
    
    // 立 (リツ/たつ) - stand
    {
        japanese: "立つ",
        reading: "たつ",
        meaning: "to stand",
        type: "verb",
        kanji: {
            character: "立",
            onYomi: ["リツ"],
            kunYomi: ["たつ"]
        }
    },
    {
        japanese: "私立",
        reading: "しりつ",
        meaning: "private (institution)",
        type: "noun",
        kanji: {
            character: "立",
            onYomi: ["リツ"],
            kunYomi: ["たつ"]
        }
    },
    
    // 開 (カイ/ひらく) - open
    {
        japanese: "開く",
        reading: "ひらく",
        meaning: "to open",
        type: "verb",
        kanji: {
            character: "開",
            onYomi: ["カイ"],
            kunYomi: ["ひらく"]
        }
    },
    {
        japanese: "開始",
        reading: "かいし",
        meaning: "start/beginning",
        type: "noun",
        kanji: {
            character: "開",
            onYomi: ["カイ"],
            kunYomi: ["ひらく"]
        }
    },
    
    // 手 (シュ/て) - hand
    {
        japanese: "手紙",
        reading: "てがみ",
        meaning: "letter",
        type: "noun",
        kanji: {
            character: "手",
            onYomi: ["シュ"],
            kunYomi: ["て"]
        }
    },
    
    // 力 (リョク/ちから) - power/strength
    {
        japanese: "努力",
        reading: "どりょく",
        meaning: "effort",
        type: "noun",
        kanji: {
            character: "力",
            onYomi: ["リョク"],
            kunYomi: ["ちから"]
        }
    },
    
    // 問 (モン/とい) - question
    {
        japanese: "質問",
        reading: "しつもん",
        meaning: "question",
        type: "noun",
        kanji: {
            character: "問",
            onYomi: ["モン"],
            kunYomi: ["とい"]
        }
    },
    {
        japanese: "問題",
        reading: "もんだい",
        meaning: "problem",
        type: "noun",
        kanji: {
            character: "問",
            onYomi: ["モン"],
            kunYomi: ["とい"]
        }
    },
    
    // 代 (ダイ/よ) - generation/replace
    {
        japanese: "時代",
        reading: "じだい",
        meaning: "era/period",
        type: "noun",
        kanji: {
            character: "代",
            onYomi: ["ダイ"],
            kunYomi: ["よ"]
        }
    },
    
    // 明 (メイ/あかるい) - bright
    {
        japanese: "明るい",
        reading: "あかるい",
        meaning: "bright",
        type: "i-adjective",
        kanji: {
            character: "明",
            onYomi: ["メイ"],
            kunYomi: ["あかるい"]
        }
    },
    {
        japanese: "説明",
        reading: "せつめい",
        meaning: "explanation",
        type: "noun",
        kanji: {
            character: "明",
            onYomi: ["メイ"],
            kunYomi: ["あかるい"]
        }
    },
    
    // 動 (ドウ/うごく) - move
    {
        japanese: "動物",
        reading: "どうぶつ",
        meaning: "animal",
        type: "noun",
        kanji: {
            character: "動",
            onYomi: ["ドウ"],
            kunYomi: ["うごく"]
        }
    },
    {
        japanese: "運動",
        reading: "うんどう",
        meaning: "exercise/movement",
        type: "noun",
        kanji: {
            character: "動",
            onYomi: ["ドウ"],
            kunYomi: ["うごく"]
        }
    },
    {
        japanese: "労働",
        reading: "ろうどう",
        meaning: "labor/work",
        type: "noun",
        kanji: {
            character: "動",
            onYomi: ["ドウ"],
            kunYomi: ["うごく"]
        }
    },
    
    // 京 (キョウ/みやこ) - capital
    {
        japanese: "東京",
        reading: "とうきょう",
        meaning: "Tokyo",
        type: "noun",
        kanji: {
            character: "京",
            onYomi: ["キョウ"],
            kunYomi: ["みやこ"]
        }
    },
    
    // 目 (モク/め) - eye
    {
        japanese: "目標",
        reading: "もくひょう",
        meaning: "goal/target",
        type: "noun",
        kanji: {
            character: "目",
            onYomi: ["モク"],
            kunYomi: ["め"]
        }
    },
    {
        japanese: "目的",
        reading: "もくてき",
        meaning: "purpose/objective",
        type: "noun",
        kanji: {
            character: "目",
            onYomi: ["モク"],
            kunYomi: ["め"]
        }
    },
    {
        japanese: "注目",
        reading: "ちゅうもく",
        meaning: "attention/notice",
        type: "noun",
        kanji: {
            character: "目",
            onYomi: ["モク"],
            kunYomi: ["め"]
        }
    },
    
    // 通 (ツウ/とおる) - pass through
    {
        japanese: "通学",
        reading: "つうがく",
        meaning: "commuting to school",
        type: "noun",
        kanji: {
            character: "通",
            onYomi: ["ツウ"],
            kunYomi: ["とおる"]
        }
    },
    
    // 言 (ゲン/いう) - say
    {
        japanese: "言葉",
        reading: "ことば",
        meaning: "word/language",
        type: "noun",
        kanji: {
            character: "言",
            onYomi: ["ゲン"],
            kunYomi: ["いう"]
        }
    },
    {
        japanese: "伝言",
        reading: "でんごん",
        meaning: "message",
        type: "noun",
        kanji: {
            character: "言",
            onYomi: ["ゲン"],
            kunYomi: ["いう"]
        }
    },
    
    // 理 (リ/ことわり) - reason/logic
    {
        japanese: "料理",
        reading: "りょうり",
        meaning: "cooking/cuisine",
        type: "noun",
        kanji: {
            character: "理",
            onYomi: ["リ"],
            kunYomi: ["ことわり"]
        }
    },
    
    // 体 (タイ/からだ) - body
    {
        japanese: "体重",
        reading: "たいじゅう",
        meaning: "body weight",
        type: "noun",
        kanji: {
            character: "体",
            onYomi: ["タイ"],
            kunYomi: ["からだ"]
        }
    },
    
    // 田 (デン/た) - rice field
    {
        japanese: "田舎",
        reading: "いなか",
        meaning: "countryside",
        type: "noun",
        kanji: {
            character: "田",
            onYomi: ["デン"],
            kunYomi: ["た"]
        }
    },
    
    // 主 (シュ/ぬし) - master/main
    {
        japanese: "主人",
        reading: "しゅじん",
        meaning: "husband/master",
        type: "noun",
        kanji: {
            character: "主",
            onYomi: ["シュ"],
            kunYomi: ["ぬし"]
        }
    },
    {
        japanese: "主役",
        reading: "しゅやく",
        meaning: "leading role",
        type: "noun",
        kanji: {
            character: "主",
            onYomi: ["シュ"],
            kunYomi: ["ぬし"]
        }
    },
    
    // 題 (ダイ/だい) - topic/title
    {
        japanese: "問題",
        reading: "もんだい",
        meaning: "problem",
        type: "noun",
        kanji: {
            character: "題",
            onYomi: ["ダイ"],
            kunYomi: ["だい"]
        }
    },
    
    // 意 (イ/い) - meaning/intention
    {
        japanese: "意味",
        reading: "いみ",
        meaning: "meaning",
        type: "noun",
        kanji: {
            character: "意",
            onYomi: ["イ"],
            kunYomi: ["い"]
        }
    },
    {
        japanese: "注意",
        reading: "ちゅうい",
        meaning: "caution/attention",
        type: "noun",
        kanji: {
            character: "意",
            onYomi: ["イ"],
            kunYomi: ["い"]
        }
    },
    {
        japanese: "意見",
        reading: "いけん",
        meaning: "opinion",
        type: "noun",
        kanji: {
            character: "意",
            onYomi: ["イ"],
            kunYomi: ["い"]
        }
    },
    {
        japanese: "決意",
        reading: "けつい",
        meaning: "determination",
        type: "noun",
        kanji: {
            character: "意",
            onYomi: ["イ"],
            kunYomi: ["い"]
        }
    },
    
    // 不 (フ/ふ) - negative prefix
    {
        japanese: "不便",
        reading: "ふべん",
        meaning: "inconvenient",
        type: "na-adjective",
        kanji: {
            character: "不",
            onYomi: ["フ"],
            kunYomi: ["ふ"]
        }
    },
    
    // 作 (サク/つくる) - make
    {
        japanese: "作る",
        reading: "つくる",
        meaning: "to make",
        type: "verb",
        kanji: {
            character: "作",
            onYomi: ["サク"],
            kunYomi: ["つくる"]
        }
    },
    {
        japanese: "作文",
        reading: "さくぶん",
        meaning: "composition/essay",
        type: "noun",
        kanji: {
            character: "作",
            onYomi: ["サク"],
            kunYomi: ["つくる"]
        }
    },
    
    // 用 (ヨウ/もちいる) - use
    {
        japanese: "利用",
        reading: "りよう",
        meaning: "use/utilization",
        type: "noun",
        kanji: {
            character: "用",
            onYomi: ["ヨウ"],
            kunYomi: ["もちいる"]
        }
    },
    {
        japanese: "使用",
        reading: "しよう",
        meaning: "use",
        type: "noun",
        kanji: {
            character: "用",
            onYomi: ["ヨウ"],
            kunYomi: ["もちいる"]
        }
    },
    
    // 度 (ド/たび) - degree/times
    {
        japanese: "温度",
        reading: "おんど",
        meaning: "temperature",
        type: "noun",
        kanji: {
            character: "度",
            onYomi: ["ド"],
            kunYomi: ["たび"]
        }
    },
    
    // 強 (キョウ/つよい) - strong
    {
        japanese: "強い",
        reading: "つよい",
        meaning: "strong",
        type: "i-adjective",
        kanji: {
            character: "強",
            onYomi: ["キョウ"],
            kunYomi: ["つよい"]
        }
    },
    
    // 公 (コウ/おおやけ) - public
    {
        japanese: "公園",
        reading: "こうえん",
        meaning: "park",
        type: "noun",
        kanji: {
            character: "公",
            onYomi: ["コウ"],
            kunYomi: ["おおやけ"]
        }
    },
    
    // 持 (ジ/もつ) - hold
    {
        japanese: "持つ",
        reading: "もつ",
        meaning: "to have/hold",
        type: "verb",
        kanji: {
            character: "持",
            onYomi: ["ジ"],
            kunYomi: ["もつ"]
        }
    },
    
    // 野 (ヤ/の) - field
    {
        japanese: "野球",
        reading: "やきゅう",
        meaning: "baseball",
        type: "noun",
        kanji: {
            character: "野",
            onYomi: ["ヤ"],
            kunYomi: ["の"]
        }
    },
    
    // 以 (イ/もって) - by means of
    {
        japanese: "以上",
        reading: "いじょう",
        meaning: "more than/above",
        type: "noun",
        kanji: {
            character: "以",
            onYomi: ["イ"],
            kunYomi: ["もって"]
        }
    },
    
    // 思 (シ/おもう) - think
    {
        japanese: "思い出",
        reading: "おもいで",
        meaning: "memory",
        type: "noun",
        kanji: {
            character: "思",
            onYomi: ["シ"],
            kunYomi: ["おもう"]
        }
    },
    
    // 家 (カ/いえ) - house/family
    {
        japanese: "家族",
        reading: "かぞく",
        meaning: "family",
        type: "noun",
        kanji: {
            character: "家",
            onYomi: ["カ"],
            kunYomi: ["いえ"]
        }
    },
    
    // 世 (セイ/よ) - world/generation
    {
        japanese: "世界",
        reading: "せかい",
        meaning: "world",
        type: "noun",
        kanji: {
            character: "世",
            onYomi: ["セイ"],
            kunYomi: ["よ"]
        }
    },
    
    // 多 (タ/おおい) - many
    {
        japanese: "多分",
        reading: "たぶん",
        meaning: "probably",
        type: "noun",
        kanji: {
            character: "多",
            onYomi: ["タ"],
            kunYomi: ["おおい"]
        }
    },
    
    // 正 (セイ/ただしい) - correct
    {
        japanese: "正しい",
        reading: "ただしい",
        meaning: "correct",
        type: "i-adjective",
        kanji: {
            character: "正",
            onYomi: ["セイ"],
            kunYomi: ["ただしい"]
        }
    },
    
    // 安 (アン/やすい) - cheap/peaceful
    {
        japanese: "安全",
        reading: "あんぜん",
        meaning: "safe/safety",
        type: "na-adjective",
        kanji: {
            character: "安",
            onYomi: ["アン"],
            kunYomi: ["やすい"]
        }
    },
    {
        japanese: "安心",
        reading: "あんしん",
        meaning: "relief/peace of mind",
        type: "noun",
        kanji: {
            character: "安",
            onYomi: ["アン"],
            kunYomi: ["やすい"]
        }
    },
    
    // 院 (イン/いん) - institution
    {
        japanese: "病院",
        reading: "びょういん",
        meaning: "hospital",
        type: "noun",
        kanji: {
            character: "院",
            onYomi: ["イン"],
            kunYomi: ["いん"]
        }
    },
    {
        japanese: "医院",
        reading: "いいん",
        meaning: "clinic",
        type: "noun",
        kanji: {
            character: "院",
            onYomi: ["イン"],
            kunYomi: ["いん"]
        }
    },
    
    // 心 (シン/こころ) - heart/mind
    {
        japanese: "安心",
        reading: "あんしん",
        meaning: "relief/peace of mind",
        type: "noun",
        kanji: {
            character: "心",
            onYomi: ["シン"],
            kunYomi: ["こころ"]
        }
    },
    
    // 界 (カイ/さかい) - boundary/world
    {
        japanese: "世界",
        reading: "せかい",
        meaning: "world",
        type: "noun",
        kanji: {
            character: "界",
            onYomi: ["カイ"],
            kunYomi: ["さかい"]
        }
    },
    
    // 教 (キョウ/おしえる) - teach
    {
        japanese: "教育",
        reading: "きょういく",
        meaning: "education",
        type: "noun",
        kanji: {
            character: "教",
            onYomi: ["キョウ"],
            kunYomi: ["おしえる"]
        }
    },
    
    // 文 (ブン/ふみ) - writing/text
    {
        japanese: "作文",
        reading: "さくぶん",
        meaning: "composition/essay",
        type: "noun",
        kanji: {
            character: "文",
            onYomi: ["ブン"],
            kunYomi: ["ふみ"]
        }
    },
    
    // 元 (ゲン/もと) - origin
    {
        japanese: "元気",
        reading: "げんき",
        meaning: "healthy/energetic",
        type: "na-adjective",
        kanji: {
            character: "元",
            onYomi: ["ゲン"],
            kunYomi: ["もと"]
        }
    },
    
    // 重 (ジュウ/おもい) - heavy/important
    {
        japanese: "重要",
        reading: "じゅうよう",
        meaning: "important",
        type: "na-adjective",
        kanji: {
            character: "重",
            onYomi: ["ジュウ"],
            kunYomi: ["おもい"]
        }
    },
    {
        japanese: "体重",
        reading: "たいじゅう",
        meaning: "body weight",
        type: "noun",
        kanji: {
            character: "重",
            onYomi: ["ジュウ"],
            kunYomi: ["おもい"]
        }
    },
    
    // 近 (キン/ちかい) - near
    {
        japanese: "近所",
        reading: "きんじょ",
        meaning: "neighborhood",
        type: "noun",
        kanji: {
            character: "近",
            onYomi: ["キン"],
            kunYomi: ["ちかい"]
        }
    },
    
    // 考 (コウ/かんがえる) - think
    {
        japanese: "考える",
        reading: "かんがえる",
        meaning: "to think/consider",
        type: "verb",
        kanji: {
            character: "考",
            onYomi: ["コウ"],
            kunYomi: ["かんがえる"]
        }
    },
    
    // 画 (ガ/えがく) - picture/stroke
    {
        japanese: "映画",
        reading: "えいが",
        meaning: "movie",
        type: "noun",
        kanji: {
            character: "画",
            onYomi: ["ガ"],
            kunYomi: ["えがく"]
        }
    },
    {
        japanese: "計画",
        reading: "けいかく",
        meaning: "plan",
        type: "noun",
        kanji: {
            character: "画",
            onYomi: ["ガ"],
            kunYomi: ["えがく"]
        }
    },
    
    // 海 (カイ/うみ) - sea
    {
        japanese: "海岸",
        reading: "かいがん",
        meaning: "coast/seashore",
        type: "noun",
        kanji: {
            character: "海",
            onYomi: ["カイ"],
            kunYomi: ["うみ"]
        }
    },
    
    // 売 (バイ/うる) - sell
    {
        japanese: "売店",
        reading: "ばいてん",
        meaning: "kiosk/shop",
        type: "noun",
        kanji: {
            character: "売",
            onYomi: ["バイ"],
            kunYomi: ["うる"]
        }
    },
    
    // 知 (チ/しる) - know
    {
        japanese: "知識",
        reading: "ちしき",
        meaning: "knowledge",
        type: "noun",
        kanji: {
            character: "知",
            onYomi: ["チ"],
            kunYomi: ["しる"]
        }
    },
    
    // 道 (ドウ/みち) - road/way
    {
        japanese: "道路",
        reading: "どうろ",
        meaning: "road",
        type: "noun",
        kanji: {
            character: "道",
            onYomi: ["ドウ"],
            kunYomi: ["みち"]
        }
    },
    
    // 集 (シュウ/あつまる) - gather
    {
        japanese: "集合",
        reading: "しゅうごう",
        meaning: "gathering/assembly",
        type: "noun",
        kanji: {
            character: "集",
            onYomi: ["シュウ"],
            kunYomi: ["あつまる"]
        }
    },
    
    // 別 (ベツ/わかれる) - separate
    {
        japanese: "別れる",
        reading: "わかれる",
        meaning: "to part/separate",
        type: "verb",
        kanji: {
            character: "別",
            onYomi: ["ベツ"],
            kunYomi: ["わかれる"]
        }
    },
    {
        japanese: "特別",
        reading: "とくべつ",
        meaning: "special",
        type: "na-adjective",
        kanji: {
            character: "別",
            onYomi: ["ベツ"],
            kunYomi: ["わかれる"]
        }
    },
    {
        japanese: "差別",
        reading: "さべつ",
        meaning: "discrimination",
        type: "noun",
        kanji: {
            character: "別",
            onYomi: ["ベツ"],
            kunYomi: ["わかれる"]
        }
    },
    
    // 物 (ブツ/もの) - thing
    {
        japanese: "動物",
        reading: "どうぶつ",
        meaning: "animal",
        type: "noun",
        kanji: {
            character: "物",
            onYomi: ["ブツ"],
            kunYomi: ["もの"]
        }
    },
    {
        japanese: "建物",
        reading: "たてもの",
        meaning: "building",
        type: "noun",
        kanji: {
            character: "物",
            onYomi: ["ブツ"],
            kunYomi: ["もの"]
        }
    },
    
    // 使 (シ/つかう) - use
    {
        japanese: "使用",
        reading: "しよう",
        meaning: "use",
        type: "noun",
        kanji: {
            character: "使",
            onYomi: ["シ"],
            kunYomi: ["つかう"]
        }
    },
    
    // 品 (ヒン/しな) - goods/article
    {
        japanese: "商品",
        reading: "しょうひん",
        meaning: "product/merchandise",
        type: "noun",
        kanji: {
            character: "品",
            onYomi: ["ヒン"],
            kunYomi: ["しな"]
        }
    },
    
    // 計 (ケイ/はかる) - measure/plan
    {
        japanese: "計画",
        reading: "けいかく",
        meaning: "plan",
        type: "noun",
        kanji: {
            character: "計",
            onYomi: ["ケイ"],
            kunYomi: ["はかる"]
        }
    },
    
    // 死 (シ/しぬ) - death
    {
        japanese: "死亡",
        reading: "しぼう",
        meaning: "death",
        type: "noun",
        kanji: {
            character: "死",
            onYomi: ["シ"],
            kunYomi: ["しぬ"]
        }
    },
    
    // 特 (トク/とく) - special
    {
        japanese: "特別",
        reading: "とくべつ",
        meaning: "special",
        type: "na-adjective",
        kanji: {
            character: "特",
            onYomi: ["トク"],
            kunYomi: ["とく"]
        }
    },
    
    // 私 (シ/わたくし) - private/I
    {
        japanese: "私立",
        reading: "しりつ",
        meaning: "private (institution)",
        type: "noun",
        kanji: {
            character: "私",
            onYomi: ["シ"],
            kunYomi: ["わたくし"]
        }
    },
    
    // 始 (シ/はじめる) - begin
    {
        japanese: "開始",
        reading: "かいし",
        meaning: "start/beginning",
        type: "noun",
        kanji: {
            character: "始",
            onYomi: ["シ"],
            kunYomi: ["はじめる"]
        }
    },
    
    // 朝 (チョウ/あさ) - morning
    {
        japanese: "朝食",
        reading: "ちょうしょく",
        meaning: "breakfast",
        type: "noun",
        kanji: {
            character: "朝",
            onYomi: ["チョウ"],
            kunYomi: ["あさ"]
        }
    },
    {
        japanese: "早朝",
        reading: "そうちょう",
        meaning: "early morning",
        type: "noun",
        kanji: {
            character: "朝",
            onYomi: ["チョウ"],
            kunYomi: ["あさ"]
        }
    },
    
    // 運 (ウン/はこぶ) - carry/luck
    {
        japanese: "運転",
        reading: "うんてん",
        meaning: "driving/operation",
        type: "noun",
        kanji: {
            character: "運",
            onYomi: ["ウン"],
            kunYomi: ["はこぶ"]
        }
    },
    
    // 終 (シュウ/おわる) - end
    {
        japanese: "終了",
        reading: "しゅうりょう",
        meaning: "end/finish",
        type: "noun",
        kanji: {
            character: "終",
            onYomi: ["シュウ"],
            kunYomi: ["おわる"]
        }
    },
    
    // 台 (ダイ/うてな) - stand/counter
    {
        japanese: "台所",
        reading: "だいどころ",
        meaning: "kitchen",
        type: "noun",
        kanji: {
            character: "台",
            onYomi: ["ダイ"],
            kunYomi: ["うてな"]
        }
    },
    {
        japanese: "台風",
        reading: "たいふう",
        meaning: "typhoon",
        type: "noun",
        kanji: {
            character: "台",
            onYomi: ["ダイ"],
            kunYomi: ["うてな"]
        }
    },
    
    // 広 (コウ/ひろい) - wide
    {
        japanese: "広場",
        reading: "ひろば",
        meaning: "plaza/square",
        type: "noun",
        kanji: {
            character: "広",
            onYomi: ["コウ"],
            kunYomi: ["ひろい"]
        }
    },
    
    // 住 (ジュウ/すむ) - dwell
    {
        japanese: "住所",
        reading: "じゅうしょ",
        meaning: "address",
        type: "noun",
        kanji: {
            character: "住",
            onYomi: ["ジュウ"],
            kunYomi: ["すむ"]
        }
    },
    
    // 無 (ム/ない) - nothing/without
    {
        japanese: "無料",
        reading: "むりょう",
        meaning: "free (of charge)",
        type: "noun",
        kanji: {
            character: "無",
            onYomi: ["ム"],
            kunYomi: ["ない"]
        }
    },
    
    // 真 (シン/まこと) - true
    {
        japanese: "真実",
        reading: "しんじつ",
        meaning: "truth",
        type: "noun",
        kanji: {
            character: "真",
            onYomi: ["シン"],
            kunYomi: ["まこと"]
        }
    },
    {
        japanese: "写真",
        reading: "しゃしん",
        meaning: "photograph",
        type: "noun",
        kanji: {
            character: "真",
            onYomi: ["シン"],
            kunYomi: ["まこと"]
        }
    },
    
    // 有 (ユウ/ある) - exist/have
    {
        japanese: "有名",
        reading: "ゆうめい",
        meaning: "famous",
        type: "na-adjective",
        kanji: {
            character: "有",
            onYomi: ["ユウ"],
            kunYomi: ["ある"]
        }
    },
    
    // 口 (コウ/くち) - mouth
    {
        japanese: "口座",
        reading: "こうざ",
        meaning: "bank account",
        type: "noun",
        kanji: {
            character: "口",
            onYomi: ["コウ"],
            kunYomi: ["くち"]
        }
    },
    
    // 少 (ショウ/すくない) - few
    {
        japanese: "少ない",
        reading: "すくない",
        meaning: "few/little",
        type: "i-adjective",
        kanji: {
            character: "少",
            onYomi: ["ショウ"],
            kunYomi: ["すくない"]
        }
    },
    
    // 町 (チョウ/まち) - town
    {
        japanese: "町中",
        reading: "まちなか",
        meaning: "downtown",
        type: "noun",
        kanji: {
            character: "町",
            onYomi: ["チョウ"],
            kunYomi: ["まち"]
        }
    },
    
    // 料 (リョウ/りょう) - fee/material
    {
        japanese: "料理",
        reading: "りょうり",
        meaning: "cooking/cuisine",
        type: "noun",
        kanji: {
            character: "料",
            onYomi: ["リョウ"],
            kunYomi: ["りょう"]
        }
    },
    {
        japanese: "無料",
        reading: "むりょう",
        meaning: "free (of charge)",
        type: "noun",
        kanji: {
            character: "料",
            onYomi: ["リョウ"],
            kunYomi: ["りょう"]
        }
    },
    
    // 工 (コウ/たくみ) - craft/construction
    {
        japanese: "工事",
        reading: "こうじ",
        meaning: "construction",
        type: "noun",
        kanji: {
            character: "工",
            onYomi: ["コウ"],
            kunYomi: ["たくみ"]
        }
    },
    
    // 建 (ケン/たてる) - build
    {
        japanese: "建物",
        reading: "たてもの",
        meaning: "building",
        type: "noun",
        kanji: {
            character: "建",
            onYomi: ["ケン"],
            kunYomi: ["たてる"]
        }
    },
    {
        japanese: "建設",
        reading: "けんせつ",
        meaning: "construction",
        type: "noun",
        kanji: {
            character: "建",
            onYomi: ["ケン"],
            kunYomi: ["たてる"]
        }
    },
    {
        japanese: "建築",
        reading: "けんちく",
        meaning: "architecture",
        type: "noun",
        kanji: {
            character: "建",
            onYomi: ["ケン"],
            kunYomi: ["たてる"]
        }
    },
    
    // 空 (クウ/そら) - sky/empty
    {
        japanese: "空港",
        reading: "くうこう",
        meaning: "airport",
        type: "noun",
        kanji: {
            character: "空",
            onYomi: ["クウ"],
            kunYomi: ["そら"]
        }
    },
    
    // 急 (キュウ/いそぐ) - hurry/urgent
    {
        japanese: "急行",
        reading: "きゅうこう",
        meaning: "express (train)",
        type: "noun",
        kanji: {
            character: "急",
            onYomi: ["キュウ"],
            kunYomi: ["いそぐ"]
        }
    },
    
    // 止 (シ/とまる) - stop
    {
        japanese: "停止",
        reading: "ていし",
        meaning: "stop/suspension",
        type: "noun",
        kanji: {
            character: "止",
            onYomi: ["シ"],
            kunYomi: ["とまる"]
        }
    },
    
    // 送 (ソウ/おくる) - send
    {
        japanese: "送信",
        reading: "そうしん",
        meaning: "transmission (sending)",
        type: "noun",
        kanji: {
            character: "送",
            onYomi: ["ソウ"],
            kunYomi: ["おくる"]
        }
    },
    
    // 切 (セツ/きる) - cut
    {
        japanese: "切符",
        reading: "きっぷ",
        meaning: "ticket",
        type: "noun",
        kanji: {
            character: "切",
            onYomi: ["セツ"],
            kunYomi: ["きる"]
        }
    },
    {
        japanese: "親切",
        reading: "しんせつ",
        meaning: "kind/kindness",
        type: "na-adjective",
        kanji: {
            character: "切",
            onYomi: ["セツ"],
            kunYomi: ["きる"]
        }
    },
    
    // 転 (テン/ころがる) - roll/turn
    {
        japanese: "運転",
        reading: "うんてん",
        meaning: "driving/operation",
        type: "noun",
        kanji: {
            character: "転",
            onYomi: ["テン"],
            kunYomi: ["ころがる"]
        }
    },
    {
        japanese: "自転車",
        reading: "じてんしゃ",
        meaning: "bicycle",
        type: "noun",
        kanji: {
            character: "転",
            onYomi: ["テン"],
            kunYomi: ["ころがる"]
        }
    },
    
    // 研 (ケン/とぐ) - polish/study
    {
        japanese: "研究",
        reading: "けんきゅう",
        meaning: "research",
        type: "noun",
        kanji: {
            character: "研",
            onYomi: ["ケン"],
            kunYomi: ["とぐ"]
        }
    },
    
    // 足 (ソク/たりる) - foot/leg/enough
    {
        japanese: "足りる",
        reading: "たりる",
        meaning: "to be enough",
        type: "verb",
        kanji: {
            character: "足",
            onYomi: ["ソク"],
            kunYomi: ["たりる"]
        }
    },
    
    // 究 (キュウ/きわめる) - research/investigate
    {
        japanese: "究明",
        reading: "きゅうめい",
        meaning: "investigation",
        type: "noun",
        kanji: {
            character: "究",
            onYomi: ["キュウ"],
            kunYomi: ["きわめる"]
        }
    },
    {
        japanese: "研究",
        reading: "けんきゅう",
        meaning: "research",
        type: "noun",
        kanji: {
            character: "究",
            onYomi: ["キュウ"],
            kunYomi: ["きわめる"]
        }
    },
    {
        japanese: "究極",
        reading: "きゅうきょく",
        meaning: "ultimate",
        type: "noun",
        kanji: {
            character: "究",
            onYomi: ["キュウ"],
            kunYomi: ["きわめる"]
        }
    },
    
    // 楽 (ガク・ラク/たのしい) - music/comfort
    {
        japanese: "楽しい",
        reading: "たのしい",
        meaning: "fun/enjoyable",
        type: "i-adjective",
        kanji: {
            character: "楽",
            onYomi: ["ガク", "ラク"],
            kunYomi: ["たのしい"]
        }
    },
    {
        japanese: "音楽",
        reading: "おんがく",
        meaning: "music",
        type: "noun",
        kanji: {
            character: "楽",
            onYomi: ["ガク", "ラク"],
            kunYomi: ["たのしい"]
        }
    },
    
    // 起 (キ/おきる) - wake up/occur
    {
        japanese: "起きる",
        reading: "おきる",
        meaning: "to wake up",
        type: "verb",
        kanji: {
            character: "起",
            onYomi: ["キ"],
            kunYomi: ["おきる"]
        }
    },
    
    // 着 (チャク/つく) - arrive/wear
    {
        japanese: "到着",
        reading: "とうちゃく",
        meaning: "arrival",
        type: "noun",
        kanji: {
            character: "着",
            onYomi: ["チャク"],
            kunYomi: ["つく"]
        }
    },
    
    // 店 (テン/みせ) - shop
    {
        japanese: "店員",
        reading: "てんいん",
        meaning: "clerk/shop assistant",
        type: "noun",
        kanji: {
            character: "店",
            onYomi: ["テン"],
            kunYomi: ["みせ"]
        }
    },
    {
        japanese: "売店",
        reading: "ばいてん",
        meaning: "kiosk/shop",
        type: "noun",
        kanji: {
            character: "店",
            onYomi: ["テン"],
            kunYomi: ["みせ"]
        }
    },
    
    // 病 (ビョウ/やまい) - illness
    {
        japanese: "病気",
        reading: "びょうき",
        meaning: "illness/disease",
        type: "noun",
        kanji: {
            character: "病",
            onYomi: ["ビョウ"],
            kunYomi: ["やまい"]
        }
    },
    {
        japanese: "病院",
        reading: "びょういん",
        meaning: "hospital",
        type: "noun",
        kanji: {
            character: "病",
            onYomi: ["ビョウ"],
            kunYomi: ["やまい"]
        }
    },
    
    // 質 (シツ/しつ) - quality/nature
    {
        japanese: "質問",
        reading: "しつもん",
        meaning: "question",
        type: "noun",
        kanji: {
            character: "質",
            onYomi: ["シツ"],
            kunYomi: ["しつ"]
        }
    },
    
    // 待 (タイ/まつ) - wait
    {
        japanese: "待機",
        reading: "たいき",
        meaning: "standby",
        type: "noun",
        kanji: {
            character: "待",
            onYomi: ["タイ"],
            kunYomi: ["まつ"]
        }
    },
    
    // 試 (シ/こころみる) - test/try
    {
        japanese: "試験",
        reading: "しけん",
        meaning: "exam/test",
        type: "noun",
        kanji: {
            character: "試",
            onYomi: ["シ"],
            kunYomi: ["こころみる"]
        }
    },
    {
        japanese: "試合",
        reading: "しあい",
        meaning: "match/game",
        type: "noun",
        kanji: {
            character: "試",
            onYomi: ["シ"],
            kunYomi: ["こころみる"]
        }
    },
    
    // 族 (ゾク/やから) - tribe/family
    {
        japanese: "家族",
        reading: "かぞく",
        meaning: "family",
        type: "noun",
        kanji: {
            character: "族",
            onYomi: ["ゾク"],
            kunYomi: ["やから"]
        }
    },
    
    // 銀 (ギン/しろがね) - silver
    {
        japanese: "銀行",
        reading: "ぎんこう",
        meaning: "bank",
        type: "noun",
        kanji: {
            character: "銀",
            onYomi: ["ギン"],
            kunYomi: ["しろがね"]
        }
    },
    
    // 早 (ソウ/はやい) - early
    {
        japanese: "早朝",
        reading: "そうちょう",
        meaning: "early morning",
        type: "noun",
        kanji: {
            character: "早",
            onYomi: ["ソウ"],
            kunYomi: ["はやい"]
        }
    },
    
    // 映 (エイ/うつす) - reflect/project
    {
        japanese: "映画",
        reading: "えいが",
        meaning: "movie",
        type: "noun",
        kanji: {
            character: "映",
            onYomi: ["エイ"],
            kunYomi: ["うつす"]
        }
    },
    
    // 親 (シン/したしい) - parent/intimate
    {
        japanese: "親切",
        reading: "しんせつ",
        meaning: "kind/kindness",
        type: "na-adjective",
        kanji: {
            character: "親",
            onYomi: ["シン"],
            kunYomi: ["したしい"]
        }
    },
    
    // 験 (ケン/ためす) - test/effect
    {
        japanese: "受験",
        reading: "じゅけん",
        meaning: "taking an exam",
        type: "noun",
        kanji: {
            character: "験",
            onYomi: ["ケン"],
            kunYomi: ["ためす"]
        }
    },
    {
        japanese: "試験",
        reading: "しけん",
        meaning: "exam/test",
        type: "noun",
        kanji: {
            character: "験",
            onYomi: ["ケン"],
            kunYomi: ["ためす"]
        }
    },
    
    // 英 (エイ/はなぶさ) - England/excellent
    {
        japanese: "英語",
        reading: "えいご",
        meaning: "English language",
        type: "noun",
        kanji: {
            character: "英",
            onYomi: ["エイ"],
            kunYomi: ["はなぶさ"]
        }
    },
    
    // 医 (イ/い) - medicine/doctor
    {
        japanese: "医院",
        reading: "いいん",
        meaning: "clinic",
        type: "noun",
        kanji: {
            character: "医",
            onYomi: ["イ"],
            kunYomi: ["い"]
        }
    },
    {
        japanese: "医者",
        reading: "いしゃ",
        meaning: "doctor",
        type: "noun",
        kanji: {
            character: "医",
            onYomi: ["イ"],
            kunYomi: ["い"]
        }
    },
    
    // 去 (キョ/さる) - leave/past
    {
        japanese: "去年",
        reading: "きょねん",
        meaning: "last year",
        type: "noun",
        kanji: {
            character: "去",
            onYomi: ["キョ"],
            kunYomi: ["さる"]
        }
    },
    
    // 味 (ミ/あじ) - taste/flavor
    {
        japanese: "味噌",
        reading: "みそ",
        meaning: "miso",
        type: "noun",
        kanji: {
            character: "味",
            onYomi: ["ミ"],
            kunYomi: ["あじ"]
        }
    },
    {
        japanese: "意味",
        reading: "いみ",
        meaning: "meaning",
        type: "noun",
        kanji: {
            character: "味",
            onYomi: ["ミ"],
            kunYomi: ["あじ"]
        }
    },
    
    // 写 (シャ/うつす) - copy/photograph
    {
        japanese: "写真",
        reading: "しゃしん",
        meaning: "photograph",
        type: "noun",
        kanji: {
            character: "写",
            onYomi: ["シャ"],
            kunYomi: ["うつす"]
        }
    },
    
    // 注 (チュウ/そそぐ) - pour/note
    {
        japanese: "注意",
        reading: "ちゅうい",
        meaning: "caution/attention",
        type: "noun",
        kanji: {
            character: "注",
            onYomi: ["チュウ"],
            kunYomi: ["そそぐ"]
        }
    },
    {
        japanese: "注目",
        reading: "ちゅうもく",
        meaning: "attention/notice",
        type: "noun",
        kanji: {
            character: "注",
            onYomi: ["チュウ"],
            kunYomi: ["そそぐ"]
        }
    },
    
    // 乗 (ジョウ/のる) - ride/board
    {
        japanese: "乗車",
        reading: "じょうしゃ",
        meaning: "boarding (vehicle)",
        type: "noun",
        kanji: {
            character: "乗",
            onYomi: ["ジョウ"],
            kunYomi: ["のる"]
        }
    },
    
    // 答 (トウ/こたえる) - answer
    {
        japanese: "回答",
        reading: "かいとう",
        meaning: "reply/answer",
        type: "noun",
        kanji: {
            character: "答",
            onYomi: ["トウ"],
            kunYomi: ["こたえる"]
        }
    },
    
    // 音 (オン/おと) - sound
    {
        japanese: "音楽",
        reading: "おんがく",
        meaning: "music",
        type: "noun",
        kanji: {
            character: "音",
            onYomi: ["オン"],
            kunYomi: ["おと"]
        }
    },
    
    // 帰 (キ/かえる) - return home
    {
        japanese: "帰宅",
        reading: "きたく",
        meaning: "returning home",
        type: "noun",
        kanji: {
            character: "帰",
            onYomi: ["キ"],
            kunYomi: ["かえる"]
        }
    },
    
    // 受 (ジュ/うける) - receive
    {
        japanese: "受ける",
        reading: "うける",
        meaning: "to receive/take",
        type: "verb",
        kanji: {
            character: "受",
            onYomi: ["ジュ"],
            kunYomi: ["うける"]
        }
    },
    {
        japanese: "受験",
        reading: "じゅけん",
        meaning: "taking an exam",
        type: "noun",
        kanji: {
            character: "受",
            onYomi: ["ジュ"],
            kunYomi: ["うける"]
        }
    },
    
    // 服 (フク/きる) - clothing
    {
        japanese: "洋服",
        reading: "ようふく",
        meaning: "Western clothes",
        type: "noun",
        kanji: {
            character: "服",
            onYomi: ["フク"],
            kunYomi: ["きる"]
        }
    },
    {
        japanese: "服装",
        reading: "ふくそう",
        meaning: "clothing/dress",
        type: "noun",
        kanji: {
            character: "服",
            onYomi: ["フク"],
            kunYomi: ["きる"]
        }
    },
    
    // 紙 (シ/かみ) - paper
    {
        japanese: "手紙",
        reading: "てがみ",
        meaning: "letter",
        type: "noun",
        kanji: {
            character: "紙",
            onYomi: ["シ"],
            kunYomi: ["かみ"]
        }
    },
    
    // 漢 (カン/あや) - China/Han
    {
        japanese: "漢字",
        reading: "かんじ",
        meaning: "kanji (Chinese characters)",
        type: "noun",
        kanji: {
            character: "漢",
            onYomi: ["カン"],
            kunYomi: ["あや"]
        }
    },
    
    // 風 (フウ/かぜ) - wind
    {
        japanese: "台風",
        reading: "たいふう",
        meaning: "typhoon",
        type: "noun",
        kanji: {
            character: "風",
            onYomi: ["フウ"],
            kunYomi: ["かぜ"]
        }
    },
    {
        japanese: "暖房",
        reading: "だんぼう",
        meaning: "heating/heater",
        type: "noun",
        kanji: {
            character: "風",
            onYomi: ["フウ"],
            kunYomi: ["かぜ"]
        }
    },
    
    // 夜 (ヤ/よる) - night
    {
        japanese: "夜景",
        reading: "やけい",
        meaning: "night view",
        type: "noun",
        kanji: {
            character: "夜",
            onYomi: ["ヤ"],
            kunYomi: ["よる"]
        }
    },
    
    // 魚 (ギョ/うお) - fish
    {
        japanese: "魚屋",
        reading: "さかなや",
        meaning: "fish shop",
        type: "noun",
        kanji: {
            character: "魚",
            onYomi: ["ギョ"],
            kunYomi: ["うお"]
        }
    },
    
    // 仕 (シ/つかえる) - serve/work
    {
        japanese: "仕事",
        reading: "しごと",
        meaning: "work/job",
        type: "noun",
        kanji: {
            character: "仕",
            onYomi: ["シ"],
            kunYomi: ["つかえる"]
        }
    },
    
    // 予 (ヨ/あらかじめ) - beforehand
    {
        japanese: "予習",
        reading: "よしゅう",
        meaning: "preparation (study)",
        type: "noun",
        kanji: {
            character: "予",
            onYomi: ["ヨ"],
            kunYomi: ["あらかじめ"]
        }
    },
    
    // 石 (セキ/いし) - stone
    {
        japanese: "石鹸",
        reading: "せっけん",
        meaning: "soap",
        type: "noun",
        kanji: {
            character: "石",
            onYomi: ["セキ"],
            kunYomi: ["いし"]
        }
    },
    
    // 様 (ヨウ/さま) - manner/appearance
    {
        japanese: "様子",
        reading: "ようす",
        meaning: "appearance/state",
        type: "noun",
        kanji: {
            character: "様",
            onYomi: ["ヨウ"],
            kunYomi: ["さま"]
        }
    },
    
    // 旅 (リョ/たび) - travel
    {
        japanese: "旅行",
        reading: "りょこう",
        meaning: "travel/trip",
        type: "noun",
        kanji: {
            character: "旅",
            onYomi: ["リョ"],
            kunYomi: ["たび"]
        }
    },
    {
        japanese: "旅館",
        reading: "りょかん",
        meaning: "Japanese inn",
        type: "noun",
        kanji: {
            character: "旅",
            onYomi: ["リョ"],
            kunYomi: ["たび"]
        }
    },
    
    // 洋 (ヨウ/ひろい) - ocean/Western
    {
        japanese: "洋服",
        reading: "ようふく",
        meaning: "Western clothes",
        type: "noun",
        kanji: {
            character: "洋",
            onYomi: ["ヨウ"],
            kunYomi: ["ひろい"]
        }
    },
    
    // 堂 (ドウ/どう) - hall
    {
        japanese: "食堂",
        reading: "しょくどう",
        meaning: "cafeteria/dining hall",
        type: "noun",
        kanji: {
            character: "堂",
            onYomi: ["ドウ"],
            kunYomi: ["どう"]
        }
    },
    
    // 探 (タン/さがす) - search
    {
        japanese: "探検",
        reading: "たんけん",
        meaning: "exploration",
        type: "noun",
        kanji: {
            character: "探",
            onYomi: ["タン"],
            kunYomi: ["さがす"]
        }
    },
    
    // 失 (シツ/うしなう) - lose
    {
        japanese: "失敗",
        reading: "しっぱい",
        meaning: "failure",
        type: "noun",
        kanji: {
            character: "失",
            onYomi: ["シツ"],
            kunYomi: ["うしなう"]
        }
    },
    
    // 鉄 (テツ/くろがね) - iron
    {
        japanese: "地下鉄",
        reading: "ちかてつ",
        meaning: "subway",
        type: "noun",
        kanji: {
            character: "鉄",
            onYomi: ["テツ"],
            kunYomi: ["くろがね"]
        }
    },
    
    // 借 (シャク/かりる) - borrow
    {
        japanese: "借金",
        reading: "しゃっきん",
        meaning: "debt",
        type: "noun",
        kanji: {
            character: "借",
            onYomi: ["シャク"],
            kunYomi: ["かりる"]
        }
    },
    
    // 返 (ヘン/かえす) - return/reply
    {
        japanese: "返事",
        reading: "へんじ",
        meaning: "reply/answer",
        type: "noun",
        kanji: {
            character: "返",
            onYomi: ["ヘン"],
            kunYomi: ["かえす"]
        }
    },
    
    // 息 (ソク/いき) - breath
    {
        japanese: "休息",
        reading: "きゅうそく",
        meaning: "rest",
        type: "noun",
        kanji: {
            character: "息",
            onYomi: ["ソク"],
            kunYomi: ["いき"]
        }
    },
    
    // 暑 (ショ/あつい) - hot
    {
        japanese: "暑い",
        reading: "あつい",
        meaning: "hot (weather)",
        type: "i-adjective",
        kanji: {
            character: "暑",
            onYomi: ["ショ"],
            kunYomi: ["あつい"]
        }
    },
    
    // 寒 (カン/さむい) - cold
    {
        japanese: "寒い",
        reading: "さむい",
        meaning: "cold (weather)",
        type: "i-adjective",
        kanji: {
            character: "寒",
            onYomi: ["カン"],
            kunYomi: ["さむい"]
        }
    },
    
    // 暖 (ダン/あたたかい) - warm
    {
        japanese: "暖房",
        reading: "だんぼう",
        meaning: "heating/heater",
        type: "noun",
        kanji: {
            character: "暖",
            onYomi: ["ダン"],
            kunYomi: ["あたたかい"]
        }
    },
    
    // 冷 (レイ/つめたい) - cold
    {
        japanese: "冷蔵庫",
        reading: "れいぞうこ",
        meaning: "refrigerator",
        type: "noun",
        kanji: {
            character: "冷",
            onYomi: ["レイ"],
            kunYomi: ["つめたい"]
        }
    },
    
    // 忙 (ボウ/いそがしい) - busy
    {
        japanese: "忙しい",
        reading: "いそがしい",
        meaning: "busy",
        type: "i-adjective",
        kanji: {
            character: "忙",
            onYomi: ["ボウ"],
            kunYomi: ["いそがしい"]
        }
    },
    
    // 悪 (アク/わるい) - bad
    {
        japanese: "悪化",
        reading: "あっか",
        meaning: "deterioration/worsening",
        type: "noun",
        kanji: {
            character: "悪",
            onYomi: ["アク"],
            kunYomi: ["わるい"]
        }
    },
    
    // 的 (テキ/まと) - target/suffix
    {
        japanese: "目的",
        reading: "もくてき",
        meaning: "purpose/objective",
        type: "noun",
        kanji: {
            character: "的",
            onYomi: ["テキ"],
            kunYomi: ["まと"]
        }
    },
    
    // 拾 (シュウ/ひろう) - pick up
    {
        japanese: "拾う",
        reading: "ひろう",
        meaning: "to pick up",
        type: "verb",
        kanji: {
            character: "拾",
            onYomi: ["シュウ"],
            kunYomi: ["ひろう"]
        }
    },
    
    // 捨 (シャ/すてる) - throw away
    {
        japanese: "捨てる",
        reading: "すてる",
        meaning: "to throw away",
        type: "verb",
        kanji: {
            character: "捨",
            onYomi: ["シャ"],
            kunYomi: ["すてる"]
        }
    },
    
    // 案 (アン/あん) - plan/idea
    {
        japanese: "案内",
        reading: "あんない",
        meaning: "guide/information",
        type: "noun",
        kanji: {
            character: "案",
            onYomi: ["アン"],
            kunYomi: ["あん"]
        }
    },
    
    // 活 (カツ/いきる) - life/activity
    {
        japanese: "生活",
        reading: "せいかつ",
        meaning: "life/living",
        type: "noun",
        kanji: {
            character: "活",
            onYomi: ["カツ"],
            kunYomi: ["いきる"]
        }
    },
    
    // 決 (ケツ/きめる) - decide
    {
        japanese: "決定",
        reading: "けってい",
        meaning: "decision",
        type: "noun",
        kanji: {
            character: "決",
            onYomi: ["ケツ"],
            kunYomi: ["きめる"]
        }
    },
    {
        japanese: "決意",
        reading: "けつい",
        meaning: "determination",
        type: "noun",
        kanji: {
            character: "決",
            onYomi: ["ケツ"],
            kunYomi: ["きめる"]
        }
    },
    
    // 卒 (ソツ/そつ) - graduate
    {
        japanese: "卒業",
        reading: "そつぎょう",
        meaning: "graduation",
        type: "noun",
        kanji: {
            character: "卒",
            onYomi: ["ソツ"],
            kunYomi: ["そつ"]
        }
    },
    
    // 治 (チ/なおす) - heal/govern
    {
        japanese: "治療",
        reading: "ちりょう",
        meaning: "medical treatment",
        type: "noun",
        kanji: {
            character: "治",
            onYomi: ["チ"],
            kunYomi: ["なおす"]
        }
    },
    
    // 流 (リュウ/ながれる) - flow
    {
        japanese: "流行",
        reading: "りゅうこう",
        meaning: "trend/fashion",
        type: "noun",
        kanji: {
            character: "流",
            onYomi: ["リュウ"],
            kunYomi: ["ながれる"]
        }
    },
    
    // 消 (ショウ/けす) - extinguish
    {
        japanese: "消火",
        reading: "しょうか",
        meaning: "fire extinguishing",
        type: "noun",
        kanji: {
            character: "消",
            onYomi: ["ショウ"],
            kunYomi: ["けす"]
        }
    },
    
    // 接 (セツ/つぐ) - connect
    {
        japanese: "接続",
        reading: "せつぞく",
        meaning: "connection",
        type: "noun",
        kanji: {
            character: "接",
            onYomi: ["セツ"],
            kunYomi: ["つぐ"]
        }
    },
    
    // 説 (セツ/とく) - explain
    {
        japanese: "説明",
        reading: "せつめい",
        meaning: "explanation",
        type: "noun",
        kanji: {
            character: "説",
            onYomi: ["セツ"],
            kunYomi: ["とく"]
        }
    },
    
    // 愛 (アイ/あい) - love
    {
        japanese: "愛情",
        reading: "あいじょう",
        meaning: "affection/love",
        type: "noun",
        kanji: {
            character: "愛",
            onYomi: ["アイ"],
            kunYomi: ["あい"]
        }
    },
    
    // 伝 (デン/つたえる) - transmit
    {
        japanese: "伝言",
        reading: "でんごん",
        meaning: "message",
        type: "noun",
        kanji: {
            character: "伝",
            onYomi: ["デン"],
            kunYomi: ["つたえる"]
        }
    },
    
    // 働 (ドウ/はたらく) - work
    {
        japanese: "労働",
        reading: "ろうどう",
        meaning: "labor/work",
        type: "noun",
        kanji: {
            character: "働",
            onYomi: ["ドウ"],
            kunYomi: ["はたらく"]
        }
    },
    
    // 差 (サ/さす) - difference
    {
        japanese: "差別",
        reading: "さべつ",
        meaning: "discrimination",
        type: "noun",
        kanji: {
            character: "差",
            onYomi: ["サ"],
            kunYomi: ["さす"]
        }
    },
    
    // 橋 (キョウ/はし) - bridge
    {
        japanese: "橋本",
        reading: "はしもと",
        meaning: "Hashimoto (surname)",
        type: "noun",
        kanji: {
            character: "橋",
            onYomi: ["キョウ"],
            kunYomi: ["はし"]
        }
    },
    
    // 式 (シキ/かた) - style/ceremony
    {
        japanese: "形式",
        reading: "けいしき",
        meaning: "form/style",
        type: "noun",
        kanji: {
            character: "式",
            onYomi: ["シキ"],
            kunYomi: ["かた"]
        }
    }
];

// Export statistics
export const N4_KANJI_STATS = {
    totalWords: N4_KANJI_VOCABULARY.length,
    totalKanji: [...new Set(N4_KANJI_VOCABULARY.map(word => word.kanji.character))].length,
    wordsByType: {
        noun: N4_KANJI_VOCABULARY.filter(w => w.type === 'noun').length,
        verb: N4_KANJI_VOCABULARY.filter(w => w.type === 'verb').length,
        'i-adjective': N4_KANJI_VOCABULARY.filter(w => w.type === 'i-adjective').length,
        'na-adjective': N4_KANJI_VOCABULARY.filter(w => w.type === 'na-adjective').length
    }
};

console.log('📚 N4 Kanji Vocabulary loaded:', N4_KANJI_STATS);