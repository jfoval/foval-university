# The Feedback Loop

Every lesson ends with a direct ask: how clear was it, what did you struggle with, what would make it better. This document is how those answers become better lessons. The goal is a university that gets easier to learn from every month, because the people learning from it are telling us exactly where it's hard.

## What we collect

Per lesson, from the form at the bottom of the page:

| Field | What |
|---|---|
| `course`, `lesson` | which lesson |
| `clarity` | 1 (lost) to 4 (clear throughout) |
| `struggled` | free text: what they had to reread, which section, which idea |
| `improve` | free text: what would have helped |
| `at` | timestamp |

No name, no email, no account. "Report an error" is a separate route (a prefilled GitHub issue) for factual mistakes.

## Where it goes

**Now (Phase 1):** the site is static. Feedback is saved in the learner's browser and, when `window.FOVAL_FEEDBACK_ENDPOINT` is set in `site/index.html`, POSTed as JSON to that endpoint. The endpoint can be:

- **Supabase** (recommended, free tier): a `feedback` table with the fields above, row-level security allowing anonymous inserts only, and the REST URL plus anon key as the endpoint and headers. Ten minutes to set up; the same project becomes the Phase 2 backend.
- **Formspree** or similar: works, but free tiers cap submissions.

Until an endpoint is set, the form still works and tells the learner their feedback is saved locally. Set the endpoint before promoting the site.

**Phase 2:** feedback lives in the platform database next to progress, and the form can attach the learner's quiz score and time-on-lesson automatically, which makes "where did people struggle" answerable with data as well as words.

## How it becomes lesson changes

Weekly, or whenever a lesson has ten or more responses:

1. **Export** the feedback for a course to a JSON or CSV file.
2. **Run `/triage-feedback <file> <course-id>`.** Claude groups it by lesson, finds the recurring struggles and suggestions, and sorts each into: unclear passage, missing content, factual error (routed to `/fact-check`), a request the standards say no to (declined with a reason), or a site bug (logged as an issue).
3. **Edits are made** to the lesson, in the style guide's voice, with each edit traced to the feedback it answers. Everything is logged in the course's `research/REVIEWS.md` under "Feedback triage".
4. **Review as normal.** Substantive changes go through `/review-lesson` again. Small clarifications don't.
5. **Publish** with a line in `CHANGELOG.md`: "Lesson X clarified based on learner feedback."

## What we don't do

- We don't change what's true because it's unpopular. Feedback that a fact is uncomfortable is not feedback that it's wrong; "Report an error" handles wrong.
- We don't add fluff because someone asked for encouragement. Warmth comes from clarity.
- We don't publish individual feedback or identify anyone.
- We don't let a lesson drift from its outline's objectives. If feedback says the objectives are wrong, that's a Stage 2 decision, made deliberately.

## Reading the numbers

- A lesson averaging under 3.0 on clarity needs a rewrite pass, not a patch.
- A lesson where "struggled" comments cluster on one section has a fixable problem; fix that section first.
- A lesson where the comments are all different probably has a pacing problem: too much, too fast. Consider splitting it.
- Watch the quiz-fail rate alongside clarity. High clarity and a high fail rate means the lesson is pleasant and not teaching.
