---
description: Stage 4. Run the four review passes on a lesson as fresh-context subagents, then apply fixes
argument-hint: <courses/school/course-id> <lesson-number>
---
You are doing Stage 4 (Review) of the Foval Learning Institute content pipeline. Arguments: `$ARGUMENTS` (course path, then lesson number). Locate the lesson file `<course>/lessons/NN-*.md`.

Launch five subagents in parallel, each with fresh context. Give each: the full path to the lesson file, the path to `docs/EDITORIAL_STANDARDS.md`, the path to `<course>/research/SOURCES.md`, and the instruction to read all three before starting. Their briefs:

1. **Depth reviewer**: "Review against Part 1 of the standards. Apply the specificity, expert, and transfer tests to every section. Quote every passage that is generic, hedged, or could have been written without knowing the subject. Check every required element in 1.2 is present and substantive. Be harsh; the goal is to find weaknesses. Do not flag length: a lesson is as long as the teaching needs. Flag padding, which is different."
2. **Fact-checker**: "Assume this lesson contains errors. Find them. Verify every number, date, name, quote, mechanism, and claim against SOURCES.md or by fetching sources on the web. List each claim checked, the verdict (verified / wrong / unverifiable), and the evidence. Flag claims that need a citation and lack one."
3. **Neutrality auditor**: "Review against Part 3. Sort every claim touching a contested or value question into established / contested / value and flag misclassifications. Apply the ideological Turing test to every described position. Flag loaded language, sneering, presentism, motivated framing, and omitted facts a well-informed person from another perspective would insist on. State which perspectives you checked against. If the domain is not sensitive, say so and confirm briefly."
5. **Voice reviewer**: "Read `docs/STYLE_GUIDE.md` in full, then the lesson. Search the lesson for every em dash and every word or sentence shape on the banned lists; quote each with its line. Then read the lesson as a person talking to one student: quote every sentence that sounds like a textbook, a blog, a salesperson, or a machine, and rewrite each in the guide's voice. Check the lesson makes the reader think as they read: are there predict blocks, checkpoints, and an exercise, or is it paragraphs then a quiz? Propose where to add them. Be strict: this is the standard the university lives or dies on."
4. **Pedagogy reviewer**: "Review against Part 4. Check objectives are testable, worked examples precede problems, exercises are real practice, misconceptions are addressed, and the quiz meets 4.3: at least half application questions, plausible distractors, teaching explanations. Propose concrete replacements for weak quiz items."

Each of the five subagents returns a findings list ranked by severity with quoted passages and specific fixes.

When all five return: append a dated review entry to `<course>/research/REVIEWS.md` with every finding. Then apply the fixes to the lesson: rewrite generic passages with specifics from the sources, correct or remove wrong claims, add citations, fix neutrality problems, replace weak quiz items. Record each resolution in REVIEWS.md. Run `npm run validate`.

If findings were severe (wrong facts, failed neutrality, or more than a third of the lesson flagged as generic), say so clearly and recommend a second full review pass after fixes. Summarise for the owner: what was found, what was fixed, what still needs a human decision.
