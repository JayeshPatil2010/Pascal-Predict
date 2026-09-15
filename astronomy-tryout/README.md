# Astronomy C — Cram Deck

An offline study app for a Division C Science Olympiad **Astronomy** tryout
(2026 topic: *stellar evolution, formation → destruction*). Built for a
**closed-notes / no-binder** tryout: everything here is meant to be memorized or
programmed into a calculator, not brought on paper.

## Run it

Any static server from this folder:

```
python3 -m http.server 8000
# open http://localhost:8000
```

(It also works by opening `index.html` directly — no build step, no internet needed.)

## What's inside

| Tab | What it does |
|---|---|
| **Plan** | 90-minute schedule for today, tomorrow's plan, test-day tactics, rules scope |
| **Diagnostic** | 30 questions, basic → advanced, self-graded, produces a per-topic gap table |
| **Learn** | 9 content modules (evolution, spectra, H-R, blackbody, variables, distances, binaries, multi-wavelength/JS9, end states) — each ends with 5 "must remember" lines |
| **DSO Trainer** | 12-object image→name drill from real observatory images + full reference cards |
| **Graph Drill** | Procedurally drawn H-R diagrams, light curves, blackbody curves, spectra, Cepheid P–L plot |
| **Q&A Cards** | 40 free-response questions in the style real tests ask |
| **Cheat Sheet** | 12 equations with "use for" + "trap" notes, DSO one-liner table (printable) |

`calculator-sheet.md` is the plain-text version of the math: copy it into your
calculator or rewrite it from memory as a final drill.

Progress (what you got right/wrong) is stored in browser localStorage and
missed items are automatically re-queued.

## Files

```
index.html          app shell
styles.css          styles + print stylesheet
app.js              rendering, drills, canvas graph generation
data-dso.js         the 12 DSOs (facts, ID cues, likely questions)
data-learn.js       modules, equation sheet, diagnostic, Q&A cards
calculator-sheet.md the math, in plain text + TI-84 programs
images/             observation images used by the DSO trainer
```

## Scope & sources

Content follows the published **2026 Science Olympiad Division C rules, event
Astronomy (§3.a content, §3.b math, §3.c DSO list)** and the question style of
the national **Practice Invitational Test (2025-09-02)**.

DSO list used: Orion Molecular Cloud Complex, Sharpless 29 (NGC 6559), Ophion
Star Family, HP Tau, Mira (ο Ceti), Helix Nebula (NGC 7293), Janus
(ZTF J203349.8+322901.1), WDJ181058.67+311940.94, The Crab (M1), The Bone
(G359.13), Cas A, Tycho's SNR. **If your tryout uses the 2027 rules, check
section 3.c — the object list may have changed.**

Numbers were cross-checked against the discovery literature (e.g. Janus:
1.2–1.27 M☉, P = 14.97 min; WDJ1810: 1.555 M☉, P = 14.24 h, 49 pc; Mira:
P ≈ 332 d; Crab: ~11 ly across at 6,500 ly; G359.13: ~230 ly long at the
Galactic Center).

Images are public NASA/ESA/ESO/Chandra/JWST/Hubble/GALEX/MeerKAT releases and
observatory press pages, resized locally for offline use. All rights remain with
the original missions; this is personal study use.
