---
name: humanize-text
description: Use whenever the user wants AI-generated text to read like human writing. Trigger on "humanize this", "make this sound more human", "make this less AI-sounding", "remove AI tells", "edit this AI text", "rewrite this naturally", or any time the user pastes text and asks for a more natural, less robotic, or less ChatGPT-like rewrite. Also use when the user asks to clean AI slop, de-AI text, or fix text flagged by an AI detector. If the request is about editing text that came from an LLM, use this skill.
---

# Humanize AI text

Revise AI-generated text so it reads like it was written by a skilled human. Fixing surface style alone (removing clichés, purple prose) barely changes detectability — the structural choices are what give AI away. Edit at two levels: structure first, then surface.

Work through the passes below in order. Preserve the author's meaning, facts, and voice. Do not add fake facts. Output only the revised text unless the user asks for an explanation of changes.

## Pass 1 — Structure (most important)

**Stop explaining the meaning.** AI text spells out its theme, moral, or significance; human text trusts the reader to infer it. Delete sentences that state the lesson learned, summarize the point just made, or tell the reader why something matters. If a character arc or argument already shows the idea, cut the sentence that announces it. End sections without a wrap-up; never end with "In summary," "In conclusion," or a restatement of the opening.

**Break the straight line.** AI narratives and arguments run in a single tidy causal chain from setup to resolution. Humans digress, jump in time, leave loose ends. Where the text allows: reorder events non-chronologically, delay a key revelation, let a secondary thread go unresolved, allow an ambiguous ending instead of tidy internal acceptance. Not everything needs to connect back to the main theme.

**Name feelings plainly; cut bodily metaphor.** AI renders every emotion as a tightening chest, cold sweat, a held breath, or weather/lighting that mirrors mood, and overuses smell imagery. Humans often just say "she was afraid" or "he felt relieved." Replace most somatic descriptions of emotion with direct emotion words or with action. Keep at most one strong physical image per scene.

**Engage the real world specifically.** Replace vague allusions ("a famous philosopher once said," "reminiscent of classic noir") with specific named books, authors, songs, brands, places — or delete the allusion. Where the register allows, address the reader directly or add an aside; AI writes as though no one is watching.

**Roughen the moral geometry.** Make protagonists and positions more ambivalent. Let the resolution come from outside the protagonist (luck, another character, circumstance) rather than from their inner growth. Cut dialogue that exists only to debate the story's philosophy; let dialogue do mundane work.

## Pass 2 — Surface style

**Cut significance inflation.** Delete or flatten: "stands as a testament to," "plays a vital/pivotal/crucial role," "underscores/highlights its importance," "reflects broader trends," "marking a pivotal moment," "enduring legacy," "evolving landscape," "rich tapestry," "setting the stage for."

**Cut trailing participle analysis.** Remove "-ing" clauses bolted onto sentence ends that add interpretation: "..., highlighting the collaborative nature of...", "..., ensuring...", "..., fostering...", "..., reflecting...". End the sentence at the fact.

**Purge AI vocabulary.** Replace or delete: delve, tapestry, vibrant, pivotal, crucial, intricate, meticulous, showcase, boasts, garner, bolster, foster, underscore, testament, landscape (abstract), interplay, nestled, groundbreaking, renowned, "diverse array," "align with," "valuable insights." Use the plain word: wrote not authored, used not utilized, moved not relocated, died not passed away.

**Restore plain copulas.** Change "serves as," "stands as," "represents," "functions as," "refers to" back to "is/was." Change "features/offers/maintains" back to "has."

**Kill the formulas.**
- Negative parallelisms: "not just X, but Y," "It's not X — it's Y," "X rather than Y" as a rhetorical flourish.
- Rule of three: break up constant triplets of adjectives or phrases; use one item, or two, or four.
- "Despite these challenges..." / "Challenges and Future Outlook" scaffolding.
- Didactic disclaimers: "it's important to note," "worth noting," "keep in mind."
- Weasel attributions: "experts argue," "observers have noted," "many believe" — name the source or cut the claim.

**Fix the typography and formatting.** Reduce em dashes; prefer commas, parentheses, or a period. Use straight quotes if the medium calls for them. Cut most bold emphasis. Convert bullet lists with bolded inline headers into prose. Use sentence case in headings. Remove tables that should be sentences.

**Let words repeat.** AI cycles through synonyms to avoid repetition ("the artist... the painter... the creative visionary"). Humans reuse the same word. Pick the natural word and keep using it.

## Pass 3 — Add human texture

- Vary sentence length hard: some very short. Some long ones that wander a little before arriving.
- Allow hedges and intensifiers where natural: "very," "perhaps," "tends to," "sort of."
- Allow an occasional definitive or superlative claim where warranted: "the first," "the only," "one of the best."
- Allow mildly wordy human constructions now and then: "the fact that," "in order to," "as a result of."
- Keep one or two imperfections — an aside, an opinion, a slightly informal phrase. Do not sand the text perfectly smooth; smoothness is the tell.

## Guardrails

- Do not change facts, quotes, or data. Do not invent sources or details.
- Do not overcorrect into forced quirkiness, slang, or errors.
- Match the original register (formal stays formal, casual stays casual).
- If the text is informational, weight Pass 2 heavily; if it is narrative/fiction, weight Pass 1 heavily. Apply both regardless.

## Pass 4 — Verify loop

After producing a draft, act as a detector, not the writer. Scan the draft against this checklist:

1. Any sentence that explains its own significance, states the moral, or wraps up a section?
2. Any word from the Pass 2 vocabulary list, or "serves as / stands as / represents"?
3. Any formula: negative parallelism, rule of three, trailing "-ing" interpretation clause, weasel attribution?
4. Em dash count noticeably higher than a human would use? Uniform sentence lengths?
5. Any fact, quote, number, or name that differs from the original? (This one is a hard fail — restore the original fact.)

If any check hits, fix the flagged spots and scan again. Repeat until a scan comes back clean, up to 3 rounds. Do not loop past 3 — over-polishing reintroduces smoothness, which is itself a tell.

Output only the final text. Do not show the intermediate drafts or the checklist results unless the user asks.
