---
description: Rewrite one lesson in the Foval voice per docs/STYLE_GUIDE.md and add think-while-reading blocks
argument-hint: <path/to/lesson.md>
---
Read `docs/STYLE_GUIDE.md` in full. Then read the lesson at `$ARGUMENTS`.

Rewrite the lesson's prose in the guide's voice without changing any fact, figure, citation, quiz item, or the frontmatter, and without shortening the substance. Specifically:
1. Remove every em dash. Replace with a comma, full stop, colon, or parentheses.
2. Remove every word and sentence shape on the banned lists. Rewrite the sentence, don't just delete the word.
3. Where a paragraph reads like a textbook or a list of facts, rewrite it as a professor talking to one student: example first, plain words, "you", contractions, the reason each fact is there.
4. Add think-while-reading structure where it is missing: two or three `:::predict Question` blocks before results are revealed (body = the answer), a `:::checkpoint Question` after each hard idea (body = the answer), and a gap in one worked example where the reader does the next step before it is shown. Use content already in the lesson; do not invent new claims.
5. Keep headings useful and sparse. Remove bold that isn't a key term.
6. Read the result aloud in your head. Fix anything you'd be embarrassed to say to a person.

Run `npm run validate` from the repo root. Report: the count of em dashes removed, the banned phrases found, the blocks added, and any sentence you were unsure how to rewrite. Touch only this file.
