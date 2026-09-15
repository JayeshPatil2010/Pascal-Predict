# Calculator sheet — Astronomy C 2027 (type these in)

Topic: **stellar evolution in normal & starburst galaxies.**
Keep it to this page. Everything here is either an equation you can't avoid or a
five-second program. Nothing else is worth the memory.

---

## The 6 you will actually use (memorize first)

```
1. DIST MODULUS   m - M = 5*log(d) - 5      ->  d = 10^((m-M+5)/5)   [pc]
2. HUBBLE'S LAW   v = H0*d    ->  d(Mpc) = v(km/s) / 70      H0 ~ 70 km/s/Mpc
3. REDSHIFT       z = dlambda/lambda0 = v/c                c = 3.00e5 km/s
4. CEPHEID P-L    Mv = -2.76*log(P_days) - 1.40
5. KEPLER III     M1 + M2 (Msun) = a(AU)^3 / P(yr)^2
6. ROTATION MASS  M(<r) = v^2*r/G   ->  M/Msun ~ 2.33e5*[v(km/s)]^2*[r(kpc)]
```

## The rest (nice to have, don't cram)

```
PARALLAX          d(pc) = 1 / p(arcsec)          1 pc = 3.26 ly
MAG RATIO         F1/F2 = 10^(0.4*(m2-m1)) = 2.512^(m2-m1)      5 mag = x100
STANDARD CANDLES  RR Lyrae: Mv = +0.6        Type Ia SN: MB = -19.3 (peak)
TULLY-FISHER      L ~ v_max^4   (M_B ~ -9.95*log(v_max) + 3.15)   [spirals only]
PROPER MOTION     vt(km/s) = 4.74 * mu(arcsec/yr) * d(pc)
STEFAN-BOLTZ      L/Lsun = (R/Rsun)^2 * (T/5772)^4
WIEN              lambda_max(nm) = 2.898e6 / T(K)
INVERSE SQUARE    F = L / (4*pi*d^2)
CENTER OF MASS    M1*r1 = M2*r2,  a = r1 + r2,  r1 = a*M2/(M1+M2)
ORBIT SPEED       v = 2*pi*r / P        (circular: v^2 = G*M/r)
EDDINGTON LIMIT   L_Edd ~ 1.3e38 * (M/Msun) erg/s        (ULXs: >1e39 is the flag)
```

## Constants (store these in your calculator's memory)

```
G    = 6.674e-11        c     = 3.00e5 km/s = 3.00e8 m/s
H0   = 70 km/s/Mpc      sigma = 5.67e-8          Msun  = 1.989e30 kg
Lsun = 3.828e26 W       Rsun  = 6.957e8 m        Tsun  = 5772 K
pc   = 3.086e16 m = 3.26 ly = 206265 AU          Mpc   = 3.26 million ly
AU   = 1.496e11 m       kpc   = 3.086e19 m = 3262 ly
```

---

## TI-84 / TI-83 programs (Class IV = programmable is legal)

Type these once; they save minutes under time pressure.
`->` is the STO key, `10^(` is `2nd` + `LOG`, `log(` is base-10.

```
PROGRAM:DISTMOD
:Prompt M,m
:Disp "D PARSECS"
:Disp 10^((m-M+5)/5)
:Disp "D MEGAPARSECS"
:Disp 10^((m-M+5)/5)/1E6

PROGRAM:HUBBLE
:Prompt V
:Disp "D PARSECS*1E6"
:Disp V/70
:Disp "D MILLION LY"
:Disp V/70*3.26

PROGRAM:REDSHIFT
:Prompt L,L0
:(L-L0)/L0->Z
:Disp "Z"
:Disp Z
:Disp "V KM/S"
:Disp 3E5*Z

PROGRAM:CEPHEID
:Prompt P
:-2.76*log(P)-1.40->M
:Disp "MV"
:Disp M
:Prompt m
:Disp "D PARSECS"
:Disp 10^((m-M+5)/5)

PROGRAM:KEPLER
:Prompt A,P
:Disp "M TOTAL (MSUN)"
:Disp A^3/P^2

PROGRAM:ROTMASS
:Prompt V,R
:Disp "M INSIDE R (MSUN)"
:Disp 2.33E5*V^2*R

PROGRAM:TULLY
:Prompt V
:Disp "M_B"
:Disp -9.95*log(V)+3.15

PROGRAM:PARALLAX
:Prompt P
:Disp "D PARSECS"
:Disp P^-1
:Disp "D LIGHTYEARS"
:Disp 3.26/P
```

(`ROTMASS` takes v in km/s and r in kpc.
`TULLY` takes v_max in km/s — spirals only.)

## Numeric sanity checks (catch sign errors fast)

- Distance modulus at d = 10 pc gives m − M = 0. Always.
- A galaxy at 100 Mpc recedes at ~7,000 km/s (v = 70 × 100). If you get 700 or 70,000, check the units.
- Sun: T = 5772 K → λ_max ≈ 502 nm (green). If you get 5020 nm, you multiplied instead of divided.
- Earth: a = 1 AU, P = 1 yr → M_total ≈ 1 M☉. Use it to test KEPLER.
- Milky Way-ish: v = 220 km/s at r = 8 kpc → M ≈ 9 × 10¹⁰ M☉. Use it to test ROTMASS.
- A 5-magnitude gap is always a factor of 100 (1 mag ≈ 2.512).
- Tully–Fisher: v_max = 220 km/s → M_B ≈ −20.1. Brighter than an entire galaxy? No — that IS a galaxy.
