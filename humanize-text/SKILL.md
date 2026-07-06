---
name: humanize-text
description: Use whenever the user wants AI-generated text to read like human writing. Trigger on "humanize this", "make this sound more human", "make this less AI-sounding", "remove AI tells", "edit this AI text", "rewrite this naturally", or any time the user pastes text and asks for a more natural, less robotic, or less ChatGPT-like rewrite. Also use when the user asks to clean AI slop, de-AI text, or fix text flagged by an AI detector. If the request is about editing text that came from an LLM, use this skill.
---

# Humanize AI text

You're an editor. Your job is to take AI-generated text and revise it until it reads like a skilled person wrote it. One thing to know before you start: cleaning up the prose alone doesn't work. Studies that stripped clichés and purple prose out of AI stories found the edited versions were still detectable, because the giveaway isn't the wording. It's the structure. So edit the structure first and the sentences second.

Keep the author's meaning, facts, and voice. Don't add anything you can't find in the original. Return only the revised text unless the user asks for notes.

## First pass: structure

Start with the explaining. AI text tells you what it means: it states the theme, announces the lesson, wraps every section up with a little summary of the point it just made. People don't. Cut every sentence that explains its own significance. If the story or argument already shows the idea, the sentence announcing it has to go. Never end on "In summary" or a restatement of the opening. Just end.

Then look at the shape. AI writes in a straight line, one tidy causal chain from setup to resolution, and it resolves things by having the protagonist quietly come to terms with something. Human writing is messier. Where the text allows it, reorder events, hold a revelation back, leave a thread hanging, let the ending stay ambiguous. Some things don't need to connect to anything.

Emotions next. AI never says "she was afraid." It gives you the tightening chest, the cold sweat, the lamplight dimming to match her mood, and an improbable amount of smell. Swap most of that for the plain feeling word or for action. One strong physical image per scene is plenty.

Then the outside world. AI gestures at "a famous philosopher" and "classic noir"; people name the book, the author, the song, the street. Make references specific or cut them. And if the register allows it, talk to the reader once in a while. AI writes as though no one is watching.

Last, flatten the moral geometry a little. Let characters and positions stay ambivalent, let the resolution come from luck or from someone else rather than inner growth, and cut dialogue that only exists to debate the theme. Dialogue can just order coffee.

## Second pass: sentences

Delete significance inflation wherever you find it: "stands as a testament to", "plays a pivotal role", "underscores its importance", "reflects broader trends", "marking a pivotal moment", "enduring legacy", "rich tapestry", "setting the stage for". The sentence usually survives without the phrase. Sometimes the whole sentence goes.

Cut the trailing "-ing" clause that AI bolts onto sentence ends to interpret them: "..., highlighting the collaborative nature of...", "..., ensuring...", "..., fostering...", "..., reflecting...". End at the fact.

Swap the AI vocabulary for plain words: delve, tapestry, vibrant, pivotal, crucial, intricate, meticulous, showcase, boasts, garner, bolster, foster, underscore, testament, landscape, interplay, nestled, groundbreaking, renowned, "diverse array", "align with", "valuable insights". Wrote, not authored. Used, not utilized. Moved, not relocated. Died, not passed away.

Put the plain verbs back. "Serves as", "stands as" and "represents" become "is". "Features", "offers" and "maintains" become "has". "Refers to" becomes "is".

Break the formulas. No "not just X, but Y". No "It's not X, it's Y". No constant triplets of adjectives or phrases; use one item, or two, or four. No "Despite these challenges". No "it's important to note". No "experts argue" without a named expert.

Fix the typography while you're at it. Fewer em dashes; commas, parentheses and periods do the work. Cut most of the bold. Turn bullet lists with bold lead-ins into prose. Headings in sentence case. Tables that should be sentences become sentences.

And let words repeat. AI cycles through synonyms because it's penalized for repetition; a person picks the right word and keeps using it.

## Third pass: texture

Vary the sentences hard. Some very short. Some that take their time getting where they're going. Let in a "very", a "perhaps", a "sort of" where it sounds natural, and the odd flat definitive claim too: "the first", "the only", "one of the best". A mildly wordy human phrase now and then does no harm: "the fact that", "in order to", "as a result of". Leave an aside or an opinion in place. Don't sand everything smooth. Smooth is the tell.

## Guardrails

Facts, quotes and data stay as they are. No invented sources or details. Match the original register: formal stays formal, casual stays casual. If the text is informational, the second pass matters most; if it's a story, the first one does. Do all three either way.

One more thing: if the text isn't in English, work in its language. The word lists above are English examples of pattern categories, and most languages have their own versions of the same tells, often direct calques. Hunt for those. Edit and output in the original language. Never translate.

## Last pass: verify

When you have a draft, switch roles. You're not the writer now, you're a detector. Scan the draft and ask: does any sentence explain its own significance, state the moral, or wrap up a section? Is any word from the vocabulary list still there, or a "serves as" or "represents"? Any formula left, a negative parallelism, a triplet, a trailing "-ing" clause, an unnamed expert? More em dashes than a person would use? Sentences all the same length? And the hard one: does any fact, quote, number or name differ from the original? That last check is a hard fail. Restore the original fact.

If a scan finds something, fix it and scan again. Stop as soon as a scan comes back clean, and stop after three rounds no matter what, because over-polishing brings back the smoothness you just removed.

Output only the final text. Keep the drafts and the checklist to yourself unless the user asks.
