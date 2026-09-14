# Educator guide — Data Detective

## Objectives

After one 10–15 minute session the learner can:

1. Explain how changing a chart's vertical-axis range alters perceived effect
   size while the underlying numbers stay identical.
2. Identify a sampling limitation and explain why enlarging a biased sample
   does not repair the bias.
3. Distinguish association from causal evidence by stratifying on a third
   variable, and write a cautious, evidence-based claim.

The lesson teaches scrutiny, not blanket distrust: Case 1 ends by noting the
difference is real, merely exaggerated by presentation.

## Prerequisites

None beyond basic reading; percentages and averages are used in context.

## Suggested session

- 2 min: briefing screen (what a fact-checker does).
- 4 min: Case 1 — learner drags the axis slider, answers the checkpoint.
- 4 min: Case 2 — learner draws at least one biased and one register sample,
  optionally the ×10 biased sample, then answers the checkpoint.
- 4 min: Case 3 — learner colours the scatter by temperature, reads the
  per-band r values, answers the checkpoint, writes their own headline.
- Completion screen restates the three questions to carry forward.

## Differentiation / co-play

- Struggling readers: each activity has a Hint button and unlimited retry;
  feedback is specific, never shaming.
- Faster learners: ask them to explain why the "×10 bigger" biased sample
  still misses, or to write a second headline for Case 1.
- Co-play: an adult can narrate the slider while the learner predicts bar
  heights before each move.

## Content sources

- News Literacy Project, "Checkology" concepts on evaluating evidence:
  https://checkology.org/ — supports the framing of verification habits.
- GAISE College Report (ASA), correlation vs. causation guidance:
  https://www.amstat.org/education/gaise — supports the third-variable
  stratification approach used in Case 3.
- Cleveland & McGill, "Graphical Perception" (JASA 1984) — motivates the
  axis-range demonstration in Case 1. Page: https://www.jstor.org/stable/2288400

## Data provenance & model limitations

- All datasets are synthetic, generated in-browser from seeded recipes
  (documented in `index.html` comments): Group means 16.2 vs 18.6 pts;
  population 600 students, 50% club members, preference rates 92%/28%;
  12 fictional months where temperature drives both series.
- Samples use a fixed-seed generator, so results are reproducible; they are
  illustrations, not empirical findings. No claims about real learning gains.

## Offline follow-up idea

Print a real chart from a current article; learners mark the axis range,
name who was surveyed, and propose one lurking variable.
