---
description: Stage 1. Research a course thoroughly and write research/SOURCES.md
argument-hint: <courses/school/course-id>
---
You are doing Stage 1 (Research) of the Foval Learning Institute content pipeline for the course at `$ARGUMENTS`.

First read, in this order:
1. `docs/EDITORIAL_STANDARDS.md` (all of it)
2. `docs/CONTENT_PIPELINE.md` (Stage 1)
3. `$ARGUMENTS/course.yaml`
4. `templates/SOURCES.md` for the output format
5. The course's row and neighbours in `curriculum/TAXONOMY.md`

Then research. Use WebSearch and WebFetch extensively. You are looking for what the field itself considers canonical, not what ranks well on search. Find and actually read (fetch) where possible:
- The 2–3 textbooks most commonly assigned for this subject at good universities, with their tables of contents
- 2–3 syllabi from strong university courses on this topic (MIT OCW, Yale Open Courses, Stanford, Oxford, Khan Academy for fundamentals, etc.)
- Primary sources where they exist (original texts, foundational papers, official guidance from expert bodies)
- For contested questions in this subject: the best statement of each major position, from its own proponents
- Expert-identified common misconceptions ("things students always get wrong")
- The best existing free resources, so lessons can link rather than duplicate
- For practical subjects: what practitioners (not just academics) say matters, and any safety-critical guidance

Write `$ARGUMENTS/research/SOURCES.md` following the template. For each source say what it is good for and what it establishes. Include a section "What the field considers essential" and a section "Contested questions and the positions on each". Aim for 1,000–3,000 words. Be specific: chapter numbers, page references, section names.

When done, set `status: drafting` in course.yaml, update the course's row in `curriculum/TAXONOMY.md`, and summarise what you found and any concerns about the course's scope.
