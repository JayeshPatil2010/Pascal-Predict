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
