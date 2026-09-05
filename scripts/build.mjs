// Build: compile courses/**/course.yaml + lessons/*.md into site/data/courses.js
// Usage: node scripts/build.mjs [--check]
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { marked } from "marked";
import { fileURLToPath } from "node:url";

const CHECK = process.argv.includes("--check");
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const COURSES_DIR = path.join(ROOT, "courses");
const OUT = path.join(ROOT, "site", "data", "courses.js");
const PATH_FILE = path.join(ROOT, "curriculum", "core-path.yaml");
const errors = [];
const warn = [];

marked.setOptions({ gfm: true, breaks: false });

function renderBlocks(md) {
  // :::callout Title / :::exercise Title ... ::: → styled div
  // :::predict Question / :::checkpoint Question ... ::: → question with the body hidden behind a button
  return md.replace(/^:::(callout|exercise|predict|checkpoint|figure|video)[ \t]*(.*)\r?\n([\s\S]*?)^:::[ \t]*$/gm, (_, kind, title, body) => {
    if (kind === "figure") {
      // :::figure <src> | <alt text>   body = caption (markdown), should include the credit and licence
      const [src, alt = ""] = title.split("|").map(s => s.trim());
      return `<figure class="fig"><img src="${src}" alt="${alt.replace(/"/g, "&quot;")}" loading="lazy"><figcaption>${marked.parseInline(body.trim())}</figcaption></figure>`;
    }
    if (kind === "video") {
      // :::video <youtube or youtube-nocookie URL> | <title>   body = why to watch it (markdown)
      const [url, vtitle = "Video"] = title.split("|").map(s => s.trim());
      const m = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
      const embed = m ? `https://www.youtube-nocookie.com/embed/${m[1]}` : url;
      return `<figure class="fig video-fig"><iframe class="video" src="${embed}" title="${vtitle.replace(/"/g, "&quot;")}" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe><figcaption>${marked.parseInline(body.trim())}</figcaption></figure>`;
    }
    if (kind === "predict" || kind === "checkpoint") {
      const label = kind === "predict" ? "Predict first" : "Check yourself";
      return `<div class="think ${kind}"><b>${label}</b><p class="think-q">${marked.parseInline(title.trim())}</p><details><summary>Show the answer</summary>${marked.parse(body.trim())}</details></div>`;
    }
    return `<div class="${kind}"><b>${title.trim()}</b>${marked.parse(body.trim())}</div>`;
  });
}
function parseFrontmatter(src, file) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) { errors.push(`${file}: missing frontmatter`); return { meta: {}, body: src }; }
  try { return { meta: yaml.load(m[1]) || {}, body: m[2] }; }
  catch (e) { errors.push(`${file}: bad YAML frontmatter: ${e.message}`); return { meta: {}, body: m[2] }; }
}
function req(obj, keys, where) {
  for (const k of keys) if (obj[k] === undefined || obj[k] === "" || (Array.isArray(obj[k]) && !obj[k].length)) errors.push(`${where}: missing "${k}"`);
}

const courses = [];
for (const school of fs.readdirSync(COURSES_DIR, { withFileTypes: true }).filter(d => d.isDirectory())) {
  const schoolDir = path.join(COURSES_DIR, school.name);
  for (const cdir of fs.readdirSync(schoolDir, { withFileTypes: true }).filter(d => d.isDirectory())) {
    const dir = path.join(schoolDir, cdir.name);
    const yamlPath = path.join(dir, "course.yaml");
    if (!fs.existsSync(yamlPath)) { warn.push(`${dir}: no course.yaml, skipped`); continue; }
    const rel = path.relative(ROOT, yamlPath);
    let meta;
    try { meta = yaml.load(fs.readFileSync(yamlPath, "utf8")); } catch (e) { errors.push(`${rel}: ${e.message}`); continue; }
    req(meta, ["id", "title", "school", "subject", "level", "status", "summary", "description", "outcomes"], rel);
    if (meta.id !== cdir.name) errors.push(`${rel}: id "${meta.id}" must match folder name "${cdir.name}"`);
    if (meta.school !== school.name) errors.push(`${rel}: school "${meta.school}" must match folder "${school.name}"`);
    if (meta.status === "planned") continue;

    const lessonsDir = path.join(dir, "lessons");
    const files = fs.existsSync(lessonsDir) ? fs.readdirSync(lessonsDir).filter(f => f.endsWith(".md")).sort() : [];
    if (!files.length) { warn.push(`${rel}: no lessons yet, skipped`); continue; }
    const lessons = files.map(f => {
      const file = path.relative(ROOT, path.join(lessonsDir, f));
      const { meta: lm, body } = parseFrontmatter(fs.readFileSync(path.join(lessonsDir, f), "utf8"), file);
      req(lm, ["title", "minutes"], file);
      const quiz = Array.isArray(lm.quiz) ? lm.quiz : [];
      if (!quiz.length) warn.push(`${file}: no quiz (lesson will use "mark complete")`);
      quiz.forEach((q, i) => {
        if (!q.q || !Array.isArray(q.options) || q.options.length < 2) errors.push(`${file}: quiz #${i + 1} needs a question and 2+ options`);
        else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) errors.push(`${file}: quiz #${i + 1} answer index out of range`);
      });
      const words = body.split(/\s+/).filter(Boolean).length;
      if (words < 250) warn.push(`${file}: only ${words} words; depth standard expects substantially more`);
      return { id: f.replace(/\.md$/, ""), title: lm.title, minutes: lm.minutes, video: lm.video, objectives: Array.isArray(lm.objectives) ? lm.objectives : [], quiz, content: marked.parse(renderBlocks(body)) };
    });
    // assessments: final test (has quiz) and projects
    const aDir = path.join(dir, "assessments");
    const aFiles = fs.existsSync(aDir) ? fs.readdirSync(aDir).filter(f => f.endsWith(".md")).sort() : [];
    const assessments = aFiles.map(f => {
      const file = path.relative(ROOT, path.join(aDir, f));
      const { meta: am, body } = parseFrontmatter(fs.readFileSync(path.join(aDir, f), "utf8"), file);
      req(am, ["title"], file);
      const quiz = Array.isArray(am.quiz) ? am.quiz : [];
      quiz.forEach((q, i) => {
        if (!q.q || !Array.isArray(q.options) || q.options.length < 2) errors.push(`${file}: item #${i + 1} needs a question and 2+ options`);
        else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) errors.push(`${file}: item #${i + 1} answer index out of range`);
      });
      const type = am.type || (quiz.length ? "test" : "project");
      return { id: f.replace(/\.md$/, ""), title: am.title, type, minutes: am.minutes || 0, pass_mark: am.pass_mark || 0.8, quiz, content: marked.parse(renderBlocks(body)) };
    });
    courses.push({ ...meta, lessons, assessments });
  }
}

if (warn.length) console.warn(warn.map(w => "warn: " + w).join("\n"));
if (errors.length) { console.error(errors.map(e => "ERROR: " + e).join("\n")); process.exit(1); }
if (CHECK) { console.log(`ok: ${courses.length} courses, ${courses.reduce((n, c) => n + c.lessons.length, 0)} lessons`); process.exit(0); }

let corePath = { terms: [] };
try { corePath = yaml.load(fs.readFileSync(PATH_FILE, "utf8")); } catch (e) { console.warn("warn: could not read core-path.yaml: " + e.message); }
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `/* GENERATED by scripts/build.mjs from courses/ and curriculum/core-path.yaml — do not edit by hand. */\nwindow.FOVAL_COURSES = ${JSON.stringify(courses, null, 1)};\nwindow.FOVAL_PATH = ${JSON.stringify(corePath)};\n`);
console.log(`built ${courses.length} courses, ${courses.reduce((n, c) => n + c.lessons.length, 0)} lessons -> ${path.relative(ROOT, OUT)}`);
