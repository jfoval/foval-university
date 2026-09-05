---
title: "All, no, some: checking a syllogism in two minutes"
minutes: 40
objectives:
  - Translate everyday sentences into the four categorical forms (all, no, some, some not) and state the exact sentence that contradicts each one
  - Test a two-premise syllogism for validity with a three-circle Venn diagram and name the counterexample when it fails
  - Explain why "some A are B" does not mean "some A are not B", and spot where an argument leans on the wrong reading
  - Choose between the conditional shapes of lesson 3 and the Venn check when you meet a deductive argument
quiz:
  - q: >-
      A council notice reads, "All vehicles parked on this street overnight hold a permit." A neighbour says, "The van across the road holds a permit, so it's one of the ones parked here overnight." Put it in standard form and check it. What do you find?
    options:
      - Valid, since the premises can only both be true if the van is among the overnight parkers
      - Invalid, but only because the council's first premise is unlikely to be true in practice
      - Valid, because it has the same shape as modus ponens with categories instead of conditionals
      - Invalid; a permit holder who parks here by day and elsewhere by night fits both premises
    answer: 3
    explain: >-
      The shape is "All overnight parkers are permit holders; the van is a permit holder; so the van is an overnight parker." Both premises put things inside the permit-holder circle without ever saying the circle contains only overnight parkers, so the region "permit holder, not an overnight parker" is left open, and that is the counterexample in D. Option A asserts what the diagram denies. Option B confuses step 4 with step 5 of the check; a doubtful premise is a different fault from an invalid link, and this link is invalid however true the premises are. Option C names the wrong shape; the argument runs from "all A are B" and "this is B" to "this is A", which is the categorical cousin of affirming the consequent, not of modus ponens.
  - q: >-
      Nadia announces, "Nobody on the sales team filled in the survey." You think she's wrong. Which single thing, if you could show it, would prove her statement false?
    options:
      - That most of the sales team filled the survey in, rather than merely one or two of them
      - That the whole sales team filled the survey in, which is the direct opposite of her claim
      - That one person on the sales team filled the survey in, whoever it is and however few
      - That someone on the sales team did not fill it in, which shows the team was divided
    answer: 2
    explain: >-
      The sentences "no A are B" and "some A are B" are contradictories. Exactly one of them is true, so a single salesperson who filled in the survey makes "nobody did" false. That is option C. Option A would also refute her, but it proves far more than you need and is much harder to show. Option B is the contrary, not the contradictory; both "nobody" and "everybody" can be false at once, so aiming for it wastes effort. Option D is a statement that agrees with Nadia; someone not filling it in is exactly what she said about everyone.
  - q: >-
      An inspection report says, "Some of the bridges inspected this year need repair." A councillor replies, "So the report admits that some of them are fine." What has the councillor done?
    options:
      - Read the report correctly, since a report that meant all of them would have said so
      - Drawn a conclusion the sentence never made; "some need repair" is true even if all do
      - Made an error of degree, because "some" in an official document means fewer than half
      - Read it correctly, provided the inspectors actually looked at every bridge in the area
    answer: 1
    explain: >-
      In logic "some A are B" means at least one A is B, and it is compatible with all of them being B. The report's sentence would still be true if every bridge needed repair, so it gives no support to "some are fine". That is option B. Option A describes the everyday expectation, a conversational implicature; it is a reasonable guess about what the writer might have said, not something the sentence asserts, and an inspector who found that every bridge needed repair could still have written that sentence truthfully. Option C invents a threshold that "some" does not have. Option D changes the subject; how many bridges were inspected has no bearing on what "some" means.
  - q: >-
      "Some of the shops on the high street open on Sundays. All shops that open on Sundays pay the higher business rate. So some shops on the high street pay the higher rate." You draw the three circles, shade the universal premise, then place the X. What does the finished diagram show?
    options:
      - Valid; the shading leaves the X one place to go, and that place is inside what the conclusion needs
      - Invalid; the X lands on a line between two regions, so the conclusion is not forced by the premises
      - Invalid; a premise with "some" and a premise with "all" cannot together support any conclusion at all
      - Valid only if you add the assumption that there is at least one shop on the high street to begin with
    answer: 0
    explain: >-
      Shade first. "All Sunday-openers pay the higher rate" empties the part of the Sunday-openers circle outside the higher-rate circle. Now "some high street shops are Sunday-openers" needs an X in the overlap of high street and Sunday-openers; that overlap is cut in two by the higher-rate circle, but one half is already shaded, so the X goes in the other half, which is inside the high street and higher-rate overlap. The conclusion is already drawn, so option A. Option B describes the case where neither half is shaded, which is not this case. Option C is false in general; this very argument is the counterexample. Option D confuses this with existential import; the "some" premise already asserts that such a shop exists.
  - q: >-
      "Some of the players are carrying injuries. All the goalkeepers are players. So some of the goalkeepers are carrying injuries." Which verdict is right, and why?
    options:
      - Valid, because every goalkeeper is a player and the premises say that some players are injured
      - Valid, as long as the squad has at least one goalkeeper, which any real squad certainly does
      - Invalid; the injured X sits on the goalkeeper line, so the injured may all be outfielders
      - Invalid, because the conclusion is one you would need medical records to believe, not logic
    answer: 2
    explain: >-
      Shade "all goalkeepers are players" by emptying the goalkeeper crescent outside players. Then "some players are injured" wants an X in the players and injured overlap, and that overlap is cut by the goalkeeper circle with neither half shaded. So the X goes on the line, and the conclusion, which needs an X definitely inside goalkeepers, is not forced. That is option C, and the counterexample is a squad where the injured players are all outfielders. Option A is the implicature at work; "some players" does not reach every kind of player. Option B is about existential import, which is not the gap here; the gap is which players. Option D judges the conclusion instead of the link, which is belief bias, and gets the reason wrong even though the verdict happens to be right.
  - q: >-
      A sign on a door says, "Only staff may use this door." Which standard-form sentence says the same thing?
    options:
      - All staff are people who may use this door
      - All people who may use this door are staff
      - Some staff are people who may use this door
      - Some people who may use this door are staff
    answer: 1
    explain: >-
      The word "only" reverses the direction, exactly as "only if" did in lesson 3. The sign restricts who may use the door: if you may use it, you are staff. That is option B. Option A is what most people first write, and it says something the sign does not: that every member of staff may use it, when the sign is silent on whether some staff are barred. Options C and D are far too weak; the sign is a rule about everyone who uses the door, not a report that at least one person does.
---

Someone at work says this to you in the lift: "Everyone who gets promoted here has done the leadership course. Everyone on my team has done the course. So everyone on my team is going to get promoted."

Put it in standard form, the way lesson 1 taught you:

1. All people who get promoted here are people who have done the course.
2. All people on my team are people who have done the course.
C: All people on my team are people who get promoted here.

Something is wrong, and you can probably feel it. But feeling it isn't checking it, and if the conclusion had been one you liked, you might not have felt it at all. Lesson 2 gave you the counterexample method: imagine a case where both premises are true and the conclusion false. That works, and it takes imagination, which runs out when you're tired or when the argument is about something you care about. This lesson gives you the same test done with a pencil. You draw three circles, draw the premises, and look. If the conclusion is already on the page, the argument is valid. If it isn't, the gap on the page is your counterexample.

This is still step 4 of the six-step check. Find the conclusion, find the premises, supply what's missing, test the link, test the premises, and only then consult your opinion of the conclusion. Lesson 3 gave you four fast shapes for arguments built from "if". This lesson gives you one fast method for arguments built from "all", "no", and "some". Between them they cover most of the deductive arguments you'll meet, and the rest of the course is about the arguments that aren't deductive at all.

## The four sentences

Everything here is built from four sentence shapes. A and B stand for any two categories: dogs, mammals, people on my team, things that flood.

- All A are B.
- No A are B.
- Some A are B.
- Some A are not B.

Aristotle worked out the logic of these four in the *Prior Analytics*, in the fourth century BC, and the method you're about to learn is a much later picture of his system, drawn with circles (Smith, 2022).[1] It's old because it works.

Everyday sentences don't arrive in these shapes, so the first skill is translation. Here's what people get wrong.

**Bare plurals mean "all".** "Dogs are mammals" is "All dogs are mammals." "Ground-floor flats flood" is a claim about all of them, and the speaker will retreat to "well, most of them" the moment you find one that didn't. That retreat matters: "most" isn't one of the four forms, and an argument built on "most" is an inductive argument, which is lesson 5's business.

**"Not all" is not "none".** "Not all the trains were late" means "Some trains were not late." It does not mean "No trains were late." This one starts more bad rebuttals than any other, and there's a section on it below.

**"All A are not B" is ambiguous in English.** "All the shops are not open" usually means "Not all the shops are open" (some are shut), but sometimes means "No shops are open." Ask which. Don't guess.

**"Only" reverses the direction.** "Only members may park here" is "All people who may park here are members." It is not "All members may park here." This is the same reversal as "only if" in lesson 3: "only" tells you what's necessary, not what's sufficient.

**"Some" means "at least one".** "A few of the applicants are qualified", "there are applicants who are qualified", "at least one applicant is qualified": all of these are "Some applicants are qualified." And, as you'll see, so is "all of the applicants are qualified", which surprises people.

:::checkpoint "Only ticket holders will be admitted." Write it as one of the four forms. Then say what it does not tell you.
All people who will be admitted are ticket holders. It does not tell you that every ticket holder will be admitted; the venue could still turn a ticket holder away for being drunk, and the sign would stand.
:::

## What "some" means

In logic, "Some A are B" means: at least one A is B. That's all. It says nothing about the rest of the As.

So "Some of the students passed" is true if one student passed, true if half did, and true if every single one did. Read that last clause again, because it's the one people fight. If all the students passed, then certainly at least one did, so "some passed" is true.

Why does it feel wrong? Because in conversation, if you knew that everyone passed, you'd say so. Saying "some" when you could have said "all" invites the listener to conclude that you couldn't say "all". Linguists call that a conversational implicature: something the listener reasonably infers from your choice of words, not something the words assert. Implicatures are real and useful in conversation. They're also cancellable ("some passed; in fact all of them did" is not a contradiction), and that's the test that shows they aren't part of the sentence's meaning.

For checking arguments, you use the logical reading. If an argument only works when "some" is read as "some but not all", it's leaning on something the premise never said.

:::checkpoint "Some of the students passed." Does that sentence tell you that any student failed?
No. "Some passed" is true even if all passed. The feeling that it hints at failures is an implicature, a guess about why the speaker didn't say "all". It may be a good guess, but an argument that needs the failures has to state them as a separate premise, where you can check them.
:::

## How to deny each one

Every argument you check will eventually be argued about, and most of those arguments go wrong in the first minute because someone denies the wrong thing. So learn exactly what contradicts each of the four sentences.

Two sentences are contradictories when exactly one of them is true: they can't both be true and they can't both be false (Smith, 2022).[1]

- "All A are B" is contradicted by "Some A are not B."
- "No A are B" is contradicted by "Some A are B."

That's the whole table, read in both directions. "Some A are B" is contradicted by "No A are B", and "Some A are not B" by "All A are B".

Notice what is not on the list. "All A are B" and "No A are B" are not contradictories. They can both be false at once, which happens whenever some As are B and some aren't. Logicians call that pair contraries. So if someone says "all the trains were late" and you reply "no they weren't, none of them were", you've taken on a much bigger claim than you needed, and you're probably wrong too.

The practical rule: to knock down an "all", find one exception. To knock down a "no", find one case. To knock down a "some", you have to show there are none at all, which is why "some" claims are so hard to refute and so easy to make.

:::checkpoint Someone says, "All the trains were late this morning." What is the one thing you need to show to prove them wrong?
One train that was on time. Not "most were on time", not "none were late". One train, and "all" is false. This is modus tollens from lesson 3 wearing different clothes: the "all" claim says that if it's a train this morning then it was late; one on-time train is the not-Q that breaks it.
:::

## The Venn check

Now the method. The idea is that a Venn diagram is a picture of every possible case at once, and that makes it a machine for finding counterexamples.

Start with two circles that overlap, one labelled A and one labelled B. Together they mark out three regions: A outside B, the overlap, and B outside A. Every possible thing sits in one of those regions or outside both.

Each of the four sentences is a mark on that picture (Hurley, 2018; Knachel).[2][3]

- "All A are B" says the region "A outside B" is empty. Shade it. Shading means empty.
- "No A are B" says the overlap is empty. Shade the overlap.
- "Some A are B" says at least one thing is in the overlap. Put an X there. An X means at least one thing is here.
- "Some A are not B" says at least one thing is in "A outside B". Put an X there.

Two conventions to fix in your head: shading means nothing lives here; an X means something does. Shading is a strong claim about a whole region. An X is a weak claim about a single occupant.

A syllogism has two premises and three terms. Each premise mentions two of the terms, the conclusion mentions the two that appear only once, and the third term, the one that appears in both premises but not the conclusion, is called the middle term. It's the hinge. In the promotion argument the middle term is "people who have done the course".

So draw three overlapping circles, one per term, and label them. Then:

1. Draw the premises, and only the premises. Never draw the conclusion.
2. Shade the "all" and "no" premises first.
3. Then place the X for any "some" premise. The region it belongs in will be cut in two by the third circle. If one half is shaded, the X goes in the other half. If neither half is shaded, the X goes on the line between them, which means "somewhere in here, and the premises don't say where".
4. Now read the conclusion off the page. If it's already drawn (the region it needs shaded is shaded; the X it needs is definitely inside the right region), the argument is valid. If it needs something that isn't there, the argument is invalid, and the unshaded region, or the other side of the line, is your counterexample.

Why does this work? Because a valid argument is one with no counterexample: no possible case where the premises hold and the conclusion fails. The diagram shows every possible case. When you draw the premises you rule out the cases they rule out, and no others. If the conclusion's requirement is still unmet after that, there's a case the premises allow in which the conclusion is false, and there's your counterexample. This is lesson 2's method, with the imagining done by the page.

Why shade before placing the X? Because the shading tells you where the X can't go. Place the X first and you may put it somewhere a later premise empties, and then you'll have to move it.

## Worked example 1: dogs and cats

Here is the argument every logic teacher uses, because it catches everyone.

1. All dogs are mammals.
2. All cats are mammals.
C: All dogs are cats.

:::predict Is this argument valid? Most people say no, at once, because the conclusion is absurd. Set that aside. Can you say what is wrong with the form, in a way that would still be wrong if the conclusion were something you believed?
Both premises put things inside the mammal circle. Neither premise says anything about the relationship between dogs and cats directly; they only say each group sits inside a third. Two groups that both sit inside a third can overlap completely, partly, or not at all. The premises don't say which. Below is the same point drawn out.
:::

Draw three circles: Dogs, Cats, Mammals, with all three overlapping in the middle. Now draw the premises.

Premise 1, "All dogs are mammals", says the part of the Dogs circle outside the Mammals circle is empty. Shade it. That's two small regions: dogs that are neither cats nor mammals, and dogs that are cats but not mammals.

Premise 2, "All cats are mammals", says the part of the Cats circle outside Mammals is empty. Shade that too.

Now stop drawing and look at the conclusion. "All dogs are cats" would need the part of the Dogs circle outside the Cats circle to be shaded. Is it? Half of it is: you shaded "dogs, not cats, not mammals" under premise 1. But the other half, "dogs, not cats, but mammals", is untouched. It's sitting there, open.

That open region is the counterexample. It's a dog that's a mammal and isn't a cat. Which is to say, a dog. The premises allow it, the conclusion forbids it, and so the argument is invalid.

Textbooks call this the fallacy of the undistributed middle: the middle term, "mammals", is never used to say something about all mammals, so it can't connect the other two terms (Hurley, 2018; Copi, Cohen & McMahon, 2011).[2][4] You don't need the name. You need the picture, because the picture also works when the content isn't absurd.

Go back to the lift. Everyone promoted did the course; everyone on my team did the course; so everyone on my team gets promoted. Same three circles, same two shadings, same open region: a person who did the course and isn't promoted. The argument is invalid in exactly the way the dog argument is, and it took you thirty seconds. Your colleague may still get promoted. That's step 6, and it's a different question.

:::checkpoint The colleague replies: "Fine, but everyone who gets promoted here really has done the course. I checked." Does that rescue the argument?
No. They've defended a premise, which is step 5. The fault was at step 4: even with both premises true, the conclusion doesn't follow, because "did the course" is never said to cover only the promoted. Logic tests the link; the premises are a separate check, and here the link is already broken.
:::

## Worked example 2: a "some" premise, and the X on the line

Now an argument with a "some" premise, which is where the method earns its keep, because the X has to be placed carefully.

1. Some of the applicants are qualified.
2. All the qualified applicants have degrees.
C: Some of the applicants have degrees.

Three circles: Applicants, Qualified, Degrees. Shade first. Premise 2 says the part of Qualified outside Degrees is empty. Shade it: that's "qualified, not an applicant, no degree" and "qualified applicant, no degree".

Now place the X for premise 1, "some applicants are qualified". It belongs in the overlap of Applicants and Qualified. That overlap is cut in two by the Degrees circle: "applicant, qualified, has a degree" and "applicant, qualified, no degree". Look at the second half. You've just shaded it. So the X can't go there, and it goes in the first half: applicant, qualified, with a degree.

Now do the next step yourself before reading on. The conclusion is "Some applicants have degrees." Where would an X have to be for that to be true? Is there one there?

:::predict Valid or invalid, and why?
Valid. The conclusion needs an X somewhere inside the overlap of Applicants and Degrees. Your X is in "applicant, qualified, with a degree", which is inside that overlap. The conclusion is already drawn. No case exists where both premises hold and the conclusion fails, because the shading forced the X to where the conclusion needed it.
:::

Here's the wrinkle. Swap two of the terms around:

1. Some of the applicants have degrees.
2. All the qualified applicants have degrees.
C: Some of the applicants are qualified.

It reads nearly the same, and a hiring manager in a hurry would nod along. Draw it. Shade premise 2 as before: Qualified outside Degrees is empty. Now the X for "some applicants have degrees" belongs in the overlap of Applicants and Degrees. That overlap is cut in two by the Qualified circle: "applicant, degree, qualified" and "applicant, degree, not qualified". Is either half shaded? No. Premise 2 shaded parts of the Qualified circle outside Degrees; both of these regions are inside Degrees. So the X goes on the line between them.

The conclusion wants an X definitely inside Applicants and Qualified. Yours is on the line, which means "this applicant might be qualified or might not; the premises don't say". Not forced. Invalid.

The counterexample is the other side of the line: an applicant with a degree who isn't qualified, because the degree is in the wrong subject, say. Both premises are true of that person, and the conclusion is false. Notice it's the dog-and-cat pattern again, with a "some" instead of an "all": both premises attach things to "degrees", and nothing says that "degrees" reaches only the qualified.

One more thing about that first, valid version. "Some of the applicants are qualified" told you nothing about any applicant being unqualified. If someone hears that argument and says "so some of them aren't qualified, then", they've added a premise. Maybe it's true. It wasn't stated, and it isn't something the diagram will ever show, because an X in one region says nothing about the others.

:::checkpoint You place an X and it lands on a line. What does that tell you about the conclusion, and what should you do?
The premises say something is in one of two regions but not which. If the conclusion needs the X to be in one specific one of those regions, the argument is invalid, and the other region is the counterexample. If the conclusion only needs the X to be somewhere in the union of the two (say, inside a circle that contains both), the argument can still be valid. So: look at what the conclusion needs, then ask whether "somewhere in these two" is enough.
:::

:::callout A footnote on empty classes
"All trespassers will be prosecuted" is a true sign on a field nobody has ever entered. On the modern reading, which is the one the Venn method uses, "All A are B" says only that nothing is an A without being a B; it doesn't say there are any As. Aristotle, in effect, assumed every term named something (Smith, 2022).[1] The difference shows up in a handful of forms. "All A are B, so some A are B" is valid for Aristotle and invalid on the modern reading, because an empty A makes the premise true and the conclusion false. Of the 256 possible two-premise forms, 15 are valid on the modern reading and 24 on the traditional one (Knachel; Lagerlund, 2022).[3][5] This is a convention, not a controversy: say which reading you're using and the disagreement vanishes. When it matters, it's usually because someone has argued from a rule to an instance without checking that any instance exists.
:::

## Why the course stops here

You could spend a semester on this. Textbooks like Hurley's give categorical logic two chapters, then three more on propositional logic, natural deduction, and predicate logic (Hurley, 2018).[2] This course gives it one lesson and then moves on, and you deserve to know why, because it's a real argument among people who teach reasoning.

One side, call it the formal-first view, holds that symbolic logic is the only precise account of what "follows from" means, and that learning it trains a rigour that carries over to everything else. That's the view behind the standard logic sequence and behind open textbooks like *forall x* (Magnus et al., 2025).[6]

The other side is the informal-logic movement, which began in the 1970s with teachers like Ralph Johnson and Anthony Blair at Windsor and Trudy Govier, and defined its subject as reasoning "as it occurs in public discussion and debate" (Groarke).[7] Their claim, from years of teaching, was that formal logic transfers poorly to real arguments, whose faults are usually a premise that shouldn't be accepted or a reason that isn't relevant, not an invalid form (Govier, 2013).[8]

There is some evidence on the transfer question, and it's worth reading with care. Cheng, Holyoak, Nisbett and Oliver tested 53 students at the start and end of two introductory logic courses at the University of Michigan, about 40 hours of lectures each, one of them using Copi's textbook, covering the conditional forms of lesson 3 (Cheng et al., 1986).[9] The test was Wason's selection task. Before the course, 75% of students made at least one error on the conditional problems; after it, 72%. The authors' summary was that "the only apparent influence of a one-semester logic course was a small decrease in the tendency to make the error corresponding to affirming the consequent".[9] After the semester, the same students solved only 11% of the abstract problems correctly, when before any training they'd solved 62% of the problems that were phrased as permissions.[9]

Two cautions. It's one study with wide confidence intervals, on one task, and Wason's task is unusually hard. And the same paper found that abstract training did work in the lab when the rules were taught together with examples of the problems they applied to: errors fell from 75% to 39% (Cheng et al., 1986).[9] That second finding is the one this course is built on. The rules are here; so are the examples, and the practice on your own material. A meta-analysis of critical-thinking instruction more broadly found it does help, with a weighted mean effect of g+ = 0.30, and the strategies that helped most were dialogue, authentic problems, and mentoring (Abrami et al., 2015).[10]

What would settle the question is a study that trained one group formally and one informally and tested both on real arguments after a delay. I don't know of a decisive one. So here is the course's line, stated openly: the four conditional shapes, the Venn check, and the counterexample method are the formal logic a general reader uses; the rest of this course is about premises, relevance, strength, and the ways people go wrong in practice. If you find you like the formal side, *forall x* is free and good, and the link is in Go deeper.

## What people get wrong

**"Some" implies "not all".** It doesn't, in logic. It's an implicature in conversation, and it's cancellable. An argument that needs "not all" must state it, and then you can check it.

**"No A are B" is the opposite of "All A are B".** They're contraries, not contradictories, and both can be false. To deny "all", produce one exception. Taking on "none" is taking on a claim you don't need and often can't defend.

**A believable conclusion means a valid argument.** Lesson 2's belief bias, again. Evans, Barston and Pollard found that people accept invalid syllogisms with believable conclusions and reject valid ones with unbelievable conclusions, and that the effect was larger on the invalid ones (Evans, Barston & Pollard, 1983).[11] The dog argument is easy because the conclusion is absurd. The promotion argument has the same form and a conclusion someone wants. Draw both.

**Placing the X before shading.** Then it lands in a region a later premise empties, and you either move it or, worse, leave it and read off a wrong verdict. Shade first, always.

**Treating existential import as a live dispute.** It's a difference in convention with a known list of cases where it matters. State your reading and move on.

**"All A are not B" read without asking.** English lets that sentence mean two different things. If the argument turns on it, get the arguer to pick one.

## Practice

Six arguments. Two are conditionals from lesson 3, so your first job on each is to decide which tool fits: the four shapes, or three circles. Then give the verdict and, for every invalid one, the counterexample. Write your answers down before opening the check.

1. No birds are mammals. All bats are birds. So no bats are mammals.
2. All the flats that flooded last winter were ground-floor flats. All the flats in Block B are ground-floor flats. So all the flats in Block B flooded last winter.
3. All tomatoes are vegetables. Some tomatoes are fruits. So some vegetables are fruits.
4. If the boiler's pilot light is out, there's no hot water. There's no hot water. So the pilot light is out.
5. Some road users ignore red lights. All cyclists are road users. So some cyclists ignore red lights.
6. If the meeting had run over, the room would still have been booked at three. The room wasn't booked at three. So the meeting didn't run over.

:::checkpoint Check your six answers.
1. Venn. Shade the overlap of Birds and Mammals (both halves, inside and outside Bats). Shade Bats outside Birds. The conclusion needs the overlap of Bats and Mammals shaded: one half is inside Birds, shaded by premise 1; the other half is outside Birds, shaded by premise 2. Valid. The conclusion is false because premise 2 is false; a valid argument with a false premise, one of the cells in lesson 2's table.
2. Venn. Both premises shade parts outside Ground-floor. The conclusion needs "Block B, not flooded" shaded, and the half of it inside Ground-floor is open. Invalid: a ground-floor flat in Block B that stayed dry. Undistributed middle, and a conclusion some buyer would believe.
3. Venn. Shade Tomatoes outside Vegetables. The X for "some tomatoes are fruits" goes in Tomatoes and Fruits; the half outside Vegetables is shaded, so it goes in "tomato, fruit, vegetable", which is inside Vegetables and Fruits. Valid, and the conclusion is true whatever your kitchen says; botanically a tomato is a fruit.
4. Conditional. "If P then Q; Q; so P." Affirming the consequent, invalid. Counterexample: the pilot light is fine and the water's off at the mains.
5. Venn. Shade Cyclists outside Road users. The X for "some road users ignore red lights" goes in Road users and Ignore; that's cut by Cyclists and neither half is shaded, so it's on the line. Conclusion needs it inside Cyclists. Invalid: the red-light runners could all be drivers. A believable conclusion, and an invalid link.
6. Conditional. "If P then Q; not Q; so not P." Modus tollens, valid.
:::

:::exercise Do it now
Find one "all", "every", "no", "none", or "only" claim in something you read or heard this week. A headline, a manager's email, a sign, a line from a podcast.

1. Write it as one of the four forms. If it was a bare plural ("landlords never fix anything", "these phones break"), say so, and write the "all" or "no" it amounts to.
2. Write down exactly what one case would refute it. One exception for an "all"; one instance for a "no". Not a counter-argument, a case.
3. If the claim was a premise in an argument, put the argument in standard form, draw the three circles, and give the verdict. If it wasn't, note whether the writer used "some" anywhere and whether they slid from "some" to "some are not".

Put it in your folder from lesson 1. By lesson 10 you'll pick your project from that folder, and an "all" claim with its refuting case written out is often the best material in it.
:::

## Connections

This closes the deductive unit. You now have two fast tools for step 4 of the check: the four conditional shapes from lesson 3, for arguments built from "if", and the Venn check, for arguments built from "all", "no", and "some". Both are the counterexample method from lesson 2 made quick, and both test only the link. The premises still need evidence, which no diagram supplies.

- Lesson 2's counterexample is what a Venn gap is: an unshaded region, or the far side of a line, is a case the premises permit and the conclusion forbids.
- Lesson 3's modus tollens is the shape of "one on-time train refutes 'all late'": the "all" says if train then late, and the one exception is the not-Q.
- Lesson 5 opens the other kind of link. There, "some" and "all" turn up inside claims about samples, "most" gets its proper treatment, and a counterexample doesn't sink the argument; it only weakens it. That difference is the whole subject of the next lesson.

## Go deeper

- Knachel, *Fundamental Methods of Logic*, chapter 3 (free, CC BY 4.0, on LibreTexts): the clearest short treatment of categorical logic with drawn Venn diagrams, which this lesson could only describe in words; do the exercises there if the X-on-the-line cases still feel slippery.
- Hurley, *A Concise Introduction to Logic*, chapters 4 and 5: the full treatment, including the square of opposition drawn out, the rules-based test that gives the same verdicts as the Venn check, and the sixty-four moods and four figures if you want to see where 256 comes from.
- *forall x: Calgary*, Parts I to III (free, forallx.openlogicproject.org): the symbolic route, with truth tables, for readers who found this lesson too easy and want the formal-first version done properly.
- Smith, "Aristotle's Logic", *Stanford Encyclopedia of Philosophy*: where the four sentences, the three figures, and the assumption about non-empty terms come from, in Aristotle's own order.

## Sources

1. Smith, R., "Aristotle's Logic", *Stanford Encyclopedia of Philosophy* (rev. 2022). Aristotle's definition of a deduction; the three figures and the table of valid deductions; contradictories as pairs of which exactly one is true; Aristotle "in effect supposes that all terms in syllogisms are non-empty".
2. Hurley, P. J., *A Concise Introduction to Logic*, 13th ed. (Cengage, 2018), chapters 4 and 5. The four categorical forms, the square of opposition, the Venn diagram test for syllogisms, the undistributed middle, and the wider formal-logic sequence (chapters 6 to 8) this course does not teach.
3. Knachel, M., *Fundamental Methods of Logic* (University of Wisconsin-Milwaukee; CC BY 4.0, read on LibreTexts), section 3.6, Categorical Syllogisms. Read at draft time: "There are 4 figures and 64 moods. That gives us 256 possible logical forms. It turns out that only 15 of these are valid" (the modern reading); particular propositions drawn with an X, and "in cases of indeterminacy, draw Xs straddling boundary lines".
4. Copi, I. M., Cohen, C. & McMahon, K., *Introduction to Logic*, 14th ed. (Pearson, 2011), chapters 5 and 6. Categorical propositions and syllogisms; the undistributed middle.
5. Lagerlund, H., "Medieval Theories of the Syllogism", *Stanford Encyclopedia of Philosophy*. Read at draft time, section 1: "there are 256 possible combinations of sentences. Of these, 24 have traditionally been thought to yield valid deductions", the 24 being the 19 direct moods plus five subalternate moods.
6. Magnus, P. D., Button, T., Trueman, R., Zach, R. et al., *forall x: Calgary* (Fall 2025, CC BY 4.0), Part I. Validity as the absence of a counterexample; "logic doesn't care about feelings. Actually, it doesn't care about facts, either"; logic shows an argument invalid but not that a premise is false.
7. Groarke, L., "Informal Logic", *Stanford Encyclopedia of Philosophy*. Informal logic as the study of reasoning "as it occurs in public discussion and debate"; the movement's origins with Johnson and Blair at Windsor in the 1970s.
8. Govier, T., *A Practical Study of Argument*, 7th ed. (Cengage, 2013), chapters 4 and 7. Categorical logic inside an informal-logic text; the ARG view that most real arguments fail on acceptability or relevance rather than form.
9. Cheng, P. W., Holyoak, K. J., Nisbett, R. E. & Oliver, L. M., "Pragmatic versus syntactic approaches to training deductive reasoning", *Cognitive Psychology* 18(3), 293 to 328 (1986). Read from the full text (University of Michigan Deep Blue repository). Experiment 2: 53 students across two introductory logic classes (Ann Arbor and Dearborn), about 40 hours of lectures each, one using Copi's *Introduction to Logic*; pretest to post-test on Wason selection problems, percentage making at least one error on conditional problems 75% before and 72% after, mean improvement "a bare 3 ± 7%"; "the only apparent influence of a one-semester logic course was a small decrease in the tendency to make the error corresponding to affirming the consequent"; after the semester students "solved only 11% of the arbitrary problems correctly, whereas the same students, prior to receiving any formal training, solved 62% of the permission problems correctly". Experiment 1: rules-and-examples training cut the percentage making at least one error from 75 ± 12% to 39 ± 12%; rules alone and examples alone did not significantly help, with wide confidence intervals noted by the authors.
10. Abrami, P. C., Bernard, R. M., Borokhovski, E., Waddington, D. I., Wade, C. A. & Persson, T., "Strategies for teaching students to think critically: A meta-analysis", *Review of Educational Research* 85(2), 275 to 314 (2015). 341 effect sizes; weighted mean g+ = 0.30; dialogue, authentic problems and mentoring associated with larger effects (from the abstract).
11. Evans, J. St. B. T., Barston, J. L. & Pollard, P., "On the conflict between logic and belief in syllogistic reasoning", *Memory & Cognition* 11(3), 295 to 306 (1983). From the abstract: belief bias "was more marked on invalid than on valid syllogisms"; some verbal protocols were rationalisations of prejudged decisions.
