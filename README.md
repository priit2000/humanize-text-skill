# humanize-text-skill

An AI agent skill that edits AI-generated text so it reads like a skilled person wrote it. It works with any agent that supports the SKILL.md format (Claude Code, Claude Desktop, others) and doubles as a plain prompt for any LLM.

Most "humanizer" tools only fix surface style: they swap out "delve" and "tapestry" and call it done. Research shows that barely changes detectability. The structure is what gives AI away: over-explained themes, tidy single-track plots, morally simple protagonists, every section wrapped up with a summary of itself.

So this skill edits in order. Structure first: stop explaining the meaning, break the straight causal line, name feelings plainly, make references specific, roughen the moral geometry. Then the sentences: significance inflation, trailing "-ing" clauses, AI vocabulary, negative parallelisms, rule-of-three formulas, em-dash overuse. Then texture, which mostly means letting the text be a little imperfect. Varied sentence lengths, a hedge here and there. Smoothness is itself a tell. At the end the agent switches roles and re-scans its own draft as a detector, fixing whatever the checklist catches, up to three rounds. Fact drift is a hard fail.

Guardrails: facts, quotes and register stay unchanged. No invented details, no forced quirkiness.

It works in any language. The word lists are English, but they stand for pattern categories, and most languages have their own versions of the same tells, often direct calques. The agent hunts for those and edits in the original language. The structural passes are language-neutral to begin with.

## Install

Copy the `humanize-text` folder into your agent's skills directory. For Claude Code that is:

```
# macOS / Linux
cp -r humanize-text ~/.claude/skills/humanize-text

# Windows
xcopy humanize-text %USERPROFILE%\.claude\skills\humanize-text /E /I
```

For other agents, follow their skill installation docs. The skill is a single `SKILL.md` file with standard frontmatter, no scripts or assets.

Start a new session and say things like "humanize this", "make this sound less AI", or paste text and ask for a natural rewrite. The skill triggers automatically.

## Use as a plain prompt

Not using an agent that supports skills? Paste the contents of [humanize-ai-text-prompt.md](humanize-ai-text-prompt.md) into any LLM, then paste the text you want edited.

## Why structure first

Two sources sit behind the method.

[StoryScope: Investigating Idiosyncrasies in AI Fiction](https://arxiv.org/abs/2604.03136) (Russell, Rajendhran, Pham, Iyyer, Wieting) shows that AI-generated stories can be identified at 93.2% accuracy from narrative features alone, no stylistic cues needed, and that narrative features retain over 97% of the performance of models that also see style. AI stories over-explain their themes, favor tidy single-track plots, and cluster in a narrow region of narrative space; human stories are more morally ambiguous and temporally complex. The paper also tested what happens when AI stories are stylistically edited to remove surface artifacts: detection barely dropped. You can scrub every cliché and the text still reads as AI if the bones are AI. That is why the structure pass comes first.

The sentence-level pass follows [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), a field guide from WikiProject AI Cleanup built from real cases of undisclosed AI text on Wikipedia. It catalogs the surface tells: significance inflation ("stands as a testament"), AI vocabulary ("delve", "underscore", "crucial"), avoidance of plain "is/are", negative parallelisms, rule of three, excessive boldface, em-dash overuse, and vague weasel attributions.

## Files

[humanize-text/SKILL.md](humanize-text/SKILL.md) is the AI agent skil