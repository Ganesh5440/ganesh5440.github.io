"use strict";

const TOPICS = {
  java: "Java",
  spring: "Spring Boot",
  dbms: "DBMS & SQL",
  dsa: "Data structures",
  web: "Web & HTTP"
};

const BANK = {
  java: [
    { q: "Which keyword makes a variable impossible to reassign?", options: ["final", "static", "const", "immutable"], a: 0, d: "easy", why: "A final variable can be assigned once. static changes ownership, not mutability, and Java has no const keyword." },
    { q: "Which method signature is the entry point of a Java application?", options: ["public void start()", "public static void main(String[] args)", "public static int run()", "void init(String[] args)"], a: 1, d: "easy", why: "The JVM looks for public static void main(String[] args) to launch a class." },
    { q: "Which collection never stores duplicate elements?", options: ["ArrayList", "LinkedList", "HashSet", "ArrayDeque"], a: 2, d: "easy", why: "Set implementations such as HashSet reject duplicates; lists and deques allow them." },
    { q: "For two object references, what does == compare?", options: ["Their content", "Their hash codes", "Whether they point to the same object", "Their runtime class"], a: 2, d: "medium", why: "== compares reference identity. Use equals() for logical equality, and remember to keep equals() and hashCode() consistent." },
    { q: "Which of these is an unchecked exception?", options: ["IOException", "SQLException", "NullPointerException", "ClassNotFoundException"], a: 2, d: "medium", why: "NullPointerException extends RuntimeException, so the compiler does not require it to be caught or declared." },
    { q: "What does the volatile keyword guarantee for a field?", options: ["Atomic compound operations", "Mutual exclusion between threads", "Visibility of writes across threads", "That access is faster"], a: 2, d: "medium", why: "volatile makes writes visible to other threads and prevents reordering around the access, but it does not make count++ atomic." },
    { q: "Which Java 8 feature lets you pass behaviour as an argument?", options: ["Generics", "Annotations", "Lambda expressions", "Modules"], a: 2, d: "medium", why: "Lambdas implement functional interfaces, so behaviour can be passed as a concise expression or method reference." },
    { q: "Which interface must a resource implement to work in try-with-resources?", options: ["Closeable", "AutoCloseable", "Serializable", "Runnable"], a: 1, d: "hard", why: "AutoCloseable defines close(). Closeable extends it for I/O, but AutoCloseable is the requirement." },
    { q: "What is the average time complexity of HashMap.get()?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], a: 0, d: "hard", why: "With a good hash distribution, lookups are constant time on average. Degenerate collisions can push the worst case toward O(n)." },
    { q: "Which call must be the first statement when a constructor delegates to its parent?", options: ["this()", "super()", "new Parent()", "static { }"], a: 1, d: "hard", why: "super() invokes the parent constructor and must come before any other statement in the child constructor." }
  ],
  spring: [
    { q: "Which annotation marks a class as a REST controller?", options: ["@Controller", "@RestController", "@Service", "@Repository"], a: 1, d: "easy", why: "@RestController combines @Controller and @ResponseBody, so return values are written straight to the response body." },
    { q: "Which embedded server does Spring Boot use by default for web apps?", options: ["Jetty", "Undertow", "Tomcat", "Netty"], a: 2, d: "easy", why: "spring-boot-starter-web ships Tomcat by default. Jetty and Undertow can be swapped in." },
    { q: "Which file is the conventional home for Spring Boot settings?", options: ["web.xml", "application.properties", "pom.properties", "beans.xml"], a: 1, d: "easy", why: "application.properties (or application.yml) is loaded automatically from the classpath." },
    { q: "Which annotation maps an HTTP GET request to a handler method?", options: ["@PostMapping", "@RequestMapping(method = DELETE)", "@GetMapping", "@PutMapping"], a: 2, d: "easy", why: "@GetMapping is a shortcut for @RequestMapping with RequestMethod.GET." },
    { q: "Which three annotations does @SpringBootApplication combine?", options: ["@Configuration, @EnableAutoConfiguration, @ComponentScan", "@Bean, @Scope, @Lazy", "@Service, @Repository, @Controller", "@RestController, @RequestMapping, @ResponseBody"], a: 0, d: "medium", why: "It is a convenience annotation for configuration, auto-configuration, and component scanning of the application package." },
    { q: "Which starter brings in Spring MVC and an embedded servlet container?", options: ["spring-boot-starter-data-jpa", "spring-boot-starter-web", "spring-boot-starter-security", "spring-boot-starter-test"], a: 1, d: "medium", why: "spring-boot-starter-web pulls in Spring MVC, Jackson, validation, and Tomcat." },
    { q: "Where is @Bean normally used?", options: ["On an entity field", "On a method inside a @Configuration class", "On a controller method", "On a repository interface"], a: 1, d: "medium", why: "@Bean methods declare objects managed by the Spring container, usually inside @Configuration classes." },
    { q: "What is the default scope of a Spring bean?", options: ["prototype", "request", "singleton", "session"], a: 2, d: "medium", why: "The container creates one shared instance per bean definition unless another scope is specified." },
    { q: "Which annotation binds a URL segment such as /orders/{id} to a method parameter?", options: ["@RequestParam", "@PathVariable", "@RequestBody", "@RequestHeader"], a: 1, d: "hard", why: "@PathVariable reads the {id} template variable. @RequestParam reads query-string values instead." },
    { q: "Which property changes the embedded server port?", options: ["spring.port", "server.port", "http.port", "tomcat.port"], a: 1, d: "hard", why: "Set server.port=9090 in application.properties to override the default 8080." }
  ],
  dbms: [
    { q: "Which normal form removes partial dependencies on a composite key?", options: ["1NF", "2NF", "3NF", "BCNF"], a: 1, d: "easy", why: "2NF requires 1NF plus no non-key attribute depending on only part of a composite primary key." },
    { q: "A primary key must be which of the following?", options: ["Unique and NOT NULL", "Unique but nullable", "Indexed but non-unique", "Always numeric"], a: 0, d: "easy", why: "A primary key uniquely identifies each row and cannot contain NULL values." },
    { q: "Which clause filters groups after aggregation?", options: ["WHERE", "HAVING", "ORDER BY", "LIMIT"], a: 1, d: "easy", why: "WHERE filters rows before grouping; HAVING filters the aggregated groups produced by GROUP BY." },
    { q: "Which join returns only rows with matches in both tables?", options: ["LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "INNER JOIN"], a: 3, d: "medium", why: "INNER JOIN keeps only pairs that satisfy the join condition; outer joins preserve unmatched rows too." },
    { q: "What does a database index primarily speed up?", options: ["Row inserts", "Read lookups", "Bulk deletes", "Disk compaction"], a: 1, d: "medium", why: "Indexes trade extra storage and write cost for faster lookups, joins, and range scans." },
    { q: "Which isolation level prevents dirty reads but still allows non-repeatable reads?", options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"], a: 1, d: "medium", why: "READ COMMITTED only exposes committed data, but a second read in the same transaction can still see a changed row." },
    { q: "In ACID, what does the I stand for?", options: ["Integrity", "Indexing", "Isolation", "Idempotency"], a: 2, d: "medium", why: "Isolation keeps concurrent transactions from interfering with each other's intermediate state." },
    { q: "Which statement changes the structure of an existing table?", options: ["UPDATE TABLE", "ALTER TABLE", "MODIFY TABLE", "CREATE INDEX"], a: 1, d: "medium", why: "ALTER TABLE adds, drops, or changes columns and constraints. UPDATE only changes row data." },
    { q: "Which normal form removes transitive dependencies on non-key attributes?", options: ["1NF", "2NF", "3NF", "4NF"], a: 2, d: "hard", why: "3NF requires 2NF and that non-key columns depend only on candidate keys, not on other non-key columns." },
    { q: "What is the main purpose of a foreign key?", options: ["Speed up joins automatically", "Enforce referential integrity", "Encrypt related rows", "Replace a primary key"], a: 1, d: "hard", why: "A foreign key constrains child rows to reference an existing parent row, protecting referential integrity." }
  ],
  dsa: [
    { q: "Which structure follows last-in, first-out order?", options: ["Queue", "Stack", "Heap", "Graph"], a: 1, d: "easy", why: "A stack pushes and pops from the same end, so the most recent item leaves first." },
    { q: "What must be true before binary search can run?", options: ["The data is sorted", "The data is unique", "The data fits in memory", "The data has no duplicates"], a: 0, d: "easy", why: "Binary search halves the range by comparing against a midpoint, which only works on ordered data." },
    { q: "Which structure drives breadth-first search?", options: ["Stack", "Queue", "Set", "Priority queue"], a: 1, d: "easy", why: "BFS uses a queue to visit nodes in the order they are discovered, level by level." },
    { q: "What is the average lookup time in a balanced binary search tree?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], a: 1, d: "medium", why: "A balanced tree keeps height logarithmic, so search, insert, and delete are O(log n) on average." },
    { q: "Which traversal of a binary search tree yields sorted ascending order?", options: ["Pre-order", "In-order", "Post-order", "Level-order"], a: 1, d: "medium", why: "In-order visits left subtree, node, then right subtree, which produces ascending keys in a BST." },
    { q: "Which O(n log n) sort is stable and has O(n log n) worst-case time?", options: ["Quicksort", "Heapsort", "Merge sort", "Selection sort"], a: 2, d: "medium", why: "Merge sort splits and merges predictably, and equal elements keep their relative order." },
    { q: "Which technique resolves hash collisions by keeping a list per bucket?", options: ["Linear probing", "Chaining", "Double hashing", "Cuckoo hashing"], a: 1, d: "medium", why: "Chaining stores colliding entries in a list or tree attached to the bucket." },
    { q: "Which algorithm finds shortest paths with non-negative edge weights?", options: ["Bellman-Ford", "Dijkstra", "Floyd-Warshall", "Prim"], a: 1, d: "hard", why: "Dijkstra greedily expands the nearest unfinalised node. Negative edges break its guarantee, which is where Bellman-Ford comes in." },
    { q: "What is the worst-case time complexity of quicksort?", options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"], a: 2, d: "hard", why: "Repeatedly poor pivots produce highly unbalanced partitions, degrading to O(n²). Randomised pivots make that unlikely." },
    { q: "Which traversal detects a cycle in a directed graph using a recursion stack?", options: ["Breadth-first search", "Depth-first search", "Binary search", "Two-pointer scan"], a: 1, d: "hard", why: "DFS tracks the active recursion stack; reaching an already-active node proves a back edge and therefore a cycle." }
  ],
  web: [
    { q: "Which status code means a resource was successfully created?", options: ["200 OK", "201 Created", "204 No Content", "202 Accepted"], a: 1, d: "easy", why: "201 Created confirms the request succeeded and a new resource now exists, often with a Location header." },
    { q: "Which port does HTTPS use by default?", options: ["21", "80", "443", "8080"], a: 2, d: "easy", why: "HTTPS defaults to port 443. Port 80 is the default for plain HTTP." },
    { q: "What does 404 Not Found mean?", options: ["The server crashed", "The client is unauthenticated", "The target resource does not exist", "The request was throttled"], a: 2, d: "easy", why: "404 reports that the server cannot find the requested resource, not that the server itself failed." },
    { q: "Which response means the request lacks valid authentication?", options: ["401 Unauthorized", "403 Forbidden", "429 Too Many Requests", "500 Internal Server Error"], a: 0, d: "easy", why: "401 asks the client to authenticate. 403 means the client is known but not allowed to perform the action." },
    { q: "Which HTTP method is not idempotent?", options: ["GET", "PUT", "DELETE", "POST"], a: 3, d: "medium", why: "Repeating a POST can create additional resources. GET, PUT, and DELETE are expected to leave the same end state." },
    { q: "What does CORS control in a browser?", options: ["Which origins may call an API", "How responses are compressed", "Which database the server uses", "How cookies are encrypted"], a: 0, d: "medium", why: "CORS headers tell the browser which cross-origin requests are allowed to read the response." },
    { q: "Which header normally carries a bearer token?", options: ["Content-Type", "Authorization", "Accept", "Referer"], a: 1, d: "medium", why: "Clients send Authorization: Bearer <token>, which the server validates before serving protected routes." },
    { q: "Which status code signals an unexpected server-side failure?", options: ["400 Bad Request", "404 Not Found", "500 Internal Server Error", "301 Moved Permanently"], a: 2, d: "medium", why: "5xx codes are server errors. 500 is the generic response when the server cannot handle an otherwise valid request." },
    { q: "What does statelessness mean in REST?", options: ["The server stores no client session between requests", "The database stores no data", "All responses are cached", "The API cannot use HTTPS"], a: 0, d: "hard", why: "Each request must carry the context the server needs, such as a token. Session state lives on the client, not the server." },
    { q: "Which header sets freshness and caching rules for a response?", options: ["ETag", "Cache-Control", "Connection", "Host"], a: 1, d: "hard", why: "Cache-Control declares max-age, public/private, and revalidation rules. ETag supplies a validator for conditional requests." }
  ]
};

const QUESTION_TIME = 20;
const LB_KEY = "quickquiz-scores-v1";
const NAME_KEY = "quickquiz-name";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const screens = {
  setup: $("#screen-setup"),
  generating: $("#screen-generating"),
  quiz: $("#screen-quiz"),
  result: $("#screen-result")
};

const el = {
  form: $("#setup-form"),
  topic: $("#topic"),
  difficulty: $("#difficulty"),
  count: $("#count"),
  genTopic: $("#gen-topic"),
  genSteps: $$("#gen-steps li"),
  genFill: $("#gen-bar-fill"),
  quizTopic: $("#quiz-topic"),
  quizDiff: $("#quiz-diff"),
  scoreLive: $("#score-live"),
  timeLive: $("#time-live"),
  timerPill: $("#timer-pill"),
  progress: $("#progress-fill"),
  timerBar: $("#timer-fill"),
  qIndex: $("#q-index"),
  qDiff: $("#q-diff"),
  qText: $("#q-text"),
  options: $("#options"),
  feedback: $("#feedback"),
  feedbackIcon: $("#feedback-icon"),
  feedbackTitle: $("#feedback-title"),
  feedbackPoints: $("#feedback-points"),
  feedbackWhy: $("#feedback-why"),
  next: $("#next-btn"),
  nextLabel: $("#next-label"),
  quit: $("#quit-btn"),
  again: $("#again-btn"),
  change: $("#change-btn"),
  ring: $("#ring-fg"),
  pct: $("#result-pct"),
  fraction: $("#result-fraction"),
  resultTitle: $("#result-title"),
  resultSub: $("#result-sub"),
  statCorrect: $("#stat-correct"),
  statStreak: $("#stat-streak"),
  statTime: $("#stat-time"),
  review: $("#review-list"),
  lbScope: $("#lb-scope"),
  lbList: $("#lb-list"),
  saveForm: $("#save-form"),
  playerName: $("#player-name")
};

const state = {
  topic: "java",
  difficulty: "mixed",
  count: 8,
  questions: [],
  index: 0,
  correct: 0,
  streak: 0,
  bestStreak: 0,
  answered: false,
  answers: [],
  startTime: 0,
  totalTime: 0,
  timerId: null,
  deadline: 0,
  genTimers: []
};

function shuffle(list) {
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function showScreen(name) {
  Object.entries(screens).forEach(([key, node]) => {
    node.classList.toggle("is-active", key === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setSeg(container, value) {
  $$(".seg-btn", container).forEach((btn) => {
    const on = btn.dataset.value === value;
    btn.classList.toggle("is-on", on);
    btn.setAttribute("aria-pressed", String(on));
  });
}

function buildQuiz() {
  const pool = BANK[state.topic];
  let chosen;
  if (state.difficulty === "mixed") {
    chosen = shuffle(pool).slice(0, state.count);
  } else {
    const preferred = shuffle(pool.filter((q) => q.d === state.difficulty));
    const rest = shuffle(pool.filter((q) => q.d !== state.difficulty));
    chosen = preferred.concat(rest).slice(0, state.count);
  }
  return chosen.map((q) => {
    const pairs = q.options.map((label, i) => ({ label, isAnswer: i === q.a }));
    const shuffled = shuffle(pairs);
    return {
      q: q.q,
      why: q.why,
      d: q.d,
      options: shuffled.map((p) => p.label),
      a: shuffled.findIndex((p) => p.isAnswer)
    };
  });
}

function startGeneration() {
  clearGeneration();
  state.topic = el.topic.value;
  state.questions = buildQuiz();
  el.genTopic.textContent = `${TOPICS[state.topic]} · ${state.difficulty === "mixed" ? "Mixed difficulty" : state.difficulty[0].toUpperCase() + state.difficulty.slice(1)}`;
  el.genSteps.forEach((li) => li.classList.remove("is-on", "is-done"));
  el.genFill.style.width = "6%";
  showScreen("generating");

  state.genTimers.push(setTimeout(() => {
    el.genSteps[0].classList.add("is-done");
    el.genSteps[1].classList.add("is-on");
    el.genFill.style.width = "42%";
  }, 480));
  state.genTimers.push(setTimeout(() => {
    el.genSteps[1].classList.add("is-done");
    el.genSteps[2].classList.add("is-on");
    el.genFill.style.width = "78%";
  }, 1060));
  state.genTimers.push(setTimeout(() => {
    el.genSteps[2].classList.add("is-done");
    el.genFill.style.width = "100%";
  }, 1560));
  state.genTimers.push(setTimeout(beginQuiz, 1860));
}

function clearGeneration() {
  state.genTimers.forEach(clearTimeout);
  state.genTimers = [];
}

function beginQuiz() {
  clearGeneration();
  state.index = 0;
  state.correct = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.answers = [];
  state.startTime = Date.now();
  state.totalTime = 0;
  el.quizTopic.textContent = TOPICS[state.topic];
  el.quizDiff.textContent = state.difficulty === "mixed" ? "Mixed" : state.difficulty[0].toUpperCase() + state.difficulty.slice(1);
  el.scoreLive.textContent = "0";
  showScreen("quiz");
  el.genSteps.forEach((li) => li.classList.remove("is-on", "is-done"));
  renderQuestion();
}

function renderQuestion() {
  const item = state.questions[state.index];
  state.answered = false;
  el.qIndex.textContent = `Question ${state.index + 1} of ${state.questions.length}`;
  el.qDiff.textContent = item.d[0].toUpperCase() + item.d.slice(1);
  el.qDiff.dataset.diff = item.d;
  el.qText.textContent = item.q;
  el.qText.setAttribute("tabindex", "-1");
  el.progress.style.width = `${(state.index / state.questions.length) * 100}%`;
  el.feedback.hidden = true;
  el.feedback.className = "feedback";
  el.next.disabled = true;
  el.nextLabel.textContent = state.index === state.questions.length - 1 ? "See results" : "Next question";

  el.options.innerHTML = "";
  item.options.forEach((label, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.dataset.index = String(i);
    const key = String.fromCharCode(65 + i);
    btn.innerHTML = `<span class="option-key" aria-hidden="true">${key}</span><span class="option-label"></span>`;
    $(".option-label", btn).textContent = label;
    btn.addEventListener("click", () => answer(i));
    el.options.appendChild(btn);
  });

  startTimer();
  el.qText.focus({ preventScroll: true });
}

function startTimer() {
  stopTimer();
  state.deadline = performance.now() + QUESTION_TIME * 1000;
  el.timerPill.classList.remove("is-low");
  paintTimer(QUESTION_TIME * 1000);
  state.timerId = setInterval(() => {
    const left = Math.max(0, state.deadline - performance.now());
    paintTimer(left);
    if (left <= 0) {
      stopTimer();
      timeOut();
    }
  }, 100);
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

function paintTimer(msLeft) {
  const seconds = Math.ceil(msLeft / 1000);
  el.timeLive.textContent = `${seconds}s`;
  el.timerBar.style.width = `${Math.max(0, Math.min(100, (msLeft / (QUESTION_TIME * 1000)) * 100))}%`;
  el.timerPill.classList.toggle("is-low", seconds <= 5);
}

function answer(choice) {
  if (state.answered) return;
  state.answered = true;
  stopTimer();
  const item = state.questions[state.index];
  const isRight = choice === item.a;
  const buttons = $$(".option", el.options);
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === item.a) btn.classList.add("is-correct");
    else if (i === choice) btn.classList.add("is-wrong");
    else btn.classList.add("is-dim");
  });

  if (isRight) {
    state.correct += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    el.scoreLive.textContent = String(state.correct);
    setFeedback(true, "Correct", "+1", item.why);
  } else {
    state.streak = 0;
    const correctText = item.options[item.a];
    setFeedback(false, "Not quite", "+0", `The correct answer is “${correctText}”. ${item.why}`);
  }
  state.answers.push({ choice, correct: isRight });
  el.next.disabled = false;
  el.feedback.hidden = false;
}

function timeOut() {
  if (state.answered) return;
  state.answered = true;
  const item = state.questions[state.index];
  state.streak = 0;
  $$(".option", el.options).forEach((btn, i) => {
    btn.disabled = true;
    if (i === item.a) btn.classList.add("is-correct");
    else btn.classList.add("is-dim");
  });
  state.answers.push({ choice: null, correct: false });
  setFeedback(false, "Time’s up", "+0", `The correct answer is “${item.options[item.a]}”. ${item.why}`);
  el.feedback.hidden = false;
  el.next.disabled = false;
}

function setFeedback(good, title, points, why) {
  el.feedback.className = `feedback ${good ? "is-good" : "is-bad"}`;
  el.feedbackIcon.textContent = good ? "✓" : "✕";
  el.feedbackTitle.textContent = title;
  el.feedbackPoints.textContent = points;
  el.feedbackWhy.textContent = why;
}

function nextQuestion() {
  if (!state.answered) return;
  if (state.index < state.questions.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  stopTimer();
  state.totalTime = Math.round((Date.now() - state.startTime) / 1000);
  el.progress.style.width = "100%";
  const total = state.questions.length;
  const pct = Math.round((state.correct / total) * 100);
  const radius = 76;
  const circumference = 2 * Math.PI * radius;

  el.pct.textContent = `${pct}%`;
  el.fraction.textContent = `${state.correct} of ${total}`;
  el.statCorrect.textContent = `${state.correct}/${total}`;
  el.statStreak.textContent = String(state.bestStreak);
  el.statTime.textContent = formatTime(state.totalTime);
  el.ring.style.strokeDasharray = String(circumference);
  el.ring.style.strokeDashoffset = String(circumference);
  el.ring.style.stroke = pct >= 70 ? "#8b93ff" : pct >= 40 ? "#fbbf24" : "#ff7a90";

  let title = "Keep going.";
  if (pct >= 90) title = "Excellent run.";
  else if (pct >= 70) title = "Strong run.";
  else if (pct >= 50) title = "Good start.";
  el.resultTitle.textContent = title;
  el.resultSub.textContent = `You answered ${state.correct} of ${total} correctly in ${formatTime(state.totalTime)}.`;

  renderReview();
  el.lbScope.textContent = `${TOPICS[state.topic]} · ${state.difficulty === "mixed" ? "Mixed" : state.difficulty}`;
  renderLeaderboard();
  showScreen("result");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.ring.style.strokeDashoffset = String(circumference * (1 - state.correct / total));
    });
  });
}

function renderReview() {
  el.review.innerHTML = "";
  state.questions.forEach((item, i) => {
    const record = state.answers[i] || { choice: null, correct: false };
    const li = document.createElement("li");
    li.className = `review-item ${record.correct ? "ok" : "miss"}`;
    const given = record.choice === null ? "No answer" : item.options[record.choice];
    li.innerHTML = `
      <span class="review-mark" aria-hidden="true">${record.correct ? "✓" : "✕"}</span>
      <div>
        <p class="review-q"></p>
        <p class="review-a"><strong>Correct:</strong> <span class="correct-label"></span>${record.correct ? "" : ` · You chose: ${escapeHtml(given)}`}</p>
      </div>`;
    $(".review-q", li).textContent = `${i + 1}. ${item.q}`;
    $(".correct-label", li).textContent = item.options[item.a];
    el.review.appendChild(li);
  });
}

function formatTime(totalSeconds) {
  if (totalSeconds < 60) return `${totalSeconds}s`;
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}m ${String(s).padStart(2, "0")}s`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

function loadScores() {
  try {
    const raw = JSON.parse(localStorage.getItem(LB_KEY) || "[]");
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

function saveScores(scores) {
  try {
    localStorage.setItem(LB_KEY, JSON.stringify(scores.slice(0, 30)));
  } catch {
    /* storage may be blocked in private mode */
  }
}

function renderLeaderboard() {
  const scores = loadScores()
    .slice()
    .sort((a, b) => (b.score / b.total) - (a.score / a.total) || b.score - a.score || a.time - b.time)
    .slice(0, 6);
  el.lbList.innerHTML = "";
  if (!scores.length) {
    const empty = document.createElement("li");
    empty.className = "lb-empty";
    empty.textContent = "No runs saved yet. Finish a quiz and add your name.";
    el.lbList.appendChild(empty);
    return;
  }
  scores.forEach((row) => {
    const li = document.createElement("li");
    li.className = "lb-item";
    li.innerHTML = `<span class="lb-name"></span><span class="lb-score"></span>`;
    $(".lb-name", li).textContent = row.name;
    $(".lb-score", li).textContent = `${row.score}/${row.total} · ${row.topic}`;
    el.lbList.appendChild(li);
  });
}

function wireSeg(container, key) {
  container.addEventListener("click", (event) => {
    const btn = event.target.closest(".seg-btn");
    if (!btn) return;
    if (key === "count") state.count = Number(btn.dataset.value);
    else state.difficulty = btn.dataset.value;
    setSeg(container, btn.dataset.value);
  });
}

wireSeg(el.difficulty, "difficulty");
wireSeg(el.count, "count");

el.form.addEventListener("submit", (event) => {
  event.preventDefault();
  startGeneration();
});

el.next.addEventListener("click", nextQuestion);

el.quit.addEventListener("click", () => {
  stopTimer();
  showScreen("setup");
});

el.again.addEventListener("click", () => {
  startGeneration();
});

el.change.addEventListener("click", () => {
  showScreen("setup");
});

el.saveForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = (el.playerName.value || "You").trim().slice(0, 18) || "You";
  const scores = loadScores();
  scores.push({
    name,
    score: state.correct,
    total: state.questions.length,
    topic: TOPICS[state.topic],
    time: state.totalTime,
    at: Date.now()
  });
  saveScores(scores);
  try { localStorage.setItem(NAME_KEY, name); } catch { /* ignore */ }
  renderLeaderboard();
  const btn = $("button", el.saveForm);
  const old = btn.textContent;
  btn.textContent = "Saved ✓";
  setTimeout(() => { btn.textContent = old; }, 1600);
});

document.addEventListener("keydown", (event) => {
  if (!screens.quiz.classList.contains("is-active")) return;
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) return;
  if (!state.answered) {
    const key = event.key.toLowerCase();
    const byLetter = "abcd".indexOf(key);
    const byNumber = "1234".indexOf(key);
    const choice = byLetter >= 0 ? byLetter : byNumber;
    if (choice >= 0 && choice < state.questions[state.index].options.length) {
      event.preventDefault();
      answer(choice);
    }
  } else if (event.key === "Enter") {
    event.preventDefault();
    nextQuestion();
  }
});

(function init() {
  setSeg(el.difficulty, "mixed");
  setSeg(el.count, "8");
  try {
    const name = localStorage.getItem(NAME_KEY);
    if (name) el.playerName.value = name;
  } catch { /* ignore */ }
  renderLeaderboard();
})();
