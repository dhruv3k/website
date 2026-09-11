# LeerVlaams — Project Handover

## What is this?
A self-contained HTML-based Flemish Dutch learning app. The user is learning Flemish (Belgian Dutch) to communicate with office colleagues in Belgium. They have a child and want content for both contexts.

## Current state
- **Version:** LeerVlaams_v1.zip (delivered, working)
- **Opens:** Double-click `flemish/index.html` — no server needed, fully self-contained
- **Build process:** Edit source files → run Python build script → regenerates `index.html`

---

## File structure
```
flemish/
├── index.html          ← self-contained app (CSS+JS+data all inlined by build script)
├── style.css           ← shared styles
├── js/
│   └── ui.js           ← shared utilities (highlight engine, sentence card, search, story intro)
├── grammar/
│   └── verbs/
│       ├── data.js     ← verb data + sentences
│       └── tab.html    ← Tab 1 HTML + JS
└── topics/             ← empty folders ready for future tabs
    space/ sea/ birds/ travel/ food/ health/ shopping/ nature/ home/ school/
```

### Build script (run after any edit):
```python
# Reads style.css + js/ui.js + grammar/verbs/data.js + grammar/verbs/tab.html
# Inlines everything into flemish/index.html
# Then rezip: cd /home/claude && zip -r output/LeerVlaams.zip flemish/
```
The full build script is in the conversation history (last working version).

---

## App architecture

### Tab system
19 tabs total. Tab switching via `data-tab` buttons, panels via `id="tab-{name}"`.

### Global state (`window.APP`)
```javascript
{ theme: 'office', difficulty: 'simple', sentenceIndices: {}, storyCollapsed: {} }
```

### Theme/difficulty controls
- Theme: `office` | `kids` — fires `app:themechange` event
- Difficulty: `simple` | `natural` — fires `app:diffchange` event

### Sentence card pattern (ALL tabs use this)
- Tap cell → sentence appears, stays until changed
- 🔄 Next — cycles to next sentence
- 🦁 Translate — toggles English translation
- ✕ Close
- Big emoji cluster above sentence (max 5, following word order of sentence)
- ❌ auto-added for negative sentences
- Colour highlights: 🔴 negation, 🔵 connectors, 🟢 comparatives, 🟠 object pronouns, 🟣 possessives

### Global search
Searches all registered sentences across all tabs. `registerSentences(entries[])` called by each tab on load.

---

## Tab 1 — Verbs (partially complete)

### Columns (9 total)
| Key | Label | CSS class |
|-----|-------|-----------|
| infinitive | Infinitive (wij/jullie/zij form) | inf |
| ik_pres | ik present | pres |
| jij_pres | jij/je present | pres |
| hij_pres | hij/zij/het/u present | pres |
| ik_past | ik simple past | past |
| rest_past | rest simple past | past |
| participle | past participle + hebben/zijn badge | part |
| passive_pres | passive present | pass |
| passive_past | passive past | pass |

### Views
- **📊 Table** (default) — conjugation grid, click cell for sentence
- **🃏 Cards** — big emoji + verb name, click for sentence

### Category picker
Multi-select toggle buttons. Select All / Clear All. Fires `renderVerbs()`.

### Story intros
Per category, per theme. Collapsible. Characters:
- Office: Lars (developer), Lotte (manager), Thomas (intern) — Ghent tech company
- Kids: Krishna (curious boy), Sita (kind girl), Hanuman (powerful helpful friend)

### Sentence data structure
```javascript
verb.sentences[colKey][theme][difficulty] = [
  { nl: "Dutch sentence", en: "English translation", tags: ["connector","pronoun",...], visuals: ["🚲","🏢"] },
  { nl: "...", en: "...", tags: [], visuals: [] }
]
// 2 sentences per colKey × theme × difficulty combination
// Tags: connectors (omdat/maar/terwijl/dus/want/hoewel), pronouns (hem/haar/ons/iemand/niemand/iets/niets), "comparative"
// Visuals: emojis in word order of sentence, max 5. ❌ auto-added if sentence contains negation.
// "—" means not applicable (modal passives etc.)
```

### Verbs completed (6 of 39)
1. **zijn** (to be) — Being & Having
2. **hebben** (to have) — Being & Having
3. **worden** (to become) — Being & Having
4. **kunnen** (to be able to) — Modal Verbs
5. **gaan** (to go) — Movement
6. **werken** (to work) — Daily & Office Actions

### Verbs still needed (33)
**Being & Having:** (all done)

**Modal Verbs:** moeten, willen, mogen, zullen, hoeven

**Movement:** komen, lopen, fietsen, rijden, aankomen

**Communication:** zeggen, vertellen, spreken, praten, vragen, antwoorden, bellen, mailen

**Daily & Office Actions:** maken, doen, helpen, vergaderen, sturen, begrijpen, lezen, schrijven

**Perception & Thinking:** zien, horen, denken, weten, kennen, voelen, vinden

### Verb template (copy for each new verb)
```javascript
{
  cat: "Category", en: "to verb", nl: "werkwoord", emoji: "🔵",
  ik: "form", jij: "form", hij: "form",
  pastIk: "form", pastRest: "form",
  participle: "ge___d/t", aux: "hebben|zijn",
  pp: "wordt ___d/t",  // passive present, "—" if not applicable
  pp2: "werd ___d/t",  // passive past, "—" if not applicable
  sentences: {
    infinitive:   { office: { simple: [s1,s2], natural: [s1,s2] }, kids: { simple: [s1,s2], natural: [s1,s2] } },
    ik_pres:      { office: { simple: [s1,s2], natural: [s1,s2] }, kids: { simple: [s1,s2], natural: [s1,s2] } },
    jij_pres:     { ... },
    hij_pres:     { ... },
    ik_past:      { ... },
    rest_past:    { ... },
    participle:   { ... },
    passive_pres: { ... },  // use NA sentences if "—"
    passive_past: { ... },  // use NA sentences if "—"
  }
}
// NA sentence: { nl:"—", en:"Not applicable", tags:[], visuals:[] }
```

### Sentence quality rules
- **Verb-specific** — no generic templates. Each verb gets sentences that make natural sense for that verb.
- Simple: 6-9 words, include one object/indefinite pronoun naturally
- Natural: 10-15 words, include a connector (omdat/maar/terwijl/dus/want/hoewel) AND a comparative/superlative
- Office sentences: Lars, Lotte, Thomas in Ghent/Antwerp/Brussels tech context
- Kids sentences: Krishna, Sita, Hanuman in Flemish village/school context
- Visuals follow word order of sentence
- ❌ NOT added manually — auto-added by JS if sentence contains negation

---

## Tabs still to build (2–19)

### Tab 2 — Connectors, Questions & Discourse
**Sections:**
1. Coordinating connectors (en, maar, of, want, dus, toch, ook, zelfs) — no word order change
2. Subordinating connectors (omdat, als, wanneer, dat, terwijl, hoewel, zodat, tenzij, nadat, voordat, zodra, toen) — verb to END of clause (highlight visually)
3. Linking adverbs (daarom, daarna, daarvoor, daarmee, hiermee, hierin, hierover, hiervoor, echter, bovendien, tenslotte)
4. Question words (wie, wat, waar, wanneer, waarom, hoe, welke/welk, hoeveel, hoe lang, hoe ver, hoe vaak)

**Key feature:** Word order demo showing verb moving to end for subordinating connectors:
```
Main clause:    Lars werkt hard.
With omdat:     ...omdat Lars hard werkt.  ← verb highlighted at end
```

**OR logic for filtering** — selecting multiple tags shows sentences containing ANY of them (not ALL).

### Tab 3 — Pronouns
Four subtables:
- Subject: ik, je/jij, hij, zij(she), het, wij/we, jullie, zij(they), u
- Object: me/mij, je/jou, hem, haar, ons, jullie, ze/hen/hun
- Possessive: mijn, jouw/je, zijn, haar, ons/onze, jullie, hun — with de/het note for ons/onze
- Reflexive: me, je, zich, ons, je(plural), zich(formal)
- Indefinite: iemand, niemand, iets, niets, ergens, nergens, ooit, nooit, altijd, overal

### Tab 4 — Adjectives & Degrees
Columns: adjective | comparative | superlative
Categories:
- Appearance (groot, klein, mooi, lelijk, dik, dun)
- Personality (vriendelijk, slim, grappig, serieus, geduldig, aardig)
- Size & Quantity (veel, weinig, genoeg, half, leeg, vol)
- Speed & Effort (snel, langzaam, makkelijk, moeilijk, druk, rustig)
- Emotion & State (blij, moe, ziek, bang, boos, verdrietig)
- Quality (goed, slecht, nieuw, oud, duur, goedkoop)
- Nature & Description (warm, koud, nat, droog, donker, licht)
- Colours (rood, blauw, groen, geel, zwart, wit, oranje, paars, roze, bruin, grijs)
- Intensifiers sub-section (heel, erg, vrij, nogal, tamelijk, een beetje, te, zo, bijna, net, precies)

### Tab 5 — Determiners
Words: andere/ander, zelfde, eigen, beide, elk/elke, ieder/iedere, heel/hele, sommige, geen, veel, weinig
Note: niet vs geen rule explained here
Cross-ref: veel/weinig as intensifiers → Tab 4

### Tab 6 — Prepositions
Categories: Place (in, op, aan, bij, naast, achter, voor, onder, tussen, boven)
Direction (naar, van, uit, door, langs, rond, tegen)
Time (voor, na, om, tijdens, vanaf, tot)
Manner (met, zonder, door, via, per)
Fixed expressions as separate rows: op kantoor, aan het werk, bij iemand thuis, op tijd, op weg naar, in de buurt van

### Tab 7 — Numbers, Time & Calendar
Numbers 1-30 then 40,50..100
Columns: cardinal (één), ordinal (eerste), adverbial (één keer/eenmaal)
Bottom rows: fractions (half, kwart, derde), collectives (een paar, een dozijn, beiden)
Time words: nu, dan, later, vroeg, laat, gisteren, vandaag, morgen, altijd, nooit, soms, vaak, nog, al, net, pas, ooit
Days: maandag–zondag
Months: januari–december
Seasons: lente, zomer, herfst, winter

### Tab 8 — Nouns & Diminutives
Themed categories with diminutive column + de/het article:
- Office (vergadering, rapport, deadline, collega, bureau, project, e-mail, agenda)
- Home (keuken, slaapkamer, deur, raam, tuin, tafel, stoel, bed)
- Food & Drink (brood, koffie, water, lunch, soep, koek, melk, thee)
- Transport (trein, bus, fiets, auto, tram, vliegtuig, boot, metro)
- Body (hoofd, hand, voet, oog, oor, neus, mond, hart)
Diminutive rule panel at top: -je / -tje / -pje / -etje / -kje

### Tab 9 — Phrases & Expressions
Sections:
- Greetings (hallo, goedemorgen, goedemiddag, goedenavond, tot ziens, tot morgen, tot later, dag)
- Politeness (alsjeblieft, dank je wel, dank u wel, graag gedaan, sorry, excuseer, pardon)
- Office survival (kan ik je iets vragen?, even wachten, geen probleem, dat klopt, ik weet het niet, wat bedoel je?, begrepen, laten we vergaderen)
- Fixed expressions (het maakt niet uit, dat is goed, wat jammer, gefeliciteerd, veel succes, goed zo, prima, inderdaad)

---

## Topic Tabs (10–19)

All topic tabs follow this layout:
1. **Story intro panel** (collapsible) — 2-3 sentences setting the scene
2. **Vocabulary card grid** — big emoji, Dutch word, English translation, tap for sentence
3. **Sample dialogue** — tappable lines with 🦁 translation toggle

### Characters per topic
| Topic | Characters |
|-------|-----------|
| Space 🚀 | Rakesh (after Rakesh Sharma), Kalpana (after Kalpana Chawla), Sunita (after Sunita Williams) |
| Sea 🌊 | Arjun, Priya, Vikram |
| Birds 🐦 | Arjun, Priya, Vikram |
| Travel ✈️ | Lars + Arjun (mix) |
| Food 🍽️ | Lars, Lotte, Thomas |
| Health 🏥 | Emma, Noah, Julie (Belgian names) |
| Shopping 🛒 | Lars, Lotte, Thomas |
| Nature 🌿 | Arjun, Priya, Vikram |
| Home 🏠 | Krishna, Sita, Hanuman |
| School 🎓 | Emma, Noah, Julie |

### Topic vocabulary lists (to be written)
Each topic needs ~20-30 vocabulary items with:
- Dutch word + article (de/het)
- English translation
- Emoji
- Diminutive where natural
- 2 sentences (simple + natural) × 2 themes (where applicable)
- 1 sample dialogue (6-8 lines)

---

## UX decisions made
- Table view is DEFAULT (not cards)
- Category picker: multi-select, Select All / Clear All
- Story intro: collapsible, shown by default
- OR logic for grammar tag filtering (not AND)
- Emoji cluster: max 5, follows word order of sentence
- ❌ auto-added for negatives by JS (not in data)
- Colour highlighting auto-applied by JS highlight engine
- No API key needed — all sentences pre-written in data files
- File must work by double-clicking (no server) — all assets inlined in index.html

## Known issues to fix
- UX: toggle buttons need to be more prominent / obvious
- Need hint text below toggle: "📊 Table: grammar reference | 🃏 Cards: vocabulary"

## Build command (to regenerate index.html after edits)
```bash
cd /home/claude
python3 build.py  # (build script needs to be recreated — see conversation for full script)
zip -r /mnt/user-data/outputs/LeerVlaams.zip flemish/
```

## Next steps (in order)
1. Fix UX (prominent toggle, hint text)
2. Complete remaining 33 verbs in grammar/verbs/data.js
3. Build Tab 2 Connectors (grammar/connectors/data.js + tab.html)
4. Build Tab 3 Pronouns
5. Build Tab 4 Adjectives
6. Build Tab 5 Determiners
7. Build Tab 6 Prepositions
8. Build Tab 7 Numbers & Time
9. Build Tab 8 Nouns & Diminutives
10. Build Tab 9 Phrases & Expressions
11. Build Topic tabs 10-19 one by one
12. Final: grammar explorer (filter by tag across all tabs)
