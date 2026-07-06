# humanize-text-skill

A Claude Code skill that edits AI-generated text so it reads like it was written by a skilled human. It also works as a standalone prompt for any LLM.

Most "humanizer" tools only fix surface style: they swap out "delve" and "tapestry" and call it done. Research shows that barely changes detectability. The structural choices are what give AI away — over-explained themes, tidy single-track plots, morally simple protagonists, every section wrapped up with a summary. This skill edits at both levels, in order:

1. **Structure** — stop explaining the meaning, break the straight causal line, name feelings plainly, engage the real world specifically, roughen the moral geometry.
2. **Surface style** — cut significance inflation, trailing participle clauses, AI vocabulary, negative parallelisms, rule-of-three formulas, em-dash overuse.
3. **Human texture** — vary sentence length, allow hedges and mild imperfections. Smoothness is the tell.

Guardrails: facts, quotes, and register stay unchanged. No invented details, no forced quirkiness.

## Install as a Claude Code skill

Copy the `humanize-text` folder into your personal skills directory:

```
# macOS / Linux
cp -r humanize-text ~/.claude/skills/humanize-text

# Windows
xcopy humanize-text %USERPROFILE%\.claude\skills\humanize-text /E /I
```

Start a new Claude Code session and say things like "humanize this", "make this sound less AI", or paste text and ask for a natural rewrite. The skill triggers automatically.

## Use as a plain prompt

Not using Claude Code? Paste the contents of [humanize-ai-text-prompt.md](humanize-ai-text-prompt.md) into any LLM, then paste the text you want edited.

## Why structure first

- **[StoryScope: Investigating Idiosyncrasies in AI Fiction](https://arxiv.org/abs/2604.03136)** (Russell, Rajendhran, Pham, Iyyer, Wieting) — shows AI-generated stories can be identified at 93.2% accuracy from narrative features alone, no stylistic cues needed. Narrative features retain over 97% of the performance of models that also see style. AI stories over-explain themes, favor tidy single-track plots, and cluster in a narrow region of narrative space, while human stories are more morally ambiguous and temporally complex. This is why Pass 1 (structure) comes first: you can scrub every cliché and the text still reads as AI if the bones are AI.

- **[Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)** — a field guide from WikiProject AI Cleanup, built from real cases of undisclosed AI text on Wikipedia. Catalogs the surface tells: significance inflation ("stands as a testament"), AI vocabulary ("delve", "underscore", "crucial"), avoidance of plain "is/are", negative parallelisms, rule of three, excessive boldface, em-dash overuse, and vague weasel attributions. Pass 2 of the skill is aligned with this catalog.

## Files

- [humanize-text/SKILL.md](humanize-text/SKILL.md) — the Claude Code skill
- [humanize-ai-text-prompt.md](humanize-ai-text-prompt.md) — the same methodology as a standalone prompt
