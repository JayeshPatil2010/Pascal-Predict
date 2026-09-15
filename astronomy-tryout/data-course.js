/* GUIDED COURSE — basics first, advanced last.
   Each stage: teach (short), then a 4-question check. Pass (>=3/4) to unlock the next stage.
   Cram mode (in the UI) unlocks everything at once for last-minute review. */

const TRACKS = [
  { id: "t1", name: "Part 1 · Foundations", sub: "no math — what you're even looking at" },
  { id: "t2", name: "Part 2 · The topic", sub: "star formation, starbursts, mergers, spectra" },
  { id: "t3", name: "Part 3 · The math", sub: "the distance ladder, Kepler, rotation curves" },
  { id: "t4", name: "Part 4 · Advanced & objects", sub: "ULXs, gravitational waves, the 13 DSOs" }
];

const COURSE = [
  /* ---------------- PART 1 ---------------- */
  {
    id: "s1", track: "t1", title: "1. Scale, units & what a galaxy is", mins: 6,
    goal: "Hold the size of things in your head, and never lose points to unit conversions.",
    teach: [
      "A galaxy is a gravitationally bound collection of stars, gas, dust — and a lot of dark matter. Sizes run from ~10⁷ stars (dwarfs) to ~10¹² (giants).",
      "Distance units: 1 light-year = 9.46 × 10¹⁵ m. 1 parsec (pc) = 3.26 ly. 1 kpc = 1,000 pc = 3,260 ly. 1 Mpc = 3.26 MILLION ly. Tests mix these on purpose.",
      "The Milky Way is ~100,000 ly across with ~10¹¹ stars; we live ~26,000 ly from the center. It is a barred spiral (SBbc).",
      "The Local Group is ~10 Mly across: the Milky Way, M31 (2.5 Mly), M33, plus dozens of dwarf galaxies.",
      "Beyond that: the Virgo Cluster is ~50–60 Mly away; the objects on your 2027 list run from 11 Mly (NGC 1569) out to ~500 Mly (Cartwheel), and GW170817 is ~130 Mly away.",
      "Mental anchor: nearest big galaxy = 2.5 Mly · typical 'nearby' DSO = 10–50 Mly · 'far' DSOs on this list = 200–500 Mly."
    ],
    check: [
      { q: "How many light-years is one parsec?", opts: ["3.26", "1", "206,265", "0.31"], ans: "3.26", exp: "1 pc = 3.26 ly = 206,265 AU. 1 kpc = 3,260 ly, 1 Mpc = 3.26 million ly." },
      { q: "Roughly how far away is the Andromeda Galaxy?", opts: ["2.5 million ly", "2.5 billion ly", "25,000 ly", "250 million ly"], ans: "2.5 million ly", exp: "M31 is ~2.5 Mly (≈765 kpc) away — the nearest large galaxy, visible to the naked eye." },
      { q: "Which distance is biggest?", opts: ["1 Mpc", "1 kpc", "1 pc", "1 ly"], ans: "1 Mpc", exp: "Mpc (3.26 million ly) > kpc (3,260 ly) > pc (3.26 ly) > ly." },
      { q: "What holds a galaxy together?", opts: ["Gravity, with dark matter providing most of the mass", "Radiation pressure from stars", "Magnetic fields", "The central black hole's pull on every star"], ans: "Gravity, with dark matter providing most of the mass", exp: "Self-gravity binds the galaxy, and the mass budget is dominated by a dark matter halo. The central BH only dominates very near the center." }
    ]
  },
  {
    id: "s2", track: "t1", title: "2. Galaxy morphology (the Hubble sequence)", mins: 10,
    goal: "Name any galaxy you're shown, and say what its shape implies about its stars.",
    teach: [
      "The tuning fork: ELLIPTICALS (E0 round → E7 flattened) → LENTICULARS (S0) → SPIRALS (Sa, Sb, Sc) and BARRED SPIRALS (SBa, SBb, SBc) → IRREGULARS (Irr).",
      "Read the physics off the shape. Along Sa → Sc: the bulge shrinks, the arms open up, gas and dust increase, color gets bluer, and the star-formation rate rises.",
      "Ellipticals: smooth, reddish, gas-poor, stars on random orbits, almost no star formation — usually merger products.",
      "S0/lenticular: a disk and a big bulge, but no arms and little gas — a spiral that has been 'quenched'.",
      "Irregulars: no symmetry, gas-rich, usually starbursting or disturbed (the Magellanic Clouds, NGC 1569).",
      "How to name what you see, in order: (1) is there a disk? (2) are there arms? (3) how big is the bulge? (4) is there a bar? (5) any dust lanes, blue knots, or tidal tails?",
      "Your 2027 objects: M31 = SA(s)b spiral · Sombrero = bulge + dust lane, Sa/S0 (debated) · M51 = SA(s)bc grand-design · NGC 4536 = SAB(rs)bc · M82 = disturbed disk, edge-on starburst · NGC 1569 = IBm dwarf irregular."
    ],
    check: [
      { q: "Which galaxy type is red, gas-poor, full of old stars, and made by mergers?", opts: ["Elliptical", "Sc spiral", "Irregular", "Barred spiral"], ans: "Elliptical", exp: "Ellipticals are dominated by old Pop II stars with little cold gas — the typical end product of a major merger." },
      { q: "Going from Sa to Sc, what happens?", opts: ["Bulge shrinks, arms open up, star formation rises", "Bulge grows, arms tighten, star formation stops", "The bar disappears and gas is expelled", "Nothing changes except the viewing angle"], ans: "Bulge shrinks, arms open up, star formation rises", exp: "That trend (bulge-to-disk ratio, arm tightness, gas content) is exactly what the a/b/c subclasses encode." },
      { q: "A galaxy has a disk and a large bulge but no spiral arms and no obvious gas. What is it?", opts: ["Lenticular (S0)", "Elliptical", "Sc spiral", "Irregular"], ans: "Lenticular (S0)", exp: "S0 = disk present, arms and gas absent. Ellipticals have no disk at all." },
      { q: "You see a small galaxy with no symmetry, lots of blue knots and red gas filaments. Most likely:", opts: ["Irregular, starbursting", "Giant elliptical", "Sa spiral", "S0"], ans: "Irregular, starbursting", exp: "Messy + gas-rich + blue knots = an irregular undergoing a burst (that's NGC 1569 on your list)." }
    ],
    gallery: ["m31", "sombrero", "m51"]
  },
  {
    id: "s3", track: "t1", title: "3. Star tools: spectra, H-R, blackbody", mins: 10,
    goal: "Reuse the star-level toolkit the galaxy questions are built on.",
    teach: [
      "Spectral classes O B A F G K M = hot → cool (Oh Be A Fine Girl/Guy, Kiss Me). O ≈ 40,000 K; M ≈ 3,000 K.",
      "Line clues: O → He II; B → He I; A → strongest hydrogen Balmer lines; F → Ca II and metals grow; G → Ca II H&K dominate (the Sun is G2V); K/M → molecular bands (TiO in M).",
      "Luminosity classes: V = main sequence/dwarf, III = giant, I = supergiant.",
      "H-R diagram trap: the x-axis runs BACKWARDS — hot on the LEFT. y-axis is luminosity (or magnitude, which runs backwards too). White dwarfs sit lower-LEFT (hot but tiny); giants upper-RIGHT (cool but huge).",
      "Blackbody: Wien's law λ_max T = 2.898 × 10⁶ nm·K (hotter ⇒ peak at SHORTER wavelength). Stefan–Boltzmann L = 4πR²σT⁴, so L/L☉ = (R/R☉)²(T/5772)⁴.",
      "Magnitude: m = apparent, M = absolute (at 10 pc). Smaller = brighter. 5 magnitudes = a factor of 100; the ratio is 10^(0.4Δm).",
      "Why this matters here: a galaxy's COLOR and SPECTRUM are just the summed light of its stars — blue means young massive stars are present now."
    ],
    check: [
      { q: "Which spectral class has the strongest hydrogen Balmer lines?", opts: ["A", "O", "G", "M"], ans: "A", exp: "Balmer lines peak near 10,000 K (A stars). Hotter ionizes the hydrogen; cooler leaves electrons in n=1." },
      { q: "On an H-R diagram, where are the white dwarfs?", opts: ["Lower left", "Upper right", "Upper left", "Lower right"], ans: "Lower left", exp: "Hot (left) but tiny (faint, bottom). Upper right = giants and supergiants." },
      { q: "A star is 4× the Sun's radius and the same temperature. How luminous is it?", opts: ["16 L☉", "4 L☉", "256 L☉", "1 L☉"], ans: "16 L☉", exp: "L ∝ R²T⁴, so 4² = 16 at fixed temperature." },
      { q: "A star's light peaks at 290 nm. What is its temperature?", opts: ["10,000 K", "5,800 K", "1,000 K", "100,000 K"], ans: "10,000 K", exp: "T = 2.898×10⁶ / 290 ≈ 10,000 K — an A-type star, hotter and bluer than the Sun (which peaks near 500 nm)." }
    ]
  },
  {
    id: "s4", track: "t1", title: "4. Stellar populations & clusters", mins: 8,
    goal: "Connect a galaxy's color and structure to the ages of its stars.",
    teach: [
      "Population I: young, metal-RICH, in disks and spiral arms — hot blue massive stars, open clusters, H II regions, Cepheids.",
      "Population II: old, metal-POOR, in halos, bulges, ellipticals and globular clusters — red giants, RR Lyrae.",
      "Metallicity is written [Fe/H]; each generation of stars enriches the gas a little more, so old stars are metal-poor.",
      "Globular clusters: 10⁴–10⁶ stars, 10–13 Gyr old, dense — fossils of how the galaxy was assembled.",
      "Age from an H-R diagram: the MAIN-SEQUENCE TURNOFF. Massive stars die first, so the hottest stars still on the main sequence date the cluster.",
      "Read a galaxy at a glance: blue = star formation in the last ~10–100 Myr; red = only old stars; a blue disk + red bulge = both.",
      "This is exactly why Terzan 5 is famous (and on your list): it has several populations with different ages and metallicities, which a normal globular cluster cannot have."
    ],
    check: [
      { q: "Where do you find Population II stars?", opts: ["Halo, bulge, globular clusters, ellipticals", "Spiral arms and H II regions", "Only in the disks of starburst galaxies", "Only in the Milky Way"], ans: "Halo, bulge, globular clusters, ellipticals", exp: "Pop II = old and metal-poor: halos, bulges, globular clusters, elliptical galaxies." },
      { q: "What feature of a cluster's H-R diagram gives its age?", opts: ["The main-sequence turnoff", "The number of red giants", "The width of the main sequence", "The presence of white dwarfs alone"], ans: "The main-sequence turnoff", exp: "The turnoff mass tells you how old the cluster is — massive stars have already left the main sequence." },
      { q: "A galaxy looks uniformly red with no blue stars anywhere. What does that tell you?", opts: ["It has no recent star formation", "It is extremely distant", "It is full of dust", "It is a starburst"], ans: "It has no recent star formation", exp: "Hot massive stars are blue and short-lived; if none are present, no stars formed recently." },
      { q: "Which variable stars trace an OLD population?", opts: ["RR Lyrae", "Cepheids", "T Tauri stars", "Both Cepheids and RR Lyrae"], ans: "RR Lyrae", exp: "RR Lyrae are old, low-mass Pop II horizontal-branch stars; Cepheids are young, massive Pop I supergiants." }
    ]
  },

  /* ---------------- PART 2 ---------------- */
  {
    id: "s5", track: "t2", title: "5. Star formation & what 'starburst' means", mins: 10,
    goal: "Define a starburst by rate, and list its signatures from memory.",
    teach: [
      "Stars form when cold, dense gas collapses. What you see: Hα emission (gas ionized by hot massive stars), dust warmed into the infrared, and young clusters.",
      "A starburst is a RATE, not a type of galaxy: it is forming stars so fast that its gas supply would run out in far less than the age of the universe.",
      "Numbers to know: the Milky Way makes ~1–3 M☉/yr (normal). Starbursts run from ~10 to hundreds of M☉/yr. M82 is ~10× the Milky Way's rate in a much smaller volume.",
      "Triggers: galaxy collisions and close passes (gas is driven inward), bars, and tidal torques. MCG+07-33-027 is the exception — an apparently isolated starburst.",
      "Signatures checklist: strong Hα · strong far-IR · lots of supernovae · many X-ray binaries and ULXs · blue colors · super star clusters · a superwind.",
      "Feedback: after a few Myr the massive stars die as supernovae; the combined energy drives a SUPERWIND that blows hot gas out of the disk (M82's plumes) and can shut the burst down.",
      "Timescales: the burst lasts ~10⁷–10⁸ yr. It is a phase in a galaxy's life, not a permanent identity."
    ],
    check: [
      { q: "What makes a galaxy a starburst?", opts: ["It is using up its gas far faster than a Hubble time", "It has more than 10¹² stars", "It is colliding right now", "It is forming stars at all"], ans: "It is using up its gas far faster than a Hubble time", exp: "It's about the rate relative to the gas supply — a starburst is a short-lived phase." },
      { q: "Which is NOT a typical starburst signature?", opts: ["A very strong radio jet from the nucleus", "Strong Hα emission", "Bright infrared emission", "Many X-ray binaries and ULXs"], ans: "A very strong radio jet from the nucleus", exp: "Jets come from an active galactic nucleus (accreting supermassive black hole), not from a starburst. Watch for 'off-nucleus' vs 'nucleus'." },
      { q: "What is M82's superwind?", opts: ["Hot gas blown out of the disk by many supernovae and stellar winds", "A jet from its central black hole", "Gas falling into the galaxy from outside", "The rotation of the disk seen edge-on"], ans: "Hot gas blown out of the disk by many supernovae and stellar winds", exp: "Feedback: the starburst's combined energy vents gas perpendicular to the disk — visible in X-rays and Hα." },
      { q: "Why is MCG+07-33-027 on the DSO list?", opts: ["It is a starburst with no interacting companion", "It is the nearest galaxy to us", "It is the only elliptical with a ring", "It hosts the brightest known supernova"], ans: "It is a starburst with no interacting companion", exp: "Starbursts are usually triggered by mergers or encounters; this one appears isolated, which makes it a puzzle." }
    ],
    gallery: ["ngc1569", "mcg0733", "m82"]
  },
  {
    id: "s6", track: "t2", title: "6. How massive stars end (the bridge to ULXs)", mins: 8,
    goal: "Know the remnants, because starbursts manufacture them.",
    teach: [
      "Mass decides the corpse: low/intermediate stars → white dwarfs (electron degeneracy, 1.4 M☉ Chandrasekhar limit). Massive stars → core collapse → neutron star or black hole.",
      "Neutron star: ~1.4 M☉ in ~10 km; supported by neutron degeneracy. Some are PULSARS — beamed radio pulses as they spin.",
      "MILLISECOND pulsars are old neutron stars spun up by accreting from a companion — dense clusters make lots of them (that's Terzan 5).",
      "X-ray binaries: a neutron star or black hole accreting from a companion star; the gas is heated to X-ray temperatures.",
      "Type Ia supernova: a white dwarf pushed to the Chandrasekhar limit detonates and is destroyed. No hydrogen lines; peak M_B ≈ −19.3.",
      "Core-collapse supernova (Type II): a massive star's iron core collapses; hydrogen lines present; leaves a neutron star or black hole.",
      "Timing is the whole story of a starburst: massive stars live only a few Myr, so the burst's light is followed within millions of years by supernovae, neutron stars, black holes — and ULXs."
    ],
    check: [
      { q: "What supports a white dwarf against gravity?", opts: ["Electron degeneracy pressure", "Neutron degeneracy pressure", "Radiation pressure from fusion", "Centrifugal force from its spin"], ans: "Electron degeneracy pressure", exp: "Electron degeneracy, capped by the 1.4 M☉ Chandrasekhar limit. Neutron degeneracy is what holds up neutron stars." },
      { q: "How are millisecond pulsars made?", opts: ["An old neutron star is spun up by accreting from a companion", "They are born spinning that fast", "Supernovae spin them down to milliseconds", "They are white dwarfs collapsing further"], ans: "An old neutron star is spun up by accreting from a companion", exp: "Accretion transfers angular momentum and 'recycles' the neutron star to millisecond periods." },
      { q: "Which supernova type destroys a white dwarf and shows no hydrogen lines?", opts: ["Type Ia", "Type II", "Type Ib", "Type Ic"], ans: "Type Ia", exp: "Type Ia = thermonuclear disruption of a white dwarf, no H, strong Si II near 615 nm, peak M_B ≈ −19.3." },
      { q: "Why do starburst galaxies contain so many compact objects?", opts: ["Their massive stars are short-lived, so remnants pile up quickly", "They capture black holes from other galaxies", "Their stars are older", "Their gas prevents supernovae"], ans: "Their massive stars are short-lived, so remnants pile up quickly", exp: "A burst of massive stars dies within a few Myr, leaving neutron stars and black holes — that's the ULX connection." }
    ]
  },
  {
    id: "s7", track: "t2", title: "7. Interactions, mergers & tidal features", mins: 10,
    goal: "Explain every weird galaxy shape on your list with one mechanism.",
    teach: [
      "Stars in a collision are effectively collisionless — they pass right by each other. GAS is not: it shocks, radiates energy, loses angular momentum and falls inward.",
      "That is the whole reason mergers cause starbursts: the gas is compressed and funneled to the center.",
      "Tidal features: long TAILS and streams of stars+gas flung out by gravitational torques (the Antennae), bridges between galaxies, and shells around old merger remnants.",
      "RING galaxies: a smaller galaxy punches through the middle of a disk ('bullseye') and drives an outward density wave, like a ripple in a pond. The ring is a propagating starburst. Cartwheel = the classic; Arp 147 and Arp 143 = rings caught mid-formation.",
      "Outcomes: spiral + spiral → usually an elliptical remnant. Minor mergers build up halos and globular cluster systems.",
      "Tidal disruption event (TDE): a star wanders too close to a supermassive black hole and is shredded, making a bright flare.",
      "Timescales: the encounter takes ~10⁸ yr; the resulting starburst lasts ~10⁷–10⁸ yr."
    ],
    check: [
      { q: "Why do galaxy collisions trigger star formation if stars never actually collide?", opts: ["The gas clouds collide, shock and get compressed", "Stars collide and merge into bigger stars", "The black holes heat the gas", "Dark matter annihilates and forms stars"], ans: "The gas clouds collide, shock and get compressed", exp: "Gas is dissipative — it loses energy and flows inward; stars just get rearranged into tails and shells." },
      { q: "What are the long curved features in the Antennae Galaxies?", opts: ["Tidal tails of stars and gas", "Spiral arms", "Jets from the black hole", "Dust lanes in a ring"], ans: "Tidal tails of stars and gas", exp: "They are tidal debris — material flung out by the gravitational interaction." },
      { q: "What creates a ring galaxy like the Cartwheel?", opts: ["A head-on collision driving an outward density wave", "A bar funneling gas inward", "A supermassive black hole's jet", "The galaxy rotating as a solid body"], ans: "A head-on collision driving an outward density wave", exp: "'Bullseye' impact → expanding compression ring → star formation in the ring." },
      { q: "How can you tell a collisional ring from a normal spiral arm?", opts: ["The ring expands radially with little rotation", "The ring rotates faster than the disk", "Spiral arms are perfectly circular", "Rings only form in ellipticals"], ans: "The ring expands radially with little rotation", exp: "Arp 147's ring expands at ~225 km/s with only ~47 km/s of rotation — the signature of an impact, not a spiral pattern." }
    ],
    gallery: ["antennae", "arp143", "arp147", "cartwheel"]
  },
  {
    id: "s8", track: "t2", title: "8. Reading a galaxy: spectra, redshift, multi-wavelength", mins: 8,
    goal: "Turn a spectrum or an image into a physical statement.",
    teach: [
      "ABSORPTION lines in a galaxy spectrum come from starlight (Ca II, Mg b, Na D, Balmer) → they trace the OLD/metal-rich population.",
      "EMISSION lines (Hα 6563 Å, [O III] 5007 Å, [O II]) come from gas ionized by hot massive stars → they trace CURRENT star formation. Emission lines = young.",
      "Redshift: z = (λ_obs − λ_rest)/λ_rest = Δλ/λ₀, and v ≈ cz for small z (c = 3.00 × 10⁵ km/s). Redshift = receding; blueshift = approaching (M31!).",
      "Wavelength decode: RADIO → cold HI (21 cm), molecules, synchrotron · IR → warm dust and hidden star formation · OPTICAL → stars, Hα · UV → hot massive young stars · X-RAY → million-degree gas and accretion onto compact objects · GAMMA-RAY → the most violent events.",
      "Color-as-physics in pictures: pink/red = Hα emission; blue = hot young stars or scattered light; dark patches = dust extinction; X-ray in composites is usually rendered blue/purple or magenta.",
      "Multi-messenger means adding gravitational waves, neutrinos and cosmic rays to the electromagnetic spectrum — GW170817 is the flagship example on your list."
    ],
    check: [
      { q: "Strong Hα emission in a galaxy spectrum tells you:", opts: ["Massive young stars are ionizing gas right now", "The galaxy is made only of old stars", "The galaxy is receding rapidly", "There is no dust"], ans: "Massive young stars are ionizing gas right now", exp: "Hα comes from gas ionized by short-lived O/B stars: it marks star formation in the last ~10 Myr." },
      { q: "A line with rest wavelength 5007 Å is observed at 5107 Å. What is the radial velocity?", opts: ["About 6,000 km/s, receding", "About 6,000 km/s, approaching", "About 300 km/s, receding", "Zero — that's the same line"], ans: "About 6,000 km/s, receding", exp: "z = 100/5007 ≈ 0.02 → v ≈ cz = 0.02 × 3×10⁵ = 6,000 km/s, and the wavelength increased (redshift)." },
      { q: "Which band best reveals star formation hidden inside dusty clouds?", opts: ["Infrared", "Visible", "Ultraviolet", "Gamma ray"], ans: "Infrared", exp: "IR penetrates dust, and warm dust re-radiates the absorbed UV/optical light of young stars." },
      { q: "What kind of object is best found in X-rays?", opts: ["Hot gas and gas accreting onto neutron stars or black holes", "Cold molecular clouds", "Old red stars", "Planets"], ans: "Hot gas and gas accreting onto neutron stars or black holes", exp: "X-rays trace million-degree gas, shocks, and accretion onto compact objects — that's why Chandra sees the ULXs." }
    ]
  },

  /* ---------------- PART 3 ---------------- */
  {
    id: "s9", track: "t3", title: "9. Magnitudes & the distance modulus", mins: 8,
    goal: "The one formula that turns a standard candle into a distance.",
    teach: [
      "Apparent magnitude m = how bright it looks. Absolute magnitude M = how bright it would look at 10 pc. They are equal when d = 10 pc.",
      "The relation: m − M = 5 log₁₀(d) − 5, with d in PARSECS. Rearranged: d = 10^((m−M+5)/5) pc.",
      "Brightness ratio from a magnitude difference: F₁/F₂ = 10^(0.4Δm) = 2.512^Δm. Five magnitudes = a factor of 100.",
      "Traps: d must be in pc (not ly, not Mpc); bigger magnitude = fainter; a NEGATIVE absolute magnitude means very luminous (the Sun is M_V = +4.8; a whole galaxy is around −20).",
      "Quick check: m − M = 0 means d = 10 pc. m − M = 25 means d = 10⁶ pc = 1 Mpc.",
      "Everything else in the ladder feeds this formula: Cepheids, RR Lyrae and Type Ia supernovae all give you M, and then you use this to get d."
    ],
    check: [
      { q: "A star has m = 14 and M = 4. How far away is it?", opts: ["1,000 pc", "100 pc", "10 pc", "10,000 pc"], ans: "1,000 pc", exp: "m − M = 10 = 5 log d − 5 → log d = 3 → d = 10³ = 1,000 pc." },
      { q: "Star A has magnitude 8, star B has magnitude 13. How many times brighter is A?", opts: ["100", "5", "20", "2.512"], ans: "100", exp: "Δm = 5 → ratio = 2.512⁵ = 100. Smaller magnitude = brighter." },
      { q: "A galaxy at 100 Mpc has m − M equal to:", opts: ["35", "25", "30", "5"], ans: "35", exp: "100 Mpc = 10⁸ pc → m − M = 5(8) − 5 = 35." },
      { q: "What does absolute magnitude mean?", opts: ["The magnitude an object would have at a distance of 10 pc", "The magnitude measured through a telescope", "The brightness at the surface", "The magnitude corrected for dust only"], ans: "The magnitude an object would have at a distance of 10 pc", exp: "M is intrinsic luminosity on the magnitude scale — the reference distance is 10 pc." }
    ],
    link: { tab: "graphs", text: "Practice with the Cepheid P–L graph →" }
  },
  {
    id: "s10", track: "t3", title: "10. Cepheids & RR Lyrae (period–luminosity)", mins: 10,
    goal: "Tell the two pulsators apart instantly and use each one.",
    teach: [
      "These are the two variable-star rungs the 2027 rules name explicitly.",
      "CEPHEIDS: young, massive, metal-rich Pop I supergiants. Period 1–100 days. Sawtooth light curve (fast rise, slower fall), amplitude ~1 mag. M_V = −2.76 log₁₀(P) − 1.40. Longer period = more luminous.",
      "RR LYRAE: old, low-mass Pop II horizontal-branch stars. Period ~0.2–1 day (usually ~0.5 d), amplitude < 1 mag, M_V ≈ +0.6. Found in globular clusters, halos and ellipticals.",
      "Fastest discriminator: PERIOD. 0.5 d → RR Lyrae. 10 d → Cepheid. Then amplitude and population.",
      "Cepheids are far more luminous (M_V ≈ −4 to −6), so they reach much farther; RR Lyrae are fainter but exist in old populations where Cepheids do not.",
      "Historical anchor: Hubble found Cepheids in M31 in 1923–24 and proved the 'spiral nebulae' were separate galaxies.",
      "If the test hands you its own P–L constants, use theirs — the 2025 national practice test did exactly that."
    ],
    check: [
      { q: "A variable star has a period of 0.5 days and M_V ≈ +0.6. What is it?", opts: ["RR Lyrae", "Cepheid", "Mira variable", "Eclipsing binary"], ans: "RR Lyrae", exp: "Period < 1 day plus M_V ≈ +0.6 = an old Pop II RR Lyrae star." },
      { q: "A Cepheid has a period of 100 days. What is M_V (using −2.76 log P − 1.40)?", opts: ["−6.92", "−4.16", "−1.40", "+4.12"], ans: "−6.92", exp: "log₁₀(100) = 2 → M_V = −2.76(2) − 1.40 = −6.92." },
      { q: "Which population do Cepheids belong to?", opts: ["Population I (young, metal-rich)", "Population II (old, metal-poor)", "Population III", "Neither — they are remnants"], ans: "Population I (young, metal-rich)", exp: "Cepheids are massive young supergiants — that's why they live in disks and spiral arms, not in globular clusters." },
      { q: "Why can RR Lyrae be used in elliptical galaxies where Cepheids cannot?", opts: ["They belong to the old population that ellipticals contain", "They are brighter than Cepheids", "They are not affected by dust", "They only exist outside the Milky Way"], ans: "They belong to the old population that ellipticals contain", exp: "Ellipticals have no young massive stars, so no Cepheids — but they do have old horizontal-branch stars." }
    ],
    link: { tab: "graphs", text: "Drill the light curves and P–L plot →" }
  },
  {
    id: "s11", track: "t3", title: "11. Type Ia supernovae & the distance ladder", mins: 8,
    goal: "Assemble the ladder in order and know what calibrates what.",
    teach: [
      "Type Ia: a carbon–oxygen white dwarf is pushed to the Chandrasekhar limit (1.4 M☉) by accretion or a merger and detonates. The whole star is destroyed — no neutron star, no black hole.",
      "Why it's a standard candle: the explosion happens at a nearly fixed mass, so the peak luminosity is nearly fixed: M_B ≈ −19.3. No hydrogen lines; strong Si II near 615 nm.",
      "The light curve is powered by radioactive decay: ⁵⁶Ni → ⁵⁶Co → ⁵⁶Fe.",
      "The ladder: parallax (nearby stars) → Cepheids (to ~30–40 Mpc with HST/JWST) → Type Ia supernovae (out to cosmological distances) → the Hubble flow.",
      "NGC 4536 on your list is a calibration rung: HST measured Cepheids there AND it hosted SN 1981B, a Type Ia used for calibration.",
      "GW170817 adds a brand-new, ladder-free rung: a 'standard siren' whose distance comes straight from the gravitational-wave signal.",
      "Trap: a NOVA is not a supernova — only the accreted surface layer of the white dwarf detonates, and the star survives to repeat."
    ],
    check: [
      { q: "What is the peak absolute magnitude of a Type Ia supernova?", opts: ["−19.3", "+0.6", "−5.5", "+4.8"], ans: "−19.3", exp: "M_B ≈ −19.3 at peak — bright enough to be seen across cosmological distances." },
      { q: "What is destroyed in a Type Ia supernova?", opts: ["A white dwarf", "A massive star's iron core", "A neutron star", "A giant molecular cloud"], ans: "A white dwarf", exp: "The C/O white dwarf detonates completely — that's why no compact remnant is left behind." },
      { q: "Put the ladder in order, nearest to farthest:", opts: ["Parallax → Cepheids → Type Ia → Hubble flow", "Cepheids → parallax → Hubble flow → Type Ia", "Hubble flow → Type Ia → Cepheids → parallax", "Cepheids → Type Ia → parallax → Hubble flow"], ans: "Parallax → Cepheids → Type Ia → Hubble flow", exp: "Each rung calibrates the next: parallax anchors Cepheids, Cepheids calibrate SNe Ia, SNe Ia reach into the Hubble flow." },
      { q: "Nova vs Type Ia supernova — the key difference is:", opts: ["The white dwarf survives a nova and is destroyed in a Type Ia", "A nova is brighter", "A nova involves a neutron star", "A nova produces iron"], ans: "The white dwarf survives a nova and is destroyed in a Type Ia", exp: "A nova is a surface flash that can repeat; a Type Ia destroys the entire white dwarf." }
    ]
  },
  {
    id: "s12", track: "t3", title: "12. Hubble's law", mins: 6,
    goal: "Convert a recession velocity into a distance in one step.",
    teach: [
      "The universe expands: every distant galaxy recedes from us at a speed proportional to its distance. v = H₀ d.",
      "H₀ ≈ 70 km/s/Mpc (measurements cluster around 67–73). With v in km/s, d comes out in Mpc: d = v/H₀.",
      "Get v from the redshift: v ≈ cz. Then d(Mpc) = v(km/s) / 70, and 1 Mpc = 3.26 million ly.",
      "Worked example: GW170817's host NGC 4993 has cz ≈ 3,300 km/s → d ≈ 3,300/70 ≈ 47 Mpc ≈ 130–140 Mly. That matches the gravitational-wave distance of ~40 Mpc.",
      "Sanity check: a galaxy at 100 Mpc recedes at ~7,000 km/s. If you get 700 or 70,000, you've slipped a unit.",
      "Caveat: Hubble's law only beats local motions at large distances. Nearby galaxies have their own velocities — M31 is BLUESHIFTED and coming toward us at ~110 km/s."
    ],
    check: [
      { q: "A galaxy recedes at 3,500 km/s. About how far away is it (H₀ = 70)?", opts: ["50 Mpc", "5 Mpc", "500 Mpc", "0.5 Mpc"], ans: "50 Mpc", exp: "d = v/H₀ = 3,500/70 = 50 Mpc ≈ 163 million ly." },
      { q: "Which of these is NOT consistent with the Hubble flow?", opts: ["M31 approaching us at 110 km/s", "A galaxy at 100 Mpc receding at 7,000 km/s", "A galaxy at 200 Mpc receding at 14,000 km/s", "Redshift increasing with distance"], ans: "M31 approaching us at 110 km/s", exp: "Nearby galaxies are dominated by their own local (peculiar) motion — M31 is blueshifted and on a collision course with the Milky Way." },
      { q: "How do you get the recession velocity to plug into Hubble's law?", opts: ["Redshift: v ≈ c·z", "Parallax over six months", "Proper motion on the sky", "The period–luminosity relation"], ans: "Redshift: v ≈ c·z", exp: "Measure a line's shift: z = Δλ/λ₀, then v ≈ cz for small z. Parallax and proper motion are local techniques." },
      { q: "Roughly how far is a galaxy at 40 Mpc, in light-years?", opts: ["130 million ly", "13 million ly", "1.3 billion ly", "40 million ly"], ans: "130 million ly", exp: "40 × 3.26 million = ~130 million ly — the distance to GW170817's host galaxy." }
    ],
    link: { tab: "graphs", text: "Drill Hubble diagrams →" }
  },
  {
    id: "s13", track: "t3", title: "13. Tully–Fisher (distances to spirals)", mins: 6,
    goal: "The spiral-only rung that reaches past Cepheids.",
    teach: [
      "Faster-rotating spiral galaxies are more luminous — because both track the same thing: mass. Empirically, L ∝ v_max⁴.",
      "In magnitudes: M_B ≈ −9.95 log₁₀(v_max) + 3.15, with v_max in km/s.",
      "How it's used: measure the rotation width (usually from the 21 cm HI line, sometimes an optical rotation curve) → get v_max → get M_B → measure apparent m → distance modulus → distance.",
      "Sanity check: v_max = 220 km/s (Milky-Way-like) → M_B ≈ −20, which is about right for a big spiral.",
      "Limits: it works for SPIRALS (they rotate in a disk). Ellipticals don't rotate coherently, so you use Faber–Jackson instead (L ∝ σ⁴, using velocity dispersion).",
      "It's independent of the Cepheid ladder and reaches much farther, which is why it matters for the Hubble constant debate."
    ],
    check: [
      { q: "What two quantities does Tully–Fisher connect?", opts: ["Rotation speed and luminosity", "Distance and redshift", "Period and luminosity", "Mass and temperature"], ans: "Rotation speed and luminosity", exp: "L ∝ v_max⁴ — faster rotation means a more massive, more luminous galaxy." },
      { q: "Using M_B ≈ −9.95 log v_max + 3.15, what is M_B for v_max = 100 km/s?", opts: ["−16.75", "−19.9", "−20.1", "+3.15"], ans: "−16.75", exp: "log₁₀(100) = 2 → M_B = −19.9 + 3.15 = −16.75." },
      { q: "Why doesn't Tully–Fisher work for elliptical galaxies?", opts: ["They don't rotate in an orderly disk", "They have no stars", "They are too faint", "They contain no dark matter"], ans: "They don't rotate in an orderly disk", exp: "Elliptical stars move on random orbits; you use the velocity dispersion instead (Faber–Jackson, L ∝ σ⁴)." },
      { q: "Where does v_max come from in practice?", opts: ["The width of the 21 cm HI line or a rotation curve", "The galaxy's color", "Its apparent magnitude", "The period of its Cepheids"], ans: "The width of the 21 cm HI line or a rotation curve", exp: "Radio HI observations give the rotation width directly — no need to resolve individual stars." }
    ],
    link: { tab: "graphs", text: "Drill Tully–Fisher plots →" }
  },
  {
    id: "s14", track: "t3", title: "14. Orbits, Kepler & rotation curves", mins: 10,
    goal: "Weigh a galaxy and explain dark matter from one plot.",
    teach: [
      "Kepler's third law in astronomer's units: M₁ + M₂ = a³/P² with masses in M☉, a in AU, P in years. It gives the SUM of the masses.",
      "Circular motion: v = 2πr/P, and v² = GM/r for a circular orbit. Rearranged: M(<r) = v²r/G — the mass enclosed within radius r.",
      "Shortcut for galaxies: M(<r)/M☉ ≈ 2.33 × 10⁵ × [v(km/s)]² × [r(kpc)]. Check: v = 220 km/s at r = 8 kpc → 9.3 × 10¹⁰ M☉.",
      "A ROTATION CURVE plots orbital speed vs radius. If the mass were all in the middle (like the Solar System), v would fall as 1/√r — a Keplerian decline.",
      "Real spirals: v rises, then stays FLAT far beyond the visible disk. Since M(<r) = v²r/G, flat means the enclosed mass keeps growing where the light doesn't → a DARK MATTER HALO.",
      "This is the single most-tested idea in the 'galactic systems' part of the rules.",
      "Apply the same Kepler relation to binary galaxies and to the Milky Way–M31 pair falling together."
    ],
    check: [
      { q: "Two stars orbit with a = 4 AU and P = 2 yr. Total mass?", opts: ["16 M☉", "8 M☉", "32 M☉", "4 M☉"], ans: "16 M☉", exp: "M = a³/P² = 64/4 = 16 M☉." },
      { q: "A galaxy's rotation curve stays flat at large radii. What does that imply?", opts: ["An extended dark matter halo", "All the mass is at the center", "The galaxy is not rotating", "There is no mass outside the disk"], ans: "An extended dark matter halo", exp: "Flat v means M(<r) ∝ r keeps rising, but the starlight doesn't — mass without light." },
      { q: "If ALL of a galaxy's mass were at its center, how would rotation speed vary with radius?", opts: ["v ∝ 1/√r (Keplerian decline)", "v stays constant", "v ∝ r", "v ∝ r²"], ans: "v ∝ 1/√r (Keplerian decline)", exp: "Keplerian: v = √(GM/r), the same behaviour as planets in the Solar System." },
      { q: "A galaxy rotates at 150 km/s at r = 10 kpc. Enclosed mass?", opts: ["≈5.2 × 10¹⁰ M☉", "≈1.5 × 10¹⁰ M☉", "≈2.3 × 10¹¹ M☉", "≈5.2 × 10⁸ M☉"], ans: "≈5.2 × 10¹⁰ M☉", exp: "M ≈ 2.33×10⁵ × 150² × 10 = 5.2×10¹⁰ M☉." }
    ],
    link: { tab: "graphs", text: "Drill rotation curves →" }
  },

  /* ---------------- PART 4 ---------------- */
  {
    id: "s15", track: "t4", title: "15. ULXs & the Eddington limit", mins: 8,
    goal: "Say what a ULX is and why it's controversial in one sentence.",
    teach: [
      "An ULX (ultra-luminous X-ray source) is an OFF-NUCLEUS X-ray point source brighter than ~10³⁹ erg/s.",
      "Why that's weird: accretion can't exceed the EDDINGTON limit, where radiation pressure blows the infalling gas away: L_Edd ≈ 1.3 × 10³⁸ (M/M☉) erg/s. A 10 M☉ stellar black hole tops out near 10³⁹ erg/s.",
      "So a ULX needs one of three explanations: (1) an INTERMEDIATE-MASS black hole (10²–10⁴ M☉), (2) a stellar-mass black hole accreting super-Eddington, or (3) beamed emission aimed at us.",
      "M82 X-1: the brightest ULX in M82 (L_X ~10⁴⁰–10⁴¹ erg/s, 62-day orbit) — the classic IMBH candidate. M82 X-2 is a pulsating ULX, i.e. a NEUTRON STAR exceeding its Eddington limit — proof that ULXs are a mixed population.",
      "Why starbursts are full of them: a burst makes thousands of massive binaries, and their remnants accrete from companions.",
      "Arp 147 and the Cartwheel also host ULXs in their star-forming rings — same story: burst → massive stars → remnants → X-ray binaries."
    ],
    check: [
      { q: "What defines a ULX?", opts: ["Off-nucleus X-ray source above ~10³⁹ erg/s", "Any source brighter than the galaxy's center", "An X-ray source inside a globular cluster", "A supernova visible in X-rays"], ans: "Off-nucleus X-ray source above ~10³⁹ erg/s", exp: "Off-nucleus (so not the central AGN) and above the Eddington limit of a stellar-mass black hole." },
      { q: "What is the Eddington limit?", opts: ["The luminosity where radiation pressure stops accretion", "The maximum mass of a black hole", "The speed of light in a vacuum", "The minimum mass for core collapse"], ans: "The luminosity where radiation pressure stops accretion", exp: "L_Edd ≈ 1.3 × 10³⁸ (M/M☉) erg/s — outward radiation pressure balances gravity on the infalling gas." },
      { q: "Which are the three explanations for a ULX's luminosity?", opts: ["Intermediate-mass black hole, super-Eddington accretion, or beaming", "Supernova, pulsar, or quasar", "Dark matter, cosmic rays, or neutrinos", "Merger, collapse, or disruption"], ans: "Intermediate-mass black hole, super-Eddington accretion, or beaming", exp: "Either a bigger black hole, accretion above the limit, or emission funnelled toward us." },
      { q: "Why does M82 X-2 matter for the ULX debate?", opts: ["It pulses, so at least some ULXs are neutron stars, not black holes", "It is the brightest object in the universe", "It is in the Milky Way", "It proves ULXs are supernovae"], ans: "It pulses, so at least some ULXs are neutron stars, not black holes", exp: "A pulsating ULX shows a stellar-mass object (a neutron star) can exceed its Eddington limit — so ULXs are not all IMBHs." }
    ]
  },
  {
    id: "s16", track: "t4", title: "16. Gravitational waves & multi-messenger astronomy", mins: 10,
    goal: "Read a chirp and recite why GW170817 matters.",
    teach: [
      "Gravitational waves are ripples in spacetime made by accelerating masses with a changing quadrupole — in practice, compact binaries: neutron stars and black holes.",
      "They're detected by laser interferometers (LIGO, Virgo, KAGRA) measuring strains of ~10⁻²¹ — a fractional length change smaller than a proton across kilometres.",
      "The CHIRP: as the waves carry away orbital energy, the orbit shrinks, so both the frequency and the amplitude rise, ending in merger and a short ringdown. The gravitational-wave frequency is twice the orbital frequency.",
      "What the waveform gives you: the masses (chirp mass), the distance (amplitude), and the orientation. Distance straight from a waveform = a STANDARD SIREN, no ladder needed.",
      "GW170817 (17 Aug 2017): two neutron stars merged ~40 Mpc (130 Mly) away in the lenticular galaxy NGC 4993. Chirp ~100 s → short GRB (GRB 170817A) just 1.7 s later → kilonova AT 2017gfo over the following days.",
      "Why it's famous: it proved neutron-star mergers power short gamma-ray bursts, confirmed they forge heavy r-process elements (gold, platinum, lanthanides), measured the Hubble constant independently, and showed gravity travels at the speed of light.",
      "Other messengers: NEUTRINOS — nearly massless, escape instantly, travel straight (so they point back at their source); COSMIC RAYS — charged, so magnetic fields scramble their directions."
    ],
    check: [
      { q: "In a chirp, why do frequency and amplitude rise together?", opts: ["The orbit shrinks as gravitational waves carry energy away", "The objects gain mass", "The detector amplifies the signal", "The waves are redshifted"], ans: "The orbit shrinks as gravitational waves carry energy away", exp: "Energy loss shrinks the orbit, which speeds up the orbital frequency; closer, faster masses also radiate more strongly." },
      { q: "What did GW170817 prove about short gamma-ray bursts?", opts: ["They are produced by neutron-star mergers", "They come from collapsing massive stars", "They are caused by black holes eating stars", "They are an artifact of the detectors"], ans: "They are produced by neutron-star mergers", exp: "GRB 170817A arrived 1.7 s after the merger — the long-suspected link, confirmed." },
      { q: "What is a kilonova and what does it make?", opts: ["The glow of radioactive r-process ejecta, making gold and platinum", "An explosion ten times brighter than a supernova", "The flash when a star is tidally disrupted", "The merger of two black holes"], ans: "The glow of radioactive r-process ejecta, making gold and platinum", exp: "Neutron-rich ejecta build heavy nuclei by rapid neutron capture; their decay powers the optical/IR transient." },
      { q: "Why do neutrinos point back to their source while cosmic rays don't?", opts: ["Neutrinos are neutral; cosmic rays are charged and get deflected by magnetic fields", "Neutrinos are faster", "Cosmic rays are absorbed by dust", "Neutrinos are only made in the Milky Way"], ans: "Neutrinos are neutral; cosmic rays are charged and get deflected by magnetic fields", exp: "Neutral particles travel in straight lines; charged particles spiral through Galactic magnetic fields, losing directional information." }
    ],
    link: { tab: "graphs", text: "Drill GW chirps →" }
  },
  {
    id: "s17", track: "t4", title: "17. DSO bootcamp: the normal galaxies", mins: 10,
    goal: "Recognize the four 'normal' galaxies by sight and by number.",
    teach: [
      "M31 (Andromeda) — 2.5 Mly, SA(s)b, mag +3.4, naked eye. Two dark dust lanes, tilted disk, companions M32 & M110. Hubble's Cepheids proved galaxies are separate 'island universes'. Approaching us at ~110 km/s; merges with the Milky Way in ~4–5 Gyr.",
      "Sombrero (M104) — ~31 Mly, Sa/S0 (classification debated), mag +8.0. Looks exactly like a hat: brilliant bulge + razor-thin dust ring + smooth halo. SMBH ~10⁹ M☉ and ~2,000 globular clusters (Milky Way has ~150) → an accretion-built halo.",
      "M51 (Whirlpool) — ~23–25 Mly, SA(s)bc, mag +8.4. Face-on two-arm grand-design spiral with companion NGC 5195 parked on one arm; the interaction amplified the arms. Hosted SN 2011dh (Type IIb).",
      "NGC 4536 — ~50 Mly, SAB(rs)bc, mag +10.3. Patchy multi-arm spiral. Two claims to fame: HST Cepheid measurements AND SN 1981B (Type Ia) — it's a calibration rung of the ladder.",
      "Sight-ID drill: tilted glow with two companions = M31 · hat = Sombrero · face-on spiral with a small companion on an arm = M51 · ordinary patchy spiral = NGC 4536."
    ],
    check: [
      { q: "Which galaxy did Hubble use Cepheids to prove was outside the Milky Way?", opts: ["M31", "Sombrero", "M51", "NGC 4536"], ans: "M31", exp: "Hubble resolved Cepheids in M31 in 1923–24 and applied the period–luminosity relation." },
      { q: "You see a bright bulge crossed by a thin dark dust ring, shaped like a hat. Which object?", opts: ["Sombrero Galaxy (M104)", "M31", "Cartwheel", "M82"], ans: "Sombrero Galaxy (M104)", exp: "That dust lane plus the huge bulge is the Sombrero's signature; it also has an unusually rich globular cluster system." },
      { q: "Why are M51's spiral arms so strong?", opts: ["Tidal interaction with its companion NGC 5195", "It has an unusually large bar", "It is the nearest galaxy", "It is edge-on"], ans: "Tidal interaction with its companion NGC 5195", exp: "The companion's pull drove a strong density wave — a grand-design spiral." },
      { q: "NGC 4536 is on the list because it calibrates:", opts: ["Both Cepheid distances and Type Ia supernovae", "Only parallax", "The Hubble constant by itself", "Gravitational-wave distances"], ans: "Both Cepheid distances and Type Ia supernovae", exp: "HST Cepheids there, plus SN 1981B (Type Ia) — it ties two rungs of the ladder together." }
    ],
    gallery: ["m31", "sombrero", "m51", "ngc4536"]
  },
  {
    id: "s18", track: "t4", title: "18. DSO bootcamp: starbursts & mergers", mins: 12,
    goal: "Recognize the seven burst/collision objects and state the mechanism for each.",
    teach: [
      "NGC 1569 — ~11 Mly, IBm dwarf irregular starburst in Camelopardalis. Two super star clusters (A and B), Hα filaments venting gas, member of the IC 342 group. One of the nearest starbursts.",
      "MCG+07-33-027 — ~330 Mly, Sa spiral in Hercules. A STABBURST WITH NO COMPANION, ~100,000 ly across. The odd one out: bursts normally need a trigger.",
      "M82 — ~12 Mly, edge-on starburst ('Cigar Galaxy') in Ursa Major, triggered by an encounter with M81. Superwind of hot gas and Hα filaments above and below the disk. Very bright in IR. Hosts ULXs X-1 (IMBH candidate, 62-day orbit) and X-2 (a ULX pulsar = neutron star), plus SN 2014J (Type Ia, heavily dust-reddened).",
      "Antennae (NGC 4038/4039) — ~45–65 Mly in Corvus. Two spirals mid-merger with two long TIDAL TAILS; the collision triggered a burst of thousands of young clusters. Destiny: one elliptical remnant.",
      "Arp 143 (NGC 2444 + NGC 2445) — ~190–200 Mly in Lynx. Head-on collision made a TRIANGULAR/ring-shaped burst of star formation in the gas-rich galaxy while the gas-poor companion sits smooth and yellow beside it.",
      "Arp 147 (IC 298) — ~430–440 Mly in Cetus. A spiral punched by an elliptical produced a blue star-forming RING ~30,000 ly across (system ~115,000 ly), expanding at ~225 km/s. Chandra found nine X-ray-bright black holes in the ring — the 'ring of black holes'.",
      "Cartwheel — ~500 Mly in Sculptor. The textbook 'bullseye' ring galaxy: outer ring + inner ring + spokes, made when a smaller galaxy plunged through the disk. Full of ULXs in the ring.",
      "One-sentence rule for all seven: something drove gas inward and compressed it, and the burst that followed left behind clusters, supernovae, superwinds and compact objects."
    ],
    check: [
      { q: "Which object is an edge-on starburst with a superwind and two famous ULXs?", opts: ["M82", "NGC 1569", "Arp 143", "Sombrero"], ans: "M82", exp: "M82 — the Cigar Galaxy: plumes of hot gas out of the disk, plus X-1 (IMBH candidate) and X-2 (a pulsating ULX)." },
      { q: "Which two objects are ring galaxies made by head-on collisions?", opts: ["Cartwheel and Arp 147", "M51 and M31", "NGC 1569 and M82", "Sombrero and NGC 4536"], ans: "Cartwheel and Arp 147", exp: "Both are 'bullseye' collisional rings; Arp 147's ring is expanding at ~225 km/s." },
      { q: "What are the nine X-ray sources in Arp 147's ring?", opts: ["Black holes and neutron stars in X-ray binaries", "Nine supernovae going off now", "Nine globular clusters", "Nine background quasars"], ans: "Black holes and neutron stars in X-ray binaries", exp: "Remnants of the massive stars made in the collision-driven burst — that's why it's called the ring of black holes." },
      { q: "Which starburst is famous for having NO companion?", opts: ["MCG+07-33-027", "M82", "NGC 1569", "Antennae"], ans: "MCG+07-33-027", exp: "It appears isolated at ~330 Mly, which is unusual — starbursts are usually triggered by an interaction." },
      { q: "SN 2014J was:", opts: ["A Type Ia supernova in M82", "The supernova that made the Crab Nebula", "A tidal disruption event", "A gamma-ray burst in the Antennae"], ans: "A Type Ia supernova in M82", exp: "One of the nearest Type Ia events of the modern era, heavily reddened by dust — great for studying dust and SN Ia physics." }
    ],
    gallery: ["m82", "antennae", "cartwheel", "arp147"]
  },
  {
    id: "s19", track: "t4", title: "19. DSO bootcamp: the odd ones", mins: 10,
    goal: "Handle the three objects that aren't 'a galaxy with a shape'.",
    teach: [
      "GW170817 — not a galaxy at all: an EVENT. Two neutron stars merged ~130 Mly (40 Mpc) away in the lenticular galaxy NGC 4993 (Hydra). ~100 s chirp → short GRB 1.7 s later → kilonova. You identify it by the chirp plot or an artist's impression, not a photo.",
      "Terzan 5 — a GLOBULAR CLUSTER in Sagittarius, in the Galactic bulge, 5.9–6.6 kpc (~19,000–22,000 ly) away, heavily hidden by dust (so it's studied in IR and radio). It has several stellar populations with very different ages and metallicities, so it's probably the stripped nucleus of a cannibalized dwarf galaxy, not a true globular cluster. It holds the record for millisecond pulsars (49 known as of 2024) and is packed with X-ray binaries.",
      "NGC 4536 — included again here because it's the least photogenic object on the list: just an ordinary-looking spiral whose importance is entirely about calibration (Cepheids + SN 1981B). If a test asks 'which object calibrates the distance ladder?', this is it.",
      "Exam instinct: GW170817 = the only one with no picture (identify by chirp/host), Terzan 5 = the only star cluster (identify by the dense ball of stars + pulsar facts), MCG+07-33-027 = the lone starburst, NGC 4536 = the calibration spiral."
    ],
    check: [
      { q: "In which galaxy did GW170817 occur, and how far away?", opts: ["NGC 4993, about 130 million ly", "M82, about 12 million ly", "NGC 4536, about 50 million ly", "The Milky Way bulge"], ans: "NGC 4993, about 130 million ly", exp: "A lenticular galaxy in Hydra at ~40 Mpc ≈ 130 Mly." },
      { q: "Why do astronomers think Terzan 5 is not a normal globular cluster?", opts: ["It contains several stellar populations with very different ages and metallicities", "It is outside the Milky Way", "It has no stars", "It is younger than 1 million years"], ans: "It contains several stellar populations with very different ages and metallicities", exp: "Normal globular clusters are essentially single-aged and single-metallicity; Terzan 5 is probably a stripped dwarf-galaxy nucleus." },
      { q: "Which object on the list is a globular cluster rather than a galaxy?", opts: ["Terzan 5", "NGC 1569", "Arp 143", "Sombrero"], ans: "Terzan 5", exp: "It lives in the Milky Way's bulge, ~19,000–22,000 ly away, and holds the record for millisecond pulsars." },
      { q: "Which object would you identify from a chirp plot rather than a photograph?", opts: ["GW170817", "Cartwheel", "M31", "Terzan 5"], ans: "GW170817", exp: "It's a gravitational-wave event: the chirp (rising frequency and amplitude) is the data, and the host galaxy just looks like a plain elliptical." }
    ],
    gallery: ["gw170817", "terzan5", "ngc4536"]
  }
];
