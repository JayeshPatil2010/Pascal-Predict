# 🧱 ConcreteML — Predicting Concrete Strength with Machine Learning

**Live site:** https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/

An engineering data project: can a machine-learning model predict the compressive
strength of concrete from its mix recipe — before anyone pours it?

Physical strength testing takes up to 28 days per sample. This project trains a
Random Forest on **1,030 real laboratory crush tests** so engineers can screen
concrete recipes in seconds.

## What's on the site

- 📊 **The data, explored** — live charts drawn from all 1,030 samples
- 🤖 **The model, verified live** — the trained Random Forest (60 trees) is embedded
  in the page as JSON and runs in pure JavaScript; the R² = 0.88 score is recomputed
  in your browser on the hidden test set every time the page loads
- 🎛 **Strength Calculator** — design a recipe with sliders, get an instant prediction
- ⚙️ **Mix Designer** — enter a target strength, lock any ingredients, and it searches
  20,000 candidate recipes for the one hitting your target with the least cement
- 💥 **Crush Lab** — a virtual hydraulic press that breaks your specimen at exactly
  the predicted strength (with sound)
- 🏗 **3D Structure Lab** — a tower built from your mix, tested under gravity
  overload, hurricane wind, or earthquake — custom 3D engine, no libraries

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire website — model, data, and all simulations in one self-contained file (works offline) |
| `notebook.ipynb` | The research notebook (Google Colab / Python): full analysis with the 200-tree model |
| `concrete_strength.csv` | The dataset, cleaned |

## Data & credit

- **Dataset:** Concrete Compressive Strength — Prof. I-Cheng Yeh, Chung-Hua University, Taiwan
- **Original paper:** Yeh, I-C. (1998). *Modeling of strength of high-performance concrete
  using artificial neural networks.* Cement and Concrete Research, 28(12), 1797–1808
- **Source:** [UCI Machine Learning Repository](https://archive.ics.uci.edu/dataset/165/concrete+compressive+strength) · CC BY 4.0
- **Analysis & site:** YOUR NAME HERE — Python (pandas, scikit-learn) + JavaScript

*AI note: an AI assistant helped structure the code. I ran, checked, and can explain every step.*

## Honest limits

The model interpolates within its training ranges only, predicts lab-cured samples
(not field conditions), and is a screening tool — the physical crush test keeps the
final word. This is an educational project, not structural-engineering software.
