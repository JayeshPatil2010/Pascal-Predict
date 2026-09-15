# Calculator sheet — Astronomy C (type these in)

Keep it to this page. Everything here is either an equation you can't avoid or a
five-second program. Nothing else is worth the memory.

---

## The 6 you will actually use (memorize first)

```
1. PARALLAX       d(pc) = 1 / p(arcsec)            1 pc = 3.26 ly
2. DIST MODULUS   m - M = 5*log(d) - 5      ->  d = 10^((m-M+5)/5)   [pc]
3. MAG RATIO      F1/F2 = 10^(0.4*(m2-m1)) = 2.512^(m2-m1)
4. STEFAN-BOLTZ   L/Lsun = (R/Rsun)^2 * (T/5772)^4
5. WIEN           lambda_max(nm) = 2.898e6 / T(K)
6. KEPLER III     M1 + M2 (Msun) = a(AU)^3 / P(yr)^2
```

## The rest (nice to have, don't cram)

```
STANDARD CANDLES  RR Lyrae: Mv = +0.6     Type Ia SN: MB = -19.3 (peak)
CEPHEID P-L       Mv = -2.76*log(P_days) - 1.40     (if the test gives constants, USE THEIRS)
INVERSE SQUARE    F = L / (4*pi*d^2)
CENTER OF MASS    M1*r1 = M2*r2,  a = r1 + r2,  r1 = a*M2/(M1+M2)
ORBIT SPEED       v = 2*pi*r / P        (circular: v^2 = G*M/r)
DOPPLER           dlambda/lambda0 = v/c          c = 3.00e5 km/s
SURFACE GRAVITY   R = sqrt(G*M/g)                G = 6.674e-11
```

## Constants (store these in your calculator's memory)

```
G   = 6.674e-11        c    = 3.00e5 km/s = 3.00e8 m/s
sigma = 5.67e-8        Msun = 1.989e30 kg        Lsun = 3.828e26 W
Rsun  = 6.957e8 m      Tsun = 5772 K
pc    = 3.086e16 m = 3.26 ly = 206265 AU         AU = 1.496e11 m
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
:Disp "D LIGHTYEARS"
:Disp 10^((m-M+5)/5)*3.26

PROGRAM:PARALLAX
:Prompt P
:Disp "D PARSECS"
:Disp P^-1
:Disp "D LIGHTYEARS"
:Disp 3.26/P

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

PROGRAM:STEFAN
:Prompt R,T
:Disp "L (LSUN)"
:Disp R^2*(T/5772)^4

PROGRAM:WIEN
:Prompt T
:Disp "LAMBDA MAX NM"
:Disp 2.898E6/T

PROGRAM:MAGRATIO
:Prompt A,B
:Disp "F1/F2"
:Disp 10^(0.4*(B-A))
```

## Numeric sanity checks (catch sign errors fast)

- Distance modulus at d = 10 pc gives m − M = 0. Always.
- Sun: T = 5772 K → λ_max ≈ 502 nm (green). If you get 5020 nm, you multiplied instead of divided.
- Sun with R = 1, T = 5772 → L = 1 L☉. Use it to test STEFAN.
- Earth: a = 1 AU, P = 1 yr → M_total ≈ 1 M☉. Use it to test KEPLER.
- A 5-magnitude gap is always a factor of 100 (1 mag ≈ 2.512).
