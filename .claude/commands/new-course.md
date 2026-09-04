---
description: Stage 0. Scaffold a new course folder from templates
argument-hint: <school-slug> <course-id> "<Course Title>"
---
Arguments: `$ARGUMENTS` (school slug, course id, title in quotes). Verify the school slug is one of the 14 in `curriculum/TAXONOMY.md` and the course appears in that school's table (if not, ask the owner whether to add it). Create `courses/<school>/<course-id>/` with `research/`, `lessons/`, and `assessments/` folders, copy `templates/course.yaml` in and fill it: id, title, school, subject (the school's display name), level from the taxonomy row, `status: research`, and a first-pass summary, description, outcomes, and prerequisites based on the taxonomy note. Update the TAXONOMY.md row to `research`. Then tell the owner the next step is `/research-course courses/<school>/<course-id>`.
