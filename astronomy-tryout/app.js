/* ============================================================
   Astronomy C cram app — rendering, drills, graph generation
   ============================================================ */

const STORE_KEY = "astroC2026";
let S = { right: {}, wrong: {}, seen: {} };
try { S = Object.assign(S, JSON.parse(localStorage.getItem(STORE_KEY) || "{}")); } catch (e) {}
const save = () => localStorage.setItem(STORE_KEY, JSON.stringify(S));
const mark = (id, ok) => { S.seen[id] = 1; if (ok) { S.right[id] = (S.right[id] || 0) + 1; delete S.wrong[id]; } else { S.wrong[id] = (S.wrong[id] || 0) + 1; delete S.right[id]; } save(); };
const isWeak = id => (S.wrong[id] || 0) > 0 && !(S.right[id] > S.wrong[id]);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* ---------- tabs ---------- */
document.querySelectorAll("[data-tab]").forEach(b => b.onclick = () => {
  document.querySelectorAll("[data-tab]").forEach(x => x.classList.remove("active"));
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  b.classList.add("active");
  document.getElementById("tab-" + b.dataset.tab).classList.add("active");
  window.scrollTo(0, 0);
});

/* ============================================================
   1. LEARN MODULES
   ============================================================ */
function renderModules() {
  const box = document.getElementById("modules");
  box.innerHTML = MODULES.map(m => `
    <details class="mod" id="mod-${m.id}">
      <summary><b>${m.title}</b> <span class="pill">${m.mins} min</span> <span class="pill alt">${m.tag}</span></summary>
      <div class="modbody">
        <ul>${m.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
        <div class="must"><h4>If you only remember 5 things</h4><ol>${m.must.map(x => `<li>${x}</li>`).join("")}</ol></div>
      </div>
    </details>`).join("");
}

/* ============================================================
   2. DSO TRAINER
   ============================================================ */
let dsoMode = "img2name", dsoQueue = [], dsoIdx = 0, dsoPicked = null, dsoAnswered = false;

function renderDsoCards() {
  document.getElementById("dso-cards").innerHTML = DSO.map(d => `
    <div class="card dso">
      <img src="${d.img}" alt="${esc(d.name)}" loading="lazy">
      <div class="cardbody">
        <h3>${d.name} ${d.aka ? `<span class="aka">a.k.a. ${d.aka}</span>` : ""}</h3>
        <table class="kv">
          <tr><td>Type</td><td>${d.type}</td></tr>
          <tr><td>Constellation</td><td>${d.con}</td></tr>
          <tr><td>Distance</td><td>${d.dist}</td></tr>
          <tr><td>RA / Dec</td><td>${d.radec}</td></tr>
          <tr><td>Magnitude</td><td>${d.mag}</td></tr>
        </table>
        <p class="sub"><b>Recognize it by:</b></p>
        <ul class="tight">${d.idCues.map(c => `<li>${c}</li>`).join("")}</ul>
        <p class="sub"><b>Facts:</b></p>
        <ul class="tight">${d.facts.map(c => `<li>${c}</li>`).join("")}</ul>
        <p class="sub"><b>Likely questions:</b></p>
        <details class="qa"><summary>Show ${d.qa.length} Q&amp;A</summary>
          ${d.qa.map(([q, a]) => `<p class="q">Q: ${q}</p><p class="a">A: ${a}</p>`).join("")}
        </details>
      </div>
    </div>`).join("");
}

function newDsoRound() {
  dsoQueue = shuffle(DSO.map(d => d.id));
  dsoIdx = 0; dsoAnswered = false; drawDso();
}
function drawDso() {
  const id = dsoQueue[dsoIdx % dsoQueue.length];
  dsoPicked = DSO.find(d => d.id === id);
  dsoAnswered = false;
  const opts = shuffle([dsoPicked, ...shuffle(DSO.filter(d => d.id !== id)).slice(0, 5)]);
  document.getElementById("dso-quiz").innerHTML = `
    <div class="qhead">${(dsoIdx % dsoQueue.length) + 1} / ${dsoQueue.length} · name this object <span class="pill">${dsoPicked.tag}</span></div>
    <img class="hero" src="${dsoPicked.img}" alt="deep sky object">
    <div class="opts">${opts.map(o => `<button class="opt" data-id="${o.id}">${o.name}</button>`).join("")}</div>
    <div id="dso-fb" class="fb"></div>
    <div class="row"><button class="ghost" id="dso-next">Next →</button>
    <button class="ghost" id="dso-again">↻ Restart round</button></div>`;
  document.querySelectorAll("#dso-quiz .opt").forEach(b => b.onclick = () => pickDso(b));
  document.getElementById("dso-next").onclick = () => { dsoIdx++; drawDso(); };
  document.getElementById("dso-again").onclick = newDsoRound;
}
function pickDso(btn) {
  if (dsoAnswered) return; dsoAnswered = true;
  const ok = btn.dataset.id === dsoPicked.id;
  mark("dso-" + dsoPicked.id, ok);
  document.querySelectorAll("#dso-quiz .opt").forEach(o => {
    if (o.dataset.id === dsoPicked.id) o.classList.add("good");
    else if (o === btn) o.classList.add("bad");
  });
  const d = dsoPicked;
  document.getElementById("dso-fb").innerHTML = `
    <div class="${ok ? "ok" : "no"}">${ok ? "Correct" : "It's " + d.name}</div>
    <div class="recap"><b>${d.name}</b> — ${d.type}. ${d.con} · ${d.dist}<br>
    ${d.facts.slice(0, 3).map(f => "• " + f).join("<br>")}</div>`;
}

/* ============================================================
   3. GRAPH DRILL  (procedurally drawn on canvas)
   ============================================================ */
function setupCanvas(c) {
  const dpr = window.devicePixelRatio || 1, w = c.clientWidth, h = 260;
  c.width = w * dpr; c.height = h * dpr; c.style.height = h + "px";
  const g = c.getContext("2d"); g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.clearRect(0, 0, w, h);
  g.fillStyle = "#0b1020"; g.fillRect(0, 0, w, h);
  return { g, w, h };
}
function axes(g, w, h, pad, xlab, ylab) {
  g.strokeStyle = "#7c8bb5"; g.fillStyle = "#c7d2f0"; g.lineWidth = 1.2;
  g.beginPath(); g.moveTo(pad.l, pad.t); g.lineTo(pad.l, h - pad.b); g.lineTo(w - pad.r, h - pad.b); g.stroke();
  g.font = "12px system-ui"; g.textAlign = "center";
  g.fillText(xlab, (pad.l + w - pad.r) / 2, h - 6);
  g.save(); g.translate(12, (pad.t + h - pad.b) / 2); g.rotate(-Math.PI / 2); g.fillText(ylab, 0, 0); g.restore();
}

/* --- HR diagram --- */
const MS_PTS = [[3000, 0.001], [4000, 0.02], [5772, 1], [7000, 5], [10000, 40], [15000, 500], [25000, 1e4], [42000, 1.2e5]];
const band = (pts, f) => pts.map(p => [p[0], p[1] * f]).concat(pts.slice().reverse().map(p => [p[0], p[1] / f]));
const HR_ZONES = [
  { name: "Main sequence", short: "MS", pts: band(MS_PTS, 3.5) },
  { name: "Red giants", short: "RG", pts: [[3000, 20], [4000, 30], [5000, 60], [5200, 300], [4800, 800], [3800, 1500], [3200, 900], [3000, 200]] },
  { name: "Supergiants", short: "SG", pts: [[3000, 4e3], [6000, 3e3], [12000, 8e3], [25000, 5e4], [35000, 3e5], [15000, 5e5], [5000, 5e5], [3200, 4e5]] },
  { name: "White dwarfs", short: "WD", pts: [[5000, 8e-5], [30000, 1e-3], [45000, 2e-2], [42000, 2e-1], [15000, 3e-1], [6000, 5e-2]] }
];
function hrX(T, pad, w) { const a = Math.log10(45000), b = Math.log10(2800); let t = (Math.log10(T) - a) / (b - a); return pad.l + t * (w - pad.l - pad.r); }
function hrY(L, pad, h) { const a = -4.2, b = 6.2; let t = (Math.log10(L) - a) / (b - a); return h - pad.b - t * (h - pad.t - pad.b); }

function drawHR(c, zone, star) {
  const { g, w, h } = setupCanvas(c); const pad = { l: 46, r: 12, t: 12, b: 34 };
  g.font = "11px system-ui"; g.fillStyle = "#8b9ac4";
  [45000, 20000, 10000, 6000, 4000, 3000].forEach(T => { const x = hrX(T, pad, w); g.fillText(T, x, h - pad.b + 14); });
  [1e6, 1e4, 1e2, 1, 1e-2, 1e-4].forEach(L => { const y = hrY(L, pad, h); g.textAlign = "right"; g.fillText("10^" + Math.round(Math.log10(L)), pad.l - 6, y + 4); g.textAlign = "center"; });
  axes(g, w, h, pad, "Surface temperature (K)  →  hot … cool", "Luminosity (L☉)");
  HR_ZONES.forEach(z => {
    g.beginPath(); z.pts.forEach((p, i) => i ? g.lineTo(hrX(p[0], pad, w), hrY(p[1], pad, h)) : g.moveTo(hrX(p[0], pad, w), hrY(p[1], pad, h)));
    g.closePath(); g.fillStyle = (z.short === zone) ? "rgba(255,196,84,.35)" : "rgba(120,150,255,.13)"; g.fill();
    g.strokeStyle = (z.short === zone) ? "#ffc454" : "rgba(150,175,255,.35)"; g.lineWidth = (z.short === zone) ? 2 : 1; g.stroke();
  });
  const sx = hrX(star[0], pad, w), sy = hrY(star[1], pad, h);
  g.beginPath(); g.arc(sx, sy, 7, 0, 7); g.fillStyle = "#fff"; g.fill(); g.strokeStyle = "#ff5c7a"; g.lineWidth = 2.5; g.stroke();
  g.fillStyle = "#fff"; g.font = "12px system-ui"; g.fillText(star[2] || "★", sx, sy - 12);
}
const HR_STARS = {
  MS: [[5772, 1, "Sun"], [9800, 40, "A star"], [30000, 5e4, "B star"], [3400, 0.008, "M dwarf"], [20000, 8e3, "B star"], [7000, 4, "F star"]],
  RG: [[4000, 200, "Giant"], [3500, 500, "Giant"], [4800, 80, "Giant"], [3300, 800, "Giant"]],
  SG: [[4000, 5e4, "Supergiant"], [15000, 1e5, "Blue SG"], [6000, 1.5e5, "Hypergiant"], [3300, 3e5, "Red SG"]],
  WD: [[12000, 5e-3, "WD"], [25000, 2e-2, "WD"], [8000, 1e-3, "WD"], [40000, 8e-2, "WD"]]
};

/* --- light curves (2027 scope: Cepheids, RR Lyrae, Type Ia, eclipsing binaries) --- */
const LC = {
  cepheid: { f: t => { const p = 10, ph = (t % p) / p; return 6 + 1.1 * (0.5 + 0.5 * Math.sin(2 * Math.PI * (ph - 0.15))) * (1 - 0.35 * ph); }, xmax: 40, xlab: "Time (days)", lab: "Cepheid variable" },
  rrlyrae: { f: t => { const p = 0.6, ph = (t % p) / p; return 12 + 0.8 * (0.5 + 0.5 * Math.sin(2 * Math.PI * (ph - 0.12))) * (1 - 0.3 * ph); }, xmax: 2.4, xlab: "Time (days)", lab: "RR Lyrae variable" },
  typeIa: { f: t => { if (t < 18) return 16 - 8 * Math.pow(t / 18, 0.6); return 8 + 4.2 * Math.min(1, (t - 18) / 90); }, xmax: 140, xlab: "Days since explosion", lab: "Type Ia supernova" },
  eclipsing: { f: t => { const p = 2.4, ph = (t % p) / p; let m = 11.0; const dip = (c, wd, dp) => { let d = Math.abs(((ph - c + 0.5) % 1) - 0.5) * 2; return d < wd ? dp * (1 - Math.pow(d / wd, 2)) : 0; }; return m + dip(0.0, 0.10, 0.9) + dip(0.5, 0.10, 0.35); }, xmax: 9.6, xlab: "Time (days)", lab: "Eclipsing binary" }
};
function drawLC(c, kind) {
  const { g, w, h } = setupCanvas(c); const pad = { l: 46, r: 12, t: 12, b: 34 };
  const K = LC[kind], N = 900;
  let vals = []; for (let i = 0; i <= N; i++) vals.push(K.f(i / N * K.xmax));
  const min = Math.min(...vals) - 0.25, max = Math.max(...vals) + 0.25;
  const X = t => pad.l + t / K.xmax * (w - pad.l - pad.r);
  const Y = m => pad.t + (m - min) / (max - min) * (h - pad.t - pad.b);
  g.strokeStyle = "#8b9ac4"; g.fillStyle = "#8b9ac4"; g.font = "11px system-ui"; g.textAlign = "right";
  for (let k = 0; k <= 4; k++) { const m = min + k * (max - min) / 4, y = Y(m); g.fillText(m.toFixed(1), pad.l - 6, y + 4); }
  g.textAlign = "center";
  for (let k = 0; k <= 4; k++) { const t = k * K.xmax / 4; g.fillText(+t.toFixed(2), X(t), h - pad.b + 14); }
  axes(g, w, h, pad, K.xlab, "Magnitude (smaller = brighter)");
  g.beginPath(); vals.forEach((m, i) => { const x = X(i / N * K.xmax), y = Y(m); i ? g.lineTo(x, y) : g.moveTo(x, y); });
  g.strokeStyle = "#ffd166"; g.lineWidth = 2; g.stroke();
}

/* --- blackbody --- */
function planck(lam, T) { const h = 6.626e-34, c = 3e8, k = 1.381e-23; return (1 / Math.pow(lam * 1e-9, 5)) / (Math.exp(h * c / (lam * 1e-9 * k * T)) - 1); }
function drawBB(c, temps, highlight) {
  const { g, w, h } = setupCanvas(c); const pad = { l: 50, r: 12, t: 12, b: 34 };
  const l0 = 100, l1 = 2500, N = 500;
  const cols = ["#ffd166", "#5cc8ff", "#ff8fab"];
  let max = 0, curves = temps.map(T => { const v = []; for (let i = 0; i <= N; i++) { const lam = l0 + i / N * (l1 - l0), y = planck(lam, T); v.push(y); if (y > max) max = y; } return v; });
  const X = i => pad.l + i / N * (w - pad.l - pad.r);
  const Y = v => h - pad.b - (v / max) * (h - pad.t - pad.b);
  g.font = "11px system-ui"; g.fillStyle = "#8b9ac4"; g.textAlign = "center";
  for (let lam = 500; lam <= l1; lam += 500) g.fillText(lam, X((lam - l0) / (l1 - l0) * N), h - pad.b + 14);
  axes(g, w, h, pad, "Wavelength (nm)", "Relative intensity");
  curves.forEach((v, idx) => {
    g.beginPath(); v.forEach((y, i) => i ? g.lineTo(X(i), Y(y)) : g.moveTo(X(i), Y(y)));
    g.strokeStyle = cols[idx % 3]; g.lineWidth = (highlight === idx) ? 3.4 : 2; g.stroke();
    const pk = v.indexOf(Math.max(...v));
    g.fillStyle = cols[idx % 3]; g.font = "bold 12px system-ui";
    g.fillText(temps[idx] + " K", X(pk), Y(v[pk]) - 10);
  });
}

/* --- spectra --- */
const SPEC = {
  O: { T: 40000, lines: [[3811, "He II", 1.0], [4541, "He II", .8], [4686, "He II", .9], [4340, "Hγ", .4], [4102, "Hδ", .35]] },
  B: { T: 20000, lines: [[4471, "He I", .9], [4026, "He I", .6], [4121, "He I", .55], [4340, "Hγ", .75], [4861, "Hβ", .8]] },
  A: { T: 9500, lines: [[6563, "Hα", 1.0], [4861, "Hβ", .95], [4340, "Hγ", .9], [4102, "Hδ", .8], [3934, "Ca II", .25]] },
  F: { T: 6500, lines: [[6563, "Hα", .55], [4861, "Hβ", .5], [3934, "Ca II", .6], [3968, "Ca II", .55], [4227, "Ca I", .35], [5890, "Na D", .3]] },
  G: { T: 5700, lines: [[3934, "Ca II", 1.0], [3968, "Ca II", .95], [6563, "Hα", .45], [5890, "Na D", .6], [5170, "Mg b", .5], [4227, "Ca I", .4]] },
  K: { T: 4400, lines: [[3934, "Ca II", 1.0], [3968, "Ca II", .95], [5890, "Na D", .8], [5170, "Mg b", .7], [6563, "Hα", .3], [4950, "TiO", .4]] },
  M: { T: 3100, lines: [[4950, "TiO", 1.0], [5160, "TiO", .95], [6150, "TiO", .9], [7100, "TiO", .85], [5890, "Na D", .5], [6563, "Hα", .35]] }
};
function drawSpec(c, cls) {
  const { g, w, h } = setupCanvas(c); const pad = { l: 46, r: 12, t: 12, b: 34 };
  const l0 = 3800, l1 = 7500, T = SPEC[cls].T;
  const X = lam => pad.l + (lam - l0) / (l1 - l0) * (w - pad.l - pad.r);
  let mx = 0; for (let i = 0; i <= 300; i++) mx = Math.max(mx, planck(l0 + i / 300 * (l1 - l0), T));
  const Y = lam => Math.max(pad.t + 2, h - pad.b - (planck(lam, T) / mx) * (h - pad.t - pad.b) * 0.78);
  g.beginPath();
  for (let i = 0; i <= 400; i++) { const lam = l0 + i / 400 * (l1 - l0), x = X(lam), y = Y(lam); i ? g.lineTo(x, y) : g.moveTo(x, y); }
  g.strokeStyle = "#c7d2f0"; g.lineWidth = 1.6; g.stroke();
  SPEC[cls].lines.forEach(([lam, name, str]) => {
    const x = X(lam), yTop = Y(lam), depth = str * (h - pad.t - pad.b) * 0.40;
    g.beginPath(); g.moveTo(x, yTop); g.lineTo(x, Math.min(h - pad.b, yTop + depth));
    g.strokeStyle = name === "TiO" ? "#8affc1" : "#ff8fab"; g.lineWidth = name === "TiO" ? 4 : 2 + str * 2.5; g.stroke();
    if (str > 0.55) { g.fillStyle = "#c7d2f0"; g.font = "10px system-ui"; g.textAlign = "center"; g.fillText(name, x, pad.t + 11); }
  });
  g.font = "11px system-ui"; g.fillStyle = "#8b9ac4"; g.textAlign = "center";
  for (let lam = 4000; lam <= 7000; lam += 1000) g.fillText(lam, X(lam), h - pad.b + 14);
  axes(g, w, h, pad, "Wavelength (angstroms)", "Intensity (relative)");
  g.fillStyle = "#c7d2f0"; g.font = "12px system-ui"; g.textAlign = "right";
  g.fillText("T ≈ " + T + " K   (class " + cls + ")", w - pad.r - 4, pad.t + 12);
}

/* --- period-luminosity --- */
function drawPL(c, P, M) {
  const { g, w, h } = setupCanvas(c); const pad = { l: 50, r: 12, t: 14, b: 34 };
  const X = p => pad.l + (Math.log10(p) - Math.log10(0.4)) / (Math.log10(100) - Math.log10(0.4)) * (w - pad.l - pad.r);
  const Y = m => h - pad.b - (m + 7) / 9 * (h - pad.t - pad.b);
  g.font = "11px system-ui"; g.fillStyle = "#8b9ac4"; g.textAlign = "center";
  [0.5, 1, 5, 10, 50, 100].forEach(p => g.fillText(p, X(p), h - pad.b + 14));
  g.textAlign = "right";
  [-6, -4, -2, 0, 2].forEach(m => g.fillText(m, pad.l - 6, Y(m) + 4));
  axes(g, w, h, pad, "Period (days, log scale)", "Absolute magnitude M_V");
  g.beginPath(); g.moveTo(X(0.4), Y(-2.76 * Math.log10(0.4) - 1.4)); g.lineTo(X(100), Y(-2.76 * Math.log10(100) - 1.4));
  g.strokeStyle = "#5cc8ff"; g.lineWidth = 2.2; g.stroke();
  g.fillStyle = "#5cc8ff"; g.font = "12px system-ui"; g.textAlign = "left"; g.fillText("Cepheid P–L", X(0.6), Y(-2.76 * 0 - 1.4) - 8);
  g.beginPath(); g.arc(X(P), Y(M), 7, 0, 7); g.fillStyle = "#fff"; g.fill(); g.strokeStyle = "#ff5c7a"; g.lineWidth = 2.5; g.stroke();
  g.fillStyle = "#fff"; g.textAlign = "center"; g.fillText("P = " + P + " d", X(P), Y(M) - 14);
}

/* --- galaxy rotation curve --- */
function drawRC(c, shape, vflat) {
  const { g, w, h } = setupCanvas(c); const pad = { l: 50, r: 14, t: 14, b: 34 };
  const R = 20, V = 320;
  const X = r => pad.l + r / R * (w - pad.l - pad.r);
  const Y = v => h - pad.b - v / V * (h - pad.t - pad.b);
  const v = r => shape === "flat" ? vflat * (1 - Math.exp(-r / 2.2)) : (r < 3 ? 260 * Math.sqrt(r / 3) : 260 * Math.sqrt(3 / r));
  g.font = "11px system-ui"; g.fillStyle = "#8b9ac4"; g.textAlign = "center";
  for (let r = 0; r <= R; r += 5) g.fillText(r, X(r), h - pad.b + 14);
  g.textAlign = "right";
  [0, 100, 200, 300].forEach(vv => g.fillText(vv, pad.l - 6, Y(vv) + 4));
  axes(g, w, h, pad, "Radius from center (kpc)", "Orbital speed (km/s)");
  g.beginPath();
  for (let i = 0; i <= 400; i++) { const r = i / 400 * R, x = X(r), y = Y(v(r) + (i % 7) * 1.6); i ? g.lineTo(x, y) : g.moveTo(x, y); }
  g.strokeStyle = "#ffd166"; g.lineWidth = 2.2; g.stroke();
  g.setLineDash([5, 5]); g.beginPath(); g.moveTo(pad.l, Y(250)); g.lineTo(w - pad.r, Y(250));
  g.strokeStyle = "rgba(255,255,255,.18)"; g.lineWidth = 1; g.stroke(); g.setLineDash([]);
}

/* --- Hubble diagram --- */
function drawHubble(c, H0, pts, hi) {
  const { g, w, h } = setupCanvas(c); const pad = { l: 52, r: 14, t: 14, b: 34 };
  const D = 220, V = 16500;
  const X = d => pad.l + d / D * (w - pad.l - pad.r);
  const Y = v => h - pad.b - v / V * (h - pad.t - pad.b);
  g.font = "11px system-ui"; g.fillStyle = "#8b9ac4"; g.textAlign = "center";
  for (let d = 0; d <= D; d += 50) g.fillText(d, X(d), h - pad.b + 14);
  g.textAlign = "right";
  [0, 5000, 10000, 15000].forEach(v => g.fillText(v, pad.l - 6, Y(v) + 4));
  axes(g, w, h, pad, "Distance (Mpc)", "Recession velocity (km/s)");
  g.beginPath(); g.moveTo(X(0), Y(0)); g.lineTo(X(D), Y(H0 * D)); g.strokeStyle = "#5cc8ff"; g.lineWidth = 2; g.stroke();
  g.fillStyle = "#5cc8ff"; g.font = "12px system-ui"; g.textAlign = "left"; g.fillText("v = H₀ d", X(20), Y(H0 * 20) - 10);
  pts.forEach((p, i) => {
    g.beginPath(); g.arc(X(p[0]), Y(p[1]), i === hi ? 7 : 3.6, 0, 7);
    g.fillStyle = i === hi ? "#ff5c7a" : "#c7d2f0"; g.fill();
    if (i === hi) { g.strokeStyle = "#fff"; g.lineWidth = 2; g.stroke(); }
  });
}

/* --- Tully-Fisher --- */
function drawTF(c, v, M) {
  const { g, w, h } = setupCanvas(c); const pad = { l: 52, r: 14, t: 14, b: 34 };
  const XV = vv => pad.l + (Math.log10(vv) - Math.log10(50)) / (Math.log10(400) - Math.log10(50)) * (w - pad.l - pad.r);
  const YM = m => pad.t + (m + 24) / 9 * (h - pad.t - pad.b);
  g.font = "11px system-ui"; g.fillStyle = "#8b9ac4"; g.textAlign = "center";
  [60, 100, 150, 220, 300, 400].forEach(vv => g.fillText(vv, XV(vv), h - pad.b + 14));
  g.textAlign = "right";
  [-16, -18, -20, -22].forEach(m => g.fillText(m, pad.l - 6, YM(m) + 4));
  axes(g, w, h, pad, "Maximum rotation speed v_max (km/s, log)", "Absolute magnitude M_B");
  g.beginPath(); g.moveTo(XV(50), YM(-9.95 * Math.log10(50) + 3.15)); g.lineTo(XV(400), YM(-9.95 * Math.log10(400) + 3.15));
  g.strokeStyle = "#5cc8ff"; g.lineWidth = 2.2; g.stroke();
  g.fillStyle = "#5cc8ff"; g.font = "12px system-ui"; g.textAlign = "left"; g.fillText("Tully–Fisher", XV(60), YM(-9.95 * Math.log10(60) + 3.15) - 12);
  g.beginPath(); g.arc(XV(v), YM(M), 7, 0, 7); g.fillStyle = "#fff"; g.fill(); g.strokeStyle = "#ff5c7a"; g.lineWidth = 2.5; g.stroke();
  g.fillStyle = "#fff"; g.textAlign = "center"; g.fillText("v = " + v + " km/s", XV(v), YM(M) - 14);
}

/* --- gravitational wave chirp --- */
function drawGW(c) {
  const { g, w, h } = setupCanvas(c); const pad = { l: 50, r: 14, t: 14, b: 34 };
  const T = 0.42, tc = 0.32, dt = 1 / 4000;
  let pts = [], phi = 0, t = 0.005;
  while (t < tc - 0.004) { const tau = tc - t, f = 60 * Math.pow(tau, -0.375), A = 0.34 * Math.pow(tau, -0.25); phi += 2 * Math.PI * f * dt; pts.push([t, A * Math.sin(phi)]); t += dt; }
  const amax = pts[pts.length - 1] ? 0.34 * Math.pow(0.004, -0.25) : 1;
  let t2 = tc, k = 0;
  while (t2 < T) { const e = Math.exp(-(t2 - tc) / 0.012); pts.push([t2, 0.78 * amax * e * Math.sin(2 * Math.PI * 420 * (t2 - tc) + phi)]); t2 += dt; }
  const X = tt => pad.l + tt / T * (w - pad.l - pad.r);
  const Y = y => (pad.t + h - pad.b) / 2 - y * (h - pad.t - pad.b) * 0.42;
  g.font = "11px system-ui"; g.fillStyle = "#8b9ac4"; g.textAlign = "center";
  for (let tt = 0; tt <= 0.4; tt += 0.1) g.fillText(tt.toFixed(1), X(tt), h - pad.b + 14);
  axes(g, w, h, pad, "Time (seconds)", "Strain (wave amplitude)");
  g.beginPath(); pts.forEach((p, i) => i ? g.lineTo(X(p[0]), Y(p[1])) : g.moveTo(X(p[0]), Y(p[1])));
  g.strokeStyle = "#ffd166"; g.lineWidth = 1.5; g.stroke();
  g.fillStyle = "#8b9ac4"; g.font = "11px system-ui"; g.textAlign = "left";
  g.fillText("inspiral →", X(0.02), pad.t + 14);
  g.fillText("merger + ringdown", X(tc + 0.01), pad.t + 14);
}

/* --- graph question bank --- */
let gq = null;
function newGraphQ() {
  const kinds = ["hr", "lc", "bb", "spec", "pl", "rc", "hubble", "tf", "gw", "lc", "spec", "hubble", "gw", "rc"];
  const kind = kinds[Math.floor(Math.random() * kinds.length)];
  let q;
  if (kind === "hr") {
    const zk = shuffle(Object.keys(HR_STARS))[0];
    const star = HR_STARS[zk][Math.floor(Math.random() * HR_STARS[zk].length)];
    q = { kind, zk, star, q: `Which region of the H-R diagram is the star marked ★ (${star[2] || "?"}) in?`, opts: shuffle(["Main sequence", "Red giant branch", "Supergiant", "White dwarf"]), ans: { MS: "Main sequence", RG: "Red giant branch", SG: "Supergiant", WD: "White dwarf" }[zk], exp: `T ≈ ${star[0].toLocaleString()} K, L ≈ ${star[1].toLocaleString()} L☉ → ${({ MS: "the main sequence", RG: "the red giant branch (cool but very luminous)", SG: "the supergiant region (extremely luminous)", WD: "the white dwarf corner (hot but tiny → faint)" })[zk]}.` };
  } else if (kind === "lc") {
    const k = shuffle(Object.keys(LC))[0];
    const pool = ["Cepheid variable", "RR Lyrae variable", "Type Ia supernova", "Eclipsing binary"].filter(x => x !== LC[k].lab);
    q = { kind, k, q: "What kind of object does this light curve show?", opts: shuffle(shuffle(pool).slice(0, 3).concat([LC[k].lab])), ans: LC[k].lab, exp: ({ "Cepheid variable": "Sawtooth, period days–weeks, amplitude ~1 mag — a young Pop I supergiant on the instability strip.", "RR Lyrae variable": "Sawtooth but period < 1 day, amplitude < 1 mag — an old Pop II horizontal-branch star.", "Type Ia supernova": "Sharp rise in ~20 days, then a smooth decline; no plateau. Peak M_B ≈ −19.3.", "Eclipsing binary": "Flat top with two alternating dips of different depths at a fixed short period." })[LC[k].lab] };
  } else if (kind === "bb") {
    const trio = shuffle([[3000, 6000, 12000], [4000, 8000, 20000], [5800, 10000, 30000], [2500, 5000, 15000]])[0];
    q = { kind, trio, hot: trio.indexOf(Math.max(...trio)), q: "Which blackbody curve comes from the HOTTEST star?", opts: shuffle(trio.map(t => t + " K")), ans: Math.max(...trio) + " K", exp: "Hotter blackbodies peak at shorter wavelengths (Wien: λ_max T = 2.9×10⁶ nm·K) and radiate far more per unit area (L ∝ T⁴)." };
  } else if (kind === "spec") {
    const cls = shuffle(Object.keys(SPEC))[0];
    q = { kind, cls, q: "What is the spectral class of this star?", opts: shuffle(["O", "B", "A", "F", "G", "K"].concat([cls]).filter((v, i, a) => a.indexOf(v) === i).slice(0, 4).concat([cls]).filter((v, i, a) => a.indexOf(v) === i)), ans: cls, exp: ({ O: "He II lines + weak H → O (hottest, ~40,000 K).", B: "He I strong, moderate Balmer → B.", A: "Balmer lines at maximum strength → A.", F: "H weaker, Ca II and metals growing → F.", G: "Ca II H&K dominant, many metals → G (the Sun is G2V).", K: "Strong metals, molecular bands appear → K.", M: "Broad TiO molecular bands dominate → M (coolest)." })[cls] };
  } else if (kind === "pl") {
    const P = shuffle([3, 5, 8, 10, 15, 20, 30, 50])[0];
    const M = +(-2.76 * Math.log10(P) - 1.40).toFixed(2);
    const wrongs = shuffle([+(M + 1.8).toFixed(2), +(M - 2.1).toFixed(2), +(M + 3.3).toFixed(2)]);
    q = { kind, P, M, q: `A Cepheid has a period of ${P} days. Using M_V = −2.76·log₁₀(P) − 1.40, what is its absolute visual magnitude?`, opts: shuffle([M, ...wrongs].map(String)), ans: String(M), exp: `log₁₀(${P}) = ${Math.log10(P).toFixed(3)} → M_V = −2.76×${Math.log10(P).toFixed(3)} − 1.40 = ${M}. Longer period ⇒ more luminous (more negative M).` };
  } else if (kind === "rc") {
    const shape = shuffle(["flat", "keplerian"])[0];
    const vflat = shuffle([150, 180, 200, 220, 250])[0];
    q = {
      kind, shape, vflat, q: "This is the rotation curve of a spiral galaxy. What does it imply?",
      opts: shuffle(["It has an extended dark matter halo", "Essentially all its mass sits at the center", "It rotates like a solid body", "It is not rotating"]),
      ans: shape === "flat" ? "It has an extended dark matter halo" : "Essentially all its mass sits at the center",
      exp: shape === "flat"
        ? `v stays ~${vflat} km/s as r grows, so M(<r) = v²r/G keeps increasing although the light does not → mass with no light: a dark matter halo.`
        : `v falls off as ~1/√r (Keplerian), the same behaviour as planets in the Solar System → essentially all the mass is inside the orbit, with no dark halo out to these radii.`
    };
  } else if (kind === "hubble") {
    const H0 = shuffle([67, 70, 72, 73])[0];
    const pts = []; for (let i = 0; i < 26; i++) { const d = 10 + Math.random() * 200; pts.push([d, H0 * d * (0.93 + 0.14 * Math.random())]); }
    if (Math.random() < 0.5) {
      const wrongs = shuffle([H0 - 20, H0 + 25, H0 + 45, H0 - 8].map(x => x + " km/s/Mpc"));
      q = { kind, H0, pts, hi: -1, q: "What is the slope of the best-fit line — the Hubble constant?", opts: shuffle([H0 + " km/s/Mpc", ...wrongs]), ans: H0 + " km/s/Mpc", exp: `Slope = Δv/Δd. The scatter points follow v = H₀d; real measurements cluster around 67–73 km/s/Mpc, and this line has a slope of ${H0}.` };
    } else {
      const v = Math.round(H0 * (1 + Math.floor(Math.random() * 3)) * 25);
      const d = Math.round(v / H0);
      pts[0] = [d, v];
      const wrongs = shuffle([Math.round(d * 2.4), Math.round(d * 0.45), Math.round(d * 1.7)]);
      q = { kind, H0, pts, hi: 0, ptv: v, q: `A galaxy in this sample recedes at ${v} km/s. Using the line shown (H₀ = ${H0} km/s/Mpc), about how far away is it?`, opts: shuffle([d + " Mpc", ...wrongs.map(x => x + " Mpc")]), ans: d + " Mpc", exp: `d = v/H₀ = ${v}/${H0} ≈ ${d} Mpc (≈ ${(d * 3.26).toFixed(0)} million light-years).` };
    }
  } else if (kind === "tf") {
    const v = shuffle([80, 100, 120, 150, 180, 220, 260, 300])[0];
    const M = +(-9.95 * Math.log10(v) + 3.15).toFixed(1);
    const wrongs = shuffle([+(M + 2.6).toFixed(1), +(M - 2.2).toFixed(1), +(M + 4.1).toFixed(1)]);
    q = { kind: "tf", v, M, q: `A spiral galaxy's rotation curve flattens at v_max = ${v} km/s. Using Tully–Fisher (M_B ≈ −9.95·log₁₀(v_max) + 3.15), what is its absolute B magnitude?`, opts: shuffle([M, ...wrongs].map(String)), ans: String(M), exp: `log₁₀(${v}) = ${Math.log10(v).toFixed(3)} → M_B = −9.95×${Math.log10(v).toFixed(3)} + 3.15 = ${M}. Faster rotation ⇒ more luminous galaxy.` };
  } else {
    const variant = Math.random() < 0.5 ? "what" : "why";
    q = variant === "what"
      ? { kind: "gw", q: "What kind of event produced this gravitational-wave signal?", opts: shuffle(["Merger of two neutron stars", "Merger of two black holes", "Core-collapse supernova", "A pulsar in the Milky Way", "A solar flare"]), ans: "Merger of two neutron stars", exp: "It is a CHIRP: frequency and amplitude both rise as the orbit decays, then a sharp merger and ringdown. That waveform only comes from a compact binary — and a slowly-sweeping, long chirp means low masses, i.e. neutron stars (GW170817's chirp lasted ~100 s)." }
      : { kind: "gw", q: "In this chirp, why does the frequency increase with time?", opts: shuffle(["The orbit is shrinking as energy is radiated away", "The masses of the objects are growing", "The wave is being redshifted by cosmic expansion", "The detector drifts during the observation"]), ans: "The orbit is shrinking as energy is radiated away", exp: "Gravitational waves carry away orbital energy, so the separation shrinks and the orbital frequency rises — which is exactly why the signal speeds up into the merger. (The GW frequency is twice the orbital frequency.)" };
  }
  gq = q; gq.answered = false;
  document.getElementById("g-q").textContent = q.q;
  document.getElementById("g-opts").innerHTML = q.opts.map(o => `<button class="opt">${o}</button>`).join("");
  document.getElementById("g-fb").innerHTML = "";
  const c = document.getElementById("g-canvas");
  if (q.kind === "hr") drawHR(c, q.zk, q.star);
  if (q.kind === "lc") drawLC(c, q.k);
  if (q.kind === "bb") drawBB(c, q.trio, -1);
  if (q.kind === "spec") drawSpec(c, q.cls);
  if (q.kind === "pl") drawPL(c, q.P, q.M);
  if (q.kind === "rc") drawRC(c, q.shape, q.vflat);
  if (q.kind === "hubble") drawHubble(c, q.H0, q.pts, q.hi);
  if (q.kind === "tf") drawTF(c, q.v, q.M);
  if (q.kind === "gw") drawGW(c);
  document.querySelectorAll("#g-opts .opt").forEach(b => b.onclick = () => {
    if (gq.answered) return; gq.answered = true;
    const ok = b.textContent.trim() === String(gq.ans);
    mark("graph-" + gq.kind, ok);
    b.classList.add(ok ? "good" : "bad");
    if (!ok) document.querySelectorAll("#g-opts .opt").forEach(o => { if (o.textContent.trim() === String(gq.ans)) o.classList.add("good"); });
    if (gq.kind === "bb" && ok) drawBB(c, gq.trio, gq.hot);
    document.getElementById("g-fb").innerHTML = `<div class="${ok ? "ok" : "no"}">${ok ? "Correct" : "Answer: " + gq.ans}</div><div class="recap">${gq.exp}</div>`;
  });
}

/* ============================================================
   4. DIAGNOSTIC + CARDS  (self-graded reveal)
   ============================================================ */
let dq = [], di = 0;
function startDiag(order) {
  dq = order === "hard" ? DIAGNOSTIC.slice().sort((a, b) => b.lvl - a.lvl) : shuffle(DIAGNOSTIC);
  di = 0; drawDiag();
}
function drawDiag() {
  const q = dq[di % dq.length];
  document.getElementById("diag").innerHTML = `
    <div class="qhead">${di + 1} / ${dq.length} · topic: <b>${q.topic}</b> · level ${q.lvl}</div>
    <p class="bigq">${q.q}</p>
    <button class="primary" id="d-reveal">Show answer</button>
    <div id="d-body" class="fb"></div>
    <div class="row" id="d-grade"></div>`;
  document.getElementById("d-reveal").onclick = () => {
    document.getElementById("d-body").innerHTML = `
      <div class="recap"><b>Answer:</b> ${q.a.map(esc).join(" / ")}<br>${q.exp}</div>`;
    document.getElementById("d-grade").innerHTML = `
      <button class="good-btn" data-ok="1">✓ I knew it</button>
      <button class="bad-btn" data-ok="0">✗ Missed it</button>`;
    document.querySelectorAll("#d-grade button").forEach(b => b.onclick = () => {
      mark("diag-" + q.q.slice(0, 40), b.dataset.ok === "1");
      di++; if (di >= dq.length) { finishDiag(); } else drawDiag();
    });
  };
}
function finishDiag() {
  const topicStat = {};
  DIAGNOSTIC.forEach(q => { const id = "diag-" + q.q.slice(0, 40); const t = topicStat[q.topic] || (topicStat[q.topic] = { r: 0, w: 0 }); if (S.right[id]) t.r++; if (S.wrong[id]) t.w++; });
  const rows = Object.entries(topicStat).sort((a, b) => (b[1].w) - (a[1].w)).map(([t, s]) => {
    const pct = s.r + s.w ? Math.round(100 * s.r / (s.r + s.w)) : 0;
    const modMap = { galaxies: "galaxies", pops: "pops", starburst: "starburst", interact: "interact", tools: "tools", candles: "candles", cosmo: "cosmo", orbits: "orbits", messengers: "messengers", dso: "dso" };
    return `<tr><td><b>${t}</b></td><td>${s.r} ✓ / ${s.w} ✗</td><td><div class="bar"><span style="width:${pct}%"></span></div> ${pct}%</td><td><button class="ghost tiny" onclick="gotoMod('${modMap[t]}')">study it</button></td></tr>`;
  }).join("");
  document.getElementById("diag").innerHTML = `
    <h3>Round complete 🎯</h3>
    <p>Work your weak topics top-down. Anything under ~70% is worth another pass today.</p>
    <table class="stat">${rows}</table>
    <div class="row"><button class="primary" onclick="startDiag('rand')">↻ Shuffle &amp; run again</button>
    <button class="ghost" onclick="startDiag('hard')">Run hardest first</button></div>`;
}
window.gotoMod = id => {
  if (id === "dso") {
    document.querySelector('[data-tab="dso"]').click();
    document.getElementById("dso-quiz").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  document.querySelector('[data-tab="learn"]').click();
  const el = document.getElementById("mod-" + id);
  document.querySelectorAll(".mod").forEach(m => m.removeAttribute("open"));
  el.setAttribute("open", ""); el.scrollIntoView({ behavior: "smooth", block: "start" });
};

let cq = [], ci = 0;
function startCards() {
  const weak = CARDS.filter((c, i) => S.wrong["card-" + i]);
  cq = shuffle(weak.length ? weak.concat(shuffle(CARDS).slice(0, 12)) : CARDS);
  ci = 0; drawCard();
}
function drawCard() {
  const [q, a] = cq[ci % cq.length];
  document.getElementById("cards").innerHTML = `
    <div class="qhead">${ci + 1} / ${Math.min(cq.length, 40)}</div>
    <p class="bigq">${q}</p>
    <button class="primary" id="c-reveal">Show answer</button>
    <div id="c-body" class="fb"></div>
    <div class="row" id="c-grade"></div>`;
  document.getElementById("c-reveal").onclick = () => {
    document.getElementById("c-body").innerHTML = `<div class="recap">${a}</div>`;
    document.getElementById("c-grade").innerHTML = `<button class="good-btn" data-ok="1">✓ Got it</button><button class="bad-btn" data-ok="0">✗ Review again</button>`;
    document.querySelectorAll("#c-grade button").forEach(b => b.onclick = () => {
      mark("card-" + CARDS.findIndex(x => x[0] === q), b.dataset.ok === "1");
      ci++; drawCard();
    });
  };
}

/* ============================================================
   5. CHEAT SHEET / EQUATIONS
   ============================================================ */
function renderEq() {
  document.getElementById("eqs").innerHTML = EQUATIONS.map(e => `
    <div class="eq">
      <div class="eqn">${e.e}</div>
      <div class="eqname">${e.n}</div>
      <div class="equ"><b>Use for:</b> ${e.u}</div>
      <div class="eqt"><b>Trap:</b> ${e.t}</div>
    </div>`).join("");
}

/* ============================================================
   6. GUIDED COURSE — basics -> advanced, gated by mastery
   ============================================================ */
S.course = S.course || {};
S.openAll = S.openAll || false;
let curStage = null;

function stageUnlocked(i) {
  if (S.openAll) return true;
  if (i === 0) return true;
  const prev = COURSE[i - 1];
  return !!(S.course[prev.id] && S.course[prev.id].done);
}
const passedCount = () => COURSE.filter(st => S.course[st.id] && S.course[st.id].done).length;

function renderCourse() {
  const pct = Math.round(100 * passedCount() / COURSE.length);
  let html = `
    <div class="cprogress">
      <div class="cbar"><span style="width:${pct}%"></span></div>
      <div class="clabel"><b>${passedCount()} / ${COURSE.length} stages passed</b>
        <span class="note">Pass = 3 of 4 (or 4 of 5) check questions. ${S.openAll ? "" : "Each stage unlocks the next."}</span></div>
      <div class="row">
        <button class="primary" id="c-resume">${passedCount() ? "Continue where I left off" : "Start with Stage 1"}</button>
        <button class="ghost" id="c-openall">${S.openAll ? "🔒 Re-lock stages" : "⚡ Cram mode: unlock everything"}</button>
        <button class="ghost" id="c-reset">Reset course progress</button>
      </div>
    </div>`;
  TRACKS.forEach(tr => {
    const stages = COURSE.map((st, i) => ({ st, i })).filter(x => x.st.track === tr.id);
    html += `<h3 class="trackhead">${tr.name} <span class="note">${tr.sub}</span></h3><div class="stages">`;
    stages.forEach(({ st, i }) => {
      const rec = S.course[st.id], open = stageUnlocked(i);
      const state = rec && rec.done ? "done" : (open ? (rec ? "retry" : "open") : "locked");
      html += `
        <div class="stage ${state}" data-stage="${st.id}">
          <div class="sno">${i + 1}</div>
          <div class="sinfo">
            <div class="stitle">${st.title} ${state === "done" ? '<span class="tick">✓ ' + rec.best + "/" + st.check.length + "</span>" : ""}
              ${state === "locked" ? '<span class="lock">🔒 locked</span>' : ""}</div>
            <div class="sgoal">${st.goal}</div>
            <div class="smeta">${st.mins} min · ${st.check.length} check questions</div>
          </div>
        </div>`;
    });
    html += `</div>`;
  });
  document.getElementById("course").innerHTML = html;
  document.querySelectorAll(".stage").forEach(el => el.onclick = () => {
    const id = el.dataset.stage, idx = COURSE.findIndex(x => x.id === id);
    if (!stageUnlocked(idx)) { flashLocked(); return; }
    openStage(id);
  });
  const nextIdx = COURSE.findIndex((st, i) => !S.course[st.id] || !S.course[st.id].done);
  document.getElementById("c-resume").onclick = () => openStage(COURSE[nextIdx < 0 ? 0 : nextIdx].id);
  document.getElementById("c-openall").onclick = () => { S.openAll = !S.openAll; save(); renderCourse(); };
  document.getElementById("c-reset").onclick = () => {
    if (confirm("Clear course progress only?")) { S.course = {}; S.openAll = false; save(); renderCourse(); }
  };
}
function flashLocked() {
  const n = document.createElement("div");
  n.className = "flashwarn"; n.textContent = "Pass the previous stage first — or hit 'Cram mode' to unlock everything.";
  document.getElementById("course").prepend(n);
  setTimeout(() => n.remove(), 2600);
}

function openStage(id) {
  const st = COURSE.find(x => x.id === id), i = COURSE.indexOf(st);
  curStage = st;
  const rec = S.course[id] || {};
  document.getElementById("course").innerHTML = `
    <div class="stageview">
      <div class="row toprow">
        <button class="ghost" id="s-back">← All stages</button>
        <span class="note">Stage ${i + 1} of ${COURSE.length} · ${TRACKS.find(t => t.id === st.track).name} · ~${st.mins} min
        ${rec.done ? " · ✓ passed " + rec.best + "/" + st.check.length : ""}</span>
      </div>
      <h2 class="stitlebig">${st.title}</h2>
      <p class="sgoal big">🎯 ${st.goal}</p>
      <div class="teach">
        <h4>Learn</h4>
        <ul>${st.teach.map(t => `<li>${t}</li>`).join("")}</ul>
      </div>
      ${st.gallery ? `<div class="gallery"><h4>Recognize these</h4><div class="gal">${st.gallery.map(gid => {
        const d = DSO.find(x => x.id === gid);
        return `<figure><img src="${d.img}" alt="${esc(d.name)}" loading="lazy"><figcaption><b>${d.name}</b><br><span>${d.idCues[0]}</span></figcaption></figure>`;
      }).join("")}</div></div>` : ""}
      <div class="checks" id="checks">
        <h4>Check yourself</h4>
        ${st.check.map((c, k) => `
          <div class="checkq" data-k="${k}">
            <p class="bigq">${k + 1}. ${c.q}</p>
            <div class="opts">${shuffle(c.opts).map(o => `<button class="opt">${o}</button>`).join("")}</div>
            <div class="chkfb"></div>
          </div>`).join("")}
        <div class="row"><button class="primary" id="s-grade">Grade this stage</button></div>
        <div id="s-result" class="fb"></div>
      </div>
      ${st.link ? `<div class="row"><button class="ghost" id="s-link">${st.link.text}</button></div>` : ""}
    </div>`;
  document.getElementById("s-back").onclick = renderCourse;
  if (st.link) document.getElementById("s-link").onclick = () => document.querySelector('[data-tab="' + st.link.tab + '"]').click();
  document.querySelectorAll("#checks .opt").forEach(b => {
    b.onclick = () => {
      const box = b.closest(".checkq");
      if (box.dataset.answered) return;
      box.dataset.answered = "1";
      const c = st.check[+box.dataset.k];
      const ok = b.textContent.trim() === c.ans;
      box.dataset.ok = ok ? "1" : "0";
      b.classList.add(ok ? "good" : "bad");
      box.querySelectorAll(".opt").forEach(o => { if (o.textContent.trim() === c.ans) o.classList.add("good"); });
      box.querySelector(".chkfb").innerHTML = `<div class="${ok ? "ok" : "no"}">${ok ? "Correct" : "Not quite — " + c.ans}</div><div class="recap">${c.exp}</div>`;
    };
  });
  document.getElementById("s-grade").onclick = () => gradeStage(st);
  window.scrollTo(0, 0);
}

function gradeStage(st) {
  const boxes = [...document.querySelectorAll("#checks .checkq")];
  const answered = boxes.filter(b => b.dataset.answered);
  if (answered.length < boxes.length) {
    document.getElementById("s-result").innerHTML = `<div class="no">Answer all ${boxes.length} questions first (${answered.length} done).</div>`;
    return;
  }
  const score = boxes.filter(b => b.dataset.ok === "1").length;
  const need = boxes.length === 5 ? 4 : 3;
  const pass = score >= need;
  const i = COURSE.indexOf(st), next = COURSE[i + 1];
  const prevBest = S.course[st.id] ? S.course[st.id].best : 0;
  S.course[st.id] = { done: pass || !!(S.course[st.id] && S.course[st.id].done), best: Math.max(prevBest, score), tries: (S.course[st.id] ? S.course[st.id].tries : 0) + 1 };
  save();
  document.getElementById("s-result").innerHTML = `
    <div class="${pass ? "ok" : "no"}">${score} / ${boxes.length} — ${pass ? "passed ✓" : "not yet: you need " + need + "/" + boxes.length}</div>
    <div class="recap">${pass
      ? (next ? `<b>${next.title}</b> is now unlocked.` : "That was the last stage — go run the Diagnostic and the DSO Trainer.")
      : "Re-read the Learn bullets you missed above, then try again. Explanations are under each question."}</div>
    <div class="row">
      ${next && pass ? `<button class="primary" id="s-next">Next: ${next.title} →</button>` : ""}
      ${pass ? `<button class="ghost" id="s-back2">← Back to all stages</button>` : `<button class="ghost" id="s-retry">↻ Try this stage again</button>`}
    </div>`;
  if (next && pass) document.getElementById("s-next").onclick = () => openStage(next.id);
  const b2 = document.getElementById("s-back2"); if (b2) b2.onclick = renderCourse;
  const rt = document.getElementById("s-retry"); if (rt) rt.onclick = () => openStage(st.id);
  document.getElementById("s-result").scrollIntoView({ behavior: "smooth", block: "center" });
}

/* ============================================================
   6. PRINTABLE DSO TABLE
   ============================================================ */
function renderCheat() {
  document.getElementById("cheat-dso").innerHTML = `
    <table>
      <thead><tr><th>Object</th><th>Type</th><th>Constellation</th><th>Distance</th><th>Killer fact</th></tr></thead>
      <tbody>${DSO.map(d => `<tr><td><b>${d.name}</b></td><td>${d.type}</td><td>${d.con}</td><td>${d.dist}</td><td>${d.facts[0]}</td></tr>`).join("")}</tbody>
    </table>`;
}

/* ============================================================
   boot
   ============================================================ */
renderModules(); renderDsoCards(); renderEq(); renderCheat(); renderCourse();
newDsoRound(); newGraphQ(); startDiag("rand"); startCards();
document.getElementById("g-new").onclick = newGraphQ;
document.getElementById("reset").onclick = () => { if (confirm("Clear all your progress?")) { localStorage.removeItem(STORE_KEY); location.reload(); } };
window.addEventListener("resize", () => { if (gq) newGraphQ(); });
