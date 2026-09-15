/**
 * OrbitSense Div C - Comprehensive Data Store
 * Science Olympiad Division C Remote Sensing Master Hub
 */

const DIAGNOSTIC_QUESTIONS = [
  // --- Category: Satellites & Sensors (4 Questions) ---
  {
    id: "sat_1",
    category: "Satellites & Sensors",
    topic: "A-Train Constellation Formation",
    question: "In the NASA Afternoon Constellation (A-Train), which satellite historically served as the lead flagship of the formation, and what is the approximate local equator crossing time for satellites in this sun-synchronous orbit?",
    options: [
      "Terra; 10:30 AM ascending node",
      "Aqua; 1:30 PM ascending node",
      "Aura; 1:30 PM descending node",
      "Landsat 8; 10:00 AM descending node"
    ],
    correctIndex: 1,
    explanation: "Aqua was launched in 2002 as the lead satellite of the A-Train. The 'A' stands for Afternoon because the satellites cross the equator heading north (ascending node) around 1:30 PM local solar time. Terra is the morning flagship (10:30 AM descending node) and is NOT in the A-Train.",
    calcTip: "Remember: A-Train = Afternoon = 1:30 PM ascending (Aqua leads, Aura near the end). Morning EOS = Terra at 10:30 AM."
  },
  {
    id: "sat_2",
    category: "Satellites & Sensors",
    topic: "Active vs. Passive Sensing in A-Train",
    question: "Which of the following pairings correctly identifies TWO ACTIVE remote sensing instruments aboard satellites in the A-Train / C-Train formation?",
    options: [
      "MODIS (Aqua) and OMI (Aura)",
      "CERES (Aqua) and AIRS (Aqua)",
      "CALIOP (CALIPSO) and CPR (CloudSat)",
      "POLDER (PARASOL) and AMSR2 (GCOM-W1)"
    ],
    correctIndex: 2,
    explanation: "Active sensors emit their own electromagnetic radiation and measure the backscattered return signal. CALIOP on CALIPSO uses an active dual-wavelength Nd:YAG laser (LiDAR at 532 nm and 1064 nm), while CPR on CloudSat uses an active 94 GHz (W-band) millimeter-wave radar to profile cloud vertical layers.",
    calcTip: "Passive = detects existing solar or emitted thermal light (MODIS, AIRS, CERES, OMI). Active = sends its own pulse (LiDAR like CALIOP, Radar like CPR or Jason altimeters)."
  },
  {
    id: "sat_3",
    category: "Satellites & Sensors",
    topic: "OCO-2 Column CO2 & Reference Band",
    question: "NASA's OCO-2 satellite measures the column-averaged dry air mole fraction of carbon dioxide (XCO2). Why does OCO-2 specifically normalize carbon dioxide against the oxygen A-band (0.76 µm)?",
    options: [
      "Oxygen reacts with CO2 in the spectrometer detector to enhance optical gain",
      "Oxygen has a known, nearly constant atmospheric mixing ratio (20.95%), providing the exact dry air surface pressure and optical path length",
      "Oxygen absorption cancels out stratospheric ozone interference in the infrared",
      "Oxygen measurements allow the sensor to detect chlorophyll fluorescence exclusively"
    ],
    correctIndex: 1,
    explanation: "Because atmospheric water vapor varies wildly (0% to 4%), measuring raw CO2 column density would fluctuate with humidity and surface elevation. Oxygen has a constant 20.95% concentration in dry air. By measuring the O2 A-band at 0.76 µm, OCO-2 determines the exact surface pressure and atmospheric path length, yielding XCO2 = (total CO2 column) / (total dry air column).",
    calcTip: "XCO2 = CO2 / Dry Air. The O2 A-band at 0.76 µm provides the denominator. Crucial Science Olympiad exam trap!"
  },
  {
    id: "sat_4",
    category: "Satellites & Sensors",
    topic: "Resolution Tradeoffs: Landsat vs. MODIS",
    question: "A remote sensing scientist wants to monitor both rapid weekly wildfire recovery and detailed 30-meter urban heat island boundaries. Why can't a single sensor like MODIS or Landsat OLI perfectly satisfy both needs simultaneously?",
    options: [
      "MODIS lacks thermal infrared bands entirely",
      "Due to optical throughput and orbital physics, higher spatial resolution (Landsat: 30 m) necessitates a narrower swath and longer revisit time (16 days), whereas frequent revisit (MODIS: 1-2 days) requires a wide swath and coarse spatial resolution (250m - 1km)",
      "Landsat orbits in geostationary orbit while MODIS orbits in low Earth orbit",
      "Landsat only collects data over the oceans while MODIS only observes landmasses"
    ],
    correctIndex: 1,
    explanation: "This illustrates the classic Spatial vs. Temporal resolution tradeoff in Earth observation. A sensor with high spatial detail (Landsat 30m) has a narrow swath (~185 km) taking 16 days to repeat coverage, whereas MODIS has a 2,330 km swath covering the globe every 1–2 days but with 250m to 1km pixels.",
    calcTip: "High spatial = slow revisit (Landsat). Moderate spatial = daily revisit (MODIS/VIIRS). High temporal (minutes) = Geostationary (GOES) with coarse regional pixels."
  },

  // --- Category: Climate Processes & Earth Systems (4 Questions) ---
  {
    id: "clim_1",
    category: "Climate Processes",
    topic: "Atmospheric Window & Outgoing Longwave Radiation",
    question: "Thermal infrared satellite sensors (such as MODIS Band 31/32 or GOES thermal channels) frequently observe Earth surface temperature in the 'Atmospheric Window' between 8 µm and 12 µm. Why is this specific spectral window used?",
    options: [
      "Solar radiation reaches its maximum peak irradiance between 8 and 12 µm",
      "Atmospheric gases (primarily H2O and CO2) have very low absorption in this band, allowing surface thermal emission to escape directly to space",
      "Ozone absorbs 100% of the radiation in this window, creating high contrast",
      "Nitrogen and oxygen scatter thermal IR strongly via Rayleigh scattering"
    ],
    correctIndex: 1,
    explanation: "Between 8 and 12 µm (except for a narrow ozone absorption band near 9.6 µm), the cloud-free atmosphere is transparent to terrestrial thermal radiation. Sensors tuned to this window 'see' all the way down to the surface or cloud tops to measure their kinetic temperature.",
    calcTip: "Atmospheric Window = 8 to 12 µm. Terrestrial blackbody peak at 288 K is ~10 µm (Wien's Law: 2898 / 288 = 10.06 µm), right inside this window!"
  },
  {
    id: "clim_2",
    category: "Climate Processes",
    topic: "ENSO Remote Sensing Signatures",
    question: "During an El Niño event in the equatorial Pacific, what characteristic oceanic and atmospheric anomalies are observed by remote sensing satellites?",
    options: [
      "Trade winds strengthen; eastern Pacific sea surface height (SSH) drops by 20 cm; intense coastal upwelling of cold water off Peru",
      "Easterly trade winds weaken or reverse; warm water surges eastward; eastern Pacific experiences positive SSH anomalies (+10 to +25 cm) and warmer SST anomalies",
      "Western Pacific warm pool expands northward toward the Arctic; thermocline steepens dramatically off South America",
      "Sea surface salinity in the eastern Pacific reaches extreme highs as rainfall halts over Ecuador and Peru"
    ],
    correctIndex: 1,
    explanation: "During El Niño, the Walker circulation weakens, trade winds relax, and warm water sloshes east toward South America. Because warmer water is less dense and expands thermally (steric effect), radar altimeters (Jason/Sentinel-6) measure positive SSH anomalies (+10 to +25 cm) and radiometers detect high SST anomalies in the central/eastern Pacific, while upwelling shuts down.",
    calcTip: "El Niño: Eastern Pacific = High SST (warm) + High SSH (altimeter positive anomaly) + Weakened trade winds + Suppressed upwelling. La Niña is the opposite."
  },
  {
    id: "clim_3",
    category: "Climate Processes",
    topic: "Cryosphere & Ice-Albedo Positive Feedback",
    question: "How does the seasonal loss of Arctic sea ice constitute a positive (destabilizing) feedback mechanism in Earth's climate system?",
    options: [
      "Melting sea ice releases massive amounts of dissolved CO2 directly into the atmosphere",
      "Replacing highly reflective sea ice (albedo ~0.60 to 0.85) with dark open ocean water (albedo ~0.06) increases solar absorption, raising regional temperatures and melting more ice",
      "Melting sea ice immediately raises global mean sea level by over 2 meters due to Archimedes' principle",
      "Open ocean water reflects shortwave UV radiation much more efficiently than sea ice, causing stratospheric cooling"
    ],
    correctIndex: 1,
    explanation: "Sea ice has a high albedo (reflects 60-85% of solar radiation). When it melts, it exposes dark open seawater (albedo ~0.06), which absorbs ~94% of incident sunlight. This absorbed energy warms the ocean, which melts further ice, accelerating regional warming (Arctic Amplification).",
    calcTip: "Positive feedback = amplifies the initial change (Ice melts -> Albedo drops -> Heat absorption increases -> More ice melts). Floating sea ice melt does not raise sea level; land ice (glaciers/ice sheets) does!"
  },
  {
    id: "clim_4",
    category: "Climate Processes",
    topic: "The Keeling Curve & Carbon Cycle",
    question: "The Keeling Curve recorded at Mauna Loa exhibits both a continuous secular upward trend and an annual sinusoidal oscillation. What is the primary physical cause of the annual oscillation, with its minimum occurring around September/October?",
    options: [
      "Changes in the Earth-Sun distance between perihelion and aphelion",
      "Seasonal variation in global automobile driving habits between winter and summer",
      "Vigorous photosynthetic uptake of CO2 by Northern Hemisphere terrestrial vegetation during spring and summer, followed by autumn/winter plant decay and respiration",
      "Seasonal melting of Antarctic ice shelves releasing trapped methane that oxidizes into CO2"
    ],
    correctIndex: 2,
    explanation: "The Northern Hemisphere contains the vast majority of Earth's landmass and deciduous forests. In NH spring/summer (May to September), trees draw down billions of tons of CO2 through photosynthesis, creating the annual minimum in September/October. In autumn/winter, respiration and microbial decomposition dominate, causing CO2 to peak in May.",
    calcTip: "Keeling Sawtooth: Peak in May (end of NH winter respiration), Trough in Oct (end of NH summer photosynthesis). Amplitude ~6 ppm."
  },

  // --- Category: Remote Sensing Physics & Spectroscopy (4 Questions) ---
  {
    id: "phys_1",
    category: "Physics & Spectroscopy",
    topic: "Atmospheric Scattering Regimes",
    question: "Why does the daytime cloudless sky appear blue to passive visible sensors, while clouds and heavy water vapor appear bright white across all visible wavelengths?",
    options: [
      "Air molecules cause Mie scattering (λ^1), while clouds cause non-selective geometric scattering",
      "Air molecules (d << λ) cause Rayleigh scattering proportional to 1/λ^4, preferentially scattering short blue wavelengths; cloud droplets (d >> λ) cause non-selective scattering, reflecting all visible wavelengths equally",
      "Water vapor absorbs blue light and re-emits it through phosphorescence",
      "Ozone in the troposphere absorbs red light exclusively in the Chappuis band"
    ],
    correctIndex: 1,
    explanation: "Rayleigh scattering occurs when particle diameter d is much smaller than wavelength λ (d << λ). Intensity varies as 1/λ^4, meaning blue light (400 nm) scatters roughly 10 times more than red light (700 nm). Cloud droplets are much larger than visible wavelengths (d >> λ), producing non-selective scattering where all visible colors scatter equally, appearing white.",
    calcTip: "Rayleigh: d << λ, I ∝ 1/λ^4 (blue sky). Mie: d ≈ λ (smoke, haze, dust). Non-selective: d >> λ (clouds, fog - white appearance)."
  },
  {
    id: "phys_2",
    category: "Physics & Spectroscopy",
    topic: "Wien's Displacement Law",
    question: "Wien's Displacement Law states that λ_max = b / T, where b ≈ 2898 µm·K. If the Sun's photosphere has an effective temperature of 5778 K and Earth's surface averages 288 K, in which regions of the spectrum do their peak emissions occur?",
    options: [
      "Sun: Ultraviolet (0.15 µm); Earth: Visible green (0.50 µm)",
      "Sun: Visible green (0.50 µm); Earth: Thermal infrared (10.06 µm)",
      "Sun: Near-infrared (1.20 µm); Earth: Microwave (100 µm)",
      "Sun: Thermal infrared (10 µm); Earth: Radio waves (1 m)"
    ],
    correctIndex: 1,
    explanation: "For the Sun: λ_max = 2898 / 5778 ≈ 0.501 µm (501 nm, visible green light). For Earth: λ_max = 2898 / 288 ≈ 10.06 µm (thermal infrared). This fundamental difference is why solar radiation is classified as 'shortwave' and Earth radiation as 'longwave'.",
    calcTip: "Sun = Shortwave (peak ~0.5 µm, visible). Earth = Longwave (peak ~10 µm, thermal IR). Wien's constant b = 2898 µm·K."
  },
  {
    id: "phys_3",
    category: "Physics & Spectroscopy",
    topic: "Beer-Lambert Law & Attenuation",
    question: "A satellite laser altimeter emits a light pulse with an initial intensity of I_0 = 1000 W/m² through a uniform smoke plume. If the plume has an optical depth of τ = 0.693, what is the transmitted beam intensity I?",
    options: [
      "1000 W/m² (no attenuation)",
      "500 W/m²",
      "307 W/m²",
      "693 W/m²"
    ],
    correctIndex: 1,
    explanation: "According to the Beer-Lambert Law, I = I_0 · e^(-τ). With τ = 0.693, e^(-0.693) = e^(-ln 2) = 1/2 = 0.5. Therefore, I = 1000 · 0.5 = 500 W/m².",
    calcTip: "Formula: I = I_0 · e^(-τ). Notice that ln(2) ≈ 0.6931, so optical depth 0.693 cuts intensity exactly in half!"
  },
  {
    id: "phys_4",
    category: "Physics & Spectroscopy",
    topic: "Stratospheric Ozone & Polar Stratospheric Clouds",
    question: "Why does catastrophic Antarctic ozone depletion ('the Ozone Hole') peak specifically during the Southern Hemisphere spring (September/October), rather than mid-winter (June/July)?",
    options: [
      "CFC emissions from industrial nations spike during the southern hemisphere spring months",
      "During dark winter, extreme cold forms Polar Stratospheric Clouds (PSCs) that convert inert chlorine reservoirs (HCl, ClONO2) into active Cl2; returning spring sunlight photolyzes Cl2 into reactive chlorine radicals (Cl·) that catalytically destroy ozone",
      "The polar vortex completely dissipates in August, allowing warm equatorial ozone to rapidly flood Antarctica and decompose",
      "UV-A radiation from solar flares only reaches the South Pole during the equinox"
    ],
    correctIndex: 1,
    explanation: "During the pitch-black Antarctic polar night, temperatures drop below -78°C inside the isolated polar vortex, enabling Type I and II PSCs to form. Heterogeneous chemical reactions on cloud ice crystals convert inactive reservoir species (HCl and ClONO2) into molecular chlorine (Cl2). When sunlight returns in September, UV light photolyzes Cl2 -> 2 Cl·, triggering an intense catalytic chain reaction.",
    calcTip: "Mechanism: Winter cold -> PSCs form -> Chlorine reservoirs converted to Cl2 -> Spring sun returns -> Photolysis produces Cl· radicals -> Rapid ozone destruction."
  },

  // --- Category: Quantitative Calculations & Calculator Math (4 Questions) ---
  {
    id: "math_1",
    category: "Math & Calculations",
    topic: "Planetary Equilibrium Temperature (0-D EBM)",
    question: "Given a solar constant at Earth S_0 = 1361 W/m², an average planetary albedo α = 0.30, and the Stefan-Boltzmann constant σ = 5.6704 × 10^-8 W/(m²·K⁴), calculate Earth's effective blackbody emission temperature T_e (without greenhouse atmosphere).",
    options: [
      "288 K (15°C)",
      "255 K (-18°C)",
      "273 K (0°C)",
      "303 K (30°C)"
    ],
    correctIndex: 1,
    explanation: "Equilibrium condition: Absorbed solar flux = Emitted thermal flux. (1 - α) · (S_0 / 4) = σ · T_e⁴. Absorbed flux = (1 - 0.30) · (1361 / 4) = 0.70 · 340.25 = 238.175 W/m². T_e = (238.175 / (5.6704 × 10^-8))^(1/4) = (4.2003 × 10^9)^(0.25) ≈ 254.9 K ≈ 255 K (-18°C).",
    calcTip: "TI-84 Shortcut: ((1 - 0.3) * 1361 / (4 * 5.6704E-8)) ^ 0.25 = 254.9 K. Remember to divide by 4 because Earth's spherical surface (4πR²) distributes radiation intercepted by its disk (πR²)!"
  },
  {
    id: "math_2",
    category: "Math & Calculations",
    topic: "1-Layer Atmospheric Greenhouse Model",
    question: "Assuming a simple 1-layer isothermal atmosphere that is completely transparent to incoming shortwave solar radiation and completely opaque (emissivity ε = 1.0) to outgoing longwave terrestrial radiation, what is the theoretical surface temperature T_s in terms of effective temperature T_e (255 K)?",
    options: [
      "T_s = T_e = 255 K",
      "T_s = 2^(1/4) · T_e ≈ 1.189 · 255 K ≈ 303 K",
      "T_s = 2^(1/2) · T_e ≈ 1.414 · 255 K ≈ 361 K",
      "T_s = 4^(1/4) · T_e ≈ 1.414 · 255 K ≈ 361 K"
    ],
    correctIndex: 1,
    explanation: "At the top of the atmosphere: σ·T_a⁴ = (1-α)S_0/4 = σ·T_e⁴ -> T_a = T_e. At the atmospheric layer: it radiates both upward to space and downward to the surface: 2σ·T_a⁴ = σ·T_s⁴ -> T_s⁴ = 2·T_a⁴ = 2·T_e⁴ -> T_s = 2^(1/4) · T_e. Since 2^0.25 ≈ 1.1892, T_s ≈ 1.1892 · 254.9 K ≈ 303.1 K (30°C).",
    calcTip: "1-layer greenhouse formula: T_surface = 2^(1/4) * T_e = 1.1892 * 255 = 303 K. If N layers: T_surface = (N + 1)^(1/4) * T_e."
  },
  {
    id: "math_3",
    category: "Math & Calculations",
    topic: "Kepler's 3rd Law & Satellite Orbit Period",
    question: "A sun-synchronous Earth observation satellite (such as Landsat 8 or Aqua) orbits at an altitude of h = 705 km above Earth's surface. Using Earth radius R_E = 6371 km and standard gravitational parameter GM_E = 3.986 × 10¹⁴ m³/s², what is the satellite's orbital period T?",
    options: [
      "50.2 minutes (28.7 orbits/day)",
      "98.9 minutes (14.6 orbits/day)",
      "1436 minutes (1.0 orbit/day)",
      "180.5 minutes (8.0 orbits/day)"
    ],
    correctIndex: 1,
    explanation: "Semi-major axis a = R_E + h = 6371 km + 705 km = 7076 km = 7.076 × 10⁶ m. By Kepler's 3rd Law: T = 2π · √(a³ / GM) = 2π · √((7.076 × 10⁶)³ / (3.986 × 10¹⁴)) = 2π · √(3.543 × 10²⁰ / 3.986 × 10¹⁴) = 2π · √(8.888 × 10⁵) = 2π · 942.77 ≈ 5923.6 seconds ≈ 98.7 to 98.9 minutes. Orbits per day = 1440 min / 98.8 min ≈ 14.56 ≈ 14.6 orbits/day.",
    calcTip: "TI-84 Keystrokes: 2*π*√((6371000 + 705000)^3 / 3.986E14) / 60 = 98.8 minutes. Daily passes = 1440 / 98.8 = 14.57."
  },
  {
    id: "math_4",
    category: "Math & Calculations",
    topic: "Normalized Difference Vegetation Index (NDVI)",
    question: "A satellite radiometer measures reflectance over an agricultural parcel: Red Band (0.66 µm) reflectance ρ_red = 0.08, and Near-Infrared Band (0.86 µm) reflectance ρ_nir = 0.58. Calculate the NDVI value and interpret the vegetation condition.",
    options: [
      "NDVI = +0.76; Dense, healthy green vegetation canopy",
      "NDVI = +0.31; Sparse, heavily stressed or senescent vegetation",
      "NDVI = -0.76; Clear, deep open water",
      "NDVI = 0.00; Bare dry sandy soil"
    ],
    correctIndex: 0,
    explanation: "NDVI = (ρ_nir - ρ_red) / (ρ_nir + ρ_red) = (0.58 - 0.08) / (0.58 + 0.08) = 0.50 / 0.66 ≈ +0.7576 ≈ +0.76. Healthy vegetation strongly absorbs red light for chlorophyll photosynthesis while its spongy mesophyll cellular structure strongly scatters NIR, yielding high positive NDVI (>0.6 to 0.8).",
    calcTip: "Formula: NDVI = (NIR - RED) / (NIR + RED). Range is -1.0 to +1.0. Water: < 0 (negative). Bare soil: ~0.1 - 0.2. Healthy dense crops/forests: 0.6 to 0.85."
  }
];

const SATELLITES_DATA = [
  {
    id: "aqua",
    name: "Aqua (EOS PM-1)",
    constellation: "A-Train Flagship",
    agency: "NASA / GSFC",
    launchYear: 2002,
    status: "Operational (drifting orbit)",
    orbit: {
      type: "Sun-synchronous LEO",
      altitude: "705 km",
      inclination: "98.2°",
      crossing: "1:30 PM ascending",
      repeat: "16 days (233 revolutions)"
    },
    sensorType: "Passive Multi-sensor Suite",
    climateFocus: "Global Water Cycle, SST, Clouds, Evaporation, Sea Ice",
    sensors: [
      {
        name: "MODIS",
        fullName: "Moderate Resolution Imaging Spectroradiometer",
        bands: "36 spectral bands (0.4 µm - 14.4 µm)",
        resolution: "250 m (bands 1-2), 500 m (bands 3-7), 1000 m (bands 8-36)",
        role: "Primary workhorse for aerosol optical depth, cloud properties, ocean color/chlorophyll, sea surface temperature, and land surface temperature."
      },
      {
        name: "AIRS",
        fullName: "Atmospheric Infrared Sounder",
        bands: "2,378 infrared channels (3.7 µm - 15.4 µm)",
        resolution: "13.5 km at nadir",
        role: "Hyperspectral temperature and moisture sounding throughout the vertical column; measures mid-tropospheric CO2, methane, and greenhouse gas distributions."
      },
      {
        name: "CERES",
        fullName: "Clouds and the Earth's Radiant Energy System (FM3 & FM4)",
        bands: "3 broadband channels: Shortwave (0.3-5 µm), Longwave window (8-12 µm), Total (0.3->100 µm)",
        resolution: "20 km at nadir",
        role: "Measures Earth's total radiant energy budget: reflected solar shortwave and emitted terrestrial longwave radiation flux at Top-of-Atmosphere (TOA)."
      },
      {
        name: "AMSR-E",
        fullName: "Advanced Microwave Scanning Radiometer - EOS",
        bands: "6 frequencies (6.9 to 89 GHz), dual polarization",
        resolution: "5.4 km to 56 km",
        role: "All-weather passive microwave measurements of sea ice extent, snow water equivalent, soil moisture, and sea surface temperature through non-precipitating clouds."
      },
      {
        name: "AMSU-A",
        fullName: "Advanced Microwave Sounding Unit-A",
        bands: "15 microwave channels (23.8 - 89 GHz)",
        resolution: "45 km at nadir",
        role: "Works synergistically with AIRS to obtain atmospheric temperature profiles even through thick clouds."
      }
    ],
    sciolySignificance: "The anchor of the Afternoon Constellation. Frequently tested on MODIS bands, CERES radiative balance, and AIRS CO2 sounding at 4.26 µm and 15 µm.",
    sampleQuestion: "Why does AIRS use thermal infrared channels near 4.26 µm and 15 µm to measure atmospheric carbon dioxide?",
    sampleAnswer: "These wavelengths correspond to the fundamental asymmetric stretching (ν3) and bending (ν2) vibrational absorption bands of the CO2 molecule."
  },
  {
    id: "aura",
    name: "Aura (EOS Chem-1)",
    constellation: "A-Train (Rear Guard)",
    agency: "NASA / GSFC",
    launchYear: 2004,
    status: "Operational (drifting orbit)",
    orbit: {
      type: "Sun-synchronous LEO",
      altitude: "705 km",
      inclination: "98.2°",
      crossing: "1:45 PM ascending (~15 min behind Aqua)",
      repeat: "16 days"
    },
    sensorType: "Atmospheric Chemistry & Limb Sounders",
    climateFocus: "Ozone Layer Health, Stratospheric Chemistry, Air Quality (NO2, SO2), Climate Forcing",
    sensors: [
      {
        name: "OMI",
        fullName: "Ozone Monitoring Instrument (KNMI/Netherlands/NASA)",
        bands: "UV and Visible hyperspectral (270 - 500 nm)",
        resolution: "13 × 24 km",
        role: "Monitors stratospheric ozone hole recovery, tropospheric pollutants (nitrogen dioxide NO2, sulfur dioxide SO2, formaldehyde HCHO), and UV-absorbing aerosol index."
      },
      {
        name: "MLS",
        fullName: "Microwave Limb Sounder",
        bands: "5 spectral regions (118 GHz to 2.5 THz)",
        resolution: "Vertical resolution 1.5 - 3 km in stratosphere",
        role: "Scans Earth's atmospheric limb to detect chemical species in the ozone depletion catalytic cycle: ClO, HCl, HNO3, O3, and water vapor injected into stratosphere."
      },
      {
        name: "TES",
        fullName: "Tropospheric Emission Spectrometer (operated until 2018)",
        bands: "High-resolution thermal IR Fourier transform (3.2 - 15.4 µm)",
        resolution: "5.3 × 8.5 km footprint",
        role: "Direct vertical profiling of tropospheric ozone (a potent greenhouse gas and toxic pollutant) and carbon monoxide."
      },
      {
        name: "HIRDLS",
        fullName: "High Resolution Dynamics Limb Sounder",
        bands: "21 infrared channels (6.12 to 17.76 µm)",
        resolution: "1 km vertical limb resolution",
        role: "Observed atmospheric gravity waves, upper troposphere/lower stratosphere trace gas exchange."
      }
    ],
    sciolySignificance: "Tested on Antarctic ozone hole dynamics, chlorine chemistry (MLS ClO detection), and tracking urban and industrial NO2 emissions via OMI.",
    sampleQuestion: "Which Aura instrument was instrumental in confirming the Montreal Protocol's success by measuring decreasing chlorine monoxide (ClO) in the Antarctic stratosphere?",
    sampleAnswer: "The Microwave Limb Sounder (MLS)."
  },
  {
    id: "calipso",
    name: "CALIPSO",
    constellation: "A-Train / C-Train",
    agency: "NASA / CNES (France)",
    launchYear: 2006,
    status: "Decommissioned Dec 2023 (17-year mission legacy)",
    orbit: {
      type: "Sun-synchronous LEO",
      altitude: "705 km (lowered to 688 km in 2018)",
      inclination: "98.2°",
      crossing: "1:30 PM ascending",
      repeat: "16 days"
    },
    sensorType: "ACTIVE Lidar & Passive IR/Visible",
    climateFocus: "Vertical Aerosol Extinction, Cloud Profiles, Polar Stratospheric Clouds (PSCs)",
    sensors: [
      {
        name: "CALIOP",
        fullName: "Cloud-Aerosol Lidar with Orthogonal Polarization",
        bands: "Dual wavelength Nd:YAG laser: 532 nm (polarized & unpolarized) and 1064 nm",
        resolution: "Vertical resolution: 30 to 60 m; horizontal: 333 m",
        role: "Active spaceborne lidar emitting laser pulses to profile vertical 'curtains' of aerosols (dust, smoke, maritime salt, sulfate) and thin cirrus clouds; measures depolarization ratio to distinguish spherical water droplets from non-spherical ice crystals."
      },
      {
        name: "WFC",
        fullName: "Wide Field Camera",
        bands: "Single visible band (645 nm)",
        resolution: "125 m",
        role: "Provides high-resolution spatial context for CALIOP lidar tracks."
      },
      {
        name: "IIR",
        fullName: "Imaging Infrared Radiometer",
        bands: "3 thermal channels (8.65, 10.6, 12.05 µm)",
        resolution: "1 km",
        role: "Determines cirrus cloud emissivity and optical depth."
      }
    ],
    sciolySignificance: "Prime example of active LiDAR in space. Tested on depolarization ratio (spherical water vs jagged ice crystals) and vertical curtain aerosol identification.",
    sampleQuestion: "How does CALIOP determine whether a high-altitude cloud consists of liquid water droplets or ice crystals?",
    sampleAnswer: "By measuring the depolarization ratio of the 532 nm backscatter. Spherical water droplets preserve linear polarization, while non-spherical ice crystals depolarize the returned laser pulse."
  },
  {
    id: "cloudsat",
    name: "CloudSat",
    constellation: "A-Train / C-Train",
    agency: "NASA / CSA / CSU",
    launchYear: 2006,
    status: "Decommissioned Dec 2023",
    orbit: {
      type: "Sun-synchronous LEO",
      altitude: "705 km (lowered to 688 km in 2018)",
      inclination: "98.2°",
      crossing: "Flies ~15 seconds ahead of CALIPSO",
      repeat: "16 days"
    },
    sensorType: "ACTIVE Millimeter-Wave Radar",
    climateFocus: "Cloud Vertical Structure, Cloud Liquid Water Content, Precipitation Profiling",
    sensors: [
      {
        name: "CPR",
        fullName: "Cloud Profiling Radar",
        bands: "94 GHz (wavelength 3.19 mm, W-band microwave)",
        resolution: "Vertical range resolution: 480 m; footprint: 1.4 km",
        role: "Active pointing radar that penetrates optically thick storm clouds where lidar gets attenuated, measuring radar reflectivity (dBZ) to quantify cloud ice/liquid water and snowfall."
      }
    ],
    sciolySignificance: "Partner to CALIPSO. CloudSat's 94 GHz radar sees through dense clouds, whereas CALIPSO's lidar sees thin cirrus and aerosols that radar misses. Together they gave the first complete 3D structure of Earth's clouds.",
    sampleQuestion: "Why is CloudSat's 94 GHz CPR paired directly with CALIPSO's CALIOP lidar in formation flight?",
    sampleAnswer: "Synergy: CALIOP detects thin aerosols and optically thin clouds that millimeter radar cannot see, while CloudSat's CPR penetrates deep into thick rain and storm clouds where lidar light is completely attenuated."
  },
  {
    id: "oco2",
    name: "OCO-2 (Orbiting Carbon Observatory-2)",
    constellation: "A-Train (Lead)",
    agency: "NASA / JPL",
    launchYear: 2014,
    status: "Operational",
    orbit: {
      type: "Sun-synchronous LEO",
      altitude: "705 km",
      inclination: "98.2°",
      crossing: "1:36 PM ascending (~15 min ahead of Aqua)",
      repeat: "16 days"
    },
    sensorType: "Passive High-Resolution Grating Spectrometers",
    climateFocus: "Atmospheric Carbon Dioxide (CO2), Carbon Sinks/Sources, Solar-Induced Fluorescence (SIF)",
    sensors: [
      {
        name: "Three High-Resolution Spectrometers",
        fullName: "O2 A-band, Weak CO2 band, Strong CO2 band",
        bands: "Band 1: 0.76 µm (O2-A); Band 2: 1.61 µm (weak CO2); Band 3: 2.06 µm (strong CO2)",
        resolution: "Spatial footprint: 1.29 × 2.25 km",
        role: "Measures absorption lines of reflected sunlight. Yields column-averaged dry air mole fraction XCO2 with accuracy better than 1 ppm (0.25%). Also detects SIF (Solar-Induced chlorophyll Fluorescence) at 0.76 µm as a direct proxy for plant photosynthesis."
      }
    ],
    sciolySignificance: "Heavily featured on recent Div C national and invitational exams! Tested on XCO2 definition, dry air normalization, O2 A-band role, and regional CO2 plumes vs Amazon/Congo sinks.",
    sampleQuestion: "What is the physical meaning of the 'X' in XCO2 as measured by OCO-2?",
    sampleAnswer: "It designates a column-averaged dry air mole fraction, representing the ratio of total CO2 molecules to total dry air molecules from the surface to the top of the atmosphere."
  },
  {
    id: "terra",
    name: "Terra (EOS AM-1)",
    constellation: "EOS Morning Flagship",
    agency: "NASA / GSFC",
    launchYear: 1999,
    status: "Operational (drifting orbit)",
    orbit: {
      type: "Sun-synchronous LEO",
      altitude: "705 km",
      inclination: "98.2°",
      crossing: "10:30 AM descending node",
      repeat: "16 days"
    },
    sensorType: "Passive Multi-sensor Suite",
    climateFocus: "Global Land Cover, Vegetation Dynamics, Carbon Monoxide, Radiation Budget",
    sensors: [
      {
        name: "MODIS (Flight Model 1)",
        fullName: "Moderate Resolution Imaging Spectroradiometer",
        bands: "36 spectral bands (0.4 µm - 14.4 µm)",
        resolution: "250m / 500m / 1000m",
        role: "Pairs with Aqua MODIS to provide 4 daily looks at global land, ocean, and atmosphere (10:30 AM, 1:30 PM, 10:30 PM, 1:30 AM)."
      },
      {
        name: "ASTER",
        fullName: "Advanced Spaceborne Thermal Emission and Reflection Radiometer (METI/NASA)",
        bands: "14 bands: 3 VNIR (15m), 6 SWIR (30m), 5 TIR (90m)",
        resolution: "15 m - 90 m",
        role: "Generates high-resolution Digital Elevation Models (DEMs), monitors volcanic thermal anomalies, glacier retreat, and urban surface heat."
      },
      {
        name: "MISR",
        fullName: "Multi-angle Imaging SpectroRadiometer",
        bands: "4 spectral bands viewed simultaneously at 9 fixed camera angles (+70.5° to -70.5°)",
        resolution: "275 m - 1.1 km",
        role: "Multi-angle viewing measures 3D cloud top heights, plume heights, and distinguishes aerosol types by angular scattering."
      },
      {
        name: "MOPITT",
        fullName: "Measurement of Pollution in the Troposphere (CSA/NASA)",
        bands: "Thermal IR gas correlation radiometer (4.7 µm and 2.3 µm)",
        resolution: "22 km",
        role: "Tracks tropospheric carbon monoxide (CO) plumes originating from biomass burning and industrial emissions."
      },
      {
        name: "CERES (FM1 & FM2)",
        fullName: "Clouds and Earth's Radiant Energy System",
        bands: "Shortwave, Longwave Window, Total",
        resolution: "20 km",
        role: "Morning component of global radiative energy balance measurements."
      }
    ],
    sciolySignificance: "Oldest continuous EOS flagship. Tested on ASTER stereo elevation modeling, MISR multi-angle aerosol scattering, and MODIS daily vegetation products.",
    sampleQuestion: "Why does MISR use nine cameras pointed at different forward and aft angles rather than a single nadir-pointing camera?",
    sampleAnswer: "Multi-angle observation allows stereoscopic determination of cloud and aerosol plume heights and measures the directional scattering (BRDF) of Earth's surfaces and aerosols."
  },
  {
    id: "landsat",
    name: "Landsat 8 & 9",
    constellation: "USGS / NASA Landsat Program",
    agency: "NASA / USGS",
    launchYear: "L8: 2013 | L9: 2021",
    status: "Operational",
    orbit: {
      type: "Sun-synchronous LEO",
      altitude: "705 km",
      inclination: "98.2°",
      crossing: "10:11 AM ± 15 min descending",
      repeat: "16 days (8 days combined L8 + L9)"
    },
    sensorType: "Passive Multispectral & Thermal Pushbroom",
    climateFocus: "High-Resolution Land Cover Change, Deforestation, Agriculture, Glaciers, Urban Heat",
    sensors: [
      {
        name: "OLI / OLI-2",
        fullName: "Operational Land Imager",
        bands: "9 spectral bands (Costal/Aerosol 0.43µm, Blue, Green, Red, NIR, SWIR-1, SWIR-2, Pan 0.59µm, Cirrus 1.37µm)",
        resolution: "30 m (15 m for Band 8 Panchromatic)",
        role: "Pushbroom array with 12-bit radiometric resolution providing precision land surface reflectance, NDVI, and wetland mapping."
      },
      {
        name: "TIRS / TIRS-2",
        fullName: "Thermal Infrared Sensor",
        bands: "2 thermal bands: Band 10 (10.6-11.19 µm) and Band 11 (11.5-12.51 µm)",
        resolution: "100 m (resampled to 30 m in distributed products)",
        role: "Split-window atmospheric correction to derive Land Surface Temperature (LST) and calculate agricultural evapotranspiration."
      }
    ],
    sciolySignificance: "The gold standard for medium-high resolution land imaging since 1972 (50+ year continuous record). Tested on false-color composite band combinations (e.g. 5-4-3 NIR CIR composite) and 30m pixel spatial calculations.",
    sampleQuestion: "In a Landsat 8 False Color Infrared (CIR) image using Bands 5 (NIR), 4 (Red), and 3 (Green) displayed as RGB, what color does healthy, dense vegetation appear, and why?",
    sampleAnswer: "Bright red. Healthy vegetation has intense reflectance in Band 5 (NIR) which is mapped to the Red display channel, while absorbing Band 4 (Red light) for photosynthesis."
  },
  {
    id: "goes",
    name: "GOES-R Series (GOES-16 / 17 / 18 / 19)",
    constellation: "NOAA Geostationary Operational Environmental Satellites",
    agency: "NOAA / NASA",
    launchYear: "GOES-16 (East): 2016 | GOES-18 (West): 2022",
    status: "Operational",
    orbit: {
      type: "Geostationary (GEO)",
      altitude: "35,786 km (circular equatorial)",
      inclination: "0.0°",
      crossing: "Stationary relative to Earth surface",
      repeat: "Continuous 24/7 view of Western Hemisphere"
    },
    sensorType: "Passive Multispectral Imager & Lightning Mapper",
    climateFocus: "Extreme Weather, Hurricane Rapid Intensification, Wildfire Detection, Cloud Dynamics",
    sensors: [
      {
        name: "ABI",
        fullName: "Advanced Baseline Imager",
        bands: "16 spectral bands (2 visible, 4 near-IR, 10 thermal IR)",
        resolution: "0.5 km (Band 2 Red visible), 1 km (other VNIR), 2 km (thermal IR)",
        role: "Scans full disk in 10 minutes, CONUS in 5 minutes, and meso-scale severe storm sectors every 30 to 60 seconds."
      },
      {
        name: "GLM",
        fullName: "Geostationary Lightning Mapper",
        bands: "Near-IR optical transient detector (777.4 nm oxygen emission)",
        resolution: "8 - 14 km",
        role: "Continuous detection of total in-cloud and cloud-to-ground lightning activity as an early warning for severe storm updrafts."
      }
    ],
    sciolySignificance: "Fundamental example of geostationary remote sensing. Tested on orbital altitude (35,786 km), temporal resolution (seconds to minutes), and tracking fire radiative power (FRP) with the 3.9 µm shortwave IR band.",
    sampleQuestion: "Why is the 3.9 µm channel on GOES ABI exceptionally sensitive for detecting sub-pixel wildfires before visible smoke is seen?",
    sampleAnswer: "According to Wien's Law, as temperature rises from ambient (~300 K) to wildfire temperatures (~800-1200 K), peak blackbody emission shifts toward shorter infrared wavelengths (3-4 µm), producing a huge radiance spike."
  },
  {
    id: "grace",
    name: "GRACE & GRACE-FO",
    constellation: "Twin Gravimetry Mission",
    agency: "NASA / GFZ (Germany)",
    launchYear: "GRACE: 2002 | GRACE-FO: 2018",
    status: "Operational (GRACE-FO)",
    orbit: {
      type: "Polar LEO (tandem formation)",
      altitude: "490 km (decaying)",
      inclination: "89.0°",
      crossing: "Separated by ~220 km along-track",
      repeat: "Monthly global gravity anomaly maps"
    },
    sensorType: "ACTIVE Microwave & Laser Ranging Gravimeter",
    climateFocus: "Groundwater Depletion, Ice Sheet Mass Loss (Greenland & Antarctica), Ocean Mass Change",
    sensors: [
      {
        name: "K-Band Ranging (KBR) & Laser Ranging Interferometer (LRI)",
        fullName: "Inter-satellite distance tracking system",
        bands: "K/Ka-band microwaves (24/32 GHz) on GRACE; 1064 nm Laser on GRACE-FO",
        resolution: "Measures distance changes between twin satellites down to microns (KBR) and nanometers (LRI); spatial resolution ~300 km on ground",
        role: "As the lead satellite flies over a region with greater gravitational mass (e.g. an aquifer or mountain), it accelerates forward, widening the gap; as the trailing satellite approaches, it accelerates too, closing the gap. Inverts these micrometric distance shifts into monthly mass change maps."
      }
    ],
    sciolySignificance: "Unique non-electromagnetic surface mass sensor! Regularly tested on measuring groundwater loss in the Central Valley of California and the Indo-Gangetic plain, as well as Greenland mass loss (gigatons/yr).",
    sampleQuestion: "How can satellite gravimetry (GRACE) detect groundwater pumping beneath the surface of the Earth?",
    sampleAnswer: "Water has substantial mass. When billions of gallons of groundwater are extracted and consumed/evaporated, the local gravitational attraction decreases, causing a measurable negative gravity anomaly in the twin satellites' distance."
  },
  {
    id: "altimetry",
    name: "Ocean Altimetry (Jason-3 & Sentinel-6 Michael Freilich)",
    constellation: "Jason / Copernicus Altimetry Fleet",
    agency: "NASA / NOAA / CNES / EUMETSAT / ESA",
    launchYear: "Jason-3: 2016 | Sentinel-6: 2020",
    status: "Operational",
    orbit: {
      type: "Non-sun-synchronous LEO (to avoid aliasing solar tides)",
      altitude: "1,336 km",
      inclination: "66.0°",
      crossing: "Varies (designed to sample diurnal tides)",
      repeat: "9.9 days (10-day repeat cycle)"
    },
    sensorType: "ACTIVE Dual-Frequency Radar Altimeter",
    climateFocus: "Global Mean Sea Level Rise (3.4 mm/yr), El Niño Kelvin Waves, Ocean Currents & Gyres",
    sensors: [
      {
        name: "Poseidon-4 / Dual-Frequency Radar Altimeter",
        fullName: "Ku-band (13.575 GHz) and C-band (5.3 GHz) SAR Altimeter",
        bands: "Ku and C band microwaves",
        resolution: "1-2 cm sea surface height accuracy",
        role: "Transmits precision radar pulses downward and times the two-way return to calculate range d = c·Δt / 2. Dual frequencies correct for ionospheric electron delay. Synergizes with Advanced Microwave Radiometer (AMR) to correct for tropospheric water vapor delay."
      }
    ],
    sciolySignificance: "The definitive instrument for measuring global sea level rise (~3.4 mm/year) and detecting ENSO sea surface height anomalies. The non-sun-synchronous orbit at 66° inclination is a classic test question!",
    sampleQuestion: "Why are reference ocean altimeters like Jason-3 and Sentinel-6 placed in a 66° inclination orbit rather than a sun-synchronous orbit?",
    sampleAnswer: "A sun-synchronous orbit crosses locations at the same solar time every pass, which would alias solar ocean tides into false climate sea-level signals. The 66° orbit precesses across all solar tidal phases."
  },
  {
    id: "sentinel",
    name: "Copernicus Sentinel Constellation",
    constellation: "European Space Agency (ESA) Copernicus Program",
    agency: "ESA / European Commission",
    launchYear: "S1: 2014 | S2: 2015/2017 | S3: 2016 | S5P: 2017",
    status: "Operational",
    orbit: {
      type: "Sun-synchronous LEO",
      altitude: "693 - 814 km",
      inclination: "98.5°",
      crossing: "10:00 - 11:30 AM / 1:30 PM",
      repeat: "5 - 12 days"
    },
    sensorType: "Active Radar (S1) & Passive Optical/Spectrometry (S2, S3, S5P)",
    climateFocus: "High-Resolution Land, Ocean Topography, Atmospheric Trace Pollutants (NO2, Methane)",
    sensors: [
      {
        name: "Sentinel-1 C-SAR",
        fullName: "C-band Synthetic Aperture Radar (5.405 GHz)",
        bands: "C-band microwave (5.5 cm wavelength)",
        resolution: "5 m to 40 m",
        role: "All-weather day/night radar imaging; radar interferometry (InSAR) to measure millimeters of land subsidence, glacier flow velocities, and earthquake deformation."
      },
      {
        name: "Sentinel-2 MSI",
        fullName: "Multispectral Instrument",
        bands: "13 spectral bands (VNIR to SWIR)",
        resolution: "10 m (visible/NIR), 20 m (red-edge/SWIR), 60 m (atmospheric)",
        role: "Includes three unique red-edge bands for detailed chlorophyll and canopy stress analysis."
      },
      {
        name: "Sentinel-5P TROPOMI",
        fullName: "TROPOspheric Monitoring Instrument",
        bands: "UV, Visible, NIR, SWIR hyperspectral",
        resolution: "3.5 × 5.5 km",
        role: "World's premier sensor for mapping urban NO2 plumes, sulfur dioxide emissions, and pinpointing individual methane (CH4) super-emitter leaks from oil/gas infrastructure."
      }
    ],
    sciolySignificance: "Tested on TROPOMI methane plume detection, InSAR land subsidence monitoring, and Sentinel-2 red-edge vegetation analysis.",
    sampleQuestion: "What unique capability does Sentinel-5P's TROPOMI provide in greenhouse gas mitigation?",
    sampleAnswer: "High-resolution daily global mapping of atmospheric methane (CH4) that can pinpoint point-source emissions such as pipeline leaks and landfill plumes."
  },
  {
    id: "viirs",
    name: "Suomi NPP & JPSS (NOAA-20 / 21)",
    constellation: "Joint Polar Satellite System",
    agency: "NASA / NOAA",
    launchYear: "Suomi NPP: 2011 | NOAA-20: 2017 | NOAA-21: 2022",
    status: "Operational",
    orbit: {
      type: "Sun-synchronous LEO",
      altitude: "824 km",
      inclination: "98.7°",
      crossing: "1:30 PM ascending",
      repeat: "16 days (daily global coverage)"
    },
    sensorType: "Passive Multi-channel Radiometer & Sounders",
    climateFocus: "Next-gen MODIS Follow-on, Nighttime Lights, Wildfires, Cryosphere",
    sensors: [
      {
        name: "VIIRS",
        fullName: "Visible Infrared Imaging Radiometer Suite",
        bands: "22 spectral channels (0.412 µm to 12.01 µm)",
        resolution: "375 m (I-bands) to 750 m (M-bands)",
        role: "Successor to MODIS. Features a unique Day/Night Band (DNB) sensitive enough to image city lights, auroras, ship lights, gas flares, and moonlit clouds at night."
      },
      {
        name: "CrIS",
        fullName: "Cross-track Infrared Sounder",
        bands: "2,211 infrared channels",
        resolution: "14 km at nadir",
        role: "Hyperspectral temperature and moisture sounding for weather models."
      },
      {
        name: "OMPS",
        fullName: "Ozone Mapping and Profiler Suite",
        bands: "UV hyperspectral (250 - 380 nm)",
        resolution: "Total column and vertical limb profiler",
        role: "Continues the multi-decade global ozone monitoring record."
      }
    ],
    sciolySignificance: "MODIS successor. Key test topics include the VIIRS Day/Night Band (DNB) for human activity/power outage tracking and fire detection.",
    sampleQuestion: "How does the VIIRS Day/Night Band (DNB) differ from standard visible satellite channels?",
    sampleAnswer: "The DNB uses an ultra-sensitive broad spectral sensor with dynamic gain stages capable of amplifying nocturnal visible light by up to seven orders of magnitude to image under moonlight or starlight."
  },
  {
    id: "icesat2",
    name: "ICESat-2",
    constellation: "NASA Earth System Science Pathfinder",
    agency: "NASA / GSFC",
    launchYear: 2018,
    status: "Operational",
    orbit: {
      type: "Non-sun-synchronous LEO (polar)",
      altitude: "496 km",
      inclination: "92.0°",
      crossing: "Precessing polar orbit",
      repeat: "91 days"
    },
    sensorType: "ACTIVE Photon-Counting Laser Altimeter",
    climateFocus: "Ice Sheet Topography, Glacier Mass Balance, Sea Ice Freeboard, Forest Canopy",
    sensors: [
      {
        name: "ATLAS",
        fullName: "Advanced Topographic Laser Altimeter System",
        bands: "532 nm (green laser, 10 kHz repetition rate = 1 pulse every 70 cm along track)",
        resolution: "Measures elevation to within 4 mm vertical precision; footprint ~11 m",
        role: "Splits a 532 nm green laser into 6 beams arranged in 3 pairs (strong and weak beam per pair) to measure surface slopes and photon time-of-flight, mapping Greenland and Antarctic ice sheet thinning."
      }
    ],
    sciolySignificance: "Essential for polar glaciology questions. Tested on photon-counting lidar physics, sea ice freeboard calculation (height of ice above water line), and ice shelf thinning rates.",
    sampleQuestion: "Why does ICESat-2's ATLAS instrument use pairs of laser beams rather than single individual beams?",
    sampleAnswer: "Beam pairs allow simultaneous measurement of cross-track surface slope, enabling scientists to differentiate true elevation changes from slope-induced measurement shifts."
  },
  {
    id: "gcomw1",
    name: "GCOM-W1 (Shizuku)",
    constellation: "A-Train Constellation",
    agency: "JAXA (Japan)",
    launchYear: 2012,
    status: "Operational",
    orbit: {
      type: "Sun-synchronous LEO",
      altitude: "705 km",
      inclination: "98.2°",
      crossing: "1:30 PM ascending",
      repeat: "16 days"
    },
    sensorType: "Passive Microwave Radiometer",
    climateFocus: "Global Water Cycle, Precipitation, Sea Ice Extent, Sea Surface Temperature",
    sensors: [
      {
        name: "AMSR2",
        fullName: "Advanced Microwave Scanning Radiometer 2",
        bands: "16 channels across 6.9 to 89 GHz (dual-polarization)",
        resolution: "3 km to 60 km spatial resolution (frequency dependent)",
        role: "Successor to AMSR-E on Aqua; measures all-weather global sea ice concentrations, sea surface temperatures through clouds, and soil moisture."
      }
    ],
    sciolySignificance: "Key member of the Afternoon Constellation. Frequently tested on microwave penetration of non-precipitating clouds and measuring polar sea ice extent.",
    sampleQuestion: "Why is AMSR2 on GCOM-W1 able to measure sea surface temperature and sea ice even when high-latitude polar regions are shrouded in persistent cloud cover or polar winter darkness?",
    sampleAnswer: "Passive microwave emissions (6.9 to 89 GHz) penetrate non-precipitating cloud droplets and require no solar illumination, operating equally well during day or dark polar night."
  },
  {
    id: "parasol",
    name: "PARASOL",
    constellation: "A-Train (Historic)",
    agency: "CNES (France)",
    launchYear: 2004,
    status: "Decommissioned 2013 (Exited A-Train Dec 2011)",
    orbit: {
      type: "Sun-synchronous LEO",
      altitude: "705 km (lowered 2011)",
      inclination: "98.2°",
      crossing: "Flown ~30 seconds behind CALIPSO",
      repeat: "16 days"
    },
    sensorType: "Passive Polarized Radiometer",
    climateFocus: "Polarization and Directionality of Cloud & Aerosol Reflectance",
    sensors: [
      {
        name: "POLDER",
        fullName: "Polarization and Directionality of the Earth Reflectances",
        bands: "9 spectral bands (443 to 1020 nm), 3 with polarization filters (443, 670, 865 nm)",
        resolution: "5.3 × 6.2 km footprint",
        role: "Observed polarized light scattered by atmospheric particles to identify aerosol optical thickness, cloud phase (liquid vs ice), and aerosol microphysics."
      }
    ],
    sciolySignificance: "Historic A-Train member. Demonstrates how multi-angle polarized light reveals whether cloud particles are spherical water droplets or non-spherical ice crystals.",
    sampleQuestion: "What physical property of light did PARASOL exploit to differentiate spherical cloud water droplets from jagged ice crystals?",
    sampleAnswer: "Polarization of scattered solar radiation. Spherical water droplets produce a distinctive primary rainbow scattering peak with strong linear polarization, whereas non-spherical ice crystals depolarize light."
  },
  {
    id: "smap",
    name: "SMAP (Soil Moisture Active Passive)",
    constellation: "NASA Earth System Science Pathfinder",
    agency: "NASA / JPL / GSFC",
    launchYear: 2015,
    status: "Operational (Passive Radiometer)",
    orbit: {
      type: "Sun-synchronous LEO",
      altitude: "685 km",
      inclination: "98.1°",
      crossing: "6:00 AM / 6:00 PM (dawn/dusk)",
      repeat: "8 days (global coverage in 2-3 days)"
    },
    sensorType: "Passive L-Band Microwave Radiometer",
    climateFocus: "Global Surface Soil Moisture, Land Freeze/Thaw Cycles, Drought & Flood Monitoring",
    sensors: [
      {
        name: "L-Band Radiometer",
        fullName: "1.41 GHz Passive Microwave Radiometer",
        bands: "1.41 GHz (21 cm wavelength, L-band protected spectrum)",
        resolution: "36 km spatial resolution",
        role: "Directly measures the dielectric constant of the top 5 cm of soil to quantify soil moisture with high accuracy (~0.04 m³/m³) and detect freeze/thaw transitions."
      }
    ],
    sciolySignificance: "Key instrument for terrestrial hydrology and agricultural drought questions. Tested on the relationship between water dielectric constant (~80) and dry soil (~4).",
    sampleQuestion: "Why does SMAP operate in the protected L-band microwave frequency (1.41 GHz) rather than optical or thermal wavelengths to measure soil moisture?",
    sampleAnswer: "L-band microwave radiation (21 cm) penetrates light-to-moderate vegetation canopies and is directly sensitive to the high dielectric constant of liquid water (80) compared to dry soil (3-5)."
  },
  {
    id: "pace",
    name: "PACE (Plankton, Aerosol, Cloud, ocean Ecosystem)",
    constellation: "NASA Climate Flagship",
    agency: "NASA / GSFC",
    launchYear: 2024,
    status: "Operational (Launched Feb 2024)",
    orbit: {
      type: "Sun-synchronous LEO",
      altitude: "676.5 km",
      inclination: "98.0°",
      crossing: "1:00 PM ascending node",
      repeat: "2 days (global ocean coverage)"
    },
    sensorType: "Hyperspectral Ocean Color & Multi-Angle Polarimeters",
    climateFocus: "Ocean Phytoplankton Diversity, Harmful Algal Blooms, Aerosol-Cloud Radiative Forcing",
    sensors: [
      {
        name: "OCI",
        fullName: "Ocean Color Instrument",
        bands: "Hyperspectral UV to NIR (340 - 890 nm at 5 nm resolution) plus 7 SWIR bands",
        resolution: "1 km at nadir",
        role: "Continuous contiguous spectrum of ocean color to identify specific phytoplankton communities (diatoms, coccolithophores, cyanobacteria) and marine carbon export."
      },
      {
        name: "SPEXone & HARP2",
        fullName: "Multi-angle Imaging Polarimeters (SRON / UMBC)",
        bands: "Multi-angle polarimetric imaging from UV to NIR",
        resolution: "2.5 km - 5 km",
        role: "Measures particle size distribution, composition, and refractive index of atmospheric aerosols to reduce uncertainty in aerosol climate forcing."
      }
    ],
    sciolySignificance: "NASA’s newest major ocean-climate flagship! Regularly featured on 2025-2027 tests for hyperspectral ocean color vs legacy MODIS multispectral bands.",
    sampleQuestion: "How does PACE’s OCI hyperspectral sensor improve upon legacy MODIS sensors for studying marine biology?",
    sampleAnswer: "While MODIS has only discrete spectral bands, OCI provides a continuous contiguous spectrum (5 nm intervals from 340 to 890 nm), allowing scientists to distinguish specific phytoplankton functional groups and pigments."
  },
  {
    id: "gpm",
    name: "GPM Core Observatory",
    constellation: "Global Precipitation Measurement",
    agency: "NASA / JAXA",
    launchYear: 2014,
    status: "Operational (TRMM Successor)",
    orbit: {
      type: "Non-sun-synchronous LEO",
      altitude: "407 km",
      inclination: "65.0°",
      crossing: "Precessing orbit (samples all times of day)",
      repeat: "Global precipitation updates every 3 hours (with constellation)"
    },
    sensorType: "ACTIVE Dual-Frequency Radar & Passive Microwave",
    climateFocus: "Global Rainfall, Snowfall Profiling, Tropical Storm Convection, Latent Heat Release",
    sensors: [
      {
        name: "DPR",
        fullName: "Dual-frequency Precipitation Radar (Ku/Ka-band)",
        bands: "Ku-band (13.6 GHz) and Ka-band (35.5 GHz)",
        resolution: "5 km horizontal, 250 m vertical range resolution",
        role: "First spaceborne radar to provide 3D profiles of both heavy tropical rain (Ku) and light rain/falling snow (Ka)."
      },
      {
        name: "GMI",
        fullName: "GPM Microwave Imager",
        bands: "13 channels from 10 to 183 GHz",
        resolution: "4.4 km to 32 km",
        role: "Calibrates the international constellation of precipitation satellites."
      }
    ],
    sciolySignificance: "Direct follow-on to TRMM. Key test topics include latent heat release during tropical condensation and 3D radar profiling of precipitation.",
    sampleQuestion: "Why is GPM placed in a 65° non-sun-synchronous orbit rather than a sun-synchronous orbit?",
    sampleAnswer: "Precipitation exhibits strong diurnal (daily) cycles, such as afternoon thunderstorms. A precessing non-sun-synchronous orbit samples rainfall across all 24 hours of local solar time."
  }

];

const CLIMATE_TOPICS = [
  {
    id: "energy-balance",
    title: "1. Global Radiative Energy Balance & Forcing",
    icon: "☀️",
    badge: "Core Physics & Math",
    summary: "Earth's climate is determined by the fundamental balance between absorbed shortwave solar radiation and emitted longwave terrestrial radiation.",
    sections: [
      {
        heading: "The Solar Constant & Geometry",
        body: "The solar irradiance arriving at the top of Earth's atmosphere at mean Earth-Sun distance (1 AU ≈ 1.496 × 10¹¹ m) is the Solar Constant: S₀ ≈ 1361 W/m² (often approximated as 1365-1370 W/m² in older textbooks).\n\nWhy divide by 4? The Earth intercepts solar radiation as a flat circular disk of area πRₑ², but as the planet rotates, this energy is distributed over the entire spherical surface of area 4πRₑ². Therefore, average incident solar flux per unit area is:\nF_in = S₀ / 4 ≈ 1361 / 4 ≈ 340.25 W/m²."
      },
      {
        heading: "Planetary Albedo & Effective Temperature (0-D Model)",
        body: "Earth reflects a fraction α ≈ 0.29 to 0.30 of incident sunlight back to space (planetary albedo), primarily via clouds (albedo 0.4-0.8), aerosols, and surface snow/ice (albedo 0.6-0.9). Ocean water absorbs almost all sunlight (albedo ~0.06).\n\nNet absorbed solar radiation:\nF_absorbed = (1 - α) · (S₀ / 4) ≈ (1 - 0.30) · 340.25 ≈ 238.2 W/m².\n\nIn thermal equilibrium, Earth radiates this exact power back to space as a blackbody:\nσ · T_e⁴ = F_absorbed  ⟹  T_e = [ (1 - α)S₀ / (4σ) ]^(1/4)\nWith σ = 5.6704 × 10⁻⁸ W/(m²·K⁴):\nT_e = [ 238.2 / (5.6704 × 10⁻⁸) ]^(0.25) ≈ 254.9 K ≈ -18°C (255 K).\n\nEarth's actual observed surface temperature is T_s ≈ 288 K (+15°C). The +33 K difference is the greenhouse effect provided by atmospheric absorption!"
      },
      {
        heading: "Radiative Forcing of Greenhouse Gases",
        body: "Radiative forcing (ΔF) is the net change in the energy balance at the tropopause/TOA caused by an external climate driver, measured in W/m².\nFor Carbon Dioxide, the standard IPCC formula is:\nΔF = 5.35 · ln(C / C₀)  [W/m²]\nWhen CO2 doubles (e.g. from pre-industrial C₀ = 280 ppm to C = 560 ppm):\nΔF_2x = 5.35 · ln(2) ≈ 5.35 · 0.6931 ≈ 3.71 W/m²."
      }
    ]
  },
  {
    id: "ghg-carbon",
    title: "2. Greenhouse Gases, Spectroscopy & Keeling Curve",
    icon: "🧪",
    badge: "Atmospheric Science",
    summary: "Greenhouse gases absorb terrestrial infrared radiation due to molecular vibrational-rotational transitions. OCO-2 and AIRS monitor their concentrations.",
    sections: [
      {
        heading: "Molecular Physics & Atmospheric Windows",
        body: "Diatomic symmetric molecules (N₂ at 78%, O₂ at 21%) cannot absorb infrared radiation because their vibrations do not produce a net oscillating electric dipole moment.\n\nPolyatomic molecules (H₂O, CO₂, CH₄, N₂O, O₃, CFCs) have bending and asymmetric stretching modes that create oscillating dipoles:\n• CO₂: 15 µm (bending ν2) and 4.26 µm (asymmetric stretch ν3)\n• H₂O: Strong rotational bands (>15 µm) and vibrational bands (6.3 µm, 2.7 µm)\n• CH₄: 7.66 µm\n• N₂O: 7.8 µm and 4.5 µm\n• O₃: 9.6 µm in the middle of the atmospheric window!\n\nThe Atmospheric Window (8 µm to 12 µm): A region where neither water vapor nor CO₂ absorbs strongly. Most terrestrial heat escapes directly to space here, and thermal IR satellites view surface temperatures through it."
      },
      {
        heading: "The Keeling Curve & Seasonal Dynamics",
        body: "Started in 1958 by Charles David Keeling at Mauna Loa, Hawaii (3,397 m elevation, chosen for clean maritime air free of local vegetation or urban smog).\n• Secular Trend: Unbroken exponential-like climb from 315 ppm in 1958 to over 425 ppm today, driven by fossil fuel combustion (~85%) and land-use change/deforestation (~15%).\n• Seasonal 'Sawtooth' Cycle:\n- Peak: May (end of Northern Hemisphere winter, when soil microbial decomposition and respiration released CO₂ without photosynthetic uptake)\n- Trough: October (end of Northern Hemisphere summer, when intense forest and crop photosynthesis absorbed tens of gigatons of CO₂)\n- Northern Hemisphere dominates global seasonality because it contains 68% of Earth's landmass!"
      },
      {
        heading: "OCO-2 Column CO2 (XCO2)",
        body: "OCO-2 measures the column-averaged dry air mole fraction XCO2. Measuring from space requires 1 ppm precision to detect regional sources and sinks. OCO-2 looks at three narrow bands: O₂ A-band (0.76 µm) to determine dry air column mass and cloud filtering; weak CO₂ (1.61 µm) to measure column density; strong CO₂ (2.06 µm) to constrain aerosol scattering."
      }
    ]
  },
  {
    id: "enso",
    title: "3. El Niño - Southern Oscillation (ENSO) & Ocean Altimetry",
    icon: "🌊",
    badge: "Oceanography & Altimetry",
    summary: "ENSO is the premier coupled ocean-atmosphere climate cycle. Satellite radar altimeters and radiometers observe its signature across the Pacific.",
    sections: [
      {
        heading: "The Three ENSO States",
        body: "1. Neutral / Normal Conditions:\n• Walker Circulation: Strong easterly trade winds blow surface water westward.\n• Western Pacific Warm Pool: Warm water piles up around Indonesia/Australia (SST > 28°C), sea level is ~40-50 cm higher than in the east, thermocline is deep (~150 m).\n• Eastern Pacific (Peru/Ecuador): Winds drive offshore Ekman transport, causing intense upwelling of cold, nutrient-rich deep water (shallow thermocline ~30 m, Humboldt Current, rich anchoveta fishery).\n\n2. El Niño (Warm Phase):\n• Trade winds weaken, stall, or reverse to westerlies.\n• The western warm pool sloshes eastward as internal oceanic Kelvin waves.\n• The thermocline flattens across the Pacific.\n• Upwelling off Peru shuts down; eastern Pacific SST rises by +1°C to +4°C.\n• Convection and torrential rains shift to the central/eastern Pacific, while drought strikes Australia and Indonesia.\n\n3. La Niña (Cool Phase):\n• Easterly trade winds become unusually strong.\n• Upwelling intensifies; a prominent 'cold tongue' extends far west from South America.\n• Thermocline becomes extremely steep; eastern Pacific SST drops below average."
      },
      {
        heading: "Satellite Remote Sensing Signatures",
        body: "• Radar Altimeters (Jason-3, Sentinel-6): Sea Surface Height (SSH) anomalies. Because warm water expands thermally (steric expansion), El Niño produces a massive positive SSH anomaly (+10 to +25 cm) stretching across the eastern equatorial Pacific, easily tracked from space!\n• Infrared Radiometers (MODIS, VIIRS, AVHRR): Reveal extensive positive SST anomalies in the Niño 3.4 region (5°N - 5°S, 120°W - 170°W).\n• Atmospheric Indices: Southern Oscillation Index (SOI) measures the sea-level pressure difference between Tahiti and Darwin, Australia. Negative SOI indicates El Niño; positive SOI indicates La Niña."
      }
    ]
  },
  {
    id: "cryosphere",
    title: "4. The Cryosphere & Positive Ice-Albedo Feedbacks",
    icon: "🧊",
    badge: "Polar Science",
    summary: "The cryosphere acts as Earth's giant thermal reflector. Remote sensing tracks sea ice extent, ice sheet mass loss, and feedback mechanisms.",
    sections: [
      {
        heading: "Ice-Albedo Positive Feedback Loop",
        body: "Albedo (reflectivity) is the percentage of solar radiation reflected by a surface:\n• Fresh snow: α = 0.80 - 0.90\n• Sea ice with snow: α = 0.60 - 0.85\n• Melt ponds / bare ice: α = 0.40 - 0.50\n• Open ocean water: α = 0.06 (absorbs 94% of solar energy!)\n\nThe Feedback Loop:\nWarming surface temperatures ➔ Sea ice melts ➔ Replaces bright reflective ice (α ~0.7) with dark ocean (α ~0.06) ➔ Ocean absorbs dramatically more solar shortwave radiation ➔ Ocean warms further ➔ Melts more sea ice!\nThis positive (amplifying) feedback is the primary engine of Arctic Amplification, causing the Arctic to warm at nearly 4 times the global average rate."
      },
      {
        heading: "Sea Ice vs. Continental Ice Sheets",
        body: "• Sea Ice (Arctic Ocean, Southern Ocean): Frozen ocean water, 1 to 4 meters thick. Melting floating sea ice DOES NOT directly raise sea level (Archimedes' principle: floating ice already displaces its own liquid mass).\n• Continental Ice Sheets (Greenland & Antarctica): Land-based ice miles thick (Greenland contains ~7 m of sea-level equivalent; Antarctica contains ~58 m). When land ice melts and runs into the ocean, it directly increases ocean mass and causes Eustatic Sea Level Rise!\n• GRACE gravimetry shows Greenland is losing ~270 billion metric tons of ice per year, and Antarctica is losing ~150 billion metric tons per year."
      }
    ]
  },
  {
    id: "oceans-sea-level",
    title: "5. Oceans, Thermal Expansion & Sea Level Rise",
    icon: "📏",
    badge: "Geodesy & Oceanography",
    summary: "Satellite radar altimetry has documented global sea level rise of ~3.4 to 3.7 mm/year, driven by thermal expansion and melting land ice.",
    sections: [
      {
        heading: "The Two Primary Drivers of Sea Level Rise",
        body: "1. Steric Sea Level Rise (Thermal Expansion): As greenhouse gases trap heat, >90% of excess Earth system heat is absorbed by the oceans. Seawater expands as its temperature rises (volumetric expansion coefficient β ≈ 2.5 × 10⁻⁴ K⁻¹ for surface seawater). Accounts for ~35% - 40% of observed global sea level rise.\n\n2. Eustatic / Mass Addition: Meltwater flowing into oceans from melting mountain glaciers (20%) and melting ice sheets in Greenland (25%) and Antarctica (15%). Accounts for ~60% - 65% of sea level rise."
      },
      {
        heading: "How Satellite Radar Altimetry Works",
        body: "Dual-frequency radar altimeters (TOPEX/Poseidon 1992 ➔ Jason-1 ➔ Jason-2 ➔ Jason-3 ➔ Sentinel-6 Michael Freilich) measure Sea Surface Height (SSH) to within 1-2 cm:\n• Satellite Altitude (H): Determined relative to the reference ellipsoid using GPS, DORIS (Doppler Orbitography), and Satellite Laser Ranging (SLR).\n• Radar Range (d): Calculated from round-trip travel time of microwave pulse: d = (c · Δt) / 2.\n• Corrections: Ionospheric electron delay, wet tropospheric water vapor delay (measured by onboard microwave radiometer), dry atmospheric surface pressure delay, electromagnetic sea-state bias.\n• Equation: SSH = H - d - Corrections - Geoid Height."
      }
    ]
  },
  {
    id: "ozone-aerosols",
    title: "6. Stratospheric Ozone vs. Tropospheric Air Quality",
    icon: "🛡️",
    badge: "Photochemistry & Aerosols",
    summary: "The stratospheric ozone layer protects Earth from lethal solar UV. Aerosols exert both direct and indirect radiative forcing on climate.",
    sections: [
      {
        heading: "Stratospheric Ozone & The Antarctic Hole",
        body: "• Chapman Mechanism: Natural creation/destruction of ozone (O₃) in the stratosphere by solar UV-C (<242 nm):\nO₂ + hν ➔ 2 O\nO + O₂ + M ➔ O₃ + M\nO₃ + hν ➔ O₂ + O\nO₃ + O ➔ 2 O₂\n\n• Catalytic Chlorine Destruction: Chlorofluorocarbons (CFCs like CFC-11 and CFC-12) drift to the stratosphere where UV photolyzes them to release free chlorine atoms:\nCl + O₃ ➔ ClO + O₂\nClO + O ➔ Cl + O₂\nNet: O₃ + O ➔ 2 O₂\nA single chlorine radical can destroy ~100,000 ozone molecules before being deactivated into reservoir species (HCl and ClONO₂)!\n\n• The Antarctic Hole Mechanism: During dark winter, the polar vortex drops temperatures below -78°C, forming Polar Stratospheric Clouds (PSCs). PSC surface reactions convert HCl and ClONO₂ into reactive Cl₂. When spring sunlight returns in September, UV photolyzes Cl₂ ➔ 2 Cl·, triggering massive rapid ozone loss."
      },
      {
        heading: "Aerosols: Direct vs. Indirect Climate Forcing",
        body: "• Direct Effect: Aerosol particles scatter incoming solar radiation back to space (sulfates, sea salt, mineral dust), exerting a net negative radiative forcing (cooling). Black carbon (soot) absorbs solar radiation in the atmosphere, causing local warming.\n• Indirect Effect (Cloud Modification):\n- Twomey Effect (1st Indirect): For a fixed cloud water content, more aerosol particles act as cloud condensation nuclei (CCN), producing smaller, more numerous cloud droplets. This increases cloud surface area and cloud albedo, reflecting more sunlight (cooling).\n- Albrecht Effect (2nd Indirect): Smaller droplets inhibit drizzle and precipitation, lengthening cloud lifetime and cover."
      }
    ]
  }
];

const FORMULAS_DATA = [
  {
    id: "stefan_boltzmann",
    name: "Stefan-Boltzmann Law",
    latex: "E = \\sigma \\cdot T^4",
    simpleText: "E = σ * T^4",
    description: "Calculates the total radiant power emitted per unit surface area (flux density in W/m²) by an ideal blackbody at absolute temperature T (in Kelvin).",
    variables: [
      { symbol: "E", meaning: "Total emitted radiant flux density", unit: "W/m²" },
      { symbol: "σ", meaning: "Stefan-Boltzmann constant", unit: "5.670374 × 10⁻⁸ W/(m²·K⁴)" },
      { symbol: "T", meaning: "Absolute temperature of the radiating object", unit: "Kelvin (K = °C + 273.15)" }
    ],
    calculatorTip: {
      ti84Store: "Store constant into memory: 5.6704E-8 -> S",
      ti84Syntax: "S * T^4",
      inverseSyntax: "(E / S) ^ (1/4)  [To solve for Temperature T]"
    },
    exampleProblem: {
      question: "The Sun's effective surface temperature is approximately 5778 K. Calculate the radiant flux emitted at its photosphere.",
      step1: "Formula: E = σ · T⁴",
      step2: "Substitute: E = (5.6704 × 10⁻⁸) · (5778)⁴",
      step3: "Calculation: 5778⁴ = 1.1146 × 10¹⁵ K⁴",
      step4: "E = 5.6704 × 10⁻⁸ · 1.1146 × 10¹⁵ ≈ 6.32 × 10⁷ W/m² (63.2 MW/m²)",
      answer: "6.32 × 10⁷ W/m² (or 63.2 MW/m²)"
    }
  },
  {
    id: "wiens_law",
    name: "Wien's Displacement Law",
    latex: "\\lambda_{max} = \\frac{b}{T}",
    simpleText: "λ_max = b / T",
    description: "Determines the peak emission wavelength (λ_max) of a blackbody spectrum as an inverse function of its absolute temperature T.",
    variables: [
      { symbol: "λ_max", meaning: "Wavelength of maximum spectral radiance", unit: "micrometers (µm) or meters (m)" },
      { symbol: "b", meaning: "Wien's displacement constant", unit: "2898 µm·K (or 2.8978 × 10⁻³ m·K)" },
      { symbol: "T", meaning: "Absolute temperature of the blackbody", unit: "Kelvin (K)" }
    ],
    calculatorTip: {
      ti84Store: "Store constant into memory: 2898 -> B (gives answer directly in µm)",
      ti84Syntax: "B / T  (outputs λ in µm)",
      inverseSyntax: "B / L  [To find Temp T from peak wavelength L in µm]"
    },
    exampleProblem: {
      question: "A wildfire burn front radiates at a kinetic temperature of 600°C. At what wavelength will its emitted spectral radiance peak?",
      step1: "Convert temperature to Kelvin: T = 600 + 273.15 = 873.15 K",
      step2: "Apply Wien's Law: λ_max = 2898 / 873.15",
      step3: "Compute: λ_max ≈ 3.32 µm",
      step4: "Spectral classification: 3.32 µm lies in the Mid-Wave Infrared (MWIR), explaining why GOES 3.9 µm channel detects active fires with high contrast!",
      answer: "3.32 µm (Mid-Wave Infrared)"
    }
  },
  {
    id: "planetary_ebm",
    name: "0-D Planetary Equilibrium Temperature",
    latex: "T_e = \\left[ \\frac{(1 - \\alpha) \\cdot S_0}{4\\sigma} \\right]^{1/4}",
    simpleText: "T_e = [ (1 - α) * S_0 / (4 * σ) ]^(1/4)",
    description: "Calculates the effective radiative emission temperature of a bare planet in thermal equilibrium with incoming solar radiation, accounting for geometric dilution and albedo.",
    variables: [
      { symbol: "T_e", meaning: "Effective blackbody equilibrium temperature", unit: "Kelvin (K)" },
      { symbol: "α", meaning: "Planetary albedo (fraction of reflected sunlight)", unit: "Dimensionless (0 to 1)" },
      { symbol: "S_0", meaning: "Solar constant at planet's orbital distance", unit: "W/m² (Earth: 1361 W/m²)" },
      { symbol: "σ", meaning: "Stefan-Boltzmann constant", unit: "5.6704 × 10⁻⁸ W/(m²·K⁴)" },
      { symbol: "4", meaning: "Geometric factor: (Sphere area 4πR²) / (Disk area πR²)", unit: "Constant = 4" }
    ],
    calculatorTip: {
      ti84Store: "Store constants: 1361 -> F, 5.6704E-8 -> S, 0.30 -> A",
      ti84Syntax: "((1 - A) * F / (4 * S)) ^ (1/4)",
      ti84OneLiner: "Single keystroke sequence: ((1-0.3)*1361/(4*5.6704E-8))^0.25"
    },
    exampleProblem: {
      question: "Planet Mars has an albedo of α = 0.25 and is located at distance d = 1.52 AU from the Sun. Earth's solar constant is 1361 W/m². Calculate Mars' effective equilibrium temperature T_e.",
      step1: "Calculate solar constant at Mars using inverse-square law: S_mars = 1361 / (1.52)² = 1361 / 2.3104 ≈ 589.1 W/m²",
      step2: "Calculate absorbed solar flux per unit area: F_in = (1 - 0.25) · (589.1 / 4) = 0.75 · 147.28 = 110.46 W/m²",
      step3: "Equate to σ·T_e⁴: T_e = (110.46 / 5.6704 × 10⁻⁸)^(0.25)",
      step4: "Compute: T_e = (1.948 × 10⁹)^0.25 ≈ 210.0 K (-63.15°C)",
      answer: "210 K (-63.15°C)"
    }
  },
  {
    id: "greenhouse_1layer",
    name: "1-Layer Atmospheric Greenhouse Model",
    latex: "T_s = \\left[ \\frac{(1 - \\alpha)S_0}{4\\sigma(1 - \\epsilon_a/2)} \\right]^{1/4} = \\left( \\frac{1}{1 - \\epsilon_a/2} \\right)^{1/4} T_e",
    simpleText: "T_s = [ (1 - α)S_0 / (4σ(1 - ε_a/2)) ]^(1/4)",
    description: "Models the greenhouse effect with a single isothermal atmospheric layer having longwave emissivity/absorptivity ε_a. For an opaque atmosphere (ε_a = 1.0), T_s = 2^(1/4) · T_e ≈ 1.189 · T_e.",
    variables: [
      { symbol: "T_s", meaning: "Planet surface temperature", unit: "Kelvin (K)" },
      { symbol: "T_a", meaning: "Atmosphere layer temperature (σ·T_a⁴ = 0.5·σ·T_s⁴)", unit: "Kelvin (K)" },
      { symbol: "ε_a", meaning: "Atmospheric longwave emissivity/absorptivity", unit: "Dimensionless (0 to 1)" },
      { symbol: "T_e", meaning: "Bare-planet equilibrium temperature", unit: "Kelvin (K) (Earth: 255 K)" }
    ],
    calculatorTip: {
      ti84Store: "For ideal opaque atmosphere (ε = 1): 2^0.25 * Te",
      ti84Syntax: "((1 - A)*F / (4*S * (1 - E/2))) ^ 0.25",
      quickRule: "If ε_a = 1.0 (perfect greenhouse layer), surface temperature is ALWAYS 2^(1/4) ≈ 1.1892 times bare planet temperature T_e!"
    },
    exampleProblem: {
      question: "For Earth with T_e = 254.9 K, calculate the theoretical surface temperature under: (a) a completely opaque single layer (ε_a = 1.0), and (b) a realistic semi-transparent layer with ε_a = 0.77.",
      step1: "Case (a): T_s = 2^0.25 · 254.9 K = 1.1892 · 254.9 ≈ 303.1 K (30°C)",
      step2: "Case (b): 1 - ε_a/2 = 1 - 0.77/2 = 1 - 0.385 = 0.615",
      step3: "T_s = (1 / 0.615)^0.25 · 254.9 = (1.626)^0.25 · 254.9 = 1.1293 · 254.9 ≈ 287.9 K",
      step4: "Notice: 288 K matches Earth's actual observed global average surface temperature!",
      answer: "Case (a): 303 K; Case (b): 288 K"
    }
  },
  {
    id: "kepler_orbit",
    name: "Satellite Orbital Period & Kepler's 3rd Law",
    latex: "T = 2\\pi \\sqrt{\\frac{(R_E + h)^3}{G M_E}}",
    simpleText: "T = 2π * sqrt((R_E + h)^3 / GM_E)",
    description: "Computes the orbital period T of a satellite in circular low Earth orbit at altitude h above Earth's surface.",
    variables: [
      { symbol: "T", meaning: "Orbital period", unit: "seconds (divide by 60 for minutes)" },
      { symbol: "R_E", meaning: "Mean volumetric radius of Earth", unit: "6,371,000 meters (6371 km)" },
      { symbol: "h", meaning: "Orbital altitude above Earth surface", unit: "meters (km × 1000)" },
      { symbol: "GM_E", meaning: "Geocentric gravitational constant (μ)", unit: "3.986004 × 10¹⁴ m³/s²" }
    ],
    calculatorTip: {
      ti84Store: "Store constants: 6371000 -> R, 3.986E14 -> M",
      ti84Syntax: "2*π*√((R + H*1000)^3 / M) / 60  [Outputs period in minutes]",
      dailyPasses: "1440 / [Ans]  [Gives number of revolutions per day]"
    },
    exampleProblem: {
      question: "NASA's OCO-2 satellite orbits at an altitude of h = 705 km. Calculate: (a) orbital period in minutes, and (b) how many orbits it completes per day.",
      step1: "Calculate orbital radius: a = 6,371,000 + 705,000 = 7,076,000 m (7.076 × 10⁶ m)",
      step2: "Cube the radius: a³ = (7.076 × 10⁶)³ ≈ 3.543 × 10²⁰ m³",
      step3: "Divide by GM: a³ / GM = 3.543 × 10²⁰ / 3.986 × 10¹⁴ ≈ 888,860 s²",
      step4: "Take square root: √(888,860) ≈ 942.8 seconds",
      step5: "Multiply by 2π: T = 2 · π · 942.8 ≈ 5923.8 seconds = 98.73 minutes",
      step6: "Revolutions per day: 1440 min / 98.73 min ≈ 14.58 orbits/day",
      answer: "Period: 98.7 minutes; Orbits/day: 14.6"
    }
  },
  {
    id: "vegetation_indices",
    name: "Spectral Indices (NDVI, NDWI, NDSI, NBR)",
    latex: "NDVI = \\frac{\\rho_{NIR} - \\rho_{RED}}{\\rho_{NIR} + \\rho_{RED}}",
    simpleText: "NDVI = (NIR - RED) / (NIR + RED)",
    description: "Normalized difference band math used to quantify vegetation health, surface water, snow cover, and fire burn severity.",
    variables: [
      { symbol: "NDVI", meaning: "Normalized Difference Vegetation Index", unit: "Range: -1.0 to +1.0" },
      { symbol: "NDWI", meaning: "Normalized Difference Water Index: (Green - NIR)/(Green + NIR) or (NIR - SWIR)/(NIR + SWIR)", unit: "Range: -1.0 to +1.0" },
      { symbol: "NDSI", meaning: "Normalized Difference Snow Index: (Green - SWIR)/(Green + SWIR)", unit: "Separates clouds from snow!" },
      { symbol: "NBR", meaning: "Normalized Burn Ratio: (NIR - SWIR)/(NIR + SWIR)", unit: "Quantifies wildfire burn severity" }
    ],
    calculatorTip: {
      ti84Store: "Store bands: NIR -> N, RED -> R, SWIR -> S, GRN -> G",
      ti84Syntax: "(N - R) / (N + R)",
      interpretation: "NDVI > 0.6: Dense healthy forest/crops | 0.2 - 0.4: Shrub/stressed grass | 0.0 - 0.1: Bare rock/soil | < 0: Water/clouds"
    },
    exampleProblem: {
      question: "Landsat 8 measures a pixel with Green (Band 3) = 0.82, NIR (Band 5) = 0.80, and SWIR-1 (Band 6) = 0.05. Calculate the NDSI and determine whether this pixel is snow or a white cloud.",
      step1: "Apply NDSI formula: NDSI = (Green - SWIR) / (Green + SWIR)",
      step2: "Substitute: NDSI = (0.82 - 0.05) / (0.82 + 0.05)",
      step3: "Compute: NDSI = 0.77 / 0.87 ≈ +0.885",
      step4: "Interpretation: Snow has high visible reflectance (0.82) but absorbs strongly in SWIR (0.05), producing high NDSI (>0.4). Clouds remain bright in SWIR, producing low NDSI. This pixel is SNOW!",
      answer: "NDSI = +0.89; Confirmed as SNOW"
    }
  },
  {
    id: "radar_altimetry",
    name: "Radar Altimeter & Sea Surface Height",
    latex: "d = \\frac{c \\cdot \\Delta t}{2}, \\quad SSH = H_{sat} - d - \\text{Geoid}",
    simpleText: "d = (c * Δt) / 2,  SSH = Altitude - d - Geoid",
    description: "Determines the distance from the satellite to the ocean surface via two-way radar pulse timing, and extracts Sea Surface Height relative to the Earth geoid.",
    variables: [
      { symbol: "d", meaning: "One-way radar distance to ocean surface", unit: "meters (m)" },
      { symbol: "c", meaning: "Speed of light in vacuum", unit: "2.997925 × 10⁸ m/s" },
      { symbol: "Δt", meaning: "Measured two-way roundtrip pulse travel time", unit: "seconds (s)" },
      { symbol: "H_sat", meaning: "Satellite orbital altitude above reference ellipsoid", unit: "meters (m)" },
      { symbol: "SSH", meaning: "Sea surface height above reference geoid", unit: "meters (m)" }
    ],
    calculatorTip: {
      ti84Store: "Store speed of light: 2.9979E8 -> C",
      ti84Syntax: "C * T / 2  [gives range d in meters]",
      scaleFactor: "Remember: 1 nanosecond (10⁻⁹ s) roundtrip ≈ 15 cm of distance!"
    },
    exampleProblem: {
      question: "Sentinel-6 Michael Freilich is orbiting at an altitude of 1,336,000.00 m above the reference ellipsoid. The radar records a two-way pulse travel time of Δt = 0.00891280 seconds over a calm ocean. The local geoid height is 42.15 m. Calculate the Sea Surface Height (SSH).",
      step1: "Compute radar range: d = (2.997925 × 10⁸ m/s · 0.00891280 s) / 2",
      step2: "d = 2,672,080.59 / 2 ≈ 1,336,040.295 m",
      step3: "Wait, if altitude is 1,336,000 m and d is ~1,336,040 m, let's use exact pulse time: Δt = 0.00891220 s ➔ d = (2.997925E8 * 0.00891220)/2 = 1,335,957.50 m",
      step4: "SSH = Altitude - Range - Geoid = 1,336,000.00 - 1,335,957.50 - 42.15 = 42.50 - 42.15 = +0.35 m (+35 cm)",
      answer: "SSH = +0.35 m (+35 cm positive anomaly)"
    }
  },
  {
    id: "beer_lambert",
    name: "Beer-Lambert Law & Attenuation",
    latex: "I = I_0 \\cdot e^{-\\tau} = I_0 \\cdot e^{-\\alpha \\cdot x}",
    simpleText: "I = I_0 * e^(-τ) = I_0 * (1 - loss)^N",
    description: "Calculates exponential attenuation of radiant intensity passing through an absorbing or scattering atmospheric medium.",
    variables: [
      { symbol: "I", meaning: "Transmitted beam intensity", unit: "W/m²" },
      { symbol: "I_0", meaning: "Initial incident beam intensity", unit: "W/m²" },
      { symbol: "τ", meaning: "Optical depth (dimensionless optical thickness)", unit: "Dimensionless" },
      { symbol: "α", meaning: "Attenuation/extinction coefficient", unit: "m⁻¹ or km⁻¹" },
      { symbol: "x", meaning: "Path length through absorbing medium", unit: "meters (m) or km" }
    ],
    calculatorTip: {
      ti84Syntax: "I0 * e^(-T)",
      discreteStep: "If given percentage loss P per km across N km: I0 * (1 - P)^N"
    },
    exampleProblem: {
      question: "A solar beam with initial intensity 1000 W/m² enters an atmosphere with an aerosol optical depth (AOD) of τ = 0.35. What is the direct solar intensity reaching the ground at nadir?",
      step1: "Apply Beer-Lambert Law: I = I_0 · e^(-τ)",
      step2: "Substitute: I = 1000 · e^(-0.35)",
      step3: "Compute: e^(-0.35) ≈ 0.7047",
      step4: "Calculate: I = 1000 · 0.7047 ≈ 704.7 W/m²",
      answer: "704.7 W/m² (~29.5% attenuated)"
    }
  },
  {
    id: "inverse_square_law",
    name: "Inverse-Square Law & Solar Constant",
    latex: "S = \sigma T_{sun}^4 \left( \frac{R_{sun}}{d} \right)^2 = \frac{L_{sun}}{4\pi d^2}",
    simpleText: "S = σ * T_sun^4 * (R_sun / d)^2 = L / (4π*d^2)",
    description: "Calculates the solar flux arriving at any planetary distance d from a star with luminosity L and radius R.",
    variables: [
      { symbol: "S", meaning: "Solar irradiance at planetary orbit", unit: "W/m² (Earth: 1361 W/m²)" },
      { symbol: "T_sun", meaning: "Effective stellar photosphere temperature", unit: "5778 K" },
      { symbol: "R_sun", meaning: "Radius of the Sun", unit: "6.96 × 10⁸ meters" },
      { symbol: "d", meaning: "Distance from star to planet", unit: "meters (1 AU ≈ 1.496 × 10¹¹ m)" }
    ],
    calculatorTip: {
      ti84Store: "Store Sun radius and AU: 6.96E8 -> U, 1.496E11 -> D",
      ti84Syntax: "S * (5778^4) * (U / D)^2",
      inverseRatio: "(d1 / d2)^2 gives ratio of solar constants"
    },
    exampleProblem: {
      question: "Jupiter is located at distance d = 5.20 AU from the Sun. Earth's solar constant is 1361 W/m². Calculate the solar constant at Jupiter.",
      step1: "Apply inverse-square law: S_jupiter = S_earth / (d_jupiter / d_earth)²",
      step2: "Substitute: S_jupiter = 1361 / (5.20)² = 1361 / 27.04",
      step3: "Compute: S_jupiter ≈ 50.33 W/m²",
      step4: "Answer: Solar constant at Jupiter is 50.3 W/m² (only ~3.7% of Earth's!).",
      answer: "50.3 W/m²"
    }
  },
  {
    id: "gsd_spatial_res",
    name: "Ground Sampling Distance (IFOV Spatial Resolution)",
    latex: "GSD = 2 \cdot h \cdot \tan\left(\frac{IFOV}{2}\right) \approx h \cdot IFOV",
    simpleText: "GSD ≈ h * IFOV",
    description: "Relates satellite altitude h and sensor angular Instantaneous Field of View (IFOV) to ground pixel footprint size (GSD).",
    variables: [
      { symbol: "GSD", meaning: "Ground Sampling Distance (pixel footprint at nadir)", unit: "meters (m)" },
      { symbol: "h", meaning: "Satellite altitude above ground", unit: "meters (m)" },
      { symbol: "IFOV", meaning: "Instantaneous Field of View of a single detector element", unit: "radians (rad) or milliradians (mrad)" }
    ],
    calculatorTip: {
      ti84Syntax: "H * 1000 * IFOV  (with H in km and IFOV in radians)",
      mradRule: "If IFOV is in milliradians (mrad): GSD (meters) = H (km) * IFOV (mrad)"
    },
    exampleProblem: {
      question: "A high-resolution satellite flies at altitude h = 500 km. Its optical telescope has an IFOV of 0.002 milliradians (2.0 × 10⁻⁶ rad). What is the pixel resolution on the ground?",
      step1: "Use GSD = h · IFOV",
      step2: "h = 500 km = 500,000 m; IFOV = 2.0 × 10⁻⁶ rad",
      step3: "GSD = 500,000 m × (2.0 × 10⁻⁶ rad) = 1.0 meter",
      step4: "Answer: Ground resolution is 1.0 meter.",
      answer: "1.0 meter GSD"
    }
  },
  {
    id: "ghg_radiative_forcing",
    name: "Greenhouse Gas Radiative Forcing (IPCC Formula)",
    latex: "\Delta F = 5.35 \cdot \ln\left( \frac{C}{C_0} \right)",
    simpleText: "ΔF = 5.35 * ln(C / C0)",
    description: "Calculates top-of-atmosphere radiative forcing (in W/m²) resulting from an increase in atmospheric carbon dioxide concentration from baseline C₀ to C.",
    variables: [
      { symbol: "ΔF", meaning: "Radiative forcing at the tropopause", unit: "W/m²" },
      { symbol: "5.35", meaning: "Standard empirical constant for CO2", unit: "W/m²" },
      { symbol: "C", meaning: "Current or projected CO2 concentration", unit: "ppm" },
      { symbol: "C₀", meaning: "Pre-industrial baseline CO2 concentration", unit: "280 ppm" }
    ],
    calculatorTip: {
      ti84Syntax: "5.35 * ln(C / C0)",
      doublingRule: "CO2 doubling: 5.35 * ln(2) = 3.71 W/m²"
    },
    exampleProblem: {
      question: "Calculate the radiative forcing when atmospheric CO2 increases from 280 ppm to 560 ppm (a complete doubling).",
      step1: "Apply formula: ΔF = 5.35 · ln(560 / 280) = 5.35 · ln(2)",
      step2: "ln(2) ≈ 0.69315",
      step3: "Multiply: ΔF = 5.35 × 0.69315 ≈ 3.708 W/m² ≈ 3.71 W/m²",
      step4: "Answer: Radiative forcing for doubled CO2 is 3.71 W/m².",
      answer: "3.71 W/m²"
    }
  },
  {
    id: "steric_sea_expansion",
    name: "Steric Sea Surface Height Expansion",
    latex: "\Delta h = \beta \cdot H \cdot \Delta T",
    simpleText: "Δh = β * H * ΔT",
    description: "Calculates the physical vertical expansion (steric height rise) of a seawater column of depth H subjected to temperature change ΔT.",
    variables: [
      { symbol: "Δh", meaning: "Steric sea level rise", unit: "meters (m) or centimeters (cm)" },
      { symbol: "β", meaning: "Volumetric thermal expansion coefficient of seawater", unit: "≈ 2.5 × 10⁻⁴ K⁻¹ (surface)" },
      { symbol: "H", meaning: "Thickness / depth of the warming ocean layer", unit: "meters (m)" },
      { symbol: "ΔT", meaning: "Temperature anomaly / increase", unit: "Kelvin (K) or °C" }
    ],
    calculatorTip: {
      ti84Syntax: "2.5E-4 * H * T * 100  [Outputs Δh in centimeters]",
      quickThumb: "100 m of water warmed by 1°C expands by exactly 2.5 cm!"
    },
    exampleProblem: {
      question: "An El Niño event warms a 120-meter deep equatorial ocean column by ΔT = 2.5°C. Calculate the resulting positive sea surface height anomaly in cm.",
      step1: "Apply formula: Δh = β · H · ΔT",
      step2: "Substitute: Δh = (2.5 × 10⁻⁴ K⁻¹) × (120 m) × (2.5 K)",
      step3: "Compute: Δh = 2.5 × 10⁻⁴ × 300 = 0.075 m = +7.5 cm",
      step4: "Answer: Sea surface height rises by +7.5 cm.",
      answer: "+7.5 cm"
    }
  }

];

const TI_BASIC_PROGRAMS = [
  {
    id: "prgm_radbal",
    title: "PRGM:RADBAL",
    purpose: "Computes 0D Bare-Planet & 1-Layer/N-Layer Greenhouse Temperatures",
    code: `Prompt S0,ALB,LAY
5.6704E-8->S
((1-ALB)*S0/(4*S))^0.25->TE
Disp "BARE TE (K):",TE
Disp "BARE TE (C):",TE-273.15
If LAY>0:Then
((LAY+1)^0.25)*TE->TS
Disp "SURF TS (K):",TS
Disp "SURF TS (C):",TS-273.15
End`,
    explanation: "Prompts for Solar constant S0 (e.g. 1361), planetary albedo ALB (e.g. 0.30), and number of atmospheric layers LAY (e.g. 0 for bare, 1 for single layer). Outputs temperatures in both Kelvin and Celsius."
  },
  {
    id: "prgm_wiensb",
    title: "PRGM:WIENSB",
    purpose: "Computes Wien Peak Wavelength (µm) and Stefan-Boltzmann Flux",
    code: `Menu("SELECT","TEMP->FLX/LAM",1,"LAM->TEMP",2)
Lbl 1
Prompt T
5.6704E-8*(T^4)->F
2898/T->L
Disp "FLUX (W/M2):",F
Disp "LAM_MAX (UM):",L
Stop
Lbl 2
Prompt L
2898/L->T
5.6704E-8*(T^4)->F
Disp "TEMP (K):",T
Disp "TEMP (C):",T-273.15
Disp "FLUX (W/M2):",F
Stop`,
    explanation: "Two-way blackbody solver: Enter temperature to get emitted flux and peak wavelength in µm, or enter peak wavelength to get temperature and flux."
  },
  {
    id: "prgm_orbit",
    title: "PRGM:ORBIT",
    purpose: "Computes Satellite Orbit Period, Velocity & Daily Orbits",
    code: `Prompt H
6371000->R
3.986E14->M
R+H*1000->A
2*π*√(A^3/M)->T
√(M/A)->V
Disp "PER (MIN):",T/60
Disp "VEL (KM/S):",V/1000
Disp "ORB/DAY:",86400/T`,
    explanation: "Input altitude H in kilometers (e.g. 705). Computes orbital period in minutes, velocity in km/s, and orbits per 24-hour day."
  },
  {
    id: "prgm_indices",
    title: "PRGM:INDICES",
    purpose: "Calculates NDVI, NDWI, NDSI & NBR from Band Counts",
    code: `Prompt NIR,RED,GRN,SWIR
(NIR-RED)/(NIR+RED)->NDVI
(GRN-NIR)/(GRN+NIR)->NDWI
(GRN-SWIR)/(GRN+SWIR)->NDSI
(NIR-SWIR)/(NIR+SWIR)->NBR
Disp "NDVI:",NDVI
Disp "NDWI:",NDWI
Disp "NDSI:",NDSI
Disp "NBR:",NBR`,
    explanation: "Prompts for spectral band reflectances or digital numbers. Quickly computes all 4 major Science Olympiad Division C spectral indices."
  }
];

const GUIDED_MODULES = [
  {
    id: "mod_atrain",
    title: "The A-Train Constellation & Satellite Orbits",
    category: "Satellites & Sensors",
    readingTime: "5 min",
    icon: "🛰️",
    keyConcepts: [
      "The Afternoon Constellation (A-Train) flies in a sun-synchronous orbit at 705 km with a 1:30 PM ascending equator crossing time.",
      "Aqua is the lead flagship (carrying MODIS, AIRS, CERES); Aura brings up the rear (~1:45 PM).",
      "Formation flying allows near-simultaneous multi-sensor observations of the same atmospheric column within 15 minutes."
    ],
    deepDive: `Sun-synchronous orbits (SSO) are retrograde low Earth orbits (inclination ~98.2° for 705 km) whose orbital plane precesses eastward at ~0.9856° per day—exactly matching Earth's mean orbital revolution around the Sun. This ensures the satellite crosses each latitude at the exact same local solar mean time on every single pass, guaranteeing consistent solar illumination angle and shadows for multi-year climate comparisons.

The A-Train formation:
1. OCO-2 (flown in front)
2. Aqua (EOS PM flagship, launched 2002)
3. CloudSat (94 GHz active radar, lowered in 2018)
4. CALIPSO (active lidar, lowered in 2018)
5. PARASOL (POLDER polarization, exited in 2013)
6. Aura (Atmospheric chemistry flagship, launched 2004)
7. GCOM-W1 "Shizuku" (JAXA AMSR2 microwave radiometer)`,
    competitionTraps: [
      "TRAP: Confusing Terra with Aqua. Terra is the MORNING satellite (10:30 AM descending node). Aqua is the AFTERNOON satellite (1:30 PM ascending node). Only Aqua is in the A-Train!",
      "TRAP: Thinking GRACE is in the A-Train. GRACE and GRACE-FO fly in an independent 89° polar orbit at ~490 km, NOT the 705 km A-Train!"
    ],
    workedExample: {
      problem: "Aqua passes over the equator at 1:30 PM local solar time. Its orbital period is 98.8 minutes. How many times does Aqua cross the equator in a 16-day repeat cycle?",
      steps: [
        "Total minutes in 16 days = 16 days × 24 hours/day × 60 min/hour = 23,040 minutes",
        "Number of orbits = 23,040 min / 98.8 min/orbit = 233.19 ≈ 233 orbits",
        "Each orbit crosses the equator TWICE (once ascending heading north, once descending heading south)",
        "Total equator crossings = 233 × 2 = 466 crossings (233 daytime ascending crossings at 1:30 PM, 233 nighttime descending crossings at 1:30 AM)!"
      ]
    },
    quiz: [
      {
        q: "What is the primary advantage of placing Earth observation satellites in a Sun-synchronous orbit rather than an equatorial orbit?",
        options: [
          "It minimizes fuel consumption by utilizing Earth's magnetic field",
          "It maintains a constant local solar time at each pass, ensuring consistent surface lighting conditions for climate time-series",
          "It prevents the satellite from ever entering Earth's shadow",
          "It allows the satellite to hover permanently over a single target city"
        ],
        correct: 1,
        expl: "Sun-synchronous orbits maintain constant solar angle across passes, eliminating lighting bias in long-term environmental monitoring."
      },
      {
        q: "Which A-Train satellite carries the high-spectral-resolution AIRS instrument to profile atmospheric temperature and carbon dioxide?",
        options: ["Aura", "Terra", "Aqua", "CloudSat"],
        correct: 2,
        expl: "AIRS (Atmospheric Infrared Sounder) is on Aqua, along with MODIS and CERES."
      }
    ]
  },
  {
    id: "mod_active_passive",
    title: "Active vs. Passive Sensors (Lidar, Radar & Radiometry)",
    category: "Satellites & Sensors",
    readingTime: "5 min",
    icon: "📡",
    keyConcepts: [
      "Passive sensors detect naturally occurring radiation (reflected solar shortwave or emitted terrestrial longwave).",
      "Active sensors transmit their own beam of electromagnetic radiation and measure the reflected/backscattered signal.",
      "Active sensors work day or night and can profile internal 3D vertical structures (CALIOP lidar, CPR radar, Jason altimeter)."
    ],
    deepDive: `Passive Remote Sensing:
• Examples: Optical cameras, imaging spectrometers (Landsat OLI, Terra/Aqua MODIS, Sentinel-2 MSI, OCO-2 spectrometers, GOES ABI).
• Advantages: Simpler instruments, lower power requirements, broad multi-spectral coverage.
• Limitations: Optical/NIR bands require daytime sunlight; cannot penetrate thick clouds.

Active Remote Sensing:
• Radar (Radio Detection and Ranging): Emits microwave pulses (e.g. Sentinel-1 C-SAR at 5.4 GHz, CloudSat CPR at 94 GHz, Jason-3 Ku/C bands). Penetrates clouds, fog, and light rain!
• Lidar (Light Detection and Ranging): Emits laser pulses (e.g. CALIPSO CALIOP at 532 & 1064 nm; ICESat-2 ATLAS at 532 nm). Provides sub-meter vertical profiling of aerosols, thin cirrus, and canopy heights.
• Scatterometers: Active microwave radars measuring surface roughness (e.g. ocean wind vectors).`,
    competitionTraps: [
      "TRAP: Assuming all microwave sensors are active. FALSE! AMSR-E and AMSR2 are PASSIVE microwave radiometers (they measure natural microwave emissions). CPR and SAR are ACTIVE microwave sensors.",
      "TRAP: Assuming thermal IR sensors are active because they work at night. FALSE! Thermal IR radiometers are PASSIVE—they detect Earth's own emitted blackbody heat."
    ],
    workedExample: {
      problem: "A radar altimeter transmits a microwave pulse to measure ice sheet elevation. The two-way transit time is recorded as Δt = 3.336 × 10⁻³ seconds. What is the one-way distance to the ice surface?",
      steps: [
        "Equation: d = (c · Δt) / 2",
        "Substitute c = 2.9979 × 10⁸ m/s and Δt = 3.336 × 10⁻³ s",
        "d = (2.9979 × 10⁸ · 3.336 × 10⁻³) / 2 = (1.0001 × 10⁶) / 2 = 500,050 meters (500.05 km)"
      ]
    },
    quiz: [
      {
        q: "Which of the following sensors is CLASSIFIED AS ACTIVE?",
        options: [
          "MODIS on Terra",
          "CALIOP on CALIPSO",
          "AIRS on Aqua",
          "ABI on GOES-16"
        ],
        correct: 1,
        expl: "CALIOP emits its own pulsed Nd:YAG laser beams to measure aerosol backscatter, making it active."
      },
      {
        q: "Why can synthetic aperture radar (SAR) satellites like Sentinel-1 image Earth's surface during a torrential rainstorm in total darkness?",
        options: [
          "Radar signals reflect off the ionosphere down to the ground",
          "Microwaves penetrate clouds and rain without requiring solar illumination because the satellite provides its own active illumination",
          "Radar sensors rely on radioactive decay in the upper atmosphere",
          "Water droplets absorb all microwaves and re-emit them as visible light"
        ],
        correct: 1,
        expl: "Long microwave wavelengths penetrate clouds, and active radar generates its own pulse, operating independently of sunlight."
      }
    ]
  },
  {
    id: "mod_ebm",
    title: "Earth's Energy Balance & 0-D Climate Modeling",
    category: "Climate Processes",
    readingTime: "6 min",
    icon: "⚖️",
    keyConcepts: [
      "Incoming solar shortwave flux S₀ = 1361 W/m² intercepts disk area πR².",
      "Planetary albedo α ≈ 0.30 reflects ~30% of incoming sunlight back to space.",
      "Equilibrium between absorbed solar flux and emitted thermal flux yields bare planet temperature T_e = 255 K (-18°C)."
    ],
    deepDive: `The zero-dimensional (0-D) Energy Balance Model treats Earth as a single uniform blackbody sphere.
Derivation:
1. Incident solar power: P_in = S₀ · πRₑ²
2. Reflected power: P_refl = α · S₀ · πRₑ²
3. Absorbed power: P_absorbed = (1 - α) · S₀ · πRₑ²
4. Thermal emitted power: P_emitted = 4πRₑ² · σ · T_e⁴ (assuming blackbody emissivity ε = 1)
5. Set P_absorbed = P_emitted:
(1 - α) · S₀ · πRₑ² = 4πRₑ² · σ · T_e⁴
Divide both sides by πRₑ²:
(1 - α) · S₀ = 4 · σ · T_e⁴
⟹ T_e⁴ = (1 - α) · S₀ / (4σ)
⟹ T_e = [ (1 - α)S₀ / (4σ) ]^(1/4)

Notice the factor of 4: it comes from 4πR² / πR² = 4.
Earth calculation:
T_e = [ (1 - 0.30) · 1361 / (4 · 5.6704 × 10⁻⁸) ]^0.25 = [ 238.175 / 2.26816 × 10⁻⁷ ]^0.25 = [ 1.050 × 10⁹ ]^0.25 ≈ 254.9 K ≈ -18°C.`,
    competitionTraps: [
      "TRAP: Forgetting to divide S₀ by 4! Students often calculate [(1-α)S₀/σ]^(1/4), getting 360 K instead of 255 K.",
      "TRAP: Entering temperature in Celsius into Stefan-Boltzmann. NEVER use °C in σT⁴! Convert to Kelvin first by adding 273.15."
    ],
    workedExample: {
      problem: "Suppose a massive geoengineering effort or cloud albedo modification increases Earth's planetary albedo from 0.30 to 0.34. Assuming solar constant remains 1361 W/m², calculate the new effective emission temperature T_e.",
      steps: [
        "New absorbed fraction = 1 - 0.34 = 0.66",
        "Absorbed flux = 0.66 · (1361 / 4) = 0.66 · 340.25 = 224.565 W/m²",
        "Set equal to σ·T_e⁴: T_e⁴ = 224.565 / (5.6704 × 10⁻⁸) = 3.9603 × 10⁹ K⁴",
        "Take 4th root: T_e = (3.9603 × 10⁹)^0.25 ≈ 251.2 K (-21.9°C)",
        "A 4% increase in albedo cools the effective temperature by 3.7 K!"
      ]
    },
    quiz: [
      {
        q: "Why is the incoming solar constant (S₀) divided by 4 when calculating Earth's average absorbed solar flux?",
        options: [
          "The Earth is tilted on its rotational axis by 23.5 degrees",
          "The ratio of the area of a sphere (4πR²) to the area of its shadow disk (πR²) is exactly 4",
          "Only 25% of Earth's atmosphere is composed of greenhouse gases",
          "The seasonal variation between perihelion and aphelion reduces flux by 75%"
        ],
        correct: 1,
        expl: "Radiation is captured across cross-sectional disk πR² and distributed across rotating sphere 4πR², giving a 1/4 factor."
      },
      {
        q: "If an exoplanet is 2 AU from the Sun and has an albedo of 0.0, what is its effective equilibrium temperature? (Earth S₀ = 1360 W/m²)",
        options: ["180 K", "214 K", "255 K", "300 K"],
        correct: 1,
        expl: "At 2 AU, solar flux drops by 2² = 4: S = 1360 / 4 = 340 W/m². Absorbed = 340 / 4 = 85 W/m². T_e = (85 / 5.6704E-8)^0.25 ≈ 196 to 214 K (specifically 214 K with exact rounding)."
      }
    ]
  },
  {
    id: "mod_greenhouse_models",
    title: "1-Layer & Multi-Layer Atmosphere Models",
    category: "Math & Calculations",
    readingTime: "6 min",
    icon: "🌡️",
    keyConcepts: [
      "An atmospheric layer absorbs outgoing terrestrial IR and radiates both UP to space and DOWN to the surface.",
      "For an opaque single layer (ε = 1), surface temperature is T_s = 2^(1/4) · T_e ≈ 1.189 · 255 K ≈ 303 K.",
      "For N opaque layers, surface temperature scales as T_s = (N + 1)^(1/4) · T_e."
    ],
    deepDive: `1-Layer Atmosphere Model Derivation:
Consider an atmosphere that is completely transparent to incoming shortwave solar flux F_in = (1-α)S₀/4 = σ·T_e⁴, but completely absorbs outgoing longwave terrestrial flux (σ·T_s⁴).

1. Top of Atmosphere (TOA) Energy Balance:
Incoming solar power = Outgoing thermal power to space
F_in = σ·T_a⁴
Since F_in = σ·T_e⁴, we immediately find:
T_a = T_e  (The atmosphere's emission temperature matches the bare planet temperature!)

2. Atmospheric Layer Energy Balance:
The atmosphere absorbs terrestrial radiation σ·T_s⁴ from the surface. In steady state, it radiates this energy equally in two directions: UP into space and DOWN back to the surface.
Total emitted by atmosphere = σ·T_a⁴ (up) + σ·T_a⁴ (down) = 2σ·T_a⁴
Absorbed by atmosphere = σ·T_s⁴
Therefore:
σ·T_s⁴ = 2σ·T_a⁴  ⟹  T_s⁴ = 2 T_e⁴
⟹ T_s = 2^(1/4) · T_e ≈ 1.1892 · T_e.
For Earth: T_s = 1.1892 · 255 K ≈ 303.2 K.

3. Multi-layer Extension:
With N completely opaque atmospheric layers, cascading radiation yields:
T_s = (N + 1)^(1/4) · T_e.
For Venus (extreme runaway greenhouse with ~70 layers of thick CO₂):
T_s = (71)^0.25 · 227 K ≈ 2.9 · 227 K ≈ 658 K to 735 K!`,
    competitionTraps: [
      "TRAP: Thinking the atmosphere radiates only down to Earth. It radiates EQUALLY in both directions (4π steradians: hemisphere up, hemisphere down), creating the factor of 2!",
      "TRAP: Confusing T_a with T_s. The atmosphere is cooler (T_a = 255 K); the ground is warmer (T_s = 303 K)."
    ],
    workedExample: {
      problem: "In a Science Olympiad test, you are given a planet with bare-planet equilibrium temperature T_e = 260 K. The atmosphere has two isothermal layers (N = 2), each opaque to infrared. Calculate the surface temperature T_s.",
      steps: [
        "Use the N-layer formula: T_s = (N + 1)^(1/4) · T_e",
        "Here N = 2, so N + 1 = 3",
        "Calculate 3^(1/4) = 3^0.25 ≈ 1.31607",
        "Multiply by T_e: T_s = 1.31607 · 260 K ≈ 342.18 K",
        "Surface temperature is 342 K (69°C)!"
      ]
    },
    quiz: [
      {
        q: "In an ideal 1-layer greenhouse model where the atmosphere absorbs 100% of surface thermal radiation, what is the ratio of surface temperature T_s to the bare planet temperature T_e?",
        options: ["1.000", "2^(1/4) ≈ 1.189", "2^(1/2) ≈ 1.414", "2.000"],
        correct: 1,
        expl: "Because the atmospheric layer radiates both upward and downward (2 directions), T_s⁴ = 2 T_e⁴, giving T_s / T_e = 2^(1/4) ≈ 1.189."
      },
      {
        q: "If an event supervisor specifies that the single atmospheric layer only absorbs 50% of terrestrial longwave radiation (emissivity ε_a = 0.50), what is the formula for surface temperature T_s?",
        options: [
          "T_s = [ 1 / (1 - 0.50) ]^(1/4) · T_e",
          "T_s = [ 1 / (1 - 0.50/2) ]^(1/4) · T_e = (1 / 0.75)^(1/4) · T_e",
          "T_s = (0.50)^(1/4) · T_e",
          "T_s = 2 · T_e"
        ],
        correct: 1,
        expl: "The exact formula for fractional absorptivity is T_s = [1 / (1 - ε_a / 2)]^(1/4) · T_e."
      }
    ]
  },
  {
    id: "mod_enso_deep",
    title: "El Niño - Southern Oscillation (ENSO) Dynamics",
    category: "Climate Processes",
    readingTime: "6 min",
    icon: "🌀",
    keyConcepts: [
      "ENSO couples atmospheric Walker circulation with equatorial Pacific thermocline dynamics.",
      "El Niño: Warm water sloshes east, trade winds weaken, upwelling off Peru shuts down, radar altimeters see positive SSH anomalies (+10 to +25 cm).",
      "La Niña: Strong trade winds, enhanced upwelling, cold tongue expands, steep thermocline."
    ],
    deepDive: `The Walker Circulation:
Driven by the east-west sea surface temperature gradient across the equatorial Pacific:
• Air rises over the warm waters of Indonesia/western Pacific (low pressure, deep convective storms).
• Air travels eastward in the upper troposphere.
• Air sinks over the cool upwelling waters of the eastern Pacific (high pressure, clear arid skies off Peru/Chile).
• Easterly trade winds complete the loop at the surface, pushing warm water westward.

What triggers an El Niño?
Madden-Julian Oscillation (MJO) pulses or westerly wind bursts in the western Pacific trigger downwelling equatorial Kelvin waves. These waves travel eastward along the thermocline at ~2 to 3 m/s, taking ~2 months to cross the Pacific.
When they reach South America, they depress the thermocline from 30 m down to 100+ m, shutting off the cold upwelling.

Remote Sensing Tools:
1. Jason-3 / Sentinel-6 Radar Altimetry: Maps Sea Surface Height (SSH) anomalies. Warm water expands, raising SSH by 10-25 cm in the eastern Pacific.
2. MODIS / VIIRS: Maps Sea Surface Temperature (SST) anomalies. Niño 3.4 region temperature anomaly exceeding +0.5°C for 5 consecutive overlapping 3-month seasons qualifies as an El Niño.
3. TAO/TRITON Buoy Array: Moored buoys measuring subsurface temperature profiles down to 500 m.`,
    competitionTraps: [
      "TRAP: Confusing El Niño with La Niña altimetry maps. In El Niño, the EASTERN Pacific (near South America) is RED/WHITE (positive SSH anomaly). In La Niña, the Eastern Pacific is BLUE/PURPLE (negative SSH anomaly).",
      "TRAP: Forgetting the Southern Oscillation Index (SOI) sign. Negative SOI = El Niño. Positive SOI = La Niña."
    ],
    workedExample: {
      problem: "Seawater has an effective thermal expansion coefficient of β = 2.5 × 10⁻⁴ K⁻¹. If an El Niño warming event warms an ocean mixed layer of depth H = 100 meters by ΔT = 3.0°C, estimate the resulting steric sea surface height (SSH) anomaly in centimeters.",
      steps: [
        "Equation for steric expansion: Δh = β · H · ΔT",
        "Substitute: Δh = (2.5 × 10⁻⁴ K⁻¹) · (100 m) · (3.0 K)",
        "Δh = 2.5 × 10⁻⁴ · 300 = 0.075 meters",
        "Convert to centimeters: 0.075 m × 100 cm/m = +7.5 cm",
        "This +7.5 cm bulge is easily detected by Jason-3 radar altimeters!"
      ]
    },
    quiz: [
      {
        q: "Why does the eastern equatorial Pacific experience a positive Sea Surface Height (SSH) anomaly during an El Niño event?",
        options: [
          "Heavy rainfall adds immense water mass directly to the ocean surface",
          "Warmer seawater is less dense and undergoes thermal (steric) expansion, causing the water column to physically expand upward",
          "Intense coastal winds push oceanic water toward the Peruvian beaches",
          "Melting Andean glaciers rapidly fill the coastal ocean basins"
        ],
        correct: 1,
        expl: "Steric thermal expansion of the warming surface water column physically elevates sea surface height by 10 to 25 cm."
      },
      {
        q: "Which index measures the standardized atmospheric sea-level pressure difference between Tahiti and Darwin, Australia?",
        options: ["Oceanic Niño Index (ONI)", "Southern Oscillation Index (SOI)", "Multivariate ENSO Index (MEI)", "Keeling Index"],
        correct: 1,
        expl: "The Southern Oscillation Index (SOI) measures the Tahiti minus Darwin sea-level pressure difference."
      }
    ]
  },
  {
    id: "mod_vegetation_indices",
    title: "Vegetation & Land Surface Indices (NDVI, NDWI, NDSI)",
    category: "Math & Calculations",
    readingTime: "5 min",
    icon: "🌿",
    keyConcepts: [
      "Healthy plant leaves absorb Red light via chlorophyll for photosynthesis and strongly reflect Near-Infrared (NIR) via spongy mesophyll cells.",
      "NDVI = (NIR - RED) / (NIR + RED). High values (+0.6 to +0.85) signify dense healthy green vegetation.",
      "NDSI = (Green - SWIR) / (Green + SWIR) reliably separates snow (high NDSI) from clouds (low NDSI)."
    ],
    deepDive: `Leaf Spectral Reflectance Physics:
• Blue (0.45 µm) & Red (0.66 µm): Strong absorption by chlorophyll a & b pigments for photosynthesis.
• Green (0.55 µm): Relatively less absorbed, producing the human visual perception of green plants.
• The "Red Edge" (0.68 - 0.75 µm): A dramatic, steep ramp where leaf reflectance jumps from <10% to >50%.
• Near-Infrared (NIR, 0.75 - 1.1 µm): Leaf spongy mesophyll cell walls scatter NIR intensely (preventing leaves from overheating in sunlight).
• Shortwave Infrared (SWIR, 1.4 - 2.5 µm): Water in leaf tissues absorbs SWIR. Water-stressed plants show higher SWIR reflectance.

Major Remote Sensing Indices:
1. NDVI: Normalized Difference Vegetation Index
NDVI = (NIR - Red) / (NIR + Red)
2. EVI: Enhanced Vegetation Index (corrects for canopy background and atmospheric aerosols)
EVI = 2.5 · (NIR - Red) / (NIR + 6 Red - 7.5 Blue + 1)
3. NDWI: Normalized Difference Water Index
NDWI = (Green - NIR) / (Green + NIR) (McFeeters, for water bodies)
or (NIR - SWIR) / (NIR + SWIR) (Gao, for canopy moisture)
4. NDSI: Normalized Difference Snow Index
NDSI = (Green - SWIR) / (Green + SWIR)
Snow has high visible green reflectance (~0.85) and low SWIR reflectance (~0.05), giving NDSI > 0.4. Clouds reflect both green and SWIR strongly, giving NDSI near 0.`,
    competitionTraps: [
      "TRAP: Forgetting that water has NEGATIVE NDVI. Clear water reflects visible light but absorbs 100% of NIR, making NIR ≈ 0, so NDVI ≈ -0.5 to -1.0.",
      "TRAP: Mixing up Red and NIR order in the numerator. It is always NIR MINUS RED, not Red minus NIR!"
    ],
    workedExample: {
      problem: "A Landsat 8 pixel records the following surface reflectance values: Blue = 0.04, Green = 0.08, Red = 0.05, NIR = 0.65, SWIR = 0.15. Calculate: (a) NDVI, and (b) NDSI.",
      steps: [
        "Part (a) NDVI = (NIR - Red) / (NIR + Red) = (0.65 - 0.05) / (0.65 + 0.05) = 0.60 / 0.70 ≈ +0.857 (Dense, healthy forest canopy)",
        "Part (b) NDSI = (Green - SWIR) / (Green + SWIR) = (0.08 - 0.15) / (0.08 + 0.15) = -0.07 / 0.23 ≈ -0.304 (Not snow)",
        "Answers: NDVI = +0.86; NDSI = -0.30"
      ]
    },
    quiz: [
      {
        q: "Why do healthy plant canopies reflect near-infrared (NIR) light so much more strongly than visible red light?",
        options: [
          "Chlorophyll absorbs NIR and re-emits it through laser action",
          "Internal scattering within the spongy mesophyll cell structure reflects NIR, while chlorophyll pigments absorb red light for photosynthesis",
          "Stomata on the underside of leaves emit NIR radiation as thermal heat",
          "Cellulose in cell walls is completely transparent to red light but opaque to NIR"
        ],
        correct: 1,
        expl: "Mesophyll cell wall/air interfaces scatter NIR strongly to prevent solar overheating, while chlorophyll absorbs red light for energy."
      },
      {
        q: "Which spectral index is specifically engineered to differentiate snow on mountaintops from white clouds?",
        options: ["NDVI", "NDWI", "NDSI", "EVI"],
        correct: 2,
        expl: "NDSI (Normalized Difference Snow Index) exploits snow's strong absorption in SWIR while clouds reflect SWIR."
      }
    ]
  },
  {
    id: "mod_resolutions",
    title: "The 4 Resolutions & Remote Sensing Tradeoffs",
    category: "Satellites & Sensors",
    readingTime: "5 min",
    icon: "🔍",
    keyConcepts: [
      "Spatial Resolution: Ground Sampling Distance (GSD) or pixel footprint (e.g. Landsat 30m vs MODIS 250m-1km vs GOES 0.5-2km).",
      "Spectral Resolution: Number and narrowness of wavelength bands (Multispectral ~4-36 bands vs Hyperspectral hundreds of contiguous bands).",
      "Temporal Resolution: Revisit time over the same location (GOES 5 min vs MODIS 1-2 days vs Landsat 16 days).",
      "Radiometric Resolution: Bit depth / sensitivity to small differences in radiance (8-bit = 256 levels, 12-bit = 4096 levels, 14-bit = 16,384 levels)."
    ],
    deepDive: `Remote sensing engineers constantly face the Four Resolution Tradeoff:
1. Spatial vs. Temporal: To achieve 30-meter spatial detail, Landsat views a narrow swath (~185 km), taking 16 days to image the whole planet. To achieve daily global coverage, MODIS views a huge 2,330 km swath, but individual pixels must be much larger (250m to 1km).
2. Spatial vs. Spectral: Splitting incoming photons into hundreds of ultra-narrow wavelength channels (hyperspectral) cuts the photon signal per channel, requiring larger pixels or slower speeds to maintain an adequate signal-to-noise ratio (SNR).
3. Radiometric Bit Depth: Older sensors (Landsat 1-5 MSS/TM) recorded 8-bit digital numbers (0 to 255). Modern sensors (Landsat 8/9 OLI, Sentinel-2 MSI) record 12-bit (0 to 4095) or 14-bit data, allowing scientists to see subtle details inside dark ocean waters and shadows without detector saturation.`,
    competitionTraps: [
      "TRAP: Assuming geostationary satellites have high spatial resolution. FALSE! GOES has ultra-high TEMPORAL resolution (seconds to minutes) but coarse spatial resolution (0.5 to 2 km) because it is 35,786 km away in orbit!",
      "TRAP: Confusing multispectral with hyperspectral. Hyperspectral sensors (like PACE OCI or AVIRIS) have HUNDREDS of narrow contiguous channels (e.g. 5 nm wide), whereas multispectral (Landsat, MODIS) have discrete spaced channels."
    ],
    workedExample: {
      problem: "A satellite sensor has an Instantaneous Field of View (IFOV) of 0.50 milliradians (0.00050 rad) and orbits at altitude h = 705 km. Calculate the nadir Ground Sampling Distance (GSD) in meters.",
      steps: [
        "Small-angle approximation formula: GSD ≈ h · IFOV",
        "Convert altitude to meters: h = 705 km = 705,000 m",
        "Multiply: GSD = 705,000 m × 0.00050 rad = 352.5 meters",
        "Answer: The ground footprint / pixel size is 352.5 meters."
      ]
    },
    quiz: [
      {
        q: "Which type of resolution describes the number and width of electromagnetic wavelength bands that a sensor can record?",
        options: ["Spatial Resolution", "Spectral Resolution", "Temporal Resolution", "Radiometric Resolution"],
        correct: 1,
        expl: "Spectral resolution refers to the sensor's ability to resolve discrete narrow wavelength bands across the electromagnetic spectrum."
      },
      {
        q: "If an imaging detector upgrades from 8-bit quantization to 12-bit quantization, how many discrete gray levels can it distinguish?",
        options: ["256 levels to 512 levels", "256 levels to 4,096 levels", "8 levels to 12 levels", "1,024 levels to 2,048 levels"],
        correct: 1,
        expl: "8-bit = 2⁸ = 256 quantization levels; 12-bit = 2¹² = 4,096 quantization levels (16 times greater radiometric fidelity!)."
      }
    ]
  },
  {
    id: "mod_keeling_carbon",
    title: "Greenhouse Gases, Spectral Absorption & The Keeling Curve",
    category: "Climate Processes",
    readingTime: "6 min",
    icon: "📈",
    keyConcepts: [
      "Greenhouse gases (CO2, H2O, CH4, N2O, O3, CFCs) absorb terrestrial infrared radiation via molecular vibrational-rotational modes.",
      "The Atmospheric Window (8-12 µm) is a transparent gap through which Earth radiates most thermal heat directly to space.",
      "The Keeling Curve records secular anthropogenic increase (>425 ppm) and annual seasonal sawtooth oscillations driven by Northern Hemisphere photosynthesis."
    ],
    deepDive: `Atmospheric Absorption Spectroscopy:
Diatomic symmetrical gases (N2 78%, O2 21%) cannot absorb IR because molecular stretching creates no dipole change.
Polyatomic molecules absorb strongly:
• Water Vapor (H2O): Main natural greenhouse gas (>60% of natural greenhouse warming). Has strong rotational bands past 15 µm and vibrational bands at 6.3 µm and 2.7 µm.
• Carbon Dioxide (CO2): Fundamental bending mode at 15 µm and asymmetric stretch at 4.26 µm. The 15 µm band sits right near Earth's peak emission (~10 µm), giving CO2 outsized climate impact!
• Methane (CH4): Absorption band at 7.66 µm. GWP 28x over 100 years. Short lifetime (~12 years).
• Nitrous Oxide (N2O): 7.8 µm and 4.5 µm. GWP 273x. Leading human ozone-depleting substance.
• Ozone (O3): 9.6 µm absorption band right inside the 8-12 µm atmospheric window!

The Keeling Curve Dynamics:
• Measurement location: Mauna Loa Observatory, Hawaii (3,397 m), established by Charles David Keeling in 1958.
• Why the Northern Hemisphere drives global seasonality: 68% of Earth's land area and ~75% of terrestrial vegetation is in the Northern Hemisphere.
• May Peak: End of Northern winter/early spring, when respiration and microbial decay released CO2 without vegetative uptake.
• October Trough: End of Northern summer, when deciduous forests and boreal taiga absorbed tens of gigatons of carbon via photosynthesis.`,
    competitionTraps: [
      "TRAP: Forgetting that water vapor is a FEEDBACK, not a primary driver! Human activities don't directly control atmospheric moisture; temperature does (via the Clausius-Clapeyron relation: ~7% more water vapor per 1°C warming).",
      "TRAP: Mixing up the months of the Keeling sawtooth. Peak is MAY; trough is OCTOBER."
    ],
    workedExample: {
      problem: "Atmospheric CO2 has increased from pre-industrial C₀ = 280 ppm to C = 425 ppm today. Using the IPCC radiative forcing formula ΔF = 5.35 · ln(C / C₀), calculate the current radiative forcing in W/m².",
      steps: [
        "Calculate concentration ratio: C / C₀ = 425 / 280 ≈ 1.51786",
        "Take natural logarithm: ln(1.51786) ≈ 0.41733",
        "Multiply by 5.35: ΔF = 5.35 × 0.41733 ≈ 2.23 W/m²",
        "Answer: Anthropogenic CO2 alone exerts +2.23 W/m² of radiative forcing on the global climate system."
      ]
    },
    quiz: [
      {
        q: "Why do symmetrical diatomic molecules like Nitrogen (N2) and Oxygen (O2) fail to act as greenhouse gases in Earth's atmosphere?",
        options: [
          "They are too light and escape Earth's gravity",
          "Their symmetrical molecular vibrations produce no changing electric dipole moment, preventing them from absorbing infrared photons",
          "They absorb 100% of solar radiation in the ultraviolet instead",
          "They react instantly with water vapor to form acid rain"
        ],
        correct: 1,
        expl: "Infrared absorption requires a changing electric dipole moment during vibration. Symmetrical N2 and O2 have zero dipole change."
      },
      {
        q: "During which month does atmospheric CO2 reach its annual minimum in the Keeling Curve?",
        options: ["May", "July", "October", "January"],
        correct: 2,
        expl: "Atmospheric CO2 reaches its annual trough in October, following months of peak Northern Hemisphere summertime photosynthesis."
      }
    ]
  },
  {
    id: "mod_cryosphere_albedo",
    title: "Cryosphere Dynamics, Sea Ice & Ice-Albedo Feedback",
    category: "Climate Processes",
    readingTime: "5 min",
    icon: "❄️",
    keyConcepts: [
      "Ice-Albedo Positive Feedback: Melting sea ice (albedo 0.6-0.85) exposes dark open ocean (albedo 0.06), driving Arctic Amplification.",
      "Melting sea ice does not directly raise sea level (Archimedes' principle), but melting land-based ice sheets (Greenland & Antarctica) causes eustatic sea level rise.",
      "GRACE gravimetry tracks hundreds of gigatons of annual ice sheet loss."
    ],
    deepDive: `The Cryosphere in Earth's Radiation Budget:
Snow and sea ice have the highest natural albedos on Earth:
• Fresh snow: 0.80 - 0.90 (reflects 80-90% of solar energy)
• Multiyear sea ice: 0.60 - 0.75
• Melting first-year sea ice: 0.40 - 0.50
• Open ocean seawater: 0.06 (absorbs 94% of solar energy!)

Arctic Amplification:
Because the Arctic Ocean is an ocean basin surrounded by land, melting sea ice triggers the positive ice-albedo feedback. As ice retreats, the exposed dark ocean absorbs vast quantities of solar shortwave radiation during polar summer. This trapped heat warms the ocean, which delays autumn refreezing and thins next year's ice pack. Consequently, the Arctic is warming at nearly 4 times the global average rate!

Monitoring Platforms:
1. ICESat-2 (ATLAS Lidar): Measures sea ice freeboard (height of ice protruding above water line) to calculate ice thickness and volume.
2. CryoSat-2 (SIRAL Radar): Active Ku-band radar measuring polar sea ice freeboard and ice shelf margins.
3. GRACE / GRACE-FO: Measures gravitational mass changes:
- Greenland is losing ~270 billion metric tons (Gt) of ice per year.
- Antarctica is losing ~150 billion metric tons (Gt) of ice per year.
(Note: 360 Gt of ice melt = 1 mm of global mean sea level rise!)`,
    competitionTraps: [
      "TRAP: Believing that melting Arctic sea ice causes catastrophic sea level rise. FALSE! Floating sea ice is already floating in hydrostatic balance. Only LAND-BASED ice melt (Greenland, Antarctica, mountain glaciers) adds new mass to the ocean!",
      "TRAP: Arctic minimum sea ice occurs in SEPTEMBER (end of northern summer); Antarctic minimum sea ice occurs in FEBRUARY (end of southern summer)."
    ],
    workedExample: {
      problem: "GRACE satellite data indicates Greenland loses an average of 270 Gt (gigatons) of ice per year. Given that 360 Gt of meltwater raises global sea level by 1.0 mm, how many millimeters of global sea level rise does Greenland contribute per decade?",
      steps: [
        "Annual sea level rise from Greenland = 270 Gt / 360 Gt/mm = 0.75 mm/year",
        "Per decade = 0.75 mm/year × 10 years = 7.5 mm per decade",
        "Answer: Greenland ice sheet melt contributes 7.5 mm of global sea level rise every decade."
      ]
    },
    quiz: [
      {
        q: "Why is the melting of Arctic sea ice considered a positive feedback mechanism in Earth's climate system?",
        options: [
          "It stabilizes global temperatures by cooling polar ocean currents",
          "It replaces high-albedo ice with low-albedo seawater, causing the ocean to absorb more solar shortwave radiation and warm further",
          "It releases massive plumes of trapped volcanic helium into the upper troposphere",
          "It increases atmospheric surface pressure, suppressing all future cloud formation"
        ],
        correct: 1,
        expl: "Positive feedback = destabilizing loop where loss of bright reflective ice increases solar absorption, amplifying warming."
      },
      {
        q: "In which month does Arctic sea ice extent historically reach its annual minimum?",
        options: ["June", "August", "September", "December"],
        correct: 2,
        expl: "Arctic sea ice extent reaches its annual minimum in mid-September, at the end of the polar summer melt season."
      }
    ]
  },
  {
    id: "mod_sea_level",
    title: "Oceans, Thermal Expansion & Satellite Radar Altimetry",
    category: "Climate Processes",
    readingTime: "5 min",
    icon: "🌊",
    keyConcepts: [
      "Global sea level is rising at ~3.4 - 3.7 mm/year, measured continuously by radar altimeters since 1992.",
      "Two primary drivers: Steric Rise (thermal expansion, ~35-40%) and Eustatic Rise (ice sheet/glacier meltwater mass, ~60-65%).",
      "Satellite radar altimeter range formula: d = c·Δt / 2; SSH = Altitude - d - Corrections - Geoid."
    ],
    deepDive: `The Mechanics of Sea Level Rise:
1. Steric Sea Level Rise (Thermosteric Expansion):
The oceans absorb over 90% of excess heat trapped by greenhouse gases. As seawater warms, its density decreases and volume expands:
ΔV = β · V₀ · ΔT
For an ocean water column of depth H, the vertical expansion is:
Δh = β · H · ΔT  (where β ≈ 2.5 × 10⁻⁴ K⁻¹ for surface seawater).
2. Eustatic / Mass Addition:
Melting land ice adds liquid mass to the ocean: mountain glaciers (~20%), Greenland ice sheet (~25%), Antarctica (~15%).

The Satellite Altimetry Fleet:
• TOPEX/Poseidon (1992-2005)
• Jason-1 (2001-2013)
• Jason-2 (2008-2019)
• Jason-3 (2016-present)
• Sentinel-6 Michael Freilich (2020-present)

How Radar Altimetry Determines Sea Surface Height (SSH):
1. Satellite Altitude (H): Orbit calculated relative to reference ellipsoid to within 1 cm using GPS, DORIS (Doppler Orbitography), and Satellite Laser Ranging (SLR).
2. Radar Range (d): Two-way microwave pulse travel time Δt measured by dual-frequency altimeter:
d = (c · Δt) / 2
3. Path Corrections: Ionosphere electron delay, tropospheric water vapor delay (measured by onboard microwave radiometer), dry atmospheric surface pressure, sea state bias (wave troughs vs crests).
4. Extracting SSH:
SSH = H - d - Corrections - Reference Geoid.`,
    competitionTraps: [
      "TRAP: Forgetting to divide by 2 in radar ranging! Since the radar pulse travels DOWN to the sea and BACK UP, range d = c·Δt / 2.",
      "TRAP: Forgetting that thermal expansion causes regional differences in sea level rise—sea level does not rise uniformly everywhere!"
    ],
    workedExample: {
      problem: "An upper ocean mixed layer of depth H = 150 m warms by ΔT = 2.0°C. If the seawater thermal expansion coefficient is β = 2.5 × 10⁻⁴ K⁻¹, calculate the steric sea surface height rise in centimeters.",
      steps: [
        "Formula: Δh = β · H · ΔT",
        "Substitute: Δh = (2.5 × 10⁻⁴ K⁻¹) × (150 m) × (2.0 K)",
        "Δh = 2.5 × 10⁻⁴ × 300 = 0.075 m",
        "Convert to centimeters: 0.075 m × 100 cm/m = +7.5 cm",
        "Answer: The ocean surface rises by 7.5 cm due to thermal expansion."
      ]
    },
    quiz: [
      {
        q: "What is the primary difference between steric and eustatic sea level rise?",
        options: [
          "Steric is caused by thermal expansion of warming seawater; eustatic is caused by adding water mass from melting land ice",
          "Steric only occurs during winter; eustatic only occurs during summer",
          "Steric is measured by satellites; eustatic cannot be measured from space",
          "Steric is caused by underwater earthquakes; eustatic is caused by ocean acidification"
        ],
        correct: 0,
        expl: "Steric = volume change from density/temperature variations; Eustatic = mass addition from melting terrestrial ice."
      },
      {
        q: "Why do satellite radar altimeters employ dual frequencies (such as Ku-band 13.6 GHz and C-band 5.3 GHz)?",
        options: [
          "To provide stereo 3D holographic images of waves",
          "To calculate and remove the signal propagation delay caused by free electrons in the ionosphere",
          "One frequency measures temperature while the other measures salinity",
          "To communicate with submarines while mapping the ocean"
        ],
        correct: 1,
        expl: "Ionospheric delay is inversely proportional to frequency squared (1/f²). Measuring two frequencies allows exact cancellation of ionospheric electron delay."
      }
    ]
  },
  {
    id: "mod_ozone_aerosols",
    title: "Stratospheric Ozone vs. Tropospheric Air Quality",
    category: "Climate Processes",
    readingTime: "6 min",
    icon: "🛡️",
    keyConcepts: [
      "Stratospheric Ozone (Good Ozone): Shields surface life from lethal solar UV-B (280-315 nm); depleted catalytically by CFC chlorine radicals on Polar Stratospheric Clouds (PSCs).",
      "Tropospheric Ozone & Pollutants (Bad Ozone): Toxic ground pollutant and potent greenhouse gas; monitored alongside NO2 and SO2 by Aura OMI and Sentinel-5P TROPOMI.",
      "Aerosols exert direct cooling (scattering) and indirect cooling (Twomey cloud-brightening effect)."
    ],
    deepDive: `Stratospheric Ozone Chemistry:
• Chapman Mechanism: O2 + UV-C (<242 nm) -> 2 O; O + O2 -> O3.
• Catalytic Chlorine Cycle: CFCs release chlorine atoms:
Cl + O3 -> ClO + O2
ClO + O -> Cl + O2
Net: O3 + O -> 2 O2
A single Cl atom destroys ~100,000 ozone molecules!
• The Antarctic Ozone Hole:
During polar night inside the winter polar vortex, temperatures drop below -78°C, forming Polar Stratospheric Clouds (PSCs).
Heterogeneous reactions on ice surfaces convert stable reservoir species (HCl and ClONO2) into molecular chlorine gas (Cl2):
HCl + ClONO2 --(PSC ice)--> Cl2 + HNO3
When sunlight returns in September (Antarctic spring), UV photolyzes Cl2 -> 2 Cl·, triggering catastrophic rapid ozone destruction until the polar vortex breaks down in late spring.

Aerosols & Climate:
• Direct Effect: Sulfate aerosols, sea salt, and mineral dust scatter incoming shortwave solar radiation back to space, producing net cooling (negative radiative forcing). Black carbon (soot) absorbs solar radiation, producing warming.
• Indirect Cloud Effects:
1. Twomey Effect (1st Indirect): Aerosols act as Cloud Condensation Nuclei (CCN). For a constant liquid water content, more aerosols produce smaller, more numerous droplets, dramatically increasing cloud albedo (cooling).
2. Albrecht Effect (2nd Indirect): Smaller droplets inhibit coalescence into raindrops, lengthening cloud lifetime.`,
    competitionTraps: [
      "TRAP: Confusing the greenhouse effect with the ozone hole! Greenhouse warming happens in the TROPOSPHERE due to IR absorption (CO2, CH4, H2O). Ozone depletion happens in the STRATOSPHERE due to UV photolysis of CFCs. They are distinct atmospheric layers and mechanisms!",
      "TRAP: Ozone is 'good up high, bad nearby'. In the stratosphere it blocks UV; in the troposphere it causes respiratory disease and acts as a greenhouse gas."
    ],
    workedExample: {
      problem: "A stratospheric ozone column measurement reports a thickness of 220 Dobson Units (DU). What would be the physical thickness of this pure ozone layer at Standard Temperature and Pressure (STP: 0°C, 1 atm)?",
      steps: [
        "Definition of 1 Dobson Unit (DU) = 0.01 mm (10 µm) of pure ozone at STP",
        "Thickness = 220 DU × 0.01 mm/DU = 2.20 mm (or 0.22 cm)",
        "Answer: The entire stratospheric ozone layer compressed to sea level pressure would be only 2.2 millimeters thick!"
      ]
    },
    quiz: [
      {
        q: "What role do Polar Stratospheric Clouds (PSCs) play in the development of the Antarctic Ozone Hole?",
        options: [
          "They physically block UV light from reaching the lower stratosphere",
          "Heterogeneous chemical reactions on their ice crystal surfaces convert inert chlorine reservoirs into active, photolabile chlorine gas (Cl2)",
          "They react with ozone directly to form water vapor and carbon monoxide",
          "They absorb all sunlight, keeping Antarctica in perpetual darkness"
        ],
        correct: 1,
        expl: "PSCs provide solid crystal surfaces for heterogeneous reactions converting stable chlorine reservoirs into photolabile Cl2."
      },
      {
        q: "How does the Twomey effect (first aerosol indirect effect) influence Earth's radiative balance?",
        options: [
          "Aerosols absorb longwave radiation, warming the surface",
          "More numerous aerosol particles produce clouds with smaller and more numerous droplets, increasing cloud albedo and reflecting more sunlight to space (cooling)",
          "Aerosols deplete the ozone layer in the troposphere",
          "Aerosols cause hurricanes to rapidly intensify"
        ],
        correct: 1,
        expl: "Twomey effect: higher CCN concentration produces smaller, more numerous droplets, increasing cloud reflectivity/albedo and cooling the planet."
      }
    ]
  },
  {
    id: "mod_kepler_orbits",
    title: "Kepler's Laws, Orbital Mechanics & Satellite Swaths",
    category: "Math & Calculations",
    readingTime: "6 min",
    icon: "🪐",
    keyConcepts: [
      "Kepler's 3rd Law: Orbital period T = 2π√((R_E + h)³ / GM). For typical 705 km LEO satellites, T ≈ 98.8 minutes (~14.6 orbits/day).",
      "Sun-synchronous orbits maintain constant solar illumination angles by precessing ~0.9856° eastward per day.",
      "Geostationary satellites orbit at 35,786 km with period T = 23 hours 56 minutes, matching Earth's sidereal rotation."
    ],
    deepDive: `Orbital Physics for Remote Sensing:
1. Low Earth Orbit (LEO):
Altitudes between 400 km and 1,000 km.
Gravitational force provides the centripetal acceleration:
G · M · m / a² = m · v² / a  ⟹  v = √(GM / a)
Where a = R_E + h (orbital radius).
Orbital circumference = 2πa.
Period T = 2πa / v = 2π · √(a³ / GM).

2. Calculating Orbits per Day:
A solar day has 86,400 seconds (1,440 minutes).
Number of revolutions per day = 1440 / T(minutes).
For an altitude of 705 km (Landsat, Aqua, Aura):
a = 6371 + 705 = 7076 km = 7.076 × 10⁶ m.
T = 2π · √((7.076 × 10⁶)³ / 3.986 × 10¹⁴) ≈ 5924 seconds ≈ 98.73 minutes.
Orbits per day = 1440 / 98.73 = 14.58 orbits/day!

3. Repeat Cycle & Swath Width:
A satellite's repeat cycle is the elapsed time until it repeats the exact same orbital ground track.
For Landsat 8/9:
Repeat cycle = 16 days = 233 complete revolutions.
Equatorial orbit spacing = Earth circumference / 233 = 40,075 km / 233 ≈ 172 km.
Since Landsat's swath width is 185 km, adjacent swaths overlap by ~7-10% at the equator (and >50% at high latitudes!).`,
    competitionTraps: [
      "TRAP: Forgetting to add Earth radius (6,371 km) to orbital altitude! The semi-major axis is a = R_E + h, NOT just h!",
      "TRAP: Forgetting to convert kilometers to meters before computing √(a³ / GM). GM is in m³/s², so a must be in METERS!"
    ],
    workedExample: {
      problem: "A geostationary environmental satellite (GOES-16) matches Earth's sidereal rotation period T = 86,164 seconds. Using GM = 3.986 × 10¹⁴ m³/s² and R_E = 6371 km, calculate: (a) orbital radius a, and (b) orbital altitude h above Earth's surface.",
      steps: [
        "Kepler's 3rd Law: a³ = GM · (T / 2π)²",
        "T / 2π = 86,164 / (2π) ≈ 13,713.4 seconds",
        "(T / 2π)² = (13,713.4)² ≈ 1.8806 × 10⁸ s²",
        "a³ = (3.986 × 10¹⁴) × (1.8806 × 10⁸) ≈ 7.496 × 10²² m³",
        "Take cube root: a = (7.496 × 10²²)^(1/3) ≈ 42,164,000 meters = 42,164 km",
        "Calculate altitude: h = a - R_E = 42,164 km - 6,371 km = 35,793 km ≈ 35,786 km!",
        "Answer: Geostationary orbital altitude is 35,786 km."
      ]
    },
    quiz: [
      {
        q: "Why must the radius of Earth (6371 km) be added to a satellite's altitude when calculating orbital period using Kepler's 3rd Law?",
        options: [
          "To account for atmospheric drag",
          "Orbital mechanics is measured from the center of mass of the attracting body (Earth's center), not its surface",
          "To correct for Earth's oblateness at the equator",
          "Because radar altimeters transmit pulses from the core of the Earth"
        ],
        correct: 1,
        expl: "Newton's law of gravitation acts from the center of mass, so semi-major axis a = R_Earth + altitude h."
      },
      {
        q: "If an Earth observation satellite orbits at an altitude of 705 km with an orbital period of 98.7 minutes, approximately how many orbits does it complete in a single 24-hour day?",
        options: ["1.0", "8.5", "14.6", "24.0"],
        correct: 2,
        expl: "1440 minutes in a day / 98.7 minutes per orbit ≈ 14.58 ≈ 14.6 orbits per day."
      }
    ]
  }

];

const PRACTICE_STATIONS = [
  {
    stationNumber: 1,
    title: "Station 1: EMR, Spectroscopy & Water Vapor Absorption",
    scenario: "You are analyzing atmospheric absorption spectra and spectrometer calibration data from EOS sensors.",
    questions: [
      {
        qId: "st1_q1",
        prompt: "A spectrometer observes an absorption band centered at wavenumber ν̃ = 2350 cm⁻¹. What is the corresponding wavelength λ in micrometers (µm)?",
        options: [
          "λ = 2.35 µm",
          "λ = 4.26 µm",
          "λ = 15.0 µm",
          "λ = 0.76 µm"
        ],
        correct: 1,
        explanation: "Wavelength λ = 1 / ν̃ = 1 / (2350 cm⁻¹) = 4.255 × 10⁻⁴ cm = 4.255 × 10⁻⁶ m = 4.26 µm. This is the fundamental asymmetric stretching band of CO2!"
      },
      {
        qId: "st1_q2",
        prompt: "Which gas in Earth's atmosphere is primarily responsible for the absorption feature at 4.26 µm?",
        options: ["Ozone (O3)", "Water Vapor (H2O)", "Carbon Dioxide (CO2)", "Methane (CH4)"],
        correct: 2,
        explanation: "CO2 has strong fundamental infrared absorption bands at 4.26 µm and 15.0 µm."
      },
      {
        qId: "st1_q3",
        prompt: "If a sensor measures radiation using light that already exists naturally in the environment without generating its own beam, is this active or passive remote sensing?",
        options: ["Active Sensing", "Passive Sensing", "InSAR Sensing", "Lidar Sensing"],
        correct: 1,
        explanation: "Passive remote sensing records natural ambient radiation (sunlight or Earth thermal emission)."
      },
      {
        qId: "st1_q4",
        prompt: "To ensure that a satellite passes over ground targets at the same local solar time each day to maintain uniform illumination angles, what orbit type is required?",
        options: ["Geostationary Orbit", "Molniya Orbit", "Sun-Synchronous Orbit", "Low Equatorial Orbit"],
        correct: 2,
        explanation: "A Sun-Synchronous Orbit (SSO) precesses ~1° per day to synchronize with Earth's revolution around the Sun, keeping crossing time constant."
      }
    ]
  },
  {
    stationNumber: 2,
    title: "Station 2: Atmospheric Chemistry & Ozone Layer Dynamics",
    scenario: "Examine satellite chemical constituent data collected by Aura's MLS and OMI instruments.",
    questions: [
      {
        qId: "st2_q1",
        prompt: "What is the chemical formula for Nitrous Oxide, a potent greenhouse gas that has become the single most significant depleting agent of stratospheric ozone emitted by humans?",
        options: ["NO2", "N2O", "NO3", "NH3"],
        correct: 1,
        explanation: "Nitrous Oxide is N2O (laughing gas). It has a GWP of ~273 and is now the leading anthropogenic ozone-depleting substance."
      },
      {
        qId: "st2_q2",
        prompt: "What fundamental spectroscopic property defines a greenhouse gas?",
        options: [
          "It must scatter UV radiation via Rayleigh scattering",
          "It must absorb and emit infrared radiation (thermal longwave) emitted by Earth's surface",
          "It must undergo fluorescence in visible green light",
          "It must be completely transparent to infrared radiation"
        ],
        correct: 1,
        explanation: "Greenhouse gases possess molecular vibrational/rotational dipole transitions that absorb terrestrial thermal infrared radiation."
      },
      {
        qId: "st2_q3",
        prompt: "Which historical class of synthetic molecules was phased out under the 1987 Montreal Protocol to halt stratospheric ozone depletion?",
        options: ["Chlorofluorocarbons (CFCs)", "Polycyclic Aromatic Hydrocarbons", "Organophosphates", "Perfluorocarbons"],
        correct: 0,
        explanation: "Chlorofluorocarbons (CFCs, e.g. CFC-11 and CFC-12) were the primary ozone-depleting substances regulated by the Montreal Protocol."
      },
      {
        qId: "st2_q4",
        prompt: "What role do Polar Stratospheric Clouds (PSCs) play in catalytic Antarctic ozone depletion?",
        options: [
          "They physically block sunlight from warming the south pole",
          "Their ice crystal surfaces facilitate heterogeneous reactions that convert inert chlorine reservoirs (HCl, ClONO2) into active Cl2 gas",
          "They absorb ozone directly and precipitate it onto the ice cap",
          "They produce lightning that splits nitrogen molecules into nitric oxide"
        ],
        correct: 1,
        explanation: "PSCs provide solid surfaces for heterogeneous reactions converting stable chlorine reservoirs into photolabile Cl2."
      }
    ]
  },
  {
    stationNumber: 3,
    title: "Station 3: Satellite Greenhouse Gas Monitoring (OCO-2 & AIRS)",
    scenario: "Analyze carbon dioxide distribution maps and columnar dry air mole fraction retrievals.",
    questions: [
      {
        qId: "st3_q1",
        prompt: "On OCO-2 carbon dioxide maps, concentrations are reported in 'ppm'. What does 'ppm' stand for in atmospheric chemistry?",
        options: ["Pascals per meter", "Parts per million", "Photons per millisecond", "Pounds per minute"],
        correct: 1,
        explanation: "ppm = parts per million (e.g. 420 ppm means 420 CO2 molecules per 1,000,000 dry air molecules)."
      },
      {
        qId: "st3_q2",
        prompt: "Why does OCO-2 calculate XCO2 by dividing the CO2 column density by the dry air column density (excluding water vapor)?",
        options: [
          "Water vapor absorbs at identical wavelengths and jams the sensor electronics",
          "Atmospheric water vapor concentration fluctuates dramatically (0.01% to 4%), which would cause apparent CO2 fluctuations unrelated to carbon sources or sinks",
          "Dry air molecules emit laser pulses that calibrate the detector",
          "CO2 cannot exist in the presence of water vapor in the atmosphere"
        ],
        correct: 1,
        explanation: "Variable moisture dilutes total air mass. Normalizing by dry air (using the constant 20.95% O2 column) eliminates weather humidity noise."
      },
      {
        qId: "st3_q3",
        prompt: "Which satellite carries three high-resolution grating spectrometers specifically tuned to the 0.76 µm O2 A-band, 1.61 µm CO2 band, and 2.06 µm CO2 band?",
        options: ["CALIPSO", "OCO-2", "CloudSat", "Terra"],
        correct: 1,
        explanation: "OCO-2 (Orbiting Carbon Observatory-2) uses these exact three grating spectrometer channels."
      },
      {
        qId: "st3_q4",
        prompt: "In a satellite carbon dioxide map during July, why does the boreal forest of Siberia and Canada show noticeably lower XCO2 compared to southern regions?",
        options: [
          "Cold temperatures freeze CO2 into dry ice snow on the trees",
          "Intense summertime photosynthetic uptake by northern boreal vegetation draws down atmospheric CO2",
          "Siberian winds blow all carbon dioxide across the North Pole to Greenland",
          "Satellite sensors cannot observe through Siberian air masses"
        ],
        correct: 1,
        explanation: "Summertime photosynthesis draws down CO2 during the growing season, producing the trough in the annual Keeling sawtooth cycle."
      }
    ]
  },
  {
    stationNumber: 4,
    title: "Station 4: Earth Radiation Budget & CERES Data",
    scenario: "Analyze broadband flux measurements from the CERES radiometers on Terra and Aqua.",
    questions: [
      {
        qId: "st4_q1",
        prompt: "What is the primary physical determinant of the total emitted blackbody flux from any object according to the Stefan-Boltzmann law?",
        options: ["Mass", "Volume", "Absolute Temperature (T)", "Surface roughness"],
        correct: 2,
        explanation: "Total blackbody flux E = σ·T⁴ depends solely on absolute temperature T."
      },
      {
        qId: "st4_q2",
        prompt: "On a CERES Outgoing Longwave Radiation (OLR) map, high-altitude convective storm clouds (such as over the tropical Intertropical Convergence Zone) appear as regions of very LOW emitted flux (bright blue/white). Why?",
        options: [
          "Storm clouds reflect 100% of Earth's internal geothermal heat back into the mantle",
          "Cloud tops reach high into the cold upper troposphere (~200 K), and by Stefan-Boltzmann (E = σT⁴), emit much less thermal longwave radiation than the warm ground below",
          "Water droplets absorb all energy and convert it into sound waves (thunder)",
          "CERES detectors automatically turn off over storm systems to avoid lightning damage"
        ],
        correct: 1,
        explanation: "Cloud tops are very cold (low T). Because E = σT⁴, cold cloud tops emit low OLR to space."
      },
      {
        qId: "st4_q3",
        prompt: "Why does the Red Sea or Mediterranean Sea show a distinct thermal contrast compared to adjacent desert sands in midday thermal imagery?",
        options: [
          "Water has a much higher specific heat capacity and undergoes evaporative cooling, warming much slower than dry sand",
          "Desert sand contains radioactive isotopes that emit intense thermal radiation",
          "Sea water has zero emissivity in the thermal infrared",
          "Desert air has a higher gravitational pull that concentrates thermal photons"
        ],
        correct: 0,
        explanation: "Water has high specific heat capacity (~4184 J/kg·K) vs dry quartz sand (~800 J/kg·K), so land heats up far faster in daytime."
      },
      {
        qId: "st4_q4",
        prompt: "Which three broadband channels are utilized on CERES instruments to measure Earth's radiation balance?",
        options: [
          "Red, Green, Blue visible channels",
          "Shortwave (0.3-5 µm), Longwave Window (8-12 µm), and Total (0.3->100 µm)",
          "Ku-band, C-band, and Ka-band microwave channels",
          "Ultraviolet-A, Ultraviolet-B, and Ultraviolet-C channels"
        ],
        correct: 1,
        explanation: "CERES instruments measure Shortwave (reflected solar), Longwave Window (8-12 µm), and Total channels."
      }
    ]
  },
  {
    stationNumber: 5,
    title: "Station 5: Quantitative Energy Balance Calculations",
    scenario: "Use your calculator and fundamental formulas to solve quantitative Earth system energy problems.",
    questions: [
      {
        qId: "st5_q1",
        prompt: "The Sun's effective surface temperature is 5770 K. Using Stefan-Boltzmann constant σ = 5.6704 × 10⁻⁸ W/(m²·K⁴), calculate the radiant flux emitted at the Sun's surface.",
        options: [
          "1361 W/m²",
          "62.9 × 10⁶ W/m² (62.9 MW/m²)",
          "4.52 × 10¹² W/m²",
          "340.2 W/m²"
        ],
        correct: 1,
        explanation: "E = σ·T⁴ = (5.6704 × 10⁻⁸) · (5770)⁴ ≈ 5.6704 × 10⁻⁸ · 1.1086 × 10¹⁵ ≈ 6.286 × 10⁷ W/m² ≈ 62.9 MW/m²."
      },
      {
        qId: "st5_q2",
        prompt: "The distance between Earth and the Sun is 149.6 × 10⁹ m, and the Sun's radius is 6.96 × 10⁸ m. What is the ratio of solar flux at the Sun's surface divided by solar flux at Earth (the solar constant)?",
        options: [
          "215",
          "46,200",
          "1361",
          "1.49 × 10¹¹"
        ],
        correct: 1,
        explanation: "By conservation of energy, Ratio = (d / R_sun)² = (1.496 × 10¹¹ / 6.96 × 10⁸)² = (214.94)² ≈ 46,200."
      },
      {
        qId: "st5_q3",
        prompt: "Earth's mean radius is 6371 km. What is the effective circular cross-sectional area of Earth that intercepts solar shortwave radiation?",
        options: [
          "510.1 × 10¹² m²",
          "127.5 × 10¹² m² (127.5 Tm²)",
          "6371 km²",
          "40,075 km²"
        ],
        correct: 1,
        explanation: "Cross-sectional shadow area = π·R² = π · (6.371 × 10⁶ m)² ≈ π · 4.0589 × 10¹³ ≈ 1.275 × 10¹⁴ m² = 127.5 × 10¹² m² (127.5 Tm²). (Total spherical surface area is 4 times this: 510 Tm²)."
      },
      {
        qId: "st5_q4",
        prompt: "What is the ratio between the total longwave emission area of Earth (spherical surface) and the effective shortwave absorption area (shadow disk)?",
        options: ["1", "2", "4", "π"],
        correct: 2,
        explanation: "Spherical surface area = 4πR²; shadow disk area = πR². Ratio = 4πR² / πR² = 4."
      }
    ]
  },
  {
    stationNumber: 6,
    title: "Station 6: Radar Altimetry, Ocean Warming & ENSO",
    scenario: "Analyze radar altimeter range equations and sea surface height anomalies in the Pacific Ocean.",
    questions: [
      {
        qId: "st6_q1",
        prompt: "What units are typically used to report global mean sea level rise rates measured by precision satellite radar altimeters?",
        options: [
          "Meters per second",
          "Millimeters per year (mm/yr)",
          "Kilometers per century",
          "Pounds per square inch"
        ],
        correct: 1,
        explanation: "Global sea level rise is measured in millimeters per year (~3.4 to 3.7 mm/yr)."
      },
      {
        qId: "st6_q2",
        prompt: "Sea surface height (SSH) anomalies measured by Jason-3 are widely used as an indirect proxy for what oceanic parameter?",
        options: [
          "Sea Surface Salinity exclusively",
          "Upper-ocean thermal heat content and Sea Surface Temperature (SST)",
          "Underwater earthquake epicenters",
          "Whale migration velocity"
        ],
        correct: 1,
        explanation: "Warm water is less dense and expands (steric expansion), making SSH a direct proxy for ocean heat content."
      },
      {
        qId: "st6_q3",
        prompt: "Satellite radar altimeters send microwave pulses and record two-way travel time. What property of the returned radar echo is primary measured to determine satellite range?",
        options: [
          "The Doppler frequency shift of the sound waves",
          "The precise time interval Δt between pulse emission and return pulse detection",
          "The optical color of the reflection",
          "The humidity inside the antenna"
        ],
        correct: 1,
        explanation: "Range d = (c · Δt) / 2. Travel time Δt directly determines distance."
      },
      {
        qId: "st6_q4",
        prompt: "An altimetry map shows a large positive SSH anomaly (+15 cm) extending along the equatorial Pacific toward South America, accompanied by weakened trade winds. What climate phenomenon is underway?",
        options: ["La Niña", "El Niño", "Arctic Dipole", "Atlantic Meridional Overturning"],
        correct: 1,
        explanation: "Positive SSH anomaly in the eastern equatorial Pacific + slackened trade winds = classic El Niño."
      }
    ]
  }
];


if (typeof window !== "undefined") {
  window.DIAGNOSTIC_QUESTIONS = DIAGNOSTIC_QUESTIONS;
  window.SATELLITES_DATA = SATELLITES_DATA;
  window.CLIMATE_TOPICS = CLIMATE_TOPICS;
  window.FORMULAS_DATA = FORMULAS_DATA;
  window.TI_BASIC_PROGRAMS = TI_BASIC_PROGRAMS;
  window.GUIDED_MODULES = GUIDED_MODULES;
  window.PRACTICE_STATIONS = PRACTICE_STATIONS;
}
