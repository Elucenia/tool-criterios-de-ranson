<!-- ELUCENIA technical documentation · criterios-de-ranson · it · no clinical/professional/rights approval -->

# Criteri di Ranson

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/criterios-de-ranson)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Ammissione: età \> 55 anni (biliare: \> 70)

`idade`

### Ammissione: leucociti \> 16.000/mm³ (biliare: \> 18.000)

`leuco`

### Ammissione: glicemia \> 200 mg/dL (biliare: \> 220)

`glic`

### Ammissione: LDH \> 350 U/L (biliare: \> 400)

`ldh`

### Ammissione: AST \> 250 U/L

`ast`

### 48 h: calo dell’ematocrito \> 10 punti percentuali

`ht`

### 48 h: aumento del BUN \> 5 mg/dL, urea \> 10,7 mg/dL (biliare: BUN \> 2, urea \> 4,3)

`bun`

### 48 h: calcio \< 8 mg/dL

`ca`

### 48 h: PaO₂ \< 60 mmHg (non si applica all’eziologia biliare)

`pao2`

### 48 h: deficit di basi \> 4 mEq/L (biliare: \> 5)

`be`

### 48 h: sequestro di liquidi \> 6 L (biliare: \> 4 L)

`seq`

## Edizione del metodo

Ranson 1974 non biliare e Ranson 1982 biliare; ingresso+48 h; soglie per eziologia

## Formula documentata

Un punto per criterio: 5 all’ingresso e 6 nelle prime 48 ore. Totale 0–11 (biliare 0–10, senza PaO₂).

I valori tra parentesi sono le soglie biliari (Ranson 1982).

## Limiti e popolazione

I criteri di Ranson combinano i dati all’ingresso con quelli a 48 ore; criteri e soglie differiscono fra pancreatite biliare e non biliare. Non trattare elementi non ancora osservati come assenti né un totale parziale come valutazione completa. La linea guida ACG 2024 sottolinea che sistemi come Ranson non predicono accuratamente l’evoluzione grave nelle prime 24–48 ore e non sostituiscono la rivalutazione dell’insufficienza d’organo e dei segni clinici. Il monitoraggio e il supporto iniziale non devono attendere il completamento del punteggio.

## Riferimenti

- [Ranson JH et al. Prognostic signs and the role of operative management in acute pancreatitis. Surg Gynecol Obstet, 1974. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/4834279/)

- [Ranson JH. Etiological and prognostic factors in human acute pancreatitis: a review. Am J Gastroenterol, 1982. (PubMed)](https://pubmed.ncbi.nlm.nih.gov/7051819/)

- [Tenner S et al. American College of Gastroenterology guideline: management of acute pancreatitis. Am J Gastroenterol, 2013.](https://doi.org/10.1038/ajg.2013.218)

- [ACG2024,original guideline hosted by review-course mirror](https://www.giboardreview.com/wp-content/uploads/2024/04/ACG-guideline-acute-pancreatitis-Mch-2024.pdf)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Ranson 0 a 2: pancreatite lieve probabile

Mortalità intorno all’1% nella serie originale.


### 2

Ranson 3 a 4: pancreatite grave

Mortalità intorno al 15%; monitoraggio intensivo.


### 3

Ranson ≥ 7: pancreatite molto grave

Mortalità vicina al 100% nella serie originale; terapia intensiva.

