"use strict";

/* Built-in question bank: 4 subjects × (6 × 2-mark, 5 × 5-mark, 5 × 10-mark). */
const BANK = {
  dsa: {
    name: "Data Structures & Algorithms",
    code: "CS-301",
    2: [
      { t: "Define time complexity and give one example of an O(log n) operation.", d: "easy" },
      { t: "State two differences between a stack and a queue.", d: "easy" },
      { t: "What is the precondition for binary search, and what is its time complexity?", d: "easy" },
      { t: "What is a hash collision, and why does it occur?", d: "medium" },
      { t: "Define a spanning tree of a connected graph.", d: "medium" },
      { t: "Why does a linked list not support O(1) random access?", d: "hard" }
    ],
    5: [
      { t: "Explain breadth-first search with its data structure, traversal order, and time complexity.", d: "medium" },
      { t: "Compare merge sort and quicksort on worst-case time, stability, and auxiliary space.", d: "medium" },
      { t: "Explain how chaining resolves hash collisions and when lookup performance degrades.", d: "medium" },
      { t: "Describe Dijkstra's algorithm and the edge-weight constraint it requires.", d: "hard" },
      { t: "Explain how a min-heap supports insert and extract-min, with their time complexities.", d: "hard" }
    ],
    10: [
      { t: "Design a data structure that supports insert, delete, and getRandom in O(1) average time. Explain the design and its trade-offs.", d: "hard" },
      { t: "Given a directed graph, explain how to detect a cycle using DFS. Why is an active recursion stack required?", d: "medium" },
      { t: "Explain dynamic programming using 0/1 knapsack: define the state, recurrence, base cases, and complexity.", d: "medium" },
      { t: "Compare adjacency lists and adjacency matrices for sparse and dense graphs across memory and common operations.", d: "medium" },
      { t: "Describe how an LRU cache can be implemented with a hash map and a doubly linked list, and give the cost of each operation.", d: "hard" }
    ]
  },
  dbms: {
    name: "Database Management Systems",
    code: "CS-302",
    2: [
      { t: "Define a primary key and state its two mandatory properties.", d: "easy" },
      { t: "What is the purpose of a foreign key?", d: "easy" },
      { t: "Define normalisation in the context of relational databases.", d: "easy" },
      { t: "Differentiate between DELETE and TRUNCATE.", d: "medium" },
      { t: "What is an index? State one benefit and one cost of adding one.", d: "medium" },
      { t: "Define a transaction and name the four ACID properties.", d: "easy" }
    ],
    5: [
      { t: "Explain 1NF, 2NF, and 3NF with a short example of each violation.", d: "medium" },
      { t: "Compare INNER JOIN and LEFT JOIN with a one-line SQL example each.", d: "easy" },
      { t: "Explain how isolation levels affect dirty reads and non-repeatable reads.", d: "hard" },
      { t: "Explain how a composite index can and cannot be used by a query planner.", d: "hard" },
      { t: "Describe the steps you would take to diagnose and fix a slow SQL query in production.", d: "medium" }
    ],
    10: [
      { t: "Design a normalised schema for a course-registration system (students, courses, enrolments). Show keys and relationships.", d: "medium" },
      { t: "Explain query optimisation: how a planner uses indexes, statistics, and join order.", d: "hard" },
      { t: "Discuss index trade-offs for read-heavy versus write-heavy workloads. Include covering indexes.", d: "medium" },
      { t: "Explain transaction isolation levels and the anomalies each prevents, using a banking transfer example.", d: "hard" },
      { t: "A leaderboard query has become slow at scale. Describe how you would redesign the schema, indexes, and query.", d: "hard" }
    ]
  },
  java: {
    name: "Java Programming",
    code: "CS-303",
    2: [
      { t: "Differentiate between == and equals() for object references.", d: "easy" },
      { t: "Explain the purpose of the final keyword for a variable, method, and class.", d: "easy" },
      { t: "What is an interface in Java?", d: "easy" },
      { t: "What does the static modifier mean for a field or method?", d: "easy" },
      { t: "What is a checked exception? Give one example.", d: "medium" },
      { t: "Differentiate between method overloading and method overriding.", d: "medium" }
    ],
    5: [
      { t: "Explain how HashMap works internally, including resizing and collision handling.", d: "medium" },
      { t: "Compare ArrayList and LinkedList for random access, insertion, and memory overhead.", d: "easy" },
      { t: "Explain what the volatile keyword guarantees and what it does not guarantee.", d: "hard" },
      { t: "Compare abstract classes and interfaces, and when you would choose each.", d: "medium" },
      { t: "How does try-with-resources work, and which interface must a resource implement?", d: "medium" }
    ],
    10: [
      { t: "Design a thread-safe bounded producer-consumer queue. Discuss locking and at least one lock-free alternative.", d: "hard" },
      { t: "Explain garbage collection in the JVM: generations, common collectors, and tuning levers.", d: "hard" },
      { t: "Describe how you would profile and fix a memory leak in a long-running Java service.", d: "hard" },
      { t: "Explain lazy evaluation in the Streams API and the difference between intermediate and terminal operations.", d: "medium" },
      { t: "Compare synchronized blocks, ReentrantLock, and concurrent collections for shared-state updates.", d: "hard" }
    ]
  },
  os: {
    name: "Operating Systems",
    code: "CS-304",
    2: [
      { t: "What is a process? Name the parts of its address space.", d: "easy" },
      { t: "State three differences between a process and a thread.", d: "easy" },
      { t: "Define virtual memory.", d: "medium" },
      { t: "What is thrashing, and what usually causes it?", d: "medium" },
      { t: "Define deadlock in one sentence.", d: "easy" },
      { t: "What happens during a context switch?", d: "easy" }
    ],
    5: [
      { t: "Explain the four necessary conditions for deadlock and one prevention strategy.", d: "medium" },
      { t: "Compare paging and segmentation.", d: "medium" },
      { t: "Compare FCFS, SJF, and Round Robin scheduling for interactive workloads.", d: "easy" },
      { t: "Describe how a page fault is handled by the memory manager.", d: "hard" },
      { t: "Explain race conditions and how a mutex prevents them.", d: "medium" }
    ],
    10: [
      { t: "Explain the producer-consumer problem and solve it with semaphores, including the initial semaphore values.", d: "hard" },
      { t: "Discuss virtual memory: page tables, the TLB, and the address translation process.", d: "hard" },
      { t: "Compare process scheduling algorithms for batch and interactive workloads, with strengths and weaknesses.", d: "medium" },
      { t: "Explain contiguous, linked, and indexed file allocation methods and their trade-offs.", d: "medium" },
      { t: "Describe deadlock detection and recovery, and compare them with avoidance using the Banker's algorithm.", d: "hard" }
    ]
  }
};

const EXAMS = {
  50: {
    title: "Mid-Semester Examination",
    duration: "2 hours",
    sections: [
      { label: "A", name: "Short answers", marks: 2, count: 5, hint: "Attempt all questions." },
      { label: "B", name: "Applied questions", marks: 5, count: 4, hint: "Attempt all questions." },
      { label: "C", name: "Long answers", marks: 10, count: 2, hint: "Attempt both questions." }
    ]
  },
  70: {
    title: "End-Semester Examination",
    duration: "3 hours",
    sections: [
      { label: "A", name: "Short answers", marks: 2, count: 5, hint: "Attempt all questions." },
      { label: "B", name: "Applied questions", marks: 5, count: 4, hint: "Attempt all questions." },
      { label: "C", name: "Long answers", marks: 10, count: 4, hint: "Attempt all questions." }
    ]
  }
};

const MIX = {
  balanced: { weights: { easy: 3, medium: 5, hard: 2 }, note: "30% easy · 50% medium · 20% hard" },
  easy: { weights: { easy: 5, medium: 4, hard: 1 }, note: "50% easy · 40% medium · 10% hard" },
  hard: { weights: { easy: 1, medium: 4, hard: 5 }, note: "10% easy · 40% medium · 50% hard" }
};

const CUSTOM_KEY = "smartpaper-custom-v1";
const MAX_CUSTOM = 40;

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const el = {
  form: $("#paper-form"),
  subject: $("#subject"),
  exam: $("#exam"),
  className: $("#class-name"),
  mix: $("#mix"),
  mixNote: $("#mix-note"),
  shuffle: $("#shuffle-btn"),
  seedChip: $("#seed-chip"),
  admin: $("#admin"),
  adminCount: $("#admin-count"),
  bankList: $("#bank-list"),
  addForm: $("#add-form"),
  addMarks: $("#add-marks"),
  addDiff: $("#add-diff"),
  addText: $("#add-text"),
  paper: $("#paper"),
  previewLabel: $("#preview-label"),
  stats: $("#paper-stats"),
  footerSeed: $("#footer-seed"),
  print: $("#print-btn")
};

const state = {
  seed: randomSeed(),
  mix: "balanced"
};

function randomSeed() {
  return Math.floor(10000 + Math.random() * 90000);
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function rng() {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function loadCustom() {
  try {
    const raw = JSON.parse(localStorage.getItem(CUSTOM_KEY) || "[]");
    return Array.isArray(raw) ? raw.filter((q) => q && q.id && q.text && q.subject) : [];
  } catch {
    return [];
  }
}

function saveCustom(list) {
  try {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(list.slice(0, MAX_CUSTOM)));
  } catch {
    /* storage may be blocked in private mode */
  }
}

function poolFor(subject, marks) {
  const builtIn = (BANK[subject][marks] || []).map((q) => ({ ...q, custom: false }));
  const custom = loadCustom()
    .filter((q) => q.subject === subject && Number(q.marks) === Number(marks))
    .map((q) => ({ t: q.text, d: q.diff, custom: true, id: q.id }));
  return builtIn.concat(custom);
}

function weightedPick(items, count, weights, rng) {
  const remaining = items.slice();
  const picked = [];
  while (picked.length < count && remaining.length) {
    const total = remaining.reduce((sum, q) => sum + (weights[q.d] || 1), 0);
    let r = rng() * total;
    let idx = remaining.length - 1;
    for (let i = 0; i < remaining.length; i++) {
      r -= weights[remaining[i].d] || 1;
      if (r <= 0) { idx = i; break; }
    }
    picked.push(remaining.splice(idx, 1)[0]);
  }
  return picked;
}

function buildPaper(subject, examMarks, mixKey, seed) {
  const rng = mulberry32(seed);
  const weights = MIX[mixKey].weights;
  const sections = EXAMS[examMarks].sections.map((section) => {
    const pool = poolFor(subject, section.marks);
    const questions = weightedPick(pool, section.count, weights, rng);
    return { ...section, questions };
  });
  return { subject, examMarks, mixKey, seed, sections };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

function generate({ newSeed = true } = {}) {
  if (newSeed) state.seed = randomSeed();
  const subjectKey = el.subject.value;
  const examMarks = Number(el.exam.value);
  const paper = buildPaper(subjectKey, examMarks, state.mix, state.seed);
  renderPaper(paper);
}

function renderPaper(paper) {
  const meta = EXAMS[paper.examMarks];
  const subject = BANK[paper.subject];
  const set = "ABC"[paper.seed % 3];
  const total = meta.sections.reduce((sum, s) => sum + s.marks * s.count, 0);
  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const className = el.className.value.trim() || "B.E. Computer Engineering · Semester V";

  el.paper.innerHTML = `
    <div class="sheet-brand">SmartPaper &middot; Examination Cell</div>
    <h2>${escapeHtml(meta.title)}</h2>
    <p class="sheet-class">${escapeHtml(className)}</p>
    <div class="sheet-meta">
      <span><b>Subject:</b> ${escapeHtml(subject.name)}</span>
      <span><b>Code:</b> ${escapeHtml(subject.code)}</span>
      <span><b>Date:</b> ${date}</span>
      <span><b>Duration:</b> ${meta.duration}</span>
      <span><b>Max marks:</b> ${total}</span>
      <span><b>Set:</b> ${set}</span>
    </div>
    <div class="candidate">
      <span>Roll No. <i aria-hidden="true"></i></span>
      <span>Name <i aria-hidden="true"></i></span>
    </div>
    <div class="instructions">
      <h3>Instructions</h3>
      <ol>
        <li>Attempt all questions unless a section states otherwise.</li>
        <li>Marks for every question are shown on the right.</li>
        <li>Draw neat, labelled diagrams wherever required.</li>
        <li>Use of a non-programmable calculator is permitted.</li>
      </ol>
    </div>`;

  let number = 0;
  paper.sections.forEach((section) => {
    const node = document.createElement("section");
    node.className = "sheet-section";
    node.innerHTML = `
      <div class="section-head">
        <h3>Section ${section.label} &middot; ${section.name}</h3>
        <span>${section.count} &times; ${section.marks} = ${section.count * section.marks} marks</span>
      </div>
      <p class="section-hint">${section.hint} Each question carries ${section.marks} marks.</p>
      <ol class="sheet-questions"></ol>`;
    const list = $(".sheet-questions", node);
    section.questions.forEach((q) => {
      number += 1;
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="q-num">${number}.</span>
        <span class="q-text"><span class="q-label"></span></span>
        <span class="q-marks">[${section.marks}]</span>`;
      const label = $(".q-label", li);
      label.textContent = q.t;
      if (q.custom) {
        const flag = document.createElement("span");
        flag.className = "custom-flag";
        flag.textContent = "custom";
        label.appendChild(flag);
      }
      list.appendChild(li);
    });
    el.paper.appendChild(node);
  });

  const foot = document.createElement("div");
  foot.className = "sheet-foot";
  foot.innerHTML = `
    <strong>*** End of paper ***</strong>
    <span>Generated by SmartPaper &middot; seed ${paper.seed} &middot; Set ${set} &middot; ${MIX[paper.mixKey].note}</span>`;
  el.paper.appendChild(foot);

  el.seedChip.textContent = `seed ${paper.seed}`;
  el.previewLabel.textContent = `Preview · Set ${set}`;
  el.footerSeed.textContent = String(paper.seed);
  const parts = paper.sections.map((s) => s.questions.length);
  el.stats.textContent = `${parts.join(" + ")} questions · ${total} marks`;
  el.paper.classList.remove("is-building");
  void el.paper.offsetWidth;
  el.paper.classList.add("is-building");
  announce(`Generated a ${total}-mark ${subject.name} paper, Set ${set}.`);
}

function announce(message) {
  let region = $("#paper-status");
  if (!region) {
    region = document.createElement("p");
    region.id = "paper-status";
    region.className = "visually-hidden";
    region.setAttribute("aria-live", "polite");
    document.body.appendChild(region);
  }
  region.textContent = message;
}

/* ---------- question bank admin ---------- */

function renderBank() {
  const subject = el.subject.value;
  const custom = loadCustom().filter((q) => q.subject === subject);
  const builtInCount = [2, 5, 10].reduce((sum, m) => sum + BANK[subject][m].length, 0);
  el.adminCount.textContent = custom.length
    ? `${builtInCount} built-in · ${custom.length} custom`
    : `${builtInCount} built-in`;

  const rows = [];
  [2, 5, 10].forEach((marks) => {
    BANK[subject][marks].forEach((q) => rows.push({ ...q, marks, custom: false }));
    custom.filter((q) => Number(q.marks) === marks).forEach((q) => rows.push({ t: q.text, d: q.diff, marks, custom: true, id: q.id }));
  });

  el.bankList.innerHTML = "";
  rows.forEach((row) => {
    const li = document.createElement("li");
    li.className = "bank-item";
    const text = document.createElement("span");
    text.className = "bank-q";
    text.textContent = row.t;
    const tags = document.createElement("span");
    tags.className = "bank-tags";
    const marks = document.createElement("span");
    marks.className = "bank-badge";
    marks.textContent = `${row.marks}m`;
    const diff = document.createElement("span");
    diff.className = "bank-badge";
    diff.dataset.d = row.d;
    diff.textContent = row.d;
    tags.appendChild(marks);
    tags.appendChild(diff);
    if (row.custom) {
      const del = document.createElement("button");
      del.type = "button";
      del.className = "bank-del";
      del.dataset.id = row.id;
      del.setAttribute("aria-label", "Delete custom question");
      del.textContent = "×";
      tags.appendChild(del);
    }
    li.appendChild(text);
    li.appendChild(tags);
    el.bankList.appendChild(li);
  });
}

el.bankList.addEventListener("click", (event) => {
  const btn = event.target.closest(".bank-del");
  if (!btn) return;
  const id = btn.dataset.id;
  saveCustom(loadCustom().filter((q) => q.id !== id));
  renderBank();
  announce("Custom question deleted.");
});

el.addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = el.addText.value.trim();
  if (text.length < 8) {
    el.addText.reportValidity();
    el.addText.focus();
    return;
  }
  const custom = loadCustom();
  if (custom.length >= MAX_CUSTOM) {
    announce("Custom question limit reached.");
    return;
  }
  custom.unshift({
    id: `q${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    subject: el.subject.value,
    marks: Number(el.addMarks.value),
    diff: el.addDiff.value,
    text
  });
  saveCustom(custom);
  el.addText.value = "";
  renderBank();
  announce("Question added to the bank.");
});

/* ---------- controls ---------- */

el.form.addEventListener("submit", (event) => {
  event.preventDefault();
  generate({ newSeed: true });
});

el.shuffle.addEventListener("click", () => generate({ newSeed: true }));

el.mix.addEventListener("click", (event) => {
  const btn = event.target.closest(".seg-btn");
  if (!btn) return;
  state.mix = btn.dataset.value;
  $$(".seg-btn", el.mix).forEach((b) => {
    const on = b === btn;
    b.classList.toggle("is-on", on);
    b.setAttribute("aria-pressed", String(on));
  });
  el.mixNote.textContent = MIX[state.mix].note;
  generate({ newSeed: false });
});

el.subject.addEventListener("change", () => {
  renderBank();
  generate({ newSeed: false });
});
el.exam.addEventListener("change", () => generate({ newSeed: false }));

let classTimer = null;
el.className.addEventListener("input", () => {
  clearTimeout(classTimer);
  classTimer = setTimeout(() => {
    const node = $(".sheet-class", el.paper);
    if (node) node.textContent = el.className.value.trim() || "B.E. Computer Engineering · Semester V";
  }, 160);
});

el.print.addEventListener("click", () => window.print());

/* ---------- init ---------- */

renderBank();
generate({ newSeed: true });
