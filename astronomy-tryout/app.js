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

/* --- light curves --- */
const LC = {
  cepheid: { f: t => { const p = 10, ph = (t % p) / p; return 6 + 1.1 * (0.5 + 0.5 * Math.sin(2 * Math.PI * (ph - 0.15))) * (1 - 0.35 * ph); }, xmax: 40, xlab: "Time (days)", lab: "Cepheid" },
  rrlyrae: { f: t => { const p = 0.6, ph = (t % p) / p; return 12 + 0.8 * (0.5 + 0.5 * Math.sin(2 * Math.PI * (ph - 0.12))) * (1 - 0.3 * ph); }, xmax: 2.4, xlab: "Time (days)", lab: "RR Lyrae" },
  mira: { f: t => { const p = 330, ph = (t % p) / p; return 6 + 3.2 * Math.pow(Math.max(0, Math.sin(Math.PI * Math.pow(ph, 1.3))), 1.4); }, xmax: 1400, xlab: "Time (days)", lab: "Mira variable" },
  eclipsing: { f: t => { const p = 2.4, ph = (t % p) / p; let m = 11.0; const dip = (c, wd, dp) => { let d = Math.abs(((ph - c + 0.5) % 1) - 0.5) * 2; return d < wd ? dp * (1 - Math.pow(d / wd, 2)) : 0; }; return m + dip(0.0, 0.10, 0.9) + dip(0.5, 0.10, 0.35); }, xmax: 9.6, xlab: "Time (days)", lab: "Eclipsing binary" },
  typeIa: { f: t => { if (t < 18) return 16 - 8 * Math.pow(t / 18, 0.6); return 8 + 4.2 * Math.min(1, (t - 18) / 90); }, xmax: 140, xlab: "Days since explosion", lab: "Type Ia supernova" },
  typeII: { f: t => { if (t < 8) return 15.5 - 6 * Math.pow(t / 8, 0.7); if (t < 100) return 9.5 + 0.9 * (t - 8) / 92; return 10.4 + 2.4 * Math.min(1, (t - 100) / 160); }, xmax: 300, xlab: "Days since explosion", lab: "Type II supernova" },
  ttauri: { f: t => 12.4 + 0.55 * Math.sin(t / 3.1) + 0.35 * Math.sin(t / 1.13 + 1) + 0.25 * Math.sin(t / 7.7 + 2) + 0.2 * Math.sin(t / 0.47), xmax: 60, xlab: "Time (days)", lab: "T Tauri star" },
  pulsar: { f: t => { const p = 0.03, ph = (t % p) / p; return 15.4 - 2.6 * Math.exp(-Math.pow(ph / 0.035, 2)) - 0.5 * Math.exp(-Math.pow((ph - 0.02) / 0.05, 2)); }, xmax: 0.12, xlab: "Time (seconds)", lab: "Pulsar" }
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

/* --- graph question bank --- */
let gq = null;
function newGraphQ() {
  const kinds = ["hr", "lc", "bb", "spec", "pl", "hr", "lc", "lc", "spec"];
  const kind = kinds[Math.floor(Math.random() * kinds.length)];
  let q;
  if (kind === "hr") {
    const zk = shuffle(Object.keys(HR_STARS))[0];
    const star = HR_STARS[zk][Math.floor(Math.random() * HR_STARS[zk].length)];
    q = { kind, zk, star, q: `Which region of the H-R diagram is the star marked ★ (${star[2] || "?"}) in?`, opts: shuffle(["Main sequence", "Red giant branch", "Supergiant", "White dwarf"]), ans: { MS: "Main sequence", RG: "Red giant branch", SG: "Supergiant", WD: "White dwarf" }[zk], exp: `T ≈ ${star[0].toLocaleString()} K, L ≈ ${star[1].toLocaleString()} L☉ → ${({ MS: "main sequence", RG: "the red giant branch (cool but very luminous)", SG: "the supergiant region (extremely luminous)", WD: "the white dwarf corner (hot but tiny → faint)" })[zk]}.` };
  } else if (kind === "lc") {
    const k = shuffle(Object.keys(LC))[0];
    q = { kind, k, q: "What kind of object/variable does this light curve show?", opts: shuffle(["Cepheid", "RR Lyrae", "Mira variable", "Eclipsing binary", "Type Ia supernova", "Type II supernova", "T Tauri star", "Pulsar"].sort(() => Math.random() - .5).slice(0, 5).concat([LC[k].lab]).filter((v, i, a) => a.indexOf(v) === i).slice(0, 6)), ans: LC[k].lab, exp: ({ Cepheid: "Sawtooth, period days–weeks, amplitude ~1 mag.", "RR Lyrae": "Sawtooth but period < 1 day, amplitude < 1 mag.", "Mira variable": "Period hundreds of days with a huge (several-mag) amplitude.", "Eclipsing binary": "Flat top with two alternating dips of different depths.", "Type Ia supernova": "Sharp rise (~20 d) then smooth decline — no plateau.", "Type II supernova": "Plateau then slow linear decay.", "T Tauri star": "Irregular, non-periodic flickering.", Pulsar: "Narrow, extremely regular pulses on a sub-second period." })[LC[k].lab] };
    if (!q.opts.includes(q.ans)) q.opts.push(q.ans), q.opts = shuffle(q.opts);
  } else if (kind === "bb") {
    const trio = shuffle([[3000, 6000, 12000], [4000, 8000, 20000], [5800, 10000, 30000], [2500, 5000, 15000]])[0];
    const hot = trio.indexOf(Math.max(...trio));
    q = { kind, trio, hot, q: "Which blackbody curve comes from the HOTTEST star?", opts: shuffle(trio.map(t => t + " K")), ans: Math.max(...trio) + " K", exp: `Hotter blackbodies peak at shorter wavelengths (Wien: λ_max T = 2.9×10⁶ nm·K) and are far more luminous per unit area (L ∝ T⁴).` };
  } else if (kind === "spec") {
    const cls = shuffle(Object.keys(SPEC))[0];
    q = { kind, cls, q: "What is the spectral class of this star?", opts: shuffle(["O", "B", "A", "F", "G", "K"].concat([cls]).filter((v, i, a) => a.indexOf(v) === i).slice(0, 5).concat([cls]).filter((v, i, a) => a.indexOf(v) === i)), ans: cls, exp: ({ O: "He II lines + weak H → O (hottest, ~40,000 K).", B: "He I strong, Balmer moderate → B.", A: "Balmer lines at maximum strength → A.", F: "H weaker, Ca II/metals growing → F.", G: "Ca II H&K dominant, many metals → G (the Sun is G2V).", K: "Strong metals + molecular bands appear → K.", M: "Broad TiO molecular bands dominate → M (coolest)." })[cls] };
  } else {
    const P = shuffle([3, 5, 8, 10, 15, 20, 30, 50])[0];
    const M = +(-2.76 * Math.log10(P) - 1.40).toFixed(2);
    const wrongs = shuffle([+(M + 1.8).toFixed(2), +(M - 2.1).toFixed(2), +(M + 3.3).toFixed(2)]);
    q = { kind: "pl", P, M, q: `A Cepheid has a period of ${P} days. Using M_V = −2.76·log₁₀(P) − 1.40, what is its absolute visual magnitude?`, opts: shuffle([M, ...wrongs].map(String)), ans: String(M), exp: `log₁₀(${P}) = ${Math.log10(P).toFixed(3)} → M_V = −2.76×${Math.log10(P).toFixed(3)} − 1.40 = ${M}. Longer period ⇒ more luminous (more negative M).` };
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
  document.querySelectorAll("#g-opts .opt").forEach(b => b.onclick = () => {
    if (gq.answered) return; gq.answered = true;
    const ok = b.textContent.trim() === String(gq.ans);
    mark("graph-" + gq.kind, ok);
    b.classList.add(ok ? "good" : "bad");
    if (!ok) document.querySelectorAll("#g-opts .opt").forEach(o => { if (o.textContent.trim() === String(gq.ans)) o.classList.add("good"); });
    if (gq.kind === "bb" && ok) drawBB(c, gq.trio, gq.trio.indexOf(Math.max(...gq.trio)));
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
    const modMap = { story: "story", spectra: "spectra", hr: "hr", blackbody: "blackbody", variables: "variables", distance: "distance", binaries: "binaries", wave: "wave", dso: "dso", endstates: "endstates" };
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
renderModules(); renderDsoCards(); renderEq(); renderCheat();
newDsoRound(); newGraphQ(); startDiag("rand"); startCards();
document.getElementById("g-new").onclick = newGraphQ;
document.getElementById("reset").onclick = () => { if (confirm("Clear all your progress?")) { localStorage.removeItem(STORE_KEY); location.reload(); } };
window.addEventListener("resize", () => { if (gq) newGraphQ(); });
