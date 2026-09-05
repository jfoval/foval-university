---
title: "How much should the evidence move you: base rates, conjunctions, and the prosecutor's fallacy"
minutes: 50
objectives:
  - Calculate the share of positive results that are true positives from a base rate, a sensitivity, and a false-positive rate, by counting in natural frequencies
  - Explain why a conjunction can never be more probable than either of its parts, and why the Linda problem fools people anyway
  - Identify the prosecutor's fallacy in a courtroom-style argument and state the comparison the fact-finder should make instead
  - Apply the likelihood ratio to say how much a piece of evidence should change a belief, including an argument from absence of evidence
quiz:
  - q: A firm screens its 1,000 employees for a banned substance. Suppose (numbers invented) 2 in every 100 employees use it, the test picks up 95 of every 100 users, and it also flags 5 of every 100 non-users. An employee tests positive. Counting in natural frequencies, roughly what share of positive results come from actual users?
    options:
      - About 95 in 100, because that is the accuracy of the test on users
      - About 50 in 100, since the miss rate and false-positive rate are equal
      - About 28 in 100, since 19 true positives sit among 49 false ones
      - About 5 in 100, because the false-positive rate sets the answer here
    answer: 2
    explain: Count. Of 1,000 employees, 20 use the substance and 980 do not. The test flags 19 of the 20 users and 49 of the 980 non-users (5 in 100). So 68 people test positive and 19 of them are users, about 28 in 100. Option A is the test's sensitivity, which is the probability of a positive given use, not the probability of use given a positive; swapping those is the whole error of this lesson. Option B treats the two error rates as if they cancelled, but they act on groups of very different sizes. Option D uses the false-positive rate on its own, which ignores that there are users to be found at all.
  - q: A sports columnist writes that a struggling football club is "more likely to finish outside the top four and sack its manager than simply to finish outside the top four, given how the board behaves." Which is right?
    options:
      - Finishing outside the top four alone is at least as probable, since every case where both happen is already one of those cases
      - The columnist is right, because the board's behaviour is extra evidence that raises the probability of the combined outcome
      - The two are equally probable, because a board that behaves like that will sack the manager in every season that goes wrong
      - It depends on the strength of the board's record, so neither claim can be judged without seeing the figures for past seasons
    answer: 0
    explain: This is the conjunction rule in a new dress. "Outside the top four and sacks the manager" is a subset of "outside the top four", so it cannot be more probable, whatever the board is like. Option B is exactly how Linda works on people; the extra detail makes the story more vivid and the count smaller. Option C would need the sacking to be certain, and even then the two would only be equal, never the other way round. Option D treats a matter of counting as a matter of evidence, and no figures can make a part larger than its whole.
  - q: A DNA profile from a crime scene matches a suspect, and the expert says the profile would match about 1 person in a million by chance. The city has 5 million people. A juror concludes that there is about a one in a million chance the suspect is innocent. What is the best response?
    options:
      - The juror is right, since a one in a million match probability means the chance the match is a coincidence is one in a million
      - About five people in the city would match by chance, so on the match alone the suspect is one of about six; other evidence must do the rest
      - The match is worthless, because if five other people in the city match, there is nothing to choose between the suspect and any of them
      - The juror is right only if the laboratory's error rate is also below one in a million, since lab error is the real risk with DNA evidence
    answer: 1
    explain: One in a million is the probability of the evidence (a match) given innocence, not the probability of innocence given the evidence. Count the cases. In a city of 5 million, about 5 people would match by chance, and the suspect is one of about 6 matching people. On the match alone that is roughly a one in six chance of guilt, not a 999,999 in a million chance; what moves it further is the other evidence, which is exactly what the jury exists to weigh. Option A is the prosecutor's fallacy. Option C overcorrects; going from 5 million candidates to about six is an enormous amount of evidence, just not a verdict. Option D raises a real issue but does not repair the swap of conditionals, and the juror's conclusion would still be wrong with a perfect lab.
  - q: Two engineers each say "there's no evidence this bridge has a crack, so it's probably sound." Engineer A says it after walking across the bridge. Engineer B says it after an ultrasonic inspection that would find a crack of the worrying size about 95 times in 100. Using the likelihood ratio, which is right?
    options:
      - Neither, because absence of evidence is never evidence of absence and both are committing the argument from ignorance
      - Both equally, because the same premise supports the same conclusion whoever states it and whatever they did beforehand
      - Engineer A more than B, because the walk gives direct experience and the instrument can be miscalibrated or misread
      - Engineer B, because "no crack found" is very likely if the bridge is sound and unlikely if it is cracked, a large ratio
    answer: 3
    explain: The likelihood ratio asks how much more likely the evidence is if the claim is true than if it is false. For Engineer B, "no crack found" happens nearly always when the bridge is sound and only about 5 times in 100 when it is cracked, so the ratio is large and the argument is strong. For Engineer A, "no crack seen from the deck" is about as likely either way, so the ratio is near 1 and the argument barely moves anything. Option A is the slogan the lesson argues against; Oaksford and Hahn showed that this argument form can be strong. Option B ignores that the premise "no evidence" means something different after a search that could have found the evidence. Option C reverses the ranking on the basis of vividness, not likelihood.
  - q: A doctor is deciding which of two findings should change her mind more about whether a patient has a particular condition. Finding X is present in 90 of 100 patients who have it and in 85 of 100 who do not. Finding Y is present in 30 of 100 who have it and in 3 of 100 who do not. Which finding is the stronger evidence for the condition?
    options:
      - Finding Y, because 30 against 3 is a ratio of ten, while 90 against 85 is a ratio of barely more than one
      - Finding X, because it is present in 90 of 100 patients with the condition and so it rarely misses a real case
      - Finding X, because a difference of 5 in 100 across many patients adds up to more true cases than 27 in 100
      - Neither can be ranked without the base rate, because the strength of evidence depends on how common the condition is
    answer: 0
    explain: Strength of evidence is the likelihood ratio, which asks how much more often the finding appears when the condition is present than when it is absent. Y appears ten times more often with the condition than without; X appears about 1.06 times more often, which is almost no evidence at all, however common it is among the sick. Option B confuses sensitivity (how often the finding appears in real cases) with evidential strength; a finding that appears in nearly everyone tells you nearly nothing. Option C is arithmetic about the wrong thing. Option D mixes up two separate quantities. The base rate sets where you start, and the likelihood ratio sets how far the evidence moves you from there. You can rank evidence without a base rate; you just can't get a final probability without one.
  - q: A screening test is used in a general clinic and then in a specialist clinic where the condition is ten times as common. Nothing about the test changes. Without recomputing, what happens to the share of positive results that are true positives in the specialist clinic?
    options:
      - It stays the same, because sensitivity and the false-positive rate belong to the test and not to the clinic it is used in
      - It goes up, because the base rate sets how many true positives there are to find while the false-positive count barely moves
      - It goes down, because a clinic that tests more people at risk will also run many more tests and produce more false alarms
      - It can't be predicted, because the direction depends on whether the sensitivity or the false-positive rate is the larger number
    answer: 1
    explain: The share of positives that are true is a ratio of two counts, true positives over all positives. Raise the base rate and the group with the condition grows, so the true positives grow with it; the group without shrinks a little, so the false positives shrink a little. Both changes push the same way, up. Option A is true of the two rates and false of the answer, which depends on the base rate as much as on the test; that is the lesson's central point. Option C describes something else (more tests overall), and even then the share, not the count, is what was asked. Option D has no basis; the direction is always the same when the base rate rises.
---

Here's an argument you might have met this week, from a friend, a forum, or your own head. "The test is 80% accurate. It came back positive. So I've almost certainly got it." Or its cousin from the news: "The chance of that happening by accident is one in a million. So it wasn't an accident."

Both arguments have true premises and a link that feels tight. Both are usually wrong, and not by a little. In the first, the honest answer can be "you probably don't have it." In the second, a version of that argument put a woman in prison for three years for murders that the Court of Appeal later said could not safely be called murders at all.

Lesson 5 told you that an inductive argument is strong when its premises make the conclusion probable. This lesson is where "probable" gets a number, and where you learn to check the number by counting rather than by feel. The tool is simple enough to do in your head. What's hard is noticing when you need it, because the arguments that need it most are the ones that feel like they don't.

## A probability is a share of cases

Everything in this lesson rests on one idea. When someone says "the probability of X is 8%", the useful translation is "out of every 100 cases like this one, about 8 are X." A probability is a share of a pile of cases. Every trick in the lesson works by getting you to lose track of which pile.

Hold on to that, and three famous errors turn out to be one error seen from three sides. You'll meet them in order: a detail that makes a story feel more likely while making it less likely; a test result that feels decisive while the pile of true cases stays small; and a courtroom number that answers a question nobody asked. Then you'll get the honest measure of how much any piece of evidence should move you.

## Adding a detail can only lower the probability

Read this description, and answer the question before you scroll. It comes from a 1983 paper by Amos Tversky and Daniel Kahneman, who gave it to university students in Vancouver (Tversky & Kahneman, 1983).[1]

Linda is "31 years old, single, outspoken and very bright. She majored in philosophy. As a student, she was deeply concerned with issues of discrimination and social justice, and also participated in anti-nuclear demonstrations."[1]

:::predict Which is more probable? (a) Linda is a bank teller. (b) Linda is a bank teller and is active in the feminist movement.
Most people pick (b). It fits. But every Linda who is a bank teller and a feminist is also a bank teller, so (b) is a part of (a), and a part can't be bigger than its whole. (a) is at least as probable, and almost certainly more. The numbers are below.
:::

In the most direct version of the test, 142 students were given just those two options. "Overall, 85% of respondents indicated that T&F was more probable than T."[1] Across the main study the rate of violations in direct tests was 88%, and the authors found "no effect of statistical sophistication in either indirect or direct tests."[1] Graduate students who had taken statistics courses did it too.

This is the conjunction rule, and it's the least negotiable rule in this lesson. "A and B" can never be more probable than "A" on its own, because the cases where both hold are a subset of the cases where A holds. Adding a condition removes cases; it never adds them. Here's the mechanism in counting terms. Imagine 100 women who fit Linda's description. Suppose (I'm inventing this number to show the shape) 5 of them are bank tellers. Some of those 5 are feminists, say 4. Then "bank teller and feminist" is 4 in 100, and "bank teller" is 5 in 100. However many you make the feminists, the second pile is drawn from inside the first.

So why does (b) win by a landslide? Because the description was built to match a stereotype, and the mind judges the match. Linda sounds like a feminist and doesn't sound like a bank teller; adding "feminist" makes the sentence resemble her more. Resemblance is a fine guide to lots of things. It's a terrible guide to size of pile, because a more specific description matches fewer people, not more, however well it fits the one you have in mind. Matching is not counting.

You met the same machinery in lesson 2 as belief bias: the mind checks whether a conclusion sounds right before, and often instead of, checking whether it follows. Linda is that habit applied to a probability.

Tversky and Kahneman tried to shake the effect loose. When they turned the question into a bet, so that respondents had to choose which statement to wager on, violations fell to 56% in a group of 60.[1] Only one group, doctoral-level respondents in a rating task, got down to 36%.[1] Money helped. It did not cure it.

:::checkpoint Which is more probable: that it rains tomorrow, or that it rains tomorrow and the match is cancelled?
Rain alone. Every tomorrow on which it rains and the match is cancelled is a tomorrow on which it rains, so the second pile sits inside the first. If the cancellation feels like it makes the story more likely, that's the Linda effect: the added detail makes a better story and a smaller pile.
:::

Now the honest complication. Ralph Hertwig and Gerd Gigerenzer argued in 1999 that a good part of the Linda result is about language, not logic (Hertwig & Gigerenzer, 1999).[2] In ordinary speech "probable" often means "plausible" or "fitting", and by that reading (b) is the better answer. When the question is put as a frequency ("of 100 women like Linda, how many are bank tellers? how many are bank tellers and feminists?") far fewer people make the error. Tversky and Kahneman's own paper has the bet version pointing the same way. The disagreement is real and I'll come back to it at the end. For now, take the practical lesson both camps accept: when a claim comes wrapped in detail, count. Ask "of every 100 cases like this, how many?" and the detail stops helping.

## Base rates: why "80% accurate" is not what you think

Here is the argument from the opening again, in its original medical form. It was posed to physicians by David Eddy in 1982 and is reported by Gigerenzer and Ulrich Hoffrage in their 1995 paper (Gigerenzer & Hoffrage, 1995).[3]

A woman has a routine mammogram. In the population being screened, 1% of women have breast cancer. If a woman has cancer, the test is positive 80% of the time. If she does not, the test is still positive 9.6% of the time. Her result is positive. What is the probability she has cancer?

:::predict Eddy asked 100 physicians. What do you think most of them said? And what's your own answer?
Gigerenzer and Hoffrage report that "95 out of 100 physicians estimated the posterior probability p(cancer|positive) to be between 70% and 80%, rather than 7.8%."[3] The right answer is about 8 in 100. Ninety-five doctors were off by a factor of ten, in the direction that turns a positive screen into a near-certain diagnosis.
:::

Let's get 7.8% by counting, because once you've counted it you'll never need to remember a formula. Take 1,000 women who are screened.

Of those 1,000, 1% have cancer: 10 women. The other 990 do not.

Of the 10 with cancer, the test is positive for 80%: 8 women. (The other 2 get a false reassurance; keep them in mind for later.)

Of the 990 without cancer, the test is positive for 9.6%: about 95 women.

Now look at the pile of positive results. It contains 8 women with cancer and 95 without: 103 positives in all. The share of positives that are true is 8 out of 103, which is 7.8%.[3]

That's the whole calculation. Notice what did the work. The test's 80% was real and it's in there (it's the 8). But the base rate, the 1%, decided the size of both piles: it made the cancer group tiny, so even a very accurate test produced only 8 true positives, and it made the healthy group huge, so even a modest false-positive rate produced 95 false ones. The doctors' 70 to 80% is what you get if you look only at the test and forget the piles.

This is the same swap as in the courtroom later. "80% of women with cancer test positive" is the probability of a positive given cancer. The woman wants the probability of cancer given a positive. Those two sentences use the same words and answer different questions, and in English the swap is nearly invisible.

### The formula, once, as a shorthand

What you just did has a name. It's Bayes' rule, and written out it says: the probability of cancer given a positive equals the true positives divided by all positives. In symbols, with the base rate written p(cancer), the sensitivity p(positive | cancer), and the false-positive rate p(positive | no cancer):

p(cancer | positive) = p(cancer) × p(positive | cancer) divided by [p(cancer) × p(positive | cancer) + p(no cancer) × p(positive | no cancer)]

Plug in: 0.01 × 0.8 = 0.008 on top; 0.008 + 0.99 × 0.096 = 0.008 + 0.095 = 0.103 underneath; 0.008 ÷ 0.103 = 0.078. Same answer, and you can see it's the same calculation: 8 over 103 with the thousand divided out. The formula is a compressed count. If you ever forget it, count.

Gigerenzer and Hoffrage's point was that the count is easier for everyone, not only for you. In their first study, across fifteen problems of this kind, people got the Bayesian answer 16% of the time when the problem was stated in probabilities the standard way and 28% in a shortened probability version; when the same problems were stated as natural frequencies ("10 out of every 1,000 women", "8 of every 10 women with breast cancer", "95 out of every 990 women without") the rates were 46% and 50%.[3] Same information, half as many wrong answers, no instruction at all. That's why this lesson counts in thousands throughout and why you should too.

### A second problem, with a gap for you

Now a non-medical one. The numbers are invented for the exercise. A spam filter is run on 1,000 incoming emails. Suppose 5 in every 100 emails are spam. The filter catches 90 of every 100 spam emails, and it wrongly flags 2 of every 100 legitimate ones. An email lands in your spam folder. How likely is it to be spam?

Do the first two steps with me, then finish it yourself before you look.

Of 1,000 emails, 5% are spam: 50. The other 950 are legitimate.

Of the 50 spam emails, the filter catches 90%: 45.

Now your step. How many of the 950 legitimate emails get flagged? And what share of the spam folder is spam? Write both down.

:::predict What share of the spam folder is actually spam? Rough figure.
Of 950 legitimate emails, 2% are flagged: 19. So the spam folder holds 45 spam and 19 legitimate emails, 64 in all, and 45 of 64 is about 70%. A good filter, and still nearly a third of the folder is mail you wanted. Compare the mammogram: same shape of problem, but there the base rate was 1% and here it's 5%, and that difference alone moves the answer from 8% to 70%.
:::

:::checkpoint Go back to the mammogram and double the base rate to 2%, leaving the test unchanged. Without recomputing, does the share of positives that are true go up or down?
Up. With 2%, there are 20 women with cancer instead of 10, so about 16 true positives instead of 8. The healthy group drops from 990 to 980, so the false positives drop very slightly, from about 95 to about 94. Both changes push the same way. (If you do recompute: 16 of 110, about 15%.) The general rule: the base rate sets how many true cases there are to find, and the answer moves with it.
:::

Two things to draw from this. First, whenever someone quotes a test's accuracy, ask for the base rate; without it the accuracy figure cannot be turned into the probability you care about, and a person quoting accuracy alone has either not noticed this or hopes you won't. Second, the 2 women in the first thousand who had cancer and tested negative are also real. A negative result on a rare condition is very reassuring (2 misses among 897 negatives) but a negative on a common one is less so. Same method, run on the other pile.

:::callout This is education, not advice
This lesson uses a screening test and a criminal case because they are the best-documented examples of these errors. It does not tell you how to read your own test result or your own legal situation. Real tests are run in populations with base rates that differ from the textbook ones, and results are read alongside other findings by people who know those numbers. If you have a result in hand, the question this lesson equips you to ask your doctor is "what's the base rate in someone like me?" The answer is theirs to give.
:::

## The prosecutor's fallacy: Sally Clark

Now the courtroom, where the swap costs the most.

In November 1999 Sally Clark, a solicitor, was convicted at Chester Crown Court of murdering her two baby sons, Christopher, who died in December 1996 at eleven weeks, and Harry, who died in January 1998 at eight weeks (R v Clark, 2003, paras 1, 8 to 9).[4] Both had been found dead at home. There was medical evidence on both sides about what the post-mortem findings showed, and the doctors disagreed.

Into that disagreement came a number. The prosecution's expert, Professor Roy Meadow, a paediatrician, was asked about the chance of a sudden infant death (SIDS, or cot death) in a family like the Clarks, one with none of the three risk factors the study used (a young mother, a smoker in the household, no wage earner). He agreed that a figure of 1 in 8,543 reflected the risk of a single SIDS death in such a family. He was then asked about two. His answer, quoted in the Court of Appeal's judgment: "Yes, you have to multiply 1 in 8,543 times 1 in 8,543 and I think it gives that in the penultimate paragraph. It points out that it's approximately a chance of 1 in 73 million."[4] He compared it to backing an 80 to 1 outsider in the Grand National four years running.[4]

:::predict Is "1 in 73 million" the chance that Sally Clark was innocent?
No, and it isn't even a valid figure for what it claims to be. There are two separate errors in it, and the second is the one that matters for every argument of this shape, not just this case. Both are set out below.
:::

### The first error: squaring

The Royal Statistical Society issued a public statement about the case in October 2001. On the multiplication: "This approach is, in general, statistically invalid. It would only be valid if SIDS cases arose independently within families, an assumption that would need to be justified empirically" (Royal Statistical Society, 2001).[5] Multiplying two probabilities gives the probability of both events only when the events are independent, when one happening tells you nothing about the other. Two deaths in one family share genes, a house, a set of habits, everything. If there are unknown factors that raise a family's risk, and the RSS said there are "very strong a priori reasons" to think so, then the second death is much more likely than the first, and the true figure, in the RSS's words, "may be very much less incriminating than the figure presented to the jury at trial."[5]

The Court of Appeal later agreed: the figure "grossly overstates the chance of two sudden deaths within the same family from unexplained but natural causes."[4]

That's a real error. But suppose it had been fixed. Suppose the right figure for two natural deaths in such a family were 1 in a million, or 1 in 100,000. Would that be the chance she was innocent? Still no. Here's the deeper problem.

### The second error: the swap

The 73 million figure, even if it had been sound, answers this question: if a family like this is innocent, how likely is it that two babies die suddenly? That is the probability of the evidence given innocence.

The jury needed a different question: given that two babies died suddenly, how likely is it that this family is innocent? That is the probability of innocence given the evidence.

These are the mammogram's two sentences again, "positive given cancer" and "cancer given positive", now with lives on them. And the swap is invisible for the same reason: both sentences contain the same words, and in English "the chance of two cot deaths in an innocent family" and "the chance that a family with two cot deaths is innocent" sound like the same thing. The RSS statement names the swap: some press reports "stated that this was the chance that the deaths of Sally Clark's two children were accidental. This (mis-)interpretation is a serious error of logic known as the Prosecutor's Fallacy."[5]

Why is it an error and not just a rewording? Because the evidence has to be judged against every explanation, and this number judges it against one. Here's the RSS's own framing, which is the sentence to memorise from this lesson: "The jury needs to weigh up two competing explanations for the babies' deaths: SIDS or murder. Two deaths by SIDS or two murders are each quite unlikely, but one has apparently happened in this case. What matters is the relative likelihood of the deaths under each explanation, not just how unlikely they are under one explanation."[5]

Read that again slowly, because it's the mechanism. Two babies died; that's fixed. Something rare has happened whatever the truth is. A mother murdering two of her babies is also rare, and nobody at the trial put a number on how rare. So the jury was handed one small probability and invited to feel its smallness, when the only thing that could have told them anything was a comparison of two small probabilities. A number on its own can't be "very unlikely"; it can only be very unlikely compared with something.

The Court of Appeal put it plainly: "the 1:73 million figure is no help. It is merely a distraction."[4]

Think back to lesson 3. "If she's innocent, two cot deaths are extremely unlikely. Two cot deaths happened. So she's not innocent." That has the shape of modus tollens, and it feels valid. But the first premise is not "if innocent then no two deaths"; it's "if innocent then two deaths are rare," and rare things happen. Run it as a probability and it's the conditional read backwards, which is the same move as affirming the consequent: from "innocence makes this unlikely" to "this makes innocence unlikely." The deductive shape gives no licence for that step, and the probabilistic one gives it only after you've asked how likely the evidence is under the alternative.

### What happened to Sally Clark

Her first appeal was dismissed on 2 October 2000.[4] Her husband and others kept working on the case. They found that microbiological tests done on Harry's blood, tissue and cerebrospinal fluid at post mortem, showing Staphylococcus aureus in several sites including the cerebrospinal fluid, had been known to the pathologist and not disclosed to the lawyers on either side (R v Clark, 2003, paras 2, 112 to 113).[4] The Criminal Cases Review Commission referred the case back to the Court of Appeal in 2002.[4][6] On 28 and 29 January 2003 the court heard the appeal, found the convictions unsafe, and quashed them; the Crown did not seek a retrial and she was released, having served three years (R v Clark, 2003, paras 5, 134 to 136).[4][7]

The statistics were not the ground on which the case was won; the undisclosed infection was. But in its written judgment the court went out of its way to say what it thought of the number. The evidence "should never have been before the jury in the way that it was", and had the point been fully argued, "we would, in all probability, have considered that the statistical evidence provided a quite distinct basis upon which the appeal had to be allowed" (paras 177, 180).[4] The court also said it suspected the Grand National comparison "may have had a major effect on their thinking notwithstanding the efforts of the trial judge to down play it."[4]

Sally Clark died in March 2007, at 42 (Dyer, 2007).[7]

I've told you this case in detail because it is the best-documented instance in the English-speaking world of a probabilistic argument doing harm, and because both the error and the correction are on the public record in the words of a court and a learned society, not in a textbook's tidy example. The pattern, though, is everywhere: "the odds of that being a coincidence are a million to one, so it wasn't." Every time you hear it, ask the RSS's question. Unlikely compared with what?

:::checkpoint A forensic expert says a fibre found at a scene matches the suspect's coat, and that only 1 coat in 1,000 in the country has this fibre. A juror says: "so there's a 1 in 1,000 chance he's innocent." What did the juror swap, and what's the right first question?
The juror took "1 in 1,000 coats match, if he's innocent" (the probability of the evidence given innocence) and read it as "1 in 1,000 that he's innocent, given the match." The right first question is how likely the evidence is under the other explanation, and then how many candidates there are: if a million coats are in play, about a thousand match, and he's one of a thousand on the fibre alone. The fibre narrows the field a great deal; it doesn't settle it.
:::

## How much should the evidence move you? The likelihood ratio

You've now seen the comparison the jury needed twice: "how likely is this evidence if the claim is true?" against "how likely is this evidence if it's false?" That comparison has a name, the likelihood ratio, and it's the honest measure of how much a piece of evidence should move you (Hahn & Oaksford, 2007; SEP, "Inductive Logic").[8][9]

Go back to the mammogram. A positive result happens 80 times in 100 when there's cancer and 9.6 times in 100 when there isn't. The ratio is 80 to 9.6, about 8. A positive test is eight times more likely with cancer than without, so it should move you about eightfold: from 1 in 100 before the test to about 8 in 100 after it, which is exactly the 8 in 103 you counted. The likelihood ratio is what the evidence does; the base rate is where you start; the answer is the two combined. Keep the three apart in your head and none of the errors in this lesson can get you.

Now you can say precisely what was missing in the Clark trial. The jury heard one side of the ratio (how unlikely the deaths were under innocence) and none of the other (how unlikely they were under guilt). A ratio with one term isn't a ratio. It's a number chosen for its smallness.

And you can say why the likelihood ratio is a good measure of inductive strength, which is what lesson 5 left as a matter of degree. An argument from evidence is strong when the evidence is much more likely if the conclusion is true than if it's false: ratio well above 1. It's weak when the evidence is about as likely either way: ratio near 1. It's evidence against when the ratio is below 1. And it's defeasible in exactly lesson 5's sense: a new fact can change how likely the old evidence is under each explanation, and the ratio moves.

### Absence of evidence, twice

Here's the measure earning its keep on an argument that's usually dismissed with a slogan. The example is invented; the shape is everywhere.

Argument, version one: "There's no evidence this drug causes liver damage. So it probably doesn't." The drug has just been developed and no trial has been run.

Argument, version two: same words, but now three large trials with tens of thousands of participants have been completed, each designed to catch liver damage, and none found it.

The slogan says "absence of evidence isn't evidence of absence" and dismisses both. The likelihood ratio says something more useful. Ask: how likely is "no evidence of harm" if the drug is harmful, and how likely is it if the drug is safe?

In version one, nobody has looked. "No evidence of harm" is nearly certain whether the drug is harmful or not, so the ratio is about 1, and the argument is weak. The slogan happens to be right here, for a reason it doesn't give.

In version two, the trials would very probably have found harm if it existed. "No evidence of harm" is now very likely if the drug is safe and quite unlikely if it's harmful. The ratio is large, and the argument is strong. Absence of evidence is evidence of absence exactly when the evidence would have been expected. Mike Oaksford and Ulrike Hahn made this case in 2004, arguing that the textbook "argument from ignorance" is often a legitimate inductive argument that's merely weak, and that its strength turns on how thorough the search was (Oaksford & Hahn, 2004).[10] Hahn and Oaksford extended the same treatment to circular arguments and slippery slopes in 2007: the "fallacy" names pick out forms that can be strong or weak by content, and the likelihood ratio says which (Hahn & Oaksford, 2007).[8] Lesson 8 will give those forms their names; you already own the test.

:::checkpoint A friend says "I've never seen a ghost, so they don't exist." Is that strong or weak, by the likelihood ratio, and what one question decides it?
The question is: how likely is "I've never seen one" if ghosts do exist, compared with if they don't? If ghosts are supposed to be rare and shy, not seeing one is about equally likely either way, and the argument is weak. If the claim is that ghosts appear nightly to everyone, not seeing one is strong evidence against that claim. The strength depends on what the claim predicts you'd have seen, which is the same test as the drug trials. (Whether ghosts exist is not a question this course takes a side on; the argument's strength is.)
:::

## Where the experts disagree

Two things in this lesson are argued over by serious people, and you should know the shape of each argument rather than just my line.

The first is about people. Kahneman and Tversky read Linda and the physicians as evidence that human judgement is systematically irrational: we use shortcuts (resemblance, vividness) that work often enough and fail predictably. Gigerenzer reads the same data the other way: people are well adapted to information in the form they evolved to meet, which is counts of events, and they fail on percentages because percentages are a recent and unnatural format. His evidence is that frequency formats raise the Bayesian answers from 16% and 28% to 46% and 50%,[3] and Hertwig and Gigerenzer's is that "probable" in the Linda problem is read as "plausible."[2] Both camps agree on the numbers. They disagree about what the numbers say about us. Something that would help settle it: whether the frequency advantage holds when the frequency version is made just as hard to parse as the probability version, and whether training in one format transfers to the other. For this course, the practical upshot is the same either way: count.

The second is about the foundations of the method. The Bayesian view, which this lesson has used, says the strength of an argument is how much its evidence should shift your probability, with the likelihood ratio doing the work. The main objection is the priors problem: the base rate was given to you in the mammogram, but in most real arguments nobody hands you a starting probability, and different people start in different places. Whether there's an objective right place to start, or whether the starting point is always a matter of judgement, is a live question in philosophy and the Stanford Encyclopedia's "Inductive Logic" entry maps it (SEP, "Inductive Logic").[9] The older programme of building an inductive logic that fixes degrees of support from the language alone, associated with Carnap, is now widely regarded as unsuccessful, the same entry reports.[9] The course's line is this: Bayes by counting is a tool that works whenever you can get a base rate; the likelihood ratio is a good measure of how much evidence should move you even when you can't; and the question of where priors come from is left open, because it is open.

## What people get wrong

**"More detail makes it more likely."** It makes it a better story and a smaller pile. The conjunction rule has no exceptions. When a forecast, a diagnosis, or a theory gets more specific, its probability can only fall, and if it feels like it rose, that's resemblance talking. Count.

**"The test is 80% accurate, so a positive means 80% likely."** That 80% is the probability of a positive given the condition. The probability of the condition given a positive depends on the base rate as much as on the test, and on a rare condition it can be under 10%. Ask for the base rate before you believe any accuracy figure, and count in thousands.

**"One in 73 million chance of two cot deaths means one in 73 million chance she's innocent."** The prosecutor's fallacy. The first is the probability of the evidence given innocence; the second is the probability of innocence given the evidence; and getting from one to the other needs the probability of the evidence under the other explanation. The RSS's question: unlikely compared with what?

**"Absence of evidence is never evidence of absence."** It is, when the evidence would have been found if it existed. The likelihood ratio decides, and it depends entirely on how hard anyone looked.

**"Bayes is a formula."** It's a count. The formula is a shorthand for dividing one pile by another, and people who learn the count get the right answer more often than people who learn the formula. If you can build the 1,000-person table, you know Bayes' rule.

**"Multiplying two probabilities gives the probability of both."** Only if they're independent. Two events that share a cause (two deaths in one family, two failures in one machine, two late trains on one line) are not, and squaring the single-event rate can be off by orders of magnitude, in the direction that makes the coincidence look impossible.

## Practice

Work these on paper, in natural frequencies, before the quiz. Every number below is invented for the exercise unless it cites a source.

1. **Medical.** A condition affects 2 people in every 1,000. A screening test picks it up in 90 of every 100 people who have it and wrongly flags 5 of every 100 who don't. Someone tests positive. Start with 10,000 people and count. What share of positive results are true?

2. **Non-medical.** An airport scanner flags a bag containing a banned item 99 times in 100, and flags a clean bag 1 time in 100. Suppose 1 bag in 10,000 contains a banned item. Start with 1,000,000 bags. A bag is flagged; what share of flagged bags actually contain a banned item? Then say, in a sentence, why the scanner is still worth running.

3. **The missing number.** "The lie detector is 90% accurate, and he failed it. So he's probably lying." What single piece of information do you need before you can say anything about "probably", and why does the argument fall apart without it?

4. **Conjunction.** A weather presenter says "there's a good chance of a storm tomorrow, and an even better chance of a storm with the river flooding, since the ground is already saturated." Rewrite her claim so it obeys the conjunction rule, and say what the saturated ground can legitimately raise.

5. **Courtroom.** A witness says a getaway car was a red hatchback, and the defendant owns one. Suppose 1 in 50 cars in the town is a red hatchback. The prosecutor says: "there's only a 1 in 50 chance an innocent man would own that car." Write, in two sentences, the comparison the jury should make instead, and what else they'd need to know to make it.

Answers, briefly: (1) 20 have it, 18 positive; 9,980 don't, 499 positive; 18 of 517, about 3.5%. (2) 100 bags contain an item, 99 flagged; 999,900 don't, 9,999 flagged; 99 of 10,098, about 1%; the scanner is worth running because it cuts the pile to search from a million to ten thousand, and a 1% hit rate beats a 0.01% one. (3) The base rate: how many of the people who take this test are lying? Without it, "90% accurate" can't be turned into "probably lying"; if 1 in 100 people tested are lying, most failures are honest people. (4) "Storm" is at least as probable as "storm and flood"; the saturated ground raises the probability of a flood given a storm, not the probability of the pair above the probability of a storm. (5) How likely is it that the defendant owns a red hatchback if he's guilty, versus if he's innocent (1 in 50), and how many red hatchbacks are in the town, since he's one of that many on this evidence alone; the rest of the case has to do the rest.

:::exercise Do it now
Find one number in this week's news that is a probability, a rate, or an "X% accurate" claim. Write down three things: (1) what count it's a share of (a share of what pile?); (2) what base rate it's silent about, if any; (3) if it's being used as evidence for a claim, what the likelihood ratio would need, that is, how likely the number would be if the claim were false. Add the page to your argument folder. If you can't find the base rate anywhere in the article, note that too; it's the commonest way a true number is used to support a false conclusion.
:::

Then, before the quiz, close this page and write down from memory: the conjunction rule in one sentence; the mammogram count (1,000 women, then the four numbers); the two errors in the Clark figure; and what the likelihood ratio compares. Check, then reread only what you missed.

## Connections

This lesson finishes step 4 of the check for inductive arguments. Lesson 5 said a strong argument makes its conclusion probable; now "probable" is a share of cases you can count, and "how strong" is a likelihood ratio you can estimate. Three earlier ideas came back in new clothes: belief bias from lesson 2 is why Linda works; affirming the consequent from lesson 3 is the deductive cousin of the prosecutor's fallacy, since both run a conditional backwards; and defeasibility from lesson 5 is what happens when new evidence changes a likelihood.

Lesson 7 turns to reconstruction: putting someone else's argument in its strongest form before you test it, and the likelihood ratio will be one way to say how much a premise supports a conclusion. Lesson 8 gives names to argument from ignorance, slippery slope, and circularity, and you'll find you already have the test that decides whether each is strong. Lesson 9 takes base rates into the news, where "doubles the risk" hides the pile it's a share of.

Two other Foval courses own this material more fully: Statistics for Citizens (sampling, risk, and what a rate means in a population) and Probability and Decisions (expected value, and what to do once you have a probability). This lesson taught only as much as you need to evaluate an argument.

## Go deeper

- Gigerenzer, *Reckoning with Risk* (Penguin, 2002; US title *Calculated Risks*): the natural-frequency method for the general reader, with screening, DNA, and courtroom cases worked in the same style as this lesson.
- Gigerenzer & Hoffrage, "How to improve Bayesian reasoning without instruction" (*Psychological Review*, 1995): the paper behind the 16% to 50% result; read the introduction and Study 1 to see the frequency wording they used.
- Tversky & Kahneman, "Extensional versus intuitive reasoning" (*Psychological Review*, 1983): Linda and her many variants, with the authors' own attempts to make the error go away; pair it with Hertwig & Gigerenzer (1999) for the reply.
- Royal Statistical Society, statement on R v Sally Clark (23 October 2001), two pages, and R v Clark [2003] EWCA Crim 1020, paras 94 to 110 and 173 to 180: read the primary documents; the court's own account of the number is clearer than most textbook summaries.
- Stanford Encyclopedia of Philosophy, "Inductive Logic": section 1 to 3 for the likelihood-ratio framework with a worked disease-test example, and later sections for the priors debate if you want to see what's unsettled.

## Sources

1. Tversky, A. & Kahneman, D., "Extensional versus intuitive reasoning: The conjunction fallacy in probability judgment", *Psychological Review* 90(4), 1983, 293 to 315. The Linda description; the direct test on 142 UBC undergraduates in which 85% rated "bank teller and feminist" more probable than "bank teller"; 88% violations in direct tests overall with "no effect of statistical sophistication"; the betting version at 56% (n = 60); the doctoral-level rating group at 36%.
2. Hertwig, R. & Gigerenzer, G., "The 'conjunction fallacy' revisited: How intelligent inferences look like reasoning errors", *Journal of Behavioral Decision Making* 12(4), 1999, 275 to 305. The objection that "probable" is read non-mathematically in the Linda problem and that frequency phrasing reduces the error.
3. Gigerenzer, G. & Hoffrage, U., "How to improve Bayesian reasoning without instruction: Frequency formats", *Psychological Review* 102(4), 1995, 684 to 704. The mammography problem (base rate 1%, sensitivity 80%, false-positive rate 9.6%, posterior 7.8%); Eddy's 1982 result that 95 of 100 physicians estimated 70 to 80%; Study 1 rates of Bayesian answers of 16% and 28% in probability formats against 46% and 50% in frequency formats; the frequency wording quoted.
4. *R v Clark* [2003] EWCA Crim 1020 (Court of Appeal, Criminal Division, Kay LJ, 11 April 2003). Para 1: conviction on 9 November 1999 at Chester by a majority of 10 to 2; first appeal dismissed 2 October 2000. Paras 8 to 9: the children's dates. Para 96: the 1 in 8,543 figure and Meadow's multiplication to 1 in 73 million. Para 99: the Grand National comparison. Para 108: "no help ... merely a distraction". Paras 2, 112 to 113: the undisclosed microbiology showing Staphylococcus aureus. Paras 4 to 5: the CCRC referral and the hearing of 28 and 29 January 2003 at which the convictions were found unsafe. Paras 134 to 136: the verdicts quashed. Paras 177 to 180: the statistical evidence "should never have been before the jury", the figure "grossly overstates" the chance, and would "in all probability" have been a distinct ground of appeal.
5. Royal Statistical Society, "Royal Statistical Society concerned by issues raised in Sally Clark case", news release, 23 October 2001. The squaring "statistically invalid ... only valid if SIDS cases arose independently within families"; the figure "has no statistical basis" and "may be very much less incriminating"; the press misreading named as the Prosecutor's Fallacy; "What matters is the relative likelihood of the deaths under each explanation, not just how unlikely they are under one explanation."
6. Criminal Cases Review Commission, case summary "Clark, Sally" (ccrc.gov.uk). Conviction November 1999; application November 2001; fresh evidence of an overwhelming staphylococcal infection in Harry; referral 2002; conviction quashed January 2003.
7. Dyer, C., "Falsely convicted Sally Clark dies suddenly", *BMJ* 334(7594), 24 March 2007. Three years in prison including the lost first appeal; cleared after the undisclosed Staphylococcus aureus results came to light; died at 42.
8. Hahn, U. & Oaksford, M., "The rationality of informal argumentation: A Bayesian approach to reasoning fallacies", *Psychological Review* 114(3), 2007, 704 to 732. The likelihood ratio as the measure of argument strength; argument from ignorance, circularity, and slippery slope as forms that can be strong or weak by content.
9. Stanford Encyclopedia of Philosophy, "Inductive Logic" (rev. February 2025). Inductive support as degree; the Bayesian framework with priors, likelihoods, and likelihood ratios, with a disease-test example; the report that Carnap's programme is now generally regarded as unsuccessful; the priors problem.
10. Oaksford, M. & Hahn, U., "A Bayesian approach to the argument from ignorance", *Canadian Journal of Experimental Psychology* 58(2), 2004, 75 to 85. Some arguments from ignorance parallel accepted inductive reasoning; textbook cases are weak rather than fallacious; strength depends on the premises, including how thorough the search was.
