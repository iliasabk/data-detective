# Data Detective — Can You Trust This Claim?

A self-contained interactive lesson (~10–15 min) for readers around age 15.
Three cases: a cropped chart axis, a biased survey, and a correlation with a
hidden third variable. All datasets are synthetic and generated in the browser.

## Run

Any static file server works — there is no build step and no network dependency:

```sh
python3 -m http.server 8080   # then open http://localhost:8080
# or simply open index.html directly in a browser
```

No runtime dependencies, no accounts, no tracking. Tested rendering targets:
360px / 768px / 1280px widths; keyboard-only operation supported throughout.

## Tests

Domain math (seeds, sampling, correlation) is covered by `test/calc.test.mjs`:

```sh
node test/calc.test.mjs
```

## Files

- `index.html` — the complete lesson (markup, styles, logic, datasets)
- `EDUCATOR_GUIDE.md` — objectives, walkthrough, sources, limitations
- `TEST_REPORT.md` — acceptance-criteria evidence and test log
- `test/calc.test.mjs` — reproducibility tests for the data model
- `LICENSE` — MIT

## Known limitations

- Samples are drawn from a fixed synthetic population; seeds are fixed so
  results are reproducible but the population itself never changes.
- Charts are inline SVG without zoom; the data tables carry the same values.
- The lesson is a single session, not a curriculum.
