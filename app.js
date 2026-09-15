/**
 * OrbitSense Div C - Application Logic & State Controller
 * Science Olympiad Remote Sensing Master Hub
 */

// ================= GLOBAL STATE =================
const state = {
  currentTab: 'diagnostic',
  calcSubtab: 'formulas',
  
  // Diagnostic State
  diagIndex: 0,
  diagAnswers: new Array(DIAGNOSTIC_QUESTIONS.length).fill(null),
  diagSubmitted: false,
  diagWeakCategories: new Set(),
  diagWeakQuestions: [],

  // Guided Modules
  activeModuleId: 'mod_atrain',
  guidedFilter: 'all',
  moduleQuizAnswers: {},

  // Satellite Filters
  satSearch: '',
  satConstellation: 'all',
  satSensorType: 'all',

  // Exam Simulator State
  examStationIndex: 0,
  examAnswers: {}, // key: qId, value: optionIndex
  examTimerSeconds: 50 * 60,
  examTimerInterval: null,
  examTimerRunning: false,
  examSubmitted: false,

  // Speed Drill State
  drillCurrent: null,
  drillScore: 0,
  drillTotal: 0
};

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  initDiagnostic();
  renderGuidedModules();
  renderSatellites();
  renderClimateTopics();
  renderFormulasList();
  renderTiPrograms();
  initPracticeExam();
  renderPrintableCheatSheet();
  generateRandomDrillProblem();

  // Run initial solver calculations
  solveEnergyBalance();
  solveBlackbody();
  solveKepler();
  solveIndices();
  solveRadarAltimetry();
  solveBeerLambert();
});

// ================= TAB NAVIGATION =================
function switchTab(tabId) {
  state.currentTab = tabId;

  // Update navbar buttons
  document.querySelectorAll('#main-nav-tabs .nav-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update section visibility
  document.querySelectorAll('.app-section').forEach(sec => {
    sec.classList.remove('active');
  });
  const targetSec = document.getElementById(`section-${tabId}`);
  if (targetSec) {
    targetSec.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchCalcSubtab(subtabId, btnElement) {
  state.calcSubtab = subtabId;
  document.querySelectorAll('.calc-subtab-btn').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  document.querySelectorAll('.calc-subtab-content').forEach(c => c.style.display = 'none');
  const target = document.getElementById(`calc-subtab-${subtabId}`);
  if (target) target.style.display = 'block';
}

// ================= DIAGNOSTIC AUDIT CONTROLLER =================
function initDiagnostic() {
  state.diagIndex = 0;
  state.diagAnswers = new Array(DIAGNOSTIC_QUESTIONS.length).fill(null);
  state.diagSubmitted = false;
  state.diagWeakCategories.clear();
  state.diagWeakQuestions = [];

  document.getElementById('diagnostic-quiz-container').style.display = 'flex';
  document.getElementById('diagnostic-results-container').style.display = 'none';

  renderDiagnosticQuestion();
}

function renderDiagnosticQuestion() {
  const q = DIAGNOSTIC_QUESTIONS[state.diagIndex];
  const total = DIAGNOSTIC_QUESTIONS.length;
  const progressPct = ((state.diagIndex) / total) * 100;

  document.getElementById('diag-progress-fill').style.width = `${progressPct}%`;
  document.getElementById('diag-q-number').textContent = `Question ${state.diagIndex + 1} of ${total}`;
  document.getElementById('diag-q-category').textContent = q.category;
  document.getElementById('diag-q-topic').textContent = q.topic;
  document.getElementById('diag-q-prompt').textContent = q.question;

  const optionsContainer = document.getElementById('diag-options-list');
  optionsContainer.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];
  const userAns = state.diagAnswers[state.diagIndex];

  q.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (userAns !== null) {
      btn.classList.add('locked');
      if (idx === q.correctIndex) {
        btn.classList.add('correct');
      } else if (idx === userAns) {
        btn.classList.add('incorrect');
      }
    }
    btn.onclick = () => selectDiagOption(idx);

    btn.innerHTML = `
      <div class="option-marker">${letters[idx]}</div>
      <div style="flex: 1;">${optText}</div>
    `;
    optionsContainer.appendChild(btn);
  });

  const feedbackBox = document.getElementById('diag-feedback-box');
  const nextBtn = document.getElementById('diag-btn-next');

  if (userAns !== null) {
    feedbackBox.classList.add('visible');
    const isCorrect = userAns === q.correctIndex;
    const titleElem = document.getElementById('diag-feedback-title');
    titleElem.className = `feedback-title ${isCorrect ? 'correct' : 'incorrect'}`;
    titleElem.innerHTML = isCorrect ? '✅ Correct Answer!' : '❌ Incorrect Choice';

    document.getElementById('diag-feedback-text').textContent = q.explanation;
    document.getElementById('diag-feedback-tip').innerHTML = `<strong>💡 Pro-Tip / Calculator Keystroke:</strong> ${q.calcTip}`;
    nextBtn.disabled = false;
    nextBtn.textContent = (state.diagIndex === total - 1) ? 'View Diagnostic State Report ➔' : 'Next Question ➔';
  } else {
    feedbackBox.classList.remove('visible');
    nextBtn.disabled = true;
    nextBtn.textContent = 'Next Question ➔';
  }
}

function selectDiagOption(idx) {
  if (state.diagAnswers[state.diagIndex] !== null) return; // already answered
  state.diagAnswers[state.diagIndex] = idx;
  renderDiagnosticQuestion();
}

function toggleDiagHint() {
  const q = DIAGNOSTIC_QUESTIONS[state.diagIndex];
  const feedbackBox = document.getElementById('diag-feedback-box');
  if (feedbackBox.classList.contains('visible')) {
    feedbackBox.classList.remove('visible');
  } else {
    feedbackBox.classList.add('visible');
    document.getElementById('diag-feedback-title').className = 'feedback-title';
    document.getElementById('diag-feedback-title').innerHTML = '💡 Hint / Calculator Formula';
    document.getElementById('diag-feedback-text').textContent = "Think about the physical units and key relationships.";
    document.getElementById('diag-feedback-tip').innerHTML = `<strong>Formula Tip:</strong> ${q.calcTip}`;
  }
}

function nextDiagQuestion() {
  if (state.diagIndex < DIAGNOSTIC_QUESTIONS.length - 1) {
    state.diagIndex++;
    renderDiagnosticQuestion();
  } else {
    finishDiagnostic();
  }
}

function finishDiagnostic() {
  state.diagSubmitted = true;
  document.getElementById('diagnostic-quiz-container').style.display = 'none';
  document.getElementById('diagnostic-results-container').style.display = 'block';

  let totalCorrect = 0;
  const categoryScores = {
    "Satellites & Sensors": { correct: 0, total: 0 },
    "Climate Processes": { correct: 0, total: 0 },
    "Physics & Spectroscopy": { correct: 0, total: 0 },
    "Math & Calculations": { correct: 0, total: 0 }
  };

  state.diagWeakQuestions = [];
  state.diagWeakCategories.clear();

  DIAGNOSTIC_QUESTIONS.forEach((q, idx) => {
    const userChoice = state.diagAnswers[idx];
    categoryScores[q.category].total++;
    if (userChoice === q.correctIndex) {
      totalCorrect++;
      categoryScores[q.category].correct++;
    } else {
      state.diagWeakCategories.add(q.category);
      state.diagWeakQuestions.push(q);
    }
  });

  const pct = Math.round((totalCorrect / DIAGNOSTIC_QUESTIONS.length) * 100);

  // Determine state tier
  let tierTitle = "";
  let tierIcon = "";
  let tierDesc = "";

  if (pct >= 85) {
    tierTitle = "National Tier Champion (Tier 1)";
    tierIcon = "🏆";
    tierDesc = "Elite mastery! Your grasp of satellites, orbital mechanics, radiation models, and climate dynamics is competition-ready for National tournaments.";
  } else if (pct >= 70) {
    tierTitle = "State Contender (Tier 2)";
    tierIcon = "🥈";
    tierDesc = "Strong baseline! You have a solid grasp of core remote sensing concepts. Polishing quantitative energy balance calculations and sensor specifics will put you on the medal podium.";
  } else if (pct >= 50) {
    tierTitle = "Regional Competitor (Tier 3)";
    tierIcon = "🥉";
    tierDesc = "Good working foundation. Prioritize the Guided Learning modules for the 1-Layer atmosphere greenhouse formulas and the A-Train satellite sensor suite.";
  } else {
    tierTitle = "Novice Explorer (Foundational)";
    tierIcon = "🌱";
    tierDesc = "Welcome to Remote Sensing! Start with our step-by-step Guided Learning mode to rapidly build foundational mastery in satellites, climate cycles, and calculator math.";
  }

  document.getElementById('diag-result-icon').textContent = tierIcon;
  document.getElementById('diag-result-tier').textContent = tierTitle;
  document.getElementById('diag-result-score').textContent = `Diagnostic Score: ${totalCorrect} / ${DIAGNOSTIC_QUESTIONS.length} (${pct}%)`;
  document.getElementById('diag-result-desc').textContent = tierDesc;

  // Category percentages
  const satPct = Math.round((categoryScores["Satellites & Sensors"].correct / categoryScores["Satellites & Sensors"].total) * 100);
  const climPct = Math.round((categoryScores["Climate Processes"].correct / categoryScores["Climate Processes"].total) * 100);
  const physPct = Math.round((categoryScores["Physics & Spectroscopy"].correct / categoryScores["Physics & Spectroscopy"].total) * 100);
  const mathPct = Math.round((categoryScores["Math & Calculations"].correct / categoryScores["Math & Calculations"].total) * 100);

  document.getElementById('mastery-sat-pct').textContent = `${satPct}%`;
  document.getElementById('mastery-sat-bar').style.width = `${satPct}%`;

  document.getElementById('mastery-clim-pct').textContent = `${climPct}%`;
  document.getElementById('mastery-clim-bar').style.width = `${climPct}%`;

  document.getElementById('mastery-phys-pct').textContent = `${physPct}%`;
  document.getElementById('mastery-phys-bar').style.width = `${physPct}%`;

  document.getElementById('mastery-math-pct').textContent = `${mathPct}%`;
  document.getElementById('mastery-math-bar').style.width = `${mathPct}%`;

  // Update Guided Learning badge count
  const weaknessCount = state.diagWeakQuestions.length;
  document.getElementById('guided-weakness-btn').textContent = `🎯 My Diagnostic Weaknesses (${weaknessCount})`;

  // Render blindspots list
  const blindspotsContainer = document.getElementById('diag-blindspots-list');
  blindspotsContainer.innerHTML = '';

  if (state.diagWeakQuestions.length === 0) {
    blindspotsContainer.innerHTML = `<li style="color: var(--emerald); font-weight: 600;">🎉 Perfect score! No blind spots detected. You are ready to tackle the Practice Exam!</li>`;
  } else {
    state.diagWeakQuestions.forEach(q => {
      const li = document.createElement('li');
      li.className = 'blindspot-item';
      li.innerHTML = `
        <div>
          <strong>${q.category}:</strong> ${q.topic}
        </div>
        <button class="blindspot-btn" onclick="openWeaknessModule('${q.category}')">Study Micro-Lesson ➔</button>
      `;
      blindspotsContainer.appendChild(li);
    });
  }

  window.scrollTo({ top: 200, behavior: 'smooth' });
}

function restartDiagnostic() {
  initDiagnostic();
}

function launchTargetedGuidedMode() {
  switchTab('guided');
  filterGuidedModules('weakness', document.getElementById('guided-weakness-btn'));
}

function openWeaknessModule(category) {
  switchTab('guided');
  filterGuidedModules(category);
}

// ================= ADAPTIVE GUIDED LEARNING =================
function renderGuidedModules() {
  const container = document.getElementById('guided-modules-container');
  container.innerHTML = '';

  GUIDED_MODULES.forEach(mod => {
    const card = document.createElement('div');
    card.className = 'module-card';
    card.id = `mod-card-${mod.id}`;
    card.setAttribute('data-category', mod.category);

    card.innerHTML = `
      <div class="module-header" onclick="toggleModule('${mod.id}')">
        <div class="module-title-wrap">
          <span class="module-icon">${mod.icon}</span>
          <div>
            <h3 class="module-title">${mod.title}</h3>
            <div class="module-meta">
              <span class="badge badge-cyan">${mod.category}</span>
              <span style="font-size: 12px; color: var(--text-dim);">⏱️ ${mod.readingTime} read</span>
            </div>
          </div>
        </div>
        <div style="font-size: 18px; color: var(--text-dim);" id="icon-toggle-${mod.id}">▼</div>
      </div>

      <div class="module-body ${mod.id === state.activeModuleId ? 'open' : ''}" id="mod-body-${mod.id}">
        
        <!-- Key Takeaways Box -->
        <div class="key-takeaways-box">
          <div class="key-takeaways-title">⚡ High-Yield Key Takeaways</div>
          <ul class="takeaways-list">
            ${mod.keyConcepts.map(k => `<li>${k}</li>`).join('')}
          </ul>
        </div>

        <!-- Concept Primer Text -->
        <div class="module-content-text">${mod.deepDive}</div>

        <!-- Dynamic Simulation Widget -->
        ${renderInteractiveWidgetForModule(mod.id)}

        <!-- Competition Traps Callout -->
        <div class="trap-box">
          <div class="trap-title">⚠️ Science Olympiad Competition Traps & Secrets</div>
          <ul class="trap-list">
            ${mod.competitionTraps.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>

        <!-- Worked Problem Example -->
        <div class="worked-problem-box">
          <div class="worked-title">🧮 Step-by-Step Worked Calculator Problem</div>
          <p class="worked-problem-text">${mod.workedExample.problem}</p>
          <ul class="worked-steps-list">
            ${mod.workedExample.steps.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>

        <!-- Micro-Quiz Check -->
        <div class="micro-quiz-box">
          <div class="micro-quiz-title">🎯 Instant Check-for-Understanding Micro-Quiz</div>
          ${mod.quiz.map((qz, qzIdx) => `
            <div style="margin-bottom: 16px;">
              <p style="font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 8px;">
                ${qzIdx + 1}. ${qz.q}
              </p>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                ${qz.options.map((opt, optIdx) => `
                  <button class="option-btn" style="padding: 9px 14px; font-size: 13.5px;" 
                    id="mquiz-${mod.id}-${qzIdx}-${optIdx}" 
                    onclick="checkMicroQuiz('${mod.id}', ${qzIdx}, ${optIdx}, ${qz.correct})">
                    <span class="option-marker" style="width: 22px; height: 22px; font-size: 11px;">${['A','B','C','D'][optIdx]}</span>
                    <span>${opt}</span>
                  </button>
                `).join('')}
              </div>
              <div id="mquiz-exp-${mod.id}-${qzIdx}" style="display:none; font-size: 12.5px; margin-top: 8px; padding: 8px 12px; border-radius: 6px;"></div>
            </div>
          `).join('')}
        </div>

      </div>
    `;

    container.appendChild(card);
  });
}

function toggleModule(modId) {
  const body = document.getElementById(`mod-body-${modId}`);
  const icon = document.getElementById(`icon-toggle-${modId}`);
  if (body.classList.contains('open')) {
    body.classList.remove('open');
    if (icon) icon.textContent = '▼';
  } else {
    body.classList.add('open');
    if (icon) icon.textContent = '▲';
  }
}

function filterGuidedModules(filterVal, btnElement) {
  state.guidedFilter = filterVal;

  document.querySelectorAll('.guided-filter-tabs .filter-chip').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const cards = document.querySelectorAll('.module-card');
  cards.forEach(card => {
    const cat = card.getAttribute('data-category');
    if (filterVal === 'all') {
      card.style.display = 'block';
    } else if (filterVal === 'weakness') {
      // Check if matches weak categories
      if (state.diagWeakCategories.has(cat)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    } else {
      if (cat === filterVal) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}

function renderInteractiveWidgetForModule(modId) {
  if (modId === 'mod_atrain') {
    return `
      <div class="interactive-widget-box">
        <div class="widget-title">⏱️ Interactive A-Train Formation Order & Spacing Simulator</div>
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">
          The Afternoon Constellation maintains tight formation at 705 km, crossing the equator at ~1:30 PM. 
          Click on any satellite in the train to view its payload and mission role:
        </p>
        <div style="display: flex; gap: 8px; overflow-x: auto; padding: 12px 0;">
          <div class="btn btn-sm btn-secondary" onclick="alert('OCO-2 (Flies ~15 min ahead of Aqua): High-resolution grating spectrometers measuring XCO2 dry air column.')">
            1. OCO-2 (Lead)
          </div>
          <div class="btn btn-sm btn-primary" onclick="alert('Aqua (Lead Flagship, 1:30 PM): MODIS, AIRS, CERES, AMSU-A, AMSR-E. Studies global water cycle.')">
            2. Aqua (Flagship)
          </div>
          <div class="btn btn-sm btn-secondary" onclick="alert('CloudSat: 94 GHz W-band CPR active millimeter radar. Profiles cloud vertical liquid & ice.')">
            3. CloudSat
          </div>
          <div class="btn btn-sm btn-secondary" onclick="alert('CALIPSO: Dual-wavelength 532 & 1064 nm CALIOP active lidar. Profiles aerosols and cirrus clouds.')">
            4. CALIPSO (~15s back)
          </div>
          <div class="btn btn-sm btn-secondary" onclick="alert('Aura (Rear guard, ~1:45 PM): OMI, MLS, TES. Monitors ozone layer recovery and air quality NO2/SO2.')">
            5. Aura (Rear Guard)
          </div>
          <div class="btn btn-sm btn-secondary" onclick="alert('GCOM-W1 (Shizuku): JAXA AMSR2 microwave radiometer for precipitation and sea ice.')">
            6. GCOM-W1
          </div>
        </div>
      </div>
    `;
  } else if (modId === 'mod_ebm') {
    return `
      <div class="interactive-widget-box">
        <div class="widget-title">☀️ Interactive 0-D Energy Balance Simulator</div>
        <div class="widget-control-row">
          <div class="slider-group">
            <div class="slider-label">
              <span>Planetary Albedo (α):</span>
              <strong id="live-ebm-alb-val" style="color: var(--cyan);">0.30</strong>
            </div>
            <input type="range" class="custom-range" id="live-ebm-alb-slider" min="0" max="0.9" step="0.01" value="0.30" oninput="updateLiveEbmWidget()">
          </div>
          <div class="slider-group">
            <div class="slider-label">
              <span>Solar Constant S₀ (W/m²):</span>
              <strong id="live-ebm-s0-val" style="color: var(--amber);">1361 W/m²</strong>
            </div>
            <input type="range" class="custom-range" id="live-ebm-s0-slider" min="800" max="2000" step="10" value="1361" oninput="updateLiveEbmWidget()">
          </div>
        </div>
        <div class="widget-display-row">
          <div class="widget-stat-card">
            <div class="widget-stat-label">Absorbed Solar Flux</div>
            <div class="widget-stat-val" id="live-ebm-abs-val">238.2 W/m²</div>
          </div>
          <div class="widget-stat-card">
            <div class="widget-stat-label">Bare Planet Temp (T_e)</div>
            <div class="widget-stat-val" id="live-ebm-te-val">254.9 K</div>
          </div>
          <div class="widget-stat-card">
            <div class="widget-stat-label">Bare Temp in Celsius</div>
            <div class="widget-stat-val" id="live-ebm-tec-val">-18.3°C</div>
          </div>
        </div>
      </div>
    `;
  } else if (modId === 'mod_greenhouse_models') {
    return `
      <div class="interactive-widget-box">
        <div class="widget-title">🌡️ Interactive N-Layer Greenhouse Atmosphere Sandbox</div>
        <div class="widget-control-row">
          <div class="slider-group">
            <div class="slider-label">
              <span>Atmospheric Layers (N):</span>
              <strong id="live-gh-layers-val" style="color: var(--cyan);">1 layer</strong>
            </div>
            <input type="range" class="custom-range" id="live-gh-layers-slider" min="0" max="5" step="1" value="1" oninput="updateLiveGreenhouseWidget()">
          </div>
          <div class="slider-group">
            <div class="slider-label">
              <span>Longwave Absorptivity (ε_a):</span>
              <strong id="live-gh-eps-val" style="color: var(--amber);">0.77 (Earth realistic)</strong>
            </div>
            <input type="range" class="custom-range" id="live-gh-eps-slider" min="0" max="1" step="0.01" value="0.77" oninput="updateLiveGreenhouseWidget()">
          </div>
        </div>
        <div class="widget-display-row">
          <div class="widget-stat-card">
            <div class="widget-stat-label">Surface Temp (T_s)</div>
            <div class="widget-stat-val" id="live-gh-ts-val">288.1 K (15.0°C)</div>
          </div>
          <div class="widget-stat-card">
            <div class="widget-stat-label">Atmosphere Temp (T_a)</div>
            <div class="widget-stat-val" id="live-gh-ta-val">254.9 K (-18.3°C)</div>
          </div>
          <div class="widget-stat-card">
            <div class="widget-stat-label">Formula Scaling Factor</div>
            <div class="widget-stat-val" id="live-gh-ratio-val">1.130 × T_e</div>
          </div>
        </div>
      </div>
    `;
  } else if (modId === 'mod_enso_deep') {
    return `
      <div class="interactive-widget-box">
        <div class="widget-title">🌊 Interactive Pacific ENSO State Toggle</div>
        <div style="display: flex; gap: 8px; margin-bottom: 14px;">
          <button class="btn btn-sm btn-secondary active" id="enso-btn-normal" onclick="setLiveEnsoState('normal')">Normal / Neutral</button>
          <button class="btn btn-sm btn-primary" id="enso-btn-el-nino" onclick="setLiveEnsoState('elnino')">🔥 El Niño (Warm)</button>
          <button class="btn btn-sm btn-secondary" id="enso-btn-la-nina" onclick="setLiveEnsoState('lanina')">❄️ La Niña (Cool)</button>
        </div>
        <div id="enso-state-display-box" style="background: var(--bg-deep); border: 1px solid var(--border-dim); border-radius: var(--radius-sm); padding: 14px; font-size: 13.5px; line-height: 1.6;">
          <strong>Normal State:</strong> Strong trade winds push warm water westward. Eastern Pacific has shallow thermocline (30m), intense cold upwelling, and low sea surface height.
        </div>
      </div>
    `;
  } else if (modId === 'mod_vegetation_indices') {
    return `
      <div class="interactive-widget-box">
        <div class="widget-title">🌿 Interactive Live NDVI Band Math & Target Diagnoser</div>
        <div class="widget-control-row">
          <div class="slider-group">
            <div class="slider-label">
              <span>Red Reflectance (0.66 µm):</span>
              <strong id="live-ndvi-red-val" style="color: var(--rose);">0.08</strong>
            </div>
            <input type="range" class="custom-range" id="live-ndvi-red-slider" min="0.01" max="0.8" step="0.01" value="0.08" oninput="updateLiveNdviWidget()">
          </div>
          <div class="slider-group">
            <div class="slider-label">
              <span>Near-Infrared NIR (0.86 µm):</span>
              <strong id="live-ndvi-nir-val" style="color: var(--emerald);">0.58</strong>
            </div>
            <input type="range" class="custom-range" id="live-ndvi-nir-slider" min="0.01" max="0.9" step="0.01" value="0.58" oninput="updateLiveNdviWidget()">
          </div>
        </div>
        <div class="widget-display-row">
          <div class="widget-stat-card">
            <div class="widget-stat-label">Calculated NDVI</div>
            <div class="widget-stat-val" id="live-ndvi-calc-val">+0.76</div>
          </div>
          <div class="widget-stat-card" style="grid-column: span 2;">
            <div class="widget-stat-label">Target Classification</div>
            <div class="widget-stat-val" id="live-ndvi-class-val" style="font-size: 16px; color: var(--emerald);">Dense Healthy Forest / Crop Canopy</div>
          </div>
        </div>
      </div>
    `;
  } else if (modId === 'mod_keeling_carbon') {
    return `
      <div class="interactive-widget-box">
        <div class="widget-title">📈 Interactive Keeling Sawtooth Monthly Explorer</div>
        <div style="margin-bottom: 12px; display: flex; gap: 6px; flex-wrap: wrap;">
          <button class="btn btn-sm btn-secondary" onclick="setLiveKeelingMonth('Jan')">Jan</button>
          <button class="btn btn-sm btn-secondary" onclick="setLiveKeelingMonth('Mar')">Mar</button>
          <button class="btn btn-sm btn-primary" onclick="setLiveKeelingMonth('May')">May (Peak 🔺)</button>
          <button class="btn btn-sm btn-secondary" onclick="setLiveKeelingMonth('Jul')">Jul</button>
          <button class="btn btn-sm btn-primary" onclick="setLiveKeelingMonth('Oct')">Oct (Trough 🔻)</button>
          <button class="btn btn-sm btn-secondary" onclick="setLiveKeelingMonth('Dec')">Dec</button>
        </div>
        <div id="live-keeling-box" style="background: var(--bg-deep); border: 1px solid var(--border-dim); border-radius: var(--radius-sm); padding: 14px; font-size: 13px; line-height: 1.6;">
          <strong>May (Annual Global CO2 Maximum):</strong> After Northern Hemisphere winter/early spring, soil microbial decomposition and plant decay have released CO2 continuously with minimal photosynthetic uptake. Atmospheric CO2 reaches its highest concentration of the year (~427 ppm).
        </div>
      </div>
    `;
  } else if (modId === 'mod_kepler_orbits') {
    return `
      <div class="interactive-widget-box">
        <div class="widget-title">🛸 Interactive Orbital Altitude vs. Period Calculator</div>
        <div class="slider-group" style="margin-bottom: 14px;">
          <div class="slider-label">
            <span>Satellite Orbital Altitude (h):</span>
            <strong id="live-orb-alt-val" style="color: var(--cyan);">705 km (Landsat & Aqua)</strong>
          </div>
          <input type="range" class="custom-range" id="live-orb-alt-slider" min="300" max="36000" step="50" value="705" oninput="updateLiveOrbitWidget()">
        </div>
        <div class="widget-display-row">
          <div class="widget-stat-card">
            <div class="widget-stat-label">Orbital Period</div>
            <div class="widget-stat-val" id="live-orb-per-val">98.7 min</div>
          </div>
          <div class="widget-stat-card">
            <div class="widget-stat-label">Orbital Velocity</div>
            <div class="widget-stat-val" id="live-orb-vel-val">7.50 km/s</div>
          </div>
          <div class="widget-stat-card">
            <div class="widget-stat-label">Daily Passes</div>
            <div class="widget-stat-val" id="live-orb-pass-val">14.58 rev/day</div>
          </div>
        </div>
      </div>
    `;
  }
  return '';
}

function updateLiveEbmWidget() {
  const alb = parseFloat(document.getElementById('live-ebm-alb-slider').value);
  const s0 = parseFloat(document.getElementById('live-ebm-s0-slider').value);

  document.getElementById('live-ebm-alb-val').textContent = alb.toFixed(2);
  document.getElementById('live-ebm-s0-val').textContent = `${s0} W/m²`;

  const absFlux = (1 - alb) * (s0 / 4);
  const sigma = 5.6704e-8;
  const te = Math.pow(absFlux / sigma, 0.25);
  const teC = te - 273.15;

  document.getElementById('live-ebm-abs-val').textContent = `${absFlux.toFixed(1)} W/m²`;
  document.getElementById('live-ebm-te-val').textContent = `${te.toFixed(1)} K`;
  document.getElementById('live-ebm-tec-val').textContent = `${teC.toFixed(1)}°C`;
}

function setLiveEnsoState(stateType) {
  const box = document.getElementById('enso-state-display-box');
  if (stateType === 'normal') {
    box.innerHTML = `
      <strong style="color: var(--cyan);">Normal / Neutral State:</strong><br>
      • Trade Winds: Strong easterlies push surface water westward toward Indonesia.<br>
      • Thermocline: Steeply sloped (150m deep in west, 30m shallow off Peru).<br>
      • Upwelling: Vigorous coastal upwelling of cold, nutrient-rich water off South America.<br>
      • Satellite Altimetry: Eastern Pacific has neutral/slightly negative SSH.
    `;
  } else if (stateType === 'elnino') {
    box.innerHTML = `
      <strong style="color: var(--rose);">El Niño (Warm Phase):</strong><br>
      • Trade Winds: Weakened, collapsed, or reversed to westerlies.<br>
      • Thermocline: Flattens across the Pacific; downwelling Kelvin waves deepen eastern thermocline.<br>
      • Upwelling: Shut down off Peru; coastal fisheries collapse.<br>
      • Satellite Altimetry: Jason-3/Sentinel-6 detects massive POSITIVE SSH anomaly (+10 to +25 cm) in eastern Pacific due to thermal steric expansion!
    `;
  } else if (stateType === 'lanina') {
    box.innerHTML = `
      <strong style="color: #60a5fa;">La Niña (Cool Phase):</strong><br>
      • Trade Winds: Exceptionally strong easterlies.<br>
      • Thermocline: Very steep slope; cold tongue extends far westward.<br>
      • Upwelling: Highly intensified off Peru.<br>
      • Satellite Altimetry: Eastern Pacific shows prominent NEGATIVE SSH anomalies (-10 to -20 cm).
    `;
  }
}

function checkMicroQuiz(modId, qzIdx, optIdx, correctIdx) {
  const btn = document.getElementById(`mquiz-${modId}-${qzIdx}-${optIdx}`);
  const expBox = document.getElementById(`mquiz-exp-${modId}-${qzIdx}`);

  // lock options
  for (let i = 0; i < 4; i++) {
    const b = document.getElementById(`mquiz-${modId}-${qzIdx}-${i}`);
    if (b) {
      if (i === correctIdx) b.classList.add('correct');
      else if (i === optIdx) b.classList.add('incorrect');
    }
  }

  expBox.style.display = 'block';
  if (optIdx === correctIdx) {
    expBox.style.background = 'rgba(16, 185, 129, 0.15)';
    expBox.style.border = '1px solid var(--emerald)';
    expBox.style.color = '#34d399';
    expBox.innerHTML = `<strong>✅ Correct!</strong> Great job grasping this concept.`;
  } else {
    expBox.style.background = 'rgba(244, 63, 94, 0.15)';
    expBox.style.border = '1px solid var(--rose)';
    expBox.style.color = '#fecdd3';
    expBox.innerHTML = `<strong>❌ Not quite.</strong> Choice ${['A','B','C','D'][correctIdx]} is the correct answer. Review the concept summary above!`;
  }
}

// ================= SATELLITE LIBRARY =================
function renderSatellites() {
  const grid = document.getElementById('satellites-grid');
  grid.innerHTML = '';

  const search = state.satSearch.toLowerCase();
  const constell = state.satConstellation;
  const sensType = state.satSensorType;

  const filtered = SATELLITES_DATA.filter(sat => {
    // text search
    const matchText = sat.name.toLowerCase().includes(search) ||
      sat.constellation.toLowerCase().includes(search) ||
      sat.climateFocus.toLowerCase().includes(search) ||
      sat.sensors.some(s => s.name.toLowerCase().includes(search) || s.fullName.toLowerCase().includes(search));

    if (!matchText) return false;

    // constellation filter
    if (constell !== 'all') {
      if (constell === 'A-Train' && !sat.constellation.includes('A-Train')) return false;
      if (constell === 'EOS' && !sat.constellation.includes('EOS')) return false;
      if (constell === 'Landsat' && !sat.name.includes('Landsat')) return false;
      if (constell === 'GOES' && !sat.name.includes('GOES')) return false;
      if (constell === 'Copernicus' && !sat.name.includes('Sentinel')) return false;
      if (constell === 'Altimetry' && !sat.climateFocus.includes('Sea Level') && !sat.name.includes('GRACE')) return false;
    }

    // sensor type filter
    if (sensType !== 'all') {
      const isAct = sat.sensorType.toLowerCase().includes('active');
      if (sensType === 'active' && !isAct) return false;
      if (sensType === 'passive' && isAct && !sat.sensorType.toLowerCase().includes('passive')) return false;
    }

    return true;
  });

  filtered.forEach(sat => {
    const card = document.createElement('div');
    card.className = 'sat-card';
    card.innerHTML = `
      <div>
        <div class="sat-header">
          <div>
            <h3 class="sat-name">${sat.name}</h3>
            <div class="sat-agency">${sat.agency} • Launched ${sat.launchYear}</div>
          </div>
          <span class="badge ${sat.sensorType.includes('ACTIVE') ? 'badge-rose' : 'badge-cyan'}">
            ${sat.sensorType.includes('ACTIVE') ? '⚡ Active' : '☀️ Passive'}
          </span>
        </div>

        <div class="sat-orbit-grid">
          <div class="sat-orbit-item">
            <span>Orbit Type</span>
            <strong>${sat.orbit.type}</strong>
          </div>
          <div class="sat-orbit-item">
            <span>Altitude</span>
            <strong>${sat.orbit.altitude}</strong>
          </div>
          <div class="sat-orbit-item">
            <span>Crossing</span>
            <strong>${sat.orbit.crossing}</strong>
          </div>
          <div class="sat-orbit-item">
            <span>Repeat</span>
            <strong>${sat.orbit.repeat}</strong>
          </div>
        </div>

        <div style="font-size: 11px; text-transform: uppercase; color: var(--text-dim); margin-bottom: 6px; font-weight: 700;">Key Sensors</div>
        <div class="sat-sensors-list">
          ${sat.sensors.map(s => `<span class="sensor-pill" title="${s.fullName}">${s.name}</span>`).join('')}
        </div>

        <div class="sat-climate-focus">
          <strong>Climate Focus:</strong> ${sat.climateFocus}
        </div>
      </div>

      <button class="btn btn-secondary btn-block btn-sm" onclick="openSatelliteModal('${sat.id}')">
        🔍 View Sensor Specs & Sample Exam Question ➔
      </button>
    `;
    grid.appendChild(card);
  });
}

function filterSatellites() {
  state.satSearch = document.getElementById('sat-search-input').value;
  state.satConstellation = document.getElementById('sat-constellation-filter').value;
  state.satSensorType = document.getElementById('sat-sensor-type-filter').value;
  renderSatellites();
}

function openSatelliteModal(satId) {
  const sat = SATELLITES_DATA.find(s => s.id === satId);
  if (!sat) return;

  const content = document.getElementById('modal-satellite-content');
  content.innerHTML = `
    <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 18px;">
      <div>
        <span class="badge badge-cyan" style="margin-bottom: 8px;">${sat.constellation}</span>
        <h2 style="font-size: 24px; color: #fff; font-weight: 800;">${sat.name}</h2>
        <p style="color: var(--text-muted); font-size: 13.5px;">Agency: ${sat.agency} | Status: ${sat.status}</p>
      </div>
    </div>

    <!-- Orbit specs table -->
    <div class="sat-orbit-grid" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 22px;">
      <div class="sat-orbit-item">
        <span>Orbit</span>
        <strong>${sat.orbit.type}</strong>
      </div>
      <div class="sat-orbit-item">
        <span>Altitude</span>
        <strong>${sat.orbit.altitude}</strong>
      </div>
      <div class="sat-orbit-item">
        <span>Inclination</span>
        <strong>${sat.orbit.inclination}</strong>
      </div>
      <div class="sat-orbit-item">
        <span>Equator Crossing</span>
        <strong>${sat.orbit.crossing}</strong>
      </div>
    </div>

    <h3 style="font-size: 16px; font-weight: 700; color: var(--cyan); margin-bottom: 10px;">🔬 Onboard Sensor Suite</h3>
    <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 22px;">
      ${sat.sensors.map(s => `
        <div style="background: var(--bg-deep); border: 1px solid var(--border-dim); border-radius: 8px; padding: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <strong style="color: #fff; font-size: 15px;">${s.name} — <span style="font-weight: 500; color: var(--text-muted); font-size: 13.5px;">${s.fullName}</span></strong>
            <span class="badge badge-emerald">${s.resolution}</span>
          </div>
          <div style="font-size: 12.5px; color: var(--cyan); margin-bottom: 6px;">Bands: ${s.bands}</div>
          <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5;">${s.role}</p>
        </div>
      `).join('')}
    </div>

    <div class="card" style="background: rgba(99, 102, 241, 0.08); border-color: rgba(99, 102, 241, 0.3); margin-bottom: 18px;">
      <div style="font-size: 13.5px; font-weight: 700; color: var(--indigo); margin-bottom: 6px;">🏆 Science Olympiad Exam Relevance:</div>
      <p style="font-size: 13.5px; color: #cbd5e1; line-height: 1.6;">${sat.sciolySignificance}</p>
    </div>

    <div class="card" style="background: var(--bg-deep);">
      <div style="font-size: 13.5px; font-weight: 700; color: var(--amber); margin-bottom: 6px;">📝 Sample Invitational Exam Question:</div>
      <p style="font-size: 13.5px; color: #fff; font-weight: 600; margin-bottom: 6px;">${sat.sampleQuestion}</p>
      <div style="font-size: 13px; color: var(--emerald); background: rgba(16, 185, 129, 0.1); padding: 8px 12px; border-radius: 6px;">
        <strong>Correct Answer & Rationale:</strong> ${sat.sampleAnswer}
      </div>
    </div>
  `;

  document.getElementById('satellite-modal').classList.add('open');
}

function closeSatelliteModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn')) return;
  document.getElementById('satellite-modal').classList.remove('open');
}

// ================= DOWNLOAD & EXPORT MODAL =================
function openDownloadModal() {
  document.getElementById('download-modal').classList.add('open');
}

function closeDownloadModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn')) return;
  document.getElementById('download-modal').classList.remove('open');
}

function downloadViaNewTab(filename) {
  // Opening in a new browser tab escapes the iframe sandbox restriction!
  const win = window.open(filename, '_blank');
  if (!win) {
    window.location.href = filename;
  }
}

function copyStudyGuideToClipboard() {
  const btn = document.getElementById('copy-guide-btn');
  btn.textContent = '⏳ Fetching guide...';
  fetch('/SCIENCE_OLYMPIAD_REMOTE_SENSING_DIVISION_C_GUIDE.md')
    .then(res => res.text())
    .then(text => {
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = '✅ Copied to Clipboard!';
        btn.classList.add('btn-success');
        btn.classList.remove('btn-primary');
        setTimeout(() => {
          btn.textContent = '📋 Copy Entire Guide to Clipboard';
          btn.classList.add('btn-primary');
          btn.classList.remove('btn-success');
        }, 3000);
      });
    })
    .catch(err => {
      btn.textContent = '❌ Error loading guide';
      console.error(err);
    });
}

// ================= CLIMATE TOPICS =================
function renderClimateTopics() {
  const container = document.getElementById('climate-topics-container');
  container.innerHTML = '';

  CLIMATE_TOPICS.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.marginBottom = '24px';

    card.innerHTML = `
      <div class="card-header">
        <div>
          <span class="badge badge-cyan" style="margin-bottom: 8px;">${topic.badge}</span>
          <h3 class="card-title">${topic.icon} ${topic.title}</h3>
          <p class="card-subtitle" style="font-size: 14px; margin-top: 4px;">${topic.summary}</p>
        </div>
      </div>

      <div style="margin-top: 18px; display: flex; flex-direction: column; gap: 16px;">
        ${topic.sections.map(sec => `
          <div style="background: var(--bg-deep); border: 1px solid var(--border-dim); border-radius: 8px; padding: 18px;">
            <h4 style="font-size: 15px; font-weight: 700; color: var(--cyan); margin-bottom: 8px;">${sec.heading}</h4>
            <div style="font-size: 13.5px; color: #cbd5e1; line-height: 1.7; white-space: pre-line;">${sec.body}</div>
          </div>
        `).join('')}
      </div>
    `;

    container.appendChild(card);
  });
}

// ================= FORMULAS & CALCULATOR =================
function renderFormulasList() {
  const container = document.getElementById('formulas-list-container');
  container.innerHTML = '';

  FORMULAS_DATA.forEach(f => {
    const card = document.createElement('div');
    card.className = 'formula-card';

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 700; color: #fff;">${f.name}</h3>
          <p style="font-size: 13px; color: var(--text-muted); margin-top: 2px;">${f.description}</p>
        </div>
        <span class="badge badge-emerald">Standard Formula</span>
      </div>

      <div class="formula-math-display">${f.simpleText}</div>

      <!-- Variables Table -->
      <div style="margin: 14px 0; overflow-x: auto;">
        <table style="width: 100%; font-size: 12.5px; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 1px solid var(--border-dim); color: var(--text-dim); text-align: left;">
              <th style="padding: 6px 10px;">Symbol</th>
              <th style="padding: 6px 10px;">Parameter Meaning</th>
              <th style="padding: 6px 10px;">Standard SI Units</th>
            </tr>
          </thead>
          <tbody>
            ${f.variables.map(v => `
              <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.03);">
                <td style="padding: 6px 10px; font-family: var(--font-mono); font-weight: 700; color: var(--cyan);">${v.symbol}</td>
                <td style="padding: 6px 10px; color: var(--text-main);">${v.meaning}</td>
                <td style="padding: 6px 10px; color: var(--text-muted); font-family: var(--font-mono);">${v.unit}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- TI-84 Box -->
      <div class="ti84-box">
        <div class="ti84-header">📟 TI-84 Keystroke Sequence & Syntax:</div>
        <div class="ti84-code">${f.calculatorTip.ti84Syntax}</div>
        <div style="font-size: 12px; color: var(--text-muted); margin-top: 6px;">
          ${f.calculatorTip.ti84Store || f.calculatorTip.quickRule || ''}
        </div>
      </div>

      <!-- Example Walkthrough -->
      <div style="background: var(--bg-deep); border: 1px solid var(--border-dim); border-radius: 8px; padding: 14px; margin-top: 14px;">
        <div style="font-size: 12.5px; font-weight: 700; color: var(--emerald); text-transform: uppercase; margin-bottom: 4px;">
          Sample Problem & Algebraic Solution:
        </div>
        <p style="font-size: 13.5px; font-weight: 600; color: #fff; margin-bottom: 6px;">${f.exampleProblem.question}</p>
        <div style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
          ${f.exampleProblem.step1}<br>
          ${f.exampleProblem.step2}<br>
          ${f.exampleProblem.step3}<br>
          ${f.exampleProblem.step4 || ''}
        </div>
        <div style="font-size: 13px; font-weight: 700; color: var(--cyan); margin-top: 6px;">
          ➔ Final Answer: ${f.exampleProblem.answer}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderTiPrograms() {
  const container = document.getElementById('ti-programs-list');
  container.innerHTML = '';

  TI_BASIC_PROGRAMS.forEach(prg => {
    const card = document.createElement('div');
    card.style.background = 'var(--bg-deep)';
    card.style.border = '1px solid var(--border-dim)';
    card.style.borderRadius = '8px';
    card.style.padding = '18px';
    card.style.marginBottom = '16px';

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <strong style="color: var(--cyan); font-family: var(--font-mono); font-size: 16px;">${prg.title}</strong>
        <span class="badge badge-purple">TI-84 Basic Program</span>
      </div>
      <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 10px;">${prg.purpose} — ${prg.explanation}</p>
      <pre style="background: #000; color: #38bdf8; padding: 12px; border-radius: 6px; font-family: var(--font-mono); font-size: 12.5px; overflow-x: auto; border: 1px solid #1e2c44;">${prg.code}</pre>
    `;

    container.appendChild(card);
  });
}

// ================= LIVE SOLVERS =================
function solveEnergyBalance() {
  const s0 = parseFloat(document.getElementById('solv-s0').value) || 1361;
  const alb = parseFloat(document.getElementById('solv-albedo').value) || 0.30;
  const em = parseFloat(document.getElementById('solv-emissivity').value) || 0.77;

  const sigma = 5.6704e-8;
  const absorbed = (1 - alb) * (s0 / 4);
  const te = Math.pow(absorbed / sigma, 0.25);
  const teC = te - 273.15;

  // 1-layer with emissivity em:
  // Ts = [ (1-alb)*s0 / (4*sigma*(1 - em/2)) ]^(1/4)
  const denomFactor = 1 - (em / 2);
  const ts = Math.pow(absorbed / (sigma * denomFactor), 0.25);
  const tsC = ts - 273.15;

  document.getElementById('solv-ebm-result').textContent = 
    `T_e: ${te.toFixed(1)} K (${teC.toFixed(1)}°C) | T_s: ${ts.toFixed(1)} K (${tsC.toFixed(1)}°C)`;

  document.getElementById('solv-ebm-steps').innerHTML = `
    Absorbed Flux = (1 - ${alb.toFixed(2)}) × ${s0} / 4 = ${absorbed.toFixed(2)} W/m²<br>
    Bare Planet: T_e = (${absorbed.toFixed(2)} / 5.6704×10⁻⁸)^(0.25) = ${te.toFixed(1)} K<br>
    Greenhouse Layer (ε_a = ${em.toFixed(2)}): T_s = [1 / (1 - ${em.toFixed(2)}/2)]^(0.25) × ${te.toFixed(1)} = ${ts.toFixed(1)} K
  `;
}

function solveBlackbody() {
  const temp = parseFloat(document.getElementById('solv-temp').value) || 288;
  const sigma = 5.6704e-8;
  const b = 2898; // µm·K

  const peakLam = b / temp;
  const flux = sigma * Math.pow(temp, 4);

  let band = "Thermal Infrared (TIR)";
  if (peakLam < 0.4) band = "Ultraviolet (UV)";
  else if (peakLam < 0.7) band = "Visible";
  else if (peakLam < 3.0) band = "Near-Infrared (NIR / SWIR)";
  else if (peakLam < 50) band = "Thermal Infrared (LWIR)";
  else band = "Microwave";

  document.getElementById('solv-bb-result').textContent = 
    `λ_max: ${peakLam.toFixed(2)} µm | Flux: ${flux < 10000 ? flux.toFixed(1) + ' W/m²' : (flux / 1e6).toFixed(2) + ' MW/m²'}`;

  document.getElementById('solv-bb-steps').innerHTML = `
    Wien's Law: λ_max = 2898 / ${temp} = ${peakLam.toFixed(3)} µm (${band})<br>
    Stefan-Boltzmann: E = 5.6704×10⁻⁸ × (${temp})⁴ = ${flux < 10000 ? flux.toFixed(1) + ' W/m²' : (flux / 1e6).toFixed(3) + ' MW/m²'}
  `;
}

function solveKepler() {
  const altKm = parseFloat(document.getElementById('solv-alt').value) || 705;
  const re = 6371; // km
  const gm = 3.986004e14; // m^3/s^2

  const aMeters = (re + altKm) * 1000;
  const periodSec = 2 * Math.PI * Math.sqrt(Math.pow(aMeters, 3) / gm);
  const periodMin = periodSec / 60;
  const velKms = Math.sqrt(gm / aMeters) / 1000;
  const orbitsPerDay = 1440 / periodMin;

  document.getElementById('solv-kepler-result').textContent = 
    `Period: ${periodMin.toFixed(1)} min | Speed: ${velKms.toFixed(2)} km/s`;

  document.getElementById('solv-kepler-steps').innerHTML = `
    Semi-major axis a = 6371 + ${altKm} = ${re + altKm} km (${aMeters.toExponential(4)} m)<br>
    Period T = 2π√(a³ / GM) = ${periodSec.toFixed(1)} s = ${periodMin.toFixed(2)} minutes<br>
    Revolutions per 24-hr Day = 1440 / ${periodMin.toFixed(2)} = ${orbitsPerDay.toFixed(2)} orbits/day
  `;
}

function solveIndices() {
  const red = parseFloat(document.getElementById('solv-red').value) || 0.08;
  const nir = parseFloat(document.getElementById('solv-nir').value) || 0.58;
  const grn = parseFloat(document.getElementById('solv-grn').value) || 0.10;
  const swir = parseFloat(document.getElementById('solv-swir').value) || 0.12;

  const ndvi = (nir - red) / (nir + red);
  const ndwi = (grn - nir) / (grn + nir);
  const ndsi = (grn - swir) / (grn + swir);
  const nbr = (nir - swir) / (nir + swir);

  let interp = "Dense, Healthy Green Vegetation";
  if (ndvi < 0) interp = "Open Deep Water / Clouds";
  else if (ndvi < 0.2) interp = "Bare Soil / Rock / Urban Concrete";
  else if (ndvi < 0.5) interp = "Stressed Crops / Shrubland / Sparse Grass";

  document.getElementById('solv-indices-result').textContent = 
    `NDVI: ${ndvi.toFixed(3)} (${interp})`;

  document.getElementById('solv-indices-steps').innerHTML = `
    NDVI (NIR-Red)/(NIR+Red) = (${nir} - ${red}) / (${nir} + ${red}) = ${ndvi.toFixed(3)}<br>
    NDWI (Green-NIR)/(Green+NIR) = (${grn} - ${nir}) / (${grn} + ${nir}) = ${ndwi.toFixed(3)}<br>
    NDSI (Green-SWIR)/(Green+SWIR) = (${grn} - ${swir}) / (${grn} + ${swir}) = ${ndsi.toFixed(3)}<br>
    NBR (NIR-SWIR)/(NIR+SWIR) = (${nir} - ${swir}) / (${nir} + ${swir}) = ${nbr.toFixed(3)}
  `;
}

function solveRadarAltimetry() {
  const alt = parseFloat(document.getElementById('solv-rad-alt').value) || 1336000;
  const dt = parseFloat(document.getElementById('solv-rad-dt').value) || 0.00891220;
  const geoid = parseFloat(document.getElementById('solv-rad-geoid').value) || 42.15;

  const c = 2.997925e8;
  const range = (c * dt) / 2;
  const ssh = alt - range - geoid;

  document.getElementById('solv-rad-result').textContent = 
    `Range: ${range.toFixed(2)} m | SSH: ${ssh >= 0 ? '+' : ''}${ssh.toFixed(2)} m`;

  document.getElementById('solv-rad-steps').innerHTML = `
    Range d = (c × Δt) / 2 = (${c} × ${dt}) / 2 = ${range.toFixed(2)} m<br>
    Sea Surface Height = Altitude (${alt} m) - Range (${range.toFixed(2)} m) - Geoid (${geoid} m)<br>
    SSH = ${ssh.toFixed(3)} meters (${(ssh * 100).toFixed(1)} cm anomaly)
  `;
}

function solveBeerLambert() {
  const i0 = parseFloat(document.getElementById('solv-beer-i0').value) || 1000;
  const tau = parseFloat(document.getElementById('solv-beer-tau').value) || 0.35;

  const transFraction = Math.exp(-tau);
  const iTrans = i0 * transFraction;
  const absorbed = i0 - iTrans;
  const pctTrans = transFraction * 100;

  document.getElementById('solv-beer-result').textContent = 
    `Transmitted I: ${iTrans.toFixed(1)} W/m² (${pctTrans.toFixed(1)}%)`;

  document.getElementById('solv-beer-steps').innerHTML = `
    Beer-Lambert Law: I = I₀ × e^(-τ) = ${i0} × e^(-${tau})<br>
    Transmittance T = e^(-${tau}) = ${transFraction.toFixed(4)} (${pctTrans.toFixed(1)}%)<br>
    Direct Beam = ${iTrans.toFixed(1)} W/m² | Attenuated = ${absorbed.toFixed(1)} W/m² (${(100 - pctTrans).toFixed(1)}%)
  `;
}

// ================= FORMULA SPEED DRILL TRAINER =================
function generateRandomDrillProblem() {
  const types = ['ebm', 'wiens', 'stefan', 'kepler', 'ndvi'];
  const chosenType = types[Math.floor(Math.random() * types.length)];

  document.getElementById('drill-feedback-box').classList.remove('visible');
  document.getElementById('drill-user-input').value = '';

  if (chosenType === 'ebm') {
    const s0 = Math.floor(Math.random() * 600) + 1100; // 1100 to 1700
    const alb = (Math.floor(Math.random() * 40) + 15) / 100; // 0.15 to 0.55
    const sigma = 5.6704e-8;
    const ans = Math.round(Math.pow((1 - alb) * (s0 / 4) / sigma, 0.25));

    state.drillCurrent = {
      type: 'ebm',
      answer: ans,
      tolerance: 3,
      prompt: `A planet receives a solar flux of S₀ = ${s0} W/m² and has a planetary albedo of α = ${alb.toFixed(2)}. Calculate its effective blackbody equilibrium temperature T_e (in Kelvin) to the nearest integer.`,
      inputLabel: "Calculated Temperature T_e (Kelvin):",
      explanation: `T_e = [ (1 - ${alb.toFixed(2)}) × ${s0} / (4 × 5.6704×10⁻⁸) ]^0.25 ≈ ${ans} K.`
    };
  } else if (chosenType === 'wiens') {
    const temp = Math.floor(Math.random() * 4000) + 1000; // 1000 to 5000 K
    const ans = parseFloat((2898 / temp).toFixed(2));

    state.drillCurrent = {
      type: 'wiens',
      answer: ans,
      tolerance: 0.1,
      prompt: `A glowing volcanic lava fissure has an absolute temperature of T = ${temp} K. Using Wien's displacement law (b = 2898 µm·K), calculate its peak emission wavelength λ_max in micrometers (µm).`,
      inputLabel: "Peak Wavelength λ_max (µm):",
      explanation: `λ_max = 2898 / ${temp} = ${ans} µm.`
    };
  } else if (chosenType === 'stefan') {
    const temp = Math.floor(Math.random() * 300) + 250; // 250 to 550 K
    const sigma = 5.6704e-8;
    const ans = Math.round(sigma * Math.pow(temp, 4));

    state.drillCurrent = {
      type: 'stefan',
      answer: ans,
      tolerance: ans * 0.03, // 3%
      prompt: `An Earth desert sand surface reaches a temperature of ${temp} K. Assuming ideal blackbody emission, calculate the emitted radiant flux E (in W/m²).`,
      inputLabel: "Radiant Flux E (W/m²):",
      explanation: `E = σ·T⁴ = 5.6704×10⁻⁸ × (${temp})⁴ = ${ans} W/m².`
    };
  } else if (chosenType === 'kepler') {
    const alt = Math.floor(Math.random() * 400) + 500; // 500 to 900 km
    const a = (6371 + alt) * 1000;
    const gm = 3.986004e14;
    const periodMin = (2 * Math.PI * Math.sqrt(Math.pow(a, 3) / gm)) / 60;
    const ans = parseFloat(periodMin.toFixed(1));

    state.drillCurrent = {
      type: 'kepler',
      answer: ans,
      tolerance: 0.5,
      prompt: `A polar environmental satellite orbits at an altitude of h = ${alt} km. (Earth radius R_E = 6371 km, GM = 3.986×10¹⁴ m³/s²). Calculate the orbital period T in minutes.`,
      inputLabel: "Orbital Period T (minutes):",
      explanation: `a = ${(6371 + alt) * 1000} m. T = 2π√(a³ / GM) = ${(periodMin * 60).toFixed(0)} s = ${ans} minutes.`
    };
  } else {
    // NDVI
    const red = (Math.floor(Math.random() * 20) + 3) / 100; // 0.03 to 0.23
    const nir = (Math.floor(Math.random() * 40) + 40) / 100; // 0.40 to 0.80
    const ans = parseFloat(((nir - red) / (nir + red)).toFixed(2));

    state.drillCurrent = {
      type: 'ndvi',
      answer: ans,
      tolerance: 0.03,
      prompt: `A satellite radiometer records surface reflectance over farmland: Red = ${red.toFixed(2)}, Near-Infrared (NIR) = ${nir.toFixed(2)}. Calculate the NDVI value to two decimal places.`,
      inputLabel: "Calculated NDVI:",
      explanation: `NDVI = (${nir.toFixed(2)} - ${red.toFixed(2)}) / (${nir.toFixed(2)} + ${red.toFixed(2)}) = ${ans}.`
    };
  }

  document.getElementById('drill-prompt').textContent = state.drillCurrent.prompt;
  document.getElementById('drill-input-label').textContent = state.drillCurrent.inputLabel;
}

function checkDrillAnswer() {
  if (!state.drillCurrent) return;
  const userVal = parseFloat(document.getElementById('drill-user-input').value);
  if (isNaN(userVal)) {
    alert("Please enter a valid numeric value.");
    return;
  }

  state.drillTotal++;
  const diff = Math.abs(userVal - state.drillCurrent.answer);
  const isCorrect = diff <= state.drillCurrent.tolerance;

  if (isCorrect) state.drillScore++;

  document.getElementById('drill-score').textContent = state.drillScore;
  document.getElementById('drill-total').textContent = state.drillTotal;

  const box = document.getElementById('drill-feedback-box');
  const title = document.getElementById('drill-feedback-title');
  const text = document.getElementById('drill-feedback-text');

  box.classList.add('visible');
  if (isCorrect) {
    title.className = 'feedback-title correct';
    title.innerHTML = `✅ Excellent! Correct Answer: ${state.drillCurrent.answer}`;
  } else {
    title.className = 'feedback-title incorrect';
    title.innerHTML = `❌ Incorrect. Exact Answer: ${state.drillCurrent.answer} (You entered: ${userVal})`;
  }
  text.textContent = state.drillCurrent.explanation;
}

// ================= PRACTICE EXAM CONTROLLER =================
function initPracticeExam() {
  // Setup Station pills
  const navPills = document.getElementById('station-nav-pills');
  navPills.innerHTML = '';

  PRACTICE_STATIONS.forEach((st, idx) => {
    const btn = document.createElement('button');
    btn.className = `station-pill-btn ${idx === state.examStationIndex ? 'active' : ''}`;
    btn.textContent = `Station ${st.stationNumber}`;
    btn.onclick = () => switchExamStation(idx);
    navPills.appendChild(btn);
  });

  renderExamStation();
  startExamTimer();
}

function switchExamStation(idx) {
  state.examStationIndex = idx;
  document.querySelectorAll('.station-pill-btn').forEach((b, i) => {
    if (i === idx) b.classList.add('active');
    else b.classList.remove('active');
  });
  renderExamStation();
}

function renderExamStation() {
  const st = PRACTICE_STATIONS[state.examStationIndex];
  const container = document.getElementById('exam-station-container');

  container.innerHTML = `
    <div style="border-bottom: 1px solid var(--border-dim); padding-bottom: 16px; margin-bottom: 24px;">
      <span class="badge badge-indigo" style="margin-bottom: 8px;">Station ${st.stationNumber} of 6</span>
      <h3 style="font-size: 20px; font-weight: 700; color: #fff;">${st.title}</h3>
      <p style="font-size: 13.5px; color: var(--text-muted); margin-top: 4px;">${st.scenario}</p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 28px;">
      ${st.questions.map((q, qIdx) => {
        const userChoice = state.examAnswers[q.qId];
        return `
          <div style="background: var(--bg-deep); border: 1px solid var(--border-dim); border-radius: 10px; padding: 22px;">
            <div style="font-size: 14px; font-weight: 700; color: var(--cyan); margin-bottom: 8px;">
              Question ${st.stationNumber}.${qIdx + 1}
            </div>
            <p style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 16px; line-height: 1.5;">${q.prompt}</p>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${q.options.map((opt, oIdx) => `
                <button class="option-btn ${userChoice === oIdx ? 'selected' : ''}" 
                  onclick="selectExamAnswer('${q.qId}', ${oIdx})">
                  <div class="option-marker">${['A','B','C','D'][oIdx]}</div>
                  <div>${opt}</div>
                </button>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <div style="display: flex; justify-content: space-between; margin-top: 28px;">
      <button class="btn btn-secondary" onclick="switchExamStation(Math.max(0, state.examStationIndex - 1))" ${state.examStationIndex === 0 ? 'disabled' : ''}>
        ← Previous Station
      </button>
      <button class="btn btn-primary" onclick="switchExamStation(Math.min(5, state.examStationIndex + 1))" ${state.examStationIndex === 5 ? 'disabled' : ''}>
        Next Station →
      </button>
    </div>
  `;
}

function selectExamAnswer(qId, oIdx) {
  if (state.examSubmitted) return;
  state.examAnswers[qId] = oIdx;
  renderExamStation();

  const answeredCount = Object.keys(state.examAnswers).length;
  document.getElementById('exam-progress-counter').textContent = `Answered: ${answeredCount} / 24`;
}

function startExamTimer() {
  if (state.examTimerInterval) clearInterval(state.examTimerInterval);
  state.examTimerRunning = true;

  state.examTimerInterval = setInterval(() => {
    if (!state.examTimerRunning) return;
    if (state.examTimerSeconds > 0) {
      state.examTimerSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(state.examTimerInterval);
      alert("Time is up! Submitting exam automatically...");
      submitPracticeExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(state.examTimerSeconds / 60);
  const s = state.examTimerSeconds % 60;
  document.getElementById('exam-timer-display').textContent = 
    `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function toggleExamTimer() {
  state.examTimerRunning = !state.examTimerRunning;
  document.getElementById('exam-timer-toggle').textContent = 
    state.examTimerRunning ? 'Pause' : 'Resume';
}

function submitPracticeExam() {
  state.examSubmitted = true;
  state.examTimerRunning = false;
  clearInterval(state.examTimerInterval);

  let totalCorrect = 0;
  let totalQuestions = 0;

  const reviewContainer = document.getElementById('exam-review-questions-list');
  reviewContainer.innerHTML = '';

  PRACTICE_STATIONS.forEach(st => {
    st.questions.forEach((q, qIdx) => {
      totalQuestions++;
      const userChoice = state.examAnswers[q.qId];
      const isCorrect = userChoice === q.correct;
      if (isCorrect) totalCorrect++;

      const item = document.createElement('div');
      item.style.background = 'var(--bg-deep)';
      item.style.border = `1px solid ${isCorrect ? 'var(--emerald)' : 'var(--rose)'}`;
      item.style.borderRadius = '8px';
      item.style.padding = '18px';
      item.style.marginBottom = '14px';

      item.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <strong style="color: #fff; font-size: 14px;">Station ${st.stationNumber} • Question ${qIdx + 1}</strong>
          <span class="badge ${isCorrect ? 'badge-emerald' : 'badge-rose'}">
            ${isCorrect ? '✅ Correct' : '❌ Incorrect'}
          </span>
        </div>
        <p style="font-size: 13.5px; color: #cbd5e1; margin-bottom: 8px;">${q.prompt}</p>
        <div style="font-size: 13px; margin-bottom: 4px;">
          Your choice: <span style="color: ${isCorrect ? 'var(--emerald)' : 'var(--rose)'}; font-weight: 600;">
            ${userChoice !== undefined ? q.options[userChoice] : 'Not Answered'}
          </span>
        </div>
        <div style="font-size: 13px; color: var(--emerald); font-weight: 600; margin-bottom: 6px;">
          Correct Answer: ${q.options[q.correct]}
        </div>
        <div style="font-size: 12.5px; color: var(--text-dim); background: rgba(255,255,255,0.03); padding: 8px; border-radius: 4px;">
          ${q.explanation}
        </div>
      `;
      reviewContainer.appendChild(item);
    });
  });

  const pct = Math.round((totalCorrect / totalQuestions) * 100);
  document.getElementById('exam-score-text').textContent = `Final Score: ${totalCorrect} / ${totalQuestions} (${pct}%)`;

  let badgeIcon = "🎯";
  let tierDesc = "";
  if (pct >= 85) {
    badgeIcon = "🏆";
    tierDesc = "National Tier Champion! Outstanding test-taking speed and accuracy across all stations.";
  } else if (pct >= 70) {
    badgeIcon = "🥈";
    tierDesc = "State Contender! Solid score. Review missed questions below to push towards top rank.";
  } else {
    badgeIcon = "🥉";
    tierDesc = "Good practice effort. Re-study the Guided Learning modules for the questions you missed.";
  }

  document.getElementById('exam-score-icon').textContent = badgeIcon;
  document.getElementById('exam-score-desc').textContent = tierDesc;
  document.getElementById('exam-results-container').style.display = 'block';

  window.scrollTo({ top: document.getElementById('exam-results-container').offsetTop - 80, behavior: 'smooth' });
}

// ================= PRINTABLE BINDER CHEAT SHEET =================
function renderPrintableCheatSheet() {
  const container = document.getElementById('printable-cheat-content');
  container.innerHTML = `
    <div style="border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 20px;">
      <h1 style="font-size: 22px; font-weight: 800; color: #0f172a; text-transform: uppercase;">
        Science Olympiad Division C — Remote Sensing Master Cheat Sheet
      </h1>
      <p style="font-size: 11.5px; color: #475569;">
        2026-2027 Season Reference • Climate Change & Earth Systems • Built with OrbitSense Div C
      </p>
    </div>

    <!-- Section 1: Universal Physical Constants -->
    <h3 style="font-size: 14px; font-weight: 700; margin-top: 14px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">
      1. FUNDAMENTAL PHYSICAL CONSTANTS & CONVERSIONS
    </h3>
    <table class="cheat-table">
      <thead>
        <tr>
          <th>Constant Name</th>
          <th>Symbol</th>
          <th>Standard Value</th>
          <th>TI-84 Variable</th>
          <th>Usage Note</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Stefan-Boltzmann Constant</td>
          <td>σ (sigma)</td>
          <td>5.670374 × 10⁻⁸ W/(m²·K⁴)</td>
          <td>5.6704E-8 -> S</td>
          <td>E = σT⁴ (Temperature MUST be in Kelvin!)</td>
        </tr>
        <tr>
          <td>Solar Constant at 1 AU</td>
          <td>S₀</td>
          <td>1361 W/m² (Earth mean)</td>
          <td>1361 -> F</td>
          <td>Divide by 4 for average absorbed flux: (1-α)S₀/4</td>
        </tr>
        <tr>
          <td>Wien's Displacement Constant</td>
          <td>b</td>
          <td>2898 µm·K (2.898 × 10⁻³ m·K)</td>
          <td>2898 -> B</td>
          <td>λ_max = 2898 / T (outputs wavelength directly in µm)</td>
        </tr>
        <tr>
          <td>Speed of Light in Vacuum</td>
          <td>c</td>
          <td>2.997925 × 10⁸ m/s</td>
          <td>2.9979E8 -> C</td>
          <td>Radar range: d = c·Δt / 2</td>
        </tr>
        <tr>
          <td>Planck's Constant</td>
          <td>h</td>
          <td>6.62607 × 10⁻³⁴ J·s</td>
          <td>6.626E-34 -> H</td>
          <td>Photon energy: E = h·ν = hc / λ</td>
        </tr>
        <tr>
          <td>Mean Volumetric Earth Radius</td>
          <td>R_E</td>
          <td>6,371 km (6.371 × 10⁶ m)</td>
          <td>6.371E6 -> R</td>
          <td>Area disk = πR²; Area sphere = 4πR²</td>
        </tr>
        <tr>
          <td>Geocentric Gravitational Constant</td>
          <td>GM_E (μ)</td>
          <td>3.986004 × 10¹⁴ m³/s²</td>
          <td>3.986E14 -> M</td>
          <td>Kepler period: T = 2π√((R+h)³ / GM)</td>
        </tr>
      </tbody>
    </table>

    <!-- Section 2: Core Mathematical Equations -->
    <h3 style="font-size: 14px; font-weight: 700; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">
      2. MASTER FORMULA QUICK-REFERENCE & CALCULATOR SYNTAX
    </h3>
    <table class="cheat-table">
      <thead>
        <tr>
          <th>Topic / Law</th>
          <th>Standard Equation</th>
          <th>TI-84 One-Liner Keystroke</th>
          <th>Exam Traps & Crucial Tips</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bare-Planet Equilibrium (0-D EBM)</td>
          <td>T_e = [ (1 - α)S₀ / (4σ) ]^(1/4)</td>
          <td>((1 - A)*F / (4*S)) ^ 0.25</td>
          <td>Factor of 4 comes from Sphere Area / Disk Area (4πR² / πR² = 4). Earth Te ≈ 255 K (-18°C).</td>
        </tr>
        <tr>
          <td>1-Layer Greenhouse Atmosphere</td>
          <td>T_s = 2^(1/4) · T_e ≈ 1.189 · T_e<br>(with ε: T_s = [1/(1 - ε/2)]^(1/4) · T_e)</td>
          <td>2^0.25 * Te  or<br>((1 - A)*F / (4*S*(1 - E/2)))^0.25</td>
          <td>Atmosphere radiates EQUALLY up and down (factor of 2). Perfect layer yields Ts ≈ 303 K.</td>
        </tr>
        <tr>
          <td>N-Layer Atmosphere Model</td>
          <td>T_s = (N + 1)^(1/4) · T_e</td>
          <td>(N + 1)^0.25 * Te</td>
          <td>For N opaque layers (Venus runaway greenhouse model).</td>
        </tr>
        <tr>
          <td>Wien's Displacement Law</td>
          <td>λ_max = 2898 / T (µm)</td>
          <td>2898 / T</td>
          <td>Sun (5778 K) peaks at 0.50 µm (Visible). Earth (288 K) peaks at 10.06 µm (Thermal IR).</td>
        </tr>
        <tr>
          <td>CO2 Radiative Forcing</td>
          <td>ΔF = 5.35 · ln(C / C₀) [W/m²]</td>
          <td>5.35 * ln(C / C0)</td>
          <td>Doubling CO2 (e.g. 280 to 560 ppm) yields ΔF = 5.35 · ln(2) ≈ 3.71 W/m².</td>
        </tr>
        <tr>
          <td>Kepler Satellite Orbital Period</td>
          <td>T = 2π · √((R_E + h)³ / GM)</td>
          <td>2*π*√((R + H*1000)^3 / M) / 60</td>
          <td>Outputs period in minutes. Orbits per day = 1440 / T(min). For 705 km, T = 98.8 min (14.6 rev/day).</td>
        </tr>
        <tr>
          <td>Radar Altimetry Range & SSH</td>
          <td>d = c·Δt / 2<br>SSH = H_sat - d - Geoid</td>
          <td>C * T / 2</td>
          <td>Two-way pulse: divide by 2! Warm water expands thermally -> positive SSH anomaly in El Niño.</td>
        </tr>
        <tr>
          <td>Vegetation & Spectral Indices</td>
          <td>NDVI = (NIR - Red) / (NIR + Red)<br>NDSI = (Green - SWIR) / (Green + SWIR)</td>
          <td>(N - R) / (N + R)</td>
          <td>Water has negative NDVI. Healthy forest: 0.6 - 0.85. NDSI > 0.4 distinguishes snow from clouds!</td>
        </tr>
      </tbody>
    </table>

    <!-- Section 3: Satellite Constellations Directory -->
    <h3 style="font-size: 14px; font-weight: 700; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">
      3. NASA & INTERNATIONAL SATELLITE FLEET CHEAT MATRIX
    </h3>
    <table class="cheat-table">
      <thead>
        <tr>
          <th>Satellite</th>
          <th>Orbit / Altitude</th>
          <th>Active/Passive</th>
          <th>Key Sensors</th>
          <th>Primary Climate Observable & Science Mission</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Aqua</strong></td>
          <td>Sun-sync 705 km, 1:30 PM</td>
          <td>Passive</td>
          <td>MODIS, AIRS, CERES, AMSR-E</td>
          <td>Global water cycle, SST, atmospheric temperature/CO2 soundings, TOA radiation budget.</td>
        </tr>
        <tr>
          <td><strong>Aura</strong></td>
          <td>Sun-sync 705 km, 1:45 PM</td>
          <td>Passive</td>
          <td>OMI, MLS, TES, HIRDLS</td>
          <td>Ozone hole recovery, stratospheric chlorine (ClO), tropospheric pollution (NO2, SO2).</td>
        </tr>
        <tr>
          <td><strong>CloudSat</strong></td>
          <td>Sun-sync 705 km (688 km)</td>
          <td>ACTIVE Radar</td>
          <td>CPR (94 GHz W-band)</td>
          <td>Cloud Profiling Radar. Measures vertical profiles of cloud liquid water and ice.</td>
        </tr>
        <tr>
          <td><strong>CALIPSO</strong></td>
          <td>Sun-sync 705 km (688 km)</td>
          <td>ACTIVE Lidar</td>
          <td>CALIOP (532 & 1064 nm)</td>
          <td>Cloud-Aerosol Lidar with Orthogonal Polarization. Profiles aerosols, smoke, PSCs.</td>
        </tr>
        <tr>
          <td><strong>OCO-2</strong></td>
          <td>Sun-sync 705 km, 1:36 PM</td>
          <td>Passive</td>
          <td>3 Grating Spectrometers</td>
          <td>Measures column-averaged dry air CO2 (XCO2) using 0.76 µm O2-A, 1.61 µm, and 2.06 µm bands.</td>
        </tr>
        <tr>
          <td><strong>Terra</strong></td>
          <td>Sun-sync 705 km, 10:30 AM</td>
          <td>Passive</td>
          <td>MODIS, ASTER, CERES, MISR</td>
          <td>Morning EOS flagship. Multi-angle aerosols (MISR), stereo DEMs (ASTER), daily NDVI (MODIS).</td>
        </tr>
        <tr>
          <td><strong>Landsat 8 & 9</strong></td>
          <td>Sun-sync 705 km, 16-day</td>
          <td>Passive</td>
          <td>OLI (30m VNIR), TIRS (100m TIR)</td>
          <td>Long-term high-res land use change, deforestation, urban heat, NDVI time-series.</td>
        </tr>
        <tr>
          <td><strong>GOES-16/18</strong></td>
          <td>Geostationary 35,786 km</td>
          <td>Passive</td>
          <td>ABI (16 channels), GLM</td>
          <td>Rapid 30s - 5min weather, severe storm updrafts, 3.9 µm wildfire detection.</td>
        </tr>
        <tr>
          <td><strong>GRACE & GRACE-FO</strong></td>
          <td>Polar LEO ~490 km (tandem)</td>
          <td>ACTIVE Gravimeter</td>
          <td>K-band Ranging / LRI Laser</td>
          <td>Measures inter-satellite distance to map monthly gravity changes: groundwater loss, ice sheet melt.</td>
        </tr>
        <tr>
          <td><strong>Jason-3 / Sentinel-6</strong></td>
          <td>Non-sun-sync 1336 km, 66°</td>
          <td>ACTIVE Radar</td>
          <td>Poseidon Dual-Freq Altimeter</td>
          <td>Measures Sea Surface Height (SSH) to within 1-2 cm: global sea level rise (~3.4 mm/yr), ENSO Kelvin waves.</td>
        </tr>
        <tr>
          <td><strong>Sentinel-5P</strong></td>
          <td>Sun-sync 824 km</td>
          <td>Passive</td>
          <td>TROPOMI Spectrometer</td>
          <td>High-resolution global daily mapping of tropospheric NO2, methane (CH4) super-emitters, SO2.</td>
        </tr>
        <tr>
          <td><strong>ICESat-2</strong></td>
          <td>Non-sun-sync 496 km</td>
          <td>ACTIVE Lidar</td>
          <td>ATLAS (532 nm green laser)</td>
          <td>Photon-counting laser altimeter: Greenland & Antarctic ice sheet thinning, sea ice freeboard.</td>
        </tr>
      </tbody>
    </table>

    <!-- Section 4: Climate Cycles & Dynamics Matrix -->
    <h3 style="font-size: 14px; font-weight: 700; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px;">
      4. CLIMATE DYNAMICS & REMOTE SENSING PHENOMENA
    </h3>
    <table class="cheat-table">
      <thead>
        <tr>
          <th>Phenomenon</th>
          <th>Physical Mechanism</th>
          <th>Remote Sensing Signature & Instrument</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>El Niño (ENSO)</strong></td>
          <td>Trade winds relax/reverse; warm pool shifts east; thermocline flattens; upwelling shuts down off Peru.</td>
          <td>Jason-3 radar altimeter detects positive SSH (+15 to +25 cm); MODIS/VIIRS detects positive SST anomaly. Negative SOI.</td>
        </tr>
        <tr>
          <td><strong>La Niña</strong></td>
          <td>Strong easterlies; steep thermocline; intensified upwelling; prominent cold tongue across equatorial Pacific.</td>
          <td>Negative SSH anomaly (-10 to -20 cm); negative SST anomaly in Niño 3.4. Positive SOI.</td>
        </tr>
        <tr>
          <td><strong>Ice-Albedo Feedback</strong></td>
          <td>Positive feedback: warming melts ice (albedo 0.7-0.85) exposing dark seawater (albedo 0.06), absorbing more heat.</td>
          <td>CryoSat-2 and ICESat-2 track sea ice thickness; AMSR2 / MODIS map declining minimum sea ice extent (September Arctic).</td>
        </tr>
        <tr>
          <td><strong>Keeling Curve Cycle</strong></td>
          <td>Sinusoidal sawtooth: minimum in October (NH summer forest photosynthesis drawdown); peak in May (winter microbial decay).</td>
          <td>OCO-2 tracks regional XCO2 drawdown across boreal summer forests; Mauna Loa in-situ measurements (>425 ppm).</td>
        </tr>
        <tr>
          <td><strong>Antarctic Ozone Hole</strong></td>
          <td>Winter polar vortex isolates extreme cold (<-78°C); PSCs form and convert inert chlorine reservoirs to Cl2; spring sunlight photolyzes Cl2 -> Cl· radicals.</td>
          <td>Aura OMI / OMPS maps the spring (Sept-Oct) ozone hole (<220 Dobson Units); Aura MLS detects elevated ClO radicals.</td>
        </tr>
      </tbody>
    </table>
  `;
}

function printCheatSheet() {
  switchTab('cheat-sheet');
  setTimeout(() => {
    window.print();
  }, 250);
}

function updateLiveGreenhouseWidget() {
  const layers = parseInt(document.getElementById('live-gh-layers-slider').value);
  const eps = parseFloat(document.getElementById('live-gh-eps-slider').value);
  const te = 254.9;

  document.getElementById('live-gh-layers-val').textContent = layers === 1 ? '1 layer' : (layers === 0 ? '0 layers (bare)' : layers + ' layers');
  document.getElementById('live-gh-eps-val').textContent = eps.toFixed(2);

  let ts = te;
  let ratio = 1.0;
  if (layers === 0) {
    ts = te;
    ratio = 1.0;
  } else if (layers === 1) {
    ratio = Math.pow(1 / (1 - (eps / 2)), 0.25);
    ts = te * ratio;
  } else {
    ratio = Math.pow(layers + 1, 0.25);
    ts = te * ratio;
  }

  const tsC = ts - 273.15;
  document.getElementById('live-gh-ts-val').textContent = ts.toFixed(1) + ' K (' + tsC.toFixed(1) + '°C)';
  document.getElementById('live-gh-ta-val').textContent = '254.9 K (-18.3°C)';
  document.getElementById('live-gh-ratio-val').textContent = ratio.toFixed(3) + ' × T_e';
}

function updateLiveNdviWidget() {
  const red = parseFloat(document.getElementById('live-ndvi-red-slider').value);
  const nir = parseFloat(document.getElementById('live-ndvi-nir-slider').value);

  document.getElementById('live-ndvi-red-val').textContent = red.toFixed(2);
  document.getElementById('live-ndvi-nir-val').textContent = nir.toFixed(2);

  const ndvi = (nir - red) / (nir + red);
  document.getElementById('live-ndvi-calc-val').textContent = (ndvi >= 0 ? '+' : '') + ndvi.toFixed(2);

  let diag = 'Dense Healthy Forest / Crop Canopy';
  let color = 'var(--emerald)';
  if (ndvi < 0) {
    diag = 'Deep Clear Water / Heavy Cloud';
    color = '#60a5fa';
  } else if (ndvi < 0.2) {
    diag = 'Bare Soil / Rock / Built Concrete';
    color = 'var(--amber)';
  } else if (ndvi < 0.5) {
    diag = 'Stressed Crops / Shrubland / Grass';
    color = '#facc15';
  }
  const classValElem = document.getElementById('live-ndvi-class-val');
  classValElem.textContent = diag;
  classValElem.style.color = color;
}

function setLiveKeelingMonth(m) {
  const box = document.getElementById('live-keeling-box');
  if (m === 'May') {
    box.innerHTML = '<strong>May (Peak 🔺):</strong> Highest point in annual cycle (~427 ppm). Northern Hemisphere winter respiration has released carbon for 6 months without vegetative uptake.';
  } else if (m === 'Oct') {
    box.innerHTML = '<strong>October (Trough 🔻):</strong> Lowest point in annual cycle (~421 ppm). Northern deciduous forests and boreal taiga have drawn down tens of gigatons of CO2 via photosynthesis.';
  } else if (m === 'Jul') {
    box.innerHTML = '<strong>July (Rapid Drawdown 📉):</strong> Peak photosynthesis rate across North American and Eurasian forests; CO2 is falling rapidly.';
  } else if (m === 'Jan') {
    box.innerHTML = '<strong>January (Winter Accumulation 📈):</strong> Deciduous leaves have fallen; microbial decay dominates; CO2 concentration is climbing steadily.';
  } else {
    box.innerHTML = '<strong>' + m + ':</strong> Transition period between photosynthetic carbon uptake and respiratory release.';
  }
}

function updateLiveOrbitWidget() {
  const h = parseFloat(document.getElementById('live-orb-alt-slider').value);
  document.getElementById('live-orb-alt-val').textContent = h >= 30000 ? h + ' km (Geostationary)' : h + ' km';

  const re = 6371;
  const a = (re + h) * 1000;
  const gm = 3.986004e14;
  const periodSec = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / gm);
  const periodMin = periodSec / 60;
  const velKms = Math.sqrt(gm / a) / 1000;
  const passes = 1440 / periodMin;

  document.getElementById('live-orb-per-val').textContent = periodMin >= 120 ? (periodMin / 60).toFixed(1) + ' hrs' : periodMin.toFixed(1) + ' min';
  document.getElementById('live-orb-vel-val').textContent = velKms.toFixed(2) + ' km/s';
  document.getElementById('live-orb-pass-val').textContent = passes.toFixed(2) + ' rev/day';
}
