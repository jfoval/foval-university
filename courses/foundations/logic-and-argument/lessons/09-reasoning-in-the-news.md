---
title: Bad reasoning in the news and everyday life
minutes: 50
objectives:
  - Evaluate a source with the four rules for sources (cite, informed, impartial, cross-check) and explain what to look for when qualified experts disagree
  - Convert a relative-risk headline into absolute terms and natural frequencies, and identify a missing base rate or denominator
  - Identify survivorship bias in a described sample and explain what Wald's analysis of returning aircraft actually did
  - Apply a repeatable checklist to a news argument and identify motivated reasoning in your own reading of it
quiz:
  - q: A headline says a new blood-pressure drug "cuts the risk of stroke by a third". The study it reports followed 10,000 people for five years. In the group taking the drug, 200 had a stroke; in the group taking a placebo, 300 did. Which statement best describes what the headline left out?
    options:
      - The study was too small to support a claim as strong as a third, so the finding should be treated as unproven
      - The absolute fall is from 3 in 100 to 2 in 100 over five years, so 100 people take it for one fewer stroke
      - The headline should have reported the number of strokes prevented per year of treatment rather than per five years
      - The relative figure is wrong, because 100 fewer strokes out of 300 is a fall of one half rather than one third
    answer: 1
    explain: A relative risk tells you the ratio and hides the base. Here 300 in 5,000 is 6% and 200 in 5,000 is 4%, a third lower in relative terms and two in a hundred in absolute terms, which is the number a patient needs. Option A confuses the size of the effect with the size of the study; 10,000 people is not small. Option C changes the unit without supplying the base. Option D has the arithmetic wrong; 100 fewer out of 300 is a third, so the headline's ratio is right, which is exactly why ratios are so easy to report and so easy to misread.
  - q: An investment firm advertises that "the average fund in our range has beaten the market over the past ten years". You learn that the firm launched thirty funds in that period and now runs eighteen; the other twelve were closed after poor returns and are not in the average. What is the flaw, in the terms of this course?
    options:
      - Post hoc reasoning, because market gains that would have happened anyway are being credited to the firm's skill
      - A false comparison, because the funds should be compared with each other rather than with the market as a whole
      - A survivorship error, because the sample is the funds that lasted and the population includes those closed
      - An appeal to authority, because the firm is citing its own record rather than any independent assessment
    answer: 2
    explain: This is Wald's problem in a suit. The twelve closed funds are the aircraft that did not come back; averaging only the survivors flatters the range, just as damage on returning planes understates the danger to engines. Option A names a real pattern but not this one; the claim is about beating the market, not about causing the market. Option B invents a rule; comparing with the market is the right comparison, once all thirty funds are in it. Option D is a fair worry about impartiality, and the impartial question is worth asking too, but the specific flaw you were shown is the missing half of the sample.
  - q: A retired cardiologist writes a widely shared post saying a popular sleep app "clearly damages memory". A sleep researcher at a university replies that the evidence does not show that. Both have real qualifications. Which is the best next step by this lesson's rules?
    options:
      - Ask whether either is speaking inside their own field, then look for a consensus statement from the field
      - Treat the disagreement as proof that nobody knows, and set the whole question aside until the experts agree
      - Prefer the cardiologist, because a clinician who has treated patients outranks a researcher who studies them
      - Prefer whichever of the two cites more studies in support, since the larger list is the better-backed view
    answer: 0
    explain: Weston's rule is to seek informed sources, and Walton's field question asks whether the expert's expertise covers the claim. A cardiologist is an expert in hearts, not sleep and memory, so the field question already separates them, and cross-checking against the wider field settles it. Option B is the "nobody knows" misconception; expert disagreement is a reason to look harder, not to stop. Option C invents a ranking of clinicians over researchers that no rule supports. Option D counts citations rather than checking them; a long list from outside the field is still outside the field.
  - q: A local news site runs a bar chart headed "Burglaries soar" showing this year's figure as a bar three times the height of last year's. The numbers printed on the bars are 1,040 and 1,120. What has the chart done, and what is the honest reading?
    options:
      - Used a logarithmic scale, which is standard for crime data and makes an 8% rise look larger than it is
      - Mislabelled the bars, because a rise from 1,040 to 1,120 cannot produce bars that differ by a factor of three
      - Plotted the right numbers, since a rise of 80 burglaries is a real increase and the chart is entitled to show it
      - Cut the vertical axis so that it starts near 1,000, which turns an 8% rise into what looks like a tripling
    answer: 3
    explain: An 8% rise drawn as a tripling is the truncated-axis error the Economist found in its own charts. Start the axis at zero and the two bars are almost the same height, which is what the numbers say. Option A misnames the device; a log scale would shrink the difference, not inflate it. Option B assumes the chart is impossible rather than misleading; a truncated axis produces exactly this picture from exactly these numbers. Option C is true as far as it goes, and the chart is entitled to show the rise, but at its real size.
  - q: You read an article arguing for a policy you already support. It quotes one study, and you accept the conclusion in a few seconds. Later you read an article arguing the opposite, also quoting one study, and within a few seconds you have found three problems with it. According to this lesson, what happened?
    options:
      - You reasoned well both times, since a good argument is quicker to accept than a bad one is to refute
      - You checked the conclusion on your own side and the link on the other, and the speed is the sign of it
      - The second article really was weaker, because articles against a position tend to rely on smaller studies
      - The first article was better sourced, because you would surely have noticed problems if there had been any
    answer: 1
    explain: The pattern in Evans, Barston and Pollard's belief-bias studies and in Kahan's motivated-numeracy experiment is that people scrutinise arguments whose conclusions they dislike and wave through arguments whose conclusions they like. Finding three flaws in seconds on one side and none on the other, with one study each, is that pattern from the inside. Option A takes the feeling at face value. Option C invents a general fact about articles to explain away the symmetry. Option D is the "I'm not biased" misconception; not noticing problems is what motivated reasoning feels like.
  - q: A state governor says in a speech that "unemployment fell from 6% to 4% since I took office, so my policies are working". A fact-checker confirms the two figures. Which question from the checklist does the most work here, and what does it reveal?
    options:
      - Who says, which reveals that a politician is not an impartial source, so the figures should be doubted until confirmed
      - How do they know, which reveals that unemployment figures come from a household survey with a margin of error
      - Compared with what, which reveals the hidden premise that whatever happened on the governor's watch was his doing
      - Share of what, which reveals that 6% and 4% are rates of the labour force and not counts of unemployed people
    answer: 2
    explain: The figures are true, which is why "who says" and "how do they know" do little here; the fact-checker has settled them. The argument's weak step is the unstated premise that the change was caused by the policies, and "compared with what" is the question that exposes it. Did unemployment fall in neighbouring states, in the country, in the same period? That is the comparison FactCheck.org applied to both a president's jobs chart and a White House statement about the stock market, reaching the same verdict each time. Option A treats a true number as suspect because of who said it; the impartial rule is about what a source may leave out, not about rejecting verified figures. Option B and option D are both correct observations and neither touches the causal step.
---

On 26 October 2015 the International Agency for Research on Cancer, the cancer agency of the World Health Organization, put out a press release. It classified processed meat as "carcinogenic to humans (Group 1)" and said that "each 50 gram portion of processed meat eaten daily increases the risk of colorectal cancer by 18%."[3] Within hours the headlines had bacon in the same sentence as cigarettes.

You met a version of that argument this week. Maybe it was about a food, a drug, a policy, a chart, a study that "proves" something. Its premises were compressed into a headline, its source was doing the work of the warrant, and nobody checked it before it reached you. This lesson is about checking it. You already own every tool you need; the previous eight lessons built them. What's new is where to point them, and a short list of questions you can run in your head in the time it takes to read a headline twice.

Start with that 18%. Before you go on, answer this.

:::predict The 18% figure is a relative risk. Roughly how many extra cases of bowel cancer, per thousand people, does a lifetime of eating a lot of processed meat add?
Cancer Research UK worked it out the same day. About 61 people in every 1,000 in the UK get bowel cancer at some point in their lives. Among 1,000 people who eat the least processed meat, about 56 do. Among 1,000 who eat the most, about 66 do.[4] Ten extra cases per thousand, over a lifetime. That is a real risk, and it is nothing like the risk from smoking; the same article notes that about 3 in every 100 UK cancers were attributed to red and processed meat, against 19% attributed to smoking.[4] If you guessed a much larger number, notice that the headline gave you nothing to guess from. That was the problem.
:::

## News is an argument with the premises squeezed out

A news story is not a different kind of thing from the arguments in lessons 1 to 8. It is the same thing, compressed. "Bacon causes cancer" is a conclusion. The premises are a study, a statistic, and a source, and the source is standing in for the warrant: the unstated general step, from lesson 7, that licenses you to move from "IARC says" to "it's true". Most of the time you never see the study. You see the source's name and a number, and you decide in a second.

So the check from lesson 1 still applies, and its six steps still run in order: find the conclusion, find the premises, supply what's missing, test the link, test the premises, and only then consult your opinion of the conclusion. What this lesson adds is five questions that fit the compressed form. Three are for the source: who says, how do they know, who disagrees. Two are for the number: share of what, compared with what. Hold those five in mind. By the end you'll have seen each one do real work.

## Three questions for the source

Anthony Weston's *Rulebook for Arguments* gives four rules for arguments from authority, and they are the best short statement of how to treat a source that I know.[1]

Rule 13, cite your sources: a precise claim needs a citation "so that others can easily find the source on their own". Rule 14, seek informed sources: "Sources must be qualified to make the statements they make." His example is that for the best information on climate, you go "to climatologists, not politicians", and he warns that "experts on one subject are not necessarily informed about every subject on which they offer opinions." Rule 15, seek impartial sources: "People who have the most at stake in a dispute are usually not the best sources of information about the issues involved." He adds the part people miss: honesty is not enough, because "the truth as one honestly sees it can still be biased. We tend to see what we expect to see." Rule 16, cross-check sources: "Consult and compare a variety of sources to see if other, equally good authorities agree."[1]

Those four rules are the three source questions. Who says (rule 13, and is the source named at all)? How do they know (rule 14, and are they informed on this)? Who disagrees (rules 15 and 16, and what would an interested source have reason to leave out)? Notice what Weston says an interested source does. It doesn't usually lie. It notices, remembers and passes on what supports its view, and is "not quite so motivated when the evidence points the other way."[1] So the question to ask of a manufacturer's press release, a campaign's chart, or a charity's appeal is rarely "is this false?" It is "what is this not telling me?"

You met the fuller version of "how do they know" in lesson 8: Walton's six critical questions for an appeal to expert opinion. Is the source credible as an expert? Is the claim inside their field? What did they actually assert? Are they personally reliable? Is the claim consistent with what other experts say? Is it based on evidence?[2] In the news, the field question and the consistency question catch the most. A physicist on diet, a surgeon on economics, a celebrity on anything: expertise doesn't travel. And a single expert against a field is news precisely because it is unusual, which is a reason to look for the field's view before adopting the outlier's.

### When the experts really disagree

Sometimes you run all six questions on both sides and both pass. Two qualified, honest, informed people, in the same field, looking at the same evidence, and disagreeing. Weston's advice for that case is blunt: "reserve judgment yourself. Don't jump in with two feet where truly informed people tread with care."[1]

Reserving judgement is not the same as shrugging. Three things to look for next. First, is there a consensus statement, a review, or a position from a body that represents the field rather than a person in it? Second, how big is each camp? A field split down the middle is a different situation from a field with a few outliers, and Weston notes that "on some topics the appearance of controversy may be created even when there is virtually no disagreement among qualified authorities."[1] Third, and this is lesson 6's question in new clothes, what evidence would settle it, and has anyone gathered it? A disagreement where both sides can say what would change their minds is a live scientific question. A disagreement where neither can is something else.

This is the editorial standard of this university turned into a reading habit. Sort the claim: is it established across the field, contested inside it, or a question of value that no study could settle? Most news arguments blur the three, and most of your work is un-blurring them.

:::checkpoint Two qualified experts, both inside their field, disagree in public about whether a common supplement helps memory. Name three things you would look for before deciding what to think.
A consensus statement or systematic review from the field, not from either person. The size of each camp: is this a split field or one outlier against the rest? And what evidence would settle it, whether it exists, and whether either expert has said what would change their mind. If the third question has no answer, you may be looking at a value disagreement dressed as an empirical one.
:::

## Two questions for the number

Now the other half of the checklist. Most news numbers arrive as a rate or a ratio, and both hide something.

### Share of what: relative and absolute risk

In October 1995 the UK Committee on Safety of Medicines issued a warning that third-generation oral contraceptive pills increased the risk of "potentially life-threatening blood clots in the legs or lungs twofold", which is to say by 100%. It went out in letters to 190,000 general practitioners, pharmacists and directors of public health, and in an emergency announcement to the media.[5] Gerd Gigerenzer and his colleagues, who tell the story in their 2007 review of health statistics, ask the only question that matters.

:::predict "Twofold" is a relative risk. How many extra cases of thrombosis, per 7,000 women, was the committee warning about?
One. The studies behind the warning "had shown that of every 7,000 women who took the earlier, second-generation oral contraceptive pills, about 1 had a thrombosis; this number increased to 2 among women who took third-generation pills."[5] The absolute increase was 1 in 7,000. The relative increase was indeed 100%. Both statements are true. Only one of them tells a woman what she needs to know.
:::

The consequences are documented. Distressed women stopped taking the pill. Gigerenzer and colleagues report an estimate of "13,000 additional abortions in the following year in England and Wales", a rise that reversed a decline running since 1990, with one extra birth for every extra abortion and about 800 additional conceptions among girls under 16.[5] Their conclusion: "Had the committee and the media reported the absolute risks, few women would have panicked and stopped taking the pill."[5]

Here is the mechanism, and it is lesson 6's base rate in the wild. A relative risk is a ratio of two rates. Divide 2 in 7,000 by 1 in 7,000 and the 7,000 cancels. That is what a ratio is for, and it is why relative risks are so easy to report: one number, no denominator. But the denominator was where the answer lived. "Doubles the risk" of something that happens to 1 in 7,000 people is 1 extra case in 7,000. "Doubles the risk" of something that happens to 1 in 10 is 1 extra case in 10. The word "doubles" cannot tell you which, and the headline that gives you only the ratio has removed the base rate on purpose or by accident. Either way, you put it back.

You put it back by counting, which is what lesson 6 taught. Take a round number of people, apply the base rate, apply the change, and compare the counts. That's the natural-frequency method that raised correct answers on Bayesian problems from 16% and 28% in probability formats to 46% and 50% in frequency formats (Gigerenzer & Hoffrage, 1995).[16] It works on risk headlines for the same reason: it forces the denominator back into view.

Now do the bacon story yourself, with a gap. Cancer Research UK's figure for the lowest consumers is 56 in 1,000. The press release says 18% higher for each daily 50 gram portion. Before reading on, compute the count for the high consumers.

56 times 1.18 is about 66. Ten extra cases in a thousand, over a lifetime, for people at the top of the consumption range. That is exactly what Cancer Research UK reported, and you just reproduced it from the two numbers the story gave you.[3][4] Look at the chart. Both bars are drawn out of a thousand people; the whole bar is the denominator the headline dropped.

<svg viewBox="0 0 360 150" role="img" aria-labelledby="meat-title" style="max-width:100%;height:auto;font-family:inherit">
  <title id="meat-title">Bowel cancer over a lifetime per 1,000 people: 56 among those who eat the least processed meat, 66 among those who eat the most</title>
  <text x="0" y="14" font-size="12" fill="#0f2a4a" font-weight="bold">Bowel cancer over a lifetime, per 1,000 people</text>
  <text x="0" y="42" font-size="11" fill="#333">Eat the least</text>
  <rect x="0" y="48" width="340" height="18" fill="#ddd"/>
  <rect x="0" y="48" width="19" height="18" fill="#0f2a4a"/>
  <text x="24" y="62" font-size="11" fill="#0f2a4a">56</text>
  <text x="0" y="92" font-size="11" fill="#333">Eat the most</text>
  <rect x="0" y="98" width="340" height="18" fill="#ddd"/>
  <rect x="0" y="98" width="19" height="18" fill="#0f2a4a"/>
  <rect x="19" y="98" width="3.4" height="18" fill="#8b1e2d"/>
  <text x="27" y="112" font-size="11" fill="#0f2a4a">66</text>
  <text x="60" y="112" font-size="11" fill="#8b1e2d">10 extra, in red</text>
  <text x="0" y="140" font-size="10" fill="#666">Each grey bar is 1,000 people. Source: Cancer Research UK, 26 October 2015.</text>
</svg>

Two more things the story needed. First, "Group 1" is a statement about the strength of the evidence that something causes cancer, not about how much cancer it causes; tobacco and processed meat sit in the same group and cause very different amounts.[4] Second, the press release itself said it: "For an individual, the risk of developing colorectal cancer because of their consumption of processed meat remains small, but this risk increases with the amount of meat consumed."[3] The sentence that would have stopped the bacon-and-cigarettes headline was in the source. The headline left it out. Weston's rule 15 in action: not a lie, an omission.

:::callout Mismatched framing
Gigerenzer and colleagues report an analysis of the *BMJ*, *JAMA* and *The Lancet* from 2004 to 2006: when studies reported both benefits and harms of a treatment, 1 in 3 "used mismatched framing and did not report the benefits in the same metric as the harms. In most cases, relative risks were reported for benefits, and absolute frequencies were reported for harms."[5] A 40% reduction in one line, 1 in 1,000 in the next. When you see two numbers in different units in the same story, convert both to counts per thousand before you compare them.
:::

:::video https://www.youtube.com/watch?v=p7EsMIxcN5s | How good are you at calculating risk? (Gerd Gigerenzer, TED-Ed)
Five minutes. Gigerenzer takes three headline shapes ("reduces the risk by 40%", "up by a factor of two", "doubles your chance") and shows what each one hides. Watch it after you have done the bacon conversion yourself, so you can check your method against his.
:::

:::checkpoint A headline says a new screening test "reduces deaths from the disease by 25%". Gigerenzer and colleagues open their review with a case exactly like it. What one question do you ask, and what does the answer look like?
Share of what? A 25% relative reduction means nothing until you know the base rate. Their own example: the statement that mammography screening reduces the risk of dying from breast cancer by 25% "in fact means that 1 less woman out of 1,000 will die of the disease."[5] So 4 in 1,000 becomes 3 in 1,000. That is a real benefit and a small number, and both facts belong in the story.
:::

### Compared with what: the sample you can't see

The second number question is about the denominator's other job: which people, or which cases, went into it. The cleanest example in the history of statistics is Abraham Wald's work on aircraft, and you have almost certainly heard a version of it. This section tells the version in the primary account, which is Marc Mangel and Francisco Samaniego's 1984 exposition in the *Journal of the American Statistical Association*, together with the reprint of Wald's own wartime memoranda.[7][9]

The problem, in Mangel and Samaniego's words: "Aircraft returning from missions have hits by enemy weapons distributed over various parts of the plane (e.g., wings, tail, fuselage, etc.). The operational commander must decide (a) what tactics would improve survivability, and (b) how to reinforce various parts of the aircraft to improve survivability." Reinforcement adds weight, which "impairs its mission". And: "The operational commander does not know the distribution of hits on an aircraft that did not return. This is the basic difficulty in making a decision."[7]

:::predict Returning planes show many hits on the fuselage and few on the engines. You have a limited weight of armour. Where does the pattern on the survivors tell you to put it, and why?
On the engines. The planes are the sample; the population includes the ones that didn't come back. A part that shows few hits on survivors, when it ought to have been hit as often as any other part of its size, is a part where a hit tends to stop the plane returning. The damage you see is the damage a plane can survive. That is the intuition. What follows is what Wald actually did with it, which is more careful than the intuition and worth knowing.
:::

Wald worked at the Statistical Research Group at Columbia during the war and wrote the method up as a series of eight memoranda for the National Defense Research Committee in 1943. They were never published; the Center for Naval Analyses reprinted them in 1980.[9] Mangel and Samaniego redo his calculations on one hypothetical data set so you can follow the logic. Suppose 400 aircraft fly a mission. Of those returning, 320 have no hits, 32 have one hit, 20 have two, 4 have three, 2 have four and 2 have five.[7] Add those up and 380 came back, so 20 were lost, and the returning planes carry 102 hits between them.

The first move is an assumption you should notice, because the whole method rests on it: "Wald also assumed that an unhit aircraft always returns."[7] Every one of the 20 missing planes was hit. From the pattern of hit counts on survivors, and assuming for the simple version that each hit has the same chance of bringing a plane down, Wald's basic equation gives the probability that a plane survives one hit. For these data it is 0.851: about 15 in 100 hits are fatal.[7]

Now the part everyone remembers, done properly. Divide the plane into four parts: engines, fuselage, fuel system, and everything else. Mangel and Samaniego take the engines to be 26.9% of the plane's surface area, the fuselage 34.6%, the fuel system 15.4% and the rest 23.1%. If bullets landed at random, that is the share of hits each part should get. Now count the hits on the returning planes: 19 on engines, 39 on the fuselage, 18 on the fuel system, 26 elsewhere. As fractions of the 102 hits, that is 18.6%, 38.2%, 17.6% and 25.5%.[7]

Look at the engines. They are 26.9% of the surface and received 18.6% of the hits that came home. Hits on engines are under-represented among survivors. Under Wald's assumptions, the reason is that planes hit there tended not to come home. The formula is a ratio: the probability of surviving a hit to a part is the overall survival probability, times the part's share of observed hits, divided by the part's share of area. For the engines, 0.851 times 0.186 divided by 0.269 gives 0.588. A hit on an engine is survived about 59% of the time, against 85% for a hit anywhere.[7]

Your turn. Do the fuselage before you read the next line: 0.851 times 0.382, divided by 0.346.

About 0.94. Mangel and Samaniego's table gives 0.940 for the fuselage, 0.973 for the fuel system, 0.939 for everything else, and 0.588 for the engines, and they conclude: "For these data, the most vulnerable portion of the aircraft is the engine area."[7] Wald's own memorandum, on its own example, says such a table "can be used as guides for locating protective armor and can be used to make a prediction of the estimated loss of a future mission."[9] So the armour does go where the survivors weren't hit. But not because Wald had a hunch. It goes there because the observed share of hits, set against the expected share, measures how lethal a hit to each part is, and that comparison is only possible once you have written down the sample you can see and the population you can't.

:::figure https://upload.wikimedia.org/wikipedia/commons/b/b2/Survivorship-bias.svg | Outline of a twin-engined aircraft seen from above, with red dots marking hits clustered on the wings, tail and rear fuselage and almost none on the engines and cockpit
An illustration of the idea, not Wald's data: a hypothetical damage pattern on returning aircraft, with hits clustered where a plane can be hit and still fly home. Wald's memoranda worked from counts of hits per part set against each part's share of surface area, as in the worked example above. Image by Martin Grandjean (vector), McGeddon (picture), US Air Force (hit plot concept), Wikimedia Commons, CC BY-SA 4.0.
:::

Here is why this belongs in a lesson about the news, and it is not the story about the clever statistician. Survivorship is a sampling error, the one from lesson 5 where the sample fails to represent the population. The returning planes are a sample drawn by a process that depends on the very thing you want to measure. So are the businesses in a book about successful businesses, the funds in an advert for a fund manager, the graduates a university puts on its website, the people who answer a survey about the survey's own subject, the studies that got published because they found something. Whenever the process that put a case in front of you is connected to the outcome you're judging, ask what the process filtered out. That is "compared with what?" in its most general form: compared with the cases you didn't see.

There is a second lesson here, and it's about sources. The popular version of this story, the one with the generals wanting to armour the bullet holes and Wald correcting them, is a retelling. The memoranda contain a method and worked examples; they don't contain that scene. Even the question of whether the method was used in the war has two answers in the same journal issue. The paper's summary says the work "was used in World War II and in the wars in Korea and Vietnam."[7] In their rejoinder to the discussion, the same authors are more careful: "We do not know whether it was used during World War II, although it was produced early enough in the war to have been available", and they then document its use on the A-4 aircraft during the Vietnam War and on the B-52.[8] When a story about reasoning has been polished into an anecdote, go to the primary account and see what it actually supports. The primary account here is more interesting than the anecdote, and it is also less certain.

:::checkpoint A magazine profiles ten people who dropped out of university and founded successful companies, and concludes that university is overrated for founders. In Wald's terms, which planes are missing, and what would you need to see?
The dropouts who founded companies that failed, and the graduates who founded companies at all. The ten profiles are the planes that came back. To judge whether dropping out helps, you'd need the rate of success among dropouts who tried and among graduates who tried, which is the population the magazine's sample was filtered from. Ten survivors can't give you a rate.
:::

## Charts: when the picture is the argument

A chart is a compressed argument too, and it has its own ways of removing the base rate. The most honest source I know on this is the Economist's own data team. In March 2019, Sarah Leo, a visual journalist there, went back through the paper's archive and published a set of its own charts that had gone wrong, sorted into three kinds: misleading, confusing, and failing to make a point.[10]

Two of the misleading ones matter here. One was a bar chart of the average number of Facebook likes on posts by pages of the political left, meant to show the gap between Jeremy Corbyn's posts and everyone else's. The vertical axis had been truncated: it didn't start at zero. Leo's verdict was that the chart "not only downplays the number of Mr Corbyn's likes but also exaggerates those on other posts", and the redrawn version showed his bar in full with the others still visible.[10] The other was a line chart from the paper's daily app tracking how people felt about the Brexit referendum result week by week. Drawn on a scale that was too sensitive, it looked as if respondents "had a rather erratic view of the referendum result", swinging up and down by a couple of percentage points from one week to the next, when the movement was inside the noise.[10]

Both are the same error as "doubles the risk". A truncated axis drops the zero, which is the base the bars are measured from; a hypersensitive scale magnifies the change and hides how small it is against the whole. Ask the two number questions of any chart. Share of what: where does the axis start, and what is the full range? Compared with what: is the change drawn against its base, or against itself? A chart that won't answer is making an argument it doesn't want checked. And notice who caught these: the outlet, on itself. That is what cross-checking looks like when a source does it honestly, and it is a reason to trust the source more, not less.

## A matched pair: the same argument, two sides, one verdict

Here is the pattern you'll see most often in political news, shown in two documented instances chosen so that the checklist reaches the same verdict on each. The pattern is: a good number happened while I was in charge, so I caused it. Lesson 5 called its bad version post hoc; the checklist calls it "compared with what?"

On 3 February 2024 President Biden posted on X: "The last guy had the worst jobs record since the Great Depression", with a chart titled "Jobs Created by President" showing a monthly average loss of 57,000 jobs under President Trump against a large monthly gain under Biden. FactCheck.org's Lori Robertson checked it on 9 February. The numbers were real. But the chart's baseline for Trump included April 2020, when pandemic shutdowns removed 20.5 million jobs in a month, and its figure for Biden included the recovery of those same jobs. Robertson's verdict: the chart "also leaves the misleading impression that presidents are responsible for all the job creation, or loss, during their time in office. But there are many economic factors outside the control of a president (see: COVID-19)."[11] The honest comparison she supplies is the post-recovery rate: "Since then, the job growth under Biden has been an average of 282,000 per month", which she notes is "still 100,000 more than the pre-pandemic average under Trump."[11] A real gain, a smaller one, and one the chart could have shown.

On 16 February 2026 a White House press release said the stock market had "rebounded strongly under President Trump's leadership." FactCheck.org's D'Angelo Gore, Lori Robertson and Robert Farley checked it on 19 February. Again the number was real: the S&P 500 had risen 14.5% from the last trading day before the inauguration to 18 February 2026. And again the comparison was missing: "The stock market performed well in Biden's final two years in office", with the S&P 500 "rising over 20% each of those years", which the checkers note was "better than the 13% gain Trump saw in his first year."[12] The market rose under both presidents; it rose faster in the years before this one.

Run the checklist on both. Who says: the person whose record is at stake, which is Weston's rule 15 exactly, so ask what's left out rather than whether the number is false. How do they know: government statistics and market indices, which are fine. Who disagrees: a fact-checker with no stake, who in both cases confirmed the number and rejected the inference. Share of what: both figures are honest as stated. Compared with what: the missing comparison, in both cases, was the same series before the president arrived. And the missing premise, in both cases, was the same sentence: whatever happens on a president's watch is caused by the president. Write it down, as lesson 1 taught, and it visibly fails; and FactCheck.org, which tracks these numbers for every president, says so on its own behalf: "Opinions also differ on how much credit or blame a president should get for what happens while he is in office."[13] Same pattern, opposite sides, same verdict: the number stands, the argument doesn't.

You may have noticed which of the two you wanted to defend. Hold that thought; it's the next section.

## Motivated reasoning: belief bias at scale

In lesson 2 you met belief bias. Evans, Barston and Pollard gave people syllogisms and found that they accepted invalid arguments with believable conclusions and rejected valid ones with unbelievable conclusions; the effect "was more marked on invalid than on valid syllogisms", and some of the reasons people gave afterwards were "rationalizations for prejudiced decisions".[14] That was in a lab with cigarettes and addictive things. The news is the same experiment with your own commitments as the material.

Dan Kahan, Ellen Peters, Erica Dawson and Paul Slovic ran the news version in 2017. They gave people a hard problem that "turned on their ability to draw valid causal inferences from empirical data": a two-by-two table of results, the kind where you have to compare ratios rather than eyeball the biggest number. For some people the table described a new skin-rash cream. For others, the identical numbers described a gun-control ban. With the cream, the people highest in numeracy "did substantially better than less numerate ones." With the ban, "subjects' responses became politically polarized – and even less accurate", and the polarisation "did not abate among subjects highest in numeracy; instead, it *increased*."[15] The authors' reading is that skilled reasoners "would use their quantitative-reasoning capacity selectively to conform their interpretation of the data to the result most consistent with their political outlooks."[15] The design was symmetric: the data were arranged to favour each side for half the participants, and each side's numerate members got it right when the answer suited them and wrong when it didn't. This is not a finding about one political camp. It is a finding about people who are good at reasoning, which is what this course is trying to make you.

Here is the mechanism, and it is the one from lesson 2 with the volume turned up. Your mind checks a conclusion against what you already believe, fast, and checks the link from premises to conclusion, slowly. On a topic where you have no stake, the slow check runs. On a topic where you have a conclusion already, the fast check fires first, and when it says "yes" the slow check often never starts, and when it says "no" the slow check runs at full power, looking for the flaw it is sure must be there. So you scrutinise the link on the other side's arguments and the conclusion on your own. Both feel like thinking. Only one of them is checking.

:::checkpoint You found a fallacy in an argument you disliked in about ten seconds. What should that speed tell you?
That the fast conclusion-check fired and the slow link-check may not have run. Ten seconds is long enough to notice that you disagree; it is rarely long enough to reconstruct an argument, supply its missing premise, and test the link. The fallacy you found may be real. The speed is a reason to run the check again, and then to run it on the last argument you agreed with just as quickly.
:::

The defence is procedural, because the bias can't be felt from the inside. Two rules. First, step 6 of the check stays at step 6: test the link before you consult your opinion of the conclusion, and if you notice you consulted it first, start again. Second, when you catch yourself agreeing quickly, run the checklist on that argument as if the other side had written it. Not to change your mind. To find out whether the argument you accepted is one you'd have accepted from anyone.

## The checklist

Here it is in one place. It is the six-step check from lesson 1 with five questions added for the compressed form. You should be able to run it on a headline in under a minute and on an article in ten.

1. What is the conclusion? (What is this trying to get me to accept?)
2. What are the premises? (The study, the statistic, the quote, the source.)
3. What is missing? (Write the unstated step down. In the news it is usually "the source is right" or "what happened after X was caused by X".)
4. Does the link hold? (Valid, or strong? If a number is doing the work, go to the number questions.)
5. Are the premises acceptable? (Go to the source questions.)
6. Only now: what do I think of the conclusion, and did I think it before step 1?

For the source: who says? How do they know, and is it their field? Who disagrees, and what has this source reason to leave out?

For the number: share of what? Compared with what?

## What people get wrong

"The media lies." As a general claim this is unfalsifiable, which is a reason to distrust it, and it is a hasty generalisation from the cases you noticed, which is lesson 5's reason. It is also useless, because it gives you no way to tell a good story from a bad one. The rules in this lesson are source by source and claim by claim. The Economist publishing its own mistaken charts, and Cancer Research UK putting the absolute numbers out on the day of the IARC release, are both media too.

"Experts disagree, so nobody knows." Sometimes true. Usually it means one of the questions hasn't been asked: is it their field, how big are the camps, what would settle it. And sometimes the disagreement is manufactured, which cross-checking reveals.

"A doubling of risk is a lot." It depends entirely on the base. 1 in 7,000 to 2 in 7,000 is a doubling. So is 1 in 10 to 2 in 10. The word tells you nothing until you have the count.

"I'm not biased; they are." Kahan's result is that the most numerate people on both sides were the most polarised. If you are good at this, you are better equipped to fool yourself, and the only defence is the procedure.

"Wald was clever." He was. But the lesson is about samples, not about Wald, and the reason to learn it is that you will never again be shown a set of survivors, of any kind, without asking what filtered them.

## Practice

Three documented arguments, then a conversion, then your own. For each of the three, run the full checklist, reach a verdict, and write the one question you would put to the writer.

1. The bacon story. Premises: IARC's 26 October 2015 press release (Group 1; 18% per 50 grams daily).[3] Conclusion in the coverage: processed meat is as dangerous as smoking. Work the checklist, including the number questions, and compare your verdict with Cancer Research UK's same-day article.[4]
2. Biden's jobs chart of 3 February 2024.[11] Run the checklist, write the missing premise, and say what comparison the chart should have drawn.
3. The White House statement of 16 February 2026 that the market "rebounded strongly under President Trump's leadership".[12] Same procedure, same questions, and then check: did you reach the same verdict on 2 and 3? If not, which of the two did you want to be right?

Now the conversion. Gigerenzer's team reports a claim that a screening programme reduces deaths from a disease by 25%, and that this means 1 fewer death per 1,000 women.[5] Write the natural frequencies: out of 1,000 women, how many die of the disease without screening, and how many with? Then write the same result as a relative risk reduction and as an absolute one, and say which of the three a newspaper would print.

:::exercise Do it now
Open the folder of arguments you've been keeping since lesson 1. Pick the one you agreed with most on first reading. Run the checklist on it as if the other side had written it: find the conclusion, the premises, the missing step; test the link; run the three source questions and the two number questions; and only then consult your opinion. Write the verdict in a sentence, and under it write whether it changed, and whether you noticed any point where you wanted to stop checking. That last line is the most useful thing in the exercise.
:::

## Connections

Everything in this lesson was built earlier. The missing premise (lesson 1) is what "compared with what?" finds in the credit-taking pair. Belief bias (lesson 2) is motivated reasoning at the scale of one syllogism. Sampling and representativeness (lesson 5) are what survivorship breaks. Base rates and natural frequencies (lesson 6) are what "share of what?" restores. The six critical questions (lesson 8) are "how do they know?" spelled out. Lesson 10 turns all of it on your own writing: you will build an argument that a reader running this checklist cannot stop.

Two other courses own parts of this properly. *How We Know* covers evidence hierarchies and how to weigh expert disagreement in depth. *Statistics for Citizens* covers sampling, risk and the design of studies. This lesson taught each only as far as it bears on checking an argument you meet in the news.

## Go deeper

- Weston, *A Rulebook for Arguments*, 5th ed. (Hackett, 2017), chapter IV, "Arguments from Authority": six pages, and the best short statement of how to treat a source, with rule 17 on the web.
- Gigerenzer, Gaissmaier, Kurz-Milcke, Schwartz & Woloshin, "Helping Doctors and Patients Make Sense of Health Statistics", *Psychological Science in the Public Interest* 8(2), 2007: the pill scare, mismatched framing, survival versus mortality rates, and how to write a fact box; free online and readable by anyone.
- Mangel & Samaniego, "Abraham Wald's Work on Aircraft Survivability", *JASA* 79(386), 1984, with the discussion and rejoinder in the same issue: the primary account, and worth reading for the method's assumptions, which the anecdote leaves out.
- Sarah Leo, "Mistakes, we've drawn a few", *The Economist* (Medium), March 2019: a data journalist correcting her own outlet's charts, with the originals and the fixes side by side.
- Kahan, Peters, Dawson & Slovic, "Motivated numeracy and enlightened self-government", *Behavioural Public Policy* 1(1), 2017: the study; read the design and then look at the tables for your own side.

## Sources

1. Weston, A., *A Rulebook for Arguments*, 5th ed. (Hackett, 2017), chapter IV, rules 13 to 17, pp. 25 to 30. Read from the PDF of the book. Rule 13 "Cite your sources"; rule 14 "Seek informed sources" ("Sources must be qualified to make the statements they make"; "to climatologists, not politicians"; "experts on one subject are not necessarily informed about every subject on which they offer opinions"); rule 15 "Seek impartial sources" ("People who have the most at stake in a dispute are usually not the best sources"; "the truth as one honestly sees it can still be biased. We tend to see what we expect to see"); rule 16 "Cross-check sources" ("Consult and compare a variety of sources"; when experts disagree, "reserve judgment yourself. Don't jump in with two feet where truly informed people tread with care"; "the appearance of controversy may be created even when there is virtually no disagreement among qualified authorities").
2. Walton, D., *Appeal to Expert Opinion: Arguments from Authority* (Penn State, 1997). The six critical questions for the expert-opinion scheme: expertise, field, opinion, trustworthiness, consistency, backup evidence. As recorded in the course research file; taught in full in lesson 8.
3. International Agency for Research on Cancer, Press Release No. 240, "IARC Monographs evaluate consumption of red meat and processed meat", Lyon, 26 October 2015. Read from the PDF. Processed meat "carcinogenic to humans (Group 1)"; "each 50 gram portion of processed meat eaten daily increases the risk of colorectal cancer by 18%"; Dr Kurt Straif: "For an individual, the risk of developing colorectal cancer because of their consumption of processed meat remains small, but this risk increases with the amount of meat consumed."
4. Dunlop, C., "Processed meat and cancer – what you need to know", Cancer Research UK news, 26 October 2015. Out of every 1,000 people in the UK about 61 develop bowel cancer; about 56 per 1,000 among those who eat the least processed meat; 66 per 1,000 among those who eat the most; around 3 in every 100 UK cancers attributed to red and processed meat (about 8,800 cases a year) against 64,500 cases a year (19%) attributed to smoking; Group 1 is about strength of evidence, not size of risk.
5. Gigerenzer, G., Gaissmaier, W., Kurz-Milcke, E., Schwartz, L. M. & Woloshin, S., "Helping Doctors and Patients Make Sense of Health Statistics", *Psychological Science in the Public Interest* 8(2), 53 to 96 (2007). Read from the full text. The 1995 pill scare (p. 54): the Committee on Safety of Medicines warning of a twofold, 100% increase; letters to 190,000 practitioners; about 1 in 7,000 on second-generation pills and 2 in 7,000 on third-generation; an estimated 13,000 additional abortions in England and Wales the following year (citing Furedi, A., *Human Reproduction Update* 5, 621 to 626, 1999), one extra birth per extra abortion, about 800 additional conceptions among girls under 16; "Had the committee and the media reported the absolute risks, few women would have panicked." Mismatched framing: 1 in 3 studies in *BMJ*, *JAMA* and *The Lancet* 2004 to 2006 reporting both benefits and harms used different metrics (citing Sedrakyan & Shih, 2007). Summary: a 25% reduction in breast-cancer mortality from mammography screening "in fact means that 1 less woman out of 1,000 will die of the disease."
6. Furedi, A., "The public health implications of the 1995 'pill scare'", *Human Reproduction Update* 5(6), 621 to 626 (1999). Abstract read: oral contraceptive use among under-16s fell from 40% to 27% between 1995 to 1996 and 1996 to 1997; estimated NHS cost of about £46 million for abortion provision. The 13,000 figure is quoted from [5], who cite this paper.
7. Mangel, M. & Samaniego, F. J., "Abraham Wald's Work on Aircraft Survivability", *Journal of the American Statistical Association* 79(386), 259 to 267 (1984). Read from a scan of the paper. The operational problem and "the basic difficulty"; eight SRG memoranda, over 100 pages, declassified and reprinted by the Center for Naval Analyses in 1980; the assumption that "an unhit aircraft always returns"; the hypothetical data (400 aircraft; returning with 0 to 5 hits: 320, 32, 20, 4, 2, 2; 102 hits in all; area fractions engines .269, fuselage .346, fuel system .154, others .231; observed hit fractions .186, .382, .176, .255); overall single-hit survival probability .851; Table 4 single-hit survival by part: engines .588, fuselage .940, fuel system .973, others .939; "For these data, the most vulnerable portion of the aircraft is the engine area." Summary states the work "was used in World War II and in the wars in Korea and Vietnam."
8. Mangel, M. & Samaniego, F. J., "Abraham Wald's Work on Aircraft Survivability: Rejoinder", *Journal of the American Statistical Association* 79(386), 270 to 271 (1984). "We do not know whether it was used during World War II, although it was produced early enough in the war to have been available"; use by the Center for Naval Analyses on the A-4 during the Vietnam War, and at Wright Patterson Air Force Base on the B-52.
9. Wald, A., *A Reprint of "A Method of Estimating Plane Vulnerability Based on Damage of Survivors"*, Center for Naval Analyses Research Contribution 432 (July 1980). Eight memoranda written for the Statistical Research Group, Columbia University, and the National Defense Research Committee in 1943, never published externally; the vulnerability table "can be used as guides for locating protective armor and can be used to make a prediction of the estimated loss of a future mission."
10. Leo, S., "Mistakes, we've drawn a few: Learning from our errors in data visualisation", *The Economist* on Medium, March 2019. Charts sorted as misleading, confusing, or failing to make a point. The truncated-axis bar chart of average Facebook likes on posts by pages of the political left, which "not only downplays the number of Mr Corbyn's likes but also exaggerates those on other posts"; the Espresso line chart of weekly attitudes to the Brexit referendum result, drawn on a scale that made respondents look as if they "had a rather erratic view of the referendum result", rising and falling by a couple of percentage points from one week to the next. Read via a full repost of the article; the original is at medium.economist.com.
11. Robertson, L., "Biden's Job Growth Chart Ignores Impact of Pandemic", FactCheck.org, 9 February 2024. Biden's 3 February post on X ("The last guy had the worst jobs record since the Great Depression") with a chart titled "Jobs Created by President" showing a monthly average loss of 57,000 jobs under Trump; 20.5 million jobs lost in April 2020; nearly 14.8 million jobs added under Biden, 5.4 million above the pre-pandemic peak; the chart "leaves the misleading impression that presidents are responsible for all the job creation, or loss, during their time in office. But there are many economic factors outside the control of a president (see: COVID-19)"; post-recovery average of 282,000 a month, "still 100,000 more than the pre-pandemic average under Trump."
12. Gore, D., Robertson, L. & Farley, R., "A Pre-SOTU Guide to Trump's Economic Claims", FactCheck.org, 19 February 2026. A 16 February White House press release saying the stock market has "rebounded strongly under President Trump's leadership"; the S&P 500 up 14.5% between the close on 17 January 2025 and the close on 18 February 2026; "The stock market performed well in Biden's final two years in office", with the S&P 500 "rising over 20% each of those years", "better than the 13% gain Trump saw in his first year."
13. Gore, D., Jackson, B., Robertson, L., Farley, R. & Jaffe, A., "Biden's Final Numbers", FactCheck.org, 9 October 2025 (updated 5 March 2026): "Opinions also differ on how much credit or blame a president should get for what happens while he is in office." The same series' "Trump's Numbers, July 2026 Update" (28 July 2026): "We also make no judgement on how much credit or blame the president should receive."
14. Evans, J. St. B. T., Barston, J. L. & Pollard, P., "On the conflict between logic and belief in syllogistic reasoning", *Memory & Cognition* 11(3), 295 to 306 (1983). Abstract: belief bias "was more marked on invalid than on valid syllogisms"; some verbal protocols were "rationalizations for prejudiced decisions". Abstract only, as in lesson 2.
15. Kahan, D. M., Peters, E., Dawson, E. C. & Slovic, P., "Motivated numeracy and enlightened self-government", *Behavioural Public Policy* 1(1), 54 to 86 (2017). Abstract read from the publisher: a problem that "turned on their ability to draw valid causal inferences from empirical data"; skin-rash treatment versus gun-control ban framings of the same data; the most numerate "did substantially better" on the rash version; on the gun version responses "became politically polarized – and even less accurate", and polarisation "did not abate among subjects highest in numeracy; instead, it increased"; numerate subjects "use their quantitative-reasoning capacity selectively to conform their interpretation of the data to the result most consistent with their political outlooks." Sample size and cell percentages not quoted here because the full text was not read.
16. Gigerenzer, G. & Hoffrage, U., "How to improve Bayesian reasoning without instruction: Frequency formats", *Psychological Review* 102(4), 684 to 704 (1995). Study 1: Bayesian answers 16% and 28% in the two probability formats, 46% and 50% in the two frequency formats. As recorded in the course research file and taught in lesson 6.
