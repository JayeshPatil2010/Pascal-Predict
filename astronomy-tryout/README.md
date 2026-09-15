# Astronomy C 2027 — Cram Deck

An offline study app for a Division C Science Olympiad **Astronomy** tryout on the
2027 topic: **stellar evolution in normal & starburst galaxies**. Built for a
**closed-notes / no-binder** tryout: everything here is meant to be memorized or
programmed into a calculator, not brought on paper.

> Note: the 2027 rules are a *different event* from 2026. The 2026 topic was
> "formation → destruction" of stars (Orion, Mira, Crab, Cas A…). None of that
> object list applies this year.

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
| **Diagnostic** | 42 questions, basic → advanced, self-graded, produces a per-topic gap table |
| **Learn** | 9 modules: galaxy morphology, stellar populations & H-R diagrams, starbursts, interactions/mergers, spectra & redshift, variables & the distance ladder, Tully–Fisher/Hubble/proper motion, orbits & rotation curves, compact objects/ULXs/multi-messenger |
| **DSO Trainer** | All 13 objects as image→name drills from real observatory images + full reference cards |
| **Graph Drill** | Procedurally drawn H-R diagrams, light curves, blackbody curves, spectra, Cepheid P–L, rotation curves, Hubble diagrams, Tully–Fisher plots, GW chirps |
| **Q&A Cards** | 42 free-response questions in the style real tests ask |
| **Cheat Sheet** | 14 equations with "use for" + "trap" notes, DSO one-liner table (printable) |

`calculator-sheet.md` is the plain-text version of the math: copy it into your
calculator or rewrite it from memory as a final drill.

Progress (what you got right/wrong) is stored in browser localStorage and
missed items are automatically re-queued.

## Files

```
index.html          app shell
styles.css          styles + print stylesheet
app.js              rendering, drills, canvas graph generation
data-dso.js         the 13 DSOs (facts, ID cues, likely questions)
data-learn.js       modules, equation sheet, diagnostic, Q&A cards
calculator-sheet.md the math, in plain text + TI-84 programs
images/             observation images used by the DSO trainer
```

## Scope & sources

Content follows the **2027 Science Olympiad Division C rules, event Astronomy**:

- **§3.a** stellar classification, spectral features & composition, luminosity,
  blackbody radiation, spectroscopy, H-R diagrams, Cepheid and RR Lyrae
  variables, Type Ia supernovas, neutron stars, ULXs, gravitational waves;
  normal & starburst galaxies — morphology, structure (populations, globular
  clusters), interactions (tidal disruptions, collisions, mergers).
- **§3.b** orbital mechanics / Kepler for binary *and* galactic systems; parallax,
  spectroscopic parallax, distance modulus, period–luminosity, Tully–Fisher,
  Type Ia supernovas, Hubble's law, Stefan–Boltzmann, Wien.
- **§3.c** the 13 objects: Andromeda Galaxy (M31), Sombrero Galaxy, M51,
  NGC 4536, MCG+07-33-027, NGC 1569, Antennae Galaxies, Arp 143, Arp 147,
  Cartwheel Galaxy, M82 (X-1, X-2, SN 2014J), GW170817, Terzan 5.

Numbers were cross-checked against mission pages and the discovery literature
(GW170817 at 40 Mpc in NGC 4993; M82 at 12 Mly with the 62-day-orbit ULX X-1;
Arp 147 at ~430 Mly with nine X-ray-bright black holes in the ring; Terzan 5 at
5.9–6.6 kpc with 49 known pulsars; NGC 1569 at ~11 Mly; Arp 143 at ~190–200 Mly;
Cartwheel at ~500 Mly; MCG+07-33-027 at ~330 Mly and apparently isolated).

Images are public NASA/ESA/ESO/STScI/Chandra/Hubble/Subaru releases and
observatory press or encyclopedic pages, resized locally for offline use. All
rights remain with the original missions; this is personal study use.
