# Drafting brief (Stage 3), Foval Learning Institute

You are drafting ONE lesson. Repo root: /Users/johnfoval/Desktop/Foval University.

Read first, in full, in this order:
1. `docs/VALUES.md`
2. `docs/EDITORIAL_STANDARDS.md` (all; note 1.3: no length ceiling, split only for the learner; and Part 3, including 3.7 if this is a Christian Studies course)
3. `docs/STYLE_GUIDE.md` (this is the voice; write it right the first time)
4. `.claude/commands/draft-lesson.md`
5. `templates/lesson.md` (file format)
6. The course's `course.yaml`, `research/SOURCES.md` (all of it, including any "Corrections" section), and `research/OUTLINE.md` (the conventions at the top, then this lesson's entry, then the entries before and after it)
7. `courses/learning-and-mind/how-to-learn-anything/lessons/01-learning-is-not-performance.md` as the model of a finished lesson: structure, voice, predict/checkpoint blocks, worked-example gap, `## Sources` with bracketed numbers.

Then write the lesson to the path given in your task. Requirements:
- Everything the outline entry specifies, in the voice of the style guide: a professor talking to one student. No em dashes anywhere. None of the banned words or sentence shapes. Contractions. Examples before rules. Say what people get wrong. Admit what is unsettled.
- As long as the teaching needs; never pad, never cut a worked example or mechanism to save words.
- Every figure, date, name, and quote exactly as SOURCES.md records it, with bracketed citation markers keyed to a numbered `## Sources` list. Anything SOURCES.md marks "via secondary source" is either verified now by fetching the primary source (then say so in your report) or omitted. Never invent an example that needs to be true; hypothetical everyday examples must be plainly hypothetical.
- Two or three `:::predict Question` blocks before results are revealed, a `:::checkpoint Question` after each hard idea (body = the hidden answer, closed with `:::`), at least one gap in a worked example where the reader does the next step, at least one `:::exercise Do it now` on real material, and a `:::callout` only when it earns its place.
- Frontmatter: title, minutes, 3–4 verb-first objectives, and a quiz of 5–6 items: at least four application cases not in the text, plausible distractors, option lengths within about 10% of each other, the correct answer NOT systematically the longest, keys spread across A–D, an `explain` on every item that refers to options by letter.
- Claims sorted correctly as established / contested / value per standards 3.1 (and 3.7 for Christian Studies: "History establishes / Scholars argue / We hold by faith", faith commitments in the first person plural, every other group in its own terms).
- Media, per standards 4.5: link the primary sources and the best free explanations in the text; add real images from Wikimedia Commons or other open collections (`:::figure <url> | <alt>` with the caption, credit, and licence as the body) where a picture teaches; embed one or two YouTube videos (`:::video <url> | <title>` with the reason to watch as the body) from reputable channels where a lecture or animation explains better than text, verifying the video exists by fetching its page; and draw a chart or diagram as inline SVG when numbers or structure are the point, built from the real data in SOURCES.md, labelled directly, readable at phone width, in navy #0f2a4a, oxblood #8b1e2d, gold #b08d2a, and greys. No decorative images, no AI-generated imagery, no stock filler. Every image needs alt text and a credit.
- Read well on a phone: short paragraphs, headings every few hundred words.

After writing: run `npm run validate` from the repo root and fix errors; grep your file for "—" (must be zero); re-read against the three tests in standards 1.1 and the style guide's final check, and fix what fails. If you found and verified a new source or example, append it to the course's `research/SOURCES.md` under a heading "Added at draft time (lesson N)" (append only). Report: word count, sources used, what you verified against primaries, and anything you were unsure about. Touch only your lesson file and (append-only) SOURCES.md.
