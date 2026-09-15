/* 2027 Science Olympiad Astronomy C — DSO deck
   Topic: stellar evolution in NORMAL & STARBURST GALAXIES (rules §3.c, 13 objects).
   Images are real NASA/ESA/ESO/STScI/Chandra/Hubble/Subaru releases, saved locally. */

const DSO = [
  {
    id: "m31",
    name: "Andromeda Galaxy (M31)",
    aka: "M31, NGC 224, the Great Andromeda Nebula",
    type: "Spiral galaxy SA(s)b — the nearest large normal galaxy",
    con: "Andromeda",
    dist: "~2.5 million ly (≈765 kpc)",
    radec: "RA 00h 42m 44s   Dec +41° 16′ 09″",
    mag: "+3.4 (naked eye, from dark skies)",
    img: "images/m31.jpg",
    tag: "Normal galaxy",
    idCues: [
      "Giant elongated glowing smudge, clearly tilted (not face-on), with two dark dust lanes running along it",
      "Two small fuzzy companions sitting right next to it (M32 and M110)",
      "Individual stars resolved in deep images; pink H II region knots in the arms"
    ],
    facts: [
      "Largest galaxy in the Local Group; ~2.5 Mly away and approaching the Milky Way at ~110 km/s — we merge in ~4–5 Gyr.",
      "The baseline 'normal' galaxy: a quiescent disk, steady modest star formation (~1 M☉/yr), not a starburst.",
      "Hubble found Cepheid variables here in 1923–24 and proved spiral nebulae are separate galaxies — the birth of extragalactic astronomy.",
      "Central supermassive black hole ≈1–2 × 10⁸ M☉; it has a double nucleus (an eccentric disk of stars around the BH).",
      "Contains both populations: young blue stars + H II regions in the disk (Pop I), old red stars, globular clusters and RR Lyrae in the bulge/halo (Pop II)."
    ],
    qa: [
      ["Why is M31 historically important for distances?", "Hubble resolved Cepheid variables in it (1923–24) and used the period–luminosity relation to show it lies far outside the Milky Way."],
      ["Is it a starburst?", "No — it is a normal, quiescent spiral forming stars at a modest, sustainable rate."],
      ["What will happen to it?", "It is blueshifted (approaching at ~110 km/s); it will collide and merge with the Milky Way in ~4–5 billion years."]
    ]
  },
  {
    id: "sombrero",
    name: "Sombrero Galaxy (M104)",
    aka: "M104, NGC 4594",
    type: "Lenticular/early-type spiral (Sa or S0 — classification still debated)",
    con: "Virgo",
    dist: "~31 million ly (≈9.5 Mpc)",
    radec: "RA 12h 39m 59s   Dec −11° 37′ 23″",
    mag: "+8.0",
    img: "images/sombrero.jpg",
    tag: "Normal galaxy",
    idCues: [
      "Unmistakable hat: a huge, brilliant white bulge crossed by a razor-thin dark dust ring",
      "Smooth, puffy halo of old stars; very little obvious spiral structure or pink star-forming knots",
      "Dozens of faint dots sprinkled around it = its globular cluster system"
    ],
    facts: [
      "Huge bulge + prominent dust lane + a very large, smooth stellar halo, viewed ~6° from edge-on.",
      "Hosts a supermassive black hole of ~10⁹ M☉ — one of the most massive in the nearby universe — and a surprisingly small/dim disk for its mass.",
      "Has ~2,000 globular clusters (Milky Way has ~150), evidence of an violent accretion/merger history.",
      "Red, old stellar population: little gas, little current star formation — a 'normal' but quiescent galaxy.",
      "Hubble/Spitzer data suggest it may really be a giant elliptical with an embedded disk, which is why its classification is argued over."
    ],
    qa: [
      ["What is the dark band across it?", "A ring of cold dust in the plane of the disk, seen nearly edge-on, silhouetted against the bright bulge."],
      ["Why do the many globular clusters matter?", "They trace past mergers/accretion — this halo was built by cannibalizing smaller galaxies."]
    ]
  },
  {
    id: "m51",
    name: "M51 (Whirlpool Galaxy)",
    aka: "M51a, NGC 5194 (companion NGC 5195), Arp 85",
    type: "Grand-design spiral SA(s)bc, interacting",
    con: "Canes Venatici",
    dist: "~23–25 million ly (≈7–8 Mpc)",
    radec: "RA 13h 29m 53s   Dec +47° 11′ 43″",
    mag: "+8.4",
    img: "images/m51.jpg",
    tag: "Interaction",
    idCues: [
      "Textbook face-on two-arm spiral — the arms are clean, bright, and sweep right around",
      "A small, compact companion galaxy (NGC 5195) parked at the end of one arm, touching it",
      "Arms are studded with pink H II regions and dark dust; the disk looks 'compressed'"
    ],
    facts: [
      "The classic example of a tidal interaction amplifying spiral structure: the passage of NGC 5195 drove a density wave that made the arms exceptionally strong.",
      "Grand-design (two-arm) spirals like this are often interaction-driven; compressed gas → enhanced star formation along the arms.",
      "Hosted SN 2011dh, a Type IIb core-collapse supernova from a massive star.",
      "Still a 'normal' star-forming spiral — this is interaction-enhanced star formation, not a full starburst."
    ],
    qa: [
      ["Why are M51's arms so prominent?", "The tidal interaction with NGC 5195 compressed the gas and drove a strong spiral density wave."],
      ["What kind of supernova did it host in 2011?", "SN 2011dh, a Type IIb — core collapse of a massive star."]
    ]
  },
  {
    id: "ngc4536",
    name: "NGC 4536",
    aka: "—",
    type: "Weakly barred spiral SAB(rs)bc — a normal star-forming galaxy",
    con: "Virgo (Virgo Cluster outskirts)",
    dist: "~50 million ly (≈15 Mpc)",
    radec: "RA 12h 34m 27s   Dec +02° 11′ 16″",
    mag: "+10.3",
    img: "images/ngc4536.jpg",
    tag: "Normal galaxy",
    idCues: [
      "Multi-arm ('flocculent-ish') spiral with patchy, ragged arms rather than two clean ones",
      "Pink H II knots and dust lanes scattered through the disk",
      "Looks like an ordinary star-forming spiral — no tails, no ring, no companion"
    ],
    facts: [
      "On the list because it is a rung of the distance ladder: HST measured Cepheids here (Key Project / SH0ES) to anchor extragalactic distances.",
      "It also hosted SN 1981B, a Type Ia supernova — one of the well-observed SNe Ia used to calibrate their peak luminosity.",
      "So one galaxy ties together two rungs: Cepheids (Pop I, young) and Type Ia supernovae (old progenitors).",
      "Otherwise a fairly normal spiral: ongoing star formation at a modest rate."
    ],
    qa: [
      ["Why does this galaxy matter for cosmology?", "Cepheid measurements here calibrate the period–luminosity relation at larger distances, and its Type Ia SN (1981B) helps calibrate SNe Ia as standard candles."],
      ["Is it a starburst?", "No — it is a normal spiral with steady star formation."]
    ]
  },
  {
    id: "mcg0733",
    name: "MCG+07-33-027",
    aka: "PGC 56779",
    type: "Isolated spiral (Sa) with a starburst",
    con: "Hercules",
    dist: "~330 million ly",
    radec: "RA ~16h 02m   Dec ~+39° (Hercules)",
    mag: "≈ +14",
    img: "images/mcg0733027.jpg",
    tag: "Starburst",
    idCues: [
      "A compact spiral whose disk and arms are littered with bright BLUE clumps and knots (young massive star clusters)",
      "No companion or tidal tail anywhere in the frame — it looks alone",
      "Visible dust and a bright, somewhat chaotic inner disk"
    ],
    facts: [
      "The odd one out: a starburst galaxy with no interacting companion. Starbursts are almost always triggered by collisions or close encounters, but this one appears isolated.",
      "Its star-formation rate is far above that of a normal spiral of its mass — it is burning through its gas supply quickly.",
      "Diameter ~100,000 ly, similar to the Milky Way, yet forming stars much faster.",
      "Used as a test case: how do you drive a starburst without a merger? (Internal instabilities, gas accretion from the intergalactic medium, or a past minor merger are candidate explanations.)"
    ],
    qa: [
      ["Why is this object unusual?", "It is a starburst galaxy that appears isolated — most starbursts are triggered by an interaction or merger."],
      ["What would you look for to decide if it really is isolated?", "Tidal features, nearby companions at similar redshift, disturbed HI gas, or a past-merger signature in its star-formation history."]
    ]
  },
  {
    id: "ngc1569",
    name: "NGC 1569",
    aka: "Arp 210, IC 2065 (in the IC 342 group)",
    type: "Dwarf irregular starburst (IBm)",
    con: "Camelopardalis",
    dist: "~11 million ly (≈2.9–3.4 Mpc)",
    radec: "RA 04h 30m 49s   Dec +64° 50′ 53″",
    mag: "≈ +11",
    img: "images/ngc1569.jpg",
    tag: "Starburst",
    idCues: [
      "Small, lumpy, irregular blob — no spiral arms, no obvious symmetry",
      "Two very bright compact knots in the middle = super star clusters A and B",
      "Red, filamentary Hα streams/chimneys pouring out of the disk (outflowing gas)"
    ],
    facts: [
      "One of the nearest starburst galaxies, a dwarf with a star-formation rate wildly disproportionate to its size.",
      "Contains two super star clusters (SSC A and SSC B), each with masses of order 10⁶ M☉ — the kind of object that may evolve into a globular cluster.",
      "Its starburst is driving a galactic wind: supernovae and stellar winds vent hot gas out through 'chimneys', traced by Hα filaments and X-ray emission.",
      "Member of the IC 342 galaxy group; interaction with a gas-rich companion is the likely trigger.",
      "Hubble resolved its individual stars, showing the burst has been going for tens to ~100 Myr — starbursts are short-lived phases."
    ],
    qa: [
      ["What makes it a starburst rather than just star-forming?", "Its star-formation rate per unit mass is enormous — it would exhaust its gas in far less than a Hubble time."],
      ["What are the two bright knots?", "Super star clusters — extremely dense, massive young clusters of thousands of hot stars."],
      ["What are the red filaments?", "Ionized gas outflows (a superwind) driven by the combined winds and supernovae of the starburst."]
    ]
  },
  {
    id: "antennae",
    name: "Antennae Galaxies",
    aka: "NGC 4038 / NGC 4039, Arp 244, the Ring Tail Galaxy",
    type: "Pair of colliding spiral galaxies — merger-induced starburst",
    con: "Corvus",
    dist: "~45–65 million ly (≈19–22 Mpc)",
    radec: "RA 12h 01m 53s   Dec −18° 52′ 03″",
    mag: "+10.3",
    img: "images/antennae.jpg",
    tag: "Interaction",
    idCues: [
      "Two bright messy cores joined by a dust-choked overlap region",
      "Two long, curved tails of stars and gas sweeping out to either side — the 'antennae'",
      "Blue knots and pink H II regions concentrated in the overlap region"
    ],
    facts: [
      "The textbook merging pair: two gas-rich spirals caught mid-collision; the long tails are TIDAL features flung out by the encounter.",
      "Gas driven inward by the collision has triggered an intense starburst, creating thousands of young massive star clusters (future globular clusters).",
      "Chandra X-ray images show huge clouds of shock-heated gas plus many X-ray binaries and ULXs — the starburst leaves compact remnants behind.",
      "The end state: the two spirals will settle into a single elliptical-like remnant; mergers transform morphology.",
      "Demonstrates the core idea of the 2027 topic: interactions drive star formation and change the stellar population of a galaxy."
    ],
    qa: [
      ["What are the two long tails?", "Tidal tails — stars and gas stripped out by gravitational torques during the encounter."],
      ["Why is star formation so intense here?", "The collision drives gas inward, compressing it and triggering a burst of cluster formation."],
      ["What will the system become?", "A single, roughly elliptical merger remnant."]
    ]
  },
  {
    id: "arp143",
    name: "Arp 143",
    aka: "NGC 2444 + NGC 2445 (member of group LGG 148)",
    type: "Head-on collision between two ring/interacting galaxies",
    con: "Lynx",
    dist: "~190–200 million ly (≈60 Mpc)",
    radec: "RA 07h 46m 57s   Dec +39° 00′ 51″",
    mag: "≈ +13",
    img: "images/arp143.jpg",
    tag: "Interaction",
    idCues: [
      "A lopsided, roughly TRIANGULAR wedge of bright blue star-forming clumps (NGC 2445)",
      "Next to it, a smooth, pale, featureless oval galaxy (NGC 2444) with no blue knots",
      "A faint bridge/stream of gas and stars between the two"
    ],
    facts: [
      "A head-on collision: the gas-rich galaxy NGC 2445 punched through (or past) the gas-poor galaxy NGC 2444.",
      "The collision stripped and compressed NGC 2445's gas into the triangular/ring-shaped star-forming region we see — a collisional ring caught mid-formation.",
      "NGC 2444 appears smooth and yellow/red because it lost or lacked cold gas: no new star formation — a nice study in contrast.",
      "The pair will likely merge into a single galaxy in the future.",
      "Hubble imaged it in 2022; the 'space triangle' shape is the giveaway."
    ],
    qa: [
      ["What created the triangular shape?", "The head-on collision stripped gas from NGC 2445 and compressed it into a ring/triangle of runaway star formation."],
      ["Why is the companion yellow and smooth while the other is blue and clumpy?", "One still has cold gas to form hot young stars; the other's gas was stripped and it is left with an old, red stellar population."]
    ]
  },
  {
    id: "arp147",
    name: "Arp 147",
    aka: "IC 298, the 'ring of black holes' pair",
    type: "Collisional ring galaxy + elliptical intruder",
    con: "Cetus",
    dist: "~430–440 million ly (≈133 Mpc)",
    radec: "RA 03h 11m 19s   Dec +01° 18′ 53″",
    mag: "≈ +15",
    img: "images/arp147.jpg",
    tag: "Interaction / Compact objects",
    idCues: [
      "A BLUE RING of star formation with an apparently empty middle",
      "A compact red/orange elliptical blob sitting just off the edge of the ring (the intruder)",
      "In Chandra composites, pink/magenta X-ray points are sprinkled around the ring"
    ],
    facts: [
      "A spiral galaxy was struck nearly head-on by an elliptical galaxy; the impact sent a density wave outward, making an expanding ring of star formation ~30,000 ly across (system spans ~115,000 ly).",
      "The ring is expanding at ~225 km/s with very little rotation (~47 km/s) — that's the signature of a collisional ring, not a spiral arm.",
      "Chandra found nine bright X-ray sources in the ring: black holes (and neutron stars) of ~10–20 M☉ in X-ray binaries — the massive stars born in the burst have already died.",
      "It's the punchline of 'stellar evolution in starbursts': a burst of massive stars → supernovae → compact objects and ULXs.",
      "The intruder elliptical is the smaller, redder object on the edge of the ring."
    ],
    qa: [
      ["What are the nine X-ray sources in the ring?", "Accreting black holes (and neutron stars) in X-ray binaries — remnants of the massive stars formed in the collision-driven starburst."],
      ["How can you tell the ring was made by a collision?", "It is expanding radially (~225 km/s) with almost no rotation — a spiral arm would rotate with the disk instead."]
    ]
  },
  {
    id: "cartwheel",
    name: "Cartwheel Galaxy",
    aka: "ESO 350-40, PGC 2248",
    type: "Collisional ring galaxy (lenticular progenitor) — starburst ring",
    con: "Sculptor",
    dist: "~500 million ly (≈150 Mpc)",
    radec: "RA 00h 37m 41s   Dec −33° 42′ 59″",
    mag: "≈ +15",
    img: "images/cartwheel.jpg",
    img2: "images/cartwheel-jwst.jpg",
    tag: "Interaction / Starburst",
    idCues: [
      "A perfect wagon wheel: bright outer ring, a smaller inner ring, and 'spokes' between them",
      "The outer ring is blue-white with pink star-forming knots; the middle is emptier and yellower",
      "Two small companion galaxies sit nearby"
    ],
    facts: [
      "A 'bullseye' collision: a smaller galaxy plunged straight through the center of a gas-rich disk, sending a density wave outward like a ripple in a pond.",
      "That wave compressed gas as it went, so the ring is a propagating starburst ~150,000 ly across; the spokes are dust/star-forming filaments linking the inner and outer rings.",
      "Chandra finds many ultra-luminous X-ray sources (ULXs) in the ring — black holes and neutron stars left behind by the burst.",
      "JWST (2022) resolved individual star-forming clumps in the ring; the ring is still expanding.",
      "Ring galaxies are a clean laboratory for collisional triggering: the geometry dates the collision."
    ],
    qa: [
      ["What made the ring?", "A smaller galaxy passed through the disk head-on, driving an outward density wave that triggered star formation in a ring."],
      ["Why is the ring blue and full of X-ray sources while the center is not?", "The ring is where gas is being compressed into young massive stars; those stars die quickly as supernovae, leaving X-ray binaries and ULXs."]
    ]
  },
  {
    id: "m82",
    name: "M82 (X-1, X-2, SN 2014J)",
    aka: "Messier 82, NGC 3034, the Cigar Galaxy",
    type: "Edge-on starburst galaxy (Irregular II / disturbed disk) hosting ULXs",
    con: "Ursa Major",
    dist: "~12 million ly (≈3.5 Mpc)",
    radec: "RA 09h 55m 52s   Dec +69° 40′ 47″",
    mag: "+8.4",
    img: "images/m82.jpg",
    tag: "Starburst / Compact objects",
    idCues: [
      "A narrow, edge-on cigar-shaped disk with a mottled, dusty center",
      "Red/orange filaments and plumes of gas blasting out ABOVE and BELOW the plane (the superwind)",
      "In X-ray composites, a huge blue/purple halo of hot gas extending perpendicular to the disk"
    ],
    facts: [
      "The nearest and most famous starburst: star formation is concentrated in the central few hundred parsecs, at a rate ~10× the Milky Way's.",
      "The burst was triggered by a tidal encounter with M81 (in the M81 group) a few hundred Myr ago.",
      "Superwind: the combined energy of supernovae and stellar winds drives hot (~10⁷ K) gas out of the disk, seen in X-rays, plus Hα filaments — this is how starbursts expel gas and enrich the intergalactic medium.",
      "M82 X-1: the brightest ultra-luminous X-ray source in the galaxy, L_X ~10⁴⁰–10⁴¹ erg/s with a 62-day orbital period — a leading INTERMEDIATE-MASS BLACK HOLE candidate (10²–10⁴ M☉), or a stellar-mass BH accreting above its Eddington limit.",
      "M82 X-2: another ULX — and the first discovered ULX pulsar, proving at least some ULXs are neutron stars, not black holes (they can exceed their Eddington limit).",
      "SN 2014J (Jan 2014): a Type Ia supernova, one of the nearest of the modern era, heavily obscured by dust — used to study SN Ia physics and interstellar dust.",
      "M82 is very bright in the infrared: dust absorbs the starburst's ultraviolet light and re-radiates it."
    ],
    qa: [
      ["What is a ULX, and why does M82 have them?", "An ultra-luminous X-ray source: an off-nucleus point source brighter than ~10³⁹ erg/s, exceeding the Eddington limit of a stellar-mass black hole. Starbursts are full of them because they are full of young massive binaries."],
      ["What is the argument over M82 X-1?", "Its luminosity implies an intermediate-mass black hole (10²–10⁴ M☉), but it could also be a stellar-mass black hole accreting super-Eddington and/or beamed toward us."],
      ["What are the plumes above and below the disk?", "A superwind — hot gas venting out of the starburst region, driven by supernovae and stellar winds."],
      ["What was SN 2014J?", "A Type Ia supernova (exploding white dwarf) in M82 — one of the closest in decades, useful because it is bright but heavily reddened by dust."]
    ]
  },
  {
    id: "gw170817",
    name: "GW170817",
    aka: "the golden merger; host galaxy NGC 4993; EM counterparts GRB 170817A and AT 2017gfo",
    type: "Binary neutron star merger — first multi-messenger GW + light event",
    con: "Hydra (in the lenticular galaxy NGC 4993)",
    dist: "~130 million ly (≈40 Mpc)",
    radec: "host NGC 4993: RA 13h 09m 48s   Dec −23° 22′ 02″",
    mag: "kilonova peaked near mag +17",
    img: "images/gw170817.jpg",
    img2: "images/gw170817-art.jpg",
    tag: "Multi-messenger",
    idCues: [
      "There is no 'pretty picture' of the event — you identify it by DATA: the LIGO 'chirp' (frequency and amplitude rising together over ~100 s, then cutting off)",
      "Or by the artist's impression: two small neutron stars spiralling together with a jet and a hot, expanding debris cloud",
      "Or by the host image: a plain, smooth elliptical/lenticular galaxy (NGC 4993) with a tiny marked point source"
    ],
    facts: [
      "Detected 17 August 2017 by Advanced LIGO (Hanford + Livingston) and Advanced Virgo; the chirp lasted ~100 s.",
      "It was a BINARY NEUTRON STAR merger — far lower mass than the black-hole mergers LIGO had seen, so the signal spent much longer in the detector band.",
      "1.7 s after the merger, Fermi and INTEGRAL saw a SHORT GAMMA-RAY BURST (GRB 170817A) — direct proof that NS mergers power short GRBs.",
      "Hours later, telescopes found the KILONOVA AT 2017gfo: a fast, blue-then-red optical/IR transient powered by radioactive decay of r-process nuclei — this is where gold, platinum and lanthanides are forged.",
      "Because the GW signal gives the distance directly and the host galaxy gives the redshift, it is a 'standard siren' — an independent measurement of the Hubble constant.",
      "It also constrained the speed of gravity (equal to c), the neutron-star equation of state, and how the heavy elements are made."
    ],
    qa: [
      ["What merged, and how do we know?", "Two neutron stars. The GW waveform's chirp mass and the long, ~100 s inspiral match a low-mass (neutron-star) binary, and the kilonova/GRB counterparts confirmed it."],
      ["What is a kilonova and why is it important?", "The optical/IR glow from radioactive decay of r-process elements ejected in the merger — it proves NS mergers are a major source of the heaviest elements (gold, platinum, uranium)."],
      ["Why was this event called multi-messenger?", "It was seen in gravitational waves AND across the electromagnetic spectrum (gamma rays → radio) from the same object."],
      ["How does it give the Hubble constant?", "The GW amplitude gives a direct luminosity distance (standard siren); the host galaxy's redshift gives recession velocity; combine them in v = H₀d."]
    ]
  },
  {
    id: "terzan5",
    name: "Terzan 5",
    aka: "Ter 5, Terzan 5 = the 'imposter' globular cluster",
    type: "Globular cluster (probably a stripped galactic nucleus)",
    con: "Sagittarius (in the Milky Way bulge)",
    dist: "~19,000–22,000 ly (5.9–6.6 kpc)",
    radec: "RA 17h 48m 05s   Dec −24° 46′ 48″",
    mag: "≈ +13.9 (heavily obscured)",
    img: "images/terzan5.jpg",
    tag: "Cluster / Compact objects",
    idCues: [
      "A dense ball of stars — no galaxy shape, no dust lane, no arms",
      "Stars of mixed colors packed tightly, denser toward the center",
      "Usually shown in infrared or radio because dust in the bulge hides it in visible light"
    ],
    facts: [
      "It sits in the Milky Way's bulge and is heavily obscured by dust (several magnitudes of extinction), so it is studied in the IR and radio.",
      "Unlike a normal globular cluster (one age, one metallicity), Terzan 5 hosts MULTIPLE STELLAR POPULATIONS: a ~12 Gyr metal-poor component and much younger (~4.5–6 Gyr), metal-rich components — a huge age/metallicity spread.",
      "That is why it is thought to be the stripped NUCLEUS of a dwarf galaxy that the Milky Way cannibalized (or a primordial bulge building block) rather than a true globular cluster.",
      "It hosts more millisecond pulsars than any other globular cluster (49 known pulsars as of 2024) — the dense core recycles neutron stars through binary interactions.",
      "It also has the highest stellar interaction rate of any Galactic globular cluster, hence lots of X-ray binaries. Mass ≈ 2 × 10⁶ M☉; very high central density (~10⁶ M☉/pc³)."
    ],
    qa: [
      ["What makes Terzan 5 different from a normal globular cluster?", "It contains multiple stellar populations with very different ages and metallicities; normal globular clusters are essentially single-aged, single-metallicity."],
      ["What do astronomers think it actually is?", "Probably the stripped remnant core of a dwarf galaxy (or an ancient bulge fragment) that merged into the Milky Way — a 'fossil' of galaxy assembly."],
      ["Why so many millisecond pulsars?", "Extreme stellar density means frequent close encounters and binary exchange, so neutron stars get spun up to millisecond periods by accretion far more often than in the disk."]
    ]
  }
];
