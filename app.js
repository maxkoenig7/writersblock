const banks = {
  genre: [
    "gothic mystery", "cozy fantasy", "literary realism", "space opera", "psychological horror",
    "magical realism", "romantic comedy", "noir detective story", "post-apocalyptic survival",
    "myth retelling", "historical fiction", "cyberpunk thriller", "family drama", "dark academia",
    "western", "fairy tale retelling", "supernatural slice of life", "political intrigue"
  ],
  mood: [
    "eerie and restrained", "tender and hopeful", "wry and fast-moving", "melancholy and luminous",
    "tense and claustrophobic", "dreamlike and strange", "warm but bittersweet", "bleak and elegant",
    "funny with a dark edge", "romantic and awkward", "quietly devastating", "wonder-filled",
    "urgent and cinematic", "nostalgic and intimate", "unsettling but beautiful"
  ],
  style: [
    "lyrical but clear", "sparse and minimalist", "cinematic and sharply paced", "confessional",
    "mythic and timeless", "noir and hardboiled", "gothic and ornate", "plainspoken and intimate",
    "satirical and precise", "fragmented and memory-driven", "lushly sensory", "crisp and modern",
    "fairy-tale-like", "cold and clinical", "warm and conversational"
  ],
  pov: [
    "first person, intimate and honest", "first person, unreliable", "close third person",
    "second person", "third person omniscient", "a diary entry", "a letter never sent",
    "a transcript of testimony", "multiple brief POV sections", "a narrator speaking from years later",
    "a collective we narrator"
  ],
  character: [
    "a retired opera singer", "a lighthouse keeper with one secret", "a witch with no magic",
    "a robot learning grief", "a detective who hates mysteries", "a runaway prince",
    "a chef cooking for ghosts", "a failed prophet", "a child who remembers a past life",
    "a con artist pretending to be royal", "a teacher at a haunted school",
    "a cartographer who has never left home", "a soldier who refuses to fight",
    "a journalist chasing an impossible story", "a painter whose portraits change overnight",
    "a farmer who finds something ancient underground", "a librarian guarding forbidden books"
  ],
  setting: [
    "a town built around a sealed well", "a theater that only opens during storms",
    "a train crossing a country that no longer appears on maps", "a floating market above a sleeping city",
    "a school where every hallway leads to a different decade", "a desert motel with a room nobody rents",
    "a moonlit archive under the courthouse", "a kitchen during the last dinner service of the season",
    "a lighthouse after the lamp goes out", "a colony ship garden where nothing should bloom",
    "a funeral home on the morning of the wrong funeral", "a museum gallery after closing"
  ],
  opening: [
    "receives a letter that arrives twenty years late",
    "finds a door where there was only a wall yesterday",
    "hears their own name spoken by someone who should not know it",
    "wakes up with someone else's memory",
    "discovers their shadow is missing",
    "is invited to a wedding where nobody knows the couple",
    "finds a map showing a country that does not exist",
    "gets a voicemail from their own number",
    "returns home and finds the house has grown a new room",
    "is given a key by a stranger who vanishes before explaining it",
    "sees a photograph change while they are holding it",
    "learns that everyone in town forgot the same person overnight"
  ],
  desire: [
    "to be forgiven without having to confess",
    "to keep one ordinary day from turning into a disaster",
    "to prove the impossible thing is real",
    "to leave before anyone notices what they have become",
    "to protect a person who would never ask for help",
    "to recover a memory everyone else insists never existed",
    "to finish one last duty with dignity",
    "to be chosen for the first time",
    "to escape a role written for them by someone else",
    "to tell the truth without losing their home"
  ],
  conflict: [
    "the truth would destroy someone they love",
    "the only person who can help them is their enemy",
    "they must decide whether safety is worth living inside a lie",
    "their greatest wish comes with a cost they cannot pay twice",
    "everyone else believes they are guilty",
    "they are becoming the thing they fear",
    "they have until midnight to make a choice",
    "the person they trust most has been lying for a kind reason",
    "saving one person may doom many others",
    "the object they found is wanted by someone powerful",
    "they can solve the mystery only by confessing their own secret"
  ],
  element: [
    "a mirror that shows people at their happiest",
    "a locked room", "a cursed song", "a clock with thirteen hours",
    "a photograph that changes each day", "a library under the ocean",
    "a train that only arrives at midnight", "a tattoo that moves",
    "a forbidden garden", "a broken crown", "a machine that dreams",
    "a suitcase full of impossible objects", "a language only one person can hear"
  ],
  theme: [
    "the cost of being believed", "what love asks people to hide", "the danger of inherited stories",
    "choosing mercy over certainty", "the small violence of silence", "how grief edits memory",
    "the difference between escape and freedom", "why people protect beautiful lies",
    "the loneliness of being right too soon", "the courage to disappoint someone"
  ],
  craft: [
    "sensory detail", "subtext in dialogue", "slow-building tension", "atmosphere",
    "a strong opening image", "internal conflict", "romantic tension", "moral ambiguity",
    "worldbuilding through action", "foreshadowing", "a repeated image used three times",
    "emotional restraint", "voice", "a memorable final line"
  ],
  ending: [
    "a bittersweet revelation", "a quiet emotional realization", "a shocking twist",
    "a victory with a cost", "an unresolved mystery", "a final betrayal",
    "a hopeful final image", "a tragic sacrifice", "a circular ending that echoes the first line",
    "a transformation", "a confession that changes the meaning of the story"
  ],
  constraint: [
    "Keep the cast to three characters or fewer.",
    "Make the whole story happen in one location.",
    "Do not use a flashback.",
    "End on a line of dialogue.",
    "Start with a concrete image, not exposition.",
    "Let the secret be implied rather than directly explained.",
    "Use present tense.",
    "Make the apparent antagonist sympathetic.",
    "Include one object that changes meaning by the end.",
    "Let weather add pressure to the scene.",
    "Avoid explaining the world rules directly."
  ]
};

const labels = {
  genre: "Genre",
  mood: "Mood",
  style: "Style",
  pov: "POV",
  character: "Main Character",
  setting: "Stage",
  opening: "Trigger",
  desire: "Hidden Want",
  conflict: "Pressure",
  element: "Motif",
  theme: "Theme",
  craft: "Craft Focus",
  ending: "Ending",
  constraint: "Constraint"
};

const titleWords = {
  first: ["Last", "Hidden", "Borrowed", "Bright", "Wrong", "Thirteenth", "Forgotten", "Unfinished", "Paper", "Midnight"],
  second: ["Room", "Map", "Song", "Garden", "Letter", "Weather", "Crown", "Mirror", "Promise", "Signal"]
};

const modeHints = {
  balanced: {},
  cozy: {
    genre: ["cozy fantasy", "magical realism", "romantic comedy", "supernatural slice of life", "family drama"],
    mood: ["tender and hopeful", "warm but bittersweet", "wonder-filled", "nostalgic and intimate"],
    style: ["plainspoken and intimate", "warm and conversational", "lyrical but clear"],
    conflict: ["the person they trust most has been lying for a kind reason", "they must decide whether safety is worth living inside a lie"]
  },
  strange: {
    genre: ["magical realism", "psychological horror", "cyberpunk thriller", "dark academia", "fairy tale retelling"],
    mood: ["dreamlike and strange", "unsettling but beautiful", "eerie and restrained"],
    style: ["fragmented and memory-driven", "fairy-tale-like", "cold and clinical"],
    element: ["a clock with thirteen hours", "a machine that dreams", "a language only one person can hear"]
  },
  dark: {
    genre: ["gothic mystery", "psychological horror", "noir detective story", "post-apocalyptic survival", "dark academia"],
    mood: ["tense and claustrophobic", "bleak and elegant", "quietly devastating", "eerie and restrained"],
    style: ["noir and hardboiled", "gothic and ornate", "sparse and minimalist"],
    ending: ["a tragic sacrifice", "a final betrayal", "an unresolved mystery"]
  },
  romantic: {
    genre: ["romantic comedy", "historical fiction", "magical realism", "family drama"],
    mood: ["romantic and awkward", "tender and hopeful", "warm but bittersweet"],
    style: ["lushly sensory", "warm and conversational", "lyrical but clear"],
    craft: ["romantic tension", "subtext in dialogue", "emotional restraint"]
  }
};

const intensityCopy = {
  1: "soft pressure",
  2: "gentle tension",
  3: "medium pressure",
  4: "high stakes",
  5: "everything burns"
};

const state = {};
const storageKeys = {
  saved: "daily1000.savedPrompts",
  log: "daily1000.log",
  draft: "daily1000.currentDraft",
  notes: "daily1000.notes",
  settings: "daily1000.settings"
};

const controls = document.querySelector("#controls");
const promptOutput = document.querySelector("#promptOutput");
const todayStatus = document.querySelector("#todayStatus");
const todayWords = document.querySelector("#todayWords");
const todayMeter = document.querySelector("#todayMeter");
const dailyLog = document.querySelector("#dailyLog");
const savedPrompts = document.querySelector("#savedPrompts");
const streakCount = document.querySelector("#streakCount");
const draftText = document.querySelector("#draftText");
const wordCount = document.querySelector("#wordCount");
const wordDelta = document.querySelector("#wordDelta");
const wordMeter = document.querySelector("#wordMeter");
const draftStatus = document.querySelector("#draftStatus");
const heroLine = document.querySelector("#heroLine");
const dropZone = document.querySelector(".drop-zone");
const promptMode = document.querySelector("#promptMode");
const intensity = document.querySelector("#intensity");
const intensityLabel = document.querySelector("#intensityLabel");
const storyNotes = document.querySelector("#storyNotes");
const revisionSignals = document.querySelector("#revisionSignals");
const timerDisplay = document.querySelector("#timerDisplay");
const timerMeter = document.querySelector("#timerMeter");
const timerStartBtn = document.querySelector("#timerStartBtn");
const installAppBtn = document.querySelector("#installAppBtn");
const appStatus = document.querySelector("#appStatus");
const appStatusDetail = document.querySelector("#appStatusDetail");

let currentBrief = {};
let timerSeconds = 25 * 60;
let timerTotalSeconds = 25 * 60;
let timerInterval = null;
let deferredInstallPrompt = null;

function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function choiceForMode(key) {
  const mode = promptMode?.value ?? "balanced";
  const pool = modeHints[mode]?.[key] ?? banks[key];
  return choice(pool);
}

function todayKey() {
  return dateKey(new Date());
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function buildControls() {
  controls.innerHTML = "";
  Object.keys(banks).forEach((key) => {
    state[key] = choiceForMode(key);

    const wrap = document.createElement("div");
    wrap.className = "control";

    const top = document.createElement("div");
    top.className = "control-top";

    const label = document.createElement("label");
    label.setAttribute("for", key);
    label.textContent = labels[key];

    const lock = document.createElement("label");
    lock.className = "lock";
    lock.innerHTML = `<input type="checkbox" data-lock="${key}"> Lock`;

    const select = document.createElement("select");
    select.id = key;
    select.dataset.key = key;
    banks[key].forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      select.appendChild(option);
    });
    select.value = state[key];
    select.addEventListener("change", () => {
      state[key] = select.value;
      composePrompt();
    });

    top.append(label, lock);
    wrap.append(top, select);
    controls.appendChild(wrap);
  });
}

function locked(key) {
  return Boolean(document.querySelector(`[data-lock="${key}"]`)?.checked);
}

function syncSelects() {
  Object.keys(state).forEach((key) => {
    const select = document.querySelector(`#${key}`);
    if (select) select.value = state[key];
  });
}

function randomize(ignoreLocks = false) {
  Object.keys(banks).forEach((key) => {
    if (ignoreLocks || !locked(key)) {
      state[key] = choiceForMode(key);
    }
  });
  saveSettings();
  syncSelects();
  composePrompt();
}

function buildBrief() {
  const title = `The ${choice(titleWords.first)} ${choice(titleWords.second)}`;
  const openingLine = openingLineFor(state);
  const heat = Number(intensity?.value ?? 3);
  const pressureVerb = heat >= 4 ? "corner" : heat <= 2 ? "nudge" : "pressure";
  const endingDemand = heat >= 4 ? "make the consequence visible immediately" : heat <= 2 ? "leave one gentle uncertainty" : "returning to one concrete image from the first 150 words";
  const beats = [
    `Open in ${state.setting} as ${state.character} ${state.opening}.`,
    `Reveal that they want ${state.desire}, but make them avoid saying it directly.`,
    `Let ${state.element} become impossible to ignore, then ${pressureVerb} the character with this pressure: ${state.conflict}.`,
    `Force a choice that tests ${state.theme}.`,
    `End with ${state.ending}; ${endingDemand}.`
  ];

  return { title, openingLine, beats };
}

function openingLineFor(values) {
  const lines = [
    `By the time ${values.character} noticed ${values.element}, the day had already chosen sides.`,
    `Nobody in ${values.setting} admitted they had seen ${values.element} first.`,
    `${capitalize(values.character)} had rehearsed every goodbye except this one.`,
    `The first strange thing was not ${values.element}; it was how badly everyone wanted to ignore it.`,
    `In ${values.setting}, the truth arrived dressed as an ordinary mistake.`
  ];
  return choice(lines);
}

function composePrompt() {
  currentBrief = buildBrief();
  heroLine.textContent = currentBrief.openingLine;
  updateIntensityLabel();
  promptOutput.innerHTML = `
    <div class="brief-header">
      <span class="brief-kicker">${escapeHtml(state.mood)} ${escapeHtml(state.genre)}</span>
      <h3>${escapeHtml(currentBrief.title)}</h3>
      <p class="brief-line">${escapeHtml(currentBrief.openingLine)}</p>
    </div>
    <div class="brief-body">
      <div class="brief-grid">
        ${briefChip("Narrator", state.pov)}
        ${briefChip("Style", state.style)}
        ${briefChip("Theme", state.theme)}
        ${briefChip("Lead", state.character)}
        ${briefChip("Stage", state.setting)}
        ${briefChip("Motif", state.element)}
      </div>
      <div class="mission-card">
        <p>Write a complete 1,000-word <strong>${escapeHtml(state.genre)}</strong> story with a <strong>${escapeHtml(state.mood)}</strong> atmosphere and <strong>${escapeHtml(intensityCopy[intensity.value])}</strong>.</p>
        <p>The character wants <strong>${escapeHtml(state.desire)}</strong>, but the pressure is that <strong>${escapeHtml(state.conflict)}</strong>.</p>
        <p>Use <strong>${escapeHtml(state.craft)}</strong> as the craft focus. The ending should land as <strong>${escapeHtml(state.ending)}</strong>.</p>
      </div>
      <ol class="brief-list">
        ${currentBrief.beats.map((beat) => `<li>${escapeHtml(beat)}</li>`).join("")}
      </ol>
      <ul class="brief-list">
        <li>Keep the story self-contained with a clear beginning, middle, and end.</li>
        <li>Include one meaningful choice.</li>
        <li>${escapeHtml(state.constraint)}</li>
      </ul>
    </div>
  `;
}

function briefChip(label, value) {
  return `<div class="brief-chip"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function promptText() {
  return promptOutput.innerText.trim();
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function updateIntensityLabel() {
  intensityLabel.textContent = intensityCopy[intensity.value] ?? "medium pressure";
}

function saveSettings() {
  writeJson(storageKeys.settings, {
    mode: promptMode.value,
    intensity: intensity.value
  });
}

function loadSettings() {
  const settings = readJson(storageKeys.settings, null);
  if (settings?.mode) promptMode.value = settings.mode;
  if (settings?.intensity) intensity.value = settings.intensity;
  updateIntensityLabel();
}

async function copyPrompt() {
  const text = promptText();
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
  } else {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.left = "-9999px";
    document.body.appendChild(field);
    field.select();
    document.execCommand("copy");
    field.remove();
  }
  flashButton("#copyBtn", "Copied");
}

function flashButton(selector, text) {
  const button = document.querySelector(selector);
  const original = button.textContent;
  button.textContent = text;
  setTimeout(() => {
    button.textContent = original;
  }, 1100);
}

function savePrompt() {
  const saved = readJson(storageKeys.saved, []);
  saved.unshift({
    date: new Date().toLocaleString(),
    title: currentBrief.title,
    text: promptText()
  });
  writeJson(storageKeys.saved, saved.slice(0, 30));
  renderSaved();
  flashButton("#saveBtn", "Saved");
}

function countWords(text) {
  const matches = text.trim().match(/[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)*/g);
  return matches ? matches.length : 0;
}

function updateDraftStats() {
  const words = countWords(draftText.value);
  const percent = Math.min(100, Math.round((words / 1000) * 100));
  wordCount.textContent = `${words.toLocaleString()} ${words === 1 ? "word" : "words"}`;
  wordDelta.textContent = words >= 1000 ? `${(words - 1000).toLocaleString()} over goal` : `${(1000 - words).toLocaleString()} to go`;
  wordMeter.style.width = `${percent}%`;
  draftStatus.textContent = words >= 1000 ? "Goal reached" : words > 0 ? "Draft in progress" : "Awaiting draft";
  draftStatus.classList.toggle("warm", words < 1000);
  renderRevisionSignals(words);
  return words;
}

function renderRevisionSignals(words = countWords(draftText.value)) {
  const text = draftText.value.trim();
  const paragraphs = text ? text.split(/\n\s*\n/).filter(Boolean).length : 0;
  const dialogueMarks = (text.match(/"/g) || []).length;
  const ending = text.split(/\s+/).slice(-35).join(" ");
  const hasMotif = state.element && text.toLowerCase().includes(state.element.toLowerCase().split(" ")[1] || state.element.toLowerCase());
  const signals = [
    {
      title: words >= 1000 ? "Length is there" : "Build toward the full thousand",
      body: words >= 1000 ? "You have enough clay to revise from." : `${Math.max(0, 1000 - words).toLocaleString()} words left before today's target.`,
      good: words >= 1000
    },
    {
      title: paragraphs >= 5 ? "Shape has movement" : "Add visible turns",
      body: paragraphs >= 5 ? `${paragraphs} paragraphs gives the reader some rhythm.` : "Try splitting the draft into hook, want, pressure, choice, and afterimage.",
      good: paragraphs >= 5
    },
    {
      title: dialogueMarks >= 4 ? "Voices are present" : "Check the spoken pressure",
      body: dialogueMarks >= 4 ? "There is enough dialogue to look for subtext." : "Consider one exchange where nobody says the real problem directly.",
      good: dialogueMarks >= 4
    },
    {
      title: hasMotif ? "Motif appears in the draft" : "Bring back the motif",
      body: hasMotif ? `The draft seems to touch ${state.element}.` : `Look for one place to echo ${state.element}.`,
      good: hasMotif
    },
    {
      title: "Final image check",
      body: ending || "When you finish, make the last sentence leave an image instead of an explanation.",
      good: words >= 950
    }
  ];

  revisionSignals.innerHTML = signals.map((signal) => `
    <div class="signal-card ${signal.good ? "good" : "warn"}">
      <strong>${escapeHtml(signal.title)}</strong>
      <span>${escapeHtml(signal.body)}</span>
    </div>
  `).join("");
}

function saveDraft() {
  writeJson(storageKeys.draft, {
    text: draftText.value,
    savedAt: new Date().toLocaleString(),
    prompt: currentBrief.title
  });
  flashButton("#saveDraftBtn", "Saved");
}

function loadDraft() {
  const draft = readJson(storageKeys.draft, null);
  if (draft?.text) {
    draftText.value = draft.text;
  }
  updateDraftStats();
}

function loadNotes() {
  storyNotes.value = readJson(storageKeys.notes, "");
}

function saveNotes() {
  writeJson(storageKeys.notes, storyNotes.value);
  flashButton("#saveNotesBtn", "Saved");
}

function clearDraft() {
  draftText.value = "";
  writeJson(storageKeys.draft, { text: "", savedAt: null, prompt: "" });
  updateDraftStats();
}

function exportDraft() {
  const date = todayKey();
  const filename = `${date}-${slugify(currentBrief.title || "daily-1000-draft")}.md`;
  const content = [
    `# ${currentBrief.title || "Daily 1000 Draft"}`,
    "",
    "## Prompt",
    promptText(),
    "",
    "## Notes",
    storyNotes.value.trim() || "_No notes saved._",
    "",
    "## Draft",
    draftText.value.trim() || "_No draft text yet._"
  ].join("\n");
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function markWritten() {
  const words = updateDraftStats();
  const log = readJson(storageKeys.log, {});
  log[todayKey()] = {
    words,
    prompt: currentBrief.title,
    completedAt: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
  };
  writeJson(storageKeys.log, log);
  saveDraft();
  renderLog();
}

function resetToday() {
  const log = readJson(storageKeys.log, {});
  delete log[todayKey()];
  writeJson(storageKeys.log, log);
  renderLog();
}

function renderLog() {
  const log = readJson(storageKeys.log, {});
  const today = log[todayKey()];
  const words = today?.words ?? 0;
  const percent = Math.min(100, Math.round((words / 1000) * 100));
  todayStatus.textContent = today ? `Logged at ${today.completedAt}` : "Not written yet";
  todayWords.textContent = `${words.toLocaleString()} / 1,000 words uploaded`;
  todayMeter.style.width = `${percent}%`;

  const dates = Object.keys(log).sort().reverse();
  dailyLog.innerHTML = "";
  if (dates.length === 0) {
    dailyLog.innerHTML = `<li class="empty">No writing days logged yet.</li>`;
  } else {
    dates.slice(0, 14).forEach((date) => {
      const item = document.createElement("li");
      const entry = log[date];
      item.innerHTML = `<time>${escapeHtml(date)}</time><strong>${Number(entry.words).toLocaleString()} words</strong><p>${escapeHtml(entry.prompt)}</p>`;
      dailyLog.appendChild(item);
    });
  }
  streakCount.textContent = `${currentStreak(log)} day streak`;
}

function currentStreak(log) {
  let streak = 0;
  const cursor = new Date();
  while (true) {
    const key = dateKey(cursor);
    if (!log[key]) break;
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function renderSaved() {
  const saved = readJson(storageKeys.saved, []);
  savedPrompts.innerHTML = "";
  if (saved.length === 0) {
    savedPrompts.innerHTML = `<li class="empty">Saved prompts will appear here.</li>`;
    return;
  }
  saved.forEach((entry) => {
    const item = document.createElement("li");
    item.innerHTML = `<time>${escapeHtml(entry.date)}</time><strong>${escapeHtml(entry.title)}</strong><p>${escapeHtml(entry.text.slice(0, 210))}...</p>`;
    item.addEventListener("click", () => {
      promptOutput.innerHTML = `<div class="brief-header"><span class="brief-kicker">Saved prompt</span><h3>${escapeHtml(entry.title)}</h3></div><div class="brief-body"><p>${escapeHtml(entry.text).replaceAll("\n", "<br>")}</p></div>`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    savedPrompts.appendChild(item);
  });
}

function handleUpload(event) {
  const file = event.target.files?.[0];
  readDraftFile(file);
}

function readDraftFile(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    draftText.value = String(reader.result ?? "");
    updateDraftStats();
    saveDraft();
  });
  reader.readAsText(file);
}

function handleDrop(event) {
  event.preventDefault();
  dropZone.classList.remove("is-dragging");
  const file = event.dataTransfer?.files?.[0];
  readDraftFile(file);
}

function setTimer(minutes) {
  timerTotalSeconds = minutes * 60;
  timerSeconds = timerTotalSeconds;
  stopTimer();
  renderTimer();
}

function startTimer() {
  if (timerInterval) {
    stopTimer();
    return;
  }
  timerStartBtn.textContent = "Pause";
  timerInterval = setInterval(() => {
    timerSeconds = Math.max(0, timerSeconds - 1);
    renderTimer();
    if (timerSeconds === 0) {
      stopTimer();
      timerStartBtn.textContent = "Done";
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerStartBtn.textContent = "Start";
}

function resetTimer() {
  stopTimer();
  timerSeconds = timerTotalSeconds;
  renderTimer();
}

function renderTimer() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  const used = timerTotalSeconds - timerSeconds;
  const percent = timerTotalSeconds ? Math.round((used / timerTotalSeconds) * 100) : 0;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  timerMeter.style.width = `${percent}%`;
}

function setupPwa() {
  updateConnectionStatus();

  window.addEventListener("online", updateConnectionStatus);
  window.addEventListener("offline", updateConnectionStatus);
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    installAppBtn.hidden = false;
    appStatus.textContent = "Install ready";
    appStatusDetail.textContent = "Add Daily 1000 to your home screen for a cleaner phone experience.";
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    installAppBtn.hidden = true;
    appStatus.textContent = "Installed";
    appStatusDetail.textContent = "Daily 1000 can now launch from your home screen.";
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => {
        if (!deferredInstallPrompt) {
          appStatus.textContent = "Offline shell cached";
          appStatusDetail.textContent = installHelpText();
        }
      })
      .catch(() => {
        appStatus.textContent = "Install needs hosting";
        appStatusDetail.textContent = "PWA install requires HTTPS hosting, not a file opened from your computer.";
      });
  } else {
    appStatus.textContent = "Browser mode";
    appStatusDetail.textContent = "This browser does not support service-worker offline caching.";
  }
}

function updateConnectionStatus() {
  document.body.classList.toggle("is-offline", !navigator.onLine);
  if (!navigator.onLine) {
    appStatus.textContent = "Offline";
    appStatusDetail.textContent = "You can keep drafting here. Sync will come in the next backend pass.";
  }
}

function installHelpText() {
  const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  if (standalone) return "Running as an installed app.";
  return "On iPhone: Share, then Add to Home Screen. On Android: use the browser install prompt.";
}

async function installApp() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installAppBtn.hidden = true;
}

document.querySelector("#randomizeAllBtn").addEventListener("click", () => randomize(false));
document.querySelector("#surpriseBtn").addEventListener("click", () => randomize(true));
document.querySelector("#composeBtn").addEventListener("click", composePrompt);
document.querySelector("#copyBtn").addEventListener("click", copyPrompt);
document.querySelector("#saveBtn").addEventListener("click", savePrompt);
document.querySelector("#markWrittenBtn").addEventListener("click", markWritten);
document.querySelector("#resetTodayBtn").addEventListener("click", resetToday);
document.querySelector("#storyUpload").addEventListener("change", handleUpload);
document.querySelector("#draftText").addEventListener("input", updateDraftStats);
document.querySelector("#saveDraftBtn").addEventListener("click", saveDraft);
document.querySelector("#clearDraftBtn").addEventListener("click", clearDraft);
document.querySelector("#saveNotesBtn").addEventListener("click", saveNotes);
document.querySelector("#exportDraftBtn").addEventListener("click", exportDraft);
document.querySelector("#timerStartBtn").addEventListener("click", startTimer);
document.querySelector("#timerResetBtn").addEventListener("click", resetTimer);
installAppBtn.addEventListener("click", installApp);
document.querySelectorAll(".timer-preset").forEach((button) => {
  button.addEventListener("click", () => setTimer(Number(button.dataset.minutes)));
});
promptMode.addEventListener("change", () => {
  saveSettings();
  randomize(false);
});
intensity.addEventListener("input", () => {
  updateIntensityLabel();
  saveSettings();
  composePrompt();
});
dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("is-dragging");
});
dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("is-dragging");
});
dropZone.addEventListener("drop", handleDrop);
document.querySelector("#clearSavedBtn").addEventListener("click", () => {
  writeJson(storageKeys.saved, []);
  renderSaved();
});

loadSettings();
buildControls();
composePrompt();
loadDraft();
loadNotes();
renderTimer();
renderLog();
renderSaved();
setupPwa();
