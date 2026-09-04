/* Foval University — client-side app. Plain JS, no build step, no backend.
   State lives in localStorage and is designed to map 1:1 onto the Phase 2 sync tables. */
(function () {
  "use strict";

  const COURSES = window.FOVAL_COURSES || [];
  const PATH = window.FOVAL_PATH || { terms: [] };
  const SUBJECTS = [...new Set(COURSES.map(c => c.subject))];
  const PASS_MARK = 0.7;
  const REPO = "https://github.com/jfoval/foval-university";
  const K = { progress: "foval.progress.v1", review: "foval.review.v1", activity: "foval.activity.v1", prefs: "foval.prefs.v1" };
  const main = document.getElementById("main");
  const DAY = 86400000;

  /* ---------- storage ---------- */
  const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } };
  const today = () => new Date().toISOString().slice(0, 10);
  function logActivity() { const a = load(K.activity, {}); a[today()] = (a[today()] || 0) + 1; save(K.activity, a); }
  function streak() {
    const a = load(K.activity, {}); let n = 0; const d = new Date();
    if (!a[today()]) d.setDate(d.getDate() - 1);
    while (a[d.toISOString().slice(0, 10)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  const prefs = () => load(K.prefs, { hoursPerWeek: 5 });

  /* progress */
  const lessonState = (cid, lid) => (load(K.progress, {})[cid] || {})[lid] || null;
  function markLesson(cid, lid, data) {
    const p = load(K.progress, {}); p[cid] = p[cid] || {};
    p[cid][lid] = Object.assign({}, p[cid][lid], data, { at: Date.now() });
    save(K.progress, p); logActivity();
  }
  const courseItems = c => [...c.lessons, ...(c.assessments || [])];
  function courseProgress(c) {
    const items = courseItems(c);
    const done = items.filter(l => (lessonState(c.id, l.id) || {}).done).length;
    return { done, total: items.length, pct: Math.round(100 * done / items.length) };
  }
  const courseStarted = c => Boolean(load(K.progress, {})[c.id]);
  const courseComplete = c => { const p = courseProgress(c); return p.done === p.total; };

  /* review bank (spaced repetition, SM-2 style) */
  function addToReviewBank(c, l) {
    const bank = load(K.review, {});
    l.quiz.forEach((q, qi) => {
      const key = `${c.id}/${l.id}/${qi}`;
      if (!bank[key]) bank[key] = { ease: 2.5, interval: 1, due: Date.now() + DAY, reps: 0, lapses: 0, last: null };
    });
    save(K.review, bank);
  }
  function gradeReview(key, correct) {
    const bank = load(K.review, {}); const it = bank[key]; if (!it) return;
    if (correct) {
      it.reps += 1;
      it.interval = it.reps === 1 ? 1 : it.reps === 2 ? 3 : Math.round(it.interval * it.ease);
      it.ease = Math.min(3.0, it.ease + 0.1);
    } else {
      it.reps = 0; it.lapses += 1; it.interval = 1; it.ease = Math.max(1.3, it.ease - 0.2);
    }
    it.last = correct; it.due = Date.now() + it.interval * DAY;
    save(K.review, bank); logActivity();
  }
  function resolveKey(key) {
    const [cid, lid, qi] = key.split("/");
    const c = byId(cid); const l = c && c.lessons.find(x => x.id === lid); const q = l && l.quiz[Number(qi)];
    return q ? { c, l, q, key } : null;
  }
  function reviewStats() {
    const bank = load(K.review, {}); const keys = Object.keys(bank).filter(k => resolveKey(k));
    const due = keys.filter(k => bank[k].due <= Date.now());
    const answered = keys.filter(k => bank[k].last !== null);
    const retention = answered.length ? Math.round(100 * answered.filter(k => bank[k].last).length / answered.length) : null;
    const nextDue = keys.length ? Math.min(...keys.map(k => bank[k].due)) : null;
    return { total: keys.length, due, retention, nextDue };
  }

  /* ---------- helpers ---------- */
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = id => COURSES.find(c => c.id === id);
  const totalMinutes = c => c.lessons.reduce((n, l) => n + (l.minutes || 0), 0);
  const fmtHours = mins => mins < 60 ? `${mins} min` : `${Math.round(mins / 60 * 10) / 10} h`;
  const STANDPOINT = { christian: "Taught from within the Christian tradition. This course makes the case; it does not pretend to be neutral." };
  const spLabel = sp => sp ? `<span class="standpoint-tag">${esc(sp)} standpoint</span>` : "";
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function setActiveNav(path) {
    document.querySelectorAll(".site-nav a").forEach(a => {
      const href = a.getAttribute("href").slice(1);
      a.classList.toggle("active", path === href || (href !== "/" && path.startsWith(href)));
    });
  }
  function render(html, title) {
    main.innerHTML = html;
    document.title = title ? `${title} · Foval University` : "Foval University";
    window.scrollTo({ top: 0 });
  }

  /* ---------- shared pieces ---------- */
  function courseCard(c) {
    const p = courseProgress(c); const started = courseStarted(c);
    return `
      <a class="card" href="#/course/${c.id}">
        <span class="eyebrow">${esc(c.subject)}</span>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.summary)}</p>
        ${spLabel(c.standpoint)}
        <div class="card-meta">
          <span class="card-level">${esc(c.level)}</span>
          <span>${c.lessons.length} lessons</span>
          <span>${fmtHours(totalMinutes(c))}</span>
        </div>
        ${started ? `<div class="progress"><i style="width:${p.pct}%"></i></div><div class="progress-label">${p.done} of ${p.total} lessons complete</div>` : ""}
      </a>`;
  }
  function nextOnPath() {
    for (const t of PATH.terms) for (const e of t.courses) { const c = byId(e.id); if (c && !courseComplete(c)) return c; }
    return null;
  }

  /* ---------- views ---------- */
  function viewHome() {
    const lessons = COURSES.reduce((n, c) => n + c.lessons.length, 0);
    const started = COURSES.filter(courseStarted);
    const rs = reviewStats();
    render(`
      <section class="hero">
        <div>
          <span class="eyebrow">Free. Open. For everyone.</span>
          <h1>Become a genuinely well-educated person, for free.</h1>
          <p class="lede">History, philosophy, mathematics, science, and literature, alongside the practical skills universities skip: money, sales, health, self-reliance, and using AI. Real lessons, real tests, and a review system that keeps what you learn from fading.</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="#/path">Start the path</a>
            <a class="btn btn-secondary" href="#/courses">Browse all courses</a>
          </div>
        </div>
        <div class="hero-card">
          <h3>How it works</h3>
          <ul class="principles">
            <li>Follow the Foval Core, or jump into any course you like</li>
            <li>Every lesson ends with a quiz that tests understanding, not recall</li>
            <li>Questions you've passed come back on a schedule so knowledge stays fresh</li>
            <li>A transcript tallies everything you've learned</li>
          </ul>
          <div class="stat-row">
            <div class="stat"><b>${COURSES.length}</b><span>courses live</span></div>
            <div class="stat"><b>${lessons}</b><span>lessons</span></div>
            <div class="stat"><b>$0</b><span>forever</span></div>
          </div>
        </div>
      </section>
      ${rs.due.length ? `<div class="path-next"><div><h3>${rs.due.length} question${rs.due.length === 1 ? "" : "s"} due for review</h3><p>A few minutes now keeps it from fading.</p></div><a class="btn btn-primary" href="#/review">Review now</a></div>` : ""}
      ${started.length ? `<section class="section"><div class="section-head"><h2>Continue</h2><p><a href="#/my-learning">Your page →</a></p></div><div class="grid">${started.filter(c => !courseComplete(c)).slice(0, 3).map(courseCard).join("")}</div></section>` : ""}
      <section class="section">
        <div class="section-head"><h2>Courses</h2><p><a href="#/courses">See all →</a></p></div>
        <div class="grid">${COURSES.slice(0, 6).map(courseCard).join("")}</div>
      </section>
    `);
  }

  function viewCourses(subject) {
    const list = subject ? COURSES.filter(c => c.subject === subject) : COURSES;
    render(`
      <span class="eyebrow">Catalog</span>
      <h1>All courses</h1>
      <p class="muted">Every course is free and self-paced. Take them in any order, or <a href="#/path">follow the path</a>.</p>
      <div class="filters">
        <button class="chip ${!subject ? "active" : ""}" data-subject="">All</button>
        ${SUBJECTS.map(s => `<button class="chip ${s === subject ? "active" : ""}" data-subject="${esc(s)}">${esc(s)}</button>`).join("")}
      </div>
      <div class="grid">${list.map(courseCard).join("")}</div>
      <p class="muted" style="margin-top:2rem">The full map of planned courses, 14 schools and about 140 courses, is in the <a href="${REPO}/blob/main/curriculum/TAXONOMY.md" target="_blank" rel="noopener">curriculum</a>.</p>
    `, "Courses");
    main.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => {
      const s = b.dataset.subject; location.hash = s ? `#/courses?subject=${encodeURIComponent(s)}` : "#/courses";
    }));
  }

  function viewPath() {
    const pr = prefs(); const next = nextOnPath();
    const terms = PATH.terms.map((t, ti) => {
      let remainingMin = 0;
      const items = t.courses.map(e => {
        const c = byId(e.id);
        if (!c) return `<li><span class="path-item soon"><span class="path-dot"></span><span>${esc(e.title)}${e.optional ? " <span class='path-meta'>(optional)</span>" : ""}${e.standpoint ? " <span class='path-meta'>· " + esc(e.standpoint) + " standpoint</span>" : ""}</span><span class="path-meta">coming soon</span></span></li>`;
        const p = courseProgress(c); const done = p.done === p.total;
        if (!done) remainingMin += totalMinutes(c) * (1 - p.done / p.total);
        return `<li><a class="path-item" href="#/course/${c.id}"><span class="path-dot ${done ? "done" : courseStarted(c) ? "active" : ""}"></span><span>${esc(c.title)}${e.optional ? " <span class='path-meta'>(optional)</span>" : ""}${c.standpoint ? " <span class='path-meta'>· " + esc(c.standpoint) + " standpoint</span>" : ""}</span><span class="path-meta">${done ? "complete" : courseStarted(c) ? `${p.pct}%` : fmtHours(totalMinutes(c))}</span></a></li>`;
      }).join("");
      const live = t.courses.filter(e => byId(e.id)).length;
      const weeks = remainingMin ? Math.max(1, Math.round(remainingMin / 60 / pr.hoursPerWeek)) : 0;
      return `<section class="term">
        <div class="term-head"><span class="term-num">${ti + 1}</span><div><h2 style="margin:0">${esc(t.title)}</h2><p>${esc(t.theme)}</p></div></div>
        <ol class="path-list">${items}</ol>
        <p class="path-meta" style="margin:.5rem 0 0">${live} of ${t.courses.length} courses live${weeks ? ` · about ${weeks} week${weeks === 1 ? "" : "s"} of live content left at ${pr.hoursPerWeek} h/week` : ""}</p>
      </section>`;
    }).join("");
    render(`
      <span class="eyebrow">The Foval Core</span>
      <h1>A path that builds in the right order.</h1>
      <p class="lede" style="max-width:40rem;color:var(--text-2)">Thinking tools first, then numbers, then the world, the physical world, and practical competence, alternating so you're never stuck in one mode. Follow it straight through, or jump anywhere: every course stands alone.</p>
      <div class="budget"><label for="hpw">I can give about</label><select id="hpw">${[1, 2, 3, 5, 8, 12, 20].map(h => `<option value="${h}" ${h === pr.hoursPerWeek ? "selected" : ""}>${h} hour${h === 1 ? "" : "s"}</option>`).join("")}</select><span>a week.</span></div>
      ${next ? `<div class="path-next"><div><h3>Next up: ${esc(next.title)}</h3><p>${esc(next.summary)}</p></div><a class="btn btn-primary" href="#/course/${next.id}">${courseStarted(next) ? "Continue" : "Start"}</a></div>` : `<div class="path-next"><div><h3>You've finished every live course on the path.</h3><p>More are being written. Keep your knowledge fresh in <a href="#/review">Review</a>.</p></div></div>`}
      ${terms}
    `, "Path");
    main.querySelector("#hpw").addEventListener("change", e => { save(K.prefs, { ...prefs(), hoursPerWeek: Number(e.target.value) }); route(); });
  }

  function viewCourse(id) {
    const c = byId(id); if (!c) return viewNotFound();
    const p = courseProgress(c);
    const nextItem = courseItems(c).find(l => !(lessonState(c.id, l.id) || {}).done) || c.lessons[0];
    const nextHref = c.lessons.includes(nextItem) ? `#/course/${c.id}/lesson/${nextItem.id}` : `#/course/${c.id}/assessment/${nextItem.id}`;
    const complete = p.done === p.total;
    const assess = c.assessments || [];
    render(`
      <div class="course-hero">
        <div>
          <span class="eyebrow">${esc(c.subject)} · ${esc(c.level)}</span>
          <h1>${esc(c.title)}</h1>
          ${c.standpoint ? `<div class="standpoint">${esc(STANDPOINT[c.standpoint] || c.standpoint)}</div>` : ""}
          <p class="lede">${esc(c.description)}</p>
          <h3>What you'll learn</h3>
          <ul class="outcomes">${(c.outcomes || []).map(o => `<li>${esc(o)}</li>`).join("")}</ul>
        </div>
        <aside class="course-aside">
          <dl>
            <dt>Lessons</dt><dd>${c.lessons.length}${assess.length ? ` + ${assess.length} assessment${assess.length === 1 ? "" : "s"}` : ""}</dd>
            <dt>Time</dt><dd>${fmtHours(totalMinutes(c))}</dd>
            <dt>Level</dt><dd>${esc(c.level)}</dd>
            <dt>Cost</dt><dd>Free</dd>
          </dl>
          ${courseStarted(c) ? `<div class="progress"><i style="width:${p.pct}%"></i></div><div class="progress-label">${p.done} of ${p.total} complete</div>` : ""}
          <div class="btn-row">
            ${complete ? `<a class="btn btn-primary" href="#/certificate/${c.id}">View certificate</a>` : `<a class="btn btn-primary" href="${nextHref}">${courseStarted(c) ? "Continue" : "Start course"}</a>`}
          </div>
        </aside>
      </div>
      <h2>Syllabus</h2>
      <ol class="lesson-list">
        ${c.lessons.map((l, i) => { const st = lessonState(c.id, l.id) || {}; return `<li class="${st.done ? "lesson-done" : ""}"><a href="#/course/${c.id}/lesson/${l.id}"><span class="lesson-num">${st.done ? "✓" : i + 1}</span><span>${esc(l.title)}</span><span class="lesson-time">${l.minutes} min</span></a></li>`; }).join("")}
      </ol>
      ${assess.length ? `<h2 style="margin-top:2rem">Assessments</h2>
      <ol class="lesson-list">
        ${assess.map(a => { const st = lessonState(c.id, a.id) || {}; return `<li class="${st.done ? "lesson-done" : ""}"><a href="#/course/${c.id}/assessment/${a.id}"><span class="lesson-num">${st.done ? "✓" : a.type === "test" ? "T" : "P"}</span><span>${esc(a.title)}<span class="path-meta" style="margin-left:.5rem">${a.type === "test" ? "final test" : "project"}</span></span><span class="lesson-time">${a.minutes >= 60 ? fmtHours(a.minutes) : a.minutes + " min"}</span></a></li>`; }).join("")}
      </ol>` : ""}
    `, c.title);
  }

  function viewLesson(courseId, lessonId) {
    const c = byId(courseId); if (!c) return viewNotFound();
    const idx = c.lessons.findIndex(l => l.id === lessonId); if (idx < 0) return viewNotFound();
    const l = c.lessons[idx]; const prev = c.lessons[idx - 1], next = c.lessons[idx + 1];
    const st = lessonState(c.id, l.id) || {};
    const hasQuiz = Array.isArray(l.quiz) && l.quiz.length > 0;
    const issueUrl = `${REPO}/issues/new?title=${encodeURIComponent(`Lesson feedback: ${c.title} / ${l.title}`)}&body=${encodeURIComponent(`Course: ${c.id}\nLesson: ${l.id}\n\nWhat was unclear, wrong, or missing:\n\n`)}`;
    render(`
      <div class="lesson-layout">
        <aside class="lesson-side">
          <h4><a href="#/course/${c.id}">${esc(c.title)}</a></h4>
          <ol>${c.lessons.map(x => { const s = lessonState(c.id, x.id) || {}; return `<li><a class="${x.id === l.id ? "current" : ""}" href="#/course/${c.id}/lesson/${x.id}"><span class="tick">${s.done ? "✓" : ""}</span><span>${esc(x.title)}</span></a></li>`; }).join("")}</ol>
        </aside>
        <article class="lesson-body">
          <div class="breadcrumb"><a href="#/courses">Courses</a> / <a href="#/course/${c.id}">${esc(c.title)}</a> / Lesson ${idx + 1}</div>
          <h1>${esc(l.title)}</h1>
          <p class="muted">${l.minutes} min ${st.done ? "· <span style='color:var(--success)'>Completed</span>" : ""}</p>
          ${l.objectives && l.objectives.length ? `<div class="objectives"><b>In this lesson you will learn to</b><ul>${l.objectives.map(o => `<li>${esc(o)}</li>`).join("")}</ul></div>` : ""}
          ${l.video ? `<iframe class="video" src="${esc(l.video)}" title="${esc(l.title)}" allowfullscreen loading="lazy"></iframe>` : ""}
          <div class="lesson-content">${l.content}</div>
          ${hasQuiz ? renderQuiz(l) : `<div class="quiz"><h2>Finished reading?</h2><button class="btn btn-primary" id="markDone">${st.done ? "Completed ✓" : "Mark lesson complete"}</button></div>`}
          <div class="feedback"><span>Was this lesson clear?</span><button data-fb="up" class="${st.fb === "up" ? "on" : ""}">👍 Yes</button><button data-fb="down" class="${st.fb === "down" ? "on" : ""}">👎 Not really</button><a href="${issueUrl}" target="_blank" rel="noopener">Report a problem</a></div>
          <nav class="lesson-nav">
            ${prev ? `<a class="btn btn-secondary" href="#/course/${c.id}/lesson/${prev.id}">← ${esc(prev.title)}</a>` : `<a class="btn btn-secondary" href="#/course/${c.id}">← Course home</a>`}
            ${next ? `<a class="btn btn-secondary" href="#/course/${c.id}/lesson/${next.id}">${esc(next.title)} →</a>` : `<a class="btn btn-primary" href="#/course/${c.id}">Finish course →</a>`}
          </nav>
        </article>
      </div>
    `, l.title);
    main.querySelectorAll("[data-fb]").forEach(b => b.addEventListener("click", () => {
      const p = load(K.progress, {}); p[c.id] = p[c.id] || {}; p[c.id][l.id] = Object.assign({}, p[c.id][l.id], { fb: b.dataset.fb }); save(K.progress, p);
      main.querySelectorAll("[data-fb]").forEach(x => x.classList.toggle("on", x === b));
    }));
    const markBtn = main.querySelector("#markDone");
    if (markBtn) markBtn.addEventListener("click", () => { markLesson(c.id, l.id, { done: true }); markBtn.textContent = "Completed ✓"; afterComplete(c); });
    if (hasQuiz) wireQuiz(c, l);
  }

  function renderQuiz(l, passMark = PASS_MARK) {
    return `<section class="quiz" aria-label="Lesson quiz">
      <h2>Check your understanding</h2>
      <p class="muted">Score ${Math.round(passMark * 100)}% or better to pass.${passMark === PASS_MARK ? " Questions you pass join your review bank." : " Closed book: no looking back at the lessons."}</p>
      <form id="quizForm">
        ${l.quiz.map((q, qi) => `<div class="q" data-q="${qi}"><p class="stem">${qi + 1}. ${esc(q.q)}</p>${q.options.map((o, oi) => `<label><input type="radio" name="q${qi}" value="${oi}" required> <span>${esc(o)}</span></label>`).join("")}</div>`).join("")}
        <button class="btn btn-primary" type="submit">Submit answers</button>
        <div class="quiz-result" id="quizResult" aria-live="polite"></div>
      </form></section>`;
  }
  function wireQuiz(c, l, passMark = PASS_MARK, isTest = false) {
    const form = main.querySelector("#quizForm"); const result = main.querySelector("#quizResult");
    form.addEventListener("submit", e => {
      e.preventDefault(); let correct = 0;
      l.quiz.forEach((q, qi) => {
        const box = form.querySelector(`[data-q="${qi}"]`);
        const chosen = Number(form.querySelector(`input[name="q${qi}"]:checked`).value);
        box.querySelectorAll("label").forEach((lab, oi) => { lab.classList.remove("correct", "wrong"); if (oi === q.answer) lab.classList.add("correct"); else if (oi === chosen) lab.classList.add("wrong"); });
        if (chosen === q.answer) correct++;
        if (q.explain) { let ex = box.querySelector(".explain"); if (!ex) { ex = document.createElement("p"); ex.className = "explain muted"; box.appendChild(ex); } ex.textContent = q.explain; }
      });
      const score = correct / l.quiz.length; const passed = score >= passMark;
      result.className = "quiz-result " + (passed ? "pass" : "fail");
      result.textContent = passed ? `${correct} of ${l.quiz.length} correct. ${isTest ? "Passed." : "Lesson complete. These questions will come back in Review."}` : `${correct} of ${l.quiz.length} correct. ${isTest ? "Not yet. Review the lessons and retake after a day." : "Review the lesson and try again."}`;
      markLesson(c.id, l.id, { done: passed || Boolean((lessonState(c.id, l.id) || {}).done), score });
      if (passed) { if (!isTest) addToReviewBank(c, l); afterComplete(c); }
    });
  }
  function afterComplete(c) {
    if (courseComplete(c)) {
      const nav = main.querySelector(".lesson-nav");
      if (nav && !nav.querySelector(".cert-link")) nav.insertAdjacentHTML("beforeend", `<a class="btn btn-primary cert-link" href="#/certificate/${c.id}">🎓 Get your certificate</a>`);
    }
  }

  /* ---------- Assessments ---------- */
  function viewAssessment(courseId, aid) {
    const c = byId(courseId); if (!c) return viewNotFound();
    const a = (c.assessments || []).find(x => x.id === aid); if (!a) return viewNotFound();
    const st = lessonState(c.id, a.id) || {};
    const lessonsDone = c.lessons.every(l => (lessonState(c.id, l.id) || {}).done);
    const isTest = a.type === "test" && a.quiz.length;
    render(`
      <article class="lesson-body" style="margin:0 auto">
        <div class="breadcrumb"><a href="#/courses">Courses</a> / <a href="#/course/${c.id}">${esc(c.title)}</a> / ${isTest ? "Final test" : "Project"}</div>
        <h1>${esc(a.title)}</h1>
        <p class="muted">${a.minutes >= 60 ? fmtHours(a.minutes) : a.minutes + " min"} ${st.done ? "· <span style='color:var(--success)'>Completed" + (st.score !== undefined ? " · " + Math.round(st.score * 100) + "%" : "") + "</span>" : ""}</p>
        ${!lessonsDone ? `<div class="callout"><b>Finish the lessons first</b><p>This ${isTest ? "test" : "project"} draws on the whole course. You can read it now; complete every lesson before you attempt it.</p></div>` : ""}
        <div class="lesson-content">${a.content}</div>
        ${isTest ? renderQuiz({ ...a, quiz: a.quiz }, a.pass_mark) : `<div class="quiz"><h2>Done with the project?</h2><p class="muted">Mark it complete when your deliverable meets the rubric. Be honest; nobody checks but you, and the point is what you learned.</p><button class="btn btn-primary" id="markDone">${st.done ? "Completed ✓" : "Mark project complete"}</button></div>`}
        <nav class="lesson-nav"><a class="btn btn-secondary" href="#/course/${c.id}">← Course home</a></nav>
      </article>
    `, a.title);
    const markBtn = main.querySelector("#markDone");
    if (markBtn) markBtn.addEventListener("click", () => { markLesson(c.id, a.id, { done: true }); markBtn.textContent = "Completed ✓"; afterComplete(c); });
    if (isTest) wireQuiz(c, a, a.pass_mark, true);
  }

  /* ---------- Review (spaced repetition) ---------- */
  function viewReview(mode) {
    const rs = reviewStats();
    if (!rs.total) {
      return render(`<div class="empty"><h2>Your review bank is empty</h2><p>Pass any lesson quiz and its questions start coming back here on a schedule that keeps them fresh.</p><a class="btn btn-primary" href="#/path">Start learning</a></div>`, "Review");
    }
    const bank = load(K.review, {});
    let queue = mode === "practice" ? shuffle(Object.keys(bank).filter(k => resolveKey(k))).slice(0, 10) : shuffle([...rs.due]);
    if (!queue.length) {
      const days = Math.max(0, Math.ceil((rs.nextDue - Date.now()) / DAY));
      return render(`
        <span class="eyebrow">Review</span><h1>All caught up.</h1>
        <div class="stats">
          <div class="stat-card"><b>${rs.total}</b><span>questions in your bank</span></div>
          <div class="stat-card"><b>${rs.retention === null ? "–" : rs.retention + "%"}</b><span>retention</span></div>
          <div class="stat-card"><b>${days}</b><span>day${days === 1 ? "" : "s"} until next review</span></div>
          <div class="stat-card"><b>${streak()}</b><span>day streak</span></div>
        </div>
        <p class="muted">Nothing is due. Come back when it is, or practise a random set now (practice still reschedules what you get wrong).</p>
        <div class="btn-row"><a class="btn btn-secondary" href="#/review?mode=practice">Practise 10 random</a><a class="btn btn-secondary" href="#/path">Back to the path</a></div>
      `, "Review");
    }
    let i = 0, right = 0;
    render(`
      <span class="eyebrow">Review · ${mode === "practice" ? "practice set" : `${queue.length} due`}</span>
      <h1 style="font-size:1.6rem">Keep it fresh.</h1>
      <div id="card"></div>
    `, "Review");
    const showCard = () => {
      if (i >= queue.length) {
        main.querySelector("#card").innerHTML = `<div class="review-card"><div class="stem">Done. ${right} of ${queue.length} right.</div><p class="muted">Right answers come back later; wrong ones come back tomorrow.</p><div class="btn-row"><a class="btn btn-primary" href="#/review">Back to Review</a><a class="btn btn-secondary" href="#/my-learning">See your transcript</a></div></div>`;
        return;
      }
      const it = resolveKey(queue[i]); if (!it) { i++; return showCard(); }
      const { c, l, q, key } = it;
      main.querySelector("#card").innerHTML = `
        <div class="review-card">
          <div class="from">${esc(c.title)} · <a href="#/course/${c.id}/lesson/${l.id}">${esc(l.title)}</a></div>
          <div class="stem">${esc(q.q)}</div>
          <div class="review-opts">${q.options.map((o, oi) => `<button data-oi="${oi}">${esc(o)}</button>`).join("")}</div>
          <div id="explain"></div>
          <div class="review-foot"><span>${i + 1} of ${queue.length}</span><button class="btn btn-primary" id="nextBtn" hidden>Next →</button></div>
        </div>`;
      main.querySelectorAll(".review-opts button").forEach(b => b.addEventListener("click", () => {
        const oi = Number(b.dataset.oi); const correct = oi === q.answer;
        main.querySelectorAll(".review-opts button").forEach((x, xi) => { x.disabled = true; if (xi === q.answer) x.classList.add("correct"); else if (xi === oi) x.classList.add("wrong"); });
        if (correct) right++;
        gradeReview(key, correct);
        main.querySelector("#explain").innerHTML = `<div class="review-explain">${correct ? "Right." : "Not quite."} ${esc(q.explain || "")}</div>`;
        const nb = main.querySelector("#nextBtn"); nb.hidden = false; nb.focus();
        nb.addEventListener("click", () => { i++; showCard(); });
      }));
    };
    showCard();
  }

  /* ---------- My learning / transcript ---------- */
  function viewMyLearning() {
    const started = COURSES.filter(courseStarted);
    const prog = load(K.progress, {});
    let lessonsDone = 0, minutes = 0;
    COURSES.forEach(c => c.lessons.forEach(l => { if ((prog[c.id] || {})[l.id]?.done) { lessonsDone++; minutes += l.minutes || 0; } }));
    const finished = started.filter(courseComplete); const rs = reviewStats();
    if (!started.length) {
      return render(`<div class="empty"><h2>Nothing here yet</h2><p>Start any course and your transcript begins.</p><a class="btn btn-primary" href="#/path">Start the path</a></div>`, "My learning");
    }
    render(`
      <span class="eyebrow">Transcript</span>
      <h1>My learning</h1>
      <div class="stats">
        <div class="stat-card"><b>${finished.length}</b><span>courses completed</span></div>
        <div class="stat-card"><b>${lessonsDone}</b><span>lessons completed</span></div>
        <div class="stat-card"><b>${fmtHours(minutes)}</b><span>of study</span></div>
        <div class="stat-card"><b>${rs.total}</b><span>questions in review bank</span></div>
        <div class="stat-card"><b>${rs.retention === null ? "–" : rs.retention + "%"}</b><span>retention</span></div>
        <div class="stat-card"><b>${streak()}</b><span>day streak</span></div>
      </div>
      ${rs.due.length ? `<div class="path-next"><div><h3>${rs.due.length} due for review</h3><p>Keep your retention up.</p></div><a class="btn btn-primary" href="#/review">Review now</a></div>` : ""}
      <section class="section"><h2>In progress</h2><div class="grid">${started.filter(c => !courseComplete(c)).map(courseCard).join("") || "<p class='muted'>Nothing in progress.</p>"}</div></section>
      ${finished.length ? `<section class="section"><h2>Completed</h2><ul class="lesson-list">${finished.map(c => `<li><a href="#/certificate/${c.id}"><span class="lesson-num">✓</span><span>${esc(c.title)}</span><span class="lesson-time">certificate</span></a></li>`).join("")}</ul></section>` : ""}
      <section class="section">
        <h3>Your data</h3>
        <p class="muted">Everything is stored in this browser only. Export it to move to another device, or clear it. Accounts with sync are on the roadmap.</p>
        <div class="btn-row">
          <button class="btn btn-secondary" id="exportBtn">Copy my data</button>
          <button class="btn btn-secondary" id="importBtn">Paste my data</button>
          <button class="btn btn-secondary" id="resetBtn">Clear everything</button>
        </div>
      </section>
    `, "My learning");
    main.querySelector("#exportBtn").addEventListener("click", async () => {
      const json = JSON.stringify({ progress: load(K.progress, {}), review: load(K.review, {}), activity: load(K.activity, {}), prefs: prefs(), name: localStorage.getItem("foval.name") || "" });
      try { await navigator.clipboard.writeText(json); alert("Copied. Paste it on your other device under 'Paste my data'."); } catch { prompt("Copy this text:", json); }
    });
    main.querySelector("#importBtn").addEventListener("click", () => {
      const txt = prompt("Paste your data:"); if (!txt) return;
      try { const d = JSON.parse(txt); if (d.progress) save(K.progress, d.progress); if (d.review) save(K.review, d.review); if (d.activity) save(K.activity, d.activity); if (d.prefs) save(K.prefs, d.prefs); if (d.name) localStorage.setItem("foval.name", d.name); route(); }
      catch { alert("That didn't look like Foval data."); }
    });
    main.querySelector("#resetBtn").addEventListener("click", () => {
      if (confirm("Clear all progress, review history, and streaks in this browser? This cannot be undone.")) { Object.values(K).forEach(k => localStorage.removeItem(k)); localStorage.removeItem("foval.name"); route(); }
    });
  }

  function viewCertificate(id) {
    const c = byId(id); if (!c) return viewNotFound();
    const p = courseProgress(c);
    if (p.done < p.total) return render(`<div class="empty"><h2>Not quite yet</h2><p>Finish all ${p.total} lessons to earn this certificate.</p><a class="btn btn-primary" href="#/course/${c.id}">Back to course</a></div>`, "Certificate");
    const name = (() => { try { return localStorage.getItem("foval.name") || ""; } catch { return ""; } })();
    const date = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    render(`
      <div class="cert">
        <div class="seal">🎓</div>
        <span class="eyebrow">Foval University</span>
        <h2>Certificate of Completion</h2>
        <p>This certifies that</p>
        <h3>${name ? esc(name) : "________________"}</h3>
        <p>has completed all ${c.lessons.length} lessons${(c.assessments || []).some(a => a.type === "test") ? " and passed the final test" : ""} of</p>
        <h3>${esc(c.title)}</h3>
        <p class="muted">${date}</p>
      </div>
      <div class="btn-row" style="justify-content:center">
        <button class="btn btn-secondary" id="nameBtn">${name ? "Change name" : "Add your name"}</button>
        <button class="btn btn-primary" id="printBtn">Print / save as PDF</button>
      </div>
    `, "Certificate");
    main.querySelector("#nameBtn").addEventListener("click", () => { const n = prompt("Name to show on the certificate:", name); if (n !== null) { try { localStorage.setItem("foval.name", n.trim()); } catch {} route(); } });
    main.querySelector("#printBtn").addEventListener("click", () => window.print());
  }

  function viewAbout() {
    render(`
      <div class="prose">
        <span class="eyebrow">About</span>
        <h1>Why Foval University exists</h1>
        <p class="lede">Good teaching should not be rationed by price, and a real education should cover both the great questions and the practical skills of living well. Foval University is free, open, and built to make you both well-read and street-smart.</p>
        <h2>What we teach</h2>
        <p>Fourteen schools: thinking tools, mathematics, the natural sciences, history, philosophy and religion, literature and the arts, economics and government, computer science and AI, business, money, health, practical self-reliance, communication, and learning itself. The Foval Core is a recommended path through them, in the order that builds best.</p>
        <h2>How we keep it honest</h2>
        <p>Every lesson is written from the standard references in its field, fact-checked in a separate pass, and audited for neutrality: settled questions are taught as settled, contested ones are taught as contested with every major position given its strongest case, and value questions are described rather than decided. The full standard is public in the <a href="${REPO}/blob/main/docs/EDITORIAL_STANDARDS.md" target="_blank" rel="noopener">editorial standards</a>.</p>
        <h2>How it works</h2>
        <ol>
          <li><strong>Learn.</strong> Follow the path or pick any course. Lessons include worked examples, practice, and a quiz that tests understanding.</li>
          <li><strong>Keep it.</strong> Questions you've passed come back on a lengthening schedule in <a href="#/review">Review</a>, so what you learn stays learned.</li>
          <li><strong>Prove it.</strong> Your transcript tallies everything. Finish a course and print a certificate.</li>
        </ol>
        <h2>Privacy</h2>
        <p>No account is needed. Your progress is stored in your own browser and never sent anywhere. Export it from <a href="#/my-learning">your page</a> to move devices.</p>
        <h2>Contribute</h2>
        <p>The whole university, content and code, lives in the open on <a href="${REPO}" target="_blank" rel="noopener">GitHub</a>. Found an error? Every lesson has a "Report a problem" link.</p>
      </div>
    `, "About");
  }

  function viewNotFound() { render(`<div class="empty"><h2>Page not found</h2><a class="btn btn-primary" href="#/">Go home</a></div>`, "Not found"); }

  /* ---------- router ---------- */
  function route() {
    const raw = location.hash.replace(/^#/, "") || "/";
    const [path, qs] = raw.split("?"); const params = new URLSearchParams(qs || "");
    setActiveNav(path); let m;
    if (path === "/") return viewHome();
    if (path === "/courses") return viewCourses(params.get("subject"));
    if (path === "/path") return viewPath();
    if (path === "/review") return viewReview(params.get("mode"));
    if ((m = path.match(/^\/course\/([^/]+)\/lesson\/([^/]+)$/))) return viewLesson(m[1], m[2]);
    if ((m = path.match(/^\/course\/([^/]+)\/assessment\/([^/]+)$/))) return viewAssessment(m[1], m[2]);
    if ((m = path.match(/^\/course\/([^/]+)$/))) return viewCourse(m[1]);
    if ((m = path.match(/^\/certificate\/([^/]+)$/))) return viewCertificate(m[1]);
    if (path === "/my-learning") return viewMyLearning();
    if (path === "/about") return viewAbout();
    viewNotFound();
  }
  window.addEventListener("hashchange", route);
  route();
})();
