# Test report — Data Detective

Environment: macOS, Chromium (Playwright) at 1280x900 and 360x740;
`node test/calc.test.mjs` for domain math. All steps below were run against the
public preview at https://iliasabk.github.io/data-detective/ on 2026-09-14.

## Acceptance-example mapping

| Brief acceptance example | Evidence | Result |
|---|---|---|
| Changing an axis changes rendering, not values/statistics | Axis slider 0→15 redraws bars; table values (16.2 / 18.6 pts) unchanged — shots 02/03 | PASS |
| Every chart has labelled axes/units, accessible table, reset | Axis labels + units shown; each activity has a data table; "Restart the lesson" resets without reload | PASS |
| Biased and less-biased sampling match documented definitions | Workshop method samples club members only; register method samples all 600 — shot 05 | PASS |
| Repeated sampling reproducible / fixed test cases | mulberry32 seeded generator; `test/calc.test.mjs` asserts biased > fair and big-biased stays biased | PASS |
| Correlation activity states association is not causation | Checkpoint + feedback state it explicitly; per-band r table shows the effect — shot 06 | PASS |
| Final response asks for claim + observation + limitation | Free-text headline field gated on length; summary echoes it — shot 07 | PASS |

## Manual checks

- Keyboard: Tab/Enter reach every control; focus ring visible (`:focus-visible`).
- Touch targets ≥44px; radio rows are large labelled hit areas.
- Reduced motion: `prefers-reduced-motion` disables transitions.
- Non-colour feedback: feedback boxes pair text with borders/icons, not colour only.
- Reset: "Restart the lesson" clears state, radios, samples, text without reload.
- Mobile 360px: no horizontal scroll; tabs stack — shot 08.
- Offline: page works with network disabled after load (all assets inline).

## Automated tests

```
$ node test/calc.test.mjs
all calc tests passed
```

Covers: seeded-RNG reproducibility, population size/rate, biased-vs-fair
sampling gap, big-biased-sample persistence, pooled vs within-band Pearson r.

## Screenshot walkthrough (numbered)

1. `docs/shots/01-intro.png` — briefing, progress bar, tab navigation
2. `docs/shots/02-case1-axis0.png` — Case 1 chart, axis at 0
3. `docs/shots/03-case1-axis15.png` — same data, axis at 15 (exaggerated)
4. `docs/shots/04-case1-feedback.png` — correct-answer feedback
5. `docs/shots/05-case2-samples.png` — three samples vs true-value line
6. `docs/shots/06-case3-stratified.png` — scatter coloured by temperature band
7. `docs/shots/07-summary.png` — completion summary + learner headline
8. `docs/shots/08-mobile-360.png` — 360px mobile rendering
