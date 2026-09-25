// ─── SHARED UI UTILITIES ───

// Global state
window.APP = {
  theme: 'office',
  difficulty: 'simple',
  sentenceIndices: {},
  storyCollapsed: {},
  customNames: {},
  collected: [],
};

// ─── CHARACTER NAMES ───
// Default casts. Any future topic tab registers its own cast here so it
// automatically gets rename support.
window.NAME_SETS = {
  office: ['Lars', 'Lotte', 'Thomas'],
  kids:   ['Krishna', 'Sita', 'Hanuman'],
};

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}
function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

APP.customNames = loadJSON('leervlaams_names', {});
APP.collected = loadJSON('leervlaams_collected', []);

function getCastNames(cast) {
  const custom = APP.customNames[cast];
  const defaults = NAME_SETS[cast] || [];
  return (custom && custom.length === defaults.length) ? custom : defaults;
}

// Runtime name substitution: data files keep the default names; this swaps
// in whatever the user has customised, so no sentence text needs editing.
function substituteNames(text) {
  if (!text) return text;
  let out = text;
  Object.keys(NAME_SETS).forEach(cast => {
    const defaults = NAME_SETS[cast];
    const customs = getCastNames(cast);
    defaults.forEach((def, i) => {
      const custom = customs[i];
      if (!custom || custom === def) return;
      out = out.replace(new RegExp('\\b' + def + '\\b', 'g'), custom);
    });
  });
  return out;
}

function escapeAttr(text) {
  return String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function buildNamesFormHtml() {
  return Object.keys(NAME_SETS).map(cast => {
    const label = cast === 'office' ? '🏢 Office' : (cast === 'kids' ? '👧 Kids' : cast);
    const customs = getCastNames(cast);
    const rows = NAME_SETS[cast].map((def, i) =>
      `<label class="names-row">${def}<input type="text" id="name_${cast}_${i}" value="${escapeAttr(customs[i])}" placeholder="${def}"></label>`
    ).join('');
    return `<div class="names-group"><div class="names-group-title">${label}</div>${rows}</div>`;
  }).join('');
}

function toggleNamesPanel(force) {
  const overlay = document.getElementById('names-overlay');
  if (!overlay) return;
  const open = force !== undefined ? force : !overlay.classList.contains('open');
  if (open) document.getElementById('names-form').innerHTML = buildNamesFormHtml();
  overlay.classList.toggle('open', open);
}

function saveNamesFromForm() {
  const next = {};
  Object.keys(NAME_SETS).forEach(cast => {
    next[cast] = NAME_SETS[cast].map((def, i) => {
      const el = document.getElementById(`name_${cast}_${i}`);
      const v = el ? el.value.trim() : '';
      return v || def;
    });
  });
  APP.customNames = next;
  saveJSON('leervlaams_names', APP.customNames);
  toggleNamesPanel(false);
  refreshAllTabs();
}

function resetNames() {
  APP.customNames = {};
  saveJSON('leervlaams_names', APP.customNames);
  document.getElementById('names-form').innerHTML = buildNamesFormHtml();
  refreshAllTabs();
}

// Re-renders everything that depends on theme/names, and rebuilds the
// search index from scratch so it doesn't accumulate duplicate entries
// every time a theme/name change re-registers the same sentences.
function refreshAllTabs() {
  ALL_SENTENCES = [];
  if (typeof renderVerbs === 'function') renderVerbs();
  if (window.MINI_TABS) {
    Object.keys(MINI_TABS).forEach(k => {
      renderMiniTab(k);
      registerMiniSentences(k);
    });
  }
}

// ─── COLLECT LIST ───
// A free-standing scratchpad, completely independent of any word, verb or
// sentence card in the app — just notes jotted down while browsing, to
// hand back later so more cards/verbs can be built from them.
function addCollectedNote() {
  const input = document.getElementById('collect-note-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  APP.collected.push({ text, ts: Date.now() });
  saveJSON('leervlaams_collected', APP.collected);
  input.value = '';
  input.focus();
  renderCollectPanel();
  updateCollectBadge();
}

function updateCollectBadge() {
  const badge = document.getElementById('collect-count');
  if (badge) badge.textContent = APP.collected.length;
}

function renderCollectPanel() {
  const body = document.getElementById('collect-list-body');
  if (!body) return;
  if (!APP.collected.length) {
    body.innerHTML = '<div class="collect-empty">Nothing noted yet — type something above and hit Add.</div>';
    return;
  }
  body.innerHTML = APP.collected.slice().reverse().map(e => `
    <div class="collect-item">
      <div class="collect-item-text">${e.text}</div>
      <button class="collect-remove" onclick="removeCollected(${e.ts})">✕</button>
    </div>`).join('');
}

function removeCollected(ts) {
  APP.collected = APP.collected.filter(e => e.ts !== ts);
  saveJSON('leervlaams_collected', APP.collected);
  renderCollectPanel();
  updateCollectBadge();
}

function toggleCollectPanel(force) {
  const overlay = document.getElementById('collect-overlay');
  if (!overlay) return;
  const open = force !== undefined ? force : !overlay.classList.contains('open');
  if (open) renderCollectPanel();
  overlay.classList.toggle('open', open);
}

function formatCollectedText() {
  return APP.collected.map(e => '- ' + e.text).join('\n');
}

function copyCollected() {
  const text = formatCollectedText();
  if (navigator.clipboard) navigator.clipboard.writeText(text);
}

function downloadCollected() {
  const blob = new Blob([formatCollectedText()], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'leervlaams-collected.txt';
  a.click();
  URL.revokeObjectURL(url);
}

// ─── HIGHLIGHT ENGINE ───
const HIGHLIGHT_RULES = [
  { words: ['niet','geen','nooit','nergens','niemand','niets','noch'], cls: 'hl-neg' },
  { words: ['omdat','maar','terwijl','dus','want','hoewel','zodat','tenzij','nadat','voordat','zodra','toen','als','wanneer','dat','en','of','toch'], cls: 'hl-conn' },
  { words: ['meer','minder','beter','slechter','groter','kleiner','sneller','langzamer','mooier','lelijker','duurder','goedkoper','ouder','jonger','vroeger','later','harder','zachter','verder','dichterbij','het beste','het grootst','het snelst','het mooist','het meest','het minst'], cls: 'hl-comp' },
  { words: ['me','mij','je','jou','hem','haar','ons','jullie','ze','hen','hun','iemand','iets','ergens'], cls: 'hl-pron' },
  { words: ['mijn','jouw','zijn','ons','onze','jullie','hun'], cls: 'hl-poss' },
];

function highlightSentence(text) {
  if (!text || text === '—') return text;
  // Tokenise preserving spaces and punctuation
  const tokens = text.split(/(\s+|[.,!?;:])/);
  return tokens.map(token => {
    const lower = token.toLowerCase().replace(/[.,!?;:]/g, '');
    for (const rule of HIGHLIGHT_RULES) {
      if (rule.words.includes(lower)) {
        return `<span class="${rule.cls}">${token}</span>`;
      }
    }
    return token;
  }).join('');
}

// ─── SENTENCE DISPLAY ───
function getSentences(data, colKey, theme, diff) {
  try {
    const s = data[colKey]?.[theme]?.[diff];
    if (!s || !s.length || s[0].nl === '—') return null;
    return s;
  } catch(e) { return null; }
}

// A MINI_TABS item's `sentences` is either a flat array (theme-agnostic) or
// { office:[...], kids:[...] } once a tab has theme-specific content.
function resolveMiniSentences(item) {
  const s = item.sentences;
  if (!s) return [];
  if (Array.isArray(s)) return s;
  return s[APP.theme] || s.office || [];
}

function renderVisuals(visuals, hasNeg) {
  if (!visuals || !visuals.length) return '';
  let emojis = [...visuals];
  if (hasNeg && !emojis.includes('❌')) emojis.push('❌');
  return `<div class="sent-visuals">${emojis.slice(0,5).join(' ')}</div>`;
}

function isNegative(nl) {
  const neg = ['niet','geen','nooit','nergens','niemand','niets'];
  return neg.some(n => nl.toLowerCase().includes(' '+n) || nl.toLowerCase().startsWith(n));
}

function buildSentenceCard(sent, idx, total, cellId, callbacks) {
  const nl = substituteNames(sent.nl);
  const en = substituteNames(sent.en);
  const hasNeg = isNegative(nl);
  const visualHtml = renderVisuals(sent.visuals, hasNeg);
  const nlHtml = highlightSentence(nl);

  return `
    <div class="sent-card" id="${cellId}_card">
      ${visualHtml}
      <div class="sent-nl">${nlHtml}</div>
      <div class="sent-en" id="${cellId}_en">${en}</div>
      <div class="sent-btns">
        <button class="sent-btn" onclick="${callbacks.next}">🔄 Next</button>
        <button class="sent-btn" onclick="${callbacks.translate}">🦁 Translate</button>
        <button class="sent-btn" onclick="${callbacks.close}">✕</button>
        <span class="sent-idx">${idx+1}/${total}</span>
      </div>
    </div>`;
}

// ─── FILL-IN-THE-BLANK EXERCISE ───
function buildBlankExercise(sentence, answer, cellId) {
  const nl = substituteNames(sentence);
  const hitIdx = nl.toLowerCase().indexOf(answer.toLowerCase());
  const blanked = hitIdx < 0 ? nl
    : nl.slice(0, hitIdx) + '▁'.repeat(Math.max(answer.length, 3)) + nl.slice(hitIdx + answer.length);
  const answerJs = escapeAttr(JSON.stringify(answer));
  return `
    <div class="sent-card exercise-card" id="${cellId}_ex">
      <div class="sent-nl">${blanked}</div>
      <div class="exercise-row">
        <input type="text" class="exercise-input" id="${cellId}_input" placeholder="type the missing word(s)">
        <button class="sent-btn" onclick="checkBlankExercise('${cellId}', ${answerJs})">Check</button>
        <button class="sent-btn" onclick="revealBlankExercise('${cellId}', ${answerJs})">Reveal</button>
      </div>
      <div class="exercise-feedback" id="${cellId}_feedback"></div>
    </div>`;
}

// Whichever exercise view is currently on screen re-points this so a
// "Check" click updates the right score tracker, without checkBlankExercise
// needing to know which tab/verb view it's in.
let activeExerciseUpdater = null;

function checkBlankExercise(cellId, answer) {
  const input = document.getElementById(cellId + '_input');
  const feedback = document.getElementById(cellId + '_feedback');
  if (!input || !feedback) return;
  const correct = input.value.trim().toLowerCase() === answer.trim().toLowerCase();
  feedback.textContent = correct ? '✅ Correct!' : '❌ Not quite — try again or reveal.';
  feedback.className = 'exercise-feedback ' + (correct ? 'ok' : 'bad');
  if (typeof activeExerciseUpdater === 'function') activeExerciseUpdater(correct);
}

function revealBlankExercise(cellId, answer) {
  const feedback = document.getElementById(cellId + '_feedback');
  if (feedback) {
    feedback.textContent = '💡 Answer: ' + answer;
    feedback.className = 'exercise-feedback';
  }
}

function toggleTranslate(cellId) {
  const el = document.getElementById(cellId+'_en');
  if (el) el.classList.toggle('show');
}

// ─── STORY INTRO ───
function buildStoryIntro(config) {
  const { id, title, body, chars } = config;
  const charsHtml = chars.map(c => `<div class="story-char">${c.emoji} ${substituteNames(c.name)}</div>`).join('');
  return `
    <div class="story-intro" onclick="toggleStory('${id}')">
      <div class="story-intro-header">
        <span class="story-intro-title">${title}</span>
        <span class="story-intro-toggle" id="${id}_tog">▲ collapse</span>
      </div>
      <div class="story-intro-body" id="${id}_body">
        <p>${substituteNames(body)}</p>
        <div class="story-chars">${charsHtml}</div>
      </div>
    </div>`;
}

function toggleStory(id) {
  const body = document.getElementById(id+'_body');
  const tog = document.getElementById(id+'_tog');
  if (!body) return;
  body.classList.toggle('collapsed');
  tog.textContent = body.classList.contains('collapsed') ? '▼ expand' : '▲ collapse';
}

// ─── CATEGORY PICKER ───
function buildCatPicker(cats, selectedSet, onChange) {
  const wrap = document.createElement('div');
  wrap.className = 'cat-picker';
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (selectedSet.has(cat) ? ' sel' : '');
    btn.textContent = cat;
    btn.onclick = () => {
      if (selectedSet.has(cat)) { selectedSet.delete(cat); btn.classList.remove('sel'); }
      else { selectedSet.add(cat); btn.classList.add('sel'); }
      onChange();
    };
    wrap.appendChild(btn);
  });
  return wrap;
}

// ─── GLOBAL SEARCH ───
let ALL_SENTENCES = []; // populated by each tab on load

function registerSentences(entries) {
  // entries: [{tab, category, colLabel, sent}]
  ALL_SENTENCES.push(...entries);
}

function initSearch() {
  const input = document.getElementById('global-search');
  const results = document.getElementById('search-results');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { results.classList.remove('open'); return; }

    const matches = ALL_SENTENCES.filter(e =>
      e.sent.nl.toLowerCase().includes(q) ||
      e.sent.en.toLowerCase().includes(q)
    ).slice(0, 12);

    if (!matches.length) { results.classList.remove('open'); return; }

    results.innerHTML = matches.map(m => {
      const nl = substituteNames(m.sent.nl);
      const en = substituteNames(m.sent.en);
      const visuals = (m.sent.visuals || []).join(' ');
      const hasNeg = isNegative(nl);
      const vStr = hasNeg ? visuals + ' ❌' : visuals;
      return `
        <div class="search-result-item">
          ${vStr ? `<div class="sri-visuals">${vStr}</div>` : ''}
          <div class="sri-meta">${m.tab} › ${m.category} › ${m.colLabel}</div>
          <div class="sri-nl">${highlightSentence(nl)}</div>
          <div class="sri-en">${en}</div>
        </div>`;
    }).join('');
    results.classList.add('open');
  });

  document.addEventListener('click', e => {
    if (!results.contains(e.target) && e.target !== input) {
      results.classList.remove('open');
    }
  });
}

// ─── THEME / DIFFICULTY CONTROLS ───
function initControls() {
  document.querySelectorAll('[data-theme]').forEach(btn => {
    btn.addEventListener('click', () => {
      APP.theme = btn.dataset.theme;
      document.querySelectorAll('[data-theme]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.dispatchEvent(new Event('app:themechange'));
    });
  });

  document.querySelectorAll('[data-diff]').forEach(btn => {
    btn.addEventListener('click', () => {
      APP.difficulty = btn.dataset.diff;
      document.querySelectorAll('[data-diff]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.dispatchEvent(new Event('app:diffchange'));
    });
  });
}

// ─── TAB SWITCHING ───
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById('tab-'+target);
      if (panel) panel.classList.add('active');
    });
  });
}
