# Science Olympiad Division C: Remote Sensing Master Study Guide & Quantitative Formula Vault
*Season 2026–2027 Focus: Climate Change Processes in the Earth System*  
*Prepared with OrbitSense Div C*

---

## Table of Contents
1. [Event Overview & Competition Parameters](#1-event-overview--competition-parameters)
2. [Diagnostic Assessment & State Determination](#2-diagnostic-assessment--state-determination)
3. [The Complete Satellite & Sensor Master Library](#3-the-complete-satellite--sensor-master-library)
   - [The A-Train (Afternoon Constellation)](#the-a-train-afternoon-constellation)
   - [Flagship Earth Observing System (EOS) & Land Satellites](#flagship-earth-observing-system-eos--land-satellites)
   - [Geostationary, Gravimetry, Altimetry & European Sentinels](#geostationary-gravimetry-altimetry--european-sentinels)
4. [Climate Processes & Earth Systems Deep-Dive](#4-climate-processes--earth-systems-deep-dive)
   - [Planetary Radiative Energy Balance & Forcing](#planetary-radiative-energy-balance--forcing)
   - [Greenhouse Gases, Spectral Windows & The Keeling Curve](#greenhouse-gases-spectral-windows--the-keeling-curve)
   - [El Niño–Southern Oscillation (ENSO) & Ocean Altimetry](#el-niñosouthern-oscillation-enso--ocean-altimetry)
   - [The Cryosphere & Positive Ice-Albedo Feedback](#the-cryosphere--positive-ice-albedo-feedback)
   - [Oceans, Thermal Expansion & Sea Level Rise](#oceans-thermal-expansion--sea-level-rise)
   - [Stratospheric Ozone Depletion vs. Tropospheric Air Quality](#stratospheric-ozone-depletion-vs-tropospheric-air-quality)
5. [The Ultimate Math & Calculator Master Guide](#5-the-ultimate-math--calculator-master-guide)
   - [Fundamental Physical Constants](#fundamental-physical-constants)
   - [TI-84 Constant Storage Setup](#ti-84-constant-storage-setup)
   - [10-Second Single-Line Calculator Shortcuts](#10-second-single-line-calculator-shortcuts)
   - [Pre-Written TI-Basic Calculator Programs](#pre-written-ti-basic-calculator-programs)
   - [Master Formula Compendium with Step-by-Step Worked Problems](#master-formula-compendium-with-step-by-step-worked-problems)
6. [Competition Traps & Event Supervisor Secrets](#6-competition-traps--event-supervisor-secrets)

---

## 1. Event Overview & Competition Parameters

In **Remote Sensing (Division C)**, teams of up to two participants use remote sensing imagery, data, and computational process skills to complete tasks related to **climate change processes in the Earth system**.

- **Time:** ~50 minutes
- **Allowed Materials:**
  - Writing utensils
  - Up to two calculators (Class II or Class III as specified in the rules manual, including standard graphing calculators like TI-84 Plus CE, TI-Nspire CX)
  - A collection of notes and resources: usually a 2-inch or 3-inch 3-ring binder or specified double-sided note sheets (varies by season; check official clarifications).
  - Metric rulers, protractors.
- **Competition Format:**
  - Station rotation or full written test packet with dedicated image sheet.
  - Distribution typically:
    - 25–35% Remote sensing concepts, EMR physics, and instrumentation.
    - 40–50% Climate change processes, data interpretation (SST, SSH, ice extent, trace gases, radiation budget).
    - 20–30% Quantitative calculations (energy balance modeling, Wien's displacement, orbital mechanics, spectral indices).

---

## 2. Diagnostic Assessment & State Determination

To determine your current level of preparation, test yourself on the four core pillars:
1. **Satellites & Sensors:** Do you know the exact lead and tail satellites of the A-Train, active vs. passive sensors, OCO-2 reference bands, and Landsat vs. MODIS resolution tradeoffs?
2. **Climate Processes:** Can you explain the physical causes of the Keeling Curve sawtooth, why OLR is low over storm clouds, what triggers an El Niño, and why sea ice melting does NOT raise sea level directly?
3. **Physics & Spectroscopy:** Can you distinguish Rayleigh vs. Mie scattering, calculate Beer-Lambert beam attenuation, identify the 8–12 µm atmospheric window, and explain why Antarctic ozone loss peaks in spring?
4. **Quantitative Calculations:** Can you calculate Earth's bare-planet equilibrium temperature ($T_e \approx 255\ \text{K}$) and 1-layer greenhouse surface temperature ($T_s \approx 303\ \text{K}$) in under 30 seconds on your calculator?

### Scoring Benchmark:
- **85% – 100% (National Tier Champion):** Mastered formulas and satellite payloads; ready for complex multi-layer energy balance and radiative transfer problems.
- **70% – 84% (State Contender):** Strong conceptual base; needs speed and accuracy on TI-84 programs and edge-case satellite sensors.
- **50% – 69% (Regional Competitor):** Solid foundation; prioritize the 1-layer greenhouse formula derivation and the A-Train formation timeline.
- **< 50% (Novice Explorer):** Focus on the Guided Learning modules in the OrbitSense web app to build foundational concepts step by step.

---

## 3. The Complete Satellite & Sensor Master Library

### The A-Train (Afternoon Constellation)
The A-Train is a constellation of Earth observation satellites flying in tight formation in a **Sun-synchronous orbit at an altitude of ~705 km, 98.2° inclination**, crossing the equator heading north at approximately **1:30 PM local solar time**.

| Satellite | Launch | Status | Active / Passive | Key Instruments & Payloads | Primary Mission & Climate Target |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **Aqua** | 2002 | Active (drifting) | **Passive** | **MODIS** (36 bands, 250m-1km)<br>**AIRS** (2378 IR channels, 13.5 km)<br>**CERES** (Broadband SW/LW radiometer)<br>**AMSR-E** (Passive microwave)<br>**AMSU-A** (Microwave temperature sounder) | Flagship lead. Global water cycle, precipitation, evaporation, sea surface temperature (SST), cloud properties, and TOA radiative energy fluxes. |
| **Aura** | 2004 | Active (drifting) | **Passive** | **OMI** (UV/Vis trace gas spectrometer)<br>**MLS** (Microwave Limb Sounder)<br>**TES** (Tropospheric Emission Spectrometer)<br>**HIRDLS** (Limb sounder) | Rear guard (~1:45 PM). Chemistry of the atmosphere: stratospheric ozone recovery, chlorine monoxide (ClO), urban nitrogen dioxide (NO2), and sulfur dioxide (SO2). |
| **CloudSat** | 2006 | Retired (Dec 2023) | **ACTIVE** | **CPR** (Cloud Profiling Radar, 94 GHz / 3.2 mm W-band millimeter-wave radar) | Profiles vertical liquid water and ice content of thick convective storm clouds; penetrates where optical/lidar light is extinguished. |
| **CALIPSO** | 2006 | Retired (Dec 2023) | **ACTIVE** | **CALIOP** (Cloud-Aerosol Lidar with Orthogonal Polarization, 532 nm & 1064 nm Nd:YAG laser)<br>**WFC** (Wide Field Camera)<br>**IIR** (Imaging IR Radiometer) | Vertical profiling of thin cirrus clouds, smoke plumes, volcanic ash, dust, and Polar Stratospheric Clouds (PSCs). Depolarization ratio separates water droplets from ice crystals. |
| **OCO-2** | 2014 | Active | **Passive** | **Three High-Resolution Grating Spectrometers** (0.76 µm O2 A-band, 1.61 µm weak CO2, 2.06 µm strong CO2) | Measures column-averaged dry air mole fraction $XCO_2$ with sub-ppm precision (<0.25%) to identify global carbon sources and sinks. Also measures Solar-Induced chlorophyll Fluorescence (SIF). |
| **GCOM-W1 (Shizuku)** | 2012 | Active | **Passive** | **AMSR2** (Advanced Microwave Scanning Radiometer 2, 6.9 to 89 GHz dual-polarization) | All-weather global water cycle: sea surface temperature, sea ice concentration, snow depth, soil moisture through non-precipitating clouds. |
| **PARASOL** | 2004 | Retired (2013) | **Passive** | **POLDER** (Polarization and Directionality of the Earth's Reflectances) | Multi-angle polarized reflectance to determine aerosol optical thickness and microphysical properties of cloud particles. |

---

### Flagship Earth Observing System (EOS) & Land Satellites

| Satellite | Agency | Orbit | Sensors & Resolution | Science Role & SciOly Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Terra (EOS AM-1)** | NASA / GSFC | 705 km Sun-sync<br>**10:30 AM descending** | **MODIS** (36 bands, 250m-1km)<br>**ASTER** (15-90m VNIR/SWIR/TIR)<br>**MISR** (9 camera angles, 275m-1.1km)<br>**CERES** (Broadband flux)<br>**MOPITT** (Carbon monoxide gas correlation) | Morning EOS flagship. Comprehensive observations of land surface, carbon monoxide pollution plumes (MOPITT), multi-angle aerosol scattering (MISR), stereo DEMs (ASTER). |
| **Landsat 8 & 9** | NASA / USGS | 705 km Sun-sync<br>16-day repeat (8 days combined) | **OLI / OLI-2** (30m multispectral, 15m panchromatic, 9 bands)<br>**TIRS / TIRS-2** (100m thermal IR, Bands 10 & 11) | Gold standard for high-resolution land monitoring. 50+ year continuous record. Deforestation, agriculture, urban heat islands, False Color Infrared (CIR Bands 5-4-3) where healthy vegetation appears bright red. |
| **GOES-R Series (16/17/18/19)** | NOAA / NASA | **Geostationary (GEO)<br>35,786 km altitude<br>0° inclination** | **ABI** (Advanced Baseline Imager, 16 bands: 0.5 km visible to 2 km IR)<br>**GLM** (Geostationary Lightning Mapper, 777.4 nm) | High temporal resolution (full disk 10 min, CONUS 5 min, mesoscale storm 30-60 sec). Tracking severe convective weather, hurricane eyewalls, and rapid wildfire detection via the 3.9 µm MWIR channel. |

---

### Geostationary, Gravimetry, Altimetry & European Sentinels

| Satellite | Agency | Orbit | Sensor Type | Key Sensors & Measurement Mechanism |
| :--- | :--- | :--- | :--- | :--- |
| **GRACE & GRACE-FO** | NASA / GFZ | Polar LEO (~490 km)<br>Twin satellites ~220 km apart | **ACTIVE** Microwave & Laser Gravimetry | **K-band Ranging (KBR) & Laser Ranging Interferometer (LRI):** Measures micrometric distance shifts between twin satellites caused by gravity anomalies. Tracks groundwater depletion in aquifers and ice sheet mass loss in Greenland & Antarctica. |
| **Jason-3 & Sentinel-6 Michael Freilich** | NASA / NOAA / CNES / EUMETSAT / ESA | Non-sun-sync 1336 km<br>66° inclination (samples tides) | **ACTIVE** Dual-Frequency Radar Altimeter | **Poseidon-4 Radar Altimeter:** Transmits Ku-band (13.6 GHz) and C-band (5.3 GHz) radar pulses downward to measure two-way travel time. Determines Sea Surface Height (SSH) to within 1-2 cm: quantifies sea level rise (~3.4 mm/yr) and ENSO Kelvin waves. |
| **Sentinel-1** | ESA (Copernicus) | 693 km Sun-sync | **ACTIVE** Radar (C-SAR) | **C-band Synthetic Aperture Radar (5.4 GHz):** All-weather day/night radar imaging. InSAR radar interferometry measures millimeters of ground subsidence, glacier velocity, and earthquake displacement. |
| **Sentinel-2** | ESA (Copernicus) | 786 km Sun-sync<br>5-day revisit (2A + 2B) | **Passive** Optical | **MSI (Multispectral Instrument):** 13 spectral bands (10m, 20m, 60m). Features three red-edge bands for precision agricultural chlorophyll and canopy stress analysis. |
| **Sentinel-5P** | ESA (Copernicus) | 824 km Sun-sync | **Passive** Hyperspectral | **TROPOMI:** Daily global mapping of tropospheric pollutants: nitrogen dioxide ($NO_2$), sulfur dioxide ($SO_2$), and methane ($CH_4$) point-source leaks. |
| **ICESat-2** | NASA / GSFC | 496 km Polar (92° inc) | **ACTIVE** Laser Altimeter | **ATLAS:** 532 nm green photon-counting laser (6 beams in 3 pairs). Measures Greenland/Antarctic ice sheet thinning, sea ice freeboard, and forest canopy height. |
| **SMAP** | NASA / JPL | 685 km Sun-sync (6 AM/PM) | **Passive** Microwave Radiometer | **L-band Radiometer (1.41 GHz / 21 cm):** Sensitive to the high dielectric constant of liquid water (80) vs dry soil (3-5). Maps top 5 cm soil moisture and freeze/thaw transitions. |
| **PACE** | NASA / GSFC | 676.5 km Sun-sync (1 PM) | **Passive** Hyperspectral Ocean Color | **OCI (Ocean Color Instrument):** Continuous 5 nm contiguous spectral bands (340 to 890 nm). Identifies specific phytoplankton functional groups and marine carbon export. |

---

## 4. Climate Processes & Earth Systems Deep-Dive

### Planetary Radiative Energy Balance & Forcing
1. **Solar Constant ($S_0$):** Mean solar irradiance at Top-of-Atmosphere at 1 AU is **$S_0 \approx 1361\ \text{W/m}^2$**.
2. **Geometric Factor of 4:** Solar flux intercepts Earth as a circular cross-sectional shadow disk of area $\pi R^2$. Earth rotates, distributing this energy over its total spherical surface area $4\pi R^2$. The ratio is:
   $$\frac{\pi R^2}{4\pi R^2} = \frac{1}{4}$$
   Average incident solar flux per unit area:
   $$F_{\text{in}} = \frac{S_0}{4} = \frac{1361}{4} \approx 340.25\ \text{W/m}^2$$
3. **Planetary Albedo ($\alpha$):** Earth reflects $\alpha \approx 0.29$ to $0.30$ back to space (clouds reflect 40-80%, snow/ice 60-90%, open ocean ~6%). Net absorbed solar flux:
   $$F_{\text{absorbed}} = (1 - \alpha) \frac{S_0}{4} \approx (1 - 0.30) \times 340.25 \approx 238.2\ \text{W/m}^2$$
4. **Effective Blackbody Temperature ($T_e$):** In thermal equilibrium, Earth radiates this flux back to space as longwave radiation:
   $$\sigma T_e^4 = (1 - \alpha)\frac{S_0}{4} \implies T_e = \left[\frac{(1 - \alpha)S_0}{4\sigma}\right]^{1/4} \approx 254.9\ \text{K} \approx -18^\circ\text{C}$$
5. **The Greenhouse Difference:** Earth's actual observed global mean surface temperature is **$T_s \approx 288\ \text{K} (+15^\circ\text{C})$**. The $+33\ \text{K}$ difference is caused by atmospheric greenhouse absorption and downwelling longwave re-radiation!

---

### Greenhouse Gases, Spectral Windows & The Keeling Curve
- **Molecular Physics:** Symmetrical homonuclear diatomic gases ($N_2, O_2$) have no net dipole moment when vibrating; they cannot absorb infrared radiation. Polyatomic molecules have vibrational/rotational modes that generate oscillating electric dipoles matching terrestrial infrared photons:
  - **$CO_2$:** $15\ \mu\text{m}$ (bending mode $\nu_2$, near Earth's peak emission) and $4.26\ \mu\text{m}$ (asymmetric stretch $\nu_3$).
  - **$H_2O$:** Strong rotational absorption beyond $15\ \mu\text{m}$ and vibrational bands at $6.3\ \mu\text{m}$ and $2.7\ \mu\text{m}$.
  - **$CH_4$:** $7.66\ \mu\text{m}$ absorption band. GWP = 28 (100-year) or 84 (20-year).
  - **$N_2O$:** $7.8\ \mu\text{m}$ and $4.5\ \mu\text{m}$. GWP = 273. Primary human ozone-depleting emission today.
  - **$O_3$:** $9.6\ \mu\text{m}$ absorption band right inside the atmospheric window!
- **The Atmospheric Window ($8 - 12\ \mu\text{m}$):** A spectral region where $H_2O$ and $CO_2$ absorption is minimal. Earth surface thermal emission escapes directly to space here, and thermal IR satellite channels (MODIS Bands 31/32, GOES thermal) view surface temperatures through this window.
- **The Keeling Curve:**
  - Continuous measurement of atmospheric $CO_2$ at Mauna Loa Observatory, Hawaii (3,397 m elevation), initiated by Charles David Keeling in 1958.
  - **Secular Trend:** Unbroken increase from 315 ppm (1958) to $>425$ ppm today due to fossil fuel burning (~85%) and deforestation (~15%).
  - **Annual Sawtooth Cycle:** 
    - **Peak in May:** End of Northern Hemisphere winter/early spring, when soil microbial decomposition and respiration released $CO_2$ with minimal vegetative uptake.
    - **Trough in October:** End of Northern Hemisphere summer, when deciduous forests and boreal taiga absorbed tens of gigatons of $CO_2$ via photosynthesis.
    - The Northern Hemisphere dominates the global seasonal cycle because it holds 68% of Earth's land area!
- **$XCO_2$ Definition (OCO-2):** Column-averaged dry air mole fraction:
  $$XCO_2 = \frac{\text{Total column } CO_2}{\text{Total column dry air}}$$
  Normalizing to the dry air column (measured via the $0.76\ \mu\text{m}$ $O_2$ A-band) eliminates apparent $CO_2$ fluctuations caused by variable atmospheric humidity (0% to 4%) and surface topography.

---

### El Niño–Southern Oscillation (ENSO) & Ocean Altimetry
- **Normal / Neutral State:**
  - **Walker Circulation:** Strong easterly trade winds push warm surface water westward across the equatorial Pacific.
  - **Western Pacific Warm Pool:** Warm water piles up near Indonesia ($SST > 28^\circ\text{C}$), sea surface is 40–50 cm higher than in the east, thermocline is deep (~150 m).
  - **Eastern Pacific (Peru/Ecuador):** Wind-driven offshore Ekman transport causes intense coastal upwelling of cold, nutrient-rich deep water (shallow thermocline ~30 m, rich anchoveta fishery).
- **El Niño (Warm Phase):**
  - Trade winds weaken, collapse, or reverse to westerlies.
  - Warm western water surges eastward as internal equatorial Kelvin waves.
  - Thermocline flattens across the Pacific; upwelling off South America shuts down.
  - Eastern Pacific SST rises by $+1^\circ\text{C}$ to $+4^\circ\text{C}$.
  - Convection and heavy rain shift to Peru/Ecuador; drought hits Australia and Indonesia.
  - **Remote Sensing Signatures:**
    - **Radar Altimetry (Jason-3, Sentinel-6):** Detects prominent **positive Sea Surface Height (SSH) anomalies (+10 to +25 cm)** in the eastern equatorial Pacific because warm water is less dense and expands thermally (steric expansion).
    - **Radiometers (MODIS, VIIRS):** High positive SST anomalies in the Niño 3.4 region.
    - **Atmospheric Index:** Southern Oscillation Index (SOI = Tahiti pressure minus Darwin pressure) is **strongly negative**.
- **La Niña (Cool Phase):**
  - Trade winds intensify excessively.
  - Upwelling surges off Peru; cold tongue expands across the central/eastern Pacific.
  - Eastern Pacific shows **negative SSH anomalies (-10 to -20 cm)** and cold SST anomalies. SOI is **positive**.

---

### The Cryosphere & Positive Ice-Albedo Feedback
- **Albedo Values ($\alpha$):**
  - Fresh dry snow: $0.80 - 0.90$
  - Multiyear sea ice: $0.60 - 0.75$
  - Melting sea ice / melt ponds: $0.40 - 0.50$
  - Open seawater: **$0.06$ (absorbs 94% of incident sunlight!)**
- **The Positive Feedback Loop:**
  $$\text{Warming} \implies \text{Sea ice melts} \implies \text{Dark ocean exposed } (\alpha \approx 0.06) \implies \text{Solar absorption increases} \implies \text{Ocean warms} \implies \text{More ice melts!}$$
  This is the primary driver of **Arctic Amplification**, causing the Arctic to warm at nearly $4\times$ the global rate.
- **Sea Ice vs. Continental Ice Sheets:**
  - **Floating Sea Ice:** Melting floating sea ice **does not raise sea level** (Archimedes' principle: floating ice already displaces its liquid equivalent mass).
  - **Land-Based Ice Sheets (Greenland & Antarctica):** When terrestrial ice melts and drains into the ocean, it adds mass, causing **eustatic sea level rise**. GRACE reveals Greenland is losing ~270 Gt/yr and Antarctica ~150 Gt/yr ($360\ \text{Gt} \approx 1\ \text{mm}$ of global sea level).

---

### Oceans, Thermal Expansion & Sea Level Rise
- **Rate of Rise:** Global mean sea level is rising at **$\sim 3.4 - 3.7\ \text{mm/year}$**, accelerating over time.
- **Components:**
  1. **Steric Sea Level Rise (Thermal Expansion, ~35-40%):** Water density decreases as temperature rises: $\Delta h = \beta \cdot H \cdot \Delta T$ (where $\beta \approx 2.5 \times 10^{-4}\ \text{K}^{-1}$).
  2. **Eustatic Mass Addition (~60-65%):** Mountain glaciers (~20%), Greenland (~25%), Antarctica (~15%).
- **Radar Altimeter Measurement:**
  $$d = \frac{c \cdot \Delta t}{2}$$
  $$SSH = H_{\text{sat}} - d - \text{Corrections} - \text{Geoid}$$

---

### Stratospheric Ozone Depletion vs. Tropospheric Air Quality
- **Stratospheric Ozone ("Good Ozone"):**
  - Shields surface DNA from lethal solar UV-B ($280 - 315\ \text{nm}$) and UV-C ($<280\ \text{nm}$).
  - **Chapman Cycle:** $O_2 + h\nu \to 2O$; $O + O_2 \to O_3$; $O_3 + h\nu \to O_2 + O$; $O_3 + O \to 2O_2$.
  - **CFC Catalytic Cycle:** UV photolysis releases chlorine atoms:
    $$Cl + O_3 \to ClO + O_2$$
    $$ClO + O \to Cl + O_2$$
    $$\text{Net: } O_3 + O \to 2O_2$$
    One $Cl$ atom can catalytically destroy $\sim 100,000$ ozone molecules!
  - **The Antarctic Hole Mechanism:**
    - Winter polar vortex isolates extreme polar cold ($<-78^\circ\text{C}$).
    - **Polar Stratospheric Clouds (PSCs / Type I and II)** form from nitric acid trihydrate and water ice.
    - Heterogeneous reactions on PSC ice crystals convert inert chlorine reservoirs ($HCl, ClONO_2$) into active molecular chlorine gas ($Cl_2$).
    - When sunlight returns in **September (Antarctic spring)**, UV photolyzes $Cl_2 \to 2Cl\cdot$, triggering catastrophic rapid ozone destruction.
  - **1 Dobson Unit (DU):** $0.01\ \text{mm}$ ($10\ \mu\text{m}$) of pure ozone at STP. Baseline is ~300 DU; an ozone hole is defined as $<220\ \text{DU}$.
- **Tropospheric Pollution ("Bad Ozone"):**
  - Photochemical smog formed from $NO_x + \text{VOCs} + \text{sunlight} \to O_3$. Toxic respiratory irritant and greenhouse gas.
  - Monitored globally by Aura OMI and Sentinel-5P TROPOMI ($NO_2, SO_2, CH_4$).
- **Aerosols:**
  - **Direct Effect:** Scattering aerosols (sulfates, sea salt) reflect sunlight to space, causing net cooling. Black carbon (soot) absorbs radiation, causing warming.
  - **Twomey Effect (1st Indirect):** More aerosol particles $\implies$ more cloud condensation nuclei (CCN) $\implies$ smaller and more numerous cloud droplets $\implies$ higher cloud albedo (strong cooling).
  - **Albrecht Effect (2nd Indirect):** Smaller droplets inhibit drizzle $\implies$ longer cloud lifetime.

---

## 5. The Ultimate Math & Calculator Master Guide

### Fundamental Physical Constants
| Constant | Symbol | Value | SI Units | TI-84 Variable |
| :--- | :---: | :--- | :--- | :---: |
| Stefan-Boltzmann Constant | $\sigma$ | $5.670374 \times 10^{-8}$ | $\text{W}/(\text{m}^2\cdot\text{K}^4)$ | `5.6704E-8 -> S` |
| Solar Constant at Earth (1 AU) | $S_0$ | $1361$ | $\text{W}/\text{m}^2$ | `1361 -> F` |
| Wien's Displacement Constant | $b$ | $2898$ | $\mu\text{m}\cdot\text{K}$ | `2898 -> B` |
| Speed of Light in Vacuum | $c$ | $2.997925 \times 10^8$ | $\text{m}/\text{s}$ | `2.9979E8 -> C` |
| Planck's Constant | $h$ | $6.62607 \times 10^{-34}$ | $\text{J}\cdot\text{s}$ | `6.626E-34 -> H` |
| Mean Earth Radius | $R_E$ | $6,371,000$ | $\text{m}$ ($6371\ \text{km}$) | `6.371E6 -> R` |
| Geocentric Gravitational Constant | $GM_E$ | $3.986004 \times 10^{14}$ | $\text{m}^3/\text{s}^2$ | `3.986E14 -> M` |
| Sun Radius | $R_\odot$ | $6.96 \times 10^8$ | $\text{m}$ | `6.96E8 -> U` |
| Astronomical Unit (Earth-Sun distance) | $1\ \text{AU}$ | $1.496 \times 10^{11}$ | $\text{m}$ | `1.496E11 -> D` |

---

### TI-84 Constant Storage Setup
Before entering the competition room, execute these commands on your TI-84 home screen:
```
5.6704E-8 -> S
1361 -> F
2898 -> B
2.9979E8 -> C
6.371E6 -> R
3.986E14 -> M
```
*(Press `[STO>]` then `[ALPHA]` then the letter).*

---

### 10-Second Single-Line Calculator Shortcuts

| Calculation | TI-84 Keystroke Expression | Notes |
| :--- | :--- | :--- |
| **Bare-Planet $T_e$** | `((1 - A)*F / (4*S)) ^ 0.25` | Assign albedo to `A` (e.g. `0.30 -> A`). |
| **1-Layer Atmosphere $T_s$ (ideal $\epsilon=1$)** | `2^0.25 * Te`  *(or `1.1892 * Te`)* | Gives surface temperature in Kelvin. |
| **1-Layer Atmosphere $T_s$ with $\epsilon_a$** | `((1 - A)*F / (4*S*(1 - E/2))) ^ 0.25` | Assign emissivity to `E` (e.g. `0.77 -> E`). |
| **N-Layer Atmosphere $T_s$** | `(N + 1)^0.25 * Te` | $N$ is number of opaque atmospheric layers. |
| **Wien's Peak $\lambda_{\max}$ in $\mu\text{m}$** | `2898 / T` | Output is directly in micrometers ($\mu\text{m}$). |
| **Temperature from Peak $\lambda_{\max}$** | `2898 / L` | Input wavelength in $\mu\text{m}$; outputs Kelvin. |
| **Orbit Period $T$ in minutes** | `2*π*√((R + H*1000)^3 / M) / 60` | Input altitude `H` in km (e.g. `705 -> H`). |
| **Orbits per 24-hr Day** | `1440 / Ans` | Divides 1440 min by the previous period result. |
| **NDVI** | `(N - R) / (N + R)` | Store NIR into `N` and Red into `R`. |
| **Radar Range $d$ in meters** | `C * T / 2` | `T` is roundtrip pulse time in seconds. |
| **Beam Attenuation Transmitted $I$** | `I0 * e^(-T)` | `I0` incident flux, `T` is optical depth $\tau$. |
| **$CO_2$ Radiative Forcing $\Delta F$** | `5.35 * ln(C / 280)` | `C` is projected $CO_2$ concentration in ppm. |

---

### Pre-Written TI-Basic Calculator Programs
Type these into your TI-84 `[PRGM]` $\to$ `[NEW]` menu:

#### Program 1: `PRGM:RADBAL`
```ti-basic
Prompt S0,ALB,LAY
5.6704E-8->S
((1-ALB)*S0/(4*S))^0.25->TE
Disp "BARE TE (K):",TE
Disp "BARE TE (C):",TE-273.15
If LAY>0:Then
((LAY+1)^0.25)*TE->TS
Disp "SURF TS (K):",TS
Disp "SURF TS (C):",TS-273.15
End
```

#### Program 2: `PRGM:WIENSB`
```ti-basic
Menu("SELECT","TEMP->FLX/LAM",1,"LAM->TEMP",2)
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
Stop
```

#### Program 3: `PRGM:ORBIT`
```ti-basic
Prompt H
6371000->R
3.986E14->M
R+H*1000->A
2*π*√(A^3/M)->T
√(M/A)->V
Disp "PER (MIN):",T/60
Disp "VEL (KM/S):",V/1000
Disp "ORB/DAY:",86400/T
```

#### Program 4: `PRGM:INDICES`
```ti-basic
Prompt NIR,RED,GRN,SWIR
(NIR-RED)/(NIR+RED)->NDVI
(GRN-NIR)/(GRN+NIR)->NDWI
(GRN-SWIR)/(GRN+SWIR)->NDSI
(NIR-SWIR)/(NIR+SWIR)->NBR
Disp "NDVI:",NDVI
Disp "NDWI:",NDWI
Disp "NDSI:",NDSI
Disp "NBR:",NBR
```

---

### Master Formula Compendium with Step-by-Step Worked Problems

#### 1. Stefan-Boltzmann Law
$$E = \sigma \cdot T^4$$
- **Example:** A wildfire burn front radiates at $T = 650^\circ\text{C}$. Calculate emitted radiant flux $E$.
  - Step 1: Convert to Kelvin: $T = 650 + 273.15 = 923.15\ \text{K}$.
  - Step 2: Calculate: $E = (5.6704 \times 10^{-8}) \times (923.15)^4$.
  - Step 3: $(923.15)^4 \approx 7.262 \times 10^{11}\ \text{K}^4$.
  - Step 4: $E = 5.6704 \times 10^{-8} \times 7.262 \times 10^{11} \approx 41,180\ \text{W/m}^2$ ($41.2\ \text{kW/m}^2$).

#### 2. Wien's Displacement Law
$$\lambda_{\max} = \frac{b}{T} \quad (b = 2898\ \mu\text{m}\cdot\text{K})$$
- **Example:** At what wavelength does Earth's average surface ($T = 288\ \text{K}$) radiate maximum energy?
  - $\lambda_{\max} = \frac{2898}{288} \approx 10.06\ \mu\text{m}$.
  - Classification: Thermal Infrared (in the $8-12\ \mu\text{m}$ atmospheric window).

#### 3. 0-D Bare Planet Equilibrium Temperature
$$T_e = \left[\frac{(1 - \alpha)S_0}{4\sigma}\right]^{1/4}$$
- **Example:** An exoplanet receives $S_0 = 900\ \text{W/m}^2$ and has albedo $\alpha = 0.20$. Find $T_e$.
  - Absorbed flux: $(1 - 0.20) \times (900 / 4) = 0.80 \times 225 = 180\ \text{W/m}^2$.
  - $T_e = [ 180 / (5.6704 \times 10^{-8}) ]^{0.25} = [ 3.1744 \times 10^9 ]^{0.25} \approx 237.2\ \text{K} (-35.9^\circ\text{C})$.

#### 4. 1-Layer Atmosphere Model Derivation & Calculation
- Top of Atmosphere: $F_{\text{in}} = \sigma T_a^4 \implies T_a = T_e$.
- Atmospheric Layer: Radiates upward and downward: $2\sigma T_a^4 = \sigma T_s^4 \implies T_s^4 = 2 T_a^4 = 2 T_e^4$.
$$T_s = 2^{1/4} T_e \approx 1.1892 \times T_e$$
- With absorptivity $\epsilon_a$:
$$T_s = \left[\frac{1}{1 - \epsilon_a/2}\right]^{1/4} T_e$$
- **Example:** For Earth with $T_e = 254.9\ \text{K}$ and $\epsilon_a = 0.77$:
  - $1 - 0.77 / 2 = 1 - 0.385 = 0.615$.
  - $T_s = (1 / 0.615)^{0.25} \times 254.9 = (1.626)^{0.25} \times 254.9 \approx 1.1293 \times 254.9 \approx 287.9\ \text{K} \approx 288\ \text{K} (15^\circ\text{C})$.

#### 5. Satellite Orbital Period (Kepler's 3rd Law)
$$T = 2\pi \sqrt{\frac{(R_E + h)^3}{GM_E}}$$
- **Example:** Landsat 8 orbits at $h = 705\ \text{km}$. Find period $T$ and daily passes.
  - $a = (6371 + 705) \times 1000 = 7.076 \times 10^6\ \text{m}$.
  - $a^3 = 3.543 \times 10^{20}\ \text{m}^3$.
  - $a^3 / GM = 3.543 \times 10^{20} / 3.986 \times 10^{14} \approx 888,860\ \text{s}^2$.
  - $\sqrt{888,860} \approx 942.8\ \text{s}$.
  - $T = 2\pi \times 942.8 \approx 5923.8\ \text{s} = 98.73\ \text{minutes}$.
  - Orbits per day: $1440 / 98.73 \approx 14.58\ \text{orbits/day}$.

#### 6. Spectral Indices (NDVI, NDWI, NDSI, NBR)
$$NDVI = \frac{\rho_{NIR} - \rho_{RED}}{\rho_{NIR} + \rho_{RED}}$$
$$NDSI = \frac{\rho_{GREEN} - \rho_{SWIR}}{\rho_{GREEN} + \rho_{SWIR}}$$
- **Example:** Given $\text{Red} = 0.06$, $\text{NIR} = 0.62$, $\text{Green} = 0.09$, $\text{SWIR} = 0.11$:
  - $NDVI = (0.62 - 0.06) / (0.62 + 0.06) = 0.56 / 0.68 \approx +0.82$ (Dense healthy forest).
  - $NDSI = (0.09 - 0.11) / (0.09 + 0.11) = -0.02 / 0.20 = -0.10$ (Not snow).

#### 7. Radar Altimeter & Sea Surface Height
$$d = \frac{c \cdot \Delta t}{2}, \quad SSH = H_{\text{sat}} - d - \text{Geoid}$$
- **Example:** Satellite altitude $H = 1,336,000.00\ \text{m}$, two-way transit $\Delta t = 0.00891220\ \text{s}$, geoid $= 42.15\ \text{m}$.
  - $d = (2.997925 \times 10^8 \times 0.00891220) / 2 = 1,335,957.50\ \text{m}$.
  - $SSH = 1,336,000.00 - 1,335,957.50 - 42.15 = +0.35\ \text{m} (+35\ \text{cm})$.

#### 8. Beer-Lambert Atmospheric Attenuation
$$I = I_0 \cdot e^{-\tau} = I_0 \cdot e^{-\alpha x}$$
- **Example:** Sunlight $I_0 = 1000\ \text{W/m}^2$ penetrates haze with optical depth $\tau = 0.40$.
  - $I = 1000 \times e^{-0.40} = 1000 \times 0.6703 \approx 670.3\ \text{W/m}^2$ ($32.97\%$ attenuated).

#### 9. Ground Sampling Distance (IFOV)
$$GSD \approx h \cdot IFOV$$
- **Example:** Altitude $h = 705\ \text{km}$, $IFOV = 0.0425\ \text{mrad} = 4.25 \times 10^{-5}\ \text{rad}$.
  - $GSD = 705,000\ \text{m} \times (4.25 \times 10^{-5}\ \text{rad}) = 29.96\ \text{m} \approx 30\ \text{m}$ (Landsat OLI pixel!).

#### 10. Steric Thermal Sea Level Rise
$$\Delta h = \beta \cdot H \cdot \Delta T$$
- **Example:** A $100\ \text{m}$ upper ocean column warms by $\Delta T = 1.6^\circ\text{C}$ ($\beta = 2.5 \times 10^{-4}\ \text{K}^{-1}$).
  - $\Delta h = (2.5 \times 10^{-4}) \times 100 \times 1.6 = 0.040\ \text{m} = +4.0\ \text{cm}$.

---

## 6. Competition Traps & Event Supervisor Secrets

1. **Kelvin vs. Celsius in Stefan-Boltzmann:** NEVER plug Celsius into $\sigma T^4$! $15^\circ\text{C}$ is $288.15\ \text{K}$. $(15)^4 = 50,625$, whereas $(288)^4 = 6.88 \times 10^9$—a factor of 135,000 error!
2. **The Factor of 4 in Planetary Radiation:** Incoming solar flux is divided by 4 because the Earth's cross section is a disk ($\pi R^2$), while the emitting area is the entire rotating sphere ($4\pi R^2$).
3. **Floating Sea Ice Does Not Raise Sea Level:** When Arctic sea ice melts, it does NOT raise sea level due to Archimedes' principle. Only melting land-based glaciers and ice sheets (Greenland, Antarctica) raise sea level.
4. **$XCO_2$ Uses DRY Air:** OCO-2 normalizes $CO_2$ to dry air column using the $0.76\ \mu\text{m}$ $O_2$ A-band because moisture varies between 0% and 4%, which would otherwise distort readings.
5. **Active vs. Passive Microwave:** AMSR-E and AMSR2 are PASSIVE radiometers (they measure natural microwave emissions). CloudSat CPR and Sentinel-1 SAR are ACTIVE radars (they emit pulses).
6. **False-Color CIR Composites:** In a classic Near-Infrared False Color composite (Landsat Bands 5-4-3 as RGB), healthy vegetation appears **BRIGHT RED** because chlorophyll reflects NIR intensely.
7. **The Two-Way Radar Factor of 2:** Always divide radar return time $\Delta t$ by 2 to get one-way distance $d = c\Delta t / 2$.
8. **Keeling Sawtooth Timing:** Northern Hemisphere photosynthesis causes the annual $CO_2$ minimum in **OCTOBER**; winter respiration causes the annual peak in **MAY**.
9. **Antarctic Ozone Hole Timing:** The ozone hole forms during **SPRING (September/October)**, NOT mid-winter. Cold winter forms the PSCs; spring sunlight is required to photolyze $Cl_2 \to 2Cl\cdot$ radicals.
10. **Geostationary Orbits:** GOES satellites orbit at **35,786 km** over the equator with period $T = 23\text{h } 56\text{m}$. They have extreme temporal resolution (seconds/minutes) but coarse spatial resolution ($0.5 - 2\ \text{km}$).


---

## 7. Visual Image Sheet Atlas & Sensor Recognition Guide (Science Olympiad Image ID Masterclass)

On Science Olympiad Division C exams, Station Questions heavily feature unlabelled figures, graphs, false-color satellite images, and instrument diagrams. This reference table and breakdown enables instant identification and interpretation.

### 7.1 Visual Identification Cheat Matrix

| Visual Signature on Exam | Physical Units / Axis | Underlying Physics | Instrument & Satellite | Scientific Application |
| :--- | :--- | :--- | :--- | :--- |
| **2D Vertical Curtain** (0–30 km altitude vs. Latitude) with needle-thin aerosol plumes & high clouds | Total Attenuated Backscatter ($10^{-3}\ 	ext{km}^{-1}\cdot	ext{sr}^{-1}$) | Mie and Rayleigh elastic backscatter of pulsed laser ($532\ 	ext{nm}$ & $1064\ 	ext{nm}$) | **CALIOP** on **CALIPSO** | Cirrus cloud altitude, Saharan dust transport, wildfire smoke, Polar Stratospheric Clouds (PSCs) |
| **Radar Vertical Reflectivity Profile** (0–20 km altitude vs. Latitude) with thick storm clouds & core | Equivalent Reflectivity Factor ($	ext{dBZ}$, $-30$ to $+20\ 	ext{dBZ}$) | Rayleigh scattering from large cloud droplets & precipitation at $94\ 	ext{GHz}$ ($\lambda = 3.1\ 	ext{mm}$) | **CPR** on **CloudSat** | Convective cloud depth, rainfall rates, liquid/ice water content, freezing layer melting band |
| **Three High-Resolution Spectrograms** centered at $0.76\ \mu	ext{m}$, $1.61\ \mu	ext{m}$, and $2.06\ \mu	ext{m}$ | Spectral Radiance vs. Wavelength ($\mu	ext{m}$) with deep absorption notches | Rovibrational absorption transitions of molecular $O_2$ and $CO_2$ in sunlight reflected from surface | **3-Band Grating Spectrometer** on **OCO-2** | Deriving column-averaged dry air mole fraction $X_{CO_2}$ (normalized to surface pressure via $O_2$) |
| **Color Infrared (CIR) False Color Composite** where vegetation is glowing magenta/red | Reflectance / Digital Numbers mapped to RGB ($B_5 	o R$, $B_4 	o G$, $B_3 	o B$) | Chlorophyll absorbs red light ($0.66\ \mu	ext{m}$) while spongy mesophyll cells scatter Near-Infrared ($0.86\ \mu	ext{m}$) | **OLI-2** on **Landsat 9** (or MSI on Sentinel-2) | Agricultural crop health, deforestation monitoring, burn scar severity, wetland delineation |
| **Equatorial Pacific Sea Surface Height Anomaly Map** with large warm bulge (+15 to +25 cm) off Peru | Sea Surface Height Anomaly ($	ext{cm}$ or $	ext{mm}$) relative to 20-year mean | Radar two-way pulse timing ($d = c\Delta t/2$) coupled with steric thermal expansion ($\Delta h = eta H \Delta T$) | **Poseidon-4 / AMR** on **Sentinel-6** & **Jason-3** | Detecting El Niño Southern Oscillation (ENSO phases), Kelvin waves, global sea level rise ($3.4\ 	ext{mm/yr}$) |
| **Global Earth Radiation Budget Heat Maps** with Low Tropical OLR and High Reflected SW | Outgoing Longwave Radiation ($	ext{W/m}^2$, $100 - 350$) and Reflected Shortwave ($	ext{W/m}^2$) | Stefan-Boltzmann thermal emission ($E = \sigma T^4$) and broadband optical solar reflectance | **CERES** on **Terra, Aqua, Suomi-NPP** | Quantifying Earth Energy Imbalance ($+0.8\ 	ext{W/m}^2$), cloud radiative forcing, planetary albedo ($~0.29$) |
| **Monthly Regional Mass Change Map** showing severe groundwater drops over California/India | Equivalent Water Thickness ($	ext{cm}$ of water) or Terrestrial Water Storage (TWS) | K-band microwave and laser ranging measuring inter-satellite distance perturbations ($\mu	ext{m}$) | **KBR / LRI** on **GRACE & GRACE-FO** | Aquifer depletion, Greenland/Antarctic ice sheet mass loss, drought severity monitoring |
| **Tropospheric Air Quality Trace Gas Plumes** concentrated over cities, shipping lanes, and basins | Tropospheric Column Density ($10^{15}\ 	ext{molec/cm}^2$ or $\mu	ext{mol/m}^2$) | UV-Visible Differential Optical Absorption Spectroscopy (DOAS) | **TROPOMI** on **Sentinel-5P** (or OMI on Aura) | Tracking urban smog ($NO_2$), sulfur dioxide from volcanoes/coal plants ($SO_2$), and methane leaks ($CH_4$) |

---

### 7.2 Atmospheric Transmission Windows & Absorption Spectra Deep Dive

To interpret satellite radiometer channels, you must master the atmospheric transmission spectrum from UV to Microwave:

1. **UV Shielding Region ($\lambda < 0.31\ \mu	ext{m}$):**
   - **Absorber:** Ozone ($O_3$) via the Hartley ($200–300\ 	ext{nm}$) and Huggins bands.
   - **Atmospheric Transmittance:** Virtually $0\%$.
   - **Remote Sensing Utility:** Spaceborne ozone profiling (TOMIS, OMI, OMPS) by measuring solar backscattered UV; surface is completely shielded from lethal UV-C and most UV-B.

2. **Visible Optical Window ($0.40 - 0.70\ \mu	ext{m}$):**
   - **Absorber:** Weak ozone (Chappuis band around $0.6\ \mu	ext{m}$). Transmittance is nearly $85–90\%$.
   - **Scattering:** Dominated by Rayleigh scattering ($\propto \lambda^{-4}$), causing blue skies and strong atmospheric path radiance in Landsat Band 1 (Coastal Aerosol, $0.44\ \mu	ext{m}$) and Band 2 (Blue, $0.48\ \mu	ext{m}$).

3. **Near-Infrared (NIR) and Shortwave Infrared (SWIR) Windows ($0.75 - 2.5\ \mu	ext{m}$):**
   - Windows exist at:
     - $0.85\ \mu	ext{m}$ (Landsat Band 5 NIR)
     - $1.05\ \mu	ext{m}$
     - $1.24\ \mu	ext{m}$
     - $1.6\ \mu	ext{m}$ (Landsat Band 6 SWIR-1, snow/cloud discrimination)
     - $2.2\ \mu	ext{m}$ (Landsat Band 7 SWIR-2, mineralogy and fire scars)
   - Deep absorption valleys between these windows are caused by **Water Vapor ($H_2O$)** at $0.94\ \mu	ext{m}$, $1.13\ \mu	ext{m}$, $1.40\ \mu	ext{m}$, and $1.90\ \mu	ext{m}$, and **$CO_2$** at $2.06\ \mu	ext{m}$.

4. **Mid-Wave Infrared (MWIR) Window ($3.5 - 4.1\ \mu	ext{m}$):**
   - Flanked by strong $CO_2$ absorption at $4.3\ \mu	ext{m}$.
   - Contains high sensitivity to high-temperature blackbody emitters ($T \sim 600 - 1200\ 	ext{K}$) due to Wien's displacement law ($\lambda_{max} pprox 3–4\ \mu	ext{m}$).
   - **Sensor Use:** GOES-16 ABI Band 7 ($3.9\ \mu	ext{m}$) and MODIS Band 21/22 for wildfire and hot spot detection.

5. **Thermal Infrared (TIR) Atmospheric Window ($8.0 - 12.5\ \mu	ext{m}$):**
   - Peak terrestrial thermal emission window for Earth ($T pprox 288\ 	ext{K} \implies \lambda_{max} pprox 10\ \mu	ext{m}$).
   - **The Ozone Notch:** An intense absorption dip occurs at **$9.6\ \mu	ext{m}$** due to stratospheric ozone vibrational bending. Split-window radiometers place bands on either side ($10.5–11.5\ \mu	ext{m}$ and $11.5–12.5\ \mu	ext{m}$) to correct for atmospheric moisture.
   - **Water Vapor Absorption:** A wide $H_2O$ rotational band blocks transmission for all wavelengths greater than $14\ \mu	ext{m}$.
   - **$CO_2$ Fundamental Band:** Intense, opaque absorption occurs at **$15.0\ \mu	ext{m}$**, which allows temperature sounding of the stratosphere.

6. **Microwave Windows ($\lambda = 1\ 	ext{mm} - 30\ 	ext{cm}$; $f = 1 - 100\ 	ext{GHz}$):**
   - Transparent through dry air, clouds, and non-precipitating fog.
   - Water vapor absorption line at $22.235\ 	ext{GHz}$; Oxygen absorption complex at $60\ 	ext{GHz}$ and $118\ 	ext{GHz}$.
   - L-band ($1–2\ 	ext{GHz}$): Penetrates vegetation canopy to measure soil moisture (SMAP).
   - C-band ($5.4\ 	ext{GHz}$): SAR all-weather surface imaging (Sentinel-1).
   - Ku-band ($13.6\ 	ext{GHz}$): Radar altimeter ocean surface range (Sentinel-6, Jason-3).
   - W-band ($94\ 	ext{GHz}$): Cloud Profiling Radar (CloudSat).

---

### 7.3 Spectral Reflectance Signature Curves (The 5 Canonical Endmembers)

Every Remote Sensing exam requires identifying the spectral curves of Earth materials:

1. **Healthy Green Vegetation:**
   - **Blue ($0.45\ \mu	ext{m}$):** Low reflectance ($\sim 5\%$) due to chlorophyll absorption.
   - **Green ($0.55\ \mu	ext{m}$):** Slight reflectance peak ($\sim 10–15\%$)—why leaves appear green.
   - **Red ($0.66\ \mu	ext{m}$):** Deep absorption dip ($\sim 3–5\%$) by chlorophyll-a and b for photosynthesis.
   - **The Red Edge ($0.68 - 0.75\ \mu	ext{m}$):** Extremely steep, near-vertical rise in reflectance.
   - **Near-Infrared Plateau ($0.75 - 1.3\ \mu	ext{m}$):** High reflectance ($\sim 45–55\%$) caused by multiple refractive scatterings within the spongy mesophyll internal cell structure.
   - **SWIR Valleys ($1.45\ \mu	ext{m}$ and $1.95\ \mu	ext{m}$):** Water absorption dips; stressed/dry vegetation has higher SWIR reflectance because leaves contain less liquid water.

2. **Clear Deep Water:**
   - Moderate reflectance in Blue ($\sim 8\%$) and Green ($\sim 5\%$).
   - Almost **$0\%$ reflectance** across Near-Infrared and Shortwave Infrared (all radiation is absorbed within the top millimeters of water).
   - On NIR / SWIR images, water bodies appear solid jet black. Turbid or sediment-laden water reflects more in the red and green.

3. **Dry Bare Soil:**
   - Smooth, monotonic increase in reflectance from visible to SWIR without sharp cliffs.
   - Reflectance rises from $\sim 10\%$ at $0.4\ \mu	ext{m}$ to $\sim 40\%$ at $2.2\ \mu	ext{m}$.
   - Wet soil exhibits an identical curve shape but lower overall reflectance across all bands (darker).

4. **Fresh Snow:**
   - Exceptional visible reflectance ($\sim 90–98\%$) from $0.4\ \mu	ext{m}$ to $0.8\ \mu	ext{m}$.
   - Steep, plunging drop into the SWIR ($<10\%$ at $1.6\ \mu	ext{m}$).
   - **Key Discriminator:** Snow is blindingly bright in the visible and black in the SWIR. Liquid water clouds remain bright in both visible and SWIR. This physics powers the Normalized Difference Snow Index ($NDSI$).

5. **Man-Made Impervious Surfaces (Concrete / Asphalt):**
   - Asphalt: Uniformly low, flat reflectance ($\sim 10–15\%$) across all visible and infrared bands.
   - Concrete: Flat, elevated reflectance ($\sim 30–45\%$) across visible through SWIR.

---

### 7.4 Satellite Remote Sensing Synergy (A-Train Constellation Case Study)

The **A-Train (Afternoon Constellation)** is the most famous satellite formation in Science Olympiad history:
- Flying in a sun-synchronous orbit at $705\ 	ext{km}$ altitude with an equatorial crossing time around 1:30 PM local solar time.
- Spacecraft fly mere seconds to minutes apart along the exact same orbital ground track:
  - **Aqua (AIRS, MODIS, CERES):** Broad-swath imaging, sea surface temperature, and radiation budget.
  - **CloudSat (CPR 94 GHz):** Pierces deep into cloud decks to observe precipitation cores and cloud base.
  - **CALIPSO (CALIOP 532/1064 nm Lidar):** Detects optically thin cirrus and fine aerosol plumes that radar misses.
  - **Aura (OMI, MLS, TES):** Ozone, greenhouse gases, and atmospheric chemistry.

#### Active Radar vs. Active Lidar Synergy Comparison

| Parameter | CloudSat CPR (Radar) | CALIPSO CALIOP (Lidar) |
| :--- | :--- | :--- |
| **Wavelength** | $3.16\ 	ext{mm}$ ($94\ 	ext{GHz}$, Microwave) | $532\ 	ext{nm}$ (Green) & $1064\ 	ext{nm}$ (NIR) |
| **Scattering Particle Regime** | Rayleigh to Mie on cloud droplets & raindrops ($r > 20\ \mu	ext{m}$) | Rayleigh on air molecules; Mie on fine aerosols ($r \sim 0.1 - 5\ \mu	ext{m}$) |
| **Thin Cirrus Cloud Detection** | Ineffective (cirrus ice particles are too small to scatter $3\ 	ext{mm}$ waves) | Superb sensitivity (picks up sub-visual cirrus down to optical depth $	au < 0.01$) |
| **Thick Cumulonimbus Penetration** | Excellent penetration through convective cores to rain shaft | Attenuates and gets completely blocked after cloud optical depth $	au pprox 3$ |
| **Physical Complementarity** | Lidar sees the cloud top and aerosol layers; Radar penetrates to the cloud base and precipitation floor! |

---

### 7.5 Visual Exam Practice Questions & Solutions

**Station Question 1:**
> *An exam station presents a profile displaying 'Total Attenuated Backscatter at 532 nm' with an intense plume originating in western Africa at latitude $15^\circ	ext{N}$, rising into the marine boundary layer up to 4 km, and traversing the Atlantic Ocean toward Puerto Rico. Identify the instrument, satellite, and phenomenon.*
- **Instrument:** CALIOP (Cloud-Aerosol Lidar with Orthogonal Polarization)
- **Satellite:** CALIPSO
- **Phenomenon:** The Saharan Air Layer (SAL) / trans-Atlantic mineral dust outbreak.

**Station Question 2:**
> *An image shows a false-color composite of Lake Tahoe and surrounding coniferous forests. The forest appears bright red, while the lake water is black. An adjacent ski resort shows snow on mountain peaks. In what band combination is this image shown, and why does the lake look black?*
- **Band Combination:** Landsat Color Infrared (CIR) False Color (Bands 5, 4, 3 as RGB).
- **Physical Reason:** Liquid water has strong absorption in the near-infrared band (Band 5). Near-infrared photons are absorbed almost 100% within the top centimeters of the water column, resulting in zero reflectance and a pitch-black appearance.

**Station Question 3:**
> *A time-series of tropical Pacific sea surface heights shows the western warm pool anomaly falling from $+15\ 	ext{cm}$ to $-2\ 	ext{cm}$, while the eastern Pacific anomaly surges to $+25\ 	ext{cm}$. What oceanographic event is taking place, and what satellite instrument recorded it?*
- **Event:** A major El Niño event (warm phase of ENSO).
- **Instrument:** Dual-frequency radar altimeter (Poseidon-3B / Poseidon-4 on Jason-3 / Sentinel-6 Michael Freilich).
- **Mechanism:** Trade wind relaxation triggers downwelling equatorial Kelvin waves that transport warm upper ocean waters eastward, raising sea level via thermal steric expansion.
