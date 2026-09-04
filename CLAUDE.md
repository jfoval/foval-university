# Foval University — instructions for Claude Code

Foval University is a free, open, general-education online university. Content lives in this repo as Markdown; a build script compiles it into a static site. Read this file, then the document relevant to your task.

## Read these before working on content
- `docs/EDITORIAL_STANDARDS.md` — what a lesson must be (depth, truth, neutrality, pedagogy). Non-negotiable.
- `docs/CONTENT_PIPELINE.md` — the staged process and the slash commands that run it.
- `curriculum/TAXONOMY.md` — the map of schools and courses. Single source of truth for what exists.
- `curriculum/core-path.yaml` — the recommended progression, used by the site.

## Layout
- `courses/<school>/<course-id>/` — course.yaml, research/, lessons/, assessments/
- `site/` — the static site. `site/data/courses.js` is GENERATED; never edit it by hand.
- `scripts/build.mjs` — compiles courses/ into site/data/. `npm run build`, `npm run validate`.
- `templates/` — starting points for course.yaml, lessons, SOURCES, OUTLINE, REVIEWS.
- `.claude/commands/` — pipeline stages: /new-course, /research-course, /outline-course, /draft-lesson, /review-lesson, /fact-check, /neutrality-audit, /status.
- `docs/PLATFORM_ROADMAP.md` — where the platform is going (accounts, review system, credentials, social).

## Rules
1. Never draft a lesson without the course's `research/SOURCES.md` in context. If it doesn't exist, run Stage 1 first.
2. One lesson per drafting session. Do not batch-generate lessons.
3. Reviews run in fresh-context subagents, never in the same context as the draft.
4. Every lesson change: run `npm run validate` before committing. Run `npm run build` and commit `site/data/courses.js` when publishing.
5. When a course's status changes, update both `course.yaml` and its row in `curriculum/TAXONOMY.md`.
6. Sensitive domains (standards Part 3.4) require the neutrality audit before publish. No exceptions.
6b. School of Christian Studies courses carry `standpoint: christian` and follow standards 3.7: taught from within the faith, labelled as such, objections engaged at full strength. Neutral schools never assert or mock religious claims either way.
7. Lesson content format: YAML frontmatter (title, minutes, objectives, quiz) + Markdown body. `:::callout Title` and `:::exercise Title` blocks (closed with `:::`) render as styled boxes. Raw HTML is allowed but discouraged.
8. Site code is plain HTML/CSS/JS with no framework and no build step. Keep it that way; it must run fast on cheap phones.
9. Commit messages: short imperative subject; body says what changed and why. Content commits name the course and lesson.

## Local preview
`npm run build && npm run serve` then open http://localhost:4173
