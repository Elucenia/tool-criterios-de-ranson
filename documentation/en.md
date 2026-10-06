<!-- ELUCENIA technical documentation · criterios-de-ranson · en · no clinical/professional/rights approval -->

# Ranson’s criteria

[conditions, sources and permissions](https://elucenia.org/en/tools/criterios-de-ranson)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Admission: age \> 55 years (biliary: \> 70)

`idade`

### Admission: leukocytes \> 16,000/mm³ (biliary: \> 18,000)

`leuco`

### Admission: blood glucose \> 200 mg/dL (biliary: \> 220)

`glic`

### Admission: LDH \> 350 U/L (biliary: \> 400)

`ldh`

### Admission: AST \> 250 U/L

`ast`

### 48 h: hematocrit fall \> 10 percentage points

`ht`

### 48 h: BUN increase \> 5 mg/dL, urea \> 10.7 mg/dL (biliary: BUN \> 2, urea \> 4.3)

`bun`

### 48 h: calcium \< 8 mg/dL

`ca`

### 48 h: PaO₂ \< 60 mmHg (not applicable to biliary disease)

`pao2`

### 48 h: base deficit \> 4 mEq/L (biliary: \> 5)

`be`

### 48 h: fluid sequestration \> 6 L (biliary: \> 4 L)

`seq`

## Method edition

Ranson 1974 nonbiliary and Ranson 1982 biliary; admission+48 h; aetiology-specific thresholds

## Documented formula

One point per criterion: 5 at admission and 6 in the first 48 hours. Total 0–11 (0–10 in biliary pancreatitis, which omits PaO₂).

Values in parentheses are biliary pancreatitis cutoffs (Ranson 1982).

## Limits and population

Ranson criteria combine admission data with 48-hour data; criteria and thresholds differ between biliary and nonbiliary pancreatitis. Do not treat items not yet observed as absent or a partial total as the complete assessment. The 2024 ACG guideline notes that systems such as Ranson do not accurately predict severe progression in the first 24–48 hours and do not replace reassessment of organ failure and clinical signs. Follow-up and initial support should not wait for the score to be complete.

## References

- [Ranson JH et al. Prognostic signs and the role of operative management in acute pancreatitis. Surg Gynecol Obstet, 1974. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/4834279/)

- [Ranson JH. Etiological and prognostic factors in human acute pancreatitis: a review. Am J Gastroenterol, 1982. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/7051819/)

- [Tenner S et al. American College of Gastroenterology guideline: management of acute pancreatitis. Am J Gastroenterol, 2013.](https://doi.org/10.1038/ajg.2013.218)

- [ACG2024,original guideline hosted by review-course mirror](https://www.giboardreview.com/wp-content/uploads/2024/04/ACG-guideline-acute-pancreatitis-Mch-2024.pdf)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Ranson 0 to 2: likely mild pancreatitis

Mortality around 1% in the original series.


### 2

Ranson 3 to 4: severe pancreatitis

Mortality around 15%; intensive monitoring.


### 3

Ranson ≥ 7: very severe pancreatitis

Mortality close to 100% in the original series; ICU.

