# Foval University

A free, open, general-education online university. The goal is simple to state and hard to do: make a person broadly educated, in the classical sense (history, philosophy, mathematics, science, literature) *and* in the practical sense almost no university bothers with (money, sales, health, self-reliance, using AI). Free for everyone, no accounts required to learn, no ads, ever.

**Live site:** https://jfoval.github.io/foval-university/ (deployed from `site/` by GitHub Pages on every push to main).

## What's here

| Path | What |
|---|---|
| `curriculum/TAXONOMY.md` | The full map: 15 schools, ~155 courses, and the Foval Core progression |
| `curriculum/core-path.yaml` | The Core path as data, used by the site |
| `docs/EDITORIAL_STANDARDS.md` | What every lesson must meet: depth, truth, neutrality, pedagogy |
| `docs/CONTENT_PIPELINE.md` | How courses are researched, drafted, and reviewed with Claude Code |
| `docs/PLATFORM_ROADMAP.md` | Accounts, review system, credentials, social, devices, costs |
| `courses/` | Course sources: Markdown lessons with YAML frontmatter |
| `site/` | The static site (plain HTML/CSS/JS, no framework) |
| `scripts/build.mjs` | Compiles `courses/` into `site/data/courses.js` |
| `.claude/commands/` | Slash commands for each pipeline stage |
| `templates/` | Starting points for new courses and lessons |

## Quick start

```bash
npm install
npm run build      # compile courses/ -> site/data/courses.js
npm run serve      # preview at http://localhost:4173
npm run validate   # check content without building
```

## Building a course with Claude Code

```
/new-course foundations logic-and-argument "Logic and Argument"
/research-course courses/foundations/logic-and-argument
/outline-course  courses/foundations/logic-and-argument
/draft-lesson    courses/foundations/logic-and-argument 1
/review-lesson   courses/foundations/logic-and-argument 1
/status
```

Each stage writes files into the course folder so any later session can pick up where the last left off. The standards document is the contract; the pipeline is how we meet it.

## Writing a lesson by hand

Copy `templates/lesson.md` into `courses/<school>/<course>/lessons/NN-slug.md`. Frontmatter holds title, minutes, objectives, and the quiz. The body is Markdown. `:::callout Title ... :::` and `:::exercise Title ... :::` render as styled boxes. Run `npm run validate`.

## Contributing

Read `docs/EDITORIAL_STANDARDS.md` first. Courses that don't meet it don't ship, however well-intentioned. Open an issue to propose a course; it goes in `curriculum/TAXONOMY.md` as `planned` before any writing starts.

## License

Content: CC BY-SA 4.0. Code: MIT.
