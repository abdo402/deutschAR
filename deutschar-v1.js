/* ============================================================
   DeutschAR.EDU v1.0 — JavaScript
   Author: AR
============================================================ */

// ═══════════════════════════════════════
// WORD BANK DATA
// ═══════════════════════════════════════

const wordBank = {

  nouns: [
    // Level 1 — Most common
    { article: "der", german: "Mann",      plural: "Männer",       english: "man",          opposite: "Frau",      level: 1 },
    { article: "die", german: "Frau",      plural: "Frauen",       english: "woman",        opposite: "Mann",      level: 1 },
    { article: "das", german: "Kind",      plural: "Kinder",       english: "child",        opposite: "",          level: 1 },
    { article: "der", german: "Tag",       plural: "Tage",         english: "day",          opposite: "Nacht",     level: 1 },
    { article: "die", german: "Nacht",     plural: "Nächte",       english: "night",        opposite: "Tag",       level: 1 },
    { article: "die", german: "Zeit",      plural: "Zeiten",       english: "time",         opposite: "",          level: 1 },
    { article: "das", german: "Jahr",      plural: "Jahre",        english: "year",         opposite: "",          level: 1 },
    { article: "der", german: "Mensch",    plural: "Menschen",     english: "person/human", opposite: "",          level: 1 },
    { article: "die", german: "Arbeit",    plural: "Arbeiten",     english: "work/job",     opposite: "",          level: 1 },
    { article: "das", german: "Wasser",    plural: "—",            english: "water",        opposite: "Feuer",     level: 1 },
    { article: "das", german: "Feuer",     plural: "—",            english: "fire",         opposite: "Wasser",    level: 1 },
    { article: "der", german: "Weg",       plural: "Wege",         english: "way/path",     opposite: "",          level: 1 },
    { article: "das", german: "Haus",      plural: "Häuser",       english: "house",        opposite: "",          level: 1 },
    { article: "die", german: "Hand",      plural: "Hände",        english: "hand",         opposite: "Fuß",       level: 1 },
    { article: "der", german: "Fuß",       plural: "Füße",         english: "foot",         opposite: "Hand",      level: 1 },
    { article: "der", german: "Anfang",    plural: "Anfänge",      english: "beginning",    opposite: "Ende",      level: 1 },
    { article: "das", german: "Ende",      plural: "Enden",        english: "end",          opposite: "Anfang",    level: 1 },
    { article: "die", german: "Frage",     plural: "Fragen",       english: "question",     opposite: "Antwort",   level: 1 },
    { article: "die", german: "Antwort",   plural: "Antworten",    english: "answer",       opposite: "Frage",     level: 1 },
    // Level 2 — Common
    { article: "der", german: "Junge",     plural: "Jungen",       english: "boy",          opposite: "Mädchen",   level: 2 },
    { article: "das", german: "Mädchen",   plural: "Mädchen",      english: "girl",         opposite: "Junge",     level: 2 },
    { article: "der", german: "Sohn",      plural: "Söhne",        english: "son",          opposite: "Tochter",   level: 2 },
    { article: "die", german: "Tochter",   plural: "Töchter",      english: "daughter",     opposite: "Sohn",      level: 2 },
    { article: "der", german: "Vater",     plural: "Väter",        english: "father",       opposite: "Mutter",    level: 2 },
    { article: "die", german: "Mutter",    plural: "Mütter",       english: "mother",       opposite: "Vater",     level: 2 },
    { article: "der", german: "Bruder",    plural: "Brüder",       english: "brother",      opposite: "Schwester", level: 2 },
    { article: "die", german: "Schwester", plural: "Schwestern",   english: "sister",       opposite: "Bruder",    level: 2 },
    { article: "der", german: "Freund",    plural: "Freunde",      english: "friend/boyfriend", opposite: "Feind", level: 2 },
    { article: "die", german: "Freundin",  plural: "Freundinnen",  english: "friend/girlfriend", opposite: "",     level: 2 },
    { article: "der", german: "Feind",     plural: "Feinde",       english: "enemy",        opposite: "Freund",    level: 2 },
    { article: "der", german: "Hund",      plural: "Hunde",        english: "dog",          opposite: "Katze",     level: 2 },
    { article: "die", german: "Katze",     plural: "Katzen",       english: "cat",          opposite: "Hund",      level: 2 },
    { article: "das", german: "Auto",      plural: "Autos",        english: "car",          opposite: "",          level: 2 },
    { article: "das", german: "Buch",      plural: "Bücher",       english: "book",         opposite: "",          level: 2 },
    { article: "die", german: "Schule",    plural: "Schulen",      english: "school",       opposite: "",          level: 2 },
    { article: "der", german: "Tisch",     plural: "Tische",       english: "table",        opposite: "Stuhl",     level: 2 },
    { article: "der", german: "Stuhl",     plural: "Stühle",       english: "chair",        opposite: "Tisch",     level: 2 },
    { article: "die", german: "Stadt",     plural: "Städte",       english: "city",         opposite: "Dorf",      level: 2 },
    { article: "das", german: "Dorf",      plural: "Dörfer",       english: "village",      opposite: "Stadt",     level: 2 },
    { article: "das", german: "Geld",      plural: "—",            english: "money",        opposite: "",          level: 2 },
    { article: "die", german: "Sonne",     plural: "—",            english: "sun",          opposite: "Mond",      level: 2 },
    { article: "der", german: "Mond",      plural: "Monde",        english: "moon",         opposite: "Sonne",     level: 2 },
    { article: "die", german: "Liebe",     plural: "—",            english: "love",         opposite: "Hass",      level: 2 },
    { article: "der", german: "Hass",      plural: "—",            english: "hate",         opposite: "Liebe",     level: 2 },
    { article: "das", german: "Brot",      plural: "Brote",        english: "bread",        opposite: "",          level: 2 },
    { article: "das", german: "Essen",     plural: "—",            english: "food/meal",    opposite: "",          level: 2 },
    { article: "das", german: "Wetter",    plural: "—",            english: "weather",      opposite: "",          level: 2 },
    { article: "die", german: "Musik",     plural: "—",            english: "music",        opposite: "Stille",    level: 2 },
    { article: "die", german: "Stille",    plural: "—",            english: "silence",      opposite: "Musik",     level: 2 },
    { article: "der", german: "Morgen",    plural: "Morgen",       english: "morning",      opposite: "Abend",     level: 2 },
    { article: "der", german: "Abend",     plural: "Abende",       english: "evening",      opposite: "Morgen",    level: 2 },
    // Level 3 — Less common
    { article: "die", german: "Straße",    plural: "Straßen",      english: "street",       opposite: "",          level: 3 },
    { article: "der", german: "Zug",       plural: "Züge",         english: "train",        opposite: "",          level: 3 },
    { article: "das", german: "Fenster",   plural: "Fenster",      english: "window",       opposite: "Tür",       level: 3 },
    { article: "die", german: "Tür",       plural: "Türen",        english: "door",         opposite: "Fenster",   level: 3 },
    { article: "die", german: "Küche",     plural: "Küchen",       english: "kitchen",      opposite: "",          level: 3 },
    { article: "der", german: "Schlüssel", plural: "Schlüssel",    english: "key",          opposite: "Schloss",   level: 3 },
    { article: "das", german: "Schloss",   plural: "Schlösser",    english: "lock/castle",  opposite: "Schlüssel", level: 3 },
    { article: "das", german: "Krankenhaus", plural: "Krankenhäuser", english: "hospital",  opposite: "",          level: 3 },
    { article: "der", german: "Bahnhof",   plural: "Bahnhöfe",     english: "train station",opposite: "",          level: 3 },
    { article: "der", german: "Supermarkt",plural: "Supermärkte",  english: "supermarket",  opposite: "",          level: 3 },
    { article: "der", german: "Brief",     plural: "Briefe",       english: "letter",       opposite: "",          level: 3 },
    { article: "die", german: "Zeitung",   plural: "Zeitungen",    english: "newspaper",    opposite: "",          level: 3 },
    { article: "der", german: "Baum",      plural: "Bäume",        english: "tree",         opposite: "Blume",     level: 3 },
    { article: "die", german: "Blume",     plural: "Blumen",       english: "flower",       opposite: "Baum",      level: 3 },
    { article: "der", german: "Wald",      plural: "Wälder",       english: "forest",       opposite: "",          level: 3 },
    { article: "das", german: "Licht",     plural: "Lichter",      english: "light",        opposite: "Dunkelheit",level: 3 },
    { article: "die", german: "Dunkelheit",plural: "—",            english: "darkness",     opposite: "Licht",     level: 3 },
    // Fruits — Früchte
    { article: "der", german: "Apfel",     plural: "Äpfel",        english: "apple",        opposite: "",          level: 3, category: "fruit" },
    { article: "die", german: "Banane",    plural: "Bananen",      english: "banana",       opposite: "",          level: 3, category: "fruit" },
    { article: "die", german: "Orange",    plural: "Orangen",      english: "orange",       opposite: "",          level: 3, category: "fruit" },
    { article: "die", german: "Erdbeere",  plural: "Erdbeeren",    english: "strawberry",   opposite: "",          level: 3, category: "fruit" },
    { article: "die", german: "Kirsche",   plural: "Kirschen",     english: "cherry",       opposite: "",          level: 3, category: "fruit" },
    { article: "die", german: "Zitrone",   plural: "Zitronen",     english: "lemon",        opposite: "",          level: 3, category: "fruit" },
    { article: "die", german: "Birne",     plural: "Birnen",       english: "pear",         opposite: "",          level: 3, category: "fruit" },
    { article: "die", german: "Weintraube",plural: "Weintrauben",  english: "grape",        opposite: "",          level: 3, category: "fruit" },
    { article: "die", german: "Melone",    plural: "Melonen",      english: "melon",        opposite: "",          level: 3, category: "fruit" },
    { article: "die", german: "Ananas",    plural: "Ananas",       english: "pineapple",    opposite: "",          level: 3, category: "fruit" },
    { article: "die", german: "Pflaume",   plural: "Pflaumen",     english: "plum",         opposite: "",          level: 3, category: "fruit" },
    { article: "die", german: "Himbeere",  plural: "Himbeeren",    english: "raspberry",    opposite: "",          level: 3, category: "fruit" },
    { article: "der", german: "Pfirsich",  plural: "Pfirsiche",    english: "peach",        opposite: "",          level: 3, category: "fruit" },
    { article: "die", german: "Kiwi",      plural: "Kiwis",        english: "kiwi",         opposite: "",          level: 3, category: "fruit" },
  ],

  verbs: [
    // Level 1 — Most essential
    {
      infinitive: "sein", english: "to be", type: "irregular", level: 1,
      conjugations: { "ich": "bin", "du": "bist", "er/sie/es": "ist", "wir": "sind", "ihr": "seid", "sie/Sie": "sind" },
      praeteritum:  { "ich": "war", "du": "warst", "er/sie/es": "war", "wir": "waren", "ihr": "wart", "sie/Sie": "waren" }
    },
    {
      infinitive: "haben", english: "to have", type: "irregular", level: 1,
      conjugations: { "ich": "habe", "du": "hast", "er/sie/es": "hat", "wir": "haben", "ihr": "habt", "sie/Sie": "haben" },
      praeteritum:  { "ich": "hatte", "du": "hattest", "er/sie/es": "hatte", "wir": "hatten", "ihr": "hattet", "sie/Sie": "hatten" }
    },
    {
      infinitive: "werden", english: "to become / will", type: "irregular", level: 1,
      conjugations: { "ich": "werde", "du": "wirst", "er/sie/es": "wird", "wir": "werden", "ihr": "werdet", "sie/Sie": "werden" },
      praeteritum:  { "ich": "wurde", "du": "wurdest", "er/sie/es": "wurde", "wir": "wurden", "ihr": "wurdet", "sie/Sie": "wurden" }
    },
    {
      infinitive: "können", english: "can / to be able to", type: "irregular", level: 1,
      conjugations: { "ich": "kann", "du": "kannst", "er/sie/es": "kann", "wir": "können", "ihr": "könnt", "sie/Sie": "können" },
      praeteritum:  { "ich": "konnte", "du": "konntest", "er/sie/es": "konnte", "wir": "konnten", "ihr": "konntet", "sie/Sie": "konnten" }
    },
    {
      infinitive: "machen", english: "to make / to do", type: "regular", level: 1,
      conjugations: { "ich": "mache", "du": "machst", "er/sie/es": "macht", "wir": "machen", "ihr": "macht", "sie/Sie": "machen" },
      praeteritum:  { "ich": "machte", "du": "machtest", "er/sie/es": "machte", "wir": "machten", "ihr": "machtet", "sie/Sie": "machten" }
    },
    {
      infinitive: "gehen", english: "to go", type: "irregular", level: 1,
      conjugations: { "ich": "gehe", "du": "gehst", "er/sie/es": "geht", "wir": "gehen", "ihr": "geht", "sie/Sie": "gehen" },
      praeteritum:  { "ich": "ging", "du": "gingst", "er/sie/es": "ging", "wir": "gingen", "ihr": "gingt", "sie/Sie": "gingen" }
    },
    // Level 2 — Common
    {
      infinitive: "kommen", english: "to come", type: "irregular", level: 2,
      conjugations: { "ich": "komme", "du": "kommst", "er/sie/es": "kommt", "wir": "kommen", "ihr": "kommt", "sie/Sie": "kommen" },
      praeteritum:  { "ich": "kam", "du": "kamst", "er/sie/es": "kam", "wir": "kamen", "ihr": "kamt", "sie/Sie": "kamen" }
    },
    {
      infinitive: "sagen", english: "to say", type: "regular", level: 2,
      conjugations: { "ich": "sage", "du": "sagst", "er/sie/es": "sagt", "wir": "sagen", "ihr": "sagt", "sie/Sie": "sagen" },
      praeteritum:  { "ich": "sagte", "du": "sagtest", "er/sie/es": "sagte", "wir": "sagten", "ihr": "sagtet", "sie/Sie": "sagten" }
    },
    {
      infinitive: "wissen", english: "to know (fact)", type: "irregular", level: 2,
      conjugations: { "ich": "weiß", "du": "weißt", "er/sie/es": "weiß", "wir": "wissen", "ihr": "wisst", "sie/Sie": "wissen" },
      praeteritum:  { "ich": "wusste", "du": "wusstest", "er/sie/es": "wusste", "wir": "wussten", "ihr": "wusstet", "sie/Sie": "wussten" }
    },
    {
      infinitive: "sehen", english: "to see", type: "irregular", level: 2,
      conjugations: { "ich": "sehe", "du": "siehst", "er/sie/es": "sieht", "wir": "sehen", "ihr": "seht", "sie/Sie": "sehen" },
      praeteritum:  { "ich": "sah", "du": "sahst", "er/sie/es": "sah", "wir": "sahen", "ihr": "saht", "sie/Sie": "sahen" }
    },
    {
      infinitive: "lernen", english: "to learn", type: "regular", level: 2,
      conjugations: { "ich": "lerne", "du": "lernst", "er/sie/es": "lernt", "wir": "lernen", "ihr": "lernt", "sie/Sie": "lernen" },
      praeteritum:  { "ich": "lernte", "du": "lerntest", "er/sie/es": "lernte", "wir": "lernten", "ihr": "lerntet", "sie/Sie": "lernten" }
    },
    {
      infinitive: "essen", english: "to eat", type: "irregular", level: 2,
      conjugations: { "ich": "esse", "du": "isst", "er/sie/es": "isst", "wir": "essen", "ihr": "esst", "sie/Sie": "essen" },
      praeteritum:  { "ich": "aß", "du": "aßt", "er/sie/es": "aß", "wir": "aßen", "ihr": "aßt", "sie/Sie": "aßen" }
    },
    {
      infinitive: "geben", english: "to give", type: "irregular", level: 2,
      conjugations: { "ich": "gebe", "du": "gibst", "er/sie/es": "gibt", "wir": "geben", "ihr": "gebt", "sie/Sie": "geben" },
      praeteritum:  { "ich": "gab", "du": "gabst", "er/sie/es": "gab", "wir": "gaben", "ihr": "gabt", "sie/Sie": "gaben" }
    },
    {
      infinitive: "nehmen", english: "to take", type: "irregular", level: 2,
      conjugations: { "ich": "nehme", "du": "nimmst", "er/sie/es": "nimmt", "wir": "nehmen", "ihr": "nehmt", "sie/Sie": "nehmen" },
      praeteritum:  { "ich": "nahm", "du": "nahmst", "er/sie/es": "nahm", "wir": "nahmen", "ihr": "nahmt", "sie/Sie": "nahmen" }
    },
    {
      infinitive: "fragen", english: "to ask", type: "regular", level: 2,
      conjugations: { "ich": "frage", "du": "fragst", "er/sie/es": "fragt", "wir": "fragen", "ihr": "fragt", "sie/Sie": "fragen" },
      praeteritum:  { "ich": "fragte", "du": "fragtest", "er/sie/es": "fragte", "wir": "fragten", "ihr": "fragtet", "sie/Sie": "fragten" }
    },
    {
      infinitive: "hören", english: "to hear / listen", type: "regular", level: 2,
      conjugations: { "ich": "höre", "du": "hörst", "er/sie/es": "hört", "wir": "hören", "ihr": "hört", "sie/Sie": "hören" },
      praeteritum:  { "ich": "hörte", "du": "hörtest", "er/sie/es": "hörte", "wir": "hörten", "ihr": "hörtet", "sie/Sie": "hörten" }
    },
    {
      infinitive: "kaufen", english: "to buy", type: "regular", level: 2,
      conjugations: { "ich": "kaufe", "du": "kaufst", "er/sie/es": "kauft", "wir": "kaufen", "ihr": "kauft", "sie/Sie": "kaufen" },
      praeteritum:  { "ich": "kaufte", "du": "kauftest", "er/sie/es": "kaufte", "wir": "kauften", "ihr": "kauftet", "sie/Sie": "kauften" }
    },
    {
      infinitive: "trinken", english: "to drink", type: "irregular", level: 2,
      conjugations: { "ich": "trinke", "du": "trinkst", "er/sie/es": "trinkt", "wir": "trinken", "ihr": "trinkt", "sie/Sie": "trinken" },
      praeteritum:  { "ich": "trank", "du": "trankst", "er/sie/es": "trank", "wir": "tranken", "ihr": "trankt", "sie/Sie": "tranken" }
    },
    {
      infinitive: "fahren", english: "to drive / travel", type: "irregular", level: 2,
      conjugations: { "ich": "fahre", "du": "fährst", "er/sie/es": "fährt", "wir": "fahren", "ihr": "fahrt", "sie/Sie": "fahren" },
      praeteritum:  { "ich": "fuhr", "du": "fuhrst", "er/sie/es": "fuhr", "wir": "fuhren", "ihr": "fuhrt", "sie/Sie": "fuhren" }
    },
    // Level 3 — Less common
    {
      infinitive: "arbeiten", english: "to work", type: "regular", level: 3,
      conjugations: { "ich": "arbeite", "du": "arbeitest", "er/sie/es": "arbeitet", "wir": "arbeiten", "ihr": "arbeitet", "sie/Sie": "arbeiten" },
      praeteritum:  { "ich": "arbeitete", "du": "arbeitetest", "er/sie/es": "arbeitete", "wir": "arbeiteten", "ihr": "arbeitetet", "sie/Sie": "arbeiteten" }
    },
    {
      infinitive: "schreiben", english: "to write", type: "irregular", level: 3,
      conjugations: { "ich": "schreibe", "du": "schreibst", "er/sie/es": "schreibt", "wir": "schreiben", "ihr": "schreibt", "sie/Sie": "schreiben" },
      praeteritum:  { "ich": "schrieb", "du": "schriebst", "er/sie/es": "schrieb", "wir": "schrieben", "ihr": "schriebt", "sie/Sie": "schrieben" }
    },
    {
      infinitive: "sprechen", english: "to speak", type: "irregular", level: 3,
      conjugations: { "ich": "spreche", "du": "sprichst", "er/sie/es": "spricht", "wir": "sprechen", "ihr": "sprecht", "sie/Sie": "sprechen" },
      praeteritum:  { "ich": "sprach", "du": "sprachst", "er/sie/es": "sprach", "wir": "sprachen", "ihr": "spracht", "sie/Sie": "sprachen" }
    },
    {
      infinitive: "lesen", english: "to read", type: "irregular", level: 3,
      conjugations: { "ich": "lese", "du": "liest", "er/sie/es": "liest", "wir": "lesen", "ihr": "lest", "sie/Sie": "lesen" },
      praeteritum:  { "ich": "las", "du": "last", "er/sie/es": "las", "wir": "lasen", "ihr": "last", "sie/Sie": "lasen" }
    },
    {
      infinitive: "laufen", english: "to run / walk", type: "irregular", level: 3,
      conjugations: { "ich": "laufe", "du": "läufst", "er/sie/es": "läuft", "wir": "laufen", "ihr": "lauft", "sie/Sie": "laufen" },
      praeteritum:  { "ich": "lief", "du": "liefst", "er/sie/es": "lief", "wir": "liefen", "ihr": "lieft", "sie/Sie": "liefen" }
    },
    {
      infinitive: "schlafen", english: "to sleep", type: "irregular", level: 3,
      conjugations: { "ich": "schlafe", "du": "schläfst", "er/sie/es": "schläft", "wir": "schlafen", "ihr": "schlaft", "sie/Sie": "schlafen" },
      praeteritum:  { "ich": "schlief", "du": "schliefst", "er/sie/es": "schlief", "wir": "schliefen", "ihr": "schlieft", "sie/Sie": "schliefen" }
    },
    {
      infinitive: "tragen", english: "to carry / wear", type: "irregular", level: 3,
      conjugations: { "ich": "trage", "du": "trägst", "er/sie/es": "trägt", "wir": "tragen", "ihr": "tragt", "sie/Sie": "tragen" },
      praeteritum:  { "ich": "trug", "du": "trugst", "er/sie/es": "trug", "wir": "trugen", "ihr": "trugt", "sie/Sie": "trugen" }
    },
    {
      infinitive: "schwimmen", english: "to swim", type: "irregular", level: 3,
      conjugations: { "ich": "schwimme", "du": "schwimmst", "er/sie/es": "schwimmt", "wir": "schwimmen", "ihr": "schwimmt", "sie/Sie": "schwimmen" },
      praeteritum:  { "ich": "schwamm", "du": "schwammst", "er/sie/es": "schwamm", "wir": "schwammen", "ihr": "schwammt", "sie/Sie": "schwammen" }
    },
    {
      infinitive: "helfen", english: "to help", type: "irregular", level: 3,
      conjugations: { "ich": "helfe", "du": "hilfst", "er/sie/es": "hilft", "wir": "helfen", "ihr": "helft", "sie/Sie": "helfen" },
      praeteritum:  { "ich": "half", "du": "halfst", "er/sie/es": "half", "wir": "halfen", "ihr": "halft", "sie/Sie": "halfen" }
    },
    {
      infinitive: "finden", english: "to find", type: "irregular", level: 3,
      conjugations: { "ich": "finde", "du": "findest", "er/sie/es": "findet", "wir": "finden", "ihr": "findet", "sie/Sie": "finden" },
      praeteritum:  { "ich": "fand", "du": "fandst", "er/sie/es": "fand", "wir": "fanden", "ihr": "fandt", "sie/Sie": "fanden" }
    },
    {
      infinitive: "stehen", english: "to stand", type: "irregular", level: 3,
      conjugations: { "ich": "stehe", "du": "stehst", "er/sie/es": "steht", "wir": "stehen", "ihr": "steht", "sie/Sie": "stehen" },
      praeteritum:  { "ich": "stand", "du": "standst", "er/sie/es": "stand", "wir": "standen", "ihr": "standt", "sie/Sie": "standen" }
    },
    {
      infinitive: "sitzen", english: "to sit", type: "regular", level: 3,
      conjugations: { "ich": "sitze", "du": "sitzt", "er/sie/es": "sitzt", "wir": "sitzen", "ihr": "sitzt", "sie/Sie": "sitzen" },
      praeteritum:  { "ich": "saß", "du": "saßt", "er/sie/es": "saß", "wir": "saßen", "ihr": "saßt", "sie/Sie": "saßen" }
    },
    {
      infinitive: "spielen", english: "to play", type: "regular", level: 3,
      conjugations: { "ich": "spiele", "du": "spielst", "er/sie/es": "spielt", "wir": "spielen", "ihr": "spielt", "sie/Sie": "spielen" },
      praeteritum:  { "ich": "spielte", "du": "spieltest", "er/sie/es": "spielte", "wir": "spielten", "ihr": "spieltet", "sie/Sie": "spielten" }
    },
    {
      infinitive: "suchen", english: "to search / look for", type: "regular", level: 3,
      conjugations: { "ich": "suche", "du": "suchst", "er/sie/es": "sucht", "wir": "suchen", "ihr": "sucht", "sie/Sie": "suchen" },
      praeteritum:  { "ich": "suchte", "du": "suchtest", "er/sie/es": "suchte", "wir": "suchten", "ihr": "suchtet", "sie/Sie": "suchten" }
    },
    {
      infinitive: "kochen", english: "to cook", type: "regular", level: 3,
      conjugations: { "ich": "koche", "du": "kochst", "er/sie/es": "kocht", "wir": "kochen", "ihr": "kocht", "sie/Sie": "kochen" },
      praeteritum:  { "ich": "kochte", "du": "kochtest", "er/sie/es": "kochte", "wir": "kochten", "ihr": "kochtet", "sie/Sie": "kochten" }
    },
    {
      infinitive: "wohnen", english: "to live / reside", type: "regular", level: 3,
      conjugations: { "ich": "wohne", "du": "wohnst", "er/sie/es": "wohnt", "wir": "wohnen", "ihr": "wohnt", "sie/Sie": "wohnen" },
      praeteritum:  { "ich": "wohnte", "du": "wohntest", "er/sie/es": "wohnte", "wir": "wohnten", "ihr": "wohntet", "sie/Sie": "wohnten" }
    },
    {
      infinitive: "reden", english: "to talk / speak", type: "regular", level: 3,
      conjugations: { "ich": "rede", "du": "redest", "er/sie/es": "redet", "wir": "reden", "ihr": "redet", "sie/Sie": "reden" },
      praeteritum:  { "ich": "redete", "du": "redetest", "er/sie/es": "redete", "wir": "redeten", "ihr": "redetet", "sie/Sie": "redeten" }
    },
    {
      infinitive: "reisen", english: "to travel", type: "regular", level: 3,
      conjugations: { "ich": "reise", "du": "reist", "er/sie/es": "reist", "wir": "reisen", "ihr": "reist", "sie/Sie": "reisen" },
      praeteritum:  { "ich": "reiste", "du": "reistest", "er/sie/es": "reiste", "wir": "reisten", "ihr": "reistet", "sie/Sie": "reisten" }
    },
    {
      infinitive: "tanzen", english: "to dance", type: "regular", level: 3,
      conjugations: { "ich": "tanze", "du": "tanzt", "er/sie/es": "tanzt", "wir": "tanzen", "ihr": "tanzt", "sie/Sie": "tanzen" },
      praeteritum:  { "ich": "tanzte", "du": "tanztest", "er/sie/es": "tanzte", "wir": "tanzten", "ihr": "tanztet", "sie/Sie": "tanzten" }
    },
    {
      infinitive: "öffnen", english: "to open", type: "regular", level: 3,
      conjugations: { "ich": "öffne", "du": "öffnest", "er/sie/es": "öffnet", "wir": "öffnen", "ihr": "öffnet", "sie/Sie": "öffnen" },
      praeteritum:  { "ich": "öffnete", "du": "öffnetest", "er/sie/es": "öffnete", "wir": "öffneten", "ihr": "öffnetet", "sie/Sie": "öffneten" }
    },
    {
      infinitive: "warten", english: "to wait", type: "regular", level: 3,
      conjugations: { "ich": "warte", "du": "wartest", "er/sie/es": "wartet", "wir": "warten", "ihr": "wartet", "sie/Sie": "warten" },
      praeteritum:  { "ich": "wartete", "du": "wartetest", "er/sie/es": "wartete", "wir": "warteten", "ihr": "wartetet", "sie/Sie": "warteten" }
    },
    {
      infinitive: "lieben", english: "to love", type: "regular", level: 3,
      conjugations: { "ich": "liebe", "du": "liebst", "er/sie/es": "liebt", "wir": "lieben", "ihr": "liebt", "sie/Sie": "lieben" },
      praeteritum:  { "ich": "liebte", "du": "liebtest", "er/sie/es": "liebte", "wir": "liebten", "ihr": "liebtet", "sie/Sie": "liebten" }
    },
    {
      infinitive: "bringen", english: "to bring", type: "irregular", level: 3,
      conjugations: { "ich": "bringe", "du": "bringst", "er/sie/es": "bringt", "wir": "bringen", "ihr": "bringt", "sie/Sie": "bringen" },
      praeteritum:  { "ich": "brachte", "du": "brachtest", "er/sie/es": "brachte", "wir": "brachten", "ihr": "brachtet", "sie/Sie": "brachten" }
    },
    {
      infinitive: "fliegen", english: "to fly", type: "irregular", level: 3,
      conjugations: { "ich": "fliege", "du": "fliegst", "er/sie/es": "fliegt", "wir": "fliegen", "ihr": "fliegt", "sie/Sie": "fliegen" },
      praeteritum:  { "ich": "flog", "du": "flogst", "er/sie/es": "flog", "wir": "flogen", "ihr": "flogt", "sie/Sie": "flogen" }
    },
  ],

  separable: [
    { infinitive: "anrufen",      prefix: "an",      english: "to call (phone)",             example: "Ich rufe dich an." },
    { infinitive: "aufräumen",    prefix: "auf",     english: "to tidy up / clean",          example: "Er räumt sein Zimmer auf." },
    { infinitive: "aufstehen",    prefix: "auf",     english: "to get up / stand up",        example: "Ich stehe um 7 Uhr auf." },
    { infinitive: "aufmachen",    prefix: "auf",     english: "to open",                     example: "Mach bitte das Fenster auf." },
    { infinitive: "aufhören",     prefix: "auf",     english: "to stop / quit",              example: "Hör auf zu reden!" },
    { infinitive: "aufwachen",    prefix: "auf",     english: "to wake up",                  example: "Ich wache früh auf." },
    { infinitive: "aufschreiben", prefix: "auf",     english: "to write down / note",        example: "Schreib das auf!" },
    { infinitive: "anfangen",     prefix: "an",      english: "to begin / start",            example: "Wann fängt der Film an?" },
    { infinitive: "anziehen",     prefix: "an",      english: "to put on (clothes)",         example: "Ich ziehe meinen Mantel an." },
    { infinitive: "ankommen",     prefix: "an",      english: "to arrive",                   example: "Wir kommen um 18 Uhr an." },
    { infinitive: "ansehen",      prefix: "an",      english: "to look at / watch",          example: "Sieh mich an!" },
    { infinitive: "anschalten",   prefix: "an",      english: "to turn on / switch on",      example: "Schalte den Fernseher an." },
    { infinitive: "anbieten",     prefix: "an",      english: "to offer",                    example: "Er bietet mir Hilfe an." },
    { infinitive: "ausziehen",    prefix: "aus",     english: "to take off (clothes) / move out", example: "Er zieht seine Jacke aus." },
    { infinitive: "ausgehen",     prefix: "aus",     english: "to go out",                   example: "Wir gehen heute Abend aus." },
    { infinitive: "ausmachen",    prefix: "aus",     english: "to turn off / switch off",    example: "Mach das Licht aus!" },
    { infinitive: "aussteigen",   prefix: "aus",     english: "to get out / exit",           example: "Wo steigen wir aus?" },
    { infinitive: "einkaufen",    prefix: "ein",     english: "to go shopping",              example: "Ich kaufe im Supermarkt ein." },
    { infinitive: "einladen",     prefix: "ein",     english: "to invite",                   example: "Ich lade dich ein." },
    { infinitive: "einsteigen",   prefix: "ein",     english: "to get in / board",           example: "Steig schnell ein!" },
    { infinitive: "einschlafen",  prefix: "ein",     english: "to fall asleep",              example: "Das Baby schläft ein." },
    { infinitive: "abfahren",     prefix: "ab",      english: "to depart / leave",           example: "Der Zug fährt um 9 ab." },
    { infinitive: "abnehmen",     prefix: "ab",      english: "to lose weight / take off",   example: "Ich möchte abnehmen." },
    { infinitive: "abgeben",      prefix: "ab",      english: "to hand in / drop off",       example: "Ich gebe die Hausaufgaben ab." },
    { infinitive: "abholen",      prefix: "ab",      english: "to pick up / collect",        example: "Ich hole dich vom Bahnhof ab." },
    { infinitive: "mitkommen",    prefix: "mit",     english: "to come along",               example: "Kommst du mit?" },
    { infinitive: "mitnehmen",    prefix: "mit",     english: "to take along / bring",       example: "Kann ich das mitnehmen?" },
    { infinitive: "vorstellen",   prefix: "vor",     english: "to introduce / imagine",      example: "Ich stelle mich vor." },
    { infinitive: "vorhaben",     prefix: "vor",     english: "to plan / intend",            example: "Was hast du vor?" },
    { infinitive: "vorbereiten",  prefix: "vor",     english: "to prepare",                  example: "Ich bereite das Essen vor." },
    { infinitive: "zurückkommen", prefix: "zurück",  english: "to come back / return",       example: "Wann kommst du zurück?" },
    { infinitive: "zurückgeben",  prefix: "zurück",  english: "to give back",                example: "Gib mir das Buch zurück!" },
    { infinitive: "umziehen",     prefix: "um",      english: "to move (home) / change clothes", example: "Wir ziehen nach Berlin um." },
    { infinitive: "umsteigen",    prefix: "um",      english: "to transfer / change (transport)", example: "Hier müssen wir umsteigen." },
    { infinitive: "weitergehen",  prefix: "weiter",  english: "to continue / keep going",    example: "Gehen wir weiter!" },
    { infinitive: "weitermachen", prefix: "weiter",  english: "to carry on / continue",      example: "Mach weiter!" },
    { infinitive: "hereingehen",  prefix: "her",     english: "to come in / enter",          example: "Bitte gehen Sie herein." },
    { infinitive: "hinsetzen",    prefix: "hin",     english: "to sit down / place",         example: "Setz dich hin!" },
    { infinitive: "hinlegen",     prefix: "hin",     english: "to lay down / put down",      example: "Leg das Buch hin." },
    { infinitive: "zunehmen",     prefix: "zu",      english: "to gain weight / increase",   example: "Er hat zugenommen." },
  ],

  adjectives: [
    // Level 1 — Most common (with opposites)
    { german: "gut",        english: "good",         comparative: "besser",      superlative: "am besten",       opposite: "schlecht", level: 1 },
    { german: "schlecht",   english: "bad",           comparative: "schlechter",  superlative: "am schlechtesten",opposite: "gut",      level: 1 },
    { german: "groß",       english: "big / tall",    comparative: "größer",      superlative: "am größten",      opposite: "klein",    level: 1 },
    { german: "klein",      english: "small",         comparative: "kleiner",     superlative: "am kleinsten",    opposite: "groß",     level: 1 },
    { german: "alt",        english: "old",           comparative: "älter",       superlative: "am ältesten",     opposite: "jung",     level: 1 },
    { german: "jung",       english: "young",         comparative: "jünger",      superlative: "am jüngsten",     opposite: "alt",      level: 1 },
    { german: "neu",        english: "new",           comparative: "neuer",       superlative: "am neuesten",     opposite: "",         level: 1 },
    { german: "schnell",    english: "fast / quick",  comparative: "schneller",   superlative: "am schnellsten",  opposite: "langsam",  level: 1 },
    { german: "langsam",    english: "slow",          comparative: "langsamer",   superlative: "am langsamsten",  opposite: "schnell",  level: 1 },
    // Level 2 — Common
    { german: "schön",      english: "beautiful",     comparative: "schöner",     superlative: "am schönsten",    opposite: "hässlich", level: 2 },
    { german: "hässlich",   english: "ugly",          comparative: "hässlicher",  superlative: "am hässlichsten", opposite: "schön",    level: 2 },
    { german: "kalt",       english: "cold",          comparative: "kälter",      superlative: "am kältesten",    opposite: "heiß",     level: 2 },
    { german: "heiß",       english: "hot",           comparative: "heißer",      superlative: "am heißesten",    opposite: "kalt",     level: 2 },
    { german: "warm",       english: "warm",          comparative: "wärmer",      superlative: "am wärmsten",     opposite: "",         level: 2 },
    { german: "lang",       english: "long",          comparative: "länger",      superlative: "am längsten",     opposite: "kurz",     level: 2 },
    { german: "kurz",       english: "short",         comparative: "kürzer",      superlative: "am kürzesten",    opposite: "lang",     level: 2 },
    { german: "stark",      english: "strong",        comparative: "stärker",     superlative: "am stärksten",    opposite: "schwach",  level: 2 },
    { german: "schwach",    english: "weak",          comparative: "schwächer",   superlative: "am schwächsten",  opposite: "stark",    level: 2 },
    { german: "wichtig",    english: "important",     comparative: "wichtiger",   superlative: "am wichtigsten",  opposite: "",         level: 2 },
    { german: "laut",       english: "loud",          comparative: "lauter",      superlative: "am lautesten",    opposite: "leise",    level: 2 },
    { german: "leise",      english: "quiet",         comparative: "leiser",      superlative: "am leisesten",    opposite: "laut",     level: 2 },
    { german: "teuer",      english: "expensive",     comparative: "teurer",      superlative: "am teuersten",    opposite: "günstig",  level: 2 },
    { german: "günstig",    english: "cheap",         comparative: "günstiger",   superlative: "am günstigsten",  opposite: "teuer",    level: 2 },
    { german: "schwer",     english: "heavy / hard",  comparative: "schwerer",    superlative: "am schwersten",   opposite: "leicht",   level: 2 },
    { german: "leicht",     english: "light / easy",  comparative: "leichter",    superlative: "am leichtesten",  opposite: "schwer",   level: 2 },
    { german: "hell",       english: "bright / light",comparative: "heller",      superlative: "am hellsten",     opposite: "dunkel",   level: 2 },
    { german: "dunkel",     english: "dark",          comparative: "dunkler",     superlative: "am dunkelsten",   opposite: "hell",     level: 2 },
    // Level 3 — Less common
    { german: "müde",       english: "tired",         comparative: "müder",       superlative: "am müdesten",     opposite: "wach",     level: 3 },
    { german: "wach",       english: "awake",         comparative: "wacher",      superlative: "am wachsten",     opposite: "müde",     level: 3 },
    { german: "schwierig",  english: "difficult",     comparative: "schwieriger", superlative: "am schwierigsten",opposite: "einfach",  level: 3 },
    { german: "einfach",    english: "simple / easy", comparative: "einfacher",   superlative: "am einfachsten",  opposite: "schwierig",level: 3 },
    { german: "glücklich",  english: "happy",         comparative: "glücklicher", superlative: "am glücklichsten",opposite: "traurig",  level: 3 },
    { german: "traurig",    english: "sad",           comparative: "trauriger",   superlative: "am traurigsten",  opposite: "glücklich",level: 3 },
    { german: "sauber",     english: "clean",         comparative: "sauberer",    superlative: "am saubersten",   opposite: "schmutzig",level: 3 },
    { german: "schmutzig",  english: "dirty",         comparative: "schmutziger", superlative: "am schmutzigsten",opposite: "sauber",   level: 3 },
    { german: "reich",      english: "rich",          comparative: "reicher",     superlative: "am reichsten",    opposite: "arm",      level: 3 },
    { german: "arm",        english: "poor",          comparative: "ärmer",       superlative: "am ärmsten",      opposite: "reich",    level: 3 },
    { german: "voll",       english: "full",          comparative: "voller",      superlative: "am vollsten",     opposite: "leer",     level: 3 },
    { german: "leer",       english: "empty",         comparative: "leerer",      superlative: "am leersten",     opposite: "voll",     level: 3 },
    { german: "gesund",     english: "healthy",       comparative: "gesünder",    superlative: "am gesündesten",  opposite: "krank",    level: 3 },
    { german: "krank",      english: "sick / ill",    comparative: "kränker",     superlative: "am kränksten",    opposite: "gesund",   level: 3 },
    { german: "klug",       english: "clever / smart",comparative: "klüger",      superlative: "am klügsten",     opposite: "dumm",     level: 3 },
    { german: "dumm",       english: "stupid / dumb", comparative: "dümmer",      superlative: "am dümmsten",     opposite: "klug",     level: 3 },
    { german: "früh",       english: "early",         comparative: "früher",      superlative: "am frühesten",    opposite: "spät",     level: 3 },
    { german: "spät",       english: "late",          comparative: "später",      superlative: "am spätesten",    opposite: "früh",     level: 3 },
    { german: "nah",        english: "near / close",  comparative: "näher",       superlative: "am nächsten",     opposite: "weit",     level: 3 },
    { german: "weit",       english: "far",           comparative: "weiter",      superlative: "am weitesten",    opposite: "nah",      level: 3 },
    { german: "süß",        english: "sweet",         comparative: "süßer",       superlative: "am süßesten",     opposite: "bitter",   level: 3 },
    { german: "bitter",     english: "bitter",        comparative: "bitterer",    superlative: "am bittersten",   opposite: "süß",      level: 3 },
    { german: "interessant",english: "interesting",   comparative: "interessanter",superlative: "am interessantesten", opposite: "langweilig", level: 3 },
    { german: "langweilig", english: "boring",        comparative: "langweiliger",superlative: "am langweiligsten",opposite: "interessant", level: 3 },
    { german: "sicher",     english: "safe / certain",comparative: "sicherer",    superlative: "am sichersten",   opposite: "gefährlich",level: 3 },
    { german: "gefährlich", english: "dangerous",     comparative: "gefährlicher",superlative: "am gefährlichsten",opposite: "sicher",  level: 3 },
    { german: "lecker",     english: "delicious",     comparative: "leckerer",    superlative: "am leckersten",   opposite: "",         level: 3 },
    { german: "wütend",     english: "angry",         comparative: "wütender",    superlative: "am wütendsten",   opposite: "ruhig",    level: 3 },
    { german: "ruhig",      english: "calm / quiet",  comparative: "ruhiger",     superlative: "am ruhigsten",    opposite: "wütend",   level: 3 },
  ]
};

// ═══════════════════════════════════════
// THEME
// ═══════════════════════════════════════
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function setTheme(t) {
  html.setAttribute('data-theme', t);
  localStorage.setItem('deutschar-theme', t);
}

themeToggle.addEventListener('click', () => {
  setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

const savedTheme = localStorage.getItem('deutschar-theme');
if (savedTheme) setTheme(savedTheme);

// ═══════════════════════════════════════
// SIDEBAR
// ═══════════════════════════════════════
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const sidebarClose = document.getElementById('sidebarClose');
const overlay = document.getElementById('sidebarOverlay');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar on nav link click (mobile)
document.querySelectorAll('.nav-item, .nav-home').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) closeSidebar();
  });
});

// Chapter toggles
document.querySelectorAll('.chapter-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const items = btn.nextElementSibling;
    const isOpen = !items.classList.contains('closed');
    if (isOpen) {
      items.classList.add('closed');
      btn.classList.add('collapsed');
    } else {
      items.classList.remove('closed');
      btn.classList.remove('collapsed');
    }
  });
});

// ═══════════════════════════════════════
// SCROLL SPY
// ═══════════════════════════════════════
const allNavLinks = document.querySelectorAll('.nav-item[data-section], .nav-home[data-section]');

function updateActiveNav() {
  const scrollY = window.scrollY + 100;
  let current = '';

  document.querySelectorAll('section[id], div[id]').forEach(sec => {
    if (sec.offsetTop <= scrollY) current = sec.id;
  });

  allNavLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// ═══════════════════════════════════════
// BACK TO TOP
// ═══════════════════════════════════════
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ═══════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0 });
  reveals.forEach(el => observer.observe(el));
  setTimeout(() => reveals.forEach(el => el.classList.add('visible')), 1500);
}
initReveal();

// ═══════════════════════════════════════
// RENDER WORD BANK — NOUNS
// ═══════════════════════════════════════
function renderNouns(filter = '') {
  const tbody = document.getElementById('nounTableBody');
  const filtered = wordBank.nouns.filter(n =>
    n.german.toLowerCase().includes(filter.toLowerCase()) ||
    n.english.toLowerCase().includes(filter.toLowerCase())
  );

  tbody.innerHTML = filtered.map(n => `
    <tr>
      <td><span class="gender-badge ${n.article}">${n.article}</span></td>
      <td class="${n.article}-text" style="font-weight:700">${n.german}</td>
      <td style="color:var(--text-muted);font-size:0.82rem">${n.plural}</td>
      <td style="color:var(--text-2)">${n.english}</td>
      <td style="color:var(--text-muted);font-size:0.8rem">${n.opposite ? `<span class="opposite-badge">↔ ${n.opposite}</span>` : '—'}</td>
    </tr>
  `).join('');
}

renderNouns();
document.getElementById('nounSearch').addEventListener('input', e => renderNouns(e.target.value));

// ═══════════════════════════════════════
// RENDER WORD BANK — VERBS
// ═══════════════════════════════════════
function renderVerbs(filter = '') {
  const container = document.getElementById('verbsContainer');
  const filtered = wordBank.verbs.filter(v =>
    v.infinitive.toLowerCase().includes(filter.toLowerCase()) ||
    v.english.toLowerCase().includes(filter.toLowerCase())
  );

  container.innerHTML = filtered.map(v => `
    <div class="verb-card">
      <div class="verb-card-header">
        <div>
          <div class="verb-infinitive">${v.infinitive}</div>
          <div class="verb-english">${v.english}</div>
        </div>
        <span class="verb-type ${v.type}">${v.type}</span>
      </div>
      <table class="verb-conj-table">
        ${Object.entries(v.conjugations).map(([pro, form]) => `
          <tr>
            <td class="vct-pronoun">${pro}</td>
            <td class="vct-form ${v.type === 'irregular' ? 'irregular' : ''}">${form}</td>
          </tr>
        `).join('')}
      </table>
    </div>
  `).join('');
}

renderVerbs();
document.getElementById('verbSearch').addEventListener('input', e => renderVerbs(e.target.value));

// ═══════════════════════════════════════
// RENDER WORD BANK — ADJECTIVES
// ═══════════════════════════════════════
function renderAdjectives(filter = '') {
  const tbody = document.getElementById('adjTableBody');
  const filtered = wordBank.adjectives.filter(a =>
    a.german.toLowerCase().includes(filter.toLowerCase()) ||
    a.english.toLowerCase().includes(filter.toLowerCase())
  );

  tbody.innerHTML = filtered.map(a => `
    <tr>
      <td style="font-weight:700;color:var(--text)">${a.german}</td>
      <td style="color:var(--text-2)">${a.english}</td>
      <td style="color:var(--accent)">${a.comparative}</td>
      <td style="color:var(--text-muted)">${a.superlative}</td>
      <td style="font-size:0.8rem">${a.opposite ? `<span class="opposite-badge">↔ ${a.opposite}</span>` : '—'}</td>
    </tr>
  `).join('');
}

renderAdjectives();
document.getElementById('adjSearch').addEventListener('input', e => renderAdjectives(e.target.value));

// ═══════════════════════════════════════
// GLOBAL WORD SEARCH TOOL
// ═══════════════════════════════════════
let currentFilter = 'all';

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    runSearch();
  });
});

document.getElementById('wordSearchBtn').addEventListener('click', runSearch);
document.getElementById('globalWordSearch').addEventListener('keydown', e => {
  if (e.key === 'Enter') runSearch();
});
document.getElementById('globalWordSearch').addEventListener('input', runSearch);

function runSearch() {
  const q = document.getElementById('globalWordSearch').value.trim().toLowerCase();
  const container = document.getElementById('searchResults');

  if (!q) {
    container.innerHTML = '<p class="search-hint">Start typing to search the word bank...</p>';
    return;
  }

  const results = [];

  if (currentFilter === 'all' || currentFilter === 'nouns') {
    wordBank.nouns.forEach(n => {
      if (n.german.toLowerCase().includes(q) || n.english.toLowerCase().includes(q)) {
        results.push({ type: 'noun', de: `${n.article} ${n.german}`, en: n.english, extra: `Plural: ${n.plural}` });
      }
    });
  }
  if (currentFilter === 'all' || currentFilter === 'verbs') {
    wordBank.verbs.forEach(v => {
      if (v.infinitive.toLowerCase().includes(q) || v.english.toLowerCase().includes(q)) {
        results.push({ type: 'verb', de: v.infinitive, en: v.english, extra: `${v.type} · ich: ${v.conjugations['ich']}, er: ${v.conjugations['er/sie/es']}` });
      }
    });
    wordBank.separable.forEach(v => {
      if (v.infinitive.toLowerCase().includes(q) || v.english.toLowerCase().includes(q)) {
        results.push({ type: 'separable verb', de: v.infinitive, en: v.english, extra: `prefix: ${v.prefix}- · ${v.example}` });
      }
    });
  }
  if (currentFilter === 'all' || currentFilter === 'adjectives') {
    wordBank.adjectives.forEach(a => {
      if (a.german.toLowerCase().includes(q) || a.english.toLowerCase().includes(q)) {
        results.push({ type: 'adjective', de: a.german, en: a.english, extra: `${a.comparative} · ${a.superlative}` });
      }
    });
  }

  if (!results.length) {
    container.innerHTML = '<p class="search-hint">No results found. Try a different word.</p>';
    return;
  }

  container.innerHTML = results.map(r => `
    <div class="search-result-item">
      <span class="sri-type">${r.type}</span>
      <span class="sri-de">${r.de}</span>
      <span class="sri-en">${r.en}</span>
      <span style="font-size:0.75rem;color:var(--text-muted);margin-left:auto">${r.extra}</span>
    </div>
  `).join('');
}

// ═══════════════════════════════════════
// GENDER QUIZ
// ═══════════════════════════════════════
let quizScore = 0, quizCount = 0, currentNoun = null;

function getRandomNoun() {
  return wordBank.nouns[Math.floor(Math.random() * wordBank.nouns.length)];
}

function loadQuiz() {
  currentNoun = getRandomNoun();
  document.getElementById('quizNoun').textContent = currentNoun.german;
  document.getElementById('quizEn').textContent = currentNoun.english;
  document.getElementById('quizFeedback').textContent = '';
  document.getElementById('quizFeedback').className = 'quiz-feedback';
  document.querySelectorAll('.quiz-choice').forEach(b => {
    b.classList.remove('correct', 'wrong');
    b.disabled = false;
    b.style.opacity = '1';
  });
}

document.querySelectorAll('.quiz-choice').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!currentNoun) return;
    const answer = btn.dataset.answer;
    const correct = answer === currentNoun.article;

    quizCount++;
    if (correct) quizScore++;

    document.getElementById('quizScore').textContent = quizScore;
    document.getElementById('quizCount').textContent = quizCount;

    const feedback = document.getElementById('quizFeedback');
    if (correct) {
      feedback.textContent = `✓ Correct! ${currentNoun.article} ${currentNoun.german}`;
      feedback.className = 'quiz-feedback correct-msg';
      btn.classList.add('correct');
    } else {
      feedback.textContent = `✗ Wrong! It's ${currentNoun.article} ${currentNoun.german}`;
      feedback.className = 'quiz-feedback wrong-msg';
      btn.classList.add('wrong');
      document.querySelectorAll('.quiz-choice').forEach(b => {
        if (b.dataset.answer !== currentNoun.article) b.style.opacity = '0.35';
        else b.classList.add('correct');
      });
    }

    document.querySelectorAll('.quiz-choice').forEach(b => b.disabled = true);
  });
});

document.getElementById('quizNext').addEventListener('click', loadQuiz);
document.getElementById('quizReset').addEventListener('click', () => {
  quizScore = 0; quizCount = 0;
  document.getElementById('quizScore').textContent = 0;
  document.getElementById('quizCount').textContent = 0;
  loadQuiz();
});

loadQuiz();

// ═══════════════════════════════════════
// VERB CONJUGATOR TOOL
// ═══════════════════════════════════════
document.getElementById('conjBtn').addEventListener('click', conjugate);
document.getElementById('conjInput').addEventListener('keydown', e => { if (e.key === 'Enter') conjugate(); });

function conjugate() {
  const q = document.getElementById('conjInput').value.trim().toLowerCase();
  const result = document.getElementById('conjResult');

  if (!q) { result.innerHTML = ''; return; }

  const verb = wordBank.verbs.find(v => v.infinitive.toLowerCase() === q);
  const sepVerb = wordBank.separable.find(v => v.infinitive.toLowerCase() === q);

  if (!verb && sepVerb) {
    result.innerHTML = `
      <div class="conj-result-card">
        <div class="conj-result-header">
          <div>
            <div class="conj-result-verb">${sepVerb.infinitive}</div>
            <div class="conj-result-en">${sepVerb.english}</div>
          </div>
          <span class="verb-type" style="background:var(--accent);color:#000">separable</span>
        </div>
        <div class="sep-conj-info">
          <p>This is a <strong>separable verb</strong> — prefix <span class="mono">${sepVerb.prefix}-</span> splits off to the end.</p>
          <div class="sep-example-row" style="margin-top:.6rem">
            <span class="sep-infinitive">${sepVerb.prefix}<strong>${sepVerb.infinitive.slice(sepVerb.prefix.length)}</strong></span>
            <span class="sep-arrow">→</span>
            <span class="sep-split" style="font-style:italic">${sepVerb.example}</span>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (!verb) {
    result.innerHTML = `<p style="color:var(--text-muted);font-size:0.85rem;padding:1rem 0">Verb "<strong>${q}</strong>" not found in the word bank yet. More verbs coming soon!</p>`;
    return;
  }

  result.innerHTML = `
    <div class="conj-result-card">
      <div class="conj-result-header">
        <div>
          <div class="conj-result-verb">${verb.infinitive}</div>
          <div class="conj-result-en">${verb.english}</div>
        </div>
        <span class="verb-type ${verb.type}">${verb.type}</span>
      </div>
      <div class="conj-two-col">
        <div>
          <div class="conj-tense-label">Präsens (Present)</div>
          <table class="verb-conj-table">
            ${Object.entries(verb.conjugations).map(([pro, form]) => `
              <tr>
                <td class="vct-pronoun">${pro}</td>
                <td class="vct-form ${verb.type === 'irregular' ? 'irregular' : ''}">${form}</td>
              </tr>
            `).join('')}
          </table>
        </div>
        ${verb.praeteritum ? `
        <div>
          <div class="conj-tense-label">Präteritum (Simple Past)</div>
          <table class="verb-conj-table">
            ${Object.entries(verb.praeteritum).map(([pro, form]) => `
              <tr>
                <td class="vct-pronoun">${pro}</td>
                <td class="vct-form praeteritum">${form}</td>
              </tr>
            `).join('')}
          </table>
        </div>` : ''}
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════
// OPPOSITES EXPLORER
// ═══════════════════════════════════════
function renderOpposites() {
  const adjGrid = document.getElementById('adjOppositeGrid');
  const nounGrid = document.getElementById('nounOppositeGrid');
  if (!adjGrid || !nounGrid) return;

  const seen = new Set();
  const adjPairs = [];
  wordBank.adjectives.forEach(a => {
    if (!a.opposite) return;
    const key = [a.german, a.opposite].sort().join('|');
    if (!seen.has(key)) { seen.add(key); adjPairs.push([a.german, a.opposite]); }
  });

  const seenN = new Set();
  const nounPairs = [];
  wordBank.nouns.forEach(n => {
    if (!n.opposite) return;
    const key = [n.german, n.opposite].sort().join('|');
    if (!seenN.has(key)) { seenN.add(key); nounPairs.push([n.german, n.opposite]); }
  });

  adjGrid.innerHTML = adjPairs.map(([a, b]) => `
    <div class="opp-pair">
      <span class="opp-word">${a}</span>
      <span class="opp-arrow">↔</span>
      <span class="opp-word">${b}</span>
    </div>
  `).join('');

  nounGrid.innerHTML = nounPairs.map(([a, b]) => {
    const na = wordBank.nouns.find(n => n.german === a);
    const nb = wordBank.nouns.find(n => n.german === b);
    return `
    <div class="opp-pair">
      <span class="opp-word ${na ? na.article+'-text' : ''}">${na ? na.article+' ' : ''}${a}</span>
      <span class="opp-arrow">↔</span>
      <span class="opp-word ${nb ? nb.article+'-text' : ''}">${nb ? nb.article+' ' : ''}${b}</span>
    </div>
  `}).join('');
}
renderOpposites();

// ═══════════════════════════════════════
// SIDEBAR SEARCH
// ═══════════════════════════════════════
document.getElementById('sidebarSearch').addEventListener('input', function() {
  const q = this.value.toLowerCase();
  document.querySelectorAll('.nav-item').forEach(item => {
    item.style.display = (!q || item.textContent.toLowerCase().includes(q)) ? 'block' : 'none';
  });
});

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
console.log('%cDeutschAR.EDU v1.0 — Made by Abdelrahman Mohamed', 'color:#F0C233;font-weight:bold;font-size:14px;');
