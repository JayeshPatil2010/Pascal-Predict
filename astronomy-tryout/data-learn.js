/* 2027 Astronomy C — content modules, equation sheet, diagnostic, free-response cards.
   Topic: stellar evolution in NORMAL & STARBURST GALAXIES (rules §3.a content,
   §3.b math, §3.c objects). */

const MODULES = [
  {
    id: "galaxies",
    title: "1. Galaxies 101 — morphology & classification",
    tag: "Core",
    mins: 10,
    bullets: [
      "Hubble sequence (the 'tuning fork'): ELLIPTICALS (E0 = round → E7 = flattened), LENTICULARS (S0), SPIRALS (Sa→Sb→Sc) and BARRED SPIRALS (SBa→SBb→SBc), plus IRREGULARS (Irr).",
      "Classification tracks physics, not just looks: along Sa→Sc the bulge gets smaller, the arms get more open, the gas fraction and star-formation rate go UP, and the color gets bluer.",
      "Ellipticals: little gas or dust, old red stars (Pop II), random stellar orbits, almost no star formation. They are the products of mergers.",
      "S0/lenticular: a disk and a big bulge but no spiral arms and little gas — a 'retired' spiral.",
      "Irregulars: no symmetry, gas-rich, often starbursting (the Magellanic Clouds, NGC 1569). Many are the result of interactions.",
      "Every big galaxy has: a bulge, a disk (if spiral), a stellar halo, a globular cluster system, and a central supermassive black hole.",
      "Structure tells formation history: a big globular cluster system and a fat halo = lots of past mergers (the Sombrero), while a thin undisturbed disk = a quiet life.",
      "Environment matters: dense clusters are full of gas-poor ellipticals and S0s; the field is full of gas-rich spirals and irregulars."
    ],
    must: [
      "Sa→Sc: smaller bulge, looser arms, more gas, bluer, more star formation.",
      "Ellipticals = old, red, gas-poor, merger products; irregulars = gas-rich and messy.",
      "S0 = disk without arms or gas.",
      "Barred (SB) spirals funnel gas inward and can trigger central star formation.",
      "Morphology + color + spectrum = the age of the stellar population."
    ]
  },
  {
    id: "pops",
    title: "2. Stellar populations, clusters & H-R diagrams",
    tag: "Core",
    mins: 10,
    bullets: [
      "Population I: young, metal-RICH stars (like the Sun), found in disks and spiral arms, includes the massive hot blue stars, open clusters and H II regions.",
      "Population II: old, metal-POOR stars, found in halos, bulges, elliptical galaxies and globular clusters; they host RR Lyrae variables.",
      "(Population III: the hypothetical first, metal-free stars — not observed yet.)",
      "Metallicity is written [Fe/H] = log₁₀(Fe/H) − log₁₀(Fe/H)☉. More generations of star formation = more metals.",
      "Globular clusters: ~10⁴–10⁶ old stars, 10–13 Gyr, strongly concentrated — the fossils of galaxy assembly.",
      "H-R diagram of a cluster: the MAIN-SEQUENCE TURNOFF gives its age (hot, massive stars die first). Old clusters show a red giant branch, horizontal branch and RR Lyrae gap; young clusters show a blue, luminous main sequence.",
      "Integrated light: a galaxy with lots of young massive stars looks BLUE (starburst, spiral arms); one with only old stars looks RED (elliptical, bulge).",
      "Terzan 5 breaks the rule: it has several populations with different ages and metallicities, which is why it is probably a stripped dwarf-galaxy nucleus, not a true globular cluster."
    ],
    must: [
      "Pop I = young, metal-rich, disk/arms, blue; Pop II = old, metal-poor, halo/bulge/GCs, red.",
      "Main-sequence turnoff = age of a cluster.",
      "RR Lyrae = old Pop II tracers; Cepheids = young Pop I tracers.",
      "Blue galaxy = recent star formation; red galaxy = old stars only.",
      "Globular clusters are the fossil record of how a galaxy was assembled."
    ]
  },
  {
    id: "starburst",
    title: "3. Star formation, starbursts & superwinds",
    tag: "Core",
    mins: 10,
    bullets: [
      "A starburst is a galaxy forming stars so fast it will use up its gas in far less than the age of the universe — a short-lived PHASE, not a type.",
      "Scale: the Milky Way makes ~1–3 M☉/yr (normal). Starbursts run from ~10 to several hundred M☉/yr (M82, Arp 220; NGC 1569 is a dwarf doing an outsized burst).",
      "Triggers: galaxy collisions and mergers funnel gas inward; bars and tidal torques do it too; ram pressure and gas accretion can also feed it.",
      "Signatures: strong Hα (ionized gas around massive stars), strong INFRARED (dust heated by young stars and re-radiating), lots of supernovae, X-ray binaries and ULXs, blue colors, super star clusters.",
      "Starbursts make compact remnants fast: massive stars live only a few Myr, so the burst is followed by supernovae, neutron stars and black holes (that's why Arp 147's ring is full of black holes).",
      "Feedback: supernovae and stellar winds drive SUPERWINDS — hot gas venting out of the disk (M82's plumes), which can shut off star formation and enrich the intergalactic medium.",
      "MCG+07-33-027 is the exception that proves the rule: a starburst with no companion, so the trigger must be internal or a past, now-hidden event."
    ],
    must: [
      "Starburst = rate, not a galaxy type: gas used up in ≪ a Hubble time.",
      "Interactions/mergers are the usual trigger; gas gets driven inward and compressed.",
      "Observable signatures: Hα, far-IR, radio (synchrotron from SNe), X-ray binaries/ULXs, blue color.",
      "Massive stars die quickly → SNe → superwinds → feedback that can quench the burst.",
      "A burst leaves behind compact objects: neutron stars, black holes, ULXs."
    ]
  },
  {
    id: "interact",
    title: "4. Interactions, mergers & tidal features",
    tag: "Core",
    mins: 8,
    bullets: [
      "Galaxies grow by merging — this is the 'interactions' part of the rules (tidal disruptions, collisions, mergers).",
      "Tidal features: tails and streams of stars+gas flung out by the encounter (Antennae = the classic pair of tidal tails), bridges between galaxies, and shells/ripples around merger remnants.",
      "Gas behaves differently from stars: it collides, shocks, loses angular momentum and falls to the center → that is what triggers the starburst and feeds the central black hole.",
      "Ring galaxies are the clean case: a small galaxy punches through the middle of a disk and drives an expanding density wave. Cartwheel = the textbook 'bullseye' ring; Arp 147 and Arp 143 = rings caught mid-life.",
      "Outcomes: spiral + spiral → usually an elliptical remnant; minor mergers puff up disks and build halos; repeated mergers build globular cluster systems.",
      "Tidal disruption events (TDEs) are the extreme version: a star wanders too close to a supermassive black hole and is shredded, producing a luminous flare.",
      "Timescales: the encounter itself is ~10⁸ yr; the induced starburst is ~10⁷–10⁸ yr."
    ],
    must: [
      "Tidal tails = stars+gas pulled out during an encounter (Antennae).",
      "Gas falls inward (shocks, loses angular momentum) while stars just get rearranged — that's why mergers ignite star formation.",
      "Ring galaxies come from a head-on 'bullseye' collision (Cartwheel, Arp 147).",
      "Spiral + spiral mergers tend to make ellipticals.",
      "A TDE is a star torn apart by a supermassive black hole."
    ]
  },
  {
    id: "tools",
    title: "5. Tools: spectra, blackbody & redshift",
    tag: "Core",
    mins: 8,
    bullets: [
      "Spectral classes O B A F G K M (hot → cool). O: He II lines; A: strongest hydrogen Balmer lines; G: strong Ca II H&K and metals (Sun = G2V); M: molecular bands (TiO).",
      "Luminosity classes: V = main sequence/dwarf, III = giant, I = supergiant.",
      "Blackbody: hotter → bluer and the peak moves to shorter wavelengths. Wien: λ_max T = 2.898 × 10⁶ nm·K. Stefan–Boltzmann: L = 4πR²σT⁴, so L/L☉ = (R/R☉)²(T/5772)⁴.",
      "Magnitude: m = apparent, M = absolute (at 10 pc); smaller = brighter; 5 mags = ×100; Δm = −2.5 log₁₀(F₁/F₂).",
      "Galaxy spectra: ABSORPTION lines (Ca II, Mg b, Na D, Balmer) come from starlight — they trace the old/metal-rich population; EMISSION lines (Hα 6563 Å, [O III] 5007 Å, [O II]) come from ionized gas around hot massive stars — they trace CURRENT star formation.",
      "Redshift: z = Δλ/λ₀ = v/c for small velocities (c = 3.00 × 10⁵ km/s). Galactic recession velocities come from this, and they feed Hubble's law.",
      "Multi-wavelength: radio → cold HI (21 cm), molecular gas, synchrotron; IR → dust and embedded star formation; optical → stars and Hα; UV → hot massive young stars; X-ray → hot gas, accretion onto compact objects; gamma-ray → the most violent events."
    ],
    must: [
      "OBAFGKM = hot → cool; A = strongest H lines; TiO molecules = M stars.",
      "λ_max T = 2.9 × 10⁶ nm·K and L ∝ R²T⁴.",
      "Emission lines (Hα, [O III]) = ongoing star formation; strong absorption lines = old stellar population.",
      "z = Δλ/λ = v/c (small z).",
      "IR = dust/obscured star formation; X-ray = hot gas and accretion; radio = HI, molecules, synchrotron."
    ]
  },
  {
    id: "candles",
    title: "6. Variables & the distance ladder",
    tag: "Math",
    mins: 10,
    bullets: [
      "Parallax: d(pc) = 1/p(arcsec) — the only direct rung. 1 pc = 3.26 ly.",
      "Distance modulus: m − M = 5 log₁₀(d) − 5, d in pc; invert as d = 10^((m−M+5)/5).",
      "CEPHEIDS: young, massive, metal-rich Pop I supergiants. Periods ~1–100 days, sawtooth light curve (fast rise, slower fall), amplitude ~1 mag. Period–luminosity: M_V = −2.76 log₁₀(P) − 1.40 (P in days). Longer period = more luminous.",
      "RR LYRAE: old, low-mass Pop II horizontal-branch stars. Periods ~0.2–1 day (usually ~0.5 d), amplitude < 1 mag, M_V ≈ +0.6. Found in globular clusters, halos, and old populations — the link between globular clusters and galactic structure.",
      "TYPE Ia SUPERNOVAE: thermonuclear explosion of a white dwarf near the Chandrasekhar limit (1.4 M☉). Peak M_B ≈ −19.3, no hydrogen lines, strong Si II near 615 nm. They occur in old populations too, which is why they work in ellipticals.",
      "SPECTROSCOPIC PARALLAX: get M from a star's spectrum via a calibrated H-R diagram, then use the distance modulus.",
      "The ladder: parallax → Cepheids (calibrate) → Type Ia supernovae → Hubble flow. NGC 4536 sits right in the middle of that chain (Cepheids + SN 1981B)."
    ],
    must: [
      "d = 1/p; m − M = 5 log d − 5; ratio = 10^(0.4Δm).",
      "Cepheid: 1–100 d, M_V = −2.76 log P − 1.40, young Pop I.",
      "RR Lyrae: ~0.5 d, M_V ≈ +0.6, old Pop II, globular clusters.",
      "Type Ia: M_B ≈ −19.3, no H lines, standard candle out to cosmological distances.",
      "Period is the fastest way to tell Cepheid from RR Lyrae."
    ]
  },
  {
    id: "cosmo",
    title: "7. Galaxy distances: Tully–Fisher, Hubble & proper motion",
    tag: "Math",
    mins: 8,
    bullets: [
      "Hubble's law: v = H₀ d with H₀ ≈ 70 km/s/Mpc (67–73 depending on the method). Get v from redshift (v ≈ cz), then d = v/H₀ with d in Mpc.",
      "Because H₀ is in km/s/Mpc: a galaxy receding at 7,000 km/s is at ~100 Mpc ≈ 326 million ly. 1 Mpc = 3.26 million ly.",
      "Example: NGC 4993 (GW170817's host) has cz ≈ 3,300 km/s → d ≈ 47 Mpc ≈ 130–140 Mly.",
      "TULLY–FISHER: for SPIRAL galaxies, luminosity scales with rotation speed — L ∝ v_max⁴ (roughly M_B ≈ −9.95 log₁₀(v_max) + 3.15). Measure the rotation width (HI 21 cm line or an optical rotation curve) → get M → distance modulus → distance. Independent of Cepheids and works much farther out.",
      "(The elliptical equivalent is Faber–Jackson, L ∝ σ⁴, using velocity dispersion.)",
      "PROPER MOTION: the sideways drift on the sky, μ, in arcsec/yr. Transverse speed v_t(km/s) = 4.74 × μ(″/yr) × d(pc). Combine with the radial velocity (Doppler) for the full 3-D space motion — used for stars and clusters in the Milky Way, and for galaxy satellites."
    ],
    must: [
      "v = H₀d, H₀ ≈ 70 km/s/Mpc; d(Mpc) = v(km/s)/70.",
      "Tully–Fisher: L ∝ v_max⁴ for spirals; measure rotation width → luminosity → distance.",
      "v_t = 4.74 μ d (km/s, arcsec/yr, pc).",
      "1 Mpc = 3.26 million ly.",
      "Redshift gives v; Hubble's law turns v into d."
    ]
  },
  {
    id: "orbits",
    title: "8. Orbits: binaries, rotation curves & galaxy masses",
    tag: "Math",
    mins: 8,
    bullets: [
      "Kepler's third law in astronomer's units: M₁ + M₂ = a³/P² (M in M☉, a in AU, P in years). In SI: P² = 4π²a³/[G(M₁+M₂)].",
      "Center of mass: M₁r₁ = M₂r₂, a = r₁ + r₂ → r₁ = a·M₂/(M₁+M₂). The heavier star does the smaller orbit.",
      "Circular orbit speed: v = 2πr/P, and v² = GM/r gives the enclosed mass: M(<r) = v²r/G.",
      "Handy form for galaxies: M(<r)/M☉ ≈ 2.33 × 10⁵ × [v(km/s)]² × [r(kpc)].",
      "ROTATION CURVES: plot orbital speed v against radius r. If all the mass were in the middle, v would fall as 1/√r (Keplerian, like the Solar System). Instead, spiral rotation curves stay FLAT far out — that is the classic evidence for a dark matter halo.",
      "So a flat rotation curve gives: galaxy mass (from v²r/G) and the existence of dark matter. M31 and the Milky Way both show this.",
      "Apply Kepler to 'galactic systems' too: binary galaxy orbits, the M31–Milky Way pair falling together, and the orbits of satellite galaxies and globular clusters."
    ],
    must: [
      "M₁+M₂ = a³/P² (solar masses, AU, years).",
      "M(<r) = v²r/G; flat rotation curve ⇒ dark matter halo.",
      "Keplerian fall-off (v ∝ 1/√r) means mass is centrally concentrated.",
      "Heavier body → smaller orbit about the center of mass.",
      "v = 2πr/P connects an orbit's size and period to its speed."
    ]
  },
  {
    id: "messengers",
    title: "9. Compact objects, ULXs & multi-messenger astronomy",
    tag: "Core",
    mins: 10,
    bullets: [
      "Neutron stars: ~1.4 M☉ squeezed into ~10 km; some appear as pulsars (beamed radio pulses); MILLISECOND pulsars have been spun up by accreting from a companion — dense clusters like Terzan 5 are factories for them.",
      "X-ray binaries: a neutron star or black hole accreting from a companion star; the gas heats to X-ray temperatures. Young, massive systems dominate right after a starburst.",
      "Eddington limit: the luminosity where radiation pressure halts accretion, L_Edd ≈ 1.3 × 10³⁸ (M/M☉) erg/s. A 10 M☉ black hole tops out near 10³⁹ erg/s.",
      "ULX (ultra-luminous X-ray source): an off-nucleus X-ray source above ~10³⁹ erg/s — brighter than a stellar-mass black hole 'should' be. Options: an INTERMEDIATE-MASS black hole (10²–10⁴ M☉), a stellar-mass BH/NS accreting super-Eddington, or beamed emission. M82 X-1 is the leading IMBH candidate; M82 X-2 is a pulsating ULX, i.e. a neutron star — so ULXs are a mixed bag.",
      "GRAVITATIONAL WAVES: ripples in spacetime from accelerating massive objects with a changing quadrupole — compact binary mergers (BNS, NS–BH, BBH). Detected by laser interferometers (LIGO, Virgo, KAGRA) measuring strains of ~10⁻²¹.",
      "The CHIRP: as the orbit shrinks, both the frequency and amplitude rise, ending at merger. The waveform gives the masses, the distance (a 'standard siren'!) and the orientation. The gravitational-wave frequency is twice the orbital frequency.",
      "GW170817 = the template: BNS merger, ~100 s chirp, short GRB 1.7 s later, kilonova from r-process decay (gold, platinum), H₀ from the standard-siren method.",
      "Other messengers: NEUTRINOS (nearly massless, escape instantly from core collapse and the Sun — SN 1987A), COSMIC RAYS (charged, so magnetic fields scramble their direction; made in SNRs and other accelerators)."
    ],
    must: [
      "ULX = off-nucleus X-ray source > 10³⁹ erg/s: IMBH, super-Eddington, or beaming.",
      "Eddington limit ≈ 1.3 × 10³⁸ (M/M☉) erg/s.",
      "Chirp = rising frequency AND amplitude; the waveform encodes mass and distance.",
      "GW170817: NS merger → short GRB + kilonova → gold/platinum + H₀.",
      "Neutrinos point straight back to their source; cosmic rays do not."
    ]
  }
];

/* ---- The short list for the calculator ---- */
const EQUATIONS = [
  { n: "Parallax", e: "d(pc) = 1 / p(arcsec)   |   1 pc = 3.26 ly", u: "The only direct distance; the bottom rung of the ladder.", t: "Parallax is often quoted in milliarcsec (mas) — divide by 1000 first." },
  { n: "Distance modulus", e: "m − M = 5·log₁₀(d) − 5   →   d = 10^((m−M+5)/5)  [pc]", u: "Convert apparent vs absolute magnitude into distance. Used with every standard candle.", t: "d MUST be in parsecs. m = apparent, M = absolute (at 10 pc)." },
  { n: "Magnitude ↔ brightness", e: "Δm = −2.5·log₁₀(F₁/F₂)   →   ratio = 10^(0.4·Δm) = 2.512^Δm", u: "'How many times brighter/fainter?'", t: "Bigger magnitude = fainter. 5 mags = ×100." },
  { n: "Cepheid P–L relation", e: "M_V = −2.76·log₁₀(P) − 1.40   (P in days)", u: "The rung that calibrates everything beyond the Local Group.", t: "If the test gives you constants, use theirs. Cepheids: P = 1–100 d." },
  { n: "Standard candles", e: "RR Lyrae: M_V ≈ +0.6     Type Ia SN: M_B ≈ −19.3 (peak)", u: "Old-population pulsators and exploding white dwarfs.", t: "RR Lyrae periods are ~0.2–1 d; don't confuse them with Cepheids." },
  { n: "Hubble's law", e: "v = H₀·d   →   d(Mpc) = v(km/s) / 70   (H₀ ≈ 70 km/s/Mpc)", u: "Turn a galaxy's recession velocity into a distance.", t: "v in km/s and d in Mpc. Get v from redshift: v ≈ cz. 1 Mpc = 3.26 million ly." },
  { n: "Redshift / Doppler", e: "z = Δλ/λ₀ = v/c   (c = 3.00×10⁵ km/s)", u: "Radial velocity from a spectrum → feeds Hubble's law.", t: "Only valid as v = cz for small z. Redshift = receding." },
  { n: "Tully–Fisher", e: "L ∝ v_max⁴   (≈ M_B = −9.95·log₁₀(v_max) + 3.15)", u: "Distance to a SPIRAL galaxy from its rotation width — works far beyond Cepheids.", t: "Only for spirals. v_max is the flat part of the rotation curve, in km/s." },
  { n: "Kepler's 3rd law", e: "M₁ + M₂ = a³ / P²   (M in M☉, a in AU, P in years)", u: "Total mass of a binary — or of two orbiting galaxies.", t: "It gives the SUM of the masses. a is the semi-major axis of the RELATIVE orbit." },
  { n: "Mass from circular motion", e: "M(<r) = v²r / G   →   M/M☉ ≈ 2.33×10⁵·[v(km/s)]²·[r(kpc)]", u: "Weigh a galaxy from its rotation curve; v = 2πr/P.", t: "Uses SI if you use G = 6.674×10⁻¹¹ (m, kg, s). The shortcut assumes km/s and kpc." },
  { n: "Stefan–Boltzmann & Wien", e: "L/L☉ = (R/R☉)²·(T/5772)⁴      λ_max(nm) = 2.898×10⁶ / T(K)", u: "Radius ↔ temperature ↔ luminosity; peak wavelength ↔ color.", t: "Temperature in KELVIN. Hotter ⇒ SHORTER wavelength peak." },
  { n: "Proper motion", e: "v_t (km/s) = 4.74 · μ(arcsec/yr) · d(pc)", u: "Sideways motion from the drift on the sky; combine with Doppler for full 3-D motion.", t: "μ must be arcsec per YEAR, d in parsecs." },
  { n: "Inverse square", e: "F = L / (4πd²)", u: "Convert between flux and luminosity for any source.", t: "Keep units consistent (meters vs cm)." },
  { n: "Eddington limit (ULXs)", e: "L_Edd ≈ 1.3×10³⁸ · (M/M☉) erg/s", u: "Decide whether a ULX needs an intermediate-mass black hole.", t: "Above ~10³⁹ erg/s, a stellar-mass (~10 M☉) black hole is not enough without beaming/super-Eddington accretion." }
];

/* ---- Diagnostic: basic → advanced ---- */
const DIAGNOSTIC = [
  { q: "Put these in temperature order, hottest first: G, M, O, K, A, B, F.", a: ["O B A F G K M"], topic: "tools", lvl: 1, exp: "OBAFGKM — Oh Be A Fine Girl/Guy, Kiss Me." },
  { q: "Along the Hubble sequence from Sa to Sc, what happens to the bulge and the star-formation rate?", a: ["bulge gets smaller", "star formation increases"], topic: "galaxies", lvl: 1, exp: "Sa = big bulge, tight arms, little gas. Sc = small bulge, open arms, lots of gas and star formation." },
  { q: "What kind of galaxy has essentially no gas, an old red stellar population, and stars on random orbits?", a: ["elliptical"], topic: "galaxies", lvl: 1, exp: "Ellipticals — typically the product of mergers." },
  { q: "Population I vs Population II: which is young, metal-rich, and found in spiral arms?", a: ["population i"], topic: "pops", lvl: 1, exp: "Pop I = young, metal-rich, disk/arms (plus Cepheids). Pop II = old, metal-poor, halo/bulge/globular clusters (plus RR Lyrae)." },
  { q: "What feature of a cluster's H-R diagram gives its age?", a: ["main sequence turnoff"], topic: "pops", lvl: 2, exp: "The main-sequence turnoff: the hottest, most massive stars still on the main sequence tell you how long ago the cluster formed." },
  { q: "A galaxy has a parallax-free distance of 100 Mpc. Roughly how fast is it receding (H₀ = 70)?", a: ["7000"], topic: "cosmo", lvl: 1, exp: "v = H₀d = 70 × 100 = 7,000 km/s." },
  { q: "What is the recession velocity of a galaxy whose Hα line is observed at 1% longer wavelength than rest?", a: ["3000"], topic: "tools", lvl: 2, exp: "z = 0.01 → v ≈ cz = 0.01 × 3×10⁵ km/s = 3,000 km/s." },
  { q: "Cepheid or RR Lyrae: period of 0.5 days, absolute magnitude near +0.6?", a: ["rr lyrae"], topic: "candles", lvl: 1, exp: "RR Lyrae — periods 0.2–1 d and M_V ≈ +0.6; they are old Pop II stars in globular clusters and halos." },
  { q: "A Cepheid has a period of 30 days. Using M_V = −2.76 log₁₀P − 1.40, what is M_V?", a: ["-5.48"], topic: "candles", lvl: 3, exp: "log₁₀(30) = 1.477 → M_V = −2.76(1.477) − 1.40 = −5.48." },
  { q: "What is the peak absolute magnitude of a Type Ia supernova, and what explodes?", a: ["-19.3", "white dwarf"], topic: "candles", lvl: 2, exp: "M_B ≈ −19.3 at peak; a carbon–oxygen white dwarf detonates near the Chandrasekhar limit (1.4 M☉)." },
  { q: "A star has apparent magnitude 15 and absolute magnitude −5. How far away is it (pc)?", a: ["100000"], topic: "candles", lvl: 3, exp: "m − M = 20 = 5 log d − 5 → log d = 5 → d = 10⁵ pc = 100 kpc." },
  { q: "What does it mean when a spiral galaxy's rotation curve stays flat far out?", a: ["dark matter"], topic: "orbits", lvl: 2, exp: "Mass keeps growing with radius (M ∝ r for constant v) although the light does not → an extended dark matter halo." },
  { q: "If all the mass of a galaxy were concentrated at the center, how would v change with radius?", a: ["keplerian", "decrease"], topic: "orbits", lvl: 2, exp: "Keplerian: v = √(GM/r), so v ∝ r^(−1/2) — it would fall off." },
  { q: "A galaxy rotates at 200 km/s at a radius of 10 kpc. Roughly what mass is enclosed, in solar masses?", a: ["9.3e10"], topic: "orbits", lvl: 3, exp: "M = v²r/G = (2×10⁵ m/s)² × 3.086×10²⁰ m / 6.674×10⁻¹¹ ≈ 9.3×10¹⁰ M☉ (shortcut: 2.33×10⁵ × 200² × 10 = 9.3×10¹⁰)." },
  { q: "Two stars orbit with a = 9 AU and P = 3 yr. What is their total mass in solar masses?", a: ["27"], topic: "orbits", lvl: 3, exp: "M = a³/P² = 729/9 = 27 M☉." },
  { q: "What two observable quantities does the Tully–Fisher relation connect?", a: ["rotation speed", "luminosity"], topic: "cosmo", lvl: 2, exp: "L ∝ v_max⁴ — measure the rotation width (usually from the 21 cm HI line) and you get the luminosity, hence the distance." },
  { q: "A star has a proper motion of 0.05 arcsec/yr at a distance of 200 pc. What is its transverse speed in km/s?", a: ["47.4"], topic: "cosmo", lvl: 3, exp: "v_t = 4.74 × 0.05 × 200 = 47.4 km/s." },
  { q: "What makes a galaxy a 'starburst' rather than just star-forming?", a: ["rate"], topic: "starburst", lvl: 2, exp: "The RATE: it is consuming its gas so fast that the supply would run out in far less than a Hubble time." },
  { q: "Name three observational signatures of a starburst galaxy.", a: ["h alpha", "infrared", "ulx"], topic: "starburst", lvl: 2, exp: "Strong Hα emission, strong IR (dust re-radiation), many supernovae/X-ray binaries/ULXs, blue colors, super star clusters, superwinds." },
  { q: "What are the long tails in the Antennae Galaxies?", a: ["tidal tails"], topic: "interact", lvl: 1, exp: "Tidal tails — stars and gas flung out by gravitational torques during the encounter." },
  { q: "Why do galaxy collisions trigger star formation, when the stars themselves basically never collide?", a: ["gas"], topic: "interact", lvl: 2, exp: "The GAS clouds collide, shock, lose angular momentum and fall inward and compress — stars are essentially collisionless and just get rearranged." },
  { q: "What creates a ring galaxy like the Cartwheel?", a: ["head-on collision"], topic: "interact", lvl: 2, exp: "A smaller galaxy punches through the center of the disk ('bullseye'), sending an outward density wave that triggers star formation in an expanding ring." },
  { q: "What is a ULX, and what are the three explanations for its luminosity?", a: ["10^39", "intermediate mass black hole"], topic: "messengers", lvl: 2, exp: "An off-nucleus X-ray source above ~10³⁹ erg/s: an intermediate-mass black hole, super-Eddington accretion, or beamed emission from a stellar-mass object." },
  { q: "What is the Eddington luminosity of a 10 solar-mass black hole (in erg/s)?", a: ["1.3e39"], topic: "messengers", lvl: 3, exp: "L_Edd ≈ 1.3×10³⁸ × 10 = 1.3×10³⁹ erg/s — the threshold a ULX exceeds." },
  { q: "In a gravitational-wave 'chirp', what two things increase as the orbit shrinks?", a: ["frequency", "amplitude"], topic: "messengers", lvl: 2, exp: "Both frequency and amplitude rise until the merger; the GW frequency is twice the orbital frequency." },
  { q: "What merged in GW170817, and what was seen afterwards?", a: ["neutron stars", "kilonova"], topic: "messengers", lvl: 2, exp: "Two neutron stars: a ~100 s chirp, a short gamma-ray burst 1.7 s later (GRB 170817A), and the kilonova AT 2017gfo." },
  { q: "Why is GW170817 called a 'standard siren'?", a: ["distance"], topic: "messengers", lvl: 3, exp: "The GW amplitude gives a direct luminosity distance; combine with the host galaxy's redshift and you get H₀ with no distance ladder at all." },
  { q: "Which merger produces most of the universe's gold and platinum?", a: ["neutron star"], topic: "messengers", lvl: 2, exp: "Neutron star mergers — the kilonova ejecta undergo rapid neutron capture (the r-process), forging heavy elements." },
  { q: "Which DSO is the nearest big starburst, with a superwind blowing out of the disk?", a: ["m82"], topic: "dso", lvl: 2, exp: "M82 (the Cigar Galaxy), ~12 million ly away, with hot gas and Hα filaments venting perpendicular to the disk." },
  { q: "Which DSO is ~2.5 million ly away, is approaching us, and hosted the Cepheids that proved galaxies are separate 'island universes'?", a: ["m31", "andromeda"], topic: "dso", lvl: 1, exp: "M31, the Andromeda Galaxy — Hubble found Cepheids there in 1923–24." },
  { q: "Which two DSOs are 'bullseye' ring galaxies made by head-on collisions?", a: ["cartwheel", "arp 147"], topic: "dso", lvl: 3, exp: "The Cartwheel (~500 Mly) and Arp 147 (~430–440 Mly) — Arp 147's ring is expanding at ~225 km/s." },
  { q: "Which DSO is a starburst galaxy with no companion?", a: ["mcg+07-33-027"], topic: "dso", lvl: 3, exp: "MCG+07-33-027, an isolated starburst in Hercules ~330 million ly away — unusual because bursts are normally triggered by interactions." },
  { q: "Which DSO is not a normal globular cluster, and why?", a: ["terzan 5"], topic: "dso", lvl: 3, exp: "Terzan 5 — it hosts multiple stellar populations with very different ages and metallicities, so it is probably the stripped nucleus of a cannibalized dwarf galaxy." },
  { q: "Which DSO has the most known millisecond pulsars of any globular cluster?", a: ["terzan 5"], topic: "dso", lvl: 3, exp: "Terzan 5 — 49 pulsars known as of 2024; its extreme density makes binary encounters (and pulsar recycling) common." },
  { q: "Which DSO has a dust lane that looks like the brim of a hat?", a: ["sombrero", "m104"], topic: "dso", lvl: 1, exp: "The Sombrero Galaxy, M104 — a huge bulge crossed by a thin dust ring, ~31 million ly away." },
  { q: "Which DSO's arms were amplified by the tidal pull of a companion, and which hosted SN 2011dh?", a: ["m51"], topic: "dso", lvl: 2, exp: "M51, the Whirlpool — interacting with NGC 5195." },
  { q: "Which DSO is a dwarf irregular starburst with two super star clusters, about 11 million ly away?", a: ["ngc 1569"], topic: "dso", lvl: 3, exp: "NGC 1569, in Camelopardalis — a dwarf starburst with super star clusters A and B and Hα outflow filaments." },
  { q: "Which DSO has nine X-ray-bright black holes arranged in a ring?", a: ["arp 147"], topic: "dso", lvl: 3, exp: "Arp 147 — Chandra found nine X-ray sources (black holes of ~10–20 M☉) in the star-forming ring." },
  { q: "Which DSO is a normal spiral used to calibrate BOTH Cepheid distances and Type Ia supernovae?", a: ["ngc 4536"], topic: "dso", lvl: 3, exp: "NGC 4536 — HST Cepheid measurements plus SN 1981B, a Type Ia used for calibration." },
  { q: "In which galaxy did GW170817 happen, and how far away is it?", a: ["ngc 4993", "130"], topic: "dso", lvl: 3, exp: "NGC 4993, a lenticular galaxy in Hydra about 40 Mpc ≈ 130 million ly away." },
  { q: "Which DSO is a head-on collision that produced a triangular-shaped burst of star formation?", a: ["arp 143"], topic: "dso", lvl: 3, exp: "Arp 143 (NGC 2444 + NGC 2445) — the collision compressed NGC 2445's gas into a triangular/ring-shaped star-forming region." }
];

/* ---- Free-response practice cards ---- */
const CARDS = [
  ["How do you tell a starburst galaxy from a normal star-forming galaxy?", "By the rate relative to its gas supply: a starburst would exhaust its gas in far less than a Hubble time (MW ≈ 1–3 M☉/yr vs 10–100+ M☉/yr in starbursts)."],
  ["Why are starbursts bright in the infrared?", "Massive young stars are born inside dusty clouds; the dust absorbs their UV/optical light and re-radiates it in the IR."],
  ["What is a superwind and what drives it?", "A galaxy-scale outflow of hot gas driven by the combined energy of many supernovae and stellar winds in a starburst — seen in M82 as Hα filaments and X-ray emitting plasma."],
  ["Why does a merger trigger star formation if stars never collide?", "The gas clouds do: they shock, radiate energy, lose angular momentum and fall inward, reaching the high densities needed to collapse into stars."],
  ["What happens to gas and stars differently during a galaxy collision?", "Stars behave as collisionless particles — they get rearranged into tails, shells and halos. Gas is dissipative — it collides, shocks, loses energy, sinks to the center and forms stars (or feeds the black hole)."],
  ["What produces the tidal tails in the Antennae?", "Gravitational torques during the encounter fling stars and gas out on long, curved orbits; the tails are 'tidal debris'."],
  ["Why is the Cartwheel's ring still expanding?", "It is a density wave: the intruder drove a compression wave outward through the disk like a ripple, so star formation moves outward with it."],
  ["What is the difference between a Cepheid and an RR Lyrae star, physically?", "Cepheids are young, massive, metal-rich Pop I supergiants (P = 1–100 d, follows a P–L relation). RR Lyrae are old, low-mass Pop II horizontal-branch stars (P ≈ 0.2–1 d, M_V ≈ +0.6) found in globular clusters and halos."],
  ["Why are Cepheids better than RR Lyrae for distant galaxies?", "They are far more luminous (M_V ≈ −4 to −6 vs +0.6), so they can be resolved and measured much farther away."],
  ["Why are Type Ia supernovae useful in elliptical galaxies where Cepheids cannot be found?", "Their progenitors are old white dwarfs, so they occur in old populations; and at M_B ≈ −19.3 they are visible across cosmological distances."],
  ["What is spectroscopic parallax?", "Estimate the absolute magnitude from a star's spectrum via a calibrated H-R diagram, then use the distance modulus. No actual parallax involved."],
  ["Explain the Tully–Fisher relation and how it gives a distance.", "For spirals, luminosity scales with maximum rotation speed (L ∝ v_max⁴). Measure v_max from the HI 21 cm line width or a rotation curve → get M → compare to apparent m → distance modulus → distance."],
  ["Why do flat rotation curves imply dark matter?", "v constant with radius means M(<r) ∝ r keeps growing, but the starlight does not — so there is mass with no light: an extended dark halo."],
  ["What is the gravitational-wave 'chirp' and what does it encode?", "The inspiral signal: frequency and amplitude both rise as the orbit shrinks. Its shape gives the chirp mass, the distance (amplitude), and the orientation of the binary."],
  ["Why was GW170817 a bigger deal than the earlier black-hole mergers LIGO found?", "It had an electromagnetic counterpart — a short GRB and a kilonova — because neutron stars have matter to eject. That confirmed NS mergers make short GRBs and heavy r-process elements, and gave an independent H₀."],
  ["What is a kilonova and what makes it glow?", "The optical/IR transient from a neutron-star merger, powered by radioactive decay of unstable heavy nuclei made by rapid neutron capture (the r-process) — gold, platinum, lanthanides."],
  ["What is a tidal disruption event (TDE)?", "A star passing too close to a supermassive black hole is torn apart by tidal forces; roughly half its material falls back and accretes, making a luminous, rapidly fading flare."],
  ["How do you decide if an X-ray source is a ULX rather than a normal X-ray binary?", "It is off-nucleus and exceeds ~10³⁹ erg/s — above the Eddington limit for a stellar-mass (~10 M☉) black hole. Then the candidates are an IMBH, super-Eddington accretion, or beaming."],
  ["How are millisecond pulsars made?", "An old neutron star in a binary accretes matter from its companion; the transferred angular momentum spins it up to millisecond periods — 'recycling'."],
  ["Why does Terzan 5 have so many millisecond pulsars?", "Its extreme central density makes close encounters and binary exchange common, so neutron stars get captured into binaries and spun up far more often than in the Galactic disk."],
  ["What does 'multi-messenger' mean and which messengers are there?", "Combining information from gravitational waves, electromagnetic radiation (radio → gamma), neutrinos, and cosmic rays from the same event."],
  ["How do neutrinos and cosmic rays differ as messengers?", "Neutrinos interact weakly, escape dense regions instantly and travel undeflected, so they point back to their source. Cosmic rays are charged, so Galactic magnetic fields scramble their directions."],
  ["What is the Hubble sequence, and what is the physical trend from Sa to Sc?", "Ellipticals → S0 → spirals → irregulars (the tuning fork). Sa→Sc: smaller bulge, looser arms, more gas and dust, bluer color, higher star-formation rate."],
  ["How do you classify a galaxy from an image?", "Ask: is there a disk? spiral arms? how big is the bulge? is there a bar? are there dust lanes and blue knots (young stars)? are there tidal features? Then place it on the Hubble sequence."],
  ["What's the difference between an elliptical and a lenticular (S0) galaxy?", "Both have big bulges and old stars, but S0 has a disk (often with dust) and no spiral arms; ellipticals have no disk and a smooth, three-dimensional shape."],
  ["Why do elliptical galaxies look red?", "They are made of old, cool, low-mass stars (Pop II) and have little or no cold gas, so no hot blue massive stars are being formed."],
  ["What does a blue galaxy tell you at a glance?", "It contains massive, short-lived, hot stars — star formation happened within the last ~10–100 Myr."],
  ["What is the main-sequence turnoff, and how does it date a cluster?", "The point where stars are leaving the main sequence: the turnoff mass sets the age, since massive stars burn out first."],
  ["How do globular clusters connect to galaxy formation?", "They are old, dense, and record the early star-formation and merger history; their numbers, ages and metallicities trace how the halo was assembled."],
  ["What are super star clusters and why do they matter in starbursts?", "Extremely massive, dense young clusters (10⁵–10⁷ M☉) formed in starbursts — possible progenitors of globular clusters, and they dominate the burst's light and feedback."],
  ["How does dust affect what you see in a starburst?", "It absorbs UV/optical light from young stars and re-emits in the IR; it also reddens and dims background objects (extinction), which is why M82's SN 2014J looked unusually red."],
  ["What's the difference between emission and absorption lines in a galaxy spectrum?", "Absorption lines = starlight from an old/intermediate population (Ca II, Mg b, Na D, Balmer). Emission lines (Hα, [O III], [O II]) = ionized gas around hot massive stars = ongoing star formation."],
  ["Why does Hα trace star formation specifically?", "It comes from gas ionized by the UV light of massive (O/B) stars, which live only a few Myr — so Hα marks star formation in the last ~10 Myr."],
  ["How do you get a redshift from a spectrum?", "Measure the shift of a known line: z = (λ_obs − λ_rest)/λ_rest; then v ≈ cz for small z."],
  ["What does it mean if a galaxy's spectral lines are blueshifted?", "It is moving toward us (like M31, approaching at ~110 km/s), so it is a local object dominated by its own motion, not the Hubble flow."],
  ["If a galaxy's rotation curve rises then flattens at 150 km/s, what can you conclude?", "Mass interior to r keeps growing as M(<r) = v²r/G — the flat part indicates an extended dark matter halo rather than a centrally concentrated mass distribution."],
  ["How does a bar change a spiral galaxy?", "The bar's torque drives gas inward, feeding central star formation (and the central black hole), and can build a central bulge — bars redistribute angular momentum."],
  ["What is the eventual fate of the Milky Way and M31?", "They are approaching at ~110 km/s and will collide and merge in ~4–5 Gyr, likely forming a large elliptical-like galaxy."],
  ["What is the evidence that M104's halo was built by mergers?", "Its unusually rich globular cluster system (≈2,000 vs the Milky Way's ≈150) plus its very massive bulge and halo — accreted satellites leave their clusters behind."],
  ["What single observation proved spiral nebulae are separate galaxies?", "Hubble's 1923–24 discovery of Cepheid variables in M31: the period–luminosity relation put it far beyond the Milky Way."],
  ["For a test: what should you check first on any astronomy graph?", "Axes, units, and direction — magnitude axes run backwards, temperature axes on H-R diagrams are reversed, and distances may be in pc, kpc or Mpc."]
];
