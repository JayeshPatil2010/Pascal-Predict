/* 2026 Science Olympiad Astronomy C — DSO deck (12 objects from rules section 3.c)
   Images are real NASA/ESA/ESO/observatory releases saved locally in /images. */

const DSO = [
  {
    id: "orion",
    name: "Orion Molecular Cloud Complex",
    aka: "Orion Complex, OMC, Orion A + Orion B",
    type: "Giant molecular cloud complex / star-forming region",
    con: "Orion",
    dist: "~1,300–1,500 ly (Orion A head ≈ 1,344 ly ≈ 412 pc)",
    radec: "RA 05h 35m   Dec −05° 23′",
    mag: "extended (Orion Nebula M42 = +4.0)",
    img: "images/orion.jpg",
    tag: "Star formation",
    idCues: [
      "Huge red/pink Hα glow with a giant arc (Barnard's Loop) sweeping around the belt",
      "The three belt stars + the 'sword' hanging below them",
      "Dark dust lanes and the famous Horsehead silhouette (Barnard 33) against a red background",
      "Bright nebula M42 with four tight Trapezium stars lighting it up"
    ],
    facts: [
      "Two giant molecular clouds: Orion A (contains M42, Horsehead, Flame Nebula NGC 2024) and Orion B; total mass ~10^5 M☉.",
      "Gas is cold: T ≈ 10 K, mostly H₂ with CO and dust. Clouds cool by molecular line emission (CO rotational lines, and dense-gas tracers like NH₃).",
      "IR-bright because dust warmed by embedded young stars re-radiates in the infrared; IR also sees through the dust that blocks visible light.",
      "NH₃ (ammonia) and N₂H⁺ are dense-gas tracers: their lines only light up at the high densities where cores can collapse → they mark star-forming gas.",
      "Contains protostars, proplyds (ionized protoplanetary disks), Herbig–Haro jets, and the Orion OB1 association."
    ],
    qa: [
      ["Why is the complex bright in the IR?", "Warm dust around embedded protostars/young stars re-radiates absorbed visible/UV light in the IR, and IR penetrates the dust."],
      ["What kind of nebula is the Horsehead, and why?", "A dark (absorption) nebula — a cold, dense dust cloud that blocks the Hα emission nebula IC 434 behind it."],
      ["Why is ammonia a good star-formation tracer?", "Its inversion/rotational transitions need high density to excite, and it survives where CO freezes onto dust → it pinpoints dense, collapsing cores."]
    ]
  },
  {
    id: "sh2-29",
    name: "Sharpless 29 (NGC 6559)",
    aka: "Sh 2-29, NGC 6559",
    type: "H II region: emission + reflection + dark nebula",
    con: "Sagittarius (next to the Lagoon Nebula M8)",
    dist: "~5,000 ly (1,533 pc)",
    radec: "RA 18h 09m 57s   Dec −24° 06′ 23″",
    mag: "extended, faint",
    img: "images/sh2-29.jpg",
    img2: "images/sh2-29-alt.jpg",
    tag: "Star formation",
    idCues: [
      "Red glowing hydrogen (Hα) clouds crossed by pitch-black dust lanes",
      "Blue reflection nebulosity hugging the bright young stars",
      "Sits right next door to the bigger, brighter Lagoon Nebula (M8)"
    ],
    facts: [
      "A compact star-forming H II region: hot young stars (≲2 Myr old) ionize the surrounding gas.",
      "It is one 'frame' of the larger Sharpless 29 region; NGC 6559 is the nebula at its core.",
      "Shows all three nebula types in one image: emission (red Hα), reflection (blue, dust scattering starlight), dark (dust extinction).",
      "UV from the young stars carves cavities and compresses gas → can trigger further star formation."
    ],
    qa: [
      ["What three nebula types appear here?", "Emission (ionized H, red), reflection (dust scattering, blue), and dark (dust blocking background light)."],
      ["Why are there hot young stars here?", "It is an active star-forming region; the gas has recently collapsed into massive, hot, short-lived stars."]
    ]
  },
  {
    id: "ophion",
    name: "Ophion Star Family",
    aka: "Ophion stellar family / association",
    type: "Young, dispersing stellar association (not a bound cluster)",
    con: "Spread along the Galactic plane near Ophiuchus",
    dist: "~650 ly (≈200 pc)",
    radec: "no single RA/Dec (spread over many degrees)",
    mag: "individual stars ~10–15",
    img: "images/ophion.jpg",
    tag: "Star formation",
    idCues: [
      "No pretty nebula picture — this one is a DATA object",
      "Expect a Gaia sky map / velocity plot, or a text description, not a photo",
      "Clue words: 'chaotic velocities', 'dispersing', '>1,000 stars', 'Gaia'"
    ],
    facts: [
      "Found in ESA Gaia data (announced 2025): a family of >1,000 stars, all younger than ~20 Myr.",
      "Unusual: the stars are NOT moving together as a coherent stream — their velocities are chaotic and they are rapidly spreading out in random directions.",
      "It is not gravitationally bound, so it is a dispersing 'family', not an open cluster.",
      "Implication: star formation can produce messy, quickly unbound groups; many young families may still be undiscovered."
    ],
    qa: [
      ["What makes Ophion unusual?", "Its members share an age/chemistry but have chaotic, diverging velocities — it is falling apart much faster than a normal young association."],
      ["How was it discovered?", "Through ESA's Gaia astrometry (positions + motions), aided by automated/AI-assisted searches of the data."]
    ]
  },
  {
    id: "hptau",
    name: "HP Tau",
    aka: "HP Tauri, HP Tau A/B, HP Tau group (with G2, G3)",
    type: "T Tauri star (pre-main-sequence), hierarchical triple",
    con: "Taurus (Taurus Molecular Cloud)",
    dist: "~525 ly (161.2 pc from VLBA parallax; often quoted ~480 ly)",
    radec: "RA ~04h 35m   Dec ~+22° 54′",
    mag: "≈ +12 (varies, irregular)",
    img: "images/hptau.jpg",
    tag: "Star formation",
    idCues: [
      "A small, fan-shaped BLUE reflection nebula lit by a handful of point-like young stars",
      "Faint reddish/brown dust lanes; looks like light shining through fog",
      "Several stars close together in the frame (triple system + G-group)"
    ],
    facts: [
      "Pre-main-sequence low-mass star still contracting toward the main sequence — not yet burning H stably.",
      "Member of a bound group: HP Tau, HP Tau/G2 (weak-line T Tauri, G0, ~6,030 K) and HP Tau/G3.",
      "Illuminates the reflection nebula GN 04.32.5 — that nebulosity is dust scattering the stars' light (blue because scattering favors short wavelengths).",
      "Youth indicators: strong Li I 670.8 nm absorption (Li is destroyed above ~2.5 MK), IR excess from a disk, irregular variability, Hα emission.",
      "CTTS vs WTTS: classical = accreting disk, strong Hα (EW > 10 Å), IR excess; weak-lined = disk mostly gone, weak Hα, faster rotation. HP Tau/G2 is the textbook weak-lined example."
    ],
    qa: [
      ["What type of star is HP Tau?", "A T Tauri star — a low-mass pre-main-sequence star still gravitationally contracting."],
      ["What nebula is it in and what type?", "GN 04.32.5, a reflection nebula (dust scattering starlight, hence blue)."],
      ["Why does Li I at 670.8 nm prove youth?", "Lithium is destroyed by proton capture at T ≳ 2.5 million K; a star that still has surface Li has not yet mixed/destroyed it → it is young."]
    ]
  },
  {
    id: "mira",
    name: "Mira (Omicron Ceti)",
    aka: "ο Ceti, Mira A + Mira B, prototype Mira variable",
    type: "Pulsating red giant (AGB) + white dwarf companion",
    con: "Cetus",
    dist: "~420 ly (≈130 pc)",
    radec: "RA 02h 19m 21s   Dec −02° 58′ 39″",
    mag: "+2.0 to +10.1 (period ≈ 331.96 days)",
    img: "images/mira.jpg",
    img2: "images/mira-lightcurve.jpg",
    tag: "Variable stars / late evolution",
    idCues: [
      "GALEX ultraviolet image shows a COMET-LIKE BLUE TAIL ~13 ly long trailing a bright blob",
      "In visible light it is just a deep red star in Cetus — the tail is the money shot",
      "Light curve: huge amplitude (up to ~8 mag), period ~11 months, non-sinusoidal"
    ],
    facts: [
      "Prototype long-period variable: radial pulsation of an AGB star, period ≈ 332 days, visual amplitude can reach ~6–8 magnitudes.",
      "Spectral type changes with phase (roughly M5–M9); it is a cool, huge, dust-producing giant losing mass.",
      "Binary: Mira A (AGB giant) + Mira B (white dwarf) that accretes wind material → accretion disk, X-ray/UV flaring.",
      "The famous GALEX UV tail is stripped/wake material: the star's wind is left behind as Mira plows through the ISM (a bow-shock/wake, not a jet)."
    ],
    qa: [
      ["What kind of variable is Mira?", "A Mira-type long-period pulsating variable — cool AGB giant, period hundreds of days, amplitude >2.5 mag."],
      ["What is the 13-ly 'tail'?", "Material lost from the giant's wind, left behind as a wake as the star moves through the interstellar medium (UV shows it because the wake is shock-heated)."],
      ["What is the companion?", "A white dwarf (Mira B) accreting from the giant's wind."]
    ]
  },
  {
    id: "helix",
    name: "Helix Nebula (NGC 7293)",
    aka: "The Eye of God / Eye of Sauron, Caldwell 63",
    type: "Planetary nebula",
    con: "Aquarius",
    dist: "~650 ly (≈200 pc)",
    radec: "RA 22h 29m 39s   Dec −20° 50′ 14″",
    mag: "≈ +7.6 (large, ~25′ across)",
    img: "images/helix.jpg",
    tag: "Late evolution",
    idCues: [
      "A giant blue-and-red 'eye': teal/blue-green inner disk, red-orange outer ring",
      "Thousands of tiny dark 'cometary knots' with tails pointing away from the center",
      "A hot white dot (the central white dwarf) at the very center"
    ],
    facts: [
      "Planetary nebula: the shed envelope of an intermediate-mass (Sun-like) star; the exposed core is the white dwarf WD 2226−210 at ~110,000–120,000 K.",
      "Glow mechanism: the hot WD's UV ionizes the gas; recombination/emission lines light it up — inner region dominated by [O III] (often rendered blue/teal), outer by Hα + [N II] (red).",
      "~40,000 cometary knots: dense molecular clumps with ionized tails, sculpted by the central star's radiation and fast wind (photoevaporation).",
      "Double-ring structure: an inner and outer ring from separate mass-loss episodes / a tilted expanding disk."
    ],
    qa: [
      ["What makes the gas glow?", "UV radiation from the hot central white dwarf ionizes the expelled envelope; the gas re-emits in lines like [O III] 500.7 nm and Hα."],
      ["What element does the blue/teal inner glow trace?", "Oxygen — doubly ionized oxygen, [O III]."],
      ["What are the cometary knots?", "Dense dusty clumps whose surfaces are being photoevaporated by the central star; radiation + wind carve the tails pointing radially outward."]
    ]
  },
  {
    id: "janus",
    name: "Janus (ZTF J203349.8+322901.1)",
    aka: "the two-faced white dwarf",
    type: "White dwarf (transitional, DA/DB)",
    con: "Cygnus",
    dist: "~1,300 ly",
    radec: "RA 20h 33m 49.8s   Dec +32° 29′ 01″",
    mag: "≈ +18.9",
    img: "images/janus.jpg",
    tag: "White dwarfs",
    idCues: [
      "Artist's impression: a small bluish sphere, one hemisphere mottled/patterned (He), the other smooth and brighter (H)",
      "Data version: spectrum swaps from H lines only → He lines only every ~7.5 minutes",
      "Sinusoidal light curve with a ~15 min period"
    ],
    facts: [
      "One hemisphere is hydrogen-dominated, the other helium-dominated — the only known WD like this (discovered 2023, Nature, Caiazzo et al., from ZTF photometry).",
      "Mass 1.2–1.27 M☉, radius ~3,400 km, rotation period 14.97 minutes (very fast for an isolated WD, which usually spin in hours–days).",
      "Temperatures differ: ~34,900 K (H side) vs ~36,700 K (He side).",
      "Leading explanations: (1) caught transitioning across the 'DB gap' as H floats up and He sinks, with a weak magnetic field suppressing convection on one side; (2) it is a merger product of two white dwarfs — supported by the unusually large mass AND the very short spin period."
    ],
    qa: [
      ["What type of object is Janus?", "A white dwarf — specifically a massive, rapidly rotating transitional WD."],
      ["What is unique about it?", "Its two hemispheres have different compositions: one hydrogen atmosphere, one helium atmosphere; the spectrum flips as it rotates."],
      ["Mass and rotation period?", "≈1.2–1.27 M☉ and 14.97 minutes."],
      ["Why does the merger theory fit?", "A WD–WD merger naturally explains both the unusually high mass and the extremely short rotation period (angular momentum from the orbit)."]
    ]
  },
  {
    id: "wdj1810",
    name: "WDJ181058.67+311940.94",
    aka: "super-Chandrasekhar double white dwarf",
    type: "Double white dwarf binary (future Type Ia supernova)",
    con: "Lyra/Ophiuchus region (near the Galactic plane)",
    dist: "49 pc (~160 ly)",
    radec: "RA 18h 10m 58.7s   Dec +31° 19′ 41″",
    mag: "≈ +17",
    img: "images/wdj1810.jpg",
    tag: "White dwarfs / supernovae",
    idCues: [
      "Artist's concept: two small Earth-sized white dwarfs whirling around each other",
      "Data version: a DOUBLE-LINED (SB2) spectrum — every line appears as two, shifting back and forth",
      "Clue numbers: total mass 1.555 M☉, orbital period 14.24 h, 49 pc"
    ],
    facts: [
      "Total mass 1.555 ± 0.044 M☉ — above the Chandrasekhar limit (~1.4 M☉). Most massive confirmed double white dwarf (2025 result).",
      "Orbital period 14.2356 h; the pair will merge in ~22.6 ± 1.0 Gyr and explode as a Type Ia supernova (predicted 'quadruple detonation').",
      "Only ~160 ly away, so it is the closest known super-Chandrasekhar Type Ia progenitor.",
      "Found by the DBL survey looking for double-lined (SB2) white dwarf spectra."
    ],
    qa: [
      ["What two objects make up the system?", "Two white dwarfs (a compact double-degenerate binary)."],
      ["Combined mass vs Chandrasekhar?", "≈1.555 M☉ — it exceeds the ~1.4 M☉ Chandrasekhar limit, so the merger will detonate."],
      ["Why are the spectral lines doubled?", "Both stars contribute lines; as they orbit, one is blue-shifted and the other red-shifted, so each line splits into two that shift with orbital phase."]
    ]
  },
  {
    id: "crab",
    name: "The Crab (M1)",
    aka: "M1, NGC 1952, Taurus A, Sh 2-244",
    type: "Core-collapse supernova remnant + pulsar wind nebula",
    con: "Taurus",
    dist: "~6,500 ly (2.0 kpc)",
    radec: "RA 05h 34m 32s   Dec +22° 00′ 52″",
    mag: "+8.4 (≈11 ly / 3.4 pc across)",
    img: "images/crab.jpg",
    tag: "Supernovae / neutron stars",
    idCues: [
      "Oval tangle of orange/red filaments with a milky blue-white interior (multi-wavelength Hubble/Chandra composites)",
      "Jets/torus structure at the very center in X-ray; a bright point = the pulsar",
      "Expanding filamentary web, not a clean shell or a round ring"
    ],
    facts: [
      "Remnant of SN 1054 AD, recorded by Chinese and Japanese astronomers; ~6,500 ly away, ~11 ly across, expanding at ~1,500 km/s.",
      "A neutron star — the Crab Pulsar — sits at the center, rotating 30 times per second (P ≈ 33.5 ms).",
      "The nebula shines by SYNCHROTRON radiation (plus line emission in filaments): the pulsar's relativistic wind of particles spiraling in magnetic fields, not leftover heat.",
      "It is a standard candle/calibrator in X-ray astronomy; pulses are seen from radio through gamma rays."
    ],
    qa: [
      ["What exploded and when?", "A massive star underwent core collapse; the supernova was observed in 1054 AD."],
      ["What powers the nebula's glow?", "The central pulsar's spin-down energy → a relativistic particle wind → synchrotron radiation (the filaments also emit line radiation)."],
      ["What is left at the center?", "A neutron star, observed as the Crab Pulsar (P ≈ 33 ms)."]
    ]
  },
  {
    id: "bone",
    name: "The Bone (G359.13)",
    aka: "G359.13, also called 'the Snake'",
    type: "Non-thermal radio filament near the Galactic Center",
    con: "Sagittarius (toward the Galactic Center)",
    dist: "~26,000 ly (Galactic Center distance)",
    radec: "≈ RA 17h 46m   Dec −28° 49′",
    mag: "radio-only source",
    img: "images/bone.jpg",
    tag: "Galactic Center / multi-wavelength",
    idCues: [
      "A very long, very straight, thin streak in a MeerKAT/VLA radio mosaic of the Galactic Center",
      "Runs roughly perpendicular to the Galactic plane; looks like a bone or a scratch, not a shell",
      "Has visible kinks; recent images show a 'fracture'/break in the middle"
    ],
    facts: [
      "One of the longest known Galactic Center filaments: ~230 ly long.",
      "Emits SYNCHROTRON radiation: relativistic electrons spiraling along magnetic field lines → it traces the Milky Way's central magnetic field.",
      "Not a supernova remnant and not a nebula — it is a magnetic structure.",
      "2025 Chandra + MeerKAT result: the filament is 'fractured'; the likely culprit is a fast-moving pulsar (1–2 million mph) slamming into it.",
      "Two kinks: major at Galactic latitude −0.20°, minor at −0.27°. Differences in the spectral index across them suggest the two kinks may have different origins."
    ],
    qa: [
      ["How long is it?", "~230 light-years (one of the longest known filaments near the Galactic Center)."],
      ["What fractured it?", "A high-speed pulsar collided with it."],
      ["What emission mechanism makes it visible in radio?", "Synchrotron radiation from relativistic electrons in the Galactic Center's magnetic field."]
    ]
  },
  {
    id: "casa",
    name: "Cas A (Cassiopeia A)",
    aka: "Cassiopeia A, Cas A, 3C 461",
    type: "Core-collapse (Type IIb) supernova remnant",
    con: "Cassiopeia",
    dist: "~11,000 ly (3.4 kpc)",
    radec: "RA 23h 23m 27s   Dec +58° 48′ 49″",
    mag: "≈ +6 (radio-bright; the brightest extrasolar radio source)",
    img: "images/casa.jpg",
    tag: "Supernovae / neutron stars",
    idCues: [
      "Ragged, clumpy shell with knots and filaments — JWST's famous image looks like orange/white shattered glass",
      "Bright ring of ejecta with a knotty interior; not smooth and round",
      "Multi-wavelength: green/orange in JWST NIRCam, blue/purple in Chandra X-ray"
    ],
    facts: [
      "Youngest known core-collapse SNR in the Milky Way: the star exploded ~1680 AD (≈350 years ago), Type IIb.",
      "About 11,000 ly away; the shell is roughly 10 ly across; it is the brightest radio source outside the Solar System (synchrotron).",
      "Contains a neutron star (central compact object) — seen in X-rays; it showed the famous cooling controversy.",
      "Rich in freshly made elements (O, Si, S, Ar, Ca, Fe) — a laboratory for nucleosynthesis and dust formation; JWST revealed the 'Green Monster' and light echoes."
    ],
    qa: [
      ["What type of supernova made Cas A?", "Core collapse (Type IIb) of a massive star — not a thermonuclear Type Ia."],
      ["Why is it so bright in radio?", "Synchrotron emission from relativistic electrons accelerated in the expanding shock."],
      ["What compact object is inside?", "A neutron star (central compact object)."]
    ]
  },
  {
    id: "tycho",
    name: "Tycho's SNR",
    aka: "SN 1572, Tycho's Nova, 3C 10",
    type: "Type Ia thermonuclear supernova remnant",
    con: "Cassiopeia",
    dist: "~8,000–10,000 ly (2.5–3 kpc)",
    radec: "RA 00h 25m 19s   Dec +64° 08′ 18″",
    mag: "peak ≈ −4 (visible in daylight in 1572)",
    img: "images/tycho.jpg",
    tag: "Supernovae",
    idCues: [
      "Beautifully round shell with a crisp outer rim/ring — much more circular than Cas A",
      "X-ray images show a thin blue rim (synchrotron) with a mottled red/green interior of shocked ejecta",
      "Looks like a bubble; no central point source"
    ],
    facts: [
      "SN 1572, observed and documented by Tycho Brahe (a 'new star' that shattered the idea of an unchanging heavens).",
      "Type Ia: a carbon–oxygen white dwarf in a binary gained mass (or merged), approached the Chandrasekhar limit, and detonated — the WD is completely destroyed, so no neutron star or black hole remains.",
      "Explosive silicon burning synthesizes iron-peak elements, especially ⁵⁶Ni → ⁵⁶Co → ⁵⁶Fe, whose radioactive decay powers the light curve.",
      "The outer ring is the forward shock/blast wave running into circumstellar material; the thin X-ray rim is synchrotron from shock-accelerated electrons (cosmic-ray acceleration)."
    ],
    qa: [
      ["How was the explosion triggered?", "A white dwarf accreted mass from a companion (or merged), pushing it toward the Chandrasekhar limit and triggering a thermonuclear detonation."],
      ["Why can Type Ia supernovae make heavy elements like iron?", "Explosive burning at extremely high temperature/density fuses material all the way to the iron peak (⁵⁶Ni), which later decays to ⁵⁶Fe."],
      ["What is the outer ring?", "The forward shock / blast wave — the expanding shell of shocked gas sweeping up circumstellar material."]
    ]
  }
];
