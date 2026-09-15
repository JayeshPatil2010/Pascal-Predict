/* Content modules, equation sheet, diagnostic, and free-response practice cards.
   Scope = 2026 Astronomy C rules §3.a (evolution), §3.b (math), §3.c (DSOs). */

const MODULES = [
  {
    id: "story",
    title: "1. The Stellar Story",
    tag: "Core",
    mins: 12,
    bullets: [
      "Order of business: cold molecular cloud → collapse → protostar → (T Tauri) → main sequence → Giant branch → death (WD, NS, or BH). Stars spend ~90% of their lives on the main sequence.",
      "Molecular cloud: T ≈ 10 K, H₂ + CO + dust. Collapse starts when gravity beats pressure (Jeans criterion: M_J ∝ T^(3/2) ρ^(−1/2)) — cold and dense = easier collapse.",
      "Clouds collapse because they can COOL: molecular line emission (CO rotational lines, then dense-gas tracers like NH₃) radiates away the heat.",
      "Protostar: still accreting, buried in dust → bright in IR/far-IR, drives bipolar outflows and Herbig–Haro jets. A disk forms because angular momentum must be conserved.",
      "T Tauri: pre-main-sequence, contracting, has a disk, irregular variability, and Li I 670.8 nm absorption (Li is destroyed above ~2.5 MK → lithium = youth).",
      "Main sequence = core H → He. Mass sets everything: lifetime ≈ 10 Gyr × (M/M☉)^(−2.5); massive stars are blue, hot, and short-lived.",
      "Low/intermediate mass (≲8 M☉): red giant → helium flash → horizontal branch (core He burn; RR Lyrae live here) → AGB (thermal pulses, heavy mass loss; Mira variables) → planetary nebula → C/O white dwarf → black dwarf.",
      "High mass (≳8 M☉): supergiant (Cepheid instability strip) → advanced burning C→Ne→O→Si→Fe → iron core can't release energy → core collapse in <1 s → Type II/Ib/Ic supernova → neutron star or black hole.",
      "Fusion stops at IRON: fusing Fe consumes energy instead of releasing it, so the core loses support instantly.",
      "A star ends as: WD (≲8 M☉ progenitor), NS (~8–20+ M☉ ), BH (most massive). The remnant mass is far below the birth mass because of winds and explosions."
    ],
    must: [
      "Mass decides the whole life story and the final remnant.",
      "Fusion's endgame is iron — that's why massive cores collapse.",
      "White dwarfs are held up by electron degeneracy pressure, capped at 1.4 M☉ (Chandrasekhar).",
      "Planetary nebulae come from low/intermediate stars; supernovae come from massive stars (or detonating WDs).",
      "Lithium + disks + IR excess + outflows = youth."
    ]
  },
  {
    id: "spectra",
    title: "2. Spectra & Classification",
    tag: "Core",
    mins: 8,
    bullets: [
      "Temperature sequence: O B A F G K M (Oh Be A Fine Girl/Guy, Kiss Me). O = hottest (~30,000–50,000 K), M = coolest (~3,000 K). Extras: L/T/Y are brown dwarfs.",
      "What you actually see: O → He II lines; B → He I + medium Balmer; A → strongest Balmer (H) lines; F → metals, weaker H, Ca II; G → Ca II strong, many metals (Sun is G2V); K → strong metals + molecules; M → molecular bands (TiO, VO).",
      "Balmer lines peak at A (≈10,000 K) because H must be in the n=2 level: too cool = no excitation, too hot = H is ionized.",
      "Luminosity classes: Ia (bright supergiant), Ib, II, III (giant), IV (subgiant), V (main sequence/dwarf). Full name = class + luminosity, e.g. the Sun is G2V, Betelgeuse is M1-2 Ia.",
      "Three spectrum types: continuous (blackbody-ish), emission lines (hot, low-density gas), absorption lines (cool gas in front of something hotter).",
      "Line strengths also carry composition: metals, He abundance, Li. Pop I = metal-rich young disk stars, Pop II = metal-poor old halo/globular cluster stars, Pop III = first, metal-free stars.",
      "Doppler: Δλ/λ₀ = v/c. Redshift = moving away; blueshift = approaching. Line broadening also reveals rotation and pressure."
    ],
    must: [
      "OBAFGKM = hot → cool; A stars have the strongest hydrogen Balmer lines.",
      "Molecules (TiO) only survive in the coolest (M) stars.",
      "Luminosity class V = dwarf/main sequence, III = giant, I = supergiant.",
      "Emission lines = hot thin gas; absorption lines = cool gas in front of a continuum.",
      "Δλ/λ = v/c for radial velocity."
    ]
  },
  {
    id: "hr",
    title: "3. The H-R Diagram",
    tag: "Core",
    mins: 8,
    bullets: [
      "Axes: x = temperature or spectral type (HOT on the LEFT, reversed scale!), y = luminosity or absolute magnitude (BRIGHT at the TOP, and magnitude DECREASES upward).",
      "Main sequence: diagonal band from hot+bright (upper left) to cool+faint (lower right). Mass increases up and to the left along it.",
      "Upper right = red giants and supergiants (cool but huge → luminous). Lower left = white dwarfs (hot but tiny → faint).",
      "The instability strip runs roughly vertically between the MS and the giants: δ Scuti/roAp (lower), RR Lyrae (middle, on the horizontal branch), Cepheids (upper).",
      "Evolutionary tracks: a Sun-like star sits on the MS, moves right+up to the red giant branch, jumps left to the horizontal branch, climbs the AGB, then slides down-left to the white dwarf region.",
      "You can read a star's fate off the diagram: top-left = short life, violent death; bottom-right = long-lived red dwarf.",
      "Reading off two of (temperature, luminosity, radius) gives the third via L = 4πR²σT⁴."
    ],
    must: [
      "Temperature runs backwards (hot on the left) — the classic trap.",
      "Bigger radius at the same T = more luminous; the top-right stars are giants/supergiants.",
      "Instability strip = where pulsating variables live.",
      "White dwarfs: bottom-left, hot but faint because they are Earth-sized.",
      "Mass increases up and to the left along the main sequence."
    ]
  },
  {
    id: "blackbody",
    title: "4. Blackbody & Light",
    tag: "Math",
    mins: 6,
    bullets: [
      "Every star is roughly a blackbody: a smooth continuum whose peak and total power depend only on temperature.",
      "Wien's law: λ_max T = 2.898 × 10⁶ nm·K (i.e. λ_max(nm) ≈ 2.9×10⁶ / T). Hotter → bluer → peak at shorter wavelengths. The Sun (5,800 K) peaks near 500 nm (green, but looks white).",
      "Stefan–Boltzmann: surface flux F = σT⁴, so luminosity L = 4πR²σT⁴. In solar units: L/L☉ = (R/R☉)² × (T/T☉)⁴ with T☉ = 5,772 K.",
      "Consequences: double the radius at fixed T → 4× luminosity; double the temperature → 16× luminosity. A cool star can still be super luminous if it is enormous (that's why red giants are bright).",
      "Color index B − V: small/negative = hot/blue, large/positive = cool/red. Color is a quick temperature proxy when you don't have a spectrum.",
      "Magnitude scale is backwards and logarithmic: smaller (or negative) magnitude = brighter; 5 magnitudes = factor 100 in brightness."
    ],
    must: [
      "λ_max T = 2.9×10⁶ nm·K — hotter means a shorter peak wavelength.",
      "L ∝ R²T⁴ (T measured in K, never °C).",
      "5 mags = ×100 brightness; 1 mag = ×2.512.",
      "A red star can be the most luminous one in the room if it is big enough.",
      "Flux falls as 1/d² (inverse square law), luminosity does not."
    ]
  },
  {
    id: "variables",
    title: "5. Variable Stars & Light Curves",
    tag: "Core",
    mins: 10,
    bullets: [
      "Read a light curve by three things: PERIOD, SHAPE, and AMPLITUDE (plus color/spectral type if given).",
      "Cepheids: period 1–100 days, bright yellow supergiants, classic SAWTOOTH (fast rise, slower decline), amplitude ~1–2 mag. They obey a period–luminosity relation → standard candles.",
      "RR Lyrae: period ~0.2–1 day (typically ~0.5 d), horizontal-branch stars in old populations (globular clusters), also sawtooth, amplitude ~0.5–1 mag, M_V ≈ +0.6.",
      "Mira variables: period 100–1,000 days (Mira itself ≈ 332 d), AGB red giants, amplitude >2.5 mag (can be ~8 mag!), asymmetric, cycle-to-cycle variation.",
      "Semi-regular variables: like Miras but with multiple/less stable periods and smaller amplitude (that's what Image D3 was).",
      "T Tauri: irregular, non-periodic flickering from accretion/spots — 'irregular' IS the signature.",
      "Eclipsing binaries: flat-topped curve with two alternating dips of DIFFERENT depths (primary & secondary eclipse) at a fixed short period; no smooth sinusoidal shape.",
      "Type Ia SN: rises sharply in ~20 days, then smooth decline; no hydrogen lines; peak M_B ≈ −19.3 (standard candle).",
      "Type II SN: broader, often with a PLATEAU (Type II-P) then a slow, roughly linear decay; hydrogen lines present.",
      "Pulsars: extremely regular narrow pulses, periods from milliseconds to seconds — in radio/X-ray, not optical brightness."
    ],
    must: [
      "Period is the fastest discriminator: ~0.5 d = RR Lyrae, days–weeks = Cepheid, months–years = Mira, hours = eclipsing binary, ms–s = pulsar.",
      "Cepheid & RR Lyrae = sawtooth; eclipsing binary = flat with dips; T Tauri = irregular.",
      "Cepheids are young/massive (Pop I); RR Lyrae are old/low-mass (Pop II).",
      "Type Ia = WD explosion, no H, standard candle; Type II = core collapse, has H, leaves a NS or BH.",
      "The rise/decline shape of a SN light curve is powered by ⁵⁶Ni → ⁵⁶Co → ⁵⁶Fe decay."
    ]
  },
  {
    id: "distance",
    title: "6. The Distance Ladder",
    tag: "Math",
    mins: 8,
    bullets: [
      "Parallax: d(pc) = 1 / p(arcsec). 1 pc = 3.26 ly = 206,265 AU. It is measured 6 months apart to use the biggest possible baseline (2 AU) and to separate proper motion from parallax.",
      "Distance modulus: m − M = 5 log₁₀(d) − 5 with d in parsecs. Rearranged: d = 10^((m−M+5)/5) pc.",
      "Brightness ratio from magnitudes: Δm = m₂ − m₁ = −2.5 log₁₀(F₂/F₁), so F₁/F₂ = 10^(0.4Δm) = 2.512^Δm.",
      "Spectroscopic parallax: get the spectral type → read M_V off a calibrated H-R diagram → plug into the distance modulus. It's 'parallax' only in spirit.",
      "Standard candles: Cepheids (M_V = −2.76 log₁₀ P − 1.40, P in days), RR Lyrae (M_V ≈ +0.6), and Type Ia supernovae (M_B ≈ −19.3 at peak).",
      "Workflow on a test: identify the variable from the light curve → read the period → get M from the P–L relation → read m (apparent) from the plot's y-axis → distance modulus → distance.",
      "If a test gives you its own P–L relation (the 2026 practice test used M_V = −2.2 log₁₀P − 2.05), USE THEIRS."
    ],
    must: [
      "d = 1/p (pc, arcsec).",
      "m − M = 5 log d − 5 (d in pc).",
      "Bigger magnitude = fainter. m is how bright it looks, M is how bright it is at 10 pc.",
      "Period–luminosity for Cepheids; M_V ≈ +0.6 for RR Lyrae; −19.3 for Type Ia.",
      "Inverse square: F = L/(4πd²)."
    ]
  },
  {
    id: "binaries",
    title: "7. Binaries, Kepler & Orbits",
    tag: "Math",
    mins: 8,
    bullets: [
      "Kepler's 3rd law in astronomer's units: (M₁ + M₂)/M☉ = a³/P², with a in AU and P in years. In SI: P² = 4π²a³ / [G(M₁+M₂)].",
      "Both stars orbit the common center of mass: M₁r₁ = M₂r₂ and a = r₁ + r₂, so r₁ = a·M₂/(M₁+M₂) — the heavier star does the smaller orbit.",
      "Speed: v = 2πr/P; for a circular orbit v² = G M / r. Spectroscopic (double-lined) binaries give you velocities from Doppler shifts → masses.",
      "Mass transfer: when a star swells past its Roche lobe (Eggleton's formula gives R_L/d), material flows to the companion through the inner Lagrange point.",
      "What you get depends on the accretor: WD + accreted H → nova (surface flash, WD survives) or, near the Chandrasekhar limit, a Type Ia supernova (WD destroyed). NS/BH + accreted gas → X-ray binary.",
      "Angular momentum conservation is the Swiss Army knife: a shrinking core spins up (pulsars!), an inspiraling binary speeds up, and millisecond pulsars were spun up by accretion.",
      "Eclipsing + spectroscopic together = direct masses and radii. The light curve gives inclination and radii; the spectra give velocities."
    ],
    must: [
      "M_total = a³/P² in solar units (AU, years).",
      "Heavier star → smaller, slower orbit around the center of mass.",
      "Roche-lobe overflow → accretion disk → X-rays/novae.",
      "Nova ≠ supernova: the white dwarf survives a nova.",
      "Conservation of angular momentum explains fast spin (pulsars, millisecond pulsars)."
    ]
  },
  {
    id: "wave",
    title: "8. Multi-wavelength & JS9",
    tag: "Skills",
    mins: 8,
    bullets: [
      "Radio (cm–m): cold H I 21 cm, molecular lines (CO, NH₃), pulsars, and SYNCHROTRON from supernova remnants, jets, and Galactic-Center filaments. Needs radio telescopes (VLA, MeerKAT, ALMA).",
      "Infrared: warm dust, embedded protostars, obscured star formation, cool objects. JWST/Spitzer see through dust that blocks visible light.",
      "Visible: starlight, ionized gas (Hα red), reflected starlight (blue nebulae). Ground telescopes + Hubble.",
      "Ultraviolet: hot young massive stars, hot white dwarfs, accretion, shock-heated wakes (e.g., Mira's UV tail from GALEX). Needs space (UV is blocked by the atmosphere).",
      "X-ray: million-degree gas, shocks in SNRs, accretion onto neutron stars/black holes, WD surfaces. Chandra/XMM. Gamma-ray: nuclear lines, pulsars, GRBs.",
      "Color-as-physics in images: red = Hα (ionized hydrogen) or cool dust; blue = [O III] or reflected/scattered light or synchrotron (high-energy electrons); green/teal often = [O III] 500.7 nm in planetary nebulae; greyscale/orange often = radio.",
      "JS9 skills: open image → FITS header (date, exposure time, telescope/instrument) → draw a region → Counts in Regions (net counts) → count rate = counts/exposure → flux = rate × ECF → L = 4πd²F. Analysis → Energy Spectrum: peaks at particular keV identify elements (e.g. ~1 keV region: Ne/Fe-L; ~1.8 keV Si; ~2.4 keV S; ~6.4–6.7 keV Fe)."
    ],
    must: [
      "Which wavelength = which physics (radio = synchrotron/cold gas; IR = dust/embedded; X-ray = hot gas/accretion; UV = hot stars & WDs).",
      "Chandra = X-ray, JWST/Spitzer = IR, Hubble = visible/UV, GALEX = UV, MeerKAT/VLA/ALMA = radio.",
      "Red in a nebula picture usually means Hα emission; a dark patch means dust extinction.",
      "JS9: header → region → net counts → count rate → flux → luminosity.",
      "Energy-spectrum peaks identify elements — that's how we know what supernovae forged."
    ]
  },
  {
    id: "endstates",
    title: "9. End States & Explosions",
    tag: "Core",
    mins: 8,
    bullets: [
      "White dwarf: Earth-sized, C/O (or He/ONe), supported by electron degeneracy pressure. Mass limit ≈ 1.4 M☉ (Chandrasekhar). It is not burning anything — it just cools.",
      "Neutron star: ~10 km radius, ~1.4 M☉, supported by neutron degeneracy; a sugar cube weighs a billion tons. Pulsars are spinning magnetized NSs with beamed radio emission; millisecond pulsars were spun up by accretion.",
      "Black hole: formed when even neutron degeneracy fails (the most massive stellar cores); defined by the event horizon, not a surface.",
      "Type Ia: thermonuclear detonation of a C/O white dwarf near the Chandrasekhar limit (accretion from or merger with a companion). No hydrogen lines, strong Si II near 615 nm, peak M_B ≈ −19.3 → standard candle. Leaves NO compact object.",
      "Type II (and Ib/Ic): core collapse of a massive star. Type II keeps its hydrogen envelope (H lines present); Ib/Ic have lost it. Leaves a neutron star or black hole, plus a supernova remnant.",
      "Nova: only the accreted surface layer of a WD detonates; the WD survives and can repeat. Kilonova: neutron-star merger, makes heavy r-process elements.",
      "Supernova remnants shine by two mechanisms: synchrotron (shock-accelerated electrons, radio/X-ray) and line emission from shock-heated gas; the radioactive decay chain ⁵⁶Ni → ⁵⁶Co → ⁵⁶Fe powers the SN light curve itself."
    ],
    must: [
      "Chandrasekhar limit ≈ 1.4 M☉ for white dwarfs.",
      "Type Ia = exploding white dwarf (no H, standard candle, no remnant); Type II = collapsing massive star (has H, leaves NS/BH).",
      "Electron degeneracy (WD) vs neutron degeneracy (NS) — neither is 'normal' gas pressure.",
      "Pulsar = spinning neutron star; the beam sweeps past us like a lighthouse.",
      "Nova = surface flash, repeatable; supernova = the whole star (or WD) is destroyed."
    ]
  }
];

/* ---- The short list you actually put on the calculator ---- */
const EQUATIONS = [
  { n: "Parallax", e: "d(pc) = 1 / p(arcsec)   |   1 pc = 3.26 ly = 206,265 AU", u: "Turn a parallax into a distance instantly.", t: "Parallax is often given in milliarcsec (mas) — divide by 1000 first." },
  { n: "Distance modulus", e: "m − M = 5·log₁₀(d) − 5   →   d = 10^((m−M+5)/5)  [pc]", u: "The single most-used formula on Astronomy tests.", t: "d MUST be in parsecs. m = apparent (as seen), M = absolute (at 10 pc)." },
  { n: "Magnitude ↔ brightness", e: "Δm = −2.5·log₁₀(F₁/F₂)   →   ratio = 10^(0.4·Δm) = 2.512^Δm", u: "'How many times brighter is the peak than the dip?'", t: "Bigger magnitude = fainter. A negative Δm means brighter." },
  { n: "Cepheid P–L relation", e: "M_V = −2.76·log₁₀(P) − 1.40   (P in days)", u: "Get M from a Cepheid's period, then distance modulus.", t: "If the test supplies its own constants, use theirs. Classic Cepheids: P ≈ 1–100 d." },
  { n: "Standard candles", e: "RR Lyrae: M_V ≈ +0.6    |   Type Ia SN: M_B ≈ −19.3 (peak)", u: "Instant M for old-population pulsators and exploding white dwarfs.", t: "RR Lyrae periods are ~0.2–1 d; if the period is 0.5 d it's RR Lyrae, not a Cepheid." },
  { n: "Stefan–Boltzmann", e: "L = 4πR²σT⁴   →   L/L☉ = (R/R☉)²·(T/T☉)⁴ ,  T☉ = 5772 K", u: "Go between luminosity, radius, and temperature.", t: "Temperature in KELVIN. Radius and L in solar units keeps numbers sane." },
  { n: "Wien's law", e: "λ_max(nm) = 2.898×10⁶ / T(K)", u: "Peak wavelength ↔ temperature (color) of a blackbody.", t: "Hotter ⇒ SHORTER wavelength. Don't invert it by accident." },
  { n: "Inverse square", e: "F = L / (4πd²)", u: "Convert flux from an image/spectrum into luminosity — the JS9 workflow.", t: "d in meters if L is in watts; keep units consistent (cm vs m)." },
  { n: "Kepler's 3rd law", e: "M₁ + M₂ = a³ / P²   (M in M☉, a in AU, P in years)", u: "Total mass of any binary from separation + period.", t: "It gives the SUM of the masses; split them with the center-of-mass rule." },
  { n: "Center of mass", e: "M₁r₁ = M₂r₂  ,  a = r₁ + r₂  →  r₁ = a·M₂/(M₁+M₂)", u: "Find each star's orbit radius, then speed v = 2πr/P.", t: "The more massive star has the SMALLER orbit." },
  { n: "Doppler shift", e: "Δλ/λ₀ = v_r / c   (c = 3.00×10⁵ km/s)", u: "Radial velocity from a spectrum; also splits binary spectral lines.", t: "Δλ > 0 (red) = receding. Only the radial (line-of-sight) component." },
  { n: "Surface gravity", e: "g = GM/R²  →  R = √(GM/g)   (G = 6.674×10⁻¹¹)", u: "Back out a star's radius when given g and M — this exact move was on the 2025 practice test.", t: "Units: M in kg, R in m, g in m/s². Convert from solar masses (1 M☉ = 1.989×10³⁰ kg)." }
];

/* ---- Diagnostic: basic → advanced, tagged by topic ---- */
const DIAGNOSTIC = [
  { q: "Put these in temperature order, hottest first: G, M, O, A, K, F, B.", a: ["O B A F G K M"], topic: "spectra", lvl: 1, exp: "OBAFGKM. Oh Be A Fine Girl/Guy, Kiss Me. O ≈ 30,000–50,000 K, M ≈ 3,000 K." },
  { q: "Which spectral class shows the STRONGEST hydrogen Balmer absorption lines?", a: ["A"], topic: "spectra", lvl: 2, exp: "Balmer lines peak near 10,000 K (A stars). Hotter → H is ionized; cooler → electrons aren't in n=2." },
  { q: "What force holds a white dwarf up against gravity, and what is its maximum mass called?", a: ["electron degeneracy pressure", "chandrasekhar"], topic: "endstates", lvl: 2, exp: "Electron degeneracy pressure; the 1.4 M☉ Chandrasekhar limit." },
  { q: "A star has a parallax of 0.02 arcsec. How far away is it (in pc)?", a: ["50"], topic: "distance", lvl: 1, exp: "d = 1/p = 1/0.02 = 50 pc." },
  { q: "Order these stages oldest-first: protostar, planetary nebula, main sequence, red giant.", a: ["protostar, main sequence, red giant, planetary nebula"], topic: "story", lvl: 1, exp: "Collapse → MS → giant → PN → white dwarf. (T Tauri sits between protostar and MS.)" },
  { q: "A star is at 10,000 K and another at 5,000 K, same radius. How many times more luminous is the hotter one?", a: ["16"], topic: "blackbody", lvl: 2, exp: "L ∝ T⁴: (10,000/5,000)⁴ = 2⁴ = 16." },
  { q: "On an H-R diagram, which corner holds the white dwarfs?", a: ["lower left"], topic: "hr", lvl: 1, exp: "Hot (left) but tiny → faint (bottom). Upper-right is giants/supergiants." },
  { q: "A variable star's period is 0.5 days. Is it more likely a Cepheid or an RR Lyrae?", a: ["rr lyrae"], topic: "variables", lvl: 2, exp: "RR Lyrae: 0.2–1 d. Cepheids: 1–100 d. RR Lyrae are old, low-mass horizontal-branch stars." },
  { q: "Which supernova type leaves NO compact remnant — Ia or II?", a: ["ia"], topic: "endstates", lvl: 2, exp: "Type Ia completely destroys the white dwarf. Type II is core collapse → neutron star or black hole." },
  { q: "Name the two giant molecular clouds that make up the Orion Molecular Cloud Complex.", a: ["orion a", "orion b"], topic: "dso", lvl: 2, exp: "Orion A (Orion Nebula, Horsehead, Flame) and Orion B." },
  { q: "The Horsehead Nebula is what type of nebula?", a: ["dark"], topic: "dso", lvl: 1, exp: "A dark absorption nebula: cold dust silhouetted against the emission nebula IC 434." },
  { q: "What object sits at the center of the Crab Nebula, and how often does it blink?", a: ["pulsar", "33"], topic: "dso", lvl: 2, exp: "The Crab Pulsar — a neutron star rotating every ~33 milliseconds (about 30 times per second)." },
  { q: "Which is brighter: a star of magnitude 2.0 or magnitude 5.0? By what factor?", a: ["2", "15.85"], topic: "distance", lvl: 2, exp: "Smaller magnitude = brighter. Ratio = 10^(0.4×3) = 10^1.2 ≈ 15.85 (≈ 2.512³)." },
  { q: "Why do protostars form disks instead of the gas falling straight in?", a: ["angular momentum"], topic: "story", lvl: 2, exp: "Conservation of angular momentum: infalling material with any rotation spins up and flattens into a disk." },
  { q: "Tycho's SNR (SN 1572) was which supernova type?", a: ["ia"], topic: "dso", lvl: 2, exp: "Type Ia — a thermonuclear disruption of a white dwarf. No neutron star remains." },
  { q: "Janus (ZTF J203349.8+322901.1) is famous for what?", a: ["two faces", "hydrogen"], topic: "dso", lvl: 3, exp: "It is a white dwarf whose two hemispheres have different compositions: one hydrogen-dominated, one helium-dominated." },
  { q: "What is the total mass of WDJ181058.67+311940.94, and what will it do?", a: ["1.555", "type ia"], topic: "dso", lvl: 3, exp: "≈1.555 M☉ (super-Chandrasekhar) — it will merge and explode as a Type Ia supernova in ~23 Gyr." },
  { q: "Which telescope/band would best show a protostar still buried in its dust cloud?", a: ["infrared"], topic: "wave", lvl: 2, exp: "Infrared (JWST/Spitzer) — IR penetrates dust and warm dust re-radiates at IR wavelengths." },
  { q: "A filament near the Galactic Center glows in radio with no optical counterpart. What's the emission mechanism?", a: ["synchrotron"], topic: "wave", lvl: 3, exp: "Synchrotron radiation from relativistic electrons spiraling in magnetic fields (that's 'The Bone', G359.13)." },
  { q: "A Cepheid has a period of 10 days. Using M_V = −2.76 log₁₀P − 1.40, what is M_V?", a: ["-4.16"], topic: "distance", lvl: 3, exp: "log₁₀(10) = 1, so M_V = −2.76 − 1.40 = −4.16. Then use m − M to get distance." },
  { q: "Two stars orbit with a = 4 AU and P = 2 yr. What is their total mass in solar masses?", a: ["16"], topic: "binaries", lvl: 3, exp: "M = a³/P² = 64/4 = 16 M☉." },
  { q: "In a binary, star A is twice as massive as star B. Which star's orbit around the center of mass is larger?", a: ["b"], topic: "binaries", lvl: 2, exp: "M₁r₁ = M₂r₂ — the lower-mass star (B) swings in the bigger, faster orbit." },
  { q: "What does the presence of lithium (Li I 670.8 nm) tell you about a star?", a: ["young"], topic: "story", lvl: 3, exp: "Lithium is destroyed by proton capture above ~2.5 million K, so surviving Li means the star hasn't mixed/destroyed it yet → it's young (T Tauri stage)." },
  { q: "Name the region of the H-R diagram where pulsating variables live.", a: ["instability strip"], topic: "hr", lvl: 2, exp: "The instability strip — Cepheids at the top, RR Lyrae in the middle, δ Scuti at the bottom." },
  { q: "Mira (Omicron Ceti) is a pulsating red giant on which evolutionary branch?", a: ["agb"], topic: "variables", lvl: 3, exp: "The asymptotic giant branch (AGB) — thermally pulsing, heavy mass loss, period ~332 days." },
  { q: "A nova and a Type Ia supernova both involve a white dwarf. What's the key difference?", a: ["survives"], topic: "endstates", lvl: 3, exp: "A nova only detonates the accreted surface layer; the WD survives and can repeat. A Type Ia destroys the entire white dwarf." },
  { q: "What causes the cometary knots in the Helix Nebula?", a: ["photoevaporation"], topic: "dso", lvl: 3, exp: "Dense clumps being eroded/shaped by the hot central white dwarf's UV radiation and fast wind (photoevaporation; tails point away from the star)." },
  { q: "Cas A is roughly how old, and what type of supernova made it?", a: ["350", "ii"], topic: "dso", lvl: 3, exp: "~350 years old (explosion ≈1680 AD), a Type IIb core-collapse supernova — the youngest known in the Milky Way." },
  { q: "How long is 'The Bone' (G359.13), and what recently happened to it?", a: ["230", "pulsar"], topic: "dso", lvl: 3, exp: "~230 light-years long; in 2025 Chandra + MeerKAT showed it was fractured, likely by a fast-moving pulsar." },
  { q: "If a star's spectrum shows TiO molecular bands, roughly what temperature/type is it?", a: ["m"], topic: "spectra", lvl: 2, exp: "M type, ~3,000 K — only the coolest stars are cool enough for molecules to survive." }
];

/* ---- Free-response practice cards (answer-first review) ---- */
const CARDS = [
  ["Why does the Orion complex shine so brightly in the infrared?", "Dust heated by embedded young stars/protostars re-radiates in the IR, and IR light penetrates dust that blocks visible light."],
  ["What is the Jeans mass and how does it scale?", "Minimum mass for a cloud to collapse: M_J ∝ T^(3/2) ρ^(−1/2) — cold, dense gas collapses most easily."],
  ["How do molecular clouds cool so they can collapse?", "Mainly molecular line emission — CO rotational lines, and dense-gas tracers like NH₃ in the densest cores (plus dust emission)."],
  ["Classical vs weak-lined T Tauri star?", "CTTS: accreting disk, strong Hα (EW ≳ 10 Å), IR excess, UV excess. WTTS: little/no disk, weak Hα, faster rotation."],
  ["What happens at the moment a protostar becomes a main-sequence star?", "Core temperature reaches ~10 million K and sustained H→He fusion begins; fusion pressure balances gravity (hydrostatic equilibrium)."],
  ["What is the helium flash?", "Runaway ignition of helium in the degenerate core of a low-mass red giant; it lifts degeneracy and the star settles onto the horizontal branch."],
  ["What creates a planetary nebula?", "An AGB star's expelled outer envelope, ionized and lit up by the exposed hot core (soon-to-be white dwarf). Not planets!"],
  ["Why is fusion's endpoint iron?", "Iron has the highest binding energy per nucleon: fusing it CONSUMES energy instead of releasing it, so the core loses support and collapses."],
  ["What is a pulsar, physically?", "A rapidly rotating, highly magnetized neutron star whose beamed radiation sweeps past Earth — a cosmic lighthouse."],
  ["Why do millisecond pulsars spin so fast?", "Conservation of angular momentum: they were spun up by accreting matter from a companion star."],
  ["What is a pulsar wind nebula?", "A nebula powered by the relativistic particle wind from a central pulsar (the Crab is the prototype) — it glows by synchrotron radiation."],
  ["What's the difference between Type Ia and Type II supernova spectra?", "Type Ia: NO hydrogen lines, strong Si II (~615 nm). Type II: strong hydrogen Balmer lines present."],
  ["What powers a supernova's light curve?", "Radioactive decay ⁵⁶Ni → ⁵⁶Co → ⁵⁶Fe (plus shock cooling for the early flash)."],
  ["What is a kilonova?", "The explosive transient from a neutron-star merger, forging heavy r-process elements (gold, platinum)."],
  ["What is spectroscopic parallax?", "Estimate M from the star's spectral type via a calibrated H-R diagram, then use the distance modulus. No actual parallax involved!"],
  ["Why measure parallax 6 months apart?", "It maximizes the baseline (diameter of Earth's orbit, 2 AU) and lets you separate the parallax wobble from the star's own proper motion."],
  ["How do you get a luminosity from a Chandra image?", "Region → net counts → count rate (counts/exposure time) → flux (rate × energy conversion factor) → L = 4πd²F."],
  ["What identifies elements in an X-ray energy spectrum?", "Emission-line peaks at characteristic energies (e.g., Mg ~1.3 keV, Si ~1.8 keV, S ~2.4 keV, Fe ~6.4–6.7 keV); the peak position = the element."],
  ["What does 'spectral index' tell you about a radio source?", "How flux varies with frequency (S ∝ ν^α). A steep negative α is typical of synchrotron; changes in α along a filament imply different electron populations/origins."],
  ["Emission vs reflection vs dark nebula?", "Emission: gas ionized by hot stars, re-emits lines (red Hα). Reflection: dust scatters starlight (blue). Dark: dust blocks background light."],
  ["Why is the visible light from the Helix Nebula's gas not just 'glowing hot gas'?", "It's fluorescence: UV from the central white dwarf ionizes the gas, which re-emits in specific lines ([O III] inside, Hα + [N II] outside)."],
  ["What is the 'DB gap' (relevant to Janus)?", "A range of white dwarf temperatures where few stars are seen, as H-dominated atmospheres transition to He-dominated ones — Janus seems to be caught in the act."],
  ["Eggleton's Roche-lobe relation — what's it for?", "It gives the radius at which a star in a binary starts losing mass to its companion: R_L/d = 0.49q^(2/3) / [0.6q^(2/3) + ln(1+q^(1/3))]."],
  ["What's an X-ray binary?", "A binary where a compact object (NS or BH, sometimes WD) accretes from a companion; the infalling gas heats to X-ray temperatures."],
  ["How does mass transfer change an orbit?", "With conservative mass transfer, total mass AND angular momentum are conserved — so as the donor loses mass the orbital separation changes (a ∝ 1/(M₁M₂)² for fixed L)."],
  ["What is the difference in outcome between the Crab and Tycho's SNR?", "Crab = core collapse (SN 1054) left a neutron star/pulsar. Tycho = Type Ia (SN 1572) destroyed the white dwarf, leaving no compact object."],
  ["Why is Cas A a big deal for nucleosynthesis?", "It's young and close enough to resolve freshly synthesized ejecta (O, Si, S, Fe) and newly formed dust, testing supernova models."],
  ["How do Cepheids give distances to other galaxies?", "Measure the period → P–L relation gives M_V → compare with observed m → distance modulus → distance (Hubble used this!)."],
  ["What does the shape of an eclipsing-binary light curve tell you?", "Orbital period, relative radii, and (from the two different dip depths) the temperature/size ratio of the two stars. Flat top + sharp dips."],
  ["What makes Ophion different from an open cluster?", "It is unbound and dispersing: its members have chaotic, diverging velocities instead of sharing a common space motion."],
  ["Why is Sharpless 29 interesting in one image?", "It shows emission, reflection, AND dark nebulosity together, plus very young (<2 Myr) hot stars actively shaping the gas."],
  ["What is 'spectral type' physically?", "A temperature classification based on which lines/bands appear; composition and gravity are secondary effects read from line strengths."],
  ["What's the difference between apparent and absolute magnitude?", "m = as seen from Earth (depends on distance); M = what it would look like at 10 pc (intrinsic luminosity). Equal when d = 10 pc."],
  ["If a star's radius triples at constant temperature, what happens to L?", "L ∝ R²T⁴ → 3² = 9× more luminous."],
  ["A star's spectrum is redshifted by 0.1% of its wavelength. How fast is it receding?", "v = 0.001c ≈ 300 km/s."],
  ["What's the practical difference between Chandra, JWST, Hubble, and MeerKAT?", "Chandra = X-ray (hot gas, accretion); JWST = IR (dust, protostars, high-z); Hubble = visible/UV (stars, nebulae); MeerKAT/VLA/ALMA = radio (21 cm, molecules, synchrotron)."],
  ["How do you recognize a planetary nebula in an image?", "Symmetric shell/ring or bipolar lobes, often with a hot central star, frequently teal/blue-green ([O III]) and red (Hα) — and no dust lanes like a star-forming region."],
  ["How do you recognize a supernova remnant in an image?", "Filamentary/clumpy expanding shell, often with a central point source (NS) or diffuse synchrotron glow; bright in radio and X-ray. Ragged (Cas A) or round (Tycho)."],
  ["How do you recognize a star-forming region in an image?", "Pink/red Hα glow + dark dust lanes + blue reflection nebulosity + clusters of bright young stars, often bright in IR."],
  ["What should you write if asked to sketch a pulsar light curve?", "Axes labeled (time in seconds, flux/intensity), narrow regular pulses repeating every period, at least 3 periods shown, roughly constant baseline between pulses."]
];
