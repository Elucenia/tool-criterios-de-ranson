<!-- ELUCENIA technical documentation · criterios-de-ranson · de · no clinical/professional/rights approval -->

# Ranson-Kriterien

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/criterios-de-ranson)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Aufnahme: Alter \> 55 Jahre (biliär: \> 70)

`idade`

### Aufnahme: Leukozyten \> 16.000/mm³ (biliär: \> 18.000)

`leuco`

### Aufnahme: Blutzucker \> 200 mg/dL (biliär: \> 220)

`glic`

### Aufnahme: LDH \> 350 U/L (biliär: \> 400)

`ldh`

### Aufnahme: AST \> 250 U/L

`ast`

### 48 h: Hämatokritabfall \> 10 Prozentpunkte

`ht`

### 48 h: BUN-Anstieg \> 5 mg/dL, Harnstoff \> 10,7 mg/dL (biliär: BUN \> 2, Harnstoff \> 4,3)

`bun`

### 48 h: Kalzium \< 8 mg/dL

`ca`

### 48 h: PaO₂ \< 60 mmHg (nicht auf biliäre Ursache anwendbar)

`pao2`

### 48 h: Basendefizit \> 4 mEq/L (biliär: \> 5)

`be`

### 48 h: Flüssigkeitssequestration \> 6 L (biliär: \> 4 L)

`seq`

## Fassung der Methode

Ranson 1974 nichtbiliär und Ranson 1982 biliär; Aufnahme+48 h; ätiologiespezifische Schwellen

## Dokumentierte Formel

Ein Punkt je Kriterium: 5 bei Aufnahme und 6 in den ersten 48 Stunden. Gesamt 0–11 (biliär 0–10, ohne PaO₂).

Werte in Klammern sind biliäre Grenzwerte (Ranson 1982).

## Grenzen und Population

Die Ranson-Kriterien kombinieren Aufnahmebefunde mit Daten nach 48 Stunden; Kriterien und Schwellen unterscheiden sich bei biliärer und nichtbiliärer Pankreatitis. Noch nicht beobachtete Merkmale dürfen nicht als nicht vorhanden und eine Teilsumme nicht als vollständige Bewertung behandelt werden. Die ACG-Leitlinie 2024 betont, dass Systeme wie Ranson schwere Verläufe in den ersten 24–48 Stunden nicht genau vorhersagen und die erneute Beurteilung von Organversagen und klinischen Zeichen nicht ersetzen. Überwachung und anfängliche Unterstützung dürfen nicht auf die vollständige Score-Erhebung warten.

## Referenzen

- [Ranson JH et al. Prognostic signs and the role of operative management in acute pancreatitis. Surg Gynecol Obstet, 1974. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/4834279/)

- [Ranson JH. Etiological and prognostic factors in human acute pancreatitis: a review. Am J Gastroenterol, 1982. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/7051819/)

- [Tenner S et al. American College of Gastroenterology guideline: management of acute pancreatitis. Am J Gastroenterol, 2013.](https://doi.org/10.1038/ajg.2013.218)

- [ACG2024,original guideline hosted by review-course mirror](https://www.giboardreview.com/wp-content/uploads/2024/04/ACG-guideline-acute-pancreatitis-Mch-2024.pdf)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Ranson 0 bis 2: wahrscheinliche leichte Pankreatitis

Mortalität in der Originalserie bei etwa 1 %.


### 2

Ranson 3 bis 4: schwere Pankreatitis

Mortalität von etwa 15 %; engmaschige Überwachung.


### 3

Ranson ≥ 7: sehr schwere Pankreatitis

Mortalität in der Originalserie nahe 100 %; Intensivstation.

