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
    { article: "der", german: "Mann",    plural: "Männer",     english: "man",       level: 1 },
    { article: "die", german: "Frau",    plural: "Frauen",     english: "woman",     level: 1 },
    { article: "das", german: "Kind",    plural: "Kinder",     english: "child",     level: 1 },
    { article: "der", german: "Tag",     plural: "Tage",       english: "day",       level: 1 },
    { article: "die", german: "Zeit",    plural: "Zeiten",     english: "time",      level: 1 },
    { article: "das", german: "Jahr",    plural: "Jahre",      english: "year",      level: 1 },
    { article: "der", german: "Mensch",  plural: "Menschen",   english: "person/human", level: 1 },
    { article: "die", german: "Arbeit",  plural: "Arbeiten",   english: "work/job",  level: 1 },
    { article: "das", german: "Wasser",  plural: "—",          english: "water",     level: 1 },
    { article: "der", german: "Weg",     plural: "Wege",       english: "way/path",  level: 1 },
    { article: "das", german: "Haus",    plural: "Häuser",     english: "house",     level: 1 },
    { article: "die", german: "Hand",    plural: "Hände",      english: "hand",      level: 1 },
    // Level 2 — Common
    { article: "der", german: "Hund",    plural: "Hunde",      english: "dog",       level: 2 },
    { article: "die", german: "Katze",   plural: "Katzen",     english: "cat",       level: 2 },
    { article: "das", german: "Auto",    plural: "Autos",      english: "car",       level: 2 },
    { article: "das", german: "Buch",    plural: "Bücher",     english: "book",      level: 2 },
    { article: "die", german: "Schule",  plural: "Schulen",    english: "school",    level: 2 },
    { article: "der", german: "Tisch",   plural: "Tische",     english: "table",     level: 2 },
    { article: "die", german: "Stadt",   plural: "Städte",     english: "city",      level: 2 },
    { article: "das", german: "Geld",    plural: "—",          english: "money",     level: 2 },
    { article: "der", german: "Vater",   plural: "Väter",      english: "father",    level: 2 },
    { article: "die", german: "Mutter",  plural: "Mütter",     english: "mother",    level: 2 },
    { article: "der", german: "Bruder",  plural: "Brüder",     english: "brother",   level: 2 },
    { article: "die", german: "Schwester", plural: "Schwestern", english: "sister",  level: 2 },
    // Level 3 — Less common
    { article: "die", german: "Straße",  plural: "Straßen",    english: "street",    level: 3 },
    { article: "der", german: "Zug",     plural: "Züge",       english: "train",     level: 3 },
    { article: "das", german: "Fenster", plural: "Fenster",    english: "window",    level: 3 },
    { article: "die", german: "Küche",   plural: "Küchen",     english: "kitchen",   level: 3 },
    { article: "der", german: "Schlüssel", plural: "Schlüssel", english: "key",      level: 3 },
    { article: "das", german: "Krankenhaus", plural: "Krankenhäuser", english: "hospital", level: 3 },
  ],

  verbs: [
    // Level 1 — Most essential
    {
      infinitive: "sein", english: "to be", type: "irregular", level: 1,
      conjugations: { "ich": "bin", "du": "bist", "er/sie/es": "ist", "wir": "sind", "ihr": "seid", "sie/Sie": "sind" }
    },
    {
      infinitive: "haben", english: "to have", type: "irregular", level: 1,
      conjugations: { "ich": "habe", "du": "hast", "er/sie/es": "hat", "wir": "haben", "ihr": "habt", "sie/Sie": "haben" }
    },
    {
      infinitive: "werden", english: "to become / will", type: "irregular", level: 1,
      conjugations: { "ich": "werde", "du": "wirst", "er/sie/es": "wird", "wir": "werden", "ihr": "werdet", "sie/Sie": "werden" }
    },
    {
      infinitive: "können", english: "can / to be able to", type: "irregular", level: 1,
      conjugations: { "ich": "kann", "du": "kannst", "er/sie/es": "kann", "wir": "können", "ihr": "könnt", "sie/Sie": "können" }
    },
    {
      infinitive: "machen", english: "to make / to do", type: "regular", level: 1,
      conjugations: { "ich": "mache", "du": "machst", "er/sie/es": "macht", "wir": "machen", "ihr": "macht", "sie/Sie": "machen" }
    },
    {
      infinitive: "gehen", english: "to go", type: "irregular", level: 1,
      conjugations: { "ich": "gehe", "du": "gehst", "er/sie/es": "geht", "wir": "gehen", "ihr": "geht", "sie/Sie": "gehen" }
    },
    // Level 2 — Common
    {
      infinitive: "kommen", english: "to come", type: "irregular", level: 2,
      conjugations: { "ich": "komme", "du": "kommst", "er/sie/es": "kommt", "wir": "kommen", "ihr": "kommt", "sie/Sie": "kommen" }
    },
    {
      infinitive: "sagen", english: "to say", type: "regular", level: 2,
      conjugations: { "ich": "sage", "du": "sagst", "er/sie/es": "sagt", "wir": "sagen", "ihr": "sagt", "sie/Sie": "sagen" }
    },
    {
      infinitive: "wissen", english: "to know (fact)", type: "irregular", level: 2,
      conjugations: { "ich": "weiß", "du": "weißt", "er/sie/es": "weiß", "wir": "wissen", "ihr": "wisst", "sie/Sie": "wissen" }
    },
    {
      infinitive: "sehen", english: "to see", type: "irregular", level: 2,
      conjugations: { "ich": "sehe", "du": "siehst", "er/sie/es": "sieht", "wir": "sehen", "ihr": "seht", "sie/Sie": "sehen" }
    },
    {
      infinitive: "lernen", english: "to learn", type: "regular", level: 2,
      conjugations: { "ich": "lerne", "du": "lernst", "er/sie/es": "lernt", "wir": "lernen", "ihr": "lernt", "sie/Sie": "lernen" }
    },
    {
      infinitive: "essen", english: "to eat", type: "irregular", level: 2,
      conjugations: { "ich": "esse", "du": "isst", "er/sie/es": "isst", "wir": "essen", "ihr": "esst", "sie/Sie": "essen" }
    },
    // Level 3 — Less common
    {
      infinitive: "arbeiten", english: "to work", type: "regular", level: 3,
      conjugations: { "ich": "arbeite", "du": "arbeitest", "er/sie/es": "arbeitet", "wir": "arbeiten", "ihr": "arbeitet", "sie/Sie": "arbeiten" }
    },
    {
      infinitive: "schreiben", english: "to write", type: "irregular", level: 3,
      conjugations: { "ich": "schreibe", "du": "schreibst", "er/sie/es": "schreibt", "wir": "schreiben", "ihr": "schreibt", "sie/Sie": "schreiben" }
    },
    {
      infinitive: "sprechen", english: "to speak", type: "irregular", level: 3,
      conjugations: { "ich": "spreche", "du": "sprichst", "er/sie/es": "spricht", "wir": "sprechen", "ihr": "sprecht", "sie/Sie": "sprechen" }
    },
  ],

  adjectives: [
    // Level 1 — Most common
    { german: "gut",      english: "good",       comparative: "besser",   superlative: "am besten",    level: 1 },
    { german: "groß",     english: "big / tall",  comparative: "größer",   superlative: "am größten",   level: 1 },
    { german: "klein",    english: "small",       comparative: "kleiner",  superlative: "am kleinsten", level: 1 },
    { german: "alt",      english: "old",         comparative: "älter",    superlative: "am ältesten",  level: 1 },
    { german: "neu",      english: "new",         comparative: "neuer",    superlative: "am neuesten",  level: 1 },
    { german: "schnell",  english: "fast / quick",comparative: "schneller",superlative: "am schnellsten",level:1 },
    // Level 2 — Common
    { german: "schön",    english: "beautiful",   comparative: "schöner",  superlative: "am schönsten", level: 2 },
    { german: "kalt",     english: "cold",        comparative: "kälter",   superlative: "am kältesten", level: 2 },
    { german: "warm",     english: "warm",        comparative: "wärmer",   superlative: "am wärmsten",  level: 2 },
    { german: "lang",     english: "long",        comparative: "länger",   superlative: "am längsten",  level: 2 },
    { german: "stark",    english: "strong",      comparative: "stärker",  superlative: "am stärksten", level: 2 },
    { german: "wichtig",  english: "important",   comparative: "wichtiger",superlative: "am wichtigsten",level:2},
    // Level 3 — Less common
    { german: "müde",     english: "tired",       comparative: "müder",    superlative: "am müdesten",  level: 3 },
    { german: "schwierig",english: "difficult",   comparative: "schwieriger",superlative:"am schwierigsten",level:3},
    { german: "einfach",  english: "simple / easy",comparative:"einfacher",superlative:"am einfachsten",level:3},
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
      <table class="verb-conj-table">
        ${Object.entries(verb.conjugations).map(([pro, form]) => `
          <tr>
            <td class="vct-pronoun">${pro}</td>
            <td class="vct-form ${verb.type === 'irregular' ? 'irregular' : ''}">${form}</td>
          </tr>
        `).join('')}
      </table>
    </div>
  `;
}

// ═══════════════════════════════════════
// SIDEBAR SEARCH
// ═══════════════════════════════════════
document.getElementById('sidebarSearch').addEventListener('input', function() {
  const q = this.value.toLowerCase();
  document.querySelectorAll('.nav-item').forEach(item => {
    const match = item.textContent.toLowerCase().includes(q);
    item.style.display = match ? 'block' : 'none';
  });
});

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
console.log('%cDeutschAR.EDU v1.0 — Built by AR', 'color:#F0C233;font-weight:bold;font-size:14px;');
