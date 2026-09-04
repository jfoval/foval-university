# Content Pipeline: How Courses Get Built with Claude Code

This is the operating manual for producing Foval courses at quality and at scale. It exists because the default way of using an AI to write courses (ask for a course, get a course) produces shallow content. The pipeline below is designed so that depth is structural, not a matter of hoping the model tries hard.

## The core idea

**Separate the stages, and give each stage the right inputs.** Research happens before outlining. Outlining before drafting. Drafting one lesson at a time with the research in context. Review in a fresh session by a reviewer whose only job is to find problems. Nothing is published until it passes review and a human signs off.

Each stage is a slash command in `.claude/commands/`. Each produces a file in the course folder. The files are the memory: any future session can pick up where the last one left off by reading them.

## Course folder anatomy

```
courses/<school>/<course-id>/
  course.yaml            metadata, outcomes, status
  research/
    SOURCES.md           the canonical references the course is built from  (stage 1)
    OUTLINE.md           lesson-by-lesson plan with objectives              (stage 2)
    REVIEWS.md           review findings and resolutions, appended over time (stage 4)
  lessons/
    01-slug.md           one lesson per file, frontmatter + Markdown         (stage 3)
    02-slug.md
  assessments/           optional: course-end test, projects                (stage 3)
    final-test.md
    project-*.md
```

Templates for each file are in `templates/`.

## The stages

### Stage 0: Choose and brief
Pick a course from `curriculum/TAXONOMY.md`. Create the folder from `templates/`. Fill in `course.yaml`: audience, prerequisites, what the learner will be able to do. Set `status: research`.

### Stage 1: Research — `/research-course <path>`
The most important stage. Claude uses web search and fetch to find and read:
- The two or three textbooks universities actually assign for this subject, and their tables of contents
- Syllabi from strong university courses on the topic (MIT OCW, Stanford, Oxford, Yale Open Courses, etc.)
- The primary sources, if any (original texts, key papers, official guidance)
- Expert consensus statements and, for contested topics, the best statement of each major position
- The common misconceptions experts complain about
- The best free resources already online, so we link rather than duplicate

Output: `research/SOURCES.md`. It is not a bibliography; it is a working document that says *what each source is good for* and *what the field considers essential*. A good SOURCES.md is 1,000 to 3,000 words. Set `status: drafting` when done.

### Stage 2: Outline — `/outline-course <path>`
From SOURCES.md, produce `research/OUTLINE.md`: the lesson sequence, each with objectives, key ideas, worked examples to include, misconceptions to address, exercises, and which sources it draws on. Also decide the assessments (final test, projects). Update `course.yaml` outcomes to match.

### Stage 3: Draft — `/draft-lesson <path> <n>`
Draft **one lesson**, with SOURCES.md, OUTLINE.md, EDITORIAL_STANDARDS.md, and the previous lesson in context. One lesson per session keeps the model's attention on depth. Output: `lessons/NN-slug.md`. Run `npm run validate` after each.

### Stage 4: Review — `/review-lesson <path> <n>`
Four independent review passes, each run as a subagent with fresh context so it is not anchored on the draft's own framing:
1. **Depth review** against Part 1 of the standards. Names every generic passage.
2. **Fact-check** against Part 2. Verifies every checkable claim against a source, using web fetch. Lists errors.
3. **Neutrality audit** against Part 3. Mandatory for sensitive domains. Lists misclassified claims, failed Turing tests, loaded language, omitted perspectives.
4. **Pedagogy review** against Part 4. Checks objectives, examples, exercises, quiz quality.

Findings are appended to `research/REVIEWS.md`. Then the fixes are applied. Then review again until clean. A lesson that needed heavy rewriting gets a second full review.

### Stage 5: Human sign-off and publish
The owner reads the lesson on a phone. Signs off in REVIEWS.md. When every lesson of a course is signed off, set `status: published`, run `npm run build`, commit, push. GitHub Pages deploys.

### Stage 6: Feedback loop
Learner feedback (from the site's feedback links, GitHub Issues, or later the platform's feedback table) is triaged into REVIEWS.md and fixed. Content is versioned in git, so every change is traceable.

## Working practices that protect quality

- **One lesson per drafting session.** Never "write all 8 lessons". Quality collapses after the second.
- **Research file in context, always.** If SOURCES.md is not loaded, the draft is being written from vibes.
- **Fresh eyes for review.** Reviews run in subagents or new sessions. A model reviewing its own draft in the same context is far too kind to it.
- **Adversarial fact-check.** The fact-checker's prompt says "assume there are errors; find them."
- **Read on a phone before sign-off.** Most learners will be on one.
- **Log everything in REVIEWS.md.** Future sessions and future contributors need the history.
- **Prefer linking to duplicating.** If MIT OCW has the perfect lecture, link it in "Go deeper" and write the lesson around it rather than re-explaining it worse.
- **Update the map.** When a course changes status, update its row in `curriculum/TAXONOMY.md`.

## Throughput

Realistic pace with this pipeline: one lesson researched, drafted, and reviewed per one to two hours of Claude Code time, plus human reading time. A ten-lesson course is a week of part-time work. That is slow compared to "generate a course in five minutes" and it is the reason the content will be worth something.

To scale: run drafting for different courses in parallel sessions or worktrees, since they share no state. Reviews can run as parallel subagents. Research can be batched: research several courses in one school together, since sources overlap.

## Status reporting — `/status`
Prints every course, its status, lesson count, review state, and what the next action is.
