---
description: Report the status of every course and the next action for each
---
Read `curriculum/TAXONOMY.md` and every `courses/**/course.yaml`. For each course folder, check which of `research/SOURCES.md`, `research/OUTLINE.md`, `research/REVIEWS.md` exist, count lessons in `lessons/`, and read the last entry of REVIEWS.md if present. Run `npm run validate` and include its output.

Print a table: course, school, status, lessons, research done?, outline done?, last review, next action (e.g. "/research-course", "/draft-lesson 4", "/review-lesson 2", "human sign-off", "publish"). Flag any course whose `status` in course.yaml disagrees with its TAXONOMY.md row. Then list the three highest-value next actions across the project.
