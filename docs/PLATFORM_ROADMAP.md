# Platform Roadmap

How Foval University gets from a static prototype to a full learning platform with accounts, progress sync, continual review, social accountability, and credentials, without ever compromising "free for everyone" or "works on any device".

## Principles

1. **Content is the product; the platform serves it.** Content lives in git as Markdown, forever. Every platform decision must keep that true.
2. **Free means free.** No ads, no paywalls, no data selling. Infrastructure must cost near zero at small scale and scale cheaply. Static hosting plus a free-tier backend does this.
3. **Any device, first.** Phone-first responsive design, installable as a web app, lessons readable offline. Native apps only if a web app cannot do something we need.
4. **No lock-in.** Learner data is exportable. Accounts are optional for reading; required only for sync and social features.
5. **Ship in phases.** Each phase is usable on its own.

---

## Phase 0: Prototype (done)

- Static site: catalog, course pages, lessons, quizzes, browser-local progress, certificates.
- Content pipeline: Markdown sources, build script, editorial standards, slash commands.
- Four starter courses at `review` status.

## Phase 1: Content engine and public launch

**Goal:** a live site with a growing set of courses that meet the standards.

- GitHub Pages deploy on every push (`.github/workflows/pages.yml`).
- Progressive Web App: manifest and service worker so the site installs on phones and lessons read offline.
- **Path page**: the Foval Core as a guided progression. Shows where you are, what's next, what's coming soon. Any course can still be taken in any order.
- **Review page (continual testing)**: spaced-repetition review across every quiz question from every lesson you've completed. Questions come back on a schedule that lengthens each time you get them right and resets when you miss. This is the "keep it fresh" feature and it works entirely in the browser from day one.
- **Transcript**: a running tally of every lesson and course completed, hours studied, questions answered, current retention rate.
- **Public changelog**: `CHANGELOG.md` lists every course published and every platform change. No indefinite "beta".
- **Feedback**: a "Was this lesson clear?" thumbs up/down plus a comment link on every lesson. In Phase 1 this opens a prefilled GitHub Issue; in Phase 2 it writes to the feedback table.
- Run the content pipeline on the first Core courses. Target: the whole of Term 1 and Term 2 of the Core published.

**Stack:** plain HTML/CSS/JS, no framework, no build beyond `scripts/build.mjs`. This is deliberate: fastest on cheap phones, trivially hostable, and anyone can contribute.

## Phase 2: Accounts and sync

**Goal:** sign in on any device and your progress follows you.

- **Backend: Supabase** (free tier: 50k monthly active users, Postgres, auth, row-level security). Alternatives considered: Firebase (fine, less open), a custom server (more to maintain). Supabase wins on cost, openness, and Postgres.
- **Auth:** email + password, magic link, and Google sign-in. Username chosen at signup for social features.
- **Tables:** `profiles`, `lesson_progress` (user, course, lesson, done, score, at), `review_items` (user, question id, ease, interval, due), `feedback` (user or anon, lesson, rating, comment), `study_sessions` (for streaks and hours).
- **Sync strategy:** the browser stays the source of truth while offline; on sign-in, merge local progress with the server (union of completions, max of scores, latest review schedule). No feature is lost for signed-out users.
- **Content stays static.** The site keeps loading `courses.js` from GitHub Pages; only learner state goes to Supabase. The two can never be out of step in a way that matters.
- Migration path: Phase 1's local progress format is designed to map 1:1 onto these tables.
- **Audio mode**: every lesson gets a narrated audio version (generated from the lesson text, reviewed for pronunciation), with playback speed control, so a course can be taken on a walk or a commute. Offline download comes free with the PWA cache.

## Phase 3: Assessment and credentials

**Goal:** completing a Foval course means something.

- **Course-end tests**: drawn from the whole course, timed, randomised item order, pass mark 80%.
- **Projects**: deliverable plus rubric. Self-assessed against the rubric in Phase 3; peer-reviewed in Phase 4.
- **AI-assisted feedback on free-response work**: written exercises and projects get feedback from Claude against the rubric. Not grading, feedback. Humans (and later peers) grade.
- **"Ask this lesson"**: a question box on every lesson that answers only from that lesson's text and its cited sources, quoting the passage it drew on. Grounded, so it cannot drift from the reviewed content. Capped per user per day.
- **Verified certificates**: each certificate gets a unique ID and a public verification page (`/verify/<id>`), so anyone can confirm it's real. This is what makes a LinkedIn credential meaningful.
- **LinkedIn**: certificates carry the fields LinkedIn's "Add to profile" flow needs (name, issuer, issue date, credential ID, credential URL). One click adds it. Every certificate states plainly that Foval is not an accredited institution and the credential is not academic credit.
- **Open Badges**: issue certificates in the Open Badges 3.0 standard (the open, verifiable credential format used by universities and employers), so they work in any badge wallet. The Foval Core completion becomes a single, serious credential: the "Foval Core Diploma".
- **Accreditation, honestly:** formal accreditation as a degree-granting institution is a multi-year regulatory process and mostly not what a free general-education project should chase. What *is* achievable and worth more to most learners: rigorous, verifiable, public assessments; a transcript anyone can check; content quality that earns a reputation; and partnerships with employers or other institutions who agree to recognise Foval credentials. Reputation is earned by the tests being hard and the content being good. Build that first.

## Phase 4: Social and accountability

**Goal:** learning with people you know, without turning into a social network.

- **Rules first**: community guidelines, moderation procedure, and an appeals process are written and published before any social feature switches on. Moderation decisions are logged. Removing someone for criticising Foval is never a valid reason.
- **Connections**: add friends and family by username. See each other's transcript, streak, and what you're each studying now. That's it. No feed, no likes.
- **Study groups**: a small group takes a course together on a shared schedule; a group page shows everyone's progress on it. Works for families, couples, book clubs, teams.
- **Accountability**: opt-in weekly email or push to your connections: "Alex finished Logic and Argument this week." Opt-in nudges when you go quiet.
- **Discussion per lesson**: a thread under each lesson for questions and answers. Moderated. Good answers get folded back into the lesson via the content pipeline.
- **Peer review** for projects: reviewers are learners who have completed the course; rubric-guided.

## Fun, without being cheesy

The line: fun that comes from the *learning* being satisfying, not from stickers layered on top. Things that pass that bar:

- **The transcript itself.** Watching a real record of everything you know grow is the core satisfaction. Make it beautiful and shareable.
- **Retention score.** The Review system produces an honest number: how much of what you've learned you can still recall. Keeping it high is a real game.
- **Streaks, quietly.** A study streak shown on your dashboard, never nagged about.
- **Great questions.** Quiz questions that are genuinely interesting puzzles ("A ship leaves Rome in 50 BC...") rather than recall. Fun comes from good problems.
- **Milestones with substance.** Finishing a Core term earns a named milestone ("Foundations") with a page showing what you can now do. Not a badge with a cartoon.
- **Capstone.** The Core ends with teaching something to someone else and writing it up. That's the graduation.
- **Reading lists and "go deeper".** Learners who finish a course get a curated next-reads list. Intrinsic reward.
- **Occasional wit in the writing.** The standards allow humour that serves clarity. A course that's a pleasure to read is the most durable fun there is.

Things that fail the bar and we won't do: points for logging in, cartoon mascots, confetti, leaderboards, "XP".

## What we took from Peterson Academy

`docs/INSPIRATION.md` researched Peterson Academy in detail. Adopted: the roughly eight-hour course as the standard unit with total hours on every card; per-lesson quizzes plus a course final; a term-structured core with prerequisite and follow-up links; audio mode with playback speed and offline; a lecture-grounded "Ask" feature; course sequences rather than one-offs; a public changelog. Deliberately different: free rather than $399 a year; a published balance policy with a review pass instead of a stated mission against "indoctrination"; written and project assessment rather than lecture-only; community rules and appeals before any social feature; verifiable certificates that say what they are; and coverage of the gaps they leave (computer science, AI, statistics, chemistry, languages, and the whole practical strand).

## Devices

- **Phase 1**: responsive web, PWA install, offline lesson cache.
- **Phase 2**: push notifications via the PWA for review reminders (opt-in).
- **Later, if needed**: wrap the PWA with Capacitor for App Store / Play Store listings. Same code.

## Cost projection

| Scale | Hosting | Backend | Total / month |
|---|---|---|---|
| Launch to 10k users | GitHub Pages: $0 | Supabase free tier: $0 | $0 |
| 10k–100k users | Cloudflare Pages: $0 | Supabase Pro: $25 | ~$25 + usage |
| 100k+ | CDN: ~$20 | Supabase Team or self-hosted Postgres | ~$100–500 |

AI-assisted feedback (Phase 3) is the one meaningfully variable cost; cap it per user per month.

## What we are not building

A video platform (link to great lectures instead), a marketplace for instructors, a social feed, or anything that would need advertising to fund.
