# humanize-text-skill

An AI agent skill that edits AI-generated text so it reads like it was written by a skilled human. Works with any agent that supports the SKILL.md format (Claude Code, Claude Desktop, and other agents). It also works as a standalone prompt for any LLM.

Most "humanizer" tools only fix surface style: they swap out "delve" and "tapestry" and call it done. Research shows that barely changes detectability. The structural choices are what give AI away — over-explained themes, tidy single-track plots, morally simple protagonists, every section wrapped up with a summary. This skill edits at both levels, in order:

1. **Structure** — stop explaining the meaning, break the straight causal line, name feelings plainly, engage the real world specifically, roughen the moral geometry.
2. **Surface style** — cut significance inflation, trailing participle clauses, AI vocabulary, negative parallelisms, rule-of-three formulas, em-dash overuse.
3. **Human texture** — vary sentence length, allow hedges and mild imperfections. Smoothness is the tell.
4. **Verify loop** — the agent re-scans its own draft as a detector against a tell checklist, fixes hits, and repeats up to 3 rounds. Fact drift is a hard fail.

Guardrails: facts, quotes, and register stay unchanged. No invented details, no forced quirkiness.

Works in any language. The word lists are English, but they are treated as pattern categories: for non-English text the agent hunts for that language's own equivalents (often direct calques of the English tells) and edits in the original language. The structural passes are language-neutral to begin with.

## Install

Copy the `humanize-text` folder into your agent's skills directory. For Claude Code that is:

```
# macOS / Linux
cp -r humanize-text ~/.claude/skills/humanize-text

# Windows
xcopy humanize-text %USERPROFILE%\.claude\skills\humanize-text /E /I
```

For other agents, follow their skill installation docs — the skill is a single `SKILL.md` file with standard frontmatter, no scripts or assets.

Start a new session and say things like "humanize this", "make this sound less AI", or paste text and ask for a natural rewrite. The skill triggers automatically.

## Use as a plain prompt

Not using an agent that supports skills? Paste the contents of [humanize-ai-text-prompt.md](humanize-ai-text-prompt.md) into any LLM, then paste the text you want edited.

## Why structure first

- **[StoryScope: Investigating Idiosyncrasies in AI Fiction](https://arxiv.org/abs/2604.03136)** (Russell, Rajendhran, Pham, Iyyer, Wieting) — shows AI-generated stories can be identified at 93.2% accuracy from narrative features alone, no stylistic cues needed. Narrative features retain over 97% of the performance of models that also see style. AI stories over-explain themes, favor tidy single-track plots, and cluster in a narrow region of narrative space, while human stories are more morally ambiguous and temporally complex. This is why Pass 1 (structure) comes first: you can scrub every cliché and the text still reads as AI if the bones are AI.

- **[Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)** — a field guide from WikiProject AI Cleanup, built from real cases of undisclosed AI text on Wikipedia. Catalogs the surface tells: significance inflation ("stands as a testament"), AI vocabulary ("delve", "underscore", "crucial"), avoidance of plain "is/are", negative parallelisms, rule of three, excessive boldface, em-dash overuse, and vague weasel attributions. Pass 2 of the skill is aligned with this catalog.

## Files

- [humanize-text/SKILL.md](humanize-text/SKILL.md) — the AI agent skill
- [humanize-ai-text-prompt.md](humanize-ai-text-prompt.md) — the same methodology as a standalone prompt
