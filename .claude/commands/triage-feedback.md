---
description: Turn learner feedback into lesson improvements (see docs/FEEDBACK_LOOP.md)
argument-hint: <path/to/feedback.json or .csv> [course-id]
---
Read `docs/FEEDBACK_LOOP.md`, `docs/EDITORIAL_STANDARDS.md`, and `docs/STYLE_GUIDE.md`. Then read the feedback export at `$ARGUMENTS` (a JSON array or CSV with fields: course, lesson, clarity, struggled, improve, at). If a course id is given as a second argument, filter to it.

Group the feedback by lesson. For each lesson with feedback, summarise: clarity distribution, the recurring things people struggled with (quote representative comments), and the recurring suggestions. Ignore spam and abuse; log it separately.

For each recurring problem, decide which kind it is: (a) the lesson is unclear at a specific point; (b) the lesson is missing something people needed; (c) the lesson is wrong (send to `/fact-check`); (d) the learner wants something the standards or the university goals say no to (say why, and don't do it); (e) a site or platform bug (log to a GitHub issue).

For (a) and (b), propose the specific edit: quote the passage, give the rewrite or the addition, and say which piece of feedback it answers. Make the edits to the lesson file, following the style guide. Then append an entry to the course's `research/REVIEWS.md` headed "Feedback triage <date>" listing every feedback item, its category, and what was done. Run `npm run validate`. Report what changed and what was declined and why.
