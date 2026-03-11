/* ============================================================
   DeutschAR.EDU v3.0 — JavaScript
   Author: AR
============================================================ */

// ═══════════════════════════════════════
// CONTENT PROTECTION
// © 2026 Abdelrahman Mohamed. All rights reserved.
// Unauthorized copying, redistribution or modification
// of this code or its content is strictly prohibited.
// ═══════════════════════════════════════
(function () {

  // ── Console watermark ──
  console.clear();
  console.log(
    '%c DeutschAR.EDU ',
    'background:#0D1B2A;color:#F0C233;font-size:18px;font-weight:bold;padding:8px 16px;border-radius:6px;'
  );
  console.log(
    '%c © 2026 Abdelrahman Mohamed. All rights reserved.\n%c Unauthorized use or redistribution of this code is prohibited.',
    'color:#94A8BE;font-size:13px;',
    'color:#cc2936;font-size:12px;font-weight:bold;'
  );
  console.log(
    '%c If you\'re a developer exploring this for learning purposes, please respect the author\'s work.',
    'color:#607a90;font-size:11px;font-style:italic;'
  );

  // ── Disable right-click context menu ──
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  });

  // ── Disable text selection on non-input elements ──
  document.addEventListener('selectstart', function (e) {
    const tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return true;
    e.preventDefault();
    return false;
  });

  // ── Block DevTools shortcuts & source-view hotkeys ──
  document.addEventListener('keydown', function (e) {
    const ctrl  = e.ctrlKey || e.metaKey;
    const shift = e.shiftKey;
    const key   = e.key;

    // F12 — DevTools
    if (key === 'F12') { e.preventDefault(); return false; }
    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C — DevTools panels
    if (ctrl && shift && (key === 'I' || key === 'i' || key === 'J' || key === 'j' || key === 'C' || key === 'c')) {
      e.preventDefault(); return false;
    }
    // Ctrl+U — View source
    if (ctrl && (key === 'U' || key === 'u')) { e.preventDefault(); return false; }
    // Ctrl+S — Save page
    if (ctrl && (key === 'S' || key === 's')) { e.preventDefault(); return false; }
    // Ctrl+A — Select all (allow inside inputs/textareas)
    if (ctrl && (key === 'A' || key === 'a')) {
      const tag = document.activeElement?.tagName;
      if (tag !== 'INPUT' && tag !== 'TEXTAREA') { e.preventDefault(); return false; }
    }
  }, true); // capture phase so it fires before other handlers

  // ── DevTools size detection ──
  // When DevTools is open the window inner dimensions shrink noticeably
  const _threshold = 160;
  let _devWarn = false;
  setInterval(function () {
    const widthDiff  = window.outerWidth  - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    if ((widthDiff > _threshold || heightDiff > _threshold) && !_devWarn) {
      _devWarn = true;
      console.clear();
      console.log('%c🚫 DevTools detected', 'color:#cc2936;font-size:16px;font-weight:bold;');
      console.log('%cThis tool is protected. Please respect the author\'s work.', 'color:#607a90;');
    } else if (widthDiff <= _threshold && heightDiff <= _threshold) {
      _devWarn = false;
    }
  }, 1000);

})();

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
      praeteritum:  { "ich": "aß", "du": "aßest", "er/sie/es": "aß", "wir": "aßen", "ihr": "aßt", "sie/Sie": "aßen" }
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
      infinitive: "sitzen", english: "to sit", type: "irregular", level: 3,
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
  html.classList.add('theme-transitioning');
  html.setAttribute('data-theme', t);
  localStorage.setItem('deutschar-theme', t);
  setTimeout(() => html.classList.remove('theme-transitioning'), 450);
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
let nounLevelActive = 'all';

function renderNouns(filter = '') {
  const tbody = document.getElementById('nounTableBody');
  const filtered = wordBank.nouns.filter(n => {
    const matchText = n.german.toLowerCase().includes(filter.toLowerCase()) ||
                      n.english.toLowerCase().includes(filter.toLowerCase());
    const matchLevel = nounLevelActive === 'all' || String(n.level) === nounLevelActive;
    return matchText && matchLevel;
  });

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:1.5rem">No nouns found for this filter.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(n => `
    <tr>
      <td><span class="gender-badge ${n.article}">${n.article}</span></td>
      <td class="${n.article}-text" style="font-weight:700">
        ${n.article} ${n.german}
        <button class="speak-btn speak-btn-inline" aria-label="Pronounce ${n.article} ${n.german}" data-speak="${n.article} ${n.german}" onclick="event.stopPropagation();document.querySelectorAll('.speak-btn.speaking').forEach(b=>b.classList.remove('speaking'));this.classList.add('speaking');speakDE(this.dataset.speak)"><svg viewBox='0 0 20 20' fill='currentColor' width='12' height='12'><path d='M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z'/></svg></button>
      </td>
      <td style="color:var(--text-muted);font-size:0.82rem">${n.plural}</td>
      <td style="color:var(--text-2)">${n.english}</td>
      <td style="color:var(--text-muted);font-size:0.8rem">${n.opposite ? `<span class="opposite-badge">↔ ${n.opposite}</span>` : '—'}</td>
    </tr>
  `).join('');
}

renderNouns();
document.getElementById('nounSearch').addEventListener('input', e => renderNouns(e.target.value));
document.querySelectorAll('#nounLevelFilter .level-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#nounLevelFilter .level-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    nounLevelActive = btn.dataset.level;
    renderNouns(document.getElementById('nounSearch').value);
  });
});

// ═══════════════════════════════════════
// RENDER WORD BANK — VERBS
// ═══════════════════════════════════════
let verbLevelActive = 'all';

function renderVerbs(filter = '') {
  const container = document.getElementById('verbsContainer');
  const filtered = wordBank.verbs.filter(v => {
    const matchText = v.infinitive.toLowerCase().includes(filter.toLowerCase()) ||
                      v.english.toLowerCase().includes(filter.toLowerCase());
    const matchLevel = verbLevelActive === 'all' || String(v.level) === verbLevelActive;
    return matchText && matchLevel;
  });

  if (!filtered.length) {
    container.innerHTML = `<p style="color:var(--text-muted);padding:1rem 0">No verbs found for this filter.</p>`;
    return;
  }

  container.innerHTML = filtered.map(v => `
    <div class="verb-card">
      <div class="verb-card-header">
        <div>
          <div class="verb-infinitive">${v.infinitive} <button class="speak-btn speak-btn-inline" aria-label="Pronounce ${v.infinitive}" data-speak="${v.infinitive}" onclick="event.stopPropagation();document.querySelectorAll('.speak-btn.speaking').forEach(b=>b.classList.remove('speaking'));this.classList.add('speaking');speakDE(this.dataset.speak)"><svg viewBox='0 0 20 20' fill='currentColor' width='12' height='12'><path d='M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z'/></svg></button></div>
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
document.querySelectorAll('#verbLevelFilter .level-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#verbLevelFilter .level-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    verbLevelActive = btn.dataset.level;
    renderVerbs(document.getElementById('verbSearch').value);
  });
});

// ═══════════════════════════════════════
// RENDER WORD BANK — ADJECTIVES
// ═══════════════════════════════════════
let adjLevelActive = 'all';

function renderAdjectives(filter = '') {
  const tbody = document.getElementById('adjTableBody');
  const filtered = wordBank.adjectives.filter(a => {
    const matchText = a.german.toLowerCase().includes(filter.toLowerCase()) ||
                      a.english.toLowerCase().includes(filter.toLowerCase());
    const matchLevel = adjLevelActive === 'all' || String(a.level) === adjLevelActive;
    return matchText && matchLevel;
  });

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:1.5rem">No adjectives found for this filter.</td></tr>`;
    return;
  }

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
document.querySelectorAll('#adjLevelFilter .level-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#adjLevelFilter .level-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    adjLevelActive = btn.dataset.level;
    renderAdjectives(document.getElementById('adjSearch').value);
  });
});

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
// WORD OF THE DAY
// ═══════════════════════════════════════
const wotdAllWords = [
  ...wordBank.nouns.map(n => ({
    de: `${n.article} ${n.german}`, en: n.english, article: n.article,
    type: 'noun', plural: n.plural, opposite: n.opposite || ''
  })),
  ...wordBank.verbs.map(v => ({
    de: v.infinitive, en: v.english, article: '',
    type: 'verb', verbType: v.type,
    ichForm: v.conjugations['ich'],
    erForm: v.conjugations['er/sie/es']
  })),
  ...wordBank.adjectives.map(a => ({
    de: a.german, en: a.english, article: '',
    type: 'adjective', comparative: a.comparative, superlative: a.superlative,
    opposite: a.opposite || ''
  }))
];

let wotdCurrentWord = null;

function showWotd(word) {
  wotdCurrentWord = word;
  const deEl = document.getElementById('wotdDe');
  const enEl = document.getElementById('wotdEn');
  if (!deEl || !enEl) return;
  if (word.article) {
    deEl.innerHTML = `<span class="wotd-article ${word.article}-text">${word.article}</span> ${word.de.replace(/^\S+\s/, '')}`;
  } else {
    deEl.textContent = word.de;
  }
  enEl.textContent = '— ' + word.en;
}

function openWotdModal(word) {
  const overlay = document.getElementById('wotdModalOverlay');
  const body    = document.getElementById('wotdModalBody');
  if (!overlay || !body || !word) return;

  // Build the word display
  let wordDisplay = '';
  if (word.article) {
    wordDisplay = `<span class="wotd-modal-article ${word.article}-text">${word.article}</span>`;
  }

  // Build detail rows
  const rows = [];
  rows.push(`<div class="wotd-modal-row">
    <span class="wotd-modal-row-label">Type</span>
    <span class="wotd-modal-row-value">${word.type}</span>
  </div>`);

  if (word.type === 'noun') {
    if (word.plural) rows.push(`<div class="wotd-modal-row">
      <span class="wotd-modal-row-label">Plural</span>
      <span class="wotd-modal-row-value">${word.plural}</span>
    </div>`);
    if (word.opposite) rows.push(`<div class="wotd-modal-row">
      <span class="wotd-modal-row-label">Opposite</span>
      <span class="wotd-modal-row-value">${word.opposite}</span>
    </div>`);
  } else if (word.type === 'verb') {
    rows.push(`<div class="wotd-modal-row">
      <span class="wotd-modal-row-label">ich form</span>
      <span class="wotd-modal-row-value">${word.ichForm || '—'}</span>
    </div>`);
    rows.push(`<div class="wotd-modal-row">
      <span class="wotd-modal-row-label">er/sie/es</span>
      <span class="wotd-modal-row-value">${word.erForm || '—'}</span>
    </div>`);
    rows.push(`<div class="wotd-modal-row">
      <span class="wotd-modal-row-label">Conjugation</span>
      <span class="wotd-modal-row-value">${word.verbType}</span>
    </div>`);
  } else if (word.type === 'adjective') {
    rows.push(`<div class="wotd-modal-row">
      <span class="wotd-modal-row-label">Comparative</span>
      <span class="wotd-modal-row-value">${word.comparative}</span>
    </div>`);
    rows.push(`<div class="wotd-modal-row">
      <span class="wotd-modal-row-label">Superlative</span>
      <span class="wotd-modal-row-value">${word.superlative}</span>
    </div>`);
    if (word.opposite) rows.push(`<div class="wotd-modal-row">
      <span class="wotd-modal-row-label">Opposite</span>
      <span class="wotd-modal-row-value">${word.opposite}</span>
    </div>`);
  }

  body.innerHTML = `
    <div class="wotd-modal-word">
      <span class="wotd-modal-de">${wordDisplay}${word.article ? word.de.replace(/^\S+\s/, '') : word.de}</span>
      <span class="wotd-modal-en">${word.en}</span>
    </div>
    ${rows.join('')}
  `;

  overlay.classList.add('open');
}

function closeWotdModal() {
  document.getElementById('wotdModalOverlay')?.classList.remove('open');
}

function pickWotd() {
  const saved = localStorage.getItem('deutschar-wotd');
  const savedDate = localStorage.getItem('deutschar-wotd-date');
  const today = new Date().toDateString();
  if (saved && savedDate === today) {
    showWotd(JSON.parse(saved));
  } else {
    const word = wotdAllWords[Math.floor(Math.random() * wotdAllWords.length)];
    localStorage.setItem('deutschar-wotd', JSON.stringify(word));
    localStorage.setItem('deutschar-wotd-date', today);
    showWotd(word);
  }
}

const wotdNewBtn = document.getElementById('wotdNewBtn');
if (wotdNewBtn) {
  wotdNewBtn.addEventListener('click', () => {
    const word = wotdAllWords[Math.floor(Math.random() * wotdAllWords.length)];
    localStorage.setItem('deutschar-wotd', JSON.stringify(word));
    localStorage.setItem('deutschar-wotd-date', new Date().toDateString());
    showWotd(word);
  });
}

const wotdLearnBtn = document.getElementById('wotdLearnBtn');
if (wotdLearnBtn) wotdLearnBtn.addEventListener('click', () => openWotdModal(wotdCurrentWord));

document.getElementById('wotdModalClose')?.addEventListener('click', closeWotdModal);
document.getElementById('wotdModalOverlay')?.addEventListener('click', e => {
  if (e.target === e.currentTarget) closeWotdModal();
});

pickWotd();

// ═══════════════════════════════════════
// BOOKMARKS
// ═══════════════════════════════════════
function getBookmarks() {
  try { return JSON.parse(localStorage.getItem('deutschar-bookmarks') || '[]'); }
  catch { return []; }
}
function saveBookmarks(bm) {
  localStorage.setItem('deutschar-bookmarks', JSON.stringify(bm));
}

function renderBookmarksPanel() {
  const list = document.getElementById('bookmarksList');
  const btn = document.getElementById('topbarBookmarkBtn');
  const dashBm = document.getElementById('dashBookmarks');
  const bm = getBookmarks();
  if (!list) return;
  if (dashBm) dashBm.textContent = bm.length;
  const bmBar = document.getElementById('dashBookmarksBar');
  if (bmBar) bmBar.style.width = Math.min((bm.length / 10) * 100, 100) + '%';
  if (btn) btn.classList.toggle('has-bookmarks', bm.length > 0);
  if (!bm.length) {
    list.innerHTML = '<p class="bookmarks-empty">No bookmarks yet. Click ☆ on any section to save it.</p>';
    return;
  }
  list.innerHTML = bm.map(b => `
    <a href="#${b.id}" class="bookmark-item" onclick="closeBookmarksPanel()">
      <span class="bookmark-item-icon">⭐</span>
      <span>${b.title}</span>
    </a>
  `).join('');
}

function injectBookmarkButtons() {
  document.querySelectorAll('section.card[id]').forEach(section => {
    const titleGroup = section.querySelector('.card-title-group');
    const header = section.querySelector('.card-header');
    if (!titleGroup || !header) return;
    if (header.querySelector('.bookmark-btn')) return;
    const btn = document.createElement('button');
    btn.className = 'bookmark-btn';
    btn.setAttribute('data-section-id', section.id);
    btn.title = 'Bookmark this section';
    const bm = getBookmarks();
    const isBookmarked = bm.some(b => b.id === section.id);
    btn.textContent = isBookmarked ? '⭐' : '☆';
    if (isBookmarked) btn.classList.add('bookmarked');
    btn.addEventListener('click', () => toggleBookmark(section, btn));
    // Append to card-controls if exists, else create one
    let controls = header.querySelector('.card-controls');
    if (!controls) {
      controls = document.createElement('div');
      controls.className = 'card-controls';
      header.appendChild(controls);
    }
    controls.appendChild(btn);
  });
}

function toggleBookmark(section, btn) {
  const id = section.id;
  const title = section.querySelector('.card-title')?.textContent || id;
  let bm = getBookmarks();
  const idx = bm.findIndex(b => b.id === id);
  if (idx === -1) {
    bm.push({ id, title });
    btn.textContent = '⭐';
    btn.classList.add('bookmarked');
  } else {
    bm.splice(idx, 1);
    btn.textContent = '☆';
    btn.classList.remove('bookmarked');
  }
  saveBookmarks(bm);
  renderBookmarksPanel();
}

function closeBookmarksPanel() {
  document.getElementById('bookmarksPanel')?.classList.remove('open');
}

const topbarBookmarkBtn = document.getElementById('topbarBookmarkBtn');
const bookmarksPanel = document.getElementById('bookmarksPanel');
const bookmarksClose = document.getElementById('bookmarksClose');

if (topbarBookmarkBtn) topbarBookmarkBtn.addEventListener('click', () => {
  bookmarksPanel?.classList.toggle('open');
  renderBookmarksPanel();
});
if (bookmarksClose) bookmarksClose.addEventListener('click', closeBookmarksPanel);

injectBookmarkButtons();
renderBookmarksPanel();

// ═══════════════════════════════════════
// CTRL+K GLOBAL SEARCH OVERLAY
// ═══════════════════════════════════════
const searchOverlay = document.getElementById('searchOverlay');
const overlayInput  = document.getElementById('overlaySearchInput');
const overlayResults = document.getElementById('overlaySearchResults');

// Section nav index
const sectionIndex = [
  { id: 'alphabet-section',         title: 'Alphabet & Pronunciation',        type: 'Basics' },
  { id: 'numbers-section',          title: 'Numbers — Zahlen',                type: 'Basics' },
  { id: 'greetings-section',        title: 'Greetings — Begrüßungen',         type: 'Basics' },
  { id: 'colors-section',           title: 'Colors — Farben',                 type: 'Basics' },
  { id: 'days-section',             title: 'Days & Months',                   type: 'Basics' },
  { id: 'time-section',             title: 'Time Expressions — die Zeit',     type: 'Basics' },
  { id: 'articles-section',         title: 'Articles — der / die / das',      type: 'Grammar' },
  { id: 'negation-section',         title: 'Negation — nicht & kein',          type: 'Grammar' },
  { id: 'cases-section',            title: 'Cases — Die Fälle',               type: 'Grammar' },
  { id: 'conjugation-section',      title: 'Verb Conjugation',                type: 'Grammar' },
  { id: 'praeteritum-section',      title: 'Simple Past — Präteritum',        type: 'Grammar' },
  { id: 'modal-section',            title: 'Modal Verbs',                     type: 'Grammar' },
  { id: 'imperative-section',       title: 'Imperative — Der Imperativ',       type: 'Grammar' },
  { id: 'wordorder-section',        title: 'Word Order',                      type: 'Grammar' },
  { id: 'wfragen-section',          title: 'W-Questions — W-Fragen',          type: 'Grammar' },
  { id: 'separable-section',        title: 'Separable Verbs',                 type: 'Grammar' },
  { id: 'reflexive-section',        title: 'Reflexive Verbs — Reflexive Verben', type: 'Grammar' },
  { id: 'prepositions-section',     title: 'Local Prepositions',              type: 'Grammar' },
  { id: 'adjectives-grammar-section', title: 'Adjective Endings',            type: 'Grammar' },
  { id: 'perfect-section',          title: 'Perfect Tense — Perfekt',         type: 'Grammar' },
  { id: 'passive-section',          title: 'Passive Voice — Passiv',          type: 'Grammar' },
  { id: 'konjunktiv-section',       title: 'Konjunktiv II',                   type: 'Grammar' },
  { id: 'subconj-section',          title: 'Subordinating Conjunctions',      type: 'Grammar' },
  { id: 'relative-section',         title: 'Relative Clauses',                type: 'Grammar' },
  { id: 'ordinals-section',         title: 'Ordinal Numbers',                 type: 'Grammar' },
  { id: 'nouns-section',            title: 'Nouns — Nomen',                   type: 'Vocabulary' },
  { id: 'verbs-section',            title: 'Verbs — Verben',                  type: 'Vocabulary' },
  { id: 'adj-section',              title: 'Adjectives — Adjektive',          type: 'Vocabulary' },
  { id: 'fruits-section',           title: 'Fruits — Früchte',                type: 'Vocabulary' },
  { id: 'adverbs-section',          title: 'Adverbs — Adverbien',             type: 'Vocabulary' },
  { id: 'rooms-section',            title: 'Rooms & Furniture',               type: 'Vocabulary' },
  { id: 'food-section',             title: 'Food & Drinks',                   type: 'Vocabulary' },
  { id: 'jobs-section',             title: 'Jobs & Professions',              type: 'Vocabulary' },
  { id: 'clothing-section',         title: 'Clothing & Shopping',             type: 'Vocabulary' },
  { id: 'opposites-section',        title: 'Opposites — Gegenteile',          type: 'Vocabulary' },
  { id: 'countries-section',        title: 'Countries — Länder',              type: 'Vocabulary' },
  { id: 'weather-section',          title: 'Weather — das Wetter',            type: 'Vocabulary' },
  { id: 'body-section',             title: 'Body Parts — der Körper',         type: 'Vocabulary' },
  { id: 'family-section',           title: 'Family — die Familie',            type: 'Vocabulary' },
  { id: 'animals-section',          title: 'Animals — die Tiere',             type: 'Vocabulary' },
  { id: 'transport-section',        title: 'Transport — Verkehrsmittel',      type: 'Vocabulary' },
  { id: 'school-section',           title: 'School & University',             type: 'Vocabulary' },
  { id: 'tech-section',             title: 'Technology & Social Media',       type: 'Vocabulary' },
  { id: 'travel-section',           title: 'Travel — Reisen',                 type: 'Phrases' },
  { id: 'phrasebook-section',       title: 'Phrasebook — Gespräche',          type: 'Phrases' },
  { id: 'wordsearch-section',       title: 'Word Search',                     type: 'Tool' },
  { id: 'genderquiz-section',       title: 'Gender Quiz',                     type: 'Tool' },
  { id: 'verbconjugator-section',   title: 'Verb Conjugator',                 type: 'Tool' },
  { id: 'flashcard-section',        title: 'Flashcards',                      type: 'Tool' },
  { id: 'fitb-section',             title: 'Fill in the Blank',               type: 'Tool' },
  { id: 'matching-section',         title: 'Matching Game',                   type: 'Tool' },
  { id: 'schreibprufer-section',    title: 'Schreibprüfer · AI Writing Checker', type: 'Tool' },
];

function openSearchOverlay() {
  searchOverlay?.classList.add('open');
  overlayInput?.focus();
  overlayInput && (overlayInput.value = '');
  renderOverlayResults('');
}
function closeSearchOverlay() {
  searchOverlay?.classList.remove('open');
}

function renderOverlayResults(q) {
  if (!overlayResults) return;
  if (!q) {
    overlayResults.innerHTML = '<p class="search-modal-hint">Type to search across all vocabulary and grammar…</p>';
    return;
  }
  const ql = q.toLowerCase();
  const results = [];

  // Sections
  sectionIndex.forEach(s => {
    if (s.title.toLowerCase().includes(ql)) {
      results.push({ href: '#' + s.id, type: s.type, de: s.title, en: '' });
    }
  });

  // Word bank
  wordBank.nouns.forEach(n => {
    if (n.german.toLowerCase().includes(ql) || n.english.toLowerCase().includes(ql)) {
      results.push({ href: '#nouns-section', type: 'noun', de: `${n.article} ${n.german}`, en: n.english });
    }
  });
  wordBank.verbs.forEach(v => {
    if (v.infinitive.toLowerCase().includes(ql) || v.english.toLowerCase().includes(ql)) {
      results.push({ href: '#verbs-section', type: 'verb', de: v.infinitive, en: v.english });
    }
  });
  wordBank.adjectives.forEach(a => {
    if (a.german.toLowerCase().includes(ql) || a.english.toLowerCase().includes(ql)) {
      results.push({ href: '#adj-section', type: 'adjective', de: a.german, en: a.english });
    }
  });

  if (!results.length) {
    overlayResults.innerHTML = '<p class="search-modal-hint">No results found. Try a different search.</p>';
    return;
  }

  overlayResults.innerHTML = results.slice(0, 20).map(r => `
    <a href="${r.href}" class="search-modal-item" onclick="closeSearchOverlay()">
      <span class="smi-type">${r.type}</span>
      <span class="smi-de">${r.de}</span>
      ${r.en ? `<span class="smi-en">${r.en}</span>` : ''}
    </a>
  `).join('');
}

if (overlayInput) overlayInput.addEventListener('input', e => renderOverlayResults(e.target.value));
document.getElementById('overlaySearchClose')?.addEventListener('click', closeSearchOverlay);
document.getElementById('searchTrigger')?.addEventListener('click', openSearchOverlay);
searchOverlay?.addEventListener('click', e => { if (e.target === searchOverlay) closeSearchOverlay(); });

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearchOverlay(); }
  if (e.key === 'Escape') {
    closeSearchOverlay();
    closeWotdModal();
  }
});

// ═══════════════════════════════════════
// STATS DASHBOARD
// ═══════════════════════════════════════
function getVisitedSections() {
  try { return JSON.parse(localStorage.getItem('deutschar-visited') || '[]'); }
  catch { return []; }
}
function getDoneSections() {
  try { return JSON.parse(localStorage.getItem('deutschar-done') || '[]'); }
  catch { return []; }
}

function updateDashboard() {
  const visited = getVisitedSections();
  const done = getDoneSections();
  const total = sectionIndex.length;
  const bm = getBookmarks();

  const dashS = document.getElementById('dashSections');
  const dashSBar = document.getElementById('dashSectionsBar');
  const dashD = document.getElementById('dashDone');
  const dashDBar = document.getElementById('dashDoneBar');
  const dashBm = document.getElementById('dashBookmarks');

  if (dashS) dashS.textContent = visited.length;
  if (dashSBar) dashSBar.style.width = Math.min((visited.length / total) * 100, 100) + '%';
  if (dashD) dashD.textContent = done.length;
  if (dashDBar) dashDBar.style.width = Math.min((done.length / total) * 100, 100) + '%';
  if (dashBm) dashBm.textContent = bm.length;
}

// Track visited sections via scroll spy
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  let current = '';
  document.querySelectorAll('section[id]').forEach(sec => {
    if (sec.offsetTop <= scrollY) current = sec.id;
  });
  if (current) {
    const visited = getVisitedSections();
    if (!visited.includes(current)) {
      visited.push(current);
      localStorage.setItem('deutschar-visited', JSON.stringify(visited));
      updateDashboard();
    }
  }
}, { passive: true });

updateDashboard();

// ═══════════════════════════════════════
// SECTION DONE / PROGRESS TRACKER
// ═══════════════════════════════════════
function injectProgressChecks() {
  document.querySelectorAll('section.card[id]').forEach(section => {
    const body = section.querySelector('.card-body');
    if (!body || body.querySelector('.progress-tracker-wrap')) return;
    const done = getDoneSections();
    const isDone = done.includes(section.id);
    const wrap = document.createElement('div');
    wrap.className = 'progress-tracker-wrap';
    wrap.innerHTML = `
      <button class="progress-check ${isDone ? 'done' : ''}" data-section-id="${section.id}" title="Mark as done">✓</button>
      <div class="section-progress-bar"><div class="section-progress-fill" style="width:${isDone ? '100' : '0'}%"></div></div>
      <span class="progress-label">${isDone ? 'Done ✓' : 'Mark done'}</span>
    `;
    wrap.querySelector('.progress-check').addEventListener('click', function() {
      let done = getDoneSections();
      const id = this.dataset.sectionId;
      const fill = wrap.querySelector('.section-progress-fill');
      const label = wrap.querySelector('.progress-label');
      if (done.includes(id)) {
        done = done.filter(d => d !== id);
        this.classList.remove('done');
        if (fill) fill.style.width = '0%';
        if (label) label.textContent = 'Mark done';
      } else {
        done.push(id);
        this.classList.add('done');
        if (fill) fill.style.width = '100%';
        if (label) label.textContent = 'Done ✓';
      }
      localStorage.setItem('deutschar-done', JSON.stringify(done));
      updateDashboard();
    });
    body.appendChild(wrap);
  });
}
injectProgressChecks();

// ═══════════════════════════════════════
// FLASHCARDS TOOL
// ═══════════════════════════════════════
let fcDeck = [], fcIndex = 0, fcFlipped = false;

function buildFCDeck(filter) {
  if (filter === 'nouns') {
    fcDeck = wordBank.nouns.map(n => ({
      front: `${n.article} ${n.german}`,
      back: n.english,
      article: n.article,
      extra: `Plural: ${n.plural}`
    }));
  } else if (filter === 'verbs') {
    fcDeck = wordBank.verbs.map(v => ({
      front: v.infinitive,
      back: v.english,
      article: '',
      extra: `ich: ${v.conjugations['ich']}`
    }));
  } else {
    fcDeck = wordBank.adjectives.map(a => ({
      front: a.german,
      back: a.english,
      article: '',
      extra: `comp: ${a.comparative}`
    }));
  }
  // Shuffle
  for (let i = fcDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcDeck[i], fcDeck[j]] = [fcDeck[j], fcDeck[i]];
  }
  fcIndex = 0;
  fcFlipped = false;
  renderFC();
}

function renderFC() {
  const card = document.getElementById('flashcard');
  const wordEl = document.getElementById('fcWord');
  const articleEl = document.getElementById('fcArticle');
  const translEl = document.getElementById('fcTranslation');
  const extraEl = document.getElementById('fcExtra');
  const counter = document.getElementById('fcCounter');
  if (!card || !fcDeck.length) return;
  const item = fcDeck[fcIndex];
  card.classList.remove('flipped');
  fcFlipped = false;
  if (wordEl) wordEl.textContent = item.front;
  if (articleEl) { articleEl.textContent = item.article; articleEl.className = `flashcard-article ${item.article ? item.article + '-text' : ''}`; }
  if (translEl) translEl.textContent = item.back;
  if (extraEl) extraEl.textContent = item.extra || '';
  if (counter) counter.textContent = `${fcIndex + 1} / ${fcDeck.length}`;
}

document.querySelectorAll('[data-fc-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-fc-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    buildFCDeck(btn.dataset.fcFilter);
  });
});

document.getElementById('flashcard')?.addEventListener('click', () => {
  const card = document.getElementById('flashcard');
  if (!card) return;
  fcFlipped = !fcFlipped;
  card.classList.toggle('flipped', fcFlipped);
});

document.getElementById('fcNext')?.addEventListener('click', () => {
  if (!fcDeck.length) return;
  fcIndex = (fcIndex + 1) % fcDeck.length;
  renderFC();
});
document.getElementById('fcPrev')?.addEventListener('click', () => {
  if (!fcDeck.length) return;
  fcIndex = (fcIndex - 1 + fcDeck.length) % fcDeck.length;
  renderFC();
});

// ── Swipe to flip / navigate flashcard ──
(function() {
  const fc = document.getElementById('flashcard');
  if (!fc) return;
  let touchStartX = 0, touchStartY = 0;
  fc.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });
  fc.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    const absDx = Math.abs(dx), absDy = Math.abs(dy);
    // Swipe left → next card
    if (absDx > 40 && absDx > absDy) {
      if (dx < 0) { fcIndex = (fcIndex + 1) % fcDeck.length; renderFC(); }
      else         { fcIndex = (fcIndex - 1 + fcDeck.length) % fcDeck.length; renderFC(); }
    }
    // Swipe up or down (or tap — small movement) → flip
    else if (absDy < 20 && absDx < 20) {
      // tap — let click handler manage it
    } else if (absDy > 30 && absDy > absDx) {
      fcFlipped = !fcFlipped;
      fc.classList.toggle('flipped', fcFlipped);
    }
  }, { passive: true });
})();

buildFCDeck('nouns');

// ═══════════════════════════════════════
// FILL IN THE BLANK TOOL
// ═══════════════════════════════════════
const fitbExercises = [
  { sentence: 'Ich ___ aus Deutschland.', answer: 'komme', hint: 'kommen (ich form)' },
  { sentence: '___ heißt Maria.', answer: 'Sie', hint: 'feminine pronoun' },
  { sentence: 'Das Buch ___ sehr interessant.', answer: 'ist', hint: 'sein (es form)' },
  { sentence: 'Wir ___ heute ins Kino.', answer: 'gehen', hint: 'to go (wir form)' },
  { sentence: 'Er ___ einen Kaffee.', answer: 'trinkt', hint: 'trinken (er form)' },
  { sentence: 'Ich ___ Deutsch seit zwei Jahren.', answer: 'lerne', hint: 'lernen (ich form)' },
  { sentence: 'Das Auto ___ rot.', answer: 'ist', hint: 'sein (es form)' },
  { sentence: 'Sie ___ viel Deutsch.', answer: 'spricht', hint: 'sprechen (sie form) — irregular!' },
  { sentence: '___ Hund heißt Bello.', answer: 'Der', hint: 'Hund is masculine' },
  { sentence: 'Ich ___ gerne Musik.', answer: 'höre', hint: 'hören (ich form)' },
  { sentence: 'Wann ___ du auf?', answer: 'stehst', hint: 'aufstehen — separable verb' },
  { sentence: 'Er hat das Buch ___.', answer: 'gelesen', hint: 'lesen — Partizip II' },
  { sentence: '___ Wetter ist heute schön.', answer: 'Das', hint: 'Wetter is neuter' },
  { sentence: 'Kannst du mir ___?', answer: 'helfen', hint: 'infinitive of helfen' },
  { sentence: 'Wir ___ morgen nach Berlin.', answer: 'fahren', hint: 'fahren (wir form)' },
  { sentence: 'Ich ___ einen Bruder und eine Schwester.', answer: 'habe', hint: 'haben (ich form)' },
  { sentence: 'Die Kinder ___ im Garten.', answer: 'spielen', hint: 'spielen (sie/plural form)' },
  { sentence: 'Das Essen ___ sehr lecker!', answer: 'schmeckt', hint: 'schmecken (es form)' },
  { sentence: 'Er ___ gestern in Berlin gewesen.', answer: 'ist', hint: 'sein — helper for Perfekt' },
  { sentence: 'Ich ___ das nicht tun.', answer: 'kann', hint: 'können (ich form) — modal verb' },
];

let fitbIndex = 0, fitbScore = 0, fitbAttempts = 0;

function loadFitb() {
  const ex = fitbExercises[fitbIndex % fitbExercises.length];
  const container = document.getElementById('fitbSentence');
  if (!container) return;
  container.innerHTML = ex.sentence.replace('___', `
    <span class="fitb-blank" id="fitbBlankWrap">
      <input type="text" id="fitbInput" autocomplete="off" spellcheck="false" placeholder="???">
    </span>
  `);
  const input = document.getElementById('fitbInput');
  if (input) {
    // Only auto-focus if the section is already visible (user scrolled to it)
    const section = document.getElementById('fitb-section');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight) input.focus();
    }
    input.addEventListener('keydown', e => { if (e.key === 'Enter') checkFitb(); });
  }
}

function checkFitb() {
  const input = document.getElementById('fitbInput');
  const blank = document.getElementById('fitbBlankWrap');
  if (!input || !blank) return;
  // Guard: already checked (input disabled)
  if (input.disabled) return;
  const ex = fitbExercises[fitbIndex % fitbExercises.length];
  const val = input.value.trim();
  if (!val) return;
  fitbAttempts++;
  const correct = val.toLowerCase() === ex.answer.toLowerCase();
  if (correct) {
    fitbScore++;
    blank.classList.add('correct');
  } else {
    blank.classList.add('wrong');
    input.value = ex.answer;
  }
  input.disabled = true;
  document.getElementById('fitbScore').textContent = fitbScore;
  document.getElementById('fitbTotal').textContent = fitbAttempts;
}

function nextFitb() {
  fitbIndex = (fitbIndex + 1) % fitbExercises.length;
  loadFitb();
}

document.getElementById('fitbCheckBtn')?.addEventListener('click', checkFitb);
document.getElementById('fitbNextBtn')?.addEventListener('click', nextFitb);
document.getElementById('fitbHintBtn')?.addEventListener('click', () => {
  const ex = fitbExercises[fitbIndex % fitbExercises.length];
  const streak = document.getElementById('fitbStreak');
  if (streak) streak.textContent = '💡 Hint: ' + ex.hint;
});

loadFitb();

// ═══════════════════════════════════════
// MATCHING GAME TOOL
// ═══════════════════════════════════════
let matchPairs = [], matchSelected = null, matchMatched = 0;

function buildMatchRound() {
  const pool = [...wordBank.nouns].sort(() => Math.random() - 0.5).slice(0, 6);
  matchPairs = pool.map(n => ({ de: `${n.article} ${n.german}`, en: n.english }));
  matchMatched = 0;
  matchSelected = null;
  document.getElementById('matchScore').textContent = 0;
  document.getElementById('matchTotal').textContent = matchPairs.length;
  document.getElementById('matchSuccess').textContent = '';

  const deCol = document.getElementById('matchColDE');
  const enCol = document.getElementById('matchColEN');
  if (!deCol || !enCol) return;

  const deItems = [...matchPairs].sort(() => Math.random() - 0.5);
  const enItems = [...matchPairs].sort(() => Math.random() - 0.5);

  deCol.innerHTML = deItems.map(p => `<div class="match-card" data-match-de="${p.de}" data-match-key="${p.en}">${p.de}</div>`).join('');
  enCol.innerHTML = enItems.map(p => `<div class="match-card" data-match-en="${p.en}" data-match-key="${p.en}">${p.en}</div>`).join('');

  document.querySelectorAll('.match-card').forEach(card => {
    card.addEventListener('click', handleMatchClick);
  });
}

function handleMatchClick(e) {
  const card = e.currentTarget;
  if (card.classList.contains('matched') || card.classList.contains('selected')) return;

  if (!matchSelected) {
    card.classList.add('selected');
    matchSelected = card;
    return;
  }

  // Check if they match
  const keyA = matchSelected.dataset.matchKey;
  const keyB = card.dataset.matchKey;

  if (keyA === keyB && matchSelected !== card) {
    // Correct
    matchSelected.classList.remove('selected');
    matchSelected.classList.add('matched');
    card.classList.add('matched');
    matchMatched++;
    document.getElementById('matchScore').textContent = matchMatched;
    matchSelected = null;
    if (matchMatched === matchPairs.length) {
      const success = document.getElementById('matchSuccess');
      if (success) success.innerHTML = '<div class="match-success">🎉 Ausgezeichnet! All matched!</div>';
    }
  } else {
    // Wrong
    card.classList.add('wrong');
    matchSelected.classList.add('wrong');
    const prevSelected = matchSelected;
    matchSelected = null;
    setTimeout(() => {
      card.classList.remove('wrong', 'selected');
      prevSelected.classList.remove('wrong', 'selected');
    }, 600);
  }
}

document.getElementById('matchNewBtn')?.addEventListener('click', buildMatchRound);
buildMatchRound();

// ═══════════════════════════════════════
// KEYBOARD SHORTCUTS
// ═══════════════════════════════════════
document.addEventListener('keydown', e => {
  // Skip if user is typing in an input/textarea
  const tag = document.activeElement?.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;

  // Flashcard navigation: ← → to navigate, Space/Enter to flip
  const fcSection = document.getElementById('flashcard-section');
  if (fcSection) {
    const rect = fcSection.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      if (e.key === 'ArrowRight') { e.preventDefault(); document.getElementById('fcNext')?.click(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); document.getElementById('fcPrev')?.click(); }
      if (e.key === ' ' || e.key === 'Enter') {
        if (document.activeElement?.closest('#flashcard-section')) {
          e.preventDefault(); document.getElementById('flashcard')?.click();
        }
      }
    }
  }
});

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
console.log('%cDeutschAR.EDU v3.0 — Made by Abdelrahman Mohamed', 'color:#F0C233;font-weight:bold;font-size:14px;');


// ═══════════════════════════════════════
// AUDIO PRONUNCIATION (Web Speech API)
// ═══════════════════════════════════════

function speakDE(text) {
  if (!window.speechSynthesis) return;
  const cleaned = text.trim();
  if (!cleaned) return;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Chrome race condition fix: brief delay after cancel() before speak()
  setTimeout(() => {
    const utt = new SpeechSynthesisUtterance(cleaned);
    utt.lang = 'de-DE';
    utt.rate = 0.88;
    utt.pitch = 1;

    // Try to find a German voice; fall back to default
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith('de')) || null;
    if (deVoice) utt.voice = deVoice;

    utt.onend = () => {
      document.querySelectorAll('.speak-btn.speaking').forEach(b => b.classList.remove('speaking'));
    };
    utt.onerror = () => {
      document.querySelectorAll('.speak-btn.speaking').forEach(b => b.classList.remove('speaking'));
    };

    window.speechSynthesis.speak(utt);
  }, 50);
}

function makeSpeakBtn(text) {
  const btn = document.createElement('button');
  btn.className = 'speak-btn';
  btn.setAttribute('aria-label', 'Pronounce: ' + text);
  btn.setAttribute('data-speak', text);
  btn.innerHTML = '<svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"/></svg>';
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    document.querySelectorAll('.speak-btn.speaking').forEach(b => b.classList.remove('speaking'));
    this.classList.add('speaking');
    speakDE(this.getAttribute('data-speak'));
  });
  return btn;
}

function injectSpeakButtons() {
  // Vocab rows (.de spans)
  document.querySelectorAll('.vocab-row .de, .pg-item .de').forEach(el => {
    if (el.querySelector('.speak-btn') || el.parentElement.querySelector('.speak-btn')) return;
    const text = el.textContent.trim();
    if (!text || text.length < 1) return;
    el.appendChild(makeSpeakBtn(text));
  });

  // Phrase cards (.phrase-de)
  document.querySelectorAll('.phrase-de').forEach(el => {
    if (el.querySelector('.speak-btn')) return;
    const text = el.textContent.trim();
    if (!text) return;
    el.appendChild(makeSpeakBtn(text));
  });

  // Color items
  document.querySelectorAll('.color-item .de').forEach(el => {
    if (el.querySelector('.speak-btn')) return;
    el.appendChild(makeSpeakBtn(el.textContent.trim()));
  });

  // Alphabet table — letter name column (td:nth-child(2) in pronunciation table)
  document.querySelectorAll('.pronunciation-table-wrap tbody tr').forEach(row => {
    const letterCell = row.querySelector('td:first-child');
    const exampleCell = row.querySelector('td:last-child');
    if (letterCell && !letterCell.querySelector('.speak-btn')) {
      const letterText = letterCell.textContent.replace(/\s+/g, ' ').trim().split(' ')[0]; // just the letter
      if (letterText) letterCell.appendChild(makeSpeakBtn(letterText));
    }
    if (exampleCell && !exampleCell.querySelector('.speak-btn')) {
      const exText = exampleCell.textContent.trim().split(' ')[0]; // first word of example
      if (exText && exText.length > 1) exampleCell.appendChild(makeSpeakBtn(exText));
    }
  });
}

// Inject on load, and re-inject after dynamic renders
// Hook into tbody/container mutation for dynamic content
const _speakObserver = new MutationObserver(() => {
  document.querySelectorAll('#nounTableBody td[data-speak-ready="false"], #verbsContainer [data-speak-ready="false"]').forEach(el => {
    el.removeAttribute('data-speak-ready');
    el.appendChild(makeSpeakBtn(el.textContent.trim()));
  });
  // Re-run general inject after dynamic content changes
  injectSpeakButtons();
});

document.addEventListener('DOMContentLoaded', () => {
  injectSpeakButtons();
  // Re-inject after a short delay in case of async renders
  setTimeout(injectSpeakButtons, 600);
  const nounTbody = document.getElementById('nounTableBody');
  const verbContainer = document.getElementById('verbsContainer');
  if (nounTbody) _speakObserver.observe(nounTbody, { childList: true, subtree: false });
  if (verbContainer) _speakObserver.observe(verbContainer, { childList: true, subtree: false });

  // Pre-load voices (Chrome loads them asynchronously — must be triggered early)
  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }
});


// ═══════════════════════════════════════
// SCHREIBPRÜFER — AI Writing Checker
// ═══════════════════════════════════════

(function () {
  // ── Element refs (resolved after DOM is ready) ──
  let _ta, _pFill, _minMarker, _wcCurrent, _wcRange, _statusMsg, _inputSec;

  function _init() {
    _ta        = document.getElementById('germanInput');
    _pFill     = document.getElementById('progressFill');
    _minMarker = document.getElementById('minMarker');
    _wcCurrent = document.getElementById('wcCurrent');
    _wcRange   = document.getElementById('wcRange');
    _statusMsg = document.getElementById('limitStatusMsg');
    _inputSec  = document.getElementById('inputSection');

    if (!_ta) return; // section not present in this build — abort

    _ta.addEventListener('input', updateLimitUI);
    _ta.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') checkParagraph();
    });
    updateLimitUI();
  }

  // ── Helpers ──
  function countWords(s) {
    return s.trim() === '' ? 0 : s.trim().split(/\s+/).length;
  }

  function getLimits() {
    return {
      mn: Math.max(0, parseInt(document.getElementById('minWords').value) || 0),
      mx: Math.max(0, parseInt(document.getElementById('maxWords').value) || 0)
    };
  }

  // ── Word-limit UI ──
  function updateLimitUI() {
    const wc = countWords(_ta.value);
    const { mn, mx } = getLimits();
    const hasLimit = mn > 0 || mx > 0;

    _wcCurrent.textContent = `${wc} word${wc !== 1 ? 's' : ''}`;

    if (!hasLimit) {
      _pFill.style.width      = '0%';
      _pFill.style.background = 'var(--chk-muted)';
      _wcRange.textContent    = 'No limit';
      _statusMsg.textContent  = '';
      _wcCurrent.className    = 'chk-wc-current';
      _inputSec.className     = 'chk-input-section';
      _minMarker.style.display = 'none';
      return;
    }

    const ceil    = mx > 0 ? mx : (mn > 0 ? mn * 2.5 : 100);
    const fillPct = Math.min((wc / ceil) * 100, 100);
    _pFill.style.width = `${fillPct}%`;

    if (mn > 0 && mx > 0) {
      const markerPct = Math.min((mn / ceil) * 100, 98);
      _minMarker.style.display = 'block';
      _minMarker.style.left    = `${markerPct}%`;
    } else {
      _minMarker.style.display = 'none';
    }

    _wcRange.textContent = mn > 0 && mx > 0 ? `${mn}–${mx} words`
      : mn > 0 ? `min ${mn} words`
      : `max ${mx} words`;

    const overMax  = mx > 0 && wc > mx;
    const underMin = mn > 0 && wc < mn;

    if (overMax) {
      _pFill.style.background = 'var(--chk-red)';
      _wcCurrent.className    = 'chk-wc-current chk-wc-over';
      _inputSec.className     = 'chk-input-section chk-over-limit';
      const over = wc - mx;
      _statusMsg.style.color  = 'var(--chk-red)';
      _statusMsg.textContent  = `⚠ ${over} word${over !== 1 ? 's' : ''} over the limit — trim your paragraph`;
    } else if (underMin) {
      _pFill.style.background = wc > 0 ? 'var(--chk-orange)' : 'var(--chk-muted)';
      _wcCurrent.className    = 'chk-wc-current chk-wc-under';
      _inputSec.className     = 'chk-input-section chk-under-limit';
      const need = mn - wc;
      _statusMsg.style.color  = 'var(--chk-orange)';
      _statusMsg.textContent  = `✎ ${need} more word${need !== 1 ? 's' : ''} to reach the minimum`;
    } else {
      _pFill.style.background = 'var(--chk-green)';
      _wcCurrent.className    = 'chk-wc-current chk-wc-ok';
      _inputSec.className     = 'chk-input-section chk-in-limit';
      _statusMsg.style.color  = 'var(--chk-green)';
      if (mx > 0) {
        const rem = mx - wc;
        _statusMsg.textContent = `✓ Within limit · ${rem} word${rem !== 1 ? 's' : ''} remaining`;
      } else {
        _statusMsg.textContent = '✓ Minimum word count reached';
      }
    }
  }

  // ── Global helpers called from onclick attributes ──
  window.setPreset = function (min, max, btn) {
    document.getElementById('minWords').value = min;
    document.getElementById('maxWords').value = max;
    clearPresets();
    if (btn) btn.classList.add('active');
    updateLimitUI();
  };

  window.clearPresets = function () {
    document.querySelectorAll('.chk-preset').forEach(b => b.classList.remove('active'));
  };

  window.updateLimitUI = updateLimitUI;

  window.switchView = function (mode) {
    const sv = document.getElementById('chkSingleView');
    const dv = document.getElementById('chkDiffView');
    if (!sv || !dv) return;
    sv.classList.toggle('hidden', mode !== 'single');
    dv.classList.toggle('show',   mode === 'diff');
    document.getElementById('chkTabSingle').classList.toggle('active', mode === 'single');
    document.getElementById('chkTabDiff').classList.toggle('active',   mode === 'diff');
  };

  window.copyCorrection = function () {
    const el = document.getElementById('chkCorrectedText');
    if (!el) return;
    navigator.clipboard.writeText(el.textContent).then(() => {
      const btn = document.getElementById('chkCopyBtn');
      if (!btn) return;
      btn.textContent = '✓ Copied!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = '⎘ Copy'; btn.classList.remove('copied'); }, 2000);
    });
  };

  window.resetForm = function () {
    const rs = document.getElementById('resultsSection');
    if (rs) { rs.classList.remove('active'); rs.innerHTML = ''; }
    if (_ta) _ta.focus();
    updateLimitUI();
  };

  // ── Score helper ──
  function scoreClass(s) {
    if (s >= 85) return 'excellent';
    if (s >= 70) return 'good';
    if (s >= 50) return 'fair';
    return 'poor';
  }

  // ── HTML escaper ──
  function esc(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── Error display ──
  function showError(msg) {
    const box = document.getElementById('errorBox');
    const ls  = document.getElementById('loadingState');
    const btn = document.getElementById('checkBtn');
    if (box) { box.textContent = msg; box.classList.add('active'); }
    if (ls)  ls.classList.remove('active');
    if (btn) btn.disabled = false;
  }

  // ── Render results ──
  function renderResults(r, original) {
    const section = document.getElementById('resultsSection');
    if (!section) return;
    const sc = scoreClass(r.score);

    const icons = { grammar: 'G', spelling: 'S', style: '✦', praise: '✓' };

    const fbHTML = (r.feedback || []).map(fb => `
      <div class="chk-feedback-item ${esc(fb.type)}">
        <div class="chk-feedback-icon chk-icon-${esc(fb.type)}">${icons[fb.type] || '?'}</div>
        <div>
          <div class="chk-error-type chk-type-${esc(fb.type)}">${esc(fb.type).toUpperCase()}</div>
          <div class="chk-fb-original">
            ${fb.correction
              ? `<del>${esc(fb.original)}</del> → <ins>${esc(fb.correction)}</ins>`
              : `<span style="color:var(--chk-green)">${esc(fb.original)}</span>`}
          </div>
          <div class="chk-fb-explanation">${esc(fb.explanation)}</div>
        </div>
      </div>`).join('');

    const gc  = (r.feedback || []).filter(f => f.type === 'grammar').length;
    const sc2 = (r.feedback || []).filter(f => f.type === 'spelling').length;
    const stc = (r.feedback || []).filter(f => f.type === 'style').length;
    const pc  = (r.feedback || []).filter(f => f.type === 'praise').length;
    const corrected = r.corrected_paragraph || original;

    section.innerHTML = `
      <div class="chk-score-header">
        <div class="chk-score-ring ${sc}">${r.score != null ? r.score : '?'}</div>
        <div class="chk-score-info">
          <h2>${esc(r.level)} · ${esc(r.grade)}</h2>
          <p>${esc(r.summary)}</p>
          <div class="chk-score-pills">
            ${gc  ? `<span class="chk-score-pill pill-red">${gc} grammar</span>` : ''}
            ${sc2 ? `<span class="chk-score-pill pill-orange">${sc2} spelling</span>` : ''}
            ${stc ? `<span class="chk-score-pill pill-blue">${stc} style</span>` : ''}
            ${pc  ? `<span class="chk-score-pill pill-green">${pc} ✓ correct</span>` : ''}
          </div>
        </div>
      </div>

      <div class="chk-corrected-section">
        <div class="chk-corrected-header">
          <div class="chk-corrected-header-left">✓ Corrected Version</div>
          <button class="chk-copy-btn" id="chkCopyBtn" onclick="copyCorrection()">⎘ Copy</button>
        </div>
        <div class="chk-corrected-body">
          <div class="chk-diff-toggle">
            <button class="chk-diff-tab active" id="chkTabSingle" onclick="switchView('single')">Corrected</button>
            <button class="chk-diff-tab" id="chkTabDiff" onclick="switchView('diff')">Side by Side</button>
          </div>
          <div id="chkSingleView" class="chk-single-view">
            <div class="chk-corrected-text" id="chkCorrectedText">${esc(corrected)}</div>
          </div>
          <div id="chkDiffView" class="chk-diff-view">
            <div class="chk-diff-grid">
              <div>
                <div class="chk-diff-col-label chk-label-original">✗ Your original</div>
                <div class="chk-diff-col-text">${esc(original)}</div>
              </div>
              <div>
                <div class="chk-diff-col-label chk-label-corrected">✓ Corrected</div>
                <div class="chk-diff-col-text">${esc(corrected)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      ${(r.feedback || []).length > 0 ? `
      <div class="chk-annotated-section">
        <div class="chk-section-title">📝 Detailed Feedback</div>
        <div class="chk-feedback-list">${fbHTML}</div>
        <div class="chk-legend">
          <span>Legend:</span>
          <span class="chk-legend-item"><span class="chk-legend-line" style="background:var(--chk-red)"></span>Grammar</span>
          <span class="chk-legend-item"><span class="chk-legend-line" style="background:var(--chk-orange)"></span>Spelling</span>
          <span class="chk-legend-item"><span class="chk-legend-line" style="background:var(--chk-blue)"></span>Style</span>
          <span class="chk-legend-item"><span class="chk-legend-line" style="background:var(--chk-green)"></span>Correct ✓</span>
        </div>
      </div>` : `
      <div class="chk-success-box">
        <h3>🎉 Ausgezeichnet! No errors found</h3>
        <p>Your German paragraph had no detectable errors. Excellent work — keep this up for your exams!</p>
      </div>`}

      <div class="chk-tip-box">
        <h3>💡 Lerntipp · Study Tip</h3>
        <p>${esc(r.tip || '')}</p>
      </div>

      <div class="chk-annotated-section">
        <div class="chk-section-title">📊 Overall Assessment</div>
        <div style="padding:1.2rem 1.5rem;font-size:0.95rem;color:var(--chk-text2);line-height:1.7;">${esc(r.overall_comment || '')}</div>
      </div>

      <button class="chk-try-again-btn" onclick="resetForm()">↩ Try another paragraph</button>
    `;

    section.classList.add('active');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ── Main check function ──
  window.checkParagraph = async function () {
    if (!_ta) return;
    const text = _ta.value.trim();
    if (!text || text.length < 8) {
      showError('Please write at least a sentence in German before checking.');
      return;
    }

    const { mn, mx } = getLimits();
    const wc = countWords(text);

    if (mx > 0 && wc > mx) {
      showError(`Your paragraph is ${wc - mx} word${wc - mx !== 1 ? 's' : ''} over the limit (max ${mx}). Please shorten it before checking.`);
      return;
    }
    if (mn > 0 && wc < mn) {
      showError(`Your paragraph needs ${mn - wc} more word${mn - wc !== 1 ? 's' : ''} to meet the minimum (min ${mn}). Keep writing!`);
      return;
    }

    const topic   = document.getElementById('topicSelect').value;
    const btn     = document.getElementById('checkBtn');
    const loading = document.getElementById('loadingState');
    const results = document.getElementById('resultsSection');
    const errBox  = document.getElementById('errorBox');

    btn.disabled = true;
    loading.classList.add('active');
    results.classList.remove('active');
    results.innerHTML = '';
    errBox.classList.remove('active');

    const sysPrompt = `You are an expert German language teacher analyzing a student's German writing for exam preparation. Return ONLY a valid JSON object — no markdown fences, no extra text.

JSON structure:
{
  "score": 0-100,
  "grade": "A"/"B"/"C"/"D",
  "level": "Excellent"/"Good"/"Fair"/"Needs Work",
  "summary": "One encouraging sentence summarizing overall performance",
  "corrected_paragraph": "The FULL paragraph rewritten with every error fixed. Preserve the student's original meaning and sentence structure. Only change incorrect elements.",
  "feedback": [
    {
      "type": "grammar"/"spelling"/"style"/"praise",
      "original": "exact word or phrase from the student's text",
      "correction": "corrected version, or null if type is praise",
      "explanation": "Brief, clear English explanation of the rule or why it is good"
    }
  ],
  "tip": "One specific German grammar or vocabulary study tip relevant to this student's mistakes",
  "overall_comment": "2-3 sentences: what they did well, what to focus on next"
}

Rules:
- Topic context: ${topic}
- corrected_paragraph: rewrite the ENTIRE original text with all fixes applied, in the same order. Do not add new content.
- Grammar: cases (Nominativ/Akkusativ/Dativ), verb conjugation, V2 word order, adjective endings, correct article (der/die/das)
- Spelling: Umlaut (ä/ö/ü/Ä/Ö/Ü), ß vs ss, ALL German nouns must be capitalized
- Style: vocabulary choice, sentence variety, register, connectors
- Praise: highlight at least 2 genuinely correct things if any exist — be specific
- Be thorough yet encouraging — this is for exam prep`;

    try {
      // Retrieve API key stored by user — never hardcoded in source
      const apiKey = localStorage.getItem('deutschar-api-key') || '';
      if (!apiKey) {
        const entered = window.prompt(
          'DeutschAR.EDU — Schreibprüfer\n\nEnter your Anthropic API key to use the AI checker.\nIt will be saved locally in your browser only.'
        );
        if (!entered || !entered.trim()) {
          showError('API key required to run the checker. Please reload and enter your key.');
          return;
        }
        localStorage.setItem('deutschar-api-key', entered.trim());
      }
      const activeKey = localStorage.getItem('deutschar-api-key');

      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': activeKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1500,
          system: sysPrompt,
          messages: [{ role: 'user', content: `Analyze this German text:\n\n"${text}"` }]
        })
      });

      if (!resp.ok) {
        if (resp.status === 401 || resp.status === 403) {
          localStorage.removeItem('deutschar-api-key');
          throw new Error('Invalid API key. Please reload the page to enter a valid key.');
        }
        throw new Error(`API error ${resp.status}`);
      }

      const data  = await resp.json();
      const raw   = (data.content || []).map(b => b.text || '').join('');
      const clean = raw.replace(/```json|```/g, '').trim();
      const result = JSON.parse(clean);
      renderResults(result, text);
    } catch (err) {
      console.error('[Schreibprüfer]', err);
      showError(err.message || 'Something went wrong during analysis. Please try again.');
    } finally {
      btn.disabled = false;
      loading.classList.remove('active');
    }
  };

  // ── Bootstrap on DOMContentLoaded ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    _init(); // Script loaded after DOM — init immediately
  }
})();
