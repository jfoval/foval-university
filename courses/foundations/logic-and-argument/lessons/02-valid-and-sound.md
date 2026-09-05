---
title: Valid, sound, and why your opinion of the conclusion gets in the way
minutes: 40
objectives:
  - Explain validity as the absence of any possible case in which the premises are true and the conclusion false
  - Construct a counterexample that shows an argument is invalid by keeping its shape and swapping its content
  - Compare valid and invalid arguments with true and false premises, and identify the one combination that cannot occur
  - Predict how belief bias will affect a judgement of validity, and apply the fix of testing the link before consulting your opinion
quiz:
  - q: A friend argues, "Every time the café's card machine has gone down, the wifi was down too. The wifi is down right now. So the card machine is down." The wifi really is down. Which verdict is right?
    options:
      - Valid, because the first premise links the two failures and the second premise reports the wifi failure
      - Invalid, because the wifi can be down for reasons that leave the card machine working fine
      - Valid but unsound, because "every time" is too strong a claim for anyone to know it is true
      - Invalid, because a claim about the past cannot tell you anything about what is true right now
    answer: 1
    explain: Ask the one question, could the premises be true and the conclusion false? Yes. The first premise says card-machine failures come with wifi failures; it says nothing about wifi failures always coming with card-machine failures. A world where the router died and the card machine is happily working on its own connection makes both premises true and the conclusion false. So option B is right. Option A reads the first premise backwards. Option C blames the premise when the link is what fails; even if "every time" were certainly true, the conclusion would not follow. Option D proves too much; plenty of valid arguments have premises about the past.
  - q: You are told that an argument is valid and that its conclusion is false. You have not seen the premises. What can you say about them?
    options:
      - Nothing yet; a valid argument with a false conclusion can have premises that are all true
      - They must all be false, because a valid form carries the truth value of the conclusion back to them
      - At least one of them is false, because a valid form cannot take true premises to a false conclusion
      - They must be about something unrelated, because validity requires the premises to guarantee the conclusion
    answer: 2
    explain: Validity means there is no possible case with all premises true and the conclusion false. If the conclusion is false and the form is valid, the actual case must have at least one false premise, otherwise it would be exactly the case validity rules out. That is option C. Option A describes the one cell of the table that cannot occur. Option B goes too far; one false premise is enough, and the others may be true. Option D confuses validity with irrelevance; a valid argument's premises are precisely the ones that bear on the conclusion.
  - q: Which of these arguments is sound?
    options:
      - All planets orbit a star. The Moon orbits a star. So the Moon is a planet.
      - All reptiles are warm-blooded. All snakes are reptiles. So all snakes are warm-blooded.
      - Some birds can fly. All penguins are birds. So some penguins can fly.
      - All whales are mammals. All mammals breathe air. So all whales breathe air.
    answer: 3
    explain: Sound means valid with all premises true. Option D has a valid shape (all A are B, all B are C, so all A are C) and two true premises, so it is sound and its conclusion is guaranteed. Option A has true premises and a true-sounding conclusion, but the shape is invalid; the Moon orbits a star by orbiting Earth, and the argument's form would also make every comet a planet. Option B is valid but has a false first premise, so it is unsound, and its conclusion happens to be false too. Option C is invalid; "some birds" leaves room for penguins to be among the birds that cannot fly, which is in fact where they are.
  - q: Two arguments have exactly the same shape and are both invalid. One concludes "some expensive restaurants are not good", the other concludes "some good restaurants are not expensive". From what Evans, Barston and Pollard found, what should you expect if you showed both to a room of students and asked whether the conclusion follows?
    options:
      - Roughly equal acceptance of both, because students told to judge logic will mostly ignore what the conclusion says
      - Far higher acceptance of the second, whose conclusion most people already believe, though the reasoning is no better
      - Far higher acceptance of the first, because a conclusion that sounds critical of something prompts closer checking
      - Low acceptance of both, because an invalid shape is easy to spot once two versions are placed side by side
    answer: 1
    explain: This is the belief-bias pattern applied to new content. Same shape, same flaw, different conclusion; the version whose conclusion people already agree with gets accepted far more often, which is option B. In Evans's own materials the gap on invalid arguments was 71% against 10%. Option A is what the instructions ask for and what people fail to do. Option C has the direction backwards; a believable conclusion gets less scrutiny, not more. Option D assumes side-by-side presentation fixes it; in the studies each argument was judged on its own, and even where people see the shape they tend to accept the version they like.
  - q: Which of these is a deductive argument, in the sense this lesson uses?
    options:
      - The last forty winters here have brought snow, so this winter will almost certainly bring snow too
      - Every car I have owned from that maker broke down within a year, so their cars are probably unreliable
      - Ana and Ben are the only two people in the choir, Ana is forty and Ben is forty, so every member of the choir is forty
      - Most of the shops on this street close at five, so the bakery on the corner is probably shut by now
    answer: 2
    explain: Deductive and inductive differ in what the premises are claimed to do, not in the direction of travel. Option C moves from two particular facts to a general claim, and yet it is deductive; if Ana and Ben are the whole choir and each is forty, the conclusion cannot be false. Options A, B and D each move from evidence to a conclusion that is only made probable, and each says so with "almost certainly" or "probably"; new evidence could weaken any of them. The general-to-particular rule would have labelled option C inductive and got it wrong.
  - q: You want to show that "All A are B; all C are B; so all A are C" is invalid. Which substitution does the job?
    options:
      - A = dogs, B = mammals, C = cats, so "all dogs are mammals, all cats are mammals, so all dogs are cats"
      - A = squares, B = rectangles, C = rectangles, so "all squares are rectangles, all rectangles are rectangles, so all squares are rectangles"
      - A = dogs, B = animals, C = dogs, so "all dogs are animals, all dogs are animals, so all dogs are dogs"
      - A = kittens, B = mammals, C = cats, so "all kittens are mammals, all cats are mammals, so all kittens are cats"
    answer: 0
    explain: A counterexample keeps the shape and makes both premises plainly true and the conclusion plainly false. Option A does exactly that; both premises are true and no dog is a cat, so the shape is shown to fail. Option B makes the conclusion true, so it shows nothing about the shape. Option C also ends in a true conclusion, and makes two of the letters the same thing, which is allowed but useless here. Option D has true premises and a true conclusion, since kittens are cats; a substitution that leaves the conclusion true is a failed attempt, not evidence of validity and not a counterexample.
---

Here's an argument you could have heard from a neighbour this week. Every flat in this building that's had damp has had its windows painted shut. Your windows are painted shut. So you're going to get damp.

Most people nod along. The premises sound right, the conclusion sounds like the kind of thing that happens, and the whole thing has the rhythm of reasoning. Now hold the shape and change the words. Every cat is a mammal. Your dog is a mammal. So your dog is a cat.

Same skeleton. The second version is obviously broken, and that means the first one was broken too. Nothing about the damp argument guaranteed its conclusion; it just had a conclusion you were ready to believe. Telling those two things apart, the quality of the link and your opinion of the conclusion, is the whole of this lesson, and it turns out to be harder than it sounds, for reasons psychologists measured in 1983.

Lesson 1 gave you the six-step check and filled in the first three: find the conclusion, find the premises, supply what's missing. This lesson fills in step 4 for one kind of argument, the kind that claims to guarantee its conclusion. And it explains why step 6, consult your opinion of the conclusion, comes last and not first.

## What "valid" means, and what it doesn't

Take the cat argument and ask one question: could both premises be true and the conclusion still be false? Yes. Every cat is a mammal, your dog is a mammal, and your dog is not a cat. That is a possible situation (in fact it's the actual one), and it's enough to sink the argument.

That question is the definition. In the words of *forall x*, the open logic textbook we lean on throughout this course: "An argument is valid if and only if the conclusion is a consequence of the premises. An argument is invalid if and only if it is not valid, i.e., it has a counterexample."[1] A counterexample is a possible case in which every premise is true and the conclusion is false. Find one and the argument is invalid. Show that none can exist and it's valid.

Notice what the definition is about. It's about the link between premises and conclusion, and nothing else. It is not about whether the premises are true, not about whether the conclusion is true, and not about whether the argument is any good. *forall x* puts it bluntly: "validity is not about the actual truth or falsity of the sentences in the argument ... It is often said that logic doesn't care about feelings. Actually, it doesn't care about facts, either."[1]

That sentence offends people the first time they read it. Surely an argument with a false premise is a bad argument? It might be. But "bad" is a bigger word than "invalid". Validity is one specific property, and it's worth keeping narrow, because it's the property you can check without knowing anything about the world.

:::checkpoint "All fish fly. All whales are fish. So all whales fly." Is it valid?
Yes. Ask the question: is there any possible case where all fish fly and all whales are fish, and yet some whale doesn't fly? No. If every whale is a fish and every fish flies, the whales fly. The premises are both false and the conclusion is false, and the argument is valid, because validity is about the link. Hold on to this one; it's the standard example, and the next section builds on it.
:::

## Worked example: the shape is what's valid

Stay with the fish. Write it in standard form, the way lesson 1 taught you.

1. All fish fly.
2. All whales are fish.
C: All whales fly.

Two false premises, a false conclusion, and a valid argument. Now swap the content and keep the shape.

1. All mammals breathe air.
2. All whales are mammals.
C: All whales breathe air.

Two true premises, a true conclusion, and the same valid argument. The letters underneath are identical: all A are B, all C are A, so all C are B. What made the first argument valid wasn't anything about fish. It was the shape, and the shape is shared.

This is the mechanism behind the counterexample method. A valid form is a shape that can't take you from truth to falsehood, whatever you pour into it. So to test a shape, you keep it and pour in content that makes the premises obviously true and the conclusion obviously false. If you can, the shape doesn't guarantee anything, and neither did the argument you started with. If every attempt fails because the conclusion keeps coming out true, you're starting to see why the shape holds.

Try it on the damp argument from the opening. Its shape is: all A are B (every damp flat has painted-shut windows); this C is B (your flat has painted-shut windows); so this C is A (your flat is damp). The cat-and-dog version made the premises true and the conclusion false. So the shape is invalid, and the damp argument is invalid, however plausible the conclusion. Your neighbour might still be right about the damp. Their argument didn't show it.

## The four cells, and the one that's empty

Once you separate validity from truth, there's a small table you should be able to draw from memory. Down the side, the argument is valid or invalid. Along the top, the premises are all true or at least one is false. Every combination can occur except one.

**Valid, all premises true.** Then the conclusion is true; that's what validity means. Whales breathe air.

**Valid, a false premise.** The conclusion might be false (all fish fly, all whales are fish, so all whales fly) or, by luck, true (all fish fly, all sparrows are fish, so all sparrows fly). A valid form with a false premise guarantees nothing about the conclusion either way.

**Invalid, all premises true.** The conclusion might be true (every cat is a mammal, my neighbour's tabby is a mammal, so the tabby is a cat) or false (every cat is a mammal, my dog is a mammal, so my dog is a cat). The premises being true doesn't help, because the link doesn't hold.

**Invalid, a false premise.** Anything goes.

The empty cell is: valid, all premises true, conclusion false. That combination cannot exist. Rarity has nothing to do with it; "valid" rules it out by definition. Standard textbooks such as Hurley's and Copi's lay the same table out in their first chapter, and it's the one piece of this lesson I'd ask you to memorise rather than reconstruct.[2][3]

The table has a use that's easy to miss. If you know an argument is valid and you know its conclusion is false, you've learned something about the premises without reading them: at least one of them is false. That's the shape of a very old style of argument called reductio, and it's the shape of every "if that were true, then this would follow, and it doesn't" you have ever made.

:::checkpoint A valid argument has a false conclusion. What do you know about its premises?
At least one of them is false. If they were all true, the argument would sit in the empty cell, valid with true premises and a false conclusion, which can't happen. You don't know which premise is false, and you don't know that all of them are; one is enough.
:::

## Sound: the word for what you actually wanted

Validity by itself doesn't get you anywhere. A valid argument with a false premise is a perfectly built bridge starting from the wrong bank. What you want is an argument that's valid *and* has true premises. That is called sound. Again from *forall x*: "an argument is sound if and only if it is both valid and all of its premises are true."[1]

A sound argument guarantees its conclusion, which is a stronger thing than making it likely. If someone shows you a sound argument for a conclusion you dislike, the conclusion is true and your dislike is the thing that has to move. That's a strong claim, and it's exactly why "sound" is a high bar: you have to establish validity, which logic can do, and the truth of every premise, which logic can't.

Here's the line from *forall x* that runs through this whole course. To rebut an argument, "you can show that (one or more of) the premises are not true, or you can show that the argument is not valid. Logic, however, will only help you with the latter!"[1] Logic tests the link. Whether the premises are true is a question about the world, and it needs evidence, which is the business of other courses (statistics, science, history) and of lesson 7's acceptability condition here. What this lesson gives you is the half of the job you can do at your desk.

:::checkpoint You've checked an argument and it seems sound, but the conclusion still feels wrong. Which step of the six-step check do you go back to?
Step 5, the premises. If the argument is genuinely sound, the conclusion is true and the feeling is what's mistaken, so a feeling of wrongness is no reason to revisit step 4; you've already found the link holds. What a feeling of wrongness *can* legitimately do is send you back to check each premise harder, because "seems sound" means you accepted the premises, and one of them might not deserve it. If they survive that second look, the argument has done its job, and step 6 is where you update your opinion rather than the argument.
:::

## A myth worth clearing away

You may have been taught that deduction goes from the general to the particular and induction goes from the particular to the general. It's in a lot of school notes. It's wrong, and Hurley's textbook, the most widely assigned introduction to logic in the United States, corrects it explicitly.[2]

The real difference is what the premises are *claimed* to do. A deductive argument claims that its premises guarantee its conclusion: if they're true, it can't be false. An inductive argument claims only that its premises make its conclusion probable. Direction of travel has nothing to do with it.

Two examples make this stick. "All humans are mortal; Socrates is human; so Socrates is mortal" is deductive and runs general to particular, which fits the myth. But "this coin came up heads a thousand times, so the next toss will probably be heads" is inductive and runs particular to particular. And "Ana and Ben are the only two people in the choir; Ana is forty; Ben is forty; so everyone in the choir is forty" runs particular to general and is deductive: if those premises are true the conclusion cannot be false.[2]

Why does it matter? Because the two kinds get different tests. For a deductive argument, one counterexample is fatal, and "valid" is all or nothing. For an inductive argument, a counterexample is just a data point, and the question is how strong the support is, which is lesson 5. If you sort by direction, you'll run the wrong test on a quarter of what you meet.

## Worked example with a gap: building a counterexample

Here's the method, done once for you and then handed over. Take this shape:

1. All A are B.
2. Some B are C.
C: Some A are C.

It looks reasonable. A sits inside B, and C overlaps B, so surely C reaches A? Let's try to break it. The rule: pick everyday classes for A, B and C that make both premises obviously true and the conclusion obviously false.

First attempt: A = cats, B = mammals, C = pets. All cats are mammals, true. Some mammals are pets, true. Some cats are pets. True. This substitution isn't a counterexample; the conclusion came out true. That doesn't mean the argument is valid. It means this particular content didn't expose the gap. Both premises can be true in ways that leave the conclusion true, and the question is whether they can be true in a way that leaves it false.

Now you try. Keep A = cats and B = mammals. Find a C that overlaps mammals but has no cats in it at all. Write it down before you go on.

:::predict What C makes "all cats are mammals; some mammals are C; so some cats are C" plainly false at the end?
C = dogs. All cats are mammals. Some mammals are dogs. So some cats are dogs. Both premises true, conclusion false, and the shape is dead. Any class that overlaps mammals while excluding cats would do: horses, whales, humans. The move was to notice that "some B are C" only puts C somewhere inside B, and A is also somewhere inside B, and nothing forces those two somewheres to touch.
:::

Two things to notice about the method. First, the content you use to break a shape has nothing to do with the content of the argument you're testing. You're testing the skeleton, so you want the most familiar flesh you can find: cats, dogs, mammals, whales, squares and rectangles. Familiar content makes truth and falsehood obvious, which is the point.

Second, a failed attempt proves nothing, and a successful one proves everything. If you try three substitutions and each leaves the conclusion true, you haven't shown validity, only that you haven't found the hole yet. Proving a shape valid takes a different tool (lesson 4 gives you the Venn method for exactly this family), and the asymmetry is real: one counterexample settles invalidity, no number of confirming cases settles validity.

## Where it goes wrong in practice: belief bias

Everything so far you could learn from a textbook. Here is the part the textbooks were slower to admit. Even people who understand the definition of validity, who've been told to judge logic and nothing else, judge the conclusion instead.

In 1983 Jonathan Evans, Julie Barston and Paul Pollard at Plymouth Polytechnic in England ran three experiments on syllogisms, the two-premise arguments this lesson has been using.[4] The design was clever. Every argument was one of four kinds: valid with a believable conclusion, valid with an unbelievable one, invalid with a believable one, invalid with an unbelievable one. Undergraduates were told to treat each as a logic problem and to accept a conclusion only if it necessarily followed from the premises.[5]

Evans's own examples, from a later review he wrote of this work, are worth reading slowly, because you'll feel the pull.[5]

Valid, believable: "No police dogs are vicious. Some highly trained dogs are vicious. Therefore, some highly trained dogs are not police dogs."

Valid, unbelievable: "No nutritional things are inexpensive. Some vitamin tablets are inexpensive. Therefore, some vitamin tablets are not nutritional."

Invalid, believable: "No addictive things are inexpensive. Some cigarettes are inexpensive. Therefore, some addictive things are not cigarettes."

Invalid, unbelievable: "No millionaires are hard workers. Some rich people are hard workers. Therefore, some millionaires are not rich people."

Look at the last two. They have exactly the same shape. Both are invalid; from "no A are B, some C are B" what actually follows is "some C are not A" (some cigarettes are not addictive; some rich people are not millionaires), and the conclusion offered runs the other way. You can build the counterexample for the cigarettes one yourself: imagine the only addictive things in the world are cigarettes, all of them expensive, and there are also some cheap cigarettes that aren't addictive. Both premises true; "some addictive things are not cigarettes" false.

:::predict Same shape, same flaw. Which of the two invalid arguments, cigarettes or millionaires, will more people accept as valid, and roughly how big will the gap be?
Across the three experiments, 71% of participants accepted the cigarettes conclusion as valid, and 10% accepted the millionaires one.[6] Same skeleton, a sixty-point gap, and the only difference is whether the conclusion is something people already believe.
:::

Those two figures are the pattern in miniature. The paper's abstract reports "substantial belief biases" alongside "equally substantial effects of logic", and one consistent interaction: "belief bias was more marked on invalid than on valid syllogisms."[4] In other words, people did respond to logic, valid arguments were accepted more than invalid ones, but a believable conclusion could carry an invalid argument most of the way to acceptance, while an unbelievable conclusion made even a valid argument harder to accept. In the second experiment, with sixty-four students, subjects were correct 87% of the time when logic and belief pointed the same way and 48% of the time when they conflicted.[4] Where the two disagreed, judgement fell to a coin toss.

I want to be precise about what you're allowed to conclude. The people in these studies were intelligent adults who had been told, in writing, to judge the logic. They were not careless. They were doing what minds do.

## Why the mind does this

The honest answer has two layers: what is well established, and what is still argued about.

What's established is the pattern itself. It has been replicated many times, including by Evans's group with the same materials, and it's larger on invalid arguments.[4][6] The mechanism the outline of this course uses, and which Evans and his colleagues proposed as one account, goes like this. Checking a conclusion against what you already believe is fast; you do it before you've finished reading. Checking whether the premises force the conclusion is slow; you have to build the situation the premises describe and look for a way the conclusion fails. If the fast check comes back "yes, that's true", many people stop there. If it comes back "no, that's absurd", they go looking for the flaw, and find it. Evans's group called this selective scrutiny: the conclusion is scanned for believability first, and the premises get real attention mainly when the conclusion fails that scan.[6]

The verbal protocols from the 1983 study fit that picture. The abstract describes them as, in some cases, "rationalizations for prejudiced decisions" and, in others, "a genuine process of premise to conclusion reasoning".[4] Some subjects had decided and were explaining afterwards; some were reasoning. And in Evans's later account of the protocols, subjects who focused first on the conclusion were more open to belief, while those who started from the premises reasoned better.[6] Where you look first matters.

What's unsettled is the deeper story. Evans's own team offered a second account alongside selective scrutiny, on which people reason first and fall back on belief when the logic feels inconclusive.[6] Later researchers have argued the standard experiments can't tell the accounts apart: a 2000 analysis of twenty-two studies concluded the data were too sparse to discriminate between them, and a 2010 paper argued the whole effect is better described as a shift in how willing people are to say "yes" rather than as a failure of reasoning.[7][8] I'm not going to pretend that's resolved. What you need is the practical fact, which no one disputes: a conclusion you agree with gets less checking from you than one you don't.

:::callout Symmetry
It's tempting to read belief bias as something other people have. It isn't. The subjects in these studies were university students who had been told in writing to judge the logic, and it showed up anyway. Assume it shows up in you: on the arguments whose conclusions you like, you check less. The only defence is procedural, and it's the next section.
:::

## The fix is an order of operations

You can't switch belief bias off. What you can do is refuse to let the fast check be the last one. That's what step 6 of the check is for, and why it's step 6 and not step 1.

When you meet an argument, especially one whose conclusion you have feelings about:

1. Find the conclusion.
2. Find the premises.
3. Supply what's missing.
4. Test the link. For a deductive argument, that means asking: could every premise be true and the conclusion still false? Try to build the case.
5. Test the premises. Are they true, or acceptable on the evidence you have?
6. Only now ask whether you believe the conclusion, and let steps 4 and 5 tell you what to do with that belief.

The order matters more than any single step. If you skip to 6, you'll do 4 badly, and you'll do it worst on the arguments that flatter you. If you force yourself through 4 first, you'll catch the cigarettes argument even though you agree with it, because "could the premises be true and this false?" has an answer that doesn't depend on what you think of cigarettes.

One habit that helps: when the conclusion is one you like, swap the content for something neutral before you judge the shape. That's what the cat-and-dog version of the damp argument did in the first paragraph. You couldn't feel the flaw with damp in the sentences; you could feel it instantly with cats. The shape hadn't changed. Your feelings had gone quiet.

## What people get wrong

**"Valid means true."** Validity is a property of the link. "All fish fly, all whales are fish, so all whales fly" is valid and everything in it is false. If you catch yourself saying "that's not valid, it's not even true", you've merged two questions that need to stay apart.

**"Valid means good."** A valid argument with a false premise establishes nothing. The word you want for "good" in the deductive case is sound, and sound is a much harder thing to show.

**"A false conclusion means the argument is invalid."** No. A false conclusion plus a valid form tells you a premise is false. The whales-fly argument is valid, false conclusion and all. What a false conclusion rules out is soundness, not validity.

**"Logic tells you what's true."** It tells you what follows from what. In *forall x*'s words, logic helps you show an argument is invalid but not that a premise is false.[1] If someone says "logically, X", they've either shown that X follows from premises you'll have to check separately, or they've said nothing.

**"Deduction goes general to particular."** Covered above. The distinction is what the premises claim to do, and Hurley is explicit that the direction test fails.[2]

**"I understood the definition, so I'm immune."** The subjects in 1983 had the definition in the instructions. Understanding validity and applying it under the pull of a believable conclusion are two different skills, and only the second one protects you.

## Practice

Sort each of the six arguments below into one of the four cells: valid or invalid, premises all true or at least one false. For every invalid one, write a counterexample: keep the shape, swap the content, make the premises plainly true and the conclusion plainly false. Do the work on paper before you read the answers.

1. All squares are rectangles. All rectangles have four sides. So all squares have four sides.
2. All squares are rectangles. Some rectangles are not squares. So some squares are not rectangles.
3. No insects have eight legs. All spiders have eight legs. So no spiders are insects.
4. All birds can fly. Penguins are birds. So penguins can fly.
5. Every apple in this bowl is green. The fruit in my hand came from this bowl and is green. So the fruit in my hand is an apple.
6. Anyone who can vote here is over eighteen. Maya is over eighteen. So Maya can vote here.

Answers. (1) Valid, true premises, so sound. (2) Invalid; the shape "all A are B, some B are not A, so some A are not B" fails, and this very example is a counterexample to itself: both premises are true and the conclusion is false. (3) Valid, true premises, sound; the counterexample method can't break "no A are B, all C are B, so no C are A", and lesson 4 will show you why with circles. (4) Valid, but the first premise is false, so unsound, and the conclusion is false too; a valid form carried a false premise to a false conclusion, which is allowed. (5) Invalid; the bowl might hold green pears as well, so the premises can be true and the fruit a pear. (6) Invalid; being over eighteen is what the first premise requires of voters, not what it grants to everyone over eighteen. A counterexample: anyone who can vote here is over eighteen, and Maya is a thirty-year-old visitor from abroad. Lesson 3 gives this mistake its name.

If you sorted (4) as invalid because the conclusion is false, go back to the four-cell table. That one is the misconception this lesson exists to remove.

:::exercise Do it now
Open the folder you started in lesson 1 and take out the argument you wrote in standard form. Ask it the one question from this lesson: could every premise be true and the conclusion still be false?

If yes, write the case. Be concrete: describe a situation, in a sentence or two, where each premise holds and the conclusion doesn't. You've shown the argument is invalid, and you've shown it without saying a word about whether you agree with the conclusion.

If you can't find a case, write down why you think none exists. Then write the honest next question, which is whether each premise is actually true. That's step 5, and it's where lesson 7 will pick up.

Either way, before you close the folder, note what you believed about the conclusion before you started. Then note whether the check changed it, and whether the change went in the direction you expected.
:::

One more from lesson 1, as a spaced review. "I left the party early because the last train was at eleven." Argument or explanation? It's an explanation: the leaving is taken as given and the sentence says why. Now: "You should leave the party early, because the last train is at eleven." That "because" introduces a premise, and this is an argument with a missing premise in brackets: [If you miss the last train, you'll have no way home]. Same word, opposite job, which is why the indicator words are hints and not rules.

## Connections

This lesson fills in step 4 of the check for deductive arguments. Lesson 3 gives you the four conditional shapes worth memorising (if-then, and its cousins) and the two invalid look-alikes that fool almost everyone; you'll recognise argument (6) above when you get there. Lesson 4 gives you a pencil-and-paper method for all/no/some arguments like the ones in this lesson, so you can prove a shape valid rather than just failing to break it.

Lesson 5 opens the other kind of link, where the premises only claim to make the conclusion probable, and where a counterexample weakens rather than kills. Belief bias comes back in lesson 9 as motivated reasoning, the same fast conclusion-check running on the news, and the symmetry note above becomes a checklist.

## Go deeper

- *forall x: Calgary*, Part I (chapters 1 to 3), free at forallx.openlogicproject.org. Twenty pages on arguments, validity, and the other logical notions, written plainly by logicians. Parts II and III give you truth tables, the formal version of the counterexample method, if you want the symbols.
- Hurley, *A Concise Introduction to Logic*, chapter 1, especially the sections on deduction and induction and on validity, truth, soundness, strength, and cogency. The four-cell table is there with worked examples, and the correction of the general-to-particular myth.
- Evans, "In two minds: dual-process accounts of reasoning", *Trends in Cognitive Sciences* 7(10), 2003, 454 to 459. A short, readable review by the lead author of the 1983 study, with the belief-bias effect in a box and the Wason task, which lesson 3 covers, in another.
- Evans, Barston and Pollard, "On the conflict between logic and belief in syllogistic reasoning", *Memory & Cognition* 11(3), 1983, 295 to 306. The original paper. It's readable, and the verbal protocols in the discussion are worth the effort.

## Sources

1. Magnus, P. D., Button, T., Trueman, R., Zach, R. et al., *forall x: Calgary* (Fall 2025 edition, CC BY 4.0), chapter 2. Definitions of valid, invalid and counterexample; "validity is not about the actual truth or falsity of the sentences in the argument ... It is often said that logic doesn't care about feelings. Actually, it doesn't care about facts, either"; definition of sound as valid with all premises true; rebutting an argument by attacking a premise or the link, and "Logic, however, will only help you with the latter!"
2. Hurley, P. J. (with Watson, L.), *A Concise Introduction to Logic*, 13th ed. (Cengage, 2018), chapter 1. Deductive arguments claim their premises guarantee the conclusion, inductive arguments claim only that they make it probable; the general-to-particular account is corrected explicitly; the valid/invalid by true/false table with the one impossible combination; definitions of valid, invalid, sound, unsound.
3. Copi, I. M., Cohen, C. & McMahon, K., *Introduction to Logic*, 14th ed. (Pearson, 2011), chapter 1. The relations between validity and truth, with the combinations laid out; supports the four-cell table alongside Hurley.
4. Evans, J. St. B. T., Barston, J. L. & Pollard, P., "On the conflict between logic and belief in syllogistic reasoning", *Memory & Cognition* 11(3), 1983, 295 to 306. Plymouth Polytechnic. Three experiments; abstract: "Substantial belief biases were observed despite controls for possible conversions of the premises. Equally substantial effects of logic were observed despite controls for two possible response biases. A consistent interaction between belief and logic was also recorded; belief bias was more marked on invalid than on valid syllogisms." Protocols "interpreted in some cases as providing rationalizations for prejudiced decisions and, in other cases, as reflecting a genuine process of premise to conclusion reasoning." Experiment 2 (64 undergraduates, paid volunteers): "Overall, subjects were correct 87% of the time when logic accorded with belief and 48% of the time when it did not" (p. 300, read from the paper).
5. Evans, J. St. B. T., "In two minds: dual-process accounts of reasoning", *Trends in Cognitive Sciences* 7(10), 2003, 454 to 459, Box 1. The four example syllogisms (police dogs; vitamin tablets; cigarettes; millionaires) as the four cells of the 1983 design; participants instructed to endorse only conclusions that necessarily follow; "intelligent adult populations (undergraduate students) are consistently influenced by the prior believability of the conclusion"; "more belief-bias on invalid arguments".
6. Lambell, N. J., Evans, J. St. B. T. & Handley, S. J., "Belief bias, logical reasoning and presentation order on the syllogistic evaluation task", *Proceedings of the Cognitive Science Society* (read from the eScholarship PDF). Restates the 1983 results with the same materials: "71% of participants across three experiments erroneously endorsed" the invalid believable conclusion, and "only 10% of participants across three experiments erroneously endorse" the invalid unbelievable one. Describes the selective scrutiny model (believability of the conclusion scanned first) and the misinterpreted necessity model, and reports from the 1983 protocols that subjects who focused first on the conclusion were more susceptible to belief while those who focused on the premises reasoned better. Their own replication used materials "identical to those employed by Evans et al. (1983)".
7. Klauer, K. C., Musch, J. & Naumer, B., "On belief bias in syllogistic reasoning", *Psychological Review* 107(4), 2000, 852 to 884 (abstract). A model-based meta-analysis of 22 studies found the standard acceptance data "structurally too sparse" to discriminate between accounts of belief bias.
8. Dube, C., Rotello, C. M. & Heit, E., "Assessing the belief bias effect with ROCs: It's a response bias effect", *Psychological Review* 117(3), 2010, 831 to 863 (abstract and title). Argues the effect is better described as a shift in response bias than as a change in reasoning accuracy. Cited as the strongest form of the dissenting view; not resolved.
