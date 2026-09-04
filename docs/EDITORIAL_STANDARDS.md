# Foval University Editorial Standards

This document defines what a Foval course is and is not. Every lesson is held to it. Claude Code reads it before drafting or reviewing anything. If a lesson does not meet it, the lesson is not done.

The standard has four parts: **Depth**, **Truth**, **Neutrality**, and **Pedagogy**.

---

## Part 1: Depth (the anti-slop standard)

Shallow AI-generated educational content has a recognisable signature: it sounds authoritative, covers the standard headings, and teaches nothing you couldn't have guessed. It is written from the *shape* of the subject rather than from the subject itself. We refuse to produce it.

### 1.1 The three tests

Every lesson must pass all three before review:

1. **The specificity test.** Could this lesson only have been written by someone who actually knows the subject? Generic content survives having its nouns swapped ("Effective marketing requires understanding your audience" works equally for "effective teaching" or "effective parenting"). Real content does not. Every section must contain something specific: a number, a named example, a worked case, a mechanism, a mistake experts make, a historical detail.
2. **The expert test.** Would a professor or practitioner in this field read this and think "yes, that's how it actually works", not "well, that's the simplified version people tell beginners"? Simplify the *language*, never the *truth*. When the real answer is complicated, say so and give the complication.
3. **The transfer test.** After this lesson, can the learner *do* something or *explain* something they could not before, in a situation the lesson did not explicitly cover? If the quiz can be passed by recognising phrases from the text, the lesson has failed this test.

### 1.2 Required elements of a lesson

Every lesson contains, in a natural order:

- **A reason to care**, in the first paragraph. What problem does this solve, what question does it answer, what will you be able to do?
- **The core idea stated precisely**, not just gestured at.
- **The mechanism**: *why* it works, not just *that* it works. Learners who know the mechanism can adapt; learners who know only the rule cannot.
- **Worked examples**: at least two, fully worked, with the reasoning shown. One simple, one with a wrinkle.
- **Common misconceptions**, explicitly named and corrected. Experts know what beginners get wrong. Say it.
- **Practice**: exercises the learner does *before* the quiz. Real practice, not "reflect on...".
- **Connections**: how this relates to earlier lessons and where it leads.
- **Go deeper**: two to four specific further resources (a chapter of a named book, a specific paper, a lecture series), with one line on why each is worth it.
- **A quiz** that tests understanding (see Part 4).

### 1.3 Length

A lesson is as long as it needs to be to actually teach the thing. Typical range is 1,200 to 3,000 words of body text, plus exercises and quiz. Under 800 words is almost always too thin for a real topic. Over 4,000 usually means it should be two lessons. The build script warns below 250 words as a floor; the real bar is higher.

### 1.4 Research before writing

No lesson is drafted without a `research/SOURCES.md` for its course that names the canonical references the course is built from. Writing from general knowledge alone produces the shape-of-the-subject content described above. Writing from the actual standard textbooks, primary sources, and expert material produces depth. The research file is the single biggest lever on quality. See `docs/CONTENT_PIPELINE.md`.

### 1.5 Voice

- Direct, warm, and plain. Second person. Contractions are fine.
- Concrete over abstract. Short words over long ones. Active over passive.
- No throat-clearing ("In this lesson we will explore..."). Start with the substance.
- No hedging filler ("It's important to note that", "Generally speaking"). If something is uncertain, say exactly how and why.
- No hype. Never "unlock", "empower", "transform", "journey", "dive into", "game-changer", "in today's fast-paced world".
- Humour is welcome when it serves clarity.
- Write like a brilliant friend explaining it across a table, not like a textbook and not like a blog.

---

## Part 2: Truth

### 2.1 Every claim is checkable

Any factual claim that a careful reader might question gets a source: numbers, dates, historical events, scientific findings, legal facts, medical claims, quotes. Use a footnote-style marker in the text and a `## Sources` section at the end of the lesson listing them. Uncontroversial common knowledge does not need citing. When in doubt, cite.

### 2.2 Source quality

Prefer, in order:

1. Primary sources (the original text, the study itself, the statute, the data).
2. Standard academic references (the textbooks universities actually assign; peer-reviewed reviews and meta-analyses).
3. Recognised expert bodies and official statistics.
4. Serious journalism and reputable reference works.

Do not cite content farms, SEO articles, marketing pages, or other AI-generated material. Wikipedia is a starting point for finding sources, not a source. If the only support for a claim is low-quality, the claim does not go in.

### 2.3 Fact-checking is a separate pass

Drafting and fact-checking are done in separate sessions with fresh context. The fact-checker's job is adversarial: assume the draft contains errors and find them. Every number, date, name, quote, and mechanism is verified against a source. Claims that cannot be verified are removed or reworded as uncertain.

### 2.4 Say what is uncertain

Where evidence is weak, mixed, or evolving (much of nutrition, psychology, economics, and early history), say so plainly and say why. "The evidence here is weaker than the confident advice you'll see online" is a legitimate and valuable sentence. Calibrated confidence is part of what we teach.

### 2.5 Practical and health content

For health, finance, legal, and safety topics: follow the evidence hierarchy, state the mainstream expert consensus first and clearly, flag where reasonable experts disagree, and include the standard "this is education, not personalised advice" note once per course. Never present a guru's claim as settled. Never omit a safety warning that a competent instructor would give.

---

## Part 3: Neutrality

Foval University's promise is that a learner can trust what they read here because it is not trying to move them toward a political, religious, or ideological conclusion. This is a hard standard because bias is easiest to see in others and hardest in oneself, and because "neutral" is itself a claim people contest. Here is how we operationalise it.

### 3.1 Sort every claim into one of three kinds

1. **Established facts.** Things that are settled by evidence and accepted across the relevant expert community regardless of politics. The Earth is 4.5 billion years old. The Holocaust happened. Compound interest works as described. Vaccines reduce disease. State these plainly with sources. Do not "both-sides" settled questions; false balance is itself a bias.
2. **Contested empirical questions.** Questions about facts where serious, informed people disagree, often because the evidence is genuinely mixed or the question is hard: the effects of minimum wage laws, the causes of the 2008 crisis, the health effects of moderate drinking, how much of intelligence is heritable, what caused the fall of Rome. Present the evidence and the main positions with their **strongest** arguments, say what kind of evidence would settle it, and do not resolve it by editorial preference.
3. **Value questions.** Questions about what is good, right, or ought to be done: whether abortion should be legal, whether God exists, how much a society should redistribute, what makes a life meaningful. Here we **describe, not prescribe**. Present the major traditions and positions in terms their adherents would recognise as fair and complete. The learner's job is to think; ours is to give them the best materials to think with.

Misclassifying is the main way bias enters: treating a contested question as settled, or a settled question as contested. When classifying, ask "is this accepted by experts across the political spectrum?" not "is this accepted by the experts I happen to read?"

### 3.2 The ideological Turing test

For any political, religious, or ideological position described in a lesson: could a thoughtful adherent of that position read the description and say "yes, that is what I believe and why"? If not, rewrite it. This applies equally to positions the author finds obvious and positions the author finds absurd. The test is symmetric or it is worthless.

### 3.3 Language rules

- **Use the terms each group uses for itself.** Not the terms its opponents use.
- **No loaded adjectives** ("so-called", "notorious", "extremist", "enlightened", "regressive", "problematic") applied to positions or people in the author's voice. Report who calls whom what, if relevant.
- **No sneering.** Irony directed at a position signals which side the author is on. Remove it.
- **No presentism.** Describe historical figures in the context of their time and the options they actually had, alongside their consequences. "Person X did Y, which we now recognise as Z" is fine. Judging every past era by the current year's standards is not history.
- **No motivated framing.** Choosing which facts to include is where most bias lives. Include the facts a well-informed opponent would insist on.
- **Attribute opinions.** "Many economists argue..." and "Critics respond..." rather than the author's voice asserting a contested view.
- **Numbers over adjectives.** "Unemployment rose from 5% to 10%" rather than "unemployment soared".

### 3.4 Domains that need the most care

History, economics, political philosophy, religion, sociology, psychology, nutrition, medicine, climate and energy, education, crime, gender and family, race and ethnicity, immigration, and any recent event. In these, the neutrality audit (below) is mandatory, not optional.

### 3.5 The neutrality audit

A separate review pass, in a fresh session, that reads the lesson specifically for: misclassified claims (3.1), failed Turing tests (3.2), language violations (3.3), and omitted facts that a well-informed person from a different perspective would consider essential. The auditor writes down which perspectives they checked against. A lesson in a sensitive domain is not published without this pass.

### 3.6 What neutrality is not

It is not refusing to say true things because they are politically inconvenient to someone. It is not giving equal time to positions the evidence has decisively rejected. It is not vagueness. A neutral lesson on evolution teaches evolution. A neutral lesson on the effects of rent control reports the strong economist consensus and the minority view and the evidence for each. A neutral lesson on abortion explains what each side actually believes and why, in full, and reaches no verdict.

---

## Part 4: Pedagogy

### 4.1 Learning objectives

Each lesson's frontmatter states two to four objectives beginning with a verb the learner could be tested on: *explain, calculate, identify, compare, apply, build*. Not *understand* or *appreciate*.

### 4.2 The lesson follows how people learn

The research on learning is unusually clear and we apply it:

- **Retrieval practice**: quizzes and exercises require recalling and using, not recognising.
- **Spacing**: later lessons deliberately revisit earlier ideas. Course-end tests draw on the whole course.
- **Worked examples before problems**: show it fully, then have them do it.
- **Interleaving**: practice mixes types of problems rather than blocking one type.
- **Elaboration**: "why" questions, connections to what the learner already knows.
- **Desirable difficulty**: the exercise should be a little harder than comfortable.

### 4.3 Quiz standards

- Three to six questions per lesson. Multiple choice with three or four options.
- Each question tests a learning objective. At least half require *applying* the idea to a case not in the text, not recalling a phrase.
- Distractors are plausible: they are the mistakes a learner who half-understood would make. No obviously silly options.
- Every question has an `explain` field that teaches, especially for the wrong answers.
- Pass mark is 70%. Learners can retake.

### 4.4 Assessments beyond quizzes

Courses include, as appropriate: a **course-end test** drawing on all lessons; **projects** with a clear deliverable and a rubric; and **applied exercises** that have the learner do the real thing (write the email, build the budget, run the experiment, make the sale). Projects are where learning becomes competence. Every course of six or more lessons has at least one.

### 4.5 Accessibility and devices

Lessons must read well on a phone. Short paragraphs, headings every few hundred words, tables that fit or degrade gracefully, code blocks that scroll horizontally, no essential information conveyed only by colour or images. Alt text on every image. Videos are supplementary, never the only carrier of content.

---

## Definition of Done

A lesson is done when:

- [ ] It was drafted from the course's `research/SOURCES.md`, not from general recall
- [ ] It passes the specificity, expert, and transfer tests (1.1)
- [ ] It has every required element (1.2)
- [ ] Every checkable claim has a source and the fact-check pass found no remaining errors (Part 2)
- [ ] Claims are correctly sorted as established / contested / value (3.1) and the neutrality audit is clean, if the domain is sensitive (3.4)
- [ ] The quiz meets 4.3 and at least half its questions require application
- [ ] It reads well at phone width
- [ ] A human has read it and signed off

Reviewers record their findings in the course's `research/REVIEWS.md`.
