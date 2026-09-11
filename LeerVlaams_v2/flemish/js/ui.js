// ─── SHARED UI UTILITIES ───

// Global state
window.APP = {
  theme: 'office',
  difficulty: 'simple',
  sentenceIndices: {},
  storyCollapsed: {},
};

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
  const hasNeg = isNegative(sent.nl);
  const visualHtml = renderVisuals(sent.visuals, hasNeg);
  const nlHtml = highlightSentence(sent.nl);

  return `
    <div class="sent-card" id="${cellId}_card">
      ${visualHtml}
      <div class="sent-nl">${nlHtml}</div>
      <div class="sent-en" id="${cellId}_en">${sent.en}</div>
      <div class="sent-btns">
        <button class="sent-btn" onclick="${callbacks.next}">🔄 Next</button>
        <button class="sent-btn" onclick="${callbacks.translate}">🦁 Translate</button>
        <button class="sent-btn" onclick="${callbacks.close}">✕</button>
        <span class="sent-idx">${idx+1}/${total}</span>
      </div>
    </div>`;
}

function toggleTranslate(cellId) {
  const el = document.getElementById(cellId+'_en');
  if (el) el.classList.toggle('show');
}

// ─── STORY INTRO ───
function buildStoryIntro(config) {
  const { id, title, body, chars } = config;
  const charsHtml = chars.map(c => `<div class="story-char">${c.emoji} ${c.name}</div>`).join('');
  return `
    <div class="story-intro" onclick="toggleStory('${id}')">
      <div class="story-intro-header">
        <span class="story-intro-title">${title}</span>
        <span class="story-intro-toggle" id="${id}_tog">▲ collapse</span>
      </div>
      <div class="story-intro-body" id="${id}_body">
        <p>${body}</p>
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
      const visuals = (m.sent.visuals || []).join(' ');
      const hasNeg = isNegative(m.sent.nl);
      const vStr = hasNeg ? visuals + ' ❌' : visuals;
      return `
        <div class="search-result-item">
          ${vStr ? `<div class="sri-visuals">${vStr}</div>` : ''}
          <div class="sri-meta">${m.tab} › ${m.category} › ${m.colLabel}</div>
          <div class="sri-nl">${highlightSentence(m.sent.nl)}</div>
          <div class="sri-en">${m.sent.en}</div>
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
