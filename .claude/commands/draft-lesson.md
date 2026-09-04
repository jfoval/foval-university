---
description: Stage 3. Draft ONE lesson from the research and outline
argument-hint: <courses/school/course-id> <lesson-number>
---
You are doing Stage 3 (Draft) of the Foval University content pipeline. Arguments: `$ARGUMENTS` (course path, then lesson number).

Read first, all of them: `docs/EDITORIAL_STANDARDS.md`, `<course>/course.yaml`, `<course>/research/SOURCES.md`, `<course>/research/OUTLINE.md` (the section for this lesson and the ones before and after), the previous lesson file if it exists, and `templates/lesson.md`.

If SOURCES.md or OUTLINE.md is missing, stop and say which stage must run first.

Draft exactly one lesson to `<course>/lessons/NN-slug.md` (NN zero-padded). Requirements, from the standards:
- Every required element from Part 1.2: reason to care, precise core idea, mechanism, 2+ worked examples, misconceptions, practice, connections, go-deeper, quiz
- 1,200–3,000 words of body. Written from the sources, with specifics: numbers, names, cases, mechanisms
- Footnote markers on checkable claims and a `## Sources` section at the end
- Claims sorted correctly as established / contested / value (Part 3.1). Contested and value questions handled per Part 3
- Quiz of 3–6 questions in frontmatter, at least half application questions, plausible distractors, `explain` on every question
- Frontmatter `objectives` list
- Reads well on a phone: short paragraphs, headings every few hundred words

Before writing, answer for yourself: what would an expert say a beginner always gets wrong here, and what is the one worked example that makes the mechanism click? Build the lesson around those.

After writing, run `npm run validate`, fix any errors, then re-read your draft against the three tests in Part 1.1 and fix what fails. Report what you wrote, the sources used, and anything you were unsure about (the reviewer will want to know).
